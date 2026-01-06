# 🔧 Azure Static Web Apps Troubleshooting Guide

**Version:** 1.0.0  
**Last Updated:** January 6, 2026

---

## 🐛 Common Issues & Solutions

### ❌ Issue #1: "Failed to remove 'http.https://github.com/.extraheader' from the git config"

**Error Message:**
```
Build and Deploy Job
Failed to remove 'http.https://github.com/.extraheader' from the git config
```

**Cause:**
This error occurs when the Azure Static Web Apps deploy action conflicts with the git credentials set by the `actions/checkout` action. The checkout action persists GitHub credentials in the git config, and the Azure action tries to remove them.

**✅ Solution:**
Add `persist-credentials: false` to the checkout step:

```yaml
- name: Checkout
  uses: actions/checkout@v4
  with:
    submodules: true
    lfs: false
    persist-credentials: false  # ← Add this line
```

**Why it works:**
This tells the checkout action NOT to persist credentials in the git config, preventing the conflict with the Azure deploy action.

**Status:** ✅ FIXED in current workflow

---

### ❌ Issue #2: "Invalid azure_static_web_apps_api_token"

**Error Message:**
```
Error: Invalid azure_static_web_apps_api_token
```

**Cause:**
The deployment token from Azure is missing or incorrect in GitHub Secrets.

**✅ Solution:**

1. **Get Token from Azure:**
   ```bash
   # Option A: Azure Portal
   # Go to: Your Static Web App → Manage deployment token
   # Copy the token
   
   # Option B: Azure CLI
   az staticwebapp secrets list \
     --name your-app-name \
     --resource-group your-resource-group
   ```

2. **Add to GitHub:**
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: [Paste the token]
   - Click "Add secret"

3. **Verify:**
   - Secret should appear in the secrets list
   - Re-run the workflow

---

### ❌ Issue #3: "404 Not Found" on deployed site

**Symptoms:**
- Main page works
- Refresh on any route shows 404
- Direct navigation to routes fails

**Cause:**
Missing or incorrect `staticwebapp.config.json` configuration for client-side routing.

**✅ Solution:**

Ensure `/staticwebapp.config.json` exists with proper routing config:

```json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/*.{css,scss,js,png,gif,ico,jpg,svg}"]
  },
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  }
}
```

**Status:** ✅ File already exists in project

---

### ❌ Issue #4: Build fails with "Module not found"

**Error Message:**
```
Error: Cannot find module '@/components/...'
Error: Cannot find module 'lucide-react'
```

**Cause:**
Dependencies not installed or path aliases not configured.

**✅ Solution:**

1. **Check package.json:**
   ```bash
   # Ensure all dependencies are listed
   cat package.json
   ```

2. **Check vite.config.ts:**
   ```typescript
   resolve: {
     alias: {
       '@': path.resolve(__dirname, './src'),
     },
   }
   ```

3. **Verify workflow:**
   ```yaml
   - name: Install dependencies
     run: npm ci  # Use npm ci, not npm install
   ```

**Status:** ✅ Already configured correctly

---

### ❌ Issue #5: Deployment succeeds but site is blank

**Symptoms:**
- Workflow succeeds
- Site loads but shows blank page
- No errors in browser console

**Causes & Solutions:**

**A. Wrong output location:**
```yaml
# ❌ Wrong
output_location: "build"

# ✅ Correct
output_location: "dist"
```

**B. Wrong base URL in vite.config.ts:**
```typescript
// For Azure Static Web Apps, use:
export default defineConfig({
  base: '/',  // ✅ Correct for Azure
})
```

**C. Check build output:**
```bash
# Build locally and verify dist/ exists
npm run build
ls -la dist/
```

**Status:** ✅ Already configured correctly

---

### ❌ Issue #6: "workflow requires azure_static_web_apps_api_token"

**Error Message:**
```
This workflow requires the secret: azure_static_web_apps_api_token
```

