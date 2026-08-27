/**
 * B11 Ch01 · Section 16 — "Pitfalls & pro-tips: the four-check name scan"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.67, 31.48, 44.39, 62.2, 80.67, 94.99, 114.87]):
 *  0 title + four red tally marks
 *  1 pitfall 1 (badge): capitalisation slip
 *  2 pitfall 2 (badge): author confusion
 *  3 pitfall 3 (badge): ICBN ↔ ICZN swap
 *  4 pitfall 4 (badge): taxonomy vs systematics inverted
 *  5 DIAGRAM: the four-check scan list for any name
 *  6 scan order recap, one line
 *  7 two memory aids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script26 red) bl64 · tally x930..975 y48..72
 *  b1-4 | badge c(76,108/144/180/216) r13 · text (script15 red) x104..? bl113/149/185/221
 *  b5 | 4 check boxes (amber-d) x150..800 y250..280/286..316/322..352/358..388
 *  b5 | caption (12 anek muted) bl405
 *  b6 | scan order (script14 green) bl440 · underline y452
 *  b7 | 2 memory chips y470..502 / y508..540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ cy, on, delay }: { cy: number; on: boolean; delay: number }) {
  return (
    <Draw
      on={on}
      delay={delay}
      d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
      stroke={RED}
      sw={2.2}
      dur={0.4}
    />
  );
}

const PITFALLS: [number, number, string, string][] = [
  [108, 113, "capitalisation slip — Genus Capital, species lowercase, ALWAYS", "capitalisation slip — Genus Capital, species lowercase, HAMESHA"],
  [144, 149, "author confusion — Linn. is Roman, optional, last — NEVER italic", "author confusion — Linn. Roman hai, optional, last — kabhi italic NAHI"],
  [180, 185, "ICBN ↔ ICZN swap — the single most-exploited trap", "ICBN ↔ ICZN swap — chapter ka sabse zyada exploit hone wala trap"],
  [216, 221, "inverting taxonomy vs systematics — systematics is BROADEST", "taxonomy vs systematics ulatna — systematics sabse BROADEST hai"],
];

const CHECKS: [number, string][] = [
  [250, "1 · Two words, latinised?"],
  [286, "2 · Genus Capital, species lowercase?"],
  [322, "3 · Italic (print) / underlined separately?"],
  [358, "4 · Author in Roman, last, optional?"],
];

export default function B11Ch01Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — four pitfalls, then a fixed scan */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four pitfalls, then a fixed scan", "chaar pitfalls, phir ek fixed scan")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24" stroke={RED} sw={2.4} dur={0.7} />

      {/* beats 1-4 — the four pitfalls */}
      {PITFALLS.map(([cy, bl, e2, h2], i) => (
        <React.Fragment key={cy}>
          <Badge cy={cy} on={beat >= i + 1} delay={dl(i + 1, 0.4)} />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 1.3)}>
            <T x={104} y={bl} size={15} fill={RED} script anchor="start">
              {t(e2, h2)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — the four-check scan */}
      {CHECKS.map(([y, label], i) => (
        <React.Fragment key={y}>
          <Draw on={beat >= 5} delay={dl(5, 0.3 + i * 0.6)} d={`M 150 ${y} h 650 v 30 h -650 z`} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
          <Fade on={beat >= 5} delay={dl(5, 0.7 + i * 0.6)}>
            <T x={170} y={y + 20} size={12} fill={AMBER_DARK} script={false} anchor="start">
              {label}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={540} y={405} size={12} fill={MUTED} script={false}>
          {t(
            "the wrong option almost always fails exactly ONE check",
            "galat option lagbhag hamesha theek EK check fail karta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — scan order, in a line */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={440} size={14} fill={AMBER_DARK} script>
          {t(
            "scan order: two words? → case? → italic/underline? → author Roman & last?",
            "scan order: do words? → case? → italic/underline? → author Roman & last?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 400 452 C 460 449, 620 449, 680 452" stroke={AMBER_DARK} sw={1.8} dur={0.5} />

      {/* beat 7 — two memory aids */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={240} y={470} w={600} h={32} fill={INK} textFill={CREAM} size={15} script={false}>
          "Genus Gets the Great capital letter"
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Chip x={340} y={508} w={400} h={32} fill={INK} textFill={CREAM} size={15} script={false}>
          "B in ICBN = Botany"
        </Chip>
      </Fade>
    </Scene>
  );
}
