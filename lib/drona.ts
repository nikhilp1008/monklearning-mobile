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
let cataloguePromise: Promise<CatalogueSubject[]> | null = null;

/**
 * Which API subject names a student's exam actually covers.
 *
 * `GET /progress` filters its subjects server-side from `profiles.target_exam`,
 * but `/drona/catalogue` does not — it returns every chapter in the database.
 * So without this a JEE student would be offered Biology in Lessons and in the
 * chapter picker, and a NEET student would be offered Maths. Filtering here
 * rather than in each screen means the one fetch every caller shares is
 * already correct.
 *
 * The proper fix is server-side, next to the filter `/progress` already does.
 * Flagged for the co-founder; this holds the line until then.
 */
/**
 * The API subject names an exam actually covers, in the order screens show
 * them. Exported because filtering the catalogue is not enough on its own:
 * any screen that renders its own subject tabs has to agree with it, or it
 * offers a tab whose list can only ever be empty.
 */
export function examSubjects(exam: ExamKey): string[] {
  if (exam === 'neet') return ['physics', 'chemistry', 'biology'];
  if (exam === 'both') return ['physics', 'chemistry', 'mathematics', 'biology'];
  return ['physics', 'chemistry', 'mathematics'];
}

function allowedSubjects(exam: string): (subject: string) => boolean {
  const optional = exam === 'neet' ? 'biology' : exam === 'both' ? null : 'mathematics';
  return (subject) => {
    const s = subject.trim().toLowerCase();
    if (s === 'physics' || s === 'chemistry') return true;
    if (optional === null) return true;
    const normalised = s === 'maths' || s === 'math' ? 'mathematics' : s;
    return normalised === optional;
  };
}

/** The raw tree, cached. Use `getCatalogue` — this is not exam-filtered. */
function fetchCatalogue(): Promise<CatalogueSubject[]> {
  if (!cataloguePromise) {
    // Returned as `promise`, not re-read from `cataloguePromise`, on purpose:
    // the reset inside .catch() reassigns the module variable from a closure,
    // which makes TS widen its narrowed type back to nullable for any read
    // after this point — the local const sidesteps that entirely.
    const promise: Promise<CatalogueSubject[]> = apiFetch<CatalogueSubject[]>(
      '/drona/catalogue'
    ).catch((err) => {
      cataloguePromise = null;
      throw err;
    });
    cataloguePromise = promise;
    return promise;
  }
  return cataloguePromise;
}

/**
 * GET /drona/catalogue, narrowed to the student's exam.
 *
 * Filtered on every call rather than cached filtered, so changing the exam on
 * the Profile page takes effect immediately — the underlying fetch is still
 * shared and happens once.
 */
export async function getCatalogue(): Promise<CatalogueSubject[]> {
  const [all, profile] = await Promise.all([fetchCatalogue(), getProfile()]);
  const keep = allowedSubjects(profile.exam);
  return all.filter((s) => keep(s.subject));
}
