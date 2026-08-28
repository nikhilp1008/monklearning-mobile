/**
 * Ch04 · Section 50 — "Three ways to turn: friction, banking, or both"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.7, 36.7, 60.9, 85.8, 110.6, 135.4, 160.3]):
 *  0 title
 *  1 panel 1: flat road, N vertical, friction inward
 *  2 red note: friction fragile — wet ice, ceiling μsN
 *  3 panel 2: banked road, N tilted, N sinθ inward + elegance note
 *  4 green note: N always there, banking aims it — highways tilted
 *  5 red margin: only frictionless at design speed
 *  6 panel 3: both together, friction up/down the slope + safe range
 *  7 amber note: standing assumption — uniform circular motion
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · three panels, lowest stroke ≈ y245 (panel3 down-slope arrow):
 *  P1 | road M80 220 H350 · car x175..245 y185..220 · N arr (210,185)→(210,140) ·
 *    f arr (175,203)→(120,203) · caption cx215 bl 278
 *  P2 | tilted road (wedge) · car x500..560 y208..238 · N arr (530,208)→(555,150) ·
 *    caption cx545 bl 278
 *  P3 | tilted road (wedge) · car x830..890 y208..238 · up-slope + down-slope
 *    friction arrows (reach y245) · caption cx875 bl 278
 *  caption row bl 278 (≥17px clear of every stroke above)
 *  b2 (panel1 detail) st x70 bl 312 / 336
 *  b4 (panel2 detail) st x420 bl 312 / 336 (kept short of panel3's x780 start)
 *  b6 (panel3 detail) st x780 bl 312 / 336 / 360 (kept inside x≤1044)
 *  b5 | bar x66 y378..452 · lines st x84 bl 398 / 422
 *  b7 line cx540 bl 468 note bl 492
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "how a road actually supplies the inward force",
            "sadak asal mein inward force kaise deti hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — flat road, friction alone */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 80 220 H 350"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 175 185 h 70 v 35 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.4)}
        d={arrowD(210, 185, 210, 140)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(175, 203, 120, 203)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={210} y={128} size={11} fill={GREEN} weight={700}>
          N
        </T>
        <T x={148} y={195} size={11} fill={AMBER_DARK} weight={700}>
          f
        </T>
        <T x={215} y={278} size={12} fill={AMBER_DARK} script>
          {t("1 · flat — friction alone", "1 · flat — sirf friction")}
        </T>
      </Fade>

      {/* beat 2 — friction is fragile */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={70} y={312} size={12} fill={RED} script anchor="start">
          {t(
            "N is vertical — never points inward",
            "N vertical — kabhi andar nahi ishaara karta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={70} y={336} size={12} fill={RED} script anchor="start">
          {t(
            "friction is fragile — wet/icy roads, a ceiling μsN",
            "friction nazuk — geeli/barfeeli sadak, chhat μsN"
          )}
        </T>
      </Fade>

      {/* beat 3 — banking */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 410 220 L 680 220 L 680 200 L 425 197 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 500 208 h 60 v 30 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.8)}
        d={arrowD(530, 208, 555, 150)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={568} y={148} size={11} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={545} y={278} size={12} fill={AMBER_DARK} script>
          {t("2 · banked — N alone", "2 · banked — sirf N")}
        </T>
      </Fade>

      {/* beat 4 — elegance */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={420} y={312} size={12} fill={GREEN} script anchor="start">
          {t(
            "N is always there — banking aims part of it inward",
            "N hamesha hai — banking hissa andar modti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={420} y={336} size={12} fill={GREEN} script anchor="start">
          {t(
            "why highway curves and rails are visibly tilted",
            "highway ke mod, pataryan jhuki dikhti hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — only at design speed */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 378 v 74" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={398} size={13} fill={RED} script anchor="start">
          {t(
            "frictionless at ONE design speed only — off that speed, friction fills the gap",
            "sirf EK design speed par friction-free — usse alag speed par friction bharti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={422} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "which is exactly why real roads need BOTH →",
            "isiliye asli sadak ko DONO chahiye →"
          )}
        </T>
      </Fade>

      {/* beat 6 — both together */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 740 220 L 1000 220 L 1000 200 L 755 197 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 830 208 h 60 v 30 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.8)}
        d={arrowD(840, 223, 800, 245)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.4)}
        d={arrowD(880, 223, 918, 200)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={875} y={278} size={12} fill={AMBER_DARK} script>
          {t("3 · both together", "3 · dono saath")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={780} y={312} size={12} fill={GREEN} script anchor="start">
          {t("slow → friction pushes UP the slope", "dheere → friction UPAR dhakelti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={780} y={336} size={12} fill={GREEN} script anchor="start">
          {t("fast → friction pushes DOWN", "tez → friction NEECHE dhakelti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.5)}>
        <T x={780} y={360} size={12} fill={AMBER_DARK} script anchor="start">
          {t("a safe RANGE, not one speed", "ek safe RANGE, ek speed nahi")}
        </T>
      </Fade>

      {/* beat 7 — standing assumption */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={468} size={14} fill={AMBER_DARK} script>
          {t(
            "standing assumption for every formula ahead: UNIFORM circular motion",
            "aage ke har formula ki base: UNIFORM circular motion"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={540} y={492} size={13} fill={MUTED} script>
          {t(
            "constant speed, no tangential acceleration — only the centripetal one",
            "constant speed, koi tangential acceleration nahi — sirf centripetal"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
