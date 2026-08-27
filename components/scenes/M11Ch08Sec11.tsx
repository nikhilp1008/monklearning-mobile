/**
 * M11 Ch08 · Section 11 — "The AP core formula set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Beats (en [0, 8.19, 19.8, 29.1, 41.3, 51.63, 63.4, 79.96]):
 *  0 title (always-on) — "Locked notation, and the four core formulas"
 *  1 notation legend: a, d, l, S_n
 *  2 card 1 (top-left): a_n = a + (n-1)d
 *  3 card 2 (top-right): a'_n = l - (n-1)d, nth from the end
 *  4 card 3 (bottom-left): S_n = (n/2)[2a+(n-1)d]
 *  5 card 4 (bottom-right): S_n = (n/2)(a+l)
 *  6 red-margin: off-by-one alert
 *  7 closer: d can be +/0/-
 *
 * Layout plan:
 *  b1 | legend bl100 cx140/380/610/830
 *  b2 | label bl140 cx300 · chip x110 y150 w380 h48
 *  b3 | label bl140 cx780 · chip x590 y150 w380 h48
 *  b4 | label bl228 cx300 · chip x110 y238 w380 h48
 *  b5 | label bl228 cx780 · chip x590 y238 w380 h48
 *  b6 | red bar x76 y315..385 · text bl335/375 x96
 *  b7 | text bl430 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const legend = [
    { cx: 140, text: t("a = first term", "a = first term") },
    { cx: 380, text: t("d = common difference", "d = common difference") },
    { cx: 610, text: t("l = last term", "l = last term") },
    { cx: 830, text: "S_n = sum" },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} anchor="middle" script>
          {t("Locked notation, and the four core formulas", "Fixed notation, aur chaar core formulas")}
        </T>
      </Fade>

      {/* beat 1 — notation legend */}
      {legend.map((l, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.2 + i * 0.25)}>
          <T x={l.cx} y={100} size={13} fill={INK} anchor="middle">{l.text}</T>
        </Fade>
      ))}

      {/* beat 2 — card 1: nth term */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={300} y={140} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("nth term", "nth term")}
        </T>
        <Chip x={110} y={150} w={380} h={48} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"a_n = a + (n-1)d"}
        </Chip>
      </Fade>

      {/* beat 3 — card 2: nth from the end */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={780} y={140} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("nth term from the end", "end se nth term")}
        </T>
        <Chip x={590} y={150} w={380} h={48} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"a'_n = l - (n-1)d"}
        </Chip>
      </Fade>

      {/* beat 4 — card 3: sum via a, d, n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={300} y={228} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("sum, using a, d, n", "sum, a, d, n se")}
        </T>
        <Chip x={110} y={238} w={380} h={48} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          {"S_n = (n/2)[2a + (n-1)d]"}
        </Chip>
      </Fade>

      {/* beat 5 — card 4: sum via a, l, n */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={780} y={228} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("sum, using a, l, n", "sum, a, l, n se")}
        </T>
        <Chip x={590} y={238} w={380} h={48} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"S_n = (n/2)(a + l)"}
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: off-by-one alert */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 315 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={335} size={15} fill={RED} anchor="start" script>
          {t("off-by-one alert: it's (n-1)d,", "off-by-one alert: (n-1)d hai,")}
        </T>
        <T x={96} y={375} size={15} fill={RED} anchor="start" script>
          {t("never nd — always say 'n minus one'", "kabhi nd nahi — hamesha 'n minus one' bolo")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={430} size={15} fill={INK} anchor="middle" script>
          {t(
            "d can be positive, zero, or negative — never assume d > 0",
            "d positive, zero, ya negative ho sakta hai — d > 0 mat maano"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
