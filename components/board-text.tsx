import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BoardDiagram } from '@/components/board-diagram';
import { DEEP_AMBER, INK, INK_MUTED } from '@/components/classroom-chrome';
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

/**
 * Everything `BoardWidget` needs beyond the event itself and its share of the
 * board box.
 *
 * Optional on `BoardBlockView`, so a surface can draw the board's writing
 * without standing up a widget runtime — the alternative is every caller
 * inventing a stub theme and resolver. What a host-less surface gives up is
 * the registry and the illustration cache, NOT figures in general: an event
 * carrying its own `svg` needs none of this and is drawn either way. It used
 * to give up every figure, and `app/dev-board-preview.tsx` — the one screen
 * whose entire purpose is judging what a board looks like — passes no host.
 */
export interface BoardWidgetHost {
  activeSeq: number | null;
  theme: WidgetTheme;
  services: WidgetServices;
  figures: FigureResolver;
  /** P3. The chapter's own SVG — the last rung of BoardWidget's fallback
   *  chain, read from the plan rather than sent per turn. */
  chapterFallbackSvg?: string;
  onGap: (reason: string, detail: unknown) => void;
}

/**
 * The event types this component knows how to WRITE — and the reason there is
 * now a branch for everything outside the set.
 *
 * `BoardEvent.type` ends in `| string` (lib/drona-voice-client.ts), open on
 * purpose, because the server may name a type this build does not carry.
 * Nothing here honoured that: the figure branch tested `type === 'diagram'`
 * and every other name fell past all four text branches into the default
 * `<Text>` at the bottom — which, for an event with no `text`, is
 * `<Text>{''}</Text>`. So an event typed `figure`, `image` or `illustration`,
 * payload and all, rendered an invisible row of the right height and logged
 * nothing. That is worse than a blank board: a blank board is at least
 * visible.
 */
const TEXT_TYPES: ReadonlySet<string> = new Set(['text', 'heading', 'note', 'formula']);

/**
 * A gap has to land somewhere even on a surface with no gap sink.
 *
 * `onGap` arrives on `widgetHost`, and the host-less surfaces are exactly the
 * ones where a blank row is hardest to attribute — so a missing host must not
 * also mean a missing measurement. The classroom's own `onGap` is itself a
 * `console.warn('[board-gap]', …)` (app/live-classroom.tsx), so this is the
 * same destination by a shorter route rather than a second channel.
 *
 * Called during render, as BoardWidget's own `onGap` calls are: both are
 * reached on paths that render nothing, so there is no commit to hang an
 * effect on that would not also need its own unmount bookkeeping, and the
 * host's implementation is a log rather than a setState.
 */
function reportGap(host: BoardWidgetHost | undefined, reason: string, detail: unknown) {
  if (host) {
    host.onGap(reason, detail);
    return;
  }
  console.warn('[board-gap]', reason, detail);
}

