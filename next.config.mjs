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
        hostname: "github-readme-stats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
      },
    ],
  },
  i18n: {
    locales: ["en", "es", "fr"], // Example locales: English, Spanish, French
    defaultLocale: "en", // Default locale
  },
};

export default nextConfig;
