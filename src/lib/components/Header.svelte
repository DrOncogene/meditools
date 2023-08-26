<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import SearchInput from './SearchInput.svelte';

  async function share(e: MouseEvent) {
    await navigator.share({
      title: 'BMI Calculator',
      url: $page.url.toString()
    });
  }
</script>

<header
  class="fixed top-0 left-0 flex justify-between items-center px-5 py-3 h-20 w-full shadow-md shadow-surface-900"
>
  <a href="/" class="placeholder bg-primary-500 grid place-content-center text-white px-6 py-4">M</a
  >

  <SearchInput />

  <button
    on:click={share}
    title="Share page"
    class="btn px-2 md:px-5 md:bg-primary-500 text-white rounded-md"
  >
    <span class="text-sm font-bold hidden md:inline">Share</span>
    <Icon icon="mdi:share" class="text-2xl md:text-lg text-primary-500 md:text-white" />
  </button>
</header>

<style>
</style>
