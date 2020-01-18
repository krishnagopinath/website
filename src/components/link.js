import React from "react"
import { Link as RLink } from "rebass/styled-components"
import styled, { css } from "styled-components"

/**
 * This is used as part of other styles; to prevent duplication, it is being exporting as is!
 */
export const linkStyles = css`
  &,
  &:visited {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: all 150ms linear 0s;
    padding: 0.1em;
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
