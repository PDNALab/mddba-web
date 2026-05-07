# MDDB America Website

A modern, professionally structured redesign of the MDDB America website using Vite for development and production builds.

## Features

- **Modern Build System**: Vite for fast development and optimized production builds
- **Modular CSS**: CSS custom properties, organized by component
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px
- **Component Architecture**: JavaScript organized into reusable components
- **GitHub Ready**: Configured for GitHub and GitHub Pages deployment
- **Preserved Elements**: All original content, colors, animations, logo, and partner images maintained

## Project Structure

```
mddb-america-website/
├── src/
│   ├── main.js (entry point)
│   ├── styles/
│   │   ├── main.css (global styles)
│   │   ├── variables.css (design tokens)
│   │   ├── layout.css (utilities)
│   │   └── animations.css (keyframes)
│   └── components/
│       ├── header.js (navigation)
│       ├── hero.js (hero section)
│       ├── partners.js (partner ticker)
│       └── stats.js (count-up animations)
├── public/
│   ├── images/ (logo, partner images)
│   └── animations/ (hero videos)
├── pages/ (other HTML pages)
├── index.html (homepage)
├── package.json
├── vite.config.js
└── .gitignore
```

## Installation

### Prerequisites
- **Node.js** (v16+): [Download from nodejs.org](https://nodejs.org/)
- **npm**: Included with Node.js

### Setup Steps

1. **Install Node.js**:
   - Download from [nodejs.org](https://nodejs.org/)
   - macOS: `brew install node` (if using Homebrew)
   - Windows: Download installer from nodejs.org
   - Linux: `sudo apt-get install nodejs npm`

2. **Install Dependencies**:
   ```bash
   cd mddb-america-website
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   - Opens browser at `http://localhost:3000`
   - Hot reload enabled for CSS/JavaScript changes

4. **Build for Production**:
   ```bash
   npm run build
   ```
   - Output: `dist/` folder ready for deployment

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```
   - Test production build locally before deploying

## Development

### Adding CSS
- Global styles: `src/styles/main.css`
- Design tokens: `src/styles/variables.css`
- Animations: `src/styles/animations.css`
- Use CSS variables for colors and spacing (e.g., `var(--color-primary)`)

### Adding JavaScript
- Create components in `src/components/`
- Import and initialize in `src/main.js`
- Components should export an init function for modularity

### Asset Paths
- Images: `/images/` → `public/images/`
- Videos: `/animations/` → `public/animations/`
- Use absolute paths (leading `/`) in HTML/CSS

## Deployment

### GitHub Pages
1. **Configure vite.config.js** (if using custom domain):
   - Update `base` setting for GitHub Pages URL

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   - Push `dist/` folder OR
   - Configure GitHub Actions to auto-deploy on push

4. **Repository Settings**:
   - Go to Settings → Pages
   - Set source to `dist` folder or GitHub Actions

### Custom Domain
1. Add `CNAME` file to `public/` with domain name
2. Update DNS records to point to GitHub Pages
3. Build and deploy normally

## Color System

All colors are defined as CSS variables in `src/styles/variables.css`:

| Color | Value | Usage |
|-------|-------|-------|
| Primary | `#1a8cff` | Buttons, links, accents |
| Secondary | `#0a3d6b` | Headings, dark backgrounds |
| Accent | `#0a1628` | Footer, dark sections |
| Light | `#f9f9fb` | Backgrounds, cards |

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Production build optimized with Vite
- Code splitting for faster initial load
- Asset compression and minification
- Images served from CDN-ready structure

## Maintenance

### Updating Dependencies
```bash
npm update
npm outdated  # Check for new versions
```

### Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Build errors:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

## Contributing

1. Create feature branch
2. Make changes (CSS, HTML, JavaScript)
3. Test locally with `npm run dev`
4. Build with `npm run build`
5. Commit and push to GitHub
6. Create pull request

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [MDN CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [GitHub Pages Deployment](https://docs.github.com/en/pages)

## License

© 2026 MDDB America | All Rights Reserved
