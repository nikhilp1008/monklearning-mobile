/**
 * B11 Ch01 · Section 19 — "Reading the ladder: containment and inference"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.72, 35.68, 44.37, 60.91, 73.78, 83.31, 101.86]):
 *  0 title + underline
 *  1 trend recap: up = bigger/fewer characters, down = tighter/more [dim@2]
 *  2 DIAGRAM: 7 concentric nesting boxes, Kingdom outermost to Species inner
 *  3 containment: can't be in an inner box without every box around it
 *  4 golden inference: same lower category ⇒ share all higher
 *  5 concrete example: same family → guaranteed same order/class/phylum/kingdom
 *  6 reverse fails: same order does NOT mean same family
 *  7 NEET tip: find the shared lower rank, everything above is automatic
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl64 · underline y86
 *  b1 | trend (script15 ink) bl115 · underline y126 [dim@2]
 *  b2 | 7 nested boxes x370..710 y210..448, labels bl226/250/274/298/322/346/377
 *  b2 | caption bl465
 *  b3 | containment (13 anek) bl488 · underline y500
 *  b4 | inference (13 anek green) bl510 · underline y522
 *  b5 | example (13 anek) bl532 · underline y544
 *  b6 | reverse fails (13 anek red) bl554 · underline y566
 *  b7 | NEET tip (script12 amber-d) bl580
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const BOXES: [number, number, number, number, number, string][] = [
  [370, 210, 340, 238, 226, "Kingdom"],
  [392, 234, 296, 206, 250, "Phylum"],
  [414, 258, 252, 174, 274, "Class"],
  [436, 282, 208, 142, 298, "Order"],
  [458, 306, 164, 110, 322, "Family"],
  [480, 330, 120, 78, 346, "Genus"],
  [502, 354, 76, 46, 377, "Species"],
];

export default function B11Ch01Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("read the ladder in both directions", "ladder ko dono directions mein padho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — the trend, both directions */}
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={15} fill={INK} script>
          {t(
            "up: bigger, fewer characters · down: tighter, more characters",
            "upar: bada, kam characters · neeche: tight, zyada characters"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 1.3)}>
        <Draw on={true} d="M 350 126 L 730 126" stroke={MUTED} sw={1.4} dur={0.4} />
      </Fade>

      {/* beat 2 — THE DIAGRAM: concentric nesting boxes */}
      {BOXES.map(([x, y, w, h, ly, label], i) => (
        <React.Fragment key={label}>
          <Draw on={beat >= 2} delay={dl(2, 0.3 + i * 0.4)} d={`M ${x} ${y} h ${w} v ${h} h ${-w} z`} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
          <Fade on={beat >= 2} delay={dl(2, 0.6 + i * 0.4)}>
            <T x={540} y={ly} size={12} fill={INK} weight={700}>
              {label}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={540} y={465} size={12} fill={MUTED} script={false}>
          {t("every higher category wraps around the lower ones", "har higher category neeche walon ko wrap karti hai")}
        </T>
      </Fade>

      {/* beat 3 — containment */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={488} size={13} fill={INK} script={false}>
          {t(
            "containment: you can't be in an inner box without every box around it",
            "containment: tum kisi inner box mein nahi ho sakte bina us box ke jo tumhe gher ta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 300 500 L 780 500" stroke={INK} sw={1.4} dur={0.4} />

      {/* beat 4 — the golden inference */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={510} size={13} fill={GREEN} script={false}>
          {t(
            "golden inference: same LOWER category ⇒ share ALL higher categories",
            "golden inference: same NEECHE ki category ⇒ saari UPAR ki bhi share hoti hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 280 522 L 800 522" stroke={GREEN} sw={1.4} dur={0.4} />

      {/* beat 5 — the concrete example */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={532} size={13} fill={INK} script={false}>
          {t(
            "same family → guaranteed same order, class, phylum, kingdom",
            "same family → guaranteed same order, class, phylum, kingdom"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 320 544 L 760 544" stroke={INK} sw={1.4} dur={0.4} />

      {/* beat 6 — the reverse fails */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={554} size={13} fill={RED} script={false}>
          {t(
            "but same order does NOT mean same family — never reverse it",
            "par same order ka matlab same family NAHI — kabhi reverse mat karo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 300 566 L 780 566" stroke={RED} sw={1.4} dur={0.4} />

      {/* beat 7 — the NEET tip */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={580} size={12} fill={AMBER_DARK} script>
          {t(
            "favourite NEET question — find the shared LOWER rank, everything above is automatic",
            "favourite NEET question — sabse neechi shared rank dhoondo, upar sab automatic"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
