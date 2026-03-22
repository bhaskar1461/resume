# Bhaskar Sharma Resume

Single-page React resume tailored for software engineering, backend, and data-focused roles. The app is self-contained, ATS-friendly, and ready to build for Azure deployment without relying on external CMS content.

## Tech Stack

- React
- TypeScript
- CSS
- Create React App build pipeline

## Local Development

Use Node `20.x` to match the project runtime.

1. Install dependencies:

```bash
npm ci
```

2. Start the dev server:

```bash
npm start
```

3. Create a production build:

```bash
npm run build
```

## Azure Deployment

### Azure Static Web Apps

Recommended for this project.

1. Push this code to your own GitHub repository.
2. In the Azure portal, create a `Static Web App`.
3. Choose `GitHub` as the source and connect your repository and `main` branch.
4. Use these build settings:
   App location: `/`
   Api location: leave empty
   Output location: `build`
5. Azure can generate a workflow automatically, or you can use the included workflow at `.github/workflows/azure-static-web-apps.yml`.
6. If you use the included workflow manually, add the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN` from your Static Web App deployment token.
7. `public/staticwebapp.config.json` is included so refreshes and direct links work correctly after deployment.

Current repo note:

- The current `origin` remote still points to the original template repository, so push this resume to a repository under your own GitHub account before connecting Azure.

### Azure App Service

1. Build the app with `npm run build`.
2. Upload the contents of `build/`.
3. `public/web.config` is included so the site can serve the React app correctly on Azure App Service / IIS.

## Resume Content

The resume is centered on:

- Backend development
- REST APIs
- Database systems
- Cloud deployment basics
- Data engineering interest areas such as ETL and scalable services
