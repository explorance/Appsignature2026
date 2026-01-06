# Contributing to Email Signature Generator

Thank you for your interest in contributing! This document provides guidelines for contributing to the Email Signature Generator project.

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/email-signature-generator.git
   cd email-signature-generator
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Development Workflow

### Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

Branch naming conventions:
- `feature/` - New features
- `bugfix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `perf/` - Performance improvements

### Make Your Changes

1. Write clean, readable code
2. Follow existing code style
3. Add comments for complex logic
4. Update documentation if needed
5. Test your changes thoroughly

### Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance

### Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a PR on GitHub.

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test on mobile device
- [ ] Test copy to clipboard
- [ ] Test HTML download
- [ ] Test admin panel access
- [ ] Test settings persistence
- [ ] Check console for errors
- [ ] Verify responsive design

### Build Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define interfaces for all data structures
- Avoid `any` type - use proper types
- Use meaningful variable names

### React
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types

### CSS/Tailwind
- Use Tailwind utility classes
- Follow spacing scale (4px, 8px, etc.)
- Keep custom CSS to minimum
- Use design tokens from theme.css

### File Organization
```
src/
├── app/
│   ├── components/     # React components
│   ├── utils/          # Utility functions
│   └── types.ts        # Type definitions
└── styles/             # Global styles
```

## 📚 Documentation

### Update Documentation When:
- Adding new features
- Changing existing behavior
- Modifying configuration
- Updating dependencies
- Fixing bugs

### Documentation Files
- `README.md` - Main documentation
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `QUICKSTART.md` - Quick start guide
- `CHANGELOG.md` - Version history
- Code comments - Inline documentation

## 🐛 Reporting Bugs

### Before Reporting
1. Check existing issues
2. Verify it's reproducible
3. Check console for errors
4. Test in multiple browsers

### Bug Report Should Include
- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/OS information
- Console errors

Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)

## 💡 Suggesting Features

### Before Suggesting
1. Check existing feature requests
2. Consider if it aligns with project goals
3. Think about implementation complexity

### Feature Request Should Include
- Clear description
- Use case/problem it solves
- Proposed solution
- Benefits
- Priority level

Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)

## 🔍 Code Review Process

### What We Look For
- Code quality and readability
- Proper error handling
- Performance considerations
- Accessibility compliance
- Security best practices
- Documentation updates
- Test coverage

### Review Timeline
- Initial review: Within 3 business days
- Follow-up: Within 1-2 business days
- Merge: After approval from maintainers

## ✅ Pull Request Checklist

Before submitting:
- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Added/updated comments
- [ ] Updated documentation
- [ ] Tested locally
- [ ] No console errors/warnings
- [ ] Build succeeds
- [ ] Responsive on mobile
- [ ] Accessible (keyboard navigation, screen readers)

## 🏗️ Project Structure

```
email-signature-generator/
├── .github/                # GitHub configs
│   ├── workflows/          # CI/CD workflows
│   └── ISSUE_TEMPLATE/     # Issue templates
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   ├── AdminPanel.tsx
│   │   │   └── SignatureGenerator.tsx
│   │   ├── utils/          # Utility functions
│   │   ├── types.ts        # TypeScript types
│   │   └── App.tsx         # Main component
│   ├── styles/             # Global styles
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.ts          # Vite config
├── tsconfig.json           # TypeScript config
└── README.md               # Documentation
```

## 🚫 What NOT to Do

- Don't commit `node_modules/`
- Don't commit `.env` files
- Don't include sensitive data
- Don't make unrelated changes in one PR
- Don't submit untested code
- Don't ignore TypeScript errors
- Don't remove existing functionality without discussion

## 🎯 Contribution Areas

### High Priority
- Bug fixes
- Performance improvements
- Accessibility enhancements
- Documentation improvements
- Test coverage

### Medium Priority
- New features (discussed first)
- UI/UX improvements
- Code refactoring
- Browser compatibility

### Low Priority
- Minor style tweaks
- Code formatting
- Dependency updates

## 🤝 Community Guidelines

### Be Respectful
- Treat everyone with respect
- Welcome newcomers
- Be patient with questions
- Provide constructive feedback

### Be Professional
- Use clear, professional language
- Stay on topic
- Avoid personal attacks
- Respect differing opinions

### Be Collaborative
- Share knowledge
- Help others
- Give credit where due
- Work together toward common goals

## 📞 Getting Help

### Resources
- [README](./README.md) - Project overview
- [Quickstart Guide](./QUICKSTART.md) - Getting started
- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Deployment help
- [GitHub Issues](https://github.com/YOUR-REPO/issues) - Ask questions

### Contact
- Create an issue for bugs/features
- Use discussions for general questions
- Email: support@explorance.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing!** 🎉

Every contribution, no matter how small, helps make this project better for everyone.
