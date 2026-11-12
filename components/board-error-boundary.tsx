import { Component, type ReactNode } from 'react';

import { BoardBlockView, type BoardWidgetHost } from '@/components/board-text';
import type { BoardEvent } from '@/lib/drona-voice-client';

/**
 * A board row that throws while it renders must not take the class with it.
 *
 * React unmounts the whole tree above the nearest error boundary, and the
 * classroom had none: one widget whose draw code threw on a payload nobody had
 * seen — a bad number, a null where a list was promised — blanked the screen,
 * ended the lesson mid-sentence and, in a release build, left the student on
 * the home tab with nothing to say what happened. The board already has a
 * fallback chain for a widget it cannot DRAW (lib/widgets/BoardWidget.tsx);
 * this is the same chain for one that CRASHES.
 *
 * Two rungs, no new design:
 *
 *  1. The event's own picture. The widget payload is dropped and the row is
 *     drawn again from what else the event carries — its illustration slug
 *     (through BoardWidget, as ever) or its `svg` (through BoardDiagram). An
 *     event with neither has no picture to fall back to.
 *  2. Nothing. If the picture also throws, or there was none, the row is
 *     skipped and the board carries on with the next line.
 *
 * Every catch is logged with `console.warn('[board-boundary]', …)`, the sink
 * the board's own gap reports use, so a crashing widget is a line in the same
 * feed as an undrawable one.
 */
class Catch extends Component<
  { fallback: ReactNode; onError: (error: unknown) => void; resetKey: string; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    this.props.onError(error);
  }

  componentDidUpdate(prev: { resetKey: string }) {
    // A row whose picture CHANGED (a merged reveal, a re-sent event) gets a
    // fresh attempt; the same picture that threw is not retried every render.
    if (this.state.failed && prev.resetKey !== this.props.resetKey) {
      this.setState({ failed: false });
    }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function pictureKey(event: BoardEvent): string {
  let payload = '';
  try {
    payload = event.payload ? JSON.stringify(event.payload) : '';
  } catch {
    payload = 'unserialisable';
  }
  return `${event.type}|${payload}|${event.illustration_slug ?? ''}|${event.svg?.length ?? 0}`;
}

export function GuardedBoardBlock({
  event,
  diagramBox,
  widgetHost,
  progress,
  grid,
}: {
  event: BoardEvent;
  diagramBox: { availableWidth: number; maxHeight: number };
  widgetHost?: BoardWidgetHost;
  /** How much of the line is written (the live class paces it to the sentence). */
  progress?: number;
  /** The live class's grid mode: the gap is set by the block's wrapper. */
  grid?: boolean;
}) {
  const report = (rung: 'widget' | 'fallback') => (error: unknown) => {
    console.warn('[board-boundary]', {
      rung,
      seq: event.seq,
      type: event.type,
      widget: event.payload?.widget ?? null,
      hasSvg: Boolean(event.svg),
      hasIllustration: Boolean(event.illustration_slug),
      error: error instanceof Error ? error.message : String(error),
    });
  };

  const hasOtherPicture = Boolean(event.svg || event.illustration_slug);
  const key = pictureKey(event);
  const fallback =
    event.payload && hasOtherPicture ? (
      <Catch fallback={null} onError={report('fallback')} resetKey={key}>
        <BoardBlockView
          event={{ ...event, payload: undefined, tier: undefined }}
          diagramBox={diagramBox}
          widgetHost={widgetHost}
          progress={progress}
          grid={grid}
        />
      </Catch>
    ) : null;

  return (
    <Catch fallback={fallback} onError={report('widget')} resetKey={key}>
      <BoardBlockView event={event} diagramBox={diagramBox} widgetHost={widgetHost} progress={progress} grid={grid} />
    </Catch>
  );
}
