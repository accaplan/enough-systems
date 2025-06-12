<script lang="ts">
    import Tags from "$lib/components/List/Tags.svelte"
    import type { ItemType } from "$lib/types"
    export let item: ItemType
  
    function getLink(_item: ItemType) {
      if (_item.type === "article") {
        return {
          url: _item.slug?.current ?? "",
          target: "",
        }
      } else if (_item.type === "link") {
        return {
          url: _item.link ?? "",
          target: "_blank",
        }
      } else if (_item.type === "file") {
        return {
          url: _item.fileUrl ?? "",
          target: "_blank",
        }
      } else {
        return {
          url: "",
          target: "",
        }
      }
    }
  
    $: link = getLink(item)
  </script>
  
  <a href={link.url} class:linked={link.url} target={link.target} class="row">
    <div class="cell title">{item.title}</div>
    <div class="cell what"><Tags tags={item.what ?? []} /></div>
    <div class="cell with"><Tags tags={item.with ?? []} /></div>
    <div class="cell where">{item.where ?? ""}</div>
    <div class="cell when">{item.when ?? ""}</div>
  </a>
  
  <style lang="scss">
    @import "../../styles/responsive.scss";
  
    .row {
      display: flex;
      border-bottom: 1px dashed var(--color-border);
      text-decoration: none;
      color: inherit;
      padding-bottom: 1.5em;
      padding-top: 1.5em;
  
      &.linked {
        &:hover {
          background-color: var(--color-hover);
          color: var(--color-accent);
        }
      }
  
      .cell {
        padding-right: 20px;
        height: 100%;
  
        &.title {
          width: 30%;
          padding-left: 1ch;
  
          @include screen-size("phone") {
            width: 40%;
          }
        }
  
        &.what {
          width: 20%;
          @include screen-size("phone") {
            width: 40%;
          }
        }
  
        &.with {
          width: 20%;
          @include screen-size("phone") {
            display: none;
          }
        }
  
        &.where {
          width: 15%;
          @include screen-size("phone") {
            display: none;
          }
        }
  
        &.when {
          padding-right: 0;
          width: 15%;
          @include screen-size("phone") {
            width: 20%;
          }
        }
      }
    }
  </style>