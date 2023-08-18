/** @type {import('next').NextConfig} */
const million = require('million/compiler');

const nextConfig = {
  reactStrictMode: true,
}

const millionConfig = {
  auto: true,
  auto: { rsc: true }
}

module.exports = million.next(nextConfig, millionConfig)
