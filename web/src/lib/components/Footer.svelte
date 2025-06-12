<script lang="ts">
  import LastUpdated from "./LastUpdated.svelte"
  export let pageList: any[]
  export let siteLastUpdated: string
</script>

<footer>
  <div>
    <h1><a href="/" data-sveltekit-preload-data>Neuparadise</a></h1>
    {#each pageList as page}
      <a href={page.slug?.current ?? ""} data-sveltekit-preload-data>
        {page.title}
      </a>
    {/each}
  </div>
  <LastUpdated {siteLastUpdated} />
</footer>

<style lang="scss">
  @import "../styles/responsive.scss";

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    padding-top: 1em;
    border-top: 1px dashed var(--color-border);

    div {
      width: 50%;
      display: flex;
      @include screen-size("phone") {
        width: 100%;
      }
    }

    h1 {
      font-size: var(--font-size);
      padding: 0;
      margin: 0;
      font-weight: normal;
    }

    a {
      color: inherit;
      font-size: var(--font-size);
      margin-right: 1ch;
      text-decoration: none;

      &:hover {
        color: var(--color-accent);
        // text-decoration: underline;
      }
    }
  }
</style>
