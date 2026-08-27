/**
 * C11 Chemistry Ch04 · Section 26 — "Worked examples: boiling points and the NO to NO+ change"
 * Canvas 1080×620 · safe x36–1044, y30–596. Part A erases before Part B.
 *
 * Beats (en [0, 11.18, 20.05, 34.39, 59.22, 70.83, 94.21, 111.45]):
 *  0 intro: NEET bp trap + JEE Main bond order question
 *  1 Part A: order bp of H2O, H2S, H2Se
 *  2 trap: mass trend (wrong without H-bonding)
 *  3 key flag: O small+high EN -> strong H-bonding only in H2O
 *  4 answer1 chip; Part A erases after
 *  5 Part B: NO 15e- -> BO=2.5, paramagnetic
 *  6 NO+ loses pi* e- -> BO=3, diamagnetic
 *  7 answer2: stronger/shorter, chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const pActive = beat >= 1 && beat < 5;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked examples: bp trap + NO → NO⁺", "Worked examples: bp trap + NO → NO⁺")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("NEET boiling-point trap + JEE Main bond order", "NEET boiling-point trap + JEE Main bond order")}
        </T>
      </Fade>

      {/* beat 1 — Part A setup */}
      <Fade on={pActive} delay={dl(1, 0.2)}>
        <T x={540} y={120} size={12.5} fill={INK}>
          {t("order the boiling points: H₂O, H₂S, H₂Se", "boiling points ko order karo: H₂O, H₂S, H₂Se")}
        </T>
      </Fade>

      {/* beat 2 — trap */}
      <Fade on={pActive && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={148} size={11.5} weight={700} fill={RED}>
          {t(
            "trap: mass trend says H₂Se > H₂S > H₂O (only true WITHOUT H-bonding)",
            "trap: mass trend kehta H₂Se > H₂S > H₂O (sirf tab jab H-bonding NA ho)"
          )}
        </T>
      </Fade>

      {/* beat 3 — key flag */}
      <Fade on={pActive && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={176} size={11.5} fill={INK}>
          {t(
            "O: small + high EN → STRONG H-bonding in H₂O only (S, Se don't)",
            "O: small + high EN → STRONG H-bonding sirf H₂O mein (S, Se nahi)"
          )}
        </T>
      </Fade>

      {/* beat 4 — answer 1 */}
      <Fade on={pActive && beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={220} y={200} w={640} h={30} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "answer: H₂O ≫ H₂Se > H₂S (mass trend applies to the other two)",
            "answer: H₂O ≫ H₂Se > H₂S (baaki dono par mass trend lagu)"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — Part B: NO */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={150} size={11.5} fill={INK}>
          {t(
            "NO: 15 e⁻ → 10 bonding, 5 antibonding → BO=½(10−5)=2.5, PARAMAGNETIC (1 unpaired π*)",
            "NO: 15 e⁻ → 10 bonding, 5 antibonding → BO=½(10−5)=2.5, PARAMAGNETIC (1 unpaired π*)"
          )}
        </T>
      </Fade>

      {/* beat 6 — NO+ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={185} size={11.5} fill={INK}>
          {t(
            "NO⁺: lose e⁻ from π* → 10 bonding, 4 antibonding → BO=½(10−4)=3, DIAMAGNETIC",
            "NO⁺: π* se e⁻ khota → 10 bonding, 4 antibonding → BO=½(10−4)=3, DIAMAGNETIC"
          )}
        </T>
      </Fade>

      {/* beat 7 — answer 2 */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={220} size={12.5} weight={700} fill={INK}>
          {t("BO: 2.5 → 3 → NO⁺ bond is STRONGER & SHORTER", "BO: 2.5 → 3 → NO⁺ ka bond STRONGER & SHORTER")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={200} y={240} w={680} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "ionisation strengthened it — the electron left an ANTIBONDING orbital",
            "ionisation ne strong kiya — electron ek ANTIBONDING orbital se gaya"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
