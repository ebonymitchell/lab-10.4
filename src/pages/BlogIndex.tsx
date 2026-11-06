import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

// Display blog post previews with links to full articles.
export default function BlogIndex() {
  return (
    <section>
      <h1>Blog Posts</h1>
      <p>Explore our latest articles.</p>

      <ul>
        {posts.map((post) => {
          // Show a short preview instead of the full article.
          const preview =
            post.content.length > 120
              ? `${post.content.slice(0, 120).trimEnd()}...`
              : post.content;

          return (
            <li key={post.id}>
              <article>
                <h2>
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p>{preview}</p>

                <Link to={`/blog/${post.slug}`}>
                  Read Article
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
