import React from "react"
import { Flex, Box } from "rebass/styled-components"

import Meta from "../components/meta"
import Main from "../components/main"
import Separator from "../components/separator"
import Header from "../components/resume/header"
import WorkExperience from "../components/resume/work-experience"
import Education from "../components/resume/education"
import Projects from "../components/resume/projects"
import Skills from "../components/resume/skills"

const ResumePage = () => {
  return (
    <Main>
      <Meta title="Resume" />
      <Flex flexDirection="column" flexWrap="wrap">
        <Box marginBottom={3}>
          <Header />
          <Separator />
        </Box>

        <Box marginBottom={2}>
          <WorkExperience />
          <Separator />
        </Box>

        <Box marginBottom={2}>
          <Projects />
          <Separator />
        </Box>

        <Box marginBottom={2}>
          <Education />
          <Separator />
        </Box>

        <Box marginBottom={2}>
          <Skills />
          <Separator />
        </Box>
      </Flex>
    </Main>
  )
}

export default ResumePage
