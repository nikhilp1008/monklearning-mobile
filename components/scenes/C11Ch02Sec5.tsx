/**
 * C11 Ch02 · Section 5 — "How Thomson and Millikan cornered the electron"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 9.47, 20.99, 31.74, 43.86, 55.47, 68.35, 77.23]):
 *  0 anchor: divider + "Thomson" / "Millikan" headers
 *  1 explain the move: Thomson's crossed E/B-field tube is built
 *  2 the beam runs straight ⇒ forces cancel, fixes speed → yields e/m
 *  3 guardrail: one equation, two unknowns — can't split e and m
 *  4 explain the move: Millikan's oil-drop apparatus (gravity vs electric pull)
 *  5 guardrail (high): charge is always n × 1.602×10⁻¹⁹ C, never a fraction
 *  6 land: the smallest unit IS the electron's charge e
 *  7 land: feed e into e/m — the electron's mass falls out
 *
 * Layout plan (two columns, divider x540 y100..420):
 *  title (always)                 | T mid | x540 y62 size20 script red
 *  b0 | divider                    | Draw  | x540 y100..420
 *  b0 | "Thomson" / "Millikan" hdr | T mid | x270/x810 y110
 *  b1 | tube outline               | Draw  | x90..490 y140..210
 *  b1 | E-plates ×2                | Fade  | x100..480 y145..151/199..205
 *  b1 | ×4 B-field marks           | T     | y175  x150/250/350/430
 *  b2 | straight beam (RED)        | Draw  | y175 x100..480
 *  b2 | "forces cancel…" caption   | T mid | x290 y238
 *  b2 | "e/m only" chip            | Chip  | x230..350 y258..288
 *  b3 | guardrail chip (RED)       | Chip  | x170..410 y305..335
 *  b4 | plates ×2                  | Fade  | x620..980 y150..156/280..286
 *  b4 | oil drop + force arrows    | Fade  | cx800 cy215
 *  b4 | "balances gravity…" cap    | T mid | x800 y316
 *  b5 | guardrail chip (RED)       | Chip  | x610..990 y338..370
 *  b6 | land chip (GREEN)          | Chip  | x630..970 y386..418
 *  b7 | combine chip (GREEN, full) | Chip  | x200..880 y440..478
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

const B_MARKS = [150, 250, 350, 430];

export default function C11Ch02Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} script>
          {t(
            "two limited experiments, one full answer",
            "do limited experiments, ek poora jawaab"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor: divider + headers */}
      <Draw on={beat >= 0} delay={dl(0, 0.2)} d="M 540 100 L 540 420" stroke={MUTED} sw={1.5} dur={0.8} />
      <Fade on={beat >= 0} delay={dl(0, 1.1)}>
        <T x={270} y={110} size={16} fill={INK} weight={700}>
          Thomson
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.4)}>
        <T x={810} y={110} size={16} fill={INK} weight={700}>
          Millikan
        </T>
      </Fade>

      {/* beat 1 — Thomson's crossed E/B-field tube */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 90 140 h 400 v 70 h -400 z" stroke={INK} sw={2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Rect x={100} y={145} width={380} height={6} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Rect x={100} y={199} width={380} height={6} fill={INK} />
      </Fade>
      {B_MARKS.map((x, i) => (
        <Fade key={`bm${x}`} on={beat >= 1} delay={dl(1, 1.6 + i * 0.2)}>
          <T x={x} y={180} size={14} fill={MUTED}>
            ×
          </T>
        </Fade>
      ))}

      {/* beat 2 — straight beam ⇒ forces cancel, yields e/m */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 100 175 L 480 175" stroke={RED} sw={2.4} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={290} y={238} size={13} fill={RED} script>
          {t("forces cancel ⇒ fixes speed", "forces cancel ⇒ speed fix ho jaati hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Chip x={230} y={258} w={120} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          e/m only
        </Chip>
      </Fade>

      {/* beat 3 — guardrail: one equation, two unknowns */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={170} y={305} w={240} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("1 equation, 2 unknowns", "1 equation, 2 unknowns")}
        </Chip>
      </Fade>

      {/* beat 4 — Millikan's oil-drop apparatus */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Rect x={620} y={150} width={360} height={6} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Rect x={620} y={280} width={360} height={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Circle cx={800} cy={215} r={8} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(800, 190, 800, 206)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={arrowD(800, 240, 800, 224)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={770} y={200} size={11} fill={MUTED} anchor="end">
          {t("gravity ↓", "gravity ↓")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={832} y={232} size={11} fill={AMBER_DARK} anchor="start">
          {t("electric pull ↑", "electric pull ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={800} y={316} size={13} fill={INK} script>
          {t("oil drop balances: gravity vs electric pull", "oil drop balance: gravity vs electric pull")}
        </T>
      </Fade>

      {/* beat 5 — guardrail (high): charge is quantised */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={610} y={338} w={380} h={32} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("q = n × 1.602×10⁻¹⁹ C — never a fraction", "q = n × 1.602×10⁻¹⁹ C — kabhi fraction nahi")}
        </Chip>
      </Fade>

      {/* beat 6 — land: the smallest unit is the electron's charge */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={630} y={386} w={340} h={32} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("smallest unit = electron's charge e", "smallest unit = electron ka charge e")}
        </Chip>
      </Fade>

      {/* beat 7 — combine: feed e into e/m, mass falls out */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={200} y={440} w={680} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("feed e into e/m ⇒ the electron's mass falls out!", "e ko e/m mein daalo ⇒ electron ka mass nikal aata hai!")}
        </Chip>
      </Fade>
    </Scene>
  );
}
