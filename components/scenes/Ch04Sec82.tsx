/**
 * Ch04 · Section 82 — "String versus rod: the connector's ability to push"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.93, 39.77, 63.23, 84.91, 109.74, 134.57]):
 *  0 title
 *  1 diagram: string-panel vs rod-panel, caption — string taut, rod can push and hold up
 *  2 text: √gr, √5gr assume the connector can only PULL — string or track
 *  3 text: rod/tube can push OUTWARD too — holds body at v_top ≥ 0
 *  4 formula box (string): v_top,min = √gr · v_bottom,min = √5gr
 *  5 formula box (rod): v_top,min = 0 · v_bottom,min = 2√gr
 *  6 red margin: spot 'string' vs 'rod' = full mark, push ability is the whole difference
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  P1 string | circle c(200,170) r65 · thin radius line to top(200,105) · ball r8 ·
 *    lbl "STRING" cx200 y250 · "pulls only" cx200 y270
 *  P2 rod | circle c(560,170) r65 · thick radius line to top(560,105) · ball r8 ·
 *    lbl "ROD" cx560 y250 · "pulls AND pushes" cx560 y270
 *  caption cx540 bl 305
 *  b2 line cx540 bl 335 · b3 st cx540 bl 365 / 389 (centered)
 *  b4 box x260..820 y410..450 bl 435 (RED stroke)
 *  b5 box x260..820 y465..505 bl 490 (GREEN stroke)
 *  b6 | bar x66 y525..590 · lines st x84 bl 545 / 571
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec82({ currentTime, reveals, language }: SceneProps) {
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
            "string versus rod — the connector's ability to push",
            "string vs rod — connector ki dhakelne ki kshamta"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two panels */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={circleD(200, 170, 65)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 200 170 L 200 105" stroke={RED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={ringD(200, 105, 8, 8)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={200} y={250} size={12} fill={RED} weight={700}>
          {t("STRING", "STRING")}
        </T>
        <T x={200} y={270} size={11} fill={MUTED} script>
          {t("pulls only", "sirf kheenchti")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 3)} d={circleD(560, 170, 65)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d="M 560 170 L 560 105" stroke={GREEN} sw={4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={ringD(560, 105, 8, 8)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={560} y={250} size={12} fill={GREEN} weight={700}>
          {t("ROD", "ROD")}
        </T>
        <T x={560} y={270} size={11} fill={MUTED} script>
          {t("pulls AND pushes", "kheenchti AUR dhakelti")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={540} y={305} size={11} fill={MUTED} script>
          {t(
            "a string must stay taut; a rod can push outward and hold the body up",
            "string ko taut rehna; rod bahar dhakelke body ko thaam sakta"
          )}
        </T>
      </Fade>

      {/* beat 2 — the hidden assumption */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={540} y={335} size={13} fill={INK} script>
          {t(
            "√gr and √5gr assume the connector can only PULL — string or track",
            "√gr aur √5gr maante — connector sirf KHEENCH sakta — string ya track"
          )}
        </T>
      </Fade>

      {/* beat 3 — the rod changes everything */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={365} size={13} fill={AMBER_DARK} script>
          {t(
            "rod or tube can push OUTWARD too — holds the body up even at v = 0",
            "rod ya tube BAAHAR bhi dhakel sakta — v = 0 par bhi body thaamta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={540} y={389} size={13} fill={AMBER_DARK} script>
          {t(
            "minimum condition at the top: v_top ≥ 0",
            "top par minimum shart: v_top ≥ 0"
          )}
        </T>
      </Fade>

      {/* beat 4 — string / track */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 260 410 h 560 q 12 0 12 12 v 16 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={RED}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={435} size={15} fill={INK} weight={800}>
          {t(
            "string / track: v_top,min = √gr · v_bottom,min = √5gr",
            "string / track: v_top,min = √gr · v_bottom,min = √5gr"
          )}
        </T>
      </Fade>

      {/* beat 5 — rigid rod / tube */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 260 465 h 560 q 12 0 12 12 v 16 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={490} size={15} fill={INK} weight={800}>
          {t(
            "rigid rod / tube: v_top,min = 0 · v_bottom,min = 2√gr",
            "rigid rod / tube: v_top,min = 0 · v_bottom,min = 2√gr"
          )}
        </T>
      </Fade>

      {/* beat 6 — the full mark */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 525 v 65" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={545} size={14} fill={RED} script anchor="start">
          {t(
            "spot 'string' vs 'rod' — worth a FULL MARK",
            "'string' vs 'rod' pakdo — ek POORA MARK ki keemat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={571} size={14} fill={GREEN} script anchor="start">
          {t(
            "the connector's ability to push is the ENTIRE difference",
            "connector ki dhakelne ki kshamta hi POORA fark hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
