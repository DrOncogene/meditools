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
  export let constraints: {
    min: number;
    step: number;
    max?: number;
  } = {
    min: 0,
    step: 0.01
  };
  export let iconString = '';
  export let iconSize = 20;
  export let radioLabels: string[] = [];
  export let radioVar: any = null;
  export let radioName: string = '';
  export let fieldValue: any = '';
</script>

<div class="grid grid-cols-[1fr_3fr_1fr] gap-5 justify-center relative box-border {width}">
  {#if label}
    <label for={name} class="mr-2 font-semibold text-sm text-surface-900">
      {label}
    </label>
  {/if}
  <div class="relative grid grid-rows-2 h-min overflow-hidden">
    <span class="block absolute left-2 top-1/2 -translate-y-1/2">
      <Icon width={iconSize} height={iconSize} icon={iconString} class="text-surface-900 text-lg" />
    </span>
    <input
      required
      value={fieldValue}
      min={constraints.min}
      step={constraints.step}
      max={constraints.max}
      {type}
      {name}
      id={name}
      {placeholder}
      class="peer block px-{size[0]} py-{size[1]} {iconString
        ? 'pl-8'
        : ''} border-surface-900 placeholder:text-surface-900 placeholder:text-xs rounded-md border w-full invalid:border-error-500 {styles}"
    />
    <span class="text-xs hidden peer-invalid:block"> Mind the units </span>
  </div>

  {#if radioVar !== null}
    <RadioGroup
      active="variant-filled-secondary"
      color="text-primary-700"
      rounded="rounded-md"
      border="border-2 border-primary-700"
      name="weight-unit"
      hover="hover:variant-filled-secondary"
      padding="px-2 py-0.5 md:px-4 md:py-1"
      class="!p-0 text-primary-500 w-max h-max space-x-[0px]"
    >
      {#each radioLabels as label, idx}
        {#if radioLabels.length === 1}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-md"
            class="text-sm md:text-base"
          >
            {label}
          </RadioItem>
        {:else if idx === 0}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-l-md"
            class="border-r-2 border-primary-500 text-sm md:text-base"
          >
            {label}
          </RadioItem>
        {:else if idx === radioLabels.length - 1}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-r-md"
            class="text-sm md:text-base"
          >
            {label}
          </RadioItem>
        {:else}
          <RadioItem
            required
            bind:group={radioVar}
            name={radioName}
            value={label}
            rounded="rounded-none"
            class="border-r-2 border-primary-500 text-sm md:text-base"
          >
            {label}
          </RadioItem>
        {/if}
      {/each}
    </RadioGroup>
  {/if}
</div>
