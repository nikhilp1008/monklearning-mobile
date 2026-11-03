/**
 * "Is it in your exam?": the search behind Exam scope.
 *
 * THE RULE THAT MATTERS: a No only ever comes from a list someone chose. A word
 * that simply does not match the syllabus is "not found", never No, because the
 * book and the syllabus word things differently ("ideal gas" is "perfect gas" in
 * the PDF) and a wrong No costs a student marks.
 *
 * Everything else here keeps an answer honest:
 *
 * - Every match is kept, not the first. "Induction" is in for Physics and out
 *   for Maths, and only saying one of those is wrong.
 * - Words must match whole before they may match by their start, and short words
 *   only ever match whole, so "sols" can never answer for "solid".
 * - A search of several words must sit inside one phrase of the syllabus, or
 *   "equation of a plane" would be answered by the unrelated words of one sentence.
 * - A misspelling gets "did you mean", never a yes or no on a guess.
 */

import {
  SCOPE_BOOKS,
  SCOPE_EXAMS,
  SCOPE_SUBJECTS,
  scopeUnits,
  type ScopeExam,
  type SubjectKey,
} from '@/lib/exam-scope';
import { SCOPE_SYLLABUS } from '@/lib/exam-scope-syllabus';

export interface ScopeAnswerRow {
  yes: boolean;
  subject?: SubjectKey;
  /** The unit to open when tapped. Absent on a No: there is nothing to open. */
  n?: number;
  topic: string;
  except?: string[];
  note?: string;
  exact?: boolean;
  wholeSubject?: boolean;
}

export type ScopeAnswer =
  | {
      kind: 'rows';
      rows: ScopeAnswerRow[];
      all: ScopeAnswerRow[];
      more: number;
    }
  | { kind: 'guess'; guess: string }
  | { kind: 'none' };

/** What students type for what the syllabus calls something else. */
const ALIASES: Record<string, string> = {
  shm: 'simple harmonic motion',
  emi: 'electromagnetic induction',
  ac: 'alternating currents',
  com: 'centre of mass',
  moi: 'moment of inertia',
  ydse: 'double slit',
  pnc: 'permutations',
  'p and c': 'permutations',
  goc: 'basic principles organic',
  ph: 'ph scale',
  krebs: 'tca',
  'krebs cycle': 'tca cycle',
  trig: 'trigonometry',
  matrix: 'matrices',
  integration: 'integral',
  gravity: 'gravitation',
  'ray optics': 'reflection of light',
  ode: 'differential equations',
  vectors: 'vector',
  'newton laws': 'newton',
  'newtons laws': 'newton',
  nlm: 'laws of motion',
  rotation: 'rotational',
  'ideal gas': 'perfect gas',
  'gas laws': 'perfect gas',
  'equations of motion': 'uniformly accelerated motion',
  'equation of motion': 'uniformly accelerated motion',
  'vertical circular motion': 'vertical circle',
  'vector product': 'vector products',
  'cross product': 'vector products',
  'dot product': 'scalar',
  'balancing redox equations': 'balancing redox',
  'ampere circuital law': 'ampere',
};

const SUBJECT_WORDS: Record<string, SubjectKey> = {
  physics: 'physics',
  phy: 'physics',
  chemistry: 'chemistry',
  chem: 'chemistry',
  maths: 'maths',
  math: 'maths',
  mathematics: 'maths',
  biology: 'biology',
  bio: 'biology',
  botany: 'biology',
  zoology: 'biology',
};

const STOP_WORDS = new Set([
  'of',
  'the',
  'a',
  'an',
  'in',
  'and',
  'to',
  'on',
  'by',
  'for',
  'with',
  'its',
  'is',
  'it',
  'chapter',
  'topic',
  'unit',
  'class',
  'ncert',
  'syllabus',
  'exam',
  'jee',
  'neet',
  'main',
  'mains',
  'ug',
  '11',
  '12',
]);

/**
 * Taught somewhere but named in neither syllabus, beyond each unit's own `out`.
 * These are read off the two PDFs and await a teacher's review, which is what
 * will grow this list until most book topics get a plain answer.
 */
