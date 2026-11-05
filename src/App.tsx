import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { posts } from "./lib/posts";
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

// Display mock blog data to verify our posts are available.
function BlogPage() {
  return (
    <section>
      <h1>Blog Posts</h1>

      <p>Available articles: {posts.length}</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Slug: {post.slug}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Configure the application's current routes.
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

          {/* Redirect unknown routes to the homepage for now. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
