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

/** GET /drona/catalogue — real subject/chapter/subtopic tree from the DB. */
export function getCatalogue(): Promise<CatalogueSubject[]> {
  return apiFetch('/drona/catalogue');
}
