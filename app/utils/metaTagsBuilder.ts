import type { HtmlMetaDescriptor } from "@remix-run/node"

/**
 * Builds common metadata tags for every page
 * @param pageTitle 
 * @returns 
 */
export const metaTagsBuilder = (pageTitle: string): HtmlMetaDescriptor => {
  const title = `${pageTitle} | krishnagopinath.me`
  const description = "The website of Krishna Gopinath, software engineer, budding teacher & amateur photographer."
  const author = "Krishna Gopinath"

  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "og:title": title,
    "og:description": description,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:description": description,
    "twitter:title": title,
    "twitter:creator": author,
  }
}