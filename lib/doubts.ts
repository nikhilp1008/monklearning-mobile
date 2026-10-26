import { ApiError, apiFetch } from '@/lib/api';

/** One move of the solution. Math arrives as `$…$` / `$$…$$`. */
export interface SolutionStep {
  n: number;
  text: string;
}

/**
 * `unsure` is not a failure. The solver reached an answer it could not stand
 * behind — it disagreed with the answer printed on the page, landed on
 * something that is not among the options, or came out differently across
 * repeated solves — so the API withholds the answer and keeps the working.
 * `failure_reason` carries the explanation to show the student. Treating it
 * like `failed` hides the part the API kept on purpose; see `solutionView`.
 */
export type DoubtStatus = 'solved' | 'failed' | 'illegible' | 'unsure';

/** One printed choice of an MCQ, as the API composes it. */
export interface DoubtOption {
  /** "A", "B", … */
  label: string;
  text: string;
  /**
   * Set when the choice was a PICTURE rather than words — four circuits, four
   * graphs. The API crops it off the page and hands back a short-lived URL;
   * `text` is still the written description of it, and is what a screen reader
   * and the solver both work from.
   */
  image_url?: string | null;
}

/** What the student can actually DO about a refusal. */
export type Remedy = 'retake' | 'not_photo' | 'our_side';

export interface DoubtSummary {
  id: string;
  submission_id: string;
  question_index: number;
  /** Includes the "Q1." prefix. `stem` is the same text with that stripped — prefer it for display. */
  question_text: string | null;
  stem?: string | null;
  subject: string | null;
  /** What to print for `subject` — "Math", not "mathematics". */
  subject_label?: string | null;
  /** False when this doubt's subject is not on the student's exam. Null when
   *  the photo was illegible and no subject was read at all. */
  on_syllabus?: boolean | null;
  /** Chapter-level topic ("Waves and Organ Pipes") — the API column is `chapter`. */
  chapter: string | null;
  /** Short display title for the doubt. */
  concept: string | null;
  question_type: string | null;
  /** Every printed choice of an MCQ, in order. Empty for numerical questions. */
  options?: DoubtOption[] | null;
  legible: boolean;
  legibility_note: string | null;
  answer: string | null;
  key_idea: string | null;
  status: DoubtStatus;
  failure_reason: string | null;
  /** The label(s) of the option the answer landed on — `["C"]`, not the whole
   *  A/B/C/D list. Empty for a numerical question, and for an `unsure` one. */
  option_labels?: string[] | null;
  created_at: string;
  scrap: string;
  /**
   * The question as it was photographed, cut from the page — a short-lived
   * signed URL, on the LIST now as well as the detail. Null when no span
   * could be cut, or for doubts saved before crops existed.
   */
  question_image_url?: string | null;
}

export interface DoubtDetail extends Omit<DoubtSummary, 'scrap'> {
  /** Not verified against a live MCQ sample yet — guard with `steps ?? []` and fall back to `explanation`. */
  steps?: SolutionStep[] | null;
  /** Full concatenated working, always present as a fallback even when `steps` isn't. */
  explanation?: string | null;
  /** Short-lived presigned R2 URL, or null when one could not be produced. */
  image_url: string | null;
  /**
   * The figures this question was PRINTED with — the beaker, the graph, the
   * pair of wires — in reading order. Short-lived signed URLs. Empty when the
   * question had none, or when it had figures that became its options and are
   * carried there instead.
   */
  figure_urls?: string[] | null;
  /**
   * The question as it was photographed, cut from the page. Shown in place
   * of the transcription. Null when no span could be cut — a two-column
   * page, no OCR geometry, or a doubt saved before crops existed.
   */
  question_image_url?: string | null;
  reported: boolean;
  /** Unsolved, and fixable by the student saying what the photo lost
   *  (Ask follow-up re-solves it). Absent from older servers. */
  can_clarify?: boolean;
}

/**
 * One filter chip, as the server composes them.
 *
 * Which subjects belong on the row depends on the student's exam, which lives
 * on `profiles` and is resolved server-side — so this is not something the
 * client can derive. The list is their syllabus first (JEE gets Physics,
 * Chemistry, Math whether or not they have snapped one yet), then any subject
 * they have actually snapped from outside it, flagged `on_syllabus: false`.
 *
 * Off-syllabus is labelled, never hidden: the subject is a best-effort label
 * from a model — a real stereochemistry question came back tagged Biology —
 * and a doubt you cannot find is worse than a chip you did not expect.
 */
export interface DoubtSubjectChip {
  /** The stored value. Filtering holds this; the chip prints `label`. */
  key: string;
  /** "Math", not "mathematics" — what the student reads. */
  label: string;
  on_syllabus: boolean;
}

