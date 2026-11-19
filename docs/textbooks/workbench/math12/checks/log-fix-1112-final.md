# Fix log, Ch 11-12 final faults (scratch fixr5)

## Ch 11 overshoot (<br><br> back to single <br>)
- topics-02-03.ts Angle between two lines formula: `${COS_LINES}<br><br>= ${DR_COS}` -> single `<br>` (p020)
- topics-04-05.ts Point-to-a-line box: `${FOOT_L}<br><br>Distance` -> single `<br>` (p038-01/02)
- topics-04-05.ts Point-to-a-plane box: `${t} = ${TT}<br><br>Distance` -> single `<br>` (p038-03)
- topics-04-05.ts bisector box: `=${NB}±<br><br>${fr(` -> single `<br>` (p047-04/05)
- topics-00-01.ts p010: moved glue from "bearing of the track" (exact-fit line) to "train’s starting station" so the line before the gap no longer fills the width exactly
- topics-04-05.ts p038-04: `(foot),<br>= −2t (image)` -> `(foot),${NB}=<br>−2t (image)` so no line starts with "="
- topics-04-05.ts p047-02/03 Line meeting a plane box: `Intersects:<br>` then whole condition `b·n = Aa + Bb + Cc ≠ 0` glued with NB on its own line
- topics-04-05.ts p048-09 Theorem 3: `... P₂ = 0<br>if and only if${NB}${BIS},` (iff now leads the formula line instead of sitting alone)
- topics-04-05.ts p048-09/10 Proof: `P_i = 0${NB}is${NB}${fr(...)}` (no short "P_i = 0 is" line); `equal:${NB}|P1/n1| = |P2/n2|, i.e.` (no lone "equal:"); `i.e.<br><br>${BIS}` -> single `<br>` (same overshoot)
- extra-p.ts p077-10 card 3/8: `Find${NB}the${NB}foot` so the first line no longer ends early on "Find the"
- extra-p.ts p077-19 card 6/8: `The${NB}plane bisecting` so "The" no longer ends line 1 alone after the label
- extra-p.ts p077-13 card 4/8 question: `at${NB}right${NB}angles` so the "angles passes through which point?" line is no longer an exact fit (the likely cause of the one-line blank above Check answer / answer box). Not verifiable without a shot.
- extra-p.ts p077-14 card 4/8 answer: `Normal${NB}=${NB}direction`; `Plane:${NB}${g('(x − 3) − 3(y − 1)')} + ${g('2(z − 1) = 0')}` so "Plane:" travels with the equation
- extra-p.ts p077-23/24 card 7/8: `Distance = ${g('√((−10)² + (−10)² + (−10)²)')} = 10√3` (whole radicand glued)
- topics-00-01.ts p002-07: `either${NB}the direction` (first line no longer ends early on "either")
- topics-00-01.ts p003-08/09: `yz-plane${NB}is the projection`

## Ch 12
- extras-a-e.ts p029-02 Lemma proof: `Coordinates:<br>${P}${NB}=${NB}(λq_x + (1 − λ)r_x,${NB}λq_y + (1 − λ)r_y), so` (pair on its own line, comma glued)
- extras-a-e.ts p032-01/02 step 2: `occurs at ${sb(V, k)}<br>if${NB}and${NB}only${NB}if ${Zof(Vk)} ≥ ...` ("if and only if" now leads the condition line instead of sitting alone)
- extras-a-e.ts p032-02/03 slope paragraph: `which rearranges to${NB}−p/q${NB}=${NB}${fr(...)}` (br removed; fraction rides with "rearranges to")
- topics-01-02.ts p014-09: `₹2000/⁠trip` (and `₹1000/⁠trip` for consistency) so the slash no longer breaks
- topics-01-02.ts p014-01: `₹25 per pastry`

## Check
- display-fit test (scratch copy): PASS, 9/9.

## Not verified / caveats
- Single `<br>` between stacked fractions (p020, p038-01/02, p038-03, p047-04/05, plus the same overshoot in the Theorem 3 proof): need a fresh shot to confirm the fractions don't touch.
- Card 4/8 blank gap: blamed on an exact-fit question line; glue changed, not proven.
- Left alone (not in the fault list): other `<br><br>` in topics-04-05.ts:497 (formula-sheet card "Foot ...;<br><br>Distance") and topics-02-03.ts:1016 (note "point–plane ...;<br><br>parallel planes").
