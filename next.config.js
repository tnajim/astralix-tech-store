/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'font-src https://fonts.gstatic.com https://js.stripe.com https://m.stripe.network'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
