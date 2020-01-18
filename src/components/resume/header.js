import React from "react"
import styled from "styled-components"
import { Box, Flex } from "rebass/styled-components"

import Heading from "../heading"
import Link from "../link"
import { List } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"

const StyledList = styled(List)`
  padding-left: 2em;
`

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
    <Flex alignItems="center" flexWrap="wrap">
      <Box>
        <Heading>{name.toUpperCase()}</Heading>
      </Box>
      <Box fontSize={1}>
        <Flex flexWrap="wrap">
          <StyledList>
            <li>
              <Link href={website}>{website}</Link>
            </li>
            <li>
              <Link href={`mailto:${email}`}>{email}</Link>
            </li>
            <li>
              <Link href={`tel:${phone}`}>{phone}</Link>
            </li>
          </StyledList>
          <StyledList>
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
          </StyledList>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
