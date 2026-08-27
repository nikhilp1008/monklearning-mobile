/**
 * Ch04 · Section 37 — "Why friction exists at all, and what the laws quietly assume"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.8, 20.0, 43.8, 68.6, 87.6, 112.5, 137.3]):
 *  0 title
 *  1 flat-looking block + zoom arrow
 *  2 zoom panel: interlocking jagged surfaces + weld dots + caption
 *  3 shear-the-welds consequence lines
 *  4 μ = f/N box + grip-rating note
 *  5 red margin: both surfaces, never mass/area, brick
 *  6 red margin: empirical honesty
 *  7 fine-print lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  b1 | block x100..190 y100..140 · floor M80 140 H240 · "looks flat" cx160 bl 165 ·
 *    zoom arr (250,120)→(330,120) "zoom" cx290 bl 105
 *  b2 | panel x350..640 y80..200 · jags y~120 & y~150 · weld dots ·
 *    caption cx495 bl 225
 *  b3 | st x84 bl 265 / 289
 *  b4 | box x120..400 y315..363 bl 347 · note st x430 bl 347
 *  b5 | bar x66 y395..455 · lines st x84 bl 415 / 441
 *  b6 | bar x66 y480..532 · lines st x84 bl 500 / 524
 *  b7 | st x84 bl 558 / 580
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "under a microscope, nothing is smooth",
            "microscope ke neeche, kuchh bhi smooth nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — looks flat */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 100 100 h 90 v 40 h -90 z M 80 140 H 240"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={160} y={165} size={11} fill={MUTED} script>
          {t("both look perfectly flat", "dono bilkul sapat dikhte hain")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d={arrowD(250, 120, 330, 120)}
        stroke={MUTED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={290} y={105} size={11} fill={MUTED} script>
          {t("zoom, hard", "zoom, zor se")}
        </T>
      </Fade>

      {/* beat 2 — the rugged truth */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 362 80 h 266 q 12 0 12 12 v 96 q 0 12 -12 12 h -266 q -12 0 -12 -12 v -96 q 0 -12 12 -12"
        stroke={MUTED}
        sw={2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 372 118 l 24 20 l 24 -16 l 24 18 l 24 -14 l 24 17 l 24 -15 l 24 16 l 24 -12 l 24 14"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d="M 372 152 l 24 -16 l 24 18 l 24 -14 l 24 16 l 24 -17 l 24 15 l 24 -14 l 24 16 l 24 -14"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Circle cx={420} cy={136} r={3} fill={RED} />
        <Circle cx={492} cy={138} r={3} fill={RED} />
        <Circle cx={564} cy={136} r={3} fill={RED} />
        <Circle cx={612} cy={140} r={3} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={495} y={225} size={13} fill={AMBER_DARK} script>
          {t(
            "only the peaks touch — they interlock and weakly WELD",
            "sirf chotiyan chhooti hain — phansti hain aur halka WELD ho jaati hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — shear the welds */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={84} y={265} size={13} fill={INK} script anchor="start">
          {t(
            "sliding = SHEARING all those micro-welds — that is why friction exists",
            "sarakna = un saare micro-welds ko TODNA — isiliye friction hoti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={84} y={289} size={13} fill={GREEN} script anchor="start">
          {t(
            "press harder → more welds → more friction: it tracks N, not apparent size",
            "zor se dabao → zyada welds → zyada friction: ye N par chalti hai, size par nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the grip rating */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 132 315 h 256 q 12 0 12 12 v 24 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={260} y={347} size={16} fill={INK} weight={800}>
          μ = f⁄N — dimensionless
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={430} y={347} size={12} fill={GREEN} script anchor="start">
          {t(
            "a grip rating for a PAIR of surfaces",
            "do surfaces ki JODI ka grip rating"
          )}
        </T>
      </Fade>

      {/* beat 5 — what it depends on */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 395 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={415} size={14} fill={RED} script anchor="start">
          {t(
            "μ depends on the NATURE of BOTH surfaces — never mass, never apparent area",
            "μ DONO surfaces ki prakriti par — mass par kabhi nahi, area par bhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={84} y={441} size={14} fill={RED} script anchor="start">
          {t(
            "broad face or narrow edge: same brick, same N, same limiting friction",
            "chaudi satah ya patli dhaar: wahi eent, wahi N, wahi limiting friction"
          )}
        </T>
      </Fade>

      {/* beat 6 — empirical honesty */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 480 v 52" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "honesty: f_s ≤ μs·N and f_k = μk·N are EMPIRICAL — superb for dry surfaces",
            "imaandaari: f_s ≤ μs·N aur f_k = μk·N EMPIRICAL hain — sookhi surfaces par behtareen"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={84} y={524} size={14} fill={RED} script anchor="start">
          {t(
            "not exact laws of nature like Newton's — real friction is messy chemistry",
            "Newton ke laws jaise sateek niyam nahi — asli friction uljhi chemistry hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the fine print */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={558} size={13} fill={MUTED} script anchor="start">
          {t(
            "area- and speed-independence: also approximations (racing tyres are wide!)",
            "area- aur speed-independence: ye bhi approximations (racing tyres chaude hote hain!)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={580} size={13} fill={GREEN} script anchor="start">
          {t(
            "'smooth' simply means μ = 0 — an idealisation no real surface quite reaches",
            "'smooth' ka matlab bas μ = 0 — ek aadarsh jahan koi asli surface poora pahunchta nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