**Cause:**
The workflow is running but the secret hasn't been added to GitHub.

**✅ Solution:**

**Option 1: Add the secret first (recommended)**
1. Create Azure Static Web App
2. Get deployment token
3. Add to GitHub Secrets
4. Then push code

**Option 2: Disable workflow temporarily**
1. Add condition to skip if secret doesn't exist:
```yaml
if: github.event_name == 'push' && secrets.AZURE_STATIC_WEB_APPS_API_TOKEN != ''
```

**Option 3: Delete workflow until ready**
```bash
# Delete the workflow file if not using Azure yet
git rm .github/workflows/azure-static-web-apps.yml
```

---

### ❌ Issue #7: Workflow doesn't trigger

**Symptoms:**
- Push to main
- No workflow runs
- Actions tab shows nothing

**Causes & Solutions:**

**A. Workflow in wrong location:**
```bash
# ❌ Wrong
/workflows/azure-static-web-apps.yml

# ✅ Correct
/.github/workflows/azure-static-web-apps.yml
```

**Fix:**
```bash
# Move to correct location
mkdir -p .github/workflows
mv workflows/azure-static-web-apps.yml .github/workflows/
```

**B. YAML syntax error:**
```bash
# Check for syntax errors
cat .github/workflows/azure-static-web-apps.yml
```

**C. Branch name mismatch:**
```yaml
on:
  push:
    branches:
      - main  # ← Must match your default branch
```

If your default branch is `master`, change to:
```yaml
    branches:
      - master
```

---

### ❌ Issue #8: "npm ci" fails with package-lock.json error

**Error Message:**
```
npm ERR! `npm ci` can only install packages when your package.json and package-lock.json are in sync
```

**Cause:**
package-lock.json is out of sync with package.json.

**✅ Solution:**

```bash
# Option 1: Regenerate package-lock.json
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push

# Option 2: Use npm install instead (not recommended)
# In workflow, change:
- name: Install dependencies
  run: npm install  # Instead of npm ci
```

**Recommended:** Always use `npm ci` in CI/CD for reproducible builds.

---

### ❌ Issue #9: Build succeeds but TypeScript errors in logs

**Symptoms:**
- Build completes
- TypeScript errors shown in logs
- Site may work but with warnings

**Cause:**
TypeScript errors are warnings, not failures.

**✅ Solution:**

**To enforce strict TypeScript:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**To fail build on TypeScript errors:**
```json
// package.json
{
  "scripts": {
    "build": "tsc --noEmit && vite build"
  }
}
```

---

### ❌ Issue #10: Custom domain not working

**Symptoms:**
- Default Azure URL works
- Custom domain shows error
- DNS configured correctly

**Causes & Solutions:**

**A. DNS not propagated:**
```bash
# Check DNS propagation
nslookup your-domain.com
dig your-domain.com

# Wait up to 48 hours for DNS propagation
```

**B. SSL certificate not ready:**
- Azure automatically provisions SSL
- Can take 5-15 minutes after DNS validation
- Check: Azure Portal → Custom domains → Status

**C. Wrong DNS record:**
```
# ❌ Wrong
Type: A
Value: [IP address]

# ✅ Correct
Type: CNAME
Name: your-subdomain (or @)
Value: your-app.azurestaticapps.net
```

**D. Domain not added in Azure:**
1. Azure Portal → Your Static Web App
2. Custom domains → Add
3. Enter domain
4. Follow validation steps

---

## 🔍 Debugging Workflow Issues

### View Workflow Logs

**On GitHub:**
1. Go to your repository
2. Click "Actions" tab
3. Click on the failed workflow run
4. Click on "Build and Deploy Job"
5. Expand each step to see logs

**Look for:**
- Red X marks (failed steps)
- Error messages in logs
- Stack traces
- Missing dependencies

---

### Enable Debug Logging

Add to your workflow file:

