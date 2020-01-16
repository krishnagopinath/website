import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

/**
 * Nested styles for the Markdown => HTML content
 */
const MdHtmlContainer = styled.div`
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    font-weight: 400;
    font-style: normal;
  }

  > p {
    max-width: 40em;
  }

  & a,
  & a:visited {
    color: #32cd32;
    transition: all 150ms linear 0s;
    padding: 2px;

    &:hover,
    &:focus,
    &:hover {
      background-color: #32cd32;
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
