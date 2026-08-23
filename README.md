# Gadesh Blog

A full-stack blog application built with Node.js, Express, and EJS. Users can create, view, edit, and delete blog posts through a clean, responsive interface styled with Bootstrap.

Posts are stored in memory for this version, so no database is required — content resets whenever the server restarts.

## Features

- **Create posts** — write and publish new blog posts from the home page or profile page
- **View posts** — see all published posts on the profile page, newest first
- **Edit posts** — update existing posts in place without leaving the page
- **Delete posts** — remove posts with a single click
- **Responsive design** — works smoothly on both desktop and mobile

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — server and routing
- **EJS** — templating engine for dynamic HTML
- **Bootstrap 5** — layout and styling
- **Vanilla JavaScript** — client-side interactivity (edit toggling, auto-expanding textareas)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/gadesh-blog.git
   cd gadesh-blog
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   node index.js
   ```

4. Open your browser to
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── index.js              # Express server & routes
├── views/
│   ├── index.ejs          # Home page
│   ├── profile.ejs        # Profile page (view/edit/delete posts)
│   ├── contact.ejs        # Contact page
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   └── main.css           # Site styling
└── package.json
```

## Notes

This is a learning project built as part of a full-stack web development course. Posts are held in an in-memory array rather than a database, so all data is temporary and will be lost on server restart — a database-backed version may follow as a future iteration.
