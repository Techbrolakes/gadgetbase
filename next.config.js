/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 's3.amazonaws.com'],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
