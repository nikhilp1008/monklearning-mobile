/**
 * Ch04 · Section 90 — "Pitfalls and pro-tips: Vertical Circular Motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.62, 40.45, 41.45, 42.45, 43.45, 68.28, 76.64, 101.47]):
 *  0 title
 *  1 pitfall 1: assuming constant speed
 *  2 pitfall 2: √gr for a rod, or 0 for a string — backwards
 *  3 pitfall 3: tension treated as THE centripetal force
 *  4 pitfall 4: forgetting the body can leave the circle
 *  5 pitfall 5: mis-placing the leaving angle on a sphere
 *  6 pro-tip heading: two equations crack every problem
 *  7 pro-tip text: Newton toward centre + energy conservation
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

export default function Ch04Sec90({ currentTime, reveals, language }: SceneProps) {
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
            "where vertical-circle marks quietly leak",
            "vertical-circle marks chupke se kahan jaate hain"
          )}
        </T>
      </Fade>

      {pit(
        1,
        92,
        114,
        t("1 · assuming constant speed", "1 · constant speed maan lena"),
        t(
          "fastest at bottom, slowest at top — link with v²_bottom = v²_top + 4gr",
          "bottom par sabse tez, top par sabse dheemi — v²_bottom = v²_top + 4gr se jodo"
        ),
        AMBER_DARK
      )}
      {pit(
        2,
        142,
        164,
        t("2 · √gr for a rod, or 0 for a string — backwards", "2 · rod ke liye √gr, ya string ke liye 0 — ulta"),
        t(
          "string/track needs √gr at top · rod/tube needs 0 — read the connector",
          "string/track ko top par √gr chahiye · rod/tube ko 0 — connector padho"
        ),
        AMBER_DARK
      )}
      {pit(
        3,
        192,
        214,
        t("3 · tension treated as THE centripetal force", "3 · tension ko HI centripetal force maanna"),
        t(
          "centripetal = NET inward force — connector + gravity's radial part",
          "centripetal = NET inward force — connector + gravity ka radial hissa"
        ),
        GREEN
      )}
      {pit(
        4,
        242,
        264,
        t("4 · forgetting the body can leave the circle", "4 · bhoolna ki body circle chhod sakti"),
        t(
          "below critical speed, string goes slack — it does NOT stop at the top",
          "critical speed se neeche, string dheeli — top par RUKTI nahi"
        ),
        RED
      )}
      {pit(
        5,
        292,
        314,
        t("5 · mis-placing the leaving angle on a sphere", "5 · sphere par leaving angle galat jagah"),
        t(
          "leaves at cosθ=2⁄3 from the top — not at the top, not at 90°",
          "top se cosθ=2⁄3 par chhodta — top par nahi, 90° par nahi"
        ),
        RED
      )}

      {/* beat 6 — pro-tip heading */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={350} size={16} fill={AMBER_DARK} script>
          {t(
            "pro-tip: two equations crack every problem",
            "pro-tip: do equations har problem tod deti hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two-equation method */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={380} size={14} fill={INK} script anchor="start">
          {t(
            "Newton toward the centre — connector force + gravity's radial part",
            "Newton centre ki taraf — connector force + gravity ka radial hissa"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={404} size={14} fill={GREEN} script anchor="start">
          {t(
            "energy conservation between two points — that's the entire method",
            "do points ke beech energy conservation — bas yahi poori vidhi"
          )}
        </T>
      </Fade>

      {/* beat 8 — memory aids */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 430 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "'top needs √gr, bottom needs √5gr — tension differs by 6mg'",
            "'top ko √gr, bottom ko √5gr — tension mein fark 6mg'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={476} size={14} fill={RED} script anchor="start">
          {t(
            "'curved surfaces: it lets go when the push hits zero'",
            "'curved surfaces: chhodta hai jab dhakka zero ho jaaye'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
