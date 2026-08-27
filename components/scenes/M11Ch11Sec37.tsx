/**
 * M11 Ch11 · Section 37 — "Common pitfalls and the k:1 pro-move"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES the ENTIRE 37-section chapter. Per the task brief this chapter has
 * NO final recap/cheat-sheet (that lived mid-chapter at secs 13-14, for the earlier 2D
 * "Applications" unit only) — this is a PLAIN tips section like any other, just positioned last.
 * No closing "chapter complete" banner or recap grid was added; the board ends the same way
 * M11Ch11Sec26 (this chapter's other tips section) ends: on the last pitfall/pro-tip card.
 *
 * Structural precedent: M11Ch11Sec26.tsx (full-width roundRectD cards for JSON-flagged
 * "red-margin" items, centered cx=540 text, symmetric wrong/right split at x520(end)/x560(start)
 * — reused verbatim from Sec26's own beat7 pattern) and M11Ch11Sec12.tsx (the OTHER tips section;
 * confirms the precedent of leaving NON-flagged rows unboxed, using colored ✗/✓ text instead of a
 * drawn card). This section stays purely symbolic/notational (ratios m:n, k:1) like Sec26 — no
 * project3D/ThreeDAxes needed, nothing here is a specific plotted 3D point.
 *
 * board_content has 8 items. item[0]=heading (always-on title). items[1..7] gate at beat>=1..7.
 * Only items 2 and 7 (JSON style="red-margin") get a drawn card; the rest are plain centered rows,
 * matching Sec12's documented rule for handling the JSON's style flag:
 *  b1 | RED card: INT/EXT mixing (item2, red-margin) — neutral setup, wrong (crossed), right
 *  b2 | plain: ratio order m:n = PR:RQ, m pairs with the far point x₂ (item3)
 *  b3 | plain wrong/right pair: swapping P,Q inverts the ratio, 3:5 vs 5:3 (item4)
 *  b4 | plain wrong/right pair: square then root, don't skip the final root (item5)
 *  b5 | plain: three points may be collinear, test before assuming a triangle (item6)
 *  b6 | GREEN card: pro-move, jump straight to k:1 form (item7, red-margin — styled GREEN not RED
 *      since it's a positive technique, matching Sec12's own green pro-move closer)
 *  b7 | GREEN card continuation (same box as b6, no new box): sign of k gives int/ext for free (item8)
 *
 * HAND-VERIFIED facts (independently re-derived, not just trusting the JSON's claims):
 *  - Section formula: R divides PQ with PR:RQ = m:n internally -> R = (m·Q + n·P)/(m+n). So m
 *    (the ratio component nearer Q) pairs with Q's coordinate (the "far" point from P's side) in
 *    the numerator. Matches the JSON's own claim exactly.
 *  - Swapping which point is called P inverts the ratio: if originally PR:RQ = 3:5, relabeling
 *    P<->Q makes the SAME segment read RQ':Q'P = 5:3 from the new labels' perspective. Matches.
 *  - Distance formula requires squaring each coordinate difference THEN rooting the summed
 *    total ONCE at the end — skipping the square-root leaves a squared (not linear) distance;
 *    skipping a square leaves an unsquared signed difference. Both are genuine, distinct slips.
 *  - k:1 form: R = (k·Q + P)/(k+1). One unknown k replaces the two unknowns m,n; k>0 places R
 *    between P and Q (internal), k<0 places it outside the segment (external) — sign carries the
 *    case for free, standard technique. Matches the JSON's claim.
 *
 * *** FLAGGED SOURCE DATA BUG (Hinglish only) — using the JSON's arrays exactly per the brief ***
 * board_reveal_at_hinglish = [0, 9.73, 30.81, 44.03, 58.2, 70.83, 85.16, 82.56]. Index 6 (85.16)
 * EXCEEDS duration_sec_hinglish (83.06), and index 7 (82.56) is LESS than index 6 — the same
 * non-monotonic-tail bug already flagged in Sec36. Effect on useBeat (strictly-greater,
 * first-failure-breaks-loop): once currentTime clears reveals[5]=70.83, beat sticks at 5 for the
 * rest of real Hinglish playback (reveals[6] is never reachable within the audio's own duration),
 * so the GREEN pro-move card (b6/b7 — the section's own namesake "k:1 pro-move") never displays
 * during real Hinglish playback. English is unaffected: reveals_english = [0, 9.39, 28.33, 42.24,
 * 58.03, 72.11, 86.7, 86.91], duration_sec_english = 87.41 — both tail values are reachable and
 * monotonic (86.7 < 86.91 < 87.41), just a very tight 0.21s window for beat7 alone. Implemented
 * faithfully per the brief's "use exactly these reveals" instruction; flagging here and in the
 * final report rather than silently renumbering the source data.
 *
 * Layout plan (single column, full width x60-1020, all text anchor="middle" cx=540 unless noted;
 * wrong/right pairs split symmetrically at x520(anchor end)/x560(anchor start), reusing Sec26's
 * own beat7 pattern verbatim):
 *  b0 | title (25,red,script,always-on)         | T mid   | x540 y58
 *  b1 | RED card                                 | Draw    | roundRectD(60,94,960,114)
 *     |   line1 setup (15,ink)                   | T mid   | y126
 *     |   line2 wrong (14,red, crossed)          | T mid   | y160 -> crossD box (417.5,149.08,245,15.26)
 *     |   line3 right (15,green_dark)            | T mid   | y192
 *  b2 | main (16,ink)                             | T mid   | y250
 *     | sub (13,amber_dark)                       | T mid   | y274
 *  b3 | main (16,ink)                             | T mid   | y318
 *     | wrong (13,red) / right (13,green)         | T end/start | x520/x560 y342
 *  b4 | main (16,ink)                             | T mid   | y386
 *     | wrong (13,red) / right (13,green)         | T end/start | x520/x560 y410
 *  b5 | main (16,ink)                             | T mid   | y454
 *     | sub (13,amber_dark)                       | T mid   | y478
 *  b6 | GREEN card                                | Draw    | roundRectD(60,510,960,76)
 *     |   main (16,green_dark)                    | T mid   | y544
 *  b7 |   sub, same box (15,green_dark)            | T mid   | y576
 *
 * Vertical budget: title bottom~70.5 -> RED card(94-208) gap24 -> b2(237.52-278.03) gap25.5 ->
 * b3(305.52-346.03) gap25.5 -> b4(373.52-414.03) gap25.5 -> b5(441.52-482.03) gap24 -> GREEN
 * card(510-586) <= safe596 (10px buffer). All group gaps >= the spec's 1.6xsize minimum.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, INK, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

/** Estimated box for a `middle`-anchored Anek-sans text run (spec's measured ratios). */
function midBox(cx: number, y: number, size: number, chars: number) {
  const w = 0.5 * size * chars;
  const top = y - 0.78 * size;
  const bottom = y + 0.31 * size;
  return { x: cx - w / 2, y: top, w, h: bottom - top };
}

