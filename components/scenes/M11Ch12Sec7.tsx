/**
 * M11 Ch12 · Section 7 — "The four traps that cost marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid pitfall sequence. Only 7 reveal values this time (beats 0-6):
 * beat0 = seq1 heading (always-on title), beats1-4 = seq2-5 (the four traps, one per beat),
 * beats5-6 = seq6-7 (the two positive pro-tip reflexes that close the section).
 *
 * board_reveal_at_english = [0, 6.74, 23.21, 36.78, 47.53, 58.88, 72.7].
 * board_reveal_at_hinglish = [0, 6.14, 22.1, 31.83, 42.58, 55.21, 66.56].
 *
 * Layout: 2×2 grid of red-margin-bar trap cards (Sec1/Sec2 motif, reused 4x — cols
 * L x60-515 / R x565-1020, gutter 50px; rows y94-210 / y234-350, 24px row gap), each
 * card = red bar + "TRAP N" badge + a compact ringed/crossed formula gesture (the
 * wrong-vs-right pair) + a short caption echoing the note. Trap 1 is HIGH (bigger
 * badge, bolder caption); Traps 2-4 are normal. Below the grid, a thin divider, then
 * the two positive reflexes get the opposite treatment — GREEN/AMBER bordered banners,
 * never red, since they're reflexes-to-do, not traps-to-avoid: seq6 (HIGH) as a wide
 * green banner, seq7 as an amber banner with a green boxed "action" chip (callback to
 * Sec6's find-a-b technique).
 *
 * Beats:
 *  0(title, always-on) | "The four traps that cost marks"
 *  1 | TRAP 1 (HIGH, red) — lim(x→a) f(x) presented plain vs f(a) crossed, "≠" between
 *  2 | TRAP 2 (normal, red) — 0/0 (Frac) crossed out, "not final!" tag
 *  3 | TRAP 3 (normal, red bar / ink caption) — "M = 0" crossed, "⇒ rule fails" tag
 *  4 | TRAP 4 (normal, red bar / ink caption) — (x^m−1)/(x^n−1) → m/n, "only x→1" tag underlined
 *  5 | PRO-TIP 1 (HIGH, green banner) — substitute first, clean number = one line done
 *  6 | PRO-TIP 2 (normal, amber banner + green chip) — vanishing denom + finite limit ⇒ numerator→0
 *
 * Layout plan (x-range × y-range per element; formulas are language-agnostic, only
 * captions/prose get separate EN/HI boxes — noted where the longer one governs):
 *  b1 | red bar                                | Draw   | x60  y102..202
 *  b1 | "TRAP 1" badge (14,red,w800,start)      | T st   | x80..122   y106..124 (bl120)
 *  b1 | Limit x→a (15,ink,start)                | Limit  | x112..135  y153..177 (bl165+cond)
 *  b1 | "f(x)" (15,ink,w700,start)               | T st   | x144..174  y153..170 (bl165)
 *  b1 | "≠" (18,red,w700,mid)                    | T mid  | x180..197  y151..172 (bl166)
 *  b1 | "f(a)" (15,red,w700,start)                | T st   | x203..233  y153..170 (bl165)
 *  b1 | crossD over f(a)                          | Draw   | crossD(203,153,30,16)
 *  b1 | caption (13,red,w800,start)                | T st   | x80..~230(en)/~253(hi) y194..212 (bl204)
 *  b2 | red bar                                  | Draw   | x565 y102..202
 *  b2 | "TRAP 2" badge (12,red,w700,start)        | T st   | x585..623  y110..124 (bl120)
 *  b2 | Frac 0/0 (18,red,w22)                     | Frac   | x639..661  y145..182 (cx650,bl170)
 *  b2 | crossD over 0/0                            | Draw   | crossD(639,145,22,36)
 *  b2 | "not final!" tag (14,red,w800,start)       | T st   | x690..760  y159..174 (bl170)
 *  b2 | caption (13,red,w700,start)                 | T st   | x585..~725(en)/~721(hi) y198..212 (bl208)
 *  b3 | red bar                                   | Draw   | x60  y242..342
 *  b3 | "TRAP 3" badge (12,red,w700,start)         | T st   | x80..118   y250..264 (bl260)
 *  b3 | "M = 0" (20,red,w800,mid)                   | T mid  | x175..225  y284..306 (bl300)
 *  b3 | crossD over M=0                              | Draw   | crossD(175,284,50,22)
 *  b3 | "⇒ rule fails" tag (14,ink,w700,start)       | T st   | x245..329  y289..304 (bl300)
 *  b3 | caption (13,ink,w600,start)                   | T st   | x80..~282(en)/~281(hi) y326..340 (bl336)
 *  b4 | red bar                                    | Draw   | x565 y242..342
 *  b4 | "TRAP 4" badge (12,red,w700,start)          | T st   | x585..623  y248..262 (bl258)
 *  b4 | Frac x^m−1/x^n−1 (16,ink,w80)                | Frac   | x615..695  y278..311 (cx655,bl300)
 *  b4 | "→" (16,ink,mid)                              | T mid  | x707..723  y286..306 (bl300)
 *  b4 | "m/n" (18,amber,w700,start)                    | T st   | x738..765  y286..306 (bl300)
 *  b4 | "only x → 1" tag (13,red,w800,start)            | T st   | x738..~803(en)/~829(hi) y326..340 (bl336)
 *  b4 | underline under tag                             | Draw   | x738..~803(en)/~829(hi) y340
 *  --divider--                                     | Draw   | x100..980 y372
 *  b5 | banner outline (green rect)                 | Draw   | x160..920 y396..456
 *  b5 | banner text (17,green,w800,mid)               | T mid  | x~264..816(en)/~184..896(hi) y417..435 (bl430)
 *  b5 | checkD beside text                             | Draw   | checkD(895,430,16)
 *  b6 | banner outline (amber rect)                   | Draw   | x160..920 y480..576
 *  b6 | line1 (16,ink,w700,mid)                         | T mid  | x~340..740(en)/~360..720(hi) y492..510 (bl504)
 *  b6 | boxed chip "→ numerator must also → 0" (17,green)| Chip  | x375..705  y528..564
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
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The four traps that cost marks", "Woh chaar galtiyan jo marks kha jaati hain")}
        </T>
      </Fade>

      {/* beat 1 — TRAP 1 (HIGH): lim f(x) plain vs f(a) crossed, "≠" between */}
      <Draw on={beat >= 1} d="M60 102 L60 202" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={120} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 1
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.9)} x={112} y={165} size={15} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={144} y={165} size={15} fill={INK} anchor="start" weight={700}>
          f(x)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={188} y={166} size={18} fill={RED} anchor="middle" weight={700}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={203} y={165} size={15} fill={RED} anchor="start" weight={700}>
          f(a)
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(203, 153, 30, 16)} stroke={RED} sw={2} delay={dl(1, 2.1)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={80} y={204} size={13} fill={RED} anchor="start" weight={800}>
          {t("Limit ≠ value at a.", "Limit, f(a) ke barabar nahi.")}
        </T>
      </Fade>

      {/* beat 2 — TRAP 2 (normal): 0/0 crossed out, "not final!" */}
      <Draw on={beat >= 2} d="M565 102 L565 202" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={585} y={120} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 2
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.9)} x={650} y={170} size={18} numerator="0" denominator="0" width={22} fill={RED} />
      <Draw on={beat >= 2} d={crossD(639, 145, 22, 36)} stroke={RED} sw={2} delay={dl(2, 1.7)} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={690} y={170} size={14} fill={RED} anchor="start" weight={800}>
          {t("not final!", "final nahi!")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={585} y={208} size={13} fill={RED} anchor="start" weight={700}>
          {t("0/0 isn't an answer.", "0/0 answer nahi hai.")}
        </T>
      </Fade>

      {/* beat 3 — TRAP 3 (normal): "M = 0" crossed, quotient rule fails */}
      <Draw on={beat >= 3} d="M60 242 L60 342" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={260} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={200} y={300} size={20} fill={RED} anchor="middle" weight={800}>
          M = 0
        </T>
      </Fade>
      <Draw on={beat >= 3} d={crossD(175, 284, 50, 22)} stroke={RED} sw={2} delay={dl(3, 1.3)} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={245} y={300} size={14} fill={INK} anchor="start" weight={700}>
          {t("⇒ rule fails", "⇒ rule fail")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={80} y={336} size={13} fill={INK} anchor="start" weight={600}>
          {t("Quotient rule needs M ≠ 0.", "Quotient rule ko M ≠ 0 chahiye.")}
        </T>
      </Fade>

      {/* beat 4 — TRAP 4 (normal): m/n shortcut's hidden condition, x→1 only */}
      <Draw on={beat >= 4} d="M565 242 L565 342" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={585} y={258} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 4
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 0.9)} x={655} y={300} size={16} numerator="x^m − 1" denominator="x^n − 1" width={80} fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={715} y={300} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={738} y={300} size={18} fill={AMBER_DARK} anchor="start" weight={700}>
          m/n
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={738} y={336} size={13} fill={RED} anchor="start" weight={800}>
          {t("only x → 1", "sirf x → 1 par")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        d={en ? "M738 340 L803 340" : "M738 340 L829 340"}
        stroke={RED}
        sw={1.6}
        delay={dl(4, 2.4)}
        dur={0.5}
      />

      {/* divider between the traps grid and the pro-tips */}
      <Draw on={beat >= 5} d="M100 372 L980 372" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} dur={0.6} />

      {/* beat 5 — PRO-TIP 1 (HIGH, green): substitute first */}
      <Draw
        on={beat >= 5}
        d="M160 396 L920 396 L920 456 L160 456 Z"
        stroke={GREEN}
        sw={2.4}
        delay={dl(5, 0.7)}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={430} size={17} fill={GREEN_DARK} anchor="middle" weight={800}>
          {t(
            "Substitute first — a clean number means one line, done.",
            "Pehle substitute karo — clean number aaya to ek line mein done."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={checkD(895, 430, 16)} stroke={GREEN} sw={2.2} delay={dl(5, 2.2)} dur={0.5} />

      {/* beat 6 — PRO-TIP 2 (normal, amber): vanishing denominator + finite limit reflex */}
      <Draw
        on={beat >= 6}
        d="M160 480 L920 480 L920 576 L160 576 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(6, 0.7)}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={504} size={16} fill={INK} anchor="middle" weight={700}>
          {t(
            "See a vanishing denominator with a finite limit?",
            "Vanishing denominator + finite limit dikhe?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Chip x={375} y={528} w={330} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          {t("→ numerator must also → 0", "→ numerator ko bhi → 0 jaana hoga")}
        </Chip>
      </Fade>
    </Scene>
  );
}
