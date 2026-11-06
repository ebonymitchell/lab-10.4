import {
    Navigate,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

// Display a login page and handle authentication redirects.
export default function Login() {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Read the route the visitor originally attempted to access.
    // Default to the blog when no previous destination exists.
    const from = location.state?.from;
    const destination =
        from && typeof from.pathname === "string"
            ? `${from.pathname}${from.search ?? ""}${from.hash ?? ""}`
            : "/blog";

    // Simulate login and return to the intended destination.
    function handleLogin() {
        login();
        navigate(destination, { replace: true });
    }

    // Already authenticated visitors do not need to log in again.
    if (isAuthenticated) {
        return <Navigate to={destination} replace />;
    }

    return (
        <section className="login-page">
            <h1>Log In</h1>

            <p>
                Sign in to access the protected admin dashboard.
            </p>

            <button type="button" onClick={handleLogin}>
                Log In
            </button>
        </section>
    );
}