const EXTRA_OUT: Partial<Record<SubjectKey, { topic: string; also: string[] }[]>> = {
  physics: [
    { topic: 'Transistors', also: ['transistor', 'amplifier'] },
    {
      topic: "Earth's magnetism",
      also: ['earth magnetism', 'magnetic declination', 'dip angle'],
    },
    { topic: 'Zeeman effect', also: [] },
    { topic: 'Franck-Hertz experiment', also: [] },
    { topic: 'Diffraction grating', also: [] },
    { topic: 'Poynting vector', also: [] },
    { topic: 'Helmholtz coil', also: [] },
    { topic: 'Maxwell distribution', also: [] },
    { topic: "Poiseuille's law", also: [] },
  ],
};

/** One of these in a search means the topic is out, whatever else is typed: "Carnot cycle". */
const OUT_KEYWORDS = new Set([
  'carnot',
  'doppler',
  'potentiometer',
  'cyclotron',
  'radioactive',
  'radioactivity',
  'transistor',
  'taxonomic',
  'vernalization',
  'dormancy',
  'succession',
  'zeeman',
  'franck',
  'poynting',
  'helmholtz',
  'maxwell',
  'poiseuille',
]);

const WHOLE_WORDS_ONLY = 99;

function spelling(word: string): string {
  return word
    .replace(/isation/g, 'ization')
    .replace(/ise$/, 'ize')
    .replace(/^centre/, 'center')
    .replace(/^colour/, 'color')
    .replace(/^sulph/, 'sulf')
    .replace(/^vapour/, 'vapor')
    .replace(/^metre/, 'meter')
    .replace(/^behaviour/, 'behavior')
    .replace(/^aluminium/, 'aluminum');
}

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((raw) => {
      const word = spelling(raw);
      return word.length > 3 && word.endsWith('s') && !word.endsWith('ss')
        ? word.slice(0, -1)
        : word;
    });
}

function hitsAll(text: string[], query: string[], minPrefix: number): boolean {
  return query.every((q) =>
    text.some((w) => w === q || (q.length >= minPrefix && w.startsWith(q)))
  );
}

function isSame(a: string[], b: string[]): boolean {
  return a.join(' ') === b.join(' ');
}

