import type { MetaFunction } from "@remix-run/node";
import { SiteHeader } from "~/components/SiteHeader";
import About from "~/data/about.mdx";

export const meta: MetaFunction = () => {
  const title = `Home | krishnagopinath.me`;
  return {
    title,
    "og:title": title,
    "twitter:title": title,
  };
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <div className="prose">
        <About />
      </div>
    </>
  );
}
