/**
 * Ch04 · Section 59 — "The menu of forces, and the habit that uses it"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 49.6, 70.5, 95.3, 107.9, 132.7]):
 *  0 title
 *  1 four-fundamental-forces line + "only two faces in mechanics" note
 *  2 the menu: five chips (gravity, normal, friction, tension, spring)
 *  3 red margin: every contact force is electromagnetic at root
 *  4 amber line: learn these five, draw any diagram
 *  5 six-step method, compact numbered list
 *  6 red margin: only forces ON the body, never forces it exerts
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  b1 st x84 bl 92 / 116
 *  b2 chips y145..181 at x84/x240/x396/x552/x708 w140 (5 chips, gravity wider)
 *  b3 | bar x66 y210..290 · lines st x84 bl 230 / 256 / 280
 *  b4 line cx540 bl 320
 *  b5 | six steps, two columns x84 / x560, bl 355/379/403 (L) · 355/379/403 (R)
 *  b6 | bar x66 y460..540 · lines st x84 bl 480 / 506 / 530
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "master the menu, and mechanics stops being a memory game",
            "menu maaster karo, mechanics yaad rakhne ka khel nahi rahega"
          )}
        </T>
      </Fade>

      {/* beat 1 — four fundamental, two everyday faces */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "nature has four fundamental forces — but mechanics meets only two faces",
            "prakriti mein chaar fundamental forces — par mechanics ko sirf do chehre milte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "GRAVITY (no contact needed) and CONTACT forces",
            "GRAVITY (contact ki zaroorat nahi) aur CONTACT forces"
          )}
        </T>
      </Fade>

      {/* beat 2 — the menu, five chips */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={84} y={145} w={140} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("gravity", "gravity")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Chip x={240} y={145} w={140} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("normal", "normal")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <Chip x={396} y={145} w={140} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("friction", "friction")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <Chip x={552} y={145} w={140} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("tension", "tension")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <Chip x={708} y={145} w={140} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("spring", "spring")}
        </Chip>
      </Fade>

      {/* beat 3 — electromagnetic surprise */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 210 v 80" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={230} size={14} fill={RED} script anchor="start">
          {t(
            "every contact force is ELECTROMAGNETIC at root",
            "har contact force jad mein ELECTROMAGNETIC hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={84} y={256} size={14} fill={INK} script anchor="start">
          {t(
            "atoms never touch — electron clouds repel, summed over billions",
            "atoms kabhi chhoote nahi — electron clouds hataate hain, arabon par"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={84} y={280} size={14} fill={GREEN} script anchor="start">
          {t(
            "no separate 'contact force' exists in nature — it's all this",
            "prakriti mein alag 'contact force' hai hi nahi — yahi hai sab"
          )}
        </T>
      </Fade>

      {/* beat 4 — the short menu */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={320} size={14} fill={AMBER_DARK} script>
          {t(
            "learn how each of these five behaves — draw any diagram in mechanics",
            "in paanchon ka bartaav seekho — mechanics ka koi bhi diagram bana lo"
          )}
        </T>
      </Fade>

      {/* beat 5 — six-step FBD method */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={84} y={355} size={13} fill={INK} script anchor="start">
          {t("1. isolate one body", "1. ek body alag karo")}
        </T>
        <T x={84} y={379} size={13} fill={INK} script anchor="start">
          {t("2. draw forces ON it, weight first", "2. usPAR lagti forces banao, pehle weight")}
        </T>
        <T x={84} y={403} size={13} fill={INK} script anchor="start">
          {t("3. choose smart axes", "3. samajhdari se axes chuno")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={560} y={355} size={13} fill={INK} script anchor="start">
          {t("4. resolve slanted forces", "4. tirchhi forces resolve karo")}
        </T>
        <T x={560} y={379} size={13} fill={INK} script anchor="start">
          {t("5. ΣFx = max · ΣFy = may", "5. ΣFx = max · ΣFy = may")}
        </T>
        <T x={560} y={403} size={13} fill={INK} script anchor="start">
          {t("6. solve, then sanity-check", "6. hal karo, phir sanity-check")}
        </T>
      </Fade>

      {/* beat 6 — the one rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 460 v 90" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "draw only forces acting ON your chosen body",
            "sirf apni chuni body PAR lagti forces banao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={506} size={14} fill={RED} script anchor="start">
          {t(
            "NEVER the forces it exerts on others — those belong in THEIR diagram",
            "kabhi wo forces nahi jo wo doosron par lagati — wo UNKE diagram mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={530} size={14} fill={GREEN} script anchor="start">
          {t(
            "mixing these in puts phantom forces in your equations",
            "inhe milana equations mein bhootiya forces daal deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
