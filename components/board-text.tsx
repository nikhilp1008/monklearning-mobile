import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';

import { BoardDiagram } from '@/components/board-diagram';
import { INK, INK_MUTED, RHYTHM } from '@/components/classroom-chrome';
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
    return <Text style={styles.boardEquation}>{text}</Text>;
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

const styles = StyleSheet.create({
  boardHeading: {
    fontFamily: 'Onest_700Bold',
    fontSize: 17,
    lineHeight: RHYTHM,
    marginTop: RHYTHM,
    color: INK,
  },
  boardEquation: {
    fontFamily: 'Onest_800ExtraBold',
    fontSize: 17,
    lineHeight: RHYTHM,
    color: INK,
  },
  boardBody: {
    fontFamily: 'Onest_400Regular',
    fontSize: 14.5,
    lineHeight: RHYTHM,
    color: INK_MUTED,
  },
  boardBodyBold: {
    fontFamily: 'Onest_700Bold',
    color: INK,
  },
  /**
   * NO COLOUR ANYWHERE ON THIS BOARD. The heading and the note were both red
   * and both are ink now.
   *
   * Which leaves a collision worth naming rather than hiding: a note and an
   * emphasised body line are now identical — 700 at 14.5 in ink. Nothing but
   * colour was separating them, so removing colour removed the distinction
   * entirely. Flagged for Nikhil rather than invented around.
   */
  boardNote: {
    fontFamily: 'Onest_700Bold',
    fontSize: 14.5,
    lineHeight: RHYTHM,
    color: INK,
  },
});
