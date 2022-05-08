import { ExternalLink, InternalLink } from "./Link";
import { Separator } from "./Separator";

export const SiteHeader = () => {
  return (
    <div className="prose mb-3 w-full max-w-full print:hidden">
      <h2 className="mb-2">Hello, I'm Krishna 🧑🏽‍💻</h2>
      <p className="my-3">
        <InternalLink className="mr-4" to="/">
          About
        </InternalLink>
        <InternalLink className="mr-4" to="/resume">
          Résumé
        </InternalLink>
        <ExternalLink
          href="https://github.com/krishnagopinath/website/raw/master/files/resume.pdf"
          className="mr-4"
        >
          Résumé (PDF)
        </ExternalLink>
        <InternalLink className="mr-4" to="/posts">
          Writing
        </InternalLink>
      </p>
      <Separator />
    </div>
  );
};
