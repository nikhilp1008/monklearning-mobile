/**
 * WHITE WAS NOT ONE COLOUR, AND ONE STRING REPLACE TREATED IT AS ONE.
 *
 * `housePalette` carried `['#ffffff', 'transparent']` alongside the nine real
 * colour swaps and applied it with `String.replace(/#ffffff/gi)`. That mapping
 * is right for exactly one thing — the background rect an authored figure
 * paints over the board's own paper — and wrong for everything else that can
 * carry the same six characters. An audit of the live corpus found 69
 * white-filled text labels across 41 segments, 39 of them sitting over a pale
 * fill or the background, so `transparent` and `#ffffff` were equally invisible
 * for them: the label was gone either way, in any renderer.
 *
 * So the question a transform has to answer is not "is this white?" but "is
 * this white thing the page?". `remapWhitePaint` answers it per element:
 *
 *   - a `rect`/`path` whose white fill covers >= BACKGROUND_AREA_SHARE (0.6) of
 *     the viewBox is the PAGE       -> transparent, as before, and asked first;
 *   - anything white over a DARK backdrop -> left exactly as authored, because
 *     that is what the author meant and, with the blanket swap gone, it is now
 *     an outcome that reaches the screen. Decided by contrast, not a threshold;
 *   - a white LABEL or STROKE anywhere else -> INK, so it draws instead of
 *     vanishing. This is the bug the pass exists for;
 *   - any other white SHAPE       -> transparent, exactly as before. Never ink:
 *     every white shape in this corpus is a knockout, and see the block that
 *     measures what inking them would have cost.
 *
 * Measured over the 1,226 stored figures: 53 render differently — 38 carrying
 * an invisible label, 10 an invisible white stroke, and the knockouts that were
 * being lost into whatever was painted behind them.
 *
 * ON VACUITY. Every case below goes through `remapped()`, which fails if the
 * matcher changed nothing — a regex pass that silently matches nothing would
 * otherwise satisfy every "renders in ink" assertion in this file by leaving
 * `#ffffff` in place and letting `paint()` read it back as something it never
 * wrote. The negative control in the first describe proves the counter can
 * still reach zero, so the guard is a guard and not a tautology.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { BoardDiagram, prepareDiagramSvg, remapWhitePaint } from '../board-diagram';

/** `INK` from classroom-chrome — spelled out so a theme edit cannot quietly
 *  make these tests agree with whatever the component now does. */
const INK = '#1C1A16';

/** 340x240 is the canvas the sizing handoff (and the threshold's derivation) is
 *  written against, so the fixtures are measured against a real one. */
const CANVAS = '0 0 340 240';

const wrap = (body: string, viewBox: string = CANVAS) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${body}</svg>`;

/**
 * The transform under test, with the vacuity guard attached: nothing downstream
 * of here can pass because no regex matched.
 */
function remapped(svg: string, atLeast: number = 1): string {
  const { svg: out, rewrites } = remapWhitePaint(svg);
  expect(rewrites).toBeGreaterThanOrEqual(atLeast);
  return out;
}

/**
 * Reads back the effective paint of one element, `style` beating the
 * presentation attribute exactly as the cascade does — so a test cannot pass by
 * reading a dead attribute the style overrides.
 */
function paint(svg: string, id: string, prop: 'fill' | 'stroke'): string | null {
  const tag = new RegExp(`<[^>]*\\sid=["']${id}["'][^>]*>`).exec(svg);
  if (!tag) throw new Error(`no element id="${id}" in ${svg}`);
  const style = /\sstyle\s*=\s*["']([^"']*)["']/.exec(tag[0]);
  if (style) {
    for (const declaration of style[1].split(';')) {
      const colon = declaration.indexOf(':');
      if (colon > 0 && declaration.slice(0, colon).trim().toLowerCase() === prop) {
        return declaration.slice(colon + 1).trim();
      }
    }
  }
  const attr = new RegExp(`\\s${prop}\\s*=\\s*["']([^"']*)["']`).exec(tag[0]);
  return attr ? attr[1] : null;
}

/* ------------------------------------------------------------------ vacuity */

