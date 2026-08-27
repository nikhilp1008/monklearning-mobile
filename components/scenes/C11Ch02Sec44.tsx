/**
 * C11 Ch02 · Section 44 — "Seating the electrons: Aufbau, Pauli, Hund"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 7.34, 12.71, 21.5, 32, 40.87, 49.15, 57.6]):
 *  0 anchor: filling a multi-electron atom = seating wedding guests
 *  1 explain: three rules, applied strictly in order
 *  2 rule ① Aufbau: fill the cheapest seats first
 *  3 rule ② Pauli: never seat two guests with an identical address
 *  4 rule ③ Hund (high, GREEN): everyone gets their own seat before doubling up
 *  5 explain: applied in order, these generate every configuration
 *  6 explain: and through configuration, the periodic table's structure
 *  7 teaser: the seat order comes from the (n+l) rule, next
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | lead-in caption     | T mid | x540 y98
 *  b2 | ① circle + text     | Fade/T| cy130 / y135
 *  b3 | ② circle + text     | Fade/T| cy177 / y182
 *  b4 | ③ circle + text(GRN)| Fade/T| cy224 / y229
 *  b5 | explain caption     | T mid | x540 y270
 *  b6 | explain caption     | T mid | x540 y298
 *  b7 | teaser caption      | T mid | x540 y328
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, RED, GREEN, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

type Row = { cy: number; ty: number; color: string; en: string; hi: string };

const ROWS: Row[] = [
  {
    cy: 130,
    ty: 135,
    color: AMBER_DARK,
    en: "Aufbau — fill the cheapest (lowest-energy) seats first",
    hi: "Aufbau — sabse sasti (lowest-energy) seats pehle bharo",
  },
  {
    cy: 177,
    ty: 182,
    color: AMBER_DARK,
    en: "Pauli — never seat two guests with an identical full address",
    hi: "Pauli — do guests ko kabhi identical full address mat do",
  },
  {
    cy: 224,
    ty: 229,
    color: GREEN,
    en: "Hund — when several equal seats are open, everyone gets their own first",
    hi: "Hund — barabar seats khaali hon toh, double hone se pehle sabko apni seat",
  },
];

export default function C11Ch02Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={16} fill={RED} script>
          {t("seating the electrons: Aufbau, Pauli, Hund", "electrons ko bithaana: Aufbau, Pauli, Hund")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={12} fill={RED} script>
          {t(
            "filling a multi-electron atom = seating wedding guests",
            "multi-electron atom bharna = shaadi ke guests ko bithaana"
          )}
        </T>
      </Fade>

      {/* beat 1 — lead-in to the three rules */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={98} size={12} fill={INK} script>
          {t("three rules — applied strictly in order:", "teen rules — sakhti se order mein apply karo:")}
        </T>
      </Fade>

      {/* beats 2–4 — the three rules */}
      {ROWS.map((row, i) => (
        <React.Fragment key={row.cy}>
          <Fade on={beat >= i + 2} delay={dl(i + 2, 0.2)}>
            <Circle cx={70} cy={row.cy} r={14} fill={row.color} />
            <SvgText x={70} y={row.cy + 5} fontSize={14} fill="#fff" textAnchor="middle" fontWeight={700}>
              {i + 1}
            </SvgText>
          </Fade>
          <Fade on={beat >= i + 2} delay={dl(i + 2, 0.6)}>
            <T x={100} y={row.ty} size={14} fill={i === 2 ? GREEN : INK} anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — explain: generates every configuration */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={270} size={12} fill={INK} script>
          {t(
            "applied in order, these three rules generate every element's configuration",
            "order mein apply karo toh ye teen rules har element ki configuration banate hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — explain: and the periodic table's structure */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={298} size={12} fill={INK} script>
          {t(
            "and through configuration, the entire structure of the periodic table",
            "aur configuration ke zariye, poore periodic table ki structure"
          )}
        </T>
      </Fade>

      {/* beat 7 — teaser: the (n+l) rule, next */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={328} size={13} fill={RED} script>
          {t(
            "the seat order comes from the (n+l) rule — coming up next",
            "seats ka order (n+l) rule se aata hai — aage aa raha hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
