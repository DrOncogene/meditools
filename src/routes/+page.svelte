<script lang="ts">
  import Hero from '$lib/images/hero-img.svg';
  import { openDrawer, openSideBar } from '$lib/utils';
</script>

<!-- <div
  class="flex items-center justify-center flex-wrap xl:flex-nowrap w-full p-8 md:p-16 overflow-hidden"
> -->
<div class="flex flex-col space-y-6 p-8 md:p-16 md:pr-0 self-center">
  <h1 class="font-bold text-3xl md:text-5xl">Welcome!</h1>
  <h4 class="text-2xl md:text-3xl w-4/5">What are you looking to calculate?</h4>
  <button on:click={openDrawer} class="btn bg-primary-500 rounded-md text-white w-min xl:hidden"
    >Get started</button
  >
  <button
    on:click={openSideBar}
    class="btn bg-primary-500 rounded-md text-white w-min max-xl:hidden">Get started</button
  >
</div>
<div
  class="max-w-[500px] md:w-[500px] h-[400px] grid place-items-center p-8 md:p-16 md:pl-0 self-center"
>
  <img src={Hero} alt="" />
</div>

<!-- </div> -->

<style>
</style>
