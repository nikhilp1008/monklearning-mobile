/**
 * A TEXTBOOK DIAGRAM'S TEXT READS AS WRITTEN ON THE PHONE.
 *
 * The SVG must escape "&" and "<", and react-native-svg's parser copies text
 * as it stands, so the Physics 12 Ch 3 chapter map showed "Current &amp; Ohm's
 * law" (Android review, 2026-10-22). DiagramImage now parses with the board's
 * decoding middleware; this checks the tree it draws, for every case of every
 * diagram in the app, in both the full view and the thumbnail.
 */
import { isValidElement, type ReactNode } from 'react';

import { diagramAst } from '@/components/revise/diagram-card';
import { DIAGRAMS } from '@/lib/diagrams';

jest.mock('@/constants/scale', () => ({ useScale: () => ({ scale: (n: number) => n }) }));

/** Every string child in a parsed drawing, in order. */
function texts(node: ReactNode): string[] {
  if (typeof node === 'string') return [node];
  if (Array.isArray(node)) return node.flatMap(texts);
  if (isValidElement<{ children?: ReactNode }>(node)) return texts(node.props.children);
  return [];
}
const drawn = (xml: string) => {
  const ast = diagramAst(xml);
  expect(ast).not.toBeNull();
  return texts(ast!.children as ReactNode);
};

describe('diagram text on the phone', () => {
  it('the Physics 12 Ch 3 chapter map reads "&", not "&amp;"', () => {
    const map = Object.values(DIAGRAMS).flat().find((d) => d.id === 'p12-03-fig-3.1')!;
    const sketch = map.draw(map.cases[0]);
    for (const xml of [sketch.svg(false), sketch.svg(true)]) {
      const t = drawn(xml);
      expect(t).toContain('01 Current & Ohm’s law');
      expect(t).toContain('Networks &');
      expect(t.join(' ')).not.toContain('&amp;');
    }
  });

  it('no drawing in the app shows an XML reference as text', () => {
    const shown: string[] = [];
    for (const d of Object.values(DIAGRAMS).flat())
      d.cases.forEach((c, i) => {
        const sketch = d.draw(c);
        for (const xml of [sketch.svg(false), sketch.svg(true)])
          for (const t of drawn(xml)) if (/&(?:#\d+|#x[0-9a-f]+|[a-z]+);/i.test(t)) shown.push(`${d.id}__${i}: ${t}`);
      });
    expect(shown).toEqual([]);
  });

  it('decodes once: a label that means "&lt;" keeps it', () => {
    expect(drawn('<svg viewBox="0 0 10 10"><text>a &amp;lt; b &lt; c</text></svg>')).toEqual(['a &lt; b < c']);
  });
});
