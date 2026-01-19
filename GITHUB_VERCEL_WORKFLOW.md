# GitHub + Vercel Workflow

## Quick Start

### First-Time Setup

```bash
# 1. Initialize git repository
git init

# 2. Create .gitignore if needed
echo "node_modules
dist
.env
.DS_Store" > .gitignore

# 3. Stage all files
git add .

# 4. Create initial commit
git commit -m "feat: initial email signature generator"

# 5. Create GitHub repository
# Go to github.com and create a new repository

# 6. Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Development Workflow

### Making Changes

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes
# Edit files...

# 3. Stage changes
git add .

# 4. Commit with descriptive message
git commit -m "feat: add new banner category"

# 5. Push to GitHub
git push origin feature/your-feature-name

# 6. Create Pull Request on GitHub
# Vercel will automatically create a preview deployment

# 7. After review, merge to main
# Vercel will automatically deploy to production
```

### Commit Message Convention

Use conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```bash
git commit -m "feat: add email signature preview"
git commit -m "fix: resolve banner display issue"
git commit -m "docs: update deployment instructions"
```

## Branch Strategy

### Main Branch
- Production-ready code
- Protected branch (configure on GitHub)
- Auto-deploys to Vercel production

### Feature Branches
- Format: `feature/description`
- Example: `feature/multi-language-support`
- Creates Vercel preview deployments

### Bugfix Branches
- Format: `fix/description`
- Example: `fix/logo-alignment`

### Hotfix Branches
- Format: `hotfix/description`
- For urgent production fixes

## Vercel Integration

### Automatic Deployments

Vercel automatically:
1. **Production Deploy**: Every push to `main` branch
2. **Preview Deploy**: Every push to feature branches
3. **PR Comments**: Adds deployment URL to pull requests

### Deployment URLs

- **Production**: `your-app.vercel.app`
- **Preview**: `your-app-git-branch-name.vercel.app`
- **Custom Domain**: Configure in Vercel dashboard

## GitHub Settings

### Recommended Repository Settings

1. **Branch Protection** (Settings → Branches):
   - Require pull request reviews
   - Require status checks (Vercel deployment)
   - Enable "Require branches to be up to date"

2. **Repository Security**:
   - Enable Dependabot alerts
   - Enable secret scanning

3. **Actions** (Optional):
   - Can add custom GitHub Actions for linting
   - Vercel handles deployment automatically

## Collaboration Workflow

### For Team Members

```bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. Install dependencies
npm install

# 3. Create feature branch
git checkout -b feature/my-feature

# 4. Develop and test locally
npm run dev

# 5. Push and create PR
git add .
git commit -m "feat: my new feature"
git push origin feature/my-feature

# 6. Open pull request on GitHub
# Review preview deployment from Vercel
# Request review from team members
```

### Code Review Process

1. Developer creates PR
2. Vercel comments with preview URL
3. Reviewers test on preview URL
4. Code review and approval
5. Merge to main
6. Automatic production deployment

## Syncing Your Fork

If working from a fork:

```bash
# 1. Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/REPO.git

# 2. Fetch upstream changes
git fetch upstream

# 3. Merge upstream into your main
git checkout main
git merge upstream/main

# 4. Push to your fork
git push origin main
```

## Useful Commands

### Check Status
```bash
git status
git log --oneline -10
```

### Undo Changes
```bash
# Undo unstaged changes
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Branch Management
```bash
# List branches
git branch -a

# Delete local branch
git branch -d feature/branch-name

# Delete remote branch
git push origin --delete feature/branch-name
```

### Update Local Repository
```bash
# Pull latest changes
git pull origin main

# Or fetch and merge separately
git fetch origin
git merge origin/main
```

## Troubleshooting

### Push Rejected
```bash
# Pull latest changes first
git pull origin main --rebase
git push origin main
```

### Merge Conflicts
```bash
# 1. Pull latest changes
git pull origin main

# 2. Resolve conflicts in files
# Edit conflicting files manually

# 3. Stage resolved files
git add .

# 4. Complete merge
git commit -m "merge: resolve conflicts"

# 5. Push
git push origin your-branch
```

### Wrong Commit Message
```bash
# Amend last commit message
git commit --amend -m "New message"

# Force push if already pushed (use carefully!)
git push --force-with-lease origin your-branch
```

## Best Practices

1. **Commit Often**: Small, focused commits
2. **Pull Before Push**: Always sync before pushing
3. **Descriptive Messages**: Clear commit messages
4. **Test Locally**: Run `npm run build` before pushing
5. **Review Preview**: Check Vercel preview before merging
6. **Clean Branches**: Delete merged branches

## CI/CD Pipeline

```
Developer → Git Push → GitHub → Vercel → Deployment
                         ↓
                    Automated Build
                         ↓
                    Automated Tests
                         ↓
                    Preview/Production URL
```

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Vercel Git Integration](https://vercel.com/docs/git)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Workflow Type**: Git + GitHub + Vercel
**Deployment**: Automatic on push
**Environment**: Frontend-only SPA
