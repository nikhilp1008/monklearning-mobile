/**
 * Ch04 · Section 69 — "Pitfalls and pro-tips: Common Forces and FBDs"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.93, 45.91, 69.97, 93.61, 114.18, 136.45, 155.14, 179.97]):
 *  0 title
 *  1 pitfall 1: N=mg by reflex
 *  2 pitfall 2: wrong forces in an FBD
 *  3 pitfall 3: tension 'varying' across an ideal pulley
 *  4 pitfall 4: series vs parallel springs mixed up
 *  5 pitfall 5: ignoring a negative N or T
 *  6 pro-tip heading: FBD is non-negotiable
 *  7 pro-tip text: first ten seconds, 90% turn routine
 *  8 red margin: two memory aids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 st x84 bl 92 / 114 · p2 bl 142 / 164 · p3 bl 192 / 214 ·
 *  p4 bl 242 / 264 · p5 bl 292 / 314
 *  b6 head cx540 bl 350
 *  b7 st x84 bl 380 / 404
 *  b8 | bar x66 y430..500 · lines st x84 bl 450 / 476
 */

import React from "react";
import { G } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (k: number, hy: number, dy: number, hdr: string, det: string, detFill: string) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 1)}>
        <T x={84} y={hy} size={14} fill={RED} script anchor="start">
          {hdr}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 8)}>
        <T x={84} y={dy} size={12} fill={detFill} script anchor="start">
          {det}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "the mistakes that quietly wreck other problems",
            "wo galtiyaan jo chupke se doosre problems bigadti hain"
          )}
        </T>
      </Fade>

      {pit(
        1,
        92,
        114,
        t("1 · N = mg by reflex", "1 · reflex mein N = mg"),
        t(
          "self-adjusting — write the ACTUAL perpendicular balance, every time",
          "self-adjusting — ASLI perpendicular balance likho, har baar"
        ),
        AMBER_DARK
      )}
      {pit(
        2,
        142,
        164,
        t("2 · wrong forces in the FBD", "2 · FBD mein galat forces"),
        t(
          "only forces ON your body — what IT exerts belongs in the OTHER diagram",
          "sirf body PAR lagti forces — jo WO lagaati wo DOOSRE diagram mein"
        ),
        AMBER_DARK
      )}
      {pit(
        3,
        192,
        214,
        t("3 · tension 'changing' across an ideal pulley", "3 · ideal pulley ke aar-paar tension 'badalna'"),
        t(
          "massless string, frictionless pulley → ONE tension throughout, always",
          "massless string, frictionless pulley → HAMESHA EK tension, poore mein"
        ),
        GREEN
      )}
      {pit(
        4,
        242,
        264,
        t("4 · series vs parallel springs, mixed up", "4 · series aur parallel springs gaddmadd"),
        t(
          "reciprocals add → softer (series) · constants add → stiffer (parallel)",
          "reciprocals judte → naram (series) · constants judte → kadak (parallel)"
        ),
        GREEN
      )}
      {pit(
        5,
        292,
        314,
        t("5 · ignoring a negative N or T", "5 · negative N ya T ko nazarandaaz karna"),
        t(
          "negative N: left the surface · negative T: went slack — redraw it",
          "negative N: surface chhod diya · negative T: dheela pad gaya — dobara banao"
        ),
        RED
      )}

      {/* beat 6 — pro-tip heading */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={350} size={16} fill={AMBER_DARK} script>
          {t("pro-tip: the FBD is non-negotiable", "pro-tip: FBD gair-samjhautavaadi hai")}
        </T>
      </Fade>

      {/* beat 7 — the emphatic case */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={380} size={14} fill={INK} script anchor="start">
          {t(
            "first ten seconds, every problem: one clean FBD per body, weight arrow first",
            "har problem ke pehle das second: har body ke liye saaf FBD, pehle weight ka teer"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={404} size={14} fill={GREEN} script anchor="start">
          {t(
            "90% of 'hard' problems turn routine the instant the diagram is correct",
            "90% 'mushkil' problems routine ban jaate — jis pal diagram sahi ho"
          )}
        </T>
      </Fade>

      {/* beat 8 — memory aids */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 430 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "'gravity pulls, surfaces push, strings tug, springs snap back'",
            "'gravity kheenchti, surfaces dhakelte, strings khinchti, springs wapas chatakti'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={476} size={14} fill={RED} script anchor="start">
          {t(
            "'N is whatever the balance demands — never assume mg'",
            "'N wahi jo balance maange — kabhi mg mat maano'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
