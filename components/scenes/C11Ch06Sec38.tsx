/**
 * C11 Ch06 · Section 38 — "Worked example — dissociation falls as pressure rises (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.9, 16.1, 23, 34.9, 40.5, 52.3]):
 *  0 title + underline
 *  1 start: Kp = α²P/(1−α²)
 *  2 note: Kp depends only on T ⇒ constant at fixed T
 *  3 rearrange: α²/(1−α²) = Kp/P ⇒ α² = Kp/(P+Kp)
 *  4 land, ringed: α = √[Kp/(P+Kp)]
 *  5 reading: ↑P (Kp const) ⇒ denominator grows ⇒ α↓
 *  6 conclusion, boxed: algebra confirms Le Chatelier
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 19, red)      | T mid  | x180..900  y30..80  (bl 64)
 *  b1 | "Kp=α²P/(1−α²)" (19, ink)   | T mid  | y104..121 (bl 115)
 *  b2 | note (14, muted)            | T mid  | y139..154 (bl 150)
 *  b3 | rearrange (16, ink)         | T mid  | y177..195 (bl 190)
 *  b4 | "α=√[Kp/(P+Kp)]" ringed(24) | T mid  | x424..656 y231..257 (bl 250)
 *  b5 | reading (15, ink)           | T mid  | y298..315 (bl 310)
 *  b6 | conclusion chip (green)     | Chip   | x180..900 y345..387
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

export default function C11Ch06Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("dissociation falls as pressure rises (JEE Advanced)", "pressure badhne se dissociation girta (JEE Advanced)")}
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

      {/* beat 1 — the starting relation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <SvgText x={540} y={115} textAnchor="middle" fontSize={19} fontWeight={700} fill={INK} fontFamily={ANEK}>
          Kp = α<TSpan dy={-8} fontSize="0.6em">2</TSpan>
          <TSpan dy={8}>P/(1−α</TSpan>
          <TSpan dy={-8} fontSize="0.6em">2</TSpan>
          <TSpan dy={8}>)</TSpan>
        </SvgText>
      </Fade>

      {/* beat 2 — Kp is a constant at fixed T */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={150} size={14} fill={MUTED} anchor="middle">
          {t(
            "Kp depends only on T ⇒ constant at fixed T",
            "Kp sirf T par depend karta ⇒ fixed T par constant"
          )}
        </T>
      </Fade>

      {/* beat 3 — rearrange */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={190} textAnchor="middle" fontSize={16} fill={INK} fontFamily={ANEK}>
          α<TSpan dy={-7} fontSize="0.62em">2</TSpan>
          <TSpan dy={7}>/(1−α</TSpan>
          <TSpan dy={-7} fontSize="0.62em">2</TSpan>
          <TSpan dy={7}>) = Kp/P  ⇒  α</TSpan>
          <TSpan dy={-7} fontSize="0.62em">2</TSpan>
          <TSpan dy={7}> = Kp/(P+Kp)</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — take the square root, land it */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={24} fill={GREEN} weight={800} anchor="middle">
          α = √[Kp / (P + Kp)]
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 244, 116, 25)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — read it */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={310} size={15} fill={INK} anchor="middle">
          {t(
            "↑P (Kp const) ⇒ denominator grows ⇒ α↓",
            "↑P (Kp const) ⇒ denominator badhta ⇒ α↓"
          )}
        </T>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={180} y={345} w={720} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15} script={false}>
          {t(
            "algebra confirms Le Chatelier: compression suppresses dissociation",
            "algebra Le Chatelier confirm karta: compression dissociation suppress karta"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
