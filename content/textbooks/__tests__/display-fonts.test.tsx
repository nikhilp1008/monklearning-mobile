/**
 * EVERY CHARACTER IS DRAWN BY THE FONT THE APP CHOSE FOR IT.
 *
 * A character the chosen font lacks is drawn by whatever font the phone has,
 * and on Android that went wrong in ways a reader notices: ⇒ ↔ ⇌ came out
 * half-height and pale in the reading text, a raised 1 was a bare stroke so
 * ¹¹B read as a ditto mark (Android review of Chemistry 11, 2026-10-30).
 * So every string of every book chapter is drawn here exactly as the app
 * draws it (the reader's look, and the Formula sheet's and Key points' STIX
 * look), and each character is checked against the real .ttf of the font it
 * landed in. A few fallbacks are known and harmless; they are listed with why.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import TestRenderer, { act } from 'react-test-renderer';

import { Markup, STIX } from '@/components/textbook/markup';
import { KEY_POINTS } from '@/lib/revise/keypoints';
import type { Block, Chapter } from '@/lib/textbooks';
import { BOOK_CHAPTERS } from '../test-support/book-list';
import androidRoboto from '../test-support/android-roboto.json';
import { font, type FontName } from '../test-support/font-file';

jest.mock('@/constants/scale', () => ({ useScale: () => ({ scale: (n: number) => n }) }));

type Json = TestRenderer.ReactTestRendererJSON;

/** "physics|11|1" (as lib/revise/use-chapter.ts, without its network imports). */
const chapterKey = (c: Chapter) => `${c.subject.toLowerCase()}|${(/\d+/.exec(c.klass) ?? [''])[0]}|${Number(c.chapter)}`;

const FAMILY: Record<string, FontName> = {
  Onest_400Regular: 'onestRegular',
  Onest_500Medium: 'onestRegular',
  Onest_600SemiBold: 'onestSemiBold',
  Onest_700Bold: 'onestBold',
  [STIX.regular]: 'stixRegular',
  [STIX.italic]: 'stixItalic',
  [STIX.semibold]: 'stixSemiBold',
  [STIX.semiboldItalic]: 'stixSemiBoldItalic',
  [STIX.math]: 'stixMath',
};

/** Not drawn as glyphs of their own: spaces, joiners, and the marks that sit on a letter. */
const INVISIBLE = /[\s\u00a0\u2005\u2009\u200a\u200b\u2060\ufe0e\ufe0f]/;

/**
 * Android's first fallback. The reading font, Onest, has no Greek, √ or ∫:
 * Android draws those with Roboto, a sans-serif that sits well beside Onest
 * (seen on the emulator across Physics and Chemistry). Past Roboto, Android
 * goes to a thin symbols font, which is what drew ⇒ ⇌ ↔ half-height and pale.
 * So in the reader a character Onest lacks must be one Roboto has.
 */
const ROBOTO = androidRoboto.ranges as [number, number][];
const inRoboto = (cp: number) => ROBOTO.some(([a, b]) => cp >= a && cp <= b);

/**
 * Fallbacks that are fine, with the reason. Everything else must be in its font.
 * (Kept short on purpose: each entry was looked at on the Android emulator.)
 */
export const ALLOWED_FALLBACK: Record<string, string> = {
  '✗': "the app's own wrong-mark (MCQ ✗, watch-out ✗, the book's ✓/✗ ticks): no app font has it; Android draws it from its symbols font, seen fine on the emulator",
};

type Miss = { count: number; where: string };

function drawChars(html: string, look: 'pilot' | 'stix', family: string, onChar: (ch: string, fam: string) => void) {
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<Markup html={html} size={16} look={look} style={{ fontFamily: family }} />);
  });
  const walk = (n: Json | string, fam: string) => {
    if (typeof n === 'string') {
      for (const ch of n) if (!INVISIBLE.test(ch)) onChar(ch, fam);
      return;
    }
    const own = (StyleSheet.flatten(n.props.style as never) as { fontFamily?: string } | undefined)?.fontFamily;
    for (const c of n.children ?? []) walk(c as Json | string, own ?? fam);
  };
  const json = r.toJSON();
  (Array.isArray(json) ? json : json ? [json] : []).forEach((n) => walk(n, family));
  act(() => r.unmount());
}

/** The text of a block, in the look it is shown in: everything in the reader; formulas also on the Formula sheet. */
function texts(b: Block): { html: string; stix: boolean }[] {
  const out: { html: string; stix: boolean }[] = [];
  const add = (v: unknown, stix = false) => {
    if (typeof v === 'string') out.push({ html: v, stix });
    else if (Array.isArray(v)) v.forEach((x) => add(x, stix));
    else if (v && typeof v === 'object')
      for (const [k, x] of Object.entries(v)) if (!['t', 'id', 'fig', 'n', 'correct'].includes(k)) add(x, stix);
  };
  add(b);
  if (b.t === 'formula') add([b.kicker, b.main, b.legend], true);
  return out;
}

describe('every character is in the font the app draws it with', () => {
  const missing = new Map<string, Miss>();
  const note = (ch: string, fam: string, where: string) => {
    const name = FAMILY[fam];
    if (!name) throw new Error(`unknown font family ${fam} (${where})`);
    const cp = ch.codePointAt(0)!;
    if (font(name).has(cp)) return;
    if (name.startsWith('onest') && inRoboto(cp)) return;
    const key = `${ch} U+${ch.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0')} not in ${name}`;
    const m = missing.get(key) ?? { count: 0, where };
    m.count++;
    missing.set(key, m);
  };

  beforeAll(() => {
    for (const chapter of BOOK_CHAPTERS) {
      const name = `${chapter.subject} ${chapter.klass} Ch ${Number(chapter.chapter)}`;
      chapter.topics.forEach((topic) => {
        drawChars(topic.title, 'pilot', 'Onest_600SemiBold', (c, f) => note(c, f, `${name} ${topic.n} title`));
        topic.blocks.forEach((b) =>
          texts(b).forEach(({ html, stix }) => {
            const where = `${name} ${topic.n} ${b.t}: ${html.replace(/<[^>]*>/g, '').slice(0, 60)}`;
            drawChars(html, 'pilot', 'Onest_400Regular', (c, f) => note(c, f, where));
            if (stix) drawChars(html, 'stix', STIX.regular, (c, f) => note(c, f, `[card] ${where}`));
          }),
        );
      });
      for (const p of KEY_POINTS[chapterKey(chapter)] ?? [])
        for (const html of [p.q, p.a, p.why, p.say]) if (html) drawChars(html, 'stix', STIX.regular, (c, f) => note(c, f, `${name} key point: ${html.replace(/<[^>]*>/g, '').slice(0, 60)}`));
    }
  });

  it('draws no character with a phone font, apart from the known harmless ones', () => {
    const bad = [...missing.entries()].filter(([k]) => !ALLOWED_FALLBACK[k.split(' ')[0]]);
    if (process.env.FONT_REPORT) console.log([...missing.entries()].sort((a, b) => b[1].count - a[1].count).map(([k, m]) => `${k} ×${m.count} — e.g. ${m.where}`).join('\n'));
    expect(bad.map(([k, m]) => `${k} ×${m.count} — e.g. ${m.where}`)).toEqual([]);
  });
});
