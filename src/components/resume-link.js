import React, { useCallback } from "react"
import { navigate } from "gatsby"
import { Button } from "rebass/styled-components"

const ResumeLink = () => {
  const handleClick = useCallback(() => navigate("/resume/"), [])

  return (
    <Button variant="primary" onClick={handleClick}>
      Resume&nbsp;&nbsp;&#8594;
    </Button>
  )
}

export default ResumeLink
