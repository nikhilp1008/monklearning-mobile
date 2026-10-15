import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import { Chapter, loadChapter } from '@/lib/textbooks';

/** The chapter a textbook screen was opened on, from its route params, and the params to pass on. */
export function useRouteChapter() {
  const params = useLocalSearchParams<{ subject?: string; classLevel?: string; title?: string; number?: string }>();
  const subject = (params.subject ?? '').toLowerCase();
  const classLevel = Number(params.classLevel ?? 11);
  const title = params.title ?? '';
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    let cancelled = false;
    loadChapter(subject, classLevel, title)
      .then((c) => { if (cancelled) return; if (c) setChapter(c); else setMissing(true); })
      .catch(() => !cancelled && setMissing(true));
    return () => { cancelled = true; };
  }, [subject, classLevel, title]);
  const route = { subject, classLevel: String(classLevel), title, number: params.number ?? '' };
  return { chapter, missing, route, title, number: params.number };
}

/** "physics|11|1": the key the revise content is filed under. */
export const chapterKey = (c: Chapter) => `${c.subject.toLowerCase()}|${(/\d+/.exec(c.klass) ?? [''])[0]}|${Number(c.chapter)}`;
