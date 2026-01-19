# Workflows Directory

## Current Configuration

### ✅ Active Workflow

**`deploy.yml`** - GitHub Pages Deployment (Optional)
- Deploys to GitHub Pages on push to main branch
- Can run in parallel with Vercel
- Useful as a backup deployment option

## Removed Workflows

### ❌ Deleted (Azure - Not Used)
- `azure-static-web-apps.yml` - Removed (Using Vercel instead)
- `deploy-all.yml` - Removed (Azure-related)

## Deployment Strategy

### Primary: Vercel (Recommended)
- **Setup**: Connect repository on vercel.com
- **Deployment**: Automatic on push to main
- **Preview**: Automatic on pull requests
- **URL**: `your-app.vercel.app`

### Alternative: GitHub Pages (Optional)
- **Setup**: Enable in repository Settings → Pages → GitHub Actions
- **Deployment**: Via this workflow on push to main
- **URL**: `username.github.io/repo-name`

## Recommendation

**Use Vercel as primary deployment platform:**
- Faster deployment
- Better performance (global CDN)
- Preview deployments on PRs
- Easier rollback
- Free tier is generous

**Keep GitHub Pages workflow as backup:**
- No harm in having both
- Automatic fallback option
- Can be disabled in GitHub settings if not needed

## How to Use

### Vercel Only (Recommended)
1. Connect repository to Vercel
2. Push to GitHub
3. Vercel auto-deploys
4. GitHub Pages workflow runs but can be ignored

### GitHub Pages Only
1. Enable GitHub Pages in repository settings
2. Push to GitHub
3. GitHub Pages workflow deploys automatically

### Both (Maximum Redundancy)
1. Set up both as described above
2. Get two deployment URLs
3. Use whichever you prefer

## Disabling GitHub Pages

If you only want Vercel:
1. Keep this workflow file (doesn't hurt)
2. Don't enable GitHub Pages in repository settings
3. Workflow will run but won't deploy anywhere

Or delete this workflow:
```bash
rm workflows/deploy.yml
```

---

**Current Status**: GitHub Pages workflow present but optional  
**Primary Platform**: Vercel  
**Last Updated**: January 19, 2026
