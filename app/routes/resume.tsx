import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import resumeData from "~/data/resume.json";
import { metaTagsBuilder } from "~/utils/metaTagsBuilder";
import { Header } from "~/components/Header";
import { ResumeRowContainer } from "~/components/ResumeRowContainer";
import { WorkExperience } from "~/components/WorkExperience";
import { Projects } from "~/components/Projects";
import { Education } from "~/components/Education";
import { Skills } from "~/components/Skills";
import { Footer } from "~/components/Footer";

type LoaderData = { resumeData: ResumeSchema };

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ resumeData });
};

export const meta: MetaFunction = () => metaTagsBuilder("Resume");

export default function ResumePage() {
  const { resumeData } = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col flex-wrap prose leading-tight max-w-none">
      <ResumeRowContainer>
        <Header basics={resumeData.basics} />
      </ResumeRowContainer>
      <ResumeRowContainer>
        <WorkExperience data={resumeData.work || []} />
      </ResumeRowContainer>
      <ResumeRowContainer>
        <Projects data={resumeData.projects || []} />
      </ResumeRowContainer>
      <ResumeRowContainer>
        <Education data={resumeData.education || []} />
      </ResumeRowContainer>
      <ResumeRowContainer>
        <Skills data={resumeData.skills || []} />
      </ResumeRowContainer>
      <Footer lastModified={resumeData.meta?.lastModified || ''} />
    </div>
  );
}
