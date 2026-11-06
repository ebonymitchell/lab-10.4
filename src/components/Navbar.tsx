import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Display navigation links based on authentication status.
export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    // Log out and return the user to the public blog.
    function handleLogout() {
        logout();
        navigate("/blog", { replace: true });
    }

    return (
        <nav aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>

            {isAuthenticated ? (
                <>
                    {/* Admin navigation is only visible when logged in. */}
                    <Link to="/admin">Admin</Link>

                    <button type="button" onClick={handleLogout}>
                        Log Out
                    </button>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </nav>
    );
}
