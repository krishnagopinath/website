import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  const title = `Writing | krishnagopinath.me`;
  return {
    title,
    "og:title": title,
    "twitter:title": title,
  };
};

export default function PostsPage() {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="prose">
        <Outlet />
      </div>
    </div>
  );
}
