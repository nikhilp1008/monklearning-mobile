# Ch 12 fix log, round 4 (scratch copy fixr4)

- p001-02..04 "Three ideas" list (topics-01-02.ts): sentence ends inside items glued with ${NB} ("total cost.${NB}We", "function</b>.${NB}“Objective", "laddoos.${NB}Each", "at once.${NB}Plot", "the graph.${NB}This") so the paragraph splitter finds no split point; the list renders as one block, items flush.
- p002-02/03 Standard form box: "c₁x${NB}+${NB}d₁y${NB}≤${NB}e₁", same for c₂ constraint; breaks only after commas.
- p003-03/04 how-to step 1: "with${NB}=)".
- p003-05/06 how-to step 4: removed the <br> after "<b>Read off the answer.</b>" (the step lead is lifted into a heading, so the <br> opened the body with a blank line).
- p003-07/08 Fig 12.1 caption CAP121 (lib/diagrams/mathematics-12-12.ts): "ax + by = k".
- p014-02 practice card 1 answer: "100y${NB}≤${NB}5000${NB}⇒" (and the matching "50y${NB}≤${NB}1000").
- p017-01 cheat sheet "Four families" (topics-01-02.ts): "(max, ≤) · diet…", same before each "·".
- p017-02/03 "Goal word = family": "expect ≤." and "expect ≥"; also topic-03.ts summary F "expect${NB}≤;" / "expect${NB}≥".
- p019-01/02 "Four things can happen" (topic-03.ts): item 1 moved to its own 'p' block like items 2–4.
- p020-03..05 "Properties to state precisely" (topic-03.ts): each "<br>• " → "<br>${WJ}• " so the splitter sees no bullet break; no sentence end inside the bullets, so the block renders whole, bullets flush. Table→heading gap: not content-driven as far as I can see (block spacing after the table); left.
- p024-11/12 MCQ 4 option B (topic-03.ts:296): "the other about whether a finite optimum exists" so it wraps to 4 clear lines instead of an exact-fit 3.
- p029-02 Lemma 1 proof (extras-a-e.ts): coordinate pair now "(λqₓ${NB}+${NB}(1 − λ)rₓ, λq_y${NB}+${NB}(1 − λ)r_y)" (normal space after the comma, glue inside each coordinate); "${om(lam)}${WJ}(ar…+ br…).${NB}■".
- p032-01/02 Additional B step 2: "if and only${NB}if<br>".
- p032-02/03 step 4: "exactly${NB}when<br>".
- p040-01 Additional D step 1: "intersection candidate.${NB}For<br>" so "For" stays on the sentence line and the splitter no longer opens a paragraph on "For".
- p041-02/03 worked example 2 strip header: "binding${NB}cap${NB}→<br>integer${NB}x${NB}count" (line ends on the arrow).
- display-fit test: PASS (9/9). No tsc / full suite run, as briefed. keypoints-mathematics-12-12.ts not touched (no faults listed for it).
