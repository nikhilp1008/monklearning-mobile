/**
 * B11 Ch01 · Section 20 — "Classifying an organism and Table 1.1"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two phases. Phase A (beats 0-5, the housefly climb) occupies the whole
 * board, then vanishes (on={beat<6}) so Phase B (beats 6-8, NCERT Table
 * 1.1) can reuse the same coordinates without ghost-stacking.
 *
 * Beats (en [0, 9.58, 22.55, 33.38, 46.09, 63.98, 84.92, 97.18, 114.72]):
 *  0 title: build the address from the inside out
 *  1 intro: let's do it with the common housefly
 *  2 species → genus → family land (bottom 3 rows, built inside-out)
 *  3 order → class → phylum → kingdom land (top 4 rows)
 *  4 top-down readback caption
 *  5 plant note: say Division instead of Phylum
 *  6 Phase B: NCERT Table 1.1 — the four reference organisms
 *  7 Man's lineage: Homo → Hominidae → Primata → Mammalia → Chordata
 *  8 Mango vs Wheat: same Division, different Class
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const LOWER: [number, string, string][] = [
  [338, "Species", "Musca domestica"],
  [300, "Genus", "Musca"],
  [262, "Family", "Muscidae"],
];
const UPPER: [number, string, string][] = [
  [110, "Kingdom", "Animalia"],
  [148, "Phylum", "Arthropoda"],
  [186, "Class", "Insecta"],
  [224, "Order", "Diptera"],
];

const MAN_CHAIN: [number, number, string][] = [
  [283, 60, "Homo"],
  [373, 90, "Hominidae"],
  [493, 76, "Primata"],
  [599, 84, "Mammalia"],
  [713, 84, "Chordata"],
];

export default function B11Ch01Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0 && beat < 6} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("build the address from the inside out", "andar se bahar tak address banao")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 6} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>

      {/* beat 1 — the housefly */}
      <Fade on={beat >= 1 && beat < 6} dim={beat >= 3} delay={dl(1, 0.3)}>
        <T x={540} y={110} size={15} fill={MUTED} script>
          {t("let's do it with the common housefly, climbing the ladder", "chalo ye common housefly ke saath karte hain, ladder chadhte hue")}
        </T>
      </Fade>

      {/* beat 2 — species, genus, family (inside out) */}
      {LOWER.map(([y, rank, val], i) => (
        <Fade key={rank} on={beat >= 2 && beat < 6} delay={dl(2, 0.3 + i * 0.6)}>
          <T x={340} y={y} size={15} fill={INK} weight={700} anchor="start">
            {rank}
          </T>
          <T x={520} y={y} size={15} fill={AMBER_DARK} weight={700} anchor="start" script={false}>
            {val}
          </T>
        </Fade>
      ))}

      {/* beat 3 — order, class, phylum, kingdom */}
      {UPPER.map(([y, rank, val], i) => (
        <Fade key={rank} on={beat >= 3 && beat < 6} delay={dl(3, 0.3 + i * 0.5)}>
          <T x={340} y={y} size={15} fill={INK} weight={700} anchor="start">
            {rank}
          </T>
          <T x={520} y={y} size={15} fill={AMBER_DARK} weight={700} anchor="start" script={false}>
            {val}
          </T>
        </Fade>
      ))}

      {/* beat 4 — top-down readback */}
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 0.3)}>
        <T x={540} y={365} size={13} fill={INK} script={false}>
          {t(
            "top-down: Animalia → Arthropoda → … → Musca domestica",
            "top-down: Animalia → Arthropoda → … → Musca domestica"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 1.2)}>
        <Draw on={true} d="M 300 375 L 780 375" stroke={INK} sw={1.4} dur={0.4} />
      </Fade>

      {/* beat 5 — plant note */}
      <Fade on={beat >= 5 && beat < 6} delay={dl(5, 0.3)}>
        <T x={540} y={395} size={13} fill={GREEN} script>
          {t("for a PLANT: say Division instead of Phylum", "ek PLANT ke liye: Phylum ki jagah Division bolo")}
        </T>
      </Fade>

      {/* beat 6 — Phase B: NCERT Table 1.1 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("NCERT Table 1.1 — the four reference organisms", "NCERT Table 1.1 — ye 4 reference organisms yaad karo")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={370} y={110} w={70} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          Man
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <Chip x={454} y={110} w={140} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          Housefly ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Chip x={608} y={110} w={90} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          Mango
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <Chip x={712} y={110} w={90} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          Wheat
        </Chip>
      </Fade>

      {/* beat 7 — Man's lineage */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={230} y={190} size={14} fill={INK} weight={700} anchor="start">
          {t("MAN:", "MAN:")}
        </T>
      </Fade>
      {MAN_CHAIN.map(([x, w, label], i) => (
        <React.Fragment key={label}>
          <Fade on={beat >= 7} delay={dl(7, 0.8 + i * 0.5)}>
            <Chip x={x} y={170} w={w} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
              {label}
            </Chip>
          </Fade>
          {i < MAN_CHAIN.length - 1 && (
            <Fade on={beat >= 7} delay={dl(7, 1.1 + i * 0.5)}>
              <Draw on={true} d={arrowD(x + w + 4, 185, MAN_CHAIN[i + 1][0] - 4, 185)} stroke={MUTED} sw={1.6} dur={0.3} />
            </Fade>
          )}
        </React.Fragment>
      ))}

      {/* beat 8 — Mango vs Wheat */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={440} y={250} size={15} fill={INK} weight={700}>
          Mango
        </T>
        <T x={740} y={250} size={15} fill={INK} weight={700}>
          Wheat
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={150} y={280} size={13} fill={INK} script={false} anchor="start">
          {t("Class:", "Class:")}
        </T>
        <T x={440} y={280} size={13} fill={RED} script={false}>
          Dicotyledonae
        </T>
        <T x={740} y={280} size={13} fill={RED} script={false}>
          Monocotyledonae
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={150} y={310} size={13} fill={INK} script={false} anchor="start">
          {t("Division:", "Division:")}
        </T>
        <T x={440} y={310} size={13} fill={GREEN} script={false}>
          Angiospermae
        </T>
        <T x={740} y={310} size={13} fill={GREEN} script={false}>
          Angiospermae
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.6)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t(
            "same Division, different Class — reading a COLUMN compares the same rank",
            "same Division, alag Class — ek COLUMN padhna same rank compare karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
