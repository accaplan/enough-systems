<script lang="ts">
  import { searchTerm, baseList, orderedList } from "."

  let term = ""

  $: term = $searchTerm

  const handleInput = () => {
    searchTerm.set(term)
  }
</script>

<div class="search">
  <input
    type="text"
    placeholder="Filter"
    bind:value={term}
    on:input={handleInput}
  />

  {#if term}
    <button on:click={() => searchTerm.set("")}>✕</button>
    <div class="count">{$orderedList.length}/{$baseList.length} shown</div>
  {/if}
</div>

<style lang="scss">
  .search {
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;

    input {
      font-family: var(--font-mono);
      font-size: var(--font-size);
      border: 1px dashed var(--color-border);
      padding: 1ch;
      margin-right: 0.5em;
      background: var(--white);
      outline: none;

      &:focus {
        border: 1px solid var(--color-accent);
        outline: none;
        color: var(--color-accent);
      }
    }

    button {
      font-family: var(--font-sans);
      font-size: var(--font-size);
      border: 1px solid var(--color-border);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;
      cursor: pointer;
      background: var(--white);

      &:hover {
        background: var(--color-hover);
      }
    }

    .count {
      font-family: var(--font-mono);
      border: 1px solid var(--color-border);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;
    }
  }
</style>
