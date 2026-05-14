import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Allow LAN and tunnel origins to access Next dev resources (HMR, chunks).
  allowedDevOrigins: ["192.168.1.77", "localhost:3000", "fascism-bullseye-perjury.ngrok-free.dev"],
};

export default nextConfig;
