/**
 * C11 Ch09 · Section 58 — "Alkyne pitfalls and pro-tips" (closes Alkynes)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.42, 18.18, 30.21, 38.91, 45.57, 59.99]):
 *  0 heading · 1 TRAP 1: calling all alkynes acidic · 2 RED: point to actual
 *  H, "no terminal H, no acetylide" · 3 TRAP 2: writing alcohol as hydration
 *  product · 4 pro-tip: ethyne→aldehyde, others→ketone, never stop at enol
 *  · 5 TRAP 3: confusing gem/vicinal · 6 RED TRAP 4: NaOH too weak
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("alkyne pitfalls and pro-tips", "alkyne pitfalls aur pro-tips")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("four traps that cost marks on alkynes", "chaar traps jo alkynes mein marks kaatte")}
        </T>
      </Fade>

      {/* beat 1 — trap 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={135} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={155} y={135} size={15} fill={INK} anchor="start">
          {t("calling all alkynes acidic", "sabhi alkynes ko acidic keh dena")}
        </T>
      </Fade>

      {/* beat 2 — red gate */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 60 152 L 60 208" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={76} y={172} size={14} fill={RED} script anchor="start">
          {t("point to the actual H: must sit on a triply-bonded carbon", "asli H dikhao: triply-bonded carbon pe hona chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={76} y={200} size={14} fill={RED} script anchor="start">
          {t("“no terminal H, no acetylide”", "“no terminal H, no acetylide”")}
        </T>
      </Fade>

      {/* beat 3 — trap 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={240} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={155} y={240} size={15} fill={INK} anchor="start">
          {t("writing an alcohol as the hydration product", "hydration product ko alcohol likh dena")}
        </T>
      </Fade>

      {/* beat 4 — pro-tip */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={275} size={14} fill={AMBER_DARK} script>
          {t("“ethyne → aldehyde, all others → ketone”; never stop at the enol", "“ethyne → aldehyde, baaki sab → ketone”; enol pe kabhi mat ruko")}
        </T>
      </Fade>

      {/* beat 5 — trap 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={315} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={155} y={315} size={15} fill={INK} anchor="start">
          {t("confusing gem- and vicinal dihalides", "gem- aur vicinal dihalides mein confuse hona")}
        </T>
      </Fade>

      {/* beat 6 — trap 4, red */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 335 L 60 403" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={355} size={16} fill={RED} weight={800} anchor="start">TRAP 4</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={378} size={14} fill={RED} script anchor="start">
          {t("NaOH too weak for acetylides — use NaNH2 or Na", "NaOH acetylides ke liye weak — NaNH2 ya Na use karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={76} y={405} size={14} fill={RED} script anchor="start">
          {t("(conjugate acid must be weaker)", "(conjugate acid weaker hona chahiye)")}
        </T>
      </Fade>
    </Scene>
  );
}
