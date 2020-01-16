import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "rebass/styled-components"

import SocialIcon from "./social-icon"

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

  const { profiles: socialProfiles, email } = dataJson.basics
  const profiles = [
    { network: "GMail", url: `mailto:${email}` },
    ...socialProfiles,
  ]

  return (
    <>
      <Flex>
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
