import React from "react"
import { Styled } from "theme-ui"

import theme from "../gatsby-plugin-theme-ui/index"

export const linkStyles = theme.styles.a

/**
 * Generic link component
 *
 * @param {object} props
 */
const Link = props => <Styled.a target="_blank" {...props} />

export default Link
