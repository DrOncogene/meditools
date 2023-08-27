<script lang="ts">
  import { enhance } from '$app/forms';
  import Icon from '@iconify/svelte';
  import { browser } from '$app/environment';
  import favourites from '$lib/stores/favourites';
  import { addToFavourites, removeFromFavourites } from '$lib/utils';
  import { afterUpdate } from 'svelte';

  export let id: number;
  export let title: string;

  function scrollRes(e: Event) {
    const resDiv = document.querySelector('.result-div');
    resDiv?.scrollIntoView({ behavior: 'smooth' });
  }

  let postInfo: any;

  afterUpdate(() => {
    if (browser) {
      postInfo = document.querySelector('.post-info')?.textContent;
    }
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="left border-r-2 border-surface-600 px-4">
  <div class="border-b-2 border-surface-700 py-4">
    <h1 class="flex items-center font-semibold text-xl md:text-2xl">
      {#if $favourites.has(id)}
        <button on:click={(e) => removeFromFavourites(e, id)}>
          <Icon icon="mdi:star" color="gold" class="w-5 h-5 mr-2" />
        </button>
      {:else}
        <button on:click={(e) => addToFavourites(e, id)}>
          <Icon icon="mdi:star-outline" class="w-5 h-5 mr-2" />
        </button>
      {/if}
      <slot name="title" />
    </h1>
    <h4 class="text-xs font-medium md:text-base"><slot name="subtitle" /></h4>
  </div>
  <form
    method="POST"
    class="flex flex-col flex-nowrap justify-center gap-8 md:gap-10 w-full border-b-2 border-surface-700 py-4 pb-10"
    use:enhance
  >
    <slot />
    <button
      type="submit"
      class="btn bg-primary-500 text-white rounded-md text-sm font-semibold w-max self-end"
      on:click={scrollRes}
    >
      <span>Calculate</span>
      <Icon icon="mdi:calculator" class="w-4 h-4" />
    </button>
  </form>
  <div class="result-div py-3">
    <span class="mb-5 block text-lg font-semibold text-surface-900">Result: </span>
    <div
      class="result bg-primary-500 h-52 p-5 text-white text-3xl md:text-5xl text-center grid place-content-center gap-4 rounded-md"
    >
      <span><slot name="result" /></span>
      <span class="text-lg text-secondary-500 font-bold"><slot name="extra-info" /></span>
    </div>
  </div>
</div>
<div class="right py-5 px-5 md:py-10 md:px-10 text-white">
  <div class="bg-alt-bright rounded-md h-min p-4 text-black text-sm">
    <div class="flex items-center">
      <span class="bg-primary-700 grid place-content-center rounded-full w-8 h-8 mr-2">
        <Icon icon="mdi:information-variant" class="w-5 h-5 text-white" />
      </span>
      <h2 class="text-primary-700 font-semibold text-base">More info</h2>
    </div>
    <p class="py-3">
      <slot name="description" />
    </p>
    <p class="post-info {postInfo ? 'border-t border-primary-700 py-3' : ''} font-semibold">
      <slot name="post_info" />
    </p>
  </div>
</div>
