import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { List, ListItem } from "~/components/List";

// Blog imports
import * as helloWorld from "~/routes/posts/hello-world.mdx";
import { formatDate, Formats } from "~/utils/dates";
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
      date: formatDate(attributes.date, Formats.DayMonthYear),
    })),
  });
};

export default function PostsPage() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <List>
      {posts.map(({ date, title, slug }) => {
        return (
          <ListItem key={slug}>
            <span className="mr-4 italic">
              <time dateTime={date}>{date}</time>
            </span>
            <Link className="primary-link" to={slug}>
              {title}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
