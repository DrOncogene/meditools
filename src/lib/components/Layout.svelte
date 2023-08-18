<script lang="ts">
  import { enhance } from '$app/forms';
  import Icon from '@iconify/svelte';
  import favourites from '$lib/stores/favourites';
  import { addToFavourites, removeFromFavourites } from '$lib/utils';

  export let id: number;
</script>

<div class="left border-r-2 border-surface-600 px-4 max-h-[calc(100vh_-_80px)] overflow-auto">
  <div class="border-b-2 border-surface-700 py-4">
    <h1 class="flex items-center font-semibold text-2xl">
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
    <h4><slot name="subtitle" /></h4>
  </div>
  <form
    method="POST"
    class="flex flex-col flex-nowrap justify-center gap-14 w-full border-b-2 border-surface-700 py-4 pb-10"
    use:enhance
  >
    <slot />
    <button
      type="submit"
      class="btn bg-primary-500 text-white rounded-md text-sm font-semibold w-max self-end"
    >
      <span>Calculate</span>
      <Icon icon="mdi:calculator" class="w-4 h-4" />
    </button>
  </form>
  <div class="py-3">
    <span class="mb-5 block text-lg font-semibold text-surface-900">Result: </span>
    <div class="result bg-primary-500 h-60 ml-5 text-white text-5xl grid place-content-center">
      <slot name="result" />
    </div>
  </div>
</div>
<div class="right py-5 px-5 md:py-10 md:px-10 text-white">
  <div class="bg-alt-bright rounded-md h-40 p-4 text-surface-900 text-sm">
    <div class="flex items-center mb-2">
      <span class="bg-primary-700 grid place-content-center rounded-full w-8 h-8 mr-2">
        <Icon icon="mdi:information-variant" class="w-5 h-5 text-white" />
      </span>
      <h2 class="text-primary-700 font-semibold text-base">More info</h2>
    </div>
    <slot name="description" />
  </div>
</div>
