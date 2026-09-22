/**
 * Board text, drawn in whichever bundled face actually has the glyph.
 *
 * WHAT THIS FIXES. Onest has no glyph for any Greek letter, subscript digit,
 * superscript sign, micro sign or Ohm sign. Measured 2026-09-22 over the
 * stored corpus: 40 of 260 boards use at least one — lambda in seven places,
 * subscript two in six, Delta in five, omega in five, superscript minus in
 * four. `data_table_trend`'s scientific notation emits U+207B, so every
 * negative exponent on a numeric table hits it.
 *
 * Nothing looked broken, which is why it lasted: iOS substitutes a system face
 * PER GLYPH, so the text appears — in two typefaces, mid-word. lib/widgets/
 * CLAUDE.md states the rule this breaks: "A diagram in a different typeface
 * than the board around it reads as a bug." And the substitution is invisible
 * to the width model, which was charging every one of those characters the
 * board family's Latin mean.
 *
 * So the string is split into runs by coverage and each run is drawn in the
 * face that has the glyph — a decision this code makes and can measure, rather
 * than one the OS makes silently at paint time.
 *
 * ONE RUN RENDERS EXACTLY AS BEFORE. A pure-Latin string — which is almost all
 * of them — emits `<Text>{s}</Text>` with no TSpan, byte-identical to what
 * `Text` emitted before this file existed. That is deliberate: the checked-in
 * render trees are a regression net over every widget, and a change that moved
 * all of them would retire the net exactly when it is most needed. Only a
 * string that actually mixes faces gains children.
 *
 * WHY TSpan AND NOT NESTED Text. `react-native-svg` positions a `TSpan` with
 * no x/y immediately after its predecessor on the same baseline, which is the
 * whole behaviour wanted here; nested `Text` restarts at the parent's anchor
 * and stacks the runs on top of each other. Verified against the trees in
 * __tests__, not assumed.
 */
import React from 'react';
import { Text as SvgText, TSpan } from 'react-native-svg';
import type { TextProps } from 'react-native-svg';

import { splitRuns } from './chrome';

export interface BoardTextProps extends TextProps {
  /** The face the caller draws in. Runs the board face cannot draw are
   *  re-assigned to the companion face; everything else keeps this one. */
  fontFamily?: string;
  children?: React.ReactNode;
}

/**
 * Drop-in for `react-native-svg`'s `Text`, splitting by glyph coverage.
 *
 * Non-string children pass straight through. A widget that already builds its
 * own TSpans (or interpolates an element) is doing something this cannot
 * reason about, and silently restructuring it would be worse than leaving it
 * alone.
 */
export function BoardText({ children, fontFamily, ...rest }: BoardTextProps) {
  const text = typeof children === 'string' ? children
    : typeof children === 'number' ? String(children)
    : null;

  if (text === null) {
    return <SvgText fontFamily={fontFamily} {...rest}>{children}</SvgText>;
  }

  const runs = splitRuns(text, fontFamily);
  if (runs.length <= 1) {
    // The common case, and the one that must not change shape.
    return <SvgText fontFamily={fontFamily} {...rest}>{text}</SvgText>;
  }

  return (
    <SvgText fontFamily={fontFamily} {...rest}>
      {runs.map((run, i) => (
        <TSpan key={i} fontFamily={run.family}>{run.text}</TSpan>
      ))}
    </SvgText>
  );
}

export default BoardText;
