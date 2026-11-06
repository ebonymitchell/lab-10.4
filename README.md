# Dynamic Routing Blog

A React and TypeScript blog application demonstrating dynamic routing, React Context authentication, and protected routes.

## Features

- Blog index displaying article previews
- Dynamic blog post pages using URL slugs
- Post lookup using React Router's `useParams`
- Custom 404 page and missing-post handling
- Simulated login and logout using React Context
- Authentication-aware navigation
- Protected admin dashboard
- Redirect to login when accessing protected routes
- Return to the originally requested page after login
- Responsive blog layout

## Technologies

- React
- TypeScript
- Vite
- React Router
- React Context API
- CSS

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/dynamic-routing-blog.git
```

Navigate into the project:

```bash
cd dynamic-routing-blog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/blog` | Blog index |
| `/blog/:slug` | Individual blog post |
| `/login` | Simulated login page |
| `/admin` | Protected admin dashboard |
| `*` | Custom 404 page |

## Authentication

The application uses React Context to simulate authentication.

Users can log in by clicking the Log In button. Once authenticated, the navigation displays the Admin link and Log Out button.

Unauthenticated users attempting to visit `/admin` are redirected to `/login`.

After logging in, users are returned to their originally requested page.

Authentication is stored in React state and resets when the browser refreshes.

This is a demonstration of client-side authentication and is not intended for production security.

## Build

Run the production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   └── ProtectedRoute.tsx
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   └── posts.ts
├── pages/
│   ├── Admin.tsx
│   ├── BlogIndex.tsx
│   ├── BlogPost.tsx
│   ├── Login.tsx
│   └── NotFound.tsx
├── App.tsx
├── App.css
└── index.css
```

## Assignment

Per Scholas — Lab 4: Dynamic Routing

This project demonstrates dynamic URL parameters, reusable blog pages, React Context authentication, and protected navigation.
