import { Link } from "@remix-run/react";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ShowNewTabIconProp = {
  /**
   * If `true`, this component will add an icon next to the link to indicate that it will be opened in a new window.
   */
  showNewTabIcon?: boolean;
};

const NewTabIcon = () => (
  <FaExternalLinkAlt className="inline print:hidden" size={12} />
);

/**
 * Used for redirecting to the external websites.
 *
 * Adds some convenience props & styles to reduce boilerplate.
 * @returns
 */
export const ExternalLink = ({
  href,
  children,
  className = "",
  showNewTabIcon = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & ShowNewTabIconProp) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`primary-link ${className}`}
    >
      {children} {showNewTabIcon && <NewTabIcon />}
    </a>
  );
};

/**
 * Internal link component used for navigating within the website.
 *
 * Adds some convenient styles to reduce boilerplate.
 * @param props
 * @returns
 */
export const InternalLink = (
  props: React.ComponentProps<typeof Link> & ShowNewTabIconProp
) => {
  const showNewTabIcon =
    props.target === "_blank" && props.showNewTabIcon !== false;

  return (
    <Link {...props} className={`primary-link ${props.className || ""}`}>
      {props.children} {showNewTabIcon && <NewTabIcon />}
    </Link>
  );
};
