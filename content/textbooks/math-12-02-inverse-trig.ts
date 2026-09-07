/**
 * Chapter 02 · Inverse Trigonometric Functions. Mathematics, Class 12.
 *
 * Restructured from pages 91 to 149 of the Drona Class 12 Mathematics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * following math-11-03-trigonometry.ts for voice and density. That Class 11
 * chapter is the prerequisite this one inverts, so nothing it teaches is
 * taught again here: the addition and double-angle formulas, the unit circle,
 * the allied-angle reductions and the half-angle forms are all quoted as
 * known.
 *
 * The source is two documents stacked: a typeset chapter of four parts
 * (Principal Value Branches, Self-Map Identities, Combination Identities,
 * Graphs and Composites) and a Round 2 Addendum of five sections A to E plus
 * an Addendum P analysing the previous-year bank. Six topics is the schema's
 * ceiling, so the addendum is folded into the topic whose machinery it
 * actually extends rather than given topics of its own:
 *
 *   - Addendum A, solving inverse trigonometric equations, sits inside Topic
 *     03. Every worked equation in it is an arctangent sum whose roots are
 *     audited against the xy test, which is exactly what Topic 03 installs,
 *     and separating the method from the formula would teach the audit twice.
 *   - Addendum B, conditional identities, sits inside Topic 03 for the same
 *     reason: x + y + z = xyz is the three-angle version of the same sum.
 *   - Addendum C, the multiple angles over the whole real line, sits inside
 *     Topic 04 next to the windows it completes. The chapter states each
 *     identity's window; the addendum says what the expression equals outside
 *     it, and the two belong on the same page.
 *   - Addendum D, the folded composites as functions, sits inside Topic 06.
 *     They are graphs, they are read like graphs, and the solution-counting
 *     they support is a graph-reading skill.
 *   - Addendum E, domains and ranges of assembled functions, sits inside
 *     Topic 06, because its second reflex is monotonicity read off the graph
 *     table that topic carries.
 *   - Addendum P's archetypes A1 to A6 are distributed to the topics they
 *     draw on, and its exam-frequency findings are folded into the hook.
 *
 * Two deliberate omissions. Addendum P's distribution tables (year tags,
 * session counts, share-of-bank estimates) are editorial metadata about the
 * question bank rather than content a student reads, so only their conclusions
 * survive, inside the hook. And P10, the arithmetic-progression item, is
 * dropped for altitude: it is a progressions question wearing an arctangent
 * costume, and the space it would take is better spent on the branch work the
 * same paper actually rewards.
 *
 * The exam hook is authored once, on topic 1, with a bold heading per topic,
 * because the reader renders `hook` only there. Same convention, and the same
 * reason, as the Class 11 chapters.
 *
 * THREE SOURCE ERRORS, none covered by the book's own errata (pages 830 to
 * 832, which lists nothing for Chapter 02):
 *
 *   1. Round 2 Addendum, Addendum D, practice answer 3 (page 140) reads
 *      "7π/4 lies in the strip (3π/2, 5π/2), where h(x) = x − π". That strip
 *      is k = 2, so the sawtooth reads h(x) = x − 2π, which is what the
 *      addendum's own general rule says two paragraphs earlier. The printed
 *      answer −π/4 is correct; only the formula quoted for it is wrong, since
 *      x − π would give 3π/4. Topic 06's third MCQ states it correctly.
 *   2. Round 2 Addendum, Example C.2 (page 138) reads "For x > 1 the right
 *      side is π − 2tan⁻¹x, strictly larger than the left side 2tan⁻¹x (their
 *      difference is π − 4tan⁻¹x > 0 because tan⁻¹x > π/4 there)". Both
 *      claims are backwards: tan⁻¹x > π/4 makes π − 4tan⁻¹x negative, so the
 *      right side is strictly smaller. At x = 5 the left side is 2.747 and
 *      the right side is 0.394. The stated answer, x ∈ [−1, 1], is unaffected.
 *      Topic 04's fourth example gives the direction correctly.
 *   3. Round 2 Addendum, Addendum P, archetype A3 (page 145) closes with
 *      "(In fact f(x) = π for all x > 1, f(x) = 2tan⁻¹x for |x| ≤ 1)" for
 *      f(x) = 2tan⁻¹x + sin⁻¹(2x/(1 + x²)). On |x| ≤ 1 the second term is
 *      itself 2tan⁻¹x, so f(x) = 4tan⁻¹x there; at x = 1 the function is
 *      π/2 + π/2 = π, which 4tan⁻¹1 gives and 2tan⁻¹1 does not. The same
 *      slip makes the sentence after it say a blind cancellation yields
 *      2tan⁻¹5; it yields 4tan⁻¹5. The headline answer f(5) = π is correct.
 *      Topic 04's third example states the |x| ≤ 1 branch as 4tan⁻¹x.
 *
 * Separately, the PDF extraction lost the option lists of two multiple-choice
 * items (Part 3 §3.4 Example 2 and Part 3 §3.6 Q1) and one non-principal
 * branch of cos⁻¹ printed as "[2, 3]" for [2π, 3π]. Those are extraction
 * damage rather than errors in the book, so the affected option sets are
 * re-authored here rather than reconstructed and no claim is made about what
 * the page said.
 *
 * Eight `diagram` blocks, all of the parameterised kinds: four `plot` and four
 * `numberline`, at least one per topic. Notes for whoever edits them. Diagram
 * chips and captions render as plain text, not markup, so they carry no inline
 * tags. The reader has no arcsin, arccos or arctan curve in its `PlotCurve`
 * vocabulary, so Topic 06's figure draws its three inverse graphs as
 * `segments` polylines through sampled points of the true curve; the three
 * folded waves sharing that figure are piecewise linear to begin with, so
 * those polylines are exact rather than sampled. And `numberline` draws
 * integer ticks, which is why every branch figure carries its endpoints as
 * interval labels rather than trusting the axis to say where π/2 is.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12InverseTrig: Chapter = {
  "chapter": "02",
  "title": "Inverse Trigonometric Functions",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Principal Value Branches",
      "chip": "01 BRANCHES",
      "kalam": "one official angle, and it never leaves its cage",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Principal Value Branches</b><br>The foundation slab the whole chapter stands on. Get the branches wrong and every identity, every sin<sup>−1</sup>(sin <i>x</i>) simplification and every Class 12 integral substitution downstream collapses with them. CBSE Boards ask <b>“find the principal value”</b> for 1 to 2 marks every single year. CUET weaponises the branches into one-line recall: “which of these is the principal value branch of sec<sup>−1</sup><i>x</i>?” JEE Main lives on the range-folding trap, sin<sup>−1</sup>(sin 2π/3), where the wrong answer is the obvious one. JEE Advanced stacks domains, exclusions and piecewise behaviour into multi-step expressions.<br><br><b>02 · The Self-Map Identities</b><br>The first-move conversions you reach for before any heavy machinery. CBSE uses them constantly inside evaluate-and-prove questions, and sin<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>x</i> = π/2 is a perennial 1 to 2 marker. CUET turns them into instant value traps: cot<sup>−1</sup>(−√3) catches anyone who guesses −π/6. JEE Main lifts them verbatim from NCERT, and tan<sup>−1</sup>√3 − cot<sup>−1</sup>(−√3) has appeared as an objective question that only the π − form gets right. JEE Advanced exploits the one fault line in the set: three of these functions flip sign and three reflect through π/2.<br><br><b>03 · Sums, Differences and the ±π Correction</b><br>The most heavily examined block in the chapter, and the heaviest single block in the previous-year bank. CBSE sets <b>“prove that tan<sup>−1</sup>(1/2) + tan<sup>−1</sup>(1/3) = π/4”</b> for 3 to 4 marks almost every year. JEE Main runs on the <i>xy</i> above 1 case and increasingly hides the chapter inside set language, “the set of solutions is a singleton”. JEE Advanced builds telescoping series and conditional-domain problems directly on these identities. Roughly one inverse-trigonometry question appears in every JEE Main paper.<br><br><b>04 · Multiple Angles and Their Windows</b><br>Every doubling and tripling identity carries a validity window, and the exams exist to punish quoting one without it. JEE Main has asked for <i>f</i>(5) where <i>f</i>(<i>x</i>) = 2 tan<sup>−1</sup><i>x</i> + sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)), a question that is nothing but a branch check. JEE Advanced visits this material in bursts and prefers multi-correct and matching-list formats, where a single missed window costs the whole item.<br><br><b>05 · Composites, Triangles and Substitution</b><br>This is where the identities become tools. CBSE asks composite evaluations like cos(sin<sup>−1</sup>(3/5)) and substitution simplifications for 2 to 4 marks, including a 5-mark proof. CUET sets rapid conversions such as “find tan(sin<sup>−1</sup><i>x</i>)”. JEE Main and Advanced lean hard on the substitution technique, and recognising that tan<sup>−1</sup>((√(1 + <i>x</i><sup>2</sup>) − 1)/<i>x</i>) collapses to half an arctangent is a recurring move.<br><br><b>06 · Graphs, Waves, Domains and Ranges</b><br>CBSE expects you to sketch the inverse graphs and state domain and range, and the domain of an assembled function is a stock 2-marker. CUET favours quick range questions. JEE Advanced counts solutions off the triangular wave sin<sup>−1</sup>(sin <i>x</i>), where the whole difficulty is bounding the search and keeping the endpoints. Half the JEE Main questions on this chapter since 2013 have been equations, inequalities or solution counts rather than naked evaluations."
        },
        {
          "t": "p",
          "html": "Start with a question that sounds trivial and is not. <b>Which angle has a sine of 1/2?</b> Your hand writes 30°, that is π/6. But 150° works too. So does 390°, and 510°, and −330°, and infinitely many more. Sine sends many different angles to the same value, it is <b>many-to-one</b>, and that is fatal for inversion, because a function has to return exactly one answer. A machine that replies “π/6 or 5π/6 or 13π/6 or …” is not a function at all."
        },
        {
          "t": "think",
          "html": "picture a junction platform where four trains all show delhi on the board. “which train do i take?” has no single answer until the station designates one official train for that route. inverse trigonometry does exactly that: out of infinitely many angles sharing a sine, it appoints one."
        },
        {
          "t": "p",
          "html": "The repair is to shrink the domain of the parent function <i>before</i> inverting it, down to a stretch that meets two demands at once. <b>One, strictly monotonic</b> there, so no output value is used twice. <b>Two, still sweeping the whole range</b>, so no legal input is left without an answer. For sine the agreed stretch is [−π/2, π/2]: across it sine climbs steadily from −1 to +1 and hits every value in between exactly once. Now the question has one honest answer, π/6."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · WHY SINE NEEDS A DESIGNATED STRETCH",
          "mathChips": true,
          "chips": ["sin x = ½", "the branch", "the whole range"],
          "captions": [
            "The dashed line y = 1/2 cuts the sine curve again and again. Every one of those dots is an angle whose sine is 1/2, and there are infinitely many more off both ends. Asked to invert, the machine cannot choose, so nothing is a function yet.",
            "Shade the stretch from −π/2 to π/2 and exactly one dot survives inside it: π/6. That single intersection is what sin⁻¹(1/2) means. The branch is a choice, but a fixed one, so the symbol means the same thing in Kota and in Wichita.",
            "The shaded stretch is also complete. Sine runs from −1 at the left end to +1 at the right end, hitting every value in between once, so every legal input has an answer and no answer is used twice. Monotonic and onto: those are the two demands."
          ],
          "frames": [
            {
              "x": [-6.6, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.5, "dash": true, "soft": true }],
              "points": [
                { "x": -5.7596, "y": 0.5 },
                { "x": -3.6652, "y": 0.5 },
                { "x": 0.5236, "y": 0.5 },
                { "x": 2.618, "y": 0.5 }
              ]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.5, "dash": true, "soft": true }],
              "bands": [{ "x0": -1.5708, "x1": 1.5708 }],
              "points": [
                { "x": -5.7596, "y": 0.5, "soft": true },
                { "x": -3.6652, "y": 0.5, "soft": true },
                { "x": 0.5236, "y": 0.5, "label": "π/6" },
                { "x": 2.618, "y": 0.5, "soft": true }
              ]
            },
            {
              "x": [-6.6, 6.6],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }],
              "bands": [{ "x0": -1.5708, "x1": 1.5708 }],
              "points": [
                { "x": -1.5708, "y": -1, "label": "−1" },
                { "x": 1.5708, "y": 1, "label": "+1" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Principal value branch",
          "html": "For each trigonometric function, mathematics fixes one stretch of angles on which it is one-to-one and still covers its whole range. That stretch is the <b>principal value branch</b>, written <i>B</i>, and the inverse returns the single angle inside it. So <i>y</i> = sin<sup>−1</sup><i>x</i> says: <i>y</i> is the unique angle <b>in [−π/2, π/2]</b> whose sine is <i>x</i>. The output is an <b>angle in radians</b>, and it is trapped inside <i>B</i> always. Produce sin<sup>−1</sup>(anything) = 2π/3 and you have already made an error, because 120° is outside the cage."
        },
        {
          "t": "def",
          "term": "The −1 is not an exponent",
          "html": "sin<sup>−1</sup><i>x</i> is <b>not</b> (sin <i>x</i>)<sup>−1</sup> = 1/sin <i>x</i> = cosec <i>x</i>. The −1 is an inverse-function marker. sin<sup>−1</sup><i>x</i> is an <b>angle</b>; 1/sin <i>x</i> is a <b>ratio</b>. They are different objects with different meanings, and confusing them costs whole questions. If you want the reciprocal, write (sin <i>x</i>)<sup>−1</sup>. This notation is locked for the entire chapter."
        },
        {
          "t": "p",
          "html": "Each of the six functions gets its own designated cage, and they fall into three families rather than six facts. <b>Sine and tangent</b> are odd and symmetric about the origin, so their branches are <b>centred on 0</b>. <b>Cosine and cotangent</b> have their natural one-to-one stretch starting at 0, so their branches run <b>from 0 up to π</b>. <b>Secant and cosecant</b>, the reciprocal misfits, <b>borrow</b> the cosine and sine branches and then <b>delete the single point</b> where the reciprocal blows up."
        },
        {
          "t": "defgrid",
          "title": "Domain and branch, all six",
          "rows": [
            { "k": "sin<sup>−1</sup><i>x</i>", "v": "domain [−1, 1] · branch [−π/2, π/2]" },
            { "k": "cos<sup>−1</sup><i>x</i>", "v": "domain [−1, 1] · branch [0, π]" },
            { "k": "tan<sup>−1</sup><i>x</i>", "v": "domain ℝ · branch (−π/2, π/2), open, tan is undefined at ±π/2" },
            { "k": "cot<sup>−1</sup><i>x</i>", "v": "domain ℝ · branch (0, π), open, cot is undefined at 0 and π" },
            { "k": "sec<sup>−1</sup><i>x</i>", "v": "domain |<i>x</i>| ≥ 1 · branch [0, π] − {π/2}, where cos = 0" },
            { "k": "cosec<sup>−1</sup><i>x</i>", "v": "domain |<i>x</i>| ≥ 1 · branch [−π/2, π/2] − {0}, where sin = 0" }
          ]
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · THE SIX CAGES, TAP ONE",
          "mathChips": true,
          "chips": ["sin⁻¹", "cos⁻¹", "tan⁻¹", "cot⁻¹", "sec⁻¹", "cosec⁻¹"],
          "captions": [
            "Closed at both ends, and centred on 0. sin⁻¹(1) = π/2 and sin⁻¹(−1) = −π/2 are real values, so the endpoints belong. The grey bar behind is [−π, π], for scale.",
            "Closed, and sitting entirely on the positive side. cos⁻¹(1) = 0 and cos⁻¹(−1) = π are the endpoints, which is why a cos⁻¹ answer is never negative.",
            "Same centre as sine, but open at both ends. Tangent is undefined at ±π/2, so no input can ever map there, and the hollow circles say exactly that.",
            "Cotangent's cage runs from 0 to π and is open at both ends, since cot is undefined at 0 and at π. Notice it is never negative either.",
            "Secant borrows cosine's [0, π] and deletes π/2, because cos(π/2) = 0 makes sec(π/2) undefined. The gap in the middle is the deleted point, not a typographical accident.",
            "Cosecant borrows sine's [−π/2, π/2] and deletes 0, because sin 0 = 0. Sec drops half-pi, cosec drops zero, and mixing the two up is a classic CUET banana skin."
          ],
          "frames": [
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -3.1416, "to": 3.1416, "soft": true },
                { "from": -1.5708, "to": 1.5708, "label": "[−π/2, π/2]" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -3.1416, "to": 3.1416, "soft": true },
                { "from": 0, "to": 3.1416, "label": "[0, π]" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -3.1416, "to": 3.1416, "soft": true },
                { "from": -1.5708, "to": 1.5708, "openLeft": true, "openRight": true, "label": "(−π/2, π/2)" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -3.1416, "to": 3.1416, "soft": true },
                { "from": 0, "to": 3.1416, "openLeft": true, "openRight": true, "label": "(0, π)" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -3.1416, "to": 3.1416, "soft": true },
                { "from": 0, "to": 1.5708, "openRight": true, "label": "[0, π/2)" },
                { "from": 1.5708, "to": 3.1416, "openLeft": true, "label": "(π/2, π]" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -3.1416, "to": 3.1416, "soft": true },
                { "from": -1.5708, "to": 0, "openRight": true, "label": "[−π/2, 0)" },
                { "from": 0, "to": 1.5708, "openLeft": true, "label": "(0, π/2]" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Physics gives you dimensional analysis. Inverse trigonometry gives you <b>two free sanity checks</b> on every answer, and they cost nothing. <b>The domain check runs before you start:</b> is <i>x</i> even a legal input? <b>The branch check runs after you finish:</b> does your angle lie inside <i>B</i>? If cos<sup>−1</sup>(anything) comes out negative, or sin<sup>−1</sup>(anything) comes out bigger than π/2, you have made an error, guaranteed, with no second-guessing needed."
        },
        {
          "t": "formula",
          "kicker": "READING AN INVERSE VALUE",
          "tag": "two free checks",
          "main": "<i>y</i> = <i>f</i><sup>−1</sup>(<i>x</i>) means <i>f</i>(<i>y</i>) = <i>x</i> and <i>y</i> ∈ <i>B</i>",
          "legend": [
            "legal inputs: |<i>x</i>| ≤ 1 for sin<sup>−1</sup> and cos<sup>−1</sup>, |<i>x</i>| ≥ 1 for sec<sup>−1</sup> and cosec<sup>−1</sup>, any real number for tan<sup>−1</sup> and cot<sup>−1</sup>",
            "<i>y</i> is an angle in radians and it can never leave the branch <i>B</i>",
            "the reciprocal pair forbids (−1, 1) because a reciprocal never lands strictly between −1 and 1"
          ],
          "note": "sin<sup>−1</sup>(2), cos<sup>−1</sup>(−3) and sec<sup>−1</sup>(0.5) do not exist. If the input is illegal the answer is “undefined”, full stop, and an answer written for an undefined expression scores zero however tidy it looks."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE BRANCHES ARE FORCED, TAP A LINE",
          "steps": [
            {
              "eq": "demand D1: strictly monotonic on the stretch",
              "why": "Each output must be used exactly once, or the inverse would still have to choose between two angles. Monotonic is the cheapest way to guarantee it."
            },
            {
              "eq": "demand D2: the stretch produces the whole range",
              "why": "If the stretch missed part of [−1, 1], the inverse would be undefined for some perfectly legal input. Both demands have to hold at the same time, which is what makes the choice almost unique."
            },
            {
              "eq": "sine on [−π/2, π/2] climbs from −1 to 1",
              "why": "Strictly increasing, and it sweeps the full range, so D1 and D2 both hold. It is also the stretch nearest the origin, and that tie-breaker is why convention crowns it principal."
            },
            {
              "eq": "cosine on [0, π] falls from 1 to −1",
              "why": "The same reasoning with a decreasing function. Every branch in the table is the origin-nearest monotonic window that still sweeps the whole range, so none of them is arbitrary."
            },
            {
              "eq": "sec θ = 1/cos θ, and cos(π/2) = 0",
              "why": "Borrow cosine's branch [0, π]. At θ = π/2 the secant would be 1/0, which is undefined, so no input can ever map there. Delete that single point and you have sec⁻¹'s branch."
            },
            {
              "eq": "cosec⁻¹ borrows [−π/2, π/2] and deletes 0",
              "why": "Identical argument with sin 0 = 0. The deleted point is the tell that distinguishes the two reciprocal cages, and it is the fastest way to answer a CUET recall question."
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the most examined skill in the topic. The identity <b>sin<sup>−1</sup>(sin θ) = θ is not a law</b>, it is a coincidence that holds only when θ already lives inside the branch. When θ is outside, you must first <b>fold it back</b> into the branch using an identity that preserves the function's value, and only then read the answer off. Every mark in this part of the chapter turns on that one sentence."
        },
        {
          "t": "formula",
          "kicker": "THE FOLD-BACKS",
          "tag": "value preserving",
          "main": "sin(π − θ) = sin θ · cos(2π − θ) = cos θ · tan(θ ± π) = tan θ",
          "legend": [
            "cosine is even, so cos(−θ) = cos θ as well, which is what handles a negative argument",
            "<i>f</i><sup>−1</sup>(<i>f</i>(θ)) = θ <b>only if</b> θ is already inside the branch",
            "otherwise replace θ by the equivalent angle that is inside, then read off"
          ],
          "note": "These are Class 11 allied-angle results, quoted rather than rederived. The new work is choosing which one to apply, and the choice is made by the branch of the outer inverse function, never by the inner angle."
        },
        {
          "t": "proc",
          "title": "The two-second branch ritual",
          "steps": [
            "<b>Write the branch of the outer inverse function.</b> Not the inner one. cos<sup>−1</sup> on the outside means the answer must land in [0, π], whatever is inside.",
            "<b>Ask whether the inner angle is already in it.</b> Convert to degrees for a second if that makes the question easier to answer honestly.",
            "<b>If not, fold.</b> Replace the inner angle by an equivalent angle inside the branch, using a value-preserving identity from the card above.",
            "<b>Read off.</b> The inverse now returns that in-branch angle directly, with no further work.",
            "<b>Branch-check the answer.</b> A negative cos<sup>−1</sup>, or a sin<sup>−1</sup> above π/2, means you skipped step 3."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · FOLDING AN ANGLE INTO ITS BRANCH",
          "mathChips": true,
          "chips": ["fold 2π/3", "fold 7π/6", "fold 3π/4"],
          "captions": [
            "sin⁻¹(sin 2π/3). The branch is the shaded strip [−π/2, π/2], and 2π/3 = 120° sits outside it. Slide along the dashed line at the same height and you reach π/3, inside the strip, because sin(π − θ) = sin θ. The answer is π/3, not 2π/3.",
            "cos⁻¹(cos 7π/6). Now the shaded strip is [0, π] and 7π/6 = 210° has fallen off the right-hand end. The same height is reached again at 5π/6 = 150°, inside, because cos(2π − θ) = cos θ. The answer is 5π/6.",
            "tan⁻¹(tan 3π/4). The strip is the open interval (−π/2, π/2) and 3π/4 = 135° is on the next branch of the tangent altogether. Shift by one π and you land on −π/4, which has the same tangent and is inside. The answer is −π/4."
          ],
          "frames": [
            {
              "x": [-2.4, 6.9],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "sin" }, { "c": "line", "m": 0, "k": 0.866, "dash": true, "soft": true }],
              "bands": [{ "x0": -1.5708, "x1": 1.5708 }],
              "points": [
                { "x": 1.0472, "y": 0.866, "label": "π/3" },
                { "x": 2.0944, "y": 0.866, "label": "2π/3" }
              ]
            },
            {
              "x": [-2.4, 6.9],
              "y": [-1.5, 1.5],
              "piTicks": true,
              "curves": [{ "c": "cos" }, { "c": "line", "m": 0, "k": -0.866, "dash": true, "soft": true }],
              "bands": [{ "x0": 0, "x1": 3.1416 }],
              "points": [
                { "x": 2.618, "y": -0.866, "label": "5π/6" },
                { "x": 3.6652, "y": -0.866, "label": "7π/6" }
              ]
            },
            {
              "x": [-2.6, 4.2],
              "y": [-3.2, 3.2],
              "piTicks": true,
              "curves": [{ "c": "tan" }, { "c": "line", "m": 0, "k": -1, "dash": true, "soft": true }],
              "bands": [{ "x0": -1.5708, "x1": 1.5708 }],
              "points": [
                { "x": -0.7854, "y": -1, "label": "−π/4" },
                { "x": 2.3562, "y": -1, "label": "3π/4" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find the principal values of (a) sin<sup>−1</sup>(−1/2), (b) cos<sup>−1</sup>(√3/2), (c) tan<sup>−1</sup>(1).",
          "steps": [
            "(a) Need <i>y</i> ∈ [−π/2, π/2] with sin <i>y</i> = −1/2. Since sin(−π/6) = −1/2 and −π/6 is inside, the value is −π/6.",
            "(b) Need <i>y</i> ∈ [0, π] with cos <i>y</i> = √3/2. Since cos(π/6) = √3/2 and π/6 is inside, the value is π/6.",
            "(c) Need <i>y</i> ∈ (−π/2, π/2) with tan <i>y</i> = 1. Since tan(π/4) = 1 and π/4 is inside, the value is π/4.",
            "Branch check: every answer sits inside its own cage, so all three are safe."
          ],
          "ans": "−π/6 · π/6 · π/4"
        },
        {
          "t": "ex",
          "tag": "CUET PATTERN",
          "q": "Which of these is the principal value branch of cosec<sup>−1</sup><i>x</i>? (a) (−π/2, π/2) (b) [0, π] − {π/2} (c) [−π/2, π/2] − {0} (d) [−π/2, π/2]",
          "steps": [
            "cosec<sup>−1</sup> borrows sine's branch and deletes the forbidden point where sin = 0, namely 0.",
            "So scan the options for sine's branch minus one point. Only (c) has that shape.",
            "(a) is tangent's branch, open at both ends. (b) is secant's, cosine-based and deleting π/2. (d) forgot the deletion entirely.",
            "The deleted point is always the tell: sec drops half-pi, cosec drops zero."
          ],
          "ans": "(c) [−π/2, π/2] − {0}"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate (a) sin<sup>−1</sup>(sin 2π/3), (b) cos<sup>−1</sup>(cos 7π/6), (c) cos<sup>−1</sup>[cos(−680°)].",
          "steps": [
            "(a) Branch [−π/2, π/2], and 2π/3 = 120° is outside. Fold with sin(π − θ) = sin θ: sin(2π/3) = sin(π/3), and π/3 is inside. Value π/3.",
            "(b) Branch [0, π], and 7π/6 = 210° is outside. Fold with cos(2π − θ) = cos θ: cos(7π/6) = cos(5π/6), and 5π/6 = 150° is inside. Value 5π/6.",
            "(c) Branch [0, π]. Cosine is even, so cos(−680°) = cos 680° = cos(720° − 40°) = cos 40°, and 40° is inside.",
            "Value 40°, which is 2π/9 in radians."
          ],
          "ans": "π/3 · 5π/6 · 2π/9"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "(a) Evaluate tan<sup>−1</sup>(tan 3π/4). (b) Write sin<sup>−1</sup>(sin <i>x</i>) as one expression valid for all <i>x</i> ∈ [π/2, 3π/2]. (c) Does sec<sup>−1</sup>(1/2) exist?",
          "steps": [
            "(a) Branch (−π/2, π/2), and 3π/4 = 135° is outside. tan(3π/4) = tan(3π/4 − π) = tan(−π/4), and −π/4 is inside. Value −π/4.",
            "(b) On the whole of [π/2, 3π/2] the angle <i>x</i> is outside the branch, so fold with sin <i>x</i> = sin(π − <i>x</i>).",
            "Check the ends: at <i>x</i> = π/2, π − <i>x</i> = π/2; at <i>x</i> = 3π/2, π − <i>x</i> = −π/2; and π − <i>x</i> runs monotonically through the branch in between. So sin<sup>−1</sup>(sin <i>x</i>) = π − <i>x</i> throughout.",
            "(c) Domain check first. sec<sup>−1</sup> needs |<i>x</i>| ≥ 1 and |1/2| is below 1, so 1/2 is not a legal input. No real angle has secant 1/2, because |sec θ| ≥ 1 always."
          ],
          "ans": "−π/4 · π − <i>x</i> · undefined"
        },
        {
          "t": "mcq",
          "q": "Which of the following is the principal value branch of cos<sup>−1</sup><i>x</i>?",
          "correct": 2,
          "opts": [
            { "label": "[−π/2, π/2]", "nudge": "That is sine's branch. Cosine is not odd, and its inverse never returns a negative angle at all." },
            { "label": "(0, π)", "nudge": "Right interval, wrong ends. cos⁻¹(1) = 0 and cos⁻¹(−1) = π are real values, so the branch is closed." },
            { "label": "[0, π]", "nudge": null },
            { "label": "(0, π) − {π/2}", "nudge": "Deleting π/2 is a sec⁻¹ move and it is illegitimate here, because cos⁻¹(0) = π/2 exists perfectly well." }
          ],
          "solution": "Cosine falls strictly from 1 to −1 on [0, π], hitting every value of [−1, 1] exactly once, so that closed interval is the branch."
        },
        {
          "t": "mcq",
          "q": "Which value can <b>never</b> be the output of sin<sup>−1</sup><i>x</i>?",
          "correct": 3,
          "opts": [
            { "label": "−π/2", "nudge": "A legitimate endpoint: sin⁻¹(−1) = −π/2. Students who think the branch is open reject it wrongly." },
            { "label": "0", "nudge": "sin⁻¹(0) = 0, squarely inside the branch and the centre of it." },
            { "label": "π/2", "nudge": "Also legitimate: sin⁻¹(1) = π/2. Sine's branch is closed at both ends, unlike tangent's." },
            { "label": "2π/3", "nudge": null }
          ],
          "solution": "sin⁻¹ is caged in [−π/2, π/2] and 2π/3 = 120° is outside it. Any sin⁻¹ answer larger than π/2 is an error, with no second-guessing required."
        },
        {
          "t": "mcq",
          "q": "sin<sup>−1</sup>(sin 2π/3) =",
          "correct": 1,
          "opts": [
            { "label": "2π/3", "nudge": "The headline trap: applying the identity when the inner angle is outside the branch. 120° cannot be a sin⁻¹ value." },
            { "label": "π/3", "nudge": null },
            { "label": "−π/3", "nudge": "Folded with the wrong identity, θ − π instead of π − θ. That is tangent's fold, not sine's." },
            { "label": "π/6", "nudge": "This confuses sin(2π/3) = √3/2 with 1/2 and then inverts the wrong number." }
          ],
          "solution": "sin(2π/3) = sin(π − 2π/3) = sin(π/3), and π/3 lies inside [−π/2, π/2], so the answer is π/3."
        },
        {
          "t": "mcq",
          "q": "Among <i>x</i> ∈ {−2, −1/2, 0, 3/4, 3}, the number of values for which sec<sup>−1</sup><i>x</i> is <b>not</b> defined is:",
          "correct": 2,
          "opts": [
            { "label": "1", "nudge": "Only one illegal input has been spotted. All three of −1/2, 0 and 3/4 have modulus below 1." },
            { "label": "2", "nudge": "A near miss, and it usually comes from forgetting that 0 also fails the test |x| ≥ 1." },
            { "label": "3", "nudge": null },
            { "label": "0", "nudge": "This applies sin⁻¹'s domain [−1, 1] instead. sec⁻¹ forbids the open interval (−1, 1), which is the exact opposite requirement." }
          ],
          "solution": "sec⁻¹ needs |x| ≥ 1. The illegal inputs are −1/2, 0 and 3/4, so three of the five fail. Both −2 and 3 are fine."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the principal values of (a) cos<sup>−1</sup>(−1/2), (b) tan<sup>−1</sup>(−√3), (c) cosec<sup>−1</sup>(2).",
              "a": "(a) 2π/3, since cos(2π/3) = −1/2 and 2π/3 ∈ [0, π]. (b) −π/3, since tan(−π/3) = −√3 and −π/3 ∈ (−π/2, π/2). (c) π/6, since cosec(π/6) = 2 and π/6 lies in [−π/2, π/2] − {0}."
            },
            {
              "q": "[CUET] State the principal value branch of sec<sup>−1</sup><i>x</i> and of cot<sup>−1</sup><i>x</i>, and the domain of sin<sup>−1</sup><i>x</i>.",
              "a": "sec<sup>−1</sup>: [0, π] − {π/2}. cot<sup>−1</sup>: (0, π), open at both ends. Domain of sin<sup>−1</sup><i>x</i>: [−1, 1]."
            },
            {
              "q": "[JEE Main] Evaluate cos<sup>−1</sup>(cos 13π/6) and tan<sup>−1</sup>(tan 5π/6).",
              "a": "cos(13π/6) = cos(2π + π/6) = cos(π/6) and π/6 ∈ [0, π], so the first is π/6. tan(5π/6) = tan(5π/6 − π) = tan(−π/6) and −π/6 ∈ (−π/2, π/2), so the second is −π/6."
            },
            {
              "q": "[JEE Main] For how many integer values of <i>x</i> is sin<sup>−1</sup><i>x</i> defined? List them.",
              "a": "sin<sup>−1</sup> needs <i>x</i> ∈ [−1, 1], and the integers in that interval are −1, 0 and 1. Three values."
            },
            {
              "q": "[JEE Advanced] Simplify sin<sup>−1</sup>(sin <i>x</i>) for <i>x</i> ∈ [3π/2, 2π], and evaluate cos<sup>−1</sup>[cos(−3)] with −3 in radians.",
              "a": "Fold with sin <i>x</i> = sin(<i>x</i> − 2π). Since <i>x</i> − 2π ∈ [−π/2, 0], which is inside the branch, sin<sup>−1</sup>(sin <i>x</i>) = <i>x</i> − 2π. For the second, cosine is even so cos(−3) = cos 3, and 3 is below π, which puts 3 inside [0, π], giving the answer 3."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reading sin<sup>−1</sup><i>x</i> as <b>1/sin <i>x</i></b>. The −1 marks the inverse function, not a power. sin<sup>−1</sup><i>x</i> is an angle, 1/sin <i>x</i> = cosec <i>x</i> is a ratio.",
            "Answering <b>outside the branch</b>. Writing sin<sup>−1</sup>(sin 2π/3) = 2π/3 or cos<sup>−1</sup>(cos 7π/6) = 7π/6. The cancellation holds only when the inner angle is already inside.",
            "<b>Domain blindness.</b> sin<sup>−1</sup>(2), cos<sup>−1</sup>(−1.5), sec<sup>−1</sup>(0.7) and cosec<sup>−1</sup>(0) are all undefined. Run the domain check before computing anything.",
            "Mixing up the reciprocal cages. <b>sec<sup>−1</sup> is cosine-based and deletes π/2; cosec<sup>−1</sup> is sine-based and deletes 0.</b> Forgetting the deletion is just as costly as swapping them.",
            "<b>Mode mismatch.</b> Higher exams want principal values in radians. Do not leave 30° when the marking key wants π/6, and read which one the question asked for."
          ]
        },
        {
          "t": "protip",
          "html": "run the same two-second ritual on every f⁻¹(f(θ)) question: write the branch, ask “is θ in it?”, fold if it is not. that one habit converts the highest-frequency jee main trap in this chapter into a guaranteed mark, and paired with the free branch-check on your final answer it makes you almost impossible to trick here."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "sin⁻¹: [−1, 1] → [−π/2, π/2]", "note": "closed at both ends" },
            { "f": "cos⁻¹: [−1, 1] → [0, π] · tan⁻¹: ℝ → (−π/2, π/2)", "note": "tangent's cage is open" },
            { "f": "cot⁻¹: ℝ → (0, π)", "note": "open, cot undefined at 0 and π" },
            { "f": "sec⁻¹: |x| ≥ 1 → [0, π] − {π/2}", "note": "cosine's cage, one point deleted" },
            { "f": "cosec⁻¹: |x| ≥ 1 → [−π/2, π/2] − {0}", "note": "sine's cage, one point deleted" },
            { "f": "f⁻¹(f(θ)) = θ only if θ is in the branch", "note": "otherwise fold first, then read off" }
          ],
          "aids": [
            "“sin and tan hug zero, cos and cot climb to pi”",
            "“sec drops half-pi, cosec drops zero”",
            "“check the cage, fold the angle”"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Self-Map Identities",
      "chip": "02 IDENTITIES",
      "kalam": "odd for the zero-centred trio, pi minus for the rest",
      "blocks": [
        {
          "t": "p",
          "html": "Each inverse trigonometric function lives in a cage, its principal value branch: sin<sup>−1</sup> in [−π/2, π/2], cos<sup>−1</sup> in [0, π], and so on. This topic asks what happens when you <b>feed the cage a transformed input</b>: a reciprocal 1/<i>x</i>, a negation −<i>x</i>, or two cages paired together. The remarkable fact is that none of these produces a messy new angle. They all return the <b>same family of angles</b>, shifted or reflected in one of exactly two ways."
        },
        {
          "t": "p",
          "html": "The split is decided by the <b>shape of the branch</b>, and nothing else. Sine, tangent and cosecant have branches <b>centred on 0</b>, symmetric about the origin. Cosine, secant and cotangent have branches <b>running from 0 up to π</b>, sitting entirely on the positive side. A branch symmetric about 0 can absorb a sign flip and stay inside itself: negate the input, negate the answer. A branch trapped on [0, π] cannot go negative at all, so instead the answer <b>reflects across the midpoint π/2</b>, landing at π minus the original."
        },
        {
          "t": "think",
          "html": "a row of students on a number line, and “negate the input” is the instruction “stand at your mirror position”. if your allowed zone straddles zero you just swap sides, still legal. if your zone runs from the wall at 0 to the wall at π, the mirror puts you behind a wall, so you reflect about the centre of the room instead and land at π minus your spot."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · WHY THE SPLIT EXISTS, TAP A CASE",
          "mathChips": true,
          "chips": ["odd trio", "π − trio", "tan⁻¹(1/x)"],
          "captions": [
            "The zero-centred branch, shared by sin⁻¹, tan⁻¹ and cosec⁻¹. The angle θ and its mirror −θ are both inside the bar, so negating the input simply negates the answer. These three are odd functions, and that is the whole reason.",
            "The [0, π] branch, shared by cos⁻¹, sec⁻¹ and cot⁻¹. The naive mirror −θ lands outside the bar, hollow and illegal. The legal move is to reflect about the centre π/2, landing at π − θ, still inside. Same instruction, different legal response.",
            "The reciprocal trap. Write cot⁻¹x = y, which lives in (0, π). If x is positive, y lands in the left half, which is inside tan⁻¹'s cage, so tan⁻¹(1/x) = cot⁻¹x. If x is negative, y lands in the right half, outside that cage, and the in-cage angle is y − π."
          ],
          "frames": [
            {
              "x": [-3.7, 3.7],
              "intervals": [{ "from": -1.5708, "to": 1.5708, "label": "[−π/2, π/2]" }],
              "points": [
                { "x": -0.95, "y": 0, "label": "−θ" },
                { "x": 0.95, "y": 0, "label": "θ" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [{ "from": 0, "to": 3.1416, "label": "[0, π]" }],
              "points": [
                { "x": -0.95, "y": 0, "label": "−θ", "open": true, "soft": true },
                { "x": 0.9, "y": 0 },
                { "x": 2.2416, "y": 0, "label": "π − θ" }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": 0, "to": 1.5708, "openLeft": true, "label": "x > 0" },
                { "from": 1.5708, "to": 3.1416, "openRight": true, "label": "x < 0" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "RECIPROCAL IDENTITIES",
          "tag": "check the domain first",
          "main": "sin<sup>−1</sup>(1/<i>x</i>) = cosec<sup>−1</sup><i>x</i> · cos<sup>−1</sup>(1/<i>x</i>) = sec<sup>−1</sup><i>x</i>",
          "legend": [
            "both need |<i>x</i>| ≥ 1, because 1/<i>x</i> has to land inside [−1, 1] for sin<sup>−1</sup> or cos<sup>−1</sup> to accept it",
            "tan<sup>−1</sup>(1/<i>x</i>) = cot<sup>−1</sup><i>x</i> holds <b>only for <i>x</i> positive</b>",
            "for <i>x</i> negative it becomes tan<sup>−1</sup>(1/<i>x</i>) = cot<sup>−1</sup><i>x</i> − π"
          ],
          "note": "The tangent row is the one the exams sit on. Cosecant is the reciprocal of sine, so inverting a reciprocal returns the co-named function, but the tangent version acquires a −π correction the moment <i>x</i> turns negative."
        },
        {
          "t": "defgrid",
          "title": "Negative argument, split by branch shape",
          "rows": [
            { "k": "sin<sup>−1</sup>(−<i>x</i>)", "v": "= −sin<sup>−1</sup><i>x</i>, for <i>x</i> ∈ [−1, 1]" },
            { "k": "tan<sup>−1</sup>(−<i>x</i>)", "v": "= −tan<sup>−1</sup><i>x</i>, for every real <i>x</i>" },
            { "k": "cosec<sup>−1</sup>(−<i>x</i>)", "v": "= −cosec<sup>−1</sup><i>x</i>, for |<i>x</i>| ≥ 1" },
            { "k": "cos<sup>−1</sup>(−<i>x</i>)", "v": "= π − cos<sup>−1</sup><i>x</i>, for <i>x</i> ∈ [−1, 1]" },
            { "k": "cot<sup>−1</sup>(−<i>x</i>)", "v": "= π − cot<sup>−1</sup><i>x</i>, for every real <i>x</i>" },
            { "k": "sec<sup>−1</sup>(−<i>x</i>)", "v": "= π − sec<sup>−1</sup><i>x</i>, for |<i>x</i>| ≥ 1" }
          ]
        },
        {
          "t": "formula",
          "kicker": "COMPLEMENTARY IDENTITIES",
          "tag": "each pair makes a right angle",
          "main": "sin<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>x</i> = π/2",
          "legend": [
            "tan<sup>−1</sup><i>x</i> + cot<sup>−1</sup><i>x</i> = π/2, for every real <i>x</i>",
            "cosec<sup>−1</sup><i>x</i> + sec<sup>−1</sup><i>x</i> = π/2, for |<i>x</i>| ≥ 1",
            "the first holds for every legal <i>x</i> in [−1, 1], negative values included"
          ],
          "note": "This descends from the oldest fact in trigonometry, sin θ = cos(π/2 − θ), inverted. Do not “correct” it when <i>x</i> is negative: the sign of <i>x</i> is irrelevant, and adjusting for it breaks an answer that was already right."
        },
        {
          "t": "p",
          "html": "One structural rule generates the whole negative-argument table: <b>odd is the same thing as a zero-centred branch</b>, which picks out sin<sup>−1</sup>, tan<sup>−1</sup> and cosec<sup>−1</sup>; and <b>the π − form is the same thing as a [0, π] branch</b>, which picks out cos<sup>−1</sup>, sec<sup>−1</sup> and cot<sup>−1</sup>. Memorise the rule and the six rows write themselves. Memorise the six rows and you will still mix them up under time pressure."
        },
        {
          "t": "p",
          "html": "Every identity above is annotated with the values of <i>x</i> where it is <b>legal</b>, and that annotation is not decoration. Apply sin<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>x</i> = π/2 at <i>x</i> = 2 and you have written nonsense, because neither term exists. After applying a π − identity, run the branch check: if cos<sup>−1</sup>(−<i>x</i>) has come out negative, you used the odd form by mistake."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TWO BRANCH SHAPES, TWO ANSWERS, TAP A LINE",
          "steps": [
            {
              "eq": "let sin⁻¹x = y, so sin y = x with y ∈ [−π/2, π/2]",
              "why": "Naming the angle is the whole method. Everything after this is a statement about y and about where y is allowed to sit."
            },
            {
              "eq": "sin(−y) = −sin y = −x, and −y is still in [−π/2, π/2]",
              "why": "The branch is symmetric about 0, so the reflected angle is still legal. It therefore qualifies as the principal value, giving sin⁻¹(−x) = −y = −sin⁻¹x. The same argument runs verbatim for tan⁻¹ and cosec⁻¹."
            },
            {
              "eq": "let cos⁻¹x = y ∈ [0, π]; the naive −y fails twice",
              "why": "First, cos(−y) = cos y = x, not −x, so it answers the wrong question. Second, −y is outside [0, π] anyway. Cosine cannot be odd, and the cage is the reason."
            },
            {
              "eq": "cos(π − y) = −cos y = −x, and π − y ∈ [0, π]",
              "why": "Value correct, cage legal. So π − y is the principal value of cos⁻¹(−x), which is exactly the π − identity. Identical logic gives the sec⁻¹ and cot⁻¹ versions."
            },
            {
              "eq": "cos(π/2 − y) = sin y = x, and π/2 − y ∈ [0, π]",
              "why": "With y = sin⁻¹x ∈ [−π/2, π/2], the angle π/2 − y lands inside cosine's cage, so it qualifies as cos⁻¹x. Hence sin⁻¹x + cos⁻¹x = y + (π/2 − y) = π/2. The branch check is not a formality here, it is what makes the partner angle legal."
            },
            {
              "eq": "cot⁻¹x = y ∈ (0, π), so tan y = 1/x",
              "why": "If x is positive then y ∈ (0, π/2), inside tan⁻¹'s cage, so tan⁻¹(1/x) = y = cot⁻¹x. If x is negative then y ∈ (π/2, π), outside it, and the in-cage angle with the same tangent is y − π. That single sign-dependent jump is the highest-value trap in this topic."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Deciding which identity fires",
          "steps": [
            "<b>Read the sign of the argument first.</b> A negative argument sitting inside cos<sup>−1</sup>, sec<sup>−1</sup> or cot<sup>−1</sup> means your hand writes “π −” before it computes anything at all.",
            "<b>A negative argument inside sin<sup>−1</sup>, tan<sup>−1</sup> or cosec<sup>−1</sup></b> means pull the minus straight out to the front and carry on.",
            "<b>A reciprocal argument</b> 1/<i>x</i> with sin<sup>−1</sup> or cos<sup>−1</sup> needs |<i>x</i>| ≥ 1; with tan<sup>−1</sup> it needs <i>x</i> positive, and otherwise you subtract π.",
            "<b>A co-named pair of the same <i>x</i></b>, such as tan<sup>−1</sup><i>t</i> + cot<sup>−1</sup><i>t</i>, is finished by the complementary law. Stop computing the moment you see one.",
            "<b>Branch-check.</b> A cos<sup>−1</sup>, sec<sup>−1</sup> or cot<sup>−1</sup> value that came out negative means the odd form was used where the π − form belonged."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate using identities: (a) sin<sup>−1</sup>(−1/2), (b) cos<sup>−1</sup>(−√3/2), (c) verify that sin<sup>−1</sup>(1/2) + cos<sup>−1</sup>(1/2) = π/2.",
          "steps": [
            "(a) sin<sup>−1</sup> is odd, so sin<sup>−1</sup>(−1/2) = −sin<sup>−1</sup>(1/2) = −π/6.",
            "(b) cos<sup>−1</sup> is not odd, so use the π − form: cos<sup>−1</sup>(−√3/2) = π − cos<sup>−1</sup>(√3/2) = π − π/6 = 5π/6.",
            "Branch check on (b): 5π/6 lies in [0, π]. Writing −π/6 here is the classic error, and it is caught by the check for free.",
            "(c) sin<sup>−1</sup>(1/2) = π/6 and cos<sup>−1</sup>(1/2) = π/3, and π/6 + 2π/6 = 3π/6 = π/2."
          ],
          "ans": "−π/6 · 5π/6 · π/2"
        },
        {
          "t": "ex",
          "tag": "CUET PATTERN",
          "q": "cot<sup>−1</sup>(−√3) equals: (a) −π/6 (b) π/6 (c) 5π/6 (d) 2π/3",
          "steps": [
            "cot<sup>−1</sup> is a π − function, because its branch (0, π) never holds a negative angle.",
            "cot<sup>−1</sup>(−√3) = π − cot<sup>−1</sup>(√3) = π − π/6 = 5π/6.",
            "(a) is the odd-function reflex and (b) ignores the minus sign entirely.",
            "(d) is π − π/3, which comes from writing cot<sup>−1</sup>(√3) = π/3. That is tan<sup>−1</sup>(√3), not cot<sup>−1</sup>(√3)."
          ],
          "ans": "(c) 5π/6"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the value of tan<sup>−1</sup>(√3) − cot<sup>−1</sup>(−√3).",
          "steps": [
            "tan<sup>−1</sup>(√3) = π/3, since π/3 lies in (−π/2, π/2).",
            "For the second term the argument is negative and the function is cot<sup>−1</sup>, so apply the π − identity: cot<sup>−1</sup>(−√3) = π − cot<sup>−1</sup>(√3) = π − π/6 = 5π/6.",
            "π/3 − 5π/6 = 2π/6 − 5π/6 = −3π/6 = −π/2.",
            "The trap answer π/2 comes from treating cot<sup>−1</sup> as odd, which would give π/3 − (−π/6) = π/2. The correct value is negative."
          ],
          "ans": "−π/2"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Simplify <i>f</i>(<i>x</i>) = tan<sup>−1</sup><i>x</i> + tan<sup>−1</sup>(1/<i>x</i>) for every real <i>x</i> ≠ 0, stating the answer piecewise.",
          "steps": [
            "For <i>x</i> positive, tan<sup>−1</sup>(1/<i>x</i>) = cot<sup>−1</sup><i>x</i>, so <i>f</i>(<i>x</i>) = tan<sup>−1</sup><i>x</i> + cot<sup>−1</sup><i>x</i> = π/2 by the complementary law.",
            "For <i>x</i> negative, the reciprocal identity carries its correction: tan<sup>−1</sup>(1/<i>x</i>) = cot<sup>−1</sup><i>x</i> − π.",
            "So <i>f</i>(<i>x</i>) = tan<sup>−1</sup><i>x</i> + cot<sup>−1</sup><i>x</i> − π = π/2 − π = −π/2.",
            "Sanity check at <i>x</i> = 1: π/4 + π/4 = π/2. At <i>x</i> = −1: −π/4 − π/4 = −π/2. The entire difficulty of this famous result is the single −π hidden for negative <i>x</i>."
          ],
          "ans": "π/2 when <i>x</i> is positive, −π/2 when <i>x</i> is negative"
        },
        {
          "t": "mcq",
          "q": "Which of these is <b>odd</b>, that is, satisfies <i>f</i><sup>−1</sup>(−<i>x</i>) = −<i>f</i><sup>−1</sup>(<i>x</i>)?",
          "correct": 2,
          "opts": [
            { "label": "cos⁻¹ x", "nudge": "Its branch [0, π] holds no negative angle at all, so it cannot possibly be odd. It obeys the π − rule instead." },
            { "label": "cot⁻¹ x", "nudge": "Same story: the branch (0, π) is entirely positive, so cot⁻¹(−x) = π − cot⁻¹x." },
            { "label": "tan⁻¹ x", "nudge": null },
            { "label": "sec⁻¹ x", "nudge": "Cosine-based, with branch [0, π] − {π/2}, so it reflects through π/2 rather than negating." }
          ],
          "solution": "Odd is the same statement as a zero-centred branch, which picks out exactly sin⁻¹, tan⁻¹ and cosec⁻¹. The reflex that all six are odd is the single most common error in this topic."
        },
        {
          "t": "mcq",
          "q": "sin<sup>−1</sup>(−√3/2) + cos<sup>−1</sup>(−√3/2) =",
          "correct": 1,
          "opts": [
            { "label": "0", "nudge": "This assumes the two negatives cancel each other. The identity is about the pair of functions, not about the sign of the argument." },
            { "label": "π/2", "nudge": null },
            { "label": "π", "nudge": "This comes from evaluating each term and mis-adding: −π/3 + 5π/6 is π/2, not π." },
            { "label": "−π/2", "nudge": "This flips the sign of the whole identity because the argument is negative. The complementary law has no sign dependence at all." }
          ],
          "solution": "sin⁻¹x + cos⁻¹x = π/2 for every x in [−1, 1], sign included. The long way round: −π/3 + 5π/6 = π/2."
        },
        {
          "t": "mcq",
          "q": "For <i>x</i> negative, tan<sup>−1</sup>(1/<i>x</i>) equals",
          "correct": 1,
          "opts": [
            { "label": "cot⁻¹ x", "nudge": "That is the positive-x form applied blindly, the headline trap here. For negative x it puts the answer outside tan⁻¹'s cage." },
            { "label": "cot⁻¹ x − π", "nudge": null },
            { "label": "π − cot⁻¹ x", "nudge": "A π − reflex borrowed from the negative-argument family. This is a reciprocal identity, and its correction is a subtraction of π, not a reflection." },
            { "label": "−cot⁻¹ x", "nudge": "This treats the correction as a sign flip. cot⁻¹x lies in (0, π), so −cot⁻¹x lands in (−π, 0) and overshoots the cage." }
          ],
          "solution": "Write cot⁻¹x = y. For negative x that y lies in (π/2, π), outside (−π/2, π/2), and the in-cage angle with the same tangent is y − π."
        },
        {
          "t": "mcq",
          "q": "tan<sup>−1</sup>(1/√3) + cot<sup>−1</sup>(1/√3) =",
          "correct": 2,
          "opts": [
            { "label": "π/3", "nudge": "That is the value of just one term, cot⁻¹(1/√3), reported as though it were the sum." },
            { "label": "2π/3", "nudge": "This doubles π/3, as if both terms were equal. They are π/6 and π/3, which are not the same angle." },
            { "label": "π/2", "nudge": null },
            { "label": "5π/6", "nudge": "This adds π/2 and π/3, sneaking in an extra term after the complementary law has already ended the question." }
          ],
          "solution": "tan⁻¹t + cot⁻¹t = π/2 for every real t, so no evaluation is needed at all. The long way round: π/6 + π/3 = π/2."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate (a) tan<sup>−1</sup>(−1), (b) sec<sup>−1</sup>(−2), (c) sin<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>x</i> at <i>x</i> = −√3/2.",
              "a": "(a) Odd, so −tan<sup>−1</sup>(1) = −π/4. (b) π − form, so π − sec<sup>−1</sup>(2) = π − π/3 = 2π/3. (c) π/2, because the complementary law holds for every <i>x</i> in [−1, 1] and the sign of <i>x</i> is irrelevant."
            },
            {
              "q": "[CUET] State cos<sup>−1</sup>(−1/2) and cosec<sup>−1</sup>(−2), naming the identity used in each case.",
              "a": "cos<sup>−1</sup>(−1/2) = π − π/3 = 2π/3, by the π − identity. cosec<sup>−1</sup>(−2) = −cosec<sup>−1</sup>(2) = −π/6, by the odd identity."
            },
            {
              "q": "[JEE Main] Simplify sec<sup>−1</sup>(−<i>x</i>) + cosec<sup>−1</sup>(−<i>x</i>) for |<i>x</i>| ≥ 1.",
              "a": "(π − sec<sup>−1</sup><i>x</i>) + (−cosec<sup>−1</sup><i>x</i>) = π − (sec<sup>−1</sup><i>x</i> + cosec<sup>−1</sup><i>x</i>) = π − π/2 = π/2. One term reflects and the other negates, which is the split in one line."
            },
            {
              "q": "[JEE Main] Find tan<sup>−1</sup>(tan 3π/4) + cot<sup>−1</sup>(cot 3π/4).",
              "a": "Fold into the branches first. tan(3π/4) = −1, so the first term is tan<sup>−1</sup>(−1) = −π/4. cot(3π/4) = −1, so the second is cot<sup>−1</sup>(−1) = π − π/4 = 3π/4. The sum is π/2."
            },
            {
              "q": "[JEE Advanced] If sin<sup>−1</sup><i>x</i> + sin<sup>−1</sup><i>y</i> = π/2, express cos<sup>−1</sup><i>x</i> in terms of <i>y</i> and find a relation between <i>x</i> and <i>y</i> free of inverse functions.",
              "a": "sin<sup>−1</sup><i>y</i> = π/2 − sin<sup>−1</sup><i>x</i> = cos<sup>−1</sup><i>x</i> by the complementary law. Taking the cosine, <i>x</i> = cos(sin<sup>−1</sup><i>y</i>) = √(1 − <i>y</i><sup>2</sup>), so <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 1, with both <i>x</i> and <i>y</i> non-negative."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>“All six are odd.”</b> The cardinal sin. Only sin<sup>−1</sup>, tan<sup>−1</sup> and cosec<sup>−1</sup> flip the sign; cos<sup>−1</sup>, sec<sup>−1</sup> and cot<sup>−1</sup> use π −. Anchor it to the cage: a [0, π] branch can never output a negative angle.",
            "Quoting <b>tan<sup>−1</sup>(1/<i>x</i>) = cot<sup>−1</sup><i>x</i></b> without checking the sign of <i>x</i>. For negative <i>x</i> it is cot<sup>−1</sup><i>x</i> − π, and that hidden π is worth an entire question.",
            "Ignoring the <b>domain gates</b>. The complementary law needs <i>x</i> ∈ [−1, 1] and sin<sup>−1</sup>(1/<i>x</i>) = cosec<sup>−1</sup><i>x</i> needs |<i>x</i>| ≥ 1. An identity used outside its legal domain scores zero however clean the algebra looks.",
            "“Correcting” the complementary law for a <b>negative argument</b>. It is sign-agnostic, and adjusting it turns a right answer into a wrong one.",
            "Following a coaching source that puts <b>cot<sup>−1</sup> on (−π/2, π/2]</b>. NCERT, and this chapter, lock cot<sup>−1</sup> to (0, π), and cot<sup>−1</sup> of a negative number changes value between the two conventions. Stay with NCERT unless your paper says otherwise."
          ]
        },
        {
          "t": "protip",
          "html": "build one reflex and it pays for the whole topic: a negative argument plus a cos, sec or cot function means your hand writes “π −” first and evaluates second. that single habit turns the highest-frequency cuet and jee main value trap here into an automatic correct answer, and it costs you nothing to check."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "sin⁻¹(−x) = −sin⁻¹x · tan⁻¹(−x) = −tan⁻¹x", "note": "zero-centred cages, so odd" },
            { "f": "cos⁻¹(−x) = π − cos⁻¹x · cot⁻¹(−x) = π − cot⁻¹x", "note": "[0, π] cages, so reflect" },
            { "f": "sin⁻¹x + cos⁻¹x = π/2, for |x| ≤ 1", "note": "any legal x, sign irrelevant" },
            { "f": "tan⁻¹x + cot⁻¹x = π/2 · cosec⁻¹x + sec⁻¹x = π/2", "note": "the other two co-pairs" },
            { "f": "tan⁻¹(1/x) = cot⁻¹x for x positive, cot⁻¹x − π for x negative", "note": "the only sign-sensitive row" }
          ],
          "aids": [
            "“sin, tan, cosec flip the sign; cos, sec, cot reflect through”",
            "“co-pair adds to ninety”",
            "“minus inside a cos-family inverse? write pi minus first”"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Sums, Differences and the ±π Correction",
      "chip": "03 COMBINE",
      "kalam": "compute xy first, then choose the formula",
      "blocks": [
        {
          "t": "p",
          "html": "So far every identity has transformed <b>one</b> inverse function. Now combine <b>two</b>. Add tan<sup>−1</sup><i>x</i> and tan<sup>−1</sup><i>y</i> and ask which single inverse function comes out. The engine is nothing new: it is the ordinary addition formula for tangent, which you already have from Class 11, run backwards. What is new is a correction term, and that one term separates the students who memorised from the students who understood."
        },
        {
          "t": "think",
          "html": "tan⁻¹x and tan⁻¹y are just two angles, call them A and B. you already know tan(A + B) = (x + y)/(1 − xy). so A + B is an angle with that tangent, and the only question left is whether A + B is still inside the cage."
        },
        {
          "t": "p",
          "html": "Here is the whole subtlety in one picture. A and B each live in (−π/2, π/2), so their sum ranges over <b>(−π, π)</b>, which is twice as wide as the cage tan<sup>−1</sup> is allowed to answer in. If the two angles are <b>both large and positive</b>, which happens exactly when <i>xy</i> is above 1, the sum overshoots π/2 and the formula hands back an angle that is <b>short by π</b>. Add it back. Two large negative angles undershoot −π/2 and you subtract π instead. The ±π is not a rule to memorise, it is the cage reasserting itself, exactly as in range-folding."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · WHERE A + B LANDS, TAP A CASE",
          "mathChips": true,
          "chips": ["xy below 1", "xy above 1, both +", "xy above 1, both −"],
          "captions": [
            "The clean case. A + B falls inside the open cage (−π/2, π/2), which is the only place tan⁻¹ is allowed to answer, so the formula reads the sum off directly and no correction is needed.",
            "Both x and y positive with product above 1 pushes A + B past π/2, into (π/2, π). The formula still returns an in-cage angle, hollow here, and that angle is exactly π short of the truth. Add π back.",
            "The mirror image. Both x and y negative with product above 1 drags A + B below −π/2, into (−π, −π/2). The in-cage angle the formula returns is now π too large, so subtract π. There is no third correction, because xy above 1 forces x and y to share a sign."
          ],
          "frames": [
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -1.5708, "to": 1.5708, "openLeft": true, "openRight": true, "label": "(−π/2, π/2)" }
              ],
              "points": [{ "x": 0.95, "y": 0, "label": "A + B" }]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -1.5708, "to": 1.5708, "openLeft": true, "openRight": true, "soft": true },
                { "from": 1.5708, "to": 3.1416, "label": "(π/2, π)" }
              ],
              "points": [
                { "x": 2.4, "y": 0, "label": "A + B" },
                { "x": -0.7416, "y": 0, "label": "short by π", "open": true }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [
                { "from": -1.5708, "to": 1.5708, "openLeft": true, "openRight": true, "soft": true },
                { "from": -3.1416, "to": -1.5708, "label": "(−π, −π/2)" }
              ],
              "points": [
                { "x": -2.4, "y": 0, "label": "A + B" },
                { "x": 0.7416, "y": 0, "label": "long by π", "open": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE ARCTANGENT SUM",
          "tag": "compute xy first",
          "main": "tan<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>y</i> = tan<sup>−1</sup>((<i>x</i> + <i>y</i>)/(1 − <i>xy</i>))",
          "legend": [
            "valid exactly as written when <i>xy</i> is below 1",
            "<b>add π</b> when <i>xy</i> is above 1 and both <i>x</i> and <i>y</i> are positive",
            "<b>subtract π</b> when <i>xy</i> is above 1 and both <i>x</i> and <i>y</i> are negative"
          ],
          "note": "A product above 1 forces <i>x</i> and <i>y</i> to have the same sign, so those three lines cover every case there is. One number, <i>xy</i>, decides which line you are on, and computing it takes two seconds."
        },
        {
          "t": "formula",
          "kicker": "THE ARCTANGENT DIFFERENCE",
          "tag": "note the plus underneath",
          "main": "tan<sup>−1</sup><i>x</i> − tan<sup>−1</sup><i>y</i> = tan<sup>−1</sup>((<i>x</i> − <i>y</i>)/(1 + <i>xy</i>))",
          "legend": [
            "valid when <i>xy</i> is above −1, which is the difference version of the same cage test",
            "the denominator carries a <b>plus</b>, the opposite of the sum formula",
            "it comes from the sum formula with −<i>y</i> in place of <i>y</i>, so there is only one formula to remember"
          ],
          "note": "This is also the shape that makes a series collapse: any term of the form (<i>a</i> − <i>b</i>)/(1 + <i>ab</i>) is tan<sup>−1</sup><i>a</i> − tan<sup>−1</sup><i>b</i> in disguise. Mixing the two denominators is endemic, so say it once: sum over one minus, difference over one plus."
        },
        {
          "t": "defgrid",
          "title": "Sums of arcsines and arccosines",
          "rows": [
            { "k": "sin<sup>−1</sup><i>x</i> + sin<sup>−1</sup><i>y</i>", "v": "= sin<sup>−1</sup>(<i>x</i>√(1 − <i>y</i><sup>2</sup>) + <i>y</i>√(1 − <i>x</i><sup>2</sup>)), if <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> ≤ 1 or <i>xy</i> is negative" },
            { "k": "cos<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>y</i>", "v": "= cos<sup>−1</sup>(<i>xy</i> − √(1 − <i>x</i><sup>2</sup>)√(1 − <i>y</i><sup>2</sup>)), if <i>x</i> + <i>y</i> ≥ 0" },
            { "k": "when the condition fails", "v": "a ±π or 2π − correction applies, on exactly the same cage logic as the arctangent sum" },
            { "k": "the safe route", "v": "convert to arctangents first, where the correction is decided by a single product test" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE ±π COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "A = tan⁻¹x and B = tan⁻¹y, so A, B ∈ (−π/2, π/2)",
              "why": "Name the two angles. Everything that follows is a statement about A + B and about where the cage will let it be reported."
            },
            {
              "eq": "tan(A + B) = (tan A + tan B)/(1 − tan A tan B) = (x + y)/(1 − xy)",
              "why": "The Class 11 addition formula, unchanged and unrederived. No new trigonometry enters this topic at all."
            },
            {
              "eq": "A + B ranges over (−π, π), wider than the cage",
              "why": "Two angles each below π/2 in size can sum to almost π. The tangent of the sum is known, but tan⁻¹ can only report an angle in (−π/2, π/2), so the two need reconciling."
            },
            {
              "eq": "xy below 1 ⇒ A + B ∈ (−π/2, π/2)",
              "why": "Inside the cage, so the formula reads the sum off directly. This is the case every textbook proof quietly assumes."
            },
            {
              "eq": "xy above 1 with x, y positive ⇒ A + B ∈ (π/2, π)",
              "why": "Above the cage. tan⁻¹ returns the angle in the cage with the same tangent, which is π less than the truth, so add π back."
            },
            {
              "eq": "xy above 1 with x, y negative ⇒ A + B ∈ (−π, −π/2)",
              "why": "Below the cage, and the mirror image of the previous line: the reported angle is π too big, so subtract π. The ± is purely a branch correction, identical in spirit to folding a fixed angle."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any arctangent sum, in order",
          "steps": [
            "<b>Compute <i>xy</i>.</b> That one number decides everything, so do it before you touch the formula, not after you have written half a line.",
            "<b>Below 1:</b> write tan<sup>−1</sup>((<i>x</i> + <i>y</i>)/(1 − <i>xy</i>)) and stop.",
            "<b>Above 1:</b> read the common sign, then add π if both are positive and subtract π if both are negative.",
            "<b>Sanity-check the size.</b> tan<sup>−1</sup>2 and tan<sup>−1</sup>3 each exceed π/4, so their sum must exceed π/2, which rules out any acute answer instantly.",
            "<b>If it is an equation, audit the roots.</b> Taking the tangent of both sides can create candidates the original rejects, so test every root against the case you assumed."
          ]
        },
        {
          "t": "p",
          "html": "The difference formula has a second life. Whenever a series term has the shape (<i>a</i> − <i>b</i>)/(1 + <i>ab</i>), it is secretly tan<sup>−1</sup><i>a</i> − tan<sup>−1</sup><i>b</i>, and consecutive terms cancel. The whole game in a JEE series question is <b>recognising that shape hiding inside a denominator</b> like 1 + <i>n</i> + <i>n</i><sup>2</sup>. Everything after the recognition is bookkeeping."
        },
        {
          "t": "formula",
          "kicker": "THE TELESCOPING PATTERN",
          "tag": "the JEE series shape",
          "main": "1/(1 + <i>n</i> + <i>n</i><sup>2</sup>) = ((<i>n</i> + 1) − <i>n</i>)/(1 + <i>n</i>(<i>n</i> + 1))",
          "legend": [
            "so tan<sup>−1</sup>(1/(1 + <i>n</i> + <i>n</i><sup>2</sup>)) = tan<sup>−1</sup>(<i>n</i> + 1) − tan<sup>−1</sup><i>n</i>",
            "consecutive terms annihilate and only the two ends survive",
            "as <i>N</i> grows without bound, tan<sup>−1</sup>(<i>N</i> + 1) tends to π/2"
          ],
          "note": "The same engineering handles 1/(2<i>n</i><sup>2</sup>) = ((2<i>n</i> + 1) − (2<i>n</i> − 1))/(1 + (2<i>n</i> + 1)(2<i>n</i> − 1)). If your chosen split does not cancel, the split is wrong, not the method."
        },
        {
          "t": "p",
          "html": "A standing exam pattern runs the identity <b>backwards</b>. You are handed a condition on a <i>sum</i> of inverse functions and asked for the purely algebraic relation between the variables, or the reverse. The engine is one pair of expansions: writing <i>A</i> = tan<sup>−1</sup><i>x</i>, <i>B</i> = tan<sup>−1</sup><i>y</i>, <i>C</i> = tan<sup>−1</sup><i>z</i> and dividing the three-angle addition formulas through by cos <i>A</i> cos <i>B</i> cos <i>C</i> turns both sine and cosine of the sum into polynomials in <i>x</i>, <i>y</i>, <i>z</i>."
        },
        {
          "t": "formula",
          "kicker": "CONDITIONAL SUMS OF THREE",
          "tag": "x, y, z all positive",
          "main": "tan<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>y</i> + tan<sup>−1</sup><i>z</i> = π ⟺ <i>x</i> + <i>y</i> + <i>z</i> = <i>xyz</i>",
          "legend": [
            "and the same sum equals π/2 exactly when <i>xy</i> + <i>yz</i> + <i>zx</i> = 1",
            "both fall out of sin(<i>A</i> + <i>B</i> + <i>C</i>) = cos <i>A</i> cos <i>B</i> cos <i>C</i> (<i>x</i> + <i>y</i> + <i>z</i> − <i>xyz</i>)",
            "and cos(<i>A</i> + <i>B</i> + <i>C</i>) = cos <i>A</i> cos <i>B</i> cos <i>C</i> (1 − <i>xy</i> − <i>yz</i> − <i>zx</i>)"
          ],
          "note": "For cosines there is a partner result: cos<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>y</i> + cos<sup>−1</sup><i>z</i> = π implies <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup> + 2<i>xyz</i> = 1. That implication runs one way only, and quoting it backwards is a known Advanced-level trap."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Prove that tan<sup>−1</sup>(1/2) + tan<sup>−1</sup>(1/3) = π/4.",
          "steps": [
            "Product test first: <i>xy</i> = (1/2)(1/3) = 1/6, which is below 1, so the direct formula applies with no correction.",
            "(<i>x</i> + <i>y</i>)/(1 − <i>xy</i>) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1.",
            "So the sum is tan<sup>−1</sup>(1) = π/4.",
            "Branch check: π/4 lies in (−π/2, π/2), as any arctangent value must."
          ],
          "ans": "π/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate tan<sup>−1</sup>(2) + tan<sup>−1</sup>(3).",
          "steps": [
            "Product test: <i>xy</i> = 6, which is above 1, and both entries are positive, so the +π case applies.",
            "π + tan<sup>−1</sup>((2 + 3)/(1 − 6)) = π + tan<sup>−1</sup>(5/(−5)) = π + tan<sup>−1</sup>(−1).",
            "= π − π/4 = 3π/4.",
            "Sanity check: tan<sup>−1</sup>2 and tan<sup>−1</sup>3 each lie between π/4 and π/2, so their sum must exceed π/2. Only 3π/4 qualifies, and the trap answer −π/4 is exactly what dropping the π gives."
          ],
          "ans": "3π/4"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the sum of tan<sup>−1</sup>(1/(1 + <i>n</i> + <i>n</i><sup>2</sup>)) over <i>n</i> = 1, 2, 3, … without end.",
          "steps": [
            "Write 1/(1 + <i>n</i> + <i>n</i><sup>2</sup>) = ((<i>n</i> + 1) − <i>n</i>)/(1 + <i>n</i>(<i>n</i> + 1)), which is the difference pattern with <i>a</i> = <i>n</i> + 1 and <i>b</i> = <i>n</i>.",
            "So each term is tan<sup>−1</sup>(<i>n</i> + 1) − tan<sup>−1</sup>(<i>n</i>), and the partial sum collapses to tan<sup>−1</sup>(<i>N</i> + 1) − tan<sup>−1</sup>(1).",
            "As <i>N</i> grows, tan<sup>−1</sup>(<i>N</i> + 1) tends to π/2.",
            "The sum is π/2 − π/4 = π/4. The entire difficulty was recognising the difference pattern hidden in 1 + <i>n</i> + <i>n</i><sup>2</sup>."
          ],
          "ans": "π/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find every real <i>x</i> with tan<sup>−1</sup>(2<i>x</i>) + tan<sup>−1</sup>(3<i>x</i>) = π/4.",
          "steps": [
            "The target π/4 sits inside (−π/2, π/2), so only the clean case can reach it: the ±π corrections push a sum past ±π/2.",
            "Take the tangent: 5<i>x</i>/(1 − 6<i>x</i><sup>2</sup>) = 1, that is 6<i>x</i><sup>2</sup> + 5<i>x</i> − 1 = 0, so <i>x</i> = 1/6 or <i>x</i> = −1.",
            "Audit <i>x</i> = −1: the product is (−2)(−3) = 6, above 1, with both entries negative, so the true sum is −3π/4. Rejected.",
            "Audit <i>x</i> = 1/6: the product is (1/3)(1/2) = 1/6, below 1, the clean case holds, and the sum does read off as π/4."
          ],
          "ans": "<i>x</i> = 1/6 only, so the solution set is a singleton"
        },
        {
          "t": "mcq",
          "q": "tan<sup>−1</sup>(3) + tan<sup>−1</sup>(1/2) =",
          "correct": 1,
          "opts": [
            { "label": "π/4", "nudge": "This is what the clean formula would give if the product were below 1. It is 3/2, so the correction is compulsory." },
            { "label": "π − tan⁻¹ 7", "nudge": null },
            { "label": "−tan⁻¹ 7", "nudge": "The uncorrected value. It is negative and acute, while the sum of two angles each above π/4 has to be obtuse." },
            { "label": "π/2", "nudge": "This assumes the two terms are complementary, which would need the product to be exactly 1, not 3/2." }
          ],
          "solution": "xy = 3/2, above 1, with both positive, so add π: π + tan⁻¹((3 + 1/2)/(1 − 3/2)) = π + tan⁻¹(−7) = π − tan⁻¹7, about 98°. Only the obtuse option survives the size check."
        },
        {
          "t": "mcq",
          "q": "The sum of tan<sup>−1</sup>(1/(2<i>n</i><sup>2</sup>)) over <i>n</i> = 1, 2, 3, … without end is",
          "correct": 1,
          "opts": [
            { "label": "π/2", "nudge": "This is the limit of tan⁻¹(2N + 1) alone, with the surviving lower term tan⁻¹1 forgotten." },
            { "label": "π/4", "nudge": null },
            { "label": "3π/4", "nudge": "That is the answer to the sibling series with terms 2/n², where two lower terms survive instead of one." },
            { "label": "π/3", "nudge": "No arctangent of an integer endpoint here produces π/3. The surviving ends are π/2 and π/4." }
          ],
          "solution": "1/(2n²) = ((2n + 1) − (2n − 1))/(1 + (2n + 1)(2n − 1)), so each term is tan⁻¹(2n + 1) − tan⁻¹(2n − 1). The partial sum is tan⁻¹(2N + 1) − tan⁻¹1, tending to π/2 − π/4 = π/4."
        },
        {
          "t": "mcq",
          "q": "tan<sup>−1</sup><i>x</i> − tan<sup>−1</sup><i>y</i> equals tan<sup>−1</sup> of",
          "correct": 1,
          "opts": [
            { "label": "(x − y)/(1 − xy)", "nudge": "The denominators are swapped. The sum takes 1 − xy underneath, the difference takes 1 + xy." },
            { "label": "(x − y)/(1 + xy)", "nudge": null },
            { "label": "(x + y)/(1 + xy)", "nudge": "The numerator has been left as a sum. Both numerator and denominator change when you switch formulas, but not in the same direction." },
            { "label": "(y − x)/(1 + xy)", "nudge": "The numerator is back to front, which returns tan⁻¹y − tan⁻¹x, the negative of what was asked." }
          ],
          "solution": "Put −y in place of y in the sum formula: the numerator becomes x − y and the denominator 1 − x(−y) = 1 + xy. Valid when xy is above −1."
        },
        {
          "t": "mcq",
          "q": "If <i>x</i>, <i>y</i>, <i>z</i> are positive and <i>x</i> + <i>y</i> + <i>z</i> = <i>xyz</i>, then tan<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>y</i> + tan<sup>−1</sup><i>z</i> equals",
          "correct": 1,
          "opts": [
            { "label": "π/2", "nudge": "That is the partner result, and it fires when xy + yz + zx = 1, not when x + y + z = xyz." },
            { "label": "π", "nudge": null },
            { "label": "π/4", "nudge": "Far too small. Test x = y = z = √3, which satisfies the condition and gives three copies of π/3." },
            { "label": "0", "nudge": "Three positive arctangents cannot sum to zero, since every term is strictly positive." }
          ],
          "solution": "sin(A + B + C) = cos A cos B cos C (x + y + z − xyz) = 0 while every cosine is positive, so the sine of the sum vanishes and its cosine does not. The only such value in (0, 3π/2) is π. Check with x = y = z = √3."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Prove tan<sup>−1</sup>(1/7) + tan<sup>−1</sup>(1/8) = tan<sup>−1</sup>(3/11), checking the product test first.",
              "a": "<i>xy</i> = 1/56, below 1, so the direct formula holds: (1/7 + 1/8)/(1 − 1/56) = (15/56)/(55/56) = 15/55 = 3/11."
            },
            {
              "q": "[CUET] Evaluate tan<sup>−1</sup>(1/2) + tan<sup>−1</sup>(1/5) + tan<sup>−1</sup>(1/8).",
              "a": "First pair: product 1/10, below 1, giving tan<sup>−1</sup>((7/10)/(9/10)) = tan<sup>−1</sup>(7/9). Then (7/9)(1/8) = 7/72, still below 1, giving tan<sup>−1</sup>((7/9 + 1/8)/(1 − 7/72)) = tan<sup>−1</sup>((65/72)/(65/72)) = tan<sup>−1</sup>(1) = π/4."
            },
            {
              "q": "[JEE Main] Find the sum of tan<sup>−1</sup>(2/<i>n</i><sup>2</sup>) over <i>n</i> = 1, 2, 3, … without end.",
              "a": "2/<i>n</i><sup>2</sup> = ((<i>n</i> + 1) − (<i>n</i> − 1))/(1 + (<i>n</i> + 1)(<i>n</i> − 1)), so each term is tan<sup>−1</sup>(<i>n</i> + 1) − tan<sup>−1</sup>(<i>n</i> − 1) and two terms survive at each end: (π/2 + π/2) − (tan<sup>−1</sup>1 + tan<sup>−1</sup>0) = π − π/4 = 3π/4."
            },
            {
              "q": "[JEE Main] Solve tan<sup>−1</sup>(<i>x</i> + 1) + tan<sup>−1</sup>(<i>x</i> − 1) = tan<sup>−1</sup>(8/31).",
              "a": "Taking the tangent: 2<i>x</i>/(2 − <i>x</i><sup>2</sup>) = 8/31, so 4<i>x</i><sup>2</sup> + 31<i>x</i> − 8 = 0 and <i>x</i> = 1/4 or <i>x</i> = −8. Audit <i>x</i> = −8: both entries negative with product 63, above 1, so the sum lies in (−π, −π/2) and cannot equal a positive target. Only <i>x</i> = 1/4, where the product is −15/16 and the direct formula gives 8/31."
            },
            {
              "q": "[JEE Advanced] If <i>x</i>, <i>y</i>, <i>z</i> are positive with <i>xy</i> + <i>yz</i> + <i>zx</i> = 1, prove tan<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>y</i> + tan<sup>−1</sup><i>z</i> = π/2.",
              "a": "cos(<i>A</i> + <i>B</i> + <i>C</i>) = cos <i>A</i> cos <i>B</i> cos <i>C</i> (1 − <i>xy</i> − <i>yz</i> − <i>zx</i>) = 0 with every cosine positive, so the cosine of the sum vanishes. The sum lies in (0, 3π/2) and the sine cannot vanish at the same time, so the sum is π/2. Sanity check at <i>x</i> = <i>y</i> = <i>z</i> = 1/√3: three copies of π/6."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Forgetting the <b>±π when <i>xy</i> is above 1</b>. The headline error of the chapter, and the one the distractor sets are built around. Compute <i>xy</i> first, every single time.",
            "Writing <b>1 − <i>xy</i></b> in the difference formula. The difference carries 1 + <i>xy</i> underneath, and mixing the two signs is endemic.",
            "Quoting the arcsine sum with no condition. <b>sin<sup>−1</sup><i>x</i> + sin<sup>−1</sup><i>y</i></b> needs <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> ≤ 1 or a negative product, and the arccosine sum needs <i>x</i> + <i>y</i> ≥ 0.",
            "Accepting <b>every algebraic root</b>. Taking the tangent of both sides is a one-way street: it can manufacture candidates the original equation rejects, and those roots are planted on purpose.",
            "Splitting a series term into a difference that does not cancel. If consecutive terms fail to annihilate, your <i>a</i> and <i>b</i> are wrong, not the telescoping method."
          ]
        },
        {
          "t": "protip",
          "html": "make “compute xy first” the automatic first move on every tan-inverse sum. that one number tells you which of the three formulas you are on, and the missing π is by a wide margin the most expensive mistake in this chapter. for series, train your eye on the shape (a − b)/(1 + ab) hiding inside denominators like 1 + n + n squared."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "xy below 1: tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy))", "note": "the clean case" },
            { "f": "xy above 1: add π if both positive, subtract π if both negative", "note": "the cage reasserting itself" },
            { "f": "tan⁻¹x − tan⁻¹y = tan⁻¹((x − y)/(1 + xy)), xy above −1", "note": "plus underneath, not minus" },
            { "f": "(a − b)/(1 + ab) means tan⁻¹a − tan⁻¹b", "note": "the telescoping signature" },
            { "f": "x + y + z = xyz gives a sum of π, xy + yz + zx = 1 gives π/2", "note": "for positive x, y, z only" }
          ],
          "aids": [
            "“sum over one minus, difference over one plus”",
            "“xy over one, add a pi”",
            "“solve it, then audit every root”"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Multiple Angles and Their Windows",
      "chip": "04 WINDOWS",
      "kalam": "every doubling identity arrives with a fence around it",
      "blocks": [
        {
          "t": "p",
          "html": "A multiple-angle identity is the addition formula with <i>y</i> = <i>x</i>. <b>2 tan<sup>−1</sup><i>x</i> is just tan<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>x</i></b>, and 3 sin<sup>−1</sup><i>x</i> unpacks through the Class 11 triple-angle formula sin 3θ = 3 sin θ − 4 sin<sup>3</sup>θ. No new trigonometry arrives. What arrives is a <b>fence</b>: doubling or tripling an angle can walk it straight out of the outer function's branch, so every identity here comes with a window of <i>x</i> on which it is legal."
        },
        {
          "t": "think",
          "html": "put θ = tan⁻¹x. the identity is only saying “read sin 2θ, cos 2θ or tan 2θ off the θ you already have”. the window is then the answer to one question: is 2θ still inside the cage of whichever inverse you wrapped it in."
        },
        {
          "t": "def",
          "term": "Validity window",
          "html": "The set of <i>x</i> for which a multiple-angle identity is true as written. It is never a stylistic footnote and never optional: outside its window the identity is <b>false</b>, not merely unproved. Quoting one outside its window is the most common way a correct-looking proof scores zero in this chapter, and JEE Advanced sets whole items whose only content is the window."
        },
        {
          "t": "defgrid",
          "title": "The doubles and triples, with their windows",
          "rows": [
            { "k": "2 tan<sup>−1</sup><i>x</i> = tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>))", "v": "legal for |<i>x</i>| below 1, and undefined at <i>x</i> = ±1" },
            { "k": "2 tan<sup>−1</sup><i>x</i> = sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>))", "v": "legal for |<i>x</i>| ≤ 1, endpoints included" },
            { "k": "2 tan<sup>−1</sup><i>x</i> = cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>))", "v": "legal for <i>x</i> ≥ 0, a one-sided window" },
            { "k": "2 sin<sup>−1</sup><i>x</i> = sin<sup>−1</sup>(2<i>x</i>√(1 − <i>x</i><sup>2</sup>))", "v": "legal for |<i>x</i>| ≤ 1/√2" },
            { "k": "2 cos<sup>−1</sup><i>x</i> = cos<sup>−1</sup>(2<i>x</i><sup>2</sup> − 1)", "v": "legal for 0 ≤ <i>x</i> ≤ 1" },
            { "k": "3 sin<sup>−1</sup><i>x</i> = sin<sup>−1</sup>(3<i>x</i> − 4<i>x</i><sup>3</sup>)", "v": "legal for |<i>x</i>| ≤ 1/2 · and 3 cos<sup>−1</sup><i>x</i> = cos<sup>−1</sup>(4<i>x</i><sup>3</sup> − 3<i>x</i>) for 1/2 ≤ <i>x</i> ≤ 1" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE EACH WINDOW COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "θ = tan⁻¹x, so tan θ = x with θ ∈ (−π/2, π/2)",
              "why": "Name the angle once. Every identity in this topic is then a statement about 2θ or 3θ, and the window is a statement about where that multiple is allowed to sit."
            },
            {
              "eq": "sin 2θ = 2 tan θ/(1 + tan²θ) = 2x/(1 + x²)",
              "why": "A Class 11 double-angle identity written in terms of the tangent. Nothing has been assumed about the size of x yet."
            },
            {
              "eq": "2θ = sin⁻¹(2x/(1 + x²)) needs 2θ ∈ [−π/2, π/2]",
              "why": "That is the sin⁻¹ cage, and it forces θ ∈ [−π/4, π/4]. Since tan θ = x, that is exactly |x| ≤ 1. The window is not a convention, it is the cage translated into x."
            },
            {
              "eq": "cos 2θ = (1 − x²)/(1 + x²) needs 2θ ∈ [0, π]",
              "why": "Cosine's cage starts at 0 rather than at −π/2, so the constraint is one-sided: 2θ ≥ 0, hence θ ≥ 0 and x ≥ 0. Same method, different fence, purely because the cage has a different shape."
            },
            {
              "eq": "with θ = sin⁻¹x, sin 3θ = 3 sin θ − 4 sin³θ = 3x − 4x³",
              "why": "The Class 11 triple-angle identity, quoted. The right-hand side is now an ordinary cubic in x."
            },
            {
              "eq": "3θ ∈ [−π/2, π/2] means θ ∈ [−π/6, π/6], so |x| ≤ 1/2",
              "why": "Tripling shrinks the window by a factor of three, which is why the arcsine triple is fenced so much more tightly than the double. The domain restriction is the whole point of the NCERT question that sets it."
            }
          ]
        },
        {
          "t": "p",
          "html": "Outside its window an identity does not fail into nothing. It <b>changes formula</b>. Push 2θ past π/2 and sin<sup>−1</sup> returns the folded angle π − 2θ instead of 2θ, which is the same range-folding you use on a fixed angle, run with a variable one. JEE repeatedly asks for the simplification in the reverse direction, expressing sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) in terms of tan<sup>−1</sup><i>x</i> for <b>all</b> admissible real <i>x</i>, and a single-formula answer is wrong on part of the domain."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "DIAGRAM · WHERE THE DOUBLED ANGLE LANDS",
          "mathChips": true,
          "chips": ["|x| at most 1", "x above 1", "x below −1"],
          "captions": [
            "With θ = tan⁻¹x and |x| at most 1, the angle θ is at most π/4 in size, so 2θ is at most π/2 and lands inside the sin⁻¹ cage. The inverse hands 2θ straight back, and the expression equals 2 tan⁻¹x.",
            "Past x = 1 the angle θ exceeds π/4, so 2θ overshoots π/2 and leaves the cage. Sine cannot tell 2θ from π − 2θ, and only the second is legal, so the expression equals π − 2 tan⁻¹x. The hollow dot is the value actually returned.",
            "Below x = −1 the picture mirrors: 2θ drops under −π/2 and the legal partner is −π − 2θ. Three rows, two breakpoints at x = ±1, and one expression that changes formula across them."
          ],
          "frames": [
            {
              "x": [-3.7, 3.7],
              "intervals": [{ "from": -1.5708, "to": 1.5708, "label": "sin⁻¹ cage" }],
              "points": [{ "x": 1.2, "y": 0, "label": "2θ" }]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [{ "from": -1.5708, "to": 1.5708, "soft": true, "label": "sin⁻¹ cage" }],
              "points": [
                { "x": 2.4, "y": 0, "label": "2θ" },
                { "x": 0.7416, "y": 0, "label": "π − 2θ", "open": true }
              ]
            },
            {
              "x": [-3.7, 3.7],
              "intervals": [{ "from": -1.5708, "to": 1.5708, "soft": true, "label": "sin⁻¹ cage" }],
              "points": [
                { "x": -2.4, "y": 0, "label": "2θ" },
                { "x": -0.7416, "y": 0, "label": "−π − 2θ", "open": true }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The same expressions, for every real x",
          "rows": [
            { "k": "sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>))", "v": "2 tan<sup>−1</sup><i>x</i> for |<i>x</i>| ≤ 1 · π − 2 tan<sup>−1</sup><i>x</i> for <i>x</i> above 1 · −π − 2 tan<sup>−1</sup><i>x</i> for <i>x</i> below −1" },
            { "k": "cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>))", "v": "2 tan<sup>−1</sup><i>x</i> for <i>x</i> ≥ 0 · −2 tan<sup>−1</sup><i>x</i> for <i>x</i> below 0" },
            { "k": "tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>))", "v": "2 tan<sup>−1</sup><i>x</i> for |<i>x</i>| below 1 · 2 tan<sup>−1</sup><i>x</i> − π for <i>x</i> above 1 · 2 tan<sup>−1</sup><i>x</i> + π for <i>x</i> below −1" },
            { "k": "tan<sup>−1</sup>((3<i>x</i> − <i>x</i><sup>3</sup>)/(1 − 3<i>x</i><sup>2</sup>))", "v": "3 tan<sup>−1</sup><i>x</i> for |<i>x</i>| below 1/√3 · 3 tan<sup>−1</sup><i>x</i> − π for <i>x</i> above 1/√3 · 3 tan<sup>−1</sup><i>x</i> + π for <i>x</i> below −1/√3" }
          ]
        },
        {
          "t": "p",
          "html": "Read the second row carefully, because it is the one that catches people. The cosine expression breaks at <b><i>x</i> = 0</b>, not at <i>x</i> = ±1, and the reason is the shape of the cage rather than any algebra: [0, π] already contains every value the doubled angle can take on the positive side, so only a negative 2θ needs reflecting, and cos(−<i>t</i>) = cos <i>t</i> does it. Different cage, different breakpoint, same method."
        },
        {
          "t": "proc",
          "title": "Simplifying a wrapped multiple angle",
          "steps": [
            "<b>Name the inner angle</b> and note where it lives. Usually θ = tan<sup>−1</sup><i>x</i> in (−π/2, π/2), so 2θ ranges over (−π, π) and 3θ over (−3π/2, 3π/2).",
            "<b>Rewrite the argument</b> as a trigonometric function of <i>m</i>θ using a Class 11 double or triple angle formula. The messy fraction is always one of those in disguise.",
            "<b>Locate <i>m</i>θ.</b> The breakpoints sit where <i>m</i>θ crosses the boundary of the outer branch, which is what turns <i>x</i> = 1, <i>x</i> = 0 or <i>x</i> = 1/√3 into a case boundary.",
            "<b>Fold <i>m</i>θ back</b> into that branch with a value-preserving identity, exactly as for a fixed angle.",
            "<b>Translate back</b> and state every case. Do not stop at the row the question seems to be about."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Simplify sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) for |<i>x</i>| ≤ 1.",
          "steps": [
            "Substitute <i>x</i> = tan θ, so θ = tan<sup>−1</sup><i>x</i>, and |<i>x</i>| ≤ 1 means |θ| ≤ π/4.",
            "2<i>x</i>/(1 + <i>x</i><sup>2</sup>) = 2 tan θ/(1 + tan<sup>2</sup>θ) = sin 2θ.",
            "Now 2θ lies in [−π/2, π/2], which is inside the sin<sup>−1</sup> branch, so sin<sup>−1</sup>(sin 2θ) = 2θ legally.",
            "Hence the expression equals 2 tan<sup>−1</sup><i>x</i>. Reached by substitution, it is the same result the double-angle table states."
          ],
          "ans": "2 tan<sup>−1</sup><i>x</i>"
        },
        {
          "t": "ex",
          "tag": "CUET PATTERN",
          "q": "2 tan<sup>−1</sup>(1/3) equals: (a) tan<sup>−1</sup>(3/4) (b) tan<sup>−1</sup>(2/3) (c) tan<sup>−1</sup>(3/5) (d) tan<sup>−1</sup>(1/2)",
          "steps": [
            "|<i>x</i>| = 1/3, which is below 1, so the tangent form is inside its window and needs no correction.",
            "2<i>x</i>/(1 − <i>x</i><sup>2</sup>) = (2/3)/(1 − 1/9) = (2/3)/(8/9) = 3/4.",
            "So the value is tan<sup>−1</sup>(3/4).",
            "Speed tip: memorise the shape 2<i>x</i>/(1 − <i>x</i><sup>2</sup>) and substitute. Options built from 2<i>x</i>/(1 + <i>x</i><sup>2</sup>) belong to the sine form, not this one."
          ],
          "ans": "(a) tan<sup>−1</sup>(3/4)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "If <i>f</i>(<i>x</i>) = 2 tan<sup>−1</sup><i>x</i> + sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)), find <i>f</i>(5).",
          "steps": [
            "Put θ = tan<sup>−1</sup>5, so sin 2θ = 2(5)/(1 + 25) = 5/13. Since 5 is above 1, θ exceeds π/4 and 2θ exceeds π/2, which is outside the sin<sup>−1</sup> cage.",
            "The cage returns the folded angle, so sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) = π − 2 tan<sup>−1</sup>5 at this <i>x</i>.",
            "Therefore <i>f</i>(5) = 2θ + (π − 2θ) = π. The variable parts annihilate.",
            "In fact <i>f</i>(<i>x</i>) = π for every <i>x</i> above 1, and <i>f</i>(<i>x</i>) = 4 tan<sup>−1</sup><i>x</i> for |<i>x</i>| ≤ 1. Cancelling blindly gives 4 tan<sup>−1</sup>5, which is not π: the whole question is the branch check."
          ],
          "ans": "π"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find all real <i>x</i> satisfying 2 tan<sup>−1</sup><i>x</i> = sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)).",
          "steps": [
            "Do not manipulate, tabulate. Read the piecewise table as a comparison of two functions of <i>x</i>.",
            "The two sides agree on exactly one row, |<i>x</i>| ≤ 1, where the right side is 2 tan<sup>−1</sup><i>x</i> by definition.",
            "For <i>x</i> above 1 the right side is π − 2 tan<sup>−1</sup><i>x</i> and the left is 2 tan<sup>−1</sup><i>x</i>. Their difference is π − 4 tan<sup>−1</sup><i>x</i>, which is <b>negative</b> there because tan<sup>−1</sup><i>x</i> exceeds π/4, so the two never meet. At <i>x</i> = 5 the left side is about 2.75 and the right about 0.39.",
            "For <i>x</i> below −1 the mismatch mirrors by oddness. Neither side is ever undefined, so nothing else is excluded."
          ],
          "ans": "<i>x</i> ∈ [−1, 1]"
        },
        {
          "t": "mcq",
          "q": "2 tan<sup>−1</sup><i>x</i> = cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>)) is valid for",
          "correct": 1,
          "opts": [
            { "label": "every real x", "nudge": "Identities here are never unconditional. At x = −1 the left side is −π/2 and the right side is π/2, so it already fails." },
            { "label": "x ≥ 0", "nudge": null },
            { "label": "|x| ≤ 1", "nudge": "That is the window for the sin⁻¹ form. Cosine's cage starts at 0, not at −π/2, so the constraint here is one-sided instead of symmetric." },
            { "label": "x ≤ 0", "nudge": "The sign is inverted. For x below 0 the expression equals −2 tan⁻¹x, not 2 tan⁻¹x." }
          ],
          "solution": "The doubled angle must land in [0, π]. With θ = tan⁻¹x that means 2θ ≥ 0, so θ ≥ 0 and therefore x ≥ 0."
        },
        {
          "t": "mcq",
          "q": "sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) = 2 tan<sup>−1</sup><i>x</i> requires",
          "correct": 1,
          "opts": [
            { "label": "x ≥ 1", "nudge": "Above 1 the expression equals π − 2 tan⁻¹x instead. That row is precisely where this identity stops holding." },
            { "label": "|x| ≤ 1", "nudge": null },
            { "label": "x ≤ −1", "nudge": "Below −1 the value is −π − 2 tan⁻¹x, a third formula again, so this row is not it either." },
            { "label": "every real x", "nudge": "Test x = 5: the left side is sin⁻¹(5/13), about 0.39, while 2 tan⁻¹5 is about 2.75." }
          ],
          "solution": "The doubled angle must stay inside [−π/2, π/2], which forces θ ∈ [−π/4, π/4] and therefore |x| ≤ 1, endpoints included."
        },
        {
          "t": "mcq",
          "q": "3 sin<sup>−1</sup><i>x</i> = sin<sup>−1</sup>(3<i>x</i> − 4<i>x</i><sup>3</sup>) holds for",
          "correct": 1,
          "opts": [
            { "label": "every x in [−1, 1]", "nudge": "At x = √3/2 the left side is π and the right side is sin⁻¹0 = 0. The identity fails loudly well inside [−1, 1]." },
            { "label": "|x| ≤ 1/2", "nudge": null },
            { "label": "|x| ≤ 1/√2", "nudge": "That is the window for 2 sin⁻¹x = sin⁻¹(2x√(1 − x²)), where the angle is doubled rather than tripled." },
            { "label": "x ≥ 1/2", "nudge": "That is the window for the cosine triple, 3 cos⁻¹x = cos⁻¹(4x³ − 3x). Different function, different fence." }
          ],
          "solution": "3θ must lie in [−π/2, π/2], so θ ∈ [−π/6, π/6] and x = sin θ lies in [−1/2, 1/2]."
        },
        {
          "t": "mcq",
          "q": "For <i>a</i> above 1, sin<sup>−1</sup>(2<i>a</i>/(1 + <i>a</i><sup>2</sup>)) + cos<sup>−1</sup>((1 − <i>a</i><sup>2</sup>)/(1 + <i>a</i><sup>2</sup>)) equals",
          "correct": 1,
          "opts": [
            { "label": "4 tan⁻¹ a", "nudge": "That is the value on 0 ≤ a ≤ 1, where both terms read as 2 tan⁻¹a. Above 1 the first term changes formula." },
            { "label": "π", "nudge": null },
            { "label": "2 tan⁻¹ a", "nudge": "This keeps only one of the two terms, or cancels a pair that does not cancel." },
            { "label": "π/2", "nudge": "The two terms are not a complementary pair: their arguments are different numbers, so no co-pair law applies." }
          ],
          "solution": "For a above 1 the first term is π − 2 tan⁻¹a and the second is 2 tan⁻¹a, so the variable parts annihilate. Check at a = 2: sin⁻¹(4/5) ≈ 0.927 and cos⁻¹(−3/5) ≈ 2.214, adding to 3.1416."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Write 2 tan<sup>−1</sup>(1/5) as a single arctangent, then order 2 tan<sup>−1</sup>(1/5), tan<sup>−1</sup>(1/2) and π/4 from smallest to largest.",
              "a": "|1/5| is below 1, so 2<i>x</i>/(1 − <i>x</i><sup>2</sup>) = (2/5)/(24/25) = 5/12 and 2 tan<sup>−1</sup>(1/5) = tan<sup>−1</sup>(5/12). Since 5/12 is below 1/2, which is below 1, and arctangent increases, the order is 2 tan<sup>−1</sup>(1/5), then tan<sup>−1</sup>(1/2), then π/4."
            },
            {
              "q": "[CUET] Express sin<sup>−1</sup>(4/5) in terms of tan<sup>−1</sup>2.",
              "a": "4/5 = 2(2)/(1 + 2<sup>2</sup>), so the relevant <i>x</i> is 2, which is above 1, and the table gives π − 2 tan<sup>−1</sup>2. Numerically π − 2(1.1071) ≈ 0.927, which is sin<sup>−1</sup>(0.8)."
            },
            {
              "q": "[JEE Main] Show 3 sin<sup>−1</sup><i>x</i> = sin<sup>−1</sup>(3<i>x</i> − 4<i>x</i><sup>3</sup>) at <i>x</i> = 1/2, and say why it fails at <i>x</i> = √3/2.",
              "a": "At <i>x</i> = 1/2, θ = π/6 and 3θ = π/2, which is the boundary of the sin<sup>−1</sup> branch and therefore legal. At <i>x</i> = √3/2, θ = π/3 and 3θ = π, outside the branch: the left side is π and the right side is sin<sup>−1</sup>(0) = 0."
            },
            {
              "q": "[JEE Main] Simplify cos<sup>−1</sup>((1 − <i>x</i><sup>2</sup>)/(1 + <i>x</i><sup>2</sup>)) for <i>x</i> ≥ 0.",
              "a": "Put <i>x</i> = tan θ with θ ∈ [0, π/2). Then the argument is cos 2θ and 2θ ∈ [0, π), which is inside cosine's branch, so the value is 2θ = 2 tan<sup>−1</sup><i>x</i>."
            },
            {
              "q": "[JEE Advanced] Express tan<sup>−1</sup>(3/4) in terms of tan<sup>−1</sup>3.",
              "a": "Recognise 3/4 = 2(−3)/(1 − (−3)<sup>2</sup>), so the relevant <i>x</i> is −3, below −1, and the table gives 2 tan<sup>−1</sup>(−3) + π = π − 2 tan<sup>−1</sup>3. Numerically π − 2(1.2490) ≈ 0.6435, which is tan<sup>−1</sup>(0.75)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Quoting a multiple-angle identity <b>without its window</b>. 2 tan<sup>−1</sup><i>x</i> = tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>)) only for |<i>x</i>| below 1, and the arcsine triple only for |<i>x</i>| ≤ 1/2.",
            "Assuming every window is <b>symmetric</b>. The cos<sup>−1</sup> form breaks at <i>x</i> = 0, because [0, π] already holds everything the doubled angle needs on the positive side.",
            "Answering a “for all real <i>x</i>” question with a <b>single formula</b>. These expressions change formula at their breakpoints, and one line is wrong on part of the domain.",
            "Treating <b><i>x</i> = ±1</b> as inside every window. tan<sup>−1</sup>(2<i>x</i>/(1 − <i>x</i><sup>2</sup>)) is undefined there, while sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) is perfectly happy at both.",
            "Mixing the two triples. <b>3 sin<sup>−1</sup></b> uses 3<i>x</i> − 4<i>x</i><sup>3</sup> and <b>3 cos<sup>−1</sup></b> uses 4<i>x</i><sup>3</sup> − 3<i>x</i>, and their windows are different intervals, not the same one."
          ]
        },
        {
          "t": "protip",
          "html": "when a question wraps 2tan⁻¹x or 3tan⁻¹x inside another inverse and says “for all real x”, do not manipulate, tabulate. write the rows, mark the breakpoints at x = ±1 or ±1/√3, and read the answer off row by row. every one of these expressions is piecewise linear in tan⁻¹x, so the table is not a step towards the solution, it is the solution."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "2 tan⁻¹x = tan⁻¹(2x/(1 − x²)), |x| below 1", "note": "undefined at x = ±1" },
            { "f": "2 tan⁻¹x = sin⁻¹(2x/(1 + x²)), |x| at most 1", "note": "outside: π − 2tan⁻¹x, or −π − 2tan⁻¹x" },
            { "f": "2 tan⁻¹x = cos⁻¹((1 − x²)/(1 + x²)), x at least 0", "note": "for negative x it is −2tan⁻¹x" },
            { "f": "3 sin⁻¹x = sin⁻¹(3x − 4x³), |x| at most 1/2", "note": "3 cos⁻¹x = cos⁻¹(4x³ − 3x) for x at least 1/2" },
            { "f": "2 sin⁻¹x = sin⁻¹(2x√(1 − x²)), |x| at most 1/√2", "note": "2 cos⁻¹x = cos⁻¹(2x² − 1) for x at least 0" }
          ],
          "aids": [
            "“double the angle, halve your confidence, check the window”",
            "“outside the window it folds, it does not vanish”"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Composites, Triangles and Substitution",
      "chip": "05 TRIANGLE",
      "kalam": "name the angle, draw the triangle, read the ratio",
      "blocks": [
        {
          "t": "p",
          "html": "cos(sin<sup>−1</sup><i>x</i>) mixes a trigonometric function with an inverse one, and there is no formula here worth memorising. <b>Name the inner angle instead.</b> Let θ = sin<sup>−1</sup><i>x</i>, so sin θ = <i>x</i>. Now θ is a genuine angle, so draw a right triangle in which sin θ = <i>x</i>/1: opposite <i>x</i>, hypotenuse 1, and by Pythagoras the adjacent side is √(1 − <i>x</i><sup>2</sup>). Then read the outer function straight off the drawing: cos θ = √(1 − <i>x</i><sup>2</sup>)."
        },
        {
          "t": "think",
          "html": "one picture replaces a dozen composite formulas. the inverse function hands you one ratio of a right triangle, pythagoras gives you the third side, and the outer function is just whichever ratio it happens to ask for."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ONE TRIANGLE, FOUR LABELLINGS",
          "mathChips": true,
          "chips": ["θ = sin⁻¹x", "θ = cos⁻¹x", "θ = tan⁻¹x", "θ = sec⁻¹x"],
          "captions": [
            "sin θ = x means opposite over hypotenuse, so put x on the opposite side and 1 on the hypotenuse. Pythagoras fills in the adjacent side as √(1 − x²), and every composite of sin⁻¹x is now a ratio you can point at.",
            "cos θ = x means adjacent over hypotenuse, so x moves to the base and 1 stays on the hypotenuse. The opposite side is √(1 − x²). Note that the same radical appears, but attached to a different side, which is exactly why the composites differ.",
            "tan θ = x means opposite over adjacent, so x sits on the vertical side and 1 on the base. Now the hypotenuse is √(1 + x²), a plus rather than a minus, and that single change is the classic mix-up the exams fish for.",
            "sec θ = x means hypotenuse over adjacent, so x labels the hypotenuse and 1 the base. Pythagoras gives √(x² − 1) opposite, which is why tan(sec⁻¹x) = √(x² − 1) with no fraction at all."
          ],
          "frames": [
            {
              "x": [-0.35, 2.45],
              "y": [-0.5, 1.5],
              "segments": [
                { "from": [0, 0], "to": [1.7, 0] },
                { "from": [1.7, 0], "to": [1.7, 1.0] },
                { "from": [0, 0], "to": [1.7, 1.0] },
                { "from": [1.53, 0], "to": [1.53, 0.16], "soft": true },
                { "from": [1.53, 0.16], "to": [1.7, 0.16], "soft": true }
              ],
              "labels": [
                { "x": 0.85, "y": -0.25, "text": "√(1 − x²)" },
                { "x": 2.05, "y": 0.5, "text": "x" },
                { "x": 0.7, "y": 0.8, "text": "1" },
                { "x": 0.3, "y": 0.12, "text": "θ" }
              ]
            },
            {
              "x": [-0.35, 2.45],
              "y": [-0.5, 1.5],
              "segments": [
                { "from": [0, 0], "to": [1.7, 0] },
                { "from": [1.7, 0], "to": [1.7, 1.0] },
                { "from": [0, 0], "to": [1.7, 1.0] },
                { "from": [1.53, 0], "to": [1.53, 0.16], "soft": true },
                { "from": [1.53, 0.16], "to": [1.7, 0.16], "soft": true }
              ],
              "labels": [
                { "x": 0.85, "y": -0.25, "text": "x" },
                { "x": 2.1, "y": 0.5, "text": "√(1 − x²)" },
                { "x": 0.7, "y": 0.8, "text": "1" },
                { "x": 0.3, "y": 0.12, "text": "θ" }
              ]
            },
            {
              "x": [-0.35, 2.45],
              "y": [-0.5, 1.5],
              "segments": [
                { "from": [0, 0], "to": [1.7, 0] },
                { "from": [1.7, 0], "to": [1.7, 1.0] },
                { "from": [0, 0], "to": [1.7, 1.0] },
                { "from": [1.53, 0], "to": [1.53, 0.16], "soft": true },
                { "from": [1.53, 0.16], "to": [1.7, 0.16], "soft": true }
              ],
              "labels": [
                { "x": 0.85, "y": -0.25, "text": "1" },
                { "x": 2.05, "y": 0.5, "text": "x" },
                { "x": 0.62, "y": 0.85, "text": "√(1 + x²)" },
                { "x": 0.3, "y": 0.12, "text": "θ" }
              ]
            },
            {
              "x": [-0.35, 2.45],
              "y": [-0.5, 1.5],
              "segments": [
                { "from": [0, 0], "to": [1.7, 0] },
                { "from": [1.7, 0], "to": [1.7, 1.0] },
                { "from": [0, 0], "to": [1.7, 1.0] },
                { "from": [1.53, 0], "to": [1.53, 0.16], "soft": true },
                { "from": [1.53, 0.16], "to": [1.7, 0.16], "soft": true }
              ],
              "labels": [
                { "x": 0.85, "y": -0.25, "text": "1" },
                { "x": 2.1, "y": 0.5, "text": "√(x² − 1)" },
                { "x": 0.68, "y": 0.85, "text": "x" },
                { "x": 0.3, "y": 0.12, "text": "θ" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Read straight off the triangle",
          "rows": [
            { "k": "cos(sin<sup>−1</sup><i>x</i>)", "v": "√(1 − <i>x</i><sup>2</sup>) · and sin(cos<sup>−1</sup><i>x</i>) is the same thing" },
            { "k": "tan(sin<sup>−1</sup><i>x</i>)", "v": "<i>x</i>/√(1 − <i>x</i><sup>2</sup>)" },
            { "k": "tan(cos<sup>−1</sup><i>x</i>)", "v": "√(1 − <i>x</i><sup>2</sup>)/<i>x</i>, the same two sides the other way up" },
            { "k": "sin(tan<sup>−1</sup><i>x</i>)", "v": "<i>x</i>/√(1 + <i>x</i><sup>2</sup>) · and cos(tan<sup>−1</sup><i>x</i>) = 1/√(1 + <i>x</i><sup>2</sup>)" },
            { "k": "sec(tan<sup>−1</sup><i>x</i>)", "v": "√(1 + <i>x</i><sup>2</sup>)" },
            { "k": "tan(sec<sup>−1</sup><i>x</i>)", "v": "√(<i>x</i><sup>2</sup> − 1)" }
          ]
        },
        {
          "t": "p",
          "html": "The same triangle also lets you <b>rewrite one inverse function as another</b>, which is how a problem stated in arccosines gets turned into a problem in arctangents where the sum rule lives. Read a different pair of sides and a different inverse function names the same angle."
        },
        {
          "t": "defgrid",
          "title": "Writing one inverse as another",
          "rows": [
            { "k": "sin<sup>−1</sup><i>x</i>", "v": "= cos<sup>−1</sup>√(1 − <i>x</i><sup>2</sup>) = tan<sup>−1</sup>(<i>x</i>/√(1 − <i>x</i><sup>2</sup>)) = cosec<sup>−1</sup>(1/<i>x</i>)" },
            { "k": "cos<sup>−1</sup><i>x</i>", "v": "= sin<sup>−1</sup>√(1 − <i>x</i><sup>2</sup>) = tan<sup>−1</sup>(√(1 − <i>x</i><sup>2</sup>)/<i>x</i>) = sec<sup>−1</sup>(1/<i>x</i>)" },
            { "k": "tan<sup>−1</sup><i>x</i>", "v": "= sin<sup>−1</sup>(<i>x</i>/√(1 + <i>x</i><sup>2</sup>)) = cos<sup>−1</sup>(1/√(1 + <i>x</i><sup>2</sup>)), for <i>x</i> ≥ 0" },
            { "k": "the fine print", "v": "stated for <i>x</i> in (0, 1]; for other signs the branch decides whether a π − or a minus is needed in front" }
          ]
        },
        {
          "t": "proc",
          "title": "Evaluating a composite by triangle",
          "steps": [
            "<b>Name the inner angle:</b> θ = the inverse function. That hands you one trigonometric ratio of θ immediately, and nothing else is needed to start.",
            "<b>Build the right triangle</b> with that ratio, and use Pythagoras for the third side. Label all three sides before reading anything.",
            "<b>Read off the outer function</b> as the appropriate ratio. This is where care pays: cos(sin<sup>−1</sup><i>x</i>) and tan(sin<sup>−1</sup><i>x</i>) come from the same triangle and are different answers.",
            "<b>Restore the sign from the branch.</b> The triangle only gives magnitudes, so for a negative argument, or for an angle in the upper half of cosine's [0, π], the range decides the sign."
          ]
        },
        {
          "t": "p",
          "html": "The second half of this topic is <b>simplification by substitution</b>, and it is the single most powerful pattern in the chapter. When an expression hides a radical, the substitution that kills the radical is decided by the radical's own signature, not by the rest of the problem. After substituting, the messy algebraic argument becomes a recognisable angle, the inverse function cancels it, and you convert back."
        },
        {
          "t": "defgrid",
          "title": "Radical signature to substitution",
          "rows": [
            { "k": "√(1 − <i>x</i><sup>2</sup>) or 1 − <i>x</i><sup>2</sup>", "v": "put <i>x</i> = sin θ or <i>x</i> = cos θ, because 1 − sin<sup>2</sup>θ = cos<sup>2</sup>θ" },
            { "k": "√(1 + <i>x</i><sup>2</sup>) or 1 + <i>x</i><sup>2</sup>", "v": "put <i>x</i> = tan θ, because 1 + tan<sup>2</sup>θ = sec<sup>2</sup>θ" },
            { "k": "√(<i>x</i><sup>2</sup> − 1) or <i>x</i><sup>2</sup> − 1", "v": "put <i>x</i> = sec θ, because sec<sup>2</sup>θ − 1 = tan<sup>2</sup>θ" },
            { "k": "1 ± sin <i>x</i> or 1 ± cos <i>x</i>", "v": "go to half angles: each of these is a perfect square of half-angle terms, which is what makes the fraction collapse" }
          ]
        },
        {
          "t": "proc",
          "title": "Simplifying by substitution",
          "steps": [
            "<b>Spot the radical signature</b> and substitute per the table. Matching the radical to its substitution is the whole decision.",
            "<b>Simplify with half and double angle identities</b> until the argument becomes sin(angle), tan(angle) and so on. Class 11 supplies every identity you need here.",
            "<b>Apply the outer inverse</b>, which now cancels, and check that the angle it returns is genuinely inside the branch.",
            "<b>Substitute θ back</b> in terms of <i>x</i>, and state any restriction the substitution imposed."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ONE THAT LOOKS IMPOSSIBLE, TAP A LINE",
          "steps": [
            {
              "eq": "simplify tan⁻¹((√(1 + x²) − 1)/x), put x = tan θ",
              "why": "The radical signature is √(1 + x²), so tangent is the substitution. Then θ = tan⁻¹x lies in (−π/2, π/2), where sec θ is positive, so √(1 + x²) = sec θ with no sign ambiguity."
            },
            {
              "eq": "(sec θ − 1)/tan θ = (1 − cos θ)/sin θ",
              "why": "Multiply numerator and denominator by cos θ. Nothing has been assumed, only rewritten, and the expression is now in a shape half angles can attack."
            },
            {
              "eq": "= 2sin²(θ/2) / (2 sin(θ/2) cos(θ/2))",
              "why": "The Class 11 half-angle forms: 1 − cos θ = 2sin²(θ/2) and sin θ = 2 sin(θ/2) cos(θ/2). Recognising that 1 − cos θ is a perfect square is the move."
            },
            {
              "eq": "= tan(θ/2)",
              "why": "The sines cancel and a frightening fraction has become a single tangent of half the angle."
            },
            {
              "eq": "tan⁻¹(tan(θ/2)) = θ/2 = ½ tan⁻¹x",
              "why": "θ/2 lies in (−π/4, π/4), safely inside the tan⁻¹ branch, so the cancellation is legal rather than lucky. Check at x = 1: tan⁻¹(√2 − 1) = π/8, and half of tan⁻¹1 is π/8."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Evaluate cos(sin<sup>−1</sup>(3/5)).",
          "steps": [
            "Let θ = sin<sup>−1</sup>(3/5), so sin θ = 3/5: opposite 3, hypotenuse 5, and by Pythagoras adjacent 4.",
            "θ lies in [−π/2, π/2], where cosine is never negative, so no sign correction is needed.",
            "cos θ = adjacent over hypotenuse = 4/5.",
            "The same triangle also gives tan(sin<sup>−1</sup>(3/5)) = 3/4, which is a different question and a different ratio."
          ],
          "ans": "4/5"
        },
        {
          "t": "ex",
          "tag": "CUET PATTERN",
          "q": "sin(tan<sup>−1</sup><i>x</i>) equals: (a) <i>x</i>/√(1 − <i>x</i><sup>2</sup>) (b) <i>x</i>/√(1 + <i>x</i><sup>2</sup>) (c) 1/√(1 + <i>x</i><sup>2</sup>) (d) √(1 + <i>x</i><sup>2</sup>)",
          "steps": [
            "θ = tan<sup>−1</sup><i>x</i> means tan θ = <i>x</i>/1: opposite <i>x</i>, adjacent 1, hypotenuse √(1 + <i>x</i><sup>2</sup>).",
            "sin θ = opposite over hypotenuse = <i>x</i>/√(1 + <i>x</i><sup>2</sup>).",
            "Option (a) is the sin<sup>−1</sup> triangle, the classic mix-up: a tan<sup>−1</sup> hypotenuse always carries a plus.",
            "Option (c) is cos(tan<sup>−1</sup><i>x</i>) and (d) is sec(tan<sup>−1</sup><i>x</i>), both correct answers to different questions."
          ],
          "ans": "(b) <i>x</i>/√(1 + <i>x</i><sup>2</sup>)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Simplify tan<sup>−1</sup>(cos <i>x</i> / (1 + sin <i>x</i>)) for <i>x</i> in (−π/2, π/2).",
          "steps": [
            "Convert both parts to half angles: cos <i>x</i> = cos<sup>2</sup>(<i>x</i>/2) − sin<sup>2</sup>(<i>x</i>/2) and 1 + sin <i>x</i> = (cos(<i>x</i>/2) + sin(<i>x</i>/2))<sup>2</sup>.",
            "One factor cancels, leaving (cos(<i>x</i>/2) − sin(<i>x</i>/2))/(cos(<i>x</i>/2) + sin(<i>x</i>/2)).",
            "Divide top and bottom by cos(<i>x</i>/2): (1 − tan(<i>x</i>/2))/(1 + tan(<i>x</i>/2)) = tan(π/4 − <i>x</i>/2).",
            "For <i>x</i> in (−π/2, π/2) the angle π/4 − <i>x</i>/2 lies in (0, π/2), inside the branch, so the value is π/4 − <i>x</i>/2. The whole problem was recognising that 1 + sin <i>x</i> is a perfect square."
          ],
          "ans": "π/4 − <i>x</i>/2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Solve sin(cot<sup>−1</sup>(1 + <i>x</i>)) = cos(tan<sup>−1</sup><i>x</i>).",
          "steps": [
            "Left side by triangle: cot θ = 1 + <i>x</i> gives adjacent 1 + <i>x</i>, opposite 1, hypotenuse √(1 + (1 + <i>x</i>)<sup>2</sup>), so sin θ = 1/√(1 + (1 + <i>x</i>)<sup>2</sup>).",
            "Right side by triangle: tan φ = <i>x</i> gives adjacent 1, opposite <i>x</i>, hypotenuse √(1 + <i>x</i><sup>2</sup>), so cos φ = 1/√(1 + <i>x</i><sup>2</sup>).",
            "Equate and square: 1 + (1 + <i>x</i>)<sup>2</sup> = 1 + <i>x</i><sup>2</sup>, so 2<i>x</i> + 1 = 0.",
            "No root audit is needed here, because both triangle readings are valid for every real input and both sides are positive throughout."
          ],
          "ans": "<i>x</i> = −1/2"
        },
        {
          "t": "mcq",
          "q": "cos(sin<sup>−1</sup><i>x</i>) =",
          "correct": 1,
          "opts": [
            { "label": "x", "nudge": "That is sin(sin⁻¹x), reading the inner ratio straight back instead of the outer one." },
            { "label": "√(1 − x²)", "nudge": null },
            { "label": "1/√(1 − x²)", "nudge": "That is sec(sin⁻¹x): the reciprocal ratio, hypotenuse over adjacent rather than adjacent over hypotenuse." },
            { "label": "x/√(1 − x²)", "nudge": "That is tan(sin⁻¹x), opposite over adjacent. Same triangle, wrong pair of sides." }
          ],
          "solution": "sin θ = x gives opposite x and hypotenuse 1, so the adjacent side is √(1 − x²) and cos θ is that over 1."
        },
        {
          "t": "mcq",
          "q": "tan<sup>−1</sup>((√(1 + <i>x</i><sup>2</sup>) − 1)/<i>x</i>) equals",
          "correct": 1,
          "opts": [
            { "label": "tan⁻¹ x", "nudge": "The substitution produces tan(θ/2), not tan θ. Half the angle survives, not all of it." },
            { "label": "½ tan⁻¹ x", "nudge": null },
            { "label": "2 tan⁻¹ x", "nudge": "This doubles where it should halve. Check at x = 1: the expression is tan⁻¹(√2 − 1) = π/8, not π/2." },
            { "label": "π/4 − tan⁻¹ x", "nudge": "That is the shape of the cos x/(1 + sin x) result, a different standard simplification with a different signature." }
          ],
          "solution": "Put x = tan θ. The argument becomes (sec θ − 1)/tan θ = tan(θ/2), so the value is θ/2 = ½ tan⁻¹x. At x = 1 it reads π/8."
        },
        {
          "t": "mcq",
          "q": "sec(tan<sup>−1</sup><i>x</i>) =",
          "correct": 0,
          "opts": [
            { "label": "√(1 + x²)", "nudge": null },
            { "label": "1/√(1 + x²)", "nudge": "That is cos(tan⁻¹x). Secant is its reciprocal, hypotenuse over adjacent." },
            { "label": "√(1 − x²)", "nudge": "Wrong radical entirely: the tan⁻¹ triangle has hypotenuse √(1 + x²). The minus form belongs to the sin⁻¹ and cos⁻¹ triangles." },
            { "label": "x/√(1 + x²)", "nudge": "That is sin(tan⁻¹x), opposite over hypotenuse rather than hypotenuse over adjacent." }
          ],
          "solution": "tan θ = x/1 gives adjacent 1 and hypotenuse √(1 + x²), and sec θ is hypotenuse over adjacent, so the 1 in the denominator makes the fraction disappear."
        },
        {
          "t": "mcq",
          "q": "For <i>x</i> strictly between 0 and 1, the value of [{<i>x</i> cos(cot<sup>−1</sup><i>x</i>) + sin(cot<sup>−1</sup><i>x</i>)}<sup>2</sup> − 1]<sup>1/2</sup> is",
          "correct": 0,
          "opts": [
            { "label": "x", "nudge": null },
            { "label": "√(1 + x²)", "nudge": "That is the value of the brace itself, before it is squared and 1 is subtracted." },
            { "label": "1/√(1 + x²)", "nudge": "That is sin(cot⁻¹x) alone, one ingredient of the brace rather than the whole expression." },
            { "label": "x/√(1 + x²)", "nudge": "That is cos(cot⁻¹x), the other ingredient, again read on its own." }
          ],
          "solution": "With θ = cot⁻¹x the triangle has adjacent x, opposite 1, hypotenuse √(1 + x²). The brace is (x² + 1)/√(1 + x²) = √(1 + x²), so squaring and subtracting 1 leaves x², whose positive root is x because x is positive here."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Evaluate tan(cos<sup>−1</sup>(5/13)).",
              "a": "cos θ = 5/13 gives adjacent 5, hypotenuse 13, opposite 12. So tan θ = 12/5."
            },
            {
              "q": "[CUET] Find sec(tan<sup>−1</sup>(3/4)).",
              "a": "tan θ = 3/4 gives opposite 3, adjacent 4, hypotenuse 5. So sec θ = 5/4."
            },
            {
              "q": "[JEE Main] Show that cos<sup>−1</sup><i>x</i> = tan<sup>−1</sup>(√(1 − <i>x</i><sup>2</sup>)/<i>x</i>) for <i>x</i> in (0, 1], using a triangle.",
              "a": "θ = cos<sup>−1</sup><i>x</i> gives adjacent <i>x</i>, hypotenuse 1, opposite √(1 − <i>x</i><sup>2</sup>), so tan θ = √(1 − <i>x</i><sup>2</sup>)/<i>x</i>. For <i>x</i> in (0, 1] the angle θ lies in [0, π/2), which is inside the tan<sup>−1</sup> branch, so the inverse returns θ itself."
            },
            {
              "q": "[JEE Advanced] Simplify tan<sup>−1</sup>√((1 − cos <i>x</i>)/(1 + cos <i>x</i>)) for <i>x</i> in (0, π).",
              "a": "(1 − cos <i>x</i>)/(1 + cos <i>x</i>) = 2sin<sup>2</sup>(<i>x</i>/2)/(2cos<sup>2</sup>(<i>x</i>/2)) = tan<sup>2</sup>(<i>x</i>/2), and tan(<i>x</i>/2) is positive on (0, π), so the radical is tan(<i>x</i>/2). Since <i>x</i>/2 lies in (0, π/2), inside the branch, the value is <i>x</i>/2."
            },
            {
              "q": "[JEE Advanced] Prove cos[tan<sup>−1</sup>(sin(cot<sup>−1</sup><i>x</i>))] = √((1 + <i>x</i><sup>2</sup>)/(2 + <i>x</i><sup>2</sup>)).",
              "a": "θ = cot<sup>−1</sup><i>x</i> lies in (0, π), where sine is positive, so sin θ = 1/√(1 + <i>x</i><sup>2</sup>) for every nonzero <i>x</i>. Then cos(tan<sup>−1</sup><i>t</i>) = 1/√(1 + <i>t</i><sup>2</sup>) with <i>t</i> = 1/√(1 + <i>x</i><sup>2</sup>), giving 1/√(1 + 1/(1 + <i>x</i><sup>2</sup>)) = √((1 + <i>x</i><sup>2</sup>)/(2 + <i>x</i><sup>2</sup>))."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Reading the <b>wrong ratio</b> off the triangle. cos(sin<sup>−1</sup><i>x</i>) = √(1 − <i>x</i><sup>2</sup>) but tan(sin<sup>−1</sup><i>x</i>) = <i>x</i>/√(1 − <i>x</i><sup>2</sup>). Label all three sides before you read anything.",
            "<b>Dropping the sign.</b> The triangle gives magnitudes only. For a negative argument, or an angle in the upper half of [0, π], the branch decides the sign and the drawing cannot.",
            "Matching the <b>wrong substitution</b> to the radical. √(1 + <i>x</i><sup>2</sup>) wants <i>x</i> = tan θ, never <i>x</i> = sin θ, and the wrong choice leaves a mess that will not simplify.",
            "Cancelling the outer inverse <b>without checking the branch</b>. tan<sup>−1</sup>(tan <i>u</i>) = <i>u</i> only when <i>u</i> is inside (−π/2, π/2), and the half angle is safe only because the substitution keeps it there.",
            "Forgetting the <b>validity window</b> after simplifying. sin<sup>−1</sup>(2<i>x</i>/(1 + <i>x</i><sup>2</sup>)) = 2 tan<sup>−1</sup><i>x</i> only for |<i>x</i>| ≤ 1, and outside it the answer changes formula."
          ]
        },
        {
          "t": "protip",
          "html": "two habits carry this whole topic. for any composite f(g⁻¹(x)), draw the triangle instead of hunting for a memorised formula. and for any expression with a radical, name its signature and substitute on reflex: root one minus x squared goes to sine, root one plus goes to tangent, root x squared minus one goes to secant. after that most of these problems are mechanical."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "θ = sin⁻¹x: opposite x, hypotenuse 1, adjacent √(1 − x²)", "note": "every composite is read off this" },
            { "f": "cos(sin⁻¹x) = √(1 − x²) · tan(sin⁻¹x) = x/√(1 − x²)", "note": "adjacent over hyp, then opposite over adjacent" },
            { "f": "sin(tan⁻¹x) = x/√(1 + x²) · sec(tan⁻¹x) = √(1 + x²)", "note": "the tan⁻¹ triangle carries a plus" },
            { "f": "√(1 − x²) to sine · √(1 + x²) to tangent · √(x² − 1) to secant", "note": "the three substitution triggers" },
            { "f": "tan⁻¹((√(1 + x²) − 1)/x) = ½ tan⁻¹x", "note": "and tan⁻¹(cos x/(1 + sin x)) = π/4 − x/2" }
          ],
          "aids": [
            "“draw the triangle, read the ratio”",
            "“root one minus, sine; root one plus, tan; root minus one, sec”",
            "“the drawing gives sizes, the branch gives signs”"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Graphs, Waves, Domains and Ranges",
      "chip": "06 GRAPHS",
      "kalam": "mirror across y = x, then read everything off the picture",
      "blocks": [
        {
          "t": "p",
          "html": "Every inverse function is the parent graph <b>mirrored across the line <i>y</i> = <i>x</i></b>, restricted to the principal branch. Take <i>y</i> = sin <i>x</i> on [−π/2, π/2], a rising S from (−π/2, −1) to (π/2, 1), and flip it: you get <i>y</i> = sin<sup>−1</sup><i>x</i> rising from (−1, −π/2) to (1, π/2). The reflection <b>swaps the axes</b>, which is exactly why the inverse's domain is the parent's range and the inverse's range is the parent's domain. The table you memorised is now something you can see."
        },
        {
          "t": "think",
          "html": "a mirror across y = x keeps the shape and trades the axes. so increasing stays increasing, the odd curves keep their origin symmetry, and the cos⁻¹ and cot⁻¹ curves fall from left to right because their parents fall."
        },
        {
          "t": "defgrid",
          "title": "The six inverse graphs at a glance",
          "rows": [
            { "k": "<i>y</i> = sin<sup>−1</sup><i>x</i>", "v": "domain [−1, 1], range [−π/2, π/2], increasing and odd, through (0, 0)" },
            { "k": "<i>y</i> = cos<sup>−1</sup><i>x</i>", "v": "domain [−1, 1], range [0, π], decreasing, through (−1, π), (0, π/2), (1, 0)" },
            { "k": "<i>y</i> = tan<sup>−1</sup><i>x</i>", "v": "domain ℝ, range (−π/2, π/2), increasing and odd, asymptotes <i>y</i> = ±π/2" },
            { "k": "<i>y</i> = cot<sup>−1</sup><i>x</i>", "v": "domain ℝ, range (0, π), decreasing, asymptotes <i>y</i> = 0 and <i>y</i> = π" },
            { "k": "<i>y</i> = sec<sup>−1</sup><i>x</i>", "v": "domain |<i>x</i>| ≥ 1, range [0, π] − {π/2}, increasing on each piece, asymptote <i>y</i> = π/2" },
            { "k": "<i>y</i> = cosec<sup>−1</sup><i>x</i>", "v": "domain |<i>x</i>| ≥ 1, range [−π/2, π/2] − {0}, decreasing on each piece, asymptote <i>y</i> = 0" }
          ]
        },
        {
          "t": "p",
          "html": "Folding a <b>fixed</b> angle back into a branch gives a number. Let the angle be a <b>variable</b> and the fold becomes a function of <i>x</i>, and these three functions dominate the solution-counting questions JEE Advanced sets. Each one is <b>piecewise linear</b>: two of them are triangle waves and the third is a sawtooth, and once you can draw them the counting is arithmetic."
        },
        {
          "t": "formula",
          "kicker": "THE THREE FOLDED WAVES",
          "tag": "piecewise linear",
          "main": "sin<sup>−1</sup>(sin <i>x</i>) = <i>x</i> − 2<i>k</i>π on [−π/2 + 2<i>k</i>π, π/2 + 2<i>k</i>π]",
          "legend": [
            "and (2<i>k</i> + 1)π − <i>x</i> on [π/2 + 2<i>k</i>π, 3π/2 + 2<i>k</i>π], giving a zigzag of slope ±1",
            "cos<sup>−1</sup>(cos <i>x</i>) = <i>x</i> on [0, π] and 2π − <i>x</i> on [π, 2π], repeating every 2π",
            "tan<sup>−1</sup>(tan <i>x</i>) = <i>x</i> − <i>k</i>π on each open strip (−π/2 + <i>k</i>π, π/2 + <i>k</i>π), slope 1"
          ],
          "note": "sin<sup>−1</sup>(sin <i>x</i>) is odd with period 2π, range [−π/2, π/2] and corners at π/2 + <i>k</i>π. cos<sup>−1</sup>(cos <i>x</i>) is even with period 2π, range [0, π] and corners at <i>k</i>π. tan<sup>−1</sup>(tan <i>x</i>) has period π, range (−π/2, π/2), and jumps at π/2 + <i>k</i>π where it is undefined."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · SIX CURVES, TAP THROUGH THEM",
          "mathChips": true,
          "chips": ["sin⁻¹ x", "cos⁻¹ x", "tan⁻¹ x", "sin⁻¹(sin x)", "cos⁻¹(cos x)", "tan⁻¹(tan x)"],
          "captions": [
            "The faint wave is y = sin x and the faint diagonal is the mirror line y = x. The bold curve is what sine on its branch becomes after the flip: y = sin⁻¹x, climbing from (−1, −π/2) to (1, π/2). It is increasing and odd, and it stops dead at x = ±1 because the domain is only [−1, 1].",
            "y = cos⁻¹x falls from (−1, π) to (1, 0), passing through (0, π/2). Same domain [−1, 1], but the range now sits entirely above the axis, in [0, π], which is the picture of why cos⁻¹ can never return a negative value.",
            "y = tan⁻¹x accepts every real number and never reaches the two dashed lines y = ±π/2. They are horizontal asymptotes, approached and never touched, which is exactly what an open branch looks like when you draw it. The curve is increasing and odd, through the origin.",
            "A triangle wave of slope plus or minus one, trapped between −π/2 and π/2 because that is the branch. It agrees with x only on the middle rising piece, and everywhere else it is a reflection of x. Corners sit at π/2, 3π/2 and so on, and the whole picture repeats every 2π.",
            "The second triangle wave, this one trapped between 0 and π and even rather than odd. On [−π, π] it is simply the absolute value of x, and the corners have moved to the multiples of π. Reading a value off it is faster than folding by hand.",
            "The sawtooth. Slope 1 on every strip, then a jump from π/2 straight down to −π/2 at each odd multiple of π/2, where tangent is undefined and the function has no value at all. The period is π, half that of the other two."
          ],
          "frames": [
            {
              "x": [-2.0, 2.0],
              "y": [-1.95, 1.95],
              "curves": [
                { "c": "sin", "soft": true },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "segments": [
                { "from": [-1, -1.5708], "to": [-0.95, -1.2532] },
                { "from": [-0.95, -1.2532], "to": [-0.85, -1.016] },
                { "from": [-0.85, -1.016], "to": [-0.7, -0.7754] },
                { "from": [-0.7, -0.7754], "to": [-0.5, -0.5236] },
                { "from": [-0.5, -0.5236], "to": [-0.25, -0.2527] },
                { "from": [-0.25, -0.2527], "to": [0, 0] },
                { "from": [0, 0], "to": [0.25, 0.2527] },
                { "from": [0.25, 0.2527], "to": [0.5, 0.5236] },
                { "from": [0.5, 0.5236], "to": [0.7, 0.7754] },
                { "from": [0.7, 0.7754], "to": [0.85, 1.016] },
                { "from": [0.85, 1.016], "to": [0.95, 1.2532] },
                { "from": [0.95, 1.2532], "to": [1, 1.5708] }
              ],
              "points": [
                { "x": 1, "y": 1.5708, "label": "(1, π/2)" },
                { "x": -1, "y": -1.5708 },
                { "x": 1.5708, "y": 1, "soft": true },
                { "x": -1.5708, "y": -1, "soft": true }
              ]
            },
            {
              "x": [-1.9, 1.9],
              "y": [-0.45, 3.5],
              "segments": [
                { "from": [-1, 3.1416], "to": [-0.95, 2.824] },
                { "from": [-0.95, 2.824], "to": [-0.85, 2.5868] },
                { "from": [-0.85, 2.5868], "to": [-0.7, 2.3462] },
                { "from": [-0.7, 2.3462], "to": [-0.5, 2.0944] },
                { "from": [-0.5, 2.0944], "to": [-0.25, 1.8235] },
                { "from": [-0.25, 1.8235], "to": [0, 1.5708] },
                { "from": [0, 1.5708], "to": [0.25, 1.3181] },
                { "from": [0.25, 1.3181], "to": [0.5, 1.0472] },
                { "from": [0.5, 1.0472], "to": [0.7, 0.7954] },
                { "from": [0.7, 0.7954], "to": [0.85, 0.5548] },
                { "from": [0.85, 0.5548], "to": [0.95, 0.3176] },
                { "from": [0.95, 0.3176], "to": [1, 0] }
              ],
              "points": [
                { "x": -1, "y": 3.1416, "label": "(−1, π)" },
                { "x": 0, "y": 1.5708 },
                { "x": 1, "y": 0 }
              ]
            },
            {
              "x": [-5.4, 5.4],
              "y": [-2.0, 2.0],
              "curves": [
                { "c": "line", "m": 0, "k": 1.5708, "dash": true, "soft": true },
                { "c": "line", "m": 0, "k": -1.5708, "dash": true, "soft": true }
              ],
              "segments": [
                { "from": [-5, -1.3734], "to": [-3, -1.249] },
                { "from": [-3, -1.249], "to": [-2, -1.1071] },
                { "from": [-2, -1.1071], "to": [-1.4, -0.9505] },
                { "from": [-1.4, -0.9505], "to": [-1, -0.7854] },
                { "from": [-1, -0.7854], "to": [-0.6, -0.5404] },
                { "from": [-0.6, -0.5404], "to": [-0.3, -0.2915] },
                { "from": [-0.3, -0.2915], "to": [0, 0] },
                { "from": [0, 0], "to": [0.3, 0.2915] },
                { "from": [0.3, 0.2915], "to": [0.6, 0.5404] },
                { "from": [0.6, 0.5404], "to": [1, 0.7854] },
                { "from": [1, 0.7854], "to": [1.4, 0.9505] },
                { "from": [1.4, 0.9505], "to": [2, 1.1071] },
                { "from": [2, 1.1071], "to": [3, 1.249] },
                { "from": [3, 1.249], "to": [5, 1.3734] }
              ],
              "labels": [
                { "x": -3.6, "y": 1.78, "text": "y = π/2", "soft": true },
                { "x": 3.6, "y": -1.82, "text": "y = −π/2", "soft": true }
              ]
            },
            {
              "x": [-6.9, 6.9],
              "y": [-2.1, 2.1],
              "piTicks": true,
              "segments": [
                { "from": [-6.2832, 0], "to": [-4.7124, 1.5708] },
                { "from": [-4.7124, 1.5708], "to": [-1.5708, -1.5708] },
                { "from": [-1.5708, -1.5708], "to": [1.5708, 1.5708] },
                { "from": [1.5708, 1.5708], "to": [4.7124, -1.5708] },
                { "from": [4.7124, -1.5708], "to": [6.2832, 0] }
              ],
              "points": [
                { "x": 1.5708, "y": 1.5708 },
                { "x": 4.7124, "y": -1.5708 }
              ]
            },
            {
              "x": [-6.9, 6.9],
              "y": [-0.6, 3.6],
              "piTicks": true,
              "segments": [
                { "from": [-6.2832, 0], "to": [-3.1416, 3.1416] },
                { "from": [-3.1416, 3.1416], "to": [0, 0] },
                { "from": [0, 0], "to": [3.1416, 3.1416] },
                { "from": [3.1416, 3.1416], "to": [6.2832, 0] }
              ],
              "points": [
                { "x": 0, "y": 0 },
                { "x": 3.1416, "y": 3.1416 }
              ]
            },
            {
              "x": [-5.2, 5.2],
              "y": [-2.1, 2.1],
              "piTicks": true,
              "segments": [
                { "from": [-4.7124, -1.5708], "to": [-1.5708, 1.5708] },
                { "from": [-1.5708, -1.5708], "to": [1.5708, 1.5708] },
                { "from": [1.5708, -1.5708], "to": [4.7124, 1.5708] }
              ],
              "points": [
                { "x": -1.5708, "y": 1.5708, "open": true },
                { "x": 1.5708, "y": 1.5708, "open": true },
                { "x": -1.5708, "y": -1.5708, "open": true },
                { "x": 1.5708, "y": -1.5708, "open": true }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Because each wave is monotonic on each linear piece, an equation like <i>f</i>(<i>x</i>) = <i>c</i> is solved <b>one piece at a time</b> and the count follows. For a level <i>c</i> strictly between 0 and π/2 in size, sin<sup>−1</sup>(sin <i>x</i>) = <i>c</i> has exactly <b>two solutions per period</b>. At <i>c</i> = ±π/2 the two fuse at a corner into one. Nothing subtler than that is ever needed."
        },
        {
          "t": "proc",
          "title": "Counting solutions off a wave",
          "steps": [
            "<b>Bound the search space first.</b> The wave's range often closes the interval for free: cos<sup>−1</sup>(cos <i>x</i>) never exceeds π, so an equation setting it equal to <i>x</i>/2 forces <i>x</i> ≤ 2π before you solve anything.",
            "<b>Use the symmetry.</b> sin<sup>−1</sup>(sin <i>x</i>) is odd and cos<sup>−1</sup>(cos <i>x</i>) is even, so solve for <i>x</i> ≥ 0 and reflect.",
            "<b>Sweep the pieces</b> one at a time. On each piece the equation is linear, so it has at most one root.",
            "<b>Reject any candidate outside the piece that produced it.</b> A root from the rising piece that lands in the falling piece's interval is not a root at all.",
            "<b>Count the endpoints deliberately.</b> The corners of the waves and the values <i>x</i> = ±1 sit exactly on boundaries, and they do count."
          ]
        },
        {
          "t": "p",
          "html": "The last skill in the chapter is finding the <b>domain and range of a function assembled around inverse trigonometric parts</b>. Two reflexes cover nearly every exam question of this type. For a <b>domain</b>, write one constraint per inverse part and intersect them. For a <b>range</b>, collapse the expression to a single inverse function using the complementary laws, then quote monotonicity. No calculus is involved anywhere."
        },
        {
          "t": "proc",
          "title": "Domain and range of an assembled function",
          "steps": [
            "<b>One constraint per inverse part.</b> Arguments of sin<sup>−1</sup> and cos<sup>−1</sup> in [−1, 1]; arguments of sec<sup>−1</sup> and cosec<sup>−1</sup> with modulus at least 1; tan<sup>−1</sup> and cot<sup>−1</sup> free; plus whatever the surrounding algebra demands.",
            "<b>Intersect them.</b> For a quadratic argument, complete the square before solving −1 ≤ <i>q</i>(<i>x</i>) ≤ 1, because one side is usually automatic and falls out as a perfect square.",
            "<b>For a fractional argument, split on the sign of the denominator</b> rather than multiplying blindly, since multiplying by a negative reverses the inequality.",
            "<b>For a range, collapse first.</b> sin<sup>−1</sup><i>x</i> + cos<sup>−1</sup><i>x</i> = π/2 and its partners turn a two-term expression into one inverse function plus a constant. This is the single most profitable move in range problems.",
            "<b>Then use monotonicity.</b> Each inverse function is increasing or decreasing on its whole domain, so a sum of same-direction pieces takes its extreme values at the domain endpoints."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Find the domain and range of <i>F</i>(<i>x</i>) = cos<sup>−1</sup>(<i>x</i><sup>2</sup> − 4<i>x</i> + 3).",
          "steps": [
            "The constraint is −1 ≤ <i>x</i><sup>2</sup> − 4<i>x</i> + 3 ≤ 1, so handle the two sides separately.",
            "Upper side: <i>x</i><sup>2</sup> − 4<i>x</i> + 2 ≤ 0, that is (<i>x</i> − 2)<sup>2</sup> ≤ 2, giving 2 − √2 ≤ <i>x</i> ≤ 2 + √2.",
            "Lower side: <i>x</i><sup>2</sup> − 4<i>x</i> + 4 ≥ 0, that is (<i>x</i> − 2)<sup>2</sup> ≥ 0, true for every real <i>x</i>. So the domain is [2 − √2, 2 + √2].",
            "On that domain the argument is (<i>x</i> − 2)<sup>2</sup> − 1, running from −1 at the centre <i>x</i> = 2 up to 1 at both ends, so it covers all of [−1, 1] and cos<sup>−1</sup> delivers all of [0, π]."
          ],
          "ans": "domain [2 − √2, 2 + √2], range [0, π]"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Find the largest domain of <i>G</i>(<i>x</i>) = sin<sup>−1</sup>((<i>x</i> + 1)/(<i>x</i> − 2)).",
          "steps": [
            "Rewrite the argument as 1 + 3/(<i>x</i> − 2), which makes both inequalities one-term.",
            "Argument at most 1: 3/(<i>x</i> − 2) ≤ 0, which forces <i>x</i> − 2 to be negative, that is <i>x</i> below 2.",
            "Argument at least −1: 3/(<i>x</i> − 2) ≥ −2. Multiplying by the negative quantity <i>x</i> − 2 reverses the inequality: 3 ≤ −2(<i>x</i> − 2), so <i>x</i> ≤ 1/2.",
            "Intersecting gives (−∞, 1/2]. Spot-check: at <i>x</i> = 0 the argument is −1/2, legal; at <i>x</i> = 1 it is −2, illegal, and 1 is correctly excluded."
          ],
          "ans": "(−∞, 1/2]"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Evaluate sin<sup>−1</sup>(sin 10), and count the solutions of sin<sup>−1</sup>(sin <i>x</i>) = π/4 in [0, 2π].",
          "steps": [
            "For 10 radians, note 5π/2 ≈ 7.85 and 7π/2 ≈ 11.00, so 10 sits on a falling piece and the value is 3π − 10 ≈ −0.575. Check: sin 10 ≈ −0.544 and sin(3π − 10) ≈ −0.544, with 3π − 10 inside the branch.",
            "For the count, sweep the pieces covering [0, 2π]. On [0, π/2] the rising piece gives <i>x</i> = π/4, one hit.",
            "On [π/2, 3π/2] the falling piece reads π − <i>x</i> = π/4, so <i>x</i> = 3π/4, one hit.",
            "On [3π/2, 2π] the rising piece reads <i>x</i> − 2π = π/4, so <i>x</i> = 9π/4, which is outside the interval and is rejected. Two solutions in all."
          ],
          "ans": "3π − 10 · two solutions, π/4 and 3π/4"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Find the number of real solutions of cos<sup>−1</sup>(cos <i>x</i>) = |<i>x</i>|/2.",
          "steps": [
            "Both sides are even, so solve for <i>x</i> ≥ 0 and reflect. The left side never exceeds π, so <i>x</i>/2 ≤ π closes the search at <i>x</i> ≤ 2π for free.",
            "On [0, π] the wave is <i>x</i>, so <i>x</i> = <i>x</i>/2 gives <i>x</i> = 0, which is valid since cos<sup>−1</sup>(cos 0) = 0.",
            "On [π, 2π] the wave is 2π − <i>x</i>, so 2π − <i>x</i> = <i>x</i>/2 gives <i>x</i> = 4π/3 ≈ 4.19, which does lie inside [π, 2π] and is therefore kept.",
            "Past 2π the search is already closed, so the non-negative solutions are 0 and 4π/3, and reflection adds −4π/3."
          ],
          "ans": "three solutions: <i>x</i> = 0 and <i>x</i> = ±4π/3"
        },
        {
          "t": "mcq",
          "q": "The graph of <i>y</i> = cos<sup>−1</sup><i>x</i> is",
          "correct": 1,
          "opts": [
            { "label": "increasing on [−1, 1]", "nudge": "The parent cosine falls on [0, π], and a mirror across y = x preserves the direction, so the inverse falls too." },
            { "label": "decreasing on [−1, 1]", "nudge": null },
            { "label": "odd", "nudge": "Odd would need cos⁻¹(−x) = −cos⁻¹x, but the branch [0, π] holds no negative value. It follows the π − rule instead." },
            { "label": "unbounded", "nudge": "Its range is exactly [0, π], bounded at both ends, and its domain is only [−1, 1]." }
          ],
          "solution": "cos⁻¹ falls from (−1, π) to (1, 0), through (0, π/2). It is neither odd nor unbounded."
        },
        {
          "t": "mcq",
          "q": "tan<sup>−1</sup>(tan 7π/4) =",
          "correct": 2,
          "opts": [
            { "label": "7π/4", "nudge": "7π/4 is outside (−π/2, π/2), so it cannot be a tan⁻¹ value at all. This is blind cancellation." },
            { "label": "3π/4", "nudge": "This subtracts one π instead of two. 7π/4 sits in the strip (3π/2, 5π/2), where the sawtooth reads x − 2π." },
            { "label": "−π/4", "nudge": null },
            { "label": "π/4", "nudge": "The sign has been lost. tan(7π/4) = −1, so the in-branch angle must be negative." }
          ],
          "solution": "7π/4 lies in the strip (3π/2, 5π/2), which is k = 2, so the sawtooth value is x − 2π = −π/4. Equivalently tan(7π/4) = −1 and tan⁻¹(−1) = −π/4."
        },
        {
          "t": "mcq",
          "q": "The range of <i>K</i>(<i>x</i>) = 2 sin<sup>−1</sup><i>x</i> − cos<sup>−1</sup><i>x</i> is",
          "correct": 0,
          "opts": [
            { "label": "[−2π, π]", "nudge": null },
            { "label": "[−3π/2, 3π/2]", "nudge": "That is the range of 3 sin⁻¹x alone, with the constant −π/2 dropped after the collapse." },
            { "label": "[−π, π]", "nudge": "This treats the two terms as collapsing to a single sin⁻¹x. Collapse it properly first: the expression is 3 sin⁻¹x − π/2." },
            { "label": "[0, π]", "nudge": "That is cos⁻¹'s own range. K takes negative values, for example K(−1) = −π − π = −2π." }
          ],
          "solution": "Use cos⁻¹x = π/2 − sin⁻¹x, so K(x) = 3 sin⁻¹x − π/2. Since sin⁻¹x runs over [−π/2, π/2], K runs from −3π/2 − π/2 to 3π/2 − π/2, that is [−2π, π]."
        },
        {
          "t": "mcq",
          "q": "The range of <i>P</i>(<i>x</i>) = sin<sup>−1</sup><i>x</i> + sec<sup>−1</sup><i>x</i> is",
          "correct": 2,
          "opts": [
            { "label": "[−π/2, π/2]", "nudge": "This ignores the domain gate. sec⁻¹ forbids the open interval (−1, 1), so the two domains barely overlap at all." },
            { "label": "[0, π]", "nudge": "That is sec⁻¹'s own range, and it takes no account of the sin⁻¹ term or of the shared domain." },
            { "label": "the single value π/2", "nudge": null },
            { "label": "empty", "nudge": "The domains do overlap, at exactly the two points x = 1 and x = −1, so the function is defined there." }
          ],
          "solution": "The domain is [−1, 1] intersected with |x| ≥ 1, which is just the two points −1 and 1. P(1) = π/2 + 0 = π/2 and P(−1) = −π/2 + π = π/2, so P is constant. No amount of formula-pushing finds this; the domain gate does."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the domain of sin<sup>−1</sup>(2<i>x</i> − 1).",
              "a": "−1 ≤ 2<i>x</i> − 1 ≤ 1 gives 0 ≤ 2<i>x</i> ≤ 2, so <i>x</i> ∈ [0, 1]."
            },
            {
              "q": "[CUET] Find the largest domain of sec<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>x</i>.",
              "a": "tan<sup>−1</sup> accepts every real number and sec<sup>−1</sup> demands |<i>x</i>| ≥ 1, so the intersection is (−∞, −1] ∪ [1, ∞)."
            },
            {
              "q": "[JEE Main] Evaluate cos<sup>−1</sup>(cos 4), working in radians.",
              "a": "Since π ≈ 3.14 is below 4 and 4 is below 2π ≈ 6.28, the falling piece applies and the value is 2π − 4 ≈ 0.283."
            },
            {
              "q": "[JEE Main] How many solutions does sin<sup>−1</sup>(sin <i>x</i>) = 0.6 have in [−2π, 2π]?",
              "a": "0.6 lies strictly between the corner heights ±π/2, so each period contributes two solutions, and the interval spans two full periods. Four: <i>x</i> = 0.6, π − 0.6, and their odd reflections −0.6 and −(π − 0.6)."
            },
            {
              "q": "[JEE Advanced] Find the range of <i>H</i>(<i>x</i>) = sin<sup>−1</sup><i>x</i> + tan<sup>−1</sup><i>x</i> on its natural domain.",
              "a": "Both parts are defined on [−1, 1], so that is the domain, and both increase there, so <i>H</i> increases and its range runs from endpoint to endpoint. <i>H</i>(−1) = −π/2 − π/4 = −3π/4 and <i>H</i>(1) = 3π/4, so the range is [−3π/4, 3π/4]."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Sketching sin<sup>−1</sup><i>x</i> with the <b>parent's axes</b>. The mirror swaps them: [−1, 1] goes on the horizontal axis and [−π/2, π/2] on the vertical.",
            "Treating <b><i>y</i> = ±π/2 as values tan<sup>−1</sup> attains</b>. They are horizontal asymptotes, approached and never reached, which is precisely why that branch is open.",
            "Using the <b>wrong strip</b> on tan<sup>−1</sup>(tan <i>x</i>). Subtract the multiple of π belonging to the strip that actually contains <i>x</i>, then check the result is inside (−π/2, π/2).",
            "Skipping the <b>domain gate</b> on a range question. sin<sup>−1</sup><i>x</i> + sec<sup>−1</sup><i>x</i> looks like hard analysis and is really a two-point domain and a constant function.",
            "Excluding endpoints when counting. <b><i>x</i> = ±1 and the corners of the waves</b> sit exactly on boundaries, and students who feel that boundaries are excluded miscount every time."
          ]
        },
        {
          "t": "protip",
          "html": "on any range question, collapse to a single inverse function first with sin⁻¹x + cos⁻¹x = π/2 or tan⁻¹x + cot⁻¹x = π/2, then quote monotonicity and read the two endpoints. no calculus, no case work, and it is the same two lines every time. on any counting question, bound the search space before you sweep, because the range usually closes the interval for free."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "the inverse is the parent mirrored across y = x", "note": "domain and range swap places" },
            { "f": "sin⁻¹ and tan⁻¹ increase and are odd · cos⁻¹ and cot⁻¹ decrease", "note": "sec⁻¹ increases and cosec⁻¹ decreases, on each piece" },
            { "f": "sin⁻¹(sin x): period 2π, range [−π/2, π/2], corners at π/2 + kπ", "note": "triangle wave of slope plus or minus one" },
            { "f": "cos⁻¹(cos x): period 2π, range [0, π], corners at kπ", "note": "even, and equal to |x| on [−π, π]" },
            { "f": "tan⁻¹(tan x) = x − kπ on (−π/2 + kπ, π/2 + kπ)", "note": "sawtooth, period π, undefined at every jump" },
            { "f": "range: collapse with the complementary law, then use monotonicity", "note": "the endpoints carry the extremes" }
          ],
          "aids": [
            "“mirror across y = x, then read off the axes”",
            "“bound the search, sweep the pieces, keep the endpoints”"
          ]
        }
      ]
    }
  ]
};

export default ch12InverseTrig;
