/**
 * C11 Ch01 · Section 9 — "Prefixes and the factor-label method"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,17.49,38.74,57.43,74.76,93.44,111.45,136.28]):
 *  0 anchor: the metre is too big / too small
 *  1 represent: the prefix ladder as a number line, ordered by exponent
 *  2 guardrail: rank by EXPONENT, never the name
 *  3 explain via analogy: units=currencies, prefixes=denominations
 *  4 represent: factor-label worked mini-equation (5 g → kg)
 *  5 explain: why it can't fail (factor = 1)
 *  6 the cubic trap: cube the linear factor, don't forget it
 *  7 land: the practical cancel-check + flip-if-needed rule
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y105
 *  b1 | number line                  | Draw  | x80..1000 y200
 *  b1 | prefix name (12 ink bold)    | T mid | cx.. y182
 *  b1 | exponent (11 amber-dark)     | T mid | cx.. y222
 *  b2 | guardrail (script15 red)     | T mid | x540  y252
 *  b3 | analogy l1 (script14 ink)    | T mid | x540  y286
 *  b3 | analogy l2 (script14 green) | T mid | x540  y310
 *  b4 | equation (16 ink bold)       | T mid | x540  y345
 *  b5 | why-works (script14 green)   | T mid | x540  y372
 *  b6 | cubic trap eq (15 ink bold)  | T mid | x540  y405
 *  b6 | cubic trap note (script13)   | T mid | x540  y428
 *  b7 | check l1 (script14 amber-drk)| T mid | x540  y460
 *  b7 | check l2 (script13 muted)    | T mid | x540  y483
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PREFIXES: [number, string, string][] = [
  [100, "pico", "10⁻¹²"],
  [276, "nano", "10⁻⁹"],
  [452, "micro", "10⁻⁶"],
  [628, "milli", "10⁻³"],
  [687, "centi", "10⁻²"],
  [980, "kilo", "10³"],
];
const BASE_X = 804;

export default function C11Ch01Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={23} fill={RED} script>
          {t("prefixes and the factor-label method", "prefixes aur factor-label method")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={105} size={15} fill={INK} script>
          {t(
            "the metre: too big for a city, too small for an atom",
            "metre: shehar ke liye bahut bada, atom ke liye bahut chhota"
          )}
        </T>
      </Fade>

      {/* beat 1 — the prefix ladder as a number line */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 80 200 L 1000 200" stroke={MUTED} sw={2} dur={0.8} />
      {PREFIXES.map(([x, name, exp], i) => (
        <React.Fragment key={name}>
          <Draw on={beat >= 1} delay={dl(1, 0.5 + i * 0.3)} d={`M ${x} 194 L ${x} 206`} stroke={INK} sw={2} dur={0.3} />
          <Fade on={beat >= 1} delay={dl(1, 0.7 + i * 0.3)}>
            <T x={x} y={182} size={12} fill={INK} weight={700} script={false}>
              {name}
            </T>
          </Fade>
          <Fade on={beat >= 1} delay={dl(1, 0.9 + i * 0.3)}>
            <T x={x} y={222} size={11} fill={AMBER_DARK} script>
              {exp}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={`M ${BASE_X} 194 L ${BASE_X} 206`} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={BASE_X} y={222} size={11} fill={MUTED} script>
          {t("(base)", "(base)")}
        </T>
      </Fade>

      {/* beat 2 — guardrail: rank by exponent */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={252} size={15} fill={RED} script>
          {t(
            "compare EXPONENTS, never the name — nano is smaller than micro",
            "EXPONENTS compare karo, naam se nahi — nano, micro se chhota hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — currency analogy */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={286} size={14} fill={INK} script>
          {t("2000 m = 2000 rupees", "2000 m = 2000 rupees")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={310} size={14} fill={GREEN} script>
          {t(
            "2 km = 2 thousand-rupee notes — same value, tidier",
            "2 km = 2 hazaar-rupee ke note — value wahi, tarika saaf"
          )}
        </T>
      </Fade>

      {/* beat 4 — factor-label worked mini-equation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={345} size={16} fill={INK} weight={700} script={false}>
          5 g × (1 kg / 1000 g) = 0.005 kg
        </T>
      </Fade>

      {/* beat 5 — why it can't fail */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={372} size={14} fill={GREEN} script>
          {t(
            "conversion factor = 1 → units change, VALUE doesn't",
            "conversion factor = 1 → units badalti, VALUE nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the cubic trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={405} size={15} fill={INK} weight={700} script={false}>
          1 m = 100 cm ⇒ 1 m³ = 100³ cm³ = 10⁶ cm³
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={428} size={13} fill={RED} script>
          {t(
            "NOT 100! — forgetting to cube is the #1 unit error here",
            "100 NAHI! — cube karna bhoolna sabse aam unit galti hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the practical cancel-check */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={460} size={14} fill={AMBER_DARK} script>
          {t(
            "unwanted unit sits OPPOSITE where it appears → cancels",
            "anchahi unit saamne baithe → cancel ho jaati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={483} size={13} fill={MUTED} script>
          {t(
            "doesn't cancel? the fraction is upside down — flip it",
            "cancel nahi hota? fraction ulta hai — palato"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
