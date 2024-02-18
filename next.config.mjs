/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-personal.vercel.app",
      },
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
      },
    ],
  },
};

export default nextConfig;