function tidyPhrase(phrase: string, query: string[]): string {
  let text = phrase
    .replace(/\s+/g, ' ')
    .replace(/^[\s\-()]+|[\s\-()]+$/g, '')
    .replace(/\bBaye's\b/, "Bayes'");
  const bracket = text.indexOf('(');
  if (bracket > 6 && !text.includes(')')) {
    const before = text.slice(0, bracket).trim();
    text = hitsAll(tokens(before), query, 4) ? before : text.replace('(', '');
  }
  text = text.charAt(0).toUpperCase() + text.slice(1);
  return text.length > 64 ? `${text.slice(0, 62).replace(/\s+\S*$/, '')}…` : text;
}

/** Built once per exam, on the first search: the phrases of the PDF, ready to compare. */
type Phrase = { text: string; words: string[]; subject: SubjectKey; n: number };
const phraseCache: Partial<Record<ScopeExam, Phrase[]>> = {};

function phrasesFor(exam: ScopeExam): Phrase[] {
  const cached = phraseCache[exam];
  if (cached) return cached;
  const phrases: Phrase[] = [];
  for (const subject of SCOPE_EXAMS[exam].subjects) {
    for (const unit of SCOPE_SYLLABUS[exam][subject] ?? []) {
      for (const text of unit.text.split(/[,;:.]|\s-\s/)) {
        const trimmed = text.trim();
        if (trimmed.length > 2)
          phrases.push({
            text: trimmed,
            words: tokens(trimmed),
            subject,
            n: unit.n,
          });
      }
    }
  }
  phraseCache[exam] = phrases;
  return phrases;
}

function lookup(exam: ScopeExam, query: string[], minPrefix: number) {
  const found: ScopeAnswerRow[] = [];
  const add = (row: ScopeAnswerRow) => {
    const repeat = found.some(
      (f) =>
        f.subject === row.subject &&
        (f.topic === row.topic || (f.yes === row.yes && !!f.n && f.n === row.n))
    );
    if (!repeat) found.push(row);
  };
  // Answers for out-of-syllabus topics use a longer start, so a half-typed word cannot say No.
  const outPrefix = Math.max(minPrefix, 5);

  for (const subject of SCOPE_EXAMS[exam].subjects) {
    const units = scopeUnits(exam, subject);
    const outs = [
      ...(EXTRA_OUT[subject] ?? []),
      ...units.flatMap((u) => u.out.map((topic) => ({ topic, also: [] as string[] }))),
    ];
    for (const { topic, also } of outs) {
      const names = [topic, ...also].map(tokens);
      const keyword = names
        .flat()
        .some(
          (w) =>
            OUT_KEYWORDS.has(w) && query.some((q) => q === w || (q.length >= 5 && w.startsWith(q)))
        );
      if (keyword || names.some((name) => hitsAll(name, query, outPrefix))) {
        add({
          yes: false,
          subject,
          topic,
          exact: keyword || names.some((name) => isSame(name, query)),
        });
      }
    }
    for (const gone of SCOPE_SUBJECTS[subject].gone) {
      const name = tokens(gone);
      if (hitsAll(name, query, outPrefix))
        add({ yes: false, subject, topic: gone, exact: isSame(name, query) });
    }
    for (const level of [11, 12] as const) {
      for (const chapter of SCOPE_BOOKS[subject][level]) {
        const name = tokens(chapter.name);
        if (!chapter.unit) {
          if (hitsAll(name, query, outPrefix))
            add({
              yes: false,
              subject,
              topic: chapter.name,
              exact: isSame(name, query),
            });
        } else if (hitsAll(name, query, minPrefix)) {
          add({
            yes: true,
            subject,
            n: chapter.unit,
            topic: chapter.name,
            except: chapter.except,
            exact: isSame(name, query),
            note: chapter.name === 'The p-Block Elements' ? 'General trends only' : undefined,
          });
        }
      }
    }
    for (const unit of units) {
      const name = tokens(unit.t);
      if (hitsAll(name, query, minPrefix)) {
        add({
          yes: true,
          subject,
          n: unit.n,
          topic: unit.t,
          except: unit.out,
          exact: isSame(name, query),
          note: unit.n === 10 && subject === 'chemistry' ? 'General trends only' : undefined,
        });
      }
    }
  }
  for (const phrase of phrasesFor(exam)) {
    if (hitsAll(phrase.words, query, minPrefix)) {
      add({
        yes: true,
        subject: phrase.subject,
        n: phrase.n,
        topic: tidyPhrase(phrase.text, query),
        except: [],
      });
    }
  }
  return { found, exact: found.filter((f) => f.exact) };
}

function editDistance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 3) return 9;
  const row = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const held = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = held;
    }
  }
  return row[b.length];
}

/** The chapter or topic name closest to what was typed, or nothing if none is close. */
function nearestName(exam: ScopeExam, query: string[]): string {
  const typed = query.join(' ');
  let best = '';
  let bestDistance = typed.length >= 9 ? 4 : typed.length >= 5 ? 2 : 0;
  for (const subject of SCOPE_EXAMS[exam].subjects) {
    const names = [
      ...SCOPE_BOOKS[subject][11].map((c) => c.name),
      ...SCOPE_BOOKS[subject][12].map((c) => c.name),
      ...SCOPE_SUBJECTS[subject].gone,
      ...scopeUnits(exam, subject).flatMap((u) => [u.t, ...u.out]),
      ...(EXTRA_OUT[subject] ?? []).map((o) => o.topic),
    ];
    for (const name of names) {
      const words = tokens(name);
      const distance = editDistance(typed, words.join(' '));
      // One slipped word can also be one word of a name: "dopler" for Doppler effect.
      const wordDistance =
        query.length === 1 && typed.length >= 5
          ? Math.min(...words.filter((w) => w.length >= 5).map((w) => editDistance(typed, w)), 9)
          : 9;
      if (Math.min(distance, wordDistance) < bestDistance) {
        bestDistance = Math.min(distance, wordDistance);
        best = name;
      }
    }
  }
  return best;
}

