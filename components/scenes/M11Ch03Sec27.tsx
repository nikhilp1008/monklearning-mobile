/**
 * M11 Ch03 · Section 27 — "One master key, and the tree that grows from it"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, opens subtopic 5 (Identities and Compound Angle Formulas),
 * identity-derivation care required for the whole subtopic. A family-tree diagram of boxes +
 * connector lines (no new primitive needed, same idea as the ASTC ladder).
 *
 * Beats (board_reveal_at_english [0, 7.68, 19.29, 30.55, 38.06, 54.27, 67.58]):
 *  0 subtitle: the forest is really one seed
 *  1 text: sum,difference,double,half,triple,product-sum,sum-product all descend from one identity
 *  2 HERO (high): cos(A-B) = cosAcosB + sinAsinB — the master key
 *  3 THE DIAGRAM: family tree (root → 3 branches → their children → closer box)
 *  4 text: B→-B gives cos(A+B); sinθ=cos(π/2-θ) gives sin(A±B)
 *  5 text: B=A for double; halve for half-angle; add/subtract pairs for product-to-sum
 *  6 red-margin: learn the derivation, not the list
 *
 * Layout plan — hero at top, 4-row tree below, explanatory text beneath:
 *  b0 | subtitle (15,amber)              | T mid | x300..780  y76..91  (bl 84)
 *  b1 | 2 lines (14)                     | T mid | x150..930  y98..133
 *  b2 | HERO chip                        | Chip  | x390..690  y150..196
 *  b3 | tree: 3+2+3+1 boxes + connectors | Draw/Chip | y215..396
 *  b4 | 2 lines (13)                     | T mid | x200..880  y420..447
 *  b5 | 2 lines (13)                     | T mid | x130..950  y464..491
 *  b6 | margin bar (red)                 | Draw  | x60  y505..550
 *  b6 | closer 2 lines (13,red)          | T st  | x76..600   y519..545
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function Box({
  on,
  delay,
  x,
  y,
  w,
  h,
  fill,
  stroke,
  textFill = INK,
  children,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  stroke: string;
  textFill?: string;
  children: string;
}) {
  return (
    <Fade on={on} delay={delay}>
      <Chip x={x} y={y} w={w} h={h} fill={fill} stroke={stroke} textFill={textFill} size={12} script={false}>
        {children}
      </Chip>
    </Fade>
  );
}

export default function M11Ch03Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} anchor="middle" script>
          {t("One Master Key, and the Tree That Grows From It", "Ek Master Key, aur Uska Tree")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The forest is really one seed", "Jungle asal mein ek hi beej hai")}
        </T>
      </Fade>

      {/* beat 1 — everything descends from one identity */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={13} fill={INK} anchor="middle">
          {t("Sum, difference, double, half, triple,", "Sum, difference, double, half, triple,")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={126} size={13} fill={INK} anchor="middle">
          {t("product-to-sum, sum-to-product - all descend from one identity.", "product-to-sum, sum-to-product - sab ek identity se aate hain.")}
        </T>
      </Fade>

      {/* beat 2 — HERO: the master key */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={390} y={150} w={300} h={46} fill={AMBER} textFill={INK} size={18} script={false}>
          cos(A-B) = cosAcosB+sinAsinB
        </Chip>
      </Fade>

      {/* beat 3 — THE DIAGRAM: the family tree */}
      <Draw on={beat >= 3} d="M 540 196 L 250 215" stroke="#94A3B8" sw={1.4} delay={dl(3, 0)} />
      <Draw on={beat >= 3} d="M 540 196 L 540 215" stroke="#94A3B8" sw={1.4} delay={dl(3, 0.1)} />
      <Draw on={beat >= 3} d="M 540 196 L 830 215" stroke="#94A3B8" sw={1.4} delay={dl(3, 0.2)} />
      <Box on={beat >= 3} delay={dl(3, 0.4)} x={160} y={215} w={180} h={34} fill={AMBER} stroke={AMBER_DARK}>
        cos(A+B): B→-B
      </Box>
      <Box on={beat >= 3} delay={dl(3, 0.45)} x={450} y={215} w={180} h={34} fill={AMBER} stroke={AMBER_DARK}>
        sin(A±B)
      </Box>
      <Box on={beat >= 3} delay={dl(3, 0.5)} x={740} y={215} w={180} h={34} fill={AMBER} stroke={AMBER_DARK}>
        tan(A±B): ratio
      </Box>

      <Draw on={beat >= 3} d="M 250 249 L 250 263" stroke="#94A3B8" sw={1.4} delay={dl(3, 0.7)} />
      <Draw on={beat >= 3} d="M 540 249 L 540 263" stroke="#94A3B8" sw={1.4} delay={dl(3, 0.75)} />
      <Box on={beat >= 3} delay={dl(3, 0.9)} x={160} y={263} w={180} h={34} fill={GREEN} stroke="#157A45" textFill="#FFFEFB">
        Double (B=A)
      </Box>
      <Box on={beat >= 3} delay={dl(3, 0.95)} x={450} y={263} w={180} h={34} fill={GREEN} stroke="#157A45" textFill="#FFFEFB">
        Product→Sum
      </Box>

      <Draw on={beat >= 3} d="M 250 297 L 210 311" stroke="#94A3B8" sw={1.4} delay={dl(3, 1.1)} />
      <Draw on={beat >= 3} d="M 250 297 L 360 311" stroke="#94A3B8" sw={1.4} delay={dl(3, 1.15)} />
      <Draw on={beat >= 3} d="M 540 297 L 540 311" stroke="#94A3B8" sw={1.4} delay={dl(3, 1.2)} />
      <Box on={beat >= 3} delay={dl(3, 1.3)} x={140} y={311} w={140} h={34} fill="#FCF4E0" stroke={INK}>
        Half-angle
      </Box>
      <Box on={beat >= 3} delay={dl(3, 1.35)} x={300} y={311} w={120} h={34} fill="#FCF4E0" stroke={INK}>
        Triple (2A+A)
      </Box>
      <Box on={beat >= 3} delay={dl(3, 1.4)} x={450} y={311} w={180} h={34} fill="#FCF4E0" stroke={INK}>
        Sum→Product
      </Box>

      <Draw on={beat >= 3} d="M 540 345 L 395 360" stroke="#94A3B8" sw={1.4} delay={dl(3, 1.6)} />
      <Box on={beat >= 3} delay={dl(3, 1.75)} x={150} y={360} w={490} h={36} fill="#FEE2E2" stroke={RED}>
        a cosx + b sinx = R cos(x-α)
      </Box>

      {/* beat 4 — B → -B, and the cofunction shift */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={424} size={13} fill={INK} anchor="middle">
          {t("Replace B with -B to get cos(A+B).", "B ki jagah -B se cos(A+B) milta hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={447} size={13} fill={INK} anchor="middle" weight={700}>
          {t("sinθ=cos(π/2-θ) gives sin(A±B).", "sinθ=cos(π/2-θ) se sin(A±B) milta hai.")}
        </T>
      </Fade>

      {/* beat 5 — set B=A, halve, add/subtract */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={468} size={13} fill={INK} anchor="middle">
          {t("Set B=A for double-angle; halve for half-angle;", "B=A karo double-angle ke liye; halve karo half-angle ke liye;")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={491} size={13} fill={INK} anchor="middle" weight={700}>
          {t("add/subtract pairs for product-to-sum.", "pairs add/subtract karo product-to-sum ke liye.")}
        </T>
      </Fade>

      {/* beat 6 — red-margin closer */}
      <Draw on={beat >= 6} d="M 60 505 L 60 550" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={523} size={14} fill={RED} anchor="start" weight={700}>
          {t("Learn the derivation, not the list -", "List nahi, derivation seekho -")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={545} size={13} fill={RED} anchor="start">
          {t("rebuild any formula in ~20 seconds.", "kisi bhi formula ko ~20 seconds mein rebuild karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
