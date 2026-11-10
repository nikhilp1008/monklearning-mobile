import { Canvas, Circle, FractalNoise, Group, LinearGradient, Path, RadialGradient, Rect, Skia, vec } from '@shopify/react-native-skia';
import { LinearGradient as LG } from 'expo-linear-gradient';
import { memo, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MonkLogo } from '@/components/monk-logo';

/**
 * OUR TEXTBOOK COVERS (Nikhil, 9 Nov 2026): one fixed system for every book.
 *
 * We do not license NCERT's covers, so these are ours, built so a student
 * still reads them at a glance as "my textbook". The rules are fixed; a new
 * book follows them and nothing is redesigned:
 *
 * 1. LAYOUT: "TEXTBOOK FOR CLASS XI" across the top, the subject in a serif
 *    (STIX Two, the face printed science uses), a short gold rule, the art
 *    below and bleeding off the cover, our logo small at the foot.
 * 2. COLOUR: one per subject per class, from the colour family students
 *    already link to each book (`PALETTE`).
 * 3. ONE PICTURE PER BOOK, in the same hand: Class 11 Physics an orbiting
 *    planet, Chemistry rings, Maths a triangle and circle, Biology a leaf;
 *    Class 12 Physics a lens and its rays, Chemistry a test tube, Maths the
 *    area under a curve, Biology the double helix.
 * 4. TWO INKS: gold and white, the white printed slightly off the gold
 *    (misregistered), with halftone dots and paper grain, so the cover feels
 *    printed rather than drawn.
 * 5. A BOOK, NOT A CARD: a spine fold down the left and the page block showing
 *    at the right and bottom.
 *
 * Covers never change with content; only the chapter count under them does.
 */

export type BookSubject = 'physics' | 'chemistry' | 'mathematics' | 'biology';
export type BookLevel = 11 | 12;

export const BOOK_NAME: Record<BookSubject, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Mathematics',
  biology: 'Biology',
};

type Inks = { a: string; b: string; light: string; deep: string };
const PALETTE: Record<BookSubject, Record<BookLevel, Inks>> = {
  physics: {
    11: { a: '#2A5A9C', b: '#132B52', light: '#8FB7E8', deep: '#0B1B36' },
    12: { a: '#5E3E95', b: '#2E1D55', light: '#B9A3E3', deep: '#1B1036' },
  },
  chemistry: {
    11: { a: '#2A9160', b: '#11492E', light: '#9FD8B4', deep: '#0A2E1C' },
    12: { a: '#A83E3E', b: '#5E1C20', light: '#EBA9A3', deep: '#3A0F12' },
  },
  mathematics: {
    11: { a: '#2192C4', b: '#0E4C6E', light: '#9ED7F0', deep: '#082F45' },
    12: { a: '#C47A2C', b: '#6E3F12', light: '#F2C894', deep: '#3D2208' },
  },
  biology: {
    11: { a: '#7E8C34', b: '#454F18', light: '#D3DC9A', deep: '#262C0B' },
    12: { a: '#3C8C7C', b: '#1C4D43', light: '#A6DCCF', deep: '#0E2C26' },
  },
};

const GOLD = '#F2B23A';
const WHITE = '#FFFFFF';
/** The 100-wide box every drawing is made in. */
const BOX_W = 100;

/** A wobble that is the same on every render, so the "hand" never jitters. */
const wob = (i: number, s: number) => Math.sin(i * 12.9898 + s * 78.233) * 0.5 + Math.sin(i * 4.1 + s) * 0.5;

