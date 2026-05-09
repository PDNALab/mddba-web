# MDDB America Website - Deployment Guide

## GitHub Pages Deployment

This guide explains how to deploy the MDDB America website to GitHub Pages and connect a custom domain.

---

## Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

---

## Deployment to GitHub Pages

### Step 1: Prepare Your Repository

Ensure your repository structure matches the expected layout:

```
mddba-web/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── videos/
├── pages/
│   ├── partners.html
│   ├── news.html
│   ├── events.html
│   ├── publications.html
│   └── community.html
└── docs/
    └── deployment.md
```

### Step 2: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - Set **Source** to `Deploy from a branch`
   - Set **Branch** to `main` (or your default branch)
   - Set folder to `/ (root)`
4. Click **Save**

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Deploy MDDB America website"
git push origin main
```

### Step 4: Verify Deployment

- Your site will be available at: `https://<your-github-username>.github.io/mddba-web/`
- GitHub will show the deployment status in the Pages section
- Wait a few minutes for the site to build and deploy

---

## Custom Domain Setup (mddba.com)

### Step 1: Register Your Domain

1. Register `mddba.com` with a domain registrar (GoDaddy, Namecheap, etc.)
2. Note your registrar's nameserver management section

### Step 2: Configure GitHub Pages with Custom Domain

1. Go to your GitHub repository **Settings → Pages**
2. Under "Custom domain", enter: `mddba.com`
3. Click **Save**
4. GitHub will create a `CNAME` file in your repository

### Step 3: Update DNS Records

In your domain registrar's DNS management:

**Option A: Using GitHub's Nameservers (Recommended)**

Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add this CNAME record:
```
www CNAME <your-github-username>.github.io
```

**Option B: Using CNAME (if registrar doesn't support A records)**

Create a CNAME record:
```
mddba.com CNAME <your-github-username>.github.io
```

### Step 4: Enable HTTPS

1. Return to **Settings → Pages**
2. Check the **Enforce HTTPS** checkbox (this may take a few minutes)
3. Verify SSL certificate is issued

### Step 5: Verify Custom Domain

- Your site should now be accessible at: `https://mddba.com`
- GitHub will automatically redirect `www.mddba.com` to `mddba.com`

---

## Troubleshooting

### Site Not Loading

- **Check branch**: Ensure you're deploying from the correct branch in GitHub Pages settings
- **Wait for build**: GitHub may take a few minutes to build and deploy
- **Check CNAME file**: Verify the CNAME file exists in your repository root

### Custom Domain Not Working

- **DNS Propagation**: DNS changes can take 24-48 hours to propagate
- **DNS Records**: Double-check your DNS records for typos
- **GitHub CNAME**: Ensure GitHub's custom domain field matches your DNS records
- **Test DNS**: Use `nslookup mddba.com` or `dig mddba.com` to verify DNS resolution

### Assets Not Loading

- **Verify paths**: All asset paths use relative URLs (e.g., `assets/css/main.css`)
- **Check case sensitivity**: GitHub Pages is case-sensitive; ensure filenames match exactly
- **Browser cache**: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## Local Testing

To test the website locally before deployment:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

---

## Future Updates

To update your website:

1. Make changes to files locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Pages will automatically rebuild and deploy (usually within a few minutes)

---

## Performance Optimization

### Minimize Bundle Size

- Compress images using tools like TinyPNG or ImageOptim
- Minify CSS and JavaScript (consider using build tools)
- Lazy load images when appropriate

### Caching Headers

GitHub Pages automatically sets appropriate cache headers for static assets.

### CDN

Consider using CloudFlare (free tier available) for additional performance:

1. Update nameservers to CloudFlare
2. CloudFlare will cache your static assets globally
3. Provides additional security features

---

## Security

- ✓ HTTPS enforced automatically by GitHub Pages
- ✓ No sensitive data stored in the repository
- ✓ Environment variables not needed (static site)
- ✓ Regular security updates via dependencies

---

## Support & Resources

- **GitHub Pages Documentation**: https://docs.github.com/en/pages
- **GitHub Community Forum**: https://github.com/orgs/community/discussions
- **Domain Registrar Support**: Contact your registrar's support team for DNS issues

---

**Last Updated:** 2026-05-08
**Version:** 1.0
