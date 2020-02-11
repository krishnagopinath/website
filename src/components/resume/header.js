/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"

import Heading from "../heading"
import Link from "../link"
import { List } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const Ul = props => (
  <List
    sx={{
      paddingLeft: "2em",
    }}
    {...props}
  />
)

/**
 * Header component for the resume page
 */
const Header = () => {
  const { basics, meta } = useResumeQuery()
  const { name, email, phone, website, profiles } = basics
  const { lastModified } = meta

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
      <Box
        sx={{
          fontStyle: "italic",
          fontSize: "11px",
          position: "absolute",
          top: 2,
          right: 10,
        }}
      >
        Last Updated on {lastModified}
      </Box>
      <Box>
        <Heading>{name.toUpperCase()}</Heading>
      </Box>
      <Box sx={{ fontSize: 1 }}>
        <Flex
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Ul>
            <li>
              <Link href={website}>{website}</Link>
            </li>
            <li>
              <Link href={`mailto:${email}`}>{email}</Link>
            </li>
            <li>
              <Link href={`tel:${phone}`}>{phone}</Link>
            </li>
          </Ul>
          <Ul>
            <li>
              <Link href={linkedInProfile.url}>{linkedInProfile.url}</Link>
            </li>
            <li>
              <Link href={githubProfile.url}>{githubProfile.url}</Link>
            </li>
            <li>
              <Link href={stackOverflowProfile.url}>
                {stackOverflowProfile.url}
              </Link>
            </li>
          </Ul>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
