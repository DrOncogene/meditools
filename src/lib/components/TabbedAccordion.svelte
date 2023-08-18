<script lang="ts">
  import { page } from '$app/stores';
  import { getContext } from 'svelte';
  import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  import Accordion from '$lib/components/Accordion.svelte';
  import favourites from '$lib/stores/favourites';
  import recents from '$lib/stores/recents';

  export let closeFunction = (e: MouseEvent) => {};
  export let styles = '';

  let tabSet = 0;
  const calculators: Calculator[] = getContext('calculators');
  let favouritesItems: Calculator[] = [];
  let RecentItems: Calculator[] = [];

  favourites.subscribe((value) => {
    favouritesItems = calculators.filter((calculator) => {
      return value.has(calculator.id);
    });
  });
  recents.subscribe((value) => {
    RecentItems = calculators.filter((calculator) => {
      return value.has(calculator.id);
    });
  });
</script>

<div
  class="accordion w-[350px] h-full relative border border-primary-500 bg-white transition-all duration-200 {styles}"
>
  <TabGroup
    class="space-y-0"
    hover="hover:variant-soft-primary"
    justify="justify-between"
    border="border-0"
    active="border-b-2 border-white"
    regionList="bg-primary-500 text-white px-5 pr-10"
  >
    <Tab bind:group={tabSet} name="calculators" value={0} rounded="rounded-none" class="pt-4">
      <svelte:fragment slot="lead">
        <span class="w-full grid place-content-center">
          <Icon icon="mdi:calculator" class="w-6 h-6" />
        </span>
      </svelte:fragment>
      <span class="text-sm font-normal">Calculators</span>
    </Tab>
    <Tab bind:group={tabSet} name="recent" value={1} rounded="rounded-none" class="pt-4">
      <svelte:fragment slot="lead">
        <span class="w-full grid place-content-center">
          <Icon icon="mdi:cog-counterclockwise" class="w-6 h-6" />
        </span>
      </svelte:fragment>
      <span class="text-sm font-normal">Recent</span>
    </Tab>
    <Tab bind:group={tabSet} name="favs" value={2} rounded="rounded-none" class="pt-4">
      <svelte:fragment slot="lead">
        <span class="w-full grid place-content-center">
          <Icon icon="mdi:star-outline" class="w-6 h-6" />
        </span>
      </svelte:fragment>
      <span class="text-sm font-normal">Favourites</span>
    </Tab>
    <svelte:fragment slot="panel">
      <div class="overflow-auto">
        {#if tabSet === 0}
          <Accordion />
        {:else if tabSet === 1}
          <ul class="list-nav">
            {#each RecentItems as calculator}
              <li><a href={calculator.url} class="!rounded-none">{calculator.name}</a></li>
            {/each}
          </ul>
        {:else if tabSet === 2}
          <ul class="list-nav">
            {#each favouritesItems as calculator}
              <li><a href={calculator.url} class="!rounded-none">{calculator.name}</a></li>
            {/each}
          </ul>
        {/if}
      </div>
    </svelte:fragment>
  </TabGroup>
  <button
    on:click={closeFunction}
    class="absolute right-0 top-0 text-white px-2 py-1 hover:variant-soft-primary"
  >
    <Icon icon="mdi:arrow-left-thin" class="w-6 h-6" />
  </button>
</div>
