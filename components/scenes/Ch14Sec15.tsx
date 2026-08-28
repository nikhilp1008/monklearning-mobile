/**
 * Ch14 · Section 15 — "Worked example: find the unknown fork"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.26, 22.37, 26.28, 34.95, 41.66, 47.53, 62.62]):
 *  0 hook badge: NEET favourite — punishes guessing
 *  1 number line: standard 480, candidates 474? and 486? (±6 Hz)
 *  2 2 candidates — a clue hides in the wax
 *  3 TRAP: most just guess here
 *  4 candidates confirmed as chips: 474 Hz / 486 Hz
 *  5 RULE: wax always lowers frequency
 *  6 test each: 474→farther→RISE✗ · 486→closer→FALL✓
 *  7 verdict: A = 486 Hz + the shortcut rule
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..410  y100..132
 *  b0 | underline                     | Draw  | x100..390 y138
 *  b1 | number line                   | Draw  | x150..950 y320
 *  b1 | standard tick + "480" (13)    | Draw+T| x550 y310..330 · bl345
 *  b1 | "474?" / "486?" (13,muted)    | T mid | x350/750 bl345        y332..346
 *  b2 | caption (13,muted)            | T mid | x540 bl155            y142..156
 *  b3 | trap (13,red)                 | T mid | x540 bl180            y167..181
 *  b4 | "474 Hz" chip (h30)           | Chip  | x310..390 y355..385
 *  b4 | "486 Hz" chip (h30)           | Chip  | x710..790 y355..385
 *  b5 | rule (14,amber-d)             | T mid | x540 bl208            y194..209
 *  b6 | arrow (474, red)              | Draw  | x350..300 y400
 *  b6 | "farther → RISE ✗" (12,red)   | T mid | x300 bl425            y413..427
 *  b6 | arrow (486, green)            | Draw  | x750..700 y400
 *  b6 | "closer → FALL ✓" (12,green)  | T mid | x725 bl425            y413..427
 *  b7 | cross (474 chip)              | Draw  | x310..390 y355..385
 *  b7 | ring (486 chip)               | Draw  | c(750,370) r50/25
 *  b7 | final chip (h50,s20)          | Chip  | x380..700 y505..555
 *  b7 | final text (13)               | T mid | x540 bl582            y566..583
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD, ringD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("worked example: find the unknown fork", "worked example: unknown fork dhoondo")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={320} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ NEET favourite — punishes guessing!", "★ NEET favourite — guessing ki saza!")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 138 L 390 138" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — the number line */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 320 L 950 320" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d="M 550 310 L 550 330" stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={550} y={345} size={13} fill={INK}>
          480 (standard)
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 350 310 L 350 330" stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 750 310 L 750 330" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} dim={beat >= 4} delay={dl(1, 2.6)}>
        <T x={350} y={345} size={13} fill={MUTED}>
          474?
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 4} delay={dl(1, 2.9)}>
        <T x={750} y={345} size={13} fill={MUTED}>
          486?
        </T>
      </Fade>

      {/* beat 2 — two candidates, a clue in the wax */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={155} size={13} fill={MUTED} script>
          {t("2 candidates — a clue hides in the wax", "2 candidates — clue wax mein chhupa")}
        </T>
      </Fade>

      {/* beat 3 — the trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={180} size={13} fill={RED} script>
          {t("most just guess here — DON'T!", "yahin sab guess karte — MAT karo!")}
        </T>
      </Fade>

      {/* beat 4 — confirmed candidates */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={310} y={355} w={80} h={30} fill="#fff" stroke={INK} textFill={INK} size={12} script={false}>
          474 Hz
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Chip x={710} y={355} w={80} h={30} fill="#fff" stroke={INK} textFill={INK} size={12} script={false}>
          486 Hz
        </Chip>
      </Fade>

      {/* beat 5 — the rule */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={208} size={14} fill={AMBER_DARK} weight={800} script>
          {t("RULE: wax ALWAYS lowers frequency ↓", "RULE: wax HAMESHA frequency girata ↓")}
        </T>
      </Fade>

      {/* beat 6 — test each candidate */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={arrowD(350, 400, 300, 400)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={300} y={425} size={12} fill={RED}>
          {t("farther → RISE ✗", "door → RISE ✗")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d={arrowD(750, 400, 700, 400)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={725} y={425} size={12} fill={GREEN}>
          {t("closer → FALL ✓", "paas → FALL ✓")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={crossD(310, 355, 80, 30)} stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={ringD(750, 370, 50, 25)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={380} y={505} w={320} h={50} fill={GREEN} textFill="#fff" size={20} script={false}>
          A = 486 Hz
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={540} y={582} size={13} fill={GREEN} script>
          {t(
            "wax lowers f — beats fell ⇒ fork was ABOVE standard!",
            "wax f girata — beats gire ⇒ fork standard se UPAR tha!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
