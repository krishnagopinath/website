import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import React from "react";
import { ExternalLink } from "~/components/Link";

const HeaderUl = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-none mx-2">{children}</ul>;
};

const HeaderLi = ({ url, text }: { url: string; text?: string }) => {
  return (
    <li className="max-w-4xl">
      <ExternalLink href={url}>{text || url}</ExternalLink>
    </li>
  );
};

export const Header = ({ basics }: { basics: ResumeSchema["basics"] }) => {
  if (!basics) return <></>;

  const { name, email, url, profiles } = basics;

  // Get just the professional profiles.. no IG!
  const professionalProfileLinks = (profiles || [])
    .filter((p) => {
      const isSocial = ["twitter", "instagram"].includes(
        (p.network || "").toLowerCase()
      );
      return !isSocial;
    })
    .map((p) => p.url || "");

  return (
    <div className="flex items-center flex-wrap">
      <div>
        {name && <h1 className="font-normal mb-2">{name.toUpperCase()}</h1>}
      </div>
      <div className="text-sm pl-8">
        <div className="flex flex-wrap">
          <HeaderUl>
            {url && <HeaderLi url={url} />}
            <HeaderLi url={`mailto:${email}`} text={email} />
          </HeaderUl>
          <HeaderUl>
            {professionalProfileLinks.map((link) => (
              <HeaderLi key={link} url={link} />
            ))}
          </HeaderUl>
        </div>
      </div>
    </div>
  );
};
