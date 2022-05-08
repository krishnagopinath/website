import { Link } from "@remix-run/react";
import { ArrowRightIcon } from "~/components/ArrowIcon";
import { ExternalLink } from "~/components/ExternalLink";

export const ResumeLinks = () => {
  return (
    <>
      <Link className="primary-button" to="/resume">
        Résumé <ArrowRightIcon />
      </Link>
      <ExternalLink
        href="https://github.com/krishnagopinath/website/raw/master/files/resume.pdf"
        className="primary-button ml-3 text-white"
      >
        Résumé (PDF) <ArrowRightIcon />
      </ExternalLink>
    </>
  );
};
