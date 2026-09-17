/**
 * THE THIRD LINE OF A NOTE'S ROW.
 *
 * It used to be the server's own `preview` — "84 board items · 1 of 7 parts" —
 * and every part of that is now wrong. "Board items" was never something a
 * student could picture, and it is doubly stale since the note page stopped
 * rendering board items at all: it reads the organised note instead, so the
 * count describes a thing that is no longer on screen anywhere.
 *
 * What a student scanning their notes actually wants is WHICH CHAPTER this came
 * from, and the row never showed it — `chapter` was only ever used as a
 * fallback title. So that is the line.
 *
 * COVERAGE IS ADDED ONLY WHEN THE CLASS DID NOT FINISH. "3 of 7 parts" on a
 * note whose class ran to the end says nothing, and saying it on every row
 * teaches the eye to skip the line. On a note that stopped early it is the one
 * thing worth knowing before opening it, because the rest of that lesson is
 * sitting in the note marked as self-study.
 *
 * `preview` is deliberately not read. It is the server's sentence about its own
 * data model and there is nothing to salvage in it.
 */
export function noteRowLine(note: {
  chapter?: string | null;
  concept?: string | null;
  segments_covered?: number | null;
  total_segments?: number | null;
}): string | null {
  const parts: string[] = [];

  const chapter = note.chapter?.trim();
  // Skipped when it is the title already — the row would say it twice.
  if (chapter && chapter.toLowerCase() !== note.concept?.trim().toLowerCase()) {
    parts.push(chapter);
  }

  const covered = note.segments_covered ?? 0;
  const total = note.total_segments ?? 0;
  if (total > 0 && covered > 0 && covered < total) {
    parts.push(`${covered} of ${total} parts`);
  }

  return parts.length ? parts.join(' · ') : null;
}
