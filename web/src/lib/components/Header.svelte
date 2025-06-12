<script lang="ts">
  import LastUpdated from "./LastUpdated.svelte";
  export let pageList: any[];
  export let siteLastUpdated: string;
</script>

<header>
  <div>
    <h1><a href="/" data-sveltekit-preload-data>Enough Systems</a></h1>
    {#each pageList as page}
      <a href={page.slug?.current ?? ""} data-sveltekit-preload-data>
        {page.title}
      </a>
    {/each}
  </div>
  <LastUpdated {siteLastUpdated} />
</header>

<style lang="scss">
  @import "../styles/responsive.scss";

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
    border-bottom: 1px dashed var(--color-border);
    font-family: var(--font-sans);

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
      text-transform: uppercase;
      font-weight: normal;
      font-family: var(--font-sans);
    }

    a {
      color: inherit;
      font-size: var(--font-size);
      margin-right: 1ch;
      text-decoration: none;

      &:hover {
        color: var(--color-accent);
      }
    }
  }
</style>
