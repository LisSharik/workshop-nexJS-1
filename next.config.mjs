/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'img.freepik.com' },
            { protocol: 'https', hostname: 'cdn-icons-png.freepik.com' },
            { protocol: 'https', hostname: 'upload.wikimedia.org' },
            { protocol: 'https', hostname: '1000marcas.net' },
        ]
    }
};

export default nextConfig;
