import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

function bufferToBase64(buffer: Buffer) {
  return buffer.toString("base64");
}

export default async function Icon() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "Cafe Coffee & Eatery Logo.png",
  );
  const bytes = await readFile(logoPath);
  const base64 = bufferToBase64(bytes);
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
          width={64}
          height={64}
          style={{ borderRadius: 16 }}
        />
      </div>
    ),
    size
  );
}

