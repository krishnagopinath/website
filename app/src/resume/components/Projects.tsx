import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { ExternalLink } from "~/components/ExternalLink";
import { List, ListItem } from "./List";
import { SubHeading } from "./SubHeadling";

type ProjectEntries = NonNullable<ResumeSchema["projects"]>;
type ProjectEntry = ValuesType<ProjectEntries>;

const ProjectRow = ({ url, name, description }: ProjectEntry) => {
  if (!(url && name && description)) return <></>;

  return (
    <ListItem>
      <ExternalLink href={url}>{name}</ExternalLink>
      :&nbsp;<span>{description}</span>
    </ListItem>
  );
};

export const Projects = ({ data }: { data: ProjectEntries }) => {
  return (
    <>
      <SubHeading>Projects</SubHeading>
      <List>
        {data.map((d) => (
          <ProjectRow key={d.name} {...d} />
        ))}
      </List>
    </>
  );
};
