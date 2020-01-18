# Krishna Gopinath's Website

This is the source code for krishnagopinath.me, built with GatsbyJS. There are some interesting things which I over-engineered while building this website:

- The about section is sourced from the `data/about.md` file. To understand how this is becoming HTML for the landing page, start with `gatsby-config.js` and continue moving further into `components/about.js` and into it's subcomponents.
- The resume page is sourced from `data/resume.json`. So if the resume needs to be changed, updating this JSON file should do the trick.
- We generate a PDF version of this resume when we push to master through the Github action available in `.github/workflows/main.yml`. This is then committed back to the repo and is accessible via `files/resume.pdf`.
