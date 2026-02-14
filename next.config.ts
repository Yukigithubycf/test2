import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: Disable image optimization if deploying to a host that doesn't support it
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
