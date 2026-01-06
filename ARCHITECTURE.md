# Technical Architecture

## System Overview

The Email Signature Generator is a **single-page application (SPA)** built entirely on the frontend with no backend dependencies. All data is stored locally in the browser using the Web Storage API.

```
┌─────────────────────────────────────────────────────────┐
│                    User's Browser                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐    ┌──────────────┐                  │
│  │   React UI   │───▶│  LocalStorage│                  │
│  │  Components  │◀───│     API      │                  │
│  └──────────────┘    └──────────────┘                  │
│         │                                               │
│         ▼                                               │
│  ┌──────────────┐                                       │
│  │   Generator  │                                       │
│  │    Utils     │                                       │
│  └──────────────┘                                       │
│         │                                               │
│         ▼                                               │
│  ┌──────────────┐                                       │
│  │ HTML Output  │───▶ Copy/Download                    │
│  └──────────────┘                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Technology Stack

### Core Framework
- **React 18.3.1** - UI library with concurrent features
- **TypeScript 5.x** - Type safety and developer experience
- **Vite 6.3.5** - Build tool and dev server

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **class-variance-authority** - Component variants
- **tailwind-merge** - Conditional class merging

### UI Components
- **Lucide React** - Icon library (400+ icons)
- **Custom Components** - Built on Radix primitives
  - Buttons, Inputs, Dialogs
  - Accordions, Tabs, Selects
  - Forms, Labels, Switches

### Build & Development
- **Vite** - ES modules-based build tool
- **PostCSS** - CSS transformations
- **Tailwind Vite Plugin** - Tailwind v4 integration
- **React Plugin** - Fast Refresh, JSX runtime

## Architecture Patterns

### Component Architecture

```
App.tsx (Root)
├── SignatureGenerator
│   ├── Form Component
│   │   ├── Input Fields
│   │   ├── Select Dropdowns
│   │   └── Radio Groups
│   ├── Preview Component
│   │   └── Live Signature Preview
│   └── Export Component
│       ├── Copy Button
│       └── Download Button
└── AdminPanel
    ├── Password Dialog
    ├── Office Management
    ├── Banner Management
    └── Settings Form
```

### State Management

#### Component State
```typescript
// App.tsx - Global Settings
const [settings, setSettings] = useState<AdminSettings>(DEFAULT_SETTINGS);

// SignatureGenerator.tsx - Form State
const [formData, setFormData] = useState<SignatureData>({
  fullName: "",
  jobTitle: "",
  email: "",
  // ...
});
```

#### Persistence Layer
```typescript
// Save to localStorage
useEffect(() => {
  localStorage.setItem("emailSignatureSettings", JSON.stringify(settings));
}, [settings]);

// Load from localStorage
useEffect(() => {
  const saved = localStorage.getItem("emailSignatureSettings");
  if (saved) {
    setSettings(JSON.parse(saved));
  }
}, []);
```

### Data Flow

```
User Input
    ↓
Form Update
    ↓
State Change (useState)
    ↓
React Re-render
    ↓
Preview Update
    ↓
LocalStorage Sync (useEffect)
```

## Type System

### Core Types

```typescript
// Office Location
interface Office {
  id: string;
  name: string;
  address: string;
  phone?: string;
}

// Banner
interface Banner {
  id: string;
  name: string;
  imageUrl: string;
}

// Banner Category
interface BannerCategory {
  id: string;
  eventName: string;
  banners: Banner[];
}

// Form Field Configuration
interface FieldConfig {
  visible: boolean;
  required: boolean;
  label: string;
}

// Admin Settings
interface AdminSettings {
  offices: Office[];
  bannerCategories: BannerCategory[];
  disclaimerEnglish: string;
  disclaimerFrench: string;
  companyWebsite: string;
  companyLogoUrl: string;
  fields: {
    [key: string]: FieldConfig;
  };
}

// User Signature Data
interface SignatureData {
  fullName: string;
  jobTitle: string;
  email: string;
  cellPhone: string;
  companyWebsite: string;
  linkedin: string;
  officeId: string;
  bannerId: string;
  disclaimerLanguage: "english" | "french" | "both";
}
```

## HTML Generation

### Signature Structure

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <table> <!-- Container -->
    <tr><td> <!-- Name -->
    <tr><td> <!-- Job Title -->
    <tr><td> <!-- Logo -->
    <tr><td> <!-- Address -->
    <tr><td> <!-- Phone -->
    <tr><td> <!-- Email | Website | LinkedIn -->
    <tr><td> <!-- Disclaimer -->
    <tr><td> <!-- Banner (optional) -->
  </table>
</body>
</html>
```

### Inline Styles

All styles are inlined for email client compatibility:

```typescript
style={{
  fontFamily: "Arial, sans-serif",
  fontSize: "13px",
  lineHeight: "19.5px",
  color: "#0077b5",
  textDecoration: "underline"
}}
```

## Storage Architecture

### LocalStorage Schema

```json
{
  "emailSignatureSettings": {
    "offices": [
      {
        "id": "1",
        "name": "Montréal",
        "address": "1470 Rue Peel...",
        "phone": "+1.514.938.2111"
      }
    ],
    "bannerCategories": [
      {
        "id": "1",
        "eventName": "Explorance World 2026",
        "banners": [
          {
            "id": "1-1",
            "name": "FR (1)",
            "imageUrl": "https://..."
          }
        ]
      }
    ],
    "disclaimerEnglish": "...",
    "disclaimerFrench": "...",
    "companyWebsite": "https://explorance.com",
    "companyLogoUrl": "https://...",
    "fields": {
      "fullName": {
        "visible": true,
        "required": true,
        "label": "Full Name"
      }
    }
  }
}
```

