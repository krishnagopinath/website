import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { ExternalLink } from "~/components/ExternalLink";
import { formatDate, Formats } from "../utils";
import { SubHeading } from "./SubHeadling";

type WorkExperiences = NonNullable<ResumeSchema["work"]>;
type WorkExperienceEntry = ValuesType<WorkExperiences>;

const CompanyExperience = ({ work }: { work: WorkExperienceEntry }) => {
  const { startDate, endDate, position, name, url, location, highlights } =
    work;

  if (!(startDate && position && name && url && location)) {
    return <></>;
  }

  const startDateFormatted = formatDate(startDate, Formats.MonthAndYear);
  const endDateFormatted = endDate
    ? formatDate(endDate, Formats.MonthAndYear)
    : "Present";

  return (
    <li className="max-w-4xl pb-1">
      <strong>{position}</strong>
      &#44;&nbsp;
      <ExternalLink href={url}>{name}</ExternalLink>
      &nbsp;&#x2014;&nbsp;
      <i>
        {startDateFormatted} - {endDateFormatted}
      </i>
      &nbsp;&#x2014;&nbsp;
      <i>{location}</i>
      <ul className="m-0">
        {(highlights || []).map((h, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
        ))}
      </ul>
    </li>
  );
};

export const WorkExperience = ({ work }: { work: WorkExperiences }) => {
  return (
    <div className="prose prose-sm max-w-none text-base leading-snug">
      <SubHeading>Experience</SubHeading>
      <ul className="list-none p-0">
        {work.map((w) => (
          <CompanyExperience key={w.startDate} work={w} />
        ))}
      </ul>
    </div>
  );
};
