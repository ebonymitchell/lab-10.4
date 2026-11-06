import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
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

// Configure the application's static and dynamic routes.
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

          {/* Render a post based on its URL slug. */}
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Render the 404 page for unmatched application URLs. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
