import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BoardDiagram } from '@/components/board-diagram';
import { AMBER_WASH, INK, INK_MUTED } from '@/components/classroom-chrome';
import type { BoardEvent } from '@/lib/drona-voice-client';
import { latexToText } from '@/lib/latex-text';
import { BoardWidget } from '@/lib/widgets/BoardWidget';
import type { FigureResolver } from '@/lib/widgets/labelled-figure/figure-resolver';
import type { WidgetServices, WidgetTheme } from '@/lib/widgets/types';

/**
 * ONE DEFINITION OF THE BOARD'S WRITING, for every surface that draws it.
 *
 * This lived inside `app/live-classroom.tsx`, which meant the only way to look
 * at the board's typography was to get a live class running — and a class needs
 * a working session, a socket and a teacher. Tuning type through that is how
 * the tilt survived the removal of the font it was imitating.
 *
 * `app/dev-board-preview.tsx` renders real lesson content through this exact
 * component, so what is judged there is what a class shows. Both surfaces move
 * together by construction; there is no second copy to drift.
 *
 * Every value here is fixed rather than scaled. The ruled ground draws a line
 * every RHYTHM (26) points and each style is locked to that lineHeight, which
 * is what keeps the writing on the rules — a scaled lineHeight would drift off
 * the grid on any device whose width is not the reference 390.
 */

export function BoardBlockView({
  event,
  diagramBox,
  widgetHost,
}: {
  event: BoardEvent;
  diagramBox: { availableWidth: number; maxHeight: number };
  /**
   * Optional, so a text-only surface can use this without standing up a widget
   * runtime. A `diagram` event with no host draws nothing rather than throwing
   * — the alternative is every caller inventing a stub theme and resolver.
   */
  widgetHost?: {
    activeSeq: number | null;
    theme: WidgetTheme;
    services: WidgetServices;
    figures: FigureResolver;
    onGap: (reason: string, detail: unknown) => void;
  };
}) {
  const raw =
    event.type === 'formula' ? event.latex ?? '' : event.type === 'diagram' ? '' : event.text ?? '';
  /**
   * The board was the one surface in the app painting its source.
   *
   * `formula` events carry bare LaTeX with no `$…$` around it, and this
   * component rendered that string straight into a <Text> — so a class on
   * drift velocity wrote `\vec{v}_d = \vec{a}\tau = -\dfrac{e\vec{E}}{m}\tau`
   * on the whiteboard, markup and all. Exactly the undelimited-field case
   * `convertBareText` was written for when the solver's Final answer box had
   * the same bug. Every other call site — practice, library, solutions,
   * textbooks — already goes through this converter.
   *
   * Applied to prose lines too, not only formulas: `latexToText` leaves text
   * carrying no commands alone, and it picks up bare scripts the board was
   * also missing (`10^5 m/s` reads as 10⁵ m/s now).
   */
  const text = useMemo(() => latexToText(raw), [raw]);
  // A figure, not a line of writing — it owns its own sizing and never goes
  // near the LaTeX converter.
  if (event.type === 'diagram') {
    if (!widgetHost) return null;
    // A payload beats markup wherever both exist: the registry draws the
    // real curve from live parameters, an `svg` string draws an
    // approximation the model produced by hand.
    if (event.payload) {
      return (
        <BoardWidget
          event={{ seq: event.seq, payload: event.payload, tier: event.tier ?? 'precomputed' }}
          activeSeq={widgetHost.activeSeq}
          width={diagramBox.availableWidth}
          height={diagramBox.maxHeight}
          theme={widgetHost.theme}
          services={widgetHost.services}
          figures={widgetHost.figures}
          onGap={widgetHost.onGap}
        />
      );
    }
    if (!event.svg) return null;
    return (
      <BoardDiagram
        svg={event.svg}
        caption={event.caption}
        availableWidth={diagramBox.availableWidth}
        maxHeight={diagramBox.maxHeight}
      />
    );
  }
  if (event.type === 'heading') {
    return <Text style={styles.boardHeading}>{text}</Text>;
  }
  if (event.type === 'formula') {
    return (
      <View style={styles.boardFormulaPlate}>
        <Text style={styles.boardEquation}>{text}</Text>
      </View>
    );
  }
  if (event.type === 'note') {
    return <Text style={styles.boardNote}>{text}</Text>;
  }
  /**
   * Bold on `key` or `high` only.
   *
   * `emphasis` is a string from the planner — `normal | key | high` — and it
   * was typed as a boolean here, so `"normal"` came through truthy and every
   * ordinary line rendered bold. The board had no non-emphasised state at all,
   * which is why all of it looked shouted. Same comparison the lesson player
   * has always made.
   */
  const emphasised = event.emphasis === 'key' || event.emphasis === 'high';
  return <Text style={[styles.boardBody, emphasised && styles.boardBodyBold]}>{text}</Text>;
}