### Storage Limits

- **localStorage max**: ~5-10MB (browser-dependent)
- **Current usage**: <100KB (JSON settings)
- **Headroom**: 99% available for future growth

## Build Pipeline

### Development

```
Source Files (.tsx, .ts)
    ↓
Vite Dev Server
    ↓
Fast Refresh (HMR)
    ↓
Browser (localhost:5173)
```

### Production

```
Source Files
    ↓
TypeScript Compiler (tsc)
    ↓
Vite Build (Rollup)
    ↓
Code Splitting
    ↓
Tree Shaking
    ↓
Minification
    ↓
Asset Optimization
    ↓
dist/ folder
```

### Build Output

```
dist/
├── index.html              # Entry point
├── assets/
│   ├── index-[hash].js     # Main bundle
│   ├── index-[hash].css    # Styles
│   └── vendor-[hash].js    # Dependencies
└── vite.svg                # Favicon
```

## Deployment Architecture

### GitHub Actions Workflow

```yaml
Trigger: Push to main
    ↓
Checkout Code
    ↓
Setup Node.js 20
    ↓
npm ci (Install)
    ↓
npm run build
    ↓
Upload Artifact
    ↓
Deploy to GitHub Pages
    ↓
Live at: username.github.io/repo
```

### CDN Distribution

```
User Request
    ↓
GitHub Pages (CDN)
    ↓
Edge Server (Closest)
    ↓
Cached Static Files
    ↓
Browser
```

## Security Considerations

### Client-Side Only

- ✅ No backend = no API vulnerabilities
- ✅ No database = no SQL injection
- ✅ No server = no server exploits
- ✅ HTTPS via GitHub Pages

### Data Privacy

- ✅ No data transmission
- ✅ No cookies
- ✅ No tracking
- ✅ No analytics
- ✅ localStorage only (local to browser)

### Password Protection

- ⚠️ Simple client-side validation
- ⚠️ Password visible in source code
- ✅ Suitable for internal tools
- ❌ Not cryptographically secure

### XSS Prevention

```typescript
// Escape HTML in generated signatures
function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
```

## Performance Optimization

### Code Splitting

```typescript
// Vite automatically splits code
import AdminPanel from "./components/AdminPanel"; // Lazy loaded
```

### Tree Shaking

```typescript
// Only imports used icons
import { Copy, Download, Settings } from "lucide-react";
```

### Asset Optimization

- Minified JavaScript
- Compressed CSS
- Optimized SVG icons
- Cached static assets

### Rendering Optimization

```typescript
// Prevent unnecessary re-renders
const memoizedComponent = useMemo(() => {...}, [deps]);

// Efficient state updates
const [state, setState] = useState(initial);
```

## Browser Compatibility

### Target Browsers

- Chrome 90+ (ES2020)
- Firefox 88+ (ES2020)
- Safari 14+ (ES2020)
- Edge 90+ (ES2020)

### Polyfills

Not required - using native browser APIs:
- ES Modules
- Async/Await
- Promise
- Fetch API
- LocalStorage API
- Clipboard API

## Accessibility

### WCAG 2.1 Level AA

- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ ARIA labels
- ✅ Semantic HTML
- ✅ Color contrast (4.5:1)
- ✅ Screen reader support

### Radix UI Benefits

- Built-in accessibility
- Keyboard shortcuts
- Focus management
- ARIA attributes
- Roving tabindex

## Testing Strategy

### Manual Testing

- Cross-browser testing
- Responsive design
- Form validation
- Copy/download functions
- LocalStorage persistence

### Potential Automated Testing

```typescript
// Unit tests (Vitest)
describe('signatureGenerator', () => {
  it('generates valid HTML', () => {...});
  it('escapes HTML entities', () => {...});
});

// Component tests (React Testing Library)
describe('SignatureGenerator', () => {
  it('renders form fields', () => {...});
  it('updates preview on input', () => {...});
});

// E2E tests (Playwright)
test('user can generate signature', async ({ page }) => {
  // ...
});
```

## Future Architecture Considerations

### Scalability

- Move to database if >10 offices
- Consider backend if >1000 users
- Add caching for large datasets

### Feature Additions

- **PWA**: Service Worker, manifest.json
- **i18n**: react-i18next, locale files
- **State Management**: Zustand or Jotai (if needed)
- **Backend**: API layer for shared settings

### Migration Path

```
Current: Pure Frontend
    ↓
Next: Frontend + API (optional)
    ↓
Future: Full-stack with DB (if needed)
```

## Monitoring & Analytics

### Current: None (Privacy-focused)

### Potential: Privacy-respecting Analytics

- Self-hosted Plausible
- Privacy-focused tracking
- No cookies
- Aggregated data only

## Conclusion

This architecture prioritizes:
- **Simplicity**: No backend complexity
- **Privacy**: No data transmission
- **Performance**: Fast, lightweight
- **Security**: Minimal attack surface
- **Maintainability**: Clean, typed code
- **Deployability**: Static hosting anywhere

---

**Architecture Version**: 1.0.0  
**Last Updated**: January 2026  
**Maintained By**: Explorance Development Team
