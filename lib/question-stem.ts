/**
 * Splits a question stem into the structural blocks it was written as.
 *
 * Stems arrive from PDF extraction carrying real structure in their line
 * breaks — Assertion/Reason pairs, numbered statement lists, Column I/II match
 * tables, "choose the correct option" tails. Mobile rendered the raw string
 * through `latexToText`, which collapses every newline, so a match-the-
 * following question reached the student as one line of pipe soup including
 * the `| :--- |` separator row, and an Assertion/Reason pair read as prose.
 *
 * This is a port of `src/components/QuestionStem.tsx` in the web repo, kept
 * deliberately close to it: the rules below are the accumulated result of
 * real extraction failures, and re-deriving them would mean re-finding them.
 * Only the rendering differs (see components/question-stem.tsx) — the parsing
 * has no DOM in it and is shared shape-for-shape.
 *
 * The parser must run on the RAW text, BEFORE `latexToText`: that function
 * collapses newlines, and every rule here reads them.
 */

export type BlockKind = 'lead' | 'labelled' | 'listitem' | 'tail' | 'table';

export interface StemBlock {
  kind: BlockKind;
  label?: string;
  body: string;
  rows?: string[][];
  hasHeader?: boolean;
}

// A markdown pipe table row: "| A. | Pyruvic acid | I. | Undergoes ... |".
const TABLE_ROW = /^\s*\|(.+)\|\s*$/;
// The alignment row directly under a header: "| :--- | ---: | :-: |"
const TABLE_SEP = /^\s*\|[\s:|-]+\|\s*$/;

/**
 * Only a `|` OUTSIDE any `$…$` span is a real cell boundary.
 *
 * Absolute-value notation inside maths (`$\left|1-z_1\right|$`, or the bare
 * `$\|x\|$` idiom) is never a delimiter, but a plain `.split('|')` cut through
 * both — measured live on web: a 4-column row whose one cell held three
 * `\left|…\right|` pairs split into 10 pieces, so that row's data landed under
 * the wrong header. `\left|` has no backslash directly before the pipe, so
 * escaping only a literal `\|` was not enough; the fix is to track math-span
 * state across the cell string and ignore every pipe seen inside one.
 */
