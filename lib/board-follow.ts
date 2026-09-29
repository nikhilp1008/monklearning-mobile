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
