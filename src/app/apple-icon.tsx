import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

function arrayBufferToBase64(buffer: ArrayBuffer) {
  return Buffer.from(buffer).toString("base64");
}

export default async function AppleIcon() {
  const logoUrl = new URL(
    "../../public/Cafe Coffee & Eatery Logo.png",
    import.meta.url
  );

  const bytes = await fetch(logoUrl).then((r) => r.arrayBuffer());
  const base64 = arrayBufferToBase64(bytes);
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img
          src={src}
          width={180}
          height={180}
          style={{ borderRadius: 40 }}
        />
      </div>
    ),
    size
  );
}

