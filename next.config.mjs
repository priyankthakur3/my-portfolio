/** @type {import('next').NextConfig} */
const nextConfig = {
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
