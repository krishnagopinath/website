import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  posts: { createdAt: Date; updatedAt: Date; title: string; slug: string }[];
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    posts: [],
  });
};

export default function PostsPage() {
  const { posts } = useLoaderData<LoaderData>();
  console.log("posts", posts);

  return (
    <div>This is the posts list page</div>
  );
}
