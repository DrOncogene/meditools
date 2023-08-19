<script lang="ts">
  import { Drawer } from '@skeletonlabs/skeleton';
  import TabbedAccordion from '$lib/components/TabbedAccordion.svelte';
  import { closeDrawer, closeSideBar } from '$lib/utils';
</script>

<aside
  class="side-bar w-0 fixed top-20 left-0 h-full transition-all duration-200 z-40 overflow-hidden lg:w-[380px]"
>
  <Drawer width="w-[380px]" rounded="rounded-none" regionDrawer="mt-[80px]" class="lg:hidden">
    <TabbedAccordion closeFunction={closeDrawer} />
  </Drawer>
  <TabbedAccordion closeFunction={closeSideBar} styles="max-lg:w-0" />
</aside>

<style>
</style>
