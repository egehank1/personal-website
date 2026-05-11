import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 0%, #a855f7, #020617 55%, #020617)",
          color: "white",
          fontSize: 52,
          fontWeight: 700,
          letterSpacing: "0.08em",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        AR
      </div>
    ),
    { ...size },
  );
}
