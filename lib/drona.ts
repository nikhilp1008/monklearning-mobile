import { apiFetch } from '@/lib/api';

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

/** GET /drona/catalogue — real subject/chapter/subtopic tree from the DB. */
export function getCatalogue(): Promise<CatalogueSubject[]> {
  if (!cataloguePromise) {
    // Returned as `promise`, not re-read from `cataloguePromise`, on purpose:
    // the reset inside .catch() reassigns the module variable from a closure,
    // which makes TS widen its narrowed type back to nullable for any read
    // after this point — the local const sidesteps that entirely.
    const promise: Promise<CatalogueSubject[]> = apiFetch<CatalogueSubject[]>('/drona/catalogue').catch((err) => {
      cataloguePromise = null;
      throw err;
    });
    cataloguePromise = promise;
    return promise;
  }
  return cataloguePromise;
}
