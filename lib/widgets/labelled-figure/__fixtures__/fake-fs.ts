/**
 * An in-memory filesystem, because the cache's promises are about behaviour —
 * "one download per slug+sha", "a mismatched file is deleted" — and a test
 * that needed a real disk to state them would only run where the feature
 * already worked.
 */
export const _fs = new Map<string, { size: number; bytes: Uint8Array; mtime: number }>();
export function _resetFs() { _fs.clear(); }

export class Directory {
  uri: string;
  constructor(...parts: (string | Directory | File)[]) {
    this.uri = parts.map((p) => (typeof p === 'string' ? p : p.uri)).join('/');
  }
  get exists() { return true; }
  create() {}
  list(): (Directory | File)[] {
    return [..._fs.keys()]
      .filter((k) => k.startsWith(this.uri + '/'))
      .map((k) => new File(k));
  }
}

export class File {
  uri: string;
  constructor(...parts: (string | Directory | File)[]) {
    this.uri = parts.map((p) => (typeof p === 'string' ? p : p.uri)).join('/');
  }
  get exists() { return _fs.has(this.uri); }
  get size() { return _fs.get(this.uri)?.size ?? 0; }
  info() { return { exists: this.exists, size: this.size, modificationTime: _fs.get(this.uri)?.mtime ?? 0 }; }
  delete() { _fs.delete(this.uri); }
  async bytes() { return _fs.get(this.uri)?.bytes ?? new Uint8Array(); }
  static async downloadFileAsync(_url: string, dest: File) { return dest; }
}

export const Paths = { cache: new Directory('file:///cache') };
