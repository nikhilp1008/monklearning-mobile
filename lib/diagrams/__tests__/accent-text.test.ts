/**
 * VECTOR HATS IN A DRAWING'S TEXT (iPhone, 2026-11-05).
 *
 * k̂ is a k and U+0302; Onest's mark has no advance and is centred on its own
 * origin, and react-native-svg lays it out as a glyph of its own, so the hat
 * floated beside the k. placeHats sets it by hand: a tspan back half a letter
 * and up, in a start-anchored label whose x is worked out from Onest's widths.
 */
import { Platform } from 'react-native';

import { placeHats, textWidthEm } from '@/lib/diagrams/accent-text';
import { prepareDiagramSvg } from '@/components/board-diagram';

const K = 'k̂';
const doc = (inner: string) => `<svg viewBox="0 0 360 60" width="360" height="60">${inner}</svg>`;
const only = (svg: string) => /<text\b[^>]*>.*<\/text>/.exec(svg)![0];

describe('placeHats', () => {
  it('leaves a drawing with no hat byte for byte', () => {
    const svg = doc('<text x="180" y="38" font-size="26" text-anchor="middle">k × î</text>');
    expect(placeHats(svg)).toBe(svg);
  });

  it('puts the hat in a tspan of its own, back half the k and raised', () => {
    const out = only(placeHats(doc(`<text x="20" y="38" font-size="26">${K}</text>`)));
    // k is 0.52 em wide in Onest: half of it back, and the hat on its own tspan
    expect(out).toContain('<tspan>k</tspan>');
    expect(out).toContain('<tspan dx="-0.26em" dy="-0.2em">̂</tspan>');
    expect(out).toContain('x="20"');
    expect(out).not.toContain('k̂');
  });

  it('puts the run after a hat back on the baseline, where the letter ended', () => {
    const out = only(placeHats(doc(`<text x="20" y="38" font-size="26">${K} × î</text>`)));
    expect(out).toContain('<tspan dx="0.26em" dy="0.2em"> × î</tspan>');
  });

  it('keeps î and ĵ as they are: NFC makes them single characters', () => {
    const svg = doc('<text x="20" y="38" font-size="26">î ĵ</text>');
    expect(placeHats(svg)).toBe(svg.replace('î ĵ', 'î ĵ'));
  });

  it('turns a centred label into a start-anchored one that sits where it sat', () => {
    const label = `${K} × î`;
    const out = only(placeHats(doc(`<text x="180" y="38" font-size="26" text-anchor="middle">${label}</text>`)));
    const width = textWidthEm('k × î') * 26;
    expect(out).toContain('text-anchor="start"');
    expect(out).not.toContain('middle');
    expect(Number(/ x="([\d.]+)"/.exec(out)![1])).toBeCloseTo(180 - width / 2, 2);
  });

  it('turns an end-anchored label the same way, by the whole width', () => {
    const out = only(placeHats(doc(`<text x="340" y="38" font-size="20" text-anchor="end">A = ${K}</text>`)));
    expect(Number(/ x="([\d.]+)"/.exec(out)![1])).toBeCloseTo(340 - textWidthEm('A = k') * 20, 2);
  });

  it('reads the anchor out of a style attribute too', () => {
    const out = only(placeHats(doc(`<text x="100" y="38" font-size="20" style="fill:#000;text-anchor:middle">${K}</text>`)));
    expect(out).toContain('text-anchor="start"');
    expect(out).not.toMatch(/style="[^"]*text-anchor/);
  });

  it('widens a bold label', () => {
    const out = only(placeHats(doc(`<text x="100" y="38" font-size="20" font-weight="bold" text-anchor="middle">${K}</text>`)));
    expect(Number(/ x="([\d.]+)"/.exec(out)![1])).toBeCloseTo(100 - (0.52 * 1.06 * 20) / 2, 2);
  });

  it('reads a numeric character reference for the mark', () => {
    const out = only(placeHats(doc('<text x="20" y="38" font-size="26">k&#x302;</text>')));
    expect(out).toContain('<tspan dx="-0.26em" dy="-0.2em">̂</tspan>');
  });

  it('sets two hats in one label', () => {
    const out = only(placeHats(doc('<text x="20" y="38" font-size="26">r̂ · n̂</text>')));
    expect(out.match(/dy="-0\.2em"/g)).toHaveLength(2);
  });

  it('escapes what it writes back', () => {
    const out = only(placeHats(doc(`<text x="20" y="38" font-size="26">a &lt; ${K} &amp; b</text>`)));
    expect(out).toContain('a &lt; k</tspan>');
    expect(out).toContain('&amp; b</tspan>');
  });

  describe('leaves alone what it cannot place', () => {
    it.each([
      ['a text with its own tspans', `<text x="20" y="38" font-size="26"><tspan>${K}</tspan></text>`],
      ['a list of x values', `<text x="20 40" y="38" font-size="26">${K}</text>`],
      ['a size in em', `<text x="20" y="38" font-size="1.2em">${K}</text>`],
      ['no size at all', `<text x="20" y="38">${K}</text>`],
      ['a dx of its own', `<text x="20" y="38" font-size="26" dx="4">${K}</text>`],
      ['an anchor it does not know', `<text x="20" y="38" font-size="26" text-anchor="inherit">${K}</text>`],
      ['a mark with nothing under it', '<text x="20" y="38" font-size="26">̂</text>'],
    ])('%s', (_name, text) => {
      expect(placeHats(doc(text))).toBe(doc(text));
    });

    it('an anchor set on a parent that the text inherits', () => {
      const svg = doc(`<g text-anchor="middle"><text x="180" y="38" font-size="26">${K}</text></g>`);
      expect(placeHats(svg)).toBe(svg);
    });

    it('but a text with an anchor of its own is placed even then', () => {
      const svg = doc(`<g text-anchor="middle"><text x="180" y="38" font-size="26" text-anchor="start">${K}</text></g>`);
      expect(placeHats(svg)).not.toBe(svg);
    });
  });
});

describe('the board diagram', () => {
  const svg = doc(`<text x="20" y="38" font-size="26" fill="#1C1A16">${K}</text>`);
  const withOS = (os: 'ios' | 'android', run: () => void) => {
    const was = Platform.OS;
    Object.defineProperty(Platform, 'OS', { configurable: true, get: () => os });
    try {
      run();
    } finally {
      Object.defineProperty(Platform, 'OS', { configurable: true, get: () => was });
    }
  };

  it('sets hats before the font goes on, on iOS', () => {
    withOS('ios', () => {
      const out = prepareDiagramSvg(svg);
      expect(out).toContain('font-family="Onest_400Regular"');
      expect(out).toContain('dx="-0.26em"');
    });
  });

  it('leaves the mark to the text engine on Android, which already puts it over its letter', () => {
    withOS('android', () => {
      const out = prepareDiagramSvg(svg);
      expect(out).toContain(K);
      expect(out).not.toContain('dx=');
    });
  });
});
