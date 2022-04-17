import { Link } from "@remix-run/react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaQuestionCircle,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa/";
import { basics } from "~/src/resume/resume.json";

const ArrowRightIcon = () => (
  <FaArrowRight className="align-middle inline" size={12} />
);

export const ResumeLinks = () => {
  return (
    <>
      <Link className="primary-button" to="/resume">
        Résumé <ArrowRightIcon />
      </Link>
      <a
        href="https://github.com/krishnagopinath/website/raw/master/files/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="primary-button ml-3"
      >
        Résumé (PDF) <ArrowRightIcon />
      </a>
    </>
  );
};

const SocialLink = ({
  url,
  networkName,
}: {
  url: string;
  networkName: string;
}) => {
  return (
    <a
      className="pr-4 text-text hover:text-primary"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {{
        stackoverflow: <FaStackOverflow size={28} />,
        twitter: <FaTwitter size={28} />,
        instagram: <FaInstagram size={28} />,
        linkedin: <FaLinkedin size={28} />,
        github: <FaGithub size={28} />,
        email: <FaEnvelope size={28} />,
      }[networkName.toLocaleLowerCase()] || <FaQuestionCircle size={28} />}
    </a>
  );
};

export const SocialLinks = () => {
  const { profiles, email } = basics;

  return (
    <div className="flex">
      <SocialLink networkName="email" url={`mailto:${email}`} />
      {profiles.map((p) => (
        <SocialLink networkName={p.network} url={p.url} key={p.network} />
      ))}
    </div>
  );
};
