/**
 * Ch06 · Section 68 — "Common pitfalls and pro-tips" (Rolling Motion)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,7.34,21.5,36.27,47.62,57.94,73.98,89.86] — b7 fast in EN;
 * hi [0,1,2,3,4,14.58,27.47,43.59] — b0..b3 fast in HI →
 * b0..b3 and b7 kept ≤0.9 s; b4,b5,b6 have room in both):
 *  0 title + red underline
 *  1 trap 1: only translational energy counted, missing ½Iω²
 *  2 sub: always carry the bracket 1+K²/R²
 *  3 trap 2: forgetting v = ωR
 *  4 trap 3: heavier/bigger wins — mass & radius cancel
 *  5 trap 4: friction does no work at the contact point
 *  6 green pro-tip: energy conservation is faster than forces
 *  7 shape-factor chips: ring=1, disc=½, sphere=2/5 + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl52 · underline y72 x300..780
 *  b1 | script14 st x80 bl125
 *  b2 | script12 st x100 bl153
 *  b3 | script14 st x80 bl205
 *  b4 | script14 st x80 bl265
 *  b5 | script14 st x80 bl325
 *  b6 | green box x80..1000 y springs 380..445 · L1 script13 cx540 bl408 · L2 script12 cx540 bl432
 *  b7 | chips y springs 470 h34: x springs 200 w200 / x springs 440 w200 / x springs 680 w200 ·
 *       underline y springs 520 x springs 300..780
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, MUTED, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — closing rolling, and the chapter proper */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("rolling traps that cost marks", "rolling ke marks khaane waale traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 300 72 h 480" stroke={RED} sw={2.2} dur={0.5} />

      {/* beat 1 — trap 1: missing the spin energy */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={125} size={14} fill={RED} script anchor="start">
          {t(
            "1 · counting ONLY translational energy — you also store ½Iω²",
            "1 · SIRF translational energy ginna — ½Iω² bhi jamaa hoti"
          )}
        </T>
      </Fade>

      {/* beat 2 — the bracket habit */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={153} size={12} fill={MUTED} script anchor="start">
          {t(
            "always carry the bracket 1 + K²/R² — that IS rolling vs sliding",
            "hamesha bracket 1 + K²/R² rakho — yahi rolling vs sliding hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 2: forgetting the rolling condition */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={205} size={14} fill={RED} script anchor="start">
          {t(
            "2 · forgetting v = ωR — without it the problem won't close",
            "2 · v = ωR bhoolna — iske bina problem band nahi hoti"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 3: heavier/bigger wins */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={265} size={14} fill={RED} script anchor="start">
          {t(
            "3 · thinking heavier or bigger wins the race — mass AND radius cancel",
            "3 · sochna bhaari ya bada jeetta — mass AUR radius cancel hote"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 4: friction does no work */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={80} y={325} size={14} fill={RED} script anchor="start">
          {t(
            "4 · believing friction does work here — the contact point is at rest",
            "4 · sochna friction yahan work karti — contact point sthir hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 92 380 h 896 q 12 0 12 12 v 41 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={408} size={13} fill={GREEN_DARK} script>
          {t(
            "PRO-TIP: released from a height? energy conservation beats forces",
            "PRO-TIP: height se chhode? energy conservation forces se tez"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={540} y={432} size={12} fill={MUTED} script>
          {t(
            "keep the three shape factors on instant recall",
            "teen shape factors instant recall mein rakho"
          )}
        </T>
      </Fade>

      {/* beat 7 — the three numbers (fast) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={200} y={470} w={200} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          ring: 1
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={440} y={470} w={200} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          disc: ½
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={680} y={470} w={200} h={34} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={14} script={false}>
          sphere: 2/5
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 300 520 h 480" stroke={GREEN} sw={2.2} dur={0.5} />
    </Scene>
  );
}
