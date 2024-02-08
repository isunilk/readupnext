/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d3bxjxywei423j.cloudfront.net',"pub-4b2bfd845f7048b9a5ad48aa25969943.r2.dev"],
    unoptimized:true
  }
}

module.exports = nextConfig

