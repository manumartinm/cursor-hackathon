/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Si tienes API routes en /api, Next.js las manejará automáticamente
  // Las funciones serverless en /api/*.ts seguirán funcionando con Vercel
}

module.exports = nextConfig

