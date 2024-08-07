/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.shopify.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}

export default nextConfig
