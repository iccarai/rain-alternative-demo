import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060c",
          color: "#7ea6ff",
          fontSize: 46,
          fontWeight: 800,
          fontFamily: "sans-serif",
          textShadow: "0 0 14px #4f86ff",
          borderRadius: 14,
        }}
      >
        R
      </div>
    ),
    size
  );
}
