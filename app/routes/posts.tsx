import { Outlet } from "@remix-run/react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "~/components/ArrowIcon";

export default function PostsPage() {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="prose">
        <Link className="primary-link" to="/"> <ArrowLeftIcon/> Home</Link>
        <h2 className="mt-1">Posts</h2>
        <Outlet />
      </div>
    </div>
  );
}
