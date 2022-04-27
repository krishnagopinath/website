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
import { ExternalLink } from "~/components/ExternalLink";
import { basics } from "~/features/resume/resume.json";

const ArrowRightIcon = () => (
  <FaArrowRight className="align-middle inline" size={12} />
);

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

const SocialLink = ({
  url,
  networkName,
}: {
  url: string;
  networkName: string;
}) => {
  return (
    <div className="pr-4">
      <ExternalLink href={url} className="text-text hover:text-primary">
        {{
          stackoverflow: <FaStackOverflow size={28} />,
          twitter: <FaTwitter size={28} />,
          instagram: <FaInstagram size={28} />,
          linkedin: <FaLinkedin size={28} />,
          github: <FaGithub size={28} />,
          email: <FaEnvelope size={28} />,
        }[networkName.toLocaleLowerCase()] || <FaQuestionCircle size={28} />}
      </ExternalLink>
    </div>
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
