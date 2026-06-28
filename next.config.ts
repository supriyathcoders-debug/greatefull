import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Explicit root — Turbopack otherwise walks up to ~/Documents when sibling projects exist */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
  // Allow LAN and tunnel origins to access Next dev resources (HMR, chunks).
  allowedDevOrigins: [
    "192.168.1.2",
    "192.168.1.5",
    "192.168.1.77",
    "localhost:3000",
    "fascism-bullseye-perjury.ngrok-free.dev",
  ],
};

export default nextConfig;
