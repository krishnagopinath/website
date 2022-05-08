import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaQuestionCircle,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa/";
import { ExternalLink } from "~/components/Link";
import { basics } from "~/data/resume.json";

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
