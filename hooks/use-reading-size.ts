import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

import {
  READING_SIZE_DEFAULT,
  READING_SIZE_KEY,
  parseReadingSize,
  type ReadingSize,
} from '@/lib/reading-size';

/**
 * The reader's text size, remembered.
 *
 * Read once on mount and written on every change. It starts at the default
 * rather than at nothing, so the first paint is the page at medium rather than
 * a blank wait for a stored preference — the read finishes in a few
 * milliseconds and a student who has chosen large sees it arrive, which is a
 * far better first frame than an empty one.
 *
 * A failed write is swallowed. Losing a text size costs a student one tap next
 * time; surfacing a storage error over their textbook costs more than that.
 */
export function useReadingSize() {
  const [size, setSize] = useState<ReadingSize>(READING_SIZE_DEFAULT);

  useEffect(() => {
    let alive = true;
    AsyncStorage.getItem(READING_SIZE_KEY)
      .then((raw) => {
        if (alive) setSize(parseReadingSize(raw));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const choose = useCallback((next: ReadingSize) => {
    setSize(next);
    AsyncStorage.setItem(READING_SIZE_KEY, next).catch(() => {});
  }, []);

  return { size, choose };
}
