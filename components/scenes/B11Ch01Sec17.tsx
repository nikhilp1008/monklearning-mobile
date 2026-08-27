/**
 * B11 Ch01 · Section 17 — "The nested hierarchy and the master trend"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.81, 45.55, 57.48, 73.73, 80.76, 97.35, 108.02, 136.99]):
 *  0 title + hook: a species never floats alone [dim@3]
 *  1 analogy: house → village → district → state → nation [dim@3]
 *  2 definition: taxonomic hierarchy = ranked groups [dim@3]
 *  3 THE DIAGRAM: the 7-rank inverted-funnel ladder, Kingdom to Species
 *  4 master key: higher up → fewer shared characters, larger groups
 *  5 nesting: each level fully contains those below it
 *  6 reverse fails: sharing a kingdom says little about sharing a genus
 *  7 the seven obligate categories, spelled out
 *  8 optional intermediates may be inserted between the seven
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl64 · underline y86 · hook (script15 muted) bl110 [dim@3]
 *  b1 | analogy (script16 ink) bl150 [dim@3]
 *  b2 | definition (script15 green) bl185 [dim@3]
 *  b3 | 7 bands, narrowing, y210..468 x140..940 down to x440..640
 *  b3 | side labels rotated · caption bl480
 *  b4-8 | recap lines (anek 11-12) bl496/516/536/556/578
 */

import React from "react";
import { Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const BANDS: [number, number, string][] = [
  [210, 800, "Kingdom"],
  [248, 700, "Phylum / Division"],
  [286, 600, "Class"],
  [324, 500, "Order"],
  [362, 400, "Family"],
  [400, 300, "Genus"],
  [438, 200, "Species"],
];

export default function B11Ch01Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("a species never floats alone", "ek species kabhi akeli nahi tairti")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} dim={beat >= 3} delay={dl(0, 2.8)}>
        <T x={540} y={110} size={15} fill={MUTED} script>
          {t(
            "recall: species = free interbreeding + fertile offspring — but it doesn't float ALONE",
            "yaad karo: species = free interbreeding + fertile offspring — par ye AKELI nahi tairti"
          )}
        </T>
      </Fade>

      {/* beat 1 — the analogy */}
      <Fade on={beat >= 1} dim={beat >= 3} delay={dl(1, 0.3)}>
        <T x={540} y={150} size={16} fill={INK} script>
          {t("like: house → village → district → state → nation", "jaise: ghar → gaon → district → state → desh")}
        </T>
      </Fade>

      {/* beat 2 — the definition */}
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 0.3)}>
        <T x={540} y={185} size={15} fill={GREEN} script>
          {t(
            "taxonomic hierarchy = ranked groups — specific at the BOTTOM, broad at the TOP",
            "taxonomic hierarchy = ranked groups — sabse specific NEECHE, sabse broad UPAR"
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: the inverted-funnel ladder */}
      {BANDS.map(([y, w, label], i) => (
        <React.Fragment key={label}>
          <Draw on={beat >= 3} delay={dl(3, 0.3 + i * 0.5)} d={`M ${540 - w / 2} ${y} h ${w} v 30 h ${-w} z`} stroke={AMBER_DARK} sw={2} dur={0.5} />
          <Fade on={beat >= 3} delay={dl(3, 0.7 + i * 0.5)}>
            <T x={540} y={y + 20} size={13} fill={INK} weight={600}>
              {label}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <SvgText x={95} y={340} textAnchor="middle" fontSize={11} fill={RED} fontFamily="var(--font-anek-latin), sans-serif" transform="rotate(-90 95 340)">
          {t("organisms increase ↑", "organisms increase ↑")}
        </SvgText>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <SvgText x={985} y={340} textAnchor="middle" fontSize={11} fill={GREEN} fontFamily="var(--font-anek-latin), sans-serif" transform="rotate(90 985 340)">
          {t("common characters increase ↓", "common characters increase ↓")}
        </SvgText>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={540} y={480} size={12} fill={MUTED} script={false}>
          {t("seven obligate categories (Linnaeus)", "saat obligate categories (Linnaeus)")}
        </T>
      </Fade>

      {/* beat 4 — the master key */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={496} size={12} fill={AMBER_DARK} script={false}>
          {t(
            "master key: higher up → fewer shared characters, larger looser groups",
            "master key: jitna upar, utne kam shared characters, utna bada loose group"
          )}
        </T>
      </Fade>

      {/* beat 5 — nesting */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={516} size={12} fill={INK} script={false}>
          {t(
            "nesting: each level fully CONTAINS those below it",
            "nesting: har level apne neeche ke sabko poori tarah CONTAIN karta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — reverse fails */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={536} size={12} fill={RED} script={false}>
          {t(
            "reverse fails: sharing a KINGDOM says little about sharing a GENUS",
            "ulta fail: kingdom share karna genus share karne ke baare mein kuch nahi batata"
          )}
        </T>
      </Fade>

      {/* beat 7 — the seven obligate categories */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={556} size={11} fill={AMBER_DARK} weight={700}>
          Species → Genus → Family → Order → Class → Phylum/Division → Kingdom (Linnaeus)
        </T>
      </Fade>

      {/* beat 8 — optional intermediates */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={578} size={11} fill={MUTED} script>
          {t(
            "optional intermediates (sub-class, super-class, tribe…) may sit between these seven",
            "optional intermediates (sub-class, super-class, tribe…) in saaton ke beech insert ho sakte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
