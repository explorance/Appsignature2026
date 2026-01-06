# Quick Start Guide

Get your Email Signature Generator up and running in 5 minutes!

## 🚀 Fast Track Deployment

### Option 1: GitHub Pages (Recommended)

```bash
# 1. Clone or download this repository
git clone https://github.com/YOUR-USERNAME/email-signature-generator.git
cd email-signature-generator

# 2. Install dependencies
npm install

# 3. Test locally (optional)
npm run dev
# Open http://localhost:5173 in your browser

# 4. Create GitHub repository and push
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main

# 5. Enable GitHub Pages
# Go to: Settings → Pages → Source: GitHub Actions
```

**Done!** Your app will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Option 2: Local Development Only

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

## 📝 First Time Setup

### Default Admin Password
```
eXplorance
```

### Default Configuration

The app comes pre-configured with:
- ✅ Montréal office (default)
- ✅ New York office
- ✅ Explorance World 2026 banners
- ✅ English & French disclaimers
- ✅ Company logo and website

### Customize Settings

1. Open the app
2. Click **Admin Settings**
3. Enter password: `eXplorance`
4. Modify:
   - Office locations
   - Banner categories
   - Disclaimer text
   - Form fields
   - Company logo URL

## 🎯 Usage

### Generate Your Signature

1. Click **Generate Signature**
2. Fill in your details
3. Choose office location
4. Select banner (optional)
5. Pick disclaimer language
6. Click **Copy to Clipboard**
7. Paste into email client

### Supported Email Clients

- ✅ Outlook (Desktop & Web)
- ✅ Gmail
- ✅ Apple Mail
- ✅ Thunderbird
- ✅ Most modern email clients

## 🔧 Troubleshooting

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Change port in vite.config.ts or kill the process
lsof -ti:5173 | xargs kill -9
```

### GitHub Pages 404

Update `vite.config.ts`:
```typescript
base: '/YOUR-REPO-NAME/'
```

## 📦 What's Included

- ✅ React 18 + TypeScript
- ✅ Tailwind CSS v4
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Copy to clipboard
- ✅ HTML export
- ✅ LocalStorage persistence
- ✅ Admin panel
- ✅ Password protection
- ✅ Multi-language support

## 🌐 Deploy Anywhere

The built app is just static HTML/CSS/JS. Deploy to:

- GitHub Pages ⭐ (Free, easy)
- Netlify (1 click deploy)
- Vercel (Auto-deploy from Git)
- Cloudflare Pages (Fast CDN)
- Any static hosting service

## 📚 Learn More

- [Full README](./README.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 Need Help?

1. Check the console for errors (F12)
2. Review the deployment logs
3. Verify all files are committed
4. Try clearing browser cache

---

**Happy Signing!** ✉️
