<script lang="ts">
  import { fly } from 'svelte/transition';
  import { cn } from '$lib/utils';
  import { useEngine } from '../dialogue';

  interface Props {
    accessorKey: 'quote' | 'name';
  }

  let { accessorKey }: Props = $props();

  const engine = useEngine();
</script>

<div
  class={cn(
    'relative flex items-center justify-center',
    accessorKey === 'quote' ? 'mb-[1.5vw]' : ''
  )}
>
  {#key engine.quote.current}
    <div
      in:fly={{ y: 5, duration: 400, delay: 500 }}
      out:fly={{ y: -5, duration: 400 }}
      class={cn(
        'absolute w-[30vw] text-center text-[0.9vw]',
        accessorKey === 'quote'
          ? 'bottom-0 text-orange-300 italic'
          : 'top-[.1vw] font-bold text-orange-300'
      )}
    >
      <span>{engine.quote.current?.[accessorKey]}</span>
    </div>
  {/key}
</div>
