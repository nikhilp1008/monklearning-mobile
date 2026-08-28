/**
 * M12Ch01 · Section 14 — "Testing one-one and onto on a linear map"
 * Subtopic: Types of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The narration turns the two questions into two routines and then runs both
 * on f(x) = 2x − 7. So the board carries (a) the two routines as real
 * two-box flows — assume f(x₁) = f(x₂) ⇒ force x₁ = x₂, and y = f(x) ⇒ x in
 * terms of y — and (b) the actual graph of y = 2x − 7 on real axes, with the
 * −7 intercept marked. The one-one verdict is carried by the algebra chain
 * alone (that is all segment 5 speaks). The onto verdict is the one that gets
 * drawn: a sample real y taken across to the graph and dropped from that
 * crossing to its preimage x = (y + 7)/2 on the x-axis, which is exactly what
 * segment 7 says. The algebra chains sit beside the graph so the picture and
 * the manipulation are read together.
 *
 * Graph frame: origin (126, 403), 43 px per x-unit, 20.7 px per y-unit;
 * x ∈ [−2, 8], y ∈ [−9, 5]. The line is plotted from x = −1 to x = 6, both
 * endpoints landing exactly on the frame edge.
 *
 * Grid:
 *   header    y 30..94
 *   row 1     y 100..260 — routine ① x 40..520 · routine ② x 540..1044
 *   divider   y 270
 *   row 2     y 280..596 — graph x 40..480 · divider at x 500 ·
 *                          one-one chain y 300..440, onto chain y 450..596
 *
 * Beat map (8 segments, gates 0..7 — every gate used):
 *  0  "two routines, then prove a linear         title + underline + subtitle
 *      function is a bijection"                  + rule (no example yet — the
 *                                               voice names 2x − 7 at beat 3)
 *  1  "assume f(x₁) = f(x₂), force x₁ = x₂"     ROUTINE ① — the two boxes and
 *                                               the arrow between them
 *  2  "solve y = f(x) for x, ask if x exists"   ROUTINE ② — the two boxes and
 *                                               the codomain question
 *  3  "f : R → R, f(x) = 2x − 7"                axes, ticks, the line, the
 *                                               −7 intercept, the label
 *  4  "the −7 cancels, the 2 divides out"       one-one chain: step 1 and
 *                                               step 2 with their annotations
 *  5  "so x₁ = x₂ — the function is one-one"    the forced conclusion of the
 *                                               one-one chain
 *  6  "solve y = 2x − 7 ⇒ x = (y + 7)/2"        onto chain: the two lines
 *  7  "that x is real for every y, and it maps  a real y taken across to the
 *      back to y ⇒ onto, therefore bijective"    graph, then dropped to its
 *                                               preimage on the x-axis, plus
 *                                               the ringed verdict
 *
 * Visual vocabulary (shared with Sections 13 and 15 of this subtopic):
 *   headings and traps RED · the function itself AMBER_DARK · results and
 *   verdicts GREEN_DARK · axes INK · quiet annotations INK_LIGHT / MUTED.
 */

