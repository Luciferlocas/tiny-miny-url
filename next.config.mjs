/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:redirect',
          destination: '/api/:redirect',
        },
      ];
    },
  };
  
  export default nextConfig;