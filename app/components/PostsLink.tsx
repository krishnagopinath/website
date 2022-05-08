import { Link } from "@remix-run/react";
import { ArrowRightIcon } from "~/components/ArrowIcon";

export const PostsLink = () => {
  return (
    <Link className="ml-3 primary-button" to="/posts">
      Blog <ArrowRightIcon />
    </Link>
  );
};