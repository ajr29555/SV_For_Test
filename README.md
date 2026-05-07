# Movie Watchlist — Fullstack

אפליקציית ניהול סרטים לצפייה. Backend ב-Express + MongoDB, Frontend ב-React + Vite + Tailwind v4 + shadcn-style components.

## Live URLs

- **Frontend**: https://sv-for-test.vercel.app
- **Backend API**: https://sv-movies-api.vercel.app

## Backend Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/movies` | List all movies |
| POST   | `/movies` | Add a new movie (`{title, genre, description}`) |
| DELETE | `/movies/:id` | Delete a movie by ID |
| GET    | `/movies/search?name=` | Search movies by title (case-insensitive) |

## Local Development

```bash
# Backend
cd Express_SV_Test_Template
npm install
# Copy .env.example to .env and fill MONGO_URI, DB_NAME, COLLECTION_NAME
npm run dev    # starts on http://localhost:3000

# Frontend
cd React_SV_Test_Template
npm install
# Optional: set VITE_API_URL in .env.local (defaults to http://localhost:3000)
npm run dev    # starts on http://localhost:5173
```

## Stack

- **Backend**: Express, MongoDB driver (no Mongoose), CORS, dotenv
- **Frontend**: React 19, Vite, Tailwind CSS v4, react-router-dom, lucide-react
- **Deploy**: Vercel (separate projects for Backend and Frontend, monorepo)

## AI Usage

- **Cursor / ChatGPT**: assisted in scaffolding shadcn-style UI components and writing the routing setup.
- The Vercel AI Gateway integration (`POST /movies/generate`) is planned but not yet implemented in this commit.
