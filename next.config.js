/** @type {import('next').NextConfig} */
/** @type {import('million/compiler')} */

const nextConfig = {
  reactStrictMode: true,
}

const millionConfig = {
  auto: true,
  auto: { rsc: true }
}

module.exports = million.next(nextConfig, millionConfig)
