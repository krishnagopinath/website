# Krishna Gopinath's Website

![build status](https://github.com/krishnagopinath/website/workflows/Build%20website/badge.svg) ![Netlify Status](https://api.netlify.com/api/v1/badges/347a004f-2bed-4554-b61d-84b63557936f/deploy-status)

This is the source code for [krishnagopinath.me](https://krishnagopinath.me), built with [Remix](https://remix.run) and [tailwind.css](https://tailwindcss.com), deployed to [netlify](https://netlify.com).

There are some interesting things that I've done while building this website. I may have gone a little overboard, but it was fun.

### Use of `mdx`

This website uses `mdx` files whenever possible. Since [Remix has great mdx support](https://remix.run/docs/en/v1/guides/mdx), it'd be foolish to not take advantage of that. Here are some of the use cases where `mdx` is used:
* The home page section is sourced from the `app/data/about.mdx` file.
* There is a minimal blogging setup in this website, which uses `mdx`. 
  - Posts are added to `app/routes/posts/` as `mdx` files.
  - If the post is still in draft stage, `draft: true` is added to the metadata of the file. 
  - Once it's moved out of `draft`, it is considered "published", at which point, it is listed in the [blogs page](https://krishnagopinath.me/posts).


### Resume builder using JSONResume

This website manages the [resume page](https://krishnagopinath.me/resume) in an interesting way:

* It is sourced from `app/data/resume.json` and is based on [JSON Resume's schema](https://jsonresume.org/schema/).
* A PDF version of this resume is automatically generated when we push to master through the Github action available in `.github/workflows/main.yml`. This file is then committed back to the repo and is accessible at `files/resume.pdf`.
