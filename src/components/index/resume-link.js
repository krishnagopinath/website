import React, { useCallback } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { Button } from "rebass/styled-components"

import iconMap from "../../utils/iconMap"

const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border: solid 1px ${props => props.theme.colors.primary};
  font-size: 0.8em;

  &:hover {
    opacity: 0.7;
  }
`

const StyledIcon = styled(iconMap.arrowright)`
  vertical-align: middle;
`

/**
 * The resume button in the index page
 *
 */
const ResumeLink = () => {
  const handlePageClick = useCallback(() => navigate("/resume/"), [])
  const handlePdfClick = useCallback(
    () =>
      window.open(
        "https://github.com/krishnagopinath/website/raw/master/files/resume.pdf",
        "_blank"
      ),
    []
  )

  return (
    <>
      <StyledButton onClick={handlePageClick}>
        Résumé <StyledIcon size={12} />
      </StyledButton>
      <StyledButton marginLeft={3} onClick={handlePdfClick}>
        Résumé (PDF) <StyledIcon size={12} />
      </StyledButton>
    </>
  )
}

export default ResumeLink
