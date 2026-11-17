import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 2 (Human Reproduction), Topics 01 and 02: pp. 63 to 81 of
 * the Class 12 Biology Master Reference, word for word. The title page and the
 * contents box (p. 63) are not copied; Topic 01 starts at the foot of p. 63.
 * Topic 01 Male and Female Reproductive Systems (pp. 63 to 73) and Topic 02
 * Gametogenesis & Menstrual Cycle (pp. 74 to 81) are cut at the book's eight
 * sections. Figures 2.1 (caption p. 66, drawn p. 67), 2.2 (caption p. 68, drawn
 * p. 69), 2.3 (caption p. 70, drawn p. 71, inside Worked Example 4), 2.4 and 2.5
 * (captions p. 76, drawn p. 77) and 2.6 (caption p. 78, drawn p. 79) are redrawn in
 * lib/diagrams/biology-12-02.ts. Em dashes are replaced by colons, commas or
 * brackets; "subtopic" is "topic"; emphasis italics are dropped; the ploidy
 * symbol n is italic. The run-on bullet lists of pp. 65, 66 and 75 are proper
 * bullet lists.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 63–73 ─────────────────────────
  {
    n: '01',
    title: 'Male and Female Reproductive Systems',
    kalam: 'Imagine you wanted to design a system whose entire job is to make a brand-new human being.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation of one of the highest-weight units in Class 12 Biology. In CBSE Boards it shows up as 1–3 mark labelled-diagram and “name the structure/give its function” questions. In NEET it is a reliable 2–4 question zone, almost always testing NCERT lines verbatim and assertion–reason pairs. CUET asks direct factual recall. (JEE does not test Biology.) Master the names, locations, and one defining feature of every structure here: almost everything later in the chapter hangs off this anatomy. (All frequency and mark statements in this box are the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'Imagine you wanted to design a system whose entire job is to make a brand-new human being. You would need four very different capabilities, and you could not cram them all into one organ. You would need a factory to manufacture the special cells (gametes), a transport network to move and mature them, a set of service stations that top up the cargo with fuel and protection, and finally a delivery and nurture department. The male and female reproductive systems are exactly this: two complementary versions of the same four-part design.',
      },
      {
        t: 'p',
        html: 'Humans are sexually reproducing and viviparous organisms: we have distinct male and female sexes, and the female gives birth to live young rather than laying eggs. Keep that single sentence in mind, because it quietly explains the whole architecture: the male system is built to produce and deliver gametes, while the female system is built to produce gametes, receive them, host fertilisation, and then carry and nourish the developing baby. The female system simply has more jobs, so it has more specialised compartments.',
      },
      {
        t: 'p',
        html: 'The male side is essentially a production-and-pipeline operation located in the pelvic region. The testes are the factory; a network of ducts (rete testis → vasa efferentia → epididymis → vas deferens) carries the product along and lets it mature; the accessory glands (seminal vesicles, prostate, bulbourethral glands) are the service stations that add fluid; and the penis is the delivery organ. Notice one beautiful design detail: the factory is deliberately kept outside the body in the scrotum, because sperm production needs a temperature about 2–2.5 °C lower than core body temperature. A factory that overheats stops producing, so evolution moved it to a cooler “outhouse.”',
      },
      {
        t: 'p',
        html: 'The female side is a production-plus-gestation operation in the lower abdomen. The ovaries are the factory; the oviducts (Fallopian tubes) are both the pickup conveyor and the meeting point where fertilisation happens; the uterus is the nursery where the embryo implants and grows; the cervix and vagina form the passage to the outside (and the birth canal); and the mammary glands are the post-delivery nourishment department.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the Indian Railways. The testis/ovary is the manufacturing plant. The ducts are the rail lines: the cargo (sperm/ovum) cannot teleport, it must travel a fixed route through specific junctions in a specific order. The accessory glands are the stations where the train is serviced and refuelled. If you remember that anatomy is a one-way route with named stations in a fixed sequence, you will never again mix up which duct comes before which.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & what this topic does not cover.</b> Everything described here is the mature adult human anatomy in its resting, non-pregnant state: sizes and structures differ in children and change during pregnancy. Crucially, this topic is about structure, not process. How sperm and ova are actually formed (spermatogenesis, oogenesis) belongs to Gametogenesis; the monthly hormonal cycling of the ovary and uterus belongs to the Menstrual Cycle; and fertilisation, implantation and pregnancy are later topics. When a structure’s function is mentioned here, treat it as a label on the map, not the full journey.',
      },

      { t: 'part', title: 'Key structures, definitions and roles' },
      {
        t: 'p',
        html: '(Biology fork: descriptive; no SI base-unit / dimensional analysis. Measurements are given as anatomical dimensions only.)',
      },
      {
        t: 'table',
        title: 'Male reproductive system',
        head: ['Structure', 'What it is', 'Key role / defining feature'],
        rows: [
          ['Scrotum', 'Pouch of skin holding the testes, outside the abdomen', 'Keeps testes ≈ 2–2.5 °C below body temperature, needed for sperm production'],
          ['Testis (paired)', 'Primary male sex organ, oval, ≈ 4–5 cm long, ≈ 2–3 cm wide', 'Produces sperms and male sex hormones (androgens)'],
          ['Testicular lobules', '≈ 250 compartments inside each testis', 'Each holds 1–3 coiled seminiferous tubules'],
          ['Seminiferous tubules', 'Highly coiled tubes; site of sperm formation', 'Lined by germ cells (spermatogonia) + Sertoli cells'],
          ['Sertoli cells', 'Cells lining the tubule wall', 'Nourish the developing germ cells (“nurse cells”)'],
          ['Leydig (interstitial) cells', 'Cells in the spaces outside the tubules', 'Secrete androgens (testicular hormones)'],
          ['Rete testis → vasa efferentia → epididymis → vas deferens', 'The male duct system, in order', 'Store, mature and transport sperm out of the testis'],
          ['Ejaculatory duct', 'Union of vas deferens + duct of seminal vesicle', 'Opens into the urethra'],
          ['Urethra', 'Tube from urinary bladder through the penis', 'Common urino-genital passage to the exterior (urethral meatus)'],
          ['Seminal vesicles (paired)', 'Accessory gland', 'Secrete fluid rich in fructose, providing energy for sperm'],
          ['Prostate', 'Single accessory gland', 'Adds to seminal plasma'],
          ['Bulbourethral glands (paired)', 'Accessory gland', 'Add to seminal plasma; lubrication'],
          ['Penis', 'External copulatory organ, highly vascularised; tip = glans penis covered by foreskin', 'Delivers semen'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key definitions to lock:</b><br>• <b>Seminal plasma</b> = the combined secretion of the accessory glands; rich in fructose, calcium and certain enzymes.<br>• <b>Semen</b> = seminal plasma + sperms.<br>• <b>Androgens</b> = male sex hormones secreted by Leydig cells.',
      },
      {
        t: 'table',
        title: 'Female reproductive system',
        head: ['Structure', 'What it is', 'Key role / defining feature'],
        rows: [
          ['Ovary (paired)', 'Primary female sex organ, ≈ 2–4 cm long, one on each side of the lower abdomen', 'Produces ova and ovarian hormones; held by ligaments to pelvic wall & uterus'],
          ['Ovarian stroma', 'Connective tissue inside the ovary, under a thin epithelium', 'Divided into peripheral cortex + inner medulla'],
          ['Oviduct / Fallopian tube (paired)', 'Tube ≈ 10–12 cm long, from near the ovary to the uterus', 'Carries the ovum; usual site of fertilisation'],
          ['Infundibulum', 'Funnel-shaped end of the oviduct, closest to the ovary', 'Bears fimbriae'],
          ['Fimbriae', 'Finger-like projections on the infundibulum', 'Collect the ovum after ovulation'],
          ['Uterus (womb)', 'Single, hollow, muscular organ', 'Houses implantation and development of the embryo'],
          ['Cervix', 'Narrow lower part of the uterus', 'Opens into the vagina via the cervical canal'],
          ['Vagina', 'Muscular tube from cervix to exterior', 'Receives semen; part of the birth canal'],
          ['External genitalia', 'Mons pubis, labia majora, labia minora, clitoris, hymen, vaginal orifice', 'Protect the opening of the tract; the hymen is a membrane partially covering the vaginal opening (its presence/absence is not a reliable indicator of virginity)'],
          ['Mammary glands (paired)', 'Glandular + fatty tissue; 15–20 mammary lobes', 'Produce milk after childbirth'],
        ],
      },
      {
        t: 'p',
        html: 'The uterine wall has three layers (outer → inner):<br>• <b>Perimetrium</b>: external, thin membrane<br>• <b>Myometrium</b>: middle, thick layer of smooth muscle (drives labour contractions)<br>• <b>Endometrium</b>: inner glandular lining (the layer that changes across the cycle and where implantation occurs)',
      },
      {
        t: 'p',
        html: '<b>Key definitions to lock:</b><br>• <b>Primary sex organs (gonads)</b> = testes (male) and ovaries (female): they make both gametes and hormones. Everything else (ducts, glands, external organs) is accessory/secondary.<br>• <b>Accessory ducts (female)</b> = oviducts, uterus and vagina.',
      },

      { t: 'part', title: 'Structural organisation and functional pathways' },
      {
        t: 'p',
        html: 'Anatomy makes far more sense as routes and layers than as a flat list. Three “pathways” are worth tracing slowly, because exam questions love to scramble their order.',
      },
      { t: 'p', html: '<b>The male sperm pathway (a strict one-way route)</b>' },
      { t: 'p', html: 'Trace the journey of a sperm from where it is made to where it leaves the body:' },
      {
        t: 'p',
        html: 'Seminiferous tubule → Rete testis → Vasa efferentia → Epididymis → Vas deferens → Ejaculatory duct → Urethra → Urethral meatus',
      },
      {
        t: 'p',
        html: '<b>Why this order matters:</b> the seminiferous tubules drain into a meshwork (rete testis), which feeds the small vasa efferentia (about a dozen or more fine tubules), which connect to the epididymis, a long coiled tube along the posterior surface of each testis, where sperm are stored and matured. From there the muscular vas deferens carries them upward, looping over the urinary bladder; it joins the duct of the seminal vesicle to form the ejaculatory duct, which empties into the urethra. The urethra is a shared tube: it carries both urine (from the bladder) and semen, which is exactly why it is called the urino-genital passage. A classic trap: students swap vasa efferentia (tiny tubes leaving the testis) with vas deferens (the long duct to the urethra). Same Latin root, different stations: the vasa efferentia are the third station, leaving the testis; the vas deferens is the fifth, the long duct that carries sperm from the epididymis.',
      },
      { t: 'p', html: '<b>The testis, from outside in (nested layers)</b>' },
      {
        t: 'p',
        html: 'Testis ⊃ 250 lobules ⊃ 1–3 seminiferous tubules per lobule ⊃ (germ cells + Sertoli cells)',
      },
      {
        t: 'p',
        html: 'Inside the tubule wall sit the germ cells (spermatogonia) and the Sertoli cells that feed them. In the spaces between the tubules sit the Leydig cells, which make androgens. Hold this spatial picture: germ + Sertoli = inside the tube; Leydig = outside the tube. It prevents a common cell-location error in this chapter. (Each whole testis is wrapped in a tough fibrous capsule, the tunica albuginea, beneath which the 250 lobules are packed.)',
      },
      { t: 'fig', id: 'b12-02-fig-2.1' },
      { t: 'p', html: '<b>The female tract, from ovary to exterior (pickup → nursery → exit)</b>' },
      {
        t: 'p',
        html: 'Ovary → (ovulation) → Fimbriae → Infundibulum → Ampulla → Isthmus → Uterus → Cervix → Vagina',
      },
      {
        t: 'p',
        html: 'The ovary is not continuous with the oviduct; the fimbriae of the funnel lie close to it. After ovulation the released ovum is swept up by the fimbriae of the funnel-shaped infundibulum, then travels down the widening ampulla (the usual fertilisation site) and the narrow isthmus into the uterus. The uterus narrows into the cervix, whose cervical canal opens into the vagina: the cervix + vagina together form the birth canal.',
      },
      { t: 'fig', id: 'b12-02-fig-2.2' },
      { t: 'p', html: '<b>The mammary gland’s drainage path</b>' },
      { t: 'p', html: 'Milk is made deep inside and flows outward through a branching plumbing system:' },
      {
        t: 'p',
        html: 'Alveoli → Mammary tubules → Mammary ducts → Ampulla (wider) → Lactiferous duct → (out)',
      },
      {
        t: 'p',
        html: 'Each gland has 15–20 mammary lobes, each containing clusters of cells called alveoli that secrete and store milk in their lumen. The alveoli drain into mammary tubules, which merge into mammary ducts, which widen into an ampulla, leading to a lactiferous duct from which milk is finally drawn out. (Note that “ampulla” is used for two different structures: one in the Fallopian tube, one in the breast. Same word, totally different place. Examiners exploit this.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'p',
        html: '(Biology fork: assertion–reason, match-the-column, diagram identification, and MCQ-with-reasoning. All scenarios original.)',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Match the column.</b> Match each structure in Column I with its correct description in Column II.<br><b>Column I:</b> (P) Leydig cells; (Q) Sertoli cells; (R) Infundibulum; (S) Fimbriae.<br><b>Column II:</b> (i) Nourish developing germ cells inside the tubule; (ii) Funnel-shaped end of the oviduct; (iii) Secrete androgens, lie outside the tubules; (iv) Finger-like projections that collect the ovum.',
        steps: [
          '<b>Reasoning.</b> Work structure by structure. Leydig cells sit in the interstitial space outside the seminiferous tubules and secrete androgens → (iii). Sertoli cells line the inside of the tubule and feed the germ cells → (i). The infundibulum is the funnel at the ovary end of the oviduct → (ii). Fimbriae are the finger-like projections on that funnel → (iv).',
        ],
        ans: 'P–iii, Q–i, R–ii, S–iv.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Single best answer.</b> The common feature shared by the testis and the ovary that justifies calling both “primary sex organs” is that each: <b>(a)</b> produces gametes only <b>(b)</b> produces hormones only <b>(c)</b> produces both gametes and hormones <b>(d)</b> merely transports gametes',
        steps: [
          '<b>Reasoning.</b> A “primary sex organ” (gonad) is defined by a dual job: making gametes and secreting sex hormones. The testis makes sperms + androgens; the ovary makes ova + ovarian hormones. Options (a) and (b) each capture only half the definition; (d) describes accessory ducts, not gonads.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b><br>• <b>Assertion (A):</b> The testes are housed in the scrotum, outside the abdominal cavity.<br>• <b>Reason (R):</b> Sperm production requires a temperature lower than the core body temperature.<br><b>Choose:</b> <b>(a)</b> Both A and R true, R correctly explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> Both statements are factually correct. And the second is the cause of the first: because spermatogenesis needs about 2–2.5 °C below body temperature, the testes are placed in the cooler scrotum. So R is true and it is the correct explanation of A. Beware the tempting (b): it is only right if the two facts were unrelated, but here the temperature requirement is precisely why the scrotum exists.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Diagram identification + reasoning.</b> A sectional diagram of the male duct system is shown with four junctions labelled W, X, Y, Z along the path from the testis to the exterior, in order. W is formed by the several tiny tubes leaving the testis; X is a long, single, muscular duct; Y is formed where X meets the duct of an accessory gland; Z is the shared passage that also carries urine.',
        fig: 'b12-02-fig-2.3',
        steps: [
          '<b>Reasoning.</b> Decode each clue against the fixed route. “Formed by several tiny tubes leaving the testis” = the vasa efferentia (W). “Long single muscular duct” = the vas deferens (X). “Formed where the vas deferens meets the duct of the seminal vesicle” = the ejaculatory duct (Y). “Shared passage that also carries urine” = the urethra (Z). The discriminating trap is W vs X: both are “vas-something,” but vasa efferentia are many and short, right at the testis, while the vas deferens is one and long.',
        ],
        ans: 'W = vasa efferentia, X = vas deferens, Y = ejaculatory duct, Z = urethra.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three layers of the uterine wall from outside to inside and state which layer drives contractions during childbirth.',
            a: 'Perimetrium → Myometrium → Endometrium; the myometrium (thick smooth muscle) drives contractions.',
          },
          {
            q: '[CUET] Which secretion gives sperm their energy source, and which gland contributes it?',
            a: 'Fructose, contributed by the seminal vesicles.',
          },
          {
            q: '[NEET] Arrange in correct sequence the path of a sperm from its site of formation to the body exterior.',
            a: 'Seminiferous tubule → rete testis → vasa efferentia → epididymis → vas deferens → ejaculatory duct → urethra → urethral meatus.',
          },
          {
            q: '[NEET] Assertion: Sertoli cells are called “nurse cells.” Reason: They secrete androgens that nourish the testis. State whether A and R are true and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A is true, R is false (Sertoli cells nourish germ cells; androgens are secreted by Leydig cells) → option “A true, R false.”',
          },
          {
            q: '[NEET high-difficulty] Explain why the word “ampulla” can refer to two anatomically unrelated structures in human reproduction, naming both and their locations.',
            a: 'One ampulla is the wide middle region of the Fallopian tube (near the fertilisation site); the other is the widened part of the mammary duct before the lactiferous duct: same name, different system.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The cells that nourish the developing male germ cells and the cells that secrete androgens are, respectively:',
        opts: [
          {
            label: 'Leydig cells and Sertoli cells',
            nudge: '<b>(a)</b> reverses the two, a common error, picked by students who memorise the names but not the locations.',
          },
          { label: 'Sertoli cells and Leydig cells', nudge: null },
          {
            label: 'Sertoli cells and spermatogonia',
            nudge: '<b>(c)</b> confuses the hormone-secreting cell with the germ cell itself.',
          },
          {
            label: 'spermatogonia and Leydig cells',
            nudge: '<b>(d)</b> gets the androgen source right but wrongly makes the germ cell its own nurse.',
          },
        ],
        correct: 1,
        solution: 'Sertoli cells (inside the tubule) nourish; Leydig cells (outside the tubule) secrete androgens.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is not a male accessory gland?',
        opts: [
          {
            label: 'Seminal vesicle',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine male accessory glands, so a student who forgets the mammary gland is female may second-guess and pick one of them.',
          },
          {
            label: 'Prostate',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine male accessory glands, so a student who forgets the mammary gland is female may second-guess and pick one of them.',
          },
          {
            label: 'Bulbourethral gland',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine male accessory glands, so a student who forgets the mammary gland is female may second-guess and pick one of them.',
          },
          { label: 'Mammary gland', nudge: null },
        ],
        correct: 3,
        solution:
          'The mammary gland belongs to the female reproductive system. The other three are the male accessory glands whose secretions form the seminal plasma. <b>Why the traps work:</b> The question rewards knowing the complete accessory-gland set.',
      },
      {
        t: 'mcq',
        q: 'The usual site of fertilisation and the funnel that collects the ovum are, respectively, the:',
        opts: [
          { label: 'isthmus and infundibulum', nudge: '<b>(a)</b> swaps the fertilisation site to the narrow isthmus.' },
          { label: 'ampulla and infundibulum', nudge: null },
          {
            label: 'ampulla and isthmus',
            nudge: '<b>(c)</b> correctly names the ampulla but wrongly calls the isthmus the collecting funnel.',
          },
          {
            label: 'uterus and fimbriae',
            nudge: '<b>(d)</b> confuses the collecting funnel (infundibulum) with the fimbriae on it, and misplaces fertilisation in the uterus.',
          },
        ],
        correct: 1,
        solution: 'Fertilisation usually occurs in the ampulla; the ovum is collected by the funnel-shaped infundibulum (via its fimbriae).',
      },
      {
        t: 'mcq',
        q: 'Choose the correct statement about the uterus.',
        opts: [
          {
            label: 'It is paired, like the ovaries and oviducts.',
            nudge: '<b>(a)</b> wrongly extends the “paired” pattern of ovaries/oviducts to the uterus.',
          },
          {
            label: 'Its innermost glandular layer is the perimetrium.',
            nudge: '<b>(b)</b> and <b>(d)</b> both scramble the wall layers: perimetrium is the outer membrane and endometrium is the inner glandular layer (the middle muscular layer is the myometrium).',
          },
          { label: 'It is single and also called the womb.', nudge: null },
          {
            label: 'Its middle muscular layer is the endometrium.',
            nudge: '<b>(b)</b> and <b>(d)</b> both scramble the wall layers: perimetrium is the outer membrane and endometrium is the inner glandular layer (the middle muscular layer is the myometrium).',
          },
        ],
        correct: 2,
        solution:
          'The uterus is a single organ, commonly called the womb. <b>Why the traps work:</b> These layer-swaps are a common uterus error.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Vasa efferentia ≠ vas deferens.</b> The vasa efferentia are the many short tubes right at the testis; the vas deferens is the single long duct to the urethra. Mixing them up puts the stations in the wrong order.',
          '<b>Sertoli vs Leydig: it’s about location.</b> Inside the tubule = Sertoli (nourish). Outside the tubule = Leydig (androgens). If you can place the cell, you are far less likely to mis-assign its job.',
          '<b>Uterine wall layers in the wrong order.</b> Outer→inner is Perimetrium → Myometrium → Endometrium. The endometrium is the inner one (think “endo = inside”), and it’s the layer that matters for the cycle and implantation.',
          '<b>One word, two organs: “ampulla.”</b> It exists in both the Fallopian tube and the mammary gland. Read the question’s context before answering.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “arrange the sequence” or diagram-label question, don’t recall facts at random: mentally walk the one-way route. Male: tubule → rete → efferentia → epididymis → deferens → ejaculatory → urethra. Female: ovary → fimbriae → infundibulum → ampulla → isthmus → uterus → cervix → vagina. Once the route is automatic, sequence and labelling questions become instant, and the classic swaps (efferentia/deferens, ampulla/isthmus) stop fooling you.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Gonads (primary sex organs) do two jobs',
            note: 'testis → sperms + androgens; ovary → ova + ovarian hormones. Everything else is accessory.',
          },
          {
            f: 'Testis nesting',
            note: 'testis ⊃ ~250 lobules ⊃ 1–3 seminiferous tubules ⊃ (spermatogonia + Sertoli inside; Leydig outside). Kept 2–2.5 °C cooler in the scrotum.',
          },
          {
            f: 'Male route (memorise as one line)',
            note: 'tubule → rete testis → vasa efferentia → epididymis → vas deferens → ejaculatory duct → urethra.',
          },
          {
            f: 'Semen = seminal plasma + sperms.',
            note: 'Seminal plasma (from seminal vesicles + prostate + bulbourethral glands) is rich in fructose, calcium, enzymes.',
          },
          {
            f: 'Female route',
            note: 'ovary → fimbriae → infundibulum → ampulla (fertilisation) → isthmus → uterus → cervix → vagina (= birth canal). Oviduct ≈ 10–12 cm; ovary ≈ 2–4 cm.',
          },
          {
            f: 'Uterine wall (out→in)',
            note: 'Perimetrium · Myometrium · Endometrium. Mnemonic: “PME: Protects, Moves, Embeds” (protective membrane, muscle that moves/contracts, lining that embeds the embryo).',
          },
          {
            f: 'Mammary drainage',
            note: 'alveoli → mammary tubules → mammary ducts → ampulla → lactiferous duct.',
          },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 74–81 ─────────────────────────
  {
    n: '02',
    title: 'Gametogenesis & Menstrual Cycle',
    kalam: 'In the male, one starting cell ultimately yields four working sperms.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the densest, highest-yield zones of Class 12 Biology. CBSE Boards favour the spermatogenesis/oogenesis flow charts, the four menstrual phases, and “which hormone does what” questions (2–5 marks). NEET often asks about this: chromosome numbers at each stage, the LH-surge/ovulation link, source-of-each-hormone, and assertion–reason traps are perennial. CUET tests direct recall of stages and definitions. Get the sequences and the hormone sources automatic and a large block of marks becomes free. (All frequency and mark statements in this box are the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'Two big jobs live in this topic, and they are best understood by their purpose. Gametogenesis is the manufacturing of gametes: sperm and ova. The menstrual cycle is the monthly rhythm that readies the female body to receive and nurture a fertilised egg, then resets if none arrives.',
      },
      {
        t: 'p',
        html: 'Start with a striking asymmetry. In the male, one starting cell ultimately yields four working sperms. In the female, one starting cell yields just one ovum (the leftover material is packed off into tiny, doomed “polar bodies”). Why such different bookkeeping? Think of the economics. A sperm is a cheap, stripped-down delivery vehicle: all engine and cargo, made in the millions, because most will never reach the target. An ovum is the opposite: a single, expensively-provisioned cell loaded with all the nutrients the early embryo will need. So the female strategy is to pour all the cytoplasm into one well-stocked cell and discard the rest, while the male strategy is to mass-produce.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a sweet shop before Diwali. The male system is the assembly line stamping out thousands of identical small laddoos: quantity wins. The female system is the master halwai making one perfect, richly-loaded barfi, sacrificing the trimmings (polar bodies) so that one product carries everything. Same raw dough (a germ cell), two completely different production philosophies.',
      },
      {
        t: 'p',
        html: 'Now the menstrual cycle. Each month the female body rebuilds the uterine lining (the endometrium) into a soft, blood-rich nursery, just in case a fertilised egg arrives. If pregnancy does not happen, that lining is shed (menstruation) and the whole thing restarts. The conductor of this monthly orchestra is a chain of hormones: the brain’s hypothalamus signals the pituitary, the pituitary signals the ovary, and the ovary’s own hormones act back on the uterus, and on the pituitary itself, as feedback. The four phases are simply four scenes in this hormonal play: tear down (menstrual), rebuild (follicular), release the egg (ovulatory), and hold ready (luteal).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The familiar “28-day cycle with ovulation on day 14” is a textbook average, not a rule: real cycles vary in length, mostly in the follicular phase. The menstrual cycle is specific to primates (humans, apes, monkeys); most other mammals show an oestrus cycle instead. And the two gametogeneses run on very different clocks: spermatogenesis begins at puberty and then runs continuously, whereas oogenesis actually starts before birth, freezes mid-division for years, and only finishes, in installments, much later.',
      },

      { t: 'part', title: 'Key definitions, stages and hormones' },
      {
        t: 'p',
        html: '(Biology fork: descriptive; chromosome counts and cycle days are sequence facts, not SI quantities. No dimensional formulae.)',
      },
      {
        t: 'p',
        html: '<b>Core definitions</b><br>• <b>Gametogenesis:</b> the process by which the primary sex organs (testes in males, ovaries in females) produce gametes, i.e. sperms and ova.<br>• <b>Spermatogenesis:</b> formation of sperms from germ cells in the seminiferous tubules, by meiosis followed by structural modification.<br>• <b>Spermiogenesis:</b> the transformation of spermatids into spermatozoa (developing head, neck, middle piece, tail).<br>• <b>Spermiation:</b> the final release of mature sperms from the seminiferous tubules.<br>• <b>Oogenesis:</b> formation of female gametes from germ cells in the ovary; begins in embryonic life.<br>• <b>Ovulation:</b> release of the haploid secondary oocyte from the ovary under the LH surge.<br>• <b>Menarche:</b> the first menstruation, at puberty. <b>Menopause:</b> its permanent stoppage, around 50 years of age.<br>• <b>Menstrual cycle:</b> the cyclical reproductive cycle of female primates, repeating about every 28–29 days.',
      },
      {
        t: 'table',
        title: 'Ploidy and yield (the part NEET loves)',
        head: ['Male line', 'Ploidy', 'Female line', 'Ploidy'],
        rows: [
          ['Spermatogonium', '2<i>n</i> = 46', 'Oogonium', '2<i>n</i> = 46'],
          ['Primary spermatocyte', '2<i>n</i> = 46', 'Primary oocyte (arrested)', '2<i>n</i> = 46'],
          ['Secondary spermatocyte', '<i>n</i> = 23', 'Secondary oocyte (+ 1st polar body)', '<i>n</i> = 23'],
          ['Spermatid → Spermatozoon', '<i>n</i> = 23', 'Ovum (+ 2nd polar body, at fertilisation)', '<i>n</i> = 23'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Yield:</b> one primary spermatocyte → 4 sperms; one primary oocyte → 1 ovum (+ polar bodies).',
      },
      {
        t: 'table',
        title: 'Hormone roster (memorise the source with each)',
        head: ['Hormone', 'Source', 'Action'],
        rows: [
          ['GnRH', 'Hypothalamus', 'Triggers the pituitary to release FSH & LH (rises at puberty)'],
          ['FSH', 'Anterior pituitary', 'Male: acts on Sertoli cells → spermiogenesis factors. Female: follicle development + oestrogen'],
          ['LH', 'Anterior pituitary', 'Male: acts on Leydig cells → androgens. Female: LH surge → ovulation; forms corpus luteum'],
          ['Androgens (testosterone)', 'Leydig cells', 'Drive spermatogenesis; secondary sex characters'],
          ['Oestrogen', 'Growing follicle (granulosa)', 'Rebuilds endometrium (follicular phase)'],
          ['Progesterone', 'Corpus luteum', 'Maintains endometrium (luteal phase)'],
          ['Inhibin', 'Sertoli cells (male); granulosa cells (female)', 'Feedback suppression of FSH'],
        ],
      },

      { t: 'part', title: 'Key processes and sequences' },
      { t: 'p', html: '<b>Spermatogenesis (continuous, from puberty)</b>' },
      {
        t: 'p',
        html: 'Spermatogonium (2<i>n</i>) → (mitosis) → Primary spermatocyte (2<i>n</i>) → (meiosis I) → 2 Secondary spermatocytes (<i>n</i>) → (meiosis II) → 4 Spermatids (<i>n</i>) → (spermiogenesis) → 4 Spermatozoa (<i>n</i>)',
      },
      {
        t: 'p',
        html: 'The germ cells (spermatogonia, diploid) sit on the inner wall of the seminiferous tubules and multiply by mitosis. Some become primary spermatocytes, which undergo meiosis I to give two haploid secondary spermatocytes (23 chromosomes, but still duplicated). Each of these completes meiosis II, producing four haploid spermatids. The spermatids then reshape, growing a head, neck, middle piece and tail, in spermiogenesis, becoming spermatozoa, whose heads embed in Sertoli cells for nourishment before final release (spermiation).',
      },
      {
        t: 'p',
        html: '<b>Hormonal control:</b> at puberty, GnRH from the hypothalamus stimulates the anterior pituitary to release LH and FSH. LH acts on Leydig cells → androgens, which drive spermatogenesis; FSH acts on Sertoli cells → factors that assist spermiogenesis. The system self-regulates by negative feedback: as androgen levels rise, they signal back to the hypothalamus and pituitary to dampen GnRH, LH and FSH output, while inhibin from the Sertoli cells specifically suppresses FSH, keeping sperm output steady rather than runaway.',
      },
      {
        t: 'p',
        html: '<b>Sperm structure:</b> a head (with an acrosome full of enzymes for penetrating the ovum), a middle piece (packed with mitochondria generating energy for tail movement), and a tail for motility.',
      },
      { t: 'fig', id: 'b12-02-fig-2.4' },
      { t: 'p', html: '<b>Oogenesis (begins before birth, finishes in installments)</b>' },
      {
        t: 'p',
        html: 'Oogenesis is initiated during embryonic development: millions of gamete mother cells (oogonia) form in the foetal ovary, and no more are made after birth. The oogonia begin meiosis but arrest at prophase I, becoming primary oocytes, held in suspended animation, sometimes for decades. The numbers then fall steeply: about one to two million primary oocytes (primary follicles) are present in the two ovaries together at birth; by puberty only about 60,000–80,000 are left in each ovary, and across an entire reproductive lifetime only about 400 are ever actually ovulated: the vast majority simply degenerate. This brutal attrition is worth remembering, because it is the biological reason a finite, non-renewable “egg reserve” exists at all, in sharp contrast to the male’s lifelong, renewable sperm production.',
      },
      {
        t: 'p',
        html: 'Each primary oocyte is wrapped by granulosa cells to form a primary follicle; added granulosa layers plus a theca layer make a secondary follicle; a fluid-filled antrum appears, giving a tertiary follicle, which matures into a Graafian follicle. Within it, the primary oocyte finally completes its first meiotic division: an unequal split yielding one large secondary oocyte (keeping almost all the cytoplasm) and a tiny first polar body. (NCERT places this in the tertiary follicle; it is completed under the LH surge just before ovulation.) A glycoprotein coat, the zona pellucida, forms around the oocyte. The Graafian follicle then ruptures (ovulation, under the LH surge), releasing the secondary oocyte. The second meiotic division does not finish unless and until a sperm enters: it remains arrested at metaphase II.',
      },
      {
        t: 'p',
        html: 'Oogonium (2<i>n</i>) → Primary oocyte (2<i>n</i>, arrested) → (meiosis I, unequal) → Secondary oocyte (<i>n</i>) + 1st polar body → (meiosis II, at fertilisation) → Ovum (<i>n</i>) + 2nd polar body',
      },
      { t: 'fig', id: 'b12-02-fig-2.5' },
      { t: 'p', html: '<b>The Menstrual Cycle (≈ 28–29 days, four phases)</b>' },
      {
        t: 'p',
        html: 'Cyclical changes in pituitary (FSH, LH) and ovarian (oestrogen, progesterone) hormones drive parallel changes in the ovary and the uterine endometrium. The cycle is about 28–29 days; the figure and the day numbers below use 28.',
      },
      {
        t: 'p',
        html: '1. <b>Menstrual (bleeding) phase:</b> days 1–5 (the flow lasts about 3–5 days). Falling progesterone causes the endometrium to break down; ruptured blood vessels produce menstrual flow through the vagina.<br>2. <b>Follicular (proliferative) phase:</b> days 6–13. The endometrium rebuilds; rising FSH and LH stimulate follicle development and oestrogen secretion.<br>3. <b>Ovulatory phase:</b> ~day 14. Both LH and FSH peak; the LH surge ruptures the Graafian follicle and releases the secondary oocyte.<br>4. <b>Luteal (secretory) phase:</b> ~14 days. The leftover Graafian follicle becomes the corpus luteum, which secretes progesterone to maintain the endometrium. If no fertilisation occurs, the corpus luteum degenerates (→ corpus albicans), progesterone falls, and the next menstrual phase begins.',
      },
      {
        t: 'p',
        html: 'If fertilisation does occur, the cycle does not restart: the menstrual cycle ceases during pregnancy (the corpus luteum and later the placenta keep progesterone high, so the endometrium is retained and no menstruation happens until after childbirth).',
      },
      { t: 'fig', id: 'b12-02-fig-2.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'p',
        html: '(Biology fork: assertion–reason, match-the-column, sequence/diagram identification, MCQ-with-reasoning. All scenarios original.)',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Match the column.</b><br><b>Column I (hormone):</b> (P) Progesterone; (Q) Androgens; (R) LH; (S) Oestrogen.<br><b>Column II (source):</b> (i) Leydig cells; (ii) Anterior pituitary; (iii) Corpus luteum; (iv) Growing ovarian follicle.',
        steps: [
          '<b>Reasoning.</b> Pin each hormone to its source. Progesterone → corpus luteum (iii). Androgens → Leydig cells (i). LH → anterior pituitary (ii). Oestrogen → growing follicle (iv). The whole game in this chapter is source, not just name.',
        ],
        ans: 'P–iii, Q–i, R–ii, S–iv.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Sequence ordering.</b> Arrange the male line in the correct order of formation: spermatid, primary spermatocyte, spermatozoon, spermatogonium, secondary spermatocyte.',
        steps: [
          '<b>Reasoning.</b> Walk the meiotic route. Spermatogonium (2<i>n</i>) → primary spermatocyte (2<i>n</i>) → secondary spermatocyte (<i>n</i>) → spermatid (<i>n</i>) → spermatozoon (<i>n</i>). The number of chromosomes halves between primary and secondary spermatocyte (meiosis I).',
        ],
        ans: 'Spermatogonium → Primary spermatocyte → Secondary spermatocyte → Spermatid → Spermatozoon.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b><br>• <b>Assertion (A):</b> Ovulation occurs around the middle of the menstrual cycle.<br>• <b>Reason (R):</b> A sharp rise in LH (the LH surge) ruptures the Graafian follicle.<br><b>Choose:</b> <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> Both are true. Ovulation is at ~day 14, mid-cycle; and the mechanism is precisely the LH surge causing the Graafian follicle to rupture, so R is the correct explanation of A. The trap (b) only fits if the two were unrelated, but here R is the direct cause.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-step reasoning.</b> A student claims: “One primary oocyte and one primary spermatocyte each complete meiosis, so each finally gives four functional gametes.” Identify every error and give the correct outcome for each.',
        steps: [
          '<b>Reasoning.</b> Compare the two lines carefully.',
          '• <b>Spermatocyte:</b> correct in number: one primary spermatocyte → four functional sperms (meiosis is symmetric here).',
          '• <b>Oocyte:</b> wrong. Meiosis in the female is unequal: one primary oocyte → one functional ovum + (up to three) non-functional polar bodies. Almost all cytoplasm is retained by the ovum.',
          '• <b>Timing error (often missed):</b> the oocyte’s meiosis is not even completed on schedule: meiosis I finishes only at the Graafian stage, and meiosis II only on fertilisation, whereas the spermatocyte completes both divisions in sequence.',
        ],
        ans: 'Male: 1 → 4 sperms (correct). Female: 1 → 1 ovum + polar bodies (not 4), with meiosis II delayed until a sperm enters.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the phase of the menstrual cycle in which the LH surge occurs and state its consequence.',
            a: 'Ovulatory phase (~day 14); the LH surge ruptures the Graafian follicle, releasing the oocyte.',
          },
          {
            q: '[CUET] Which cells does FSH act on in the male, and what does this promote?',
            a: 'Sertoli cells; promotes factors aiding spermiogenesis.',
          },
          {
            q: '[NEET] State the ploidy of: spermatogonium, secondary spermatocyte, primary oocyte, secondary oocyte.',
            a: '2<i>n</i>, <i>n</i>, 2<i>n</i>, <i>n</i> respectively.',
          },
          {
            q: '[NEET] Assertion: The first polar body is formed during oogenesis. Reason: Meiosis I in the primary oocyte is an equal division. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R false (meiosis I is unequal, which is why a tiny polar body forms) → “A true, R false.”',
          },
          {
            q: '[NEET high-difficulty] Explain why oogenesis is described as beginning before birth yet not finishing until possibly decades later.',
            a: 'Oogonia enter meiosis in the foetal ovary but arrest at prophase I as primary oocytes; meiosis I completes only at the Graafian stage after puberty, and meiosis II only at fertilisation, so the process spans from embryonic life to (potentially) adulthood.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The structure that secretes progesterone to maintain the endometrium during the luteal phase is the:',
        opts: [
          {
            label: 'Graafian follicle',
            nudge: '<b>(a)</b> is the pre-ovulation structure (it releases the egg, it doesn’t run the luteal phase).',
          },
          { label: 'corpus luteum', nudge: null },
          {
            label: 'anterior pituitary',
            nudge: '<b>(c)</b> makes pituitary hormones (FSH/LH), not progesterone.',
          },
          {
            label: 'granulosa cells of the primary follicle',
            nudge: '<b>(d)</b> granulosa cells of a growing follicle relate to oestrogen, not luteal progesterone.',
          },
        ],
        correct: 1,
        solution: 'After ovulation the ruptured Graafian follicle transforms into the corpus luteum, the progesterone source of the luteal phase.',
      },
      {
        t: 'mcq',
        q: 'During spermatogenesis, the chromosome number is first halved at the formation of the:',
        opts: [
          {
            label: 'primary spermatocyte',
            nudge: '<b>(a)</b> is still diploid (it has not yet divided meiotically).',
          },
          { label: 'secondary spermatocyte', nudge: null },
          {
            label: 'spermatid',
            nudge: '<b>(c)</b> and <b>(d)</b> are already haploid but come after the halving, a student who picks them confuses “is haploid” with “where it first became haploid.”',
          },
          {
            label: 'spermatozoon',
            nudge: '<b>(c)</b> and <b>(d)</b> are already haploid but come after the halving, a student who picks them confuses “is haploid” with “where it first became haploid.”',
          },
        ],
        correct: 1,
        solution: 'Meiosis I converts the diploid primary spermatocyte into the haploid secondary spermatocyte: that is where 46 becomes 23.',
      },
      {
        t: 'mcq',
        q: 'In oogenesis, compared with spermatogenesis, the first meiotic division is:',
        opts: [
          { label: 'symmetric, giving four equal cells', nudge: '<b>(a)</b> describes the male pattern.' },
          { label: 'unequal, conserving cytoplasm in one cell', nudge: null },
          { label: 'mitotic, not meiotic', nudge: '<b>(c)</b> ignores that oogenesis is meiotic.' },
          { label: 'absent altogether', nudge: '<b>(d)</b> is simply false: division does occur, just unequally.' },
        ],
        correct: 1,
        solution:
          'The unequal division keeps nearly all cytoplasm in the secondary oocyte and discards the rest as a polar body, the opposite of the symmetric four-sperm output.',
      },
      {
        t: 'mcq',
        q: 'Which sequence correctly orders follicle development?',
        opts: [
          { label: 'Primary → Graafian → secondary → tertiary', nudge: '<b>(a)</b> puts the Graafian follicle second; it is the last and fully mature stage.' },
          { label: 'Secondary → primary → tertiary → Graafian', nudge: '<b>(b)</b> starts with the secondary follicle; the primary follicle (one layer of granulosa cells) comes first.' },
          { label: 'Primary → secondary → tertiary → Graafian', nudge: null },
          { label: 'Tertiary → secondary → primary → Graafian', nudge: '<b>(d)</b> runs the build-up backwards and puts the primary follicle last.' },
        ],
        correct: 2,
        solution:
          'Granulosa layers and then a theca build up (primary → secondary), an antrum appears (tertiary), and final maturation gives the Graafian follicle. <b>Why the traps work:</b> every distractor scrambles the build-up order; the key memory hook is that complexity increases monotonically toward the Graafian stage, and the antral (tertiary) stage precedes it.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Spermatogenesis vs spermiogenesis.</b> Spermatogenesis = the whole process (including meiosis). Spermiogenesis = only the final reshaping of spermatids into sperms. The “-io-” is the shape-change step.',
          '<b>Secondary oocyte vs ovum.</b> What is released at ovulation is a secondary oocyte (NCERT’s cycle text calls it the ovum): meiosis II completes only if a sperm enters.',
          '<b>Where the chromosome number halves.</b> It halves at meiosis I (primary → secondary spermatocyte / primary oocyte → secondary oocyte), not at meiosis II. Many students wrongly mark the spermatid stage.',
          '<b>Hormone source mix-ups.</b> Oestrogen ← growing follicle; progesterone ← corpus luteum; androgens ← Leydig; FSH/LH ← pituitary; GnRH ← hypothalamus. Lose the source and you lose the question.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any gametogenesis question, jot the chromosome ladder first: 46 → 46 → 23 → 23. The single drop sits between the primary and secondary cell: anchor everything to that one transition. For cycle questions, remember the hormone hand-off: FSH/oestrogen build up → LH surge releases → progesterone holds. Two short mantras clear most of this section.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Gametogenesis yields are opposite',
            note: '1 primary spermatocyte → 4 sperms; 1 primary oocyte → 1 ovum + polar bodies.',
          },
          {
            f: 'Chromosome ladder (both sexes)',
            note: '2<i>n</i> → 2<i>n</i> → <i>n</i> → <i>n</i>. The halving is at meiosis I.',
          },
          {
            f: 'Spermatogenesis order',
            note: 'spermatogonium → primary → secondary spermatocyte → spermatid → (spermiogenesis) → spermatozoon → (spermiation).',
          },
          {
            f: 'Oogenesis timing',
            note: 'starts in the foetus (arrest at prophase I); meiosis I completes at the Graafian stage; meiosis II only at fertilisation.',
          },
          {
            f: 'Follicle build-up',
            note: 'primary → secondary → tertiary (antrum) → Graafian → ovulation (LH surge).',
          },
          {
            f: 'Menstrual cycle (4 phases)',
            note: 'Menstrual (days 1–5, flow about 3–5 d, ↓progesterone) · Follicular (d 6–13, FSH/LH↑, oestrogen) · Ovulatory (~day 14, LH surge) · Luteal (~14 d, corpus luteum → progesterone).',
          },
          {
            f: 'Hormone sources mnemonic',
            note: '“Hypothalamus Pings Pituitary, Ovary Plays Back”: GnRH (hypothalamus) → FSH/LH (pituitary) → oestrogen/progesterone (ovary) → endometrium.',
          },
          {
            f: 'Lifespan markers',
            note: 'menarche (first period, puberty) → menopause (~50 yr).',
          },
        ],
        aids: [],
      },
    ],
  },
];
