/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
	images: {
		domains: ["res.cloudinary.com"], // Nếu dùng CDN như Cloudinary
		formats: ["image/webp"], // Ưu tiên WebP
		deviceSizes: [640, 750, 828, 1080, 1200], // Các kích thước thiết bị phổ biến
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Các kích thước ảnh
	},
};


