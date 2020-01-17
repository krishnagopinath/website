import React from "react"
import { Link as RLink } from "rebass/styled-components"
import styled, { css } from "styled-components"

/**
 * This is used as part of a master style sheet, so exporting this is beneficial!
 */
export const linkStyles = css`
  &,
  &:visited {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: all 150ms linear 0s;
    padding: 2px;
  }

  &:hover,
  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`

const StyledLink = styled(RLink)`
  ${linkStyles}
`

/**
 * Generic link component
 *
 * @param {object} props
 */
const Link = props => <StyledLink target="_blank" {...props} />

export default Link
