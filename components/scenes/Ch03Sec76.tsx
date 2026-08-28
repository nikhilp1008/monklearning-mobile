/**
 * Ch03 · Section 76 — "The one-page mental model for the whole chapter"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.33, 26.37, 45.48, 57.26, 69.29, 83.03, 93.78]):
 *  0 heading
 *  1 THE MASTER MOVE hero box: resolve into components, solve each axis alone
 *  2 row · vectors: parallelogram bound, dot = along, cross = across
 *  3 row · 2-D motion: two independent 1-D motions, one clock
 *  4 row · projectile: horizontal coasts, vertical free-falls
 *  5 row · relative velocity: v_AB = v_A − v_B, freeze one body
 *  6 row · circular: v²/r inward, name the real force
 *  7 closing mnemonic hero: RESOLVE, SOLVE EACH AXIS, RECOMBINE
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | st cx540 bl48 s20 script · underline M320 62 h440
 *  b1 | box x160..920 y78..126 text cx540 bl110 s15 script
 *  rows | bar M84 {y} v40 · label st x100 bl{y+16} s13 · line st x100 bl{y+38} s12 script
 *  b2 | bar y150 · label bl166 · line bl188
 *  b3 | bar y208 · label bl224 · line bl246
 *  b4 | bar y266 · label bl282 · line bl304
 *  b5 | bar y324 · label bl340 · line bl362
 *  b6 | bar y382 · label bl398 · line bl420
 *  b7 | box x140..940 y460..518 text cx540 bl492 s16 script
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Row({
  on,
  delay,
  barY,
  labelY,
  lineY,
  label,
  line,
}: {
  on: boolean;
  delay: number;
  barY: number;
  labelY: number;
  lineY: number;
  label: string;
  line: string;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={`M 84 ${barY} v 40`} stroke={AMBER_DARK} sw={3.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.6}>
        <T x={100} y={labelY} size={13} fill={INK} weight={800} anchor="start">
          {label}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 1.4}>
        <T x={100} y={lineY} size={12} fill={INK_LIGHT} script anchor="start">
          {line}
        </T>
      </Fade>
    </>
  );
}

export default function Ch03Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CHEAT SHEET — how to think about any plane-motion problem",
            "CHEAT SHEET — plane-motion problem ko kaise sochein"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 320 62 h 440" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the master move */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 172 78 h 736 q 12 0 12 12 v 36 q 0 12 -12 12 h -736 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={110} size={15} fill={GREEN} weight={800} script>
          {t(
            "THE MASTER MOVE: resolve every vector into perpendicular components, solve each axis alone",
            "MASTER MOVE: har vector ko perpendicular components mein todo, har axis alag solve karo"
          )}
        </T>
      </Fade>

      {/* beat 2 — vectors */}
      <Row
        on={beat >= 2}
        delay={dl(2, 0.6)}
        barY={150}
        labelY={166}
        lineY={188}
        label={t("VECTORS", "VECTORS")}
        line={t(
          "add by the parallelogram, bounded by |A−B| and A+B — dot = along (cos), cross = across (sin)",
          "parallelogram se jodo, |A−B| aur A+B ke beech — dot = seedha (cos), cross = tirchha (sin)"
        )}
      />

      {/* beat 3 — 2-D motion */}
      <Row
        on={beat >= 3}
        delay={dl(3, 0.6)}
        barY={208}
        labelY={224}
        lineY={246}
        label={t("2-D MOTION", "2-D MOTION")}
        line={t(
          "two independent 1-D motions sharing one clock — write the equations per axis",
          "do independent 1-D motions, ek hi clock share karte hain — har axis ka equation likho"
        )}
      />

      {/* beat 4 — projectile */}
      <Row
        on={beat >= 4}
        delay={dl(4, 0.6)}
        barY={266}
        labelY={282}
        lineY={304}
        label={t("PROJECTILE", "PROJECTILE")}
        line={t(
          "horizontal coasts at u cos θ — vertical free-falls; time from vertical, range from horizontal",
          "horizontal u cos θ par chalta rehta hai — vertical free-fall; time vertical se, range horizontal se"
        )}
      />

      {/* beat 5 — relative velocity */}
      <Row
        on={beat >= 5}
        delay={dl(5, 0.6)}
        barY={324}
        labelY={340}
        lineY={362}
        label={t("RELATIVE VELOCITY", "RELATIVE VELOCITY")}
        line={t(
          "v_AB = v_A − v_B — to simplify a chase, sit on one body and freeze it",
          "v_AB = v_A − v_B — chase simplify karne ke liye, ek body par baith kar use freeze karo"
        )}
      />

      {/* beat 6 — circular */}
      <Row
        on={beat >= 6}
        delay={dl(6, 0.6)}
        barY={382}
        labelY={398}
        lineY={420}
        label={t("CIRCULAR", "CIRCULAR")}
        line={t(
          "even at constant speed there is inward acceleration v² ⁄ r — name the real inward force",
          "constant speed par bhi andar wala acceleration v² ⁄ r hota hai — asli andar wala force pehchano"
        )}
      />

      {/* beat 7 — the closing mnemonic */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 152 460 h 776 q 12 0 12 12 v 34 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -34 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={492} size={16} fill={GREEN} weight={800} script>
          {t(
            "RESOLVE — SOLVE EACH AXIS — RECOMBINE",
            "RESOLVE — HAR AXIS SOLVE KARO — RECOMBINE"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
