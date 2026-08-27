/**
 * C11 Ch02 · Section 24 — "Worked example (NEET): will it eject electrons?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 7.25, 17.41, 26.71, 38.14, 42.92, 52.91, 66.13]):
 *  0 anchor: a pure speed trap — the shortcut turns this into one division
 *  1 given: W₀=2.0eV. Will λ=700nm eject photoelectrons?
 *  2 guardrail: the trap — joules & a burnt minute, or "bright always works"
 *  3 formula (high, GREEN): E = 1240/700 = 1.77 eV
 *  4 explain: compare the photon energy with the work function
 *  5 formula (high, GREEN): 1.77 eV < 2.0 eV = W₀
 *  6 guardrail (high, RED): a single photon can't pay the exit fee
 *  7 land: the whole decision is one division vs W₀
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | given chip          | Chip  | x290..790 y96..130
 *  b2 | guardrail caption   | T mid | x540 y160
 *  b3 | formula chip (GRN)  | Chip  | x380..700 y186..220
 *  b4 | explain caption     | T mid | x540 y246
 *  b5 | formula chip (GRN)  | Chip  | x340..740 y270..306
 *  b6 | guardrail (RED)     | Chip  | x210..870 y322..360
 *  b7 | closing caption     | T mid | x540 y388
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("[NEET] threshold check in one division", "[NEET] ek division mein threshold check")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "a pure speed trap — the shortcut turns this into one division",
            "pure speed trap — shortcut ise ek division bana deta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={290} y={96} w={500} h={34} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          {t(
            "GIVEN: W₀=2.0 eV. Will λ=700 nm eject photoelectrons?",
            "GIVEN: W₀=2.0 eV. Kya λ=700 nm photoelectrons eject karegi?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={160} size={12} fill={RED} script>
          {t(
            "the trap: converting to joules & burning a minute — or assuming bright light always works",
            "trap: joules mein convert karke minute barbaad — ya maan lena ki bright light hamesha kaam karti"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula (high, GREEN) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={380} y={186} w={320} h={34} fill={GREEN} textFill="#fff" size={16} script={false}>
          E = 1240/700 = 1.77 eV
        </Chip>
      </Fade>

      {/* beat 4 — explain: compare */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={246} size={12} fill={INK} script>
          {t(
            "compare the photon energy with the work function",
            "photon energy ko work function se compare karo"
          )}
        </T>
      </Fade>

      {/* beat 5 — formula (high, GREEN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={340} y={270} w={400} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          {"1.77 eV < 2.0 eV = W₀"}
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high, RED) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={210} y={322} w={660} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "a single photon cannot pay the exit fee — no emission, regardless of intensity",
            "ek single photon exit fee chuka hi nahi sakta — no emission, chahe intensity kuch bhi ho"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — land: the whole decision */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={388} size={12} fill={GREEN} script>
          {t(
            "the whole decision is one division, compared against W₀",
            "poora faisla ek division hai, W₀ se compare kiya gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
