/** @type {import('next').NextConfig} */
const nextConfig = {
  // Demo uses plain <img> with remote CDN URLs, so image optimization is off
  // to keep the build dependency-free and deploy clean on Vercel's free tier.
  images: { unoptimized: true },
};

export default nextConfig;
