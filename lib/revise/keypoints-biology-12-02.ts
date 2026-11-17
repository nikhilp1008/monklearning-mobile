/**
 * KEY POINTS for Biology Class 12, Chapter 2 (Human Reproduction).
 *
 * Written for test mode, in the form of the Biology 11 Chapter 14 file: every
 * point is a question to answer in your head, then the answer and at most one
 * more line. Four kinds, each a section on the screen: Remember (two a topic),
 * Don't mix up, Common mistakes and Exam shortcuts (one each, where the topic
 * has them); an Additional topic has two points for its central results,
 * except the last (What NEET Actually Asks), which has one Remember and one
 * Common mistakes. Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 03 are 0 to 2; Additional topics A to E are 3 to 7;
 * F (the book's What NEET Actually Asks) is 8. No point refers to another
 * topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. Topics 01 to 03
 * follow the chapter's form: Remember from the definitions, tables and
 * processes, Don't mix up and Common mistakes from the Common student
 * pitfalls, Exam shortcuts from the Pro-Tip. `say`: the cheat sheet's memory
 * aids, word for word, no quotation marks and no markup, the label turned into
 * the arrow form: Topic 01 prints one (PME), Topic 02 one (the hormone-source
 * line), Topic 03 one (CHaPLeR); the Additional topics have none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - the Exam Relevance lines ("one of the highest-weight units", "a reliable
 *   2-4 question zone", "almost always testing NCERT lines verbatim",
 *   "consistently high-yield") and the What NEET Actually Asks table ("High:
 *   recurs every year", "single largest node", "roughly half the chapter's
 *   NEET questions", the "Seen in NEET" cells) are not repeated; the F points
 *   say the distribution is the book's estimate from past papers and give no
 *   counts, shares or years;
 * - "the single most common error", "most frequent" and "you can never
 *   mis-assign its job" are not used; the Sertoli and Leydig point says the
 *   location rule is the quickest check;
 * - the Worked Example 4 clue "W receives several tiny tubes leaving the
 *   testis": the vasa efferentia are those tubes, so the points give the route
 *   (rete testis, vasa efferentia, epididymis, vas deferens, ejaculatory duct,
 *   urethra) and say the vasa efferentia are the third station and the vas
 *   deferens the fifth, not "opposite ends of the route"; "about 10-25
 *   tubules", "the ovary is not joined to the oviduct (a gap)" and the
 *   "always the next station, no branching" line are not used;
 * - oogenesis: the "two million" at birth is not given (the chapter's
 *   60,000 to 80,000 in each ovary at puberty is); the first meiotic division
 *   is said to be completed in the large follicle before ovulation (the
 *   tertiary follicle that becomes the Graafian follicle), where the book says
 *   "at the Graafian stage"; the number of ova ovulated is "a few hundred";
 * - the cycle is about 28 days (28 to 29 as the book prints it) with ovulation
 *   near day 14; the days are the chapter's (1 to 5, 6 to 13, about 14, 15 to
 *   28) and no fertile-window days other than the contraceptive row's are
 *   given; inhibin is given as the Sertoli (male) and granulosa (female) hormone that holds FSH down;
 * - fertilisation takes place in the oviduct, at the ampullary-isthmic
 *   junction (Topic 01's "the ampulla" is the wide part next to it); "only in
 *   the female tract" is not used (in vitro fertilisation is the exception);
 *   the order is binding to the zona, acrosomal enzymes, entry, then the
 *   change that blocks further sperm, and "zona/cortical reaction" is not
 *   used as one name; "immediately after implantation the inner cell mass
 *   forms three layers" is said as "after implantation";
 * - hCG, hPL and relaxin "only during pregnancy": hCG is made in pregnancy
 *   (apart from rare tumours) and relaxin rises in late pregnancy but the
 *   corpus luteum also makes it, so the points say so; the memory line CHaPLeR
 *   is the cheat sheet's corrected wording, word for word;
 * - germ layers: "all muscles" are mesoderm is said as most muscles (a few,
 *   such as the iris muscles, are ectodermal); the gut tube lining is
 *   endoderm; the heart heard "through a stethoscope" at one month is not
 *   used;
 * - GIFT: the book's "below the blockage site" contradicts "at least one
 *   healthy tube", so the point says GIFT puts the gametes into a working
 *   tube; IVF is for blocked tubes and ICSI for a severely low or poor sperm
 *   count, not "IVF for severe male factor"; the 5 million per mL line is not
 *   given; "the four main ART methods" is not repeated (the book's own other
 *   chapter lists more);
 * - STIs: infections "of the reproductive tract" with HIV and hepatitis B as
 *   exceptions (they also spread by blood); condoms lower the risk and do not
 *   remove it; genital herpes is given as the herpes simplex virus (HSV-2, or
 *   HSV-1); chlamydial damage is from inflammation and scarring;
 * - contraceptives: oestrogen makes the pill's suppression of the LH surge
 *   more reliable ("required" is not used); Mifepristone is not a
 *   contraceptive in the NCERT context; the mini-pill is given as low-dose, not
 *   "oestrogen required"; the emergency pill "mainly prevents ovulation" is the
 *   book's wording;
 * - capacitation and the acrosome reaction are detail beyond the NCERT text
 *   (the enzyme and ZP3 names are right); the "36 to 48 hours" of sustained
 *   oestrogen, "more GnRH receptors" and "never reaches this threshold" are not
 *   used; GnRH is not said to "surge", and FSH is given as low early in the
 *   cycle and peaking with LH around ovulation, since the book's table and its
 *   worked example differ on FSH;
 * - the six archetypes are given as the book's shapes of question, not as a
 *   count of how often each is asked.
 *
 * Markup is the chapter's own: <i> for the ploidy n and for scientific names,
 * <sub> and <sup>, no em dash, a range with an en dash, a ratio with the
 * book's ratio sign.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Male and Female Reproductive Systems ──
  // pp. 64–66
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the route of a sperm from where it is made to the outside, and what do the accessory glands add?',
    a: 'Seminiferous tubule, rete testis, vasa efferentia, epididymis (a long coiled tube along the back of the testis, where sperm are stored and matured), vas deferens, ejaculatory duct (formed where the vas deferens meets the duct of the seminal vesicle), urethra, urethral meatus. The urethra is a shared urino-genital passage for urine and semen. The seminal vesicles, prostate and bulbourethral glands make the seminal plasma, rich in fructose, calcium and enzymes, and semen is seminal plasma plus sperms. The testes lie in the scrotum, about 2–2.5 °C below body temperature, which sperm production needs',
    why: 'It is a one-way route with named stations in a fixed order, so a sequence question asks for the next station.',
    say: null,
  },
  // pp. 66–68, 73
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the route of the ovum from the ovary to the exterior, and what are the layers of the uterine wall?',
    a: 'After ovulation the ovum is collected by the fimbriae of the funnel-shaped infundibulum (the end of the oviduct nearest the ovary), then passes down the ampulla and the narrow isthmus into the uterus, then the cervix and the vagina; the cervix and vagina together are the birth canal. Fertilisation takes place in the oviduct. The uterine wall has three layers from outside in: perimetrium (thin outer membrane), myometrium (thick smooth muscle, which drives labour contractions) and endometrium (inner glandular lining, which changes across the cycle and receives the embryo)',
    why: 'Endo means inside, so the endometrium is the inner layer, the one that matters for the cycle and for implantation.',
    say: 'uterine wall → PME: Protects, Moves, Embeds (protective membrane, muscle that moves/contracts, lining that embeds the embryo).',
  },
  // pp. 65–66, 72
  {
    topic: 0,
    kind: 'mixup',
    q: 'Sertoli cells or Leydig cells: where does each sit and what does each do?',
    a: 'Place the cell first. Inside the seminiferous tubule lie the germ cells (spermatogonia) and the Sertoli cells, which nourish the developing germ cells (the nurse cells). Outside the tubule, in the spaces between tubules, lie the Leydig (interstitial) cells, which secrete androgens. A testis holds about 250 lobules, and each lobule holds 1–3 coiled seminiferous tubules. An option that gives androgens to the Sertoli cells, or nourishing to the Leydig cells, has the locations swapped',
    why: 'Location is the quickest check: inside the tubule is nourishing, outside it is androgens.',
    say: null,
  },
  // pp. 66, 72
  {
    topic: 0,
    kind: 'mistake',
    q: 'Vasa efferentia or vas deferens: which is which?',
    a: 'The vasa efferentia are the many short, fine tubes that leave the testis from the rete testis and join the epididymis; they are the third station of the route. The vas deferens is the single long muscular duct that runs from the epididymis, loops over the urinary bladder and joins the duct of the seminal vesicle to form the ejaculatory duct; it is the fifth station. They share a root but are different structures, and swapping them puts the stations in the wrong order',
    why: 'Many and short at the testis is efferentia; one and long on the way to the urethra is deferens.',
    say: null,
  },
  // pp. 68, 72–73
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you answer a sequence or labelling question on the ducts, and what do you do with the word ampulla?',
    a: 'Walk the route as one sentence. Male: tubule, rete testis, vasa efferentia, epididymis, vas deferens, ejaculatory duct, urethra. Female: ovary, fimbriae, infundibulum, ampulla, isthmus, uterus, cervix, vagina. Mammary gland: alveoli, mammary tubules, mammary ducts, ampulla, lactiferous duct. The word ampulla names a part of the oviduct, the widened end of the vas deferens and a widened part of the mammary duct, so read the context before answering',
    why: 'Once the route is automatic, the swaps of efferentia with deferens and of ampulla with isthmus stop working as traps.',
    say: null,
  },

  // ── Topic 02 · Gametogenesis & Menstrual Cycle ──
  // pp. 75–77
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the cell type, ploidy and yield at each step of spermatogenesis and oogenesis?',
    a: 'Male: spermatogonium 2<i>n</i> = 46, mitosis, primary spermatocyte 2<i>n</i>, meiosis I, two secondary spermatocytes <i>n</i> = 23 (still duplicated), meiosis II, four spermatids <i>n</i>, spermiogenesis, four spermatozoa. One primary spermatocyte gives four sperms. Female: oogonium 2<i>n</i>, primary oocyte 2<i>n</i>, arrested at prophase I from foetal life (60,000–80,000 per ovary at puberty), meiosis I (unequal) in the large follicle before ovulation, secondary oocyte <i>n</i> plus a first polar body, arrested at metaphase II and released at ovulation; meiosis II is completed at fertilisation, giving the ovum <i>n</i> plus a second polar body. One primary oocyte gives one ovum and polar bodies',
    why: 'The number falls from 46 to 23 once, at meiosis I, between the primary and the secondary cell.',
    say: null,
  },
  // pp. 75, 78–79
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the four phases of the menstrual cycle, and which hormone comes from where?',
    a: 'The cycle repeats about every 28 days (the book prints 28–29). Menstrual phase, days 1–5: falling progesterone, the endometrium breaks down. Follicular phase, days 6–13: the endometrium is rebuilt, rising FSH and LH drive follicle growth and oestrogen. Ovulatory phase, about day 14: the LH surge ruptures the Graafian follicle and releases the secondary oocyte. Luteal phase, about 14 days: the ruptured follicle becomes the corpus luteum, which secretes progesterone; without fertilisation it degenerates to the corpus albicans and progesterone falls. Sources: GnRH from the hypothalamus; FSH and LH from the anterior pituitary; oestrogen from the growing follicle; progesterone from the corpus luteum; androgens from the Leydig cells; inhibin from the Sertoli cells in the male and the granulosa cells in the female, holding FSH down. In the male, LH acts on the Leydig cells and FSH on the Sertoli cells',
    why: 'Pinning each hormone to its source is the game: name alone is not enough.',
    say: 'hormone sources → Hypothalamus Pings Pituitary, Ovary Plays Back: GnRH (hypothalamus) → FSH/LH (pituitary) → oestrogen/progesterone (ovary) → endometrium.',
  },
  // pp. 75, 81
  {
    topic: 1,
    kind: 'mixup',
    q: 'Spermatogenesis, spermiogenesis or spermiation?',
    a: 'Spermatogenesis is the whole formation of sperms from germ cells in the seminiferous tubules, meiosis included. Spermiogenesis is just the final reshaping of spermatids into spermatozoa, which gain a head, neck, middle piece and tail. Spermiation is the final release of mature sperms from the tubules. The head of the sperm carries the acrosome with its enzymes, and the middle piece carries the mitochondria for the tail',
    why: 'The io in spermiogenesis marks the shape-change step; the word without it is the whole process.',
    say: null,
  },
  // pp. 76, 81
  {
    topic: 1,
    kind: 'mistake',
    q: 'What is released at ovulation, and where does the chromosome number halve?',
    a: 'A secondary oocyte, arrested at metaphase II and surrounded by the zona pellucida (NCERT’s cycle text calls it the ovum). Meiosis II is completed, with the second polar body, only if a sperm enters. The number halves at meiosis I (primary to secondary spermatocyte, primary to secondary oocyte), not at meiosis II, so the spermatid is not where the number first falls',
    why: 'Treating the ovulated cell as a finished ovum, or marking the spermatid as the halving, are the two usual slips.',
    say: null,
  },
  // p. 81
  {
    topic: 1,
    kind: 'shortcut',
    q: 'What two anchors settle most gametogenesis and cycle questions?',
    a: 'First write the chromosome ladder, 46, 46, 23, 23: the one drop sits between the primary and the secondary cell, and the yield is four sperms against one ovum. For the cycle use the hormone hand-off: FSH and oestrogen build the follicle and the lining, the LH surge releases the oocyte, progesterone holds the lining',
    why: 'Anchor everything to the single drop from 46 to 23 and the stage questions follow.',
    say: null,
  },

  // ── Topic 03 · Fertilization, Pregnancy and Parturition ──
  // pp. 83–84
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the order from fertilisation to implantation, and where does each step happen?',
    a: 'A sperm meets the secondary oocyte at the ampullary-isthmic junction of the oviduct; the sperm has undergone capacitation in the female tract. Binding to the zona pellucida triggers its acrosome to release enzymes that let it penetrate the zona, and contact with the oocyte then induces changes in the oocyte membrane that block further sperm, so one sperm enters. Entry completes meiosis II (second polar body), and the pronuclei fuse (syngamy) to give the diploid zygote. The sperm, carrying X or Y, decides the sex. The zygote divides by cleavage (mitosis without growth) into the morula of 8–16 cells, no bigger than the zygote, then the blastocyst: an outer trophoblast and an inner cell mass. The trophoblast attaches to the endometrium and the blastocyst becomes embedded, which is implantation and the start of pregnancy',
    why: 'Fertilisation is in the oviduct and implantation is in the uterus, and the two places are the usual swap.',
    say: null,
  },
  // pp. 83–84, 89
  {
    topic: 2,
    kind: 'remember',
    q: 'What does the placenta do, and which hormones does it make?',
    a: 'The placenta forms where the chorionic villi of the embryo interdigitate with uterine tissue. It supplies oxygen and nutrients, removes carbon dioxide and waste through the umbilical cord, and acts as an endocrine tissue making hCG, hPL, oestrogen and progestogens. In early pregnancy hCG keeps the corpus luteum secreting progesterone until the placenta makes enough itself. hCG is made by the placenta in pregnancy (apart from rare tumours) and is the basis of pregnancy tests. Relaxin, which relaxes the pelvic ligaments, rises in late pregnancy and comes from the ovary; the corpus luteum can also make it in the luteal phase. Oxytocin comes from the maternal posterior pituitary',
    why: 'Bridge for supply and removal, gland for hormones: one example of each answers the usual question.',
    say: 'placental hormones → CHaPLeR: hCG, hPL, Relaxin are the hormones that rise in pregnancy (relaxin also from the corpus luteum).',
  },
  // pp. 83–84, 89
  {
    topic: 2,
    kind: 'mixup',
    q: 'Trophoblast or inner cell mass, and morula or blastocyst?',
    a: 'The morula is the solid ball of 8–16 cells; cleavage adds cells without adding size, so it is no larger than the zygote. The blastocyst is the hollow stage. Its outer trophoblast encloses the cavity, attaches to the endometrium and takes part in the placenta; its inner cell mass sits to one side and forms the embryo',
    why: 'Outer layer attaches and feeds, inner mass becomes the baby: do not swap their fates.',
    say: null,
  },
  // pp. 84–86, 89
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is birth set off by a simple switch or by negative feedback?',
    a: 'Neither: it is positive feedback. Signals from the fully developed foetus and the placenta cause mild contractions (the foetal-ejection reflex), which release oxytocin from the maternal posterior pituitary; oxytocin strengthens the contractions, which release more oxytocin, until the foetus is delivered. Prolactin is for milk production and oxytocin for milk ejection; the first milk is colostrum, rich in antibodies (IgA), giving the newborn passive immunity',
    why: 'Contractions amplify the signal that causes them, so a question that says reduces or switch is wrong.',
    say: null,
  },
  // pp. 84, 89
  {
    topic: 2,
    kind: 'shortcut',
    q: 'What mantras give the development order, the germ layers and the milestones?',
    a: 'Order: Zygote, Cleave, Morula, Blast, Implant. Germ layers: ectoderm is covering and nerves (epidermis, hair, brain, spinal cord, nerves); mesoderm is movement, skeleton and blood (dermis, most muscles, bone, cartilage, blood vessels, kidneys; a few muscles such as those of the iris are ectodermal); endoderm is inner linings and gut glands (the lining of the digestive and respiratory tracts, liver, pancreas, thyroid). Timeline as printed: gestation about 9 months; heart about 1 month; limbs and digits by the end of the second month; major organ systems by about 12 weeks; fine hair and eyelashes by about 24 weeks; first movements about the fifth month',
    why: 'Most sequence and derivative questions fall to these three short lists.',
    say: null,
  },

  // ── Additional A · Infertility and Assisted Reproductive Technologies ──
  // p. 90
  {
    topic: 3,
    kind: 'remember',
    q: 'What do IVF, ZIFT, GIFT and ICSI each do?',
    a: 'IVF (in vitro fertilisation): ova are collected, fertilised with sperm in a culture dish and the embryo is transferred into the uterus. ZIFT (zygote intra-Fallopian transfer): the zygote or an early embryo of up to 8 blastomeres is placed in the Fallopian tube, so the tube must work; an embryo of more than 8 blastomeres is transferred into the uterus. GIFT (gamete intra-Fallopian transfer): the eggs and sperm are placed together in a healthy Fallopian tube, and fertilisation happens inside the body; in NCERT’s account the ovum comes from a donor, for a woman who cannot produce ova, and a working tube is needed. ICSI (intra-cytoplasmic sperm injection): a single sperm is injected directly into the cytoplasm of the ovum. The first IVF baby, Louise Brown, was born in 1978 in England (Edwards and Steptoe)',
    why: 'In IVF, ZIFT and ICSI fertilisation happens outside the body; GIFT places the gametes and fertilisation follows inside.',
    say: null,
  },
  // pp. 90–91
  {
    topic: 3,
    kind: 'remember',
    q: 'Which technique fits a couple with blocked tubes, and which a severely low sperm count?',
    a: 'Blocked Fallopian tubes: IVF, because it fertilises in a dish and places the embryo straight in the uterus; GIFT and ZIFT are ruled out since both need a working tube, and ICSI is not needed when the sperm are normal. A sperm count that is severely low, or sperm that move or are shaped very poorly, with a healthy tube: ICSI, since one sperm is injected into the ovum and a normal count or motility is not needed; GIFT is not suitable because too few sperm cannot fertilise even inside the tube',
    why: 'Ask first whether the problem is the tube or the sperm: tube points to IVF, sperm points to ICSI.',
    say: null,
  },

  // ── Additional B · Sexually Transmitted Infections (STIs) ──
  // pp. 92–93
  {
    topic: 4,
    kind: 'remember',
    q: 'Which STI is caused by which organism, grouped by type of pathogen?',
    a: 'Bacterial: gonorrhoea (<i>Neisseria gonorrhoeae</i>, a spherical diplococcus), syphilis (<i>Treponema pallidum</i>, a spirochaete), chlamydiasis (<i>Chlamydia trachomatis</i>). Viral: genital herpes (herpes simplex virus: HSV-2, or HSV-1), genital warts (human papillomavirus, HPV), HIV/AIDS (a retrovirus) and hepatitis B (hepatitis B virus, a DNA virus). Protozoan: trichomoniasis (<i>Trichomonas vaginalis</i>). Candidiasis (<i>Candida albicans</i>, a fungus) can also be sexually transmitted but is not in the NCERT list',
    why: 'Sort by pathogen type first: matching questions give the organism and ask for the group.',
    say: null,
  },
  // pp. 93–94
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the main consequences of the STIs, and how are they prevented?',
    a: 'Gonorrhoea: purulent discharge, pelvic inflammatory disease and infertility. Syphilis: painless chancre, then rash, then cardiovascular and neural damage. Chlamydiasis: often silent; it can ascend to the Fallopian tubes, and the inflammation and scarring there lead to infertility or ectopic pregnancy. Some HPV types are linked to cervical cancer. HBsAg in the blood marks hepatitis B infection (acute or chronic). STIs are mainly infections of the reproductive tract; HIV and hepatitis B are exceptions that also spread by blood and needles. Prevention: avoid sex with unknown or multiple partners, use condoms (they lower the risk, not remove it), screen donated blood, use disposable needles and sterilised instruments, and vaccinate against hepatitis B',
    why: 'A silent chlamydial infection goes untreated, and that delay is how the tubal scarring and infertility arise.',
    say: null,
  },

  // ── Additional C · Contraceptive Methods ──
  // pp. 95–96
  {
    topic: 5,
    kind: 'remember',
    q: 'How do the pills, the emergency pill and mifepristone work?',
    a: 'The combined pill (oestrogen and progesterone) suppresses the LH surge so the Graafian follicle does not rupture, thickens the cervical mucus against sperm and makes the endometrium less receptive; oestrogen makes the suppression more reliable. The progesterone-only mini-pill carries a low dose of progestogen, so it suppresses ovulation less consistently, and relies more on an unreceptive endometrium and thickened mucus. The emergency pill (levonorgestrel) is a progestogen taken within 72 hours of unprotected coitus and mainly prevents ovulation. Mifepristone (RU-486) blocks progesterone receptors, so the endometrium breaks down; it is used for medical termination of early pregnancy and is not a contraceptive in the NCERT context. Saheli is a once-a-week pill of centchroman (ormeloxifene), a non-steroidal selective oestrogen receptor modulator',
    why: 'A contraceptive prevents conception or implantation; mifepristone acts on an established pregnancy.',
    say: null,
  },
  // pp. 95–97
  {
    topic: 5,
    kind: 'remember',
    q: 'How do the IUDs, barriers, surgical and natural methods work, and which are permanent?',
    a: 'Copper IUDs (Cu-T, Cu-7): copper ions suppress sperm motility and fertilising capacity. The inert Lippes loop is a non-medicated device in the uterus that prevents implantation. The hormone-releasing IUD (LNG-20, Mirena) releases levonorgestrel locally, making the uterus unsuitable for implantation and the cervix hostile to sperm. Barriers (condom, diaphragm) block sperm physically. Vasectomy cuts and ties the vas deferens and tubectomy the Fallopian tubes; both are surgical and usually permanent, and the others here are reversible. Natural methods, periodic abstinence (about days 10–17 of the cycle) and coitus interruptus, have low efficacy. A woman who cannot use oestrogen, for example with hypertension or clots, can use a progesterone-only pill or an IUD',
    why: 'Name the duct or tube that is blocked for the surgical methods: vas deferens in the male, Fallopian tubes in the female.',
    say: null,
  },

  // ── Additional D · Sperm Capacitation and the Acrosome Reaction ──
  // p. 98
  {
    topic: 6,
    kind: 'remember',
    q: 'What is capacitation, where does it happen, and what changes?',
    a: 'Capacitation is the final functional maturation that gives the sperm fertilising ability. It happens in the female reproductive tract and takes several hours, not in the epididymis, where the sperm mature before ejaculation. The cholesterol-rich membrane of the head loses cholesterol, so it becomes more fluid; the adsorbed seminal plasma proteins and glycoproteins (the decapacitation factors) are removed; and Ca<sup>2+</sup> enters, giving hyperactivated, whip-like tail movement. The sperm is then ready for the acrosome reaction on meeting the zona pellucida',
    why: 'Capacitation is a separate, later step than the maturation in the epididymis, and it needs the female tract.',
    say: null,
  },
  // pp. 98–99
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the order of events in the acrosome reaction?',
    a: 'Binding of sperm receptors to ZP3 of the zona pellucida; fusion of the plasma membrane and outer acrosomal membrane; release of the acrosomal enzymes, acrosin (a protease) and hyaluronidase; penetration (hyaluronidase has already cleared the granulosa layer on the way to the zona, and acrosin helps digest a path through the zona pellucida); merger of the sperm membrane with the oocyte membrane, so the nucleus enters the ooplasm. Contact of the sperm with the oocyte then triggers the cortical reaction, which modifies the zona and blocks further sperm. Calcium is needed for the membranes to fuse',
    why: 'Binding comes first, and the enzymes are released only after the membranes fuse: bind, fuse, release, penetrate, enter.',
    say: null,
  },

  // ── Additional E · Menstrual Cycle: Hormonal Feedback and Clinical Applications ──
  // pp. 100–102
  {
    topic: 7,
    kind: 'remember',
    q: 'How does oestrogen switch from negative to positive feedback, and what does progesterone do?',
    a: 'At low and moderate levels, oestrogen holds FSH and LH down by negative feedback (follicular phase). When oestrogen from the maturing follicle becomes high and stays high (about days 12–13), the feedback turns positive and produces the LH surge, which triggers ovulation near day 14; a modest or brief earlier rise does not do this. FSH and LH both peak around ovulation. In the luteal phase high progesterone suppresses GnRH, FSH and LH by negative feedback. Oxytocin at birth is another positive feedback loop',
    why: 'The LH surge is the one place where oestrogen pushes the pituitary up instead of holding it down.',
    say: null,
  },
  // pp. 100–102
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the hormonal cause of an anovulatory cycle, of bleeding without ovulation, of amenorrhoea and of PCOS?',
    a: 'Anovulatory cycle: no LH surge, so no ovulation, no corpus luteum and no progesterone. Unopposed oestrogen (oestrogen without progesterone): the endometrium keeps proliferating without secretory stabilisation and is shed irregularly, which is the hormonal basis of dysfunctional uterine bleeding. Amenorrhoea (no menstruation): low GnRH, FSH and LH (hypogonadotropic), or high androgens as in PCOS; with low FSH and LH the follicles do not develop and the endometrium does not proliferate. PCOS: a raised LH ∶ FSH ratio (above 2 ∶ 1), anovulation and excess androgens, which the book places beyond the NCERT Class 12 syllabus',
    why: 'Follow the chain from the missing hormone: no LH surge gives no ovulation, no corpus luteum and no progesterone.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 103–108
  {
    topic: 8,
    kind: 'remember',
    q: 'What six shapes of question does the chapter fall into, and what is the approach to each?',
    a: 'The book gives the spread of questions over the chapter as its own estimate from past papers, not official figures. Route or sequence: walk the one-way route in your head. Cell location and function: inside the tubule is Sertoli (nourish), outside is Leydig (androgens). Hormone source: GnRH from the hypothalamus, FSH and LH from the pituitary, oestrogen from the growing follicle, progesterone from the corpus luteum, hCG and hPL from the placenta, relaxin from the ovary in late pregnancy (the corpus luteum also makes a little). Ploidy: the halving is at meiosis I. Assertion and reason: judge each statement alone first, then ask whether R is the cause of A. Germ-layer table: ectoderm covering and nerves, mesoderm most muscle, bone and blood, endoderm inner linings and gut glands',
    why: 'Each shape has one approach, and naming the shape first points to it.',
    say: null,
  },
  // pp. 107–111
  {
    topic: 8,
    kind: 'mistake',
    q: 'Which traps repeat in this chapter?',
    a: 'Vasa efferentia with vas deferens; Sertoli with Leydig (location reversed); the Graafian follicle (before ovulation, oestrogen) with the corpus luteum (after ovulation, progesterone); the morula taken as bigger than the zygote; the secondary oocyte called an ovum; ampulla in the oviduct, the vas deferens and the mammary duct; the uterine layers out of order; birth taken as negative feedback instead of the positive oxytocin loop. Take care with the word pregnancy-only: hCG is made in pregnancy apart from rare tumours, and relaxin rises in late pregnancy but the corpus luteum also makes it',
    why: 'Most of these are swaps of two near neighbours, so state the single feature that separates each pair.',
    say: null,
  },
];
