import { Link } from "@remix-run/react";
import React from "react";

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
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`primary-link ${className}`}
    >
      {children}
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
export const InternalLink = (props: React.ComponentProps<typeof Link>) => {
  return (
    <Link {...props} className={`primary-link ${props.className || ""}`}>
      {props.children}
    </Link>
  );
};
