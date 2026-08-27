/**
 * Ch01 · Section 49 — "Limiting conditions: where the rules get slippery"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.6, 15.4, 40.2, 64.9, 81.7, 106.5, 125.8]):
 *  0 title + tally of four
 *  1 badge 1 · exact numbers have ∞ sig figs — never limit
 *  2 three exact-family cards: counting / defined / pure maths, ∞ stamped
 *  3 the ÷5 trap chip crossed out red · only MEASURED quantities constrain
 *  4 badge 2 · 4500 with ?? over the zeros — notation is broken
 *  5 scientific-notation ladder: 4.5/4.50/4.500 ×10³ → 2/3/4 sf chips
 *  6 badge 3 · rules are conventions — protocol for honesty (underlined)
 *  7 badge 4 · sig figs = quick proxy · chip "± > sig figs"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | badge c(76,110) · line st x104 bl 116 script 16
 *  b2 | cards y140..204: x104..320 / x340..600 / x620..820 · title 13 bl 160 · content 15 bl 188 · ∞ at x2−18 bl 162
 *  b3 | chip x104..444 y224..258 + cross · green st x560 bl 246 + underline y262 x560..920
 *  b4 | badge c(76,296) · line st x104 bl 302 · "4500" 36 st x104 bl 372 · ?? bl 330 over zeros
 *  b5 | rows bl 380/420/460: num 20 st x340 · arrow 470→510 · chip x520..640 h30 · caption st x660 bl 420
 *  b6 | badge c(76,508) · line st x104 bl 514 · underline y530 x104..574
 *  b7 | badge c(76,560) · line st x104 bl 566 · chip x820..980 y540..576
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  crossD,
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

export default function Ch01Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const card = (x: number, w: number) =>
    `M ${x + 10} 140 h ${w - 20} q 10 0 10 10 v 44 q 0 10 -10 10 h ${-(w - 20)} q -10 0 -10 -10 v -44 q 0 -10 10 -10`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={INK} script>
          {t(
            "four places where the rules get slippery",
            "chaar jagahein jahan rules phisalte hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 950 48 v 24 M 965 48 v 24 M 980 48 v 24 M 995 48 v 24"
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />

      {/* beat 1 — exact numbers */}
      <Badge n={1} cy={110} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={116} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "exact numbers have ∞ sig figs — they NEVER limit your answer",
            "exact numbers mein ∞ sig figs — wo answer ko KABHI limit nahi karte"
          )}
        </T>
      </Fade>

      {/* beat 2 — the exact family */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={card(104, 216)} stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={116} y={160} size={13} fill={MUTED} anchor="start">
          {t("counting", "ginti")}
        </T>
        <T x={116} y={188} size={15} fill={INK} script anchor="start">
          {t("5 readings → exactly 5", "5 readings → theek 5")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={302} y={162} size={18} fill={GREEN} weight={700}>∞</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6)} d={card(340, 260)} stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={352} y={160} size={13} fill={MUTED} anchor="start">
          {t("defined constants", "paribhashit constants")}
        </T>
        <T x={352} y={188} size={15} fill={INK} script anchor="start">
          {t("1 m = 100 cm — by definition", "1 m = 100 cm — paribhasha se")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={582} y={162} size={18} fill={GREEN} weight={700}>∞</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 14)} d={card(620, 200)} stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 14.8)}>
        <T x={632} y={160} size={13} fill={MUTED} anchor="start">
          {t("pure maths", "shuddh ganit")}
        </T>
        <T x={632} y={188} size={15} fill={INK} script anchor="start">
          2πr · ½mv² · π
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={782} y={162} size={18} fill={GREEN} weight={700}>∞</T>
      </Fade>

      {/* beat 3 — the ÷5 trap */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={104} y={224} w={340} h={34} fill="none" stroke={RED} textFill={RED} size={15} dashed>
          {t(
            "round to 1 sf — '5' has one digit?",
            "'5' mein ek digit — to 1 sf tak round?"
          )}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 8)}
        d={crossD(104, 224, 340, 34)}
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={560} y={246} size={15} fill={GREEN} script anchor="start">
          {t(
            "only MEASURED quantities constrain the answer",
            "sirf NAPI hui quantities answer ko bandhti hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 16)}
        d="M 560 262 C 660 258, 800 266, 920 261"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 4 — 4500: broken notation */}
      <Badge n={2} cy={296} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={302} size={15} fill={RED} script anchor="start">
          {t(
            "measured zeros — or placeholders? the notation is broken",
            "zeros nape gaye — ya placeholders? notation hi tooti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={104} y={372} size={36} fill={INK} weight={700} anchor="start">4500</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={156} y={330} size={20} fill={RED} weight={700}>?</T>
        <T x={177} y={330} size={20} fill={RED} weight={700}>?</T>
      </Fade>

      {/* beat 5 — the scientific-notation ladder */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={340} y={380} size={20} fill={INK} weight={600} anchor="start">4.5 × 10³</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2)} d={arrowD(470, 373, 510, 373)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Chip x={520} y={359} w={120} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14}>
          2 sig figs
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={340} y={420} size={20} fill={INK} weight={600} anchor="start">4.50 × 10³</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6)} d={arrowD(470, 413, 510, 413)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <Chip x={520} y={399} w={120} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14}>
          3 sig figs
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={340} y={460} size={20} fill={INK} weight={600} anchor="start">4.500 × 10³</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 10)} d={arrowD(470, 453, 510, 453)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 10.6)}>
        <Chip x={520} y={439} w={120} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14}>
          4 sig figs
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={660} y={420} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "same value — three different promises",
            "wahi value — teen alag waade"
          )}
        </T>
      </Fade>

      {/* beat 6 — conventions */}
      <Badge n={3} cy={508} on={beat >= 6} delay={dl(6, 0.5)} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={104} y={514} size={15} fill={INK} script anchor="start">
          {t(
            "the rules are CONVENTIONS — a shared protocol for honesty",
            "ye rules CONVENTIONS hain — imaandari ka saajha protocol"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 104 530 C 220 526, 420 534, 574 529"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 7 — the hierarchy */}
      <Badge n={4} cy={560} on={beat >= 7} delay={dl(7, 0.5)} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={104} y={566} size={15} fill={INK} script anchor="start">
          {t(
            "sig figs = the quick proxy — a real ± statement always wins",
            "sig figs = jaldi wala proxy — asli ± bayan hamesha jeetta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <Chip x={820} y={540} w={160} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16}>
          ± {">"} sig figs
        </Chip>
      </Fade>
    </Scene>
  );
}
