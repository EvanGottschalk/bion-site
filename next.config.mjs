/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Serve the BION whitepaper PDF at /whitepaper (URL stays clean; the static
  // file lives at public/BION-Whitepaper-V1.pdf).
  async rewrites() {
    return [
      {
        source: "/whitepaper",
        destination: "/BION-Whitepaper-V1.pdf",
      },
    ]
  },
}

export default nextConfig
