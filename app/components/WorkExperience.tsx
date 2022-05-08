import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { ExternalLink } from "~/components/ExternalLink";
import { formatDate, Formats } from "~/utils/dates";
import { List, ListItem } from "./List";
import { SubHeading } from "./SubHeading";

type WorkExperienceEntries = NonNullable<ResumeSchema["work"]>;
type WorkExperienceEntry = ValuesType<WorkExperienceEntries>;

const WorkExperienceRow = ({
  startDate,
  endDate,
  position,
  name,
  url,
  location,
  highlights,
}: WorkExperienceEntry) => {
  if (!(startDate && position && name && url && location)) {
    return <></>;
  }

  const startDateFormatted = formatDate(startDate, Formats.MonthAndYear);
  const endDateFormatted = endDate
    ? formatDate(endDate, Formats.MonthAndYear)
    : "Present";

  return (
    <ListItem>
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
    </ListItem>
  );
};

export const WorkExperience = ({ data }: { data: WorkExperienceEntries }) => {
  return (
    <>
      <SubHeading>Experience</SubHeading>
      <List>
        {data.map((d) => (
          <WorkExperienceRow key={d.startDate} {...d} />
        ))}
      </List>
    </>
  );
};
