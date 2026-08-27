/**
 * M11 Ch10 · Section 34 — "Hyperbola traps (mostly ellipse habits leaking in)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 5 (The Hyperbola), sec 34 of 34.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 9.22, 26.03, 39.25, 50.94, 67.07,
 * 73.47, 93.18]; reveals_hinglish = [0, 9.22, 23.13, 36.44, 47.79, 59.39,
 * 65.71, 86.1].
 *
 * 2x2 pitfall grid (beats1-4, same Card pattern as Sec7/13/20/27), then a
 * two-column ELLIPSE-vs-HYPERBOLA comparison table (beat6, a genuine
 * side-by-side diagram rather than one run-on sentence) closing on a red
 * guardrail (beat7).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

function Card({
  x, y, w, h, stroke, on, delay,
}: { x: number; y: number; w: number; h: number; stroke: string; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 14)} stroke={stroke} sw={2} dur={0.4} />;
}

export default function M11Ch10Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Hyperbola traps (mostly ellipse habits leaking in)", "Hyperbola traps (zyadatar ellipse habits leak ho rahi)")}
        </T>
      </Fade>

      {/* beat 1 — card1: sign not size (HIGH) */}
      <Card x={60} y={110} w={430} h={70} stroke={RED} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={80} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("Sign, not size: POSITIVE term marks", "Sign, size NAHI: POSITIVE term")}
        </T>
        <T x={80} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("the transverse axis. b > a is allowed.", "transverse axis marks karta hai. b > a allowed.")}
        </T>
      </Fade>

      {/* beat 2 — card2: c²=a²+b² */}
      <Card x={560} y={110} w={430} h={70} stroke={RED} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={580} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("Use c² = a² + b² (add). c is the LARGEST;", "c² = a² + b² use karo (add). c SABSE BADA;")}
        </T>
        <T x={580} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("foci lie outside the vertices.", "foci vertices ke bahar hote hain.")}
        </T>
      </Fade>

      {/* beat 3 — card3: eccentricity always >1 */}
      <Card x={60} y={195} w={430} h={70} stroke={RED} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("Eccentricity is always > 1; e = √2 is", "Eccentricity hamesha > 1; e = √2")}
        </T>
        <T x={80} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("the rectangular case (a = b).", "rectangular case hai (a = b).")}
        </T>
      </Fade>

      {/* beat 4 — card4: sketch asymptotes first */}
      <Card x={560} y={195} w={430} h={70} stroke={RED} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={580} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("Always sketch the asymptotes y = ±(b/a)x", "Curve se pehle asymptotes y = ±(b/a)x")}
        </T>
        <T x={580} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("first; the branches follow.", "sketch karo; branches follow karte hain.")}
        </T>
      </Fade>

      {/* beat 5 — sub-header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={325} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Ellipse versus hyperbola at a glance", "Ellipse versus hyperbola ek nazar mein")}
        </T>
      </Fade>

      {/* beat 6 — comparison table */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(540, 352, 540, 478)} stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={290} y={362} size={14} fill={INK} anchor="middle" weight={700}>ELLIPSE</T>
        <T x={790} y={362} size={14} fill={INK} anchor="middle" weight={700}>HYPERBOLA</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={290} y={392} size={13} fill={INK} anchor="middle">{t("PLUS sign", "PLUS sign")}</T>
        <T x={790} y={392} size={13} fill={INK} anchor="middle">{t("MINUS sign", "MINUS sign")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={290} y={418} size={13} fill={INK} anchor="middle">c² = a² − b²</T>
        <T x={790} y={418} size={13} fill={INK} anchor="middle">c² = a² + b²</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={290} y={444} size={13} fill={INK} anchor="middle">e &lt; 1</T>
        <T x={790} y={444} size={13} fill={INK} anchor="middle">e &gt; 1</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={290} y={470} size={13} fill={INK} anchor="middle">{t("closed", "closed")}</T>
        <T x={790} y={470} size={13} fill={INK} anchor="middle">{t("open", "open")}</T>
      </Fade>

      {/* beat 7 — guardrail (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={508} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Same read-off skills; the sign between the", "Same read-off skills; dono terms ke beech ka")}
        </T>
        <T x={540} y={530} size={14} fill={RED} anchor="middle" weight={700}>
          {t("terms flips every conclusion.", "sign hi har conclusion palat deta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
