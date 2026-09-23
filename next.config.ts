import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true, formats: ["image/avif", "image/webp"] },
  turbopack: { root: process.cwd() },
};
export default config;
