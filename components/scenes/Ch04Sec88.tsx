/**
 * Ch04 · Section 88 — "Worked Example 3 [JEE Main]: rod versus string"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.93, 37.03, 61.87, 85.5, 110.34, 111.34]):
 *  0 title
 *  1 problem: bead on rod r=2.5m, (a) v_bottom,min for rod (b) compare with string same length
 *  2 diagram: rod-icon vs string-icon, caption — same length/bead, only connector differs
 *  3 formula (a): rod: v_bottom,min = 2√gr = 2√25 = 10 m/s
 *  4 formula (b): string: v_bottom,min = √5gr = √125 ≈ 11.18 m/s
 *  5 red margin: rod is easier — pushes bead through top
 *  6 red margin: same length/bead/gravity, different answers — the connector's push
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  P-rod | circle c(220,220) r55 · thick line(220,220→165) · ball(220,165) ·
 *  P-string | circle c(800,220) r55 · thin line(800,220→165) · ball(800,165)
 *  caption cx510 bl 300
 *  b3 hdr cx220 bl 330 · form bl 354 · b4 hdr cx800 bl 330 · form bl 354
 *  b5/6 | bar x66 y400..470 · lines st x84 bl 420 / 446
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec88({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — rod versus string",
            "Example 3 [JEE Main] — rod vs string"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "a bead on a light rigid rod, r = 2.5 m, swung in a vertical circle",
            "halke rigid rod par ek manka, r = 2.5 m, vertical circle mein ghumaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={GREEN} script anchor="start">
          {t(
            "find: (a) v_bottom,min for the rod (b) compare with a string of the same length",
            "nikaalo: (a) rod ke liye v_bottom,min (b) wahi lambaai ki string se compare"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two icons */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={circleD(220, 220, 55)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 220 220 L 220 165" stroke={GREEN} sw={4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={ringD(220, 165, 7, 7)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={circleD(800, 220, 55)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d="M 800 220 L 800 165" stroke={RED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={ringD(800, 165, 7, 7)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={510} y={300} size={11} fill={MUTED} script>
          {t(
            "same length, same bead — only the connector differs",
            "wahi lambaai, wahi manka — sirf connector alag"
          )}
        </T>
      </Fade>

      {/* beat 3 — the rod */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={220} y={330} size={13} fill={GREEN} weight={700}>
          (a) ROD
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={220} y={354} size={13} fill={INK} weight={700}>
          v_bottom,min = 2√gr = 2√25 = 10 m⁄s
        </T>
      </Fade>

      {/* beat 4 — the string */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={800} y={330} size={13} fill={RED} weight={700}>
          (b) STRING
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={800} y={354} size={13} fill={INK} weight={700}>
          v_bottom,min = √5gr = √125 ≈ 11.18 m⁄s
        </T>
      </Fade>

      {/* beat 5 — the rod is easier */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 400 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={420} size={14} fill={RED} script anchor="start">
          {t(
            "the rod is the easier loop — it can push the bead through the top",
            "rod aasaan loop hai — manke ko top se dhakel sakta"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whole difference */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={84} y={446} size={14} fill={GREEN} script anchor="start">
          {t(
            "10 m/s vs 11.18 m/s — the ENTIRE difference is the connector's push",
            "10 m/s vs 11.18 m/s — POORA fark connector ke dhakelne se hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
