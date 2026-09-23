import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  images: { formats: ["image/avif", "image/webp"] },
  turbopack: { root: process.cwd() },
};
export default config;
