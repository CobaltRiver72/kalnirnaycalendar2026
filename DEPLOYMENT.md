# Kalnirnay Calendar 2026 - Deployment Guide

This document describes two supported deployment modes for the Kalnirnay Calendar 2026 website.

---

## Mode 1: Static Hosting (Recommended for Hostinger Shared/Static)

Best for: Hostinger shared hosting, Netlify, Vercel (static), GitHub Pages, Cloudflare Pages

### Prerequisites
- Node.js 18+ installed locally
- npm or yarn

### Build Commands

```bash
# Clean previous builds and build static export
npm run build:static

# Output will be in /out directory
# Upload contents of /out to your static hosting
```

### What Gets Generated
- `/out/` - Complete static site
- `/out/_next/static/` - All JS/CSS chunks
- `/out/sitemap.xml` - Sitemap
- `/out/robots.txt` - Robots file

### Hostinger Static Deployment Steps

1. **Build locally:**
   ```bash
   npm run build:static
   ```

2. **Upload to Hostinger:**
   - Go to Hostinger File Manager
   - Navigate to `public_html`
   - Delete old files (especially `_next` folder)
   - Upload entire contents of `/out` folder

3. **Purge CDN cache (if using Cloudflare):**
   ```bash
   # Purge everything or specifically:
   # - /_next/static/*
   # - /index.html
   ```

### .htaccess for Apache (Hostinger Shared)

Create `.htaccess` in `public_html`:

```apache
# Enable rewrite engine
RewriteEngine On

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ /$1/ [L,R=301]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json
</IfModule>
```

---

## Mode 2: Node.js Hosting (Hostinger VPS/Cloud)

Best for: Hostinger VPS, Cloud hosting, Docker, any Node.js server

### Prerequisites
- Node.js 18+ on server
- PM2 for process management
- Nginx as reverse proxy

### Configuration Changes

To switch to Node mode, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // Remove or comment out for Node mode:
  // output: 'export',
  
  trailingSlash: false, // Not needed for Node mode
  
  images: {
    // Can enable optimization in Node mode
    unoptimized: false,
  },
};
```

### Build & Start Commands

```bash
# Build for production
npm run build:node

# Start production server
npm run start:prod

# Or with PM2
pm2 start ecosystem.config.js
```

### PM2 Configuration (ecosystem.config.js)

```javascript
module.exports = {
  apps: [{
    name: 'kalnirnay-calendar-2026',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name kalnirnaycalendar2026.online www.kalnirnaycalendar2026.online;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name kalnirnaycalendar2026.online www.kalnirnaycalendar2026.online;

    # SSL certificates (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/kalnirnaycalendar2026.online/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kalnirnaycalendar2026.online/privkey.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Static assets - cache aggressively
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # All other requests
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Troubleshooting

### 500 Errors on /_next/static Assets

**Cause:** Old chunks from previous build still cached or chunk mismatch.

**Fix:**
1. Delete old build files completely before uploading new ones
2. Purge CDN cache
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### ChunkLoadError in Browser

**Cause:** Browser has cached old HTML referencing old chunk hashes.

**Fix:**
1. Ensure ALL files are replaced during deploy (not merged)
2. Purge CDN/edge cache
3. Add cache-busting headers for HTML files:
   ```apache
   <FilesMatch "\.html$">
       Header set Cache-Control "no-cache, no-store, must-revalidate"
   </FilesMatch>
   ```

### Turbopack Scripts in Production

**Cause:** Using `next dev` output instead of production build.

**Fix:** Always use `npm run build:static` or `npm run build:node` for production.

### Font Preload Warnings

**Cause:** Manual font preloads conflicting with next/font.

**Fix:** Use only `next/font/google` - do not add manual `<link>` tags for fonts.

---

## Deployment Checklist

- [ ] Run `npm run build:static` (or `build:node`)
- [ ] Verify build succeeds without errors
- [ ] Delete ALL old files on server (especially `_next` folder)
- [ ] Upload new build output
- [ ] Purge CDN cache if using Cloudflare
- [ ] Test site in incognito window
- [ ] Verify no console errors for chunk loading
