<script lang="ts">
  import type { ItemType } from "$lib/types"
  import truncate from "lodash/truncate.js"
  import { toPlainText, urlFor } from "$lib/modules/sanity"
  export let page: ItemType = {}
  export let globalPage: ItemType

  const BASE_TITLE = "Neuparadise"
  const DEFAULT_DESCRIPTION = truncate(
    toPlainText(globalPage.content?.content ?? ""),
    {
      length: 240,
      separator: /.? +/,
    }
  )
  const DEFAULT_IMAGE = urlFor(globalPage?.featuredImage).width(800).url() || ""
  const BASE_URL = "https://calsbo.com/"

  /**
   * Returns the formatted title based on the current language.
   *
   * @param {ItemType} p - The object containing title details.
   * @returns {string} - The formatted title.
   */
  const getTitle = (p: ItemType): string => {
    return (p.title ? p.title + " | " : "") + BASE_TITLE
  }

  /**
   * Retrieves and formats the description based on the current language, truncating it to 240 characters.
   *
   * @param {ItemType} p - The object containing description details.
   * @returns {string} - The truncated description.
   */
  const getDescription = (p: ItemType): string => {
    let d = p.content?.content
      ? toPlainText(p.content.content)
      : DEFAULT_DESCRIPTION

    return truncate(d, {
      length: 240,
      separator: /.? +/,
    })
  }

  /**
   * Constructs a URL based on the given page type and slug.
   *
   * @param {ItemType} p - The object containing URL details.
   * @returns {string} - The constructed URL.
   */
  const getUrl = (p: ItemType): string => {
    return BASE_URL + (p.slug?.current || "")
  }

  /**
   * Retrieves the image URL if available, or returns a default image URL.
   *
   * @param {ItemType} p - The object containing image details.
   * @returns {string} - The image URL or default image URL.
   */
  const getImage = (p: ItemType): string => {
    if (p.featuredImage) return urlFor(p.featuredImage).width(800).url()
    return DEFAULT_IMAGE
  }

  let title = getTitle(page)
  let description = getDescription(page)
  let url = getUrl(page)
  let image = getImage(page)
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content="article" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={title} />
  <meta property="og:title" content={title} />
  <meta property="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="image" content={image} />
  <meta property="og:image" content={image} />
  <meta property="twitter:image" content={image} />
  <meta property="og:site_name" content={BASE_TITLE} />
</svelte:head>
