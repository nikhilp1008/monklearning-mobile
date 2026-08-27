/**
 * Ch01 · Section 81 — "Procedures A and B: parallax, and size from angle"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.2, 25.6, 49.8, 70.5, 92.5, 111.1, 125.2]):
 *  0 title
 *  1 A step 1: pick a KNOWN basis
 *  2 the six-month trick: orbit diagram, basis = 2 AU
 *  3 A step 2: measure θ → radians immediately
 *  4 A step 3: D = b/θ + thin-triangle reason
 *  5 A step 4: sanity check — bigger parallax = closer
 *  6 B header + step 1: α in radians, know D
 *  7 B step 2: d = αD box · one triangle, two questions
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  left x60..520: header bl 92 · s1 bl 128 (sub 154) · orbit ellipse c(200,225) rx90 ry32 · note cx220 bl 285
 *  left: s2 bl 322 (sub 348) · s3 bl 390 (sub 418) · s4 bl 460 (sub 486)
 *  right x560..1020: header bl 92 · s1 13 bl 128 · box x572..812 y150..196 (20 bl 180) · sub bl 224
 *  right: lines 13 bl 268/296 · chip x600..920 y320..356
 */

import React from "react";
import { Ellipse } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
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

export default function Ch01Sec81({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "parallax, and size from angle — airtight procedures",
            "parallax, aur kon se aakaar — pakki procedures"
          )}
        </T>
      </Fade>

      {/* beat 1 — A · step 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={60} y={92} size={16} fill={AMBER_DARK} script anchor="start">
          {t("A — distance by parallax", "A — parallax se doori")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 60 104 h 230" stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={60} y={128} size={14} fill={INK} script anchor="start">
          {t(
            "1 · pick a basis b — a separation you KNOW",
            "1 · basis b chuno — aisi doori jo tum JAANTE ho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={84} y={154} size={12} fill={RED} script anchor="start">
          {t(
            "unknown basis ⇒ nothing downstream can be trusted",
            "basis pata nahi ⇒ aage kisi cheez par bharosa nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the six-month trick */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Ellipse cx={200} cy={225} rx={90} ry={32} fill="none" stroke={INK_LIGHT} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d="M 194 225 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 M 106 225 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 284 225 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={96} y={205} size={11} fill={INK_LIGHT}>Jan</T>
        <T x={300} y={205} size={11} fill={INK_LIGHT}>Jul</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={220} y={285} size={12} fill={AMBER_DARK} script>
          {t(
            "wait 6 months — Earth carries the telescope · basis = 2 AU",
            "6 mahine ruko — dharti doorbeen le jaati · basis = 2 AU"
          )}
        </T>
      </Fade>

      {/* beat 3 — A · step 2 */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={60} y={322} size={14} fill={INK} script anchor="start">
          {t(
            "2 · sight from both ends, measure θ between the lines",
            "2 · dono chhor se dekho, lines ke beech θ naapo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={84} y={348} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "convert to RADIANS immediately — degrees arrive, radians compute",
            "foran RADIANS mein badlo — aata degree hai, chalta radians hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — A · step 3 */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={390} size={17} fill={INK} weight={700} anchor="start">
          3 · D = b ⁄ θ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={84} y={418} size={13} fill={MUTED} script anchor="start">
          {t(
            "thin isosceles triangle: arc = radius × angle ⇒ b = Dθ",
            "patla samdvibahu tribhuj: chaap = trijya × kon ⇒ b = Dθ"
          )}
        </T>
      </Fade>

      {/* beat 5 — A · step 4 */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={460} size={14} fill={GREEN} script anchor="start">
          {t(
            "4 · sanity check: BIGGER parallax = CLOSER object",
            "4 · sanity check: BADA parallax = PAAS ki vastu"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={84} y={486} size={12} fill={RED} script anchor="start">
          {t(
            "big parallax AND big distance ⇒ you inverted the ratio",
            "bada parallax AUR badi doori ⇒ tumne anupaat ulat diya"
          )}
        </T>
      </Fade>

      {/* beat 6 — B header + step 1 */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={560} y={92} size={16} fill={AMBER_DARK} script anchor="start">
          {t("B — actual size from angular size", "B — angular size se asli aakaar")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d="M 560 104 h 250" stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={560} y={128} size={13} fill={INK} script anchor="start">
          {t(
            "1 · measure α in radians · know D — often from parallax first",
            "1 · α radians mein naapo · D jaano — aksar pehle parallax se"
          )}
        </T>
      </Fade>

      {/* beat 7 — B step 2 + one triangle */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 584 150 h 216 q 12 0 12 12 v 22 q 0 12 -12 12 h -216 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={692} y={180} size={20} fill={INK} weight={700}>2 · d = α D</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={560} y={224} size={13} fill={MUTED} script anchor="start">
          {t(
            "d is the arc subtended by α at radius D",
            "d wo chaap hai jo α trijya D par banata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={560} y={268} size={13} fill={INK} script anchor="start">
          {t(
            "parallax: knew the arc → wanted the radius",
            "parallax: chaap pata tha → trijya chahiye thi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={560} y={296} size={13} fill={INK} script anchor="start">
          {t(
            "size: know the radius → want the arc",
            "aakaar: trijya pata hai → chaap chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <Chip x={600} y={320} w={320} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("one triangle — two questions", "ek tribhuj — do sawaal")}
        </Chip>
      </Fade>
    </Scene>
  );
}
