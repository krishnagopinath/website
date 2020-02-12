/** @jsx jsx */
import { jsx } from "theme-ui"

/**
 * Generic unordered list (`ul`), with some minimal tweaks
 */
export const List = props => {
  return (
    <ul
      sx={{
        listStyleType: "none",
        paddingLeft: 0,
        marginTop: "0.4em",
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
      }}
      {...props}
    />
  )
}

/**
 * Generic list item (`li`), with some minimal tweaks
 */
export const ListItem = props => {
  return (
    <li
      sx={{
        paddingBottom: "0.5em",
        maxWidth: "55em",
      }}
      {...props}
    />
  )
}
