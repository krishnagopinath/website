import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { linkStyles } from "../link"

/**
 * Nested styles for the Markdown => HTML content
 */
const MdHtmlContainer = styled.div`
  > p {
    max-width: 40em;
  }

  & a {
    ${linkStyles}
  }
`

/**
 * Shows a summary, sourced from data/about.md
 */
const About = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "//data/about.md/" }) {
        html
      }
    }
  `)

  return (
    <MdHtmlContainer
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  )
}

export default About
