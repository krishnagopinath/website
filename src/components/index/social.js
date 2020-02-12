/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"

import SocialLink from "./social-link"

import useResumeQuery from "../../hooks/useResumeQuery"

/**
 * Shows a bunch of social links
 */
const Social = () => {
  const { basics } = useResumeQuery()
  const { profiles, email } = basics

  return (
    <Flex>
      <Box
        sx={{
          paddingRight: [3, 2],
        }}
        key="GMail"
      >
        <SocialLink networkName="GMail" networkUrl={`mailto:${email}`} />
      </Box>

      {profiles.map(p => (
        <Box
          sx={{
            paddingX: [3, 2],
          }}
          key={p.network}
        >
          <SocialLink networkName={p.network} networkUrl={p.url} />
        </Box>
      ))}
    </Flex>
  )
}

export default Social
