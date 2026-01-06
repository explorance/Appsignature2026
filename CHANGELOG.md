# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-06

### Added
- Initial release of Email Signature Generator
- User interface for generating email signatures
- Live preview of signatures
- Copy to clipboard functionality
- Download as HTML functionality
- Admin panel with password protection
- Office location management
- Banner category management with event organization
- Multi-language disclaimer support (English, French, Both)
- Form field customization
- Company logo URL configuration
- LocalStorage persistence
- Responsive design for all devices
- GitHub Pages deployment workflow
- Comprehensive documentation

### Features
- **Signature Generator**
  - Real-time preview
  - Form validation
  - Auto-save to localStorage
  - Export options (Copy/Download)
  - Banner selection by category
  - Disclaimer language options

- **Admin Panel**
  - Password protection (default: eXplorance)
  - Office management (add/edit/delete)
  - Banner categories with event names
  - Banner management per category
  - Form field visibility controls
  - Company branding settings
  - Disclaimer text editing (EN/FR)

### Technical
- React 18.3.1
- TypeScript
- Vite 6.3.5
- Tailwind CSS 4.1.12
- Radix UI components
- Lucide React icons
- LocalStorage API
- GitHub Actions deployment

### Design
- Arial font family throughout
- Precise spacing (4px, 8px intervals)
- Color scheme: #0077b5 (links), #666666 (disclaimer)
- Logo height: 36.5px
- Responsive breakpoints
- Accessible components

### Migration
- Removed Supabase backend dependency
- Converted to pure frontend application
- Implemented localStorage persistence
- Simplified deployment process
- Enhanced privacy (no data transmission)

## [Unreleased]

### Planned
- Social media icon integration
- Custom color themes
- Signature templates
- PWA support
- Import/export settings
- Additional language support
- Analytics dashboard

---

## Version History

- **1.0.0** - Initial release with full feature set
- **0.1.0** - Internal beta with Supabase backend (deprecated)

## Migration Notes

### From 0.x to 1.0
- **Breaking Change**: Supabase backend removed
- All data now stored in browser localStorage
- No migration path needed (fresh start)
- Admin password remains: `eXplorance`

### Upgrade Instructions
1. Pull latest code
2. Run `npm install`
3. Run `npm run build`
4. Deploy to GitHub Pages

---

**Note**: This project follows semantic versioning. Breaking changes will increment the major version.
