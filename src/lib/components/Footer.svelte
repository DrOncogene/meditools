<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Avatar } from '@skeletonlabs/skeleton';
  import Fafy from '$lib/images/fafy.jpg';
  import Nas from '$lib/images/nas.jpg';

  function toggleFooter() {
    const footer = document.querySelector('.main-footer');
    const btn = document.querySelector('.footer-btn');

    footer?.classList.toggle('translate-x-[200px]');
    btn?.classList.toggle('rounded-l-none');
    btn?.classList.toggle('rounded-r-md');
    btn?.classList.toggle('rotate-180');
  }
</script>

<footer
  class="main-footer fixed top-1/2 right-0 text-xl font-bold w-max h-max -translate-y-1/2 grid grid-flow-col place-items-center translate-x-[200px] transition-all duration-500 z-20"
>
  <button
    on:click={toggleFooter}
    class="footer-btn font-black h-12 rounded-l-md bg-primary-500 hover:bg-primary-600 transition-all duration-500 shadow-2xl shadow-black"
  >
    <Icon icon="mdi:chevron-left" class="text-white" />
  </button>
  <div
    class="logo-cloud grid grid-cols-1 items-center justify-center bg-primary-500 rounded-none rounded-l-md [&>.logo-item]:p-4 shadow-xl shadow-black"
  >
    <a
      href="https://github.com/DrOncogene/meditools"
      target="_blank"
      class="logo-item bg-primary-500 shadow-none"
    >
      <span>
        <Icon icon="mdi:github" width="20px" height="30px" color="white" class="bg-primary-500" />
      </span>
    </a>
    <a
      href="https://www.twitter.com/DrOncogene"
      target="_blank"
      class="logo-item bg-primary-500 shadow-none"
    >
      <span>
        <Icon icon="mdi:twitter" width="20px" height="30px" color="white" class="bg-primary-500" />
      </span>
    </a>
    <a
      href="https://www.linkedin.com/in/nasir-abdulrasheed-106b2a175/"
      class="logo-item bg-primary-500 shadow-none"
    >
      <span>
        <Icon icon="mdi:linkedin" width="20px" height="30px" color="white" class="bg-primary-500" />
      </span>
    </a>
  </div>
  <div class="bg-primary-500 [&>div]:rounded-none rounded-l-md shadow-2xl shadow-black">
    <div
      class="card bg-transparent p-3 ml-0.5 w-full h-max text-white grid grid-flow-row gap-2 items-center justify-center"
    >
      <div class="card-header grid place-content-center">
        <Avatar
          rounded="rounded-full"
          src={Fafy}
          initials="OF"
          width="w-36"
          background="bg-surface-500"
        />
      </div>
      <div class="text-sm text-center">
        Dr Oluwafemi Fafiola <br /><span class="text-xs font-normal">UX Designer</span>
      </div>
      <div
        class="card-footer logo-cloud grid grid-flow-col items-center justify-center bg-primary-500 rounded-md [&>.logo-item]:py-2 [&>.logo-item]:px-3"
      >
        <a
          href="https://www.twitter.com/FafysamuelDr"
          target="_blank"
          class="logo-item bg-primary-500 shadow-none"
        >
          <span>
            <Icon
              icon="mdi:twitter"
              width="20px"
              height="30px"
              color="white"
              class="bg-primary-500"
            />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/oluwafemi-fafiola-090a92180"
          target="_blank"
          class="logo-item bg-primary-500 shadow-none"
        >
          <span>
            <Icon
              icon="mdi:linkedin"
              width="20px"
              height="30px"
              color="white"
              class="bg-primary-500"
            />
          </span>
        </a>
      </div>
    </div>
    <div
      class="card bg-transparent p-3 ml-0.5 w-max h-max text-white grid grid-flow-row gap-2 items-center justify-center"
    >
      <div class="card-header grid place-content-center">
        <Avatar
          rounded="rounded-full"
          src={Nas}
          initials="NA"
          width="w-36"
          background="bg-surface-500"
        />
      </div>
      <div class="text-sm text-center">
        Dr Nasir Abdulrasheed <br /><span class="text-xs font-normal">Software Developer</span>
      </div>
      <div
        class="card-footer logo-cloud grid grid-flow-col items-center justify-center bg-primary-500 rounded-md [&>.logo-item]:py-2 [&>.logo-item]:px-3"
      >
        <a
          href="https://www.github.com/DrOncogene"
          target="_blank"
          class="logo-item bg-primary-500 shadow-none"
        >
          <span>
            <Icon
              icon="mdi:github"
              width="20px"
              height="30px"
              color="white"
              class="bg-primary-500"
            />
          </span>
        </a>
        <a
          href="http://www.twitter.com/DrOncogene"
          target="_blank"
          class="logo-item bg-primary-500 shadow-none"
        >
          <span>
            <Icon
              icon="mdi:twitter"
              width="20px"
              height="30px"
              color="white"
              class="bg-primary-500"
            />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/nasir-abdulrasheed-106b2a175/"
          target="_blank"
          class="logo-item bg-primary-500 shadow-none"
        >
          <span>
            <Icon
              icon="mdi:linkedin"
              width="20px"
              height="30px"
              color="white"
              class="bg-primary-500"
            />
          </span>
        </a>
      </div>
    </div>
  </div>
</footer>
