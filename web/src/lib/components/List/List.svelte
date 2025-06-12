<script lang="ts">
    import Item from "$lib/components/List/Item.svelte"
    import Header from "$lib/components/List/Header.svelte"
    import Search from "$lib/components/List/Search.svelte"
    import type { ItemType } from "$lib/types"
    import { baseList, orderedList } from "."
    export let itemList: ItemType[] = []
  
    baseList.set(itemList)
  </script>
  
  <Search />
  
  <div class="list">
    <Header />
    {#if $orderedList.length === 0}
      <Item item={{ title: "Nothing to show" }} />
    {:else}
      {#each $orderedList as item}
        <Item {item} />
      {/each}
    {/if}
  </div>
  
  <style>
    .list {
      border-spacing: 0 20px;
      width: 100%;
    }
  </style>