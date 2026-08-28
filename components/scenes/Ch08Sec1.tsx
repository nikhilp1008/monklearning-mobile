/**
 * Ch08 · Section 1 — "What 'elastic' really means: the steel-beats-rubber trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.89, 24.23, 39.0, 53.16, 67.58, 68.58]):
 *  0 spring icon + green tick "springs back" — the intro property
 *  1 definition quote (script, green) + drawn underline
 *  2 clay blob (already squished) + "stays bent ✗" — the plasticity contrast
 *  3 THE DEMO: rail + dashed natural-length ref + steel wire (small stretch)
 *    vs rubber wire (huge stretch), both loaded with the same W
 *  4 green check beside "steel: barely moves" — the physics verdict
 *  5 red margin-bar TRAP note (short beat, ~1s en / ~8s hi)
 *  6 closing definition line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64 (box ≈263..817 y33..76)
 *  b0 | spring zigzag        | Draw | x150..350 y152..188
 *  b0 | check mark           | Draw | x370..402 y148..178
 *  b0 | "springs back" (16)  | T st | x440..554 bl176 (y155..184)
 *  b1 | quote (script 18)    | T mid| x599..1025 bl150 (y127..159)
 *  b1 | underline            | Draw | x700..925 y171..179
 *  b2 | clay blob            | Draw | x720..820 y188..218
 *  b2 | "clay / dough" (13)  | T mid| x727..813 bl246 (y229..252)
 *  b2 | "stays bent ✗" (13)  | T st | x834..941 bl207 (y190..214)
 *  b3 | rail                 | Draw | x250..830 y273..277
 *  b3 | dashed natural-len   | line | x340..720 y330
 *  b3 | "natural length"(12) | T mid| x484..576 bl312 (y296..318)
 *  b3 | steel wire           | Draw | x380 y275..339
 *  b3 | steel weight "W"     | Chip | x363..397 y339..363
 *  b3 | steel label (13)     | T mid| x294..466 bl392 (y375..399)
 *  b3 | rubber wire (zigzag) | Draw | x667..693 y275..410
 *  b3 | rubber weight "W"    | Chip | x663..697 y409..433
 *  b3 | rubber label (13)    | T mid| x583..777 bl462 (y445..469)
 *  b4 | green check          | Draw | x480..499 y377..399
 *  b5 | margin bar           | Draw | x60 y488..519
 *  b5 | TRAP text (17)       | T st | x76..~460 bl510 (y488..519)
 *  b6 | closing line (16)    | T mid| x245..835 bl558 (y537..566)
 */

import React from "react";
import { Line } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("elasticity — the tendency to spring back", "elasticity — wapas spring hone ka gun")}
        </T>
      </Fade>

      {/* beat 0 — a spring: the property we're watching */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.4)}
        d="M150 170 L175 152 L200 188 L225 152 L250 188 L275 152 L300 188 L325 152 L350 170"
        stroke={INK}
        sw={2.6}
        dur={1.2}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.2)}
        d="M370 168 L380 178 L402 148"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <T x={440} y={176} size={16} fill={GREEN} script anchor="start">
          {t("springs back", "wapas spring")}
        </T>
      </Fade>

      {/* beat 1 — the clean definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={812} y={150} size={18} fill={GREEN} script>
          {t(
            "shape & size snap back — instantly",
            "shape & size turant wapas — force hate hi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d="M700 175 C 750 171, 875 179, 925 174"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 2 — the opposite: plasticity (clay stays bent) */}
      <Fade on={beat >= 2} delay={0}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.4)}
          d="M720 205 Q730 188 770 191 Q810 188 820 205 Q812 218 770 216 Q728 219 720 205 Z"
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.8}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={770} y={246} size={13} fill={MUTED} script>
          {t("clay / dough", "clay / atta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={834} y={207} size={13} fill={RED} script anchor="start">
          {t("stays bent ✗", "waisa hi raha ✗")}
        </T>
      </Fade>

      {/* beat 3 — THE DEMO: same load, opposite lesson */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M250 275 H830" stroke={INK} sw={3.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Line x1={340} y1={330} x2={720} y2={330} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 6" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={530} y={312} size={12} fill={MUTED} script>
          {t("natural length", "natural length")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d="M380 275 L380 339" stroke={INK} sw={3.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <Chip x={363} y={339} w={34} h={24} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          W
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={380} y={392} size={13} fill={INK} script>
          {t("steel: barely moves", "steel: mushkil se hilta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.6)}
        d="M680 275 L693 302 L667 329 L693 356 L667 383 L680 410"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1.0}
      />
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <Chip x={663} y={409} w={34} h={24} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          W
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.8)}>
        <T x={680} y={462} size={13} fill={RED} script>
          {t("rubber: stretches a LOT", "rubber: bahut khinchta hai")}
        </T>
      </Fade>

      {/* beat 4 — the verdict: steel resists more, returns more faithfully */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M480 392 L486 399 L499 377"
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />

      {/* beat 5 — the trap (short beat) */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M60 488 L60 519" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={76} y={510} size={17} fill={RED} script anchor="start">
          {t('TRAP: "stretches more" ≠ "more elastic"', 'TRAP: "zyada kheenchta" ≠ "zyada elastic"')}
        </T>
      </Fade>

      {/* beat 6 — closing definition */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={558} size={16} fill={GREEN} script>
          {t(
            "elasticity = strength of restoring tendency, not size of stretch",
            "elasticity = restoring tendency ki strength, stretch ka size nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
