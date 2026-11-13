import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Topics 01–03, pp. 1188–1214 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 01
 * Sample Space and Events (pp. 1188–1196), Subtopic 02 Probability of Events
 * and the Axiomatic Approach (pp. 1197–1206) and Subtopic 03 Computing
 * Probabilities: Combinatorial Methods, Multi-Event Addition & Odds
 * (pp. 1207–1214). The chapter's title and contents (top of p. 1188) are not
 * copied. Each topic opens with its "Exam Relevance:" box as a part of its own,
 * then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the part
 * "Cheat sheet". The book never calls its figures in the text; each `fig`
 * stands where it illustrates: 14.1 (caption p. 1195, drawn p. 1196) after the
 * relationship definitions; 14.2 (same pages) after Procedure A; 14.3 (caption
 * p. 1199, drawn p. 1200) after Result 4, where its caption is printed; 14.4
 * (caption p. 1205, drawn p. 1206) after Result 3; 14.5 (caption p. 1213, drawn
 * p. 1214) after Topic 03's Procedure C. No unnumbered drawings.
 * The book's empty set is φ (as printed; one constant, EMPTY). ⁿCᵣ and ⁿPᵣ
 * with an italic C and P, as the page sets them. Every fraction is stacked
 * (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
/** The empty set, as the book prints it. */
const EMPTY = 'φ';

const A = I('A');
const B = I('B');
const Cv = I('C');
const S = I('S');
const E = I('E');
const G = I('G');
const n = I('n');
const k = I('k');
const c = I('c');
const p = I('p');
const q = I('q');
const a = I('a');
const b = I('b');
const r = I('r');
const X = I('X');
const AP = `${A}′`;
const BP = `${B}′`;
const EP = `${E}′`;
const pr = (s: string) => `<i>P</i>(${s})`;
const nn = (s: string) => `<i>n</i>(${s})`;
const AuB = `${A}${NB}∪${NB}${B}`;
const AnB = `${A}${NB}∩${NB}${B}`;
const BnC = `${B}${NB}∩${NB}${Cv}`;
const CnA = `${Cv}${NB}∩${NB}${A}`;
const AuBuC = `${A}${NB}∪${NB}${B}${NB}∪${NB}${Cv}`;
const AnBnC = `${A}${NB}∩${NB}${B}${NB}∩${NB}${Cv}`;
const ADD = `${pr(AuB)} = ${pr(A)} + ${pr(B)} − ${pr(AnB)}`;
const NC = (x: string, y: string) => `<sup>${x}</sup><i>C</i><sub>${y}</sub>`;
const NP = (x: string, y: string) => `<sup>${x}</sup><i>P</i><sub>${y}</sub>`;
const nCr = NC(n, r);
const nPr = NP(n, r);
const om = (s: string) => `<i>ω</i><sub>${s}</sub>`;
const wi = om(I('i'));
/** ∑ over the sample points of a set, the index set printed under the sign. */
const SUM_IN = (set: string) => `∑<sub><i>ω</i><sub><i>i</i></sub>∈${set}</sub>`;
const pair = (x: string, y: string) => `(${x},${NB}${y})`;
const set = (...xs: string[]) => `{${xs.join(', ')}}`;
const RATIO = (x: string, y: string) => `${x}${NB}∶${NB}${y}`;
const NE_NS = fr(nn(E), nn(S));
const NA_NS = fr(nn(A), nn(S));
const pw = (base: string, e: string) => `${base}<sup>${e}</sup>`;
const H = I('H');
const T = I('T');
const DIE = set('1', '2', '3', '4', '5', '6');
const ofK = (x: string) => fr(x, '21');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 1188–1196 ────────────────
  {
    n: '01',
    title: 'Sample Space and Events',
    kalam: 'So an event is nothing more mysterious than a subset of the sample space.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the grammar of the entire chapter, so it is everywhere indirectly. CBSE Boards asks it as a direct 1–2 mark “write the sample space / express the event as a set” question ${ESTIMATE}. CUET poses it as fast one-liners on event classification. JEE Main rarely asks it alone ${ESTIMATE} but assumes it silently in every probability problem, and JEE Advanced builds set-counting and partition arguments directly on this foundation. Master it now and the rest of the chapter stops feeling like guesswork.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you’re standing at a railway booking counter, and the clerk is about to tell you which berth you got: Lower, Middle, Upper, Side-Lower, or Side-Upper. Before he speaks, you don’t know the answer, but you absolutely know the <b>complete menu of things that could happen</b>. There are exactly five possibilities, no more, no less. That full menu, the set of every outcome that could occur, is the heart of what we’re about to build.',
      },
      {
        t: 'p',
        html: 'In probability, any action whose result we cannot predict with certainty, but whose set of possible results we can list in advance, is called a <b>random experiment</b>. Tossing a coin, rolling a die, drawing a card, checking whether the 8:10 local is on time: all random experiments. The key word is random: if you “experiment” by adding 2 + 3, you always get 5, so there’s nothing random about it. A random experiment needs genuine uncertainty in the result but total clarity about the list of candidates.',
      },
      {
        t: 'p',
        html: `Each individual result on that menu is called an <b>outcome</b> (or a <b>sample point</b>). The complete menu, the set of all possible outcomes, is the <b>sample space</b>, written ${S}. For a single die, ${S} = ${DIE}. For one coin, ${S} = ${set(H, T)}. The sample space is the universe of the experiment; everything else we talk about lives inside it.`,
      },
      {
        t: 'p',
        html: `Now, <b>Think about it this way…</b> Suppose you’ve laid out all six faces of a die on the table as six little cards. An <b>event</b> is simply you scooping up some of those cards, any selection you like, and saying “I care about these.” “The number is even” means you scoop up ${set('2', '4', '6')}. “The number is bigger than 4” means you scoop up ${set('5', '6')}. So an event is nothing more mysterious than a <b>subset of the sample space</b>. That single idea, event = subset, is the most important sentence in this topic. Once you see events as subsets, every later rule becomes set theory you already know from Chapter 1.`,
      },
      {
        t: 'p',
        html: `An event has <b>occurred</b> if the actual outcome of the experiment is one of the cards you scooped up. Roll the die, get a 4: your “even” event occurred, because 4 ∈ ${set('2', '4', '6')}. Get a 3: it did not, because 3 ∉ ${set('2', '4', '6')}.`,
      },
      {
        t: 'p',
        html: `Two special selections sit at the extremes. If you scoop up nothing (the empty set ${EMPTY}), no outcome can ever make it occur: that’s the <b>impossible event</b> (e.g., “the die shows a 7”). If you scoop up everything (the whole of ${S}), some outcome must always make it occur: that’s the <b>sure</b> or <b>certain event</b> (e.g., “the die shows a number from 1 to 6”).`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions and assumptions.</b> This entire framework rests on two quiet assumptions worth dragging into the light. First, the sample space must be <b>well-defined and complete</b>: every outcome listed exactly once, none missing. The moment you mis-specify ${S}, every event built on it is wrong, and this is the single most common silent error in the chapter. Second, for an experiment with <b>ordered stages</b> (toss a coin, then roll a die), the outcomes are ordered pairs and ${pair(H, '4')} is genuinely different from a later ${pair('4', H)} if the order of stages differs; collapsing order destroys outcomes. Finally, note that “event” and “outcome” are not synonyms: an outcome is a single point of ${S}; an event is a set of points (possibly just one, possibly many, possibly none).`,
      },

      { t: 'part', title: 'Key definitions and the algebra of events' },
      {
        t: 'p',
        html: 'Because this topic is definitional rather than formula-driven, the “core quantities” here are set-theoretic objects, not dimensioned physical quantities. The table below is your working vocabulary.',
      },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Symbol', 'Meaning'],
        rows: [
          ['Sample space', S, 'Set of all possible outcomes'],
          ['Sample point / outcome', '<i>ω</i>', `A single element of ${S}`],
          ['Number of sample points', nn(S), `Count of elements in ${S}`],
          ['Event', `${E}, ${A}, ${B}, …`, `Any subset of ${S}, i.e. ${E} ⊆ ${S}`],
          ['Impossible event', EMPTY, 'The empty subset'],
          ['Sure (certain) event', S, 'The whole sample space'],
        ],
      },
      {
        t: 'p',
        html: `<b>Types of events (classified by how many points they hold):</b><br>• <b>Simple / elementary event:</b> exactly one sample point. A sample space with ${n} outcomes has exactly ${n} simple events.<br>• <b>Compound (mixed / composite) event:</b> more than one sample point.`,
      },
      {
        t: 'p',
        html: `<b>The algebra of events</b>: combining events with the set operations of Chapter 1. Let ${A},${NB}${B} ⊆ ${S}.`,
      },
      {
        t: 'formula',
        kicker: 'The algebra of events',
        main: `${AP} = <i>A̅</i> = ${S} − ${A}<br>= {<i>ω</i> ∶ <i>ω</i> ∈ ${S} and <i>ω</i> ∉ ${A}}<br>${AuB} = “${A} or ${B}”<br>${AnB} = “${A} and ${B}”<br>${A} − ${B} = ${A}${NB}∩${NB}${BP} = “${A} but not ${B}”`,
        legend: [
          `${S} = the sample space`,
          `${A}, ${B} = events (subsets of ${S})`,
          `<i>ω</i> = a sample point (an outcome)`,
          `${AP}, <i>A̅</i> = the complement (the event “not ${A}”)`,
          `${AuB} = at least one occurs`,
          `${AnB} = both occur simultaneously`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Relationship definitions (the ones examiners love):</b><br>• <b>Mutually exclusive (disjoint):</b> ${AnB} = ${EMPTY}. The two events cannot occur together.<br>• <b>Exhaustive:</b> ${E}<sub>1</sub>${NB}∪${NB}${E}<sub>2</sub>${NB}∪${NB}⋯${NB}∪${NB}${E}<sub>${n}</sub> = ${S}. At least one must occur.<br>• <b>Mutually exclusive and exhaustive (a partition):</b> ${E}<sub><i>i</i></sub>${NB}∩${NB}${E}<sub><i>j</i></sub> = ${EMPTY} for all <i>i</i>${NB}≠${NB}<i>j</i> and ⋃<sub><i>i</i>=1</sub><sup>${n}</sup> ${E}<sub><i>i</i></sub> = ${S}. Exactly one occurs, always. Both conditions are required: neither alone is enough.<br>• <b>Equally likely events:</b> each is as likely to occur as any other (this is the assumption baked into the word “fair,” and into “at random”).`,
      },
      { t: 'fig', id: 'm11-14-fig-14.1' },
      {
        t: 'p',
        html: `<b>Note on units:</b> none of these quantities carry dimensions or SI units; they are pure set objects. ${nn(S)} and ${nn(A)} are dimensionless counts (whole numbers: ${nn(A)} = 0 only for ${A} = ${EMPTY}).`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Sample Space & Events has no formal derivation: it has <b>procedures</b>. Here are the three that decide most marks.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Constructing a sample space',
        steps: [
          'Identify what is being recorded on each trial. (“Colour AND number,” or just “number”? The sample space changes entirely with what you observe.)',
          `If the experiment is <b>single-stage</b>, list every distinct outcome once. For a die: ${DIE}.`,
          'If it is <b>multi-stage / sequential</b>, build a <b>tree</b>: branch for stage 1, then sub-branch for stage 2, and read each complete root-to-leaf path as one ordered outcome. Why a tree? Because it mechanically guarantees you neither miss a combination nor double-count one: the two failure modes that wreck this question.',
          `Watch <b>with vs. without replacement</b>: without replacement removes the “repeat” outcomes (you cannot draw the same ball twice), shrinking ${S}.`,
          `Sanity check ${nn(S)}: for ${k} independent stages with <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, … outcomes each, expect ${nn(S)} = <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯; if your hand-built list disagrees, you’ve missed or duplicated a branch.`,
        ],
      },
      { t: 'fig', id: 'm11-14-fig-14.2' },
      {
        t: 'proc',
        title: 'Procedure B: Translating a verbal event into a subset',
        steps: [
          'Write the full sample space first (Procedure A). Never skip this.',
          `Read the event’s wording and <b>scan every outcome of ${S}</b>, keeping only those that satisfy the condition. The event is exactly that collection.`,
          `Mind the quantifier words: at least one ≠ exactly one ≠ at most one. These three phrases produce three different subsets from the same ${S}, and examiners weaponise the difference.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Testing a relationship between events',
        steps: [
          `<b>Mutually exclusive?</b> Compute ${AnB}. If it equals ${EMPTY}, yes; otherwise no.`,
          `<b>Exhaustive?</b> Compute ${AuB}${NB}∪${NB}⋯. If it equals ${S}, yes; otherwise no.`,
          '<b>Partition (mutually exclusive AND exhaustive)?</b> Both of the above must hold together. Check both: a collection of events can be one without the other.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A fair spinner is divided into 8 equal sectors numbered 1 to 8. It is spun once. (a) Write the sample space. (b) Let ${A} be the event “the number is a multiple of 3” and ${B} the event “the number is greater than 5.” Express ${A}, ${B}, and ${AnB} as subsets.`,
        steps: [
          `(a) Every sector is a possible outcome, recorded once:<br>${S} = ${set('1', '2', '3', '4', '5', '6', '7', '8')},<br>${nn(S)} = 8.`,
          `(b) Scan ${S} for multiples of 3: ${A} = ${set('3', '6')}. Scan ${S} for numbers > 5: ${B} = ${set('6', '7', '8')}. Common to both: ${AnB} = ${set('6')}. Since ${AnB} = ${set('6')} ≠ ${EMPTY}, the events ${A} and ${B} are <b>not</b> mutually exclusive.`,
          `(Presentation marks come from writing ${S} first, then each event as an explicit set, then the intersection: exactly that order.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: 'A single card is drawn from a standard 52-card deck. Which one of the following pairs of events is mutually exclusive? (i) “card is a King” and “card is a Heart” (ii) “card is a Spade” and “card is red” (iii) “card is a face card” and “card is a Queen” (iv) “card is even-numbered” and “card is black”',
        steps: [
          '<b>Fast solution: eliminate by overlap, don’t compute.</b> Mutually exclusive means zero overlap.<br>• (i) The King of Hearts is both → overlap exists → not exclusive.<br>• (ii) Spades are black, never red → overlap is empty → <b>mutually exclusive.</b> ✓<br>• (iii) Every Queen is a face card → Queens lie in both → not exclusive.<br>• (iv) The 2 of Spades is even and black → overlap exists → not exclusive.',
          '<b>Speed tip:</b> you only need to find a <b>single</b> common card to kill an option: hunt for one counterexample, never enumerate the whole set.',
        ],
        ans: '(ii)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Two distinguishable dice (one red, one blue) are rolled and the ordered pair (red, blue) is recorded. Let ${A} = “the sum is 7”, ${B} = “the red die shows 6”, and ${Cv} = “the sum is at least 11.” (a) Find ${nn(S)}. (b) Write ${A}. (c) Are ${A} and ${Cv} mutually exclusive? (d) Is ${set(A, AP)} a partition of ${S}?`,
        steps: [
          `(a) Ordered pairs over two independent stages of 6 outcomes each:<br>${nn(S)} = 6 × 6 = 36.`,
          `(b) Pairs summing to 7:<br>${A} = ${set(pair('1', '6'), pair('2', '5'), pair('3', '4'), pair('4', '3'), pair('5', '2'), pair('6', '1'))},<br>${nn(A)} = 6.`,
          `(c) ${Cv} = sum ≥ 11 = ${set(pair('5', '6'), pair('6', '5'), pair('6', '6'))}. The smallest sum in ${Cv} is 11, but every pair in ${A} sums to 7, so ${A}${NB}∩${NB}${Cv} = ${EMPTY}. <b>Yes, mutually exclusive.</b>`,
          `(d) For any event, ${A}${NB}∩${NB}${AP} = ${EMPTY} (mutually exclusive ✓) and ${A}${NB}∪${NB}${AP} = ${S} (exhaustive ✓). Both hold, so ${set(A, AP)} is a <b>partition</b> of ${S}: the two facts are true for any event and its complement, a fact worth memorising (both pieces are non-empty whenever ${A} is neither ${EMPTY} nor ${S}).`,
          '(This problem links sample-space construction (counting) with the partition test (set algebra): the two-concept pattern JEE Main favours.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A random experiment has a sample space with exactly ${n} distinct outcomes (${n}${NB}≥${NB}2). (a) How many distinct events (subsets, including ${EMPTY} and ${S}) does the experiment have? (b) How many of these events are compound? (c) How many unordered pairs ${set(A, B)} of non-empty events are mutually exclusive (i.e. ${AnB} = ${EMPTY}, with ${A}${NB}≠${NB}${B})?`,
        steps: [
          `(a) An event is any subset of an ${n}-element set, and a set of size ${n} has ${pw('2', n)} subsets:<br>number of events = ${pw('2', n)}.`,
          `(b) Compound = more than one point. Remove the ${n} simple (singleton) events and the 1 empty event:<br>${pw('2', n)} − ${n} − 1.`,
          `(c) Count ordered disjoint pairs (${A},${NB}${B}) with ${A}, ${B} ≠ ${EMPTY}, then halve. Assign each of the ${n} outcomes to one of three bins (“only ${A}”, “only ${B}”, or “neither”), giving ${pw('3', n)} assignments. Subtract those that make ${A} empty (${pw('2', n)}, every point in “only ${B}” or “neither”) and those that make ${B} empty (${pw('2', n)}), then add back the one assignment counted in both (all points in “neither”):<br>#{(${A},${NB}${B}) ∶ ${A}, ${B} ≠ ${EMPTY}, ${AnB} = ${EMPTY}}<br>= ${pw('3', n)} − 2${NB}·${NB}${pw('2', n)} + 1.`,
          `Since the pair is unordered and ${A}${NB}≠${NB}${B} automatically (two disjoint non-empty sets can’t be equal), divide by 2:<br>${fr(`${pw('3', n)} − ${pw('2', `${n}+1`)} + 1`, '2')}.`,
          `<b>Check</b> ${n} = 2, ${S} = ${set(a, b)}: formula gives ${fr('9 − 8 + 1', '2')} = 1, and indeed the only disjoint non-empty pair is {${set(a)}, ${set(b)}}. ✓`,
        ],
        ans: `(c) ${fr(`${pw('3', n)} − ${pw('2', `${n}+1`)} + 1`, '2')}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> A coin is tossed and then a die is rolled. Using a tree, write the sample space and state ${nn(S)}. Express the event “the coin shows Head and the die shows a prime.”`,
            a: `${nn(S)} = 12; event = ${set(pair(H, '2'), pair(H, '3'), pair(H, '5'))}.`,
          },
          {
            q: `<b>[CUET]</b> From the set ${set('10', '11', '12', '…', '20')} a number is chosen. Are the events “the number is prime” and “the number is even” mutually exclusive? Are they exhaustive?`,
            a: 'Mutually exclusive: <b>yes</b> (no even prime in this range: 2 isn’t listed). Exhaustive: <b>no</b> (e.g. 15 is neither).',
          },
          {
            q: `<b>[JEE Main]</b> Three coins are tossed and the ordered triple of results is recorded. Write the sample space, then express the events ${E} = “exactly two heads” and <i>F</i> = “at most one head.” Are ${E} and <i>F</i> mutually exclusive?`,
            a: `${nn(S)} = 8; ${E} = ${set(I('HHT'), I('HTH'), I('THH'))}, <i>F</i> = ${set(I('HTT'), I('THT'), I('TTH'), I('TTT'))}; <b>yes</b>, mutually exclusive (${E}${NB}∩${NB}<i>F</i> = ${EMPTY}).`,
          },
          {
            q: `<b>[JEE Main]</b> Two balls are drawn in succession without replacement from a bag holding 1 green, 1 yellow and 1 black ball, recording the ordered pair. Write ${S}, and the event “the yellow ball is drawn at some stage.”`,
            a: `${S} = ${set(pair(G, I('Y')), pair(G, B), pair(I('Y'), G), pair(I('Y'), B), pair(B, G), pair(B, I('Y')))}, ${nn(S)} = 6; event = ${set(pair(G, I('Y')), pair(I('Y'), G), pair(I('Y'), B), pair(B, I('Y')))}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> A sample space has ${n} outcomes. How many ordered triples (${A}, ${B}, ${Cv}) of pairwise-disjoint non-empty events exist? (Hint: four bins per outcome.)`,
            a: `${pw('4', n)} − 3${NB}·${NB}${pw('3', n)} + 3${NB}·${NB}${pw('2', n)} − 1 (inclusion–exclusion on the three “empty” conditions).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `A die is rolled once. The events ${A} = ${set('1', '2', '3')} and ${B} = ${set('3', '4', '5', '6')} are:`,
        opts: [
          {
            label: 'mutually exclusive only',
            nudge: '<b>Trap (a):</b> picked by students who eyeball “these look like opposite halves” without computing the intersection.',
          },
          { label: 'exhaustive only', nudge: null },
          {
            label: 'mutually exclusive and exhaustive',
            nudge: '<b>Trap (c):</b> the classic reflex of assuming exhaustive ⇒ mutually exclusive too.',
          },
          { label: 'neither', nudge: `<b>Trap (d):</b> missed that the union already fills ${S}.` },
        ],
        correct: 1,
        solution: `${AuB} = ${DIE} = ${S} → exhaustive. But ${AnB} = ${set('3')} ≠ ${EMPTY} → not mutually exclusive.`,
      },
      {
        t: 'mcq',
        q: `For an experiment with sample space ${S}, which statement is <b>always</b> true for any event ${A}?`,
        opts: [
          {
            label: `${A}${NB}∪${NB}${AP} = ${EMPTY}`,
            nudge: `<b>Trap (a):</b> ${A}${NB}∪${NB}${AP} is everything, ${S}, not ${EMPTY}: the union fills.`,
          },
          {
            label: `${A}${NB}∩${NB}${AP} = ${S}`,
            nudge: `<b>Trap (b):</b> ${A}${NB}∩${NB}${AP} is nothing, ${EMPTY}, not ${S}: the intersection empties.`,
          },
          { label: `${A}${NB}∪${NB}${AP} = ${S} and ${A}${NB}∩${NB}${AP} = ${EMPTY}`, nudge: null },
          {
            label: `${A} = ${AP}`,
            nudge: `<b>Trap (d):</b> ${A} = ${AP} would give ${A} = ${A}${NB}∩${NB}${AP} = ${EMPTY} and then ${S} = ${A}${NB}∪${NB}${AP} = ${EMPTY}, impossible, since a sample space is never empty.`,
          },
        ],
        correct: 2,
        solution: `An event and its complement are always mutually exclusive and exhaustive: their union is everything, their intersection is nothing.`,
      },
      {
        t: 'mcq',
        q: 'A coin is tossed twice (ordered). How many compound events does this experiment have?',
        opts: [
          { label: '4', nudge: '<b>Trap (a):</b> counted only the simple events.' },
          { label: '11', nudge: null },
          {
            label: '12',
            nudge: `<b>Trap (c):</b> removed only the simple events (16 − 4 = 12), forgetting the impossible event ${EMPTY}.`,
          },
          {
            label: '16',
            nudge: `<b>Trap (d):</b> counted all events, forgetting “compound” excludes singletons and ${EMPTY}.`,
          },
        ],
        correct: 1,
        solution: `${S} = ${set(I('HH'), I('HT'), I('TH'), I('TT'))}, so ${nn(S)} = 4 and total events = ${pw('2', '4')} = 16. Remove 4 simple events and the 1 impossible event: 16 − 4 − 1 = 11.`,
      },
      {
        t: 'mcq',
        q: `Two events ${A} and ${B} satisfy ${A} ⊆ ${B}. Then ${AnB} equals:`,
        opts: [
          { label: EMPTY, nudge: '<b>Trap (a):</b> assumes “two named events ⇒ disjoint,” a frequent reflex.' },
          { label: A, nudge: null },
          {
            label: B,
            nudge: `<b>Trap (c):</b> confuses intersection with union: under ${A} ⊆ ${B} it’s ${AuB} = ${B}, not the intersection.`,
          },
          { label: S, nudge: `<b>Trap (d):</b> with no reason for either set to be all of ${S}.` },
        ],
        correct: 1,
        solution: `If every point of ${A} is also in ${B}, then the points common to both are exactly the points of ${A}, so ${AnB} = ${A}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Confusing an outcome with an event.</b> “Getting a 4” is an outcome (<i>ω</i>); “getting an even number” is an event (a set ${set('2', '4', '6')}). When a question says “write the event,” it wants a <b>set</b>, even if that set has one element: write ${set('4')}, not 4.`,
          `<b>Assuming mutually exclusive ⇒ exhaustive (or the reverse).</b> These are separate conditions. ${A} = ${set('1')}, ${B} = ${set('2')} on a die are mutually exclusive but nowhere near exhaustive. Always test ${AnB} <b>and</b> ${AuB} separately.`,
          `<b>Mis-built sample space from a multi-stage experiment.</b> Forgetting “without replacement,” or collapsing ordered pairs, silently changes ${S} and poisons every event after it. Draw the tree: it costs ten seconds and saves the question.`,
          `<b>The mutually-exclusive vs. independent confusion (early warning).</b> Many students will later, in Class 12, treat “mutually exclusive” and “independent” as the same thing. They are nearly opposites. Plant the flag now: mutually exclusive = cannot happen together; that’s a statement about the <b>sets</b> (${AnB} = ${EMPTY}), not about probabilities.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> To check “mutually exclusive,” you don’t need the full intersection: just hunt for <b>one</b> outcome sitting in both events. Find one ⇒ not mutually exclusive, stop immediately. Find none after scanning ⇒ mutually exclusive. This turns a calculation into a one-second search.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Random experiment', note: 'uncertain result, but a fully listable set of outcomes.' },
          {
            f: `Sample space ${S}`,
            note: `set of all outcomes. <b>Event</b> ${E}: any subset, ${E} ⊆ ${S}. → Event = subset.`,
          },
          { f: 'Occurrence', note: `${E} occurs iff the actual outcome <i>ω</i> ∈ ${E}.` },
          {
            f: `<b>Impossible</b> = ${EMPTY}; <b>Sure</b> = ${S}; <b>Simple</b> = 1 point; <b>Compound</b> = more than 1 point.`,
            note: '',
          },
          {
            f: 'Algebra',
            note: `${AP} = ${S} − ${A}; ${AuB} = “or”; ${AnB} = “and”; ${A} − ${B} = ${A}${NB}∩${NB}${BP} = “${A} but not ${B}.”`,
          },
          {
            f: 'Mutually exclusive',
            note: `${AnB} = ${EMPTY}. <b>Exhaustive:</b> ⋃ ${E}<sub><i>i</i></sub> = ${S}. <b>Partition:</b> both together.`,
          },
          {
            f: 'Counts',
            note: `${n} outcomes ⇒ ${pw('2', n)} events, of which ${n} are simple and ${pw('2', n)} − ${n} − 1 are compound. ${A}${NB}∩${NB}${AP} = ${EMPTY} and ${A}${NB}∪${NB}${AP} = ${S} always, so ${set(A, AP)} is a partition (two non-empty pieces when ${A} is neither ${EMPTY} nor ${S}).`,
          },
        ],
        aids: [
          '“Exclusive = Empty intersection” (both start with E… the intersection is empty).',
          `“Union fills, intersection empties”: for ${A}${NB}∪${NB}${AP} = ${S} vs. ${A}${NB}∩${NB}${AP} = ${EMPTY}.`,
          '“At-least / exactly / at-most” = three different subsets. Never blur them.',
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 1197–1206 ────────────────
  {
    n: '02',
    title: 'Probability of Events and the Axiomatic Approach',
    kalam: 'Assigning a number, a probability, to each event is the job of this topic.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is one of the highest-yield topics in the chapter. CBSE Boards asks the addition rule and complement law as 2–3 mark numericals almost every year ${ESTIMATE}. CUET turns the axioms into fast “is this a valid probability assignment?” one-liners. JEE Main treats ${ADD} and ${pr(AP)} = 1 − ${pr(A)} as everyday tools, and JEE Advanced builds non-uniform (loaded) sample-space problems and inequality bounds directly on the axioms. If Topic 01 gave you the language, this gives you the arithmetic of chance.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 01 we learned to lay out every possible outcome of an experiment and to scoop up the ones we care about into an event. But we never answered the obvious next question: <b>how likely is that event?</b> Assigning a number, a probability, to each event is the job of this topic.',
      },
      {
        t: 'p',
        html: `You already met probability informally in earlier classes. Roll a fair die; the chance of an even number is “three good faces out of six,” i.e. ${fr('3', '6')} = ${fr('1', '2')}. That recipe, favourable outcomes over total outcomes, is the <b>classical definition</b> of probability. It is wonderfully intuitive and, for fair dice and well-shuffled cards, completely correct.`,
      },
      {
        t: 'p',
        html: 'But it hides two cracks. <b>Think about it this way…</b> First, the classical recipe only works when every outcome is equally likely. What is the probability that a drawing pin, when tossed, lands point-up? There are two outcomes (point-up, point-down), but they are emphatically not equally likely, so “one out of two” is nonsense. Second, the recipe collapses when there are <b>infinitely many outcomes</b>: “pick a random natural number” has no finite total to divide by. There is also a third, deeper philosophical crack the NCERT text itself points at: the classical definition quietly uses the word “equally likely,” which already means “equally probable”, so we are defining probability in terms of probability. That is a circular definition, and mathematicians dislike circles.',
      },
      {
        t: 'p',
        html: 'The fix, given by the Russian mathematician <b>A. N. Kolmogorov in 1933</b>, was beautifully sneaky. Instead of defining what probability “is,” he simply listed the <b>rules any sensible probability must obey</b>, and declared anything obeying those rules to be a legitimate probability. This is the <b>axiomatic approach</b>. It is the same move modern geometry makes: Hilbert never defines “point” and “line” from scratch; he states axioms they must satisfy and reasons from there.',
      },
      {
        t: 'p',
        html: `So picture it like distributing one full kilogram of sand across the outcomes of an experiment. Each outcome gets some non-negative amount of sand (possibly zero), and the total sand across the whole sample space is exactly one kilogram. The probability of an event is just how much sand sits on the outcomes inside that event. A fair die spreads the sand evenly: ${fr('1', '6')} kg per face. A loaded die piles more onto some faces than others. Both are perfectly valid, because both respect the same two rules: no negative sand, and one kilogram total. That picture is the axiomatic approach, and it instantly handles loaded pins and unfair coins that the classical recipe could not.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions and assumptions.</b> The axioms (in the form you need for Class 11) are stated for <b>finite sample spaces</b> and for <b>mutually exclusive</b> events: additivity is only guaranteed when events don’t overlap. The familiar ${pr(E)} = ${NE_NS} formula is not an axiom; it is a <b>special case</b> that pops out only when all outcomes are equally likely. Forget that caveat and you will confidently apply ${NE_NS} to a loaded die and get a wrong answer that looks right.`,
      },

      { t: 'part', title: 'Key formulas, definitions and validity conditions' },
      {
        t: 'p',
        html: `<b>The three axioms of probability</b> (Kolmogorov, finite-sample-space form). For a sample space ${S} and any events ${A},${NB}${B} ⊆ ${S}:`,
      },
      {
        t: 'formula',
        kicker: 'The three axioms of probability',
        main: `Axiom 1 (Non-negativity): ${pr(A)} ≥ 0<br>Axiom 2 (Normalization): ${pr(S)} = 1<br>Axiom 3 (Additivity): ${AnB} = ${EMPTY}<br>⇒ ${pr(AuB)} = ${pr(A)} + ${pr(B)}`,
        legend: [
          `${S} = the sample space`,
          `${A}, ${B} = any events of ${S}`,
          `${pr(A)} = the probability of event ${A}`,
          `${EMPTY} = the empty set`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Probability via sample points.</b> Assign to each sample point ${wi} ∈ ${S} a number ${pr(wi)} with<br>${pr(wi)} ≥ 0 and ${SUM_IN(S)} ${pr(wi)} = 1.<br>Then for any event ${E},<br>${pr(E)} = ${SUM_IN(E)} ${pr(wi)}.`,
      },
      {
        t: 'defgrid',
        title: 'Consequences you will use constantly (each derived in the Derivations from the axioms part)',
        rows: [
          { k: 'Range of probability', v: `0 ≤ ${pr(A)} ≤ 1` },
          { k: 'Impossible event', v: `${pr(EMPTY)} = 0` },
          { k: 'Sure event', v: `${pr(S)} = 1` },
          { k: 'Complement (the “not” law)', v: `${pr(AP)} = 1 − ${pr(A)}` },
          { k: 'Equally-likely special case', v: `${pr(A)} = ${NA_NS}` },
          { k: '<b>Addition rule (general)</b>', v: ADD },
          { k: 'Addition rule (mutually exclusive)', v: `${pr(AuB)} = ${pr(A)} + ${pr(B)}` },
          { k: '“A but not B”', v: `${pr(`${A} − ${B}`)} = ${pr(A)} − ${pr(AnB)}` },
          { k: 'Exactly one of A, B', v: `${pr(A)} + ${pr(B)} − 2${pr(AnB)}` },
          { k: 'Neither A nor B (De Morgan)', v: `${pr(`${AP}${NB}∩${NB}${BP}`)} = 1 − ${pr(AuB)}` },
        ],
      },
      {
        t: 'p',
        html: `<b>Notation.</b> ${pr(A)} = probability of event ${A}; ${AP} = complement; ∪ = “or”; ∩ = “and”; <i>n</i>(·) = number of sample points. All probabilities are dimensionless pure numbers in [0, 1]: the only check on a single value is whether it lies in [0, 1] (a whole assignment must also add to 1). A negative probability or one exceeding 1 is an instant red flag.`,
      },

      { t: 'part', title: 'Derivations from the axioms' },
      {
        t: 'p',
        html: 'Unlike Topic 01 (which was procedural), this topic has genuine derivations: every working formula of the Key formulas, definitions and validity conditions part is squeezed out of the three axioms. Seeing this once removes the need to memorise the table.',
      },
      {
        t: 'p',
        html: `<b>Result 1: The impossible event has probability zero, ${pr(EMPTY)} = 0.</b> The sure event ${S} and the impossible event ${EMPTY} are mutually exclusive (${S}${NB}∩${NB}${EMPTY} = ${EMPTY}), and ${S}${NB}∪${NB}${EMPTY} = ${S}. Apply Axiom 3:<br>${pr(S)} = ${pr(`${S}${NB}∪${NB}${EMPTY}`)} = ${pr(S)} + ${pr(EMPTY)}.<br>Cancelling ${pr(S)} from both sides gives ${pr(EMPTY)} = 0. <b>Physical reading:</b> an outcome that can never happen carries zero sand.`,
      },
      {
        t: 'p',
        html: `<b>Result 2: The complement law, ${pr(AP)} = 1 − ${pr(A)}.</b> An event and its complement are mutually exclusive (${A}${NB}∩${NB}${AP} = ${EMPTY}) and together exhaust the sample space (${A}${NB}∪${NB}${AP} = ${S}); recall this partition fact from Topic 01. Apply Axiom 3, then Axiom 2:<br>${pr(A)} + ${pr(AP)} = ${pr(`${A}${NB}∪${NB}${AP}`)}<br>= ${pr(S)} = 1<br>⇒ ${pr(AP)} = 1 − ${pr(A)}.<br>This is the single most useful trick in the chapter: whenever “at least one” is hard, compute “none” and subtract.`,
      },
      {
        t: 'p',
        html: `<b>Result 3: Probability is bounded, 0 ≤ ${pr(A)} ≤ 1.</b> The lower bound is Axiom 1 directly: ${pr(A)} ≥ 0. For the upper bound, use Result 2: ${pr(A)} = 1 − ${pr(AP)}, and since ${pr(AP)} ≥ 0 (Axiom 1 applied to ${AP}), we get ${pr(A)} ≤ 1. So every probability is trapped in [0, 1]: no exceptions.`,
      },
      { t: 'fig', id: 'm11-14-fig-14.4' },
      {
        t: 'p',
        html: `<b>Result 4: The general addition rule, ${ADD}.</b> This is the step students most want to memorise and least understand. The key is to <b>carve overlapping events into disjoint pieces</b> so Axiom 3 applies.`,
      },
      {
        t: 'p',
        html: `Write ${AuB} as two disjoint slabs: everything in ${A}, plus the part of ${B} lying outside ${A}:<br>${AuB} = ${A}${NB}∪${NB}(${B} − ${A}),<br>${A}${NB}∩${NB}(${B} − ${A}) = ${EMPTY}.<br>By Axiom 3:<br>${pr(AuB)} = ${pr(A)} + ${pr(`${B} − ${A}`)}.${NB}${NB}(i)<br>Now carve ${B} itself into its overlap with ${A} and its non-overlap:<br>${B} = (${AnB})${NB}∪${NB}(${B} − ${A}),<br>(${AnB})${NB}∩${NB}(${B} − ${A}) = ${EMPTY}.<br>By Axiom 3 again:<br>${pr(B)} = ${pr(AnB)} + ${pr(`${B} − ${A}`)}<br>⇒ ${pr(`${B} − ${A}`)} = ${pr(B)} − ${pr(AnB)}.${NB}${NB}(ii)<br>Substitute (ii) into (i):<br>${ADD}.`,
      },
      {
        t: 'p',
        html: `<b>Why subtract the overlap?</b> Because ${pr(A)} + ${pr(B)} counts the sand in ${AnB} twice, once in each event, so we remove one copy. When ${A} and ${B} are mutually exclusive, ${AnB} = ${EMPTY}, so ${pr(AnB)} = 0 and the rule collapses to ${pr(A)} + ${pr(B)}, recovering Axiom 3.`,
      },
      { t: 'fig', id: 'm11-14-fig-14.3' },
      {
        t: 'p',
        html: `<b>Result 5: The equally-likely formula, ${pr(A)} = ${NA_NS}.</b> Suppose all ${nn(S)} outcomes are equally likely, so each sample point gets the same probability ${p}. Their total must be 1 (normalization), so ${nn(S)} · ${p} = 1 ⇒ ${p} = ${fr('1', nn(S))}. An event ${A} with ${nn(A)} points then carries<br>${pr(A)} = ${SUM_IN(A)} ${p} = ${nn(A)} · ${fr('1', nn(S))}<br><br>= ${NA_NS}.<br>This recovers the classical recipe as a theorem, not a definition, and makes crystal-clear that it holds <b>only</b> under the equally-likely assumption.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A box contains 4 red, 5 green and 3 blue identical marbles. One marble is drawn at random. Find (a) ${pr('red')}, (b) ${pr('not blue')}, (c) ${pr('red or green')}.`,
        steps: [
          `Total marbles: ${nn(S)} = 4 + 5 + 3 = 12, all equally likely.`,
          `(a) ${pr('red')} = ${fr(nn('red'), nn(S))} = ${fr('4', '12')} = ${fr('1', '3')}.`,
          `(b) Use the complement law. ${pr('blue')} = ${fr('3', '12')} = ${fr('1', '4')}, so<br>${pr('not blue')} = 1 − ${pr('blue')}<br>= 1 − ${fr('1', '4')} = ${fr('3', '4')}.`,
          `(c) “Red or green” are mutually exclusive (a marble can’t be both), so by the additivity axiom:<br>${pr('red or green')} = ${fr('4', '12')} + ${fr('5', '12')}<br><br>= ${fr('9', '12')} = ${fr('3', '4')}.`,
          `(<b>Sanity check:</b> ${pr('red or green')} = ${pr('not blue')}, since the only way to be neither red nor green is to be blue, and both came out ${fr('3', '4')}. ✓)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: `For a sample space ${S} = ${set(om('1'), om('2'), om('3'), om('4'))}, which of the following is a <b>valid</b> probability assignment? (i) 0.3, 0.3, 0.3, 0.3 (ii) 0.5, 0.2, −0.1, 0.4 (iii) 0.1, 0.2, 0.3, 0.4 (iv) 0.4, 0.4, 0.1, 0.2`,
        steps: [
          '<b>Fast solution: test the two axioms, nothing else.</b> A valid assignment needs all values ≥ 0 (Axiom 1) <b>and</b> sum = 1 (normalization).<br>• (i) Sum = 1.2 ≠ 1. ✗<br>• (ii) Contains −0.1 < 0. ✗ instantly.<br>• (iii) All ≥ 0 and sum = 0.1 + 0.2 + 0.3 + 0.4 = 1.0. ✓<br>• (iv) Sum = 1.1 ≠ 1. ✗',
          '<b>Speed tip:</b> scan for a negative value first (kills an option in one glance), then add: don’t compute anything fancy.',
        ],
        ans: '(iii)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `For two events ${A} and ${B}, ${pr(A)} = 0.6, ${pr(B)} = 0.5, and ${pr(AnB)} = 0.3. Find (a) ${pr(AuB)}, (b) ${pr(`exactly one of ${A}, ${B}`)}, (c) ${pr(`${AP}${NB}∩${NB}${BP}`)}.`,
        steps: [
          `(a) General addition rule:<br>${ADD}<br>= 0.6 + 0.5 − 0.3 = 0.8.`,
          `(b) “Exactly one” excludes the overlap from both sides:<br>${pr('exactly one')}<br>= ${pr(A)} + ${pr(B)} − 2${pr(AnB)}<br>= 0.6 + 0.5 − 2(0.3) = 0.5.<br>(Equivalently ${pr(AuB)} − ${pr(AnB)} = 0.8 − 0.3 = 0.5. ✓)`,
          `(c) By De Morgan, ${AP}${NB}∩${NB}${BP} = (${AuB})′, so use the complement law:<br>${pr(`${AP}${NB}∩${NB}${BP}`)} = 1 − ${pr(AuB)}<br>= 1 − 0.8 = 0.2.<br>(This is the “neither” probability: the part of ${S} outside both circles.)`,
          '(Two concepts linked: the addition rule feeds the complement-of-union, which is exactly the JEE Main composition pattern.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A die is <b>loaded</b> so that the probability of each face is proportional to the number on that face. (a) Find the probability of each face. (b) Find ${pr('the number is prime')}. (c) Find ${pr('the number is even OR greater than 4')}. (d) Verify your assignment satisfies the axioms.`,
        steps: [
          `(a) “Proportional to the face value” means ${pr(k)} = <i>ck</i> for ${k} = 1, …, 6 and some constant ${c}. Normalization (the sand totals one):<br>∑<sub>${k}=1</sub><sup>6</sup> <i>ck</i> = ${c}(1 + 2 + 3 + 4 + 5 + 6)<br>= 21${c} = 1 ⇒ ${c} = ${fr('1', '21')}.<br><br>So ${pr(k)} = ${ofK(k)}: the faces carry<br>${['1', '2', '3', '4', '5', '6'].map(ofK).join(', ')}.`,
          `(Notice ${pr(A)} = ${NA_NS} would be wrong here: the outcomes are not equally likely. This is precisely the case the classical recipe cannot touch and the axiomatic approach can.)`,
          `(b) Primes on a die: ${set('2', '3', '5')}. Sum their sand:<br>${pr('prime')} = ${ofK('2')} + ${ofK('3')} + ${ofK('5')}<br><br>= ${ofK('10')}.`,
          `(c) Let ${E} = even = ${set('2', '4', '6')} and ${G} = greater than 4 = ${set('5', '6')}. Then ${E}${NB}∩${NB}${G} = ${set('6')}. Use the addition rule:<br>${pr(E)} = ${ofK('2 + 4 + 6')} = ${ofK('12')},<br><br>${pr(G)} = ${ofK('5 + 6')} = ${ofK('11')},<br><br>${pr(`${E}${NB}∩${NB}${G}`)} = ${ofK('6')}.<br><br>${pr(`${E}${NB}∪${NB}${G}`)} = ${ofK('12')} + ${ofK('11')} − ${ofK('6')} = ${ofK('17')}.`,
          `Check directly: ${E}${NB}∪${NB}${G} = ${set('2', '4', '5', '6')}, sand<br>= ${ofK('2 + 4 + 5 + 6')} = ${ofK('17')}. ✓`,
          `(d) Axiom 1: every ${pr(k)} = ${ofK(k)} > 0. ✓ Axiom 2: ∑<sub>${k}</sub> ${pr(k)} = ${ofK('21')} = 1. ✓ Additivity holds because each event’s probability was computed as a sum over disjoint sample points. ✓`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> A card is drawn from a well-shuffled deck of 52. Find ${pr('a king')}, ${pr('a red card')}, and ${pr('not a face card')}.`,
            a: `${fr('4', '52')} = ${fr('1', '13')}; ${fr('26', '52')} = ${fr('1', '2')}; 1 − ${fr('12', '52')} = ${fr('40', '52')} = ${fr('10', '13')}.`,
          },
          {
            q: `<b>[CUET]</b> If ${pr(A)} = 0.45, is it possible that ${pr(AP)} = 0.45? If ${pr(A)} = 0.7 and ${pr(B)} = 0.5, can ${A} and ${B} be mutually exclusive? Answer with one-line reasons.`,
            a: `No: ${pr(AP)} = 1 − 0.45 = 0.55, so 0.45 is impossible for ${AP} (it would need ${pr(A)} = 0.55).<br>No: mutually exclusive needs ${pr(A)} + ${pr(B)} ≤ 1, but 0.7 + 0.5 = 1.2 > 1.`,
          },
          {
            q: `<b>[JEE Main]</b> Events ${A} and ${B} satisfy ${pr(A)} = 0.4, ${pr(B)} = 0.35, ${pr(AuB)} = 0.6. Find ${pr(AnB)} and ${pr(`neither ${A} nor ${B}`)}.`,
            a: `${pr(AnB)} = 0.4 + 0.35 − 0.6 = 0.15; ${pr('neither')} = 1 − 0.6 = 0.4.`,
          },
          {
            q: '<b>[JEE Main]</b> A number is chosen at random from 1 to 30. Find the probability that it is divisible by 3 or by 5.',
            a: `${pr('div 3')} = ${fr('10', '30')}, ${pr('div 5')} = ${fr('6', '30')}, ${pr('div 15')} = ${fr('2', '30')};<br><br><i>P</i> = ${fr('10 + 6 − 2', '30')} = ${fr('14', '30')} = ${fr('7', '15')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> A coin is biased so that heads is twice as likely as tails. It is tossed twice, the tosses independent in the everyday sense of “the coin has no memory.” Assign probabilities to the four outcomes ${set(I('HH'), I('HT'), I('TH'), I('TT'))} consistent with the axioms, and find ${pr('at least one head')}.`,
            a: `${pr(H)} = ${fr('2', '3')}, ${pr(T)} = ${fr('1', '3')} per toss; with no memory (the independence the question grants), each outcome’s probability is the product of its two tosses’, so ${pr(I('HH'))} = ${fr('4', '9')}, ${pr(I('HT'))} = ${pr(I('TH'))} = ${fr('2', '9')}, ${pr(I('TT'))} = ${fr('1', '9')} (sum = 1 ✓);<br><br>${pr('at least one head')} = 1 − ${pr(I('TT'))} = 1 − ${fr('1', '9')} = ${fr('8', '9')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${pr(A)} = 0.6 and ${pr(AuB)} = 0.9, and ${A}, ${B} are mutually exclusive, then ${pr(B)} =`,
        opts: [
          { label: '0.3', nudge: null },
          { label: '0.4', nudge: '<b>Trap (b):</b> used 1 − 0.6, confusing union with complement.' },
          { label: '1.5', nudge: '<b>Trap (c):</b> added when it should subtract (0.6 + 0.9).' },
          { label: '0.9', nudge: `<b>Trap (d):</b> copied ${pr(AuB)} without using ${A} at all.` },
        ],
        correct: 0,
        solution: `Mutually exclusive ⇒ ${pr(AuB)} = ${pr(A)} + ${pr(B)}, so ${pr(B)} = 0.9 − 0.6 = 0.3.`,
      },
      {
        t: 'mcq',
        q: 'Which value can <b>never</b> be a probability of an event?',
        opts: [
          {
            label: '0',
            nudge: '<b>Trap (a):</b> 0 is a legitimate probability, the impossible event’s: students who think probabilities must be strictly between 0 and 1 wrongly reject it.',
          },
          { label: fr('2', '3'), nudge: `<b>Trap (b):</b> ${fr('2', '3')} lies inside [0, 1], so it can be a probability (a fair die showing 1 to 4); only a value outside [0, 1] never can.` },
          {
            label: '1',
            nudge: '<b>Trap (c):</b> 1 is a legitimate probability, the sure event’s: students who think probabilities must be strictly between 0 and 1 wrongly reject it.',
          },
          { label: fr('3', '2'), nudge: null },
        ],
        correct: 3,
        solution: `Every probability lies in [0, 1]; ${fr('3', '2')} > 1 violates the upper bound.`,
      },
      {
        t: 'mcq',
        q: `For an event ${A}, ${pr(A)} = 0.35. Then ${pr(`not ${A}`)} is:`,
        opts: [
          { label: '0.35', nudge: `<b>Trap (a):</b> assumes “not ${A}” has the same probability as ${A}.` },
          { label: '0.65', nudge: null },
          { label: '1.35', nudge: '<b>Trap (c):</b> added instead of subtracting from 1.' },
          {
            label: 'cannot be determined',
            nudge: `<b>Trap (d):</b> believes you need more information, not realising the complement law needs only ${pr(A)}.`,
          },
        ],
        correct: 1,
        solution: `Complement law: ${pr(AP)} = 1 − 0.35 = 0.65.`,
      },
      {
        t: 'mcq',
        q: `If ${pr(A)} = 0.5, ${pr(B)} = 0.4, ${pr(AnB)} = 0.2, then ${pr(`${AP}${NB}∩${NB}${BP}`)} =`,
        opts: [
          {
            label: '0.1',
            nudge: `<b>Trap (a):</b> used 1 − [${pr(A)} + ${pr(B)}] = 0.1, forgetting to add back the overlap.`,
          },
          { label: '0.3', nudge: null },
          { label: '0.7', nudge: `<b>Trap (c):</b> stopped at ${pr(AuB)} = 0.7, forgetting the final complement.` },
          {
            label: '0.9',
            nudge: `<b>Trap (d):</b> stopped at ${pr(A)} + ${pr(B)} = 0.9, with no overlap correction and no complement.`,
          },
        ],
        correct: 1,
        solution: `${pr(AuB)} = 0.5 + 0.4 − 0.2 = 0.7; by De Morgan, ${pr(`${AP}${NB}∩${NB}${BP}`)} = 1 − 0.7 = 0.3.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Applying ${NA_NS} to a loaded/unfair experiment.</b> That formula is a consequence of equal likelihood, not a definition. For a biased coin or a die loaded by face value, go back to the axioms and sum the actual ${pr(wi)}.`,
          `<b>Forgetting to subtract the overlap.</b> Writing ${pr(AuB)} = ${pr(A)} + ${pr(B)} when ${A} and ${B} overlap double-counts ${AnB}. Only drop the −${pr(AnB)} term when you have checked the events are mutually exclusive.`,
          `<b>Treating mutually exclusive as independent.</b> The Class 12 trap, seeded here: for mutually exclusive events ${pr(AnB)} = 0; for independent events ${pr(AnB)} = ${pr(A)}${pr(B)}. These are different (and for non-trivial events, incompatible). Don’t multiply probabilities in a Class 11 addition-rule problem.`,
          '<b>Probabilities outside [0, 1].</b> If your answer is negative or exceeds 1, you have made an arithmetic error, full stop. Use the range as a free sanity check on every final answer.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> When a question says <b>“at least one,”</b> reach for the complement first. ${pr('at least one')} = 1 − ${pr('none')} almost always turns a messy union into a single easy count. It is the highest-leverage one-liner in the entire chapter.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three axioms',
            note: `${pr(A)} ≥ 0; ${pr(S)} = 1; ${AnB} = ${EMPTY} ⇒ ${pr(AuB)} = ${pr(A)} + ${pr(B)}.`,
          },
          {
            f: 'Sample points',
            note: `${pr(wi)} ≥ 0, ∑ ${pr(wi)} = 1, and ${pr(E)} = ${SUM_IN(E)} ${pr(wi)}.`,
          },
          { f: 'Range', note: `0 ≤ ${pr(A)} ≤ 1. Outside this ⇒ error.` },
          {
            f: 'Complement',
            note: `${pr(AP)} = 1 − ${pr(A)}. <b>Impossible:</b> ${pr(EMPTY)} = 0. <b>Sure:</b> ${pr(S)} = 1.`,
          },
          { f: 'Addition rule', note: `${ADD}; drop the last term only if mutually exclusive.` },
          { f: 'Equally likely (special case only)', note: `${pr(A)} = ${NA_NS}.` },
          { f: 'De Morgan', note: `${pr(`${AP}${NB}∩${NB}${BP}`)} = 1 − ${pr(AuB)} (“neither”).` },
        ],
        aids: [
          `“Or = Add, And = subtract once”: for the addition rule’s +${pr(B)} − ${pr(AnB)}.`,
          `“At least one ⇒ flip to none”: use 1 − ${pr('none')}.`,
          '“No negatives, totals one”: the two axiom checks for a valid assignment.',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 1207–1214 ────────────────
  {
    n: '03',
    title: 'Computing Probabilities: Combinatorial Methods, Multi-Event Addition & Odds',
    kalam: 'The single most important decision is: does order matter?',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where the marks actually live. Almost every numerical in CBSE Boards, and the overwhelming majority of JEE Main probability questions, are counting problems dressed as probability ${ESTIMATE}: cards, dice, committees, arrangements. CUET leans on odds and quick “at least one” calculations. JEE Advanced pushes three-event inclusion-exclusion and combinatorial “at least / exactly” counts. Topic 01 taught you to list outcomes and Topic 02 gave you the rules; this topic teaches you to compute when listing by hand is hopeless.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 02 we met the equally-likely formula ${pr(E)} = ${NE_NS} and used it on tiny experiments (a die, a coin, a handful of marbles) where you could literally write every outcome down. But now imagine being asked: a poker hand of 5 cards is dealt from a 52-card deck; what is the probability it contains exactly one ace? The sample space has ${NC('52', '5')} = 2,598,960 outcomes. You are not going to list those on an exam.`,
      },
      {
        t: 'p',
        html: `This is exactly the moment Chapter 6 (Permutations and Combinations) comes to the rescue. <b>Think about it this way…</b> the formula ${pr(E)} = ${NE_NS} never required you to write the outcomes, only to count them. And counting is precisely what ${nPr} and ${nCr} were built for. So computing a probability becomes a two-part counting job: count the favourable outcomes (${nn(E)}), count the total outcomes (${nn(S)}), and divide. The entire art is deciding how to count each.`,
      },
      {
        t: 'p',
        html: `The single most important decision is: <b>does order matter?</b> When you deal a poker hand, the order the cards arrive in is irrelevant (a hand is a set), so you count with combinations (${nCr}). When you arrange people in a queue or fill ranked positions, order does matter, so you count with permutations (${nPr}). The beautiful part is that as long as you count ${nn(E)} and ${nn(S)} the same way (both ordered or both unordered), the ratio comes out correct either way. Choose whichever is easier and stay consistent.`,
      },
      {
        t: 'p',
        html: `Two more ideas complete the toolkit. First, <b>“at least one” is a trap that the complement defuses.</b> “At least one ace” splits into one ace, two aces, three aces, four aces: four messy cases. But its opposite, “no ace at all,” is a single clean case. So ${pr('at least one')} = 1 − ${pr('none')} turns four computations into one. This is the highest-value shortcut in the whole chapter. Second, real exams love the <b>addition theorem stretched to three events</b> (“students who play cricket or football or hockey”), which needs the inclusion-exclusion pattern we will build.`,
      },
      {
        t: 'p',
        html: 'Finally, <b>odds.</b> Bookmakers and weather reports rarely say “the probability is 0.6”; they say “the odds are 3 to 2.” Odds are just probability wearing different clothes: a ratio of favourable to unfavourable outcomes instead of favourable to total.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions and assumptions.</b> The counting formula ${NE_NS} is still the equally likely special case: it silently assumes every outcome is equally probable (a fair deck, an unbiased die, “drawn at random”). For a loaded die or a weighted draw it fails, and you must fall back to the axioms. And when outcomes can’t even be assumed equally likely or counted (“what is the probability this newborn calf survives?”), we abandon counting entirely and use <b>empirical (statistical) probability</b>: the long-run relative frequency<br>${pr(E)} ≈ ${fr(`number of times ${E} occurred`, 'total number of trials')},<br>which stabilises as trials grow large.`,
      },

      { t: 'part', title: 'Key formulas, definitions and validity conditions' },
      {
        t: 'p',
        html: '<b>Combinatorial (classical) probability.</b> For an experiment with equally likely outcomes:',
      },
      {
        t: 'formula',
        kicker: 'Combinatorial (classical) probability',
        main: `For equally likely outcomes:<br>${pr(E)} = ${NE_NS}`,
        legend: [`${nn(E)} = the number of favourable outcomes`, `${nn(S)} = the total number of outcomes`],
        note: null,
      },
      {
        t: 'p',
        html: `where ${nn(E)}, ${nn(S)} are counted using Chapter 6 tools:<br>• <b>Selections (order irrelevant):</b> choose ${r} from ${n} in ${nCr} = ${fr(`${n}!`, `${r}! (${n} − ${r})!`)} ways.<br>• <b>Arrangements (order matters):</b> arrange ${r} from ${n} in ${nPr} = ${fr(`${n}!`, `(${n} − ${r})!`)} ways.`,
      },
      { t: 'p', html: '<b>Complement for “at least one”:</b>' },
      {
        t: 'formula',
        kicker: 'Complement for “at least one”',
        main: `${pr('at least one')} = 1 − ${pr('none')}`,
        legend: [],
        note: null,
      },
      { t: 'p', html: '<b>Addition theorem: two events</b> (from Topic 02):' },
      {
        t: 'formula',
        kicker: 'Addition theorem: two events',
        main: ADD,
        legend: [`${A}, ${B} = any two events`],
        note: null,
      },
      { t: 'p', html: '<b>Addition theorem: three events (inclusion-exclusion):</b>' },
      {
        t: 'formula',
        kicker: 'Addition theorem: three events (inclusion-exclusion)',
        main: `${pr(AuBuC)}<br>= ${pr(A)} + ${pr(B)} + ${pr(Cv)}<br>− ${pr(AnB)} − ${pr(BnC)} − ${pr(CnA)}<br>+ ${pr(AnBnC)}`,
        legend: [`${A}, ${B}, ${Cv} = any three events`],
        note: null,
      },
      { t: 'p', html: '<b>Useful derived counts:</b>' },
      {
        t: 'formula',
        kicker: 'Exactly one of two or three events',
        main: `${pr(`exactly one of ${A}, ${B}`)}<br>= ${pr(A)} + ${pr(B)} − 2${pr(AnB)}<br>${pr(`exactly one of ${A}, ${B}, ${Cv}`)}<br>= [${pr(A)} + ${pr(B)} + ${pr(Cv)}]<br>− 2[${pr(AnB)} + ${pr(BnC)} + ${pr(CnA)}]<br>+ 3${pr(AnBnC)}`,
        legend: [`${A}, ${B}, ${Cv} = any events`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Odds.</b> If an event ${E} has ${nn(E)} favourable and ${nn(EP)} unfavourable equally likely outcomes:`,
      },
      {
        t: 'formula',
        kicker: 'Odds',
        main: `For equally likely outcomes:<br><b>Odds in favour of</b> ${E} = ${RATIO(nn(E), nn(EP))} = ${RATIO(pr(E), pr(EP))}<br><b>Odds against</b> ${E} = ${RATIO(nn(EP), nn(E))}`,
        legend: [`${E} = the event`, `${nn(E)} = the number of favourable outcomes`, `${nn(EP)} = the number of unfavourable outcomes`],
        note: null,
      },
      { t: 'p', html: `Converting odds to probability: if odds in favour are ${RATIO(a, b)}, then:` },
      {
        t: 'formula',
        kicker: 'Converting odds to probability',
        main: `${pr(E)} = ${fr(a, `${a} + ${b}`)}<br>${pr(EP)} = ${fr(b, `${a} + ${b}`)}`,
        legend: [`${E} = the event`, `${RATIO(a, b)} = the odds in favour of ${E}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Empirical probability:</b> ${pr(E)} ≈ ${fr(I('f'), I('N'))}, the relative frequency of ${E} over ${I('N')} trials (exact in the limit ${I('N')} → ∞).`,
      },
      {
        t: 'p',
        html: '<b>Notation & validity.</b> All probabilities are dimensionless and lie in [0, 1]; odds are ratios of whole numbers, usually reduced (both positive when the event is neither impossible nor sure). The counting formula requires equally likely outcomes: the standing assumption behind “fair,” “unbiased,” and “at random.”',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A: Solving any combinatorial probability problem',
        steps: [
          'Decide what a single “outcome” is, and whether <b>order matters</b>. Hand of cards / committee / group of balls → combinations. Queue / ranked positions / sequence → permutations.',
          `Count ${nn(S)}: the total number of ways the experiment can turn out, counted the way you chose in step 1.`,
          `Count ${nn(E)}: the favourable outcomes, counted <b>the same way</b>. For “and” conditions across independent groups, multiply the per-group counts (e.g. choose men and women → ${NC(I('m'), I('i'))} × ${NC(I('w'), I('j'))}).`,
          `Divide: ${pr(E)} = ${NE_NS}, and sanity-check it lies in [0, 1].`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: “At least one” via the complement',
        steps: [
          `Identify the event as “at least one ${X}.”`,
          `Write its complement: “no ${X} at all” (zero occurrences).`,
          `Compute ${pr('none')}: usually a single clean count.`,
          `Answer = 1 − ${pr('none')}. Reach for this whenever you see “at least.”`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Three-event addition (inclusion-exclusion)',
        steps: [
          'Add the three single probabilities (this overcounts every pairwise overlap once).',
          'Subtract the three pairwise intersections (this now removes the triple overlap too many times).',
          'Add back the triple intersection once to repair the count. The alternating +, −, + pattern is inclusion-exclusion; the reason is the same “don’t double-count the overlap” logic from the two-event rule, applied twice over.',
        ],
      },
      { t: 'fig', id: 'm11-14-fig-14.5' },
      {
        t: 'p',
        html: `<b>Procedure D: Odds conversions.</b><br>• Odds in favour ${RATIO(a, b)} ⇒ ${pr(E)} = ${fr(a, `${a} + ${b}`)}.<br>• Odds against ${RATIO(a, b)} ⇒ ${pr(E)} = ${fr(b, `${a} + ${b}`)} (the event’s favourable count is the second number).<br>• Probability → odds: ${pr(E)} = ${fr(p, q)} (reduced) ⇒ odds in favour = ${RATIO(p, `(${q} − ${p})`)}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A box contains 5 white and 4 black balls, identical apart from colour. Two balls are drawn at random together. Find (a) ${pr('both white')}, (b) ${pr('one of each colour')}.`,
        steps: [
          `Drawing two together, order irrelevant, so count with combinations.<br>${nn(S)} = ${NC('9', '2')} = ${fr('9 · 8', '2')} = 36.`,
          `(a) Both white: choose 2 of the 5 white balls:<br>${n} = ${NC('5', '2')} = 10<br>⇒ ${pr('both white')} = ${fr('10', '36')} = ${fr('5', '18')}.`,
          `(b) One of each: choose 1 white and 1 black (multiply the group counts):<br>${n} = ${NC('5', '1')} × ${NC('4', '1')} = 5 × 4 = 20<br>⇒ ${pr('one of each')} = ${fr('20', '36')} = ${fr('5', '9')}.`,
          `(<b>Check:</b> both black = ${fr(NC('4', '2'), '36')} = ${fr('6', '36')}; and 10 + 20 + 6 = 36 ✓: the three cases exhaust the sample space.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: `The odds against a particular horse winning a race are ${RATIO('5', '2')}. What is the probability that the horse wins?`,
        steps: [
          `<b>Fast solution.</b> “Odds <b>against</b> = ${RATIO('5', '2')}” means unfavourable ∶ favourable = ${RATIO('5', '2')}. So favourable is the <b>second</b> number:<br>${pr('win')} = ${fr('2', '5 + 2')} = ${fr('2', '7')}.`,
          `<b>Speed trap:</b> the reflex error is to write ${fr('5', '7')} by grabbing the first number. Anchor it: <b>“against” puts the event’s share second.</b>`,
        ],
        ans: fr('2', '7'),
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `A committee of 4 is to be chosen at random from 5 men and 6 women. Find (a) ${pr('exactly 2 men')}, (b) ${pr('at least 1 woman')}.`,
        steps: [
          `Committee = unordered selection, so combinations. Total:<br>${nn(S)} = ${NC('11', '4')} = 330.`,
          `(a) Exactly 2 men means 2 men and 2 women:<br>${n} = ${NC('5', '2')} × ${NC('6', '2')} = 10 × 15 = 150<br>⇒ <i>P</i> = ${fr('150', '330')} = ${fr('5', '11')}.`,
          `(b) “At least 1 woman”: use the complement (Procedure B). Its opposite is “no women,” i.e. all 4 from the 5 men:<br>${pr('no woman')} = ${fr(NC('5', '4'), NC('11', '4'))} = ${fr('5', '330')} = ${fr('1', '66')}.<br><br>${pr('at least 1 woman')} = 1 − ${fr('1', '66')} = ${fr('65', '66')}.`,
          '(Two concepts fused: combinatorial counting from Ch.6 and the complement shortcut, the signature JEE Main composition.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `In a colony, the probability that a household reads newspaper ${A} is 0.5, newspaper ${B} is 0.4, and newspaper ${Cv} is 0.3. The probabilities of reading any two are ${pr(AnB)} = 0.2, ${pr(BnC)} = 0.15, ${pr(CnA)} = 0.1, and all three is ${pr(AnBnC)} = 0.05. Find (a) ${pr('reads at least one paper')}, (b) ${pr('reads exactly one paper')}.`,
        steps: [
          `(a) Three-event inclusion-exclusion (Procedure C):<br>${pr(AuBuC)}<br>= 0.5 + 0.4 + 0.3 − 0.2 − 0.15 − 0.1 + 0.05<br>= 1.2 − 0.45 + 0.05 = 0.80.`,
          `(b) “Exactly one” uses the derived identity:<br>${pr('exactly one')}<br>= [${pr(A)} + ${pr(B)} + ${pr(Cv)}]<br>− 2[${pr(AnB)} + ${pr(BnC)} + ${pr(CnA)}]<br>+ 3${pr(AnBnC)}<br>= 1.2 − 2(0.45) + 3(0.05)<br>= 1.2 − 0.90 + 0.15 = 0.45.`,
          '(<b>Cross-check the structure:</b> at-least-one 0.80 must be ≥ exactly-one 0.45, and the gap 0.35 is everyone reading two or more: consistent. ✓)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> A bag holds 4 red and 6 green balls. Three are drawn at random together. Find ${pr('all three green')}.`,
            a: `${fr(NC('6', '3'), NC('10', '3'))} = ${fr('20', '120')} = ${fr('1', '6')}.`,
          },
          {
            q: `<b>[CUET]</b> The odds in favour of rain tomorrow are ${RATIO('2', '3')}. What is the probability that it rains? What is the probability that it does not?`,
            a: `${pr('rain')} = ${fr('2', '5')}; ${pr('no rain')} = ${fr('3', '5')}.`,
          },
          {
            q: '<b>[JEE Main]</b> A natural number is chosen at random from 1 to 100. Find the probability that it is divisible by 2 or by 5.',
            a: `${fr('50 + 20 − 10', '100')} = ${fr('60', '100')} = ${fr('3', '5')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Five cards are drawn at random from a well-shuffled deck of 52. Find ${pr('all five are hearts')} (leave the answer in ${nCr} form).`,
            a: `${fr(NC('13', '5'), NC('52', '5'))} = ${fr('1287', '2598960')} ≈ 4.95 × 10<sup>−4</sup>.`,
          },
          {
            q: `<b>[JEE Advanced]</b> For three events, ${pr(A)} = 0.6, ${pr(B)} = 0.5, ${pr(Cv)} = 0.4, ${pr(AnB)} = 0.3, ${pr(BnC)} = 0.2, ${pr(CnA)} = 0.25, ${pr(AnBnC)} = 0.1. Find ${pr(`at least one of ${A}, ${B}, ${Cv}`)}.`,
            a: '0.6 + 0.5 + 0.4 − 0.3 − 0.2 − 0.25 + 0.1 = 0.85.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A pair of fair dice is thrown. The probability that the sum is 8 is:',
        opts: [
          { label: fr('5', '36'), nudge: null },
          {
            label: fr('1', '6'),
            nudge: `<b>Trap (b):</b> counted 6 by wrongly including ${pair('4', '4')} twice or adding ${pair('1', '7')}.`,
          },
          { label: fr('1', '9'), nudge: `<b>Trap (c):</b> ${fr('4', '36')}, forgetting one ordered pair.` },
          { label: fr('7', '36'), nudge: `<b>Trap (d):</b> a miscount: no sum of two dice has 7 ordered pairs (sum 7, the most common, has 6, giving ${fr('6', '36')}); sum 8 has 5.` },
        ],
        correct: 0,
        solution: `Favourable ordered pairs summing to 8: ${pair('2', '6')}, ${pair('3', '5')}, ${pair('4', '4')}, ${pair('5', '3')}, ${pair('6', '2')}, five of them; ${nn(S)} = 36. So <i>P</i> = ${fr('5', '36')}.`,
      },
      {
        t: 'mcq',
        q: `The odds against an event are ${RATIO('7', '5')}. The probability of the event is:`,
        opts: [
          { label: fr('7', '12'), nudge: '<b>Trap (a):</b> read the first number as favourable.' },
          { label: fr('5', '12'), nudge: null },
          { label: fr('5', '7'), nudge: '<b>Trap (c):</b> divided by the wrong total (7 instead of 12).' },
          { label: fr('7', '5'), nudge: '<b>Trap (d):</b> wrote the raw ratio: impossible, it exceeds 1.' },
        ],
        correct: 1,
        solution: `Odds against = unfavourable ∶ favourable = ${RATIO('7', '5')}, so ${pr(E)} = ${fr('5', '7 + 5')} = ${fr('5', '12')}.`,
      },
      {
        t: 'mcq',
        q: 'Three fair coins are tossed. The probability of getting at least one head is:',
        opts: [
          { label: fr('1', '8'), nudge: `<b>Trap (a):</b> answered ${pr('no head')} itself.` },
          { label: fr('3', '8'), nudge: '<b>Trap (b):</b> counted only “exactly one head.”' },
          { label: fr('7', '8'), nudge: null },
          { label: fr('1', '2'), nudge: '<b>Trap (d):</b> guessed from a single-coin intuition.' },
        ],
        correct: 2,
        solution: `Complement: ${pr('no head')} = ${pr(I('TTT'))} = ${fr('1', '8')}, so ${pr('at least one head')} = 1 − ${fr('1', '8')} = ${fr('7', '8')}.`,
      },
      {
        t: 'mcq',
        q: 'Two fair dice are rolled. The probability of getting at least one six is:',
        opts: [
          { label: fr('1', '6'), nudge: '<b>Trap (a):</b> used a single die.' },
          { label: fr('11', '36'), nudge: null },
          {
            label: fr('1', '3'),
            nudge: `<b>Trap (c):</b> added ${fr('1', '6')} + ${fr('1', '6')}, double-counting the ${pair('6', '6')} outcome.`,
          },
          { label: fr('25', '36'), nudge: `<b>Trap (d):</b> stopped at ${pr('no six')}.` },
        ],
        correct: 1,
        solution: `Complement: ${pr('no six')} = ${fr('5 × 5', '6 × 6')} = ${fr('25', '36')}, so ${pr('at least one six')} = 1 − ${fr('25', '36')} = ${fr('11', '36')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Mixing ordered and unordered counts.</b> If you count ${nn(S)} with combinations, count ${nn(E)} with combinations too. Switching midway (e.g. ${nPr} on top, ${nCr} below) gives a nonsense ratio. Pick one convention and hold it.`,
          `<b>Brute-forcing “at least one.”</b> Summing the one-, two-, three-, … cases is slow and error-prone. The complement 1 − ${pr('none')} is almost always one short calculation. Train the reflex: see “at least,” compute “none.”`,
          `<b>Forgetting the +${pr(AnBnC)} term.</b> In three-event problems students subtract the three pairwise overlaps and stop, which removes the triple overlap one time too many. Always add it back.`,
          `<b>Confusing odds with probability.</b> Odds ${RATIO('3', '2')} in favour are not a probability of ${fr('3', '2')}; odds in favour ${RATIO(a, b)} mean <i>P</i> = ${fr(a, `${a} + ${b}`)}, so ${RATIO('3', '2')} gives <i>P</i> = ${fr('3', '5')}. And “against” flips which number is the event’s.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For “at least one” in ${n} repeated draws from one equally likely sample space, count the outcomes with none: if ${k} of the <i>s</i> outcomes of a single draw avoid the target, ${pr('at least one')} = 1 − ${fr(pw(k, n), pw('<i>s</i>', n))}. A counting shortcut, not a rule for multiplying probabilities of different events.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Classical',
            note: `${pr(E)} = ${NE_NS}, count with ${nCr} (order irrelevant) or ${nPr} (order matters): same convention top and bottom.`,
          },
          { f: '“At least one”', note: `<i>P</i> = 1 − ${pr('none')}. Single biggest shortcut.` },
          { f: 'Addition (2 events)', note: `${ADD}.` },
          {
            f: 'Addition (3 events)',
            note: `${pr(A)} + ${pr(B)} + ${pr(Cv)} − ∑<i>P</i>(pairs) + ${pr(AnBnC)}.`,
          },
          { f: 'Exactly one (3 events)', note: '∑<i>P</i> − 2∑<i>P</i>(pairs) + 3<i>P</i>(triple).' },
          {
            f: `<b>Odds in favour</b> ${RATIO(a, b)} ⇒ <i>P</i> = ${fr(a, `${a} + ${b}`)}; <b>odds against</b> ${RATIO(a, b)} ⇒ <i>P</i> = ${fr(b, `${a} + ${b}`)}.`,
            note: '',
          },
          {
            f: 'Empirical',
            note: `${pr(E)} ≈ ${fr(I('f'), I('N'))} for large ${I('N')} (when outcomes can’t be assumed equally likely or counted).`,
          },
        ],
        aids: [
          `“And across groups ⇒ multiply”: choosing men AND women is ${NC(I('m'), I('i'))} × ${NC(I('w'), I('j'))}.`,
          '“At least ⇒ flip to none.”',
          '“In-out-in”: the +, −, + sign pattern of three-event inclusion-exclusion.',
          '“Against puts the event second”: for odds-against conversions.',
        ],
      },
      {
        t: 'p',
        html: '<b>Looking ahead:</b> in Class 12 you will extend this toolkit with conditional probability, the multiplication theorem, independence, and Bayes’ theorem, but those are a separate chapter and are not part of Class 11.',
      },
    ],
  },
];
