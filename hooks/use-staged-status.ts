import { useEffect, useState } from 'react';

/**
 * Advances a status line through a fixed sequence and stops at the last one.
 *
 * Modelled on `components/snap-loading.tsx`, whose comment states the rule this
 * follows: *"stop at the last stage rather than looping back to the first —
 * looping reads as a hang."* That matters more here than it does there, because
 * this wait has no known length: `components/solution-screen.tsx` uses a modulo
 * rotator, which is right for its case (many short panels, and repeating a
 * phrase is the failure it guards against) and wrong for a single wait that can
 * run past every line you wrote.
 *
 * This is filler for one genuinely opaque phase, not a progress mechanism. Every
 * other phase change on the loading card is a real observed event — see
 * `constants/classroom-status.ts`. This codebase has thrown out timer-driven
 * progress twice before (`app/snap-capture.tsx`'s blind 7s handoff,
 * `app/lesson-player.tsx`'s `setInterval` typewriter); do not let it grow into
 * the thing that decides what the screen claims.
 */
export function useStagedStatus({
  lines,
  holdMs = 2600,
  longWaitMs,
  active = true,
  resetKey,
}: {
  lines: readonly string[];
  /** How long each line holds before the next. */
  holdMs?: number;
  /** After this long, the caller should swap in reassurance copy. Omit to never. */
  longWaitMs?: number;
  /** Pause and hold the current line — e.g. while an error is showing. */
  active?: boolean;
  /**
   * Restart the sequence when this changes. The phase, normally: a new phase
   * brings its own lines and has to begin at the first of them rather than
   * inheriting an index from the phase before it.
   */
  resetKey?: string | number;
}): { text: string; longWait: boolean } {
  const [index, setIndex] = useState(0);
  const [longWait, setLongWait] = useState(false);

  useEffect(() => {
    setIndex(0);
    setLongWait(false);
  }, [resetKey]);

  useEffect(() => {
    if (!active || lines.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current >= lines.length - 1 ? current : current + 1));
    }, holdMs);
    return () => clearInterval(id);
  }, [active, lines.length, holdMs, resetKey]);

  useEffect(() => {
    if (!active || !longWaitMs) return;
    const id = setTimeout(() => setLongWait(true), longWaitMs);
    return () => clearTimeout(id);
  }, [active, longWaitMs, resetKey]);

  return {
    text: lines[Math.min(index, lines.length - 1)] ?? '',
    longWait,
  };
}
