<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  export let pageList: any
</script>

<div class="intro-text">
  {@html renderBlockText(pageList?.introText?.content ?? [])}
</div>

<style lang="scss">
  .intro-text {
    margin-top: 1.5em;
    max-width: 50ch;
  }
</style>
