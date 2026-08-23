import { ApiError, apiFetch } from '@/lib/api';

/** One move of the solution. Math arrives as `$…$` / `$$…$$`. */
export interface SolutionStep {
  n: number;
  text: string;
}

export type DoubtStatus = 'solved' | 'failed' | 'illegible' | 'unsure';

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
  /** Chapter-level topic ("Waves and Organ Pipes") — the API column is `chapter`. */
  chapter: string | null;
  /** Short display title for the doubt. */
  concept: string | null;
  question_type: string | null;
  /** Parallel to `option_labels` for MCQ questions — options[i] is the text for option_labels[i]. Empty for numerical questions. */
  options?: string[] | null;
  legible: boolean;
  legibility_note: string | null;
  answer: string | null;
  key_idea: string | null;
  status: DoubtStatus;
  failure_reason: string | null;
  option_labels?: string[] | null;
  created_at: string;
  scrap: string;
}

export interface DoubtDetail extends Omit<DoubtSummary, 'scrap'> {
  /** Not verified against a live MCQ sample yet — guard with `steps ?? []` and fall back to `explanation`. */
  steps?: SolutionStep[] | null;
  /** Full concatenated working, always present as a fallback even when `steps` isn't. */
  explanation?: string | null;
  /** Short-lived presigned R2 URL, or null when one could not be produced. */
  image_url: string | null;
  reported: boolean;
}

export interface DoubtsListResponse {
  doubts: DoubtSummary[];
  count: number;
  subjects: string[];
}

/** One question inside a submission, as returned by POST /doubts. */
export interface SnappedQuestion {
  id: string;
  question_index: number;
  question_type?: string | null;
  /** Parallel to `option_labels` for MCQ questions. Empty for numerical. */
  options?: string[] | null;
  option_labels?: string[] | null;
  remedy?: Remedy;
  retake_helps?: boolean;
  /** Includes the "Q1." prefix. `stem` is the same text with that stripped — prefer it for display. */
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
  stage: 'transcribe' | 'solve' | 'config' | 'quota' | string;
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

export function listDoubts(params: { q?: string } = {}): Promise<DoubtsListResponse> {
  // No `subject` param here on purpose: the API's subject vocabulary
  // ("Mathematics") doesn't match the app's compact filter labels ("Maths"),
  // and matching semantics on the server side (exact/partial/case) aren't
  // verified — fetch everything and filter client-side instead, same
  // approach as the Drona catalogue's subject matching.
  const search = new URLSearchParams();
  if (params.q?.trim()) search.set('q', params.q.trim());
  const qs = search.toString();
  return apiFetch(`/doubts${qs ? `?${qs}` : ''}`);
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
 * "try again" for work the backend was still doing. 150s covers the worst
 * realistic case with headroom.
 *
 * The web client uses `POST /doubts/stream` (SSE) instead, which streams each
 * step as it lands and shows real progress rather than one long spinner —
 * the better end state, and a follow-up worth doing.
 */
const SNAP_TIMEOUT_MS = 150000;

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
  if (!(error instanceof ApiError)) {
    if (error instanceof Error && error.message) {
      return { message: error.message, stage: 'unknown' };
    }
    return fallback;
  }

  const data = error.data;
  if (data && typeof data === 'object' && 'detail' in data) {
    const detail = (data as { detail: unknown }).detail;
    if (typeof detail === 'string') {
      return { message: detail, stage: 'unknown' };
    }
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
  return { message: error.message || fallback.message, stage: 'unknown' };
}
