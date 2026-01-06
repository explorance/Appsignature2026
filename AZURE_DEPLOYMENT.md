# 🔷 Azure Deployment Guide

**Version:** 1.0.0  
**Last Updated:** January 6, 2026  
**Platform:** Azure Static Web Apps

---

## 📋 Overview

This guide covers deploying your Email Signature Generator to **Azure Static Web Apps**, Microsoft's hosting platform for static sites.

---

## 🎯 What is Azure Static Web Apps?

Azure Static Web Apps is a service that automatically builds and deploys full-stack web apps to Azure from a code repository.

**Features:**
- ✅ Free tier available
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Custom domains
- ✅ CI/CD integration
- ✅ GitHub/Azure DevOps integration
- ✅ Staging environments from PRs

**Cost:**
- Free tier: $0/month (100GB bandwidth, custom domain, SSL)
- Standard tier: $9/month (unlimited bandwidth, SLA)

---

## 🚀 Quick Start (GitHub Actions)

### Prerequisites

1. Azure account ([Create free account](https://azure.microsoft.com/free/))
2. GitHub repository with your code
3. Azure CLI installed (optional)

### Step 1: Create Azure Static Web App

#### Option A: Azure Portal (GUI)

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"**
3. Search for **"Static Web App"**
4. Click **"Create"**

**Configuration:**
```
Subscription: [Your subscription]
Resource Group: [Create new] "email-signature-rg"
Name: "email-signature-generator"
Plan type: Free
Region: [Choose closest to users]
```

**Deployment Details:**
```
Source: GitHub
GitHub account: [Authorize GitHub]
Organization: [Your GitHub username]
Repository: [Your repository name]
Branch: main
Build Presets: Custom
App location: /
Api location: [leave empty]
Output location: dist
```

5. Click **"Review + create"**
6. Click **"Create"**

**What happens:**
- Azure creates the Static Web App
- Automatically creates GitHub secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- Adds workflow file to your repo (we already have it!)

#### Option B: Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create \
  --name email-signature-rg \
  --location eastus

# Create static web app
az staticwebapp create \
  --name email-signature-generator \
  --resource-group email-signature-rg \
  --source https://github.com/YOUR-USERNAME/YOUR-REPO \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Step 2: Get Deployment Token

**From Azure Portal:**
1. Go to your Static Web App resource
2. Click **"Manage deployment token"**
3. Copy the token

**From Azure CLI:**
```bash
az staticwebapp secrets list \
  --name email-signature-generator \
  --resource-group email-signature-rg
```

### Step 3: Add Secret to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Value: [Paste the token from Azure]
6. Click **"Add secret"**

### Step 4: Deploy

The workflow file is already created: `/.github/workflows/azure-static-web-apps.yml`

**To deploy:**
```bash
git add .
git commit -m "Deploy to Azure Static Web Apps"
git push origin main
```

**Deployment happens automatically!**

### Step 5: Access Your App

1. Go to Azure Portal → Your Static Web App
2. Find the **URL** in the Overview page
3. Format: `https://[random-name].azurestaticapps.net`

**Example:** `https://wonderful-plant-0a1b2c3d4.azurestaticapps.net`

---

## 🔧 Configuration Files

### 1. `staticwebapp.config.json`

This file configures Azure Static Web Apps routing and behavior.

**Location:** `/staticwebapp.config.json` ✅ Already created!

```json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

**What it does:**
- ✅ Enables client-side routing (React Router support)
- ✅ Serves index.html for all routes
- ✅ Configures caching headers
- ✅ Sets MIME types

### 2. `.github/workflows/azure-static-web-apps.yml`

GitHub Actions workflow for automatic deployment.

**Location:** `/.github/workflows/azure-static-web-apps.yml` ✅ Already created!

**Features:**
- ✅ Triggers on push to main
- ✅ Builds with Node.js 20
- ✅ Deploys to Azure
- ✅ Creates preview environments for PRs

### 3. `azure-pipelines.yml`

Alternative: Azure DevOps pipeline (if not using GitHub Actions).

**Location:** `/azure-pipelines.yml` ✅ Already created!

**Use this if:**
- You prefer Azure DevOps over GitHub Actions
- You want Azure-native CI/CD
- You need integration with other Azure services

---

## 🌐 Custom Domain Setup

### Step 1: Add Custom Domain to Azure

1. Go to your Static Web App in Azure Portal
2. Click **"Custom domains"** in the left menu
3. Click **"+ Add"**
4. Enter your domain (e.g., `signatures.explorance.com`)

### Step 2: Configure DNS

Azure will provide DNS records to add:

**Option A: CNAME (Recommended)**
```
Type: CNAME
Name: signatures (or @)
Value: wonderful-plant-0a1b2c3d4.azurestaticapps.net
TTL: 3600
```

**Option B: ALIAS (Apex domain)**
```
Type: ALIAS (or ANAME)
Name: @
Value: wonderful-plant-0a1b2c3d4.azurestaticapps.net
TTL: 3600
```

### Step 3: Validation

1. Add the DNS records to your domain provider
2. Wait for DNS propagation (5 minutes - 48 hours)
3. Azure will automatically validate and provision SSL

**SSL Certificate:**
- ✅ Automatically generated
- ✅ Free Let's Encrypt certificate
- ✅ Auto-renewal

---

## 🔄 Deployment Workflow

### Automatic Deployment (GitHub Actions)

```
Developer              GitHub              Azure
    |                     |                   |
    |-- git push main --> |                   |
    |                     |-- trigger workflow|
    |                     |                   |
    |                     |-- build app       |
    |                     |                   |
    |                     |-- deploy -------> |
    |                     |                   |-- provision
    |                     |                   |-- serve
    |<------------------ LIVE ---------------<|
```

**Timeline:**
```
0:00 - Push to GitHub
0:10 - Workflow starts
0:30 - Dependencies installed
1:00 - Build complete
1:30 - Deploying to Azure
2:30 - LIVE ✅
```

### Preview Deployments

**Pull Request Environments:**
- Each PR gets a unique staging URL
- Automatically created on PR open
- Automatically deleted on PR close
- Perfect for testing before merge

**Example:**
```
Main: https://wonderful-plant-0a1b2c3d4.azurestaticapps.net
PR #5: https://wonderful-plant-0a1b2c3d4-5.azurestaticapps.net
PR #12: https://wonderful-plant-0a1b2c3d4-12.azurestaticapps.net
```

---

## 📊 Azure vs GitHub Pages

### Comparison

| Feature | Azure Static Web Apps | GitHub Pages |
|---------|----------------------|--------------|
| **Cost (Free Tier)** | $0/month (100GB bandwidth) | $0/month (unlimited*) |
| **Custom Domain** | ✅ Yes + Free SSL | ✅ Yes + Free SSL |
| **Build Minutes** | 400 min/month (free tier) | Unlimited |
| **Global CDN** | ✅ Azure CDN | ✅ GitHub CDN |
| **Preview Environments** | ✅ PR staging | ❌ No |
| **SLA** | Standard tier only | No SLA |
| **Enterprise Features** | ✅ RBAC, Auth | ❌ No |
| **Ease of Setup** | Medium | Easy |

*Subject to fair use policy

### When to Use Azure

**Choose Azure Static Web Apps if:**
- ✅ You're already using Azure
- ✅ You need preview environments
- ✅ You want enterprise authentication
- ✅ You need guaranteed SLA
- ✅ You prefer Microsoft ecosystem

### When to Use GitHub Pages

**Choose GitHub Pages if:**
- ✅ You want simplest setup
- ✅ You don't need preview envs
- ✅ You want truly unlimited hosting
- ✅ You prefer GitHub ecosystem
- ✅ You want zero configuration

---

## 🔒 Security Configuration

### Environment Variables

Azure Static Web Apps supports environment variables (though this app doesn't need them).

**To add (if needed):**
1. Azure Portal → Your Static Web App
2. **Configuration** → **Application settings**
3. Add key-value pairs

**Access in code:**
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

### Authentication (Optional)

Azure Static Web Apps has built-in authentication.

**To enable:**
1. Add `staticwebapp.config.json` routes:
```json
{
  "routes": [
    {
      "route": "/admin/*",
      "allowedRoles": ["authenticated"]
    }
  ]
}
```

2. Users can login with:
   - Azure Active Directory
   - GitHub
   - Twitter
   - Google

**Note:** Not needed for this app (we use client-side password).

---

## 🧪 Testing Deployment

### Local Testing

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Build the app
npm run build

# Run locally (simulates Azure)
swa start dist

# Access at http://localhost:4280
```

### Production Testing

After deployment:

1. ✅ **Load Test** - Visit your Azure URL
2. ✅ **Feature Test** - Test all features
3. ✅ **Mobile Test** - Test on mobile devices
4. ✅ **Custom Domain Test** - If configured
5. ✅ **SSL Test** - Verify HTTPS works

---

## 🐛 Troubleshooting

### Deployment Fails

**Check:**
1. Workflow file exists: `.github/workflows/azure-static-web-apps.yml`
2. Secret exists: `AZURE_STATIC_WEB_APPS_API_TOKEN`
3. Build succeeds locally: `npm run build`
4. Output location is correct: `dist`

**View Logs:**
- GitHub: Actions tab → Your workflow run
- Azure: Static Web App → Deployment History

**Common Issues:**
See **[AZURE_TROUBLESHOOTING.md](./AZURE_TROUBLESHOOTING.md)** for detailed solutions to:
- Git extraheader errors ✅ FIXED
- Invalid token errors
- 404 errors on routes
- Workflow not triggering
- Build failures
- And more...

---

## 💰 Cost Breakdown

### Free Tier
```
Bandwidth: 100 GB/month
Build minutes: 400 min/month
Custom domains: Unlimited
SSL certificates: Free
API endpoints: Not used
Authentication: Free
Preview environments: 3 per subscription

Total: $0/month
```

**Free Tier Limits:**
- If you exceed 100GB bandwidth → Upgrade to Standard
- If you exceed 400 build minutes → Upgrade to Standard

### Standard Tier ($9/month)
```
Bandwidth: Unlimited
Build minutes: Unlimited
Custom domains: Unlimited
SSL certificates: Free
SLA: 99.95%
Support: Azure support

Total: $9/month
```

### Estimating Your Usage

**Typical Email Signature Generator:**
```
Average page size: ~500KB
Monthly users: 50
Pages per user: 3
Bandwidth: 50 × 3 × 0.5MB = 75MB/month

✅ Easily within free tier!
```

---

## 📚 Additional Resources

### Documentation
- [Azure Static Web Apps Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [Configuration Reference](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration)
- [GitHub Actions Integration](https://learn.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow)

### Tools
- [Azure Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/)
- [Azure Portal](https://portal.azure.com)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)

### Support
- [Stack Overflow - Azure](https://stackoverflow.com/questions/tagged/azure-static-web-apps)
- [Azure Community](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/bg-p/AppsonAzureBlog)
- [GitHub Issues](https://github.com/Azure/static-web-apps/issues)

---

## ✅ Deployment Checklist

### Before Deployment
- [ ] Azure account created
- [ ] Static Web App created in Azure
- [ ] Deployment token copied
- [ ] GitHub secret added
- [ ] Workflow file exists
- [ ] Config file exists
- [ ] Local build succeeds

### Deployment
- [ ] Code committed to git
- [ ] Pushed to GitHub main branch
- [ ] Workflow triggered
- [ ] Build succeeded
- [ ] Deployment succeeded

### After Deployment
- [ ] Site accessible at Azure URL
- [ ] All features working
- [ ] LocalStorage persisting
- [ ] Admin panel accessible
- [ ] Signatures generating correctly
- [ ] Copy/download working

### Optional
- [ ] Custom domain configured
- [ ] DNS records added
- [ ] SSL certificate provisioned
- [ ] Domain accessible
- [ ] Monitoring configured

---

## 🔄 Migration from GitHub Pages

If you're currently on GitHub Pages and want to move to Azure:

### Option 1: Dual Deployment (Recommended)

Keep both! Deploy to both platforms:
- GitHub Pages: `/.github/workflows/deploy.yml`
- Azure: `/.github/workflows/azure-static-web-apps.yml`

Both workflows run independently.

### Option 2: Azure Only

1. Disable GitHub Pages:
   - Repo Settings → Pages → Source: None
2. Delete (or disable) `.github/workflows/deploy.yml`
3. Keep only Azure workflow

### Option 3: GitHub Pages Only

1. Delete `.github/workflows/azure-static-web-apps.yml`
2. Keep GitHub Pages workflow
3. Delete Azure resources (if created)

---

## 🎯 Summary

**You now have:**
- ✅ `staticwebapp.config.json` - Azure configuration
- ✅ `.github/workflows/azure-static-web-apps.yml` - GitHub Actions workflow
- ✅ `azure-pipelines.yml` - Azure DevOps alternative
- ✅ This deployment guide

**To deploy:**
1. Create Azure Static Web App (Portal or CLI)
2. Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub secrets
3. Push to GitHub
4. App automatically deploys!

**Your app will be live at:** `https://[name].azurestaticapps.net`

---

**Platform:** ✅ Azure Static Web Apps  
**Cost:** 💰 $0/month (Free tier)  
**Setup Time:** ⏱️ ~10 minutes  
**Deployment Time:** 🚀 ~2-3 minutes  
**Status:** ✅ Ready to deploy!

---

**End of Azure Deployment Guide**