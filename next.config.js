/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Lệnh này giúp biến Next.js thành web tĩnh để chạy trên GitHub
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;