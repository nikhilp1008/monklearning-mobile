/**
 * C11 Ch06 · Section 29 — "Pressure and volume: the side with fewer gas moles wins"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.4, 14.4, 24.8, 34.4, 44.3, 51, 60.4]):
 *  0 title + underline
 *  1 compression icon: ↑ pressure crowds molecules
 *  2 relieves crowding → shifts to FEWER gas moles
 *  3 reverse note: expand V ⇒ favors MORE moles
 *  4 example: N2 + 3H2 ⇌ 2NH3, mole badges 4 mol / 2 mol
 *  5 land, ringed: high P pushes forward, 4 mol → 2 mol
 *  6 counter-example: H2+I2⇌2HI, Δn(gas)=0 → NO EFFECT
 *  7 the rule, boxed
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 20, red)      | T mid  | x180..900  y30..84  (bl 64)
 *  b1 | compression arrows + dots   | Draw   | x450..630 y115..145
 *  b1 | label (14, ink)             | T mid  | y159..174 (bl 168)
 *  b2 | note (15, green)            | T mid  | y187..202 (bl 195)
 *  b3 | reverse note (14, amber)    | T mid  | y214..232 (bl 222)
 *  b4 | mole badges (13)            | T mid  | x380..460/620..740 y230..246
 *  b4 | equation (19, ink)          | T mid  | x442..638 y248..273 (bl 265)
 *  b5 | forward note, ringed (15)   | T mid  | x310..770 y285..306 (bl 300)
 *  b6 | counter eq (17, ink)        | T mid  | y336..353 (bl 345)
 *  b6 | no-effect (15, red)         | T mid  | y364..381 (bl 372)
 *  b7 | rule chip (amber)           | Chip   | x210..870 y410..454
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, INK, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("pressure/volume: fewer gas moles wins", "pressure/volume: kam gas moles jeetta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — compression crowds molecules */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(460, 130, 505, 130)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(620, 130, 575, 130)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={528} cy={124} r={3} fill={INK} />
        <Circle cx={540} cy={134} r={3} fill={INK} />
        <Circle cx={552} cy={122} r={3} fill={INK} />
        <Circle cx={545} cy={140} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={540} y={168} size={14} fill={INK} anchor="middle">
          {t("↑ pressure crowds the molecules", "↑ pressure molecules ko crowd karta")}
        </T>
      </Fade>

      {/* beat 2 — relieves crowding */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={195} size={15} fill={GREEN} weight={600} anchor="middle">
          {t("relieves crowding → shifts to FEWER gas moles", "crowding relieve → KAM gas moles ki taraf shift")}
        </T>
      </Fade>

      {/* beat 3 — the reverse */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={222} size={14} fill={AMBER_DARK} script anchor="middle">
          {t("expand V ⇒ reverse, favors MORE moles", "V expand ⇒ reverse, ZYADA moles favor")}
        </T>
      </Fade>

      {/* beat 4 — ammonia synthesis example */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={420} y={240} size={13} fill={AMBER_DARK} anchor="middle">
          {t("4 mol gas", "4 mol gas")}
        </T>
        <T x={680} y={240} size={13} fill={GREEN} anchor="middle">
          {t("2 mol gas", "2 mol gas")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={265} size={19} fill={INK} weight={700} anchor="middle">
          N₂ + 3H₂ ⇌ 2NH₃
        </T>
      </Fade>

      {/* beat 5 — high pressure pushes forward */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={300} size={15} fill={GREEN} weight={700} anchor="middle">
          {t("high P pushes forward: 4 mol → 2 mol", "high P forward push karta: 4 mol → 2 mol")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={ringD(540, 296, 233, 20)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 6 — the counter-example */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={345} size={17} fill={INK} weight={600} anchor="middle">
          H₂(g) + I₂(g) ⇌ 2HI(g)   Δn(gas) = 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={372} size={15} fill={RED} weight={700} anchor="middle">
          {t("pressure: NO EFFECT ✗", "pressure: NO EFFECT ✗")}
        </T>
      </Fade>

      {/* beat 7 — the rule */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={210} y={410} w={660} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t(
            "↑P favors SMALLER mole count; Δn(gas)=0 ⇒ no effect",
            "↑P KAM mole count favor karta; Δn(gas)=0 ⇒ no effect"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
