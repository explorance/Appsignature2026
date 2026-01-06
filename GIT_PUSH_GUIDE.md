# 📤 Git Push Guide - Deploy to GitHub

**Version:** 1.0.0  
**Last Updated:** January 6, 2026

---

## 🎯 Overview

This guide shows you how to push all your changes to GitHub, which will trigger automatic deployment to:
- ✅ GitHub Pages (if configured)
- ✅ Azure Static Web Apps (if configured)

---

## 📋 Prerequisites

Before pushing, ensure you have:

- [ ] Git installed on your computer
- [ ] GitHub account created
- [ ] Repository created on GitHub (or ready to create)
- [ ] Local changes ready to commit

---

## 🚀 Quick Start (First Time Setup)

### Step 1: Check Git Status

```bash
# See what files have changed
git status
```

**You should see:**
- Modified files (in red)
- New files (in red)
- Ready to commit files (in green)

### Step 2: Stage All Changes

```bash
# Add all files to staging
git add .

# Or add specific files
git add staticwebapp.config.json
git add .github/workflows/azure-static-web-apps.yml
git add AZURE_DEPLOYMENT.md
```

### Step 3: Commit Changes

```bash
# Commit with a descriptive message
git commit -m "Add Azure deployment configuration and documentation"
```

**Better commit message (detailed):**
```bash
git commit -m "Add Azure Static Web Apps deployment

- Add staticwebapp.config.json for Azure SWA routing
- Add GitHub Actions workflow for Azure deployment
- Add Azure DevOps pipeline as alternative
- Add comprehensive Azure deployment documentation
- Update infrastructure documentation
- All files created and verified"
```

### Step 4: Push to GitHub

#### If you already have a remote repository:

```bash
# Push to main branch
git push origin main

# Or if your default branch is 'master'
git push origin master
```

#### If this is your first push (new repository):

**Option A: Create repo on GitHub first (Recommended)**

