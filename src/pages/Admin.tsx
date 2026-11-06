import { useAuth } from "../contexts/AuthContext";

// Display the protected admin dashboard.
export default function Admin() {
    const { isAuthenticated } = useAuth();

    return (
        <section className="admin-page">
            <h1>Admin Dashboard</h1>

            <p>Welcome to the Admin Dashboard.</p>

            <p>
                Authentication status:{" "}
                <strong>
                    {isAuthenticated ? "Authenticated" : "Not Authenticated"}
                </strong>
            </p>

            <p>
                This page is only accessible to logged-in users.
            </p>
        </section>
    );
}
