<script lang="ts">
  import Tag from "./Tag.svelte"
  export let tags: string[] = []
</script>

{#each tags as tag, index}
  <Tag {tag} />{index < tags.length - 1 ? ", " : ""}
{/each}
