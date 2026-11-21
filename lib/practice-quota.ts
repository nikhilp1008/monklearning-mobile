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
 *
 * Newer API builds also send `questions_used_today` and `daily_limit` on the
 * `/practice/answer` reply, counted INCLUDING that answer — the exact figure
 * `/practice/next` will report once the row lands. When both are there,
 * `anchorFromAnswer` takes it as the anchor, pinned to the tally WITH that
 * answer recorded. Later answers still add on top, and a `/practice/next`
 * reply issued before the answer was accepted has a lower stamp, so
 * `reconcile` drops it as older. A reply issued after it is folded as usual:
 * the pending-answer guard stops a count-behind prefetch from raising the
 * line, while a 24 h rollover (lower beyond what is pending) or another
 * device (higher) still moves it. An answer reply without the numbers (older
 * API) leaves the anchor alone and the estimate above carries on as before.
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

function isCount(n: unknown): n is number {
  return typeof n === 'number' && Number.isFinite(n) && n >= 0;
}

/**
 * Anchor from a `/practice/answer` reply, or null when the reply does not
 * carry both numbers (older API: keep the anchor you have).
 *
 * `acceptedNow` is the tally AFTER this answer was recorded, so the anchor's
 * `used` already includes it and only answers accepted later are added. It is
 * the server's exact count at that moment, so it replaces `prev` outright —
 * higher (another device) or lower (24 h window rolled) alike — unless `prev`
 * is somehow pinned to a later tally, which only a newer reply can be.
 */
export function anchorFromAnswer(
  prev: QuotaAnchor | null,
  reply: { questions_used_today?: number | null; daily_limit?: number | null },
  acceptedNow: number
): QuotaAnchor | null {
  const { questions_used_today: used, daily_limit: limit } = reply;
  if (!isCount(used) || !isCount(limit)) return null;
  if (prev && prev.at > acceptedNow) return prev;
  return { used: Math.floor(used), limit: Math.floor(limit), at: acceptedNow };
}

/** The number under Submit, or null while the API has not said. */
export function questionsLeft(anchor: QuotaAnchor | null, accepted: number): number | null {
  if (!anchor) return null;
  return Math.max(0, anchor.limit - estimateUsed(anchor, accepted));
}
