<script lang="ts">
  import { Drawer } from '@skeletonlabs/skeleton';
  import TabbedAccordion from '$lib/components/TabbedAccordion.svelte';
  import { closeDrawer, closeSideBar } from '$lib/utils';
</script>

<aside
  class="side-bar w-0 fixed top-20 left-0 h-full transition-all duration-200 z-40 overflow-hidden xl:w-[380px]"
>
  <Drawer
    width="w-[380px]"
    rounded="rounded-none"
    regionDrawer="mt-[80px]"
    class="xl:hidden xl:w-0"
  >
    <TabbedAccordion closeFunction={closeDrawer} styles="xl:w-0" />
  </Drawer>
  <TabbedAccordion closeFunction={closeSideBar} styles="accordion max-xl:w-0" />
</aside>

<style>
</style>
