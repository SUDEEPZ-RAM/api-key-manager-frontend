# Vault Frontend

React/Vite client for the API Key Manager. Pages include registration/login, dashboard, key inventory and details, activity, and profile/security settings.

## Requirements

- Node.js 20+
- The API running at `http://localhost:8081` (see `../backend/README.md`)

## Run locally

```powershell
npm ci
npm run dev
```

Open `http://localhost:5173`. Register an account before signing in on a fresh database. By default, the frontend connects to the deployed demo API. To use a local backend, copy `.env.example` to `.env.local` and set `VITE_API_URL=http://localhost:8081/api`.

## Production build

```powershell
npm run build
```

The output is written to `dist/` and is excluded from Git.
