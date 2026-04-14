import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: projectRoot,
    // Force tailwindcss to resolve from project (avoids wrong resolution from parent Inbox folder when project is in Dropbox)
    resolveAlias: {
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
    },
  },
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.roots = [projectRoot];
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
    };
    return config;
  },
};

export default nextConfig;
