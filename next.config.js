/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_EMAIL_FROM: String(process.env.NEXT_PUBLIC_EMAIL_FROM),
    NEXT_PUBLIC_EMAIL_TO: String(process.env.NEXT_PUBLIC_EMAIL_TO),
    NEXT_ACCESS_REGION: String(process.env.NEXT_ACCESS_REGION),
    NEXT_ACCESS_KEY: String(process.env.NEXT_ACCESS_KEY),
    NEXT_ACCESS_KEY_ID: String(process.env.NEXT_ACCESS_KEY_ID),
  }
}

module.exports = nextConfig
