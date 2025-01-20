/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static exporting
    trailingSlash: true, // Ensures all routes have trailing slashes (important for static hosting)
    images: {
        unoptimized: true, // Needed if you're using the Next.js <Image> component with static exports
    },
};

export default nextConfig;
