/**
 * Ch12 · Section 48 — Whole-chapter cheat sheet
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Final section of the chapter — cheat_sheet type, one recall-card per
 * subtopic in a 2×3 grid, plus a "never forget" strip and closing seed line.
 *
 * Beats (en [0, 8.96, 9.96, 10.96, 11.96, 12.96, 37.79, 59.3, 81.06]):
 *  0 title + intro (read this the night before) · 1 card: molecular nature
 *  · 2 card: gas laws · 3 card: kinetic pressure · 4 card: rms/Maxwell ·
 *  5 card: freedom & heat (Cv,Cp,γ) · 6 card: mean free path · 7 six-things
 *  never-forget strip · 8 closing: one seed / golden thread
 *
 * Layout plan (Anek width≈0.5×size×chars, sans body inside cards):
 *  b0 | title (script 17, red)          | T mid | x300..780 y32..62 (bl52)
 *  b0 | intro (11, ink, script)         | T mid | x540 y76
 *  b1..b6 | 6 cards, 2col×3row          | rect+T| x36|574 y98/224/350 w470 h110
 *  b7 | never-forget line A/B (10.5)    | T mid | x540 y480/500
 *  b8 | closing seed (13, red, script)  | T mid | x540 y540
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

type Card = {
  label: [string, string];
  lines: [string, string][];
  color: string;
};

const CARDS: Card[] = [
  {
    label: ["0 · MOLECULAR NATURE", "0 · MOLECULAR NATURE"],
    color: GREEN,
    lines: [
      ["molecules in ceaseless motion", "molecules ceaseless motion mein"],
      ["size~1Å · spacing~10x · MFP~100x spacing", "size~1Å · spacing~10x · MFP~100x spacing"],
      ["a gas is mostly empty space", "gas zyadatar khaali jagah hai"],
    ],
  },
  {
    label: ["1 · GAS LAWS", "1 · GAS LAWS"],
    color: AMBER_DARK,
    lines: [
      ["PV=nRT=(m/M)RT=NkʙT=ρRT/M", "PV=nRT=(m/M)RT=NkʙT=ρRT/M"],
      ["Boyle (T fixed) · Charles (P fixed)", "Boyle (T fixed) · Charles (P fixed)"],
      ["Dalton adds P · Graham ∝ 1/√M", "Dalton P jodta · Graham ∝ 1/√M"],
    ],
  },
  {
    label: ["2 · KINETIC PRESSURE", "2 · KINETIC PRESSURE"],
    color: GREEN,
    lines: [
      ["P=⅓ρv²rms = ⅓n₀m⟨v²⟩", "P=⅓ρv²rms = ⅓n₀m⟨v²⟩"],
      ["PV = ⅔ E", "PV = ⅔ E"],
      ["⅓ = fingerprint of isotropy", "⅓ = isotropy ka fingerprint"],
    ],
  },
  {
    label: ["3 · RMS SPEED & MAXWELL", "3 · RMS SPEED & MAXWELL"],
    color: AMBER_DARK,
    lines: [
      ["½m⟨v²⟩ = 3/2 kʙT", "½m⟨v²⟩ = 3/2 kʙT"],
      ["vrms:v̄:vp = √3:√(8/π):√2", "vrms:v̄:vp = √3:√(8/π):√2"],
      ["read curve as AREA, never height", "curve ko AREA jaise padho, height nahi"],
    ],
  },
  {
    label: ["4a · FREEDOM & HEAT", "4a · FREEDOM & HEAT"],
    color: GREEN,
    lines: [
      ["½kʙT per mode ⇒ U=(f/2)nRT", "½kʙT per mode ⇒ U=(f/2)nRT"],
      ["Cv=f/2 R, Cp=Cv+R, γ=1+2/f", "Cv=f/2 R, Cp=Cv+R, γ=1+2/f"],
      ["γ ≈ 1.67 / 1.40 / 1.33 (mono/di/poly)", "γ ≈ 1.67 / 1.40 / 1.33 (mono/di/poly)"],
    ],
  },
  {
    label: ["4b · MEAN FREE PATH", "4b · MEAN FREE PATH"],
    color: AMBER_DARK,
    lines: [
      ["λ=1/(√2πd²n) = kʙT/(√2πd²P)", "λ=1/(√2πd²n) = kʙT/(√2πd²P)"],
      ["λ ∝ T/P · collision freq = v̄/λ", "λ ∝ T/P · collision freq = v̄/λ"],
      ["Dulong-Petit: solid 3R, water 9R", "Dulong-Petit: solid 3R, water 9R"],
    ],
  },
];

export default function Ch12Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={17} fill={RED} script>
          {t("whole-chapter cheat sheet", "poore-chapter ka cheat sheet")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={76} size={11} fill={INK} script>
          {t(
            "read this last, the night before the exam",
            "isse aakhir mein padho, exam se ek raat pehle"
          )}
        </T>
      </Fade>

      {CARDS.map((card, i) => {
        const k = i + 1;
        const row = Math.floor(i / 2);
        const col = i % 2;
        const bx = col === 0 ? 36 : 574;
        const by = 98 + row * 126;
        const bw = 470;
        return (
          <Fade key={card.label[0]} on={beat >= k} delay={dl(k, 0.2)}>
            <Rect x={bx} y={by} width={bw} height={110} rx={10} fill={CREAM} stroke={card.color} strokeWidth={1.8} />
            <T x={bx + 14} y={by + 20} size={11} fill={card.color} anchor="start" weight={700}>
              {t(card.label[0], card.label[1])}
            </T>
            <T x={bx + 14} y={by + 44} size={11} fill={INK} anchor="start">
              {t(card.lines[0][0], card.lines[0][1])}
            </T>
            <T x={bx + 14} y={by + 66} size={11} fill={INK} anchor="start">
              {t(card.lines[1][0], card.lines[1][1])}
            </T>
            <T x={bx + 14} y={by + 88} size={11} fill={INK} anchor="start">
              {t(card.lines[2][0], card.lines[2][1])}
            </T>
          </Fade>
        );
      })}

      {/* beat 7 — six things never forget */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={480} size={10.5} fill={RED} weight={700}>
          {t(
            "6 things: kelvin + kg/mol · P∝v²rms (not vrms) · T=energy, same for every gas",
            "6 baatein: kelvin + kg/mol · P∝v²rms (vrms nahi) · T=energy, har gas ke liye same"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={500} size={10.5} fill={RED} weight={700}>
          {t(
            "order is RAM (rms>avg>most-probable) · γ identifies the gas · λ ∝ T/P",
            "order RAM hai (rms>avg>most-probable) · γ gas ko pehchaanta · λ ∝ T/P"
          )}
        </T>
      </Fade>

      {/* beat 8 — closing seed */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={540} size={13} fill={AMBER_DARK} script weight={700}>
          {t(
            "one seed: molecules in ceaseless motion — rebuild the golden thread, and the chapter is yours",
            "ek beej: molecules ceaseless motion mein — golden thread dobara banao, chapter tumhara"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
