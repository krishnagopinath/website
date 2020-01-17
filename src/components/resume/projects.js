import React from "react"
import { Box } from "rebass/styled-components"
import styled from "styled-components"

import SubHeading from "../sub-heading"
import Link from "../link"
import { List, ListItem } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const StyledListItem = styled(ListItem)`
  padding-bottom: 0.1em;
`

const Project = ({ description, name, url }) => {
  return (
    <StyledListItem>
      <Link href={url}>
        <strong>{name}</strong>
      </Link>
      :&nbsp;<span>{description}</span>
    </StyledListItem>
  )
}

const Projects = () => {
  const { projects } = useResumeQuery()

  return (
    <>
      <SubHeading>Projects</SubHeading>
      <Box fontSize={2}>
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
