/**
 * M12Ch01 · Section 10 — "A function is a machine with one strict rule"
 * Subtopic: Types of Functions  (opening section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice builds the function-as-machine picture, names f : A → B with its
 * domain and codomain, asks QUESTION ONE ("do different buttons ever give the
 * same drink?"), answers it with one-one / injective, states the formal
 * implication, then contrasts it with many-one using the pair ±2, which the
 * voice says both land on 4.
 *
 * Everything is drawn: a real vending machine with three buttons, a highlighted
 * press and one cup out; a real A → B oval-and-arrow wiring diagram; and TWO
 * mapping diagrams side by side so the contrast the voice describes in the last
 * beat is literally visible — three clean parallel arrows on the left, two
 * arrows crashing into one ringed output on the right.
 *
 * Grid
 *   title band            y 30–94   (full width)
 *   row 1 (y 106–346)     vending machine  x 40–330
 *                         f : A → B wiring x 360–740
 *                         QUESTION ONE card x 770–1044
 *   row 2 (y 356–596)     ONE-ONE diagram  x 40–360
 *                         formal statement + verdict chips x 380–700
 *                         MANY-ONE diagram x 720–1044
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a function is a machine with one rule"   title + underline + subtitle + rule
 *  1  "the vending machine picture"             machine body, three buttons, the
 *                                               pressed button ringed, the slot,
 *                                               the arrow out and exactly one cup
 *  2  "that wiring is f from A to B"            two ovals, dots, three arrows,
 *                                               the f label, domain / codomain
 *  3  "question one"                            the QUESTION ONE card
 *  4  "one-one, also called injective"          left mapping diagram: a₁a₂a₃ →
 *                                               b₁b₂b₃, distinct to distinct
 *  5  "f(x₁) = f(x₂) ⇒ x₁ = x₂"                 the formal implication, centre
 *  6  "many-one: +2 and −2 both map to 4"       right mapping diagram: +2 and −2
 *                                               both into 4, which is ringed red
 *                                               (the third input/output pair is
 *                                               left unlabelled — the voice names
 *                                               no other numbers); and the
 *                                               answer line closing the QUESTION
 *                                               ONE card, now that both names
 *                                               (one-one, many-one) are spoken
 *  7  "the diagram contrasts the two"           the two chips — verdicts on the
 *                                               ONE-ONE test only, never on
 *                                               whether the map is a function —
 *                                               and the arrows pointing at each
 *                                               diagram
 *
 * Visual vocabulary — held across Sections 10, 11 and 12:
 *   INK ovals and axes · INK dots for elements · GREEN_DARK for a healthy
 *   mapping / a result · RED for the failing case and for headings · AMBER_DARK
 *   for the primary object being fed through the machine · CREAM cards and
 *   chips on empty board only · MUTED for supporting captions.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

/** closed oval as a drawable path (set diagrams) */
const ovalD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* ---- beat 1 : the vending machine ---- */
const MACHINE_D = "M 60 142 H 212 V 302 H 60 Z";
const SLOT_D = "M 84 268 H 188 V 292 H 84 Z";
const CUP_D = "M 252 252 L 300 252 L 292 298 L 260 298 Z";
const BUTTONS: [number, string, string][] = [
  [170, "tea", "chai"],
  [208, "cold coffee", "cold coffee"],
  [246, "soda", "soda"],
];

