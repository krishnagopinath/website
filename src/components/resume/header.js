import React from "react"
import { Box, Flex } from "theme-ui"

import Heading from "../heading"
import Link from "../link"
import { List, ListItem } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const Ul = props => (
  <Box
    as={List}
    sx={{
      margin: 2,
      marginY: 0,
    }}
    {...props}
  />
)

const Li = props => (
  <Box as={ListItem} sx={{ paddingBottom: "0.15em" }} {...props} />
)

/**
 * Header component for the resume page
 */
const Header = () => {
  const { basics } = useResumeQuery()
  const { name, email, phone, website, profiles } = basics

  const githubProfile = profiles.find(p => p.network.toLowerCase() === "github")
  const stackOverflowProfile = profiles.find(
    p => p.network.toLowerCase() === "stackoverflow"
  )
  const linkedInProfile = profiles.find(
    p => p.network.toLowerCase() === "linkedin"
  )

  return (
    <Flex
      sx={{
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Heading>{name.toUpperCase()}</Heading>
      </Box>
      <Box
        sx={{
          fontSize: 1,
          paddingLeft: [null, 3, 4],
          "@media print": {
            paddingLeft: 4,
          },
        }}
      >
        <Flex
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Ul>
            <Li>
              <Link href={website}>{website}</Link>
            </Li>
            <Li>
              <Link href={`mailto:${email}`}>{email}</Link>
            </Li>
            <Li>
              <Link href={`tel:${phone}`}>{phone}</Link>
            </Li>
          </Ul>
          <Ul>
            <Li>
              <Link href={linkedInProfile.url}>{linkedInProfile.url}</Link>
            </Li>
            <Li>
              <Link href={githubProfile.url}>{githubProfile.url}</Link>
            </Li>
            <Li>
              <Link href={stackOverflowProfile.url}>
                {stackOverflowProfile.url}
              </Link>
            </Li>
          </Ul>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
