import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

// Temporary home page.
// We will create separate page components in later commits.
function HomePage() {
  return (
    <section>
      <h1>Welcome to the Blog</h1>
      <p>Explore articles and learn something new.</p>
      <Link to="/blog">View Blog Posts</Link>
    </section>
  );
}

// Temporary blog page until we implement mock post data.
function BlogPage() {
  return (
    <section>
      <h1>Blog Posts</h1>
      <p>Our blog posts will appear here soon.</p>
    </section>
  );
}

// Set up the application's initial routes.
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Redirect unknown URLs to the home page temporarily. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
