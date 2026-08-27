/**
 * C11 Ch02 · Section 54 — "Worked example (JEE Advanced): a universe with three spin values"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 10.58, 29.27, 39.94, 45.91, 56.75, 67.33, 78.76]):
 *  0 anchor: a JEE Advanced favorite — change one rule, find where counts come from
 *  1 given: spin takes 3 values (−½,0,+½). Find n=3 capacity and Z=10 config
 *  2 guardrail: orbital counts come from n,l NOT spin — unchanged
 *  3 formula: n=3: n²=9 orbitals
 *  4 formula (high, GREEN): max electrons in n=3 = 3×9 = 27
 *  5 explain: new subshell capacities — s=3, p=9, d=15
 *  6 formula (high, GREEN): Z=10: 1s³ 2s³ 2p⁴
 *  7 guardrail (high, RED): capacity = orbital count × spin values — the trick
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | given chip          | Chip  | x210..870 y96..130
 *  b2 | guardrail caption   | T mid | x540 y160
 *  b3 | formula chip        | Chip  | x400..680 y186..218
 *  b4 | formula chip (GRN)  | Chip  | x350..730 y234..268
 *  b5 | capacities chip     | Chip  | x330..750 y284..316
 *  b6 | formula chip (GRN)  | Chip  | x380..700 y332..368
 *  b7 | guardrail (RED)     | Chip  | x180..900 y384..420
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t("[JEE Advanced] a universe with three spin values", "[JEE Advanced] teen spin values wala universe")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "a JEE Advanced favorite — change one rule, find where each count comes from",
            "asli JEE Advanced favourite — ek rule badlo, dekho har count kahaan se aata"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={210} y={96} w={660} h={34} fill={CREAM} stroke={MUTED} textFill={RED} size={12} script={false}>
          {t(
            "GIVEN: spin has 3 values (−½,0,+½). Find n=3 capacity & Z=10 config",
            "GIVEN: spin ke 3 values (−½,0,+½). n=3 capacity & Z=10 config nikaalo"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: orbital count unchanged */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={160} size={12} fill={RED} script>
          {t(
            "orbital counts come from n, l — NOT spin — so they are unchanged",
            "orbital counts n, l se aate — spin se NAHI — toh unchanged hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula: orbitals in n=3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={400} y={186} w={280} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"n=3:  n² = 9 orbitals"}
        </Chip>
      </Fade>

      {/* beat 4 — formula (high, GREEN): max electrons */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={350} y={234} w={380} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"max electrons in n=3 = 3×9 = 27"}
        </Chip>
      </Fade>

      {/* beat 5 — explain: new subshell capacities */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={284} w={420} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {t("new capacities: s = 3, p = 9, d = 15", "nayi capacities: s = 3, p = 9, d = 15")}
        </Chip>
      </Fade>

      {/* beat 6 — formula (high, GREEN): Z=10 configuration */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={380} y={332} w={320} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          {"Z=10:  1s³ 2s³ 2p⁴"}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail (high, RED): the whole trick */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={180} y={384} w={720} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "electron capacity = orbital count × spin values — the whole trick",
            "electron capacity = orbital count × spin values — poora trick"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
