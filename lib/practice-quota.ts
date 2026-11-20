/**
 * "N questions left today", kept right while the student answers.
 *
 * The number is the SERVER's: `/practice/next` reports `questions_used_today`
 * (answers in the last 24 h, mock answers excluded, give-ups included) and
 * `daily_limit`. Nothing here invents a count — until the API has spoken there
 * is no line at all.
 *
 * But a reply is a snapshot, and two things make the snapshot stale by the
 * time it is on screen:
 *
 *  1. It is counted BEFORE the question it came with is answered. A question
 *     taken from the prefetch queue was fetched while the previous one was
 *     still being read, and setting the line only on a live fetch froze it at
 *     whatever the last live fetch said ("99 left" after five answers).
 *  2. The API writes the attempt row in a background task AFTER the answer
 *     response has gone (routers/practice.py `_record_answer`), and the
 *     prefetch is fired the moment that response lands. So a reply produced
 *     just after a submit has usually not seen that submit yet.
 *
 * So the screen counts the answers the server has ACCEPTED (a 200 from
 * `/practice/answer` — chosen option, numeric value or "I don't know", the
 * cases the server writes a row for), and every reply is stored with the
 * count at the moment its request was ISSUED. Shown:
 *
 *     used = anchor.used + (accepted now − accepted when the anchor was issued)
 *
 * and (2) is handled by `reconcile`: an answer accepted within SETTLE_MS of a
 * request being issued may be missing from that reply, so the reply is not
 * allowed to undo it.
 */

/** How long after an answer is accepted its attempt row may still be
 *  unwritten. The background task is scoring (a few ~300 ms round trips) then
 *  the insert; measured ~1.5 s, so this is generous on purpose. */
export const SETTLE_MS = 10_000;

/** Answers the server has accepted, and when — module-lifetime, not
 *  screen-lifetime, so it survives leaving Practice exactly as the queue does. */
export interface AnswerTally {
  accepted: number;
  /** Acceptance times still inside SETTLE_MS of something; older ones pruned. */
  recentAt: number[];
}

/** Where a request stood when it was issued. Stored beside a queued question. */
export interface TallyStamp {
  /** `accepted` at issue time. */
  at: number;
  /** How many of those answers were accepted so recently that the reply may
   *  not include them yet. */
  pending: number;
}

/** The server's count, pinned to the tally it is relative to. */
export interface QuotaAnchor {
  used: number;
  limit: number;
  at: number;
}

export function emptyTally(): AnswerTally {
  return { accepted: 0, recentAt: [] };
}

export function recordAccepted(tally: AnswerTally, now: number): AnswerTally {
  return {
    accepted: tally.accepted + 1,
    recentAt: [...tally.recentAt.filter((t) => now - t < SETTLE_MS), now],
  };
}

export function stampTally(tally: AnswerTally, now: number): TallyStamp {
  return {
    at: tally.accepted,
    pending: tally.recentAt.filter((t) => now - t < SETTLE_MS).length,
  };
}

/** What `anchor` says `used` is once `accepted` answers have been taken. */
export function estimateUsed(anchor: QuotaAnchor, accepted: number): number {
  return anchor.used + Math.max(0, accepted - anchor.at);
}

/**
 * Fold a server reply into the anchor. `reply` is ignored unless it carries
 * both numbers.
 *
 * A reply lower than what the previous anchor implies is believed only beyond
 * what its pending answers can explain: the rolling 24 h window really can
 * shrink the count, but a reply that simply has not seen the last answer must
 * not put that answer back on the line.
 */
export function reconcile(
  prev: QuotaAnchor | null,
  reply: { questions_used_today?: number | null; daily_limit?: number | null },
  stamp: TallyStamp
): QuotaAnchor | null {
  const { questions_used_today: used, daily_limit: limit } = reply;
  if (used == null || limit == null) return prev;
  // An older snapshot than the one already held (issued before it): it can
  // only know less.
  if (prev && stamp.at < prev.at) return prev;
  let adjusted = used;
  if (prev) {
    const implied = estimateUsed(prev, stamp.at);
    adjusted = Math.max(used, Math.min(implied, used + stamp.pending));
  }
  return { used: adjusted, limit, at: stamp.at };
}

/** The number under Submit, or null while the API has not said. */
export function questionsLeft(anchor: QuotaAnchor | null, accepted: number): number | null {
  if (!anchor) return null;
  return Math.max(0, anchor.limit - estimateUsed(anchor, accepted));
}
