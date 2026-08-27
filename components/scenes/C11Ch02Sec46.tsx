/**
 * C11 Ch02 · Section 46 — "Ordering energies: the (n+l) rule and shielding"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 7.85, 18.6, 29.1, 41.22, 53.5, 64.68, 78.51]):
 *  0 anchor: the rule that decides filling order — and why it works
 *  1 explain: compute (n+l) per subshell; lower fills first, ties → lower n
 *  2 formula (high, GREEN): 4s (n+l=4) < 3d (n+l=5)
 *  3 represent + guardrail (high, RED): 4s sits below 3d — the famous ordering
 *  4 explain: higher l = more spread-out, poorly shielded, energy rises
 *  5 represent: within a shell, s penetrates closest, then p, d, f
 *  6 guardrail: effective nuclear charge DECREASES as l increases
 *  7 land: one-electron species — energy depends on n alone
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | outward chip        | Chip  | x180..900 y98..128
 *  b2 | formula chip (GRN)  | Chip  | x350..730 y146..178
 *  b3 | 3d/4s level lines   | Draw/T| x440..680 y210 / y260
 *  b3 | guardrail caption   | T mid | x540 y290
 *  b4 | explain caption     | T mid | x540 y316
 *  b5 | penetration row     | circ  | x200..800 y380
 *  b6 | guardrail caption   | T mid | x540 y440
 *  b7 | closing caption     | T mid | x540 y468
 */

import React from "react";
import { Circle, Line, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

const PEN = [
  { x: 320, label: "s" },
  { x: 460, label: "p" },
  { x: 620, label: "d" },
  { x: 800, label: "f" },
];

export default function C11Ch02Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("ordering energies: the (n+l) rule and shielding", "energies ka order: (n+l) rule aur shielding")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "the rule that decides filling order — and why it works physically",
            "wo rule jo filling order tay karta — aur uske peeche ki physical wajah"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: compute (n+l) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={180} y={98} w={720} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "compute (n+l) for each subshell — lower fills first, ties break by lower n",
            "har subshell ke liye n+l compute karo — kam value pehle, tie mein kam n jeetay"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — formula (high, GREEN) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={350} y={146} w={380} h={32} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"4s (n+l=4)  <  3d (n+l=5)"}
        </Chip>
      </Fade>

      {/* beat 3 — represent: 3d sits above 4s */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 440 210 H 680" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 440 260 H 680" stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={690} y={214} size={12} fill={INK} anchor="start">
          3d (n+l=5)
        </T>
        <T x={690} y={264} size={12} fill={GREEN} anchor="start">
          4s (n+l=4)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={290} size={12} fill={RED} script>
          {t(
            "4s fills BEFORE 3d — the famous ordering",
            "4s pehle bharta hai, 3d se pehle — yahi famous ordering hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — explain: why physically */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={316} size={12} fill={INK} script>
          {t(
            "higher l = more spread-out, poorly shielded, feels less nuclear pull — energy rises",
            "zyaada l = spread-out shape, poorly shielded, kam nuclear pull — energy badhti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — represent: penetration order within a shell */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={200} cy={380} r={6} fill={RED} />
        <Line x1={206} y1={380} x2={800} y2={380} stroke={MUTED} strokeWidth={1} />
      </Fade>
      {PEN.map((p, i) => (
        <Fade key={p.x} on={beat >= 5} delay={dl(5, 0.5 + i * 0.25)}>
          <Circle cx={p.x} cy={380} r={7} fill={INK} />
          <SvgText x={p.x} y={404} fontSize={13} fill={INK} textAnchor="middle" fontWeight={700}>
            {p.label}
          </SvgText>
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={500} y={356} size={11} fill={MUTED} script>
          {t("penetration & tightness decrease →", "penetration aur tightness kam hoti hai →")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: effective nuclear charge decreases */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={440} size={12} fill={RED} script>
          {t(
            "effective nuclear charge felt DECREASES as l increases — splits a shell's levels",
            "effective nuclear charge l badhne ke saath GHATTA hai — shell ke levels split karta"
          )}
        </T>
      </Fade>

      {/* beat 7 — land: the one-electron caveat */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={468} size={12} fill={GREEN} script>
          {t(
            "for a one-electron species, energy depends on n alone — know your regime",
            "one-electron species ke liye energy sirf n par depend karti — apna regime jaano"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
