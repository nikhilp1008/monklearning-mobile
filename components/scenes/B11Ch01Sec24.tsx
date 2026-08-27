/**
 * B11 Ch01 · Section 24 — "Pitfalls & pro-tips: King Philip and the
 * containment rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.43, 27.37, 41.78, 51.67, 66.42, 78.61, 104.28]):
 *  0 title + four red tally marks
 *  1 trap 1 (badge): Family ↔ Order swap
 *  2 trap 2 (badge): Mammalia is taxon, Class is category
 *  3 trap 3 (badge): mono/poly flip
 *  4 trap 4 (badge): reversing the master trend
 *  5 DIAGRAM: King Philip mnemonic (7 rows) + containment rule box
 *  6 pro-tip: find the lowest shared rank
 *  7 memory aid: King Philip Came Over For Good Soup
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script26 red) bl64 · tally x930..975 y48..72
 *  b1 | badge c(76,105) r13 · trap1 (script15 red) x104..? bl110
 *  b2 | badge c(76,138) · trap2 bl143
 *  b3 | badge c(76,171) · trap3 bl176
 *  b4 | badge c(76,204) · trap4 bl209
 *  b5 | mnemonic 7 rows x100/230 y235..379 (24 apart)
 *  b5 | containment box (amber-d) x560..900 y235..375
 *  b6 | pro-tip (script13 green) bl412 · underline y419
 *  b7 | mnemonic phrase (script14) bl445 · rank chain (12 anek) bl468
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
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

const TRAPS: [number, number, string, string][] = [
  [105, 110, "Family ↔ Order swap — correct order is FAMILY then ORDER", "Family ↔ Order swap — sahi order hai FAMILY phir ORDER"],
  [138, 143, "Mammalia is a TAXON; Class is the CATEGORY — don't reverse", "Mammalia ek TAXON hai; Class CATEGORY hai — reverse mat karo"],
  [171, 176, "mono/poly flip — MONOtypic = one, POLYtypic = many", "mono/poly flip — MONOtypic = ek, POLYtypic = bahut"],
  [204, 209, "reversing the master trend — up: characters↓, size↑ (not the inverse)", "master trend ulatna — upar: characters↓, size↑ (ulta nahi)"],
];

const MNEMONIC: [string, string][] = [
  ["King", "Kingdom"],
  ["Philip", "Phylum"],
  ["Came", "Class"],
  ["Over", "Order"],
  ["For", "Family"],
  ["Good", "Genus"],
  ["Soup", "Species"],
];

export default function B11Ch01Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — four traps to nail the hierarchy */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four traps to nail the hierarchy", "hierarchy pakki karne ke chaar traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24" stroke={RED} sw={2.4} dur={0.7} />

      {/* beats 1-4 — the four traps */}
      {TRAPS.map(([cy, bl, e2, h2], i) => (
        <React.Fragment key={cy}>
          <Badge cy={cy} on={beat >= i + 1} delay={dl(i + 1, 0.4)} />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 1.3)}>
            <T x={104} y={bl} size={15} fill={RED} script anchor="start">
              {t(e2, h2)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — the King Philip mnemonic + containment box */}
      {MNEMONIC.map(([word, rank], i) => (
        <Fade key={word} on={beat >= 5} delay={dl(5, 0.3 + i * 0.3)}>
          <T x={100} y={235 + i * 24} size={13} fill={AMBER_DARK} weight={700} anchor="start" script={false}>
            {word}
          </T>
          <T x={230} y={235 + i * 24} size={13} fill={MUTED} anchor="start" script={false}>
            {rank}
          </T>
        </Fade>
      ))}
      <Draw on={beat >= 5} delay={dl(5, 2.5)} d="M 560 235 h 340 v 140 h -340 z" stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={730} y={265} size={12} fill={AMBER_DARK} script={false}>
          {t("Same LOWER category", "Same LOWER category")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={730} y={295} size={18} fill={AMBER_DARK} weight={700}>
          ↓
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={730} y={320} size={12} fill={AMBER_DARK} script={false}>
          {t("must share ALL higher", "must share ALL higher")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={730} y={350} size={10} fill={MUTED} script={false}>
          {t("reverse does not hold", "reverse does not hold")}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={412} size={13} fill={INK} script>
          {t(
            "find the LOWEST shared rank — everything above is automatically shared",
            "sabse NEECHI shared rank dhoondo — upar sab automatically shared hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 300 420 L 780 420" stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 7 — the memory aid */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={445} size={14} fill={AMBER_DARK} weight={700}>
          "King Philip Came Over For Good Soup"
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={468} size={12} fill={MUTED} script={false}>
          = Kingdom → Phylum → Class → Order → Family → Genus → Species
        </T>
      </Fade>
    </Scene>
  );
}
