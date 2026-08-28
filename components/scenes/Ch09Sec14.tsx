/**
 * Ch09 · Section 14 — "Float, sink, or hover"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 19.93, 32.65]):
 *  0 title (always-on)
 *  1 red-margin note: buoyancy uses the fluid; body density decides the fate
 *  2 tank drawn (empty)
 *  3 object sinks (bottom-left) + label
 *  4 object hovers (mid) + label
 *  5 object floats (straddles surface, right) + label
 *  6 text: a steel ship floats; a steel nail sinks — shape matters
 *  7 red-margin note: average density relative to the fluid decides everything
 *
 * Layout plan:
 *  b1 | margin bar (red)        | Draw  | x460  y90..114
 *  b1 | note (script 15, red)   | T mid  | x540  bl 106
 *  b2 | tank walls + water line | Draw   | x200..880  y150..450
 *  b3 | sink object (muted)     | rect   | x260..320  y410..450
 *  b3 | "denser ⇒ sinks" (13)   | T mid  | x290  y460..478 (bl 474)
 *  b4 | hover object (muted)    | rect   | x510..570  y280..320
 *  b4 | "ρ equal ⇒ hovers" (13) | T mid  | x540  bl 474
 *  b5 | float object (muted)    | rect   | x760..820  y125..175
 *  b5 | "lighter ⇒ floats" (13) | T mid  | x790  bl 474
 *  b6 | text (14, script)       | T mid  | x540  bl 505
 *  b7 | margin bar (red)        | Draw   | x460  y560..584
 *  b7 | note (script 14, red)   | T st   | x476.. bl 578
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("float, sink, or hover", "float, sink, ya hover")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 460 90 L 460 114" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={106} size={15} fill={RED} script anchor="middle">
          {t("buoyancy uses the fluid — body density decides the fate", "buoyancy fluid use karti — body density fate decide karti")}
        </T>
      </Fade>

      {/* beat 2 — the tank */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 200 150 V 450 H 880 V 150" stroke={INK} sw={2.2} dur={1} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.1)}
        d="M 200 150 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0"
        stroke={INK}
        sw={1.6}
        dur={1}
      />

      {/* beat 3 — sinks */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect x={260} y={410} width={60} height={40} fill={MUTED} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={290} y={474} size={13} fill={RED} anchor="middle">
          {t("denser ⇒ sinks", "denser ⇒ sinks")}
        </T>
      </Fade>

      {/* beat 4 — hovers */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={510} y={280} width={60} height={40} fill={MUTED} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={474} size={13} fill={INK} anchor="middle">
          {t("ρ equal ⇒ hovers", "ρ equal ⇒ hovers")}
        </T>
      </Fade>

      {/* beat 5 — floats */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={760} y={125} width={60} height={50} fill={MUTED} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={790} y={474} size={13} fill={GREEN} anchor="middle">
          {t("lighter ⇒ floats", "lighter ⇒ floats")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={505} size={14} fill={MUTED} script anchor="middle">
          {t("a steel ship floats; a steel nail sinks — shape matters", "steel ship float karti; steel nail sink hoti — shape matter karta")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 560 L 460 584" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={578} size={14} fill={RED} script anchor="start">
          {t("average density relative to the fluid decides everything", "fluid ke relative average density hi sab decide karti")}
        </T>
      </Fade>
    </Scene>
  );
}
