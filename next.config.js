const isGithubActions = process.env.GITHUB_PUBLIC_BASE_PATH || false;

// GITHUB_REPOSITORY is <owner>/<repo>, so we need to trim off `<owner>/`
const prefix = isGithubActions
  ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}`
  : undefined;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: prefix,
  assetPrefix: prefix,
}

module.exports = nextConfig
