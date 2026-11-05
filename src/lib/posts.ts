// Define the structure of a blog post.
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    content: string;
}

// Store mock blog posts in memory.
// Each slug will eventually become part of a dynamic URL.
export const posts: BlogPost[] = [
    {
        id: 1,
        slug: "getting-started-with-react",
        title: "Getting Started with React",
        content:
            "React is a JavaScript library for building user interfaces. " +
            "It allows developers to create reusable components and manage " +
            "application state efficiently. Learning React is an important " +
            "step toward building modern web applications.",
    },
    {
        id: 2,
        slug: "understanding-typescript",
        title: "Understanding TypeScript",
        content:
            "TypeScript extends JavaScript by adding static typing. " +
            "It helps developers catch errors before running their code " +
            "and makes large applications easier to maintain. " +
            "TypeScript works especially well with React.",
    },
    {
        id: 3,
        slug: "react-router-basics",
        title: "React Router Basics",
        content:
            "React Router enables navigation between pages in a React " +
            "application without requiring full page reloads. " +
            "Dynamic routes allow developers to create reusable pages " +
            "that display different content based on URL parameters.",
    },
    {
        id: 4,
        slug: "managing-state-with-context",
        title: "Managing State with Context",
        content:
            "The React Context API allows components to share state " +
            "without passing props through every level of the component " +
            "tree. Context is useful for authentication, themes, " +
            "and other application-wide information.",
    },
];

// Find a specific post by its URL slug.
// Return undefined when no matching post exists.
export function getPostBySlug(
    slug: string
): BlogPost | undefined {
    return posts.find((post) => post.slug === slug);
}
