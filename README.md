# Movie Explorer - Assignment 2

A React web application where users can discover and search for TV shows and movies using the TVMaze API. Built as part of the Foundation Program (Assignment 2).

---

## Features

- **Home Page**: Welcome hero section with quick navigation to explore movies.
- **Browse Movies**: Fetches and displays a list of popular TV shows with their posters, ratings, and release years.
- **Search Functionality**: Search for any movie or TV show by name via the search bar.
- **Show Details Modal**: Click "See Details" on any card to open a modal with the full synopsis, genres, release year, and rating.
- **Responsive Design**: Mobile-friendly layout styled with Tailwind CSS.

---

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS, Font Awesome Icons
- **Routing**: React Router
- **API**: [TVMaze API](https://www.tvmaze.com/api)

---

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd Foundation_program_assignment_2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

---

## Project Structure

```
src/
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MovieCard.jsx
│   └── Navbar.jsx
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   └── Movies.jsx
├── services/
│   └── get-movieInfo.jsx
├── App.jsx
├── main.jsx
└── index.css
```
