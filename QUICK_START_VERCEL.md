# 🚀 Quick Start - Vercel Deployment

## TL;DR

```bash
# 1. Install dependencies
npm install

# 2. Test locally
npm run dev

# 3. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 4. Deploy on Vercel
# Go to vercel.com → Import GitHub repo → Click Deploy

# Done! Your app is live 🎉
```

---

## Step-by-Step (First Time)

### 1️⃣ Install Dependencies (1 minute)

```bash
npm install
```

### 2️⃣ Test Locally (2 minutes)

```bash
npm run dev
```

Open http://localhost:5173 and verify the app works.

### 3️⃣ Create GitHub Repository (3 minutes)

**Option A: GitHub Website**
1. Go to https://github.com/new
2. Repository name: `email-signature-generator` (or your choice)
3. Keep it private (recommended)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

**Option B: GitHub CLI**
```bash
gh repo create email-signature-generator --private --source=. --remote=origin
```

### 4️⃣ Push to GitHub (1 minute)

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial email signature generator"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git push -u origin main
```

### 5️⃣ Deploy on Vercel (2 minutes)

**Option A: Vercel Website** (Easiest)
1. Go to https://vercel.com/login
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Keep default settings
6. Click "Deploy"
7. Wait ~1 minute
8. 🎉 Your app is live!

**Option B: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## After First Deployment

### Making Changes

```bash
# 1. Make your changes
# Edit files...

# 2. Commit
git add .
git commit -m "feat: add new banner category"

# 3. Push
git push

# 4. Vercel auto-deploys!
# Check dashboard for deployment URL
```

### Access Your App

- **Production URL**: `your-app.vercel.app`
- **Admin Panel**: `your-app.vercel.app` → Admin Settings tab
- **Admin Password**: `eXplorance`

---

## Common Tasks

### View Deployments
```bash
vercel ls
```

### View Latest Deployment URL
```bash
vercel ls --prod
```

### Open Production in Browser
```bash
vercel open
```

### Check Deployment Logs
```bash
vercel logs
```

### Rollback Deployment
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous version
4. Click "Promote to Production"

---

## Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# Check if dist folder is created
ls dist

# If successful, push again
git push
```

### Can't Push to GitHub
```bash
# Check remote URL
git remote -v

# Update if wrong
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Try push again
git push
```

### Vercel Not Deploying
1. Check Vercel dashboard for build logs
2. Verify GitHub integration is connected
3. Check if repository branch is correct (should be `main`)

---

## Environment Setup

### Required Software
- ✅ Node.js 18+ ([download](https://nodejs.org))
- ✅ Git ([download](https://git-scm.com))
- ✅ GitHub account ([signup](https://github.com/signup))
- ✅ Vercel account ([signup](https://vercel.com/signup))

### Verify Installation
```bash
node --version    # Should show v18+
npm --version     # Should show 9+
git --version     # Should show 2+
```

---

## Project Structure

```
your-app/
├── src/                      # Source code
│   ├── app/
│   │   ├── App.tsx          # Main component
│   │   ├── components/      # React components
│   │   └── utils/           # Utility functions
│   └── styles/              # CSS files
├── public/                   # Static assets
├── dist/                     # Build output (git ignored)
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── vercel.json              # Vercel configuration
└── README.md                # Documentation
```

---

## Features Available

### User Features
- ✅ Generate email signatures
- ✅ Live preview
- ✅ Copy to clipboard
- ✅ Download as HTML
- ✅ Multi-language disclaimers
- ✅ Banner selection

### Admin Features (Password: `eXplorance`)
- ✅ Manage office locations
- ✅ Configure banner categories
- ✅ Set company logo
- ✅ Customize disclaimers
- ✅ Control form fields

---

## Configuration

### Admin Password
Location: `/src/app/components/PasswordProtection.tsx`

To change:
1. Edit the file
2. Change the password value
3. Commit and push
4. Vercel auto-deploys

### Company Logo
1. Go to Admin Settings
2. Enter new logo URL
3. Save Settings
4. Logo updates immediately

### Disclaimers
1. Go to Admin Settings
2. Edit English/French text
3. Save Settings
4. Available in signature generator

---

## Next Steps

### Recommended
- [ ] ⭐ Add custom domain in Vercel
- [ ] 📊 Enable Vercel analytics
- [ ] 🔔 Configure deployment notifications
- [ ] 📝 Customize admin password
- [ ] 🎨 Add company logo URL

### Optional
- [ ] Set up staging environment
- [ ] Add team members to Vercel project
- [ ] Configure branch protection on GitHub
- [ ] Enable Vercel deployment protection

---

## Getting Help

### Documentation
- 📖 [Full Deployment Guide](./VERCEL_DEPLOYMENT.md)
- 📖 [GitHub Workflow](./GITHUB_VERCEL_WORKFLOW.md)
- 📖 [Infrastructure Details](./INFRASTRUCTURE_CLEANUP.md)

### Support
- 🌐 [Vercel Docs](https://vercel.com/docs)
- 🌐 [Vite Docs](https://vitejs.dev)
- 💬 [GitHub Issues](https://github.com/YOUR_USERNAME/YOUR_REPO/issues)

---

## Success Checklist

After completing this guide:
- ✅ App runs locally (`npm run dev`)
- ✅ Code pushed to GitHub
- ✅ Deployed on Vercel
- ✅ Production URL accessible
- ✅ Admin panel works (password: `eXplorance`)
- ✅ Signatures generate correctly
- ✅ Copy/download functions work

---

**Total Time**: ~10 minutes  
**Difficulty**: Beginner-friendly  
**Cost**: $0 (Free tier)

🎉 **Congratulations! Your app is live on Vercel!**
