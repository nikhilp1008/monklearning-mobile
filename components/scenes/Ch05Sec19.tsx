/**
 * Ch05 · Section 19 — "The rechargeable battery, and the reference-level trap"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.5, 33.4, 58.2, 83.0, 107.9, 129.4, 153.9] · dur 168.2;
 *        hi [0, 8.8, 31.4, 55.2, 80.0, 104.5, 128.5, 153.3] · dur 167.3):
 *  0 title + subtitle
 *  1 bucket to rooftop tank: work deposited as PE
 *  2 tap discharge → KE, charge/discharge chips, battery line
 *  3 conservative-forces seed (no friction PE)
 *  4 book-on-table reference diagram, three readings
 *  5 none is wrong — only differences physical
 *  6 freedom: plant zero where cleanest
 *  7 red rule: pick reference once
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | ground (80,400)-(380,400) · building x140..320 y140..400 · tank x200..280 y112..140
 *     | up arrow (110,385)→(110,160) · amber cx230 bl428
 *  b2 | tap (300,360)-(330,360) · water (345,362)→(345,395) · green cx230 bl454
 *     | chips x430..570 / x590..770 y120..154 · script cx600 bl185
 *  b3 | st x430: bl225 · bl251 · red bl277
 *  b4 | floor (430,470)-(760,470) · table top (500,400)-(650,400) + legs
 *     | book x550..610 y380..398 · ceiling (430,300)-(760,300)
 *     | labels st x780: bl320 (ceiling) / bl400 (table) / bl465 (floor)
 *  b5 | cx595 bl505 · b6 | cx595 bl531
 *  b7 | bar x66 y552..590 · line st x84 bl572
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

export default function Ch05Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The Rechargeable Battery & the Reference Trap", "Rechargeable Battery & Reference Waala Trap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the picture that makes PE click — and the thing that trips everyone",
            "wo picture jo PE click kara de — aur wo cheez jo sabko girati hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — charging the battery */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 80 400 H 380" stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 140 400 V 140 H 320 V 400" stroke={INK} sw={2.2} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d="M 200 140 V 112 H 280 V 140" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(110, 385, 110, 160)} stroke={AMBER} sw={3} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={230} y={428} size={13} fill={AMBER_DARK} script>
          {t(
            "the climb deposits work into the water as PE",
            "chadhai ka work paani mein PE bankar jama"
          )}
        </T>
      </Fade>

      {/* beat 2 — discharging */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 320 360 H 340" stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(345, 362, 345, 395)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={230} y={454} size={13} fill={GREEN} script>
          {t(
            "open the tap — it rushes back out as KE",
            "nal kholo — wapas KE bankar beh nikalti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <Chip x={430} y={120} w={140} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("lift = charge", "uthana = charge")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <Chip x={590} y={120} w={180} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("release = discharge", "chhodna = discharge")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={600} y={185} size={13} fill={GREEN} script>
          {t(
            "potential energy = nature's rechargeable battery",
            "potential energy = qudrat ki rechargeable battery"
          )}
        </T>
      </Fade>

      {/* beat 3 — conservative-forces seed */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={430} y={225} size={13} fill={INK} script anchor="start">
          {t(
            "PE exists ONLY for conservative forces — the ones that give it back",
            "PE sirf CONSERVATIVE forces ke liye hai — jo wapas dete hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={430} y={251} size={13} fill={INK} script anchor="start">
          {t(
            "gravity ✓ · spring ✓ · friction ✗ — it eats energy as heat",
            "gravity ✓ · spring ✓ · friction ✗ — wo energy kha kar heat banata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={430} y={277} size={13} fill={RED} script anchor="start">
          {t("so 'friction PE' does not exist", "to 'friction PE' jaisi cheez hai hi nahi")}
        </T>
      </Fade>

      {/* beat 4 — the reference diagram */}
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 430 470 H 760" stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d="M 500 400 H 650 M 510 400 V 470 M 640 400 V 470" stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 4)} d="M 550 398 v -12 q 0 -6 6 -6 h 48 q 6 0 6 6 v 12" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 6)} d="M 430 300 H 760" stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={780} y={465} size={13} fill={GREEN} script anchor="start">
          {t("vs floor: +20 J", "farsh ke saapeksh: +20 J")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={780} y={400} size={13} fill={AMBER_DARK} script anchor="start">
          {t("vs the table: 0", "mez ke saapeksh: 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 18)}>
        <T x={780} y={320} size={13} fill={RED} script anchor="start">
          {t("vs the ceiling: negative", "chhat ke saapeksh: negative")}
        </T>
      </Fade>

      {/* beat 5 — none is wrong */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={595} y={505} size={13} fill={GREEN} script>
          {t(
            "none is wrong — only DIFFERENCES in PE are physical",
            "koi bhi galat nahi — sirf PE ke DIFFERENCES physical hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — the freedom */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={595} y={531} size={13} fill={AMBER_DARK} script>
          {t(
            "plant zero where it's cleanest: ground for g · infinity for fading forces",
            "zero wahin bithao jahan sabse saaf ho: g ke liye zameen · door tak faile forces ke liye ∞"
          )}
        </T>
      </Fade>

      {/* beat 7 — the one rule */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 552 v 38" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={572} size={13} fill={RED} script anchor="start">
          {t(
            "pick the reference ONCE and keep it — switching mid-problem = quiet nonsense",
            "reference EK baar chuno aur nibhao — beech mein badla to sab bemtlab"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
