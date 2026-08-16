import { apiFetch } from '@/lib/api';

/** Verified live against monk-learning-api-production 2026-08-13 — GitHub source for
 *  this router is stale and was not trusted for these shapes. */

export interface DronaSessionStart {
  session_id: string;
  phase: 'scoping' | string;
  speech: string;
  language: string;
  tutor_voice: string;
  /** Live-verified as "Veda" (no h) — differs from "Vedha" used elsewhere in the app's copy. */
  tutor_name: string;
}

export interface TopicCheckAmbiguous {
  status: 'ambiguous';
  options: string[];
  message: string;
}

export interface TopicCheckOtherChapter {
  status: 'other_chapter';
  chapter: { id: string; name: string; subject: string; class_level: number };
  message: string;
}

/** Not live-verified — no utterance that matched the session's own chapter was tested. */
export interface TopicCheckOnTopic {
  status: 'on_topic';
  message?: string;
}

/**
 * Only these three literal statuses are modeled so `check.status === 'other_chapter'`
 * actually narrows the union (a bare `string` variant would defeat that everywhere).
 * Any other live status value just won't narrow to a known variant — callers should
 * treat "not other_chapter" as "proceed" rather than exhaustively switching on this.
 */
export type TopicCheckResult = TopicCheckAmbiguous | TopicCheckOtherChapter | TopicCheckOnTopic;

export interface DronaScopeResult {
  phase: 'scoping' | 'teaching' | string;
  speech: string;
  language: string;
  tutor_voice: string;
  tutor_name: string;
  /** Present while still disambiguating (`plan_ready: false`). Live-observed to sometimes
   *  contain garbage entries from a backend data-quality bug (e.g. "(Cache Miss 020000)",
   *  "RW-425892" suffixes) — render whatever the server sends, don't filter client-side;
   *  this is a backend/content-pipeline bug to fix upstream, not a client concern. */
  options?: string[];
  plan_ready: boolean;
  subtopic?: string;
  subtopic_key?: string;
}

export interface DronaSessionEnd {
  summary_points: string[];
  mistakes_count: number;
  duration_minutes: number;
  questions_answered: number;
  chapter_name: string;
}

export function startDronaSession(params: {
  chapter_id?: string;
  language?: 'hinglish' | 'english' | string;
  /** 'male' -> "Drona", 'female' -> "Veda" — see app/drona/persona.py in the
   *  backend repo, the single source of truth for this mapping. */
  voice?: 'male' | 'female' | string;
} = {}): Promise<DronaSessionStart> {
  return apiFetch('/drona/session/start', { method: 'POST', body: JSON.stringify(params) });
}

export function checkDronaTopic(params: {
  utterance: string;
  session_id?: string;
}): Promise<TopicCheckResult> {
  return apiFetch('/drona/topic/check', { method: 'POST', body: JSON.stringify(params) });
}

export function scopeDronaSession(
  sessionId: string,
  params: { utterance: string }
): Promise<DronaScopeResult> {
  return apiFetch(`/drona/session/${sessionId}/scope`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export function endDronaSession(sessionId: string): Promise<DronaSessionEnd> {
  return apiFetch(`/drona/session/${sessionId}/end`, { method: 'POST', body: JSON.stringify({}) });
}
