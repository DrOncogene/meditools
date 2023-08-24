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
  <svelte:fragment slot="title">Body Mass Index (BMI)</svelte:fragment>
  <svelte:fragment slot="subtitle">Calculates body mass index</svelte:fragment>

  <Input
    bind:radioVar={wtUnit}
    type="number"
    label="Weight"
    placeholder="Enter weight"
    name="weight"
    radioName="wtUnit"
    radioLabels={['kg', 'lb']}
    fieldValue={form?.data.weight}
  />
  <Input
    bind:radioVar={htUnit}
    type="number"
    label="Height"
    placeholder="Enter height"
    name="height"
    radioName="htUnit"
    radioLabels={['cm', 'in']}
    fieldValue={form?.data.height}
  />

  <svelte:fragment slot="result">
    {#if form}
      {form.result}
      {form.unit}
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="extra-info">
    {#if form}
      {form?.description}
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="description">
    BMI is also known as quetelet index. It is a very important, quick to calculate health tool that
    tells how healthy one is
  </svelte:fragment>
  <svelte:fragment slot="post_info">
    {#if form?.postInfo}
      {form?.postInfo}
    {/if}
  </svelte:fragment>
</Layout>
