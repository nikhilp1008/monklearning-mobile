/**
 * P12Ch05 · Section 38 — "Soft and hard materials: shielding and electromagnets"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: the derivation of the hysteresis energy loss —
 * dW = H dB, W = ∮B dH = loop area, and P = area × V × f. Only the
 * narrow-loop-for-cores idea overlapped with the audio at all.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: material SELECTION from loop shape. A
 * thin loop (soft iron) means low H_c, low B_r, small area — so electromagnets
 * and transformer cores. A fat loop (steel, Alnico) means high H_c, high B_r —
 * a permanent magnet. Then two applications of high permeability: a soft-iron
 * box shielding a cavity, and the electromagnet that uses high μ_r and low
 * retentivity at once.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 11.5, 27.1, 48.9, 68.4, 88.7,
 * 104.5, 127.9):
 *   0  "the shape tells an engineer what it is good for"  title + subtitle
 *   1  "one narrow and pinched, one broad and fat"        both loops, side by side
 *   2  "a soft material has the thin loop"                soft loop shaded + labelled
 *   3  "electromagnets and transformer cores"             the soft-material job
 *   4  "a hard material such as steel or Alnico"          fat loop shaded + labelled
 *   5  "look at this box of soft iron"                    shielding box + stray field
 *   6  "they crowd into the walls"                        lines diverted, cavity ≈ 0
 *   7  "the electromagnet uses both properties"           coil + soft-iron core + switch
 */

