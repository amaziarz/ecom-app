/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/products/1',
      permanent: true,
    },
    {
      source: '/products',
      destination: '/products/1',
      permanent: true,
    }
  ],
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
