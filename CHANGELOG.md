# Changelog

All notable changes to the Email Signature Generator project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-06

### ✨ Added

#### Core Features
- 📧 **Email Signature Generator** - Interactive form with real-time preview
- 🏢 **Office Selection** - Dropdown with configurable office locations
- 🎨 **Event Banners** - Banner selection organized by event categories
- 🌐 **Multi-language Disclaimers** - Support for French, English, or both
- 📋 **Copy to Clipboard** - One-click copy functionality
- 💾 **Download HTML** - Export signature as HTML file
- 🔗 **Clickable Links** - Logo and banner links

#### Admin Panel
- 🔒 **Password Protection** - Secure admin access (password: `eXplorance`)
- 🏢 **Office Management** - Add, edit, delete office locations
- 🎨 **Banner Categories** - Organize banners by events
- 📋 **Field Configuration** - Control field visibility and requirements
- ⚙️ **Default Values** - Configure company logo, website, and disclaimers
- 🔗 **Banner Links** - Optional clickable links for banners with badge indicator

#### Data Management
- 💾 **localStorage Integration** - Client-side data persistence
- 🔄 **Automatic Backup** - Backup before every save
- ✅ **Data Validation** - Comprehensive validation before save
- 🔐 **Auto-restore** - Restore from backup on errors
- 📤 **Export/Import** - JSON backup functionality

#### UI Components
- 🎨 **Modern Dialog** - Figma-designed confirmation dialogs
- 🔔 **Toast Notifications** - Success/Error/Warning toasts
- 🎭 **Smooth Animations** - fadeIn, slideUp, slideIn animations
- 📱 **Responsive Design** - Mobile and desktop support

#### Development
- ⚙️ **GitHub Actions Workflows** - CI/CD automation
- 🚀 **GitHub Pages Deployment** - Automated deployment workflow
- ☁️ **Azure Static Web Apps** - Azure deployment configuration
- 🧪 **CI Pipeline** - Build and test automation
- 📦 **pnpm Package Manager** - Fast, efficient dependency management

### 🛠️ Technical Stack
- React 18.3
- TypeScript
- Vite 6.3.5
- Tailwind CSS v4
- Lucide React Icons
- localStorage API

### 📦 Infrastructure
- GitHub Actions for CI/CD
- GitHub Pages ready
- Azure Static Web Apps ready
- Custom domain support

### 🔒 Security
- Client-side only (no backend)
- Password-protected admin panel
- Data stored locally in browser
- No external data transmission

---

## [Unreleased]

### 🎯 Planned Features
- [ ] Multiple signature templates
- [ ] Dark mode support
- [ ] Export to multiple formats (TXT, RTF)
- [ ] Signature history
- [ ] CSV import for bulk data
- [ ] Email client preview modes
- [ ] User authentication (optional)
- [ ] Cloud sync option

### 🐛 Known Issues
- None reported

---

## Version History

### Version Format
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality (backwards compatible)
- **PATCH** version for backwards compatible bug fixes

### Release Dates
- **1.0.0** - 2026-01-06 - Initial release

---

## Migration Guides

### From Pre-1.0 Versions
This is the initial release. No migration needed.

---

## Support

For questions or issues:
1. Check the [README.md](./README.md)
2. Review [DEPLOYMENT.md](./DEPLOYMENT.md)
3. Consult [CONTRIBUTING.md](./CONTRIBUTING.md)
4. Open a GitHub issue

---

**Maintained by the eXplorance Development Team**
