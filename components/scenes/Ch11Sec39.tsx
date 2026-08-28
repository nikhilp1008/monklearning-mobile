/**
 * Ch11 · Section 39 — "The second law is a law about direction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 39 not yet uploaded, verify-scene.mjs could
 * not be run. First section of the Second Law subtopic. Re-run once
 * audio lands.
 *
 * Beats (8): 0 hook (coffee never spontaneously heats) · 1 three
 *  one-way examples (heat/ink/pendulum) · 2 "one-wayness" named ·
 *  3 direction, not amounts · 4 deck-shuffle: 1 order, many disorders ·
 *  5 nature drifts to more-probable · 6 bookkeeping ⇒ entropy (next
 *  subtopic) · 7 nuance: statistical, not certain.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 25, red)   | T mid | x265..815 y37..77 (bl 64)
 *  b0 | hook (12,script)    | T mid | x540 y96
 *  b1 | 3 chips (h30)       | Chip  | x100/400/700 y140..170 w280
 *  b2 | line (13)           | T mid | x540 y185
 *  b3 | line (12,script)    | T mid | x540 y210
 *  b4 | ordered box(h40)    | Draw  | x350..410 y245..285
 *  b4 | 4 shuffled rects    | Draw  | x480..580 y235..298
 *  b4 | labels (11)         | T mid | x380/520 y300
 *  b5 | line (13,w700)      | T mid | x540 y330
 *  b6 | entropy chip (h32)  | Chip  | x340..740 y365..397
 *  b7 | nuance (11,script)  | T mid | x540 y415
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("the second law is a law about direction", "second law direction ka law hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("energy is conserved either way — but coffee never spontaneously heats up", "energy dono taraf conserve — par coffee khud garam nahi hoti")}
        </T>
      </Fade>

      {/* beat 1 — three one-way examples */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={100} y={140} w={280} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("heat: hot→cold (never reverse)", "heat: hot→cold (kabhi reverse nahi)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={400} y={140} w={280} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("ink: spreads (never regroups)", "ink: failti hai (kabhi wapas nahi)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={700} y={140} w={280} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("pendulum: slows (never speeds up)", "pendulum: slow hota (kabhi fast nahi)")}
        </Chip>
      </Fade>

      {/* beat 2 — one-wayness named */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={185} size={13} fill={INK} weight={700} script={false}>
          {t("the second law names this ONE-WAYNESS", "second law is ONE-WAYNESS ko naam deta hai")}
        </T>
      </Fade>

      {/* beat 3 — direction, not amounts */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={210} size={12} fill={MUTED} script>
          {t("direction, not amounts — something forbids the reverse", "direction, amounts nahi — reverse mana hai")}
        </T>
      </Fade>

      {/* beat 4 — the shuffled deck */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 350 245 h 60 v 40 h -60 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Line x1={360} y1={255} x2={400} y2={255} stroke={MUTED} strokeWidth={1.4} />
        <Line x1={360} y1={265} x2={400} y2={265} stroke={MUTED} strokeWidth={1.4} />
        <Line x1={360} y1={275} x2={400} y2={275} stroke={MUTED} strokeWidth={1.4} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d={arrowD(415, 265, 455, 265)} stroke={AMBER} sw={2.2} dur={0.4} />
      {[[480, 240], [510, 260], [540, 235], [560, 270]].map(([x, y], i) => (
        <Draw key={i} on={beat >= 4} delay={dl(4, 1.3 + i * 0.15)} d={`M ${x} ${y} h 20 v 28 h -20 z`} stroke={INK} sw={1.6} dur={0.4} fill={MUTED} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={380} y={300} size={11} fill={MUTED} script={false}>
          {t("1 order", "1 order")}
        </T>
        <T x={520} y={300} size={11} fill={MUTED} script={false}>
          {t("many disorders", "kayi disorders")}
        </T>
      </Fade>

      {/* beat 5 — drifts to more probable */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={330} size={13} fill={INK} weight={700} script={false}>
          {t("nature drifts toward the MORE PROBABLE state", "nature MORE PROBABLE state ki taraf jaata hai")}
        </T>
      </Fade>

      {/* beat 6 — bookkeeping of the drift */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={340} y={365} w={400} h={32} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("bookkeeping of that drift ⇒ ENTROPY (next)", "us drift ki bookkeeping ⇒ ENTROPY (aage)")}
        </Chip>
      </Fade>

      {/* beat 7 — the nuance */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={415} size={11} fill={MUTED} script>
          {t("statistical, not certain — astronomical odds, macroscopic systems", "statistical, certain nahi — astronomical odds, macroscopic systems")}
        </T>
      </Fade>
    </Scene>
  );
}
