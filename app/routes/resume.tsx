import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import resumeData from "~/data/resume.json";
import { Header } from "~/components/resume/Header";
import { ResumeRowContainer } from "~/components/resume/RowContainer";
import { WorkExperience } from "~/components/resume/WorkExperience";
import { Projects } from "~/components/resume/Projects";
import { Education } from "~/components/resume/Education";
import { Skills } from "~/components/resume/Skills";
import { Footer } from "~/components/resume/Footer";

type LoaderData = { resumeData: ResumeSchema };

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ resumeData });
};

export const meta: MetaFunction = () => {
  const title = `Resume | krishnagopinath.me`;
  return {
    title,
    "og:title": title,
    "twitter:title": title,
  };
};


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
