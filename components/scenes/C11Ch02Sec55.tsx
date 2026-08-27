/**
 * C11 Ch02 · Section 55 — "Pitfalls and pro-tips: the quantum model"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: tips` — recap for subtopic 4.
 *
 * Beats (en [0, 7.17, 17.66, 29.53, 40.7, 51.11, 66.99, 78.08]):
 *  0 anchor: close the densest subtopic — 4 traps + 2 pro-tips
 *  1 pitfall ① confusing node types
 *  2 pitfall ② assuming lower n = lower energy
 *  3 pitfall ③ removing 3d before 4s for cations
 *  4 pitfall ④ forgetting the Cr/Cu anomalies
 *  5 note: is this QN set allowed? check l<n and |ml|≤l
 *  6 pro-tip (high, RED): for ions, neutral atom first, then strip highest n
 *  7 closing: anchor node counts on total=n−1
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y56 script red
 *  b0 | anchor caption      | T mid | x540 y80            [dims@b1]
 *  b1 | ① circle + text     | Fade/T| cy108 / y113
 *  b2 | ② circle + text     | Fade/T| cy155 / y160
 *  b3 | ③ circle + text     | Fade/T| cy202 / y207
 *  b4 | ④ circle + text     | Fade/T| cy249 / y254
 *  b5 | sub-note             | T sta | x100 y280
 *  b6 | pro-tip box (RED)   | Chip  | x140..940 y308..350
 *  b7 | closing line        | T mid | x540 y388
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

type Row = { cy: number; ty: number; en: string; hi: string };

const ROWS: Row[] = [
  {
    cy: 108,
    ty: 113,
    en: "confusing node types — radial=n−l−1, angular=l, total=n−1",
    hi: "node types confuse karna — radial=n−l−1, angular=l, total=n−1",
  },
  {
    cy: 155,
    ty: 160,
    en: "assuming lower n = lower energy — in multi-electron atoms, (n+l) rules",
    hi: "kam n = kam energy maanna — multi-electron atoms mein (n+l) raaj karta",
  },
  {
    cy: 202,
    ty: 207,
    en: "removing 3d before 4s for cations — electrons leave highest n first",
    hi: "cations ke liye 3d ko 4s se pehle hataana — electrons highest n se pehle",
  },
  {
    cy: 249,
    ty: 254,
    en: "forgetting the Cr/Cu anomalies — half/fully-filled subshells steal a 4s",
    hi: "Cr/Cu anomalies bhoolna — half/fully-filled subshells 4s electron churaate",
  },
];

export default function C11Ch02Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={16} fill={RED} script>
          {t("pitfalls and pro-tips: the quantum model", "pitfalls aur pro-tips: quantum model")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={80} size={12} fill={RED} script>
          {t(
            "close the densest subtopic — four traps, two pro-tips",
            "sabse dense subtopic band — chaar traps, do pro-tips"
          )}
        </T>
      </Fade>

      {/* beats 1–4 — the four pitfalls */}
      {ROWS.map((row, i) => (
        <React.Fragment key={row.cy}>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
            <Circle cx={70} cy={row.cy} r={14} fill={RED} />
            <SvgText x={70} y={row.cy + 5} fontSize={14} fill="#fff" textAnchor="middle" fontWeight={700}>
              {i + 1}
            </SvgText>
          </Fade>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.6)}>
            <T x={100} y={row.ty} size={12.5} fill={INK} anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — sub-note: the allowed-set check */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={100} y={280} size={11} fill={MUTED} anchor="start" script>
          {t(
            "“is this QN set allowed?” — check l<n and |ml|≤l. One violation = impossible",
            "“kya ye QN set allowed hai?” — check l<n aur |ml|≤l. Ek violation = impossible"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip (high emphasis, RED) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={140} y={308} w={800} h={42} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "PRO-TIP: for ions, write the neutral atom first, then strip the highest-n electrons",
            "PRO-TIP: ions ke liye, pehle neutral atom likho, phir highest-n electrons strip karo"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — closing line */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={388} size={13} fill={INK} script>
          {t(
            "for node counts, anchor on total=n−1, split into radial and angular",
            "node counts ke liye, total=n−1 par anchor karo, radial aur angular mein split"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
