/**
 * C11 Chemistry Ch05 · Section 18 — "Spontaneity and why exothermic is not
 * the whole story" (opens subtopic 3)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,11.86,26.97,37.29,46.34,55.81,65.62]):
 *  0 heading + underline (anchor)
 *  1 three everyday spontaneous examples
 *  2 hypothesis box: "spontaneous = exothermic?"
 *  3 cross it out + red counter-example: ice melting absorbs heat
 *  4 red counter-example: NH4Cl dissolving, beaker turns cold
 *  5 green conclusion: nature chases disorder
 *  6 footnote: first law counts energy, can't predict direction
 *
 * Layout plan:
 *  b0 | heading (18, w800) + underline| T mid | y81..101 (bl95); y105
 *  b1 | 3 example chips (14)          | Chip  | y118..148 x80..340/410..670/740..1000
 *  b2 | hypothesis box (18, amber)    | Chip  | x380..700 y168..208
 *  b3 | cross-out                     | Draw  | over hypothesis box
 *  b3 | counter-ex1 chip (14, red)    | Chip  | x230..850 y222..258
 *  b4 | counter-ex2 chip (14, red)    | Chip  | x200..880 y268..304
 *  b5 | conclusion chip (18, green)   | Chip  | x190..890 y320..365
 *  b6 | footnote (14, muted)          | T mid | y389..404 (bl400)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("spontaneity: not just exothermic", "spontaneity: not just exothermic")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={18} weight={800} fill={INK}>
          {t("Which way will a reaction go on its own?", "Reaction apne aap kis taraf jayega?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 360 105 C 430 102, 650 102, 720 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — everyday examples */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={80} y={118} w={260} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false}>
          {t("iron rusting", "iron rusting")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.35)}>
        <Chip x={410} y={118} w={260} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false}>
          {t("ice melting", "ice melting")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={740} y={118} w={260} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false}>
          {t("ink spreading in water", "paani mein ink phailna")}
        </Chip>
      </Fade>

      {/* beat 2 — hypothesis */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Chip x={380} y={168} w={320} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          {t("spontaneous = exothermic?", "spontaneous = exothermic?")}
        </Chip>
      </Fade>

      {/* beat 3 — cross out + counter-example 1 */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d={crossD(380, 168, 320, 40)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={230} y={222} w={620} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("ice melting ABSORBS heat, yet spontaneous above 0°C", "ice melting heat ABSORB karta hai, phir bhi spontaneous 0°C ke upar")}
        </Chip>
      </Fade>

      {/* beat 4 — counter-example 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={200} y={268} w={680} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "NH4Cl dissolving: endothermic yet happens eagerly — beaker turns cold",
            "NH4Cl dissolve hona endothermic hai phir bhi eagerly hota hai — beaker thanda ho jata hai"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — conclusion */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <Chip x={190} y={320} w={700} h={45} fill={GREEN} textFill="#fff" size={18} script={false}>
          {t("energy lowering ≠ whole story — nature chases DISORDER", "energy lowering poori kahani nahi — nature DISORDER ke peeche bhaagta hai")}
        </Chip>
      </Fade>

      {/* beat 6 — footnote */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={540} y={400} size={14} fill={MUTED}>
          {t("first law counts energy — it can't predict direction", "first law energy count karta hai — direction predict nahi kar sakta")}
        </T>
      </Fade>
    </Scene>
  );
}
