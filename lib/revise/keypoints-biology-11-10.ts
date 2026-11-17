/**
 * KEY POINTS for Biology Class 11, Chapter 10 (Cell Cycle and Cell Division).
 *
 * Written for test mode, in the form of the Chapter 1 and Chapter 3 files: every
 * point is a question to answer in your head, then the answer and at most one
 * more line. Four kinds, each a section on the screen: Remember (two a topic),
 * Don't mix up, Common mistakes and Exam shortcuts (one each); an Additional
 * topic has two points for its central results. Memory lines are a fifth, short
 * section of their own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to E are 4 to 8; F
 * (What NEET Actually Asks, the book's Addendum P) is 9. No point refers to
 * another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page (the
 * bottom folio) is above each point. Remember: the topic's Key terms, tables and
 * Cheat sheet. Common mistakes: its Common student pitfalls. Exam shortcuts: its
 * Pro-Tip, with a worked example or practice answer. `say`: the cheat sheet's
 * first memory aids, word for word, in the Chapter 1 form: no quotation marks
 * and no markup. Topic 01 prints one aid (PMAT); Topic 02 two; Topic 03 one line
 * that holds two mnemonics ("reduce, then split" and "cross & assort"), used as
 * its two lines with the label "Memory aids:" dropped; Topic 04 one line that
 * holds a pair (PMAT with L-Z-P-D-D) and the chapter motto, used as its two lines
 * (the motto given a colon after "chapter motto" where the book's quotation marks
 * were). So the chapter has seven lines. Topic 04 (the capstone) has six parts,
 * not eight sections, no pitfalls and no Pro-Tip: it has the two Remember
 * points and one point of each other kind, drawn from its table, its bookkeeping
 * table and its two worked examples. Additional topics: the methods, worked
 * examples, tables and practice answers; F: its distribution, archetypes, traps
 * and study tip.
 *
 * Where the book's claim is looser or wrong, the point is true, and follows the
 * chapter text as it stands:
 * - chromosome number in anaphase: the book's "chromosome number only appears to
 *   change momentarily in anaphase" is not repeated; the point says S phase
 *   doubles the DNA and not the chromosome number, and that once the sister
 *   chromatids separate each is a daughter chromosome, so the cell holds twice
 *   the chromosome number until it divides, with no new DNA made;
 * - "meiosis occurs only in diploid cells", "meiosis happens only once in the
 *   life cycle" and "chiasmata occur only in meiosis" are not repeated: meiosis
 *   is described by what it does to a diploid meiocyte (pairing of homologues),
 *   and the mitosis-versus-meiosis point lists the cell types without "only";
 *   mitosis is said to run in haploid and diploid cells, as the book's drone
 *   honeybee example shows, without the cheat sheet's "somatic cells" limit;
 * - the synaptonemal complex is described by its job (the zipper holding the
 *   homologues in register), not as "a DNA + protein structure";
 * - the Metaphase checkpoint is the spindle checkpoint, which blocks anaphase
 *   until every chromosome is attached, with APC/C, not a cyclin-CDK complex,
 *   as the machinery whose activation at anaphase onset degrades cyclin B; the
 *   book's "maintained by APC/C" is not repeated; p21 is placed at both G1 to S
 *   and G2 to M, as its table has it;
 * - CDK4/6 is written CDK4 and CDK6, and no point uses a number over a number;
 * - C values always carry their baseline: an unreplicated diploid cell (G1) is
 *   2C, 4C after S and in G2; after Meiosis I each cell is 2C; after Meiosis II
 *   each is 1C, one quarter of the G2 value and half of the unreplicated diploid
 *   value; after mitosis each daughter is back to 2C. The book's Q4 (6C in G2
 *   giving 3C, "from a 3C G1 baseline") contradicts the 2C table and is not
 *   used: the shortcut states the rule only (each daughter takes half the G2
 *   amount). Endoreduplication: 8C is 2<sup>3</sup> times the haploid 1C, which
 *   is two further rounds from a diploid G1 cell at 2C, not "three rounds
 *   beyond 1C" for a diploid cell;
 * - "15 meiotic divisions" for 60 pollen grains is worded "15 meiocytes, each
 *   undergoing one complete meiosis" (one meiosis is two divisions); the
 *   one-meiocyte-to-four-cells ratio is given for spores and pollen, with the
 *   book's note that egg formation differs, and the book's "1 oocyte + 3 polar
 *   bodies" line, which conflicts with Topic 03's scope note, is not used;
 * - Telophase II is "nuclei re-form at the poles of each of the two cells, four
 *   haploid cells in all", not "two nuclei form at each pole";
 * - the book's "the nucleus and Golgi do not directly contribute" lines about
 *   animal cytokinesis, and "at which stage has karyokinesis stopped", are not
 *   used; colchicine is given with the book's own correction that it arrests
 *   cells at metaphase and does not make a binucleate cell;
 * - the drone honeybee: its body cells divide by mitosis, from an unfertilised
 *   egg (haploid, n = 16); no point says "meiosis is absent in the male lineage"
 *   or "meiosis is impossible" in it; the Drosophila count 2<sup>13</sup> = 8192
 *   is the idealised count (every nucleus dividing at every round);
 * - two-hit hypothesis: stated for a classic tumour suppressor such as RB1
 *   (both alleles lost), with hereditary and sporadic cases, and not the book's
 *   "adult who acquires two independent mutations" case; the four routes to
 *   cancer are "the four routes the book lists", not "the hallmarks"; Taxol is
 *   given as the book words it in two places (stabilises microtubules, so the
 *   chromosomes align at metaphase and cannot be pulled apart: anaphase is
 *   blocked); HER2/neu is now HER2 (ERBB2); Taxol is paclitaxel;
 * - interphase is "far from inactive" (it grows, makes proteins, replicates
 *   DNA), not "metabolically the busiest"; interkinesis is "short", not
 *   "always short"; Meiosis II differs from mitosis by having no S phase before
 *   it and by its chromosomes having been through crossing over, not by
 *   "starting ploidy" alone, since mitosis also runs on haploid cells;
 * - the book's checkpoint remark that p53 and Rb are "not required" in Topic 01
 *   and tested in Additional topic E is left to the book; both points here give
 *   the checkpoint logic as the Additional topics teach it;
 * - superlatives ("the single most examined", "more traps than any other",
 *   "nearly every recent cycle", "at least one question every year", "never
 *   omitted entirely") are dropped; exam shares are the book's estimate from
 *   past papers, not official figures, and no point gives a year.
 *
 * Markup is the chapter's own: <i> for scientific names (the whole binomial in
 * one <i>; names above the genus upright) and for the variable n, <sub> for
 * G<sub>1</sub>, G<sub>2</sub> and G<sub>0</sub>, <frac> for a fraction, no em
 * dash. A value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Cell Cycle & Mitosis ──
  // pp. 592–593, 597–598
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the phases of the cell cycle, which is longest, and is interphase really a resting phase?',
    a: 'The cell cycle is interphase plus M phase. Interphase is more than 95% of the cycle: in a typical human cell the cycle takes about 24 hours, about 23 of them interphase and less than an hour M phase (yeast completes it in about 90 minutes). Interphase runs G<sub>1</sub> (growth, no DNA replication; each chromosome one chromatid), S (DNA replicated; histones made; the centriole duplicates in animal cells) and G<sub>2</sub> (growth and proteins for mitosis). Cells that stop dividing leave from G<sub>1</sub> into G<sub>0</sub>, quiescent but metabolically active, and may re-enter. “Resting” means only that no division is visible: the cell is far from inactive, growing, making proteins and replicating its DNA. Check points, mainly G<sub>1</sub> to S and G<sub>2</sub> to M, gate the cycle, driven by cyclins acting with cyclin-dependent kinases',
    why: 'Order: G<sub>1</sub> → S → G<sub>2</sub> → Prophase → Metaphase → Anaphase → Telophase → Cytokinesis.',
    say: null,
  },
  // pp. 593–594, 598
  {
    topic: 0,
    kind: 'remember',
    q: 'What happens in each stage of mitosis, and what does an equational division mean for the daughters?',
    a: 'Prophase: chromatin condenses, each chromosome shows two sister chromatids, the centrosomes move to opposite poles and the spindle begins; by the end of prophase the nucleolus, Golgi complex, endoplasmic reticulum and nuclear envelope are no longer visible. Metaphase: spindle fibres attach to the kinetochores at the centromeres and the chromosomes lie on the equatorial (metaphase) plate, most condensed, the best stage for chromosome morphology and number (karyotyping). Anaphase: the centromeres split and the sister chromatids, now daughter chromosomes, are pulled to opposite poles. Telophase: the chromosomes decondense and the nuclear envelope, nucleolus, Golgi and ER reappear, giving two nuclei, so karyokinesis is complete. Mitosis is equational: parent and both daughters have the same chromosome number (46 gives 46 and 46)',
    why: 'The nuclear envelope goes by the end of prophase, not in metaphase, and returns in telophase.',
    say: 'PMAT: Prophase, Metaphase, Anaphase, Telophase: Please Make A Two.',
  },
  // pp. 593–594, 597
  {
    topic: 0,
    kind: 'mixup',
    q: 'How does cytokinesis differ in animal and plant cells, and what is a syncytium?',
    a: 'Animal cell: a cleavage furrow forms by constriction of the plasma membrane and deepens from the periphery inward (wall to centre) until the cell pinches in two. Plant cell: the rigid wall forbids pinching, so a cell plate is laid down from the centre outward (centre to wall), growing to fuse with the existing wall; the middle lamella develops along it. If karyokinesis is not followed by cytokinesis, the result is a multinucleate syncytium, the liquid endosperm of a young coconut being the classic example',
    why: 'A plant cell does divide its cytoplasm, only by a different mechanism: “no cytoplasmic division in plants” is a distractor.',
    say: null,
  },
  // pp. 593–594, 597
  {
    topic: 0,
    kind: 'mistake',
    q: 'After S phase, what has doubled: the DNA or the number of chromosomes?',
    a: 'The DNA. S phase doubles the DNA per cell, a diploid cell going from 2C to 4C, but the chromosome number is unchanged: each chromosome is now two sister chromatids held at the centromere, still counted as one chromosome. In the book’s example a G1 cell with 24 chromosomes and 12 pg of DNA has 24 chromosomes and 24 pg at the end of S, and each daughter returns to 24 and 12 pg. Only in anaphase, when the sister chromatids separate, is each a daughter chromosome, so the chromosome number of the cell doubles in anaphase (46 to 92 in a human cell, counting each separated chromatid as a chromosome) and each daughter cell returns to 46 at telophase and cytokinesis; no new DNA is made in anaphase. Track the two quantities in separate columns',
    why: 'Anaphase separates chromatids; it does not replicate DNA, so choosing anaphase for “DNA doubles” is wrong.',
    say: null,
  },
  // pp. 596–597
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How many mitotic divisions turn one cell into 128 cells, and how do you do such items in seconds?',
    a: 'Each mitotic division doubles the number of cells, so <i>n</i> divisions give 2<sup><i>n</i></sup> cells. 2<sup><i>n</i></sup> = 128 = 2<sup>7</sup>, so <i>n</i> = 7. Memorise the small powers of two: 2<sup>4</sup> = 16, 2<sup>5</sup> = 32, 2<sup>6</sup> = 64, 2<sup>7</sup> = 128, 2<sup>8</sup> = 256',
    why: 'The assertion (7 divisions) and the reason (each division doubles the cell number) are both true and the reason explains it.',
    say: null,
  },

  // ── Topic 02 · Meiosis I ──
  // pp. 599–600, 601–602
  {
    topic: 1,
    kind: 'remember',
    q: 'What is meiosis, and what does Meiosis I do that mitosis does not?',
    a: 'Meiosis is a specialised division of a diploid cell: two sequential nuclear divisions (Meiosis I and Meiosis II) after a single DNA replication, producing up to four haploid cells. Meiosis I is the reductional division: the chromosome number is halved (2n to <i>n</i>) because the homologous chromosomes separate. Two features set it apart from mitosis: homologous chromosomes pair (synapsis) in prophase I, and in anaphase I it is the homologues, not the sister chromatids, that separate, each chromosome still being two chromatids joined at the centromere. At metaphase I the two homologues of each bivalent face opposite poles. Example: a cell with 2n = 24 ends Meiosis I as cells of 12 chromosomes, each of 2 chromatids',
    why: 'Meiosis II is the equational division, where the sister chromatids separate.',
    say: null,
  },
  // pp. 600–602
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the five sub-stages of prophase I and the defining event of each?',
    a: 'Leptotene: chromosomes condense into thin, long threads. Zygotene: synapsis, the pairing of homologues, and the synaptonemal complex (which holds the pair in register) begins to form; a paired unit is a bivalent (tetrad), two chromosomes and four chromatids. Pachytene: bivalents clearly visible as tetrads, and crossing over, the exchange of segments between non-sister chromatids of homologues. Diplotene: the synaptonemal complex dissolves and the homologues begin to repel but stay joined at chiasmata, which first become clearly visible. Diakinesis: terminalization of chiasmata, full condensation, nucleolus and nuclear envelope disappear and the meiotic spindle assembles; this ends prophase I',
    why: 'Prophase I is long enough to be five named sub-stages, so it is never “just prophase”.',
    say: 'Sub-stage order: Late Zebras Play Drums Daily',
  },
  // pp. 600–601, 604
  {
    topic: 1,
    kind: 'mixup',
    q: 'Where does crossing over happen, and where do chiasmata first become clearly visible?',
    a: 'Crossing over happens in pachytene, on homologues already synapsed in zygotene, between non-sister chromatids. The chiasmata, the X-shaped sites where it occurred, first become clearly visible in diplotene, as the synaptonemal complex dissolves and the homologues begin to repel but remain tethered. Terminalization, the shifting of chiasmata toward the chromosome ends, is diakinesis',
    why: 'Exchange between sister chromatids, which are identical copies, would make no new combination, which is why it is non-sister.',
    say: 'Event anchors: threads, synapse, cross, chiasma, terminate.',
  },
  // pp. 603–604
  {
    topic: 1,
    kind: 'mistake',
    q: 'What separates in anaphase I, and which division is the equational one?',
    a: 'In anaphase I the homologous chromosomes separate (disjunction) and move to opposite poles, which is the moment the chromosome number falls from diploid to haploid. The sister chromatids stay joined at their centromere until Meiosis II. Calling Meiosis I equational is the reverse slip: Meiosis I is reductional, 2n to <i>n</i>, and Meiosis II is equational',
    why: 'No DNA replication occurs before Meiosis II: interkinesis is brief and skips S phase, because the chromosomes are already duplicated.',
    say: null,
  },
  // pp. 603–604
  {
    topic: 1,
    kind: 'shortcut',
    q: 'An item names an event of prophase I: how do you name the sub-stage at once?',
    a: 'Anchor each sub-stage to one signature event: leptotene is threads, zygotene is synapsis (and the synaptonemal complex), pachytene is crossing over, diplotene is chiasmata visible, diakinesis is terminalization. Match-the-column check from the book: Zygotene pairs with synapsis, Pachytene with crossing over between non-sister chromatids, Anaphase I with separation of homologues, and Metaphase I with bivalents at the equator',
    why: 'Learn the five rows as one fixed table: boards award one mark for each correct pairing.',
    say: null,
  },

  // ── Topic 03 · Meiosis II & Significance ──
  // pp. 606–607
  {
    topic: 2,
    kind: 'remember',
    q: 'What happens between Meiosis I and Meiosis II, and what are the stages of Meiosis II?',
    a: 'Interkinesis is a short stage with no DNA replication: the chromosomes are already duplicated, and one replication serves both divisions. Prophase II: the chromosomes recondense, the envelope breaks down again if it had reformed and a fresh spindle assembles; brief, with no pairing, synapsis or crossing over. Metaphase II: single chromosomes, each of two chromatids, line up on the equatorial plate of each cell. Anaphase II: the centromeres split and the sister chromatids, now daughter chromosomes, go to opposite poles. Telophase II: nuclei re-form at the poles of each of the two cells, giving four haploid cells in all. Meiosis II is equational, as mitosis is',
    why: 'If the DNA doubled again in interkinesis, Meiosis II would reduce nothing and meiosis would fail to make haploid cells.',
    say: 'reduce, then split (Meiosis I then II)',
  },
  // pp. 606–608, 611
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the significance of meiosis, and which events create the variation?',
    a: 'Three points: it halves the chromosome number in gamete or spore formation (2n to <i>n</i>); it keeps the chromosome number constant across generations of sexually reproducing organisms (the halving balances the doubling at fertilisation); and it generates genetic variation through crossing over (pachytene of Meiosis I) and independent assortment, the random orientation of each bivalent at metaphase I. Meiosis II adds no new variation. So “halving the number, constancy across generations, producing variation: all of the above” is correct together, because the three are complementary',
    why: 'This variation is the raw material on which natural selection acts, which is why meiosis matters for evolution.',
    say: 'variation sources: cross & assort.',
  },
  // pp. 607–608, 611
  {
    topic: 2,
    kind: 'mixup',
    q: 'What separates in anaphase I and in anaphase II, and how does Meiosis II differ from mitosis?',
    a: 'Anaphase I separates homologous chromosomes; anaphase II separates sister chromatids, as mitotic anaphase also does. Meiosis II and mitosis are both equational, so one snapshot of metaphase or anaphase can look identical, but Meiosis II is never preceded by an S phase (every mitosis is), and its chromosomes carry the exchanges of crossing over. An option that says “both separate homologous chromosomes” fits only Meiosis I',
    why: 'Ask: homologues or sister chromatids? Homologues point to anaphase I; chromatids to anaphase II or mitosis.',
    say: null,
  },
  // pp. 607–608, 610
  {
    topic: 2,
    kind: 'mistake',
    q: 'A meiocyte is 4C in G2: what is each cell after Meiosis I and after Meiosis II, and what are the chromosome and chromatid counts?',
    a: 'Each cell is 2C after Meiosis I and 1C after Meiosis II, so the DNA is reduced as well as the chromosome number. The 1C of a gamete is one quarter of the G2 value and half of the unreplicated diploid (2C) cell. After Meiosis I the number is haploid but each chromosome still has 2 chromatids (human: 23 chromosomes, 46 chromatids); after Meiosis II it is haploid with 1 chromatid each. Example: 2n = 18 gives 9 chromosomes of 2 chromatids after Meiosis I, then 9 chromosomes of 1 chromatid after Meiosis II',
    why: 'Thinking only the chromosome number is halved, or that the DNA replicates before Meiosis II, are the two slips.',
    say: null,
  },
  // pp. 608, 610–611
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How many meiocytes are needed to make 60 pollen grains?',
    a: 'One complete meiosis of a meiocyte (a pollen mother cell) gives 4 haploid cells, so the number of meiocytes is <frac><num>cells wanted</num><den>4</den></frac> = <frac><num>60</num><den>4</den></frac> = 15, each undergoing one complete meiosis; and 100 pollen grains need 25. Remember the rhythm “reduce, then split”: Meiosis I reduces the number, Meiosis II splits the chromatids',
    why: 'The 1-to-4 ratio is for spore and pollen formation; egg formation in animals yields differently, which belongs to the Reproduction chapter.',
    say: null,
  },

  // ── Topic 04 · Chapter Capstone: The Big Picture & Mitosis vs Meiosis ──
  // pp. 613, 615–616
  {
    topic: 3,
    kind: 'remember',
    q: 'Which three divisions must you know, and what are the stage orders and the counting rules?',
    a: 'Mitosis is equational, giving identical diploid copies; Meiosis I is reductional; Meiosis II is equational. Mitotic stages: Prophase, Metaphase, Anaphase, Telophase. Prophase I: Leptotene, Zygotene (synapsis), Pachytene (crossing over), Diplotene (chiasmata), Diakinesis (terminalization). Anaphase I separates homologues with the chromatids staying joined; anaphase II separates sister chromatids. Counting: <i>n</i> mitotic divisions give 2<sup><i>n</i></sup> cells; one meiosis gives 4 haploid cells; meiocytes needed are the cells wanted divided by 4',
    why: 'Mitosis makes identical diploid copies; meiosis makes varied haploid cells through synapsis, crossing over and independent assortment.',
    say: 'mitotic stages PMAT; meiosis-I substages L-Z-P-D-D',
  },
  // p. 613
  {
    topic: 3,
    kind: 'remember',
    q: 'Which cells divide by mitosis and which by meiosis, and how do the two link up in a life cycle?',
    a: 'Mitosis runs in somatic cells, in dividing germ-line cells (before meiosis) and in the zygote, in both haploid and diploid cells, and in the meristems of plants (apical and lateral), for growth, repair and replacement, producing identical daughter cells. Meiosis runs in specialised diploid cells called meiocytes (germ-line cells in animals; spore mother cells in plants), to make haploid gametes or spores. Fertilisation joins the two: a haploid male gamete (<i>n</i>) fuses with a haploid female gamete (<i>n</i>) to restore the diploid zygote (2n), which grows by mitosis into a new diploid body',
    why: 'A cell never divides at random: the kind of division depends on the cell and its role, growth and maintenance or the next generation.',
    say: 'chapter motto: meiosis halves, fertilisation restores, mitosis multiplies.',
  },
  // pp. 613–615
  {
    topic: 3,
    kind: 'mixup',
    q: 'How do mitosis and meiosis compare on divisions, replications, daughters, pairing and what separates?',
    a: 'Divisions: one in mitosis, two in meiosis (I and II). DNA replication: one before the single division in mitosis; one before Meiosis I only in meiosis, none before Meiosis II. Pairing of homologues (synapsis) and crossing over: absent in mitosis, in prophase I (crossing over in pachytene) of meiosis. Daughters: two, same chromosome number as the parent (2n to 2n) and identical in mitosis; four, half the number (2n to <i>n</i>) and genetically distinct in meiosis. What separates: sister chromatids in mitosis; homologues in anaphase I and sister chromatids in anaphase II of meiosis. Mitosis occurs in somatic cells, in dividing germ-line cells (before meiosis) and in the zygote, in both haploid and diploid cells, and in plant meristems; meiosis in diploid meiocytes (germ-line cells in animals; spore mother cells in plants). One line: mitosis copies, meiosis halves and shuffles',
    why: 'Paired homologues with a visible chiasma mean meiosis, prophase I (from diplotene, where chiasmata first show), in a cell that has homologous pairs.',
    say: null,
  },
  // p. 615
  {
    topic: 3,
    kind: 'mistake',
    q: 'A gamete comes from a meiocyte at 4C in G2: how does its DNA compare, and how do chromosomes and DNA change through the cycle?',
    a: 'The gamete is 1C: one quarter of the G2 value, and half of the unreplicated diploid (2C) cell, so it has half the chromosomes and half the DNA of the diploid parent. Path for a diploid cell of 2n: G1, 2n chromosomes of 1 chromatid, 2C; after S and in G2, 2n, 2 chromatids, 4C; after mitosis, each daughter 2n, 1 chromatid, 2C; after Meiosis I, each cell <i>n</i>, 2 chromatids, 2C; after Meiosis II, each of four cells <i>n</i>, 1 chromatid, 1C. S phase doubles DNA but not chromosome number; Meiosis I halves the chromosome number; Meiosis II separates the chromatids',
    why: 'Always say which baseline you count from: 4C to 1C is a quarter, 2C to 1C is a half.',
    say: null,
  },
  // p. 615
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A pollen mother cell with 2n = 16 undergoes meiosis and is 4C in G2: what are the products, and how many such cells make 240 pollen grains?',
    a: 'One meiosis gives 4 haploid pollen grains, each with <i>n</i> = 8 chromosomes. Each has 1C, which is a quarter of the 4C in G2 and half of the unreplicated diploid value of 2C. 240 pollen grains need <frac><num>240</num><den>4</den></frac> = 60 meiocytes',
    why: 'The shortcuts to keep: 2<sup><i>n</i></sup> cells from <i>n</i> mitotic divisions, and cells wanted over 4 for meiocytes.',
    say: null,
  },

  // ── Additional A · Checkpoint Regulation and the Cyclin-CDK System ──
  // pp. 617–618
  {
    topic: 4,
    kind: 'remember',
    q: 'Which checkpoints guard the cycle, and what does each verify and use?',
    a: 'A checkpoint is a molecular surveillance point that blocks the next phase until the current one is verified complete. G1 to S (restriction point R): after G1, checks cell size, nutrients and absence of DNA damage; cyclin D with CDK4 and CDK6, and cyclin E with CDK2, phosphorylate the Rb protein; inhibitors p21 and p16. G2 to M: after G2, checks that DNA replication is complete and error-free; cyclin B with CDK1, called MPF (Maturation-Promoting Factor); inhibitor p21. The spindle checkpoint, at metaphase of mitosis and of Meiosis I and II, checks that all chromosomes are attached to the spindle: APC/C, not a cyclin-CDK complex, is held inactive by the spindle checkpoint proteins (Mad2, BubR1) until every chromosome is attached; it then triggers anaphase by degrading cyclin B',
    why: 'Order of the cyclins: D in G1, E in late G1, A in S and G2, B at G2 to M.',
    say: null,
  },
  // pp. 618–619
  {
    topic: 4,
    kind: 'remember',
    q: 'How do the Rb–E2F switch, MPF and p53 work?',
    a: 'Rb–E2F: in G1 the retinoblastoma protein binds and inactivates the transcription factor E2F; when cyclin D–CDK4 and CDK6 and cyclin E–CDK2 phosphorylate Rb, it releases E2F, which transcribes S-phase genes (DNA polymerase, cyclin A). DNA damage or insufficient size keeps Rb active. MPF (cyclin B with CDK1) is the “go” signal for mitosis: it phosphorylates nuclear lamins (envelope breakdown), histone H1 (condensation) and vimentin; when cyclin B is degraded at anaphase, MPF falls and the cell leaves mitosis. p53 is activated by DNA damage and stimulates p21, which inhibits cyclin E–CDK2 and cyclin B–CDK1 and arrests the cycle; if the damage is irreparable p53 triggers apoptosis. Loss-of-function p53 mutations are found in about 50% of human cancers',
    why: 'Without Cyclin E, Rb stays bound to E2F and the cell arrests at the G1 to S restriction point.',
    say: null,
  },

  // ── Additional B · Full Chromosome and DNA Accounting Through Meiosis ──
  // pp. 620–621
  {
    topic: 5,
    kind: 'remember',
    q: 'What baseline and rules govern the C-value accounting through meiosis?',
    a: 'Baseline: an unreplicated diploid (2n) cell has 2n chromosomes of 1 chromatid each and DNA of 2C, where 1C is the unreplicated haploid set. S phase: chromosome number unchanged, 2 chromatids per chromosome, DNA 2C to 4C. Meiosis I: homologues separate, number 2n to <i>n</i>, still 2 chromatids, DNA 4C to 2C per cell. Meiosis II: chromatids separate, number <i>n</i>, 1 chromatid, DNA 2C to 1C. Example with 2n = 20 and 6 pg in G1: after S, 20 chromosomes of 2 chromatids and 12 pg; after Meiosis I each cell has 10 chromosomes of 2 chromatids and 6 pg (2C); after Meiosis II each has 10 chromosomes of 1 chromatid and 3 pg (1C). A plant with a diploid genome of 3.2 pg: leaf cell in G1 3.2 pg (2C), meiocyte in G2 6.4 pg (4C), microspore 1.6 pg (1C)',
    why: '2C means a diploid unreplicated cell or a haploid cell with sister chromatids joined (after Meiosis I); 4C is a diploid cell after S, in G2.',
    say: null,
  },
  // pp. 621–623
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you count divisions, cells and gametes from meiocytes?',
    a: 'Mitotic divisions: <i>n</i> divisions give 2<sup><i>n</i></sup> cells. One complete meiosis gives 4 haploid cells (pollen grains or spores), so meiocytes needed are the cells wanted divided by 4. Example: 200 pollen mother cells give 200 meioses and 800 pollen grains; each pollen grain divides once to a generative and a vegetative cell, and each generative cell divides again to give 2 male gametes (sperm nuclei), so 1600 male gametes. Likewise 500 pollen mother cells give 2000 pollen grains and 4000 male gametes',
    why: 'Each pollen mother cell undergoes one complete meiosis, and that meiosis counts as one, not two, in these items.',
    say: null,
  },

  // ── Additional C · Cytokinesis: Mechanisms and Timing ──
  // pp. 623–624
  {
    topic: 6,
    kind: 'remember',
    q: 'How does the contractile ring work in animals and the phragmoplast in plants, and when do they act?',
    a: 'Animal cell: a band of actin filaments and myosin II beneath the plasma membrane at the equator, perpendicular to the spindle, constricts as the filaments slide, deepening the cleavage furrow from the periphery inward (centripetal); the spindle fixes the plane of division, and the midbody is the last connection. Plant cell: Golgi vesicles carrying pectins and hemicellulose gather at the centre along the phragmoplast, a barrel of microtubules; they fuse into the cell plate, which grows outward (centrifugal) to the wall, becomes the middle lamella and gets cellulose walls on both sides. Timing: in animals the furrow begins in anaphase, deepens through telophase and completes after the nuclear envelope reforms; in plants the phragmoplast forms in late anaphase and the plate grows through telophase',
    why: 'Plant cytokinesis needs Golgi-derived vesicles to build the plate; animal cytokinesis uses the actomyosin ring.',
    say: null,
  },
  // pp. 624–626
  {
    topic: 6,
    kind: 'remember',
    q: 'What results if cytokinesis fails or is skipped, and why is colchicine not the cause of it?',
    a: 'If the nucleus divides but the cytoplasm does not, the result is a multinucleate syncytium, whose nuclei share a common cytoplasm: the liquid endosperm of coconut, the <i>Drosophila</i> embryo before cellularisation, many fungi and algae. One round of failed cytokinesis after mitosis gives a binucleate cell, with two G1 nuclei of 2C each, so 4C in one cell and double the chromosome count, disturbing the nucleo-cytoplasmic ratio. Colchicine does not do this: it depolymerises spindle microtubules and arrests cells at metaphase, since the spindle checkpoint prevents anaphase without a working spindle, and is used in karyotyping because metaphase chromosomes are condensed and aligned',
    why: 'In plants a drug that blocks Golgi vesicle fusion stops cell plate formation, so plant cytokinesis is the one hit.',
    say: null,
  },

  // ── Additional D · Cell Division in Specific Organisms and Contexts ──
  // pp. 626–627
  {
    topic: 7,
    kind: 'remember',
    q: 'How do plant meristems, the early <i>Drosophila</i> embryo and budding yeast divide?',
    a: 'Plant meristems: somatic cells divide throughout life in apical meristems (shoot tip, root tip) and lateral meristems (vascular cambium, cork cambium) by the standard mitotic sequence, with cytokinesis always by cell plate. <i>Drosophila</i>: in early embryogenesis the nucleus undergoes 13 rounds of nuclear division without cytokinesis, giving a syncytium, 2<sup>13</sup> = 8192 nuclei in the idealised count where every nucleus divides at each round; cellularisation comes at cycle 14. This is mitosis without cytokinesis, not meiosis. Budding yeast (<i>Saccharomyces cerevisiae</i>): cycle about 90 minutes (a human cell about 24 hours), Start checkpoint in late G1, nuclear envelope not broken down, asymmetric cytokinesis giving a mother cell and a smaller bud; haploid cells (<i>n</i> = 16) divide by mitosis, so a daughter has 16 chromosomes',
    why: 'The vascular cambium produces secondary xylem and phloem and the cork cambium produces cork, all by mitotic divisions, comparable to the actively dividing tissues of an animal.',
    say: null,
  },
  // pp. 627–628
  {
    topic: 7,
    kind: 'remember',
    q: 'What do the drone honeybee and endoreduplication show about the cell cycle?',
    a: 'The drone (<i>Apis mellifera</i>) develops from an unfertilised egg laid by the diploid queen and is haploid (<i>n</i> = 16); its body cells divide by mitosis, confirming that mitosis occurs in haploid cells. No halving of the chromosome number occurs in the drone: a haploid cell has no homologues to pair, so its sperm form without reduction (<i>n</i> = 16). Endoreduplication is repeated DNA replication without mitosis or cytokinesis, giving endopolyploid cells (4C, 8C, 16C): maize endosperm, human liver cells (often 4C or 8C), the silk gland cells of <i>Bombyx mori</i>. Such a cell is outside the normal cycle, a modified one that skips mitosis, and the extra copies of genes support intense transcription (silk fibroin). 8C is 2<sup>3</sup> times the haploid 1C, which from a diploid G1 cell at 2C is two further rounds of replication',
    why: 'The cell stays in interphase, unlike a G2 cell, which has replicated once and is about to divide.',
    say: null,
  },

  // ── Additional E · Abnormal Cell Cycles, Cancer, and Applied Biology ──
  // pp. 629–631
  {
    topic: 8,
    kind: 'remember',
    q: 'What are proto-oncogenes, oncogenes and tumour suppressor genes, and what is the two-hit hypothesis?',
    a: 'A proto-oncogene is a normal gene that promotes cell division (growth factor receptors, cyclin D, CDK4, Ras); mutated or amplified it becomes an oncogene, driving uncontrolled proliferation: HER2 (breast cancer), BCR-ABL (chronic myeloid leukaemia, the Philadelphia chromosome). An activated copy is enough to transform a cell. A tumour suppressor gene inhibits division or promotes apoptosis, and for a classic one both alleles must be lost: p53, RB1 (Rb guards the G1 to S checkpoint). Two-hit hypothesis (Knudson): in hereditary retinoblastoma one mutant RB1 allele is inherited, so any retinal cell needs only one further hit, giving tumours in both eyes; in a sporadic case both hits must occur in one cell lineage, so usually one tumour. Cancer results from oncogene activation overriding checkpoints, tumour suppressor loss, escape from apoptosis (p53 loss) and reactivated telomerase: the four routes the book lists',
    why: 'Ras locked in its active GTP-bound state signals growth continuously: a proto-oncogene turned oncogene, not a suppressor.',
    say: null,
  },
  // pp. 629–631
  {
    topic: 8,
    kind: 'remember',
    q: 'Which drugs target the cell cycle, and why do they harm some normal tissues?',
    a: 'Colchicine blocks spindle assembly and arrests cells at metaphase; vinblastine and vincristine prevent microtubule polymerisation, with the same metaphase arrest; Taxol (from the Pacific yew) stabilises microtubules and prevents their depolymerisation, so the chromosomes align but cannot be pulled apart and anaphase is blocked; hydroxyurea blocks ribonucleotide reductase, so dNTPs are not made, and aphidicolin blocks DNA polymerase α, both arresting cells in S phase. These drugs hit rapidly dividing cells in S and M phases, so they also affect bone marrow, intestinal epithelium and hair follicles: the side effects of chemotherapy',
    why: 'Cancer cells divide much more often than most normal adult cells, so a larger share of them is in M phase.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 632–633
  {
    topic: 9,
    kind: 'remember',
    q: 'Which three clusters of this chapter does NEET ask most, and which topics are less frequent?',
    a: 'The book’s estimate from past papers, not official figures: (1) the Prophase I sub-stages, Leptotene to Diakinesis, asked often, each signature event tested alone or in match-the-column; (2) DNA versus chromosome-number bookkeeping, very frequent (S phase doubles DNA but not chromosome count; anaphase separates chromatids without changing the DNA amount); (3) anaphase I versus anaphase II, what separates, frequent. Less frequent: the cytokinesis mechanism (furrow versus cell plate), the significance of meiosis (all-of-the-above items), the G0 phase definition and the kinetochore and spindle attachment detail',
    why: 'Students who answer “sister chromatids” for anaphase I lose marks: the answer is homologous chromosomes.',
    say: null,
  },
  // pp. 633–637
  {
    topic: 9,
    kind: 'remember',
    q: 'What are the recurring question types, and how is each handled?',
    a: 'Fact or definition: DNA replication is the defining property of S phase, and the histone proteins are made in S phase too. Match-the-column: anchor each event to its unique property. Diagram identification: ask what is separated and what structure is present or absent (envelope and Golgi re-forming is telophase). Assertion–reason: evaluate each statement independently first (kinetochores are the sites of spindle fibre attachment at the centromere). Counting: 2<sup><i>n</i></sup> cells for mitosis (128 cells need 7 divisions), one meiocyte to four haploid cells. Statement-select: if even one statement is false, “all of the above” cannot be correct. Cytokinesis direction: the cell plate grows from the centre to the walls. Meiosis bookkeeping, for a diploid cell whose G1 is 2C: G2 is 2n, 2 chromatids, 4C; after Meiosis I each cell <i>n</i>, 2 chromatids, 2C; after Meiosis II each <i>n</i>, 1 chromatid, 1C',
    why: 'In an assertion–reason item, never assume A is true because R sounds plausible.',
    say: null,
  },
  // pp. 637–638
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which confusions are the book’s listed traps?',
    a: 'DNA is not chromosome number: after S phase DNA doubles and the chromosome count stays 2n, only the chromatid number changes. Anaphase I separates homologues, anaphase II sister chromatids. Prophase I runs Leptotene (threads), Zygotene (synapsis), Pachytene (crossing over), Diplotene (chiasmata visible), Diakinesis (terminalization). “Resting” interphase means only that no division is visible: the cell synthesises proteins, replicates DNA and grows. Kinetochores are protein structures at the centromere anchoring spindle microtubules, not on the chromosome arms. The plant cell plate grows from the centre to the walls, the animal furrow from the wall to the centre. Interkinesis lies only between the two meiotic divisions, is short and has no S phase. Meiosis II resembles mitosis (both equational) but has no S phase before it, and anaphase II separates sister chromatids, not homologues',
    why: 'Each trap turns on one word: homologues or chromatids, centre or wall, DNA or chromosomes.',
    say: null,
  },
  // pp. 638–641
  {
    topic: 9,
    kind: 'shortcut',
    q: 'How should you drill this chapter for the exam?',
    a: 'Practise C-value problems end to end: take a meiocyte at 4C, follow it through both divisions to 1C per gamete (2C after Meiosis I), converting between C values and cell counts (100 pollen grains need 25 meiocytes). Mitosis divides the G2 DNA equally between the two daughters. Also rehearse the Prophase I sub-stages in both directions: given an event, name the sub-stage, and given a sub-stage, state its defining event. The book’s estimate from past papers, not official figures, is that both formats are common',
    why: 'Pattern anchoring and repetition master both quickly.',
    say: null,
  },
];
