import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  // Force browsers to use your logo for /favicon.ico (many browsers hard-request this path).
  const filePath = path.join(
    process.cwd(),
    "public",
    "Cafe Coffee & Eatery Logo.png"
  );

  const bytes = await readFile(filePath);

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/png",
      // Prevent sticky caching while iterating; Vercel will still cache by deployment.
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

