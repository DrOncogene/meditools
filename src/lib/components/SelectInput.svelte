<script lang="ts">
  import Icon from '@iconify/svelte';
  import { type PopupSettings, popup, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

  export let name: string;
  export let bindVar: any;
  export let options: string[];

  let comboboxValue: string;

  const popupCombobox: PopupSettings = {
    event: 'focus-click',
    target: 'popupCombobox',
    placement: 'bottom',
    closeQuery: '.listbox-item'
  };
</script>

<div>
  <button class="btn variant-filled-primary w-48 justify-between" use:popup={popupCombobox}>
    <span class="capitalize">{bindVar ?? ''}</span>
    <span><Icon icon="mdi:chevron-down" class="font-bold" /></span>
  </button>

  <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none">
      {#each options as option}
        <ListBoxItem bind:group={bindVar} {name} value={option}>
          {`${name[0].toUpperCase()}${name.slice(1)}`}
        </ListBoxItem>
      {/each}
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>
</div>
