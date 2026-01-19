# Deployment Guide - Vercel

## Overview
This application is a frontend-only email signature generator that uses localStorage for data persistence. It's optimized for deployment on Vercel.

## Architecture
- **Framework**: React + Vite
- **Storage**: localStorage (no backend required)
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel + GitHub

## Prerequisites
1. GitHub account with repository access
2. Vercel account (free tier is sufficient)

## Deployment Steps

### 1. GitHub Setup
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Email Signature Generator"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### 2. Vercel Deployment

#### Option A: Import from GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Configuration

### Build Settings (Auto-detected)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
No environment variables required - this is a frontend-only application.

## Post-Deployment

### Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Admin Password
The admin panel password is hardcoded as "eXplorance". To change it:
1. Update `/src/app/components/PasswordProtection.tsx`
2. Commit and push changes
3. Vercel will auto-deploy

## Continuous Deployment

Once connected to GitHub, Vercel automatically:
- Deploys on every push to main branch
- Creates preview deployments for pull requests
- Provides deployment URLs for each commit

## Monitoring

Access deployment logs and analytics:
1. Go to Vercel dashboard
2. Select your project
3. View deployments, analytics, and logs

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### 404 Errors on Routes
- Already configured via `vercel.json` rewrites
- All routes redirect to index.html for SPA

### localStorage Not Persisting
- localStorage is browser-specific
- Data doesn't sync across devices
- This is expected behavior for frontend-only apps

## Performance Optimization

Already implemented:
- Static asset caching (1 year)
- Vite build optimization
- Code splitting
- Tree shaking

## Support

For Vercel-specific issues, consult:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Last Updated**: January 2026
**Application Type**: Frontend SPA
**Storage**: localStorage only
