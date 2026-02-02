import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment
  output: 'export',

  // Trailing slash for static hosting compatibility
  trailingSlash: true,

  // Image optimization settings (disabled for static export)
  images: {
    unoptimized: true,
  },

  // Generate sitemap and other files
  generateBuildId: async () => {
    return 'kalnirnay-calendar-2026-v1';
  },
};

export default nextConfig;
