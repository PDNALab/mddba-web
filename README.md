# MDDB America Website

A static website for MDDB America built for GitHub Pages hosting and future domain deployment at `mddba.com`.

## Project Overview

This repository contains a modernized static website structure for the MDDB America web presence, with a focus on reusable assets, clean organization, and GitHub Pages compatibility.

## Repository Structure

- `index.html` — Home page
- `pages/` — Secondary pages for partners, news, events, publications, and community
- `assets/`
  - `css/` — Stylesheets
  - `js/` — JavaScript files and page logic
  - `images/` — Image assets, logos, icons
  - `videos/` — Video assets
- `docs/` — Deployment and documentation guidance

## Local Preview

To preview the website locally, open `index.html` in a browser or serve the folder using a simple HTTP server.

Example using Python 3:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This project is designed for GitHub Pages deployment.

- Use the repository root as the publishing source for the site.
- Ensure all asset paths remain relative so the site works correctly on GitHub Pages.
- For a custom domain like `mddba.com`, configure a `CNAME` file and update DNS records as described in `docs/deployment.md`.

## Contribution

See `CONTRIBUTING.md` for contribution guidelines.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

