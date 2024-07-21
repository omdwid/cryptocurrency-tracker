/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["assets.coingecko.com", "coin-images.coingecko.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.coingecko.com",
            },
        ],
        minimumCacheTTL: 24 * 60 * 60,
    },
    distDir: "dist",
};

export default nextConfig;
