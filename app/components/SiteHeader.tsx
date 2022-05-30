import { ExternalLink, InternalLink } from "./Link";
import { Separator } from "./Separator";
import cn from "classnames";

type Props = {
  /**
   * If true, hides the full header at the top of the web page.
   * 
   * Defaults to `false`
   */
  hideHeader?: boolean;
}

export const SiteHeader = ({
  hideHeader = false,
}: Props) => {
  return (
    <div className="prose mb-3 w-full max-w-full">
      {!hideHeader && <h2 className="mb-2">Hello, I'm Krishna 🧑🏽‍💻</h2>}
      <div
        className={cn(
          hideHeader ? "mb-3" : "my-3",
          `flex`,
          `gap-4`
        )}
      >
        <InternalLink to="/">About</InternalLink>
        <InternalLink to="/posts">Writing</InternalLink>
        <InternalLink target="_blank" to="/resume">
          Résumé
        </InternalLink>
        <ExternalLink href="https://github.com/krishnagopinath/website/raw/master/files/resume.pdf">
          PDF Résumé
        </ExternalLink>
      </div>
      <Separator />
    </div>
  );
};
