/** @type {import('next').NextConfig} */
/** @type {import('million')} */

const nextConfig = {}

const millionConfig = {
  auto: true,
  auto: { rsc: true }
}

module.exports = million.next(nextConfig, millionConfig)