/** The closest single word in the syllabus, for a one-word slip like "bernouli". */
function nearestWord(exam: ScopeExam, query: string[]): string {
  if (query.length !== 1 || query[0].length < 5) return '';
  let best = '';
  let bestDistance = query[0].length >= 7 ? 3 : 2;
  for (const phrase of phrasesFor(exam)) {
    for (const word of phrase.words) {
      if (word.length < 4) continue;
      const distance = editDistance(query[0], word);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = word;
      }
    }
  }
  return best;
}

/** Null until there is enough typed to answer. */
export function askScope(exam: ScopeExam, raw: string): ScopeAnswer | null {
  const plain = raw
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const subjectWord = SUBJECT_WORDS[plain];
  if (subjectWord) {
    const row: ScopeAnswerRow = {
      yes: SCOPE_EXAMS[exam].subjects.includes(subjectWord),
      subject: subjectWord,
      topic: SCOPE_SUBJECTS[subjectWord].name,
      wholeSubject: true,
    };
    return { kind: 'rows', rows: [row], all: [], more: 0 };
  }

  const aliased = ALIASES[plain] ?? plain;
  if (aliased.length < 3) return null;
  const query = tokens(aliased).filter((w) => !STOP_WORDS.has(w));
  const nothingToCompare =
    !query.length ||
    !query.some((w) => w.length >= 2 && !/^\d+$/.test(w)) ||
    (query.length > 1 && query.every((w) => w.length < 3));
  if (nothingToCompare) return { kind: 'none' };

  let result = lookup(exam, query, WHOLE_WORDS_ONLY);
  if (!result.found.length) result = lookup(exam, query, 4);

  if (result.found.length) {
    const yes = result.found.filter((f) => f.yes);
    const no = result.found.filter((f) => !f.yes);
    const lead = result.exact.length ? result.exact : result.found;
    const leadYes = lead.filter((f) => f.yes);
    const leadNo = lead.filter((f) => !f.yes);
    let rows =
      leadYes.length && leadNo.length
        ? [...leadYes.slice(0, 2), ...leadNo.slice(0, 1)]
        : lead.slice(0, 3);
    // An exact hit never hides the other side: Hydrogen the chapter is out, the hydrogen spectrum is in.
    if (result.exact.length && !leadNo.length && no.length && rows.length < 3)
      rows = [...rows, no[0]];
    if (result.exact.length && !leadYes.length && yes.length)
      rows = [...yes.slice(0, 2), ...rows.slice(0, 1)];
    return {
      kind: 'rows',
      rows,
      all: result.found,
      more: Math.max(0, yes.length - rows.filter((f) => f.yes).length),
    };
  }

  // A title that joins two things gets an answer for each, and only if each is known.
  const parts = plain
    .split(/ and |,|:/)
    .map((part) => tokens(ALIASES[part.trim()] ?? part).filter((w) => !STOP_WORDS.has(w)))
    .filter((part) => part.length);
  if (parts.length > 1) {
    const results = parts.map((part) => lookup(exam, part, 4));
    if (results.every((r) => r.found.length)) {
      const rows = results.map((r) => r.exact[0] ?? r.found[0]).slice(0, 3);
      return {
        kind: 'rows',
        rows,
        all: results.flatMap((r) => r.found),
        more: 0,
      };
    }
  }

  const otherExam = exam === 'jee' ? 'neet' : 'jee';
  const elsewhere = lookup(otherExam, query, 4).found.find((f) => f.yes);
  if (elsewhere)
    return {
      kind: 'rows',
      rows: [{ yes: false, topic: elsewhere.topic }],
      all: [],
      more: 0,
    };

  const name = nearestName(exam, query);
  if (name) return { kind: 'guess', guess: name };
  const word = nearestWord(exam, query);
  if (word) return { kind: 'guess', guess: word.charAt(0).toUpperCase() + word.slice(1) };
  return { kind: 'none' };
}
