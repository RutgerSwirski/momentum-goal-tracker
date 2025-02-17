import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["randomuser.me", "lh3.googleusercontent.com"], // Add the domain of the external images
  },
};

export default nextConfig;
