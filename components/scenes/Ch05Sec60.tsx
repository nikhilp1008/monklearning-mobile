/**
 * Ch05 · Section 60 — "The full derivation of the minimum speeds"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.3, 27.0, 28.0, 52.8, 77.6, 89.2, 106.5, 131.3] · dur 142.8 —
 *        b2 lasts ~1s in en → en-tiny delays;
 *        hi [0, 13.9, 25.7, 50.0, 74.8, 99.7, 112.2, 128.3, 153.2] · dur 162.2):
 *  0 title + subtitle
 *  1 three-step flowchart chips
 *  2 step 1: top forces (en tiny)
 *  3 step 2: T = 0 → √(gR)
 *  4 step 3: energy down, v_b² equation
 *  5 = 5gR chip
 *  6 bottom tension → 6mg
 *  7 the single idea band
 *  8 rebuild-from-scratch line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | chips y110..146: x110..310 / x360..540 / x590..850 · arrows
 *  b2 | lbl st x80 bl190 · f bl220 · note bl246
 *  b3 | lbl bl286 · f bl316 · chip x90..380 y336..374 · note cx235 bl400
 *  b4 | lbl st x560 bl190 · f bl220 / bl248
 *  b5 | f st x560 bl286 · chip x560..880 y306..344
 *  b6 | st x560 bl384 · note bl410
 *  b7 | bar x66 y450..540 · lines st x84 bl470 / bl496 · b8 | bl522
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Deriving the Minimum Speeds, Fully", "Minimum Speeds ki Poori Derivation")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the exact sequence CBSE wants — logic once, no blind memorising",
            "wahi kram jo CBSE chahta hai — logic ek baar, ratta kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the flowchart */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={110} y={110} w={200} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t("1 · top condition", "1 · top condition")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={arrowD(314, 128, 356, 128)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <Chip x={360} y={110} w={180} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t("2 · set T = 0", "2 · T = 0 rakho")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(544, 128, 586, 128)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <Chip x={590} y={110} w={260} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t("3 · energy to the bottom", "3 · bottom tak energy")}
        </Chip>
      </Fade>

      {/* beat 2 — step 1 (en: ~1s beat) */}
      <Fade on={beat >= 2} delay={dl(2, en ? 0.2 : 1)}>
        <T x={80} y={190} size={13} fill={AMBER_DARK} script anchor="start">
          {t("step 1 — forces at the top", "step 1 — top par forces")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, en ? 0.5 : 5)}>
        <T x={90} y={220} size={15} fill={INK} anchor="start" weight={700}>
          T + mg = m v_top² ⁄ R
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, en ? 0.8 : 12)}>
        <T x={90} y={246} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "Newton's II law along the radius — both forces point down",
            "radius ke along Newton ka II law — dono forces neeche"
          )}
        </T>
      </Fade>

      {/* beat 3 — step 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={286} size={13} fill={AMBER_DARK} script anchor="start">
          {t("step 2 — the minimum condition", "step 2 — minimum condition")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={90} y={316} size={15} fill={INK} anchor="start" weight={700}>
          {t("set T = 0 → mg = m v_top²⁄R", "T = 0 rakho → mg = m v_top²⁄R")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <Chip x={90} y={336} w={290} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          v_top,min = √(gR)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 19)}>
        <T x={235} y={400} size={12.5} fill={GREEN} script>
          {t("the whole heart of the derivation", "poori derivation ka dil yahi hai")}
        </T>
      </Fade>

      {/* beat 4 — step 3 */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={560} y={190} size={13} fill={AMBER_DARK} script anchor="start">
          {t("step 3 — energy conservation returns", "step 3 — energy conservation lautti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={560} y={220} size={14} fill={INK} anchor="start" weight={700}>
          {t("no friction → E conserved · drop = 2R", "friction nahi → E conserve · girawat = 2R")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={560} y={248} size={15} fill={INK} anchor="start" weight={700}>
          v_b² = v_t² + 2g(2R)
        </T>
      </Fade>

      {/* beat 5 — the number */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={286} size={15} fill={INK} anchor="start" weight={800}>
          = gR + 4gR = 5gR
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <Chip x={560} y={306} w={320} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          v_bottom,min = √(5gR)
        </Chip>
      </Fade>

      {/* beat 6 — the bottom tension */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={384} size={14} fill={INK} anchor="start" weight={700}>
          {t("at the bottom: T − mg = mv²⁄R → T = 6mg", "bottom par: T − mg = mv²⁄R → T = 6mg")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={560} y={410} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "the famous 6mg difference is born right here",
            "mashhoor 6mg ka farq yahin paida hota hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the single idea */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 450 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={470} size={13} fill={GREEN} script anchor="start">
          {t(
            "T = 0 is the BOUNDARY between staying on the circle and falling off",
            "T = 0 circle par rehne aur girne ke beech ki SEEMA hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={84} y={496} size={13} fill={GREEN} script anchor="start">
          {t(
            "everything after it is bookkeeping flowing from that one insight",
            "uske baad sab kuchh usi ek antardrishti se behti bookkeeping hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — rebuild from scratch */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={522} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "understand why T can't go negative → rebuild it all, nothing memorised",
            "samjho T negative kyun nahi ja sakta → sab dobara banao, kuchh rate bina"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