```yaml
env:
  ACTIONS_STEP_DEBUG: true
  ACTIONS_RUNNER_DEBUG: true
```

**Full example:**
```yaml
jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    env:
      ACTIONS_STEP_DEBUG: true  # ← Add this
      ACTIONS_RUNNER_DEBUG: true  # ← And this
    steps:
      # ... rest of workflow
```

---

### Test Locally Before Pushing

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Build the app
npm run build

# Run locally (simulates Azure environment)
swa start dist

# Test at http://localhost:4280
```

---

## 🛠️ Workflow File Location Issue

### Current Issue
Your workflow file is in `/workflows/` but should be in `/.github/workflows/`

### ✅ Fix

**Option 1: Move the file (recommended)**
```bash
# Create .github/workflows directory
mkdir -p .github/workflows

# Move workflow file
mv workflows/azure-static-web-apps.yml .github/workflows/

# Also move GitHub Pages workflow if exists
mv workflows/deploy.yml .github/workflows/

# Remove old directory
rm -rf workflows/

# Commit changes
git add .github/workflows/
git commit -m "Move workflows to correct location"
git push
```

**Option 2: Create symlink (not recommended)**
```bash
mkdir -p .github/workflows
ln -s ../../workflows/azure-static-web-apps.yml .github/workflows/
```

---

## ✅ Pre-Deployment Checklist

Before deploying to Azure, verify:

### Repository
- [ ] Workflow file in `/.github/workflows/azure-static-web-apps.yml`
- [ ] `staticwebapp.config.json` in project root
- [ ] `package.json` and `package-lock.json` committed
- [ ] `vite.config.ts` has `base: '/'`

### Azure
- [ ] Static Web App created in Azure Portal
- [ ] Deployment token copied
- [ ] GitHub secret added: `AZURE_STATIC_WEB_APPS_API_TOKEN`

### Build Configuration
- [ ] `output_location: "dist"` in workflow
- [ ] `skip_app_build: true` (since we build separately)
- [ ] `app_location: "/"` in workflow

### Code
- [ ] `npm run build` succeeds locally
- [ ] `npm run preview` shows working site
- [ ] No TypeScript errors
- [ ] All dependencies in package.json

---

## 🎯 Quick Fixes Summary

| Issue | Quick Fix |
|-------|-----------|
| Git extraheader error | Add `persist-credentials: false` to checkout |
| Invalid token | Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub secrets |
| 404 on routes | Ensure `staticwebapp.config.json` exists |
| Workflow not triggering | Move to `/.github/workflows/` |
| Build fails | Run `npm ci` locally to verify |
| Blank page | Check `output_location: "dist"` |
| Module not found | Verify `npm ci` in workflow |
| DNS not working | Wait for propagation (up to 48h) |

---

## 📚 Additional Resources

### Documentation
- [Azure Static Web Apps Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Troubleshooting Guide](https://learn.microsoft.com/en-us/azure/static-web-apps/troubleshoot)

### Tools
- [Azure Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/)
- [GitHub Actions Debug](https://github.com/actions/toolkit/blob/main/docs/action-debugging.md)
- [DNS Checker](https://dnschecker.org/)

### Support
- [Azure Support](https://azure.microsoft.com/support/)
- [GitHub Community](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-static-web-apps)

---

## 🆘 Getting Help

### Self-Service
1. Check this troubleshooting guide
2. Review workflow logs in GitHub Actions
3. Test build locally with `npm run build`
4. Check Azure deployment history

### Community
- GitHub Issues (this repository)
- Stack Overflow with tag `azure-static-web-apps`
- Azure Community Forums

### Enterprise Support
- Azure Support Portal
- GitHub Enterprise Support
- Explorance IT Department

---

**Last Updated:** January 6, 2026  
**Status:** ✅ Issue #1 Fixed  
**Current Version:** All workflows configured correctly

---

**End of Troubleshooting Guide**
