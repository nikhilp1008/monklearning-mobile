/**
 * Ch04 · Section 38 — "Two angles that say the same thing"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.3, 22.0, 45.7, 70.6, 90.3, 115.1, 132.4]):
 *  0 title
 *  1 panel labels
 *  2 left: block, N, f, single tilted contact force R + λ + caption
 *  3 tan λ = μ box + lean note
 *  4 right: tilting incline + θr + caption
 *  5 tan θr = μs ⇒ θr = λ box
 *  6 red margin: two questions, one answer, protractor
 *  7 sand cone + same-slope line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · panel lbls cx280/cx780 bl 92
 *  L | floor M100 300 H460 · block x180..300 y240..300 · N (240,235)→(240,150) ·
 *    f (175,270)→(110,270) · R (240,240)→(175,160) · "λ"(212,190) ·
 *    caption cx280 bl 355
 *  b3 box x96..340 y385..429 bl 414 · note st x360 bl 414
 *  R | incline M600 300 L960 300 L960 180 Z · block quad · "θr"(664,288) ·
 *    caption cx780 bl 355 · b5 box x612..1000 y385..429 bl 414
 *  b6 | bar x66 y460..520 · lines st x84 bl 480 / 506
 *  b7 | cone M700 585 L780 535 L860 585 + base M680 585 H880 · line st x84 bl 560
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "two angles that say the same thing",
            "do angles jo ek hi baat kehte hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two panels */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={280} y={92} size={12} fill={MUTED} script>
          {t("angle of FRICTION λ", "angle of FRICTION λ")}
        </T>
        <T x={780} y={92} size={12} fill={MUTED} script>
          {t("angle of REPOSE θr", "angle of REPOSE θr")}
        </T>
      </Fade>

      {/* beat 2 — one contact force */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 100 300 H 460 M 180 240 h 120 v 60 h -120 z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d={arrowD(240, 235, 240, 150)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={arrowD(175, 270, 110, 270)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.8)}
        d={arrowD(240, 240, 175, 160)}
        stroke={RED}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={254} y={162} size={13} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={100} y={254} size={13} fill={AMBER_DARK} weight={700}>
          f
        </T>
        <T x={162} y={156} size={13} fill={RED} weight={700} anchor="end">
          R
        </T>
        <T x={212} y={192} size={13} fill={INK} weight={700}>
          λ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={280} y={355} size={13} fill={AMBER_DARK} script>
          {t(
            "ONE contact force — we merely split it into N and f",
            "EK contact force — hum bas use N aur f mein baant lete hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — tan λ = μ */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 108 385 h 220 q 12 0 12 12 v 20 q 0 12 -12 12 h -220 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={218} y={414} size={17} fill={INK} weight={800}>
          tan λ = μ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={360} y={414} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "no friction → λ = 0",
            "friction nahi → λ = 0"
          )}
        </T>
      </Fade>

      {/* beat 4 — the tilting slope */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 600 300 L 960 300 L 960 180 Z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d="M 760 258 L 800 244 L 790 216 L 750 230 Z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d="M 650 300 Q 648 286 636 284"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={666} y={290} size={12} fill={INK} weight={700} anchor="start">
          θr
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={780} y={355} size={13} fill={AMBER_DARK} script>
          {t(
            "tilt slowly — the steepest RESTING angle = angle of repose",
            "dheere-dheere tilt karo — sabse teekha TIKNE ka angle = repose"
          )}
        </T>
      </Fade>

      {/* beat 5 — the identity */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 612 385 h 376 q 12 0 12 12 v 20 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={800} y={414} size={17} fill={INK} weight={800}>
          tan θr = μs&nbsp;&nbsp;⇒&nbsp;&nbsp;θr = λ
        </T>
      </Fade>

      {/* beat 6 — same answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 460 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "two different questions — 'how far does the push lean?' · 'how steep can it sit?'",
            "do alag sawaal — 'dhakka kitna jhukta hai?' · 'kitni teekhi dhalan par baith sakta hai?'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={506} size={14} fill={GREEN} script anchor="start">
          {t(
            "exactly the same answer — and a protractor alone measures μ",
            "bilkul ek hi jawab — aur akela protractor μ naap leta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sand cone */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 700 585 L 780 535 L 860 585 M 680 585 H 880"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={84} y={560} size={13} fill={GREEN} script anchor="start">
          {t(
            "why sand · gravel · rice pile at the SAME slope every time — the side IS θr",
            "isiliye ret · bajri · chawal har baar EK hi dhalan par dher hote hain — bagal hi θr hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
