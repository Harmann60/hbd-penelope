<script lang="ts">
  import { DIALOGUES } from '$lib/constants';
  import { useEngine } from './dialogue-context.svelte';

  const engine = useEngine();

  function calculateAge(birthDate: string | Date) {
    const today = new Date();
    const birth = new Date(birthDate);
    const monthDifference = today.getMonth() - birth.getMonth();
    let age = today.getFullYear() - birth.getFullYear();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  const dialogue = $derived.by(() => {
    const text = DIALOGUES[engine.currentIndex].text;
    const age = calculateAge('2005-08-15'); // 15 August 2005 (YYYY-MM-DD)
    return text.replace('{age}', age.toString());
  });
</script>

<div class="absolute top-0 left-0 z-2 h-screen w-screen">
  <div class="flex min-h-screen items-center justify-center">
    {#if engine.isPlaying && engine.currentIndex !== DIALOGUES.length}
      <div
        class="fixed top-[50vh] left-[calc(40%)] flex w-full max-w-[30vw]
        justify-center gap-x-[.6vw] py-[.5vw]"
      >
        <button
          onclick={() => engine.next()}
          class="relative block min-h-[1vh] max-w-[30vw] min-w-[1vw] rounded-[1vw]
          bg-white/70 px-[1vw] py-[0.5vw] text-[1.2vw] text-neutral-800
          before:absolute before:top-[-0.8933vw] before:left-[50%]
          before:h-0 before:w-0 before:rotate-90 before:border-t-[0.6vw] before:border-r-[0.7vw]
          before:border-b-[0.6vw] before:border-t-transparent before:border-r-[rgb(255_255_255/0.7)]
          before:border-b-transparent before:bg-transparent before:content-['']
"
        >
          <div class="text-start font-semibold">
            {dialogue}
          </div>
          {#if engine.isEnded}
            <div class="mt-[1vw] flex justify-end">
              <div
                class="mr-[.5vw] mb-[.5vw] h-0 w-0 animate-bounce border-x-[0.5vw]
                border-t-[0.7vw] border-solid border-x-transparent border-t-sky-500"
              ></div>
            </div>
          {/if}
        </button>
      </div>
    {/if}
  </div>
</div>
