/**
 * Ch14 · Section 18 — "Common pitfalls and pro-tips" (subtopic 2 recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.36, 19.75, 31.47, 41.51, 48.88, 59.92, 73.98]):
 *  0 framing: 4 traps to seal this subtopic + one clean question
 *  1 TRAP 1: f_beat = FULL difference (½ is just the envelope)
 *  2 TRAP 2: wax LOWERS f, filing RAISES f
 *  3 TRAP 3 header: coherent sources → keep the interference term
 *  4 TRAP 3 detail: only incoherent sources let intensities just add
 *  5 TRAP 4: beats (time throb) ≠ interference (space pattern)
 *  6 PRO-TIP: fork toward/away from standard? → match beats down/up
 *  7 closing: ten-second confirmations, no more fiddly ± reasoning
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (14,muted)            | T mid | x540 bl110            y99..114
 *  b0 | underline                     | Draw  | x400..680 y120
 *  b1 | warning triangle              | Draw  | x60..74 y273..288
 *  b1 | TRAP1 chip (h34)              | Chip  | x90..550 y285..319
 *  b2 | TRAP2 chip (h40)              | Chip  | x560..1020 y285..325
 *  b3 | TRAP3 header chip (h40)       | Chip  | x60..520 y375..415
 *  b4 | TRAP3 detail (12.5)           | T st  | x60 bl438             y428..442
 *  b5 | TRAP4 chip (h40)              | Chip  | x560..1020 y375..415
 *  b6 | star                         | Draw  | x160..174 y455..470
 *  b6 | PRO-TIP chip (h48,s14)        | Chip  | x150..930 y445..493
 *  b7 | closing (14,green)            | T mid | x540 bl530            y512..534
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("common pitfalls and pro-tips", "common pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 0 — framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={14} fill={MUTED} script>
          {t(
            "4 traps to seal this subtopic + one clean question",
            "4 traps is subtopic ko seal karne — plus ek saaf sawaal"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 400 120 L 680 120" stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — TRAP 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 67 273 L 60 288 L 74 288 Z" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={90} y={285} w={460} h={34} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 1: f_beat = FULL difference (½ is just the envelope)", "TRAP 1: f_beat = FULL difference (½ toh sirf envelope hai)")}
        </Chip>
      </Fade>

      {/* beat 2 — TRAP 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={560} y={285} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 2: wax LOWERS f, filing RAISES f", "TRAP 2: wax f GHATAYE, filing f BADHAYE")}
        </Chip>
      </Fade>

      {/* beat 3 — TRAP 3 header */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={60} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 3: coherent sources → KEEP the interference term!", "TRAP 3: coherent sources → interference term RAKHO!")}
        </Chip>
      </Fade>

      {/* beat 4 — TRAP 3 detail */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={438} size={12.5} fill={INK} anchor="start">
          {t(
            "(only incoherent sources let intensities just add)",
            "(sirf incoherent sources mein intensities add hoti)"
          )}
        </T>
      </Fade>

      {/* beat 5 — TRAP 4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={560} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 4: beats (time throb) ≠ interference (space pattern)", "TRAP 4: beats (time throb) ≠ interference (space pattern)")}
        </Chip>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 167 455 l 2.5 7.5 h 8 l -6.5 5 l 2.5 7.5 l -6.5 -5 l -6.5 5 l 2.5 -7.5 l -6.5 -5 h 8 z" stroke={AMBER} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={150} y={445} w={780} h={48} fill="#fff" stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "PRO-TIP: fork toward/away from standard? → match to beats down/up",
            "PRO-TIP: fork standard ki taraf ya door? → beats down/up se match"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={530} size={14} fill={GREEN} script>
          {t(
            "→ ten-second confirmations, no more fiddly ± reasoning!",
            "→ ten-second confirmations, fiddly ± reasoning khatam!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
