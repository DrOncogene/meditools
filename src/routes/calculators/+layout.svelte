<script lang="ts">
  import { page } from '$app/stores';
  import recents from '$lib/stores/recents';
  import { onMount } from 'svelte';

  onMount(() => {
    if ($recents.size <= 10) {
      recents.update((initial) => {
        return initial.add($page.data.id);
      });
    }
  });
</script>

<slot />
