# Ch 13 topics fix log (scratch copy fixr5)

Note: the scratch source was already ahead of the 15 Nov shots for many faults (checked line by line; listed as "already in source").

## Edited
- r13-p004-card4-01 (topics-01-02.ts, WE 4 step 1): "use that ${AP},${NB}${BP} are also" (A′, B′ glued).
- p011-01 partition list (topics-01-02.ts): "<br>${WJ}• " before bullets 2 and 3, so the splitter keeps the three bullets as one even block.
- p013-03 / r13-p013-card3 step 1 (topics-01-02.ts): stacked binomials inside fractions replaced by inline ⁿCᵣ: new helper `nCr` (<sup>n</sup><i>C</i><sub>r</sub>) replacing the now-unused `binom`; "${fr(nCr('3', '2'), nCr('5', '2'))}" and the same for B, C.
- p015 MCQ (topics-01-02.ts): "${P}(first${NB}red${NB}|${NB}second${NB}red)".
- p003-01/02 Hence chain (topics-01-02.ts): "<br><br>" between the three stacked rows so they no longer crowd.
- r13-p022-card3-01 (topics-03-04.ts): binomials inside fractions now inline: "${fr(NC('48', '2'), NC('52', '2'))}", "${fr(`${NC('4', '1')}${NB}${NC('48', '1')}`, '1326')}", "${fr(NC('4', '2'), '1326')}". The lone "total ways = (52 2)" stays stacked (not inside a fraction).

## Already in source (no change needed)
- p003 "÷" (now "· n(S)/n(F)"); p003-02 "find.${NB}■"; p004 WE1 step 2 (now "3/36 · 36/18"); p007 decoder list (each bullet its own block); p013 WE1 step 2 and WE3 step 3 (÷ replaced by "· 20/11", "· 30/9"/"· 10/3"); p016 pro-tip "add to${NB}1."; p022 step 6 ("·" glued between the bracketed fractions); p029 "${X}${NB}∼${NB}${BNP}"; p030 "${r}${NB}·${NB}${nCr}"; r13-p031-card3 ("n = 4/p", "X${NB}∼${NB}B(8,${NB}1/2)", "8${NB}·${NB}1/2${NB}·${NB}1/2").
- card006 formula (topics-01-02.ts:221): main already broken "<br>= 1 − …" on each row.
- p020-01 table: source head is now [X, X = x₁, X = x₂, ⋯, X = xₙ] / row P(X): each value shows as "X = xᵢ  pᵢ" under "P(X)", so X is present. Left as is.

## Not mine
- card018 legend (three-event union) lives in extras-a-e.ts:176 (not in my files); its items are already glued with ${NB}, the "+" wrap is the operator rule.
- display-fit test: PASS (9/9). No tsc / full suite, as briefed. keypoints-mathematics-12-13.ts and lib/diagrams/mathematics-12-13.ts not touched (no open faults in them).