function splitRow(line: string): string[] {
  const match = line.match(TABLE_ROW);
  if (!match) return [];
  const cells: string[] = [];
  let current = '';
  let inMath = false;
  for (const ch of match[1]) {
    if (ch === '$') inMath = !inMath;
    if (ch === '|' && !inMath) {
      cells.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

// "Assertion (A) :", "Reason (R):", "Statement I :", "Column - I"
const LABELLED =
  /^\s*((?:assertion|reason|statement|column)\s*[-–—]?\s*(?:\([A-Za-z]\)|[IVX]+|[A-D])?)\s*[:.]\s*(.*)$/i;
// "(1) benzene", "1) benzene", "A. sodium", "(i) …" — list rows inside a stem.
// Letters run to H, not D: five- and six-item statement lists are common, and
// with [A-D] the tail items ("e) Water vascular system") matched nothing.
const LISTITEM = /^\s*\(?([0-9]{1,2}|[ivx]{1,4}|[A-H])\)[.\s]\s*(.+)$/i;
/**
 * The dot form — "A. Restriction enzymes", "I. Undergoes decarboxylation".
 *
 * A DIVERGENCE FROM WEB, and a deliberate one. `LISTITEM` requires a closing
 * bracket, so the dot form never matched there — which also made the lone-
 * marker rejoin below half-dead: it re-joins "A." with the line under it and
 * hands back "A. Restriction enzymes", which then failed to classify as a list
 * row and reached the student as a bare paragraph. Worth porting back.
 *
 * Deliberately NOT case-insensitive, unlike every other pattern here. With /i,
 * `[A-H]` also matches "e", so "e.g. the value" parsed as list item E with the
 * body "g. the value" — a false positive turns ordinary prose into a badged
 * row, which is worse than missing a list. Requiring an uppercase marker and a
 * space after the dot leaves "Fig. 1", "Eq. 3" and "No. 5" alone too, since
 * none of them is a single letter before the dot.
 */
const LISTITEM_DOT = /^\s*\(?([0-9]{1,2}|[IVX]{1,4}|[A-H])\.\s+(.+)$/;
// A second list marker sitting INSIDE a row's body — "a) Spongocoel b) Choanocytes".
// PDF two-column lists extract onto one line, so splitting on newlines alone
// swallowed every even-numbered item into the odd one before it. The leading
// \s is required: it keeps "f(x) is" and "(0, 1) and" intact, because there the
// character before the marker is "(" or a digit, not a space.
const INLINE_ITEM = /\s+(?=\(?[0-9]{1,2}\)\s|\(?[a-hA-H]\)\s|\(?[ivxIVX]{1,4}\)\s)/g;
// A whole line that is nothing but a marker: "A.", "(i)", "3)".
const LONE_MARKER = /^\s*\(?(?:[0-9]{1,2}|[ivxIVX]{1,4}|[A-Ha-h])[).]\s*$/;
// Closing instruction lines.
const TAIL =
  /^\s*(choose|select|identify|in the light of|given below|match the|the correct answer is|which of the)\b/i;

/**
 * Many stems put the whole pair on ONE line — "Assertion (A): … Reason (R): …"
 * with no break — which is the very case that reads as a paragraph. A break is
 * inserted before any label appearing mid-line, anchored to a preceding
 * sentence end so the word "reason" in ordinary prose is left alone.
 */
const INLINE_LABEL =
  /(?<=[.;:)\s])((?:Assertion|Reason|Statement|Column)\s*[-–—]?\s*(?:\([A-Za-z]\)|[IVX]+|[A-D])?\s*[:.])/g;

function classify(line: string): StemBlock | null {
  const raw = line.trim();
  if (!raw) return null;

  const labelled = raw.match(LABELLED);
  // Require real body content. "Match Column I with Column II." is prose that
  // NAMES the columns, not a label introducing content — but INLINE_LABEL still
  // breaks the line before "Column II." because it ends in a period, and
  // without this guard that orphan rendered as an empty labelled card sitting
  // right above the actual table.
  if (labelled && labelled[2] !== undefined && labelled[2].trim().length > 0) {
    return {
      kind: 'labelled',
      label: labelled[1].replace(/\s+/g, ' ').trim(),
      body: labelled[2].trim(),
    };
  }

  const item = raw.match(LISTITEM) ?? raw.match(LISTITEM_DOT);
  // A stem beginning "1) " is a list row; "(1990) was the year" is not — so the
  // body has to look like content rather than a bare number.
  if (item && item[2] && item[2].trim().length > 1) {
    return { kind: 'listitem', label: item[1].toUpperCase(), body: item[2].trim() };
  }

  if (TAIL.test(raw)) return { kind: 'tail', body: raw };
  return { kind: 'lead', body: raw };
}

export function parseStem(text: string): StemBlock[] {
  // Splitting on sentence ends generally would shatter ordinary multi-sentence
  // prose into fragments, which is worse than the run-on this fixes.
  const rawLines = text.replace(INLINE_LABEL, '\n$1').split(/\r?\n/);

  // Extraction often strands a marker on its own line:
  //   "A. \nRestriction enzymes \nB. \nPolymerase enzymes"
  // Neither half matches LISTITEM alone (the marker has no body, the body has
  // no marker), so both fell through as paragraphs and the student read a
  // column of naked letters above their own items.
  const lines: string[] = [];
  for (let i = 0; i < rawLines.length; i += 1) {
    if (LONE_MARKER.test(rawLines[i])) {
      let j = i + 1;
      while (j < rawLines.length && !rawLines[j].trim()) j += 1;
      if (j < rawLines.length && !LONE_MARKER.test(rawLines[j])) {
        lines.push(`${rawLines[i].trim()} ${rawLines[j].trim()}`);
        i = j;
        continue;
      }
    }
    lines.push(rawLines[i]);
  }

  const blocks: StemBlock[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    // Consecutive pipe rows form one table. The whole run is consumed here so
    // the rows never reach `classify`, which would render them as raw text.
    if (TABLE_ROW.test(lines[i]) && !TABLE_SEP.test(lines[i])) {
      const rows: string[][] = [];
      let hasHeader = false;
      let j = i;
      while (j < lines.length && TABLE_ROW.test(lines[j])) {
        if (TABLE_SEP.test(lines[j])) {
          // A separator straight after the first row marks it as a header.
          if (rows.length === 1) hasHeader = true;
        } else {
          rows.push(splitRow(lines[j]));
        }
        j += 1;
      }
      // A single stray pipe line is not a table; let it fall through as prose.
      if (rows.length >= 2) {
        blocks.push({ kind: 'table', body: '', rows, hasHeader });
        i = j - 1;
        continue;
      }
    }

    // A line that IS a list row may carry further rows inline.
    if (LISTITEM.test(lines[i])) {
      const parts = lines[i].split(INLINE_ITEM).filter((p) => p.trim());
      const labels = parts.map((p) => p.match(LISTITEM)?.[1]?.toUpperCase());
      // Every piece must be a list row AND the markers must be distinct. The
      // distinctness check is what protects an interval: "1) The set (0, 1) is
      // open" splits at the "1)" inside (0, 1) and yields labels 1 and 1, so it
      // is rejected and the line stays whole. A real list reads a, b, c.
      const distinct = labels.every(Boolean) && new Set(labels).size === labels.length;
      if (parts.length > 1 && parts.every((p) => LISTITEM.test(p)) && distinct) {
        for (const part of parts) {
          const block = classify(part);
          if (block) blocks.push(block);
        }
        continue;
      }
    }

    const block = classify(lines[i]);
    if (block) blocks.push(block);
  }
  return blocks;
}

/**
 * Whether the blocks are worth laying out separately.
 *
 * An ordinary one-line stem parses to a single `lead` block, and rendering that
 * as a "structure" would only add vertical gaps around a paragraph. Structure
 * means a table, a labelled block or a list — anything else flows as prose.
 */
export function hasStructure(blocks: StemBlock[]): boolean {
  return blocks.some((b) => b.kind === 'labelled' || b.kind === 'listitem' || b.kind === 'table');
}
