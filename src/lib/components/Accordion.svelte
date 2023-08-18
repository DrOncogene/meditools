<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { getContext } from 'svelte';
  import { page } from '$app/stores';

  const categories: Category[] = getContext('categories');
  $: activeTab = (href: string) =>
    href === $page.url.pathname ? '!bg-primary-500 text-white' : '';
</script>

<Accordion spacing="space-y-0">
  {#each categories as category, idx}
    {@const border = idx === categories.length - 1 ? 'border-none' : 'border-b-2'}
    <AccordionItem
      rounded="rounded-none"
      regionPanel="px-0 pb-0"
      class="text-lg border-b-2 border-surface-900"
    >
      <svelte:fragment slot="summary">{category.name}</svelte:fragment>
      <svelte:fragment slot="content">
        <ul class="list-nav text-sm">
          {#each category.calculators as calculator}
            <li class="{activeTab(calculator.url)} border-b border-surface-900">
              <a href={calculator.url} class="!rounded-none ml-4">{calculator.name}</a>
            </li>
          {/each}
        </ul>
      </svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
