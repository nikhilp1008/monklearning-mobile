/**
 * Ch06 · Section 60 — "Rolling: two motions at once"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,11.86,24.75,33.19,48.55,61.35,72.53,83.29]; hi [0,1,2,3,4,5,
 * 14.3,24.8] — b0..b4 fast in HI → kept ≤0.9 s; b5,b6,b7 have room in both):
 *  0 title + subline
 *  1 figure: wheel — bottom v=0, centre v, top 2v
 *  2 two motions at once: CoM glides + wheel spins
 *  3 no slipping ⇒ v_cm = ωR — the lock
 *  4 contact point momentarily at rest → gentle friction
 *  5 velocity-stack chips: 0 / v / 2v
 *  6 instantaneous axis at the contact point
 *  7 break the lock → slipping (tyres on ice)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | ground (100,250)→(400,250) · circle c(230,180) r70 · bottom dot
 *       (230,250) "0" cx230 bl268 · centre dot (230,180) arrow →(280,180)
 *       "v" st(288,184) · top dot (230,110) arrow →(330,110) "2v" st(338,114)
 *  b2 | script13 cx540 bl300
 *  b3 | sans15 cx540 bl335
 *  b4 | script13 cx540 bl365
 *  b5 | chips y springs h34 y springs 395: x120 w270 / x405 w270 / x690 w270
 *  b6 | script13 cx540 bl460
 *  b7 | script13 cx540 bl500 · underline y springs 518 x springs 300..780
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the natural finale */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("rolling: two motions at once", "rolling: ek saath do motions")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "translation and rotation, fused into one",
            "translation aur rotation, ek mein jude hue"
          )}
        </T>
      </Fade>

      {/* beat 1 — the surprising velocity picture */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 100 250 H 400" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 160 180 a 70 70 0 1 0 140 0 a 70 70 0 1 0 -140 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 226 250 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={230} y={268} size={12} fill={INK} weight={700}>
          0
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.65)}
        d={arrowD(230, 180, 280, 180)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={288} y={184} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(230, 110, 330, 110)}
        stroke={GREEN_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={338} y={114} size={12} fill={GREEN_DARK} anchor="start" weight={700}>
          2v
        </T>
      </Fade>

      {/* beat 2 — two motions at once */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={300} size={13} fill={INK} script>
          {t(
            "the CoM glides forward — AND the wheel spins",
            "CoM aage sarkta — AUR wheel spin karta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the lock */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={335} size={15} fill={INK} weight={700}>
          {t("no slipping ⇒ ", "koi slip nahi ⇒ ")}v
          <TSpan dy={5} fontSize={11}>
            cm
          </TSpan>
          <TSpan dy={-5}> = ωR</TSpan>
        </T>
      </Fade>

      {/* beat 4 — gentle friction */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={365} size={13} fill={GREEN_DARK} script>
          {t(
            "contact point momentarily at rest → gentle friction, not dragging",
            "contact point pal bhar ke liye sthir → halka friction, ghaseetna nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the velocity stack */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={120} y={395} w={270} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("bottom: v = 0", "bottom: v = 0")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <Chip x={405} y={395} w={270} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("centre: v", "centre: v")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Chip x={690} y={395} w={270} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("top: 2v", "top: 2v")}
        </Chip>
      </Fade>

      {/* beat 6 — the instantaneous axis */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={460} size={13} fill={INK} script>
          {t(
            "the contact point is an instantaneous axis — the whole wheel rotates about it",
            "contact point ek instantaneous axis hai — poora wheel usi ke baare mein ghoomta"
          )}
        </T>
      </Fade>

      {/* beat 7 — break the lock */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={500} size={13} fill={GREEN_DARK} script>
          {t(
            "break the lock → it slips: tyres spinning on ice, a skidding wheel",
            "lock toodo → slip hota: barf par ghoomte tyre, skid karta wheel"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3)} d="M 300 518 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
