"use client";

import { useLayoutEffect } from "react";

/**
 * On "/", browsers may restore a previous scroll offset (no hash in the URL).
 * That can make the page open mid-page (e.g. on About). When there is no
 * fragment, pin the viewport to the hero.
 */
export function HomeScrollReset() {
  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, []);

  return null;
}
