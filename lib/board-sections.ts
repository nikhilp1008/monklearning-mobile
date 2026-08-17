import { latexToText } from '@/lib/latex-text';
import { NoteBoardGroup } from '@/lib/notes';

/**
 * The block vocabulary from notes-sessions/board-page.js. Only the kinds the
 * backend can actually produce are built today; the renderer supports the rest
 * so richer content needs no new plumbing.
 */
export type BoardBlock =
  | { kind: 'text'; text: string; markable?: boolean }
  | { kind: 'hand'; text: string }
  | { kind: 'caption'; text: string }
  | { kind: 'foot'; text: string }
  | { kind: 'math'; text: string; result?: boolean }
  | { kind: 'note'; text: string }
  | { kind: 'steps'; steps: { title: string; lines: BoardStepLine[] }[] }
  /** A question worked through in class: the question, the working, the answer. */
  | { kind: 'problem'; text: string; work: string[]; answer: string }
  /** The student's own questions, in their handwriting, answered underneath. */
  | { kind: 'qa'; items: { q: string; a: string }[] }
  /** A drawn figure. Keyed rather than inlined, since a diagram is a component,
   *  not data — the renderer maps the id to the drawing. */
  | { kind: 'figure'; figure: string; caption?: string };

export type BoardStepLine = { kind: 'text' | 'math' | 'note' | 'result'; text: string };

export type BoardSection = {
  id: string;
  /** Short label for the jump chip. */
  chip: string;
  /** The amber section heading above the content. */
  label: string;
  blocks: BoardBlock[];
};

export type BoardContent = {
  topic: string;
  subject: string;
  sections: BoardSection[];
};

const CLASS_END_MARKER =
  '——— class ended here — everything below is the rest of the lesson, for self-study ———';

const ALL_CAPS_LINE = /^[A-Z0-9 &,'’\-—():.]+$/;
const HAS_LETTER = /[A-Z]/;
const STANDALONE_FORMULA = /^\$\$?.+\$\$?$/;

/** Chips are a jump control, so a long segment title has to shorten to fit. */
function toChip(label: string): string {
  const words = label.trim().split(/\s+/);
  if (words.length <= 2) return titleCase(label);
  return titleCase(words.slice(0, 2).join(' '));
}

function titleCase(s: string): string {
  const lower = s.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

/**
 * Builds the page from the note's structured board — one section per lesson
 * segment, which is exactly the shape the design's section list wants.
 */
function fromBoardItems(groups: NoteBoardGroup[]): BoardSection[] {
  return groups
    .filter((g) => g.items?.length)
    .map((group, i) => {
      const blocks: BoardBlock[] = [];
      for (const item of group.items) {
        const raw = (item.latex ?? item.text ?? '').toString().trim();
        if (!raw) continue;
        const text = latexToText(raw);
        if (item.latex || STANDALONE_FORMULA.test(raw)) {
          blocks.push({ kind: 'math', text, result: !!item.emphasis });
        } else if (item.type === 'note') {
          // The teacher's aside — the design's handwritten red line.
          blocks.push({ kind: 'hand', text });
        } else {
          blocks.push({ kind: 'text', text, markable: true });
        }
      }
      const label = (group.segment_title || `Part ${i + 1}`).toUpperCase();
      return {
        id: `s${group.segment_index ?? i}`,
        chip: toChip(group.segment_title || `Part ${i + 1}`),
        label,
        blocks,
      };
    })
    .filter((s) => s.blocks.length > 0);
}

/**
 * Fallback for notes saved before board items were stored, or whenever the
 * server sends only the flat text. Sections break on the ALL-CAPS headings the
 * backend's own contract documents (see note_assembly.py), so the page still
 * gets its chips and labels rather than one undifferentiated wall.
 */
function fromContent(content: string): BoardSection[] {
  const sections: BoardSection[] = [];
  let counter = 0;

  // Returns the new section rather than assigning through a closure, so the
  // narrowing below is something the compiler can actually follow.
  const push = (label: string): BoardSection => {
    const section: BoardSection = {
      id: `c${counter++}`,
      chip: toChip(label),
      label: label.toUpperCase(),
      blocks: [],
    };
    sections.push(section);
    return section;
  };

  let current: BoardSection | null = null;

  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line === CLASS_END_MARKER) {
      current = push('Self-study');
      current.blocks.push({
        kind: 'foot',
        text: 'The class ended here — the rest is the lesson to finish on your own.',
      });
      continue;
    }

    const isHeading = ALL_CAPS_LINE.test(line) && HAS_LETTER.test(line) && line.length > 2;
    if (isHeading) {
      current = push(line);
      continue;
    }

    if (!current) current = push('Class notes');

    if (STANDALONE_FORMULA.test(line)) {
      current.blocks.push({ kind: 'math', text: latexToText(line) });
    } else if (line.startsWith('• ')) {
      current.blocks.push({ kind: 'text', text: latexToText(line.slice(2).trim()), markable: true });
    } else {
      current.blocks.push({ kind: 'text', text: latexToText(line), markable: true });
    }
  }

  return sections.filter((s) => s.blocks.length > 0);
}

export function buildBoardContent(input: {
  topic: string;
  subject: string;
  boardItems?: NoteBoardGroup[] | null;
  content?: string | null;
}): BoardContent {
  const sections = input.boardItems?.length
    ? fromBoardItems(input.boardItems)
    : input.content
      ? fromContent(input.content)
      : [];

  return { topic: input.topic, subject: input.subject, sections };
}
