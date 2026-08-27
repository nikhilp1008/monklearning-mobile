/**
 * M11 Ch08 · Section 26 — "The GP core formula set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Beats (en [0, 10.67, 19.71, 31.49, 46.76, 55.38, 74.75, 86.36]):
 *  0 title (always-on) — "First term a≠0, ratio r≠0: the core set"
 *  1 card 1 (top-left): a_n = a·r^(n-1)
 *  2 card 2 (top-right): a'_n = l/r^(n-1), nth from the end
 *  3 card 3 (bottom-left): S_n, both forms (r≠1)
 *  4 card 4 (bottom-right): S_infinity, |r|<1
 *  5 red-margin: never use S_infinity without checking |r|<1
 *  6 text: a GP cannot contain 0
 *  7 text: r<0 alternates sign
 *
 * Layout plan:
 *  b1 | label bl132 cx300 · chip x110 y142 w380 h44
 *  b2 | label bl132 cx780 · chip x590 y142 w380 h44
 *  b3 | label bl218 cx300 · chip x90 y228 w420 h44
 *  b4 | label bl218 cx780 · chip x630 y228 w340 h44
 *  b5 | red bar x76 y298..368 · text bl318/358 x96
 *  b6 | text bl408 cx540
 *  b7 | text bl436 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("First term a≠0, ratio r≠0: the core set", "Pehla term a≠0, ratio r≠0: core set")}
        </T>
      </Fade>

      {/* beat 1 — card 1: nth term */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={300} y={132} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("nth term", "nth term")}
        </T>
        <Chip x={110} y={142} w={380} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"a_n = a·r^(n-1)"}
        </Chip>
      </Fade>

      {/* beat 2 — card 2: nth from the end */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={780} y={132} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("nth term from the end", "end se nth term")}
        </T>
        <Chip x={590} y={142} w={380} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"a'_n = l/r^(n-1)"}
        </Chip>
      </Fade>

      {/* beat 3 — card 3: sum, both forms */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={300} y={218} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("sum, r≠1", "sum, r≠1")}
        </T>
        <Chip x={90} y={228} w={420} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {"S_n = a(r^n-1)/(r-1) = a(1-r^n)/(1-r)"}
        </Chip>
      </Fade>

      {/* beat 4 — card 4: sum to infinity */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={780} y={218} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("sum to infinity, |r|<1", "sum to infinity, |r|<1")}
        </T>
        <Chip x={630} y={228} w={340} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"S_∞ = a/(1-r)"}
        </Chip>
      </Fade>

      {/* beat 5 — red-margin: never skip the |r|<1 check */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 298 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={318} size={15} fill={RED} anchor="start" script>
          {t("never write S_∞ = a/(1-r) without", "S_∞ = a/(1-r) kabhi mat likho bina")}
        </T>
        <T x={96} y={358} size={15} fill={RED} anchor="start" script>
          {t("checking |r| < 1 first", "pehle |r| < 1 check kiye")}
        </T>
      </Fade>

      {/* beat 6 — no term is ever zero */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={408} size={14} fill={INK} anchor="middle" script>
          {t("no term is ever zero, and r≠0: a GP cannot contain 0", "koi term kabhi zero nahi, r≠0: GP mein 0 nahi ho sakta")}
        </T>
      </Fade>

      {/* beat 7 — r<0 alternates */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={436} size={14} fill={INK} anchor="middle" script>
          {t(
            "r < 0 ⇒ terms alternate in sign — neither increasing nor decreasing",
            "r < 0 ⇒ terms sign alternate karte hain — na increasing na decreasing"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
