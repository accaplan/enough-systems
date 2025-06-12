<script lang="ts">
  import { onMount } from 'svelte';
  export let text: string = "sufficiency in nature";

  let repeatCount = 2;
  let spanEl: HTMLSpanElement;
  let upperText = text.toUpperCase();
  let paused = false;

  function calculateRepeat() {
    if (spanEl) {
      const spanWidth = spanEl.offsetWidth;
      const screenWidth = window.innerWidth;
      repeatCount = Math.ceil((screenWidth * 2) / spanWidth);
    }
  }

  onMount(() => {
    calculateRepeat();
    window.addEventListener('resize', calculateRepeat);
    return () => window.removeEventListener('resize', calculateRepeat);
  });
</script>

<div
  class="banner-speed"
  on:mouseenter={() => paused = true}
  on:mouseleave={() => paused = false}
>
  <div
    class="banner-speed__track"
    style="animation-play-state: {paused ? 'paused' : 'running'};"
  >
    <span bind:this={spanEl}>{upperText}</span>
    {#each Array(repeatCount - 1) as _, i}
      <span>{upperText}</span>
    {/each}
  </div>
</div>
<div class="banner-spacer"></div>

<style>
.banner-speed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2.2rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  z-index: 9999;
  overflow: hidden;
  background: #0070f3;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.banner-speed__track {
  display: flex;
  white-space: nowrap;
  animation: marquee 18s linear infinite;
}
.banner-speed__track span {
  padding-right: 4rem;
  font-size: 1.4rem;
  color: #fff;
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.banner-spacer {
  height: 2.5rem;
}
</style>