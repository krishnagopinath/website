import React, { useCallback } from "react"
import { navigate } from "gatsby"

import IconMap from "../utils/iconMap"

import Heading from "../components/heading"
import Main from "../components/main"
import Meta from "../components/meta"
import Link from "../components/link"

const NotFoundPage = () => {
  const handleClick = useCallback(e => {
    e.preventDefault()
    navigate("/")
  }, [])

  return (
    <Main>
      <Meta title="Not found" />
      <Heading>
        NOT FOUND{" "}
        <span role="img" aria-label="Crying emoji">
          😭
        </span>{" "}
      </Heading>
      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>

      <Link onClick={handleClick} target="_self">
        <IconMap.arrowleft size={16} /> Head back to the home page
      </Link>
    </Main>
  )
}

export default NotFoundPage
