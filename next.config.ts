import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        qualities: [75, 85],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flower.elevateegy.com",
                pathname: '/uploads/**',
            } as const,
        ],
    },
};

export default withNextIntl(nextConfig);