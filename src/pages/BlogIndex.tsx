import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

// Display all available blog posts with links to their pages.
export default function BlogIndex() {
    return (
        <section>
            <h1>Blog Posts</h1>
            <p>Explore our latest articles.</p>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <article>
                            <h2>
                                <Link to={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p>{post.content}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}
