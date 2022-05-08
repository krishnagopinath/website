import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// Blog imports
import * as helloWorld from "~/routes/posts/hello-world.mdx";
// 👋 NOTE: Add more blog posts here

const allPosts = [
  helloWorld,
  // 👋 NOTE: Add more blog posts here
];

type LoaderData = {
  posts: { title: string; slug: string; date: string }[];
};

export const loader: LoaderFunction = async () => {
  const activePosts = allPosts
    .filter(({ attributes }) => !attributes?.draft)
    .sort((p1, p2) => p1.attributes.date.localeCompare(p2.attributes.date));

  return json<LoaderData>({
    posts: activePosts.map(({ attributes, filename }) => ({
      slug: filename.replace(".mdx", ""),
      title: attributes.title,
      date: new Date(attributes.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    })),
  });
};

export default function PostsPage() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <>
      <h2>Posts</h2>
      <ul className="list-none p-0">
        {posts.map(({ date, title, slug }) => {
          return (
            <li key={slug} className="flex">
              <span className="mr-2 italic">
                <time dateTime={date}>{date}</time>
              </span>
              <Link className="primary-link" to={slug}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
