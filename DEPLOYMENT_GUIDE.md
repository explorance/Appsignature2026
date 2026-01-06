# Deployment Guide - Email Signature Generator

This guide will walk you through deploying the Email Signature Generator to GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Enter a repository name (e.g., `email-signature-generator`)
5. Choose **Public** or **Private**
6. Do NOT initialize with README (we already have one)
7. Click **Create repository**

## Step 2: Push Your Code to GitHub

In your terminal, navigate to your project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Email Signature Generator"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
5. That's it! The workflow is already configured.

## Step 4: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically run when you push to the `main` branch.

To view the deployment progress:
1. Go to the **Actions** tab in your repository
2. You should see a workflow running
3. Wait for it to complete (usually takes 1-2 minutes)

## Step 5: Access Your Deployed App

Once deployment is complete, your app will be available at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Note**: If your repository name is `YOUR-USERNAME.github.io`, the URL will be:
```
https://YOUR-USERNAME.github.io/
```

## Updating the Base Path (if needed)

If your GitHub Pages URL includes a repository name (e.g., `https://username.github.io/repo-name/`), you need to update the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/YOUR-REPO-NAME/',  // Change this line
  // ... rest of config
})
```

Then commit and push:
```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

## Alternative: Deploy to Other Platforms

### Netlify

1. Sign up at [Netlify](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

### Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Framework Preset: **Vite**
5. Click **Deploy**

### Cloudflare Pages

1. Sign up at [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create a project**
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click **Save and Deploy**

## Troubleshooting

### Deployment fails
- Check the **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility (should be 18+)

### App shows blank page
- Check browser console for errors
- Verify the `base` path in `vite.config.ts` matches your repository structure
- Clear browser cache and try again

### Settings not persisting
- This is expected! The app uses localStorage, which is browser-specific
- Each user's settings are stored in their own browser
- Admin settings are also stored locally

## Security Notes

- The admin password (`eXplorance`) is client-side only
- All data is stored in the browser's localStorage
- No sensitive data is transmitted to any server
- This is a static site with no backend

## Need Help?

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the browser console for errors
3. Verify all files are committed and pushed
4. Ensure GitHub Pages is enabled with "GitHub Actions" source

---

**Congratulations!** Your Email Signature Generator is now deployed and accessible online! 🎉
