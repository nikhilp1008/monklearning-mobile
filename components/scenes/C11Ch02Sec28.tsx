/**
 * C11 Ch02 · Section 28 — "The crisis and the staircase clue"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept` — opens subtopic 3
 * (Bohr's Model & Wave-Particle Duality).
 *
 * Beats (en [0, 13.65, 30.12, 36.35, 50.77, 57.6, 72.28, 79.02]):
 *  0 anchor: two pieces from before — Rutherford's nucleus + Planck/Einstein's quanta
 *  1 explain: Rutherford's revolving electron accelerates — classical physics says
 *     it must radiate, spiral in, crash in ~10⁻⁸s
 *  2 guardrail: atoms plainly do not collapse — something is missing
 *  3 explain: the clue — hydrogen's line spectrum, sharp lines not a rainbow
 *  4 represent: ramp (continuous) vs staircase (quantised) diagram
 *  5 explain: ramp = any height; staircase = only fixed steps
 *  6 guardrail (high, RED): sharp lines ⇒ a STAIRCASE of allowed energies
 *  7 land: a drop between steps releases the exact gap as one photon
 *
 * Layout plan (single column + diagram, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | explain caption     | T mid | x540 y100
 *  b2 | guardrail caption   | T mid | x540 y126
 *  b3 | explain caption     | T mid | x540 y152
 *  b4 | ramp + staircase    | Draw  | x150..320 / x520..780 y240..350
 *  b4 | diagram labels      | T mid | y372
 *  b5 | explain caption     | T mid | x540 y400
 *  b6 | guardrail (RED)     | Chip  | x180..900 y422..458
 *  b7 | land caption        | T mid | x540 y486
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const STAIR_D = "M 520 350 H 585 V 315 H 650 V 280 H 715 V 245 H 780";

export default function C11Ch02Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("the crisis and the staircase clue", "crisis aur staircase ka clue")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "two pieces from before — Rutherford's nucleus + Planck/Einstein's quanta",
            "pehle ke do pieces — Rutherford ka nucleus + Planck/Einstein ka quanta"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: the crisis */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={12} fill={INK} script>
          {t(
            "Rutherford's revolving electron accelerates; classical physics says it must radiate, spiral in, crash in ~10⁻⁸s",
            "Rutherford ka revolving electron accelerate karta; classical physics kehti spiral karke ~10⁻⁸s mein crash"
          )}
        </T>
      </Fade>

      {/* beat 2 — guardrail: something is missing */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={126} size={12} fill={RED} script>
          {t(
            "atoms plainly do not collapse — something is missing",
            "atoms clearly collapse nahi hote — kuch missing hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — explain: the clue */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={152} size={12} fill={INK} script>
          {t(
            "the clue: hydrogen's line spectrum — sharp separate lines, not a continuous rainbow",
            "clue: hydrogen ka line spectrum — sharp alag lines, continuous rainbow nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — represent: ramp vs staircase */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 150 350 L 320 240" stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Circle cx={218} cy={306} r={6} fill={RED} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={STAIR_D} stroke={GREEN} sw={2.2} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Circle cx={552} cy={350} r={6} fill={RED} />
        <Circle cx={617} cy={315} r={6} fill={RED} />
        <Circle cx={682} cy={280} r={6} fill={RED} />
        <Circle cx={747} cy={245} r={6} fill={RED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={235} y={372} size={12} fill={INK}>
          {t("ramp: any height (continuous)", "ramp: koi bhi height (continuous)")}
        </T>
        <T x={650} y={372} size={12} fill={INK}>
          {t("staircase: fixed steps (quantised)", "staircase: fixed steps (quantised)")}
        </T>
      </Fade>

      {/* beat 5 — explain: the two behaviors */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={400} size={12} fill={INK} script>
          {t(
            "a ramp lets you stop at any height; a staircase only at fixed steps",
            "ramp par kisi bhi height par ruk sakte ho; staircase par sirf fixed steps par"
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail (high, RED) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={180} y={422} w={720} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "sharp lines ⇒ the electron lives on a STAIRCASE of allowed energies, not a ramp",
            "sharp lines ⇒ electron ek STAIRCASE of allowed energies par rehta, ramp par nahi"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — land */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={486} size={12} fill={GREEN} script>
          {t(
            "a drop between steps releases the exact gap as one photon — only certain colours",
            "steps ke beech drop se exact gap ek photon banta — sirf kuch colours"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
