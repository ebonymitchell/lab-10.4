import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";
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

// Temporary component for testing authentication state.
function AuthStatus() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <section>
      <p>
        Authentication status:{" "}
        <strong>
          {isAuthenticated ? "Logged In" : "Logged Out"}
        </strong>
      </p>

      {isAuthenticated ? (
        <button type="button" onClick={logout}>
          Log Out
        </button>
      ) : (
        <button type="button" onClick={login}>
          Log In
        </button>
      )}
    </section>
  );
}

// Define the application's routes and shared layout.
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Wrap the application in the authentication provider.
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
