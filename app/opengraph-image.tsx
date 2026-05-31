import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rain Alternative — Alternative Fashion, Edmonton";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05060c",
          backgroundImage:
            "linear-gradient(135deg, #0a1233 0%, #0a0c18 45%, #1c0b33 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 150,
            fontWeight: 800,
            letterSpacing: -4,
            textShadow:
              "0 0 50px rgba(79,134,255,0.9), 0 0 90px rgba(106,75,255,0.6)",
          }}
        >
          RAIN
        </div>
        <div
          style={{
            fontSize: 34,
            letterSpacing: 18,
            color: "#aab0c6",
            marginTop: 8,
          }}
        >
          ALTERNATIVE · EDMONTON
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#7ea6ff",
            marginTop: 28,
            letterSpacing: 2,
          }}
        >
          Alternative fashion · Local consignment · Member rewards
        </div>
      </div>
    ),
    size
  );
}
