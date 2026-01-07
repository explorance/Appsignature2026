# Email Signature Generator - Start Here

## 🎯 Quick Start

This is a **pure frontend** Email Signature Generator application that runs entirely in the browser using localStorage for data persistence.

### What You Have

✅ **Application Type:** Pure frontend React app  
✅ **Data Storage:** Browser localStorage (no backend needed)  
✅ **Deployment:** GitHub Pages + Azure Static Web Apps ready  
✅ **Admin Password:** `eXplorance`

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment

Your application is ready to deploy to:

### Option 1: GitHub Pages (Recommended)

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as the source
4. The workflow at `.github/workflows/deploy.yml` will automatically deploy

### Option 2: Azure Static Web Apps

1. Create an Azure Static Web App
2. Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub secrets
3. Push to GitHub - the workflow at `.github/workflows/azure-static-web-apps.yml` will deploy

### Option 3: Both Platforms

Use `.github/workflows/deploy-all.yml` to deploy to both platforms simultaneously.

---

## 📁 Key Files

### Application
- `/src/app/App.tsx` - Main application component
- `/src/app/components/SignatureGenerator.tsx` - Signature form
- `/src/app/components/AdminPanel.tsx` - Admin configuration
- `/src/app/utils/dataManager.ts` - localStorage management

### Configuration
- `/package.json` - Dependencies
- `/vite.config.ts` - Build configuration
- `/staticwebapp.config.json` - Azure configuration

### Workflows
- `/.github/workflows/deploy.yml` - GitHub Pages deployment
- `/.github/workflows/azure-static-web-apps.yml` - Azure deployment
- `/.github/workflows/deploy-all.yml` - Deploy to both platforms

---

## 🔧 Features

### User Features
- Generate professional email signatures
- Real-time preview
- Multi-language disclaimers (EN/FR/Both)
- Banner selection by category
- Copy to clipboard
- Download as HTML

### Admin Features (Password: `eXplorance`)
- Manage office locations
- Configure banner categories and events
- Upload banners per category
- Control form field visibility
- Set company logo URL
- Edit disclaimer text (EN/FR)

---

## 💾 Data Storage

All data is stored in browser localStorage:
- User settings
- Admin configuration
- Office locations
- Banner categories
- Form field settings

**Note:** Data is stored per-browser. Each user has their own local settings.

---

## 📚 Documentation

- **README.md** - Main project documentation
- **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
- **AZURE_DEPLOYMENT.md** - Azure-specific deployment guide
- **ARCHITECTURE.md** - Technical architecture
- **CONTRIBUTING.md** - How to contribute

---

## 🆘 Need Help?

### Common Issues

**Q: Where is my data stored?**  
A: All data is in browser localStorage. It's private to each browser/user.

**Q: How do I deploy?**  
A: Push to GitHub and enable GitHub Pages. See DEPLOYMENT_GUIDE.md

**Q: What's the admin password?**  
A: `eXplorance`

**Q: Can I change the admin password?**  
A: Yes, edit the password in AdminPanel.tsx

---

## ✅ Verification

### Pre-Deployment Checklist
- [ ] Code builds successfully (`npm run build`)
- [ ] No errors in console
- [ ] Admin panel accessible with password
- [ ] Signature generation works
- [ ] Copy/download features work
- [ ] All workflows are in `.github/workflows/`

### Post-Deployment Checklist
- [ ] Application loads correctly
- [ ] No 404 errors
- [ ] Admin panel works
- [ ] localStorage persists data

---

## 🎉 Ready to Deploy!

Your application is **100% ready** for deployment:

```bash
# 1. Commit your changes
git add .
git commit -m "Ready to deploy"

# 2. Push to GitHub
git push origin main

# 3. Enable GitHub Pages
# Go to: Repository Settings → Pages → Source: GitHub Actions

# 4. Done!
# Your app will be live at: https://username.github.io/repository/
```

---

**Version:** 1.0.0  
**Last Updated:** January 7, 2026  
**Status:** ✅ Production Ready
