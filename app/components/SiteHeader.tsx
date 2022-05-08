import { Link } from "@remix-run/react";
import { ExternalLink } from "./ExternalLink";
import { Separator } from "./Separator";

export const SiteHeader = () => {
  return (
    <div className="prose mb-3 w-full max-w-full print:hidden">
      <h2 className="mb-2">Hello, I'm Krishna 🧑🏽‍💻</h2>
      <p className="my-3">
        <Link className="primary-link mr-4" to="/">
          About
        </Link>
        <Link className="primary-link mr-4" to="/resume">
          Résumé
        </Link>
        <ExternalLink
          href="https://github.com/krishnagopinath/website/raw/master/files/resume.pdf"
          className="primary-link mr-4"
        >
          Résumé (PDF)
        </ExternalLink>
        <Link className="primary-link mr-4" to="/posts">
          Blog
        </Link>
      </p>
      <Separator />
    </div>
  );
};
