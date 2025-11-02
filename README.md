# Krishna Gopinath's Website

![build status](https://github.com/krishnagopinath/website/workflows/Build%20website/badge.svg)

This is the source code for [krigo.me](https://krigo.me), built with [Astro](https://astro.dev) and [tailwind.css](https://tailwindcss.com), deployed to [Cloudflare](https://cloudflare.com).

There are some interesting things that I've done while building this website. I may have gone a little overboard, but it was fun.

### Use of `mdx`

This website uses `mdx` files whenever possible. Since [Astro has great mdx support](https://docs.astro.build/en/guides/markdown-content/), it'd be foolish to not take advantage of that. Here are some of the use cases where `mdx` is used:
* The home page section is sourced from the `src/content/about.mdx` file.
* There is a minimal blogging setup in this website, which uses `mdx`. 
  - Posts are added to `src/pages/posts/` as `mdx` files.
  - If the post is still in draft stage, `draft: true` is added to the metadata of the file. 
  - Once it's moved out of `draft`, it is considered "published", at which point, it is listed in the [posts page](https://krigo.me/posts).


### Resume builder using JSONResume

This website manages the [resume page](https://krigo.me/resume) in an interesting way:

* It is sourced from `src/content/resume.json` and is based on [JSON Resume's schema](https://jsonresume.org/schema/).
* A PDF version of this resume is automatically generated when we push to master through the Github action available in `.github/workflows/main.yml`. This file is then committed back to the repo and is accessible at `files/resume.pdf`.
