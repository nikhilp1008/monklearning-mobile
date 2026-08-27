/**
 * Ch07 · Section 20 — "Shell and solid sphere: inside, surface, outside"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.17, 8.17, 9.17, 10.17, 11.17, 21.75, 31.48]):
 *  0 title
 *  1 two E–r graphs: shell (flat 0, jump, decay) · solid (linear rise, decay) + captions
 *  2 shell formula line (left)
 *  3 red note: why the interior zero
 *  4 green box: solid-sphere formulas (right)
 *  5 enclosed-mass line
 *  6 simplification line
 *  7 red margin: E = −dV/dr bridge
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  left graph: origin (140,270), x→450, y→120 · R tick x280 · flat M140 270 H278 ·
 *   jump dash M280 268 V152 · decay M280 150 Q330 210 450 250 · "SHELL" st (160,115) ·
 *   "R" (280,290) · "GM⁄R²" st (296,142) · caption cx295 bl320
 *  right graph: origin (620,270), x→930, y→120 · R tick x760 · rise M620 270 L758 152 ·
 *   decay M760 150 Q810 210 930 250 · "SOLID" st (640,115) · "R" (760,290) ·
 *   "GM⁄R²" st (776,142) · caption cx775 bl320
 *  b2 | line st x90 bl370 · b3 | bar x66 y395..425 · line st x84 bl415
 *  b4 | green box x560..1000 y355..405 (text bl385) · b5 | line st x560 bl445 ·
 *  b6 | line st x560 bl478 · b7 | bar x66 y505..545 · line st x84 bl527
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the two pictures */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Shell vs solid sphere — the two E–r graphs",
            "Shell vs solid sphere — do E–r graphs"
          )}
        </T>
      </Fade>

      {/* beat 1 — draw both graphs */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d={`${arrowD(140, 270, 450, 270)} ${arrowD(140, 270, 140, 120)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={160} y={115} size={13} fill={AMBER_DARK} anchor="start" weight={800}>
          SHELL
        </T>
        <T x={280} y={290} size={12} fill={INK} weight={700}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 140 269 H 278" stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Path d="M 280 268 V 152" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d="M 280 150 Q 330 210 450 250"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={296} y={142} size={12} fill={INK} anchor="start" weight={700}>
          GM ⁄ R²
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={`${arrowD(620, 270, 930, 270)} ${arrowD(620, 270, 620, 120)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={640} y={115} size={13} fill={AMBER_DARK} anchor="start" weight={800}>
          SOLID
        </T>
        <T x={760} y={290} size={12} fill={INK} weight={700}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 620 270 L 758 152" stroke={GREEN} sw={3} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.6)}
        d="M 760 150 Q 810 210 930 250"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={776} y={142} size={12} fill={INK} anchor="start" weight={700}>
          GM ⁄ R²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={295} y={320} size={12} fill={INK} script>
          {t("flat ZERO inside → jump → decay", "andar flat ZERO → jump → decay")}
        </T>
        <T x={775} y={320} size={12} fill={INK} script>
          {t("straight rise → decay", "seedhi chadhai → decay")}
        </T>
      </Fade>

      {/* beat 2 — shell numbers */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={90} y={370} size={14} fill={INK} anchor="start" weight={700}>
          Shell: E = 0 (r&lt;R) · GM ⁄ R² (r=R) · GM ⁄ r² (r&gt;R)
        </T>
      </Fade>

      {/* beat 3 — the interior zero, again */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 66 395 v 30" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={84} y={415} size={13} fill={RED} script anchor="start">
          {t(
            "interior zero: small-but-close ↔ large-but-far — perfect cancel",
            "andar zero: chhota-kareeb ↔ bada-door — perfect cancel"
          )}
        </T>
      </Fade>

      {/* beat 4 — solid sphere numbers */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 572 355 h 416 q 12 0 12 12 v 26 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={780} y={385} size={14} fill={INK} weight={800}>
          Solid: E = GMr ⁄ R³ (r≤R) · GM ⁄ r² (r≥R)
        </T>
      </Fade>

      {/* beat 5 — only the enclosed mass pulls */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={445} size={13} fill={INK} script anchor="start">
          {t(
            "only the enclosed mass pulls: M(enc) = M·r³ ⁄ R³",
            "sirf enclosed mass kheenchta hai: M(enc) = M·r³ ⁄ R³"
          )}
        </T>
      </Fade>

      {/* beat 6 — simplify */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={478} size={14} fill={INK} anchor="start" weight={700}>
          E = G·M(enc) ⁄ r² = G·M·r ⁄ R³
        </T>
      </Fade>

      {/* beat 7 — bridge to potential */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 505 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={84} y={527} size={13} fill={RED} script anchor="start">
          {t(
            "bridge ahead: E = − dV ⁄ dr — the field is the negative slope of potential",
            "aage ka pul: E = − dV ⁄ dr — field, potential ka negative slope hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