export interface DoubtsListResponse {
  doubts: DoubtSummary[];
  count: number;
  subjects: DoubtSubjectChip[];
  /** 'jee' | 'neet' | 'both', as the server resolved it from the profile. */
  exam: string;
}

/** One question inside a submission, as returned by POST /doubts. */
export interface SnappedQuestion {
  id: string;
  question_index: number;
  question_type?: string | null;
  /** Every printed choice of an MCQ, in order. Empty for numerical. */
  options?: DoubtOption[] | null;
  /** The label(s) the answer landed on — `["C"]`, not the whole list. For a
   *  choice question `answer` is the option's *text*, so it reads as one of
   *  the printed choices on its own. */
  option_labels?: string[] | null;
  remedy?: Remedy;
  retake_helps?: boolean;
  /** See DoubtDetail.can_clarify. */
  can_clarify?: boolean;
  /** Includes the "Q1. `stem` is the same text with that stripped — prefer it for display. */
  question_text: string | null;
  stem?: string | null;
  subject: string | null;
  /** Verified live 2026-08-13: the real field is `chapter`, not `topic` as
   *  monk-learning-webpage's own (already-stale) type declared. */
  chapter: string | null;
  concept?: string | null;
  legible: boolean;
  legibility_note: string | null;
  answer: string | null;
  steps?: SolutionStep[] | null;
  /** Full concatenated working, always present as a fallback even when `steps` isn't. */
  explanation?: string | null;
  key_idea: string | null;
  status: DoubtStatus;
  failure_reason: string | null;
  /** The figures this question was printed with, as short-lived signed URLs. */
  figure_urls?: string[] | null;
  /**
   * The question as it was photographed, cut from the page. Shown in place
   * of the transcription. Null when no span could be cut — a two-column
   * page, no OCR geometry, or a doubt saved before crops existed.
   */
  question_image_url?: string | null;
}

export interface SnapResponse {
  submission_id: string;
  /** Set when more questions were visible than were read, or the read was partial. */
  note: string | null;
  solved_count: number;
  questions: SnappedQuestion[];
  questions_used_today?: number;
  daily_limit?: number;
}

/** POST /doubts rejects with this shape, so the UI can name the failing stage. */
export interface SnapFailure {
  message: string;
  /** `pass`: the student's pass has ended (HTTP 402). `network`: the
   *  connection, not the photo or the solver. `too_large`: over the size cap
   *  (HTTP 413, or caught before upload). `rejected`: refused before reading
   *  — wrong file type, an empty file — with `message` saying why. */
  stage:
    | 'transcribe'
    | 'solve'
    | 'config'
    | 'quota'
    | 'pass'
    | 'network'
    | 'too_large'
    | 'rejected'
    | string;
  reason?: string;
  /** retake = their photo | not_photo = needs a figure | our_side = ours */
  remedy?: Remedy;
  retake_helps?: boolean;
  doubt_id?: string;
  /** Quota refusals only. */
  used_today?: number;
  daily_limit?: number;
  retry_after_seconds?: number | null;
}

/** A picked/captured photo, in the shape expo-image-picker returns. */
export interface DoubtPhoto {
  uri: string;
  fileName?: string | null;
  mimeType?: string | null;
  fileSize?: number | null;
}

/** Mirrors the API's own caps, so bad input is rejected before upload. */
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
// The product target is 3 questions per photo (snap-solved.tsx shows up to
// Q1/Q2/Q3). Nothing in this file enforces it — question count isn't known
// until the backend has parsed the photo, so there's no client-side upload
// gate for it — this constant is display-only today. If the backend ever
// detects more than 3 in one photo, snap-solved.tsx still renders all of
// them rather than silently hiding the extras; enforcing the cap for real
// needs a backend-side change.
export const MAX_QUESTIONS = 3;
export const ACCEPTED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];

/**
 * The same check as `rejectPhoto`, as the failure the capture screen shows —
 * so a photo too large to send reads as exactly that, not as an unreadable
 * shot.
 */
export function rejectPhotoFailure(photo: DoubtPhoto): SnapFailure | null {
  const reason = rejectPhoto(photo);
  if (!reason) return null;
  const tooLarge = !!photo.fileSize && photo.fileSize > MAX_IMAGE_BYTES;
  return { message: reason, stage: tooLarge ? 'too_large' : 'rejected', remedy: 'retake', retake_helps: true };
}

/**
 * A refusal whose `detail` is a plain sentence rather than the snap's own
 * object: the size cap (413), an unsupported type (415), an empty file (400),
 * or "not available right now" (503). The 4xx ones are about the file, so a
 * different photo is the way on; anything else is ours.
 */
