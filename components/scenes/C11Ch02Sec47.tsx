/**
 * C11 Ch02 · Section 47 — "Writing configurations: anomalies and ions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 8.02, 20.99, 32.94, 48.64, 56.58, 67.75, 78.42]):
 *  0 anchor: now we write real configurations — two famous exceptions
 *  1 explain: find Z, fill in (n+l) order: 1s 2s 2p 3s 3p 4s 3d 4p 5s ...
 *  2 explain: capacities s=2,p=6,d=10,f=14 — Hund within a subshell
 *  3 guardrail (high, RED) + represent: Cr/Cu half-/fully-filled stability
 *  4 explain: for ions, remove electrons from the highest n FIRST
 *  5 formula (high, GREEN): Fe:[Ar]3d⁶4s² ⇒ Fe²⁺=[Ar]3d⁶
 *  6 explain: 4s leaves before 3d — last in, not last out
 *  7 guardrail: never write Fe²⁺ as [Ar]3d⁴4s² — the classic error
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | fill-order chip     | Chip  | x140..940 y98..128
 *  b2 | capacities chip     | Chip  | x180..900 y144..174
 *  b3 | guardrail caption   | T mid | x540 y200
 *  b3 | 3d⁵ / 4s¹ boxes     | Orbit | x340.. / x560.. y222
 *  b3 | Cr/Cu formula line  | T mid | x540 y286
 *  b4 | explain caption     | T mid | x540 y314
 *  b5 | formula chip (GRN)  | Chip  | x300..780 y340..374
 *  b6 | explain caption     | T mid | x540 y400
 *  b7 | guardrail chip      | Chip  | x220..860 y426..462
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { OrbitalBox } from "./chem-kit";

const D_BOXES = [340, 374, 408, 442, 476];

export default function C11Ch02Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("writing configurations: anomalies and ions", "configurations likhna: anomalies aur ions")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "now we write real configurations — including two famous exceptions",
            "ab hum asli configurations likhte — do famous exceptions ke saath"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: the fill order */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={140} y={98} w={800} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "find Z, fill in (n+l) order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s ...",
            "Z nikaalo, (n+l) order mein bharo: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s ..."
          )}
        </Chip>
      </Fade>

      {/* beat 2 — explain: capacities */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={180} y={144} w={720} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "capacities: s = 2, p = 6, d = 10, f = 14 — apply Hund within a subshell",
            "capacities: s = 2, p = 6, d = 10, f = 14 — subshell ke andar Hund apply karo"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — guardrail (high) + represent: half-filled / fully-filled stability */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={200} size={12} fill={RED} script>
          {t(
            "half-filled (d⁵) and fully-filled (d¹⁰) are extra stable — Cr and Cu",
            "half-filled (d⁵) aur fully-filled (d¹⁰) extra stable hote — Cr aur Cu"
          )}
        </T>
      </Fade>
      {D_BOXES.map((x, i) => (
        <OrbitalBox key={x} on={beat >= 3} delay={dl(3, 0.6 + i * 0.15)} x={x} y={222} up={1} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={442} y={262} size={12} fill={INK}>
          3d⁵
        </T>
      </Fade>
      <OrbitalBox on={beat >= 3} delay={dl(3, 1.6)} x={560} y={222} up={1} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={575} y={262} size={12} fill={INK}>
          4s¹
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={540} y={296} size={13} fill={GREEN} script={false}>
          {"Cr = [Ar] 3d⁵ 4s¹,   Cu = [Ar] 3d¹⁰ 4s¹"}
        </T>
      </Fade>

      {/* beat 4 — explain: ion rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={330} size={12} fill={INK} script>
          {t(
            "for ions, remove electrons from the highest n FIRST",
            "ions ke liye, highest n se electrons PEHLE hataao"
          )}
        </T>
      </Fade>

      {/* beat 5 — formula (high, GREEN): Fe → Fe²⁺ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={280} y={356} w={520} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"Fe: [Ar]3d⁶ 4s²  ⇒  Fe²⁺ = [Ar]3d⁶"}
        </Chip>
      </Fade>

      {/* beat 6 — explain: last in, not last out */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={416} size={12} fill={INK} script>
          {t(
            "so 4s leaves before 3d, even though 4s filled first — last in, not last out",
            "toh 4s 3d se pehle jaata hai, chahe 4s pehle bhara ho — last in, last out nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail: the classic error */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={220} y={442} w={640} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {"never write Fe²⁺ as [Ar]3d⁴ 4s² — the classic error"}
        </Chip>
      </Fade>
    </Scene>
  );
}
