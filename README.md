# React Jobs

A job listing app built with React, Vite and Tailwind CSS. You can browse, view, add, edit and delete job postings. A mock REST API from [json-server](https://github.com/typicode/json-server) serves the data.

I built this project while following a React crash course.

## Features

- **Browse jobs:** the home page shows the 3 most recent jobs, and `/jobs` lists all of them
- **Job details:** each job has its own page with the description, salary and company contact info
- **Add a job:** fill in a form with the job and company details
- **Edit a job:** update an existing listing
- **Delete a job:** remove a listing after a confirmation prompt
- **Toast notifications:** success and error messages via `react-toastify`
- **Loading spinner** while jobs are being fetched
- **404 page** for unknown routes

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev) | UI library |
| [Vite](https://vite.dev) | Dev server and build tool |
| [React Router 7](https://reactrouter.com) | Routing and data loaders |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [json-server](https://github.com/typicode/json-server) | Mock REST API |
| [react-icons](https://react-icons.github.io/react-icons/) | Icons |
| [react-toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [react-spinners](https://www.davidhu.io/react-spinners/) | Loading spinner |


### Running the app

The app needs **two processes** running at the same time, so open two terminals.

**Terminal 1: start the mock API** (runs on port 5000):

```bash
npm run server
```

**Terminal 2: start the React dev server** (runs on port 3000):

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> The Vite dev server forwards every request that starts with `/api` to `http://localhost:5000` (see [vite.config.js](vite.config.js)). For example, `/api/jobs` becomes `http://localhost:5000/jobs`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run server` | Start json-server on port 5000, watching `src/jobs.json` |
| `npm run build` | Build the app for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── assets/Images/      # Logo
├── components/         # Reusable UI pieces
│   ├── Card.jsx
│   ├── Hero.jsx
│   ├── HomeCards.jsx
│   ├── JobListing.jsx
│   ├── JobListings.jsx
│   ├── Navbar.jsx
│   ├── Spinner.jsx
│   └── ViewAllJobs.jsx
├── layouts/
│   └── MainLayout.jsx  # Shared layout (navbar + page outlet)
├── pages/
│   ├── HomePage.jsx
│   ├── JobsPage.jsx
│   ├── JobPage.jsx     # Includes jobLoader for fetching a single job
│   ├── AddJobPage.jsx
│   ├── EditJobPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx             # Routes and API functions (add / update / delete)
├── main.jsx            # Entry point
├── index.css           # Tailwind import
└── jobs.json           # Mock database used by json-server
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home page with hero, cards and recent jobs |
| `/jobs` | All job listings |
| `/jobs/:id` | Single job details |
| `/add-job` | Add a new job |
| `/edit-job/:id` | Edit an existing job |
| `*` | 404 Not Found |

## API Endpoints

json-server serves these endpoints from `src/jobs.json`:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/jobs` | Get all jobs (supports `?_limit=3`) |
| GET | `/jobs/:id` | Get a single job |
| POST | `/jobs` | Create a job |
| PUT | `/jobs/:id` | Update a job |
| DELETE | `/jobs/:id` | Delete a job |

Changes you make in the app are written straight to `src/jobs.json`.

### Job data shape

```json
{
  "id": "1",
  "title": "Senior React Developer",
  "type": "Full-Time",
  "location": "Boston, MA",
  "description": "...",
  "salary": "$70K - $80K",
  "company": {
    "name": "NewTek Solutions",
    "description": "...",
    "contactEmail": "contact@teksolutions.com",
    "contactPhone": "555-555-5555"
  }
}
```

## Acknowledgments

Based on the React crash course project by [Traversy Media](https://www.youtube.com/@TraversyMedia).
