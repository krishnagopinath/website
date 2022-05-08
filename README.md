# Krishna Gopinath's Website

![build status](https://github.com/krishnagopinath/website/workflows/Build%20website/badge.svg)

This is the source code for [krishnagopinath.me](https://krishnagopinath.me), built with [Remix](https://remix.run) and [tailwind.css](https://tailwindcss.com), deployed to [netlify](https://netlify.com).

There are some interesting things that I've done while building this website. I may have gone a little overboard, but it was fun.

* The "about" section is sourced from the `app/data/about.mdx` file.
* The resume page is sourced from `app/data/resume.json` and is based on [JSON Resume's schema](https://jsonresume.org/schema/).
* A PDF version of this resume is automatically generated when we push to master through the Github action available in `.github/workflows/main.yml`. This file is then committed back to the repo and is accessible at `files/resume.pdf`.
