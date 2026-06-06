import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 如果部署到 username.github.io/repo-name，取消下面这行注释并填上 repo 名称
  // basePath: "/repo-name",
  allowedDevOrigins: ["192.168.1.46", "127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
