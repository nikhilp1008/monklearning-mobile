/**
 * Ch03 · Section 57 — "The toolkit: crossing a river and dodging the rain"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.5, 16.4, 29.6, 43.4, 59.2, 70.7, 81.6]):
 *  0 heading
 *  1 shortest TIME: point straight across
 *  2 t = d/v_boat + drift
 *  3 shortest PATH: aim upstream
 *  4 sinθ = v_r/v_b, effective speed
 *  5 rain: tilt set by speed ratio
 *  6 tanφ = v_man/v_rain
 *  7 red: never conflate the two strategies
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | header st x84 bl 112 s13 · underline M84 120 h380
 *  b2 | st x104 bl 150 s14 · caption st x104 bl 176 s11
 *  b3 | header st x84 bl 222 s13 · underline M84 230 h380
 *  b4 | st x104 bl 260 s14 · st x104 bl 288 s14
 *  b5 | header st x600 bl 112 s13 · underline M600 120 h330
 *  b6 | box x600..960 y140..186 text cx780 bl 172 s16 · caption st x600 bl 212 s11
 *  b7 | bar M66 340 v78 · lines st x84 bl 358 / 382 / 406 s12
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec57({ currentTime, reveals, language }: SceneProps) {
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
            "TOOLKIT 2 — the boat and the rain, solved",
            "TOOLKIT 2 — naav aur baarish, solve karke"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — shortest time */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={84} y={112} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "SHORTEST TIME — point the boat straight across",
            "SHORTEST TIME — naav seedha saamne rakho"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 84 120 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — its formulas */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={104} y={150} size={14} fill={INK} weight={700} anchor="start">
          t min = d ⁄ v boat · drift = v river × t
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={104} y={176} size={11} fill={MUTED} script anchor="start">
          {t(
            "time depends ONLY on the across-speed — accept the drift",
            "time sirf aar-paar wali speed par — drift sweekar karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — shortest path */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={222} size={13} fill={GREEN} script anchor="start">
          {t(
            "SHORTEST PATH — land directly opposite: aim UPSTREAM",
            "SHORTEST PATH — theek saamne utrо: UPSTREAM nishana lo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 84 230 h 380" stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 4 — its formulas */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={104} y={260} size={14} fill={INK} weight={700} anchor="start">
          sin θ = v river ⁄ v boat
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={104} y={288} size={14} fill={INK} weight={700} anchor="start">
          t = d ⁄ √(v boat² − v river²)
        </T>
      </Fade>

      {/* beat 5 — the rain */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={600} y={112} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "THE RAIN — tilt is set by the speed ratio",
            "BAARISH — jhukav speed ke ratio se tay"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d="M 600 120 h 330" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 6 — the tilt formula */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 612 140 h 336 q 12 0 12 12 v 22 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={780} y={172} size={16} fill={INK} weight={800}>
          tan φ = v man ⁄ v rain
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={600} y={212} size={11} fill={MUTED} script anchor="start">
          {t(
            "walk faster → bigger tilt · stand still → umbrella straight up",
            "tez chalo → zyada jhukav · khade raho → chhata seedha upar"
          )}
        </T>
      </Fade>

      {/* beat 7 — never conflate */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 340 v 78" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={358} size={12} fill={RED} script anchor="start">
          {t(
            "shortest TIME and shortest PATH are DIFFERENT strategies, different headings",
            "shortest TIME aur shortest PATH ALAG chaalein hain, alag headings"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={382} size={12} fill={RED} script anchor="start">
          {t(
            "time: straight across, accept drift · path: aim upstream, take longer",
            "time: seedha paar, drift manzoor · path: upstream nishana, samay zyada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={84} y={406} size={12} fill={INK} script anchor="start">
          {t(
            "read which one the question is asking for — never conflate them",
            "padho ki sawaal kaunsa maang raha hai — dono ko kabhi mat milao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
