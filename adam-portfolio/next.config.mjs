/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "gilbertmanor.co.uk";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
