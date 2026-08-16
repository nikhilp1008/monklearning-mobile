import { apiFetch } from '@/lib/api';

/** One board-content item within a segment — mirrors the live session's own
 *  board event shape (see lib/drona-voice-client.ts's BoardEvent). */
export interface NoteBoardItem {
  type?: string;
  text?: string | null;
  latex?: string | null;
  emphasis?: boolean;
  [key: string]: unknown;
}

export interface NoteBoardGroup {
  segment_index: number;
  segment_title: string;
  /** Whether the live class actually reached this segment before ending —
   *  the note carries the full lesson either way, this just marks the line. */
  covered: boolean;
  items: NoteBoardItem[];
}

export interface NoteSummary {
  id: string;
  session_id: string;
  chapter_id: string | null;
  subject: string | null;
  chapter: string | null;
  /** The title shown on the card and detail page — the session's topic, or
   *  the chapter name as a fallback. Never null in practice (backend always
   *  fills it), typed nullable defensively. */
  concept: string | null;
  segments_covered: number | null;
  total_segments: number | null;
  item_count: number | null;
  created_at: string;
  /** Server-computed one-line subtitle, e.g. "12 board items · 3 of 5 parts". */
  preview: string;
}

export interface NoteDetail extends NoteSummary {
  /** Plain text following a documented contract: ALL-CAPS lines are section
   *  headings, "• "-prefixed lines are bullets, a line that's entirely
   *  `$…$`/`$$…$$` is a standalone formula — see components/note-content.tsx. */
  content: string;
  board_items: NoteBoardGroup[] | null;
  session_started_at: string | null;
}

export interface NotesListResponse {
  notes: NoteSummary[];
  count: number;
  subjects: string[];
}

/** GET /notes — no server-side subject filter on purpose: the API's subject
 *  vocabulary ("Mathematics") doesn't match the app's compact filter labels
 *  ("Maths"), same mismatch already handled for doubts — filter client-side
 *  with lib/doubts.ts's subjectMatches() instead of trusting a ?subject= match. */
export function listNotes(params: { q?: string } = {}): Promise<NotesListResponse> {
  const search = new URLSearchParams();
  if (params.q?.trim()) search.set('q', params.q.trim());
  const qs = search.toString();
  return apiFetch(`/notes${qs ? `?${qs}` : ''}`);
}

export function getNote(noteId: string): Promise<NoteDetail> {
  return apiFetch(`/notes/${noteId}`);
}

/** POST /notes — assembles and saves a session's board as a note. Idempotent
 *  per session: saving the same session again refreshes the note rather than
 *  duplicating it. Throws (422 surfaced via apiFetch) if the session has too
 *  little content to assemble a note from. */
export function saveNote(sessionId: string): Promise<NoteDetail> {
  return apiFetch('/notes', { method: 'POST', body: JSON.stringify({ session_id: sessionId }) });
}
