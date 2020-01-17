import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "rebass/styled-components"

import SocialLink from "./social-link"

/**
 * Shows a bunch of social links
 */
const Social = () => {
  const { dataJson } = useStaticQuery(graphql`
    {
      dataJson {
        basics {
          profiles {
            network
            url
            username
          }
          email
        }
      }
    }
  `)

  const { profiles, email } = dataJson.basics

  return (
    <>
      <Flex>
        <Box paddingRight={[3, 2]} key="GMail">
          <SocialLink networkName="GMail" networkUrl={`mailto:${email}`} />
        </Box>

        {profiles.map(p => (
          <Box paddingX={[3, 2]} key={p.network}>
            <SocialLink networkName={p.network} networkUrl={p.url} />
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default Social
