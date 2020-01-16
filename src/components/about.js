import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

/**
 * Nested styles for the Markdown => HTML content
 */
const MdHtmlContainer = styled.div`
  > p {
    max-width: 40em;
  }

  & a,
  & a:visited {
    color: ${props => props.theme.colors.primary};
    transition: all 150ms linear 0s;
    padding: 2px;

    &:hover,
    &:focus,
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: white;
    }
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
