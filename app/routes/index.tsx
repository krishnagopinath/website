import { metaTagsBuilder } from "~/utils/metaTagsBuilder";
import type { MetaFunction } from "@remix-run/node";
import About from "~/data/about.mdx";

export const meta: MetaFunction = () => metaTagsBuilder("Home");

export default function AboutPage() {
  return (
    <div className="prose">
      <About />
    </div>
  );
}
