<script lang="ts">
  import IconCloud from '$components/icons/IconCloud.svelte';
  import { DIALOGUES } from '$lib/constants';
  import { fade } from 'svelte/transition';
  import { useEngine } from './dialogue-context.svelte';

  const engine = useEngine();
</script>

{#if engine.isPlaying && DIALOGUES[engine.currentIndex].choices.length && engine.isEnded}
  <div
    in:fade={{ duration: 1000 }}
    class="absolute top-0 left-0 z-2 h-screen w-screen"
  >
    <div class="flex min-h-screen items-end justify-center pb-[1.5vw]">
      <div class="flex flex-col gap-[.5vw]">
        {#each DIALOGUES[engine.currentIndex].choices as choice (choice.text)}
          <button
            onclick={() => engine.choice()}
            class="flex items-center gap-[.5vw] rounded-[2vw] border-[.1vw] border-neutral-800/50
                  bg-white/70 px-[1vw] py-[.5vw] text-[1.2vw] font-semibold text-neutral-800
                  filter-[drop-shadow(0_0.3vw_0.2vw_rgb(0_0_0/0.07))_drop-shadow(0_0.1vw_0.1vw_rgb(0_0_0/0.06))]"
          >
            <div class="h-[2vw] w-[2vw] -scale-x-100 text-neutral-800">
              <IconCloud />
            </div>
            <div>
              {choice.text}
            </div>
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}
