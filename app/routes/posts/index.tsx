import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { InternalLink } from "~/components/Link";
import { List, ListItem } from "~/components/List";
import { formatDate, Formats } from "~/utils/dates";
import compareDesc from "date-fns/compareDesc";

// Blog imports
import * as helloWorld from "./hello-world.mdx";
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
    .filter(({ attributes: { meta } }) => !meta?.draft)
    .sort((p1, p2) => {
      return compareDesc(
        new Date(p1.attributes.meta.date),
        new Date(p2.attributes.meta.date)
      );
    });

  return json<LoaderData>({
    posts: activePosts.map(({ attributes: { meta }, filename }) => ({
      slug: filename.replace(".mdx", ""),
      title: meta.title,
      date: formatDate(meta.date, Formats.DayMonthYear),
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
            <InternalLink to={slug}>{title}</InternalLink>
          </ListItem>
        );
      })}
    </List>
  );
}
