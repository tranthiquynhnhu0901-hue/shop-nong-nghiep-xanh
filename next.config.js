/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/shop-nong-nghiep-xanh', // Bắt buộc phải có dòng này để khớp với tên repository
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;