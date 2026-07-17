# Toque Smart Entregas

React + TypeScript + Vite + Tailwind + PWA.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Test the production build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project includes `.github/workflows/deploy.yml`.
The workflow automatically detects whether the repository is:

- a user site: `USERNAME.github.io` → base `/`
- a project site: any other repository → base `/REPOSITORY-NAME/`

In GitHub:

1. Repository → Settings → Pages.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push the complete project to the `main` branch.
4. Open the **Actions** tab and wait for the workflow to finish with a green check.
5. Open the URL shown in the deploy job.

Important: source files must be at the repository root. `package.json`, `vite.config.ts`, `src/`, `public/`, and `.github/` must not be inside an extra folder.

Do not publish the source `index.html` directly with “Deploy from a branch”. Vite must build the project and GitHub Pages must publish the generated `dist` artifact.
