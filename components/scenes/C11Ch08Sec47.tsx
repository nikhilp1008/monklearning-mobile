/**
 * C11 Ch08 · Section 47 — "Worked example — read a Lassaigne colour (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.83, 15.19, 21.93, 33.88, 39.59, 56.75, 65.62]):
 *  0 title (always-on, seq1) · 1 task · 2 blood-red+Fe3+ → thiocyanate · 3 SCN⁻
 *  forms only when N+S both present · 4 answer: both N and S (boxed) · 5 red
 *  trap (red ≠ N alone) · 6 blue/blood-red swatch comparison · 7 closer
 *
 * Two color-swatch cards, centers x=350/730, y290-340.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Worked example — read a Lassaigne colour (NEET)", "Worked example — Lassaigne colour padho (NEET)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          {t("extract gives blood-red with Fe3+ — what does the compound contain?", "extract Fe3+ ke saath blood-red deta — compound mein kya hai?")}
        </T>
      </Fade>

      {/* beat 2 — blood-red comes from thiocyanate */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={125} size={13} fill={INK}>
          {t("blood-red + Fe3+ → thiocyanate (SCN⁻)", "blood-red + Fe3+ → thiocyanate (SCN⁻)")}
        </T>
      </Fade>

      {/* beat 3 — SCN- needs both N and S */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={155} size={13} fill={INK}>
          {t("SCN⁻ forms ONLY when N+S both present → NaSCN", "SCN⁻ tabhi banta jab N+S dono hon → NaSCN")}
        </T>
      </Fade>

      {/* beat 4 — the answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Rect x={360} y={175} width={360} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={201} size={17} fill={INK} weight={800}>
          {t("both nitrogen AND sulphur", "dono nitrogen AUR sulphur")}
        </T>
      </Fade>

      {/* beat 5 — the trap */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 240 L 60 270" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={258} size={15} fill={RED} script anchor="start">
          {t(
            "trap: reading red as the nitrogen-alone test — N alone gives Prussian BLUE, not red",
            "trap: red ko nitrogen-alone test samajhna — akela N Prussian BLUE deta, red nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the two-colour memory pair */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={280} y={295} width={50} height={35} rx={5} fill="#2255CC" stroke={INK} strokeWidth={1.4} />
        <T x={410} y={318} size={15} fill={INK} weight={700} anchor="start">
          {t("BLUE = N only", "BLUE = sirf N")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Rect x={660} y={295} width={50} height={35} rx={5} fill="#8B1A1A" stroke={INK} strokeWidth={1.4} />
        <T x={790} y={318} size={15} fill={INK} weight={700} anchor="start">
          {t("BLOOD-RED = N & S together", "BLOOD-RED = N & S saath")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={365} size={13} fill={INK} weight={700}>
          {t("one colour cleanly separates 'N only' from 'N and S'", "ek colour 'sirf N' aur 'N aur S' ko alag kar deta"
        )}
        </T>
      </Fade>
    </Scene>
  );
}
