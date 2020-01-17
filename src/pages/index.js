import React from "react"

import About from "../components/index/about"
import Header from "../components/index/header"
import Main from "../components/main"
import Meta from "../components/meta"
import ResumeLink from "../components/index/resume-link"
import Social from "../components/index/social"

const IndexPage = () => (
  <Main>
    <Meta title="Home" />
    <Header />
    <ResumeLink />
    <About />
    <Social />
  </Main>
)

export default IndexPage
