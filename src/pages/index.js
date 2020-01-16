import React from "react"
import { Box } from "rebass/styled-components"

import Header from "../components/header"
import Main from "../components/main"
import Meta from "../components/meta"
import About from "../components/about"
import Social from "../components/social"
import ResumeLink from "../components/resume-link"

const IndexPage = () => (
  <Main>
    <Meta title="Home" />
    <Box>
      <Header />
    </Box>
    <Box>
      <ResumeLink />
    </Box>
    <Box>
      <About />
    </Box>
    <Box my={4}>
      <Social />
    </Box>
  </Main>
)

export default IndexPage
