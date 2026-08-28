/**
 * Ch04 · Section 48 — "Centripetal is a role, not a new force"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.2, 35.7, 55.2, 75.7, 95.5, 114.8, 139.6]):
 *  0 title
 *  1 panel 1: car turning — friction inward
 *  2 panel 2: stone on string — tension inward
 *  3 panel 3: satellite — gravity inward
 *  4 panel 4: well of death rider — normal inward
 *  5 summary line: one shared job
 *  6 red margin: never draw it as an extra arrow — double counting
 *  7 units housekeeping line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · four panels x70/300/530/760 w200 y90..230:
 *    each: hdr bl 110 · figure y130..210 · arrow inward · label bl 224
 *  b5 line cx540 bl 268
 *  b6 | bar x66 y300..375 · lines st x84 bl 320 / 346 / 370
 *  b7 line cx540 bl 420
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "same job, four different real forces",
            "ek hi kaam, chaar alag asli forces"
          )}
        </T>
      </Fade>

      {/* beat 1 — car: friction */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={170} y={110} size={13} fill={AMBER_DARK} script>
          {t("1 · car turning", "1 · mudti car")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 130 190 h 80 v -22 h -80 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d={arrowD(170, 190, 170, 155)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={170} y={224} size={12} fill={GREEN} script>
          {t("friction", "friction")}
        </T>
      </Fade>

      {/* beat 2 — stone on string: tension */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={400} y={110} size={13} fill={AMBER_DARK} script>
          {t("2 · stone on a string", "2 · string par patthar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.2)}
        d={`M 400 155 L 400 190 ${circleD(400, 198, 8)}`}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d={arrowD(400, 190, 400, 160)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={400} y={224} size={12} fill={GREEN} script>
          {t("tension", "tension")}
        </T>
      </Fade>

      {/* beat 3 — satellite: gravity */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={630} y={110} size={13} fill={AMBER_DARK} script>
          {t("3 · satellite", "3 · satellite")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={`${circleD(630, 195, 22)} ${circleD(660, 155, 5)}`}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={arrowD(660, 155, 640, 180)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={630} y={224} size={12} fill={GREEN} script>
          {t("gravity", "gravity")}
        </T>
      </Fade>

      {/* beat 4 — well of death: normal */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={860} y={110} size={13} fill={AMBER_DARK} script>
          {t("4 · well of death", "4 · maut ka kuaan")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.2)}
        d="M 810 140 V 210 M 910 140 V 210"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d={circleD(895, 175, 8)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(902, 175, 875, 175)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={860} y={224} size={12} fill={GREEN} script>
          {t("normal reaction", "normal reaction")}
        </T>
      </Fade>

      {/* beat 5 — one shared job */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={268} size={15} fill={INK} weight={700}>
          {t(
            "F_c = mv²⁄r = mω²r — same formula, only the inward force changes identity",
            "F_c = mv²⁄r = mω²r — formula wahi, sirf inward force ki pehchaan badalti"
          )}
        </T>
      </Fade>

      {/* beat 6 — never double count */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 300 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={320} size={14} fill={RED} script anchor="start">
          {t(
            "NEVER draw centripetal force as a SEPARATE extra arrow",
            "centripetal force ko ALAG extra arrow ki tarah KABHI mat banao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={346} size={14} fill={RED} script anchor="start">
          {t(
            "friction inward + centripetal inward = the same push counted TWICE",
            "friction andar + centripetal andar = wahi dhakka DO baar gina gaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={84} y={370} size={14} fill={GREEN} script anchor="start">
          {t(
            "it is already one of the arrows you drew — just its job title",
            "wo pehle se hi ek arrow hai jo aapne banaya — bas uska job title"
          )}
        </T>
      </Fade>

      {/* beat 7 — housekeeping */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={420} size={13} fill={MUTED} script>
          {t(
            "F_c → newton, [M¹L¹T⁻²] · ω → rad·s⁻¹, [M⁰L⁰T⁻¹]",
            "F_c → newton, [M¹L¹T⁻²] · ω → rad·s⁻¹, [M⁰L⁰T⁻¹]"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
