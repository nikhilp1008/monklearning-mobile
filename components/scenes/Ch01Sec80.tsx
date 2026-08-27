/**
 * Ch01 · Section 80 — "The quiet rules that hold the methods together"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.4, 31.8, 56.7, 67.6, 86.1, 101.1, 121.6]):
 *  0 title + tally of four
 *  1 rule 1: D = b/θ — radians, small angle · arc≈chord mini-diagram
 *  2 far-versus-basis condition — the THIN triangle
 *  3 rule 2: d = αD — same maths, other end
 *  4 diameter treated as an arc — difference vanishes
 *  5 rule 3: monolayer + gapless packing
 *  6 order-of-magnitude estimate — 4 sig figs = misunderstanding
 *  7 rule 4: constant speed — superb in space, not free in air/water
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 110/228/316/404) · main lines st x104 bl 116/234/322/410
 *  b1 | arc M900 150 q60 −55 120 0 · chord line · labels 11
 *  b2 | indent st x124 bl 152 · muted bl 180
 *  b4 | indent st x124 bl 268
 *  b6 | red st x124 bl 356
 *  b7 | amber st x124 bl 444 · underline line bl 478
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cy, on, delay }: { n: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.4}>
        <T x={76} y={cy + 5.5} size={15} fill={AMBER_DARK} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch01Sec80({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t(
            "four quiet rules — nobody says them, all examinable",
            "chaar khamosh niyam — koi kehta nahi, sab examinable"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 950 44 v 22 M 965 44 v 22 M 980 44 v 22 M 995 44 v 22"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — rule 1 */}
      <Badge n={1} cy={110} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={116} size={15} fill={INK} script anchor="start">
          {t(
            "D = b ⁄ θ — θ in RADIANS, and small, so that the arc equals the chord",
            "D = b ⁄ θ — θ RADIANS mein, aur chhota, taaki chaap jeeva ke barabar ho"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 10)}
        d="M 890 148 q 60 -48 120 0 M 890 148 L 1010 148"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 11.5)}>
        <T x={950} y={112} size={11} fill={AMBER_DARK} script>{t("arc", "chaap")}</T>
        <T x={950} y={168} size={11} fill={MUTED} script>{t("chord", "jeeva")}</T>
      </Fade>

      {/* beat 2 — the thin-triangle condition */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={124} y={152} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "valid only when the object is FAR versus the basis — a fat triangle collapses the relation",
            "sirf tab jab vastu basis se bahut DOOR ho — mota tribhuj relation ko dhaha deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={124} y={180} size={13} fill={MUTED} script anchor="start">
          {t(
            "astronomy satisfies it magnificently — that is why we say THIN triangle",
            "khagol ise shaandar dhang se poora karta — isiliye kehte hain PATLA tribhuj"
          )}
        </T>
      </Fade>

      {/* beat 3 — rule 2 */}
      <Badge n={2} cy={228} on={beat >= 3} delay={dl(3, 0.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={104} y={234} size={15} fill={INK} script anchor="start">
          {t(
            "d = α D — the same mathematics, applied at the other end (α in radians)",
            "d = α D — wahi ganit, doosre chhor par lagaya (α radians mein)"
          )}
        </T>
      </Fade>

      {/* beat 4 — diameter as an arc */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={124} y={268} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "it treats the Moon's straight diameter as an arc — at small angles the difference vanishes",
            "yeh chaand ke seedhe vyaas ko chaap maanta hai — chhote kono par farq gaayab"
          )}
        </T>
      </Fade>

      {/* beat 5 — rule 3 */}
      <Badge n={3} cy={316} on={beat >= 5} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={104} y={322} size={15} fill={INK} script anchor="start">
          {t(
            "the oil film: assumes an exact MONOLAYER, packed without gaps — approximately, never exactly, true",
            "tel ki film: theek ek MONOLAYER, bina khaali jagah — lagbhag sach, theek-theek kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — an estimate, honestly reported */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={124} y={356} size={14} fill={RED} script anchor="start">
          {t(
            "so it yields an order-of-magnitude ESTIMATE — four sig figs = misunderstanding the experiment",
            "to yeh order-of-magnitude ka ANUMAAN deta hai — chaar sig figs = prayog ko samjha hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — rule 4 */}
      <Badge n={4} cy={404} on={beat >= 7} delay={dl(7, 0.5)} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={104} y={410} size={15} fill={INK} script anchor="start">
          {t(
            "echo methods assume the pulse speed is constant along the whole path",
            "echo vidhiyan maanti hain ki pulse ki chaal poore raaste sthir hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={124} y={444} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "space: superb · air / water: temperature changes it mid-flight (a SONAR thermocline)",
            "antariksh: shaandar · hawa / paani: temperature beech raaste chaal badal deta (SONAR thermocline)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={124} y={478} size={14} fill={GREEN} script anchor="start">
          {t(
            "the assumption is usually fine — it is not free",
            "dhaarna aam taur par theek hai — muft nahi hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 21)}
        d="M 124 494 C 220 490, 380 498, 500 493"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
    </Scene>
  );
}