export function plainRefusal(status: number, detail: string): SnapFailure {
  if (status === 413) {
    return { message: detail || 'That photo is too large.', stage: 'too_large', remedy: 'retake', retake_helps: true };
  }
  if (status >= 400 && status < 500 && status !== 429) {
    return { message: detail, stage: 'rejected', remedy: 'retake', retake_helps: true };
  }
  return { message: detail, stage: 'unknown', remedy: 'our_side', retake_helps: false };
}

/** The connection failed: never the photo, never a sentence to print. */
const CONNECTION_FAILURE: SnapFailure = {
  message: 'Could not reach the solver. Check your connection.',
  stage: 'network',
  remedy: 'our_side',
  retake_helps: false,
};

/** Returns a student-facing reason, or null when the photo is acceptable. */
export function rejectPhoto(photo: DoubtPhoto): string | null {
  const mime = (photo.mimeType || 'image/jpeg').toLowerCase();
  if (!ACCEPTED_MIME.includes(mime)) {
    return 'That file type is not supported. Send a JPEG, PNG, WebP or HEIC photo.';
  }
  if (photo.fileSize && photo.fileSize > MAX_IMAGE_BYTES) {
    return `That photo is larger than ${MAX_IMAGE_BYTES / (1024 * 1024)} MB.`;
  }
  return null;
}

/** One page of the history — the server's own default. */
export const DOUBTS_PAGE_SIZE = 60;

/**
 * Where the next page starts: the last row of the page before it. Both fields,
 * because the questions of one snap share a `created_at` and are ordered by id
 * within it — a time alone would skip or repeat them at a page boundary.
 */
export type DoubtsCursor = { before: string; beforeId: string };

export function listDoubts(
  params: { q?: string; limit?: number; cursor?: DoubtsCursor | null } = {}
): Promise<DoubtsListResponse> {
  // Still no `subject` param, but for a different reason than before.
  //
  // It used to be that the API's vocabulary ("Mathematics") did not match the
  // app's labels ("Maths") and the server's matching semantics were unverified.
  // Both are settled now: storage was migrated to one lowercase name per
  // subject, and `?subject=` round-trips "Math", "Maths" and "mathematics"
  // alike. The reason to keep filtering client-side is simply that the rows are
  // already in hand — switching a chip should not cost a round trip.
  const search = new URLSearchParams();
  if (params.q?.trim()) search.set('q', params.q.trim());
  search.set('limit', String(params.limit ?? DOUBTS_PAGE_SIZE));
  if (params.cursor) {
    search.set('before', params.cursor.before);
    search.set('before_id', params.cursor.beforeId);
  }
  return apiFetch(`/doubts?${search.toString()}`);
}

/**
 * What one page of the history adds, and whether there is another.
 *
 * The history was silently capped at the first 60 — a student with more had no
 * way to reach the rest. The server pages on `before` / `before_id`, newest
 * first, and a short page is the last one.
 *
 * Deduped by id against everything already `seen`, and a page that adds
 * nothing ends the paging: a server from before the cursor ignores it and
 * returns the first page again, and without this the list would fill with
 * copies of it forever. `seen` is updated in place.
 */
export function absorbDoubtsPage(
  seen: Set<string>,
  page: DoubtSummary[],
  limit: number = DOUBTS_PAGE_SIZE
): { fresh: DoubtSummary[]; cursor: DoubtsCursor | null; done: boolean } {
  const fresh = page.filter((d) => !seen.has(d.id));
  for (const d of fresh) seen.add(d.id);
  const last = page[page.length - 1];
  const cursor = last ? { before: last.created_at, beforeId: last.id } : null;
  return { fresh, cursor, done: !cursor || page.length < limit || fresh.length === 0 };
}

/** Whether `d` sorts after `cursor` in the server's order (older first by
 *  time, then lower id). */
export function olderThanCursor(d: Pick<DoubtSummary, 'created_at' | 'id'>, cursor: DoubtsCursor): boolean {
  const a = Date.parse(d.created_at);
  const b = Date.parse(cursor.before);
  if (a !== b) return a < b;
  return d.id < cursor.beforeId;
}

/**
 * Which doubts the history keeps: the solved ones, and the `unsure` ones.
 *
 * An `unsure` doubt is the solver's working with the answer withheld — the
 * student was shown it straight after the snap (lib/solution-view.ts), and the
 * detail screen shows it the same way. Keeping only `solved` here made it vanish
 * from Doubts the moment they left the solution. `failed` and `illegible` hold
 * nothing to read again, and stay out.
 */
export function inHistory(d: Pick<DoubtSummary, 'status'>): boolean {
  return d.status === 'solved' || d.status === 'unsure';
}

