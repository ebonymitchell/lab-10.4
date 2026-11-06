import { Link } from "react-router-dom";

// Display a helpful message for unknown application routes.
export default function NotFound() {
    return (
        <section className="not-found">
            <h1>404 - Page Not Found</h1>

            <p>
                Sorry, the page you're looking for doesn't exist.
            </p>

            <Link to="/">Return to Home</Link>
        </section>
    );
}