function roughCircle(cx: number, cy: number, r: number, seed: number, amp = 1, rx = 1, ry = 1) {
  let d = '';
  for (let i = 0; i <= 64; i++) {
    const t = (i / 64) * Math.PI * 2;
    const rr = r + wob(i, seed) * amp;
    d += `${i ? 'L' : 'M'}${(cx + Math.cos(t) * rr * rx).toFixed(2)} ${(cy + Math.sin(t) * rr * ry).toFixed(2)}`;
  }
  return d;
}
function roughLine(pts: [number, number][], seed: number, amp = 0.6) {
  let d = '';
  for (let s = 0; s < pts.length - 1; s++) {
    const [x1, y1] = pts[s];
    const [x2, y2] = pts[s + 1];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const x = x1 + (x2 - x1) * t + wob(i + s * 11, seed) * amp;
      const y = y1 + (y2 - y1) * t + wob(i + s * 11, seed + 3) * amp;
      d += `${d ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }
  return d;
}
function roughWave(x0: number, x1: number, y: number, amp: number, period: number, seed: number) {
  let d = '';
  for (let x = x0, i = 0; x <= x1; x += 1.5, i++) {
    d += `${d ? 'L' : 'M'}${x.toFixed(2)} ${(y + Math.sin((x / period) * Math.PI * 2) * amp + wob(i, seed) * 0.6).toFixed(2)}`;
  }
  return d;
}
function hexagon(cx: number, cy: number, r: number, seed: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 6; i++) {
    const t = (i / 6) * Math.PI * 2 + Math.PI / 6;
    pts.push([cx + Math.cos(t) * r, cy + Math.sin(t) * r]);
  }
  return roughLine(pts, seed, 0.5);
}

function Art({ subject, level, inks, k }: { subject: BookSubject; level: BookLevel; inks: Inks; k: number }) {
  const P = (d: string) => {
    const path = Skia.Path.MakeFromSVGString(d)!;
    path.transform(Skia.Matrix().scale(k, k));
    return path;
  };
  const line = (d: string, color: string, w: number) => (
    <Path path={P(d)} style="stroke" strokeWidth={w * k} color={color} opacity={0.92} strokeCap="round" strokeJoin="round" />
  );
  /** White over gold, printed a fraction off. */
  const twoInk = (d: string, w: number) => (
    <>
      <Group transform={[{ translateX: 1.4 * k }, { translateY: 1 * k }]}>{line(d, GOLD, w)}</Group>
      {line(d, WHITE, w)}
    </>
  );
  const shape = (d: string) => (
    <>
      <Group transform={[{ translateX: 1.8 * k }, { translateY: 1.2 * k }]}>
        <Path path={P(d)} color={WHITE} opacity={0.85} />
      </Group>
      <Path path={P(d)} color={GOLD} opacity={0.95} />
    </>
  );
  const halftone = (x0: number, y0: number, cols: number, rows: number) => {
    const dots: ReactNode[] = [];
    const step = 6.5;
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++) {
        const r = (0.35 + (i / cols) * 0.9) * step * 0.45;
        dots.push(
          <Circle key={`${i}-${j}`} cx={(x0 + i * step + (j % 2) * step * 0.5) * k} cy={(y0 + j * step) * k} r={r * k} color={inks.light} opacity={0.5} />
        );
      }
    return dots;
  };

  /* CLASS 12: the same hand and the same two inks, a different picture, as a
     real Class 12 book has its own cover. */
  if (level === 12) {
    if (subject === 'physics')
      // Optics: a lens bending light to a point.
      return (
        <>
          {halftone(-4, 70, 16, 12)}
          {shape('M50 64 C64 80 64 120 50 136 C36 120 36 80 50 64 Z')}
          {twoInk(roughLine([[2, 84], [50, 84], [92, 112]], 1, 0.4), 1.2)}
          {twoInk(roughLine([[2, 100], [92, 112]], 2, 0.4), 1.2)}
          {twoInk(roughLine([[2, 116], [50, 116], [92, 112]], 3, 0.4), 1.2)}
          {shape(roughCircle(92, 112, 3.2, 4, 0.2))}
        </>
      );
    if (subject === 'chemistry')
      // A test tube with something reacting in it.
      return (
        <>
          {halftone(34, 66, 14, 12)}
          {shape('M30 70 L50 70 L50 120 C50 132 30 132 30 120 Z')}
          {twoInk(roughLine([[27, 66], [53, 66]], 1, 0.3), 1.6)}
          {twoInk(roughLine([[30, 66], [30, 121]], 2, 0.3), 1.2)}
          {twoInk(roughLine([[50, 66], [50, 121]], 3, 0.3), 1.2)}
          {twoInk(roughCircle(64, 92, 4, 4, 0.3), 1)}
          {twoInk(roughCircle(74, 80, 2.6, 5, 0.2), 0.9)}
          {twoInk(roughCircle(80, 104, 6, 6, 0.4), 1)}
        </>
      );
    if (subject === 'mathematics')
      // Calculus: the area under a curve.
      return (
        <>
          {halftone(-4, 70, 16, 12)}
          {shape('M16 132 L16 112 C30 84 46 78 60 92 C72 104 80 90 84 82 L84 132 Z')}
          {twoInk(roughLine([[10, 132], [96, 132]], 1, 0.3), 1)}
          {twoInk(roughLine([[10, 132], [10, 66]], 2, 0.3), 1)}
          {twoInk('M4 128 C18 98 40 70 60 92 C74 108 84 86 96 76', 1.4)}
        </>
      );
    // biology: the double helix
    const strand = (phase: number) => {
      let d = '';
      for (let y = 64; y <= 136; y += 2) {
        const x = 50 + Math.sin(((y - 64) / 36) * Math.PI + phase) * 20;
        d += `${d ? 'L' : 'M'}${x.toFixed(2)} ${y}`;
      }
      return d;
    };
    return (
      <>
        {halftone(-4, 72, 16, 12)}
        {[70, 79, 88, 97, 106, 115, 124, 133].map((y, i) => {
          const x1 = 50 + Math.sin(((y - 64) / 36) * Math.PI) * 20;
          const x2 = 50 + Math.sin(((y - 64) / 36) * Math.PI + Math.PI) * 20;
          return <Group key={i}>{line(`M${x1.toFixed(2)} ${y} L${x2.toFixed(2)} ${y}`, GOLD, 2.2)}</Group>;
        })}
        {twoInk(strand(0), 1.8)}
        {twoInk(strand(Math.PI), 1.8)}
      </>
    );
  }

  if (subject === 'physics')
    return (
      <>
        {halftone(-2, 70, 16, 12)}
        {shape(roughCircle(66, 96, 30, 1, 0.5))}
        {twoInk(roughWave(0, 100, 122, 5, 26, 3), 1.3)}
        {twoInk(roughWave(0, 100, 131, 3, 18, 9), 1)}
        {twoInk(roughCircle(66, 96, 40, 4, 1, 1.2, 0.35), 0.9)}
      </>
    );
  if (subject === 'chemistry')
    return (
      <>
        {halftone(30, 64, 14, 12)}
        {[0, 1, 2].map((i) => (
          <Group key={i}>{twoInk(hexagon(30 + i * 22, 90 + (i % 2) * 18, 14, i + 2), 2.2)}</Group>
        ))}
        {shape(roughCircle(74, 126, 9, 6, 0.3))}
      </>
    );
  if (subject === 'mathematics')
    return (
      <>
        {halftone(-4, 70, 16, 12)}
        {shape('M14 132 L52 64 L90 132 Z')}
        {twoInk(roughCircle(52, 108, 20, 4, 0.8), 1.4)}
      </>
    );
  // biology: a leaf, its veins, and a cell
  return (
    <>
      {halftone(-2, 72, 16, 12)}
      {shape('M22 132 C20 96 44 70 86 66 C88 104 64 130 22 132 Z')}
      {twoInk(roughLine([[22, 132], [44, 108], [66, 86], [84, 68]], 2, 0.4), 1.2)}
      {twoInk(roughLine([[44, 108], [40, 92]], 5, 0.3), 0.9)}
      {twoInk(roughLine([[56, 96], [70, 100]], 6, 0.3), 0.9)}
      {twoInk(roughCircle(78, 116, 10, 7, 0.6), 1)}
    </>
  );
}

/**
 * One book. `w` is the cover's width; the page block adds a few points to the
 * right and bottom, so lay it out in a box `bookSize(w)` big.
 */
export const BookCover = memo(function BookCover({
  subject,
  level,
  w,
}: {
  subject: BookSubject;
  level: BookLevel;
  w: number;
}) {
  const h = Math.round(w * 1.38);
  const k = w / BOX_W;
  const inks = PALETTE[subject][level];
  return (
    <View style={{ width: w + 4 * k, height: h + 4 * k }} accessible={false}>
      {/* The page block, peeking out at the right and the foot. */}
      <View style={[styles.pages, { left: 5 * k, top: 3 * k, width: w - 2 * k, height: h, borderRadius: 5 * k, backgroundColor: '#F3EDE1', boxShadow: [{ offsetX: 0, offsetY: 8 * k, blurRadius: 16 * k, spreadDistance: -4 * k, color: 'rgba(28,26,22,.35)' }] }]} />
      <View style={[styles.pages, { left: 3.5 * k, top: 1.5 * k, width: w - 2 * k, height: h, borderRadius: 5 * k, backgroundColor: '#FBF7EE' }]} />
      <View style={{ width: w, height: h, borderTopLeftRadius: 2.5 * k, borderBottomLeftRadius: 2.5 * k, borderTopRightRadius: 5 * k, borderBottomRightRadius: 5 * k, overflow: 'hidden' }}>
        <Canvas style={{ width: w, height: h }}>
          <Rect x={0} y={0} width={w} height={h}>
            <LinearGradient start={vec(0, 0)} end={vec(w, h)} colors={[inks.a, inks.b]} />
          </Rect>
          <Art subject={subject} level={level} inks={inks} k={k} />
          {/* Paper and ink: never perfectly flat. */}
          <Rect x={0} y={0} width={w} height={h} blendMode="overlay" opacity={0.55}>
            <FractalNoise freqX={0.9} freqY={0.9} octaves={3} />
          </Rect>
          <Rect x={0} y={0} width={w} height={h} opacity={0.5}>
            <RadialGradient c={vec(w * 0.45, h * 0.4)} r={h * 0.8} colors={['rgba(0,0,0,0)', inks.deep]} />
          </Rect>
        </Canvas>
        <View style={{ position: 'absolute', left: 11 * k, right: 7 * k, top: 9 * k }}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: 'Onest_700Bold', fontSize: 5.4 * k, letterSpacing: 0.8 * k, color: 'rgba(255,255,255,.75)' }}>
            TEXTBOOK FOR CLASS {level === 11 ? 'XI' : 'XII'}
          </Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: 'STIXTwoText_600SemiBold', fontSize: 16 * k, lineHeight: 19 * k, color: WHITE, marginTop: 2.5 * k }}>
            {BOOK_NAME[subject]}
          </Text>
          <View style={{ width: 16 * k, height: 1.4 * k, backgroundColor: GOLD, marginTop: 4 * k }} />
        </View>
        <View style={{ position: 'absolute', left: 11 * k, bottom: 7 * k }}>
          <MonkLogo height={6.5 * k} tone="dark" learning="rgba(255,255,255,.75)" />
        </View>
        {/* The spine: a fold and a highlight down the left edge. */}
        <LG colors={['rgba(0,0,0,.4)', 'rgba(0,0,0,0)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 8 * k }} />
        <View style={{ position: 'absolute', left: 6.5 * k, top: 0, bottom: 0, width: 1, backgroundColor: 'rgba(255,255,255,.16)' }} />
      </View>
    </View>
  );
});

/** The box a cover of width `w` needs, page block included. */
export const bookSize = (w: number) => ({ width: w + (4 * w) / BOX_W, height: Math.round(w * 1.38) + (4 * w) / BOX_W });

const styles = StyleSheet.create({
  pages: { position: 'absolute', borderWidth: 0.5, borderColor: 'rgba(28,26,22,.14)' },
});
