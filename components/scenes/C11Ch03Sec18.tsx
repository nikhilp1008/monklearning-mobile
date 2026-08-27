/**
 * C11 Chemistry Ch03 · Section 18 — "Ionic radius: cations shrink, anions swell"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.25, 23.38, 35.58, 50.6, 60.84, 78.34, 92.5]):
 *  0 title + underline
 *  1 left rule: cation — fewer e⁻, same Z ⇒ shrinks
 *  2 left example: Na (186 pm) → Na⁺ (95 pm), big circle → small circle
 *  3 right rule: anion — more e⁻, less Zeff/e⁻ ⇒ swells
 *  4 right example: F (64 pm) → F⁻ (136 pm), small circle → big circle
 *  5 red-margin: isoelectronic species — same e⁻ count, radius FALLS as Z rises
 *  6 logic: fixed e⁻ count ⇒ only lever is Z
 *  7 closing green stamp: this single rule decides most ordering questions
 *
 * Layout plan:
 *  b1 | left rule (14,w700,amber)  | T mid  | x60..500  y90..109 (bl 104)
 *  b2 | Na/Na+ circles + labels    | Draw   | cx180/340 y152..228; labels bl246/264
 *  b3 | right rule (14,w700,green) | T mid  | x580..1020 y90..109 (bl 104)
 *  b4 | F/F- circles + labels      | Draw   | cx700/880 y152..228; labels bl246/264
 *  b5 | red margin bar + line      | Draw   | x70  y300..336 (bl 322)
 *  b6 | logic (15,ink)             | T mid  | x?..?     y349..366 (bl 360)
 *  b7 | closing stamp (green)      | Chip   | x140..940 y390..432
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("ionic radius: cations shrink, anions swell", "ionic radius: cations shrink, anions swell")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — cation rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={280} y={104} size={14} weight={700} fill={AMBER_DARK}>
          {t("cation: fewer e⁻, same Z ⇒ shrinks", "cation: kam e⁻, same Z ⇒ shrinks")}
        </T>
      </Fade>

      {/* beat 2 — Na example */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Circle cx={180} cy={190} r={38} fill={AMBER} fillOpacity={0.3} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={arrowD(228, 190, 312, 190)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Circle cx={340} cy={190} r={20} fill={AMBER} fillOpacity={0.45} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={180} y={246} size={13} weight={700} fill={INK}>Na</T>
        <T x={180} y={264} size={11} fill={MUTED}>186 pm</T>
        <T x={340} y={246} size={13} weight={700} fill={INK}>Na⁺</T>
        <T x={340} y={264} size={11} fill={MUTED}>95 pm</T>
      </Fade>

      {/* beat 3 — anion rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={800} y={104} size={14} weight={700} fill={GREEN}>
          {t("anion: more e⁻, less Zeff/e⁻ ⇒ swells", "anion: zyada e⁻, kam Zeff/e⁻ ⇒ swells")}
        </T>
      </Fade>

      {/* beat 4 — F example */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={700} cy={190} r={20} fill={GREEN} fillOpacity={0.3} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={arrowD(728, 190, 834, 190)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Circle cx={880} cy={190} r={38} fill={GREEN} fillOpacity={0.2} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={700} y={246} size={13} weight={700} fill={INK}>F</T>
        <T x={700} y={264} size={11} fill={MUTED}>64 pm</T>
        <T x={880} y={246} size={13} weight={700} fill={INK}>F⁻</T>
        <T x={880} y={264} size={11} fill={MUTED}>136 pm</T>
      </Fade>

      {/* beat 5 — red-margin: isoelectronic rule */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 300 L 70 336" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={322} size={16} weight={700} fill={INK} anchor="start">
          {t("isoelectronic: same e⁻ count ⇒ radius FALLS as Z rises", "isoelectronic: same e⁻ count ⇒ Z badhe toh radius FALLS")}
        </T>
      </Fade>

      {/* beat 6 — the logic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={360} size={15} fill={INK}>
          {t("fixed e⁻ count ⇒ only lever is Z: more protons, tighter, smaller", "fixed e⁻ count ⇒ sirf lever Z hai: zyada protons, tight, chhota")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={140} y={390} w={800} h={42} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("this single rule decides most ordering questions", "yehi ek rule zyaadatar ordering questions decide karta")}
        </Chip>
      </Fade>
    </Scene>
  );
}
