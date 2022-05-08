import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import React from "react";
import { ExternalLink } from "~/components/ExternalLink";

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

  const { name, email, phone, url, profiles } = basics;
  if (!(name && email && phone && url && profiles)) return <></>;

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
        <h1 className="font-normal mb-2">{name.toUpperCase()}</h1>
      </div>
      <div className="text-sm pl-8">
        <div className="flex flex-wrap">
          <HeaderUl>
            <HeaderLi url={url} />
            <HeaderLi url={`mailto:${email}`} text={email} />
            <HeaderLi url={`tel:${phone}`} text={phone} />
          </HeaderUl>
          <HeaderUl>
            {professionalProfileLinks.map((url) => (
              <HeaderLi key={url} url={url} />
            ))}
          </HeaderUl>
        </div>
      </div>
    </div>
  );
};
