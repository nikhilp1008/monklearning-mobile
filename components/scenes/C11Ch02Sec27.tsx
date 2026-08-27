/**
 * C11 Ch02 · Section 27 — "Pitfalls and pro-tips: radiation and the photoelectric effect"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: tips` — recap for subtopic 2.
 *
 * Beats (en [0, 8.87, 22.44, 34.56, 49.49, 65.28, 77.23, 89.77]):
 *  0 anchor: close the subtopic — the traps, plus one shortcut
 *  1 pitfall ① mixing intensity vs frequency control
 *  2 pitfall ② ignoring the threshold
 *  3 pitfall ③ unit slips in E=hc/λ
 *  4 pitfall ④ confusing wavenumber with frequency
 *  5 note: intensity-vs-frequency mixup is THE most-tested misconception
 *  6 pro-tip (high, RED): burn 1240/λ(nm) into memory
 *  7 closing: V₀ in volts = KEmax in eV — no extra step
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y56 script red
 *  b0 | anchor caption      | T mid | x540 y80            [dims@b1]
 *  b1 | ① circle + text     | Fade/T| cy108 / y113
 *  b2 | ② circle + text     | Fade/T| cy155 / y160
 *  b3 | ③ circle + text     | Fade/T| cy202 / y207
 *  b4 | ④ circle + text     | Fade/T| cy249 / y254
 *  b5 | sub-note             | T sta | x100 y280
 *  b6 | pro-tip box (RED)   | Chip  | x150..930 y308..350
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
    en: "mixing intensity vs frequency: frequency→energy/electron, intensity→number",
    hi: "intensity vs frequency mix karna: frequency→energy/electron, intensity→number",
  },
  {
    cy: 155,
    ty: 160,
    en: "ignoring the threshold — if hν < W₀, nothing comes out",
    hi: "threshold ignore karna — agar hν < W₀, kuch nahi nikalta",
  },
  {
    cy: 202,
    ty: 207,
    en: "unit slips in E=hc/λ — metres→J, or the shortcut→eV, never both",
    hi: "E=hc/λ mein unit slip — metres→J, ya shortcut→eV, dono kabhi nahi",
  },
  {
    cy: 249,
    ty: 254,
    en: "confusing wavenumber (m⁻¹, spatial) with frequency (Hz, temporal)",
    hi: "wavenumber (m⁻¹, spatial) ko frequency (Hz, temporal) se confuse karna",
  },
];

export default function C11Ch02Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={16} fill={RED} script>
          {t(
            "pitfalls and pro-tips: radiation and the photoelectric effect",
            "pitfalls aur pro-tips: radiation aur photoelectric effect"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={80} size={12} fill={RED} script>
          {t(
            "close the subtopic — the traps examiners plant, plus one shortcut",
            "subtopic band — examiners ke traps, plus ek shortcut"
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
            <T x={100} y={row.ty} size={13} fill={INK} anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — sub-note: the most-tested trap */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={100} y={280} size={11} fill={MUTED} anchor="start" script>
          {t(
            "the intensity-vs-frequency mix-up is THE most-tested misconception here",
            "intensity-vs-frequency mix-up yahaan sabse zyaada tested misconception hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip (high emphasis, RED) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={150} y={308} w={780} h={42} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "PRO-TIP: burn 1240/λ(nm) into memory — most questions become one division",
            "PRO-TIP: 1240/λ(nm) yaad rakho — zyaadatar questions ek division ban jaate"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — closing line */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={388} size={14} fill={INK} script>
          {t(
            "V₀ in volts = KEmax in eV — no extra step",
            "V₀ volts mein = KEmax eV mein — koi extra step nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
