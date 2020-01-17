import React, { useCallback } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { Button } from "rebass/styled-components"

import iconMap from "../../utils/iconMap"

const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border: solid 1px ${props => props.theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }
`

const StyledIcon = styled(iconMap.arrowright)`
  vertical-align: middle;
`

/**
 * The resume button in the index page
 */
const ResumeLink = () => {
  const handleClick = useCallback(() => navigate("/resume/"), [])

  return (
    <StyledButton onClick={handleClick}>
      Résumé <StyledIcon size={16} />
    </StyledButton>
  )
}

export default ResumeLink
