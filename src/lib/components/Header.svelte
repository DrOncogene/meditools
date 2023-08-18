<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import Input from "./Input.svelte";
	import SearchInput from './SearchInput.svelte';

  async function share (e: MouseEvent) {
    await navigator.share({
      title: "BMI Calculator",
      url: $page.url.toString(),
    });
  };

</script>

<header class="flex justify-between items-center px-5 py-3 h-20">
  <a href="/" class="placeholder block w-8 h-6 bg-primary-500">
  </a>

  <SearchInput />

  <button on:click={share} title="Share page" class="btn bg-primary-500 text-white rounded-md">
    <span class="text-sm font-bold hidden md:inline">Share</span>
    <Icon icon='mdi:share' class="text-white" />
  </button>
</header>

<style>

</style>