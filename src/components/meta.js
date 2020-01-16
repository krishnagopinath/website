import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Component that adds meta information such as SEO to the <head/> tag
 * @param {object} props
 */
const Meta = ({ title: pageTitle }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { description, title: suffixTitle, author } = siteMetadata
  const title = `${pageTitle} | ${suffixTitle}`

  return (
    <Helmet>
      <html lang="en" />
      <title lang="en">{title}</title>

      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content={author} />
    </Helmet>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Meta
