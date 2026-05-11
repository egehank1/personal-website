"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; layer: 0 | 1 };

type Ripple = { cx: number; cy: number; r: number; a: number };

const MAX_LINK_DIST = 118;
const SKIP_MAX_DIST = MAX_LINK_DIST * 2.05;
/** Inner bubble: strong pull toward cursor. */
const CORE_R = 122;
/** Outer halo: gentle drift begins here (ripples / glow feel aligned). */
const HALO_R = 198;
const MAX_SPEED = 0.48;
const FORCE = 0.052;
const DAMP = 0.965;
const MAX_PARTICLES = 96;
const MIN_PARTICLES = 34;
const ATTENTION_K = 7;

function clampParticlesForArea(w: number, h: number): number {
  const area = w * h;
  const n = Math.floor(area / 11500);
  return Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, n));
}

function initParticles(w: number, h: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 0,
    vy: 0,
    layer: Math.random() < 0.42 ? 0 : 1,
  }));
}

function distPointSegment(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  const abx = x2 - x1;
  const aby = y2 - y1;
  const lab = abx * abx + aby * aby;
  if (lab < 1e-6) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * abx + (py - y1) * aby) / lab;
  t = Math.max(0, Math.min(1, t));
  const nx = x1 + t * abx;
  const ny = y1 + t * aby;
  return Math.hypot(px - nx, py - ny);
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const c = canvasEl.getContext("2d", { alpha: true });
    if (!c) return;

    const root = canvasEl.parentElement;
    if (!root) return;

    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const calm = () => motionMq.matches;

    let cancelled = false;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let time = 0;
    let moveTick = 0;
    let lastRippleMove = 0;

    const ripples: Ripple[] = [];

    let ptrActive = false;
    let ptrX = 0;
    let ptrY = 0;

    const syncSize = () => {
      const rect = (root ?? canvasEl).getBoundingClientRect();
      const nextW = Math.max(1, rect.width);
      const nextH = Math.max(1, rect.height);
      const scaleX = width > 0 ? nextW / width : 1;
      const scaleY = height > 0 ? nextH / height : 1;

      if (width > 0 && height > 0 && particles.length) {
        for (const p of particles) {
          p.x *= scaleX;
          p.y *= scaleY;
        }
      }

      width = nextW;
      height = nextH;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = Math.floor(width * dpr);
      canvasEl.height = Math.floor(height * dpr);
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = clampParticlesForArea(width, height);
      if (particles.length === 0) {
        particles = initParticles(width, height, target);
      } else if (particles.length < target) {
        const extra = target - particles.length;
        particles.push(...initParticles(width, height, extra));
      } else if (particles.length > target) {
        particles.length = target;
      }
    };

    const maxSpeed = () => (calm() ? MAX_SPEED * 0.55 : MAX_SPEED);
    const forceMul = () => (calm() ? FORCE * 0.55 : FORCE);

    const step = () => {
      const cap = maxSpeed();
      const f0 = forceMul();

      for (let r = ripples.length - 1; r >= 0; r--) {
        const rp = ripples[r];
        rp.r += calm() ? 0.85 : 1.15;
        rp.a *= calm() ? 0.96 : 0.942;
        if (rp.a < 0.028) ripples.splice(r, 1);
      }

      for (const p of particles) {
        if (ptrActive) {
          const dx = ptrX - p.x;
          const dy = ptrY - p.y;
          const d = Math.hypot(dx, dy);
          if (d >= HALO_R) {
            p.vx = 0;
            p.vy = 0;
          } else if (d < CORE_R) {
            const t = 1 - d / CORE_R;
            const falloffPull = t * t * t;
            const falloffSwirl = t * t * t * t;
            const layerScale = p.layer === 0 ? 0.68 : 1;
            const dInv = 1 / Math.max(d, 7);
            const pull = f0 * falloffPull * layerScale;
            const fx = dx * dInv * pull;
            const fy = dy * dInv * pull;
            const tx = -dy * dInv;
            const ty = dx * dInv;
            const swirl = f0 * 0.1 * falloffSwirl * layerScale;
            p.vx += fx + tx * swirl;
            p.vy += fy + ty * swirl;
          } else {
            const span = HALO_R - CORE_R;
            const u = span > 1e-6 ? 1 - (d - CORE_R) / span : 0;
            const uSoft = u * u * u;
            const layerScale = p.layer === 0 ? 0.68 : 1;
            const dInv = 1 / Math.max(d, 7);
            const gentle = f0 * 0.12 * uSoft * layerScale;
            const fx = dx * dInv * gentle;
            const fy = dy * dInv * gentle;
            const tx = -dy * dInv;
            const ty = dx * dInv;
            const swirl = f0 * 0.035 * u * u * u * u * layerScale;
            p.vx += fx + tx * swirl;
            p.vy += fy + ty * swirl;
          }
        }

        p.vx *= DAMP;
        p.vy *= DAMP;

        const sp = Math.hypot(p.vx, p.vy);
        if (sp > cap) {
          const k = cap / sp;
          p.vx *= k;
          p.vy *= k;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= width) {
          p.vx *= -0.35;
          p.x = Math.max(0, Math.min(width, p.x));
        }
        if (p.y <= 0 || p.y >= height) {
          p.vy *= -0.35;
          p.y = Math.max(0, Math.min(height, p.y));
        }
      }
    };

    const draw = () => {
      c.clearRect(0, 0, width, height);

      const n = particles.length;
      const cx = ptrActive ? ptrX : -9999;
      const cy = ptrActive ? ptrY : -9999;

      const inAttention = new Set<number>();
      let attentionOrder: number[] = [];
      if (ptrActive && n > 0) {
        attentionOrder = Array.from({ length: n }, (_, i) => i);
        attentionOrder.sort((i, j) => {
          const di = Math.hypot(particles[i].x - ptrX, particles[i].y - ptrY);
          const dj = Math.hypot(particles[j].x - ptrX, particles[j].y - ptrY);
          return di - dj;
        });
        const kCap = Math.min(ATTENTION_K, n);
        for (let k = 0; k < kCap; k++) inAttention.add(attentionOrder[k]);
      }

      for (const rp of ripples) {
        c.strokeStyle = `rgba(100, 220, 255, ${rp.a * 0.28})`;
        c.lineWidth = 0.55;
        c.beginPath();
        c.arc(rp.cx, rp.cy, rp.r, 0, Math.PI * 2);
        c.stroke();
      }

      c.setLineDash([4, 8]);
      for (let i = 0; i < n; i += 2) {
        const j = (i * 19 + (n >> 1) + 3) % n;
        if (i === j) continue;
        const a = particles[i];
        const b = particles[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_LINK_DIST * 0.92 || dist > SKIP_MAX_DIST) continue;
        const w = 1 - dist / SKIP_MAX_DIST;
        const alpha = w * w * 0.055;
        c.strokeStyle = `rgba(165, 160, 255, ${alpha})`;
        c.lineWidth = 0.45;
        c.beginPath();
        c.moveTo(a.x, a.y);
        c.lineTo(b.x, b.y);
        c.stroke();
      }
      c.setLineDash([]);

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const pa = particles[i];
          const pb = particles[j];
          const la = pa.layer;
          const lb = pb.layer;
          const ax = pa.x;
          const ay = pa.y;
          const bx = pb.x;
          const by = pb.y;
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= MAX_LINK_DIST) continue;

          const edge = 1 - dist / MAX_LINK_DIST;
          let boost = 1;
          if (ptrActive) {
            const dSeg = distPointSegment(cx, cy, ax, ay, bx, by);
            const da = Math.hypot(pa.x - cx, pa.y - cy);
            const db = Math.hypot(pb.x - cx, pb.y - cy);
            const segR = 82;
            if (dSeg < segR && Math.min(da, db) < HALO_R + 12) {
              boost += (1 - dSeg / segR) * 0.85;
            }
          }

          const cross = la !== lb;
          const backOnly = la === 0 && lb === 0;
          let baseA = edge * edge * 0.14 * boost;
          if (backOnly) baseA *= 0.52;
          if (cross) baseA *= 0.38;

          const att = inAttention.has(i) && inAttention.has(j);
          if (att && ptrActive) baseA *= 1.45;

          const hue = att && ptrActive ? "186, 240, 255" : "120, 210, 255";
          c.strokeStyle = `rgba(${hue}, ${baseA})`;
          c.lineWidth = att && ptrActive ? 0.72 : cross ? 0.42 : backOnly ? 0.4 : 0.55;

          const useCurve =
            ptrActive && att && dist < MAX_LINK_DIST * 0.88 && !calm();

          c.beginPath();
          c.moveTo(ax, ay);
          if (useCurve) {
            const mx = (ax + bx) * 0.5;
            const my = (ay + by) * 0.5;
            const inv = 1 / (dist + 1e-4);
            const px = ptrX - mx;
            const py = ptrY - my;
            const perpX = (-(by - ay) * inv) * 11;
            const perpY = ((bx - ax) * inv) * 11;
            const qx = mx + perpX + px * 0.13;
            const qy = my + perpY + py * 0.13;
            c.quadraticCurveTo(qx, qy, bx, by);
          } else {
            c.lineTo(bx, by);
          }
          c.stroke();
        }
      }

      for (let pi = 0; pi < n; pi++) {
        const p = particles[pi];
        const px = p.x;
        const py = p.y;
        let a = p.layer === 0 ? 0.2 : 0.3;
        const r = p.layer === 0 ? 1.28 : 1.62;
        if (ptrActive) {
          const d = Math.hypot(p.x - ptrX, p.y - ptrY);
          const halo = Math.max(0, 1 - d / HALO_R);
          const coreBoost = d < CORE_R ? Math.max(0, 1 - d / CORE_R) : 0;
          a += halo * (p.layer === 0 ? 0.14 : 0.22) + coreBoost * (p.layer === 0 ? 0.12 : 0.18);
        }
        if (inAttention.has(pi)) a += 0.12;
        c.fillStyle = `rgba(210, 232, 255, ${Math.min(0.95, a)})`;
        c.beginPath();
        c.arc(px, py, r, 0, Math.PI * 2);
        c.fill();
      }

      const kShow = Math.min(ATTENTION_K, attentionOrder.length);
      for (let k = 0; k < kShow; k++) {
        const idx = attentionOrder[k];
        if (!ptrActive) continue;
        const p = particles[idx];
        const px = p.x;
        const py = p.y;
        c.strokeStyle = `rgba(125, 240, 255, ${0.12 + 0.08 * Math.sin(time * 0.04 + k)})`;
        c.lineWidth = 0.5;
        c.beginPath();
        c.arc(px, py, 6 + k * 1.2, 0, Math.PI * 2);
        c.stroke();
      }

      if (ptrActive) {
        const bubbleR = HALO_R * 0.94;
        const g = c.createRadialGradient(ptrX, ptrY, 0, ptrX, ptrY, bubbleR);
        g.addColorStop(0, "rgba(56, 189, 248, 0.13)");
        g.addColorStop(0.42, "rgba(139, 92, 246, 0.055)");
        g.addColorStop(1, "rgba(0, 0, 0, 0)");
        c.fillStyle = g;
        c.fillRect(0, 0, width, height);

        if (!calm()) {
          const t = time * 0.012;
          c.save();
          c.translate(ptrX, ptrY);
          c.rotate(t);
          c.strokeStyle = "rgba(165, 243, 252, 0.3)";
          c.lineWidth = 0.75;
          c.setLineDash([3, 6]);
          c.beginPath();
          c.arc(0, 0, 22, -0.55, 1.25);
          c.stroke();
          c.setLineDash([]);
          c.restore();
        }

        const s = 10;
        c.strokeStyle = calm() ? "rgba(200, 250, 255, 0.2)" : "rgba(200, 250, 255, 0.36)";
        c.lineWidth = 0.55;
        const drawBracket = (signX: number, signY: number) => {
          c.beginPath();
          c.moveTo(ptrX + signX * s, ptrY + signY * s * 0.35);
          c.lineTo(ptrX + signX * s, ptrY + signY * s);
          c.lineTo(ptrX + signX * s * 0.35, ptrY + signY * s);
          c.stroke();
        };
        drawBracket(-1, -1);
        drawBracket(1, -1);
        drawBracket(-1, 1);
        drawBracket(1, 1);
      }
    };

    const anyMotion = () => {
      for (const p of particles) {
        if (Math.hypot(p.vx, p.vy) > 0.012) return true;
      }
      return ripples.length > 0;
    };

    const tick = () => {
      if (cancelled) return;
      if (ptrActive && !calm()) time += 1;
      moveTick += 1;
      step();
      draw();
      if (ptrActive || anyMotion()) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const ensureLoop = () => {
      if (cancelled || rafId !== 0) return;
      rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (cancelled) return;
      const r = root.getBoundingClientRect();
      const nx = e.clientX - r.left;
      const ny = e.clientY - r.top;
      const moved = Math.hypot(nx - ptrX, ny - ptrY);
      ptrX = nx;
      ptrY = ny;
      ptrActive = true;

      if (!calm() && ripples.length < 5 && moveTick - lastRippleMove > 14 && moved > 22) {
        ripples.push({ cx: ptrX, cy: ptrY, r: 5, a: 0.48 });
        lastRippleMove = moveTick;
      }

      ensureLoop();
    };

    const onPointerLeave = () => {
      ptrActive = false;
      ensureLoop();
    };

    root.addEventListener("pointermove", onPointerMove, { capture: true, passive: true });
    root.addEventListener("pointerleave", onPointerLeave, { capture: true });
    root.addEventListener("pointercancel", onPointerLeave, { capture: true });

    const ro = new ResizeObserver(() => {
      if (cancelled) return;
      syncSize();
      draw();
    });
    ro.observe(root);

    syncSize();
    draw();

    return () => {
      cancelled = true;
      root.removeEventListener("pointermove", onPointerMove, { capture: true });
      root.removeEventListener("pointerleave", onPointerLeave, { capture: true });
      root.removeEventListener("pointercancel", onPointerLeave, { capture: true });
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] h-full w-full translate-z-0"
    />
  );
}
