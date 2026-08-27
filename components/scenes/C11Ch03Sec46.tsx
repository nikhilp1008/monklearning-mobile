/**
 * C11 Chemistry Ch03 · Section 46 — "From atomic number to period, block, and group"
 * Canvas 1080×620 · safe x36–1044, y30–596. The workhorse 4-step procedure.
 *
 * Beats (en [0, 9.64, 25.69, 33.88, 43.95, 68.1, 74.92, 94.89]):
 *  0 title + underline
 *  1 Step 1 card: write config in Aufbau order
 *  2 Step 2 card: period = max n
 *  3 Step 3 card: block = last e⁻'s subshell
 *  4 red-margin Step 4 card: group rules (s/p/d formulas)
 *  5 why: group counts electrons available for bonding
 *  6 detail: s/p outer shell (shift 10 for p); d = both (n-1)d and ns
 *  7 closing green stamp: four steps place almost any element
 *
 * Layout plan:
 *  b1-4 | 4 step cards               | Draw | x63..1018 y110..230
 *  b5 | why line                     | T mid| x?..?     y247..260 (bl 260)
 *  b6 | detail line (script 12)      | T mid| x?..?     y274..290 (bl 290)
 *  b7 | closing stamp (green)        | Chip | x200..880 y310..344
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("from atomic number to period, block, group", "atomic number se period, block, group")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Step 1: write the configuration */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 63 110 h 200 v 120 h -200 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={163} y={135} size={13} weight={800} fill={INK}>Step 1</T>
        <T x={163} y={162} size={14} weight={700} fill={INK}>{t("write config", "config likho")}</T>
        <T x={163} y={185} size={10} fill={MUTED}>{t("(Aufbau order)", "(Aufbau order)")}</T>
      </Fade>

      {/* beat 2 — Step 2: period */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 278 110 h 170 v 120 h -170 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={363} y={135} size={13} weight={800} fill={INK}>Step 2</T>
        <T x={363} y={165} size={14} weight={700} fill={INK}>{t("period = max n", "period = max n")}</T>
      </Fade>

      {/* beat 3 — Step 3: block */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 463 110 h 200 v 120 h -200 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={563} y={135} size={13} weight={800} fill={INK}>Step 3</T>
        <T x={563} y={165} size={13} weight={700} fill={INK}>{t("block = last e⁻'s", "block = last e⁻ ka")}</T>
        <T x={563} y={185} size={13} weight={700} fill={INK}>{t("subshell", "subshell")}</T>
      </Fade>

      {/* beat 4 — red-margin Step 4: group rules */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 678 110 h 340 v 120 h -340 z" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={848} y={135} size={13} weight={800} fill={RED}>{t("Step 4: GROUP", "Step 4: GROUP")}</T>
        <T x={698} y={158} size={12} fill={AMBER_DARK} anchor="start">{t("s-block: = ns electrons", "s-block: = ns electrons")}</T>
        <T x={698} y={178} size={12} fill={GREEN} anchor="start">{t("p-block: = 10 + (ns+np)", "p-block: = 10 + (ns+np)")}</T>
        <T x={698} y={198} size={12} fill={RED} anchor="start">{t("d-block: = (n−1)d + ns", "d-block: = (n−1)d + ns")}</T>
      </Fade>

      {/* beat 5 — why */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={260} size={13} fill={INK}>
          {t("group counts electrons available for BONDING", "group bonding ke liye available electrons ginta")}
        </T>
      </Fade>

      {/* beat 6 — the detail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={290} size={12} fill={MUTED} script>
          {t("s/p = outer shell (shifted by 10 for p) · d = both (n−1)d and ns", "s/p = outer shell (p ke liye 10 shift) · d = dono (n−1)d aur ns")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={310} w={680} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("four steps place almost any element", "chaar steps almost kisi bhi element ko place karte")}
        </Chip>
      </Fade>
    </Scene>
  );
}
