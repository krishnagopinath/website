# Krishna Gopinath's Website

![Node CI](https://github.com/krishnagopinath/website/workflows/Node%20CI/badge.svg)

This is the source code for krishnagopinath.me, built with GatsbyJS. There are some interesting things which I over-engineered while building this website:

- The "about" section is sourced from the `data/about.md` file. To understand how this is becoming HTML for the landing page, start with `gatsby-config.js` and continue moving further into `components/about.js` and into it's subcomponents.
- The resume page is sourced from `data/resume.json` and is based on [JSON Resume's schema](https://jsonresume.org/schema/). So if the resume needs to be changed, updating this JSON file should do the trick.
- A PDF version of this resume is automatically generated when we push to `master` through the Github action available in `.github/workflows/main.yml`. This file is then committed back to the repo and is accessible at `~/files/resume.pdf`.
- The styles for this website are setup using [Theme-UI](https://theme-ui.com/). This library is built on [emotion](https://emotion.sh/docs/introduction) and provides a wonderful way to build websites that are completely themeable. The theme file for this website is at `~/src/gatsby-plugin-theme-ui/index.js`.
- To use this gatsby app as a starting point for your website, you will have to do the following:
  - Fork this repo.
  - Update `data/about.md` and `data/resume.json`.
  - Deploy to your favourite cloud provider!
  - ...and, you are done!
