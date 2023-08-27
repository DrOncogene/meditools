<script lang="ts">
  import TabbedAccordion from '$lib/components/TabbedAccordion.svelte';
  import { closeSideBar } from '$lib/utils';
</script>

<aside
  class="side-bar w-0 fixed top-20 left-0 h-full transition-all duration-500 z-[100] overflow-hidden xl:w-[380px]"
>
  <TabbedAccordion closeFunction={closeSideBar} styles="accordion max-xl:w-0" />
</aside>

<style>
</style>
