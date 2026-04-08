import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/Cafe%20Coffee%20%26%20Eatery%20Logo.png",
      },
    ];
  },
};

export default nextConfig;
