import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
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
    <li className="max-w-4xl pb-2">
      <strong>{position}</strong>
      &#44;&nbsp;
      <a href={url}>{name}</a>
      &nbsp;&#x2014;&nbsp;
      <i>
        {startDateFormatted} - {endDateFormatted}
      </i>
      &nbsp;&#x2014;&nbsp;
      <i>{location}</i>
      <ul>
        {(highlights || []).map((h, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
        ))}
      </ul>
    </li>
  );
};

export const WorkExperience = ({ work }: { work: WorkExperiences }) => {
  return (
    <div>
      <SubHeading>Experience</SubHeading>
      <div className="text-base">
        <ul className="list-none mx-2">
          {work.map((w) => (
            <CompanyExperience key={w.startDate} work={w} />
          ))}
        </ul>
      </div>
    </div>
  );
};
