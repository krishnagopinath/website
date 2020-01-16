import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-weight: 400;
  font-style: normal;
`

const Header = () => (
  <StyledH1>
    Hello, I'm Krishna{" "}
    <span role="img" aria-label="Peace emoji symbol">
      ✌️
    </span>
  </StyledH1>
)

export default Header
