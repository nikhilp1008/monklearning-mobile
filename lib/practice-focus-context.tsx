import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type PracticeFocusMode = 'mixed' | 'weak' | 'chapter';

export interface PracticeFocusSelection {
  mode: PracticeFocusMode;
  /** The SUBJECT_QUERY value this chapter selection was made under — lets
   *  practice.tsx tell a stale chapter pick apart from a fresh subject. */
  subject: string | null;
  chapterId: string | null;
  chapterName: string | null;
}

export const DEFAULT_PRACTICE_FOCUS: PracticeFocusSelection = {
  mode: 'mixed',
  subject: null,
  chapterId: null,
  chapterName: null,
};

interface PracticeFocusContextValue {
  focus: PracticeFocusSelection;
  setFocus: (focus: PracticeFocusSelection) => void;
}

const PracticeFocusContext = createContext<PracticeFocusContextValue | null>(null);

// practice.tsx and practice-focus.tsx are sibling stack routes, not nested —
// this is the shared home for the applied filter both of them read/write.
export function PracticeFocusProvider({ children }: { children: ReactNode }) {
  const [focus, setFocus] = useState<PracticeFocusSelection>(DEFAULT_PRACTICE_FOCUS);
  const value = useMemo(() => ({ focus, setFocus }), [focus]);
  return <PracticeFocusContext.Provider value={value}>{children}</PracticeFocusContext.Provider>;
}

export function usePracticeFocus() {
  const ctx = useContext(PracticeFocusContext);
  if (!ctx) throw new Error('usePracticeFocus must be used within a PracticeFocusProvider');
  return ctx;
}

// The catalogue's subject names don't always match the app's compact query
// strings (e.g. "Maths" vs "mathematics") — same mismatch normalized in
// app/(tabs)/drona.tsx's normalizeSubject.
export function normalizePracticeSubject(name: string) {
  const n = name.trim().toLowerCase();
  if (n === 'maths' || n === 'math') return 'mathematics';
  return n;
}