export default function M11Ch11Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // b1 card — line2 (wrong, crossed)
  const b1Wrong = t("Used (m + n) for an EXTERNAL ratio", "EXTERNAL ke liye bhi (m + n) use kiya");
  const b1WrongBox = midBox(540, 160, 14, b1Wrong.length);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} anchor="middle" script>
          {t("Common pitfalls and the k:1 pro-move", "Common pitfalls aur k:1 pro-move")}
        </T>
      </Fade>

      {/* beat 1 — RED card: don't mix internal and external */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 94, 960, 114)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={126} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Section formula: internal or external?", "Section formula: internal ya external?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={160} size={14} fill={RED} anchor="middle" weight={700}>
          {b1Wrong}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d={crossD(b1WrongBox.x, b1WrongBox.y, b1WrongBox.w, b1WrongBox.h)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={540} y={192} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          INT adds (m + n) · EXT subtracts (m - n)
        </T>
      </Fade>

      {/* beat 2 — ratio order: m pairs with the far point */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={250} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Ratio m : n means PR : RQ —", "Ratio m : n matlab PR : RQ —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={274} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("m pairs with the FAR point, x₂ (not x₁).", "m judta hai FAR point x₂ se (x₁ se nahi).")}
        </T>
      </Fade>

      {/* beat 3 — swapping P and Q inverts the ratio */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={318} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Swap P and Q, and the ratio flips silently.", "P aur Q swap karo, ratio silently flip hota hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={520} y={342} size={13} fill={RED} anchor="end" weight={700}>
          {t("✗ found ratio 3 : 5", "✗ ratio 3 : 5 mila")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={560} y={342} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("✓ swapped ⇒ really 5 : 3", "✓ swap kiya ⇒ ab 5 : 3 hai")}
        </T>
      </Fade>

      {/* beat 4 — square then root, skip neither */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={386} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Square each difference — root the sum at the end.", "Har difference square karo — end mein √ lagao.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={520} y={410} size={13} fill={RED} anchor="end" weight={700}>
          {t("✗ forgot the final √", "✗ final √ bhool gaye")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={560} y={410} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("✓ always root at the very end", "✓ hamesha end mein root lagao")}
        </T>
      </Fade>

      {/* beat 5 — three points may be collinear */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={454} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Three points COULD be collinear.", "Teen points collinear bhi ho sakte hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={478} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Always test before you assume a triangle.", "Triangle maanne se pehle test karo.")}
        </T>
      </Fade>

      {/* beat 6 — GREEN card: the k:1 pro-move */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(60, 510, 960, 76)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={544} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-move: jump straight to the k : 1 form.", "Pro-move: seedha k : 1 form par jao.")}
        </T>
      </Fade>

      {/* beat 7 — same card: the sign of k gives internal/external for free */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={576} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Sign of k: k > 0 internal · k < 0 external — free!", "k ka sign: k > 0 internal · k < 0 external — free!")}
        </T>
      </Fade>
    </Scene>
  );
}
