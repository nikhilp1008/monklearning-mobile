/**
 * P12Ch05 · Section 36 — "Classifying an unknown material in four checks"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: the derivation of μ_r = 1 + χ, step by step
 * from B = μ₀(H + M). That is section 35's board, and this section never
 * derives anything.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: a four-check procedure for naming the
 * family of an unknown material — ① sign of χ (or μ_r against 1), ② magnitude,
 * ③ observed behaviour, ④ temperature response — then the atomic picture that
 * sits underneath all four, and a list of stock examples.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 14.3, 26.2, 45.4, 65.1, 85.4,
 * 108.2, 130.8):
 *   0  "a procedure rather than a formula"     title + subtitle
 *   1  "the decision chain, deliberately …"    table skeleton + column headers
 *   2  "check one is the sign"                 row ①, dia settled / others go on
 *   3  "check two is the magnitude"            row ②, 10⁻⁵ vs 10³
 *   4  "check three confirms using behaviour"  row ③
 *   5  "check four uses the temperature"       row ④
 *   6  "underneath all four sits the atomic …" row ⑤: the three moment pictures
 *   7  "keep a few examples ready"             row ⑥: the substance lists + chip
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

/* column centres */
const CDIA = 382;
const CPARA = 642;
const CFERRO = 905;

export default function P12Ch05Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const paraMoments: [number, number, number][] = [
    [604, 380, 30], [646, 372, 150], [682, 398, 250], [612, 416, 340], [660, 414, 80],
  ];
  const ferroCols = [866, 894, 922, 950];

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Name the family in four checks", "Chaar checks mein family batao")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.3)}
        d="M 320 58 C 470 54, 630 62, 760 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={540} y={76} size={13} fill={MUTED} script>
          {t("here is one number — name the family. Drill it, it is a whole class of questions.",
             "ek number diya hai — family batao. Yeh poori ek category ke sawaal hain.")}
        </T>
      </Fade>

      {/* ── beat 1 — the skeleton of the chain ─────────────────────── */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={12.5} fill={INK_LIGHT} weight={700}>
          {t("ordered on purpose — usually the first check or two settles it, and you stop",
             "jaanbujh kar iss order mein — aksar pehla ya doosra check hi kaam khatam kar deta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={52} y={130} size={13.5} fill={INK} weight={800} anchor="start">
          {t("THE FOUR CHECKS", "CHAAR CHECKS")}
        </T>
        <T x={CDIA} y={130} size={13.5} fill={AMBER_DARK} weight={800}>DIAMAGNETIC</T>
        <T x={CPARA} y={130} size={13.5} fill={GREEN_DARK} weight={800}>PARAMAGNETIC</T>
        <T x={CFERRO} y={130} size={13.5} fill={RED} weight={800}>FERROMAGNETIC</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} dur={0.7} d="M 44 140 H 1036" stroke={INK} sw={1.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} dur={0.7} d="M 252 108 V 470" stroke={MUTED} sw={1.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} dur={0.7} d="M 512 108 V 470" stroke={MUTED} sw={1.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} dur={0.7} d="M 772 246 V 470" stroke={MUTED} sw={1.3} />

      {/* ── beat 2 — check ①: the sign ─────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={52} y={166} size={13} fill={INK} weight={800} anchor="start">
          {t("① sign of χ", "① χ ka sign")}
        </T>
        <T x={52} y={184} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("(or μ_r against 1)", "(ya μ_r ko 1 se compare)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={CDIA} y={166} size={13.5} fill={AMBER_DARK} weight={800}>χ &lt; 0   ·   μ_r &lt; 1</T>
        <T x={CDIA} y={184} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("settled — stop here", "faisla ho gaya — ruk jao")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={775} y={166} size={13.5} fill={INK} weight={800}>χ &gt; 0   ·   μ_r &gt; 1</T>
        <T x={775} y={184} size={12.5} fill={MUTED} weight={700}>
          {t("not settled yet — go on to check ②", "abhi faisla nahi — check ② par jao")}
        </T>
      </Fade>

      {/* ── beat 3 — check ②: the magnitude ────────────────────────── */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} dur={0.6} d="M 44 190 H 1036" stroke={MUTED} sw={1.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={52} y={218} size={13} fill={INK} weight={800} anchor="start">
          {t("② magnitude of χ", "② χ ka magnitude")}
        </T>
        <T x={52} y={236} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("only now does size matter", "ab jaakar size maayne rakhta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={CDIA} y={222} size={12.5} fill={MUTED} weight={700}>
          {t("(already settled)", "(pehle hi tay ho chuka)")}
        </T>
        <T x={CPARA} y={218} size={15} fill={GREEN_DARK} weight={900}>χ ~ +10⁻⁵</T>
        <T x={CFERRO} y={218} size={15} fill={RED} weight={900}>χ ~ +10³</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={775} y={238} size={12.5} fill={INK} weight={700}>
          {t("about eight orders of magnitude apart — no ambiguity at all",
             "lagbhag aath orders of magnitude ka farq — koi confusion nahi")}
        </T>
      </Fade>

      {/* ── beat 4 — check ③: behaviour ────────────────────────────── */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} dur={0.6} d="M 44 246 H 1036" stroke={MUTED} sw={1.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={52} y={274} size={13} fill={INK} weight={800} anchor="start">
          {t("③ behaviour", "③ behaviour")}
        </T>
        <T x={52} y={292} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("how questions often phrase it", "sawaal aksar aise hi poochte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={CDIA} y={272} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("repelled — drifts toward", "repel hota — kamzor field")}
        </T>
        <T x={CDIA} y={292} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("the weaker field", "ki taraf khisakta")}
        </T>
        <T x={CPARA} y={282} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("weakly attracted", "halka sa attract hota")}
        </T>
        <T x={CFERRO} y={272} size={12.5} fill={RED} weight={800}>
          {t("strongly attracted, and still", "zor se attract, aur field")}
        </T>
        <T x={CFERRO} y={292} size={12.5} fill={RED} weight={800}>
          {t("magnetised once the field goes", "hatne ke baad bhi magnetised")}
        </T>
      </Fade>

      {/* ── beat 5 — check ④: temperature ──────────────────────────── */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} dur={0.6} d="M 44 302 H 1036" stroke={MUTED} sw={1.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={52} y={330} size={13} fill={INK} weight={800} anchor="start">
          {t("④ temperature response", "④ temperature response")}
        </T>
        <T x={52} y={348} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("if the question gives one", "agar sawaal deta ho")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={CDIA} y={338} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("χ roughly independent of T", "χ lagbhag T se azad")}
        </T>
        <T x={CPARA} y={338} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("χ falls as 1 / T", "χ 1 / T ke hisaab se girta")}
        </T>
        <T x={CFERRO} y={328} size={12.5} fill={RED} weight={800}>
          {t("collapses sharply at one", "ek khaas temperature par")}
        </T>
        <T x={CFERRO} y={348} size={12.5} fill={RED} weight={800}>
          {t("temperature — the Curie point", "achanak khatam — Curie point")}
        </T>
      </Fade>

      {/* ── beat 6 — the atomic picture underneath ─────────────────── */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} dur={0.6} d="M 44 358 H 1036" stroke={MUTED} sw={1.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={52} y={392} size={13} fill={INK} weight={800} anchor="start">
          {t("the atomic picture", "atomic picture")}
        </T>
        <T x={52} y={410} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("underneath all four", "in chaaron ke neeche")}
        </T>
        <T x={52} y={430} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("— then no table to memorise", "— phir table ratne ki zarurat nahi")}
        </T>
      </Fade>

      {/* dia: atoms with no moment at all */}
      {[331, 365, 399, 433].map((x, i) => (
        <Fade key={x} on={beat >= 6} delay={dl(6, 0.9 + i * 0.1)}>
          <Circle cx={x} cy={396} r={12} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
          <T x={x} y={401} size={12.5} fill={AMBER_DARK} weight={800}>0</T>
        </Fade>
      ))}
      {/* para: permanent moments, randomly pointing */}
      {paraMoments.map(([x, y, deg], i) => {
        const a = (deg * Math.PI) / 180;
        return (
          <Draw key={`${x}-${y}`} on={beat >= 6} delay={dl(6, 1.0 + i * 0.1)} dur={0.3}
            d={arrowD(x - 16 * Math.cos(a), y - 16 * Math.sin(a), x + 16 * Math.cos(a), y + 16 * Math.sin(a))}
            stroke={GREEN_DARK} sw={2} />
        );
      })}
      {/* ferro: permanent moments, domain aligned */}
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Rect x={848} y={368} width={116} height={58} rx={5} fill="none" stroke={RED} strokeWidth={1.6} strokeDasharray="5 4" />
      </Fade>
      {ferroCols.map((x, i) =>
        [382, 410].map((y, j) => (
          <Draw key={`${x}-${y}`} on={beat >= 6} delay={dl(6, 1.1 + (i * 2 + j) * 0.07)} dur={0.25}
            d={arrowD(x, y + 9, x, y - 9)} stroke={RED} sw={2} />
        ))
      )}
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={CDIA} y={444} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("no atomic moment at all —", "atomic moment hai hi nahi —")}
        </T>
        <T x={CDIA} y={462} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("what shows is induced, and opposing", "jo dikhta hai wo induced aur ulta")}
        </T>
        <T x={CPARA} y={444} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("permanent moments,", "permanent moments,")}
        </T>
        <T x={CPARA} y={462} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("randomised", "bikhre hue")}
        </T>
        <T x={CFERRO} y={444} size={12.5} fill={RED} weight={800}>
          {t("permanent moments,", "permanent moments,")}
        </T>
        <T x={CFERRO} y={462} size={12.5} fill={RED} weight={800}>
          {t("domain aligned", "domain mein aligned")}
        </T>
      </Fade>

      {/* ── beat 7 — stock examples ────────────────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.6} d="M 44 470 H 1036" stroke={INK} sw={1.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={52} y={500} size={13} fill={INK} weight={800} anchor="start">
          {t("examples to keep ready", "examples yaad rakho")}
        </T>
        <T x={52} y={520} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("questions often name a", "sawaal aksar number ke")}
        </T>
        <T x={52} y={538} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("substance, not a number", "bajaye padarth ka naam dete")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={CDIA} y={500} size={13} fill={AMBER_DARK} weight={800}>copper · bismuth</T>
        <T x={CDIA} y={520} size={13} fill={AMBER_DARK} weight={800}>water · diamond</T>
        <T x={CDIA} y={540} size={13} fill={AMBER_DARK} weight={800}>gold</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={CPARA} y={500} size={13} fill={GREEN_DARK} weight={800}>aluminium · sodium</T>
        <T x={CPARA} y={520} size={13} fill={GREEN_DARK} weight={800}>oxygen · platinum</T>
        <T x={CPARA} y={540} size={13} fill={GREEN_DARK} weight={800}>chromium</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={CFERRO} y={500} size={13} fill={RED} weight={800}>iron · cobalt</T>
        <T x={CFERRO} y={520} size={13} fill={RED} weight={800}>nickel · gadolinium</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <Chip x={200} y={556} w={680} h={38} fill={GREEN} textFill="#ffffff" size={13} script={false}>
          {t("★ the ferromagnetic list is short enough to simply memorise: Fe · Co · Ni · Gd",
             "★ ferromagnetic list itni chhoti hai ki ratt lo: Fe · Co · Ni · Gd")}
        </Chip>
      </Fade>
    </Scene>
  );
}
