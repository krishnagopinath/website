import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import resumeData from "./resume.json";
import { metaTagsBuilder } from "~/utils/metaTagsBuilder";

type LoaderData = { resumeData: ResumeSchema };

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ resumeData });
};

export const meta: MetaFunction = () => metaTagsBuilder("Resume");

export default function ResumePage() {
  const data = useLoaderData<LoaderData>();

  return <div>Hello this is resume page</div>;
}
