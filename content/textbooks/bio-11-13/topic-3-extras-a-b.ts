import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 13, Plant Growth and Development: Topic 03 and Additional topics A and B,
 * word for word from the Class 11 Biology Master Reference (pp. 783 to 797).
 *
 * Topic 03 Photoperiodism & Vernalisation, pp. 783 to 790 (Figure 13.4: caption on p. 785, drawing
 * on p. 786, set after procedure B where the book's caption stands). The shared opening of
 * "Plant Growth and Development: Additional Topics" (p. 791) heads Additional topic A's
 * Introduction. A Quantitative Growth Analysis: Solving for Time and Comparing RGR, pp. 791 to 794
 * (its Practice and answers end on p. 794); B Seed Dormancy: Types, Hormonal Mechanism, and
 * Breaking Methods, pp. 794 to 797 (its answers end on p. 797, where Addendum C begins on p. 798).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on
 * one line, scientific names italic, "Sub-topic" is "Topic", "Addendum A to E" is "Additional
 * topic A to E". The book's MCQ options are lettered (a) to (d) in this chapter and are kept;
 * its assertion-reason options are numbered (1) to (4) and are kept.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 783 to 790 ─────────────────────────
  {
    n: '03',
    title: 'Photoperiodism & Vernalisation',
    kalam: 'Every farmer in India already knows something deep about plants without ever using the word “photoperiodism.”',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This pair finishes the chapter’s three core topics and is a dependable scorer. <b>CBSE Boards</b> ask the 2–3 mark “define photoperiodism and vernalisation and state their significance” almost as a ritual, plus the classic “why won’t a defoliated plant flower?” reasoning question. <b>CUET</b> runs match-the-column (plant ↔ short-day/long-day/day-neutral) and one-liners on critical day length. <b>NEET</b> reliably tests the long-night twist (short-day plants are really long-night plants), the site of light perception (leaves, not the bud), and at least one vernalisation fact, so do not treat this as optional revision (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Every farmer in India already knows something deep about plants without ever using the word “photoperiodism.” Ask why wheat is a rabi crop (sown as the days shorten into winter and harvested as they lengthen in spring) and why chrysanthemums and Diwali-season flowers bloom in the cool short days of autumn, not in peak summer. The plants are reading the calendar. They are not counting dates; they are measuring the length of day and night, and using that measurement to decide when to flower. That measurement-and-response is <b>photoperiodism</b>.',
      },
      {
        t: 'p',
        html: 'Why would a plant care about day length? Because day length is one of the most reliable seasonal signals. Temperature swings wildly from one week to the next, rainfall is erratic, but the ratio of daylight to darkness on, say, the 1st of October is exactly the same every single year. A plant that ties its flowering to photoperiod is using nature’s most reliable clock to make sure it flowers in the right season: when pollinators are around, when its seeds will have time to mature before harsh weather returns.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a night-watchman who must ring a bell only on nights longer than 10 hours. He does not actually time the day at all, he times the darkness. If someone walks past at midnight and flashes a torch in his face, his count of “continuous darkness” resets, and he never rings the bell even if the night was truly long. Plants behave exactly like this watchman: what they really measure is the length of the <b>continuous dark period</b>, and a brief flash of light in the middle of the night can completely fool them. This single idea (that the dark period, not the light period, is what’s decisive) is the heart of the whole topic.',
      },
      {
        t: 'p',
        html: 'On this basis flowering plants sort into three groups. <b>Short-day plants</b> flower when the day is shorter than a certain critical length (so they are really long-night plants); <b>long-day plants</b> flower when the day is longer than their critical length (really short-night plants); and <b>day-neutral plants</b> ignore day length altogether and flower whenever they are mature. The catch that traps students: “short” and “long” are relative to each plant’s own critical day length, not absolute hours: a so-called short-day plant might actually need more hours of light than a long-day plant.',
      },
      {
        t: 'p',
        html: 'Now the second idea. Some plants will not flower at the right time unless they have first been through a cold spell. Winter wheat sown in autumn sits quietly as a seedling through the freezing months and only then, having “felt the winter,” flowers in summer. Sow that same wheat in spring (skipping winter) and it stubbornly refuses to flower. This cold requirement for flowering is <b>vernalisation</b> (from vernal, meaning spring). It is the plant’s insurance policy: by demanding a winter first, it avoids the mistake of flowering too early, in the wrong season.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Photoperiodism governs flowering (and some other seasonal responses), not general growth: do not stretch it to explain germination or elongation. The light signal is perceived by <b>leaves</b>, so a fully defoliated plant cannot respond at all, no matter how perfect the photoperiod. And vernalisation only promotes or enables flowering; it does not by itself make a plant flower instantly: the plant must still be otherwise ready, and the cold effect can even be erased (devernalisation) by a spell of high temperature straight afterwards.',
      },

      { t: 'part', title: 'Key definitions and reference' },
      {
        t: 'p',
        html: '(Physiology fork: descriptive topic; no formulae, no dimensional analysis.)',
      },
      {
        t: 'def',
        term: 'Photoperiodism',
        html: 'the response of plants to the relative lengths of the light (day) and dark (night) periods, particularly with respect to the <b>induction of flowering</b>.',
      },
      {
        t: 'def',
        term: 'Critical day length',
        html: 'the threshold day length, specific to a given plant, above or below which flowering is switched on or off. Each species has its own value; the direction of the response (not the absolute hours) defines its category.',
      },
      { t: 'p', html: '<b>Photoperiodic categories of flowering plants:</b>' },
      {
        t: 'p',
        html: '• <b>Short-Day Plants (SDP):</b> (in obligate types) flower only when the day length is <b>less than</b> their critical day length, i.e. when the continuous dark (night) period <b>exceeds</b> a critical minimum. Because the dark period is decisive, they are equivalently <b>long-night plants</b>. <b>Examples:</b> chrysanthemum, <i>Xanthium</i> (cocklebur), rice, soybean (<i>Glycine max</i>), Maryland Mammoth tobacco.<br>• <b>Long-Day Plants (LDP):</b> (in obligate types) flower only when the day length is <b>more than</b> their critical day length, i.e. when the dark period is <b>shorter</b> than a critical maximum; equivalently <b>short-night plants</b>. <b>Examples:</b> spinach (<i>Spinacia</i>), radish, lettuce, wheat, sugar beet, spring barley (wheat, sugar beet and barley vary by variety), <i>Hyoscyamus niger</i> (henbane).<br>• <b>Day-Neutral Plants (DNP):</b> flower in essentially <b>any</b> photoperiod; flowering is independent of day length. <b>Examples:</b> tomato, cucumber, sunflower, cotton, maize.',
      },
      {
        t: 'def',
        term: 'Site of perception',
        html: 'the <b>leaf</b>. Even a single leaf exposed to the right (inductive) photoperiod is sufficient; the response is then transmitted to the shoot apex, where flowers actually form.',
      },
      {
        t: 'def',
        term: 'Florigen (flowering hormone)',
        html: 'the hypothesised chemical signal produced in leaves under an inductive photoperiod that migrates to the shoot apices and converts a vegetative apex into a flowering apex. (Enrichment, beyond NCERT 11: florigen is now identified with the protein product of the FT gene.)',
      },
      {
        t: 'def',
        term: 'Phytochrome',
        html: 'the light-absorbing photoreceptor pigment through which plants perceive the photoperiod; it exists in two interconvertible forms responsive to red and far-red light, allowing the plant to “read” day/night.',
      },
      {
        t: 'def',
        term: 'Vernalisation',
        html: 'the qualitative or quantitative dependence of <b>flowering</b> on exposure to a period of <b>low temperature</b>; in short, the promotion/induction of flowering by cold treatment. It prevents precocious (too-early) reproductive development and ensures the plant has time to reach maturity.',
      },
      {
        t: 'def',
        term: 'Devernalisation',
        html: 'the reversal/cancellation of the vernalisation effect by exposing the plant to a higher temperature soon after the cold treatment.',
      },
      {
        t: 'p',
        html: '<b>Vernalisation-requiring examples:</b> winter varieties of <b>wheat, rye and barley</b> (sown in autumn, vegetative through winter, flower in summer); <b>biennials</b> such as sugar beet, cabbage and carrot.',
      },
      {
        t: 'p',
        html: '<b>Enrichment (beyond NCERT 11):</b> a few plants need two photoperiods in sequence: <b>long-short-day plants</b> (e.g. <i>Bryophyllum</i>) and <b>short-long-day plants</b> (e.g. <i>Trifolium repens</i>).',
      },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: '<b>A. How a plant “decides” to flower by photoperiod.</b>',
      },
      {
        t: 'proc',
        title: 'The logic runs in four linked steps, and each step is a favourite exam target:',
        steps: [
          '<b>Perception</b> happens in the <b>leaf</b>, not the bud. The leaf, through its phytochrome, measures the length of the continuous dark period.',
          'If the photoperiod is inductive for that species, the leaf produces a flowering signal (<b>florigen</b>).',
          'The signal is <b>transported</b> from the leaf to the <b>shoot apical meristem</b>.',
          'At the apex the signal <b>converts</b> the vegetative meristem into a floral meristem, and flowers develop. This is why a <b>defoliated plant cannot flower</b> however ideal the day length: with no leaves, step 1 is impossible, so no florigen is ever made. It is also why exposing even one leaf to the correct photoperiod can be enough to trigger flowering of the whole plant.',
        ],
      },
      {
        t: 'p',
        html: '<b>B. The night-break logic (why dark length rules).</b> Take a short-day (long-night) plant that needs, say, more than a critical number of hours of continuous darkness. Give it that long night and it flowers. Now interrupt the middle of that long night with a brief flash of light, a <b>night break</b>, and it fails to flower, even though the total darkness was almost unchanged. The flash resets the plant’s measurement of continuous darkness. Conversely, a long-day (short-night) plant kept on long nights can be induced to flower by the same night-break flash. Conclusion: the plant is really measuring the <b>uninterrupted dark period</b>, which is why SDP = long-night plants and LDP = short-night plants. (The reasoning behind the names matters more than the names themselves.)',
      },
      { t: 'fig', id: 'b11-13-fig-13.4' },
      {
        t: 'p',
        html: '<b>C. Classifying a plant: the decision rule.</b> Do not memorise hours; apply the rule. Ask: relative to this plant’s own critical day length, does flowering need the day to be shorter, longer, or does day length not matter? Shorter than critical → SDP (long-night); longer than critical → LDP (short-night); irrelevant → DNP. This is why an SDP and an LDP can share the same critical day length yet behave oppositely: the SDP flowers below it, the LDP above it.',
      },
      {
        t: 'p',
        html: '<b>D. How vernalisation works and why plants evolved it.</b> The cold requirement is perceived chiefly at the <b>shoot apical meristem / actively dividing cells</b> (and, in cereals, the embryo of the germinating seed can be vernalised directly). A sufficient spell of low temperature makes the apex competent to respond later to flowering signals. The adaptive logic is timing insurance: an autumn-sown winter cereal that flowered immediately would try to set seed in mid-winter and be destroyed; by demanding a cold period first, it postpones flowering until the favourable spring/summer, having used the winter to grow vegetatively. <b>Devernalisation</b> shows the effect is not permanently locked in: a hot spell straight after the cold can undo it.',
      },
      {
        t: 'p',
        html: '<b>E. Significance (commonly asked as a 2–3 mark point list).</b> <b>Photoperiodism:</b> lets breeders make plants flower out of season or year-round, and lets crops be matched to the day-length regime of a region, aiding hybridisation. <b>Vernalisation:</b> allows earlier cropping, extends cultivation to regions where a crop would not normally flower, and can raise yield.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Define photoperiodism and vernalisation, and give one significance of each.',
        steps: [
          '<b>Photoperiodism</b> is the response of plants to the relative lengths of day and night, especially in controlling the induction of flowering. <b>Significance:</b> it allows growers and breeders to manipulate flowering time (e.g. produce flowers off-season). <b>Vernalisation</b> is the promotion or induction of flowering by exposing a plant to a period of low temperature. <b>Significance:</b> it enables crops such as winter wheat to be grown and to flower in the correct season, and can extend a crop to new regions.',
          'For full marks always link photoperiodism to day length and vernalisation to low temperature explicitly.',
        ],
        ans: '(definitions + one significance each, as above).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Match each plant with its photoperiodic category. Column I: (P) <i>Xanthium</i> (Q) Spinach (R) Sunflower. Column II: (i) Long-day plant (ii) Day-neutral plant (iii) Short-day plant.',
        steps: [
          '<i>Xanthium</i> is a classic short-day (long-night) plant → (iii). Spinach flowers on long days → (i). Sunflower flowers regardless of day length → (ii).',
        ],
        ans: 'P–iii, Q–i, R–ii.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A short-day plant is kept under a long continuous dark period and flowers normally. In a second trial the long dark period is interrupted by a one-minute flash of light at its midpoint. Predict the result and justify.',
        steps: [
          'A short-day plant is in truth a <b>long-night plant</b>: what it requires is an uninterrupted dark period longer than its critical value. The midnight flash (a <b>night break</b>) resets its measurement of continuous darkness, so the effective dark period is now too short. Therefore the plant <b>fails to flower</b>, even though the total hours of darkness barely changed.',
          '(This is a classic, often-tested idea in the topic: the book’s estimate from past papers, not official figures.)',
        ],
        ans: 'No flowering: the night break destroys the required continuous dark period.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): A plant whose every leaf has been removed will not flower even under a fully inductive photoperiodic stimulus. Reason (R): The shoot apical meristem is the site that perceives the photoperiodic stimulus. Options: <b>(1)</b> Both A and R true, R correct explanation of A. <b>(2)</b> Both true, R not the correct explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          'A is <b>true</b>: without leaves there is no organ to perceive the photoperiod and no florigen is produced, so flowering cannot be triggered. R is <b>false</b>: the site of <b>perception</b> is the <b>leaf</b>, not the shoot apex (the apex is where flowers eventually <b>form</b>, but it does not perceive the light signal). A true, R false.',
          '(Trap: students who half-remember “apex → flowers” wrongly mark R true and pick option 1.)',
        ],
        ans: 'Option (3).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is a defoliated plant unable to respond to a photoperiodic stimulus? Explain in two or three sentences.',
            a: 'Leaves are the site of perception of the photoperiod; with no leaves, no florigen can be produced, so the signal that converts the shoot apex to a flowering apex never forms.',
          },
          {
            q: '[CUET] Name the pigment that acts as the photoreceptor in photoperiodism, and name the hypothesised hormone that travels from leaf to shoot apex to induce flowering.',
            a: 'Phytochrome; florigen (flowering hormone).',
          },
          {
            q: '[NEET] Winter wheat sown in spring fails to flower, but the same variety sown in autumn flowers normally the following summer. Name the phenomenon responsible and state the treatment that would let the spring-sown crop flower.',
            a: 'Vernalisation; supplying an artificial low-temperature (cold) treatment to the spring-sown seedlings/seeds.',
          },
          {
            q: '[NEET] Classify the following as SDP, LDP or DNP: rice, radish, tomato, <i>Hyoscyamus niger</i>.',
            a: 'Rice: SDP; radish: LDP; tomato: DNP; <i>Hyoscyamus niger</i>: LDP.',
          },
          {
            q: '[NEET High-Difficulty] Two species, A and B, share exactly the same critical day length of 13 hours, yet under a 14-hour photoperiod only A flowers and under a 12-hour photoperiod only B flowers. Identify A and B as SDP or LDP and justify using the critical-day-length rule.',
            a: 'A flowers above the critical length (14 > 13) → <b>long-day plant</b>; B flowers below it (12 < 13) → <b>short-day plant</b>; identical critical values, opposite directions of response.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Short-day plants are more accurately described as:',
        opts: [
          { label: 'long-night plants', nudge: null },
          { label: 'short-night plants', nudge: '<b>(b)</b> describes long-day plants, the exact opposite, a strong distractor.' },
          { label: 'high-temperature plants', nudge: '<b>(c)</b> confuses photoperiod with temperature (that is vernalisation’s domain).' },
          { label: 'day-neutral plants', nudge: '<b>(d)</b> DNP ignore day length entirely; unrelated.' },
        ],
        correct: 0,
        solution: 'What an SDP truly requires is a continuous dark period longer than a critical value, so it is a long-night plant.',
      },
      {
        t: 'mcq',
        q: 'A brief flash of light given in the middle of the dark period (a night break) will:',
        opts: [
          { label: 'promote flowering in a short-day plant', nudge: '<b>(a)</b> reverses the real effect, chosen by students who think any light “helps.”' },
          { label: 'prevent flowering in a short-day plant', nudge: null },
          { label: 'have no effect on any plant', nudge: '<b>(c)</b> ignores the entire night-break result.' },
          { label: 'prevent flowering in a day-neutral plant', nudge: '<b>(d)</b> DNP are insensitive to photoperiod, so a night break does nothing to them.' },
        ],
        correct: 1,
        solution: 'The flash resets the continuous-darkness measurement, robbing the SDP of its required long night.',
      },
      {
        t: 'mcq',
        q: 'The site of perception of the photoperiodic stimulus in plants is the:',
        opts: [
          { label: 'shoot apical meristem', nudge: '<b>(a)</b> is where flowers <b>form</b> after the signal arrives, not where light is perceived: the commonest trap.' },
          { label: 'root tip', nudge: '<b>(b)</b>, <b>(d)</b> have no role in photoperiodic perception.' },
          { label: 'leaf', nudge: null },
          { label: 'flower bud', nudge: '<b>(b)</b>, <b>(d)</b> have no role in photoperiodic perception.' },
        ],
        correct: 2,
        solution: 'Leaves perceive the photoperiod; even one leaf under inductive conditions suffices.',
      },
      {
        t: 'mcq',
        q: 'Vernalisation is best defined as the:',
        opts: [
          { label: 'inhibition of flowering by high temperature', nudge: '<b>(a)</b> inverts the temperature relationship.' },
          { label: 'promotion of flowering by exposure to low temperature', nudge: null },
          { label: 'response of flowering to day length', nudge: '<b>(c)</b> is the definition of photoperiodism: the classic mix-up the question is built to catch.' },
          { label: 'breaking of seed dormancy by light', nudge: '<b>(d)</b> describes a light-mediated dormancy effect, not vernalisation.' },
        ],
        correct: 1,
        solution: 'Vernalisation is the low-temperature promotion/induction of flowering.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Short-day” ≠ few hours of light.</b> The label is relative to each plant’s own critical day length, and the dark period is what actually counts. Always translate SDP → “long-night”, LDP → “short-night” in your head before answering.',
          '<b>Wrong site of perception.</b> Light is perceived by <b>leaves</b>; flowers form at the <b>shoot apex</b>. Examiners deliberately swap these.',
          '<b>Confusing the two phenomena.</b> Photoperiodism = response to <b>day length</b>; vernalisation = response to <b>low temperature</b>. If a question is about cold promoting flowering, it is vernalisation; cold that breaks seed dormancy is stratification, a different process.',
          '<b>Forgetting day-neutral plants exist.</b> When a question says “flowers in all photoperiods,” that is a DNP, not a trick.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “will it flower?” question, ignore the light hours first and ask only: was the continuous dark period long enough (for an SDP) or short enough (for an LDP)? Then check for a night break: a single flash flips the answer. That two-step check resolves almost every photoperiod problem in seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Photoperiodism</b> = flowering response to relative day/night length; perceived by <b>leaves</b> (even one), signalled by <b>florigen</b> to the shoot apex; pigment = <b>phytochrome</b>.', note: '' },
          { f: '<b>SDP = long-night plants</b> (flower below critical day length): chrysanthemum, <i>Xanthium</i>, rice, soybean, Maryland Mammoth tobacco.', note: '' },
          { f: '<b>LDP = short-night plants</b> (flower above critical day length): spinach, radish, lettuce, wheat, sugar beet, <i>Hyoscyamus</i>.', note: '' },
          { f: '<b>DNP</b>: flower in any photoperiod: tomato, cucumber, sunflower, cotton, maize.', note: '' },
          { f: '<b>Night break:</b> a light flash in mid-darkness stops flowering in SDP, can induce it in LDP → proves the <b>dark period</b> is decisive.', note: '' },
          { f: '<b>Vernalisation</b> = low-temperature promotion of flowering (winter wheat/rye/barley; biennials like sugar beet, cabbage); reversible by heat = <b>devernalisation</b>.', note: '' },
        ],
        aids: [
          '<b>Mnemonic:</b> <b>“SDP = Sleeps in Darkness Plenty”</b> (needs long nights); photoperiod = <b>light</b> clock, vernalisation = <b>cold</b> clock.',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 791 to 794 ─────────────────────────
  {
    n: 'A',
    title: 'Quantitative Growth Analysis: Solving for Time and Comparing RGR',
    extra: true,
    kalam: 'Quantitative growth analysis, namely solving the exponential growth equation for time and comparing relative growth rates.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section extends Chapter 13 with five topics that examiners like to build questions on: (A) quantitative growth analysis, namely solving the growth equations for time and the two forms of relative growth rate; (B) the seed dormancy cycle, covering the types of dormancy, the ABA/GA antagonism at the biochemical level and practical dormancy-breaking methods; (C) how PGRs act at the cellular level, namely the gibberellin–alpha-amylase pathway, the ABA stomatal-closure cascade and the Richmond–Lang effect (enrichment beyond the NCERT text); (D) the phytochrome Pr/Pfr mechanism, the circadian-clock connection and photoperiodic timekeeping beyond the night-break experiment; and (E) nastic movements (nyctinasty and seismonasty) and the tropism/nastic distinction. Each additional topic adds one examinable layer; where it returns to something Topics 01 to 03 already teach, it builds on it (A and B also go beyond the NCERT text).',
      },
      {
        t: 'p',
        html: 'The chapter gives the formulas <i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>r</i><i>t</i> (arithmetic) and <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rt</i></sup> (geometric), shows how to read AGR and RGR from a data pair, and warns that AGR can mislead; Topic 01 already compares the RGR of two leaves in its third worked example. This additional topic adds solving for time when the plant reaches a target size, the doubling time of exponential growth, and the difference between the exact rate <i>r</i> and the ratio-form RGR.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Solving arithmetic growth for time.</b> From <i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>r</i><i>t</i>, rearranging gives <i>t</i> = <frac><num><i>L</i><sub><i>t</i></sub> − <i>L</i><sub>0</sub></num><den><i>r</i></den></frac>. Use this when the question gives initial size, growth rate, and a target final size.',
      },
      {
        t: 'p',
        html: '<b>Doubling time of exponential growth.</b> Setting <i>W</i><sub>1</sub> = 2<i>W</i><sub>0</sub> in <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rt</i></sup>, and writing <i>T</i> for the doubling time (the <i>t</i><sub>d</sub> of the table below):<br>2<i>W</i><sub>0</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rT</i></sup> ⇒ 2 = <i>e</i><sup><i>rT</i></sup> ⇒ <i>T</i> = <frac><num>ln 2</num><den><i>r</i></den></frac> = <frac><num>0.693</num><den><i>r</i></den></frac>.<br>The doubling time depends only on <i>r</i>, not on <i>W</i><sub>0</sub>. Units of <i>r</i> must be per unit time matching <i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Solving exponential growth for time.</b> From <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rt</i></sup>:<br><i>t</i> = <frac><num>1</num><den><i>r</i></den></frac> ln(<frac><num><i>W</i><sub>1</sub></num><den><i>W</i><sub>0</sub></den></frac>).<br>The ratio <frac><num><i>W</i><sub>1</sub></num><den><i>W</i><sub>0</sub></den></frac> must be dimensionless.',
      },
      {
        t: 'p',
        html: '<b>RGR comparison when two organs grow over the same period.</b> If organ A grows from <i>W</i><sub>0,<i>A</i></sub> to <i>W</i><sub>1,<i>A</i></sub> and organ B grows from <i>W</i><sub>0,<i>B</i></sub> to <i>W</i><sub>1,<i>B</i></sub> in the same time Δ<i>t</i>, then:<br>RGR<sub><i>A</i></sub> = <frac><num><i>W</i><sub>1,<i>A</i></sub> − <i>W</i><sub>0,<i>A</i></sub></num><den><i>W</i><sub>0,<i>A</i></sub> Δ<i>t</i></den></frac>, RGR<sub><i>B</i></sub> = <frac><num><i>W</i><sub>1,<i>B</i></sub> − <i>W</i><sub>0,<i>B</i></sub></num><den><i>W</i><sub>0,<i>B</i></sub> Δ<i>t</i></den></frac>.<br>The organ with the smaller initial size wins on RGR if the absolute growth is comparable, a direct consequence of dividing by a smaller denominator.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>r</i> in arithmetic growth carries units of size per time (cm day<sup>−1</sup>). <i>r</i> in exponential growth has units of time<sup>−1</sup> (for example day<sup>−1</sup>); the product <i>r</i><i>t</i> is dimensionless, which is what allows it to sit in the exponent of <i>e</i><sup><i>rt</i></sup>. RGR in percentage form multiplies by 100 and is reported as % per unit time.',
      },

      { t: 'part', title: 'Standard shortcuts' },
      {
        t: 'table',
        title: null,
        head: ['Situation', 'Formula', 'What it gives'],
        rows: [
          ['Arithmetic target time', '<i>t</i> = <frac><num><i>L</i><sub>target</sub> − <i>L</i><sub>0</sub></num><den><i>r</i></den></frac>', 'Days to reach given length'],
          ['Exponential doubling time', '<i>t</i><sub>d</sub> = <frac><num>0.693</num><den><i>r</i></den></frac>', 'Time to double initial mass'],
          ['Exponential target time', '<i>t</i> = <frac><num>1</num><den><i>r</i></den></frac> ln(<frac><num><i>W</i><sub>1</sub></num><den><i>W</i><sub>0</sub></den></frac>)', 'Days to reach given mass'],
          ['RGR from two data points (exponential form)', 'RGR = <frac><num>ln <i>W</i><sub>1</sub> − ln <i>W</i><sub>0</sub></num><den>Δ<i>t</i></den></frac> (× 100 for %)', 'Exact relative rate <i>r</i>, per unit time'],
          ['RGR from two data points (ratio form used in the chapter)', 'RGR = <frac><num><i>W</i><sub>1</sub> − <i>W</i><sub>0</sub></num><den><i>W</i><sub>0</sub> Δ<i>t</i></den></frac> × 100', 'Average % per unit time'],
        ],
      },
      {
        t: 'p',
        html: 'The logarithmic form <frac><num>ln(<frac><num><i>W</i><sub>1</sub></num><den><i>W</i><sub>0</sub></den></frac>)</num><den>Δ<i>t</i></den></frac> is the exact relative growth rate for exponential growth. The ratio form <frac><num><i>W</i><sub>1</sub> − <i>W</i><sub>0</sub></num><den><i>W</i><sub>0</sub> Δ<i>t</i></den></frac> used in the chapter is the average relative rate over the interval, and it agrees with the logarithmic form only approximately, when the change over Δ<i>t</i> is small. For NEET numericals that give two measurements, use the ratio form; use ln only when the problem gives an exponential law or asks for <i>r</i>, a doubling time or a target time.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Time to Reach Target Length.</b> A bamboo shoot is 5.0 cm at the start and elongates at a constant rate of 1.8 cm day<sup>−1</sup>. After how many days will it reach 50.0 cm?',
        steps: [
          '<b>Given:</b> <i>L</i><sub>0</sub> = 5.0 cm, <i>r</i> = 1.8 cm day<sup>−1</sup>, <i>L</i><sub><i>t</i></sub> = 50.0 cm.',
          '<i>t</i> = <frac><num><i>L</i><sub><i>t</i></sub> − <i>L</i><sub>0</sub></num><den><i>r</i></den></frac> = <frac><num>50.0 − 5.0</num><den>1.8</den></frac> = <frac><num>45.0</num><den>1.8</den></frac>',
        ],
        ans: '25 days.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Doubling Time and Time to Reach a Target.</b> A seedling gains mass according to <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup>0.1<i>t</i></sup> where <i>t</i> is in days. Find (i) the doubling time and (ii) the time needed for the mass to become 10 times the initial mass.',
        steps: [
          '(i) Doubling time:<br><i>t</i><sub>d</sub> = <frac><num>0.693</num><den>0.1</den></frac> = 6.93',
          '(ii) Target ratio <frac><num><i>W</i><sub>1</sub></num><den><i>W</i><sub>0</sub></den></frac> = 10:<br><i>t</i> = <frac><num>1</num><den>0.1</den></frac> ln(10) = 10 × 2.303 = 23.03',
        ],
        ans: '(i) ~7 days; (ii) ~23 days.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>RGR Comparison with Same Absolute Growth.</b> Two leaves on the same plant are measured over 5 days. Leaf X: 2.0 cm → 5.0 cm. Leaf Y: 8.0 cm → 11.0 cm. Calculate the RGR of each and explain which grows faster relative to its size.',
        steps: [
          'RGR<sub><i>X</i></sub> = <frac><num>5.0 − 2.0</num><den>2.0 × 5</den></frac> × 100 = <frac><num>3.0</num><den>10.0</den></frac> × 100 = 30% per 5 days',
          'RGR<sub><i>Y</i></sub> = <frac><num>11.0 − 8.0</num><den>8.0 × 5</den></frac> × 100 = <frac><num>3.0</num><den>40.0</den></frac> × 100 = 7.5% per 5 days',
          'Leaf X grows at 6% day<sup>−1</sup> relative to its starting size; Leaf Y grows at only 1.5% day<sup>−1</sup>. Even though both added 3.0 cm in absolute terms, Leaf X is four times more efficient at producing new material per unit of existing material (ratio form; the logarithmic form gives a smaller gap, but the same ranking).',
        ],
        ans: 'RGR<sub><i>X</i></sub> = 6% day<sup>−1</sup>; RGR<sub><i>Y</i></sub> = 1.5% day<sup>−1</sup>; Leaf X is four times faster relative to its size (ratio form; the logarithmic form gives a smaller gap, but the same ranking).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Exponential Growth Over Multiple Doublings.</b> A plant’s biomass follows <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup>0.05<i>t</i></sup> (<i>t</i> in days). The plant is observed to double its biomass in <i>T</i> days. Show algebraically that <i>T</i> = <frac><num>ln 2</num><den>0.05</den></frac> and find how many days are needed for the biomass to grow from 100 g to 800 g.',
        steps: [
          'Setting <i>W</i><sub>1</sub> = 2<i>W</i><sub>0</sub>:<br>2<i>W</i><sub>0</sub> = <i>W</i><sub>0</sub><i>e</i><sup>0.05<i>T</i></sup> ⇒ <i>e</i><sup>0.05<i>T</i></sup> = 2 ⇒ 0.05<i>T</i> = ln 2 ⇒ <i>T</i> = <frac><num>ln 2</num><den>0.05</den></frac>.',
          'Numerically: <i>T</i> = <frac><num>0.693</num><den>0.05</den></frac> = 13.86 ≈ 14 days.',
          'For 100 g → 800 g, the ratio is <frac><num>800</num><den>100</den></frac> = 8 = 2<sup>3</sup>. Each doubling takes ~14 days. Three doublings therefore take approximately 3 × 14 = 42 days. Using the formula directly:<br><i>t</i> = <frac><num>1</num><den>0.05</den></frac> ln(8) = 20 × 2.079 = 41.58',
        ],
        ans: '<i>T</i> = <frac><num>ln 2</num><den>0.05</den></frac> ≈ 14 days; 100 g → 800 g requires ~42 days.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A root tip is 3.0 mm long and elongates at 0.4 mm day<sup>−1</sup>. How many days to reach 11.0 mm?',
            a: '<i>t</i> = <frac><num>11.0 − 3.0</num><den>0.4</den></frac> = 20 days.',
          },
          {
            q: '[NEET] A culture grows according to <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub><i>e</i><sup>0.2<i>t</i></sup> (<i>t</i> in hours). Find (a) the doubling time and (b) the time for the population to reach 10 times the initial number.',
            a: '(a) <i>t</i><sub>d</sub> = <frac><num>ln 2</num><den>0.2</den></frac> = 3.47 hours; (b) <i>t</i> = <frac><num>ln(10)</num><den>0.2</den></frac> = 11.5 hours.',
          },
          {
            q: '[NEET] Leaf P: 1.0 cm → 4.0 cm in 6 days. Leaf Q: 10.0 cm → 13.0 cm in the same 6 days. Calculate the RGR of each and state which has the higher relative growth rate.',
            a: 'RGR<sub><i>P</i></sub> = <frac><num>4 − 1</num><den>1 × 6</den></frac> × 100 = 50% per 6 days = 8.3% day<sup>−1</sup>; RGR<sub><i>Q</i></sub> = <frac><num>13 − 10</num><den>10 × 6</den></frac> × 100 = 5% per 6 days = 0.83% day<sup>−1</sup>. Leaf P has a ten-fold higher RGR (ratio form; the logarithmic form gives a smaller gap, but the same ranking).',
          },
          {
            q: '[CUET] State the units of <i>r</i> in the arithmetic growth equation and the units of <i>r</i> in the exponential growth equation. Why are they different?',
            a: 'Arithmetic <i>r</i>: units of size per time (e.g. cm day<sup>−1</sup>). Exponential <i>r</i>: units of time<sup>−1</sup> (e.g. day<sup>−1</sup>), not dimensionless; because it multiplies <i>t</i> in the exponent, the product <i>r</i><i>t</i> must be dimensionless, so <i>r</i> must carry time<sup>−1</sup>. They differ because arithmetic growth adds a fixed amount of size per unit time, whereas exponential growth multiplies the size by a fixed factor per unit time.',
          },
          {
            q: '[NEET High-Difficulty] A plant’s dry mass follows <i>W</i> = 5<i>e</i><sup>0.1<i>t</i></sup> g over 20 days. Calculate (a) the RGR in % per day and (b) the absolute growth in this period.',
            a: '(a) For an exponential law the relative growth rate is <i>r</i>, so RGR = <i>r</i> × 100 = 0.1 × 100 = 10% per day (constant). (b) <i>W</i><sub>20</sub> = 5<i>e</i><sup>2</sup> = 5 × 7.389 = 36.95 g. Absolute growth = 36.95 − 5 = 31.95 g.',
          },
          {
            q: '[NEET] A plant species has a relative growth rate of 0.3 day<sup>−1</sup>. How many days does it take to increase its biomass by a factor of 20? (Use <i>t</i> = <frac><num>ln(20)</num><den>0.3</den></frac>.)',
            a: '<i>t</i> = <frac><num>ln(20)</num><den>0.3</den></frac> = <frac><num>2.996</num><den>0.3</den></frac> ≈ 10 days.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 794 to 797 ─────────────────────────
  {
    n: 'B',
    title: 'Seed Dormancy: Types, Hormonal Mechanism, and Breaking Methods',
    extra: true,
    kalam: 'GA converts the seed from dormant to active; ABA maintains or re-establishes dormancy.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 names dormancy as an effect of ABA, gibberellin and ethylene and states the ABA–gibberellin antagonism, but it does not give the types of dormancy, the germination mechanism or the breaking methods. This additional topic covers three further layers that exam questions draw on: the types of dormancy, the biochemical mechanism of ABA/GA antagonism during germination, and practical methods of overcoming dormancy in agriculture and horticulture.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Classifying dormancy: the cause, not the hormone.</b><br>• <b>Physical dormancy (PY):</b> Caused by a hard, impermeable seed coat (testa) that prevents water uptake and gas exchange. Water cannot enter, so the embryo cannot activate. Found in many legume seeds, for example <i>Canavalia</i>, <i>Lathyrus</i> and some varieties of <i>Cicer arietinum</i> (chickpea).<br>• <b>Physiological dormancy (PD):</b> Caused by internal biochemical blocks: the seed contains growth inhibitors (primarily ABA) that prevent germination even when water and oxygen are available. The ABA∶GA ratio is too high. Found in many temperate fruits and seeds that require winter cold.<br>• <b>Morphological dormancy (MD):</b> The embryo is underdeveloped (immature) at seed shed; it must grow before germination can occur. Found in <i>Ginkgo</i> and some orchids.<br>• <b>Combined dormancy:</b> Both physical and physiological barriers present. Example: some legumes have hard seed coats plus physiological inhibitors.<br>• <b>Cold-requiring physiological dormancy:</b> A subset of physiological dormancy where seeds require a cold period (stratification) before germinating. Stratified seeds have a lowered ABA∶GA ratio after cold exposure. (Vernalisation, by contrast, is the cold promotion of flowering, not the release of seed dormancy.)',
      },
      {
        t: 'p',
        html: '<b>The ABA/GA biochemical switch in germination.</b>',
      },
      {
        t: 'proc',
        title: 'This is the most testable mechanism:',
        steps: [
          'Dry seed: high ABA maintains dormancy, suppresses metabolic activity.',
          'Water uptake (imbibition): ABA levels begin to fall (and the seed also becomes more sensitive to GA); if conditions are favourable, gibberellin synthesis starts.',
          'GA synthesis: In cereals, the embryo produces GA which diffuses to the aleurone layer.',
          'Aleurone response: GA triggers transcription of genes encoding alpha-amylase and other hydrolytic enzymes.',
          'Starch hydrolysis: alpha-amylase breaks stored starch into sugars.',
          'Sugar + energy: embryo receives nutrients, radicle protrudes → germination.',
          'ABA antagonism: ABA blocks GA signaling at the aleurone layer, preventing alpha-amylase synthesis. ABA acts through its signalling proteins (ABI3 and ABI5 among them) to keep the germination genes switched off.',
        ],
      },
      {
        t: 'p',
        html: 'In the book’s account, the balance is this: GA converts the seed from dormant to active; ABA maintains or re-establishes dormancy. High GA∶low ABA = germination; low GA∶high ABA = dormancy.',
      },
      {
        t: 'p',
        html: '<b>Breaking dormancy: practical methods.</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['Method', 'Targets', 'Example'],
        rows: [
          ['Scarification (mechanical)', 'Physical dormancy: scrape or nick the seed coat', '<i>Canavalia</i>, <i>Lathyrus</i>'],
          ['Scarification (chemical)', 'Physical dormancy: concentrated H<sub>2</sub>SO<sub>4</sub> soak', 'Hard-seeded legumes'],
          ['Stratification', 'Physiological dormancy: cold, moist conditions for weeks', 'Apple and pear seeds'],
          ['Light exposure', 'Photo-dormancy: some seeds need red light (Pfr form of phytochrome); a physiological dormancy released by the signal', 'Lettuce, <i>Arabidopsis</i>'],
          ['Temperature shock', 'Thermal dormancy: alternating temperatures break dormancy (a physiological dormancy released by the signal)', 'Many wild species'],
          ['Hormone application', 'Physiological dormancy: GA<sub>3</sub> treatment overcomes the ABA block', 'Soaking dormant seeds in gibberellin'],
        ],
      },
      {
        t: 'p',
        html: 'Gibberellin is used commercially to speed up malting in the brewing industry (NCERT). ABA enforces dormancy; GA opposes it. This antagonism is the same pair that governs bud dormancy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Classifying Dormancy Type.</b> Seeds of <i>Lathyrus odoratus</i> (sweet pea) have a hard, waxy seed coat that prevents water entry for several weeks after seed shed. A student soaks the seeds in warm water for 24 hours, after which they germinate rapidly. Identify the type of dormancy and the method used.',
        steps: [
          'The hard coat physically blocks water: this is physical dormancy. Soaking in warm water is not scarification, since the coat is not cut or abraded; it works because it softens the coat and makes it permeable, so water can enter (imbibition).',
        ],
        ans: 'Physical dormancy; broken by soaking in warm water, which softens the hard seed coat so that water can enter.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Hormonal Mechanism in Cereal Germination.</b> During the germination of a barley grain, name the hormone that stimulates alpha-amylase synthesis in the aleurone layer, the layer in which this occurs, and the hormone that antagonises this action to maintain dormancy.',
        steps: [
          'The embryo releases gibberellin (GA<sub>3</sub>) which acts on the aleurone layer, stimulating synthesis and secretion of alpha-amylase. Abscisic acid (ABA) antagonises by blocking GA signaling and preventing alpha-amylase gene expression, maintaining dormancy in unfavourable conditions.',
        ],
        ans: 'Gibberellin; aleurone layer; ABA antagonises.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>ABA/GA Ratio in Afterripening.</b> Seeds of wheat stored in dry conditions for several months after harvest germinate faster than freshly harvested seeds of the same batch. Explain this in terms of the ABA∶GA ratio and name the phenomenon.',
        steps: [
          'Freshly harvested seeds have high ABA levels and a low GA∶ABA ratio: they are dormant. During dry storage (afterripening), ABA is gradually broken down and the GA∶ABA ratio rises. When sown, the seeds germinate readily. This is afterripening: the loss of physiological dormancy during dry storage.',
        ],
        ans: 'Afterripening; ABA is degraded during dry storage, raising the GA∶ABA ratio and breaking physiological dormancy.',
      },
      {
        t: 'ex',
        tag: 'CUET / Match',
        q: '<b>Dormancy Type and Breaking Method.</b> Column I (Seed): (P) Chickpea seed with a hard coat, (Q) Apple seeds, (R) Lettuce seeds, (S) Mung bean. Column II: (i) Stratification, (ii) Light (red), (iii) Scarification, (iv) No treatment needed.',
        steps: [
          '<b>Reasoning:</b> Chickpea hard coat → scarification (iii). Apple seeds need cold → stratification (i). Lettuce seeds need red light (Pfr) → light (ii). Mung bean germinates readily with no special treatment (iv).',
        ],
        ans: 'P–iii, Q–i, R–ii, S–iv.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Distinguish between physical dormancy and physiological dormancy of seeds, giving one plant example of each.',
            a: 'Physical dormancy: hard, impermeable seed coat blocks the entry of water and gas (e.g. legumes such as <i>Canavalia</i> and <i>Lathyrus</i>). Physiological dormancy: internal biochemical blocks (ABA) prevent germination despite water and oxygen (e.g. apple, many temperate seeds). Key distinction: physical dormancy is a barrier problem; physiological dormancy is a hormone balance problem.',
          },
          {
            q: '[NEET] Name the two hormones that act antagonistically to regulate seed dormancy and germination, stating the role of each.',
            a: 'Gibberellin (promotes germination by inducing alpha-amylase and other hydrolases) and abscisic acid (ABA) (maintains dormancy by blocking GA signaling and transcription of germination genes). High GA∶ABA → germination; high ABA∶GA → dormancy.',
          },
          {
            q: '[CBSE] Name the phenomenon by which seeds lose dormancy during dry storage. How does this affect the ABA∶GA ratio?',
            a: 'Afterripening: during dry storage ABA is slowly catabolised, lowering ABA content and raising the GA∶ABA ratio, so the seed loses dormancy without any other treatment.',
          },
          {
            q: '[NEET] A gardener finds that seeds of a temperate fruit tree will not germinate even when provided with water, oxygen and warmth. What dormancy-breaking treatment should be applied and why?',
            a: 'Stratification: cold, moist treatment for several weeks. Many temperate seeds have physiological dormancy that requires a cold period to lower the ABA∶GA ratio before germination can proceed.',
          },
          {
            q: '[NEET High-Difficulty] Explain, in sequence, how gibberellin overcomes ABA-induced dormancy in a cereal grain, naming the tissue on which GA acts.',
            a: '(i) Embryo absorbs water and begins GA synthesis. (ii) GA diffuses to the aleurone layer. (iii) GA binds to receptors in aleurone cells, triggering a signaling cascade. (iv) This activates transcription of alpha-amylase and protease genes. (v) Alpha-amylase hydrolyses stored starch in the endosperm. (vi) Sugars nourish the embryo, radicle protrudes. ABA blocks step (iii)–(iv) by antagonising GA signaling.',
          },
          {
            q: '[CUET] Which PGR is used commercially to break dormancy in barley for the malting process, and which enzyme does it induce?',
            a: 'Gibberellin (GA<sub>3</sub>) induces alpha-amylase synthesis in the aleurone layer: the basis of the malting process in barley for brewing.',
          },
        ],
      },
    ],
  },
];
