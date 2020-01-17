import React from "react"
import { Box } from "rebass/styled-components"

import SubHeading from "../sub-heading"
import { List, ListItem } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const SkillSet = ({ name, keywords }) => (
  <ListItem>
    <strong>{name}</strong>:&nbsp;{keywords.join(", ")}
  </ListItem>
)

const Education = () => {
  const { skills } = useResumeQuery()

  return (
    <>
      <SubHeading>Skills</SubHeading>
      <Box fontSize={2}>
        <List>
          {skills.map(s => (
            <SkillSet key={s.name} {...s} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default Education
