/**
 * A board row that throws at render time costs the student that row, not the
 * class.
 *
 * The classroom had no error boundary, so a widget that threw while drawing
 * unmounted the whole screen. These render a row through GuardedBoardBlock with
 * a BoardWidget that throws, and assert what is left: the event's own picture
 * if it has one, else nothing — and always a log line, never a crash.
 *
 * BoardWidget is replaced rather than fed a payload that breaks it, because the
 * point is a widget that throws in a way nobody predicted.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import type { BoardEvent } from '@/lib/drona-voice-client';
import { TEST_SERVICES, TEST_THEME } from '@/lib/widgets/__tests__/test-utils';
import { placeholderFigureResolver } from '@/lib/widgets/labelled-figure/placeholder-figure';

import { GuardedBoardBlock } from '../board-error-boundary';
import { BoardBlockView, type BoardWidgetHost } from '../board-text';

let mockWidgetMode: 'throw' | 'throwPayloadOnly' | 'ok' = 'throw';
jest.mock('@/lib/widgets/BoardWidget', () => {
  const { Text } = require('react-native');
  return {
    BoardWidget: ({ event }: { event: { payload?: unknown } }) => {
      if (mockWidgetMode === 'throw' || (mockWidgetMode === 'throwPayloadOnly' && event.payload)) {
        throw new Error('widget exploded');
      }
      return <Text>widget drawn</Text>;
    },
  };
});

const SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 430" width="900" height="430">' +
  '<rect width="900" height="430" fill="#ffffff"/><circle cx="450" cy="215" r="80" fill="#2563eb"/></svg>';
const BOX = { availableWidth: 900, maxHeight: 430 };
const PAYLOAD = { widget: 'xy_plot', version: 1, params: {} };

const host: BoardWidgetHost = {
  activeSeq: 1,
  theme: TEST_THEME,
  services: TEST_SERVICES,
  figures: placeholderFigureResolver,
  onGap: () => {},
};

type Json = TestRenderer.ReactTestRendererJSON;
const roots = (j: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): Json[] =>
  !j ? [] : Array.isArray(j) ? j : [j];
function types(j: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): string[] {
  const out: string[] = [];
  const walk = (n: Json) => {
    out.push(String(n.type));
    (n.children ?? []).forEach((c) => typeof c === 'object' && c && walk(c as Json));
  };
  roots(j).forEach(walk);
  return out;
}
function text(j: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): string {
  let out = '';
  const walk = (n: Json) =>
    (n.children ?? []).forEach((c) => (typeof c === 'string' ? (out += c) : c && walk(c as Json)));
  roots(j).forEach(walk);
  return out;
}

let warn: jest.SpyInstance;
let errorSpy: jest.SpyInstance;
beforeEach(() => {
  mockWidgetMode = 'throw';
  warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  // React logs a caught render error itself; that noise is not under test.
  errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterEach(() => {
  warn.mockRestore();
  errorSpy.mockRestore();
});

function draw(event: BoardEvent, withHost: BoardWidgetHost | undefined = host) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<GuardedBoardBlock event={event} diagramBox={BOX} widgetHost={withHost} />);
  });
  return r;
}
const boundaryLogs = () => warn.mock.calls.filter((c) => c[0] === '[board-boundary]');

test('control: the same row, unguarded, throws out of render — which is what took the class down', () => {
  expect(() =>
    act(() => {
      TestRenderer.create(
        <BoardBlockView
          event={{ seq: 1, type: 'diagram', payload: PAYLOAD, svg: SVG, tier: 'precomputed' }}
          diagramBox={BOX}
          widgetHost={host}
        />
      );
    })
  ).toThrow('widget exploded');
});

test('a widget that throws no longer throws out of the row', () => {
  expect(() => draw({ seq: 1, type: 'diagram', payload: PAYLOAD, tier: 'precomputed' })).not.toThrow();
});

test('falls back to the event\'s own svg, drawn by the ordinary diagram path', () => {
  const r = draw({ seq: 1, type: 'diagram', payload: PAYLOAD, svg: SVG, tier: 'precomputed' });
  expect(types(r.toJSON()).some((t) => t.startsWith('RNSVG'))).toBe(true);
  expect(text(r.toJSON())).not.toContain('widget drawn');
  expect(boundaryLogs()).toHaveLength(1);
  expect(boundaryLogs()[0][1]).toMatchObject({ rung: 'widget', widget: 'xy_plot', hasSvg: true });
});

test('falls back to the illustration slug when that is all it has', () => {
  // The slug path goes through BoardWidget again, with the payload gone — which
  // here draws, since this widget only throws when handed a payload.
  mockWidgetMode = 'throwPayloadOnly';
  const r = draw({
    seq: 1, type: 'diagram', payload: PAYLOAD, illustration_slug: 'bio-ch4-annelida', tier: 'precomputed',
  });
  expect(text(r.toJSON())).toBe('widget drawn');
  expect(boundaryLogs()).toHaveLength(1);
});

test('draws nothing, quietly, when there is no other picture', () => {
  const r = draw({ seq: 1, type: 'diagram', payload: PAYLOAD, tier: 'precomputed' });
  expect(r.toJSON()).toBeNull();
  expect(boundaryLogs()).toHaveLength(1);
});

test('draws nothing when the fallback throws too, and says so on both rungs', () => {
  // Slug-only fallback goes through the (always-throwing) widget again.
  const r = draw({
    seq: 1, type: 'diagram', payload: PAYLOAD, illustration_slug: 'x', tier: 'precomputed',
  });
  expect(r.toJSON()).toBeNull();
  // componentDidCatch commits inner-first, so the order is not the story.
  expect(boundaryLogs().map((c) => (c[1] as { rung: string }).rung).sort()).toEqual(['fallback', 'widget']);
});

test('a row that does not throw is untouched', () => {
  mockWidgetMode = 'ok';
  const r = draw({ seq: 1, type: 'diagram', payload: PAYLOAD, tier: 'precomputed' });
  expect(text(r.toJSON())).toBe('widget drawn');
  expect(boundaryLogs()).toHaveLength(0);
});

test('a line of writing is untouched', () => {
  const r = draw({ seq: 1, type: 'text', text: 'Charge is conserved.' });
  expect(text(r.toJSON())).toBe('Charge is conserved.');
  expect(boundaryLogs()).toHaveLength(0);
});

test('a row whose picture changes is given a fresh attempt', () => {
  const first: BoardEvent = { seq: 1, type: 'diagram', payload: PAYLOAD, tier: 'precomputed' };
  const r = draw(first);
  expect(r.toJSON()).toBeNull();
  mockWidgetMode = 'ok';
  act(() => {
    r.update(
      <GuardedBoardBlock
        event={{ ...first, payload: { ...PAYLOAD, params: { a: 1 } } }}
        diagramBox={BOX}
        widgetHost={host}
      />
    );
  });
  expect(text(r.toJSON())).toBe('widget drawn');
});
