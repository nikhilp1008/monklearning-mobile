/**
 * C11 Ch01 · Section 41 — "Worked examples: composition and fertilisers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,14,27.82,46.51,59.82,83.46,99.08,121.44,136.11]):
 *  0 Example 1 (CBSE) given: urea %composition
 *  1 molar mass: 12+16+2(14+2) = 60 g/mol
 *  2 C = 20.0%, O = 26.7%
 *  3 N = 46.7%, H = 6.7%
 *  4 sanity check ≈100%; insight: high N% = why urea is a prized fertiliser
 *  (example 1 fully fades at beat 5, freeing the board for example 2)
 *  5 Example 2 (NEET) given: which fertiliser has highest N%
 *  6 shortcut: all have 2N, numerator=28 always — urea, NH₄NO₃ compared
 *  7 (NH₄)₂SO₄, Ca(NO₃)₂ compared — urea wins
 *  8 guardrail: the trap is time, not concept — smallest M wins
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script13 ink)         | T mid | x540  y90  [fade@b5]
 *  b1 | l (13 bold ink)              | T mid | x540  y118 [fade@b5]
 *  b2 | l (13 bold ink)              | T mid | x540  y143 [fade@b5]
 *  b3 | l (13 bold green)            | T mid | x540  y168 [fade@b5]
 *  b4 | l1/l2 (script12 muted/green) | T mid | x540  y193/218
 *  b5 | given 2 (script13 ink)       | T mid | x540  y90  (same slot)
 *  b6 | l (13 bold ink)              | T mid | x540  y120
 *  b7 | l (13 bold green)            | T mid | x540  y145
 *  b8 | l1/l2 (script12 red/amber)   | T mid | x540  y175/200
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("worked examples: composition and fertilisers", "worked examples: composition aur fertilisers")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully fades at beat 5 */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 1 (CBSE): urea CO(NH₂)₂ — %composition? (C=12,O=16,N=14,H=1)",
            "Example 1 (CBSE): urea CO(NH₂)₂ — %composition? (C=12,O=16,N=14,H=1)"
          )}
        </T>
      </Fade>

      {/* beat 1 — molar mass */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.4)}>
        <T x={540} y={118} size={13} fill={INK} weight={700} script={false}>
          M = 12 + 16 + 2(14+2) = 60 g/mol
        </T>
      </Fade>

      {/* beat 2 — C and O */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.4)}>
        <T x={540} y={143} size={13} fill={INK} weight={700} script={false}>
          C = 12/60 = 20.0% · O = 16/60 = 26.7%
        </T>
      </Fade>

      {/* beat 3 — N and H */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.4)}>
        <T x={540} y={168} size={13} fill={GREEN} weight={700} script={false}>
          N = 28/60 = 46.7% · H = 4/60 = 6.7%
        </T>
      </Fade>

      {/* beat 4 — sanity check + insight */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.4)}>
        <T x={540} y={193} size={12} fill={MUTED} script>
          check: 20.0+26.7+46.7+6.7 = 100.1 ≈ 100 ✓
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 1.2)}>
        <T x={540} y={218} size={12} fill={GREEN} script>
          {t(
            "high N% is exactly why urea is a prized fertiliser!",
            "high N% hi wajah hai ki urea itna prized fertiliser hai!"
          )}
        </T>
      </Fade>

      {/* beat 5 — Example 2 given (NEET), same slot as beat 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 2 (NEET): highest N% — urea, NH₄NO₃, (NH₄)₂SO₄, Ca(NO₃)₂?",
            "Example 2 (NEET): highest N% — urea, NH₄NO₃, (NH₄)₂SO₄, Ca(NO₃)₂?"
          )}
        </T>
      </Fade>

      {/* beat 6 — the shortcut, first two compared */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={120} size={13} fill={INK} weight={700} script={false}>
          {t(
            "all have 2N → numerator=28 always! urea=28/60=46.7% · NH₄NO₃=28/80=35%",
            "sab mein 2N → numerator=28 hamesha! urea=28/60=46.7% · NH₄NO₃=28/80=35%"
          )}
        </T>
      </Fade>

      {/* beat 7 — remaining two compared, winner */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={145} size={13} fill={GREEN} weight={700} script={false}>
          (NH₄)₂SO₄=28/132=21.2% · Ca(NO₃)₂=28/164=17.1% → UREA WINS
        </T>
      </Fade>

      {/* beat 8 — guardrail: the trap is time */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={175} size={12} fill={RED} script>
          {t(
            "trap = TIME, not concept — don't compute full compositions!",
            "trap = TIME hai, concept nahi — poori compositions mat nikalo!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={540} y={200} size={12} fill={AMBER_DARK} script>
          {t(
            "smallest M with most X atoms wins — that's the whole shortcut",
            "sabse chhota M, sabse zyada X atoms — yehi poora shortcut hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
