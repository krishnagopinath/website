import { metaTagsBuilder } from "~/utils/metaTagsBuilder";
import type { MetaFunction } from "@remix-run/node";
import { Text } from "~/components/Text";
import About from "./about.mdx";


export const meta: MetaFunction = () => metaTagsBuilder("Home");

export default function AboutPage() {
  return (
    <Text>
      <About />
    </Text>
  );
}