/**
 * SPACING AND SIZE, NOT THE RULE GRID.
 *
 * Every style used to be locked to `lineHeight: RHYTHM` so the writing sat on
 * the ruled lines. That is a charming idea and it was the wrong master: 26pt
 * of leading is right for a 17pt heading and much too tight for a stack of
 * 15pt prose, it forced four different sizes onto one rhythm, and because a
 * whole line was the only unit of space available, nothing could be separated
 * by less than a rule or more than a rule. Hence the congestion.
 *
 * The rules are decoration now. They are .075 alpha — a line passes behind a
 * word without touching it — and the type is spaced for reading instead.
 *
 * SPACE IS `marginTop` ONLY, never marginBottom. Yoga does not collapse
 * margins the way CSS does, so a block with both would add its bottom to the
 * next block's top and the gap would depend on what happened to precede it.
 * With top-only, the gap between any two blocks is exactly the lower one's
 * marginTop — one number, readable off this sheet.
 *
 * THE LADDER IS WEIGHT, then size: 400 prose, 600 the line that matters, 700
 * headings and formulas. No colour at all, so a student who cannot see colour
 * reads the same hierarchy as everyone else.
 */
const styles = StyleSheet.create({
  /** The section title. The largest thing on the board and the only one with a
   *  real break above it — 32 says "new idea" where 12 says "next line". */
  boardHeading: {
    fontFamily: 'Onest_700Bold',
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.2,
    marginTop: 32,
    color: INK,
  },

  /**
   * The reading text. 15/23 is 1.53 leading, and on a 346pt measure that is
   * about 45 characters a line — normal for a phone, where iOS's own body text
   * runs nearer 40. The old 13.5 on a 26pt line was 1.93, the airiest thing on
   * a board whose headings were the tightest.
   */
  boardBody: {
    fontFamily: 'Onest_400Regular',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    color: INK_MUTED,
  },
  /** `key` or `high`. 600 and full ink: darker and firmer than the prose round
   *  it, without the shout of 700 at reading size. */
  boardBodyBold: {
    fontFamily: 'Onest_600SemiBold',
    color: INK,
  },

  /**
   * The formula, centred on its own plate.
   *
   * Centred because a formula is not a line of prose — it is a result, and
   * left-aligning it buried it in the paragraph flow. The plate is the board's
   * only filled surface, which is what makes it mean "formula" rather than
   * decoration, and it is the existing amber wash rather than a new tone.
   */
  boardFormulaPlate: {
    marginTop: 18,
    alignSelf: 'stretch',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: AMBER_WASH,
  },
  boardEquation: {
    fontFamily: 'Onest_700Bold',
    fontSize: 19,
    lineHeight: 26,
    textAlign: 'center',
    color: INK,
  },

  /**
   * The exam callout, marked by an indent rather than by colour.
   *
   * It was red, and red was the only thing separating it from an emphasised
   * body line. With colour gone the indent does that job: a block stepped in
   * from the measure reads as an aside in any typeface, and it costs nothing.
   * Smaller and lighter than the line it follows, because an aside should sit
   * below the argument rather than on top of it.
   */
  boardNote: {
    fontFamily: 'Onest_500Medium',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 18,
    paddingLeft: 16,
    color: INK_MUTED,
  },
});
