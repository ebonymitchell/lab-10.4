import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
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

// Define routes and the shared application layout.
function AppContent() {
  return (
    <div className="app">
      <Navbar />

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

// Provide authentication state to all child components.
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
