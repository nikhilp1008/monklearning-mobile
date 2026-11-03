/**
 * WHO MOVED THE BOARD — the student or the board itself.
 *
 * The live board follows new lines by gliding to the end (`scrollToEnd` with
 * animation). On iOS, React Native reports the end of that programmatic glide
 * through `onMomentumScrollEnd` — the same event that reports a student's fling
 * coming to rest. The classroom used to re-derive `following` from the offset
 * on every momentum end, so when the board grew during a glide (a tall widget
 * appearing, then laying out), the glide ended short of the new bottom and
 * `following` flipped to false with nobody touching the screen: new lines
 * landed below the fold and the Jump-to-live pill appeared (X1, 2026-09-29,
 * significant-figures seg 2).
 *
 * The rule the classroom already states — "a drag decides, a glide does not" —
 * needs to know whether a motion that has come to rest was the student's. This
 * tracks exactly that, and nothing else.
 */
export type FollowTracker = {
  /** A finger went down on the board. */
  dragBegan(): void;
  /** The finger lifted. `flinging`: the board will keep moving (a momentum end
   *  will follow). Returns the new `following` — a drag always decides. */
  dragEnded(atBottom: boolean, flinging: boolean): boolean;
  /** A momentum scroll came to rest. Returns the new `following` only when the
   *  motion was the student's fling; `null` (leave it alone) after the board's
   *  own glide. */
  momentumEnded(atBottom: boolean): boolean | null;
  /** The board is about to move itself (following a new line, Jump to live). */
  programmaticScroll(): void;
};

export function createFollowTracker(): FollowTracker {
  let studentMotion = false;
  return {
    dragBegan() {
      studentMotion = true;
    },
    dragEnded(atBottom, flinging) {
      // A drag that stops dead produces no momentum end, so the student's
      // motion is over now; a fling stays theirs until it comes to rest.
      studentMotion = flinging;
      return atBottom;
    },
    momentumEnded(atBottom) {
      if (!studentMotion) return null;
      studentMotion = false;
      return atBottom;
    },
    programmaticScroll() {
      studentMotion = false;
    },
  };
}

/** Whether a drag that just ended leaves the board moving. iOS reports the lift
 *  velocity; a platform that reports none is treated as flinging, which only
 *  means the next momentum end (if any) is still read as the student's. */
export function isFling(velocityY: number | undefined): boolean {
  return velocityY === undefined || Math.abs(velocityY) > 0.05;
}

/** How much of the board the writing fills before the board moves. */
export const PAGE_FILL = 0.8;

/**
 * WHERE THE BOARD SITS: IT TURNS A PAGE, IT DOES NOT CREEP.
 *
 * The board used to hold the newest line on a reading line 45% down and glide
 * on every sentence, so it was always moving under the student's eye. Now it
 * stays still while the writing fills it; once the writing passes PAGE_FILL of
 * the board's height it moves ONCE, bringing the newest line back up to the
 * reading line, and stays still again until the next 80%.
 *
 * `current` is where the board was last told to sit. A new heading still
 * turns the page to itself (`headingY`). Writing that has ended up above the
 * board's top (the board was rebuilt narrower or wider) re-centres too.
 */
export function pageTarget(o: {
  current: number;
  writingBottom: number;
  boardHeight: number;
  readLine: number;
  headingY: number;
}): number {
  const { writingBottom, boardHeight, readLine, headingY } = o;
  let y = Math.max(0, o.current);
  if (writingBottom - y > boardHeight * PAGE_FILL || writingBottom < y) {
    y = writingBottom - Math.round(boardHeight * readLine);
  }
  return Math.max(0, headingY, y);
}
