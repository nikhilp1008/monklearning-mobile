/**
 * C11 Ch09 · Section 64 — "Naming benzene derivatives"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.45, 33.28, 41.9, 57.34, 68.78, 83.46]):
 *  0 heading · 1 trivial names: toluene, aniline, phenol · 2 ring diagram:
 *  ortho(1,2)/meta(1,3)/para(1,4) positions marked · 3 phenyl vs benzyl ·
 *  4 aryl = general term · 5 xylenes: C8H10 positional isomers · 6 RED:
 *  recognising o/m/p quickly matters later
 *
 * Layout plan — ring c(200,290) r=60 with position dots at each vertex:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cx = 200, cy = 290, r = 60;
  const vert = (i: number) => {
    const a = Math.PI / 6 + (i * 2 * Math.PI) / 6;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const [x1v, y1v] = vert(0);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("naming benzene derivatives", "benzene derivatives ke naam")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("where arenes sit, and how we name them", "arenes kahan aate, aur unhe kaise naam dete")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK}>
          {t("many keep trivial names: toluene, aniline, phenol", "kayi trivial names rakhte: toluene, aniline, phenol")}
        </T>
      </Fade>

      {/* beat 2 — the ring with o/m/p positions */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={ringD(cx, cy, r, 6)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={x1v} y={y1v - 12} size={13} fill={INK} weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={vert(1)[0] + 16} y={vert(1)[1] + 2} size={12} fill={GREEN} weight={700} anchor="start">
          2 = {t("ortho", "ortho")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={vert(2)[0] + 16} y={vert(2)[1] + 4} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          3 = {t("meta", "meta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={vert(3)[0]} y={vert(3)[1] + 20} size={12} fill={RED} weight={700}>
          4 = {t("para", "para")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={620} y={210} size={14} fill={INK} anchor="start">
          {t("ring as substituent = phenyl (C6H5–)", "substituent ke roop mein ring = phenyl (C6H5–)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={620} y={240} size={14} fill={INK} anchor="start">
          {t("ring + CH2 = benzyl", "ring + CH2 = benzyl")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={620} y={278} size={14} fill={INK} anchor="start">
          {t("aryl (Ar–) = general term for any aromatic group", "aryl (Ar–) = kisi bhi aromatic group ka general term")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={415} size={15} fill={INK}>
          {t("positional isomerism: the three xylenes (C8H10)", "positional isomerism: teen xylenes (C8H10)")}
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 440 L 60 476" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={462} size={14} fill={RED} script anchor="start">
          {t("recognising o/m/p quickly is a skill the directive-influence section needs", "o/m/p jaldi pehchaanna directive-influence section ke liye zaroori")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={200} y={400} size={11} fill={MUTED} script>
          {t("(o-, m-, p-xylene)", "(o-, m-, p-xylene)")}
        </T>
      </Fade>
    </Scene>
  );
}
