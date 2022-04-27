# Krishna Gopinath's Website

![build status](https://github.com/krishnagopinath/website/workflows/Build%20website/badge.svg)

This is the source code for [krishnagopinath.me](https://krishnagopinath.me), built with [Remix](remix.run) and [tailwind.css](tailwindcss.com), deployed to [netlify](https://netlify.com).

There are some interesting things which I over-engineered while building this website:

* The "about" section is sourced from the `app/src/about/about.mdx` file.
* The resume page is sourced from `app/src/resume/resume.json` and is based on [JSON Resume's schema](https://jsonresume.org/schema/). So if the resume needs to be changed, updating this JSON file should do the trick.
* A PDF version of this resume is automatically generated when we push to master through the Github action available in `.github/workflows/main.yml`. This file is then committed back to the repo and is accessible at `files/resume.pdf`.
