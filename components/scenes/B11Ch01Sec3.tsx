/**
 * B11 Ch01 · Section 3 — "Reproduction fails: the all-inclusive gap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.1, 19.45, 39.78, 52.53, 75.43, 96.91]):
 *  0 title + drawn underline · yeast/fish/mammal hook [dim@1]
 *  1 3 counter-example chips (mule / sterile worker bee / infertile couple —
 *    all ALIVE, none reproduces)
 *  2 gate-two logic: one living thing lacking it is enough + cross icon [dim@3]
 *  3 teaser: a beautiful special case worth seeing + curved arrow down [dim@4]
 *  4 DIAGRAM: unicellular organism — 1 cell divides → 2 daughters → both a
 *    GROWTH arrow and a REPRODUCTION arrow, "SAME event, two names"
 *  5 formal definition: progeny ≈ parents, asexual or sexual
 *  6 verdict: REPRODUCTION chip crossed out + "still a real characteristic"
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script25 red)        | T mid  | x?..?  y30..77  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y90  x340..740
 *  b0 | hook (script18 muted)       | T mid  | x?..?  y107..139 (bl130) [dim@1]
 *  b1 | 3 chips (script13)          | Chip   | y176..208  x184/440/661
 *  b2 | cross icon                  | Draw   | x40..62 y172..194 [dim@3]
 *  b2 | statement (script15 red)    | T st   | x68..?  y173..201 (bl193) [dim@3]
 *  b3 | teaser (script17 green)     | T mid  | x?..?  y206..236 (bl230) [dim@4]
 *  b3 | curved arrow down           | Draw   | (540,246)→(540,266) [dim@4]
 *  b4 | header (16 ink)             | T mid  | x?..?  y275..293 (bl288)
 *  b4 | "1 cell" circle (ink)       | Draw   | c(250,370) r42
 *  b4 | arrow → daughters           | Draw   | (300,370)→(417,370)
 *  b4 | "divides" (12 amber-d)      | T mid  | x?..?  y349..361 (bl357)
 *  b4 | 2 daughter circles (ink)    | Draw   | c(450,330) r28 · c(450,410) r28
 *  b4 | arrow → GROWTH chip         | Draw   | (483,328)→(595,326)
 *  b4 | GROWTH chip (green)         | Chip   | x600..790  y302..350
 *  b4 | arrow → REPRODUCTION chip   | Draw   | (483,412)→(595,418)
 *  b4 | REPRODUCTION chip (amber-d) | Chip   | x600..810  y394..442
 *  b4 | caption (script15 ink)      | T mid  | x?..?  y443..470 (bl462)
 *  b5 | definition (script15 ink)   | T mid  | x190..890 y486..513 (bl505)
 *  b5 | underline                   | Draw   | y518  x350..730
 *  b6 | "REPRODUCTION — REJECTED ✗" | Chip   | x360..720  y535..563
 *  b6 | cross-out over chip         | Draw   | x360 y535 w360 h28
 *  b6 | aside (script13 green)      | T mid  | x361..719 y565..589 (bl582)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const EXAMPLES: [number, number, string, string][] = [
  [184, 240, "mule — alive, no young", "mule — alive hai, bachhe nahi"],
  [440, 205, "worker bee — sterile", "worker bee — sterile hai"],
  [661, 235, "infertile couple — alive", "infertile couple — alive hai"],
];

export default function B11Ch01Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("Candidate 2 — REPRODUCTION: unbeatable?", "Candidate 2 — REPRODUCTION: na-harne wali?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 340 90 C 440 86, 640 86, 740 90" stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3)}>
        <T x={540} y={130} size={18} fill={MUTED} script>
          {t(
            "yeast buds, fish spawns, mammal gives birth…",
            "yeast buds karta hai, fish spawn karti hai, mammal janam deta hai…"
          )}
        </T>
      </Fade>

      {/* beat 1 — alive, yet never reproduces */}
      {EXAMPLES.map(([x, w, e2, h2], i) => (
        <Fade key={e2} on={beat >= 1} dim={beat >= 2} delay={dl(1, 0.3 + i * 0.6)}>
          <Chip x={x} y={176} w={w} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script>
            {t(e2, h2)}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — gate two: one exception is enough */}
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 0.3)}>
        <Draw on={true} d={crossD(44, 176, 14, 14)} stroke={RED} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 1)}>
        <T x={68} y={193} size={15} fill={RED} script anchor="start">
          {t(
            "gate two: ONE living thing without it is enough — not all-inclusive",
            "gate two: SIRF ek living thing bina isके — not all-inclusive"
          )}
        </T>
      </Fade>

      {/* beat 3 — teaser into the special case */}
      <Fade on={beat >= 3} dim={beat >= 4} delay={dl(3, 0.3)}>
        <T x={540} y={230} size={17} fill={GREEN} script>
          {t("there's a beautiful special case, worth seeing…", "ek khoobsurat special case hai, dekhne layak…")}
        </T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 4} delay={dl(3, 1.6)}>
        <Draw on={true} d={arrowD(540, 246, 540, 266)} stroke={GREEN} sw={2.2} dur={0.4} />
      </Fade>

      {/* beat 4 — THE DEMO: one cell division, two names for one event */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={288} size={16} fill={INK} weight={700}>
          {t("in a UNICELLULAR organism:", "ek UNICELLULAR organism mein:")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 208 370 a 42 42 0 1 0 84 0 a 42 42 0 1 0 -84 0" stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={250} y={374} size={13} fill={INK} script={false}>
          1 cell
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={arrowD(300, 370, 417, 370)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={358} y={357} size={12} fill={AMBER_DARK} script={false}>
          {t("divides", "divides")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d="M 422 330 a 28 28 0 1 0 56 0 a 28 28 0 1 0 -56 0" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 3.9)} d="M 422 410 a 28 28 0 1 0 56 0 a 28 28 0 1 0 -56 0" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.6)} d={arrowD(483, 328, 595, 326)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <Chip x={600} y={302} w={190} h={48} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("GROWTH (number ↑)", "GROWTH (number ↑)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6)} d={arrowD(483, 412, 595, 418)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <Chip x={600} y={394} w={210} h={48} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("REPRODUCTION (new copies)", "REPRODUCTION (naye copies)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={540} y={462} size={15} fill={INK} script>
          {t("SAME event, two names", "same event, do naam")}
        </T>
      </Fade>

      {/* beat 5 — the formal definition */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={505} size={15} fill={INK} script>
          {t(
            "reproduction = progeny ≈ parents — asexual (budding, fragmentation, spore) or sexual",
            "reproduction = progeny ≈ parents jaisi — asexual (budding, fragmentation, spore) ya sexual"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d="M 350 518 C 420 515, 660 515, 730 518" stroke={INK} sw={1.8} dur={0.5} />

      {/* beat 6 — verdict: rejected, but still a real characteristic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={360} y={535} w={360} h={28} fill={INK} textFill={CREAM} size={15} script={false}>
          REPRODUCTION — REJECTED ✗
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={crossD(360, 535, 360, 28)} stroke={RED} sw={3} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={540} y={582} size={13} fill={GREEN} script>
          {t(
            "(still a real characteristic — just not DEFINING)",
            "(phir bhi ek genuine characteristic — bas DEFINING nahi)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
