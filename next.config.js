import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const millionConfig = {
  auto: true,
 auto: { rsc: true },
}

export default million.next(nextConfig, millionConfig)
