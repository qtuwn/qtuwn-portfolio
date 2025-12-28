import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Full-stack Developer • Web • Mobile • .NET • DevOps
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
