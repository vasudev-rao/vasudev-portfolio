/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deploys Next.js natively — no output: "export" needed
  // (output: "export" is only for GitHub Pages / plain static hosts)

  basePath: "",

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