describe('the matcher actually matches, and can also match nothing', () => {
  test('a figure with no white paint comes back byte-identical, zero rewrites', () => {
    // The control for every `remapped()` call below. If this reported rewrites,
    // the guard would be satisfied by any input and would prove nothing.
    const svg = wrap(
      '<rect id="page" width="340" height="240" fill="#f1f5f9"/>' +
        '<text id="label" x="20" y="30" fill="#1f2933">Vernier scale</text>' +
        '<path id="leader" d="M20 40 L80 90" fill="none" stroke="#2563eb"/>',
    );
    const { svg: out, rewrites } = remapWhitePaint(svg);
    expect(rewrites).toBe(0);
    expect(out).toBe(svg);
  });

  test('a white label is one rewrite, and the rest of the tag is untouched', () => {
    // Byte-level: proves the tag walker rebuilds everything it did not mean to
    // change — attribute order, spacing, the self-closing slash, the `d`.
    const { svg: out, rewrites } = remapWhitePaint(
      wrap(
        '<text id="label" x="20" y="30" font-size="12" fill="#ffffff">Least count</text>' +
          '<path id="leader" d="M20 40 L80 90" fill="none" stroke="#059669"/>',
      ),
    );
    expect(rewrites).toBe(1);
    expect(out).toBe(
      wrap(
        `<text id="label" x="20" y="30" font-size="12" fill="${INK}">Least count</text>` +
          '<path id="leader" d="M20 40 L80 90" fill="none" stroke="#059669"/>',
      ),
    );
  });
});

/* ------------------------------------------------- 1. the page is still stripped */

