# 🔌 Backend Setup Guide - GitHub & Azure Connections

**Version:** 1.0.0  
**Last Updated:** January 6, 2026  
**Status:** ✅ All Files Created - Ready for Configuration

---

## 📋 Overview

This guide walks you through setting up all the backend connections needed to deploy your Email Signature Generator to both **GitHub Pages** and **Azure Static Web Apps**.

**What You'll Set Up:**
- ✅ GitHub Repository connection
- ✅ GitHub Pages deployment
- ✅ GitHub Actions workflows
- ✅ Azure Static Web Apps connection
- ✅ Azure deployment token
- ✅ Automated CI/CD pipeline

---

## 🎯 Prerequisites

Before starting, ensure you have:

- [ ] GitHub account ([Sign up](https://github.com/signup))
- [ ] Azure account ([Create free account](https://azure.microsoft.com/free/))
- [ ] Git installed locally ([Download](https://git-scm.com/downloads))
- [ ] Project code on your local machine
- [ ] Node.js 20+ installed ([Download](https://nodejs.org/))

---

## 🚀 Part 1: GitHub Repository Setup

### Step 1: Create GitHub Repository

#### Option A: GitHub Web Interface

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Click the **"+"** button (top right)
   - Select **"New repository"**

2. **Repository Details:**
   ```
   Repository name: email-signature-generator
   Description: Professional email signature generator for Explorance
   Visibility: Private (recommended) or Public
   
   ❌ DO NOT check:
   - Add a README file
   - Add .gitignore
   - Choose a license
   ```

3. **Click "Create repository"**

4. **Copy the repository URL:**
   ```
   https://github.com/YOUR-USERNAME/email-signature-generator.git
   ```

#### Option B: GitHub CLI (Faster)

```bash
# Install GitHub CLI first: https://cli.github.com/

# Login to GitHub
gh auth login

# Create repository and push
gh repo create email-signature-generator --private --source=. --remote=origin

# Push code
git push -u origin main
```

### Step 2: Initialize Git (If Not Already Done)

```bash
# Navigate to your project directory
cd /path/to/your/email-signature-generator

# Initialize git (if not already initialized)
git init

# Configure git identity
git config user.name "Your Name"
git config user.email "your.email@explorance.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Email Signature Generator

- React + TypeScript application
- localStorage-based persistence
- Admin panel with password protection
- Dual language support (EN/FR)
- GitHub Pages and Azure deployment ready"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/email-signature-generator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Upload

1. Go to your repository URL
2. Verify all files are uploaded
3. Check that workflows appear in `.github/workflows/` directory

---

## 🔷 Part 2: Azure Static Web Apps Setup

### Step 1: Create Azure Account (If Needed)

1. **Visit:** [azure.microsoft.com/free](https://azure.microsoft.com/free/)
2. **Click:** "Start free"
3. **Sign in** with Microsoft account (or create one)
4. **Complete** registration (requires credit card for verification, but won't charge)

### Step 2: Create Azure Static Web App

#### Option A: Azure Portal (Recommended for First Time)

1. **Login to Azure Portal:**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your account

2. **Create Resource:**
   - Click **"Create a resource"** (top left)
   - Search for **"Static Web App"**
   - Click **"Static Web App"**
   - Click **"Create"**

3. **Basics Tab:**
   ```
   Subscription: [Your subscription]
   Resource Group: [Create new] → "email-signature-rg"
   Name: "email-signature-generator"
   Plan type: Free
   Region: East US 2 (or closest to your users)
   ```

4. **Deployment Details Tab:**
   ```
   Source: GitHub
   
   [Click "Sign in with GitHub"]
   [Authorize Azure to access GitHub]
   
   Organization: [Your GitHub username]
   Repository: email-signature-generator
   Branch: main
   
   Build Presets: Custom
   App location: /
   Api location: [leave empty]
   Output location: dist
   ```

5. **Review + Create:**
   - Click **"Review + create"**
   - Review settings
   - Click **"Create"**
   - Wait for deployment (2-3 minutes)

6. **Get Your App URL:**
   - After deployment, click **"Go to resource"**
   - Find **URL** in the Overview page
   - Example: `https://gentle-bush-0a1b2c3d4.azurestaticapps.net`
   - Save this URL!

#### Option B: Azure CLI (For Advanced Users)

```bash
# Install Azure CLI: https://aka.ms/installazurecli

# Login to Azure
az login

# Create resource group
az group create \
  --name email-signature-rg \
  --location eastus2

# Create static web app (will prompt for GitHub auth)
az staticwebapp create \
  --name email-signature-generator \
  --resource-group email-signature-rg \
  --source https://github.com/YOUR-USERNAME/email-signature-generator \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github

# Get deployment token
az staticwebapp secrets list \
  --name email-signature-generator \
  --resource-group email-signature-rg \
  --query "properties.apiKey" \
  --output tsv
```

### Step 3: Get Azure Deployment Token

#### From Azure Portal:

1. Go to your Static Web App resource
2. In left menu, click **"Overview"**
3. Click **"Manage deployment token"** (top toolbar)
4. Click **"Copy"** to copy the token
5. **Save this token securely!** (You'll need it next)

#### From Azure CLI:

```bash
az staticwebapp secrets list \
  --name email-signature-generator \
  --resource-group email-signature-rg
```

Copy the `apiKey` value.

---

## 🔑 Part 3: GitHub Secrets Configuration

GitHub Secrets store sensitive information like API tokens securely.

### Step 1: Add Azure Token to GitHub

1. **Go to your GitHub repository**
2. **Click "Settings"** (top menu)
3. **In left sidebar:**
   - Click **"Secrets and variables"**
   - Click **"Actions"**
4. **Click "New repository secret"**
5. **Add the secret:**
   ```
   Name: AZURE_STATIC_WEB_APPS_API_TOKEN
   Value: [Paste the token from Azure]
   ```
6. **Click "Add secret"**

### Step 2: Verify Secret

1. Secrets list should show: `AZURE_STATIC_WEB_APPS_API_TOKEN`
2. Green checkmark indicates it's properly added
3. Value is hidden for security

### Optional: Add Other Secrets (If Needed in Future)

```
Secret Name: SUPABASE_URL
Value: [If you add Supabase later]

Secret Name: SUPABASE_ANON_KEY
Value: [If you add Supabase later]
```

---

## ⚙️ Part 4: GitHub Pages Configuration

### Step 1: Enable GitHub Pages

1. **Go to repository Settings**
2. **In left sidebar, click "Pages"**
3. **Build and deployment:**
   ```
   Source: GitHub Actions
   ```
4. **Save** (if there's a save button)

### Step 2: Verify Configuration

GitHub Pages is now configured to use GitHub Actions for deployment (not the old Pages build system).

**Your site will be available at:**
```
https://YOUR-USERNAME.github.io/email-signature-generator/
```

**Note:** If you're using a custom domain, you can configure it here later.

---

## 🔄 Part 5: Workflow Files Configuration

All workflow files are already created in the correct location:

### Created Workflows:

```
/.github/workflows/
├── deploy.yml                    # GitHub Pages only
├── azure-static-web-apps.yml     # Azure only
└── deploy-all.yml                # Both platforms (recommended)
```

### Choose Your Deployment Strategy:

#### Option 1: Deploy to Both (Recommended)

**Use:** `deploy-all.yml`

**What it does:**
- Builds once
- Deploys to GitHub Pages
- Deploys to Azure Static Web Apps
- Efficient and fast

**To activate:**
```bash
# Keep deploy-all.yml active
# Delete or disable the others (optional)
git rm .github/workflows/deploy.yml
git rm .github/workflows/azure-static-web-apps.yml
git commit -m "Use unified deployment workflow"
git push
```

#### Option 2: Deploy to GitHub Pages Only

**Use:** `deploy.yml`

**To activate:**
```bash
# Delete Azure workflows
git rm .github/workflows/azure-static-web-apps.yml
git rm .github/workflows/deploy-all.yml
git commit -m "Use GitHub Pages deployment only"
git push
```

#### Option 3: Deploy to Azure Only

**Use:** `azure-static-web-apps.yml`

**To activate:**
```bash
# Delete GitHub Pages workflows
git rm .github/workflows/deploy.yml
git rm .github/workflows/deploy-all.yml
git commit -m "Use Azure deployment only"
git push
```

#### Option 4: Keep All (Most Flexible)

Keep all three workflows. They won't conflict, but will use more build minutes.

---

## 🧪 Part 6: Test Your Deployment

### Step 1: Trigger Deployment

```bash
# Make a small change (or use empty commit)
git commit --allow-empty -m "Test: Trigger deployment"

# Push to GitHub
git push origin main
```

### Step 2: Monitor GitHub Actions

1. **Go to your repository on GitHub**
2. **Click "Actions" tab**
3. **You should see workflow running:**
   - "Deploy to All Platforms" (if using deploy-all.yml)
   - Or individual workflows

4. **Click on the running workflow** to see details
5. **Watch the progress:**
   ```
   Build Application → Success ✅
   Deploy to GitHub Pages → Running...
   Deploy to Azure → Running...
   ```

### Step 3: Verify Deployments

#### GitHub Pages:

```
URL: https://YOUR-USERNAME.github.io/email-signature-generator/
Status: Check in Actions → deploy-github-pages job
Time: ~2-3 minutes
```

**Visit the URL and verify:**
- [ ] Site loads
- [ ] Features work
- [ ] Admin panel accessible
- [ ] Signatures generate correctly

#### Azure Static Web Apps:

```
URL: https://[your-app-name].azurestaticapps.net
Status: Check in Actions → deploy-azure job
Also check: Azure Portal → Your Static Web App → Deployment History
Time: ~2-3 minutes
```

**Visit the URL and verify:**
- [ ] Site loads
- [ ] Features work
- [ ] Admin panel accessible
- [ ] Signatures generate correctly

---

## 🐛 Troubleshooting

### Issue: Workflow Doesn't Trigger

**Check:**
```bash
# Verify workflows are in correct location
ls -la .github/workflows/

# Should see:
.github/workflows/deploy.yml
.github/workflows/azure-static-web-apps.yml
.github/workflows/deploy-all.yml
```

**If in wrong location:**
```bash
mkdir -p .github/workflows
mv workflows/*.yml .github/workflows/
rm -rf workflows/
git add .github/workflows/
git commit -m "Fix: Move workflows to correct location"
git push
```

### Issue: Azure Deployment Fails with "Invalid Token"

**Solution:**
1. Verify secret exists: GitHub → Settings → Secrets → Actions
2. Re-generate token: Azure Portal → Static Web App → Manage deployment token
3. Update secret in GitHub with new token
4. Re-run workflow

### Issue: GitHub Pages Shows 404

**Solutions:**

1. **Check Pages settings:**
   - Settings → Pages → Source: GitHub Actions

2. **Check base URL in vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/email-signature-generator/',  // Match repo name
   })
   ```

3. **Rebuild and redeploy:**
   ```bash
   npm run build
   git add vite.config.ts
   git commit -m "Fix: Update base URL for GitHub Pages"
   git push
   ```

### Issue: Build Fails

**Common causes:**

1. **Dependencies not installed:**
   ```bash
   # Fix: Ensure package-lock.json is committed
   git add package-lock.json
   git commit -m "Add package-lock.json"
   git push
   ```

2. **TypeScript errors:**
   ```bash
   # Check locally
   npm run build
   
   # Fix errors, then push
   git add .
   git commit -m "Fix: TypeScript errors"
   git push
   ```

3. **Node version mismatch:**
   - Workflows use Node 20
   - Check package.json engines field matches

**Full troubleshooting guide:** See [AZURE_TROUBLESHOOTING.md](./AZURE_TROUBLESHOOTING.md)

---

## 📊 Deployment Architecture

### Current Setup:

```
┌─────────────────────────────────────────────────────┐
│                 Your Local Machine                  │
│  - Edit code                                        │
│  - git commit                                       │
│  - git push origin main                            │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│                  GitHub Repository                  │
│  - Stores code                                      │
│  - Triggers GitHub Actions                          │
│  - Manages secrets                                  │
└──────────┬──────────────────────┬───────────────────┘
           │                      │
           ▼                      ▼
┌──────────────────────┐  ┌──────────────────────┐
│   GitHub Actions     │  │   GitHub Actions     │
│   (Build & Deploy)   │  │   (Build & Deploy)   │
│                      │  │                      │
│  1. Checkout code    │  │  1. Checkout code    │
│  2. Install deps     │  │  2. Install deps     │
│  3. Run build        │  │  3. Run build        │
│  4. Upload artifact  │  │  4. Deploy to Azure  │
│  5. Deploy to Pages  │  │                      │
└──────────┬───────────┘  └──────────┬───────────┘
           │                         │
           ▼                         ▼
┌──────────────────────┐  ┌──────────────────────┐
│   GitHub Pages       │  │  Azure Static Web    │
│   (Hosting)          │  │  Apps (Hosting)      │
│                      │  │                      │
│  URL: github.io/...  │  │  URL: *.azure...net  │
│  Cost: $0/month      │  │  Cost: $0/month      │
│  CDN: GitHub CDN     │  │  CDN: Azure CDN      │
└──────────────────────┘  └──────────────────────┘
           │                         │
           └────────┬────────────────┘
                    ▼
           ┌─────────────────┐
           │   End Users     │
           │  (Your Team)    │
           └─────────────────┘
```

---

## ✅ Configuration Checklist

### GitHub Setup
- [ ] GitHub account created
- [ ] Repository created
- [ ] Code pushed to repository
- [ ] Workflows in `.github/workflows/` directory
- [ ] GitHub Pages enabled (Source: GitHub Actions)

### Azure Setup
- [ ] Azure account created
- [ ] Static Web App created
- [ ] Deployment token generated
- [ ] Token added to GitHub Secrets
- [ ] Azure resource verified in portal

### Deployment Configuration
- [ ] Workflows committed and pushed
- [ ] At least one workflow triggered
- [ ] Build succeeded
- [ ] GitHub Pages deployment succeeded
- [ ] Azure deployment succeeded (if configured)

### Verification
- [ ] GitHub Pages URL works
- [ ] Azure URL works (if configured)
- [ ] All features functional
- [ ] Admin panel accessible
- [ ] Signatures generate correctly
- [ ] localStorage persists data

---

## 🎯 Quick Command Reference

### Initial Setup
```bash
# Create repository and push
gh repo create email-signature-generator --private --source=. --push

# Or manually:
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### Deploy Changes
```bash
# Standard workflow
git add .
git commit -m "Description of changes"
git push origin main

# Watch deployment
# Go to: https://github.com/USERNAME/REPO/actions
```

### Verify Workflows
```bash
# Check workflow files exist
ls -la .github/workflows/

# Test build locally
npm ci
npm run build
npm run preview
```

### Azure Token Management
```bash
# Get token via CLI
az staticwebapp secrets list \
  --name email-signature-generator \
  --resource-group email-signature-rg

# Regenerate token (Azure Portal)
# Portal → Static Web App → Manage deployment token → Regenerate
```

---

## 📚 Additional Resources

### Documentation
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Azure Static Web Apps Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [Project Specific Docs](./00-START-HERE.md)

### Tools
- [GitHub CLI](https://cli.github.com/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/)
- [Git Documentation](https://git-scm.com/doc)

### Troubleshooting
- [AZURE_TROUBLESHOOTING.md](./AZURE_TROUBLESHOOTING.md) - Azure issues
- [GIT_PUSH_GUIDE.md](./GIT_PUSH_GUIDE.md) - Git workflow
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - GitHub Pages issues

---

## 🎉 Success Criteria

You'll know everything is working when:

✅ **GitHub Repository:**
- Code is committed and pushed
- Workflows appear in Actions tab
- No error badges

✅ **GitHub Pages:**
- Workflow runs successfully
- Site accessible at `https://USERNAME.github.io/REPO/`
- All features work

✅ **Azure Static Web Apps:**
- Workflow runs successfully
- Site accessible at `https://APP-NAME.azurestaticapps.net`
- All features work

✅ **Continuous Deployment:**
- Push to main triggers builds
- Both platforms update automatically
- Changes appear within 2-3 minutes

---

## 🚀 You're All Set!

Backend connections are now configured and ready. Every time you push to the `main` branch, your app will automatically deploy to both platforms!

**Next steps:**
1. Push this documentation to GitHub
2. Verify deployments work
3. Share URLs with your team
4. Start using the signature generator!

---

**Status:** ✅ Configuration Complete  
**Deployment:** 🚀 Automated  
**Cost:** 💰 $0/month  
**Maintenance:** 🔧 Zero - fully automated

---

**End of Backend Setup Guide**
