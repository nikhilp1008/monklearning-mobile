/**
 * Ch11 · Section 13 — "This lives entirely on U being a state function"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 13 not yet uploaded, verify-scene.mjs could
 * not be run (blocks on the <audio> element). Geometry closely mirrors the
 * already-PASS-verified Sec10/Sec6 patterns. Re-run verify once audio lands.
 *
 * Beats (7): 0 hook · 1 A→B two paths given · 2 task: find Q on path 2 ·
 *  3 ΔU from path 1 = +80J · 4 state fn ⇒ same ΔU on path 2 · 5 solve
 *  Q₂=+140J · 6 verdict: difference stayed pinned at 80J.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)   | T mid | x232..848 y33..77 (bl 64)
 *  b0 | hook (13,script)    | T mid | x540 y98
 *  b1 | A,B points r7       | Draw  | c(250,200)/(650,200)
 *  b1 | path1 (amber)       | Draw  | M250,200 Q450,140 650,200
 *  b1 | path1 label (13)    | T mid | x450 y128
 *  b1 | path2 (green)       | Draw  | M250,200 Q450,260 650,200
 *  b1 | path2 label (13)    | T mid | x450 y290
 *  b1 | "A"/"B" (15,w800)   | T mid | x250/650 y225
 *  b2 | task (14,script)    | T mid | x540 y330
 *  b3 | line (14)           | T mid | x540 y365
 *  b3 | stamp chip (h30)    | Chip  | x450..630 y385..415
 *  b4 | callout chip (h32)  | Chip  | x290..790 y425..457
 *  b5 | line (14)           | T mid | x540 y480
 *  b5 | stamp chip (h32)    | Chip  | x400..680 y500..532
 *  b6 | verdict (14,script) | T mid | x540 y555
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("this lives entirely on U being a state function", "yeh sab U ke state function hone par tika hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("learn the move once, reuse it everywhere", "yeh move ek baar seekho, hamesha use karo")}
        </T>
      </Fade>

      {/* beat 1 — two paths, same endpoints */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 250 200 Q 450 140, 650 200" stroke={AMBER} sw={2.4} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 250 200 Q 450 260, 650 200" stroke={GREEN} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={250} cy={200} r={7} fill={CREAM} stroke={INK} strokeWidth={2} />
        <Circle cx={650} cy={200} r={7} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={250} y={225} size={15} fill={INK} weight={800} script={false}>
          A
        </T>
        <T x={650} y={225} size={15} fill={INK} weight={800} script={false}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={450} y={128} size={13} fill={AMBER_DARK} script={false}>
          {t("path 1: Q=200J, W=120J", "path 1: Q=200J, W=120J")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={450} y={290} size={13} fill={GREEN} script={false}>
          {t("path 2: W=60J, Q=?", "path 2: W=60J, Q=?")}
        </T>
      </Fade>

      {/* beat 2 — the task */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={330} size={14} fill={MUTED} script>
          {t("find: Q on path 2 — absorbed or released?", "find karo: path 2 par Q — absorbed ya released?")}
        </T>
      </Fade>

      {/* beat 3 — ΔU from the fully-known path */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={365} size={14} fill={INK} script={false}>
          ΔU (path 1) = 200 − 120
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={450} y={385} w={180} h={30} fill={INK} textFill={CREAM} size={16} script={false}>
          ΔU_AB = +80 J
        </Chip>
      </Fade>

      {/* beat 4 — state function ⇒ reuse it */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={290} y={425} w={500} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("U is a state function ⇒ same ΔU on path 2!", "U state function hai ⇒ path 2 par bhi same ΔU!")}
        </Chip>
      </Fade>

      {/* beat 5 — solve for Q on path 2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={480} size={14} fill={INK} script={false}>
          Q₂ = ΔU + W₂ = 80 + 60
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={400} y={500} w={280} h={32} fill={INK} textFill={CREAM} size={16} script={false}>
          Q₂ = +140 J ({t("absorbed", "absorbed")})
        </Chip>
      </Fade>

      {/* beat 6 — the insight */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={555} size={14} fill={AMBER_DARK} script>
          {t("both transfers shrank — ΔU stayed pinned at 80 J", "dono transfers ghate — ΔU 80 J par pinned raha")}
        </T>
      </Fade>
    </Scene>
  );
}
