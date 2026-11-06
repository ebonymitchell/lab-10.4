import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Protect child routes from unauthenticated visitors.
export default function ProtectedRoute() {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    // Redirect logged-out visitors to the login page.
    // Remember the original destination so we can return later.
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    // Render the protected child route when authenticated.
    return <Outlet />;
}
