import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 2, Human Reproduction: Topic 03 and Additional topics A and B, word for word
 * from the Class 12 Biology Master Reference (pp. 82–95).
 *
 * Topic 03 Fertilization, Pregnancy and Parturition, pp. 82–89 (Figure 2.7: caption p. 84, drawn
 * p. 85, set after the Implantation paragraph where the caption stands; Figure 2.8: caption p. 86,
 * drawn p. 87, set after the Parturition paragraph). The shared opening of "Additional Topics:
 * Human Reproduction" (p. 90, lines 2 to 9) heads Additional topic A's Introduction.
 * A Infertility and Assisted Reproductive Technologies, pp. 90–92 (its answers end at the top of
 * p. 92; Addendum B begins mid-page). B Sexually Transmitted Infections (STIs), pp. 92–95 (the
 * label "Key clinical features of the common STIs" stands at the foot of p. 92, its table is on
 * p. 93; the answers end at the top of p. 95, where Addendum C begins). Indexes 2, 3, 4.
 *
 * House rules: no em dashes (each is a colon, commas, a bracket, a line break or a full stop), no
 * fraction on one line, scientific names italic (Candida albicans, Neisseria gonorrhoeae, Treponema
 * pallidum, Chlamydia trachomatis, Trichomonas vaginalis), italics dropped on emphasis words. Options
 * (a) to (d) as printed. "This subtopic" is "This topic", "Addendum P" is "Additional topic F".
 * New wording of ours: the label "(the book’s estimate from past papers, not official figures)" in
 * Topic 03's Exam Relevance, and the standard four options on the three assertion-reason practice
 * items that print none (Topic 03 practice 4, A practice 4, B practice 4).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 82–89 ─────────────────────────
  {
    n: '03',
    title: 'Fertilization, Pregnancy and Parturition',
    kalam: 'This topic follows a single dramatic storyline: how two haploid cells become a newborn baby.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield closing arc of the chapter. <b>CBSE Boards</b> ask the early-development sequence, placenta functions, and parturition mechanism (2–5 marks). <b>NEET</b> often asks the morula-vs-blastocyst distinction, the pregnancy hormones (hCG/hPL/relaxin), germ-layer derivatives, and assertion–reason on the oxytocin feedback loop. <b>CUET</b> tests definitions and the development timeline. The whole arc, fusion to birth, is a common source of sequence-ordering questions. (All frequency and mark statements in this box are the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'This topic follows a single dramatic storyline: how two haploid cells become a newborn baby. There are four acts: <b>fertilisation</b> (the meeting), <b>early development and implantation</b> (a travelling, dividing ball of cells settles in), <b>pregnancy</b> (the placenta-supported growth of the embryo), and <b>parturition</b> (birth), with <b>lactation</b> as the epilogue.',
      },
      {
        t: 'p',
        html: 'It opens in the <b>oviduct</b>, not the uterus. A sperm meets the secondary oocyte at the <b>ampullary-isthmic junction</b> of the Fallopian tube; their fusion (<b>syngamy</b>) restores the diploid number and creates the <b>zygote</b>. From this single cell, a beautifully economical thing happens: it divides again and again without growing, so the cluster (the <b>morula</b>) is no bigger than the original zygote, just made of more, smaller cells. Only later, once it has implanted and tapped into the mother’s blood supply, does true growth begin.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a passenger boarding a long-distance train in the oviduct, headed for the uterus. During the journey the passenger keeps subdividing their luggage into more and smaller bags (cleavage) without buying anything new, total mass unchanged. Only on arrival at the station (the uterus) does the traveller plug into the mains (implantation, then the placenta) and start consuming resources to grow. The placenta is the mains connection: the bridge through which the foetus draws oxygen and food and sends back waste.',
      },
      {
        t: 'p',
        html: 'The <b>placenta</b> is the hero of pregnancy: an interlocking of foetal <b>chorionic villi</b> with maternal uterine tissue that serves as the supply-and-disposal hub and doubles as an endocrine gland, pumping out the hormones that sustain the pregnancy. At the end, <b>parturition</b> (birth) is triggered not by a simple switch but by a self-amplifying loop: the fully developed foetus and placenta send signals that start mild contractions, which trigger <b>oxytocin</b>, which causes stronger contractions, which trigger more oxytocin: a runaway positive feedback that ends only with delivery.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Every timing here (gestation ≈ 9 months, trimester milestones) is a typical average, not a guarantee. In the body, fertilisation occurs only in the female tract (in vitro fertilisation, in a dish, is the laboratory exception), and only in a short window around ovulation. And note the deliberate paradox of <b>cleavage</b>: divisions increase cell number while total size stays roughly constant: students who expect the morula to be “bigger” because it has “more cells” walk into the classic trap.',
      },

      { t: 'part', title: 'Key definitions, stages and hormones' },
      { t: 'p', html: '(Biology fork: descriptive; no SI base units / dimensional analysis.)' },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'Fertilisation (syngamy)',
        html: 'fusion of a sperm with the secondary oocyte, forming the diploid <b>zygote</b>; occurs at the <b>ampullary-isthmic junction</b>.',
      },
      {
        t: 'def',
        term: 'Cleavage',
        html: 'rapid mitotic divisions of the zygote without increase in overall size, as it moves down the oviduct.',
      },
      {
        t: 'def',
        term: 'Morula',
        html: 'solid ball of blastomeres formed by cleavage; not larger than the zygote.',
      },
      {
        t: 'def',
        term: 'Blastocyst (formed by blastulation)',
        html: 'the morula transforms into a hollow structure with an outer <b>trophoblast</b> and an inner group of cells, the <b>inner cell mass (ICM)</b>.',
      },
      {
        t: 'def',
        term: 'Implantation',
        html: 'the blastocyst becoming embedded in the <b>endometrium</b>; it leads to <b>pregnancy</b> (conception to birth).',
      },
      {
        t: 'def',
        term: 'Placenta',
        html: 'the structural-functional unit between foetus and mother, formed where <b>chorionic villi</b> interdigitate with uterine tissue.',
      },
      {
        t: 'def',
        term: 'Gestation period',
        html: 'the time the embryo spends in the uterus; about <b>9 months</b> in humans.',
      },
      {
        t: 'def',
        term: 'Parturition',
        html: 'the delivery of the foetus (childbirth), induced by a neuroendocrine mechanism.',
      },
      {
        t: 'def',
        term: 'Lactation',
        html: 'secretion of milk by the mammary glands after birth; the first secretion is <b>colostrum</b>.',
      },
      {
        t: 'table',
        title: 'Hormones of pregnancy & birth',
        head: ['Hormone', 'Source', 'Role'],
        rows: [
          ['hCG (human Chorionic Gonadotropin)', 'Placenta', 'Maintains the corpus luteum; basis of pregnancy tests'],
          ['hPL (human Placental Lactogen)', 'Placenta', 'Adjusts the mother’s metabolism to supply the foetus; helps prepare the breasts'],
          ['Oestrogen & progestogens', 'Placenta', 'Maintain pregnancy and the endometrium'],
          ['Relaxin', 'Ovary (later pregnancy)', 'Relaxes the pelvic ligaments for birth'],
          ['Oxytocin', 'Maternal posterior pituitary', 'Drives uterine contractions at parturition (positive feedback)'],
        ],
      },
      { t: 'p', html: '(NCERT: hCG, hPL and relaxin are produced in women only during pregnancy. Strictly, hCG is also made by some rare tumours, and the corpus luteum makes a little relaxin in the luteal phase of an ordinary cycle.)' },

      { t: 'part', title: 'Key processes and sequences' },
      { t: 'p', html: '<b>Fertilisation (the meeting)</b>' },
      {
        t: 'p',
        html: 'A sperm reaches the secondary oocyte at the <b>ampullary-isthmic junction</b>. (The whole arc begins with <b>insemination</b>: the transfer of semen into the vagina during coitus; the ejaculated sperms then swim up through the cervix and uterus into the oviduct.) Before it can fertilise, the sperm must spend time in the female tract undergoing <b>capacitation</b>: a set of final functional changes that give it the ability to penetrate the egg. The sperm binds to the <b>zona pellucida</b>, which triggers its <b>acrosome</b> to release hydrolytic enzymes; these let it penetrate the zona pellucida. Contact of the sperm with the oocyte then induces changes in the oocyte’s membrane (the <b>cortical and zona reactions</b>) that block the entry of further sperms, ensuring <b>monospermy</b>. The sperm’s entry stimulates the secondary oocyte to complete its arrested <b>meiosis II</b>, releasing the <b>second polar body</b> and forming the ovum; the male and female pronuclei then fuse (<b>syngamy</b>) to form the diploid <b>zygote</b>. Because the sperm carries either an X or a Y, it is the <b>sperm that determines the sex</b> of the offspring.',
      },
      { t: 'p', html: '<b>Cleavage and early development (the journey)</b>' },
      {
        t: 'p',
        html: 'Zygote → [cleavage (mitosis, no growth)] → Morula → [blastulation] → Blastocyst (trophoblast + inner cell mass)',
      },
      {
        t: 'p',
        html: 'The zygote undergoes cleavage as it travels toward the uterus, becoming a solid ball of <b>8–16 cells</b>, the <b>morula</b>, that is not larger than the zygote. Continued division and the appearance of a fluid-filled internal cavity convert it into the <b>blastocyst</b>: an outer <b>trophoblast</b> layer enclosing the cavity, with an <b>inner cell mass</b> attached to one side. The trophoblast attaches to the endometrium, and the inner cell mass goes on to form the embryo.',
      },
      {
        t: 'p',
        html: '<b>A note on twins.</b> This early stage also explains twinning. <b>Identical (monozygotic) twins</b> arise when a single fertilised egg (one zygote) splits into two embryos: they are genetically identical and the same sex. <b>Fraternal (non-identical / dizygotic) twins</b> arise when two eggs are released and fertilised by two separate sperms: they are no more alike than ordinary siblings and may be of different sexes. So identical twins trace to one ovum and one sperm; fraternal twins to two ova and two sperms.',
      },
      { t: 'p', html: '<b>Implantation</b>' },
      {
        t: 'p',
        html: 'After attachment, the uterine cells divide rapidly and grow over the blastocyst until it becomes <b>embedded in the endometrium</b>: this is <b>implantation</b>, and it marks the start of <b>pregnancy</b>. As development proceeds, the embryo comes to lie within a fluid-filled sac, the <b>amnion</b>; the <b>amniotic fluid</b> cushions the foetus against mechanical shocks and allows it to move freely.',
      },
      { t: 'fig', id: 'b12-02-fig-2.7' },
      { t: 'p', html: '<b>The placenta (the life-support bridge)</b>' },
      {
        t: 'p',
        html: 'After implantation, finger-like <b>chorionic villi</b> from the embryo interdigitate with the uterine tissue to form the <b>placenta</b>: a joint foetal–maternal organ. Its roles:<br>• supplies <b>oxygen and nutrients</b> to the embryo;<br>• removes <b>carbon dioxide and waste</b> from the foetus;<br>• connects to the embryo via the <b>umbilical cord</b> for two-way transport;<br>• acts as an <b>endocrine tissue,</b> producing <b>hCG, hPL, oestrogen and progestogens</b>; <b>relaxin</b> is secreted by the <b>ovary</b> in late pregnancy.',
      },
      {
        t: 'p',
        html: 'In early pregnancy, the placental <b>hCG</b> keeps the <b>corpus luteum</b> alive and secreting progesterone, which sustains the endometrium; once the placenta itself matures enough to make sufficient progesterone, it takes over this role.',
      },
      { t: 'p', html: '<b>Embryonic development (the building)</b>' },
      {
        t: 'p',
        html: 'After implantation, the inner cell mass differentiates into <b>three germ layers</b>: <b>ectoderm</b> (outer), <b>endoderm</b> (inner) and <b>mesoderm</b> (between them), whose stem cells give rise to all adult tissues.',
      },
      {
        t: 'table',
        title: null,
        head: ['Germ layer', 'Gives rise to (examples)'],
        rows: [
          ['<b>Ectoderm</b>', 'Epidermis; hair, nails, sweat glands; brain & spinal cord; nerves; retina/lens/cornea; enamel of teeth'],
          ['<b>Mesoderm</b>', 'Dermis; skeletal, cardiac and most smooth muscle; cartilage, bone, blood; blood vessels; connective tissues; reproductive organs & kidneys'],
          ['<b>Endoderm</b>', 'Lining of digestive & respiratory systems; urinary bladder; liver & pancreas; thyroid, parathyroid, thymus'],
        ],
      },
      {
        t: 'p',
        html: '<b>Foetal timeline, by trimester.</b> Development is conventionally divided into three roughly three-month <b>trimesters</b>. In the <b>first trimester</b> the embryo changes fastest: the <b>foetal heart forms after about one month</b> (the heartbeat is the first sign of a growing foetus; NCERT says it may be noticed by listening carefully to the heart sound through a stethoscope, though in practice an ultrasound picks it up first, from about six weeks), <b>limbs and digits</b> appear by the end of the second month, and <b>most major organ systems</b> are laid down by about 12 weeks. In the <b>second trimester</b> the body becomes covered with fine hair, the <b>eyelids separate and eyelashes form</b> by about 24 weeks, and the <b>first foetal movements</b> are felt around the fifth month. By the end of the <b>third trimester</b>, roughly nine months in all, the foetus is fully developed and ready for delivery.',
      },
      { t: 'p', html: '<b>Parturition (birth)</b>' },
      {
        t: 'p',
        html: 'Birth is driven by a self-amplifying neuroendocrine loop. Signals from the <b>fully developed foetus and the placenta</b> induce mild uterine contractions: the <b>foetal-ejection reflex</b>. This triggers release of <b>oxytocin</b> from the <b>maternal pituitary</b>, which strengthens uterine contractions, which in turn stimulate more oxytocin: a <b>positive feedback</b> cascade that builds until the foetus is expelled.',
      },
      { t: 'fig', id: 'b12-02-fig-2.8' },
      { t: 'p', html: '<b>Lactation</b>' },
      {
        t: 'p',
        html: 'After birth, the mammary glands secrete milk (<b>lactation</b>), under the influence of <b>prolactin</b> from the pituitary (milk production) and <b>oxytocin</b> (milk ejection during suckling). The very first secretion, over the initial few days, is <b>colostrum</b>: a yellowish fluid rich in antibodies (especially <b>IgA</b>) that confers <b>passive immunity</b> on the newborn. It is gradually replaced by mature milk as feeding continues. This is precisely why early breastfeeding is so strongly recommended: colostrum gives the infant a ready-made first line of immune defence before its own immune system matures.',
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: '(Biology fork: assertion–reason, match-column, sequence-ID, MCQ-reasoning. All original.)' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Match the column.</b><br>Column I | Column II<br>(P) Trophoblast | (i) Forms the embryo proper<br>(Q) Inner cell mass | (ii) Outer layer of the blastocyst; attaches to endometrium<br>(R) hCG | (iii) Drives uterine contractions at birth<br>(S) Oxytocin | (iv) Placental hormone; basis of pregnancy tests',
        steps: [
          '<b>Reasoning.</b> The trophoblast is the outer blastocyst layer that attaches to the endometrium → (ii). The inner cell mass forms the embryo → (i). hCG is the placental hormone detected in pregnancy tests → (iv). Oxytocin drives parturition contractions → (iii).',
        ],
        ans: 'P–ii, Q–i, R–iv, S–iii.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Sequence ordering.</b> Arrange in correct developmental order: blastocyst, zygote, implantation, morula, cleavage.',
        steps: [
          '<b>Reasoning.</b> Fertilisation gives the <b>zygote</b>, which undergoes <b>cleavage</b> to form the <b>morula</b>, which becomes the <b>blastocyst</b>, which then undergoes <b>implantation</b>.',
        ],
        ans: 'Zygote → Cleavage → Morula → Blastocyst → Implantation.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b><br>• <b>Assertion (A):</b> The morula is not larger than the zygote despite having many cells.<br>• <b>Reason (R):</b> Cleavage involves rapid mitotic divisions without an increase in overall size.<br>Choose: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> Both are true, and R is exactly why A holds: cleavage subdivides the existing cytoplasm into more, smaller cells without growth, so total size stays roughly constant.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-step reasoning.</b> A pregnancy-test strip detects hCG in urine. Explain, step by step, (i) where hCG comes from, (ii) why its presence specifically indicates pregnancy, and (iii) one reason a very early test might give a false negative.',
        steps: [
          '<b>Reasoning. (i)</b> hCG is secreted by the <b>placenta</b> (specifically the trophoblast-derived tissue), and it is produced <b>essentially only in pregnancy</b> (apart from rare tumours). <b>(ii)</b> Because hCG appears essentially only when an implanted, placenta-forming pregnancy exists, its presence in the urine of a healthy woman is a specific marker; healthy non-pregnant women do not produce it. (iii) Very early after conception, the placenta is just forming and hCG levels may be <b>below the strip’s detection threshold</b>, so the test can read negative even though conception has occurred (testing too early).',
        ],
        ans: 'Placental origin; production essentially specific to pregnancy; false negative from sub-threshold hCG if tested too early.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the two cell groups of the blastocyst and state the fate of each.',
            a: '<b>Trophoblast</b> (outer; attaches to endometrium, contributes to placenta) and <b>inner cell mass</b> (forms the embryo).',
          },
          {
            q: '[CUET] Where in the female tract does fertilisation normally occur?',
            a: 'The <b>ampullary-isthmic junction</b> of the Fallopian tube.',
          },
          {
            q: '[NEET] From which germ layer do each of these arise: (i) brain, (ii) bone, (iii) lining of the digestive system?',
            a: '(i) <b>ectoderm</b>, (ii) <b>mesoderm</b>, (iii) <b>endoderm</b>.',
          },
          {
            q: '[NEET] Assertion: Oxytocin release during birth is an example of positive feedback. Reason: Uterine contractions stimulate oxytocin, which stimulates further contractions. Evaluate A, R and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A <b>true</b>, R <b>true</b>, and R <b>explains</b> A (self-amplifying loop) → option (a).',
          },
          {
            q: '[NEET high-difficulty] Explain why the placenta is described as both a “bridge” and an “endocrine gland,” giving one example of each role.',
            a: 'Bridge: transfers O<sub>2</sub>/nutrients to and CO<sub>2</sub>/waste from the foetus via the umbilical cord. Endocrine gland: secretes hCG/hPL/oestrogen/progestogens to sustain pregnancy.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The hormone whose presence in a woman’s urine forms the basis of common pregnancy tests is:',
        opts: [
          { label: 'oxytocin', nudge: '<b>(a)</b> oxytocin acts at birth, not as a pregnancy marker.' },
          { label: 'hCG', nudge: null },
          { label: 'relaxin', nudge: '<b>(c)</b> relaxin is real in pregnancy but is not the test basis and comes from the ovary.' },
          { label: 'FSH', nudge: '<b>(d)</b> FSH is a normal non-pregnancy pituitary hormone, present in all cycling women.' },
        ],
        correct: 1,
        solution: 'hCG is produced by the placenta in pregnancy (apart from rare tumours), making it a specific urine marker.',
      },
      {
        t: 'mcq',
        q: 'During cleavage, as the zygote becomes a morula, the overall size:',
        opts: [
          { label: 'increases steadily', nudge: '<b>(a)</b> and <b>(c)</b> assume “more cells = bigger,” the classic error.' },
          { label: 'stays roughly the same', nudge: null },
          { label: 'doubles with each division', nudge: '<b>(a)</b> and <b>(c)</b> assume “more cells = bigger,” the classic error.' },
          { label: 'decreases to half', nudge: '<b>(d)</b> wrongly imagines the mass shrinking.' },
        ],
        correct: 1,
        solution: 'Cleavage divides the cytoplasm into more, smaller cells without growth, so total size is roughly unchanged.',
      },
      {
        t: 'mcq',
        q: 'The three primary germ layers and the correct identification of the layer forming muscles are:',
        opts: [
          { label: 'ectoderm, mesoderm, endoderm: muscles from ectoderm', nudge: '<b>(a)</b> and <b>(b)</b> misassign muscles to the wrong layer.' },
          { label: 'ectoderm, mesoderm, endoderm: muscles from endoderm', nudge: '<b>(a)</b> and <b>(b)</b> misassign muscles to the wrong layer.' },
          { label: 'ectoderm, mesoderm, endoderm: muscles from mesoderm', nudge: null },
          { label: 'only ectoderm and endoderm: muscles from ectoderm', nudge: '<b>(d)</b> wrongly drops the mesoderm entirely, yet mesoderm is precisely the muscle-forming layer.' },
        ],
        correct: 2,
        solution: 'All three germ layers exist, and <b>mesoderm</b> forms nearly all of the body’s muscles.',
      },
      {
        t: 'mcq',
        q: 'Parturition is best described as being controlled by:',
        opts: [
          { label: 'a simple on/off hormonal switch', nudge: '<b>(a)</b> oversimplifies a self-amplifying cascade.' },
          { label: 'negative feedback that reduces contractions', nudge: '<b>(b)</b> reverses the direction: feedback here amplifies, not reduces.' },
          { label: 'positive feedback involving oxytocin', nudge: null },
          { label: 'the menstrual cycle hormones', nudge: '<b>(d)</b> confuses birth with the (separate) menstrual cycle.' },
        ],
        correct: 2,
        solution: 'The foetal-ejection reflex → oxytocin → stronger contractions → more oxytocin is a positive-feedback loop.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Morula is not bigger than the zygote.</b> Cleavage adds cells, not size. Remember: “more bags, same luggage.”',
          '<b>Trophoblast vs inner cell mass.</b> Trophoblast = outer, attaches to endometrium (→ placenta side). Inner cell mass = inner, becomes the embryo. Don’t swap their fates.',
          '<b>Where fertilisation happens.</b> It is the <b>ampullary-isthmic junction</b> of the oviduct, not the uterus. The uterus is where implantation occurs.',
          '<b>Germ-layer derivatives get mixed up.</b> Anchor three: nervous system & epidermis = <b>ectoderm</b>; muscles, bone, blood = <b>mesoderm</b>; gut & respiratory lining, liver = <b>endoderm</b>.',
          '<b>Parturition is positive feedback.</b> Oxytocin amplifies contractions: one of the few textbook examples of positive (not negative) feedback in human physiology.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Carry two mantras. Development order: <b>“Zygote, Cleave, Morula, Blast, Implant”</b>: five beats, in order. Germ layers: <b>“Ecto = covering + nerves, Meso = movement + skeleton + blood, Endo = inner linings + gut glands.”</b> Most sequence and derivative questions fall instantly to these.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Development sequence:</b> Zygote → Cleavage (no growth) → <b>Morula</b> (not bigger than zygote) → <b>Blastocyst</b> (trophoblast + inner cell mass) → <b>Implantation</b> → pregnancy.', note: '' },
          { f: '<b>Fertilisation site:</b> ampullary-isthmic junction; sperm completes the oocyte’s <b>meiosis II</b>; <b>sperm determines sex</b>.', note: '' },
          { f: '<b>Placenta = bridge + gland:</b> O<sub>2</sub>/nutrients in, CO<sub>2</sub>/waste out (via umbilical cord); secretes <b>hCG, hPL, oestrogen, progestogens</b>; <b>relaxin</b> from ovary (late pregnancy). hCG/hPL = placenta in pregnancy (hCG also from rare tumours).', note: '' },
          { f: '<b>Germ layers:</b> Ectoderm (skin, nerves, sense organs) · Mesoderm (most muscle, bone, blood, kidneys) · Endoderm (gut & lung lining, liver, pancreas).', note: '' },
          { f: '<b>Gestation ≈ 9 months;</b> heart ~1 month, limbs/digits ~2 months, major organs ~12 weeks.', note: '' },
          { f: '<b>Parturition:</b> foetal-ejection reflex → <b>oxytocin</b> (maternal pituitary) → stronger contractions → more oxytocin (<b>positive feedback</b>) → delivery.', note: '' },
          { f: '<b>Lactation:</b> first milk = <b>colostrum</b>, antibody-rich (IgA) → passive immunity for the newborn.', note: '' },
        ],
        aids: [
          '<b>Mnemonic (hormones of pregnancy):</b> “CHaPLeR”: hCG, hPL, Relaxin, the hormones NCERT gives as produced only in pregnancy (relaxin also comes from the ovary).',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 90–92 ─────────────────────────
  {
    n: 'A',
    title: 'Infertility and Assisted Reproductive Technologies',
    extra: true,
    kalam: 'When natural conception fails, assisted reproductive technologies (ART) can help.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section adds five examinable topics that sit alongside Chapter 2: assisted reproductive technologies (ART) and their indications; sexually transmitted infections and their causative organisms; contraceptive methods and how each works; the sequence of sperm capacitation and the acrosome reaction; and hormonal feedback across the menstrual cycle with its clinical applications. Each topic has a method summary, worked examples, and practice questions with full answers. A final part, Additional topic F, shows what NEET actually asks from this chapter.',
      },
      {
        t: 'p',
        html: 'When natural conception fails, assisted reproductive technologies (ART) can help. NEET and CUET ask (the book’s estimate from past papers, not official figures) for the full names, procedural steps, and clinical indications of four ART methods (IVF, GIFT, ZIFT, and ICSI), as well as the landmark of the first successful human IVF birth.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>IVF (In Vitro Fertilisation):</b> Ova are collected from the ovary (after hormonal stimulation), fertilised with sperm outside the body in a culture dish, and the resulting embryo is transferred into the uterus. Indicated when natural fertilisation is not possible, for example when the Fallopian tubes are blocked; for a severe male factor ICSI is used.',
      },
      {
        t: 'p',
        html: '<b>GIFT (Gamete Intra-Fallopian Transfer):</b> Eggs and sperm are collected and placed together in a healthy Fallopian tube, so that fertilisation occurs inside the body. In NCERT’s account the ovum comes from a donor, for a woman who cannot produce ova but can provide a suitable environment for fertilisation and development. A working tube is needed.',
      },
      {
        t: 'p',
        html: '<b>ZIFT (Zygote Intra-Fallopian Transfer):</b> The zygote or early embryo (up to 8 blastomeres), formed by IVF, is transferred into the Fallopian tube; an embryo with more than 8 blastomeres is transferred into the uterus instead (IUT). ZIFT requires functional Fallopian tubes, because the tube must carry the embryo on to the uterus.',
      },
      {
        t: 'p',
        html: '<b>ICSI (Intra-Cytoplasmic Sperm Injection):</b> A single sperm is injected directly into the cytoplasm of the ovum under a microscope. Used for severe male factor infertility where sperm count, motility, or morphology is grossly abnormal.',
      },
      {
        t: 'p',
        html: '<b>Key landmark:</b> Louise Brown, born in 1978 in England (Edwards and Steptoe), was the world’s first successfully delivered “test-tube baby” conceived by IVF.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Correct ART Procedure.</b> A couple has been diagnosed with complete tubal blockage in the female partner. The male partner has normal sperm parameters. Which ART technique is most appropriate and why?',
        steps: [
          'The blocked tubes prevent the sperm and egg from meeting in vivo. Since the female tubes are non-functional, GIFT (gamete placement in the tube) and ZIFT (zygote placement in the tube) are ruled out. IVF bypasses the tubes entirely by fertilising in a dish and transferring the embryo directly to the uterus. ICSI is unnecessary since male parameters are normal. The appropriate technique is IVF.',
        ],
        ans: 'IVF: it bypasses the blocked Fallopian tubes entirely.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match ART to Description.</b><br>Column I: (P) IVF, (Q) GIFT, (R) ZIFT, (S) ICSI<br>Column II: (i) Sperm injected directly into ooplasm, (ii) Fertilisation occurs in a culture dish, (iii) Gametes transferred to Fallopian tube, (iv) Zygote transferred to Fallopian tube.',
        steps: [
          '<b>Reasoning:</b> IVF involves fertilisation outside the body in a dish (ii). GIFT transfers unfertilised gametes directly to the tube (iii). ZIFT transfers a zygote to the tube (iv). ICSI is the direct injection of one sperm into the ooplasm (i).',
        ],
        ans: 'P–ii, Q–iii, R–iv, S–i.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Comparing ART Indications.</b> A couple presents with: female aged 38 with one healthy Fallopian tube; male with severe oligospermia (sperm count below 5 million/mL, a common cut-off for severe). The doctor recommends ICSI rather than GIFT. Justify this choice.',
        steps: [
          'GIFT requires that at least one healthy tube be present (satisfied here) and that the sperm parameters are adequate for natural fertilisation within the tube (not satisfied: severe oligospermia means too few sperm to compete for fertilisation). ICSI bypasses the need for sperm to penetrate the zona pellucida naturally by directly injecting one sperm into the ooplasm, overcoming the male factor infertility. Therefore ICSI is indicated over GIFT.',
        ],
        ans: 'Severe oligospermia prevents natural fertilisation even within the tube, so GIFT is inappropriate; ICSI directly injects a single sperm into the oocyte, bypassing the need for normal sperm count or motility.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the world’s first test-tube baby and the year she was born. What ART procedure was used?',
            a: 'Louise Brown, born 1978; IVF (in vitro fertilisation).',
          },
          {
            q: '[CUET] When is GIFT an appropriate choice instead of IVF? Name one prerequisite condition.',
            a: 'GIFT suits a woman with at least one healthy Fallopian tube when the sperm are adequate, for example a woman who cannot produce ova and receives a donor ovum (NCERT’s account); prerequisite: at least one functional tube.',
          },
          {
            q: '[NEET] Which ART technique would you recommend for a couple where the male has zero sperm count (azoospermia) but testicular biopsy shows normal spermatogenesis? Give one reason.',
            a: 'ICSI: a single sperm extracted from testicular tissue can be injected directly into the oocyte, bypassing the need for sperm transport through ducts.',
          },
          {
            q: '[NEET] Assertion: ZIFT requires functional Fallopian tubes. Reason: In ZIFT the zygote or early embryo (up to 8 blastomeres) is transferred into the Fallopian tube. Evaluate A, R and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, and R is the correct explanation: because the zygote or early embryo is placed in the Fallopian tube, the tube must be functional to carry it on to the uterus and support its early development.',
          },
          {
            q: '[CUET] State one advantage and one ethical concern associated with ART.',
            a: 'Advantage: helps couples with otherwise untreatable infertility conceive. Concern: raises issues of surrogate motherhood, sperm/egg donation ethics, and potential misuse for sex selection.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 92–95 ─────────────────────────
  {
    n: 'B',
    title: 'Sexually Transmitted Infections (STIs)',
    extra: true,
    kalam: 'Sexually transmitted infections (STIs) are mainly infections of the reproductive tract that spread through sexual contact (HIV and hepatitis B also spread by blood and needles).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sexually transmitted infections (STIs) are mainly infections of the reproductive tract that spread through sexual contact (HIV and hepatitis B also spread by blood and needles). The NCERT Class 12 Biology chapter on Reproductive Health names the common STIs, and a major consequence of several of them is infertility. The summary below is organised by pathogen type, for CUET matching questions and NEET assertion–reason pairs (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Classifying by pathogen (the exam pattern):</b>' },
      {
        t: 'p',
        html: '• <b>Bacterial STIs:</b> Gonorrhoea, Syphilis, Chlamydiasis<br>• <b>Viral STIs:</b> Genital herpes (herpes simplex virus), genital warts (human papillomavirus, HPV), HIV, Hepatitis B<br>• <b>Protozoan STI:</b> Trichomoniasis',
      },
      {
        t: 'p',
        html: 'Candidiasis (<i>Candida albicans</i>, a fungus) can also be sexually transmitted but is not in the NCERT list.',
      },
      {
        t: 'table',
        title: 'Key clinical features of the common STIs',
        head: ['Disease', 'Causative organism', 'Key symptom', 'Major consequence if untreated'],
        rows: [
          ['Gonorrhoea', '<i>Neisseria gonorrhoeae</i> (bacterium)', 'Purulent urethral/vaginal discharge', 'Pelvic inflammatory disease; infertility in both sexes'],
          ['Syphilis', '<i>Treponema pallidum</i> (spirochaete)', 'Painless chancre (primary); rash (secondary); organ damage (tertiary)', 'Cardiovascular and neural damage'],
          ['Chlamydiasis', '<i>Chlamydia trachomatis</i> (bacterium)', 'Often asymptomatic; mucopurulent discharge', 'Ectopic pregnancy; infertility'],
          ['Genital herpes', 'Herpes simplex virus (HSV-2, or HSV-1)', 'Painful vesicles/ulcers on genitals', 'Recurrent outbreaks; increased HIV susceptibility'],
          ['Genital warts', 'Human papillomavirus (HPV)', 'Painless warts on the genitals', 'Some HPV types are linked to cervical cancer'],
          ['HIV/AIDS', 'Human Immunodeficiency Virus (retrovirus)', 'Fever, weight loss, lymphadenopathy; AIDS phase: opportunistic infections', 'Fatal if untreated'],
          ['Trichomoniasis', '<i>Trichomonas vaginalis</i> (protozoan)', 'Frothy vaginal discharge; itching', 'Associated with preterm delivery'],
          ['Hepatitis B', 'Hepatitis B virus (DNA virus)', 'Jaundice; liver inflammation', 'Chronic hepatitis; liver cirrhosis; transmitted sexually and parenterally'],
        ],
      },
      {
        t: 'p',
        html: '<b>Detection marker:</b> Hepatitis B surface antigen (HBsAg) in blood indicates hepatitis B infection (acute or chronic).',
      },
      {
        t: 'p',
        html: '<b>Prevention principles:</b> Avoid sex with unknown or multiple partners; use condoms (they lower the risk but do not remove it); screening of donated blood; use of disposable needles and sterilised surgical instruments; vaccination against Hepatitis B (HBV vaccine).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Classifying STIs by Pathogen.</b><br>Column I (Disease): (P) Gonorrhoea, (Q) Genital herpes, (R) Trichomoniasis, (S) Syphilis<br>Column II: (i) Virus, (ii) Protozoan, (iii) Spirochaete (spiral bacterium), (iv) Diplococcus (spherical bacterium).',
        steps: [
          '<b>Reasoning:</b> Gonorrhoea is caused by <i>Neisseria gonorrhoeae</i>, a spherical (diplococcal) bacterium → (iv). Genital herpes by the herpes simplex virus → (i). Trichomoniasis by <i>Trichomonas vaginalis</i> (protozoan) → (ii). Syphilis by <i>Treponema pallidum</i> (spirochaete) → (iii).',
        ],
        ans: 'P–iv, Q–i, R–ii, S–iii.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Causative Organism.</b> A patient presents with a painless ulcer on the genitals followed weeks later by a body-wide rash. The causative organism is a spirochaete visible under dark-field microscopy. Name the disease and the organism.',
        steps: [
          'The painless chancre followed by secondary rash is the classic progression of syphilis, caused by <i>Treponema pallidum</i>, a spirochaete bacterium.',
        ],
        ans: 'Syphilis; <i>Treponema pallidum</i>.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>STI and Infertility Link.</b> Chlamydial infection is often called a “silent infection” because it frequently shows no symptoms. Explain how this asymptomatism can lead to infertility, even though the pathogen itself does not kill the host.',
        steps: [
          '<i>Chlamydia trachomatis</i> infects the columnar epithelium of the cervix and can ascend to the Fallopian tubes. Because it is often asymptomatic, it goes untreated. The immune response to the infection causes chronic inflammation and scarring of the tubal mucosa. This scarring can block the Fallopian tube (tubal factor infertility) or damage the cilia that sweep the ovum toward the uterus, preventing the ovum and sperm from meeting even when the tube is not completely blocked. Much of the damage comes from the immune response and scarring, as well as from the infection itself.',
        ],
        ans: 'Asymptomatic Chlamydia → ascending infection → tubal inflammation and scarring → tubal blockage or ciliary dysfunction → infertility.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name one bacterial STI and one viral STI, giving the causative organism for each.',
            a: 'Bacterial: Gonorrhoea (<i>Neisseria gonorrhoeae</i>) or Syphilis (<i>Treponema pallidum</i>) or Chlamydiasis (<i>Chlamydia trachomatis</i>). Viral: Genital herpes (herpes simplex virus), HIV, or Hepatitis B (HBV).',
          },
          {
            q: '[NEET] What is the detection marker for Hepatitis B infection found in blood? Name the virus family.',
            a: 'HBsAg (Hepatitis B surface antigen) indicates hepatitis B infection (acute or chronic); HBV is a DNA virus (family Hepadnaviridae).',
          },
          {
            q: '[CUET] Why is Chlamydiasis particularly dangerous even though it is often asymptomatic?',
            a: 'Asymptomatic infection ascends to the Fallopian tubes, causing inflammation and scarring that leads to infertility or ectopic pregnancy, all without the patient ever knowing they were infected.',
          },
          {
            q: '[NEET] Assertion: HIV is classified as a retrovirus. Reason: It contains reverse transcriptase that transcribes RNA into DNA. Evaluate A, R and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, and R is the correct biochemical explanation: reverse transcriptase (RNA → DNA) is the defining enzymatic feature of retroviruses.',
          },
          {
            q: '[CBSE] State two ways to prevent the transmission of STIs such as HIV and Hepatitis B through blood and instruments.',
            a: 'Screening of all donated blood for HIV and Hepatitis B; use of disposable needles and sterilised surgical instruments.',
          },
        ],
      },
    ],
  },
];