export function BoardBlockView({
  event,
  diagramBox,
  widgetHost,
}: {
  event: BoardEvent;
  diagramBox: { availableWidth: number; maxHeight: number };
  widgetHost?: BoardWidgetHost;
}) {
  /**
   * WHAT MAKES AN EVENT A FIGURE IS WHAT IT CARRIES, NOT WHAT IT IS CALLED.
   *
   * See TEXT_TYPES for the row this replaces. A type with no branch of its own
   * is routed by its contents: one carrying a payload, an `svg` or a slug is a
   * picture and goes down the figure path; one carrying only words is still
   * words and is written as prose below.
   */
  const hasFigure = Boolean(event.payload || event.svg || event.illustration_slug);
  const isFigure = event.type === 'diagram' || (!TEXT_TYPES.has(event.type) && hasFigure);

  const raw = isFigure ? '' : event.type === 'formula' ? event.latex ?? '' : event.text ?? '';
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
  if (isFigure) {
    /*
     * A BOX WITH NO AREA IS THE THIRD WAY TO DRAW NOTHING, and it is the one
     * this component cannot fix from here.
     *
     * Every renderer below sizes itself from `diagramBox`, so at 0x0 they all
     * paint an empty row — `BoardDiagram` computes `min(0, …)`, a widget gets a
     * 0x0 canvas — and none of them can tell that apart from a figure that
     * failed. `app/dev-board-preview.tsx` passes `{ availableWidth: 0,
     * maxHeight: 0 }` today, deliberately (its comment: figures "snap to no
     * grid, which is a separate job from the writing"), so the screen meant for
     * judging boards needs a real box before it can show one. What this can do
     * is say so instead of showing a gap in the writing and nothing else.
     *
     * The classroom's own box cannot be zero — `boardHeight` starts at 390 and
     * `availableWidth` comes from the window, not from a layout pass — so this
     * does not fire on a mounting frame there.
     */
    if (!(diagramBox.availableWidth > 0) || !(diagramBox.maxHeight > 0)) {
      reportGap(widgetHost, 'no_diagram_space', {
        seq: event.seq,
        type: event.type,
        availableWidth: diagramBox.availableWidth,
        maxHeight: diagramBox.maxHeight,
      });
      return null;
    }
    /*
     * A PAYLOAD **OR A SLUG** GOES THROUGH BoardWidget.
     *
     * The gate here was `event.payload` alone, with `if (!event.svg) return
     * null` immediately behind it — so an event carrying ONLY an
     * `illustration_slug` (a real shape: `lib/widgets/board-continuity.ts`
     * signs one as `ill:${slug}`, and BoardWidget documents the server sending
     * it) returned null one line above the fallback rung built to draw it. P3
     * added that rung; for the events it exists for, nothing in the classroom
     * could reach it.
     *
     * A payload still beats markup wherever both exist: the registry draws the
     * real curve from live parameters, an `svg` string draws an approximation
     * the model produced by hand.
     */
    if (widgetHost && (event.payload || event.illustration_slug)) {
      return (
        <BoardWidget
          /*
           * THE WHOLE EVENT'S FALLBACKS TRAVEL WITH IT.
           *
           * This used to build `{seq, payload, tier}` and drop `svg` — so
           * BoardWidget's fallback chain could never see one, and a payload
           * the build could not draw became a blank board with no way back.
           * P3 added rungs to that chain; without this line two of them were
           * unreachable in the only place that matters.
           */
          event={{ seq: event.seq, payload: event.payload,
                   svg: event.svg, illustration_slug: event.illustration_slug,
                   tier: event.tier ?? 'precomputed' }}
          chapterFallbackSvg={widgetHost.chapterFallbackSvg}
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
    /*
     * MARKUP NEEDS NO WIDGET RUNTIME, so a host-less surface is no reason to
     * draw nothing. `if (!widgetHost) return null` was that reason, and it sat
     * above everything: `BoardDiagram` takes no theme, no services and no
     * resolver, which is precisely why the prop is optional in the first place.
     *
     * It is also the better renderer for a bare `svg` than BoardWidget's own
     * tier-3 rung, which hands the string to a raw `SvgXml`: this one remaps
     * the generator's neutral palette to the board's, attaches the board's own
     * face and fits the aspect to the box. Hence markup-only events come here
     * whether or not there is a host.
     */
    if (event.svg) {
      /*
       * A payload skipped for want of a runtime is a tier-3 render in all but
       * name — the student gets the model's hand-drawn approximation where the
       * registry would have computed the real curve — so it is counted like
       * one. lib/widgets/CLAUDE.md §2: tier 3 is a measurement, not a failure.
       * This is the one way it happens without BoardWidget ever being asked,
       * which is exactly why it needs saying out loud here.
       */
      if (!widgetHost && (event.payload || event.illustration_slug)) {
        reportGap(widgetHost, 'no_widget_host', {
          seq: event.seq,
          type: event.type,
          drew: 'svg',
          hasPayload: Boolean(event.payload),
          hasIllustration: Boolean(event.illustration_slug),
        });
      }
      return (
        <BoardDiagram
          svg={event.svg}
          caption={event.caption}
          availableWidth={diagramBox.availableWidth}
          maxHeight={diagramBox.maxHeight}
        />
      );
    }
    /*
     * Nothing drawable is left, and this is the one figure case that is
     * honestly a no-op. It is not a SILENT one: a blank row with no gap cannot
     * be told apart from a row that never arrived, and the gap feed is the only
     * instrument the diagram tiers have (lib/widgets/CLAUDE.md §2). The two
     * reasons are separate because their fixes are — one is a surface missing a
     * runtime, the other an event missing a picture.
     */
    reportGap(widgetHost, hasFigure ? 'no_widget_host' : 'empty_diagram_event', {
      seq: event.seq,
      type: event.type,
      drew: 'nothing',
      hasPayload: Boolean(event.payload),
      hasIllustration: Boolean(event.illustration_slug),
    });
    return null;
  }
  if (event.type === 'heading') {
    return <Text style={styles.boardHeading}>{text}</Text>;
  }
  if (event.type === 'formula') {
    return (
      <View style={styles.boardFormulaRow}>
        <Text style={styles.boardEquation}>{text}</Text>
      </View>
    );
  }
  if (event.type === 'note') {
    return <Text style={styles.boardNote}>{text}</Text>;
  }
  /*
   * A type with no branch of its own, carrying words rather than a picture.
   *
   * Written as prose, because visible beats invisible and prose is what an
   * event with text in it is — but LOGGED, because the type was a guess and
   * the only way it ever gets a branch of its own is if someone can see it
   * arrived. The empty case returns null rather than the `<Text>{''}</Text>`
   * it used to fall into: a row with no glyphs still takes its 20pt of
   * marginTop, so the board grew a gap nothing in the plan asked for and
   * nothing in the log explained.
   */
  if (!TEXT_TYPES.has(event.type)) {
    reportGap(widgetHost, 'unknown_event_type', { seq: event.seq, type: event.type });
    if (!text) return null;
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
/**
 * THE SCALE IS A RATIO, AND THE GAPS ARE FRACTIONS OF A LINE.
 *
 * Both of those were picked by feel before and both were wrong in a way the
 * arithmetic shows plainly.
 *
 * SIZE. The heading was 20 against a 15pt body — a ratio of 1.33, which is a
 * print-poster jump and read as a heading shouting at a body too small to
 * answer. The base is 16 now and the scale is 1.2 (a major second, the usual
 * choice on screen), so the heading lands at 19 and the ratio is 1.19. The
 * hierarchy is carried by weight and space instead: 400 prose, 600 the line
 * that matters, 700 headings and formulas.
 *
 * SPACE. The gap between two ideas was 12pt against a 23pt line — 0.52 of a
 * line, LESS than a single line-space between two separate definitions. That
 * is the congestion: consecutive events ran together into one wall. Gaps are
 * now stated as fractions of the 26pt line, which is why they are the numbers
 * they are:
 *
 *   between ideas   0.75 line   20
 *   around a note   0.85 line   22
 *   around a formula   1 line   26
 *   a new heading    1.3 line   34
 *
 * `marginTop` only, never marginBottom: Yoga does not collapse margins, so a
 * block with both would add its bottom to the next block's top and the gap
 * would depend on what preceded it. Top-only means the gap between any two
 * blocks is exactly the lower one's number.
 *
 * NO BACKGROUND COLOUR ANYWHERE, and no coloured type yet either. The formula
 * had an amber plate and it is gone: nothing on this board is filled. A
 * formula earns its place by being centred and by having a full line of air
 * either side, which is what a displayed equation gets in a book.
 */
const styles = StyleSheet.create({
  /**
   * The section title. 19 against a 16 body, so it leads without shouting —
   * and DEEP_AMBER carries the rest of the separation that size no longer
   * does at a 1.19 ratio.
   *
   * It is the brand's own accent ink, the same #9A6A12 the app already uses
   * for links, so a coloured heading is not a new tone on the board. At
   * 4.73:1 on white it carries body-size text comfortably, let alone 19pt at
   * 700 — and of the palette only ink, slate, greenInk and this clear 4.5:1
   * at all. Marigold fails outright at 2.12, which is why the accent can be a
   * dot or a fill but never type.
   *
   * Not green: #157A45 measures better at 5.38:1, but green already means
   * CORRECT in this app — the verdict chip, mastery-strong — and a heading is
   * not a verdict. The cheaper contrast is worth not spending a meaning
   * twice.
   */
  boardHeading: {
    fontFamily: 'Onest_700Bold',
    fontSize: 19,
    lineHeight: 25,
    letterSpacing: -0.2,
    marginTop: 34,
    color: DEEP_AMBER,
  },

  /**
   * The reading text, and most of the board. 16/26 is 1.62 leading — generous
   * on purpose, because this is read while someone is talking over it, and
   * about 42 characters a line on a 346pt measure.
   */
  boardBody: {
    fontFamily: 'Onest_400Regular',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 20,
    color: INK_MUTED,
  },
  /** `key` or `high`: 600 and full ink, firmer than the prose round it without
   *  the shout of 700 at reading size. */
  boardBodyBold: {
    fontFamily: 'Onest_600SemiBold',
    color: INK,
  },

  /**
   * The formula, boxed on a hairline. Centred, a full line of air above it,
   * and still no fill.
   *
   * Centring and space alone were not enough — a bold centred line is still a
   * line, and it sank back into the paragraph flow. A box is the textbook
   * convention for an equation worth keeping, and it is also what a student
   * does to one in a notebook, which is the gesture this board is made of.
   *
   * The border is the heading's own #9A6A12 at .34 rather than a neutral
   * grey, so the two structural elements — the section title and the equation
   * — are the same colour family and the board still carries exactly one hue.
   *
   * NOT two horizontal rules instead of a box: the background is already
   * ruled every 26pt, so a rule above and below reads as the decoration
   * having darkened rather than as a frame round the formula. A closed box
   * cannot be confused with the paper.
   */
  boardFormulaRow: {
    marginTop: 26,
    alignSelf: 'stretch',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(154,106,18,.34)',
    borderRadius: 10,
  },
  boardEquation: {
    fontFamily: 'Onest_700Bold',
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    color: INK,
  },

  /**
   * The exam callout, marked by an indent.
   *
   * NO ITALIC HERE, AND NONE IS POSSIBLE — checked on the device, not
   * assumed. Onest ships nine weights and zero italic variants
   * (`post.italicAngle` 0, OS/2 italic bit clear), and iOS does not
   * synthesise an oblique for a custom family that lacks one: it silently
   * renders upright. `fontStyle: 'italic'` here changed nothing on screen.
   *
   * Worse than nothing, in fact, so it is gone: Android DOES synthesise, so
   * leaving the declaration in would have italicised this line on one
   * platform and not the other, which is a divergence nobody asked for and
   * nobody would have noticed until a user reported it.
   *
   * A browser shears the glyphs, which is why a mock of this looked fine.
   * Real italic on this board needs a second family, and that is a typeface
   * decision rather than a slant.
   */
  boardNote: {
    fontFamily: 'Onest_500Medium',
    fontSize: 13.5,
    lineHeight: 21,
    marginTop: 22,
    paddingLeft: 16,
    color: INK_MUTED,
  },
});
