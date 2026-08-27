/**
 * Ch05 · Section 27 — "Two shopkeepers: the honest force and the skimmer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.0, 40.9, 65.7, 87.8, 112.6, 137.5] · dur 149.9;
 *        hi [0, 16.7, 41.6, 66.4, 90.5, 115.3, 140.1] · dur 153.5):
 *  0 title + subtitle
 *  1 two shopkeeper panels: honest vs skimmer + deposit lines
 *  2 conservative panel: lift/fall, all of it back
 *  3 skimmer panel: friction takes both ways
 *  4 precision: not destroyed, left the mechanical budget
 *  5 link: storage → U; friction gets none
 *  6 margin note band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | divider x540 y110..280 · headers cx290 / cx810 bl130 · deposit lines bl168
 *  b2 | left: bl210 / bl236 / bl262 · b3 | right: bl210 / bl236 / bl262
 *  b4 | cx540 bl310 / bl336 / bl362
 *  b5 | cx540 bl402 / bl428
 *  b6 | bar x66 y460..520 · lines st x84 bl480 / bl506
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Two Shopkeepers: the Honest & the Skimmer", "Do Dukandaar: Imaandaar aur Kaatne Wala")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the conceptual heart of the chapter — built on an unforgettable picture",
            "chapter ka vaicharik dil — ek na bhoolne waali picture par bana"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two panels */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 540 110 V 280" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={290} y={130} size={15} fill={GREEN} script>
          {t("HONEST — conservative", "IMAANDAAR — conservative")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={810} y={130} size={15} fill={RED} script>
          {t("SKIMMER — non-conservative", "KAATNE WALA — non-conservative")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={290} y={168} size={12.5} fill={GREEN} script>
          {t(
            "deposit 100 → withdraw 100, to the last rupee",
            "100 jama karo → 100 nikaalo, aakhri rupaye tak"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 16)}>
        <T x={810} y={168} size={12.5} fill={RED} script>
          {t(
            "deposit 100 → withdraw 92 — skims every pass",
            "100 jama karo → 92 wapas — har baar kaat leta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the honest force */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={290} y={210} size={12.5} fill={INK} script>
          {t(
            "lift a stone: gravity does −W — energy stored",
            "patthar uthao: gravity −W karti hai — energy jama"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={290} y={236} size={12.5} fill={GREEN} script>
          {t(
            "let it fall: exactly equal +W — ALL of it back",
            "girne do: bilkul barabar +W — POORA wapas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={290} y={262} size={12} fill={MUTED} script>
          {t(
            "pen spring · stretched bow · Earth's pull — all play fair",
            "pen ka spring · khincha dhanush · Earth ki khichaav — sab imaandaar"
          )}
        </T>
      </Fade>

      {/* beat 3 — the skimmer */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={810} y={210} size={12.5} fill={INK} script>
          {t(
            "friction: slide there → −W, KE becomes heat",
            "friction: udhar sarkao → −W, KE heat ban gayi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={810} y={236} size={12.5} fill={RED} script>
          {t(
            "slide back → −W AGAIN — it never flips sign",
            "wapas sarkao → PHIR −W — sign kabhi nahi palatta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={810} y={262} size={12} fill={MUTED} script>
          {t(
            "takes on the way there AND the way back",
            "jaate waqt bhi leta hai, aate waqt bhi"
          )}
        </T>
      </Fade>

      {/* beat 4 — precision about skimming */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={310} size={13} fill={INK} script>
          {t(
            "the skimmed energy is NOT destroyed — it warms the table and the book",
            "kaati hui energy nasht NAHI hoti — mez aur kitaab garam hoti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={540} y={336} size={13} fill={AMBER_DARK} script>
          {t(
            "but it has left the mechanical budget forever — it became heat",
            "par wo mechanical budget se hamesha ke liye gayi — heat ban gayi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 18)}>
        <T x={540} y={362} size={13} fill={GREEN} script>
          {t(
            "lost from mechanics, not from the universe",
            "mechanics se khoi, universe se nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the link to potential energy */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={402} size={13} fill={GREEN} script>
          {t(
            "give it back → you can store in it → loaded batteries → they get a U",
            "wapas dete hain → unmein jama kar sakte ho → loaded batteries → unka U hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={540} y={428} size={13} fill={RED} script>
          {t(
            "friction: nothing stored, nothing to retrieve → no U, ever",
            "friction: kuchh jama nahi, wapas kuchh nahi → koi U nahi, kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the margin note */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 460 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "margin note: you cannot build a friction potential energy",
            "margin note: friction ki potential energy ban hi nahi sakti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "storage is a conservative-only privilege",
            "bhandaran sirf conservative walon ka visheshadhikar hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
