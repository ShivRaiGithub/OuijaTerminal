# 🚀 Deployment Guide - The Ouija Terminal

## Quick Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is using Vercel:

### **Method 1: Deploy from GitHub**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - The Ouija Terminal"
   git branch -M main
   git remote add origin https://github.com/yourusername/ouija-terminal.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your terminal is live

### **Method 2: Deploy with Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd ouija-terminal
vercel

# Follow prompts, then visit the provided URL
```

---

## Alternative Deployment Options

### **Netlify**

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Build and deploy
   npm run build
   netlify deploy --prod
   ```

### **Docker**

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t ouija-terminal .
docker run -p 3000:3000 ouija-terminal
```

### **Static Export** (if no server features needed)

Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

Then:
```bash
npm run build
# Outputs to ./out directory
# Upload ./out to any static host (GitHub Pages, S3, etc.)
```

---

## Pre-Deployment Checklist

### **Code Quality**
- [ ] No TypeScript errors (`npm run build`)
- [ ] No console errors in browser
- [ ] All commands tested
- [ ] Effects working correctly
- [ ] Mobile responsive (if needed)

### **Configuration**
- [ ] Environment variables set (if any)
- [ ] Production mode enabled
- [ ] Error boundaries tested
- [ ] 404 page works
- [ ] Favicon present

### **Performance**
- [ ] Build size optimized
- [ ] No unnecessary dependencies
- [ ] Images optimized (if any)
- [ ] Lazy loading implemented where needed

### **Security**
- [ ] No API keys in client code
- [ ] CSP headers configured (if needed)
- [ ] HTTPS enabled
- [ ] No sensitive data in localStorage

### **SEO & Metadata**
- [ ] Title tag set ("The Ouija Terminal")
- [ ] Description meta tag set
- [ ] Favicon configured
- [ ] Open Graph tags (optional)

---

## Environment Variables

This project doesn't require any environment variables by default. If you add features that need them:

Create `.env.local`:
```bash
# Example (not needed for base project)
# NEXT_PUBLIC_API_KEY=your_key_here
```

Update `.gitignore`:
```
.env*.local
```

---

## Post-Deployment Testing

### **Functionality Tests**
1. Visit deployed URL
2. Check terminal loads
3. Test each command:
   - `help`
   - `whoami`
   - `summon spirit`
   - `open portal`
   - `listen`
   - `runes`
   - `exit`
   - `about`
   - `reset`
   - `clear`

### **Performance Tests**
1. Check page load time
2. Test on different devices
3. Verify effects are smooth
4. Check localStorage works

### **Browser Compatibility**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## Monitoring & Analytics (Optional)

### **Vercel Analytics**
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### **Google Analytics** (if needed)
Add to `app/layout.tsx` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## Custom Domain Setup

### **Vercel**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
4. Wait for DNS propagation

### **Netlify**
1. Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions

---

## Troubleshooting Deployment

### **Build Fails**
```bash
# Test locally first
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Clear cache
rm -rf .next
npm run build
```

### **404 Errors**
- Check `next.config.ts` settings
- Verify routes are correct
- Check public folder structure

### **Slow Performance**
- Enable caching headers
- Optimize CSS bundle
- Check bundle size: `npm run build`

### **localStorage Not Working**
- Check browser privacy settings
- Verify HTTPS enabled
- Test in incognito mode

---

## Updating Deployment

### **Push Updates**
```bash
# Make changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel/Netlify auto-deploys
```

### **Rollback**
```bash
# Vercel
vercel rollback

# Or revert git commit
git revert HEAD
git push
```

---

## Production Optimizations

### **1. Enable Compression**
Add to `next.config.ts`:
```typescript
const nextConfig = {
  compress: true,
};
```

### **2. Cache Static Assets**
Already handled by Next.js

### **3. Minimize Bundle Size**
```bash
# Check bundle size
npm run build

# Analyze bundle
npm install --save-dev @next/bundle-analyzer
```

### **4. Add Loading States**
Consider adding a loading screen

---

## Maintenance

### **Regular Updates**
```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Test thoroughly
npm run build
npm run dev
```

### **Backup Strategy**
- Keep git repository synced
- Export localStorage schema if changed
- Document any custom configurations

---

## Support & Help

### **Resources**
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

### **Common Issues**
- Check deployment logs
- Verify build settings
- Test locally first
- Check browser console

---

## Success Metrics

After deployment, monitor:
- ✅ Page loads successfully
- ✅ All commands work
- ✅ Effects render correctly
- ✅ State persists across sessions
- ✅ No console errors
- ✅ Mobile responsive (if needed)

---

**Your terminal is ready to haunt the web. Deploy and let the spirits roam free.** 👻
