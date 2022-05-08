import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { List, ListItem } from "../List";
import { SubHeading } from "./SubHeading";

type SkillEntries = NonNullable<ResumeSchema["skills"]>;
type SkillEntry = ValuesType<SkillEntries>;

const SkillRow = ({ name, keywords }: SkillEntry) => {
  return (
    <ListItem>
      <strong>{name}</strong>:&nbsp;{keywords && keywords.join(", ")}
    </ListItem>
  );
};

export const Skills = ({ data }: { data: SkillEntries }) => {
  return (
    <>
      <SubHeading>Skills</SubHeading>
      <List>
        {data.map((d) => (
          <SkillRow key={d.name} {...d} />
        ))}
      </List>
    </>
  );
};
