import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===========================================
  // DEPLOYMENT MODE: Static Export
  // ===========================================
  // For static hosting (Hostinger shared, Netlify, etc.)
  // Comment out 'output' line for Node.js hosting mode
  output: 'export',

  // Trailing slash for static hosting compatibility
  // Set to false for Node.js hosting
  trailingSlash: true,

  // Image optimization (disabled for static export)
  // Set to false for Node.js hosting to enable optimization
  images: {
    unoptimized: true,
  },

  // Disable Turbopack for production builds (use webpack)
  // This ensures consistent chunk naming and no turbopack runtime
  experimental: {
    // Turbopack is only for dev, webpack for production
  },

  // Generate consistent build ID for cache management
  // Change version number when making breaking changes
  generateBuildId: async () => {
    return `kalnirnay-v${Date.now()}`;
  },

  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
