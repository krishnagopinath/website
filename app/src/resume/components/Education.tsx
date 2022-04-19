import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { formatDate, Formats } from "../utils";
import { List, ListItem } from "./List";
import { SubHeading } from "./SubHeadling";

type EducationEntries = NonNullable<ResumeSchema["education"]>;
type EducationEntry = ValuesType<EducationEntries>;

const EducationRow = ({ education }: { education: EducationEntry }) => {
  const { area, courses, institution, startDate, endDate, studyType } =
    education;

  // UTC Edge cases be damned! 😜
  const startDateFormatted = startDate
    ? formatDate(startDate, Formats.Year)
    : "Unknown";
  const endDateFormatted = endDate
    ? formatDate(endDate, Formats.Year)
    : "Present";

  return (
    <ListItem>
      <strong>
        {studyType}, {area}, {institution}
      </strong>
      &nbsp;&#x2014;&nbsp;
      <i>
        {startDateFormatted} - {endDateFormatted}
      </i>
      {courses?.length && (
        <div>
          <i>Relevant Courses:&nbsp;{courses.join(", ")}</i>
        </div>
      )}
    </ListItem>
  );
};

export const Education = ({ education }: { education: EducationEntries }) => {
  return (
    <>
      <SubHeading>Education</SubHeading>
      <List>
        {education.map((p) => (
          <EducationRow key={p.institution} education={p} />
        ))}
      </List>
    </>
  );
};