import React from "react";
import { Circle, Line, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function loopPaths(cx: number, cy: number, hmax: number, bs: number, hc: number, w: number) {
  const bo = (h: number, s: number) => bs * Math.tanh((h + s * hc) / w);
  const seg = (s: number, from: number, to: number, n = 56) => {
    const pts: string[] = [];
    for (let i = 0; i <= n; i++) {
      const h = from + ((to - from) * i) / n;
      pts.push(`${i === 0 ? "M" : "L"} ${(cx + h).toFixed(1)} ${(cy - bo(h, s)).toFixed(1)}`);
    }
    return pts.join(" ");
  };
  const upper = seg(1, hmax, -hmax);
  const lower = seg(-1, -hmax, hmax);
  return { upper, lower, fill: `${upper} ${lower.replace("M", "L")} Z` };
}

const SOFT = loopPaths(290, 178, 120, 62, 10, 24);
const HARD = loopPaths(822, 178, 120, 62, 54, 38);

export default function P12Ch05Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const coil = [712, 734, 756, 778, 800, 822, 844, 866, 888];

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Soft or hard? The loop decides the job", "Soft ya hard? Kaam loop tay karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.3)}
        d="M 274 58 C 440 54, 640 62, 806 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("the shape of the loop tells an engineer exactly what a material is good for",
             "loop ka shape engineer ko bata deta hai ki material kis kaam ka hai")}
        </T>
      </Fade>

      {/* ── loop shading (drawn first so it sits under the curves) ──── */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Path d={SOFT.fill} fill={CREAM} stroke="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Path d={HARD.fill} fill="#F8DFD9" stroke="none" />
      </Fade>

      {/* ── beat 1 — the two loops side by side ────────────────────── */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={290} y={104} size={14} fill={GREEN_DARK} weight={800}>
          {t("narrow and pinched", "patla aur pichka hua")}
        </T>
        <T x={822} y={104} size={14} fill={RED} weight={800}>
          {t("broad and fat", "chauda aur mota")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} dur={0.5} d={arrowD(160, 178, 428, 178)} stroke={INK} sw={1.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} dur={0.5} d={arrowD(290, 254, 290, 112)} stroke={INK} sw={1.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} dur={0.5} d={arrowD(692, 178, 960, 178)} stroke={INK} sw={1.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} dur={0.5} d={arrowD(822, 254, 822, 112)} stroke={INK} sw={1.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={436} y={196} size={12.5} fill={INK_LIGHT} weight={800} anchor="start">H</T>
        <T x={300} y={124} size={12.5} fill={INK_LIGHT} weight={800} anchor="start">B</T>
        <T x={968} y={196} size={12.5} fill={INK_LIGHT} weight={800} anchor="start">H</T>
        <T x={832} y={124} size={12.5} fill={INK_LIGHT} weight={800} anchor="start">B</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} dur={1.1} d={SOFT.upper} stroke={GREEN_DARK} sw={2.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} dur={1.1} d={SOFT.lower} stroke={GREEN_DARK} sw={2.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} dur={1.1} d={HARD.upper} stroke={RED} sw={2.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} dur={1.1} d={HARD.lower} stroke={RED} sw={2.6} />

      {/* ── beat 2 — the soft material ─────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={60} y={274} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("SOFT — soft iron is the textbook case", "SOFT — soft iron classic example hai")}
        </T>
        <T x={60} y={296} size={13} fill={INK} weight={700} anchor="start">
          {t("low coercivity · low retentivity · small enclosed area",
             "kam coercivity · kam retentivity · chhota area")}
        </T>
        <T x={60} y={316} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("small area ⇒ very little energy wasted as heat each cycle",
             "chhota area ⇒ har cycle mein heat bahut kam")}
        </T>
      </Fade>

      {/* ── beat 3 — what soft material is for ─────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={60} y={348} size={13.5} fill={RED} weight={800} anchor="start">
          {t("USED FOR:  electromagnets · transformer cores",
             "ISKE LIYE:  electromagnets · transformer cores")}
        </T>
        <T x={60} y={370} size={13} fill={INK} weight={700} anchor="start">
          {t("a core flips its polarity fifty or sixty times every second",
             "core apni polarity har second pachaas-saath baar palatta hai")}
        </T>
        <T x={60} y={390} size={13} fill={INK_LIGHT} weight={700} anchor="start">
          {t("a fat loop there would heat continuously — so never steel",
             "wahan mota loop matlab lagatar garmi — isliye steel kabhi nahi")}
        </T>
      </Fade>

      {/* ── beat 4 — the hard material ─────────────────────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={592} y={274} size={14} fill={RED} weight={800} anchor="start">
          {t("HARD — steel, Alnico", "HARD — steel, Alnico")}
        </T>
        <T x={592} y={296} size={13} fill={INK} weight={700} anchor="start">
          {t("high coercivity · high retentivity · fat area",
             "zyada coercivity · zyada retentivity · mota area")}
        </T>
        <T x={592} y={316} size={13} fill={INK} weight={700} anchor="start">
          {t("high B_r: it keeps a strong field once magnetised",
             "zyada B_r: ek baar magnetise hua to field pakde rehta hai")}
        </T>
        <T x={592} y={336} size={13} fill={INK} weight={700} anchor="start">
          {t("high H_c: a stray field or a knock will not erase it",
             "zyada H_c: koi aawara field ya jhatka ise mitaata nahi")}
        </T>
        <T x={592} y={362} size={14} fill={RED} weight={800} anchor="start">
          {t("⇒ THAT IS A PERMANENT MAGNET", "⇒ YAHI PERMANENT MAGNET HAI")}
        </T>
      </Fade>

      {/* ── beats 5 & 6 — magnetic shielding ───────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={44} y={438} size={13.5} fill={RED} weight={800} anchor="start">
          {t("A BOX OF SOFT IRON AROUND A SENSITIVE INSTRUMENT",
             "SENSITIVE INSTRUMENT KE AAS-PAAS SOFT IRON KA DABBA")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Rect x={200} y={456} width={200} height={100} rx={4} fill="#E9E4D6" stroke={INK} strokeWidth={2} />
        <Rect x={222} y={476} width={156} height={60} rx={3} fill="#FFFEFB" stroke={INK} strokeWidth={1.6} />
        <Circle cx={256} cy={506} r={16} fill="none" stroke={INK_LIGHT} strokeWidth={1.8} />
        <Line x1={256} y1={506} x2={266} y2={496} stroke={INK_LIGHT} strokeWidth={1.8} />
        <T x={410} y={438} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("soft iron", "soft iron")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.0)} dur={0.5} d={arrowD(64, 470, 194, 470)} stroke={AMBER_DARK} sw={2} />
      <Draw on={beat >= 5} delay={dl(5, 1.15)} dur={0.5} d={arrowD(64, 506, 194, 506)} stroke={AMBER_DARK} sw={2} />
      <Draw on={beat >= 5} delay={dl(5, 1.3)} dur={0.5} d={arrowD(64, 542, 194, 542)} stroke={AMBER_DARK} sw={2} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={412} y={500} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("a stray field", "ek aawara field")}
        </T>
        <T x={412} y={518} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("arrives", "bahar se aata hai")}
        </T>
      </Fade>

      {/* beat 6 — the lines crowd into the walls */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} dur={0.9}
        d="M 196 470 C 224 468, 246 466, 300 466 C 354 466, 376 468, 404 470"
        stroke={AMBER_DARK} sw={2.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.35)} dur={0.9}
        d="M 196 542 C 224 544, 246 546, 300 546 C 354 546, 376 544, 404 542"
        stroke={AMBER_DARK} sw={2.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.5)} dur={0.9}
        d="M 196 506 C 206 506, 210 490, 214 476 C 217 468, 222 466, 232 466"
        stroke={AMBER_DARK} sw={2.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} dur={0.4} d={arrowD(404, 470, 448, 468)} stroke={AMBER_DARK} sw={2.2} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} dur={0.4} d={arrowD(404, 542, 448, 544)} stroke={AMBER_DARK} sw={2.2} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={330} y={512} size={14} fill={GREEN_DARK} weight={900}>B ≈ 0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={44} y={566} size={12.5} fill={INK} weight={700} anchor="start">
          {t("lines prefer the high-permeability path, so they run round in the iron",
             "lines high-permeability raasta pasand karti hain, to lohe mein hi ghoomti hain")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={44} y={588} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("magnetic shielding — the analogue of a conductor shielding E",
             "magnetic shielding — jaise conductor electric field rokta hai")}
        </T>
      </Fade>

      {/* ── beat 7 — the electromagnet ─────────────────────────────── */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={438} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE ELECTROMAGNET — BOTH PROPERTIES AT ONCE",
             "ELECTROMAGNET — DONO KHOOBIYAN EK SAATH")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Rect x={700} y={470} width={200} height={38} rx={3} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={800} y={494} size={12} fill={INK_LIGHT} weight={800}>{t("soft iron core", "soft iron core")}</T>
      </Fade>
      {coil.map((x, i) => (
        <Draw key={x} on={beat >= 7} delay={dl(7, 0.7 + i * 0.05)} dur={0.3}
          d={`M ${x} 461 A 8 28 0 1 0 ${x} 517 A 8 28 0 1 0 ${x} 461`}
          stroke={AMBER_DARK} sw={1.7} />
      ))}
      <Draw on={beat >= 7} delay={dl(7, 1.2)} dur={0.4} d={arrowD(654, 489, 694, 489)} stroke={RED} sw={2.2} />
      <Draw on={beat >= 7} delay={dl(7, 1.3)} dur={0.4} d={arrowD(906, 489, 950, 489)} stroke={RED} sw={2.2} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} dur={0.6}
        d="M 712 519 L 712 540 L 782 540 M 818 540 L 888 540 L 888 519" stroke={INK} sw={1.8} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <Line x1={790} y1={530} x2={790} y2={550} stroke={INK} strokeWidth={2} />
        <Line x1={802} y1={534} x2={802} y2={546} stroke={INK} strokeWidth={3.4} />
        <T x={762} y={558} size={12} fill={INK_LIGHT} weight={800}>{t("current on", "current on")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={560} y={578} size={12.5} fill={INK} weight={700} anchor="start">
          {t("huge μ_r amplifies the coil's field hundreds or thousands of times",
             "bahut bada μ_r coil ke field ko sau-hazaar guna badha deta hai")}
        </T>
        <T x={560} y={596} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("low retentivity ⇒ it collapses the instant you cut the current",
             "kam retentivity ⇒ current katte hi magnetism khatam")}
        </T>
      </Fade>
    </Scene>
  );
}
