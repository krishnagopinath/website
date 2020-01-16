import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "rebass/styled-components"

import SocialIcon from "./social-icon"

const SocialIconContainer = ({ network, url }) => (
  <Box px={[3, 2]} key={network}>
    <SocialIcon networkName={network} networkUrl={url} />
  </Box>
)

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
        <Box pr={[3, 2]} key="GMail">
          <SocialIcon networkName="GMail" networkUrl={`mailto:${email}`} />
        </Box>

        {profiles.map(p => (
          <Box px={[3, 2]} key={p.network}>
            <SocialIcon networkName={p.network} networkUrl={p.url} />
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default Social