export default function M12Ch01Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("A function is a machine with one strict rule",
             "Function ek machine hai — ek strict rule ke saath")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 268 62 C 440 58, 660 66, 812 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("one input in — exactly one output out",
             "ek input do — exactly ek output milta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the vending machine ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① a vending machine, wired one way",
             "① ek vending machine, ek hi tarah wired")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={MACHINE_D} stroke={INK} sw={2.4} dur={0.9} fill={CREAM} />
      {BUTTONS.map(([cy, e, h], i) => (
        <Fade key={`btn${cy}`} on={beat >= 1} delay={dl(1, 1.6 + i * 0.25)}>
          <Circle cx={88} cy={cy} r={9} fill={PAPER} stroke={INK} strokeWidth={2} />
          <T x={114} y={cy + 4} size={10.5} fill={INK} weight={700} anchor="start">{t(e, h)}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={ringD(88, 208, 18, 15)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={SLOT_D} stroke={INK} sw={2} dur={0.5} fill={PAPER} />
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={arrowD(218, 278, 248, 278)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 4.3)} d={CUP_D} stroke={AMBER_DARK} sw={2.4} dur={0.6} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={276} y={240} size={11} fill={GREEN_DARK} weight={800}>{t("exactly 1", "exactly 1")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={180} y={320} size={12} fill={INK} weight={700}>
          {t("one press → exactly one drink", "ek press → exactly ek drink")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.6)}>
        <T x={180} y={344} size={12} fill={RED} weight={800}>
          {t("never zero, never two at once", "kabhi zero nahin, kabhi do ek saath nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — f : A → B, the wiring ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={360} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② f : A → B — the wiring itself", "② f : A → B — yahi wiring hai")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={ovalD(430, 232, 48, 64)} stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={ovalD(650, 232, 48, 64)} stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={430} y={156} size={14} fill={INK} weight={900}>A</T>
        <T x={650} y={156} size={14} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Circle cx={430} cy={196} r={5} fill={INK} />
        <Circle cx={430} cy={232} r={5} fill={INK} />
        <Circle cx={430} cy={268} r={5} fill={INK} />
        <Circle cx={650} cy={186} r={5} fill={INK} />
        <Circle cx={650} cy={218} r={5} fill={INK} />
        <Circle cx={650} cy={250} r={5} fill={INK} />
        <Circle cx={650} cy={282} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.1)} d={arrowD(440, 196, 640, 187)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d={arrowD(440, 232, 640, 219)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={arrowD(440, 268, 640, 280)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={540} y={170} size={20} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={430} y={314} size={11.5} fill={MUTED} weight={800}>{t("domain A", "domain A")}</T>
        <T x={650} y={314} size={11.5} fill={MUTED} weight={800}>{t("codomain B", "codomain B")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={550} y={336} size={12} fill={INK} weight={700}>
          {t("A = valid buttons · B = every declared slot, reached or not",
             "A = valid buttons · B = har declared slot, reach ho ya na")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — QUESTION ONE ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={770} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("two questions decide the type", "do questions type decide karte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Rect x={770} y={130} width={274} height={180} rx={16}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Circle cx={798} cy={158} r={14} fill={PAPER} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={798} y={163} size={14} fill={AMBER_DARK} weight={900}>1</T>
        <T x={822} y={163} size={13} fill={AMBER_DARK} weight={900} anchor="start">QUESTION ONE</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={790} y={196} size={13.5} fill={INK} weight={700} anchor="start">
          {t("do different buttons", "kya alag buttons kabhi")}
        </T>
        <T x={790} y={220} size={13.5} fill={INK} weight={700} anchor="start">
          {t("ever give the same drink?", "same drink dete hain?")}
        </T>
      </Fade>
      {/* the answer to QUESTION ONE — only once BOTH names have been spoken (beat 6) */}
      <Fade on={beat >= 6} delay={dl(6, 9.2)}>
        <T x={790} y={268} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("answer it → one-one or many-one", "iska answer → one-one ya many-one")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — ONE-ONE (injective) ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={376} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ONE-ONE (injective)", "ONE-ONE (injective)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={40} y={398} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("distinct inputs → distinct outputs", "alag inputs → alag outputs")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={ovalD(105, 492, 44, 56)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={ovalD(295, 492, 44, 56)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={105} y={426} size={14} fill={INK} weight={900}>A</T>
        <T x={295} y={426} size={14} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <Circle cx={105} cy={458} r={5} fill={INK} />
        <Circle cx={105} cy={492} r={5} fill={INK} />
        <Circle cx={105} cy={526} r={5} fill={INK} />
        <T x={87} y={462} size={11} fill={MUTED} weight={700} anchor="end">a₁</T>
        <T x={87} y={496} size={11} fill={MUTED} weight={700} anchor="end">a₂</T>
        <T x={87} y={530} size={11} fill={MUTED} weight={700} anchor="end">a₃</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <Circle cx={295} cy={458} r={5} fill={GREEN_DARK} />
        <Circle cx={295} cy={492} r={5} fill={GREEN_DARK} />
        <Circle cx={295} cy={526} r={5} fill={GREEN_DARK} />
        <T x={313} y={462} size={11} fill={MUTED} weight={700} anchor="start">b₁</T>
        <T x={313} y={496} size={11} fill={MUTED} weight={700} anchor="start">b₂</T>
        <T x={313} y={530} size={11} fill={MUTED} weight={700} anchor="start">b₃</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4)} d={arrowD(114, 458, 286, 458)} stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.4)} d={arrowD(114, 492, 286, 492)} stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.8)} d={arrowD(114, 526, 286, 526)} stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={200} y={574} size={12} fill={GREEN_DARK} weight={800}>
          {t("Aadhaar: every citizen a distinct number",
             "Aadhaar: har citizen ka distinct number")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the formal implication ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={400} size={13} fill={RED} weight={800}>
          {t("INJECTIVE, FORMALLY", "INJECTIVE, formally")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={436} size={20} fill={INK} weight={900}>f(x₁) = f(x₂)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={466} size={20} fill={GREEN_DARK} weight={900}>⇒  x₁ = x₂</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={540} y={496} size={12} fill={MUTED} weight={700}>
          {t("same output forces the same input",
             "same output se input same hona hi chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — MANY-ONE ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={720} y={376} size={13.5} fill={RED} weight={800} anchor="start">
          {t("MANY-ONE", "MANY-ONE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={720} y={398} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("two inputs collapse to one output", "do inputs ek hi output par collapse")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={ovalD(785, 492, 44, 56)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={ovalD(975, 492, 44, 56)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={785} y={426} size={14} fill={INK} weight={900}>A</T>
        <T x={975} y={426} size={14} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Circle cx={785} cy={452} r={5} fill={INK} />
        <Circle cx={785} cy={492} r={5} fill={INK} />
        <Circle cx={785} cy={532} r={5} fill={INK} />
        <T x={767} y={456} size={11} fill={MUTED} weight={700} anchor="end">+2</T>
        <T x={767} y={536} size={11} fill={MUTED} weight={700} anchor="end">−2</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Circle cx={975} cy={468} r={5} fill={RED} />
        <Circle cx={975} cy={518} r={5} fill={INK} />
        <T x={1002} y={472} size={11} fill={RED} weight={800} anchor="start">4</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d={arrowD(794, 453, 966, 467)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 4.4)} d={arrowD(794, 531, 966, 470)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 4.9)} d={arrowD(794, 494, 966, 516)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 5.5)} d={ringD(975, 468, 18, 15)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={880} y={568} size={12} fill={RED} weight={800}>
          {t("even power or ± symmetry ⇒ suspect many-one",
             "even power ya ± symmetry ⇒ many-one ka shak")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.4)}>
        <T x={880} y={592} size={12} fill={RED} weight={800}>
          {t("+2 and −2 both map to 4", "+2 aur −2 dono 4 par jaate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the contrast ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={420} y={516} w={110} h={34} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={14} script={false}>
          one-one ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={550} y={516} w={130} h={34} fill={CREAM} stroke={RED}
          textFill={RED} size={13} script={false}>
          not one-one ✗
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={arrowD(416, 533, 372, 533)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 2.8)} d={arrowD(684, 533, 716, 533)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={540} y={580} size={12.5} fill={INK} weight={700}>
          {t("distinct inputs — or a collision",
             "distinct inputs — ya ek collision")}
        </T>
      </Fade>
    </Scene>
  );
}
