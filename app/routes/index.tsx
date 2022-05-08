import type { MetaFunction } from "@remix-run/node";
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
    <div className="prose">
      <About />
    </div>
  );
}
