<script lang="ts">
  import { page } from '$app/stores';
  import Layout from '$lib/components/Layout.svelte';
  import Input from '$lib/components/Input.svelte';

  export let form;

  let wtUnit = 'kg';
  let htUnit = 'cm';
</script>

<svelte:head>
  <title>Body Mass Index</title>
</svelte:head>

<Layout id={$page.data.id}>
  <span slot="title">Body Mass Index (BMI)</span>
  <span slot="subtitle">Calculates body mass index</span>

  <Input
    bind:radioVar={wtUnit}
    type="number"
    label="Weight"
    placeholder="Enter weight"
    name="weight"
    radioName="wtUnit"
    radioLabels={['kg', 'lb']}
  />
  <Input
    bind:radioVar={htUnit}
    type="number"
    label="Height"
    placeholder="Enter height"
    name="height"
    radioName="htUnit"
    radioLabels={['cm', 'in']}
  />

  <span slot="result">
    {#if form}
      {form.result}
      {form.unit}
      <span class="text-lg text-secondary-500 font-bold">{form.description}</span>
    {/if}
  </span>

  <span slot="description">
    BMI is also known as quetelet index. It is a very important, quick to calculate health tool that
    tells how healthy one is
  </span>
</Layout>
