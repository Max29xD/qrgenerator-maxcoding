/** @type {import('next').NextConfig} */
const million = require(million);

const nextConfig = {}

const millionConfig = {
  auto: true,
  auto: { rsc: true }
}

module.exports = million.next(nextConfig, millionConfig)
