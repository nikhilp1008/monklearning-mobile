/**
 * The matrix grid, which had no coverage when it landed.
 *
 * `latexToSegments` has emitted a `matrix` segment since the board-widget
 * merge, but whether MathLine DRAWS it or falls back to a linear string is
 * invisible to the parser's own tests -- both parse identically. The two
 * states were one `return` apart while the change waited on review, so the
 * distinction is worth holding onto: cells as separate nodes is the grid,
 * one joined string is the fallback.
 */
import React from 'react';
import { act, create } from 'react-test-renderer';
import { MathLine } from '@/components/math-line';

/** Every string in the rendered tree, in order. */
function leaves(node: unknown): string[] {
  const out: string[] = [];
  const walk = (n: any): void => {
    if (n == null) return;
    if (typeof n === 'string') return void out.push(n);
    if (Array.isArray(n)) return void n.forEach(walk);
    walk(n.children);
  };
  walk(node);
  return out;
}

function render(text: string) {
  let tree: any;
  act(() => {
    tree = create(<MathLine text={text} fontSize={16} color="#1C1A16" />);
  });
  return leaves(tree.toJSON());
}

/** Cell counts per row, walking the grid's own Views rather than its text. */
function rowWidths(text: string): number[] {
  let tree: any;
  act(() => {
    tree = create(<MathLine text={text} fontSize={16} color="#1C1A16" />);
  });
  const widths: number[] = [];
  const walk = (n: any): void => {
    if (n == null || typeof n === 'string') return;
    if (Array.isArray(n)) return void n.forEach(walk);
    const kids: any[] = n.children ?? [];
    // A row is a View whose children are all Texts -- the cells. An empty
    // padding cell has no string child, so it is invisible to `leaves` but
    // still holds its column open, which is the whole point of padding.
    if (
      n.type === 'View' &&
      kids.length > 0 &&
      kids.every((k) => k && k.type === 'Text')
    ) {
      widths.push(kids.length);
      return;
    }
    kids.forEach(walk);
  };
  walk(tree.toJSON());
  return widths;
}

describe('a matrix is drawn, not dictated', () => {
  test('cells are separate nodes, between two bracket glyphs', () => {
    // Each cell its own node is what makes the columns line up; one joined
    // string would render the same characters and none of the alignment.
    expect(render('\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}')).toEqual([
      '[', '1', '2', '3', '4', ']',
    ]);
  });

  test('a ragged row is padded, so the grid stays rectangular', () => {
    const src = '\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 \\end{bmatrix}';
    // Both rows are three cells wide even though the source gives the second
    // only two: the third is an empty Text holding its column open.
    expect(rowWidths(src)).toEqual([3, 3]);
    // It carries no string, so the reader sees a gap and not a stray
    // character -- six cells drawn, five of them with text.
    expect(render(src)).toEqual(['[', '1', '2', '3', '4', '5', ']']);
  });

  test('cases opens a brace and never closes it', () => {
    const out = render('\\begin{cases} 1 \\\\ 2 \\end{cases}');
    expect(out[0]).toBe('{');
    expect(out[out.length - 1]).not.toBe('}');
  });
});
