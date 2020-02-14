import React from "react"
import { Box } from "theme-ui"

import SubHeading from "../sub-heading"
import { List, ListItem } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const SkillSet = ({ name, keywords }) => (
  <ListItem>
    <strong>{name}</strong>:&nbsp;{keywords.join(", ")}
  </ListItem>
)

/**
 * Skills section in the resume page
 */
const Skills = () => {
  const { skills } = useResumeQuery()

  return (
    <>
      <SubHeading>Skills</SubHeading>
      <Box
        sx={{
          fontSize: 2,
        }}
      >
        <List>
          {skills.map(s => (
            <SkillSet key={s.name} {...s} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default Skills
