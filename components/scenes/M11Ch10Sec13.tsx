/**
 * M11 Ch10 · Section 13 — "Where circle marks leak away"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 2 (The Circle), sec 13 of 13.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 5.72, 21.42, 34.65, 45.48, 58.88,
 * 64.85, 80.3]; reveals_hinglish = [0, 5.21, 18.86, 30.72, 40.36, 52.14,
 * 56.75, 73.13].
 *
 * Same 2x2-grid + reflex-recap structure as Sec7 (RED = avoid, AMBER =
 * remember). Card1 and the final reflex card are both JSON red-margin/HIGH.
 *
 * Beats:
 *  0(title,always-on) | "Where circle marks leak away"
 *  1 | card1 (RED,HIGH): centre is (-g,-f), halve+flip — not (g,f)/(2g,2f)
 *  2 | card2: confirm g²+f²-c > 0 before trusting a radius
 *  3 | card3: diameter ends given -> use diameter form
 *  4 | card4: real circle needs equal x²,y² coeffs, no xy term
 *  5 | sub-header: "The one-pass reflex"
 *  6 | card5 (AMBER, wide): g=1/2(x-coeff), f=1/2(y-coeff) -> centre, radius
 *  7 | card6 (RED,HIGH): S1 double duty — sign locates, root measures tangent
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Card({
  x, y, w, h, stroke, on, delay,
}: { x: number; y: number; w: number; h: number; stroke: string; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 14)} stroke={stroke} sw={2} dur={0.4} />;
}

export default function M11Ch10Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Where circle marks leak away", "Circle mein marks kahan leak hote hain")}
        </T>
      </Fade>

      {/* beat 1 — card1: centre sign (HIGH) */}
      <Card x={60} y={110} w={430} h={70} stroke={RED} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={80} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("Centre is (−g,−f): halve & flip sign.", "Centre hai (−g,−f): aadha karo & sign flip.")}
        </T>
        <T x={80} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("NOT (g,f), NOT (2g,2f).", "NOT (g,f), NOT (2g,2f).")}
        </T>
      </Fade>

      {/* beat 2 — card2: confirm positive before trusting radius */}
      <Card x={560} y={110} w={430} h={70} stroke={RED} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={580} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("Always confirm g² + f² − c > 0", "Hamesha confirm karo g² + f² − c > 0")}
        </T>
        <T x={580} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("before trusting a radius.", "radius trust karne se pehle.")}
        </T>
      </Fade>

      {/* beat 3 — card3: diameter form is faster/safer */}
      <Card x={60} y={195} w={430} h={70} stroke={RED} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("Diameter's ends given? Use diameter", "Diameter ke ends diye? Diameter form")}
        </T>
        <T x={80} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("form — faster & safer than centre+radius.", "use karo — centre+radius se faster.")}
        </T>
      </Fade>

      {/* beat 4 — card4: real circle needs equal coeffs, no xy */}
      <Card x={560} y={195} w={430} h={70} stroke={RED} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={580} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("Real circle needs equal x²,y² coeffs", "Real circle ko equal x²,y² coeffs")}
        </T>
        <T x={580} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("and NO xy term.", "chahiye aur koi xy term NAHI.")}
        </T>
      </Fade>

      {/* beat 5 — sub-header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={325} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The one-pass reflex", "One-pass reflex")}
        </T>
      </Fade>

      {/* beat 6 — card5: the reflex recipe (AMBER, wide) */}
      <Card x={150} y={355} w={780} h={70} stroke={AMBER_DARK} on={beat >= 6} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={385} size={14} fill={INK} anchor="middle">
          {t("Read g = ½(x-coeff), f = ½(y-coeff);", "g = ½(x-coeff), f = ½(y-coeff) padho;")}
        </T>
        <T x={540} y={407} size={14} fill={INK} anchor="middle">
          {t("then centre (−g,−f), radius √(g² + f² − c).", "phir centre (−g,−f), radius √(g² + f² − c).")}
        </T>
      </Fade>

      {/* beat 7 — card6: S1 double duty (RED, HIGH) */}
      <Card x={150} y={450} w={780} h={60} stroke={RED} on={beat >= 7} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={478} size={13} fill={RED} anchor="middle" weight={700}>
          {t("S₁: plug a point in — its sign locates it,", "S₁: point daalo — iska sign point ko locate karta hai,")}
        </T>
        <T x={540} y={498} size={13} fill={RED} anchor="middle" weight={700}>
          {t("its square root measures the tangent.", "iska square root tangent measure karta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
