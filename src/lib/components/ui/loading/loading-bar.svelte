<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { ASSETS } from '$lib/constants';
  import { cn } from '$lib/utils';
  import { useEngine } from '../dialogue';
  import IconWorldDownload from '$components/icons/IconWorldDownload.svelte';
  import IconDeviceFloppyFilled from '$components/icons/IconDeviceFloppyFilled.svelte';

  interface Props {
    quote: Snippet;
    author: Snippet;
  }

  let { quote, author }: Props = $props();

  const engine = useEngine();

  const loaded = $derived(engine.assets.items.length !== ASSETS.length);

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
  {#if loaded}
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
              {#if engine.assets.cacheLoaded === 0 && engine.assets.networkLoaded === 0}
                <div class="flex w-full animate-pulse items-center justify-center">
                  Preparing engine...
                </div>
              {/if}

              {#if engine.assets.networkLoaded > 0}
                <div in:fly={{ duration: 500 }} class="flex items-center gap-x-[.1vw]">
                  <IconWorldDownload />
                  <div>
                    Network: {formatSize(engine.assets.networkLoaded)} / {formatSize(
                      engine.assets.networkTotal
                    )}
                  </div>
                </div>
              {/if}

              {#if engine.assets.cacheLoaded > 0}
                <div in:fly={{ duration: 500 }} class="flex items-center gap-x-[.1vw]">
                  <IconDeviceFloppyFilled />
                  <div>
                    Cache: {formatSize(engine.assets.cacheLoaded)} / {formatSize(
                      engine.assets.cacheTotal
                    )}
                  </div>
                </div>
              {/if}
            </div>
            {@render author()}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
