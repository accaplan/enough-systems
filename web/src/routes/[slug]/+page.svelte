<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import Metadata from "$lib/components/Metadata.svelte"
  import type { ItemType } from "$lib/types"
  export let data
  const { pageList, siteLastUpdated } = data

  let currentPost: ItemType = data.post
  $: currentPost = data.post
</script>

{#key currentPost}
  <Metadata page={currentPost} globalPage={pageList} />
{/key}

<Header pageList={pageList.pages} {siteLastUpdated} />

<h1>{currentPost.title}</h1>

<div class="content">
  {@html renderBlockText(currentPost.content?.content ?? [])}
</div>

<Footer pageList={pageList.pages} {siteLastUpdated} />

<style lang="scss">
  h1 {
    margin-top: 1em;
    font-size: var(--font-size);
    margin-bottom: 0.5em;
    font-weight: normal;
    padding-bottom: 1em;
    border-bottom: 1px dashed var(--color-border);
    max-width: 70ch;
  }

  .content {
    margin-top: 2em;
    min-height: 100vh;
    max-width: 70ch;
  }
</style>
