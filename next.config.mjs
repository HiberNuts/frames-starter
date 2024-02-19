/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/cosmiccowboys',
                destination: 'https://github.com/HiberNuts',
                permanent: false
            },
            {
                source: '/pinatacloud',
                destination: 'https://github.com/HiberNuts',
                permanent: false
            },
            {
                source: '/video',
                destination: 'https://github.com/HiberNuts',
                permanent: false
            }
        ]
    }
};

export default nextConfig;