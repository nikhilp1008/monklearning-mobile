/**
 * C11 Ch02 · Section 2 — "From one negative particle to the whole cast"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 6.91, 16.81, 27.05, 39.34, 48.47, 58.28, 66.65]):
 *  0 anchor: neutral atom = e⁻(known) + ?(unknown) — an equation of chips
 *  1 elaborate: "equal and opposite — it must balance" caption
 *  2 explain the move: build the perforated-cathode tube; positive (anode)
 *    rays punch through the holes and glow beyond the cathode
 *  3 guardrail: cathode rays are universal, anode rays change with the gas
 *  4 the accounting fails: protons + electrons ≠ full atomic mass
 *  5 land: the missing mass forces the neutron (Chadwick, 1932)
 *  6 timeline: electron → proton → neutron, with discovery years
 *  7 guardrail/summary: three particles, one neutral atom — cast complete
 *
 * Layout plan:
 *  title (always)                 | T mid | x540 y62 size23 script red
 *  b0 | "atom (neutral)" chip     | Chip  | x300..470 y100..134
 *  b0 | "="                       | T mid | x490 y122
 *  b0 | "e⁻ known" chip           | Chip  | x515..625 y100..134 (RED)
 *  b0 | "+"                       | T mid | x645 y122
 *  b0 | "? unknown" chip          | Chip  | x670..830 y100..134 (MUTED)
 *  b1 | "equal & opposite" lbl    | T mid | x540 y156
 *  b2 | tube outline              | Draw  | x220..860 y235..325
 *  b2 | perforated cathode ×4     | Fade  | x228..238 y245/265/285/305 h15
 *  b2 | anode plate               | Fade  | x842..854 y250..310
 *  b2 | "cathode (−) perforated"  | T mid | x233 y222
 *  b2 | "anode (+)" lbl           | T mid | x848 y222
 *  b2 | anode-ray arrow           | Draw  | (842,280) → (160,280)
 *  b2 | glow dot beyond cathode   | Fade  | cx160 cy280 r8
 *  b2 | "glow beyond cathode" lbl | T mid | x160 y310 size11
 *  b2 | "anode rays…holes" lbl    | T mid | x540 y345 size13
 *  b3 | cathode-rays chip (GREEN) | Chip  | x180..510 y372..404
 *  b3 | anode-rays chip (RED)     | Chip  | x560..890 y372..404
 *  b4 | mass-gap chip             | Chip  | x310..770 y414..446
 *  b5 | neutron-landing chip      | Chip  | x350..730 y456..490 (GREEN)
 *  b6 | timeline chips ×3 + arrows| Chip  | y500..530  x200/460/720 w150
 *  b7 | final summary line        | T mid | x540 y560 size16 script green
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CATHODE_SEGS = [245, 265, 285, 305];

const TIMELINE: [number, string, string][] = [
  [200, "electron (1897)", "electron (1897)"],
  [460, "proton (1919)", "proton (1919)"],
  [720, "neutron (1932)", "neutron (1932)"],
];

export default function C11Ch02Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} script>
          {t(
            "a neutral atom, one negative particle — what balances it?",
            "neutral atom, ek negative particle — baaki kya balance karega?"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor: neutral atom = e⁻(known) + ?(unknown) */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <Chip x={300} y={100} w={170} h={34} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          {t("atom (neutral)", "atom (neutral)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.9)}>
        <T x={490} y={122} size={20} fill={INK}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.3)}>
        <Chip x={515} y={100} w={110} h={34} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          e⁻
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={645} y={122} size={20} fill={INK}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <Chip x={670} y={100} w={160} h={34} fill={CREAM} stroke={MUTED} textFill={MUTED} size={15} script={false}>
          {t("? unknown", "? pata nahi")}
        </Chip>
      </Fade>

      {/* beat 1 — elaborate: equal and opposite, it must balance */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={156} size={14} fill={MUTED} script>
          {t("equal and opposite — it must balance", "equal aur opposite — balance toh hoga hi")}
        </T>
      </Fade>

      {/* beat 2 — explain the move: perforated-cathode tube, positive rays */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.1)}
        d="M 220 235 h 640 v 90 h -640 z"
        stroke={INK}
        sw={2.2}
        dur={1.1}
      />
      {CATHODE_SEGS.map((y, i) => (
        <Fade key={`cs${i}`} on={beat >= 2} delay={dl(2, 1.3)}>
          <Rect x={228} y={y} width={10} height={15} fill={INK} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Rect x={842} y={250} width={12} height={60} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={233} y={222} size={12} fill={INK} anchor="start">
          {t("cathode (−) perforated", "cathode (−) perforated")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={848} y={222} size={12} fill={INK} anchor="start">
          {t("anode (+)", "anode (+)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={arrowD(842, 280, 160, 280)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Circle cx={160} cy={280} r={8} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={160} y={310} size={11} fill={MUTED} script>
          {t("glow beyond cathode", "cathode ke peeche bhi glow")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={540} y={345} size={13} fill={AMBER_DARK} script>
          {t("anode rays (+) — pass straight through the holes", "anode rays (+) — holes se seedha nikalti hain")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: cathode-universal vs anode-depends-on-gas */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={180} y={372} w={330} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("cathode rays → same for every gas", "cathode rays → har gas mein same")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Chip x={560} y={372} w={330} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("anode rays → changes with the gas", "anode rays → gas ke saath badalta hai")}
        </Chip>
      </Fade>

      {/* beat 4 — the accounting fails */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={310} y={414} w={460} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          {t("protons + electrons ≠ full atomic mass", "protons + electrons ≠ pura atomic mass")}
        </Chip>
      </Fade>

      {/* beat 5 — land: the neutron */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={330} y={456} w={420} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("missing mass → the neutron (Chadwick, 1932)", "missing mass → neutron (Chadwick, 1932)")}
        </Chip>
      </Fade>

      {/* beat 6 — timeline of discovery */}
      {TIMELINE.map(([x, e, h], i) => (
        <Fade key={`tl${x}`} on={beat >= 6} delay={dl(6, 0.2 + i * 1.2)}>
          <Chip x={x} y={500} w={150} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
            {t(e, h)}
          </Chip>
        </Fade>
      ))}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.9)}
        d={arrowD(352, 515, 458, 515)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.1)}
        d={arrowD(612, 515, 718, 515)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />

      {/* beat 7 — guardrail/summary: the cast is complete */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={560} size={16} fill={GREEN} script>
          {t(
            "three particles, one neutral atom — the cast is complete",
            "teen particles, ek neutral atom — cast complete hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
