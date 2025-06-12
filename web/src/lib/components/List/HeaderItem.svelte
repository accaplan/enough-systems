<script lang="ts">
  import { ColumnType, OrderDirection } from "$lib/enums"
  import { orderColumn, orderDirection, SORTABLE_COLUMNS } from "."
  export let title: string
  export let columnType: ColumnType

  const sortable = SORTABLE_COLUMNS.includes(columnType)

  const setOrderColumn = () => {
    if ($orderColumn === columnType) {
      orderDirection.set(
        $orderDirection === OrderDirection.Ascending
          ? OrderDirection.Descending
          : OrderDirection.Ascending,
      )
    } else {
      orderColumn.set(columnType)
      orderDirection.set(OrderDirection.Descending)
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="header-cell {ColumnType[columnType].toLowerCase()}"
  class:sortable
  on:click={setOrderColumn}
>
  {title}
  {#if $orderColumn === columnType}
    {#if $orderDirection === OrderDirection.Ascending}
      ↑
    {:else}
      ↓
    {/if}
  {/if}
</div>

<style lang="scss">
  @import "../../styles/responsive.scss";

  .header-cell {
    text-align: left;
    user-select: none;
    pointer-events: none;
    color: var(--color-emphasis);

    // text-transform: uppercase;

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
      width: 15%;
      @include screen-size("phone") {
        width: 20%;
      }
    }

    &.sortable {
      pointer-events: all;
      cursor: pointer;
    }
  }
</style>
