/**
 * C11 Ch06 · Section 50 — "Linking conjugate pairs, and the buffer equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Introduces Henderson–Hasselbalch — reused constantly ahead.
 *
 * Beats (board_reveal_at_english: [0, 4.5, 12, 21.6, 29.7, 36.6, 45.7]):
 *  0 title + underline
 *  1 Ka × Kb = Kw, boxed
 *  2 land, ringed: pKa + pKb = 14 (298 K)
 *  3 note: Henderson–Hasselbalch — pH of a buffer from a ratio
 *  4 THE equation, ringed: pH = pKa + log([salt]/[acid])
 *  5 mirror: pOH = pKb + log([salt]/[base])
 *  6 guardrail, boxed: conjugate conversion — DIVIDE, never multiply
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | "Ka×Kb=Kw" chip (amber)    | Chip   | x390..690 y105..145
 *  b2 | "pKa+pKb=14" ringed (22)   | T mid  | x405..675 y163..192 (bl 185)
 *  b3 | note (14, muted)           | T mid  | y225..241 (bl 240)
 *  b4 | H-H equation ringed (20)   | T mid  | x376..704 y267..291 (bl 285)
 *  b5 | mirror (17, ink)           | T mid  | y332..350 (bl 345)
 *  b6 | guardrail box (red)        | rect   | x200..880 y375..417
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("linking conjugate pairs: the buffer equation", "conjugate pairs jodna: buffer equation")}
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

      {/* beat 1 — the conjugate constant relation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Rect x={390} y={105} width={300} height={40} rx={12} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={540} y={130} size={18} fill={INK} weight={700} anchor="middle">
          Ka × Kb = Kw
        </T>
      </Fade>

      {/* beat 2 — the log form, landed */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={185} size={22} fill={GREEN} weight={800} anchor="middle">
          pKa + pKb = 14 (298 K)
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.1)}
        d={ringD(540, 180, 135, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 3 — Henderson–Hasselbalch intro */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={240} size={14} fill={MUTED} anchor="middle">
          {t(
            "Henderson–Hasselbalch: pH of a buffer, directly from a ratio",
            "Henderson–Hasselbalch: buffer ka pH, seedha ek ratio se"
          )}
        </T>
      </Fade>

      {/* beat 4 — THE equation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={285} size={20} fill={INK} weight={800} anchor="middle">
          pH = pKa + log([salt]/[acid])
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 280, 164, 23)}
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />

      {/* beat 5 — the base mirror */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={345} size={17} fill={INK} anchor="middle">
          pOH = pKb + log([salt]/[base])
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={200} y={375} width={680} height={42} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={401} size={14} fill={RED} weight={600} anchor="middle">
          {t(
            "conjugate conversion: DIVIDE, never multiply, Ka↔Kb",
            "conjugate conversion: DIVIDE karo, kabhi multiply nahi, Ka↔Kb"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
