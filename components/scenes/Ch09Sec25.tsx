/**
 * Ch09 · Section 25 — "Vertical acceleration and free fall"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.46, 12.12, 17.58, 24.06, 33.02, 43.69]):
 *  0 title (always-on)
 *  1 text: vertical acceleration strengthens or weakens gravity
 *  2 two tanks: left accelerates up (g+a), right accelerates down (g−a)
 *  3 formula (green) g_eff = g ± a
 *  4 formula P = P₀ + ρ(g ± a)h
 *  5 red-margin note: free fall — g_eff = 0, no hydrostatic pressure
 *  6 text (green): only the surface pressure remains in free fall
 *
 * Layout plan:
 *  b2 | left accel arrow "a"    | Draw+T | (320,180)→(320,150) · bl 140
 *  b2 | left tank                | Draw   | x220..420  y220..380
 *  b2 | "g_eff = g+a" (13, grn)  | T mid  | x320  bl 400
 *  b2 | right accel arrow "a"    | Draw+T | (760,150)→(760,180) · bl 200
 *  b2 | right tank               | Draw   | x660..860  y220..380
 *  b2 | "g_eff = g−a" (13)       | T mid  | x760  bl 400
 *  b1 | text (14, script)        | T mid  | x540  bl 114
 *  b3 | formula (20, w800, grn)  | T mid  | x540  bl 440
 *  b4 | formula (17, w700)       | T mid  | x540  bl 475
 *  b5 | margin bar (red)         | Draw   | x460  y500..524
 *  b5 | note (script 14, red)    | T st   | x476.. bl 520
 *  b6 | text (14, script, grn)   | T mid  | x540  bl 556
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("vertical acceleration and free fall", "vertical acceleration aur free fall")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("vertical acceleration strengthens or weakens gravity", "vertical acceleration gravity ko strong ya weak karta")}
        </T>
      </Fade>

      {/* beat 2 — the two tanks */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Draw on={beat >= 2} d={arrowD(320, 180, 320, 145)} stroke={GREEN} sw={2.6} dur={0.4} />
        <T x={335} y={158} size={13} fill={GREEN} anchor="start">
          a
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 220 220 V 380 H 420 V 220" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={320} y={400} size={13} fill={GREEN} anchor="middle">
          g<TSpan fontSize={9} dy={3}>eff</TSpan>
          <TSpan dy={-3}> = g+a</TSpan>
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} d={arrowD(760, 145, 760, 180)} stroke={AMBER_DARK} sw={2.6} dur={0.4} />
        <T x={775} y={168} size={13} fill={AMBER_DARK} anchor="start">
          a
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d="M 660 220 V 380 H 860 V 220" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <T x={760} y={400} size={13} fill={AMBER_DARK} anchor="middle">
          g<TSpan fontSize={9} dy={3}>eff</TSpan>
          <TSpan dy={-3}> = g−a</TSpan>
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={440} size={20} fill={GREEN} weight={800} anchor="middle">
          g<TSpan fontSize={13} dy={4}>eff</TSpan>
          <TSpan dy={-4}> = g ± a</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={475} size={17} fill={INK} weight={700} anchor="middle">
          P = P₀ + ρ(g ± a)h
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 500 L 460 524" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={520} size={14} fill={RED} script anchor="start">
          {t("free fall: g_eff = 0 — no hydrostatic pressure", "free fall: g_eff = 0 — hydrostatic pressure nahi")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={556} size={14} fill={GREEN} script anchor="middle">
          {t("only the surface pressure remains in free fall", "free fall mein sirf surface pressure bachta")}
        </T>
      </Fade>
    </Scene>
  );
}
