import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["api.mapbox.com", "tiles.mapbox.com"],
  },
};

export default nextConfig;
