import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { List, ListItem } from "./List";
import { SubHeading } from "./SubHeadling";

type SkillEntries = NonNullable<ResumeSchema["skills"]>;
type SkillEntry = ValuesType<SkillEntries>;

const SkillRow = ({ skill }: { skill: SkillEntry }) => {
  const { name, keywords } = skill;
  return (
    <ListItem>
      <strong>{name}</strong>:&nbsp;{keywords && keywords.join(", ")}
    </ListItem>
  );
};

export const Skills = ({ skills }: { skills: SkillEntries }) => {
  return (
    <>
      <SubHeading>Skills</SubHeading>
      <List>
        {skills.map((s) => (
          <SkillRow key={s.name} skill={s} />
        ))}
      </List>
    </>
  );
};
