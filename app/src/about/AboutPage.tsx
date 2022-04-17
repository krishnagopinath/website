import { metaTagsBuilder } from "~/utils/metaTagsBuilder";
import About from "./about.mdx";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => metaTagsBuilder("Home");

export default function AboutPage() {
  return <About />;
}
