<script lang="ts">
  import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';

  export let label = '';
  export let placeholder = '';
  export let size = [2, 1];
  export let name = '';
  export let styles = '';
  export let width = '';
  export let type = 'text';
  export let iconString = '';
  export let iconSize = 20;
  export let radioLabels: string[] = [];
  export let radioVar: any = null;
  export let radioName: string = '';
</script>

<div class="flex justify-between relative box-border {width}">
  {#if label}
    <label for={name} class="mr-2 font-semibold text-sm md:text-lg text-surface-900"
      >{label}
    </label>
  {/if}
  <span class="block absolute left-2 top-1/2 -translate-y-1/2">
    <Icon width={iconSize} height={iconSize} icon={iconString} class="text-surface-900 text-lg" />
  </span>
  <input
    required
    min="0"
    step="0.01"
    {type}
    {name}
    id={name}
    {placeholder}
    class="block px-{size[0]} py-{size[1]} {iconString
      ? 'pl-8'
      : ''} border-surface-900 placeholder:text-surface-900 placeholder:text-sm rounded-md border {styles}"
  />

  {#if radioVar !== null}
    <RadioGroup
      active="variant-filled-secondary"
      color="text-primary-700"
      rounded="rounded-md"
      border="border-2 border-primary-700"
      name="weight-unit"
      hover="hover:variant-filled-secondary"
      padding="px-2 py-0.5 md:px-4 md:py-1"
      class="!p-0 text-primary-500 w-max place-self-end space-x-[0px]"
    >
      {#each radioLabels as label, idx}
        {#if idx === 0}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-l-md"
            class="border-r-2 border-primary-500">{label}</RadioItem
          >
        {:else if idx === radioLabels.length - 1}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-r-md">{label}</RadioItem
          >
        {:else}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-none"
            class="border-r-2 border-primary-500">{label}</RadioItem
          >
        {/if}
      {/each}
    </RadioGroup>
  {/if}
</div>
