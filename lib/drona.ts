import { apiFetch } from '@/lib/api';
import type { ExamKey } from '@/constants/onboarding';
import { getProfile } from '@/lib/profile';

export interface Subtopic {
  id: string;
  name: string;
  grounding_status: string;
}

export interface CatalogueChapter {
  id: string;
  name: string;
  class_level: number | null;
  subtopics: Subtopic[];
}

export interface CatalogueSubject {
  subject: string;
  chapters: CatalogueChapter[];
}

// Course catalogue is large, changes rarely, and is opened repeatedly in one
// session (chapter picker, topic sheet, practice-focus modal) — cache the
// in-flight promise itself so concurrent callers before the first resolve
// share one network request instead of each firing their own, and so a
// resolved catalogue is reused for the rest of the app session. Cleared on
// rejection so a failed fetch doesn't permanently poison every future call.
//
// Keyed by exam now that the server does the narrowing: two students' views of
// the corpus are different documents, and one slot would serve whichever was
// asked for first to everyone after.
const catalogueByExam = new Map<ExamKey, Promise<CatalogueSubject[]>>();

/**
 * The API subject names an exam actually covers, in the order screens show
 * them. Exported because the catalogue is not enough on its own: a screen that
 * renders its own subject tabs has to agree with it, or it offers a tab whose
 * list can only ever be empty.
 */
export function examSubjects(exam: ExamKey): string[] {
  if (exam === 'neet') return ['physics', 'chemistry', 'biology'];
  if (exam === 'both') return ['physics', 'chemistry', 'mathematics', 'biology'];
  return ['physics', 'chemistry', 'mathematics'];
}

/**
 * The raw tree for one exam view, cached. Use `getCatalogue`.
 *
 * `?exam=` replaces the subject filter this module used to run over the whole
 * corpus. Most of what that filter did was right — dropping Biology for JEE
 * and Mathematics for NEET is the bulk of the narrowing, and the counts barely
 * move without it. What it could not do is read each concept's `exams` tag,
 * which is the rest:
 *
 *   JEE   client-filtered 75 ch / 801 concepts -> server 74 / 793
 *   NEET  client-filtered 79 ch / 862 concepts -> server 79 / 843
 *
 * Small, and worth having anyway. The chapter JEE loses is Linear Programming,
 * which went board-only — the same chapter that was dragging the Mathematics
 * score down by ~4% until `fix(progress): an off-syllabus chapter must not be
 * scored`. Offering a student a chapter they cannot be examined on, in a
 * picker, is exactly the thing the tag exists to prevent, and no client-side
 * rule could have found it: it needs per-concept data the catalogue does not
 * send.
 *
 * The larger reason is that the syllabus stops being duplicated here at all.
 *
 * `both` sends no param at all: the server's default is deliberately the whole
 * corpus, so that a hidden chapter and a broken one never look alike.
 */
function fetchCatalogue(exam: ExamKey): Promise<CatalogueSubject[]> {
  const cached = catalogueByExam.get(exam);
  if (cached) return cached;
  // Returned as `promise`, not re-read from the map, on purpose: the delete
  // inside .catch() runs from a closure, and reading back afterwards would
  // hand TS a possibly-undefined it cannot narrow.
  const query = exam === 'both' ? '' : `?exam=${exam}`;
  const promise: Promise<CatalogueSubject[]> = apiFetch<CatalogueSubject[]>(
    `/drona/catalogue${query}`
  ).catch((err) => {
    catalogueByExam.delete(exam);
    throw err;
  });
  catalogueByExam.set(exam, promise);
  return promise;
}

/**
 * GET /drona/catalogue, narrowed to the student's exam by the server.
 *
 * Resolved from the profile on every call rather than captured once, so
 * changing the exam on the Profile page takes effect immediately — it simply
 * reads a different cache slot.
 */
export async function getCatalogue(): Promise<CatalogueSubject[]> {
  const profile = await getProfile();
  const subjects = await fetchCatalogue(profile.exam);
  // A subject group is keyed before its chapters are vetted server-side, so a
  // subject whose every chapter is off-syllabus can arrive with an empty list.
  // Dropping it here keeps that from becoming a tab with nothing behind it.
  return subjects.filter((s) => s.chapters.length > 0);
}

/**
 * Which subject a chapter belongs to, or null if it cannot be told.
 *
 * Reads the catalogue that is already cached for this session rather than
 * asking for anything: every caller reaches this well after a picker has
 * loaded the same tree. Used only to choose which set of loading copy a class
 * gets (`constants/classroom-status.ts`), so null is an ordinary answer, not a
 * failure — a class opened from a snapped doubt or the doubt of the day has no
 * `chapterId` to look up at all, and falls back to generic copy.
 *
 * Never throws for the same reason: a subject label is not worth failing a
 * class start over.
 */
export async function subjectForChapter(chapterId: string): Promise<string | null> {
  if (!chapterId) return null;
  try {
    const catalogue = await getCatalogue();
    const group = catalogue.find((s) => s.chapters.some((c) => c.id === chapterId));
    return group?.subject ?? null;
  } catch {
    return null;
  }
}
