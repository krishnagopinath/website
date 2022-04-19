import type { ResumeSchema } from "@kurone-kito/jsonresume-types";
import type { ValuesType } from "utility-types";
import { ExternalLink } from "~/components/ExternalLink";
import { List, ListItem } from "./List";
import { SubHeading } from "./SubHeadling";

type ProjectEntries = NonNullable<ResumeSchema["projects"]>;
type ProjectEntry = ValuesType<ProjectEntries>;

const Project = ({ project }: { project: ProjectEntry }) => {
  const { url, name, description } = project;
  if (!(url && name && description)) return <></>;

  return (
    <ListItem>
      <ExternalLink href={url}>{name}</ExternalLink>
      :&nbsp;<span>{description}</span>
    </ListItem>
  );
};

export const Projects = ({ projects }: { projects: ProjectEntries }) => {
  return (
    <>
      <SubHeading>Projects</SubHeading>
      <List>
        {projects.map((p) => (
          <Project key={p.name} project={p} />
        ))}
      </List>
    </>
  );
};
