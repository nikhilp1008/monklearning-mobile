/**
 * C11 Ch02 · Section 11 — "Worked example (NEET): highest specific charge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 7.17, 21.67, 31.06, 44.46, 49.49, 60.93, 70.74]):
 *  0 anchor: "a classic speed trap — solve it in your head"
 *  1 given: 4 candidates listed (proton, deuteron, α, electron)
 *  2 guardrail: don't forget the electron is listed! (ring its column)
 *  3 represent: fill charge/mass/ratio rows for the 3 ions
 *  4 the proton wins among the ions
 *  5 guardrail (high): electron's mass ≈ 1837× smaller — fill its cells
 *  6 formula (high): (e/m)electron ≫ (e/m)proton
 *  7 land: the electron wins — smallest mass, unit charge
 *
 * Layout plan (4 columns x200/420/640/860):
 *  title (always)              | T mid | x540 y58 size17 script red
 *  b0 | anchor caption          | T mid | x540 y88            [dims@b1]
 *  b1 | 4 candidate headers     | T mid | y108  x200/420/640/860
 *  b2 | ring on electron col    | Draw  | cx860 cy177 rx90 ry85
 *  b2 | guardrail caption       | T mid | x540 y140
 *  b3 | row labels ×3           | T sta | x90  y180/210/245
 *  b3 | charge row (3 ions)     | T     | y180 x200/420/640
 *  b3 | mass row (3 ions)       | T     | y210 x200/420/640
 *  b3 | ratio row (3 ions)      | T     | y245 x200/420/640 size17
 *  b4 | "proton wins…" caption  | T mid | x540 y280
 *  b5 | electron charge/mass    | T     | y180/y210 x860
 *  b5 | guardrail caption (RED) | T mid | x540 y316
 *  b6 | electron ratio (GREEN)  | T     | y245 x860 size18
 *  b6 | (e/m) formula chip      | Chip  | x300..780 y345..379
 *  b7 | crown ring (repeat)     | Draw  | cx860 cy177
 *  b7 | banner (GREEN)          | Chip  | x300..780 y400..436
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
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const HEADERS: [number, string][] = [
  [200, "proton"],
  [420, "deuteron"],
  [640, "α-particle"],
  [860, "electron"],
];

const CHARGE_ROW: [number, string][] = [
  [200, "1"],
  [420, "1"],
  [640, "2"],
];
const MASS_ROW: [number, string][] = [
  [200, "1"],
  [420, "2"],
  [640, "4"],
];
const RATIO_ROW: [number, string][] = [
  [200, "1"],
  [420, "0.5"],
  [640, "0.5"],
];

export default function C11Ch02Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={17} fill={RED} script>
          {t("[NEET] which has the highest specific charge?", "[NEET] highest specific charge kiska hai?")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={88} size={13} fill={RED} script>
          {t("a classic speed trap — solve it in your head", "classic speed trap — dimaag mein solve karo")}
        </T>
      </Fade>

      {/* beat 1 — the 4 candidates */}
      {HEADERS.map(([x, name], i) => (
        <Fade key={`h${x}`} on={beat >= 1} delay={dl(1, 0.2 + i * 0.3)}>
          <T x={x} y={108} size={14} fill={INK} weight={700}>
            {name}
          </T>
        </Fade>
      ))}

      {/* beat 2 — guardrail: don't forget the electron (removed@b7, replaced by the green crown) */}
      <Draw on={beat >= 2 && beat < 7} delay={dl(2, 0.2)} d={ringD(860, 177, 90, 85)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={140} size={13} fill={RED} script>
          {t("the trap: don't forget the electron is listed!", "trap: electron ko list mein bhoolna mat!")}
        </T>
      </Fade>

      {/* beat 3 — fill the ion rows */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={90} y={180} size={12} fill={MUTED} anchor="start">
          {t("charge (e)", "charge (e)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={90} y={210} size={12} fill={MUTED} anchor="start">
          {t("mass (u)", "mass (u)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={90} y={245} size={12} fill={MUTED} anchor="start">
          {t("ratio e/m", "ratio e/m")}
        </T>
      </Fade>
      {CHARGE_ROW.map(([x, v], i) => (
        <Fade key={`c${x}`} on={beat >= 3} delay={dl(3, 0.5 + i * 0.3)}>
          <T x={x} y={180} size={14} fill={INK}>
            {v}
          </T>
        </Fade>
      ))}
      {MASS_ROW.map(([x, v], i) => (
        <Fade key={`m${x}`} on={beat >= 3} delay={dl(3, 1.4 + i * 0.3)}>
          <T x={x} y={210} size={14} fill={INK}>
            {v}
          </T>
        </Fade>
      ))}
      {RATIO_ROW.map(([x, v], i) => (
        <Fade key={`r${x}`} on={beat >= 3} delay={dl(3, 2.3 + i * 0.3)}>
          <T x={x} y={245} size={17} fill={INK} weight={700}>
            {v}
          </T>
        </Fade>
      ))}

      {/* beat 4 — the proton wins among the ions */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={280} size={13} fill={INK} script>
          {t("the proton wins among the ions", "ions mein proton jeetta hai")}
        </T>
      </Fade>

      {/* beat 5 — guardrail (high): the electron's mass */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={860} y={180} size={14} fill={INK}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={860} y={210} size={14} fill={INK}>
          ~1/1837
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={316} size={13} fill={RED} script>
          {t(
            "electron's mass ≈ 1837× smaller than the proton's",
            "electron ka mass ≈ 1837× chhota hai proton se"
          )}
        </T>
      </Fade>

      {/* beat 6 — formula (high): the electron dominates */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={860} y={245} size={18} fill={GREEN} weight={700}>
          ≈1837
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={300} y={345} w={480} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          (e/m)electron ≫ (e/m)proton
        </Chip>
      </Fade>

      {/* beat 7 — land: the electron wins */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={ringD(860, 177, 90, 85)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={300} y={400} w={480} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t(
            "electron wins — smallest mass, unit charge",
            "electron jeeta — smallest mass, unit charge"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
