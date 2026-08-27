/**
 * C11 Chemistry Ch05 · Section 10 — "Enthalpy of reaction: exothermic
 * versus endothermic" (opens subtopic 2)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Colour: GREEN=exothermic, RED=endothermic
 * (per chemistry palette convention).
 *
 * Beats (board_reveal_at, en [0,1,2,3,4,5,6,7]):
 *  0 heading + underline (anchor)
 *  1 definition: ΔrH = heat at constant P, bonds break/form
 *  2 LEFT diagram: reactants(high)→products(low), EXOTHERMIC, ΔrH<0 (green)
 *  3 everyday caption: matchstick, acid+base
 *  4 RIGHT diagram: reactants(low)→products(high), ENDOTHERMIC, ΔrH>0 (red)
 *  5 everyday caption: instant cold pack
 *  6 red note: enthalpy is a state function (links subtopic 1)
 *  7 green verdict: sign of ΔrH tells the story
 *
 * Layout plan:
 *  b0 | heading (19, ink, w800)       | T mid  | y85..106 (bl100)
 *  b0 | underline                     | Draw   | y110 x350..730
 *  b1 | definition (14, ink)          | T mid  | y125..140 (bl135)
 *  b2 | reactants line L              | Draw   | x130..280 y170
 *  b2 | products line L (green)       | Draw   | x330..480 y300
 *  b2 | drop curve L (green)          | Draw   | (280,170)→(330,300)
 *  b2 | ΔH arrow L (green)            | Draw   | x305 y170..300
 *  b2 | EXOTHERMIC label (15,green)   | T mid  | x305 y335..350 (bl345)
 *  b3 | caption L (13, muted, script) | T mid  | x305 y373..390 (bl390)
 *  b4 | reactants line R              | Draw   | x590..740 y300
 *  b4 | products line R (red)         | Draw   | x790..940 y170
 *  b4 | rise curve R (red)            | Draw   | (740,300)→(790,170)
 *  b4 | ΔH arrow R (red)              | Draw   | x765 y300..170
 *  b4 | ENDOTHERMIC label (15,red)    | T mid  | x765 y335..350 (bl345)
 *  b5 | caption R (13, muted, script) | T mid  | x765 y373..390 (bl390)
 *  b6 | red note chip (14)            | Chip   | x190..890 y410..450
 *  b7 | green verdict chip (15)       | Chip   | x240..840 y465..501
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
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("enthalpy of reaction: exo vs endo", "enthalpy of reaction: exo vs endo")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={19} weight={800} fill={INK}>
          {t("Thermochemistry = accounting the heat of bonds", "Thermochemistry = bonds ke heat ka hisaab")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 350 110 C 420 107, 660 107, 730 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={135} size={14} fill={INK}>
          {t(
            "ΔrH = heat exchanged at constant pressure, bonds break & form",
            "ΔrH = constant pressure par heat exchange, jab bonds tootte-bante hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — LEFT diagram: exothermic */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 130 170 L 280 170" stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={205} y={162} size={12} fill={INK}>
          {t("reactants", "reactants")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 280 170 C 300 170, 310 300, 330 300" stroke={GREEN} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 330 300 L 480 300" stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={405} y={318} size={12} fill={GREEN}>
          {t("products", "products")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(305, 170, 305, 300)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={315} y={239} size={13} weight={700} fill={GREEN} anchor="start">
          {t("ΔrH < 0", "ΔrH < 0")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={305} y={345} size={15} weight={800} fill={GREEN}>
          {t("EXOTHERMIC", "EXOTHERMIC")}
        </T>
      </Fade>

      {/* beat 3 — everyday example L */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={305} y={390} size={13} fill={MUTED} script>
          {t("matchstick burning · acid + base neutralising", "matchstick jalna · acid + base neutralise hona")}
        </T>
      </Fade>

      {/* beat 4 — RIGHT diagram: endothermic */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 590 300 L 740 300" stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={665} y={318} size={12} fill={INK}>
          {t("reactants", "reactants")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 740 300 C 760 300, 770 170, 790 170" stroke={RED} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d="M 790 170 L 940 170" stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={865} y={162} size={12} fill={RED}>
          {t("products", "products")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={arrowD(765, 300, 765, 170)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={775} y={239} size={13} weight={700} fill={RED} anchor="start">
          {t("ΔrH > 0", "ΔrH > 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={765} y={345} size={15} weight={800} fill={RED}>
          {t("ENDOTHERMIC", "ENDOTHERMIC")}
        </T>
      </Fade>

      {/* beat 5 — everyday example R */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={765} y={390} size={13} fill={MUTED} script>
          {t("the instant cold pack that snaps icy", "instant cold pack snap karna")}
        </T>
      </Fade>

      {/* beat 6 — red note linking subtopic 1 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={190} y={410} w={700} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "enthalpy IS a state function — thermochemistry is that idea applied to reactions",
            "enthalpy state function HAI — thermochemistry bas wahi idea reactions par"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — green verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={240} y={465} w={600} h={36} fill={GREEN} textFill="#fff" size={15} script>
          {t("sign of ΔrH tells the story: − released, + absorbed", "ΔrH ka sign sab bata deta hai: − released, + absorbed")}
        </Chip>
      </Fade>
    </Scene>
  );
}
