import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "theme-ui"

// Importing global font
import "typeface-open-sans"

/**
 * Main layout component that wraps all of the website
 *
 * @param {object} props
 */
const Main = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          fontSize: [2, 2, 3],
          paddingX: 2,
          width: "100%",
        }}
      >
        <main>{children}</main>
      </Box>
    </Flex>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
