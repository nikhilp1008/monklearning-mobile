/**
 * A MATRIX OR DETERMINANT AS PLAIN TEXT, for every place that needs a string
 * rather than the drawn grid (components/textbook/markup.tsx gridRun): an
 * accessibility label, a one-line preview, the page text sent with a question
 * to the teacher. It reads as its rows, cells a space apart and rows after a
 * semicolon, in its own brackets: <bmat> "[1 2; 3 −1]", <pmat> "(x y)",
 * <vmat> "|a b; c d|".
 */
const GRID = /<(bmat|pmat|vmat)>((?:(?!<\/?(?:bmat|pmat|vmat)>)[\s\S])*)<\/\1>/i;
const FENCES: Record<string, [string, string]> = { bmat: ['[', ']'], pmat: ['(', ')'], vmat: ['|', '|'] };

/** The rows of a matrix's inside, each its cells' markup. Anything between the tags (a writer's spaces) is dropped. */
export function gridCells(inner: string): string[][] {
  return [...inner.matchAll(/<r>([\s\S]*?)<\/r>/gi)].map((r) => [...r[1].matchAll(/<c>([\s\S]*?)<\/c>/gi)].map((c) => c[1]));
}

/** Every matrix in the markup as text, innermost first (a matrix inside a cell is text before its own is read); the rest left as it is. */
export function gridToText(html: string): string {
  const plain = (t: string) => t.replace(/<\/?[a-zA-Z][^>]*>/g, '').replace(/\s+/g, ' ').trim();
  let out = html;
  for (let m = GRID.exec(out); m; m = GRID.exec(out)) {
    const [open, close] = FENCES[m[1].toLowerCase()];
    const rows = gridCells(m[2]).map((r) => r.map(plain).join(' '));
    out = out.slice(0, m.index) + `${open}${rows.join('; ')}${close}` + out.slice(m.index + m[0].length);
  }
  return out;
}
