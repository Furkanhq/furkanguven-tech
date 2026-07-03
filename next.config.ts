import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.furkanguven.tech" }],
        destination: "https://furkanguven.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
