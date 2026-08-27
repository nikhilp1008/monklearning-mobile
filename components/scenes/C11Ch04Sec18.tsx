/**
 * C11 Chemistry Ch04 · Section 18 — "Worked example: bond angle order in H2O, H2S, H2Se"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats.
 *
 * Beats (en [0, 16.98, 33.02, 53.16, 75.09, 88.06, 112.9]):
 *  0 intro: JEE Advanced, order by angle, justify 2 ways
 *  1 build 3 bent structures (SN4, sp3, bent — all three)
 *  2 angle stamps: 104.5 / 92 / 91
 *  3 argument1a: EN centre pulls pairs closer -> angle open
 *  4 argument1b: less EN -> pairs drift -> angle -> 90
 *  5 argument2: s-character (O more, heavier ~pure p)
 *  6 order + lesson chip
 *
 * Layout plan:
 *  b1-2 | 3 molecules  | Draw/T | x155..930 y120..230 (O/S/Se centers x200/540/880)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const mols = [
    { cx: 200, sym: "O", hL: 155, hR: 245, angle: "104.5°", color: GREEN, dh: 8 },
    { cx: 540, sym: "S", hL: 495, hR: 585, angle: "92°", color: AMBER_DARK, dh: 8 },
    { cx: 880, sym: "Se", hL: 830, hR: 930, angle: "91°", color: RED, dh: 14 },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Bond angle order: H₂O, H₂S, H₂Se", "Bond angle order: H₂O, H₂S, H₂Se")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("JEE Advanced: order H₂O, H₂S, H₂Se by bond angle", "JEE Advanced: H₂O, H₂S, H₂Se ko angle se order karo")}
        </T>
      </Fade>

      {/* beat 1 — build all three structures */}
      {mols.map((m, i) => (
        <React.Fragment key={i}>
          <Fade on={beat >= 1} delay={dl(1, 0.2 + i * 0.5)}>
            <T x={m.cx} y={150} size={16} weight={700} fill={INK}>
              {m.sym}
            </T>
          </Fade>
          <Fade on={beat >= 1} delay={dl(1, 0.35 + i * 0.5)}>
            <T x={m.hL} y={195} size={12} weight={700} fill={INK}>
              H
            </T>
            <T x={m.hR} y={195} size={12} weight={700} fill={INK}>
              H
            </T>
          </Fade>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.5 + i * 0.5)}
            d={bondD(m.cx - m.dh, 158, m.hL + 8, 187)}
            stroke={INK}
            sw={1.8}
            dur={0.3}
          />
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.6 + i * 0.5)}
            d={bondD(m.cx + m.dh, 158, m.hR - 8, 187)}
            stroke={INK}
            sw={1.8}
            dur={0.3}
          />
          <LonePair on={beat >= 1} delay={dl(1, 0.7 + i * 0.5)} cx={m.cx - 20} cy={120} angle={0} spread={5.5} />
          <LonePair on={beat >= 1} delay={dl(1, 0.8 + i * 0.5)} cx={m.cx + 20} cy={120} angle={0} spread={5.5} />
        </React.Fragment>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={540} y={240} size={11.5} fill={INK}>
          {t(
            "SN=4, sp³, bent (all three) — yet angles differ sharply",
            "SN=4, sp³, bent (teenon) — phir bhi angles kaafi alag"
          )}
        </T>
      </Fade>

      {/* beat 2 — angle stamps */}
      {mols.map((m, i) => (
        <Fade key={i} on={beat >= 2} delay={dl(2, 0.2 + i * 0.3)}>
          <T x={m.cx} y={215} size={14} weight={700} fill={m.color}>
            {m.angle}
          </T>
        </Fade>
      ))}

      {/* beat 3 — argument 1a: electronegativity opens the angle */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={270} size={12} fill={INK}>
          {t(
            "more electronegative centre → pulls pairs closer → repel harder → angle OPEN",
            "zyada electronegative centre → pairs paas khींchta → zyada repel → angle OPEN"
          )}
        </T>
      </Fade>

      {/* beat 4 — argument 1b: trend down the group */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={292} size={12} fill={INK}>
          {t(
            "less electronegative (down group) → pairs drift out → angle → 90°",
            "kam electronegative (group mein neeche) → pairs bahar drift → angle → 90°"
          )}
        </T>
      </Fade>

      {/* beat 5 — argument 2: s-character */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={320} size={12} fill={INK}>
          {t(
            "s-character: O has MORE (angle>90°) · heavier hydrides ~pure p (→90°)",
            "s-character: O mein zyada (angle>90°) · heavier hydrides ~pure p (→90°)"
          )}
        </T>
      </Fade>

      {/* beat 6 — order + lesson */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={230} y={345} w={620} h={30} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "order: H₂O > H₂S > H₂Se — same hybridisation ≠ same angle",
            "order: H₂O > H₂S > H₂Se — same hybridisation ≠ same angle"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
