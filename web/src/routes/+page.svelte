<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import List from "$lib/components/List/Item.svelte"
  import Metadata from "$lib/components/Metadata.svelte"
  import IntroText from "$lib/components/IntroText.svelte"
  import BannerSpeed from "$lib/components/BannerSpeed.svelte";
  export let data
  const { siteLastUpdated, pageList, itemList } = data
</script>
<BannerSpeed />
<Metadata globalPage={pageList} />
<Header pageList={pageList.pages} {siteLastUpdated} />
<IntroText {pageList} />
<List {itemList} />
