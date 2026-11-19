# Fix log, Ch 13 round 3, half A (scratch copy fixr5)

topics-01-02.ts
- p002-01..04 legends (4 boxes): "events in the same sample${NB}space".
- p003-03/04/05 Theorem 3 proof: "(using independence of${NB}${A},${NB}${B})".
- p004-04 card 3/4 step 1: "first two are${NB}girls)".
- p004-08/09 card 4/4 step 4: "“Exactly${NB}one${NB}occurs”${NB}= ${pr(A)}…" (break point now after "=").
- p004-09/10 card 4/4 step 5: "P(both)${NB}+<br>P(exactly one)${NB}+ P(neither)<br>= 1/8 + 1/2 + 3/8 = 1," (no lone "P(neither)").
- p005-10 practice 5/5 answer: "(i)${NB}1/64, (ii)${NB}1 − …, (iii)${NB}3 · …".
- p011-01/02 partition: "Events ${E1},${NB}${E2},${NB}…,${NB}${En} partition".
- p013-02 options: "(a)${NB}95% … (d)${NB}85%".
- p013-06 step 2: "${pr(D)}${NB}= 0.012 + 0.010 + 0.012${NB}=${NB}0.034." (removed over-long glue so the sum fills greedily).

topics-03-04.ts
- p020-01 distribution table: rewritten as two columns, head [X, P(X)], rows X = x1 | p1, X = x2 | p2, ⋯ | ⋯, X = xn | pn (renderer was transposing the 5-column table and losing the X header).
- p022-03 ex 2/4 step 1: break point after "(2.1)²${NB}=" so "= 4.9 − 4.41 = 0.49." is not force-broken.
- p022-04 ex 3/4 step 2: "<br><br>" before P(X = 1) and P(X = 2) cut to "<br>".
- p031-03 ex 2/4 step 3: "10(0.05)${WJ}(0.95)" (break point after "npq =" already there).
- p031-05 ex 4/4 step 2: "6${NB}(0.32768)${WJ}(0.2)${NB}= 0.393216 ≈ 0.393".

lib/diagrams/mathematics-12-13.ts
- p019-11 CAP132 caption: "∑ x p(x)". Drawn label inside the figure untouched (labelsCheck matches it exactly).
