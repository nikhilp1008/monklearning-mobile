import type { ReactNode } from 'react';
import { Text } from 'react-native';

/**
 * A letter carrying a combining accent with no precomposed form — k̂, the
 * unit vector, most of all — set in the system font.
 *
 * Onest has î and ĵ as single glyphs but nothing for k̂, so k̂ is a k plus
 * U+0302, and Onest places that mark wrongly: its mark has no width and is
 * centred on the letter's right edge, so the hat floated above and to the side
 * of the k or was lost under the next character, next to an î and ĵ drawn
 * correctly (iPhone, 2026-11-05). The system font positions combining marks
 * properly. Precomposed letters never match here, so î and ĵ keep Onest.
 *
 * For `<Text>` only. A drawing's own SVG text is placed by lib/diagrams/accent-text.ts.
 */
const ACCENTED = /(\p{L}[\u0300-\u036f]+)/u;
const accentStyle = { fontFamily: 'System' } as const;

export function withAccents(text: string): ReactNode {
  if (!ACCENTED.test(text)) return text;
  return text.split(ACCENTED).map((piece, k) =>
    k % 2 === 1 ? (
      <Text key={k} style={accentStyle}>
        {piece}
      </Text>
    ) : (
      piece
    )
  );
}
