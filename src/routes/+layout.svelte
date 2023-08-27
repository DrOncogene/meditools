<script>
  import '../theme.postcss';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.css';
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { closeDrawer, openDrawer, openSideBar } from '$lib/utils';
  import { setContext } from 'svelte';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { Drawer, storePopup } from '@skeletonlabs/skeleton';
  import Footer from '$lib/components/Footer.svelte';
  import TabbedAccordion from '$lib/components/TabbedAccordion.svelte';

  setContext('categories', $page.data.categories);
  setContext('calculators', $page.data.calculators);
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<div
  class="app min-h-screen min-w-full grid grid-flow-row gap-0"
  style="background-color: #FAFDFF;"
>
  <Header />

  <main class="flex justify-center relative overflow-hidden max-h-[calc(100vh_-_80px)] mt-20 z-40">
    <div class="absolute left-0 top-0 w-8 h-full border border-primary-500">
      <button on:click={openDrawer} class="w-8 bg-primary-500 p-1 xl:hidden">
        <Icon icon="mdi:menu" color="#fff" class="w-6 h-6" />
      </button>
      <button on:click={openSideBar} class="w-8 bg-primary-500 p-1 max-xl:hidden">
        <Icon icon="mdi:menu" color="#fff" class="w-6 h-6" />
      </button>
    </div>
    <Sidebar />
    <section
      class="grid auto-rows-min md:grid-cols-[1.5fr_1fr] justify-center w-full h-full ml-8 xl:ml-[380px] transition-[margin-left] duration-500 border-t-2 border-surface-600 overflow-auto z-10"
    >
      <slot />
    </section>
  </main>
  <Drawer
    width="max-w-[380px]"
    rounded="rounded-none"
    regionDrawer="mt-[80px]"
    duration={300}
    zIndex="z-[100]"
    class="xl:hidden xl:w-0"
  >
    <TabbedAccordion closeFunction={closeDrawer} styles="xl:w-0" />
  </Drawer>

  <Footer />
</div>

<style>
</style>
