/**
 * C11 Ch09 · Section 12 — "Preparing alkanes III: from carboxylic acids"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.26, 15.53, 22.08, 29.26, 34.75, 41.88]):
 *  0 heading: drop a carbon or double it · 1 decarboxylation label ·
 *  2 CH3COONa + NaOH --CaO,Δ--> CH4 + Na2CO3 · 3 "strips one carbon" ·
 *  4 Kolbe's electrolytic label + electrolyse note · 5 "couples two alkyl
 *  fragments — even carbons" · 6 RED mnemonic
 *
 * Layout plan — two reaction rows:
 *  b1 | "Decarboxylation" label | T st | x60 y130
 *  b2 | reaction equation A     | T+RA | x150..520 y172
 *  b3 | "strips one carbon…"    | T mid| y215
 *  b4 | "Kolbe's electrolytic…" | T st | x60 y280 + note y310
 *  b5 | "couples…even carbons" | T mid| y345
 *  b6 | margin bar + red mnemonic | Draw+T | bar x60 y400..444 · text bl418/440
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Draw,
  INK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("preparing alkanes III: from carboxylic acids", "alkanes banana III: carboxylic acids se")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={100} size={16} fill={INK} weight={700}>
          {t("two acid routes: drop a carbon, or double it", "do acid routes: carbon drop karo, ya double karo")}
        </T>
      </Fade>

      {/* beat 1 — decarboxylation label */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={140} size={17} fill={INK} weight={800} anchor="start">
          {t("Decarboxylation — heat with soda lime", "Decarboxylation — soda lime ke saath garam")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={130} y={182} size={16} fill={INK} weight={700} anchor="start">
          CH3COONa + NaOH
        </T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 1.1)} x1={365} x2={490} y={177} over={t("CaO, Δ", "CaO, Δ")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={510} y={182} size={16} fill={INK} weight={700} anchor="start">
          CH4 + Na2CO3
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={225} size={15} fill={INK}>
          {t("strips one carbon ⇒ alkane with one fewer carbon", "ek carbon strip hota ⇒ ek kam carbon wala alkane")}
        </T>
      </Fade>

      {/* beat 4 — Kolbe's electrolytic method */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={295} size={17} fill={INK} weight={800} anchor="start">
          {t("Kolbe's electrolytic method", "Kolbe ka electrolytic method")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={330} size={15} fill={INK}>
          {t("electrolyse an aqueous carboxylate salt solution", "aqueous carboxylate salt solution ko electrolyse karo")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={365} size={15} fill={INK}>
          {t("couples two alkyl fragments at the anode ⇒ even carbons", "anode pe do alkyl fragments couple hote ⇒ even carbons")}
        </T>
      </Fade>

      {/* beat 6 — the mnemonic */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 410 L 60 480" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={430} size={16} fill={RED} script anchor="start">
          {t("Mnemonic: Kolbe DOUBLES,", "Mnemonic: Kolbe DOUBLES,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={460} size={16} fill={RED} script anchor="start">
          {t("Decarboxylation DROPS one", "Decarboxylation DROPS one")}
        </T>
      </Fade>
    </Scene>
  );
}
