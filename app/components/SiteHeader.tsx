import { ExternalLink, InternalLink } from "./Link";
import { Separator } from "./Separator";

export const SiteHeader = () => {
  return (
    <div className="prose mb-3 w-full max-w-full">
      <h2 className="mb-2">Hello, I'm Krishna 🧑🏽‍💻</h2>
      <div className="my-3 flex gap-4">
        <InternalLink to="/">About</InternalLink>
        <InternalLink to="/posts">Writing</InternalLink>
        <InternalLink target="_blank" to="/resume">Résumé</InternalLink>
        <ExternalLink href="https://github.com/krishnagopinath/website/raw/master/files/resume.pdf">
          Résumé (PDF)
        </ExternalLink>
      </div>
      <Separator />
    </div>
  );
};
