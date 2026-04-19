<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade } from 'svelte/transition';
  import { ASSETS } from '$lib/constants';
  import { cn } from '$lib/utils';
  import { useEngine } from '../dialogue';

  interface Props {
    quote: Snippet;
    author: Snippet;
  }

  let { quote, author }: Props = $props();

  const engine = useEngine();

  const formatSize = (bytes: number, decimals: number = 2) => {
    // convert Bytes to specific sizes format.
    // ref: https://stackoverflow.com/a/18650828

    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };
</script>

<div
  class={cn(
    'absolute top-0 left-0 flex h-screen w-screen flex-col items-center',
    'justify-center text-blue-300',
    engine.isRemoveLoadingScreen ? 'z-0 opacity-0' : ' z-40 opacity-100'
  )}
>
  {#if engine.assets.items.length !== ASSETS.length}
    <div
      transition:fade|global={{ duration: 200 }}
      onoutroend={() => (engine.isShowContinueBtn = true)}
      class="space-y-[.5vw]"
    >
      <div class="flex w-screen justify-center">
        <div class="flex flex-col">
          <div class="relative w-[40vw] text-[1vw] font-semibold">
            {@render quote()}
            <div
              class="h-[1.5vw] overflow-hidden rounded-[0.313vw] border-[0.052vw]
              border-blue-300"
            >
              <div
                class="ransition-[width] z-10 flex h-full w-0 items-center justify-end
                bg-blue-300 ease-linear"
                style="width: {engine.loadingWidth.current}%"
              >
                <span class="mr-1 text-[1vw] font-bold text-black">
                  {Math.round(engine.loadingWidth.current)}%
                </span>
              </div>
              <div class="-z-10 w-full"></div>
            </div>
            <div class="mt-[.3vw] flex items-end justify-between">
              <div>
                {formatSize(engine.assets.loaded)} / {formatSize(engine.assets.totalSize)}
              </div>
              <div>({engine.assets.items.length + 1}/{ASSETS.length})</div>
            </div>
            {@render author()}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
