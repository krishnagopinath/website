/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"

import Meta from "../components/meta"
import Main from "../components/main"
import Separator from "../components/separator"
import Header from "../components/resume/header"
import WorkExperience from "../components/resume/work-experience"
import Education from "../components/resume/education"
import Projects from "../components/resume/projects"
import Skills from "../components/resume/skills"
import Footer from "../components/resume/footer"

const SpacedBox = props => (
  <Box
    sx={{
      marginBottom: 2,
    }}
    {...props}
  />
)

const ResumePage = () => {
  return (
    <Main>
      <Meta title="Resume" />
      <Flex
        sx={{
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <Box
          as={SpacedBox}
          sx={{
            marginBottom: 3,
          }}
        >
          <Header />
          <Separator />
        </Box>

        <SpacedBox>
          <WorkExperience />
          <Separator />
        </SpacedBox>

        <SpacedBox>
          <Projects />
          <Separator />
        </SpacedBox>

        <SpacedBox>
          <Education />
          <Separator />
        </SpacedBox>

        <SpacedBox>
          <Skills />
          <Separator />
          <Footer />
        </SpacedBox>
      </Flex>
    </Main>
  )
}

export default ResumePage
