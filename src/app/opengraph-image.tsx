import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const alt = `${site.name} — portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #020617, #020617 40%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#c4b5fd",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "radial-gradient(circle at 30% 30%, #a5b4fc, #4f46e5)",
              boxShadow: "0 0 32px rgba(129, 140, 248, 0.9)",
            }}
          />
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 650,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#e5e7eb",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            {site.title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#9ca3af",
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(148, 163, 184, 0.45)",
              color: "#e5e7eb",
              fontSize: 20,
            }}
          >
            AI-forward engineering
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
