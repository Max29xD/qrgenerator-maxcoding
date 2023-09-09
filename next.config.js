const million = require('million/compiler');
const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const millionConfig = {
  auto: true,
  auto: { rsc: true }
}

module.exports = million.next(nextConfig, millionConfig)
