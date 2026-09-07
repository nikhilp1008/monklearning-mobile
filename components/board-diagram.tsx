import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { INK_MUTED } from '@/components/classroom-chrome';

/**
 * A figure sent by the API as one `diagram` board event.
 *
 * The `svg` is complete, static, self-contained markup — no external
 * references, no scripts, no fonts to fetch. `diagram_author.validate()`
 * enforces that server-side and drops anything failing it, so this renders the
 * string as it arrives. Deliberately no sanitising pass of our own: the
 * element and attribute whitelist already ran, and an over-eager filter here
 * would silently strip `<g>` or an attribute it did not recognise, which is
 * exactly the failure mode the server-side validation exists to remove.
 *
 * Three things the host app owes every diagram, per the API handoff, and this
 * component does all three:
 *
 * 1. Remap the palette. The generator emits a neutral set; leave it and every
 *    figure clashes with the board.
 * 2. Supply the font. The markup carries no `font-family`, on purpose, so the
 *    host decides.
 * 3. Scale it to the space, preserving aspect.
 *
 * What it does NOT do: move anything. The author computed label positions
 * against the viewBox and the server geometrically verified that no two labels
 * overlap. Re-wrapping or re-laying-out text throws that away.
 */

/**
 * The generator's neutral palette → the house one. A literal string swap; the
 * validator guarantees every colour in the markup is one of exactly these nine.
 *
 * `#ffffff → transparent` is the load-bearing one. Those are background rects,
 * and left white they put every figure on a white card sitting on cream paper.
 */
const HOUSE_PALETTE: readonly (readonly [string, string])[] = [
  ['#ffffff', 'transparent'],
  ['#1f2933', '#1C1A16'],
  ['#2563eb', '#9A6A12'],
  ['#dbeafe', '#FCF4E0'],
  ['#64748b', '#9C988C'],
  ['#f1f5f9', '#FFFEFB'],
  ['#d97706', '#B87A14'],
  ['#dc2626', '#DD4433'],
  ['#059669', '#157A45'],
];

/** The board's own body face, so a label reads as part of the same hand. */
const DIAGRAM_FONT = 'Onest_400Regular';

const VIEW_BOX = /viewBox\s*=\s*["']\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)\s*["']/;

function housePalette(svg: string): string {
  let out = svg;
  for (const [from, to] of HOUSE_PALETTE) {
    // Case-insensitive: the validator fixes the nine values, not their casing.
    out = out.replace(new RegExp(from, 'gi'), to);
  }
  return out;
}

/**
 * Attaches the font to the root element rather than to each label.
 *
 * `font-family` inherits, so one attribute covers every `<text>` in the tree —
 * and it leaves each label's own `font-size` untouched, which is required:
 * those sizes are what the author's scaling maths was computed against.
 */
function withFont(svg: string): string {
  return svg.replace(/<svg\b/i, `<svg font-family="${DIAGRAM_FONT}"`);
}

export function BoardDiagram({
  svg,
  caption,
  availableWidth,
  maxHeight,
}: {
  svg: string;
  caption?: string;
  /** Board content width — the widest the figure may be drawn. */
  availableWidth: number;
  /** The tallest it may be drawn, so it cannot swallow the whole board. */
  maxHeight: number;
}) {
  const prepared = useMemo(() => withFont(housePalette(svg)), [svg]);

  const box = useMemo(() => {
    const match = VIEW_BOX.exec(svg);
    if (!match) return null;
    const width = Number(match[3]);
    const height = Number(match[4]);
    if (!(width > 0) || !(height > 0)) return null;
    return { width, height };
  }, [svg]);

  // A diagram whose viewBox cannot be read cannot be sized, and drawing it at a
  // guessed aspect would distort the geometry the author computed. Drop it —
  // the board reads fine without a figure, which is the normal case for 83% of
  // concepts anyway.
  if (!box) return null;

  /**
   * Height is the binding constraint here, which inverts the web app's problem.
   *
   * The handoff's sizing maths is written for a portrait column ~300px wide and
   * warns about labels shrinking below legibility. The classroom board is
   * landscape and its content box is far wider — a 340×240 canvas drawn to full
   * width would stand taller than the whole screen. So fit to the height first
   * and let width follow: on an iPhone 17 that lands near 354pt, comfortably
   * above the ~300px floor the handoff flags, so labels stay legible without
   * anyone retuning `DETAIL_LEVELS`.
   */
  const aspect = box.width / box.height;
  const width = Math.min(availableWidth, maxHeight * aspect);
  const height = width / aspect;

  return (
    <View style={styles.wrap}>
      {/* No overflow:hidden anywhere on this path. A label can sit a hair
          outside the viewBox, and clipping cuts it off mid-word.

          `fallback`/`onError` are the library's own guard against a parse that
          throws. The server promises well-formed XML and drops anything that
          is not, so this should never fire — but it runs mid-class, and a
          figure failing to draw must cost the student a figure, not the
          lesson. */}
      <SvgXml
        xml={prepared}
        width={width}
        height={height}
        fallback={<View />}
        onError={(err) => console.warn('[board-diagram] could not draw a figure:', err)}
      />
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    // Breathing room rather than a clip: gives a slightly-oversized label
    // somewhere to land instead of being cut.
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'flex-start',
  },
  caption: {
    fontFamily: 'Onest_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
    color: INK_MUTED,
    marginTop: 4,
  },
});
