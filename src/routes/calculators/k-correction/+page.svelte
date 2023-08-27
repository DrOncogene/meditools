<script lang="ts">
  import { page } from '$app/stores';
  import Layout from '$lib/components/Layout.svelte';
  import Input from '$lib/components/Input.svelte';
  import SelectInput from '$lib/components/SelectInput.svelte';

  export let form;

  let kUnit = 'mEq/L';
  let wtUnit = 'kg';
</script>

<Layout id={$page.data.id} title="Potassium correction">
  <svelte:fragment slot="title">Serum potassium correction</svelte:fragment>
  <svelte:fragment slot="subtitle">Calculate K+ dose for hypokalaemia correction</svelte:fragment>
  <!-- <SelectInput name="potassium" options={['one', 'two', 'three']} bind:bindVar={potassium} /> -->
  <Input
    name="serumK"
    type="number"
    label="Serum K+"
    placeholder="Enter serum potassium"
    constraints={{ min: 1, step: 0.1, max: 3.5 }}
    radioLabels={['mEq/L']}
    radioName="kUnit"
    radioVar={kUnit}
    fieldValue={form?.data.serumK}
  />
  <Input
    name="weight"
    type="number"
    label="Weight"
    placeholder="Enter weight"
    constraints={{ min: 1, step: 1, max: 10000 }}
    radioLabels={['kg', 'lb']}
    radioName="wtUnit"
    radioVar={wtUnit}
    fieldValue={form?.data.weight}
  />
  <Input
    name="targetK"
    type="number"
    label="Target K+"
    placeholder="Enter target potassium"
    constraints={{ min: 3.5, step: 0.1, max: 5.5 }}
    radioLabels={['mEq/L']}
    radioName="kUnit"
    radioVar={kUnit}
    fieldValue={form?.data.targetK ?? 4.0}
  />

  <svelte:fragment slot="result">
    {#if form}
      {form.result}
      {form.unit}
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="extra-info">
    {#if form?.description}
      {form?.description}
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="description">
    {@html `Calculation of potassium replacement in hypokalaemia (serum K+ less than 3.5 mEq/L).<br><br>
    <b>Note:
      <ul class="text-xs">
        <li>Daily K+ requirement is 1mmol/kg/day (0.5-1 in children)</li>
        <li>1 mmol of K+ = 1 mEq of K+</li>
        <li>1g of IV KCl = 13.4 mmol of K+</li>
        <li>1 tab of slow K = 8 mmol of K+</li>
      </ul>
    <br>
    If using IV KCl, do not give more than:
      <ul class="text-xs">
        <li>10 mmol or 5mg/kg (children) in 1hr</li>
        <li>120 mmol per day</li>
        <li>40 mmol in 1L or 2 0mmol in 500 mls of IVF</li>
      </ul>
    </b>
    `}
  </svelte:fragment>
  <svelte:fragment slot="post_info">
    {#if form?.postInfo}
      {@html form?.postInfo}
    {/if}
  </svelte:fragment>
</Layout>
