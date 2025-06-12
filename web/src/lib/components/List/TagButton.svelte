<script lang="ts">
  import { searchTerm } from "."

  export let tag: string

  const setSearchTerm = () => {
    searchTerm.set(tag)
  }
</script>

<button class="tag" on:click={setSearchTerm}>
  {tag}
</button>
