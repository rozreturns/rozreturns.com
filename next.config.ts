import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Ensures all paths have a trailing slash for static exports
  images: {
    unoptimized: true, // Prevents Next.js from optimizing images (since Next.js Image Optimization doesn't work with GitHub Pages)
  },
};

export default nextConfig;
