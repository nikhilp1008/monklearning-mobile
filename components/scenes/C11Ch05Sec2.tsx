/**
 * C11 Chemistry Ch05 · Section 2 — "State functions versus path functions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,8.87,9.87,10.87,11.87,12.87,13.87,14.87]):
 *  0 axes anchor: vertical "altitude" + horizontal "route taken" guides
 *  1 start/finish dots + green winding-road curve (state: altitude)
 *  2 amber zigzag "steep steps" path, same start/finish (path: steps)
 *  3 red mapping note (row swap): U,H~altitude · q,w~steps
 *  4 row swap: ΔU same either route, q/w differ (green)
 *  5 row swap: U = KE(molecules) + PE(interactions), as a formula chip
 *  6 row swap: only ΔU measurable, never absolute U (red)
 *  7 final green stamp: same two ends ⇒ same ΔU, no matter the route
 *
 * The comment row at y≈490 is reused/erased beat-to-beat (beat===k gating) —
 * a teacher writes one line, erases it, writes the next; only the graph
 * (dots/curves/labels) and the final stamp accumulate.
 *
 * Layout plan:
 *  b0 | v-axis                        | Draw   | x140 y130..420
 *  b0 | h-axis                        | Draw   | y420 x140..900
 *  b0 | "altitude" (12, muted, end)   | T end  | x?..128    y126..140 (bl136)
 *  b0 | "route taken" (12, muted,end) | T end  | x828..900  y430..444 (bl440)
 *  b1 | start dot r5 (200,400)        | circle |
 *  b1 | finish dot r5 (820,160)       | circle |
 *  b1 | green curve                   | Draw   | (200,400)→(820,160)
 *  b1 | "start"/"finish" tiny (11)    | T      | beside dots
 *  b1 | "winding road" (13, green)    | T st   | x860..996  y123..140 (bl130)
 *  b2 | amber zigzag path             | Draw   | (200,400)→(820,160) staircase
 *  b2 | "steep steps" (13, amber)     | T st   | x860..967  y173..190 (bl180)
 *  b3 | row: U,H~altitude; q,w~steps  | T mid  | x352..728  y477..495 (bl490)
 *  b4 | row: ΔU same, q/w differ      | T mid  | x?..?      y477..495 (bl490)
 *  b5 | row: formula chip U=KE+PE     | Chip   | x343..737  y474..508
 *  b6 | row: only ΔU measurable       | T mid  | x?..?      y477..495 (bl490)
 *  b7 | final chip (green)            | Chip   | x260..820  y548..584
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  GREEN,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("state function vs path function", "state function vs path function")}
        </T>
      </Fade>

      {/* beat 0 — axes anchor */}
      <Draw on={beat >= 0} delay={dl(0, 0)} d="M 140 420 L 140 130" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 140 420 L 900 420" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={128} y={136} size={12} fill={MUTED} anchor="end">
          {t("altitude", "altitude")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={900} y={440} size={12} fill={MUTED} anchor="end">
          {t("route taken", "raasta liya")}
        </T>
      </Fade>

      {/* beat 1 — start/finish dots + winding road (state function) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Circle cx={200} cy={400} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <Circle cx={820} cy={160} r={5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 200 400 C 300 420, 350 320, 420 340 C 480 355, 520 260, 600 270 C 680 280, 700 190, 820 160"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={190} y={393} size={11} fill={INK} anchor="end">
          {t("start", "start")}
        </T>
        <T x={830} y={152} size={11} fill={INK} anchor="start">
          {t("finish", "finish")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={860} y={130} size={13} fill={GREEN} anchor="start" script>
          {t("winding road", "ghumaavdaar raasta")}
        </T>
      </Fade>

      {/* beat 2 — steep steps (path function) */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0)}
        d="M 200 400 L 260 400 L 260 350 L 340 350 L 340 300 L 430 300 L 430 260 L 540 260 L 540 220 L 650 220 L 650 190 L 750 190 L 750 165 L 820 165 L 820 160"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={860} y={180} size={13} fill={AMBER_DARK} anchor="start" script>
          {t("steep steps", "khadi seedhiyan")}
        </T>
      </Fade>

      {/* beats 3,4,6 — reused comment row (erase + rewrite); beat 5 — chip */}
      <Fade on={beat === 3} delay={dl(3, 0.2)}>
        <T x={540} y={490} size={16} weight={700} fill={RED}>
          {t("U & H behave like altitude; q & w like steps", "U aur H altitude jaise; q aur w steps jaise")}
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 0.2)}>
        <T x={540} y={490} size={16} weight={700} fill={GREEN}>
          {t("ΔU is the same either route — q and w differ", "ΔU same rehta hai — q aur w badal jaate hain")}
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 0.2)}>
        <Chip x={343} y={474} w={394} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          {t("U = (KE of molecules) + (PE of interactions)", "U = (molecules ki KE) + (interactions ki PE)")}
        </Chip>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 0.2)}>
        <T x={540} y={490} size={16} weight={700} fill={RED}>
          {t("only ΔU is measurable — never the absolute U", "sirf ΔU measurable hai — absolute U nahi")}
        </T>
      </Fade>

      {/* beat 7 — final stamp */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={548} w={560} h={36} fill={GREEN} textFill="#fff" size={18} script>
          {t("same two ends ⇒ same ΔU, no matter the route", "start-finish same ⇒ ΔU hamesha same rahega")}
        </Chip>
      </Fade>
    </Scene>
  );
}
