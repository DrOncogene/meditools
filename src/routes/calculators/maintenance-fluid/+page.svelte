<script lang="ts">
  import { page } from '$app/stores';
  import Input from '$lib/components/Input.svelte';
  import Layout from '$lib/components/Layout.svelte';

  export let form;

  let ageUnit = 'mo';
  let wtUnit = 'kg';
</script>

<Layout id={$page.data.id} title="Maintenance fluid">
  <svelte:fragment slot="title">Paediatric Maintenance Fluid</svelte:fragment>
  <svelte:fragment slot="subtitle">
    Calculates maintenance fluid for children &lt; 18 years
  </svelte:fragment>

  <Input
    type="number"
    label="Age"
    placeholder="Enter age"
    name="age"
    fieldValue={form?.data.age}
    constraints={{ min: 0, step: 1, max: 18 }}
    radioLabels={['mo', 'yr']}
    radioName="ageUnit"
    radioVar={ageUnit}
  />
  <Input
    type="number"
    label="Weight"
    placeholder="Enter weight"
    name="weight"
    fieldValue={form?.data.weight}
    radioLabels={['kg', 'lb']}
    radioName="wtUnit"
    radioVar={wtUnit}
  />

  <svelte:fragment slot="result">
    {#if form}
      {form.result}
      {form.unit}
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="extra-info">
    {#if form}
      {form.description}
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="description">
    Amount of fluid required to maintain normal hydration in a patient. Calculated based on the
    patient's weight.
    <br />
    <br />
    Fluid strength depends on the age and clinical condition of the patient.
    <br />
    <ul class="font-semibold">
      <li>Neonates and infants &lt; 6 months: 10% DS or 8% DS</li>
      <li>Infants &gt; 6 months: 4.3% in half saline, 4.3% DS, 8% DS</li>
      <li>Children: 4.3% DS or higher as indicated</li>
    </ul>
    <br />
    <a href="/calculators/fluid-reconstitution" class="text-primary-500">Click here</a> for fluid reconstitution
  </svelte:fragment>
  <svelte:fragment slot="post_info">
    {#if form?.postInfo}
      {@html form?.postInfo}
    {/if}
  </svelte:fragment>
</Layout>
