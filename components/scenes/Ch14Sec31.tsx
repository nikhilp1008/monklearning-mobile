/**
 * Ch14 · Section 31 — "Doppler effect: the toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.36, 21.64, 38.08, 53.23, 67.08, 83.53, 99.11]):
 *  0 framing: anchor to ONE idea — toward raises pitch
 *  1 master formula: f' = f(v±vo)/(v∓vs)
 *  2 sign rule: +vo observer→source, −vs source→observer
 *  3 two special cases: source→still, observer→still
 *  4 both approach: f' = f(v+vo)/(v−vs) — highest shift
 *  5 wind w: replace v→v+w or v−w
 *  6 light: f'=f(1±u/c), Δλ/λ=u/c
 *  7 colour code: BLUESHIFT (approach) vs REDSHIFT (recede)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | master chip (h50,s20)         | Chip  | x280..800 y145..195
 *  b2 | sign rule (12.5)              | T mid | x540 bl225            y212..226
 *  b3 | source→still (13)             | T st  | x60 bl290             y278..295
 *  b3 | observer→still (13)           | T st  | x560 bl290            y278..295
 *  b4 | both-approach chip (h42,s15)  | Chip  | x300..780 y320..362
 *  b5 | wind (13)                     | T st  | x60 bl400             y388..405
 *  b6 | light (13)                    | T st  | x60 bl425             y413..430
 *  b7 | colour-code chip (h50,s15)    | Chip  | x150..930 y500..550
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={27} fill={RED} script>
          {t("Doppler effect: the toolkit", "Doppler effect: toolkit")}
        </T>
      </Fade>

      {/* beat 0 — framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t("anchor to ONE idea: toward raises pitch", "ek hi idea pe anchor karo: toward pitch badhati")}
        </T>
      </Fade>

      {/* beat 1 — the master formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={280} y={145} w={520} h={50} fill="#fff" stroke={AMBER} textFill={INK} size={20} script={false}>
          f' = f(v±vo)/(v∓vs)
        </Chip>
      </Fade>

      {/* beat 2 — the sign rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={225} size={12.5} fill={INK} script>
          {t(
            "+vo: observer→source | −vs: source→observer (toward raises pitch!)",
            "+vo: observer→source | −vs: source→observer (dono = toward pitch badhati!)"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two special cases */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={290} size={13} fill={INK} anchor="start">
          {t("source→still: f'=fv/(v−vs)", "source→still: f'=fv/(v−vs)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={560} y={290} size={13} fill={INK} anchor="start">
          {t("observer→still: f'=f(v+vo)/v", "observer→still: f'=f(v+vo)/v")}
        </T>
      </Fade>

      {/* beat 4 — both approach */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={300} y={320} w={480} h={42} fill={GREEN} textFill="#fff" size={15} script={false}>
          f' = f(v+vo)/(v−vs) — HIGHEST shift!
        </Chip>
      </Fade>

      {/* beat 5 — wind */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={400} size={13} fill={INK} anchor="start">
          {t(
            "wind w: v→v+w (source-to-observer) or v−w (opposite)",
            "wind w: v→v+w (source-se-observer) ya v−w (ulta)"
          )}
        </T>
      </Fade>

      {/* beat 6 — light */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={425} size={13} fill={INK} anchor="start">
          light: f'=f(1±u/c), Δλ/λ=u/c
        </T>
      </Fade>

      {/* beat 7 — the colour code */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={150} y={500} w={780} h={50} fill="#fff" stroke={INK} textFill={INK} size={15} script={false}>
          {t(
            "BLUESHIFT: approach, f↑λ↓ | REDSHIFT: recede, f↓λ↑ (red runs away!)",
            "BLUESHIFT: paas aana, f↑λ↓ | REDSHIFT: door jaana, f↓λ↑ (red bhaagta!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
