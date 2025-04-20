"use client";

import { ReactLenis } from "lenis/dist/lenis-react";

export default function LenisWrapper({ children }) {
  return (
    // <ReactLenis root optons={{ lerp: 0.5, duration: 1.25, smoothWheel: true }}>
    <ReactLenis root>{children}</ReactLenis>
  );
}
