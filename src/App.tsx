import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import "./App.css";

// Temporary home page.
function HomePage() {
  return (
    <section>
      <h1>Welcome to the Blog</h1>
      <p>Explore articles and learn something new.</p>
      <Link to="/blog">View Blog Posts</Link>
    </section>
  );
}

// Configure static and dynamic routes.
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
          <Route path="/blog" element={<BlogIndex />} />

          {/* The slug identifies which blog post to display. */}
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Unknown routes temporarily redirect home. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
