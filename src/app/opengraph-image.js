import { ImageResponse } from "next/og";

export const alt = "Mubarek Mustefa – AI-Powered Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0f172a",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, color: "#5eead4", letterSpacing: 6 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, color: "#e2e8f0", marginTop: 24 }}>
          Mubarek Mustefa
        </div>
        <div style={{ fontSize: 40, color: "#94a3b8", marginTop: 16 }}>
          AI-Powered Full-Stack Developer
        </div>
        <div style={{ fontSize: 28, color: "#64748b", marginTop: 48 }}>
          React · Node.js · AI · mubarek-codes.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