import React from "react";
import { Circle, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---- graph frame ---- */
const OX = 126;
const OY = 403;
const SX = 43;
const SY = 20.7;
const px = (x: number) => OX + SX * x;
const py = (y: number) => OY - SY * y;

/** f(x) = 2x − 7, plotted edge to edge */
const LINE_D = `M ${px(-1).toFixed(1)} ${py(-9).toFixed(1)} L ${px(6).toFixed(1)} ${py(5).toFixed(1)}`;

const XTICKS = [-1, 1, 2, 3, 4, 5]
  .map((x) => `M ${px(x).toFixed(1)} 398 V 408`)
  .join(" ");
const YTICKS = [2, 4, -2, -4, -6, -8]
  .map((y) => `M 121 ${py(y).toFixed(1)} H 131`)
  .join(" ");

/**
 * The sample level used for the onto picture: y = 3, whose preimage is
 * x = (3 + 7)/2 = 5. Kept well clear of the x-axis so the drop from the
 * crossing down to the preimage is a real ~54 px line, not a bare chevron.
 */
const LEVEL_Y = py(3);
const HIT_X = px(5);

/** text with subscripted segments: [["2x","1"],[" − 7 = 2x","2"],[" − 7"]] */
function SubT({
  x, y, size, fill, weight = 800, anchor = "start", segs,
}: {
  x: number; y: number; size: number; fill: string;
  weight?: number; anchor?: "start" | "middle" | "end";
  segs: [string, string?][];
}) {
  const S = size * 0.66;
  const D = size * 0.2;
  return (
    <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
      {segs.map(([plain, sub], i) => (
        <React.Fragment key={i}>
          <TSpan dy={i > 0 && segs[i - 1][1] !== undefined ? -D : 0}>{plain}</TSpan>
          {sub !== undefined ? <TSpan fontSize={S} dy={D}>{sub}</TSpan> : null}
        </React.Fragment>
      ))}
    </T>
  );
}

export default function M12Ch01Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Testing one-one and onto",
             "One-one aur onto test")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 392 62 C 480 58, 600 66, 690 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("two routines, then prove a linear function is a bijection",
             "do routines, phir prove karo ki ek linear function bijection hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — ROUTINE ① : test one-one ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ROUTINE ① — how to test ONE-ONE", "ROUTINE ① — ONE-ONE kaise test karein")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Rect x={44} y={134} width={190} height={40} rx={14}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <SubT x={139} y={159} size={16} fill={AMBER_DARK} weight={900} anchor="middle"
          segs={[["f(x", "1"], [") = f(x", "2"], [")"]]} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(244, 154, 288, 154)} stroke={GREEN_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={266} y={144} size={11} fill={GREEN_DARK} weight={700}>algebra</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Rect x={298} y={134} width={150} height={40} rx={14}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <SubT x={373} y={159} size={16} fill={GREEN_DARK} weight={900} anchor="middle"
          segs={[["x", "1"], [" = x", "2"]]} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={44} y={200} size={12.5} fill={INK} weight={700} anchor="start">
          {t("assume the outputs are equal, then force the inputs equal",
             "maan lo outputs barabar hain, phir inputs ko barabar force karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={44} y={224} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("if it is forced ⇒ ONE-ONE", "agar force ho gaya ⇒ ONE-ONE")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — ROUTINE ② : test onto ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 520 108 V 256" stroke={MUTED} sw={1} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ROUTINE ② — how to test ONTO", "ROUTINE ② — ONTO kaise test karein")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Rect x={544} y={134} width={140} height={40} rx={14}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <T x={614} y={160} size={16} fill={AMBER_DARK} weight={900}>y = f(x)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(694, 154, 758, 154)} stroke={GREEN_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={726} y={144} size={11} fill={GREEN_DARK} weight={700}>solve for x</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <Rect x={768} y={134} width={240} height={40} rx={14}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={888} y={160} size={16} fill={GREEN_DARK} weight={900}>x in terms of y</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={544} y={200} size={12.5} fill={INK} weight={700} anchor="start">
          {t("then ask: does a valid x in the domain exist for every y in the codomain?",
             "phir poochho: kya har y in codomain ke liye domain mein valid x hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={544} y={224} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("if yes for every y ⇒ ONTO", "agar har y ke liye haan ⇒ ONTO")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the actual function on actual axes ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 40 270 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 500 290 V 590" stroke={MUTED} sw={1} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={40} y={290} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the graph of f : R → R", "f : R → R ka graph")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={arrowD(44, OY, 466, OY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 1.9)} d={arrowD(OX, 585, OX, 303)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={XTICKS} stroke={INK_LIGHT} sw={1.5} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.7)} d={YTICKS} stroke={INK_LIGHT} sw={1.5} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={430} y={392} size={12.5} fill={INK} weight={800}>x</T>
        <T x={114} y={312} size={12.5} fill={INK} weight={800} anchor="end">y</T>
        <T x={118} y={420} size={12} fill={MUTED} weight={700} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={LINE_D} stroke={AMBER_DARK} sw={3} dur={1.2} />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={392} y={320} size={13} fill={AMBER_DARK} weight={900} anchor="start">f(x) = 2x − 7</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <Circle cx={OX} cy={py(-7)} r={5} fill={RED} />
        <T x={114} y={py(-7) + 4.5} size={12.5} fill={RED} weight={800} anchor="end">−7</T>
      </Fade>

      {/* ═══════════ beat 4 — the one-one algebra, first two steps ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={520} y={316} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ONE-ONE TEST on f(x) = 2x − 7", "ONE-ONE TEST — f(x) = 2x − 7 par")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <SubT x={540} y={348} size={17} fill={INK} weight={900}
          segs={[["2x", "1"], [" − 7 = 2x", "2"], [" − 7"]]} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={720} y={348} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("add 7 to both sides", "dono taraf 7 add karo")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={arrowD(526, 356, 526, 368)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <SubT x={540} y={380} size={17} fill={INK} weight={900}
          segs={[["2x", "1"], [" = 2x", "2"]]} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={720} y={380} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("divide both sides by 2", "dono taraf 2 se divide karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the inputs are forced equal ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={arrowD(526, 388, 526, 400)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <SubT x={540} y={412} size={17} fill={GREEN_DARK} weight={900}
          segs={[["x", "1"], [" = x", "2"]]} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={720} y={412} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("forced — so f is ONE-ONE", "force ho gaya — f ONE-ONE hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the onto algebra ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 520 450 H 1044" stroke={MUTED} sw={1} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={520} y={472} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ONTO TEST — solve y = 2x − 7 for x",
             "ONTO TEST — y = 2x − 7 ko x ke liye solve karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={506} size={17} fill={INK} weight={900} anchor="start">y = 2x − 7</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={720} y={506} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("take any real y", "koi bhi real y lo")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3)} d={arrowD(526, 514, 526, 526)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={540} y={542} size={17} fill={GREEN_DARK} weight={900} anchor="start">x = (y + 7) / 2</T>
      </Fade>

      {/* ═══════════ beat 7 — the preimage exists, so bijective ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={720} y={542} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("real for every real y", "har real y ke liye real hai")}
        </T>
      </Fade>
      {/* the same verdict, drawn: take a real y across to the graph, then
          drop from the crossing to its preimage on the x-axis */}
      <Draw on={beat >= 7} delay={dl(7, 1)}
        d={arrowD(130, LEVEL_Y, HIT_X - 6, LEVEL_Y)} stroke={GREEN_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <Circle cx={HIT_X} cy={LEVEL_Y} r={5} fill={GREEN_DARK} />
        <T x={114} y={LEVEL_Y + 4.5} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">y</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.3)}>
        <T x={138} y={328} size={11.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("any real y meets the graph", "koi bhi real y graph se milta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3)} d={arrowD(HIT_X, LEVEL_Y + 9, HIT_X, OY - 4)} stroke={GREEN_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <Circle cx={HIT_X} cy={OY} r={4.5} fill={GREEN_DARK} />
        <T x={312} y={424} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">x = (y + 7)/2</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={540} y={578} size={16} fill={GREEN_DARK} weight={900} anchor="start">
          {t("every y has a preimage ⇒ ONE-ONE + ONTO ⇒ BIJECTIVE",
             "har y ka preimage hai ⇒ ONE-ONE + ONTO ⇒ BIJECTIVE")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5.4)} d={ringD(754, 572, 220, 16)} stroke={GREEN_DARK} sw={2} dur={0.9} />
    </Scene>
  );
}
