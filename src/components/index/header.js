import React from "react"
import Heading from "../heading"

import useResumeQuery from "../../hooks/useResumeQuery"

/**
 * Header for the index page
 */
const Header = () => {
  const { basics } = useResumeQuery()
  const firstName = basics.name.split(" ")[0]

  return (
    <Heading>
      Hello, I'm {firstName}&nbsp;
      <span role="img" aria-label="Peace emoji">
        ✌️
      </span>
    </Heading>
  )
}

export default Header
