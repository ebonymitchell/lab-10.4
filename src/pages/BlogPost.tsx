import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/posts";

// Display an individual blog post based on its URL slug.
export default function BlogPost() {
    // Read the dynamic "slug" parameter from the URL.
    const { slug } = useParams<{ slug: string }>();

    // Find the matching post in our mock data.
    // If slug is missing, use an empty string to avoid errors.
    const post = getPostBySlug(slug ?? "");

    // Handle URLs that do not match any existing post.
    if (!post) {
        return (
            <section>
                <h1>Post not found</h1>
                <p>The article you're looking for doesn't exist.</p>
                <Link to="/blog">Back to Blog</Link>
            </section>
        );
    }

    // Display the selected article.
    return (
        <article>
            <Link to="/blog">Back to Blog</Link>

            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
}
