import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "rebass/styled-components"

import iconMap from "../../utils/iconMap"

const StyledLink = styled(Link)`
  color: #000000;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

/**
 * Simple social icon display component
 *
 * @param {object} props
 */
const SocialIcon = ({ networkUrl, networkName }) => {
  const Icon =
    (networkName ? iconMap[networkName.toLowerCase()] : null) || iconMap.default

  return (
    <StyledLink target="_blank" href={networkUrl}>
      <Icon size={28} />
    </StyledLink>
  )
}

SocialIcon.propTypes = {
  networkName: PropTypes.string.isRequired,
  networkUrl: PropTypes.string.isRequired,
}

export default SocialIcon
