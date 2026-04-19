import type { Asset, Progress } from '$types';

export class AssetsLoader {
  items = $state<Asset[]>([]);
  progress = $state<Progress[]>([]);
  totalSize = $state(0);

  get loaded() {
    return this.progress.reduce((acc, p) => acc + p.size, 0);
  }

  get percent() {
    if (!this.totalSize) return 0;
    return Math.min((this.loaded / this.totalSize) * 100, 100);
  }

  async preload(assets: Asset[]) {
    await this.#fetchHeads(assets);
    await Promise.all(assets.map((asset) => this.#download(asset)));
  }

  async #fetchHeads(assets: Asset[]) {
    await Promise.all(
      assets.map(async (asset) => {
        const res = await fetch(asset.src, { method: 'HEAD', credentials: 'omit' });
        const size = parseInt(res.headers.get('Content-Length') ?? '0');
        this.totalSize += size;
      })
    );
  }

  async #download(asset: Asset) {
    const res = await fetch(asset.src, { credentials: 'omit' });
    const reader = res.body!.getReader();
    const filename = decodeURIComponent(asset.src).split('/').at(-1) ?? 'unknown';

    const chunks: Uint8Array<ArrayBuffer>[] = [];
    let loaded = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      chunks.push(value);
      loaded += value.byteLength;

      this.progress = upsertItem(this.progress, { filename, size: loaded });
    }

    const blob = new Blob(chunks);
    this.items.push({
      ...asset,
      filename,
      src: URL.createObjectURL(blob)
    });
  }
}

const upsertItem = (array: Progress[], newItem: Progress): Progress[] => {
  const newArray = [...array];
  const index = newArray.findIndex((item) => item.filename === newItem.filename);

  if (index === -1) {
    newArray.push(newItem);
  } else {
    newArray[index] = { ...newArray[index], ...newItem };
  }

  return newArray;
};
