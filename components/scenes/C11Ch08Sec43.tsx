/**
 * C11 Ch08 · Section 43 — "Qualitative analysis — which elements?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 11.52, 28.33, 46.93, 51.8, 58.88, 69.55, 82.69]):
 *  0 title (always-on, seq1) · 1 C&H test (CuO, lime water, CuSO4) · 2 Lassaigne's
 *  test intro · 3 diagram: table header · 4 N → Prussian blue · 5 S → violet/black
 *  · 6 halogen → AgX colors · 7 red note (N+S → blood-red)
 *
 * 3-column table: ELEMENT x150, TEST x450, RESULT x800.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Row = ({ y, on, delay, el, test, result, color }: { y: number; on: boolean; delay: number; el: string; test: string; result: string; color: string }) => (
    <Fade on={on} delay={delay}>
      <T x={150} y={y} size={13} fill={INK} weight={700}>
        {el}
      </T>
      <T x={450} y={y} size={11.5} fill={INK}>
        {test}
      </T>
      <T x={800} y={y} size={11.5} fill={color} weight={700}>
        {result}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Qualitative analysis — which elements?", "Qualitative analysis — kaunse elements?")}
        </T>
      </Fade>

      {/* beat 1 — carbon & hydrogen */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={12.5} fill={INK}>
          {t("C&H: heat + CuO → C→CO2 (lime water milky); H→H2O (CuSO4 blue)", "C&H: heat + CuO → C→CO2 (lime water milky); H→H2O (CuSO4 blue)")}
        </T>
      </Fade>

      {/* beat 2 — Lassaigne's test */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={130} size={12.5} fill={INK}>
          {t("Lassaigne's: fuse with Na → covalent N,S,X become ionic (sodium fusion extract)", "Lassaigne's: Na se fuse karo → covalent N,S,X ionic ban jaate (sodium fusion extract)")}
        </T>
      </Fade>

      {/* beat 3 — table header */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={150} y={160} size={11} fill={MUTED} weight={700}>
          ELEMENT
        </T>
        <T x={450} y={160} size={11} fill={MUTED} weight={700}>
          TEST
        </T>
        <T x={800} y={160} size={11} fill={MUTED} weight={700}>
          RESULT
        </T>
      </Fade>

      {/* beat 4 — nitrogen */}
      <Row y={190} on={beat >= 4} delay={dl(4, 0.2)} el="N" test="NaCN + FeSO₄" result={t("Prussian BLUE", "Prussian BLUE")} color={INK} />

      {/* beat 5 — sulphur */}
      <Row y={220} on={beat >= 5} delay={dl(5, 0.2)} el="S" test={t("Na2S + nitroprusside (or Pb(OAc)2)", "Na2S + nitroprusside (ya Pb(OAc)2)")} result={t("VIOLET (or black PbS)", "VIOLET (ya black PbS)")} color={INK} />

      {/* beat 6 — halogen */}
      <Row y={250} on={beat >= 6} delay={dl(6, 0.2)} el="X" test="NaX + HNO₃ / AgNO₃" result="AgCl white / AgBr pale-yellow / AgI yellow" color={INK} />

      {/* beat 7 — N and S together */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 280 L 60 310" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={298} size={15} fill={RED} script anchor="start">
          {t(
            "N AND S together → NaSCN; +Fe3+ → blood-RED (blue = N; blood-red = N&S)",
            "N AUR S saath → NaSCN; +Fe3+ → blood-RED (blue = N; blood-red = N&S)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