1. Go to [GitHub](https://github.com)
2. Click **"New repository"** (green button)
3. Repository name: `email-signature-generator` (or your choice)
4. Description: `Professional email signature generator for Explorance`
5. Visibility: 
   - **Private** (for internal use) ✅ Recommended
   - **Public** (if open source)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

**Then connect and push:**

```bash
# Add GitHub as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/email-signature-generator.git

# Verify remote was added
git remote -v

# Push to GitHub
git push -u origin main
```

**Option B: Use GitHub CLI (gh)**

```bash
# Login to GitHub
gh auth login

# Create repository and push
gh repo create email-signature-generator --private --source=. --push
```

---

## 🔄 Subsequent Pushes (After First Time)

Once your repository is set up, future pushes are simple:

### Standard Workflow

```bash
# 1. Check what changed
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "Your descriptive message here"

# 4. Push to GitHub
git push
```

### Example: Daily Development

```bash
# Made changes to AdminPanel
git add src/app/components/AdminPanel.tsx
git commit -m "Fix: Admin panel password validation"
git push

# Made changes to documentation
git add README.md
git commit -m "Docs: Update README with new features"
git push

# Made multiple changes
git add .
git commit -m "Feature: Add banner preview in admin panel"
git push
```

---

## 📝 Commit Message Best Practices

### Format

```
<type>: <short description>

<optional detailed description>
<optional body>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

**Good commit messages:**
```bash
git commit -m "feat: Add French disclaimer support"
git commit -m "fix: Resolve localStorage persistence issue"
git commit -m "docs: Add Azure deployment guide"
git commit -m "style: Format code with Prettier"
git commit -m "refactor: Simplify signature generation logic"
```

**Bad commit messages:**
```bash
git commit -m "update"
git commit -m "fixes"
git commit -m "changes"
git commit -m "wip"
```

---

## 🌿 Branch Management (Optional)

### Working with Branches

If you want to work on features separately:

```bash
# Create a new branch
git checkout -b feature/add-new-banner-category

# Make changes, then commit
git add .
git commit -m "feat: Add new banner category system"

# Push branch to GitHub
git push origin feature/add-new-banner-category

# Switch back to main
git checkout main

# Merge branch into main (after testing)
git merge feature/add-new-banner-category

# Push updated main
git push origin main

# Delete branch (optional)
git branch -d feature/add-new-banner-category
git push origin --delete feature/add-new-banner-category
```

### Creating Pull Requests

For team workflows:

```bash
# Push your branch
git push origin feature/my-feature

# Then on GitHub:
# 1. Go to your repository
# 2. Click "Pull requests"
# 3. Click "New pull request"
# 4. Select your branch
# 5. Add description
# 6. Create pull request
# 7. Request review
# 8. Merge when approved
```

---

## 🔍 Useful Git Commands

### Checking Status

```bash
# See what changed
git status

# See what's in staging area
git diff --staged

# See commit history
git log

# See commit history (compact)
git log --oneline

# See file changes
git diff
```

### Undoing Changes

```bash
# Undo changes to a file (before staging)
git checkout -- filename.txt

# Unstage a file
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ CAREFUL
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert abc123
```

### Viewing Changes

```bash
# See what changed in a file
git diff filename.txt

# See what changed in last commit
git show

# See changes between commits
git diff abc123..def456
```

---

## 🚨 Common Issues & Solutions

### Issue 1: "fatal: not a git repository"

**Solution:**
```bash
# Initialize git in your project
git init
```

### Issue 2: "Please tell me who you are"

**Solution:**
```bash
# Set your identity
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### Issue 3: "Updates were rejected"

**Solution:**
```bash
# Pull changes first
git pull origin main

# Resolve any conflicts, then
git push origin main
```

### Issue 4: "Authentication failed"

**Solutions:**

**For HTTPS:**
```bash
# Use personal access token instead of password
# 1. Create token at: https://github.com/settings/tokens
# 2. Use token as password when pushing
```

**For SSH:**
```bash
# Switch to SSH
git remote set-url origin git@github.com:USERNAME/REPO.git

# Add SSH key to GitHub (if not done)
ssh-keygen -t ed25519 -C "your_email@example.com"
# Add ~/.ssh/id_ed25519.pub to GitHub settings
```

### Issue 5: "Large files detected"

**Solution:**
```bash
# Remove large files from commit
git rm --cached large-file.zip

# Add to .gitignore
echo "*.zip" >> .gitignore
echo "*.psd" >> .gitignore
echo "node_modules/" >> .gitignore

# Commit changes
git add .gitignore
git commit -m "chore: Add gitignore rules"
```

### Issue 6: Accidentally committed secrets

**Solution:**
```bash
# Remove file from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/secret.env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (⚠️ only if you haven't shared repo)
git push origin --force --all

# Then: Rotate the exposed secret immediately!
```

---

## 📦 .gitignore Configuration

Ensure you have a proper `.gitignore` file:

```bash
# Check if .gitignore exists
cat .gitignore
```

**Should include:**
```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Cache
.cache/
.parcel-cache/

# Local development
.env.*.local
```

---

## 🎯 Complete Workflow Example

Here's a complete example of adding all your Azure files and pushing:

```bash
# 1. Check current status
git status

# 2. Review changes
git diff

# 3. Add all new and modified files
git add .

# 4. Verify staged files
git status

# 5. Commit with descriptive message
git commit -m "Add Azure Static Web Apps deployment support

- Add staticwebapp.config.json for routing configuration
- Add GitHub Actions workflow for automatic Azure deployment
- Add Azure DevOps pipeline as alternative CI/CD option
- Add comprehensive Azure deployment documentation
- Add Git push guide for repository management
- Update infrastructure documentation with Azure details
- All configurations tested and verified for production use"

# 6. Push to GitHub
git push origin main

# 7. Verify on GitHub
# Visit: https://github.com/YOUR-USERNAME/YOUR-REPO
# Check Actions tab for workflow status
```

---

## 🔄 Deployment Automation

After pushing, GitHub Actions will automatically:

### For GitHub Pages (if enabled)

```
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (npm ci)
4. Build project (npm run build)
5. Deploy to GitHub Pages
6. Site live at: https://username.github.io/repo/
```

**Workflow:** `.github/workflows/deploy.yml`

### For Azure Static Web Apps (if configured)

```
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (npm ci)
4. Build project (npm run build)
5. Deploy to Azure
6. Site live at: https://[name].azurestaticapps.net
```

**Workflow:** `.github/workflows/azure-static-web-apps.yml`

### Monitor Deployment

**On GitHub:**
1. Go to your repository
2. Click **"Actions"** tab
3. See running/completed workflows
4. Click on a workflow to see detailed logs

**On Azure:**
1. Go to Azure Portal
2. Navigate to your Static Web App
3. Click **"Deployment History"**
4. See deployment status and logs

---

## ✅ Pre-Push Checklist

Before pushing to GitHub, verify:

### Code Quality
- [ ] Code builds successfully (`npm run build`)
- [ ] No TypeScript errors (`npm run build`)
- [ ] All files properly formatted
- [ ] No console.log statements left in code
- [ ] No commented-out code blocks

### Security
- [ ] No API keys in code
- [ ] No passwords in code
- [ ] No sensitive data committed
- [ ] .gitignore properly configured
- [ ] Environment variables not committed

### Documentation
- [ ] README.md updated
- [ ] Comments added for complex code
- [ ] Changelog updated (if applicable)
- [ ] Documentation files created

### Testing
- [ ] App works locally (`npm run dev`)
- [ ] Production build works (`npm run preview`)
- [ ] All features tested
- [ ] No broken links

---

## 📊 Repository Health

### Check Repository Status

```bash
# See all branches
git branch -a

# See remote repositories
git remote -v

# See repository size
git count-objects -vH

# See all tags
git tag

# See contributors
git shortlog -sn
```

### Clean Up Repository

```bash
# Remove deleted branches from local
git fetch --prune

# Clean up old references
git gc

# Optimize repository
git repack -a -d
```

---

## 🎯 Summary

**You now have:**
- ✅ Complete Git workflow guide
- ✅ Azure deployment files ready
- ✅ GitHub Actions workflows configured
- ✅ Documentation created

**To deploy to GitHub and Azure:**

```bash
# Quick 4-step process:
git add .
git commit -m "Add Azure deployment + documentation"
git push origin main
# ✅ Done! Automatic deployment starts
```

**After push:**
- ✅ GitHub Actions trigger automatically
- ✅ App builds and deploys
- ✅ Available at GitHub Pages URL
- ✅ Available at Azure URL (if configured)

---

## 📚 Additional Resources

### Documentation
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Pro Git Book](https://git-scm.com/book/en/v2) (Free)

### Tools
- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [GitKraken](https://www.gitkraken.com/) - Advanced Git GUI
- [Git Extensions](https://gitextensions.github.io/) - Windows Git GUI

### Learning
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive tutorial
- [GitHub Skills](https://skills.github.com/) - Free courses
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Ready to push?** 🚀

```bash
git add .
git commit -m "Deploy: Azure + GitHub Pages ready"
git push origin main
```

---

**End of Git Push Guide**
