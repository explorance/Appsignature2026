# Email Signature Generator

A professional email signature generator for Explorance, built with React, TypeScript, and Tailwind CSS.

---

## 🚨 ERREUR 403 SUPABASE ? 

**SOLUTION IMMÉDIATE (2 minutes):**

```bash
git add .
git commit -m "fix: Remove Supabase - eliminate 403 error"
git push origin main
```

**Guides disponibles:**
- **[⚡ START_HERE_NOW.md](./START_HERE_NOW.md)** - Solution en 2 minutes (COMMENCEZ ICI)
- **[🚨 LISEZ_MOI_URGENT.md](./LISEZ_MOI_URGENT.md)** - Fix rapide en 30 secondes
- **[📊 VISUAL_FIX_403.md](./VISUAL_FIX_403.md)** - Vue d'ensemble visuelle
- **[📖 DEPLOIEMENT_SANS_ERREUR_403.md](./DEPLOIEMENT_SANS_ERREUR_403.md)** - Guide complet détaillé
- **[🔧 SUPABASE_COMPLETELY_REMOVED.md](./SUPABASE_COMPLETELY_REMOVED.md)** - Documentation technique

---

> **🚀 DEPLOYMENT:** Optimized for Vercel with GitHub integration - automatic deployments on every push!
> 
> **✅ ARCHITECTURE:** 100% frontend-only, localStorage persistence, zero backend dependencies
>
> **⚡ QUICK START:** [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md) | [GitHub Workflow](./GITHUB_VERCEL_WORKFLOW.md)

## 🚨 Problème de Déploiement?

**Erreur 403 lors du déploiement Vercel?**
- **[📖 SOLUTION RAPIDE](./LISEZ_MOI_URGENT.md)** - Fix en 30 secondes
- **[📖 GUIDE COMPLET](./DEPLOIEMENT_SANS_ERREUR_403.md)** - Solution détaillée avec explications
- **[📖 DOCUMENTATION TECHNIQUE](./SUPABASE_COMPLETELY_REMOVED.md)** - Détails complets de la solution

## 🎯 Quick Links

- **🚀 [Vercel Deployment](./VERCEL_DEPLOYMENT.md)** - Deploy to Vercel in minutes
- **🔄 [GitHub Workflow](./GITHUB_VERCEL_WORKFLOW.md)** - Git + GitHub + Vercel workflow
- **📚 [Documentation Index](./DOCUMENTATION_INDEX.md)** - Complete documentation
- **⚡ [5-Minute Setup](./QUICKSTART.md)** - Get running fast

## 📚 Documentation

**New to this project?** Start here:
- **[QUOI_FAIRE_MAINTENANT.md](./QUOI_FAIRE_MAINTENANT.md)** - ⭐ **COMMENCEZ ICI** (2 minutes pour tout régler!)
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - 📚 Index complet de la documentation
- **[START_HERE_GITHUB_FIX.md](./START_HERE_GITHUB_FIX.md)** - 🔧 **COMMENCEZ ICI** pour résoudre les problèmes GitHub
- **[00-START-HERE.md](./00-START-HERE.md)** - 📘 Navigation hub - where to go next
- **[QUICKSTART.md](./QUICKSTART.md)** - ⚡ 5-minute setup guide

**GitHub Synchronization:**
- **[GITHUB_SYNC_GUIDE.md](./GITHUB_SYNC_GUIDE.md)** - 🔄 Guide complet de synchronisation Git/GitHub
- **[FILES_TO_COMMIT.md](./FILES_TO_COMMIT.md)** - 📋 Liste des fichiers à commiter
- **[CLEANUP_STEPS.md](./CLEANUP_STEPS.md)** - 🧹 Étapes de nettoyage du repo

**Architecture & Infrastructure:**
- **[INFRASTRUCTURE.md](./INFRASTRUCTURE.md)** - 🏗️ Infrastructure details (GitHub Pages, Vite, etc.)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - 🏛️ Application architecture & design

- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Deploy to GitHub Pages
- **[Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** - Pre/post deployment tasks
- **[Contributing](./CONTRIBUTING.md)** - How to contribute
- **[Project Summary](./PROJECT_SUMMARY.md)** - Complete project overview
- **[Migration Summary](./MIGRATION_SUMMARY.md)** - Supabase to GitHub migration
- **[Changelog](./CHANGELOG.md)** - Version history

## Features

- **User-Friendly Interface**: Simple form to fill out employee details
- **Live Preview**: See your signature update in real-time
- **Multi-Language Support**: Disclaimers available in English, French, or both
- **Admin Panel**: Password-protected settings management
- **Banner Categories**: Organize event banners by categories
- **Export Options**: Copy to clipboard or download as HTML
- **Responsive Design**: Works on desktop and mobile devices
- **LocalStorage Persistence**: All settings saved locally in the browser

## Admin Features

- Manage office locations (address, phone numbers)
- Configure banner categories and upload banner images
- Set company logo URL
- Customize disclaimer text (English & French)
- Control form field visibility and requirements
- Password protected (default: `eXplorance`)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

Vercel will automatically detect the Vite configuration and deploy your app.

**For detailed instructions**: See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Automatic Deployments

Once connected:
- ✅ **Production**: Auto-deploy on push to `main` branch
- ✅ **Preview**: Auto-deploy on pull requests
- ✅ **Instant Rollback**: One-click rollback in Vercel dashboard

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── SignatureGenerator.tsx
│   │   │   ├── AdminPanel.tsx
│   │   │   └── ui/             # Reusable UI components
│   │   ├── utils/
│   │   │   └── signatureGenerator.ts
│   │   ├── types.ts
│   │   └── App.tsx
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── package.json
├── vite.config.ts
└── README.md
```

## Usage

### For Users

1. Navigate to the "Generate Signature" tab
2. Fill in your details:
   - Full Name
   - Job Title
   - Email Address
   - Office Location
   - Cell Phone (optional)
   - LinkedIn Profile (optional)
   - Select a banner (optional)
   - Choose disclaimer language
3. Preview your signature in real-time
4. Click "Copy to Clipboard" or "Download HTML"
5. Paste into your email client settings

### For Administrators

1. Navigate to the "Admin Settings" tab
2. Enter the admin password: `eXplorance`
3. Configure:
   - Office locations
   - Banner categories and images
   - Company logo URL
   - Disclaimer text (English & French)
   - Form field settings
4. Click "Save Settings"

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **LocalStorage** - Data persistence
- **Vercel** - Hosting and deployment

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Explorance Internal Use

## Support

For issues or questions, contact the development team.