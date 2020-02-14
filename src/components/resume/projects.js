import React from "react"
import { Box } from "theme-ui"
import SubHeading from "../sub-heading"
import Link from "../link"
import { List, ListItem } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const Project = ({ description, name, url }) => {
  return (
    <Box as={ListItem} sx={{ paddingBottom: "0.1em" }}>
      <Link href={url}>
        <strong>{name}</strong>
      </Link>
      :&nbsp;<span>{description}</span>
    </Box>
  )
}

/**
 * Projects section in the resume page
 */
const Projects = () => {
  const { projects } = useResumeQuery()

  return (
    <>
      <SubHeading>Projects</SubHeading>
      <Box
        sx={{
          fontSize: 2,
        }}
      >
        <List>
          {projects.map(p => (
            <Project key={p.name} {...p} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default Projects
