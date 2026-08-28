/**
 * Ch04 · Section 84 — "Derivation: the rigid-rod case, and why it needs less"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.82, 38.14, 62.98, 87.81, 105.98, 130.82]):
 *  0 title
 *  1 setup: body on a light rigid rod length r, can pull AND push
 *  2 diagram (left): circle, rod stub + N pushing outward at top, mg down, caption
 *  3 formula (right): top: mg − N = mv²_top/r
 *  4 text (right): v_top can be arbitrarily small — limit v_top ≥ 0, set v_top = 0
 *  5 formula (right): v_bottom² = 0 + 4gr → v_bottom,min = 2√gr
 *  6 red margin: string needs √gr to stay taut, rod needs nothing — holds the body up
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  L fig | circle c(280,255) r65 · rod stub top(280,190→170) · N arr(280,190→160) lbl(295,172) ·
 *    mg arr(280,190→215) lbl(295,208) · caption cx280 bl 365
 *  R col x600..1020 | b3 bl 150 · b4 bl 190 / 212 · b5 bl 250 / 272
 *  b6 | bar x66 y460..530 · lines st x84 bl 480 / 506
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec84({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t(
            "CBSE Derivation — the rod loop, and why it needs less",
            "CBSE Derivation — rod loop, aur kyun kam chahiye"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "body on a light rigid rod of length r — swung in a vertical circle",
            "r lambaai ke halke rigid rod par body — vertical circle mein ghumaayi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a rod can PULL and PUSH — something a string never could",
            "rod KHEENCH aur DHAKEL sakta — jo string kabhi nahi kar sakti"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={circleD(280, 255, 65)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 280 190 L 280 170"
        stroke={INK}
        sw={4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d={arrowD(280, 190, 280, 160)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={295} y={172} size={11} fill={GREEN} weight={700} anchor="start">
          N
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(280, 190, 280, 215)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={295} y={208} size={11} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={280} y={365} size={11} fill={MUTED} script>
          {t(
            "the rod can push outward, so the body may crawl over the top at v = 0",
            "rod bahar dhakel sakta, isliye body v = 0 par bhi top se nikal sakti"
          )}
        </T>
      </Fade>

      {/* beat 3 — the top equation */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={600} y={150} size={14} fill={INK} weight={700} anchor="start">
          top: mg − N = mv²_top⁄r
        </T>
      </Fade>

      {/* beat 4 — the limit */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={190} size={13} fill={INK} script anchor="start">
          {t(
            "v_top can be arbitrarily small",
            "v_top kitni bhi chhoti ho sakti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={600} y={212} size={13} fill={AMBER_DARK} script anchor="start">
          {t("limit: v_top ≥ 0 → set v_top = 0", "seema: v_top ≥ 0 → v_top = 0 rakho")}
        </T>
      </Fade>

      {/* beat 5 — v_bottom,min */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={600} y={250} size={13} fill={INK} weight={700} anchor="start">
          v²_bottom = 0 + 4gr
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={600} y={272} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          → v_bottom,min = 2√gr
        </T>
      </Fade>

      {/* beat 6 — the physical reading */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 460 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "string: needs √gr at the top just to stay taut",
            "string: taut rehne ko top par √gr chahiye hi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={506} size={14} fill={GREEN} script anchor="start">
          {t(
            "rod: needs NOTHING there — it can hold the body up",
            "rod: wahaan KUCHH NAHI chahiye — wo body ko thaam sakta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
