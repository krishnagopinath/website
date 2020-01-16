import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "rebass/styled-components"
import { createGlobalStyle } from "styled-components"

/**
 * Global style block, to set up any global CSS.
 *
 * ⚠️Use sparingly!
 */
const GlobalBodyStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
  }
`

/**
 * Main layout component that wraps all of the website
 *
 * @param {object} props
 */
const Main = ({ children }) => {
  return (
    <>
      <GlobalBodyStyles />
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box fontSize={[2, 2, 3]} padding={3}>
          <main>{children}</main>
        </Box>
      </Flex>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
