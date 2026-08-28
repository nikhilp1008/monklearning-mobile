/**
 * Ch04 · Section 47 — "Constant speed, and yet accelerating every instant"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 49.7, 67.1, 91.9, 112.6, 135.6]):
 *  0 title
 *  1 circle with a body, velocity tangent arrows at three points (constant length)
 *  2 vector-changes note (right col)
 *  3 acceleration arrow (inward) + a_c formula + perpendicular note
 *  4 hero box: F_c = mv²/r
 *  5 red margin: not a new force — a role, a job title
 *  6 green chip: the method (find the real inward force, set = mv²/r)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  circle c(280,230) r100 · dot at top(280,130) right(380,230) bottom(280,330) ·
 *    v arrows tangent: top→(365,130) right→(380,315) bottom→(195,330) len~85
 *    "v"(377,120)/(390,327)/(165,327)
 *  b2 | st x560 bl 110 / 134 / 158
 *  b3 | a arrow (380,230)→(300,230) "a_c"(320,212) · formula st x560 bl 200 ·
 *    perp note st x560 bl 234
 *  b4 box x560..896 y260..312 bl 294
 *  b5 | bar x66 y378..448 · lines st x84 bl 398 / 424
 *  b6 | chip x140..940 y480..524
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "the surprising truth at the heart of circular motion",
            "circular motion ke dil mein chhupi hairaan karne waali sachchai"
          )}
        </T>
      </Fade>

      {/* beat 1 — velocity tangent, same length everywhere */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={circleD(280, 230, 100)}
        stroke={INK}
        sw={2.4}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d={`${circleD(280, 130, 4)} ${circleD(380, 230, 4)} ${circleD(280, 330, 4)}`}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(280, 130, 365, 130)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d={arrowD(380, 230, 380, 315)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.8)}
        d={arrowD(280, 330, 195, 330)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={377} y={120} size={13} fill={GREEN} weight={700} anchor="start">
          v
        </T>
        <T x={390} y={327} size={13} fill={GREEN} weight={700} anchor="start">
          v
        </T>
        <T x={165} y={327} size={13} fill={GREEN} weight={700} anchor="start">
          v
        </T>
      </Fade>

      {/* beat 2 — direction changes = velocity changes */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={560} y={110} size={13} fill={INK} script anchor="start">
          {t("same SIZE, everywhere on this circle —", "har jagah SAME SIZE —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={560} y={134} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "but the DIRECTION turns, every instant",
            "par DIRECTION har pal ghoomti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={560} y={158} size={13} fill={RED} script anchor="start">
          {t(
            "v is a vector — changing direction IS acceleration",
            "v ek vector hai — direction badalna hi acceleration hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the inward acceleration */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(380, 230, 300, 230)}
        stroke={RED}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={335} y={212} size={12} fill={RED} weight={700}>
          a_c
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={560} y={200} size={16} fill={INK} weight={700} anchor="start">
          a_c = v²⁄r = ω²r
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={560} y={234} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "v ⊥ a — that is why the SPEED never changes",
            "v ⊥ a — isiliye SPEED kabhi nahi badalti"
          )}
        </T>
      </Fade>

      {/* beat 4 — Newton demands a force */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 572 260 h 336 q 12 0 12 12 v 28 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={740} y={294} size={19} fill={INK} weight={800}>
          F_c = mv²⁄r — net INWARD
        </T>
      </Fade>

      {/* beat 5 — not a new force */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 378 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={398} size={14} fill={RED} script anchor="start">
          {t(
            "centripetal is NOT a new force — you never add it beside gravity, friction",
            "centripetal NAYI force nahi — ise gravity, friction ke saath JODTE nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={424} size={14} fill={GREEN} script anchor="start">
          {t(
            "it is a NAME — the job title for whichever real force points inward",
            "ye ek NAAM hai — jo bhi real force andar ishaara kare, uski pehchaan"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whole method */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={140} y={480} w={800} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t(
            "find the real inward force — friction, tension, gravity, normal — set it = mv²⁄r",
            "asli inward force dhoondo — friction, tension, gravity, normal — use mv²⁄r ke barabar rakho"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
