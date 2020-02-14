import React from "react"
import { Box } from "theme-ui"
import useResumeQuery from "../../hooks/useResumeQuery"

const Footer = () => {
  const { meta } = useResumeQuery()
  const { lastModified } = meta

  return (
    <Box
      sx={{
        fontStyle: "italic",
        fontSize: "11px",
        color: "muted",
        float: "right",
      }}
    >
      Last Updated on {lastModified}
    </Box>
  )
}

export default Footer
