import { Outlet } from "@remix-run/react";

export default function PostsPage() {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="prose">
        <Outlet />
      </div>
    </div>
  );
}
