import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Display a simple login page using our authentication context.
export default function Login() {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    // Simulate authentication and redirect to the blog.
    function handleLogin() {
        login();
        navigate("/blog", { replace: true });
    }

    // Prevent authenticated users from seeing the login page.
    if (isAuthenticated) {
        return <Navigate to="/blog" replace />;
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
