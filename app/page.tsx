import ClientWrapper from './components/ClientWrapper'

export default function Home() {
  return <ClientWrapper />
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}