describe('a white fill that IS the page', () => {
  test('a full-bleed rect goes transparent, as it always did', () => {
    // The load-bearing case the old blanket swap existed for: left white, every
    // figure sits on a white card on cream paper.
    const out = remapped(wrap('<rect id="page" width="340" height="240" fill="#ffffff"/>'));
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('a rect sized in percentages goes transparent too', () => {
    const out = remapped(wrap('<rect id="page" width="100%" height="100%" fill="#ffffff"/>'));
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('an inset card — a 20-unit margin all round — is still the page', () => {
    // 300x200 of 340x240 = 0.735, the floor the threshold was derived from.
    const out = remapped(
      wrap('<rect id="page" x="20" y="20" width="300" height="200" fill="#FFFFFF"/>'),
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('a full-bleed PATH is the page as much as a rect is', () => {
    const out = remapped(wrap('<path id="page" d="M0 0 H340 V240 H0 Z" fill="#ffffff"/>'));
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('the page keeps its offset viewBox honest: an off-canvas slab is not a page', () => {
    // Same 340x240 rect, pushed entirely outside the viewBox. Clipped area is
    // zero, so it is not the page — shown here through its STROKE, which is the
    // paint whose two answers differ: a page's white stroke is stripped with it,
    // anything else's inks.
    const out = remapped(
      wrap('<rect id="chip" x="400" y="0" width="340" height="240"' +
           ' fill="#ffffff" stroke="#ffffff"/>', CANVAS),
    );
    expect(paint(out, 'chip', 'stroke')).toBe(INK);
  });

  test("the stripped page's own white stroke does not become an ink frame", () => {
    // The one place a white stroke must NOT ink: a border on the page would
    // draw a box around the whole figure that the author never drew.
    const out = remapped(
      wrap('<rect id="page" width="340" height="240" fill="#ffffff" stroke="#ffffff"/>'),
      2,
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
    expect(paint(out, 'page', 'stroke')).toBe('transparent');
  });
});

/* --------------------------------------------- 2. white in the drawing must draw */

describe('a white fill that is part of the DRAWING', () => {
  test('THE REGRESSION: <text fill="#ffffff"> renders in ink, not transparent', () => {
    // 69 of these in the live corpus. `transparent` and `#ffffff` were the same
    // outcome for all of them: no label.
    const out = remapped(wrap('<text id="label" x="20" y="30" fill="#ffffff">Main scale</text>'));
    expect(paint(out, 'label', 'fill')).toBe(INK);
    expect(out).not.toContain('transparent');
  });

  test('a <tspan fill="white"> is the same case one level down', () => {
    const out = remapped(
      wrap('<text x="20" y="30" fill="#1f2933">LC = <tspan id="part" fill="white">0.1 mm</tspan></text>'),
    );
    expect(paint(out, 'part', 'fill')).toBe(INK);
  });

  test('a white stroke is ink: a leader line, an arrow, an outline', () => {
    const out = remapped(
      wrap('<path id="leader" d="M20 40 L120 96" fill="none" stroke="#ffffff"/>'),
    );
    expect(paint(out, 'leader', 'stroke')).toBe(INK);
    expect(paint(out, 'leader', 'fill')).toBe('none');
  });

  test('element kind decides, not size: a full-canvas <text> still inks', () => {
    // Only a rect or a path can be the page. A `<text>` covering the canvas is
    // a heading, and the area rule must never be consulted for it.
    const out = remapped(
      wrap('<text id="label" x="0" y="230" font-size="220" fill="#ffffff">H2O</text>'),
    );
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('a white SHAPE is never inked, however small — see the block below', () => {
    // A hollow white marker on the bare board keeps the behaviour it has always
    // had. Inking it is what the corpus rejected.
    const out = remapped(
      wrap('<rect id="page" width="340" height="240" fill="#ffffff"/>' +
           '<circle id="dot" cx="40" cy="40" r="6" fill="#ffffff"/>'),
      2,
    );
    expect(paint(out, 'dot', 'fill')).toBe('transparent');
  });
});

/* ------------------------------------- 3. the threshold: page or not the page */

describe('the 0.6 threshold decides ONE thing — page or not-page', () => {
  // viewBox 100x100 = 10,000 square units, so a width is a percentage directly.
  const SQUARE = '0 0 100 100';

  /**
   * WHAT THIS BLOCK USED TO ASSERT, AND WHY IT CHANGED. Each of these cases
   * ended `toBe(INK)`: below the threshold meant "part of the drawing", and
   * part of the drawing meant ink. Swept over all 1,226 stored figures that
   * repainted 121 rects, 103 circles, 17 polygons and 4 ellipses — 194 figures
   * changing, against the 38 carrying an invisible label — and every sample
   * inspected was a knockout turning into a black hole: a bordered call-out box
   * over its own dark text, an open node dot on a vector diagram, the Ketone
   * tube captioned "Colorless", the thermometer's empty column, the slits in a
   * diffraction barrier.
   *
   * So not-page now means `transparent`, exactly as before this file existed,
   * and the threshold's whole job is to keep the page from being asked anything
   * else. What a small white shape gets instead is the backdrop question, two
   * blocks down.
   */
  test('exactly 0.6 of the viewBox counts as the page', () => {
    const out = remapped(
      wrap('<rect id="page" width="60" height="100" fill="#ffffff"/>', SQUARE),
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('0.59 does not — and takes the same transparent, by the other route', () => {
    // The two answers coincide on the bare board, which is why the threshold
    // can only ever matter over something painted. That is the next block.
    const out = remapped(
      wrap('<rect id="panel" width="59" height="100" fill="#ffffff"/>', SQUARE),
    );
    expect(paint(out, 'panel', 'fill')).toBe('transparent');
  });

  test('the page is judged FIRST, and never asks what is behind it', () => {
    // Here the two routes disagree, and the page rule has to win: a full-bleed
    // rect over a dark band must strip, not become a white sheet over the board.
    const out = remapped(
      wrap('<rect id="band" x="0" y="40" width="100" height="20" fill="#1f2933"/>' +
           '<rect id="page" width="100" height="100" fill="#ffffff"/>', SQUARE),
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('a path is measured by its real area, not its bounding box', () => {
    // A triangle spanning the canvas: bbox share 1.0, true share 0.5. Measured
    // by bbox it would be the page. Read through the STROKE, because both
    // answers give the same FILL on the bare board and a fixture that cannot
    // fail is the thing this file exists to avoid.
    const wedge = remapped(
      wrap('<path id="wedge" d="M0 0 L100 0 L0 100 Z" fill="#ffffff" stroke="#ffffff"/>',
           SQUARE),
    );
    expect(paint(wedge, 'wedge', 'stroke')).toBe(INK);          // 0.5 — not the page

    const square = remapped(
      wrap('<path id="page" d="M0 0 L100 0 L100 100 L0 100 Z" fill="#ffffff"' +
           ' stroke="#ffffff"/>', SQUARE),
    );
    expect(paint(square, 'page', 'stroke')).toBe('transparent'); // 1.0 — the page
  });

  test('a curved path is never read as the page, however big', () => {
    // No honest area for a Bézier from a regex, so it is unmeasurable and takes
    // the old blanket behaviour rather than a guess.
    const out = remapped(
      wrap('<path id="blob" d="M0 0 C100 0 100 100 0 100 Z" fill="#ffffff"/>', SQUARE),
    );
    expect(paint(out, 'blob', 'fill')).toBe('transparent');
  });
});

/* ------------- 3a. the shapes an area threshold would have painted black */

describe('a white SHAPE is never inked — the corpus said so, four ways', () => {
  /**
   * THE MEASUREMENT THIS BLOCK IS MADE OF. An area threshold applied to every
   * shape repaints 121 rects, 103 circles, 17 polygons and 4 ellipses across
   * the 1,226 stored figures — 194 of them rendering differently, against the
   * 38 that carry an invisible label. Every sample inspected was a knockout,
   * and ink turns a knockout into a black hole in the picture. The four
   * fixtures below are those samples, verbatim.
   *
   * So the not-page branch keeps `transparent`, which is what shipped before
   * any of this, and a white shape only ever changes when something DARK is
   * behind it — the next block.
   */
  const WIDE = '0 0 640 260';

  test('the Amines call-out box: 6.4% of the viewBox, and not a black slab', () => {
    // Amines / reactions of diazonium salts, segment 1, verbatim.
    const out = remapped(
      wrap('<rect id="box" x="420" y="120" width="190" height="56" rx="6"' +
           ' fill="#ffffff" stroke="#DD4433" stroke-width="2"/>' +
           '<text id="label" x="440" y="150" fill="#1f2933">Sandmeyer</text>', WIDE),
    );
    expect(paint(out, 'box', 'fill')).toBe('transparent');
    expect(paint(out, 'box', 'stroke')).toBe('#DD4433');
    // …and the dark label inside it is untouched. The box NOT being inked is
    // what keeps it readable.
    expect(paint(out, 'label', 'fill')).toBe('#1f2933');
  });

  test('an open node dot on a vector diagram stays open', () => {
    // Motion in a Plane / vector algebra, segment 0: r=12 circles marking the
    // tail and head of each vector. 103 of these would have become black blobs.
    const out = remapped(
      wrap('<circle id="node" cx="90" cy="130" r="12" fill="#ffffff"' +
           ' stroke="#1C1A16" stroke-width="2.4"/>' +
           '<text id="t" x="20" y="20" fill="#ffffff">P</text>', WIDE),
    );
    expect(paint(out, 'node', 'fill')).toBe('transparent');
    // The same figure's white LABEL is still rescued — the two rules are
    // independent, which is the whole point of deciding per element.
    expect(paint(out, 't', 'fill')).toBe(INK);
  });

  test('the Ketone tube captioned "Colorless" does not become a black tube', () => {
    // Aldehydes / distinguishing tests: the tube's contents, 2.5% of the canvas,
    // `stroke="none"`, sitting on the bare board. Ink here contradicts the
    // caption printed underneath it.
    const out = remapped(
      wrap('<rect id="tube" x="524" y="64" width="32" height="132" rx="6"' +
           ' fill="#ffffff" stroke="none"/>' +
           '<text id="cap" x="540" y="215" fill="#64748b">Colorless</text>', WIDE),
    );
    expect(paint(out, 'tube', 'fill')).toBe('transparent');
  });

  test("the thermometer's empty column stays empty", () => {
    // Thermal Properties / calorimetry, segment 4: the stem above the mercury,
    // drawn inside a pale `#f1f5f9` outline. Its backdrop is PALE, so the
    // backdrop rule does not save it and the not-page default has to.
    const out = remapped(
      wrap('<rect id="glass" x="60" y="50" width="22" height="140" rx="11"' +
           ' fill="#f1f5f9" stroke="#1f2933" stroke-width="2.4"/>' +
           '<rect id="stem" x="64" y="55" width="14" height="135" rx="7"' +
           ' fill="#ffffff" stroke="none"/>' +
           '<rect id="mercury" x="64" y="130" width="14" height="60" rx="7"' +
           ' fill="#dc2626" stroke="none"/>', WIDE),
    );
    expect(paint(out, 'stem', 'fill')).toBe('transparent');
  });

  test('a white-on-white marker still gets its outline back', () => {
    // The one thing the not-page default must NOT do: leave an element with
    // nothing drawn at all. Fill strips as ever; the stroke inks, because the
    // stroke exception belongs to the PAGE and this is not the page.
    const out = remapped(
      wrap('<rect id="mark" x="300" y="98" width="10" height="14"' +
           ' fill="#ffffff" stroke="#fff"/>', WIDE),
      2,
    );
    expect(paint(out, 'mark', 'fill')).toBe('transparent');
    expect(paint(out, 'mark', 'stroke')).toBe(INK);
  });
});

/* ------------------------------------------------- 4. the forms that must be caught */

describe('case and shorthand variants', () => {
  const FORMS = ['#ffffff', '#FFFFFF', '#fFfFfF', '#fff', '#FFF', '#ffff', '#FFFFFFFF', 'white', 'WHITE', 'White'];

  test.each(FORMS)('a label written fill="%s" inks', (form) => {
    const out = remapped(wrap(`<text id="label" x="8" y="20" fill="${form}">Anode</text>`));
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test.each(FORMS)('a full-bleed rect written fill="%s" still goes transparent', (form) => {
    const out = remapped(wrap(`<rect id="page" width="340" height="240" fill="${form}"/>`));
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('single quotes are preserved, not normalised', () => {
    const out = remapped(wrap("<text id='label' x='8' y='20' fill='#FFF'>Anode</text>"));
    expect(out).toContain(`fill='${INK}'`);
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('fill inside a style attribute is caught', () => {
    const out = remapped(wrap('<text id="label" x="8" y="20" style="fill:#ffffff">Cathode</text>'));
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('a style attribute carrying both paints, spaced and shorthand', () => {
    const out = remapped(
      wrap('<text id="label" x="8" y="20" style="font-weight:600; fill: #FFF; stroke: white">Cl-</text>'),
      2,
    );
    expect(paint(out, 'label', 'fill')).toBe(INK);
    expect(paint(out, 'label', 'stroke')).toBe(INK);
    // Untouched declarations survive the rebuild.
    expect(out).toContain('font-weight:600');
  });

  test('a page declared through style is still the page', () => {
    const out = remapped(wrap('<rect id="page" width="340" height="240" style="fill:#FFF"/>'));
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('style beats the attribute, as the cascade says', () => {
    // The effective fill is white, so the element is classified on white — and
    // the dead attribute is left exactly as authored rather than "fixed".
    const out = remapped(wrap('<text id="label" x="8" y="20" fill="#1f2933" style="fill:white">Na+</text>'));
    expect(paint(out, 'label', 'fill')).toBe(INK);
    expect(out).toContain('fill="#1f2933"');
  });

  test('near-misses and lookalike attributes are left alone', () => {
    // `#fefefe` is not white; `fill-opacity`/`stroke-width` are not paints;
    // `rgb(255,255,255)` is documented as out of scope.
    const svg = wrap(
      '<rect id="near" width="340" height="240" fill="#fefefe" fill-opacity="1"/>' +
        '<text id="label" x="8" y="20" fill="rgb(255,255,255)" stroke-width="1">Ne</text>' +
        '<text id="real" x="8" y="40" fill="#ffffff">Ar</text>',
    );
    const out = remapped(svg);
    expect(paint(out, 'near', 'fill')).toBe('#fefefe');
    expect(paint(out, 'label', 'fill')).toBe('rgb(255,255,255)');
    expect(out).toContain('fill-opacity="1"');
    expect(out).toContain('stroke-width="1"');
    // …and the one real white label in the same document was still fixed, so
    // this is a test of selectivity rather than of doing nothing.
    expect(paint(out, 'real', 'fill')).toBe(INK);
  });
});

/* ----------------------------------------------- 5. the documented limits, asserted */

describe('what it deliberately does not do', () => {
  test('a white fill on a <g> keeps the old blanket transparent', () => {
    // Inking a container would turn a `<rect>` that inherits it into a black
    // page. The cost is a `<text>` inheriting white, which stays invisible —
    // the one part of the bug this pass does not claim to fix.
    const out = remapped(wrap('<g id="layer" fill="#ffffff"><rect width="340" height="240"/></g>'));
    expect(paint(out, 'layer', 'fill')).toBe('transparent');
  });

  test('a container transform parks rect/path fills, but labels are still fixed', () => {
    // An ancestor scale can turn a 34x24 rect into the page and no regex can
    // see it, so in a document with one the rect keeps `transparent` — while
    // the white label in the same document still inks.
    const out = remapped(
      wrap(
        '<g transform="scale(10)">' +
          '<rect id="page" width="34" height="24" fill="#ffffff"/>' +
          '<text id="label" x="2" y="4" fill="#ffffff">x</text>' +
          '</g>',
      ),
      2,
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('a gradient stop keeps its white', () => {
    // The old swap wrote `stop-color="transparent"`, which was never right for
    // a stop either. Out of scope, and now visibly so.
    const svg = wrap(
      '<defs><linearGradient id="g"><stop id="s" offset="0" stop-color="#ffffff"/></linearGradient></defs>' +
        '<text id="label" x="8" y="20" fill="#ffffff">Field</text>',
    );
    const out = remapped(svg);
    expect(out).toContain('stop-color="#ffffff"');
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('no viewBox: nothing is measurable, so no rect fill is inked', () => {
    // `BoardDiagram` drops such a figure before it draws, but the transform
    // runs first and must not turn an unmeasured page black.
    const { svg: out } = remapWhitePaint(
      '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="240">' +
        '<rect id="page" width="340" height="240" fill="#ffffff"/>' +
        '<text id="label" x="8" y="20" fill="#ffffff">Label</text></svg>',
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });
});

/* --------------------- 5a. a label whose backdrop is dark was right all along */

describe('a white label on a dark backdrop STAYS white', () => {
  /**
   * The case this pass would otherwise have broken while claiming to fix it.
   * `Thermal Properties of Matter / radiation and Stefan's law` seg 1 puts a
   * radius label INSIDE the black body it measures — white because the backdrop
   * is black. Ink there is as invisible as the blanket `transparent` was.
   *
   * The decision is contrast, not a threshold: whichever of white and INK reads
   * better against what is behind the baseline. Three of the corpus's 69 white
   * labels take this branch; the other 66 still ink.
   */
  const BODY = '0 0 640 260';

  test('the Stefan fixture: the label inside the black body keeps its white', () => {
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<circle id="body" cx="120" cy="120" r="52" fill="#1f2933"/>' +
           '<text id="r" x="128" y="112" fill="#ffffff">r = 5 cm</text>', BODY),
    );
    expect(paint(out, 'r', 'fill')).toBe('#ffffff');
    // …and the page is still stripped, so the rewrite the guard counted is that
    // one and this test is not passing because nothing ran.
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('a label just OUTSIDE the same body still inks', () => {
    const out = remapped(
      wrap('<circle id="body" cx="120" cy="120" r="52" fill="#1f2933"/>' +
           '<text id="r" x="200" y="112" fill="#ffffff">r = 5 cm</text>', BODY),
    );
    expect(paint(out, 'r', 'fill')).toBe(INK);
  });

  test('contrast decides, so the house red keeps white and a pale fill inks', () => {
    // #dc2626 -> white 4.25 : ink 4.02. It is close, and it is the author's
    // choice, and white is the side that wins.
    // Both fixtures carry the page rect, so the vacuity guard has a rewrite to
    // count in the case whose whole point is that the LABEL is not rewritten.
    const red = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<circle id="q" cx="100" cy="100" r="30" fill="#dc2626"/>' +
           '<text id="label" x="100" y="100" fill="#ffffff">+q</text>', BODY),
    );
    expect(paint(red, 'label', 'fill')).toBe('#ffffff');

    const pale = remapped(
      wrap('<rect id="wash" x="0" y="0" width="200" height="200" fill="#dbeafe"/>' +
           '<text id="label" x="100" y="100" fill="#ffffff">+q</text>', BODY),
    );
    expect(paint(pale, 'label', 'fill')).toBe(INK);
  });

  test('document order: a pale shape drawn over a dark one is what is behind', () => {
    const out = remapped(
      wrap('<circle id="body" cx="100" cy="100" r="60" fill="#1f2933"/>' +
           '<rect id="card" x="60" y="60" width="80" height="80" fill="#f1f5f9"/>' +
           '<text id="label" x="100" y="100" fill="#ffffff">T</text>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('…and a dark shape drawn over a pale one wins for the same reason', () => {
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<rect id="card" x="60" y="60" width="80" height="80" fill="#f1f5f9"/>' +
           '<circle id="body" cx="100" cy="100" r="60" fill="#1f2933"/>' +
           '<text id="label" x="100" y="100" fill="#ffffff">T</text>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe('#ffffff');
  });

  test('a shape drawn AFTER the label is not behind it', () => {
    // Painter's order: this disc covers the label rather than backing it, so
    // the label is judged against the board and inks.
    const out = remapped(
      wrap('<text id="label" x="100" y="100" fill="#ffffff">T</text>' +
           '<circle id="body" cx="100" cy="100" r="60" fill="#1f2933"/>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('a POLYGON is placed by its centroid: the ferromagnet arrowheads', () => {
    // Magnetism and Matter / diamagnetic, paramagnetic and ferromagnetic
    // materials, segment 5: the aligned moments inside a #2563eb domain block.
    // 16 arrowheads in that one figure, every one of them white on blue, and
    // `transparent` there shows the blue rather than the board.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<rect id="domain" x="360" y="66" width="70" height="40" rx="3"' +
           ' fill="#2563eb" stroke="#1f2933" stroke-width="2"/>' +
           '<polygon id="head" points="390,80 386,77 386,83" fill="#ffffff"/>', BODY),
    );
    expect(paint(out, 'head', 'fill')).toBe('#ffffff');
  });

  test('a CIRCLE is placed by its centre: the holes in a cathode', () => {
    // Atomic Structure / discovery of subatomic particles: r=4 holes punched
    // through the cathode plate. Written `#64748b`, which white reads better
    // on — but PAINTED `#9C988C`, which it does not, so the hole is stripped
    // and shows the plate's own grey. Either answer is legible here; the point
    // is that the colour consulted is the one that reaches the screen.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<rect id="cathode" x="60" y="70" width="20" height="100" fill="#64748b"' +
           ' stroke="#1f2933" stroke-width="2.4"/>' +
           '<circle id="hole" cx="70" cy="100" r="4" fill="#ffffff"' +
           ' stroke="#1f2933" stroke-width="1.4"/>', BODY),
    );
    expect(paint(out, 'hole', 'fill')).toBe('transparent');
  });

  test('the backdrop is judged AS PAINTED: the Rolle step discs', () => {
    // `Continuity / Rolle's theorem` seg 2 numbers its steps inside `#059669`
    // discs. Authored, that green says ink (4.54 : 3.77); painted `#157A45` it
    // says white (5.45 : 3.20). Three labels turned on this one swap.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<circle id="step" cx="40" cy="84" r="9" fill="#059669"/>' +
           '<text id="n" x="40" y="89" font-size="14" fill="#ffffff"' +
           ' text-anchor="middle">1</text>', BODY),
    );
    expect(paint(out, 'n', 'fill')).toBe('#ffffff');
  });

  test('a LINE is placed by its midpoint, and its white stroke is kept', () => {
    // Plant Kingdom / bryophytes: the neck canal drawn white down the middle of
    // a coloured archegonium. A stroke is the other paint the rule has to reach.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<rect id="flask" x="255" y="75" width="35" height="60" fill="#2563eb"/>' +
           '<line id="canal" x1="270" y1="80" x2="270" y2="100" stroke="#ffffff"' +
           ' stroke-width="2"/>', BODY),
    );
    expect(paint(out, 'canal', 'stroke')).toBe('#ffffff');
  });

  test('…and the same line on the bare board inks, as a leader line should', () => {
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<line id="leader" x1="20" y1="20" x2="120" y2="20" stroke="#ffffff"' +
           ' stroke-width="2"/>', BODY),
      2,
    );
    expect(paint(out, 'leader', 'stroke')).toBe(INK);
  });

  test('a dark PATH counts too, by the chords between its vertices', () => {
    const out = remapped(
      wrap('<path id="wedge" d="M0 0 L200 0 L200 200 Z" fill="#1f2933"/>' +
           '<text id="in" x="150" y="100" fill="#ffffff">T</text>' +
           '<text id="out" x="60" y="100" fill="#ffffff">T</text>', BODY),
    );
    expect(paint(out, 'in', 'fill')).toBe('#ffffff');
    // …and the other side of the same diagonal is not inside it.
    expect(paint(out, 'out', 'fill')).toBe(INK);
  });

  test("the Stefan pot: a curve's ENDPOINTS are enough to contain a label", () => {
    // `Thermal / radiation and Stefan's law` seg 4, verbatim: "dull black"
    // written inside a Q-cornered black pot. This is the label the path branch
    // exists for, and `pathAreaShare` refuses the same `d` outright.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<path id="pot" d="M60 90 L60 190 Q60 205 75 205 L165 205' +
           ' Q180 205 180 190 L180 90 Z" fill="#1f2933" stroke="#1f2933"/>' +
           '<text id="label" x="120" y="160" fill="#ffffff"' +
           ' text-anchor="middle">dull black</text>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe('#ffffff');
  });

  test('an ARC keeps its endpoint: the flags in front of it are not coordinates', () => {
    // `A rx ry rotation large-arc sweep x y` — seven numbers, and only the last
    // two are a point. Reading the pair at the wrong offset puts the outline
    // somewhere else entirely, silently.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<path id="dish" d="M20 20 A 80 80 0 1 1 20 180 L180 180 L180 20 Z"' +
           ' fill="#1f2933"/>' +
           '<text id="label" x="120" y="120" fill="#ffffff">T</text>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe('#ffffff');
  });

  test('a transform on the label parks the question, and it inks', () => {
    const out = remapped(
      wrap('<circle id="body" cx="100" cy="100" r="60" fill="#1f2933"/>' +
           '<text id="label" x="100" y="100" transform="translate(300,0)"' +
           ' fill="#ffffff">T</text>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('a label with no x/y cannot be placed, and it inks', () => {
    const out = remapped(
      wrap('<circle id="body" cx="100" cy="100" r="60" fill="#1f2933"/>' +
           '<text id="label" dx="4" fill="#ffffff">T</text>', BODY),
    );
    expect(paint(out, 'label', 'fill')).toBe(INK);
  });

  test('a SHAPE on a dark backdrop keeps its white too, and for a sharper reason', () => {
    // `Wave Optics / diffraction of light` seg 8 punches its slits out of the
    // barrier: <rect …180 tall fill="#1f2933"/> then <rect …14 tall
    // fill="#ffffff"/>. Over a painted shape `transparent` shows THAT shape, not
    // the board, so the slit vanishes — which is what the blanket swap did — and
    // ink loses it again in the barrier's own colour. Only the authored white
    // draws a slit, so a white shape over a dark backdrop is left alone.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<rect id="barrier" x="40" y="40" width="10" height="180" fill="#1f2933"/>' +
           '<rect id="slit" x="40" y="98" width="10" height="14" fill="#ffffff"/>', BODY),
    );
    expect(paint(out, 'slit', 'fill')).toBe('#ffffff');
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });

  test('…but the same mark on the bare board is stripped, not kept', () => {
    // The other half, so the rule above is a decision and not a blanket. On the
    // board `transparent` and `#ffffff` look alike, so this is not a visible
    // difference — it is the one that proves the backdrop was actually read.
    const out = remapped(
      wrap('<rect id="page" width="640" height="260" fill="#ffffff"/>' +
           '<rect id="mark" x="300" y="98" width="10" height="14" fill="#ffffff"/>', BODY),
      2,
    );
    expect(paint(out, 'mark', 'fill')).toBe('transparent');
  });

  test('a page stays a page even if something dark is behind its centre', () => {
    // The page is judged first and never asks. A figure that paints a dark band
    // and then a full-bleed white rect over it is malformed, but the answer must
    // still be `transparent` rather than a white sheet over the whole board.
    const out = remapped(
      wrap('<rect id="band" x="0" y="100" width="640" height="60" fill="#1f2933"/>' +
           '<rect id="page" width="640" height="260" fill="#ffffff"/>', BODY),
    );
    expect(paint(out, 'page', 'fill')).toBe('transparent');
  });
});

/* ------------------------------------------------------- 6. the assembled pipeline */

describe('the whole transform, and the component that uses it', () => {
  /** One figure carrying all four verdicts: page, backdrop, and a white label
   *  on each side of the contrast decision. */
  const FIGURE = wrap(
    '<rect id="page" width="340" height="240" fill="#ffffff"/>' +
      '<rect id="bar" x="20" y="40" width="80" height="160" fill="#2563eb"/>' +
      '<text id="over" x="30" y="120" fill="#ffffff">25 cm</text>' +
      '<text id="beside" x="150" y="120" fill="#ffffff">scale</text>' +
      '<path id="leader" d="M110 120 L180 120" fill="none" stroke="#ffffff"/>',
  );

  test('prepareDiagramSvg: font attached, nine colours mapped, white judged', () => {
    const out = prepareDiagramSvg(FIGURE);
    expect(out).toContain('font-family="Onest_400Regular"');
    expect(paint(out, 'page', 'fill')).toBe('transparent');
    expect(paint(out, 'bar', 'fill')).toBe('#9A6A12');
    // `over` sits on the bar, which is dark whichever end of the palette swap
    // you measure (#2563eb -> #9A6A12), so white beats ink and it is left alone.
    expect(paint(out, 'over', 'fill')).toBe('#ffffff');
    // `beside` is on the page, where ink beats white by more than 10x.
    expect(paint(out, 'beside', 'fill')).toBe(INK);
    expect(paint(out, 'leader', 'stroke')).toBe(INK);
    // The ink the white pass wrote is not itself a palette key, so the flat
    // swap that runs after it cannot re-map it — and the only `#ffffff` left in
    // the string is the label that was deliberately kept.
    expect(out.match(/#ffffff/gi)).toHaveLength(1);
  });

  test('the component hands the judged string to SvgXml, so the fix is WIRED', () => {
    // Exporting a correct transform that the component never calls is this
    // file's other way of passing for nothing.
    let tree: TestRenderer.ReactTestRenderer | null = null;
    act(() => {
      tree = TestRenderer.create(
        <BoardDiagram svg={FIGURE} caption="Vernier callipers" availableWidth={700} maxHeight={300} />,
      );
    });
    const rendered = tree as unknown as TestRenderer.ReactTestRenderer;
    const carriers = rendered.root.findAll((node) => typeof node.props.xml === 'string');
    expect(carriers.length).toBeGreaterThan(0);
    const xml: string = carriers[0].props.xml;
    expect(paint(xml, 'beside', 'fill')).toBe(INK);
    expect(paint(xml, 'over', 'fill')).toBe('#ffffff');
    expect(paint(xml, 'page', 'fill')).toBe('transparent');
    act(() => rendered.unmount());
  });
});
