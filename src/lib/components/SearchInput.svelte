<script lang="ts">
  import Icon from '@iconify/svelte';
  import {
    popup,
    Autocomplete,
    type AutocompleteOption,
    type PopupSettings
  } from '@skeletonlabs/skeleton';
  import { getContext } from 'svelte';
  import { goto } from '$app/navigation';

  let popupSettings: PopupSettings = {
    event: 'focus-click',
    target: 'popupAutocomplete',
    placement: 'bottom'
  };

  const calculators: Calculator[] = getContext('calculators');
  const calculatorLabels: AutocompleteOption[] = calculators.map((calculator) => {
    return {
      label: calculator.name,
      value: calculator.url
    };
  });

  let searchInput = '';

  function onPopupClick(e: any) {
    goto(e.detail.value);
  }
</script>

<div class="flex justify-between relative box-border w-1/2">
  <span class="block absolute left-2 top-1/2 -translate-y-1/2">
    <Icon width="20" height="20" icon="mdi:magnify" class="text-surface-900 text-lg" />
  </span>
  <input
    bind:value={searchInput}
    use:popup={popupSettings}
    min="0"
    step="0.01"
    type="search"
    name="search-bar"
    id="search-bar"
    placeholder="Search for a calculator"
    class="input autocomplete block px-2 py-1 pl-8 border-surface-900 placeholder:text-surface-900 placeholder:text-sm rounded-md bg-surface-600 border-2 w-full focus:outline-none focus:border-0"
  />
  <div
    data-popup="popupAutocomplete"
    class="bg-primary-600 text-white rounded-md w-[150%] md:w-full duration-75 z-50"
  >
    <Autocomplete
      bind:input={searchInput}
      options={calculatorLabels}
      on:selection={onPopupClick}
      regionItem="border-b border-primary-100"
      regionEmpty="py-2 px-4"
    />
  </div>
</div>
