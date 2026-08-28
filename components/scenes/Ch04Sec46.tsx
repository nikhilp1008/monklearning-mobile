/**
 * Ch04 · Section 46 — "Pitfalls and pro-tips: Friction"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.5, 40.4, 65.2, 89.9, 114.8, 122.0, 143.0, 164.3]):
 *  0 title
 *  1 pitfall 1: μN unconditionally
 *  2 pitfall 2: skipping does-it-move on inclines
 *  3 pitfall 3: friction depends on area (false)
 *  4 pitfall 4: friction always opposes motion (false — walking, tyres)
 *  5 pro-tip heading
 *  6 shortcut: 'just begins to slide' → μs = tanθ
 *  7 habit: compare tanθ vs μ first, every incline question
 *  8 red margin: two memory aids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 chip x84..130 y82..112 hdr st x150 bl 103 · det bl 131
 *  p2 chip y156..186 hdr bl 177 · det bl 205
 *  p3 chip y230..260 hdr bl 251 · det bl 279
 *  p4 chip y304..334 hdr bl 325 · det bl 353
 *  b5 head cx540 bl 395 · b6 st x84 bl 425 / 449 · b7 st x84 bl 480 / 504
 *  b8 | bar x66 y525..585 · lines st x84 bl 545 / 571
 */

import React from "react";
import { G } from 'react-native-svg';
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

export default function Ch04Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (k: number, y: number, n: string, header: string, det: string, detFill: string, detDelay: number) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 0.6)}>
        <Chip x={84} y={y} w={46} h={30} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {n}
        </Chip>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 1.4)}>
        <T x={150} y={y + 21} size={15} fill={RED} script anchor="start">
          {header}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, detDelay)}>
        <T x={150} y={y + 49} size={13} fill={detFill} script anchor="start">
          {det}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "the minefield — four ways friction questions are lost",
            "baaroodi surang — friction sawaal gawaane ke 4 raaste"
          )}
        </T>
      </Fade>

      {pit(
        1,
        82,
        "✗ 1",
        t(
          "writing friction = μN unconditionally",
          "bina shart friction = μN likh dena"
        ),
        t(
          "μs·N only AT THE VERGE — compute the limit FIRST, compare, then decide",
          "μs·N sirf KAGAR par — pehle limit nikaalo, tulna karo, phir tay karo"
        ),
        RED,
        9
      )}

      {pit(
        2,
        156,
        "✗ 2",
        t(
          "skipping the 'does it move?' check on inclines",
          "incline par 'hilta hai?' ka check chhod dena"
        ),
        t(
          "tanθ ≤ μs → stays put — else a = g(sinθ−μkcosθ) gives a fake acceleration",
          "tanθ ≤ μs → wahin tika rehta — warna a = g(sinθ−μkcosθ) jhoota acceleration deta"
        ),
        RED,
        9
      )}

      {pit(
        3,
        230,
        "✗ 3",
        t(
          "believing friction depends on contact area",
          "maanna ki friction contact area par nirbhar hai"
        ),
        t(
          "it does not — a brick on its wide or narrow face feels the SAME limiting friction",
          "nahi hai — eent chaudi ho ya patli satah par, limiting friction SAME rehti hai"
        ),
        RED,
        11
      )}

      {pit(
        4,
        304,
        "✗ 4",
        t(
          "thinking friction always opposes MOTION",
          "sochna friction hamesha MOTION ka virodh karti hai"
        ),
        t(
          "it opposes relative SLIDING — static friction is what makes you walk, drives tyres",
          "wo relative SLIDING ka virodh karti hai — static friction hi chalati hai, tyres chalati hai"
        ),
        GREEN,
        10
      )}

      {/* beat 5 — pro-tip heading */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={395} size={16} fill={AMBER_DARK} script>
          {t(
            "pro-tip: the angle of repose shortcut",
            "pro-tip: angle of repose ka shortcut"
          )}
        </T>
      </Fade>

      {/* beat 6 — the shortcut */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={425} size={14} fill={INK} script anchor="start">
          {t(
            "'just begins to slide at angle θ' → instantly write μs = tanθ",
            "'θ angle par sarakna shuru karta hai' → turant likho μs = tanθ"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={449} size={13} fill={GREEN} script anchor="start">
          {t(
            "no resolution, no components, no mass — the wording IS the angle of repose",
            "na resolution, na components, na mass — wording hi angle of repose hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the three-second habit */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={480} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "on ANY incline question: first line compares tanθ with μ",
            "KISI bhi incline sawaal mein: pehli line tanθ ki μ se tulna kare"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={504} size={13} fill={GREEN} script anchor="start">
          {t(
            "three seconds — tells you static or kinetic, and which formula you may use",
            "teen second — batata hai static ya kinetic, aur kaunsa formula chalega"
          )}
        </T>
      </Fade>

      {/* beat 8 — memory aids */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 525 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={545} size={14} fill={RED} script anchor="start">
          {t(
            "'static is shy and self-adjusting; kinetic is constant and a little weaker'",
            "'static sharmeeli aur self-adjusting; kinetic sthir aur zara kamzor'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={571} size={14} fill={RED} script anchor="start">
          {t(
            "'repose = friction = arctan μ'",
            "'repose = friction = arctan μ'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
