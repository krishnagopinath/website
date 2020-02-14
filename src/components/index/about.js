import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { linkStyles } from "../link"

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
    <div
      sx={{
        p: {
          maxWidth: "40em",
        },
        a: linkStyles,
      }}
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  )
}

export default About
