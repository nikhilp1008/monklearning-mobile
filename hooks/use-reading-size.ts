import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

import {
  READING_SIZE_DEFAULT,
  READING_SIZE_KEY,
  parseReadingSize,
  type ReadingSize,
} from '@/lib/reading-size';

/**
 * The reader's text size, remembered, and one value for the whole app.
 *
 * Held here rather than per screen: the full reader and the part-by-part
 * pages both set it, and a screen left open underneath must not keep the old
 * size when the student changes it on another. Every mounted hook hears the
 * change.
 *
 * Read once from storage, starting at the default rather than at nothing, so
 * the first paint is the page at medium rather than a blank wait — the read
 * finishes in a few milliseconds. A tap that lands before the read finishes
 * wins: the stored value never overwrites a choice made after the screen
 * opened.
 *
 * A failed write is swallowed. Losing a text size costs a student one tap next
 * time; surfacing a storage error over their textbook costs more than that.
 */
let current: ReadingSize = READING_SIZE_DEFAULT;
let loaded = false;
let chosen = false;
const listeners = new Set<(size: ReadingSize) => void>();

function set(next: ReadingSize) {
  current = next;
  listeners.forEach((l) => l(next));
}

function load() {
  if (loaded) return;
  loaded = true;
  AsyncStorage.getItem(READING_SIZE_KEY)
    .then((raw) => {
      if (!chosen) set(parseReadingSize(raw));
    })
    .catch(() => {});
}

export function useReadingSize() {
  const [size, setSize] = useState<ReadingSize>(current);

  useEffect(() => {
    listeners.add(setSize);
    setSize(current);
    load();
    return () => {
      listeners.delete(setSize);
    };
  }, []);

  const choose = useCallback((next: ReadingSize) => {
    chosen = true;
    set(next);
    AsyncStorage.setItem(READING_SIZE_KEY, next).catch(() => {});
  }, []);

  return { size, choose };
}
