/**
 * C11 Chemistry Ch03 · Section 36 — "Why second-period elements break the rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. JEE Advanced favourite anomaly.
 *
 * Beats (en [0, 12.89, 35.5, 47.27, 59.48, 76.97, 89.51, 97.45]):
 *  0 title + underline
 *  1 Lever 1: small + high charge density ⇒ covalent, diagonal drift
 *  2 Lever 2: only 2s, 2p available — no d-orbitals
 *  3 red-margin: no low-lying 2d ⇒ CANNOT expand the octet
 *  4 N (period 2, no d) → NCl5 impossible; P (period 3, has 3d) → PCl5 exists
 *  5 F: no d-orbitals + most EN ⇒ only −1
 *  6 Cl and below: reach +7 using d-orbitals
 *  7 red-margin flag: N/O/F pushed high ⇒ "impossible, no d-orbitals"
 *
 * Layout plan:
 *  b1-2 | 2 lines                    | T mid | x?..?     y95..129 (bl100/124)
 *  b3 | red margin bar + line        | Draw  | x70 y135..167 (bl 157)
 *  b4 | N panel + NCl5 (crossed)     | Draw  | x180..380 y200..271
 *  b4 | P panel + PCl5 (checked)     | Draw  | x700..900 y200..271
 *  b5 | F line (13,w700,red)         | T mid | x?..?     y296..310 (bl 310)
 *  b6 | Cl line (13,w700,green)      | T mid | x?..?     y319..333 (bl 333)
 *  b7 | red margin bar + flag        | Draw  | x70 y350..386 (bl 372)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("why second-period elements break the rules", "second-period elements rules kyun todte")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Lever 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("Lever 1: small + high charge density ⇒ covalent, diagonal drift", "Lever 1: chhota + high charge density ⇒ covalent, diagonal drift")}
        </T>
      </Fade>

      {/* beat 2 — Lever 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={124} size={13} weight={700} fill={AMBER_DARK}>
          {t("Lever 2: only 2s, 2p available — no d-orbitals", "Lever 2: sirf 2s, 2p available — d-orbitals nahi")}
        </T>
      </Fade>

      {/* beat 3 — red-margin: cannot expand the octet */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 135 L 70 167" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={157} size={15} weight={700} fill={INK} anchor="start">
          {t("no low-lying 2d ⇒ CANNOT expand the octet", "low-lying 2d nahi ⇒ octet expand NAHI ho sakta")}
        </T>
      </Fade>

      {/* beat 4 — N vs P: the orbital-availability contrast */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={280} y={200} size={14} weight={800} fill={INK}>N (period 2)</T>
        <T x={280} y={222} size={12} fill={MUTED}>{t("available: 2s 2p only", "available: sirf 2s 2p")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Chip x={180} y={235} w={200} h={36} fill="#FFFEFB" stroke={RED} textFill={RED} size={15} script={false}>
          {t("NCl₅ — impossible", "NCl₅ — impossible")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={crossD(180, 235, 200, 36)} stroke={RED} sw={2.2} dur={0.5} />

      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={800} y={200} size={14} weight={800} fill={INK}>P (period 3)</T>
        <T x={800} y={222} size={12} fill={MUTED}>{t("available: 3s 3p 3d", "available: 3s 3p 3d")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <Chip x={700} y={235} w={200} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("PCl₅ — exists ✓", "PCl₅ — exists ✓")}
        </Chip>
      </Fade>

      {/* beat 5 — fluorine, the extreme case */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={310} size={13} weight={700} fill={RED}>
          {"F: no d-orbitals + most EN ⇒ ONLY −1 state"}
        </T>
      </Fade>

      {/* beat 6 — chlorine and below */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={333} size={13} weight={700} fill={GREEN}>
          {t("Cl and below: reach +7 using d-orbitals", "Cl aur neeche: d-orbitals se +7 tak")}
        </T>
      </Fade>

      {/* beat 7 — red-margin: the exam flag */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 70 350 L 70 386" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={94} y={372} size={15} weight={700} fill={INK} anchor="start">
          {t("FLAG: N/O/F pushed to high covalency ⇒ 'no d-orbitals'", "FLAG: N/O/F ko high covalency ⇒ 'd-orbitals nahi'")}
        </T>
      </Fade>
    </Scene>
  );
}
