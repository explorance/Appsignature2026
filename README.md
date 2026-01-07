# Email Signature Generator

A professional email signature generator for Explorance, built with React, TypeScript, and Tailwind CSS.

> **🚀 NEW:** Fully migrated to GitHub Pages! No backend required, 100% privacy-focused, free forever.
> 
> **✅ QA VERIFIED:** Zero Supabase traces in application code - [View QA Report](./QA_REPORT.md)

> **🔧 GITHUB ACTIONS FIXED:** Workflows now properly configured in `.github/workflows/`
>
> **⚠️ IMPORTANT:** If you're experiencing issues with GitHub Actions, start here: [START_HERE_GITHUB_FIX.md](./START_HERE_GITHUB_FIX.md)

## 🎯 Quick Links

- **⭐ [QA COMPLETE](./00-QA-COMPLETE.md)** - QA verification passed!
- **🚀 [READY TO DEPLOY](./READY_TO_DEPLOY.md)** - Deploy checklist
- **📊 [QA Report](./QA_REPORT.md)** - Full QA details
- **⚡ [5-Minute Setup](./QUICKSTART.md)** - Get running fast
- **🚀 [Deploy Now](./DEPLOYMENT_GUIDE.md)** - Step-by-step deployment
- **✅ [Setup Complete?](./SETUP_COMPLETE.md)** - Verify everything is ready
- **🧪 [Testing Guide](./TESTING_GUIDE.md)** - Complete testing procedures

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

## Deployment to GitHub Pages

### Prerequisites

1. Create a new GitHub repository
2. Push your code to the repository

### Setup GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. Push to the `main` branch to trigger automatic deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages

Your app will be available at: `https://[your-username].github.io/[repository-name]/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The built files will be in the `dist` directory
# Upload the contents of `dist` to your hosting provider
```

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
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **LocalStorage** - Data persistence

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Explorance Internal Use

## Support

For issues or questions, contact the development team.