export function getDoubt(doubtId: string): Promise<DoubtDetail> {
  return apiFetch(`/doubts/${doubtId}`);
}

/**
 * Uploads one photo and waits for all its questions to be solved.
 *
 * Timing scales with question count, not a flat ~25s: the web client measured
 * a five-question page at ~75s. Since MAX_QUESTIONS allows three, the default
 * 60s ceiling would abort a healthy solve mid-flight and show the student a
 * "try again" for work the backend was still doing.
 *
 * 240s, not the 150s it was: that was the server's SOLVE ceiling alone, and the
 * whole request is the read in front of it (up to ~45s), the solve (150s with
 * thinking on) and the insert and signing after it. Cutting it at 150s gave up
 * on a solve the server was still going to save and charge.
 *
 * The web client uses `POST /doubts/stream` (SSE) instead, which streams each
 * step as it lands and shows real progress rather than one long spinner —
 * the better end state, and a follow-up worth doing.
 */
const SNAP_TIMEOUT_MS = 240000;

export async function snapDoubt(photo: DoubtPhoto, signal?: AbortSignal): Promise<SnapResponse> {
  const body = new FormData();
  // React Native's FormData accepts this {uri, name, type} shape directly —
  // there's no browser File object on-device to append instead.
  body.append('file', {
    uri: photo.uri,
    name: photo.fileName || 'doubt.jpg',
    type: photo.mimeType || 'image/jpeg',
  } as unknown as Blob);
  return apiFetch('/doubts', { method: 'POST', body, timeoutMs: SNAP_TIMEOUT_MS, signal });
}

export function reportDoubt(doubtId: string, comment?: string): Promise<{ reported: boolean }> {
  return apiFetch(`/doubts/${doubtId}/report`, {
    method: 'POST',
    body: JSON.stringify({ comment: comment ?? null }),
  });
}

export function deleteDoubt(doubtId: string): Promise<void> {
  return apiFetch(`/doubts/${doubtId}`, { method: 'DELETE' });
}

/** Normalizes the app's compact subject labels against the API's own vocabulary. */
export function subjectMatches(apiSubject: string | null | undefined, filter: string): boolean {
  if (filter === 'All') return true;
  if (!apiSubject) return false;
  const normalize = (s: string) => {
    const n = s.trim().toLowerCase();
    return n === 'maths' || n === 'math' ? 'mathematics' : n;
  };
  return normalize(apiSubject) === normalize(filter);
}

/** "just now" / "3h ago" / "2 days ago" from an ISO timestamp. */
export function formatRelativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const diffMs = Date.now() - then;
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks === 1) return 'last week';
  return `${weeks} weeks ago`;
}

/**
 * Pulls the stage and message out of a rejected snap. The API returns a JSON
 * object as `detail`; ApiError stringifies it, so the structured copy on
 * `error.data` is the reliable source.
 */
export function readSnapFailure(error: unknown): SnapFailure {
  const fallback: SnapFailure = {
    message: 'Something went wrong reading that photo.',
    stage: 'unknown',
    remedy: 'our_side',
  };
  // The streaming path rejects with the server's own `error` frame attached,
  // which is richer than anything that could be recovered from the message.
  const attached = (error as { snapFailure?: SnapFailure } | null)?.snapFailure;
  if (attached) return attached;

  // Not the API's answer at all — fetch's own "Network request failed", a
  // stream that dropped. Its message was printed under "We couldn't read that
  // one", which blamed the photo for the connection.
  if (!(error instanceof ApiError)) return CONNECTION_FAILURE;
  // apiFetch's timeout and an unreachable host both arrive as status 0.
  if (error.status === 0) return CONNECTION_FAILURE;

  // apiFetch has already told the app root, which is opening Plans.
  if (error.status === 402) {
    return { message: error.message, stage: 'pass', remedy: 'our_side', retake_helps: false };
  }

  const data = error.data;
  if (data && typeof data === 'object' && 'detail' in data) {
    const detail = (data as { detail: unknown }).detail;
    if (typeof detail === 'string') return plainRefusal(error.status, detail);
    if (detail && typeof detail === 'object') {
      const d = detail as Partial<SnapFailure>;
      return {
        message: d.message || fallback.message,
        stage: d.stage || 'unknown',
        reason: d.reason,
        remedy: d.remedy,
        retake_helps: d.retake_helps,
        doubt_id: d.doubt_id,
        used_today: d.used_today,
        daily_limit: d.daily_limit,
        retry_after_seconds: d.retry_after_seconds,
      };
    }
  }
  return { ...fallback, message: error.message || fallback.message };
}
