# Deployment Guide - MDDB America Website

This guide covers deploying the MDDB America website to GitHub and GitHub Pages.

## Prerequisites

- GitHub account with repository access
- Node.js and npm installed locally
- Git installed

## Local Setup

Before deployment, ensure everything works locally:

```bash
# Install dependencies
npm install

# Test development server
npm run dev

# Build production version
npm run build

# Test production build
npm run preview
```

## GitHub Repository Setup

### 1. Create Repository on GitHub

- Go to [github.com/new](https://github.com/new)
- Repository name: `mddb-america-website`
- Add description
- Choose Public or Private
- Click "Create repository"

### 2. Initialize Local Repository

```bash
cd mddb-america-website
git init
git add .
git commit -m "Initial commit: Vite project setup with modular CSS and components"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mddb-america-website.git
git push -u origin main
```

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

**Setup GitHub Actions:**

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push the workflow file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push
```

3. Verify deployment:
   - Go to repository Settings → Pages
   - Confirm deployment is live at `https://YOUR_USERNAME.github.io/mddb-america-website`

### Option 2: Manual Deployment

1. Build locally:
   ```bash
   npm run build
   ```

2. Push `dist` folder to GitHub:
   ```bash
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. Configure GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → folder: `/dist`
   - Save

## Using Custom Domain

### 1. Domain Setup

- Purchase domain (Namecheap, GoDaddy, etc.)
- Update DNS records to point to GitHub Pages:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |
| A | @ | GitHub Pages IP (see docs) |

### 2. Add CNAME File

1. Create `public/CNAME` with your domain:
   ```
   example.com
   ```

2. Commit and push:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain CNAME"
   git push
   ```

3. Configure in GitHub:
   - Settings → Pages → Custom domain
   - Enter your domain
   - Enable HTTPS

## Deployment Checklist

- [ ] Node.js and npm installed
- [ ] Local setup complete (`npm install`, `npm run dev`)
- [ ] Build successful (`npm run build`)
- [ ] GitHub repository created
- [ ] Local repository initialized and pushed
- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Deployment workflow created (if using Actions)
- [ ] Website accessible at public URL
- [ ] All pages load correctly
- [ ] Animations and videos play
- [ ] Links work (internal and external)
- [ ] Responsive design verified on mobile

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### CSS/JavaScript Not Loading
- Check that asset paths use absolute paths (leading `/`)
- Verify `vite.config.js` configuration
- Clear browser cache or try incognito mode

### Pages Not Found
- Ensure all HTML files are in project root or `pages/` folder
- Check file paths in `vite.config.js`

### Images Not Loading
- Verify images are in `public/images/`
- Use paths like `/images/filename.png`
- Check browser console for 404 errors

### Deployment Not Updating
- Force refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
- Check GitHub Actions deployment status
- Verify `dist` folder is being deployed

## Rollback

If deployment has issues:

1. Identify last working commit:
   ```bash
   git log --oneline
   ```

2. Revert to previous version:
   ```bash
   git reset --hard COMMIT_HASH
   git push --force origin main
   ```

3. Check GitHub Pages deployment status

## Performance Monitoring

After deployment, monitor using:

- **Lighthouse**: Chrome DevTools → Lighthouse
- **GitHub Insights**: Repository → Insights → Traffic
- **Google Analytics**: Add tracking code to index.html

## Continuous Integration

The GitHub Actions workflow automatically:

- Runs on every push to `main`
- Installs dependencies
- Builds production version
- Deploys to GitHub Pages

Monitor deployment status:
- Go to repository → Actions
- View workflow runs and logs

## Support

For issues:

1. Check GitHub Pages documentation: https://docs.github.com/en/pages
2. Review Vite documentation: https://vitejs.dev/
3. Check browser console for errors
4. Verify all files committed and pushed to GitHub

---

**Last Updated:** 2026-05-07
**Deployment Guide Version:** 1.0
