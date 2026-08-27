/**
 * Ch05 · Section 52 — "The restitution coefficient, and collision geometry"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 33.0, 57.9, 81.9, 103.5, 128.3, 153.2, 163.6] · dur 188.4;
 *        hi [0, 10.8, 32.8, 57.6, 80.6, 100.4, 125.2, 150.0, 159.5] · dur 184.3):
 *  0 title + subtitle
 *  1 e definition chip
 *  2 bounciness meter 0 → 1
 *  3 how e slots in (e = 1, given e)
 *  4 head-on row (1-D)
 *  5 oblique row: line of impact + ⊥
 *  6 the simplification lines
 *  7 note line
 *  8 rule band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | chip x140..940 y104..142
 *  b2 | meter (200,200)-(880,200) · ticks 200/676/880 · lbls bl232
 *  b3 | cx540 bl275 / bl301
 *  b4 | line (90,355)-(420,355) · balls (150,355)/(250,355) r13 · arrow (95,340)→(133,340)
 *     | lbl st x440 bl360
 *  b5 | balls (170,430)/(230,455) r13 · impact line (140,417)-(260,468)
 *     | perp (188,470)-(212,415) · lbls st x290 bl425 / bl451
 *  b6 | st x580 bl420 / bl446 / bl472
 *  b7 | amber cx540 bl510
 *  b8 | bar x66 y530..590 · lines st x84 bl550 / bl576
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Restitution & Collision Geometry", "Restitution & Collision Geometry")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "a bounciness number — and head-on vs glancing",
            "ek bounciness number — aur head-on vs glancing"
          )}
        </T>
      </Fade>

      {/* beat 1 — e definition */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={140} y={104} w={800} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "e = speed of separation ⁄ speed of approach — along the line of impact",
            "e = speed of separation ⁄ speed of approach — line of impact ke along"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — the bounciness meter */}
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 200 200 H 880" stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 200 192 V 208 M 676 192 V 208 M 880 192 V 208" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={200} y={232} size={12.5} fill={RED} script>
          {t("0 — sticks (putty)", "0 — chipakta (putty)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={676} y={232} size={12.5} fill={AMBER_DARK} script>
          {t("0.7 — tennis ball", "0.7 — tennis ball")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={880} y={232} size={12.5} fill={GREEN} script>
          {t("1 — perfect bounce", "1 — perfect bounce")}
        </T>
      </Fade>

      {/* beat 3 — how e slots in */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={275} size={13} fill={GREEN} script>
          {t(
            "elastic? just set e = 1 — far easier than the KE equation",
            "elastic? bas e = 1 rakho — KE equation se kahin aasan"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={540} y={301} size={13} fill={AMBER_DARK} script>
          {t(
            "partial? the given e = your second equation, beside momentum",
            "partial? diya hua e = momentum ke saath doosri equation"
          )}
        </T>
      </Fade>

      {/* beat 4 — head-on */}
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d="M 90 355 H 420" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d="M 137 355 a 13 13 0 1 0 26 0 a 13 13 0 1 0 -26 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.9)} d="M 237 355 a 13 13 0 1 0 26 0 a 13 13 0 1 0 -26 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.7)} d={arrowD(95, 335, 133, 335)} stroke={AMBER} sw={2.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={440} y={360} size={13} fill={INK} script anchor="start">
          {t(
            "head-on: everything on ONE line — clean 1-D",
            "head-on: sab EK line par — saaf 1-D"
          )}
        </T>
      </Fade>

      {/* beat 5 — oblique */}
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d="M 157 430 a 13 13 0 1 0 26 0 a 13 13 0 1 0 -26 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d="M 217 455 a 13 13 0 1 0 26 0 a 13 13 0 1 0 -26 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 140 417 L 260 468" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.5)} d="M 188 470 L 212 415" stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <T x={290} y={425} size={12.5} fill={AMBER_DARK} script anchor="start">
          {t(
            "line of impact — through the centres",
            "line of impact — dono centres se hokar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={290} y={451} size={12.5} fill={MUTED} script anchor="start">
          {t("resolve along it — and ⊥ to it", "uske along resolve karo — aur ⊥ mein bhi")}
        </T>
      </Fade>

      {/* beat 6 — the simplification */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={580} y={420} size={13} fill={GREEN} script anchor="start">
          {t(
            "the force acts ONLY along the line of impact",
            "force SIRF line of impact ke along lagta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={580} y={446} size={13} fill={INK} script anchor="start">
          {t(
            "→ only those components change in the collision",
            "→ collision mein sirf wahi components badalte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 16)}>
        <T x={580} y={472} size={13} fill={GREEN} script anchor="start">
          {t(
            "⊥ components sail through, completely unchanged",
            "⊥ components seedhe nikal jaate hain, bilkul waise ke waise"
          )}
        </T>
      </Fade>

      {/* beat 7 — the note */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={510} size={13} fill={AMBER_DARK} script>
          {t(
            "note: restitution applies to line-of-impact components ONLY",
            "note: restitution SIRF line-of-impact components par lagta hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — the rule */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 530 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={550} size={13} fill={GREEN} script anchor="start">
          {t(
            "split into two clean directions: p + e along the line · ⊥ exactly as it was",
            "do saaf directions mein baanto: line ke along p + e · ⊥ jaisa tha waisa"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <T x={84} y={576} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a frightening 2-D collision → two manageable pieces",
            "daraavna 2-D collision → do sambhalne laayak tukde"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
