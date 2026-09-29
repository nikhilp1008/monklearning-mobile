/**
 * S3 — AN SVG WITH NO viewBox WAS A SILENT BLANK.
 *
 * `BoardDiagram` parsed `viewBox`, and on a miss did `return null` with no gap
 * event of any kind. The student saw blank paper and `gap_report.py` — the one
 * instrument the diagram tiers have — could not see it at all, because it
 * counts what the client REPORTS. A blank nobody reports is worse than a blank
 * that alerts.
 *
 * A viewBox is now DERIVED before giving up: from the root width/height, then
 * from the bounding box of the content. Only a figure that names no geometry
 * at all is refused, and that refusal is an `svg_invalid` gap.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { BoardDiagram, diagramBox, diagramVerdict } from '../board-diagram';

const draw = (svg: string) => {
  const gaps: { reason: string; detail: unknown }[] = [];
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(
      <BoardDiagram svg={svg} availableWidth={700} maxHeight={300}
        onGap={(reason, detail) => gaps.push({ reason, detail })} />);
  });
  const json = r.toJSON();
  const xml = (r.root.findAll((n) => typeof n.props.xml === 'string')[0]?.props.xml) as string | undefined;
  act(() => r.unmount());
  return { json, gaps: gaps.map((g) => g.reason), detail: gaps[0]?.detail as Record<string, unknown>, xml };
};

describe('where the box comes from', () => {
  test('a viewBox is used as authored, and reports nothing', () => {
    const got = diagramBox('<svg viewBox="0 0 640 260"><rect width="10" height="10"/></svg>');
    expect(got).toEqual({ box: { minX: 0, minY: 0, width: 640, height: 260 }, source: 'viewBox' });
    expect(draw('<svg viewBox="0 0 640 260"><rect x="1" y="1" width="10" height="10"/></svg>').gaps).toEqual([]);
  });

  test('THE DEFECT: width/height and no viewBox used to be a blank board', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="260">'
              + '<rect x="10" y="10" width="100" height="40" fill="#1f2933"/></svg>';
    expect(parseOnly(svg)).toBeNull();                       // the old path
    const { json, gaps, xml } = draw(svg);
    expect(json).not.toBeNull();                             // …now it draws
    expect(gaps).toEqual(['svg_viewbox_derived']);
    expect(xml).toContain('viewBox="0 0 640 260"');
  });

  test('the derived box is written INTO the markup, not just used for layout', () => {
    // SvgXml sizes from the root element. A figure with no viewBox renders at
    // its intrinsic size inside whatever width/height it is given, which is how
    // a 640x260 plate becomes a dot in the corner — so the box has to be in the
    // string that reaches the renderer, not only in the component's maths.
    const { xml } = draw('<svg width="640" height="260"><rect x="0" y="0" width="5" height="5"/></svg>');
    expect(xml).toMatch(/<svg viewBox="0 0 640 260"/);
  });

  test('no viewBox and no width/height: the CONTENT bounds it', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg">'
              + '<rect x="20" y="30" width="100" height="40"/>'
              + '<circle cx="200" cy="50" r="10"/>'
              + '<path d="M 20 30 L 210 120"/></svg>';
    const got = diagramBox(svg);
    expect(got!.source).toBe('content-bounds');
    expect(got!.box).toEqual({ minX: 20, minY: 30, width: 190, height: 90 });
    expect(draw(svg).gaps).toEqual(['svg_viewbox_derived']);
  });

  test('a control point bounds the curve, it never clips it', () => {
    // Bezier control points are read as plain coordinates. That can only make
    // the box BIGGER than the drawn curve, which is the safe direction: a
    // figure drawn slightly small is legible, a cropped one is wrong.
    const got = diagramBox('<svg><path d="M0 0 C 50 200 150 200 200 0"/></svg>');
    expect(got!.box.height).toBeGreaterThanOrEqual(200);
  });

  test('nothing to size at all is an svg_invalid GAP, not a silent null', () => {
    const { json, gaps, detail } = draw('<svg xmlns="http://www.w3.org/2000/svg"><title>empty</title></svg>');
    expect(json).toBeNull();
    expect(gaps).toEqual(['svg_invalid']);
    expect(String(detail.reason)).toContain('no viewBox');
  });

  test('U5: markup that will not PARSE is svg_invalid too, and SvgXml never sees it', () => {
    // An unclosed <g>: sizable (it has a viewBox) and still undrawable. This
    // used to reach SvgXml, whose `fallback` drew an empty View and whose
    // `onError` only warned — a blank with no gap.
    const svg = '<svg viewBox="0 0 640 260"><g><rect x="1" y="1" width="9" height="9"/></svg>';
    const { json, gaps, detail, xml } = draw(svg);
    expect(json).toBeNull();
    expect(xml).toBeUndefined();
    expect(gaps).toEqual(['svg_invalid']);
    expect(detail).toMatchObject({ bytes: svg.length, reason: 'does not parse' });
    expect(String(detail.error)).toMatch(/closing tag/);
  });

  test('bytes are UTF-8, not UTF-16 code units', () => {
    // `°` is one code unit and two bytes; the corpus check measures bytes.
    const svg = '<svg><title>30°</title></svg>';
    const got = diagramVerdict(svg);
    expect(got.ok).toBe(false);
    expect(!got.ok && got.bytes).toBe(svg.length + 1);
  });

  test('a zero-width viewBox is refused rather than divided by', () => {
    expect(diagramBox('<svg viewBox="0 0 0 260"><rect x="1" y="1" width="9" height="9"/></svg>')!.source)
      .toBe('content-bounds');
  });
});

/** The pre-S3 behaviour, restated here so the defect tests cannot go vacuous. */
function parseOnly(svg: string): unknown {
  const m = /viewBox\s*=\s*["']\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)\s*["']/.exec(svg);
  return m ? { w: Number(m[3]), h: Number(m[4]) } : null;
}
