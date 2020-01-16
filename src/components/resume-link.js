import React, { useCallback } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { Button } from "rebass/styled-components"

const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border: solid 1px ${props => props.theme.colors.primary};

  &:hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }
`

const ResumeLink = () => {
  const handleClick = useCallback(() => navigate("/resume/"), [])

  return (
    <StyledButton onClick={handleClick}>Résumé&nbsp;&nbsp;&#8594;</StyledButton>
  )
}

export default ResumeLink
