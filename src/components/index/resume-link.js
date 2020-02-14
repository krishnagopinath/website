import React, { useCallback } from "react"
import { Button } from "theme-ui"
import { navigate } from "gatsby"

import iconMap from "../../utils/iconMap"

const ArrowRightIcon = () => (
  <iconMap.arrowright
    sx={{
      verticalAlign: "middle",
    }}
    size={12}
  />
)

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
      <Button variant="primary" onClick={handlePageClick}>
        Résumé <ArrowRightIcon />
      </Button>
      <Button marginLeft={3} onClick={handlePdfClick}>
        Résumé (PDF) <ArrowRightIcon />
      </Button>
    </>
  )
}

export default ResumeLink
