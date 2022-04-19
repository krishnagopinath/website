import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import resumeData from "./resume.json";
import { metaTagsBuilder } from "~/utils/metaTagsBuilder";
import { Header } from "./components/Header";
import { RowContainer } from "./components/RowContainer";
import { WorkExperience } from "./components/WorkExperience";

type LoaderData = { resumeData: ResumeSchema };

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ resumeData });
};

export const meta: MetaFunction = () => metaTagsBuilder("Resume");

export default function ResumePage() {
  const { resumeData } = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col flex-wrap prose dark:prose-invert max-w-none">
      <RowContainer>
        <Header basics={resumeData.basics} />
      </RowContainer>
      <RowContainer>
        <WorkExperience work={resumeData.work || []} />
      </RowContainer>
    </div>
  );
}