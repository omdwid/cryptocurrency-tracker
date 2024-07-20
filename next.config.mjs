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
    },
};

export default nextConfig;
