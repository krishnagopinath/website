import React from "react"

import About from "../components/index/about"
import Header from "../components/index/header"
import Main from "../components/main"
import Meta from "../components/meta"
import ResumeLinks from "../components/index/resume-links"
import Social from "../components/index/social"

const IndexPage = () => (
  <Main>
    <Meta title="Home" />
    <Header />
    <ResumeLinks />
    <About />
    <Social />
  </Main>
)

export default IndexPage
