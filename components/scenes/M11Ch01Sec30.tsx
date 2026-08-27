/**
 * M11 Ch01 · Section 30 — "Inclusion–exclusion and the partition identities"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 n(A∪B) = n(A)+n(B) − n(A∩B)   [+ notation note: Σ meanings]
 *  2 n(A∪B∪C) = Σn(A) − Σn(A∩B) + n(A∩B∩C)
 *  3 exactly one = Σn(A) − 2Σn(A∩B) + 3n(A∩B∩C)
 *  4 exactly two = Σn(A∩B) − 3n(A∩B∩C)
 *  5 at least two = Σn(A∩B) − 2n(A∩B∩C)
 *  6 partition identities: n(union)=E₁+E₂+E₃, Σn(A)=E₁+2E₂+3E₃
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | notation note (12,muted)      | T mid | x540 y100
 *  b1 | "n(A∪B) = n(A)+n(B) − n(A∩B)" | T mid | x540 y135
 *  b2 | 3-set union formula (15)      | T mid | x540 y172
 *  b3 | exactly-one formula (15)      | T mid | x540 y209
 *  b4 | exactly-two formula (15)      | T mid | x540 y246
 *  b5 | at-least-two formula (15)     | T mid | x540 y283
 *  b6 | partition identities (2 lines, boxed) | rect+T | x180..900 y495..585
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the counting identities", "counting identities")}
        </T>
      </Fade>

      {/* beat 1 — notation note + the familiar 2-set formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={12} fill={MUTED}>
          {"Σn(A) = n(A)+n(B)+n(C)     Σn(A∩B) = sum of the 3 pairwise overlaps"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={135} size={16} fill={INK} weight={700}>
          {"n(A∪B) = n(A) + n(B) − n(A∩B)"}
        </T>
      </Fade>

      {/* beat 2 — 3-set union */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={15} fill={INK} weight={700}>
          {"n(A∪B∪C) = Σn(A) − Σn(A∩B) + n(A∩B∩C)"}
        </T>
      </Fade>

      {/* beat 3 — exactly one */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={209} size={15} fill={INK} weight={700}>
          {"exactly one = Σn(A) − 2Σn(A∩B) + 3n(A∩B∩C)"}
        </T>
      </Fade>

      {/* beat 4 — exactly two */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={246} size={15} fill={INK} weight={700}>
          {"exactly two = Σn(A∩B) − 3n(A∩B∩C)"}
        </T>
      </Fade>

      {/* beat 5 — at least two */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={283} size={15} fill={INK} weight={700}>
          {"at least two = Σn(A∩B) − 2n(A∩B∩C)"}
        </T>
      </Fade>

      {/* beat 6 — the partition identities */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={200} y={495} width={680} height={90} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={528} size={17} fill={INK} weight={800}>
          {"n(union) = E₁ + E₂ + E₃"}
        </T>
        <T x={540} y={556} size={17} fill={GREEN} weight={800}>
          {"n(A)+n(B)+n(C) = E₁ + 2E₂ + 3E₃"}
        </T>
        <T x={540} y={578} size={12} fill={MUTED} script>
          {t("secret weapon when an overlap is unknown", "jab overlap unknown ho, secret weapon")}
        </T>
      </Fade>
    </Scene>
  );
}
