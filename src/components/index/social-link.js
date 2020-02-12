import React from "react"
import PropTypes from "prop-types"
import { Link } from "theme-ui"

import iconMap from "../../utils/iconMap"

/**
 * Simple social icon display component
 *
 * @param {object} props
 */
const SocialIcon = ({ networkUrl, networkName }) => {
  const Icon =
    (networkName ? iconMap[networkName.toLowerCase()] : null) || iconMap.default

  return (
    <Link variant="icon" target="_blank" href={networkUrl}>
      <Icon size={28} />
    </Link>
  )
}

SocialIcon.propTypes = {
  networkName: PropTypes.string.isRequired,
  networkUrl: PropTypes.string.isRequired,
}

export default SocialIcon
