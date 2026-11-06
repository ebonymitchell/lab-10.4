import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
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

// Temporary authentication status display.
// We will replace this with conditional navigation in Commit 9.
function AuthStatus() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <section>
      <p>
        Authentication status:{" "}
        <strong>
          {isAuthenticated ? "Logged In" : "Logged Out"}
        </strong>
      </p>

      {isAuthenticated && (
        <button type="button" onClick={logout}>
          Log Out
        </button>
      )}

      {!isAuthenticated && (
        <Link to="/login">Go to Login</Link>
      )}
    </section>
  );
}

// Define routes and shared application layout.
function AppContent() {
  return (
    <div className="app">
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <AuthStatus />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Make authentication available throughout the application.
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
