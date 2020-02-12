export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Open Sans",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#32cd32",
    muted: "#999999",
    seperator: "#00000014",
  },
  buttons: {
    primary: {
      cursor: "pointer",
      backgroundColor: "primary",
      color: "background",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primary",
      fontSize: "0.8em",
      "&:hover": {
        opacity: "0.7",
      },
    },
  },
  links: {
    icon: {
      color: "text",
      ":hover": {
        color: "primary",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      margin: 2,
      WebkitFontSmoothing: "antialiased",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      fontWeight: "heading",
      fontStyle: "normal",
      marginBottom: 2,
    },
    h2: {
      color: "gray",
      fontFamily: "heading",
      fontWeight: "heading",
      fontStyle: "normal",
      textTransform: "uppercase",
      margin: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      maxWidth: "40em",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":visited": {
        cursor: "pointer",
        color: "primary",
        transition: "all 150ms linear 0s",
        padding: "0.1em",
      },
      ":hover, :focus, :hover": {
        color: "background",
        backgroundColor: "primary",
      },
    },
  },
}
