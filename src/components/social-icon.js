import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Image, Link } from "rebass/styled-components"

const ImageWithHoverFilter = styled(Image)`
  &:hover {
    /*
      ☠️💀⚠️ DON'T TRY THIS AT HOME!
      This crazy filter was added to add hover colors to the SVG images, to match the links' hover behaviour.
      This was obtained for #32cd32 color from the codepen link in this Stackoverflow answer: https://stackoverflow.com/a/53336754/1217785
   */
    filter: invert(82%) sepia(37%) saturate(6179%) hue-rotate(70deg)
      brightness(97%) contrast(84%);
  }
`

/**
 * Simple social icon display component
 *
 * @param {object} props
 */
const SocialIcon = ({ networkUrl, networkName }) => {
  return (
    <Link target="_blank" href={networkUrl}>
      <ImageWithHoverFilter
        width={24}
        title={networkName}
        alt={networkName}
        src={`https://simpleicons.org/icons/${networkName.toLowerCase()}.svg`}
      />
    </Link>
  )
}

SocialIcon.propTypes = {
  networkName: PropTypes.string.isRequired,
  networkUrl: PropTypes.string.isRequired,
}

export default SocialIcon
