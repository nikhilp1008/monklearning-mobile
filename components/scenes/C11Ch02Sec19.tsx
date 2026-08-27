/**
 * C11 Ch02 · Section 19 — "Method: turning a wavelength into a photon energy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Re-verified against real audio/reveals (en [0,7.25,19.2,31.66,43.61,
 * 53.67,65.45,76.37]) — content/beat mapping unchanged, VERDICT PASS.
 *
 * Beats:
 *  0 anchor: "turning λ into an energy in one step"
 *  1 step ① identify what's given: ν, λ, or ν̄
 *  2 step ② pick the matching form: hν, hc/λ, hcν̄
 *  3 step ③ (guardrail) watch units: metres→joules, or eV shortcut
 *  4 step ④ for power P: photons/sec = P ÷ energy-per-photon
 *  5 explain: why the shortcut works (hc computed)
 *  6 formula (GREEN): hc = 1.986×10⁻²⁵ J·m ⇒ 1240 eV·nm
 *  7 guardrail (high): memorise 1240/λ(nm) — one division
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y76            [dims@b1]
 *  b1 | ① circle + text     | Fade/T| cy108 / y113
 *  b2 | ② circle + text     | Fade/T| cy153 / y158
 *  b3 | ③ circle(RED)+text  | Fade/T| cy198 / y203
 *  b4 | ④ circle + text     | Fade/T| cy243 / y248
 *  b5 | "why…" caption      | T mid | x540 y280
 *  b6 | hc→1240 box (GREEN) | Chip  | x260..820 y305..341
 *  b7 | guardrail box (RED) | Chip  | x260..820 y355..395
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

type Row = { cy: number; ty: number; color: string; en: string; hi: string };

const ROWS: Row[] = [
  {
    cy: 108,
    ty: 113,
    color: AMBER_DARK,
    en: "identify what's given: ν, λ, or ν̄",
    hi: "pehchaano kya diya hai: ν, λ, ya ν̄",
  },
  {
    cy: 153,
    ty: 158,
    color: AMBER_DARK,
    en: "pick the matching form: hν, hc/λ, or hcν̄",
    hi: "matching form chuno: hν, hc/λ, ya hcν̄",
  },
  {
    cy: 198,
    ty: 203,
    color: RED,
    en: "watch units: metres → joules, or the eV shortcut",
    hi: "units par nazar: metres → joules, ya eV shortcut",
  },
  {
    cy: 243,
    ty: 248,
    color: AMBER_DARK,
    en: "for power P: photons/sec = P ÷ (energy per photon)",
    hi: "power P ke liye: photons/sec = P ÷ (ek photon ki energy)",
  },
];

export default function C11Ch02Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("turning λ into an energy in one step", "λ ko ek step mein energy banao")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("a clean four-step method", "ek clean four-step method")}
        </T>
      </Fade>

      {/* beats 1–4 — the four steps */}
      {ROWS.map((row, i) => (
        <React.Fragment key={row.cy}>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
            <Circle cx={70} cy={row.cy} r={14} fill={row.color} />
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

      {/* beat 5 — why the shortcut works */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={280} size={12} fill={INK} script>
          {t(
            "why the shortcut works: hc = 6.626×10⁻³⁴ × 3×10⁸ = 1.986×10⁻²⁵ J·m",
            "shortcut kyun kaam karta hai: hc = 6.626×10⁻³⁴ × 3×10⁸ = 1.986×10⁻²⁵ J·m"
          )}
        </T>
      </Fade>

      {/* beat 6 — formula (GREEN) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={260} y={305} w={560} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          hc = 1.986×10⁻²⁵ J·m ⇒ 1240 eV·nm
        </Chip>
      </Fade>

      {/* beat 7 — guardrail (high): the memorisable shortcut */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={355} w={560} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("memorise 1240 / λ(nm) — one division!", "1240 / λ(nm) yaad karo — ek division!")}
        </Chip>
      </Fade>
    </Scene>
  );
}
