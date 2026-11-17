/**
 * KEY POINTS for Biology Class 12, Chapter 3 (Reproductive Health).
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
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to F are 4 to 9;
 * G (the book's What NEET Actually Asks) is 10. No point refers to another
 * topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. Remember: the
 * topic's definitions, tables and mechanisms. Don't mix up: a pair the topic
 * invites you to swap. Common mistakes: its Common student pitfalls (or the
 * Traps). Exam shortcuts: its Pro-Tip. `say`: the cheat sheet's memory hook,
 * word for word, in the Chemistry form: no quotation marks and no markup, the
 * label ("Memory hook:") dropped because the hook is already in arrow form.
 * Each of the four topics prints one hook, so the chapter has four lines. The
 * Additional topics have none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - "only the condom protects against infection" (and "no pill, IUD or surgery
 *   protects"): the points say that, among the methods of the chapter, the
 *   condom (male or female) is the one that also lowers the risk of STIs, and
 *   that pills, IUDs and sterilisation guard against pregnancy, not infection;
 * - the hormone-releasing IUDs (Progestasert, LNG-20) are said to release a
 *   progestogen, not "progesterone" (LNG-20 releases levonorgestrel); the
 *   combined pill is said to hold oestrogen and a progestogen, not "progestogen
 *   (often with oestrogen)"; "the most important component of the pill is
 *   progesterone" is given as a progestogen;
 * - the fertile days (10 to 17) are given as the book's window, the ovum and
 *   sperm survival times behind it are not repeated as a calculation;
 *   lactational amenorrhea is dependable for about the first six months, with
 *   frequent breastfeeding;
 * - emergency contraception is given as NCERT's rule (as soon as possible,
 *   within 72 hours of unprotected coitus); the book's own numbers are kept
 *   for this syllabus, and its "highly effective copper IUD within 72 hours"
 *   is given as the chapter's; the endometrial effect of the levonorgestrel
 *   pill is not claimed, since the book's own practice answer says the pill
 *   has no effect once fertilisation has occurred;
 * - NCERT uses STD, STI, VD and RTI together; AIDS and hepatitis-B are given
 *   as systemic infections that spread sexually (the book's refinement); the
 *   not-completely-curable trio (hepatitis-B, genital herpes, HIV/AIDS) is the
 *   book's and NCERT's wording;
 * - fertilisation is said to take place in the fallopian tube (the book adds
 *   the ampullary region; NCERT Chapter 2 names the ampullary-isthmic
 *   junction), and "both partners are always investigated" is not repeated;
 * - azoospermia is "no sperm in the semen" (the corrected wording) and
 *   oligospermia a low count; "no living sperm" is not used;
 * - ZIFT is given as the transfer of a zygote or early embryo of up to 8
 *   blastomeres into the fallopian tube, IUT as an embryo of more than 8 into
 *   the uterus; the table's "IVF zygote ≤ 8 cells" is read the same way;
 * - MTP safety is the first trimester, about 12 weeks (NCERT), and the legal
 *   limits are the book's 20 and 24 weeks of the 2021 Amendment, kept apart;
 *   the book's "beyond 24 weeks only for substantial foetal abnormality" is
 *   given as the ground the book teaches, not as the sole route, and
 *   "viability at the start of the third trimester" is not repeated; the
 *   45 to 50 million a year and the one-fifth are NCERT's estimate;
 * - the two statutes are named by their year and what they do (1951 family
 *   planning, 1971 MTP Act, 1994 PCPNDT Act), and the ban is on the use of
 *   prenatal tests for sex determination, not on amniocentesis itself;
 * - the doubling time is the rule of 70 (70 over r, with r in per cent per
 *   year), the chapter's formula; it stands for ln 2 over r with r as a
 *   fraction (ln 2 is about 0.69), and the projection is P0 times (1 + r over
 *   100) to the power t; every figure in the points is recomputed (70 over 1.7
 *   is 41, 1.017 to the power 30 is 1.658, 70 over 2 is 35, 1.02 to the power
 *   30 is 1.811, 70 over 2.5 is 28, 70 over 1.3 is 54);
 * - "India is currently in the late-expanding stage" is not repeated (it
 *   changes with the year); the stages are given as the model;
 * - the HIV window period is given as the book's 2 to 12 weeks, with the note
 *   that it depends on the test; "three stages" of syphilis is given as
 *   stages;
 * - Saheli is a once-a-week non-steroidal pill (centchroman) that blocks
 *   oestrogen receptors in the uterus; the three-way block belongs to the
 *   progestogen of the pill, and the progestogen-only pill is said to act
 *   mainly through the cervical mucus, which the book's practice answer
 *   gives, not through the "three simultaneous mechanisms" of its Method;
 * - medical abortion is given as mifepristone then misoprostol 24 to 48 hours
 *   later, up to 9 weeks (63 days), the book's figure, and "about 95 per cent
 *   effective" is not used;
 * - the distribution of questions and the recurring shapes are the book's
 *   estimate from past papers, not official figures; no count, share, year or
 *   superlative of an exam is repeated;
 * - the graded set's Q7 now reads A false, R true (our own R, see new-text-F2.md);
 *   the point states the fact it tests (the copper devices do suppress sperm
 *   motility and do not release hormones) and does not refer to the option.
 *
 * Markup is the chapter's own: <i> for scientific names and for variables,
 * <sub> and <sup>, <frac> for a fraction, no em dash. A value is kept with its
 * unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Birth Control & Contraception ──
  // pp. 112–115, 119
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the five families of contraceptive methods, and what should an ideal contraceptive be?',
    a: 'Natural (periodic abstinence, withdrawal, lactational amenorrhea), barrier (condoms and femidoms, diaphragm, cervical cap, vaults, with spermicides), intra-uterine devices, hormonal (pills, Saheli, injectables, implants) and surgical (vasectomy, tubectomy). Each family cuts a different link of the chain from meeting to implantation: timing, a physical wall, a hostile uterus, switching ovulation off, cutting the gamete pipe. An ideal contraceptive is user-friendly, easily available, effective and reversible, with few side effects, and it does not interfere with sexual drive or the act. No real method is perfect on these counts, which is why there is a menu. Condoms (male and female) are the method of the chapter that also lowers the risk of STIs; pills, IUDs and sterilisation guard against pregnancy, not infection',
    why: 'Sort an unfamiliar brand name into its family first, and its mechanism follows.',
    say: 'Nice Boys Insert Hormones Surgically → Natural, Barrier, IUD, Hormonal, Surgical.',
  },
  // pp. 114, 116, 119
  {
    topic: 0,
    kind: 'remember',
    q: 'Which numbers and special methods in this topic must you lock?',
    a: 'Fertile window about days 10–17 of the cycle (the book’s figure). Lactational amenorrhea, from the rise of prolactin that suppresses FSH and LH, is dependable for about the first six months after childbirth, with frequent breastfeeding. Combined oral pills: taken daily for 21 days, started within the first 5 days of the cycle, then a 7-day gap. Emergency contraception: as soon as possible, and within 72 hours of unprotected coitus (NCERT’s limit). Saheli: a once-a-week, non-steroidal pill (centchroman) developed at CDRI, Lucknow, which blocks oestrogen receptors in the uterus. Injectables such as Depo-Provera are progestogen preparations given periodically; implants are placed under the skin of the upper arm and act on the same hormonal principle',
    why: 'Pills are a daily 21 + 7 cycle and Saheli is weekly, so the dosing pattern separates them.',
    say: null,
  },
  // pp. 116, 118
  {
    topic: 0,
    kind: 'mixup',
    q: 'How do the three kinds of IUD work?',
    a: 'Non-medicated (Lippes loop): its presence increases phagocytosis of sperm in the uterus. Copper-releasing (Cu-T, Cu-7, Multiload 375): the Cu<sup>2+</sup> ions released are spermicidal and suppress sperm motility and fertilising capacity. Hormone-releasing (Progestasert, LNG-20): a slow release of a progestogen thickens the cervical mucus and makes the uterus unsuitable for implantation. IUDs are inserted into the uterus (not the cervix) by a doctor or a trained nurse, and give long-term but reversible cover, so they suit women who want to delay or space children',
    why: 'Copper does not speed sperm to the ovum: an option that says so inverts the real mechanism.',
    say: null,
  },
  // pp. 116, 119
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does vasectomy or tubectomy stop the formation of gametes?',
    a: 'No. Both block the transport of gametes. In vasectomy a small part of each vas deferens is removed or tied, so sperm are still made in the testes but cannot reach the seminal fluid. In tubectomy a small part of each fallopian tube is removed or tied, so the ovum cannot meet the sperm. Both are highly effective and poorly reversible, tubectomy more difficult to reverse than vasectomy. Vasectomy does not stop testosterone either',
    why: 'A mechanism that says sterilisation prevents spermatogenesis or egg formation is the trap: look for transport.',
    say: null,
  },
  // p. 119
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you pick a method for a couple in a case question?',
    a: 'Take two tags from the stem: reversible or permanent, and delaying or spacing children against a completed family. Delay or space and reversible points to an IUD or pills; a completed family and permanent points to sterilisation. In the worked example (a couple delaying a first child by two years, wanting a long-term, reversible method with no daily action) the copper-T fits: inserted once, long-term, removable. Tubectomy is not reversible, pills need a daily dose and a condom is used per act',
    why: 'You can often answer before reading the options in detail.',
    say: null,
  },

  // ── Topic 02 · Sexually Transmitted Diseases & Infertility ──
  // pp. 120–121, 126
  {
    topic: 1,
    kind: 'remember',
    q: 'Which pathogen causes each STD, and which are not completely curable?',
    a: 'Syphilis: <i>Treponema pallidum</i> (bacterium). Gonorrhoea: <i>Neisseria gonorrhoeae</i> (bacterium). Chlamydiasis: <i>Chlamydia trachomatis</i> (bacterium). Genital herpes: herpes simplex virus. Genital warts: human papilloma virus (HPV). Trichomoniasis: <i>Trichomonas vaginalis</i> (protozoan, the odd one out). Hepatitis-B: hepatitis-B virus. AIDS: HIV (a retrovirus). Hepatitis-B, genital herpes and HIV/AIDS are not completely curable, though many STDs can be cured if detected early. The 15–24 year age group is especially vulnerable, and early stages can be silent, especially in women',
    why: 'Lock the type with the name: the type of pathogen is a separate mark in a board answer.',
    say: null,
  },
  // pp. 121–123, 126
  {
    topic: 1,
    kind: 'remember',
    q: 'What does each assisted reproductive technology move, and where does it go?',
    a: 'IVF fuses egg and sperm outside the body (in vitro), and the product is transferred (embryo transfer, ET). A zygote or early embryo of up to 8 blastomeres goes into the fallopian tube (ZIFT); an embryo of more than 8 blastomeres goes into the uterus (IUT). GIFT places a donor ovum (with sperm) in the fallopian tube of a woman who cannot produce ova but can host fertilisation, which then takes place inside her body (in vivo). ICSI injects a single sperm directly into the ovum’s cytoplasm. AI or IUI places semen in the vagina or uterus',
    why: 'The working material (sperm, gamete, zygote, embryo) points to a technique.',
    say: 'Tubes take the young, the uterus takes the grown (≤8 cells → tube; >8 → uterus).',
  },
  // pp. 121, 123, 126
  {
    topic: 1,
    kind: 'mixup',
    q: 'Oligospermia or azoospermia, and primary or secondary infertility?',
    a: 'Oligospermia is a low sperm count; azoospermia is no sperm in the semen. Primary infertility means conception has never occurred; secondary infertility is failure to conceive after a previous conception. Cryptorchidism, where the testes do not descend, impairs sperm formation because the warmer abdominal temperature harms it. Other causes in males are faulty spermatogenesis, blocked ducts and gonadotropin deficiency; in females, polycystic ovary, endometriosis, a blocked or inflamed fallopian tube (salpingitis), anovulation and implantation failure. The cause may lie with either partner',
    why: 'Oligo is few and azoo is none: the prefix is the answer.',
    say: null,
  },
  // pp. 121, 126
  {
    topic: 1,
    kind: 'mistake',
    q: 'Can you wait for symptoms before treating an STD, and are the common STDs curable?',
    a: 'No. Many are silent in the early stage, especially in women, so they are found late. By then the infection may have caused pelvic inflammatory disease (PID), ectopic pregnancy, abortion, stillbirth, infertility or cancer of the reproductive tract. Hepatitis-B, genital herpes and HIV/AIDS are not completely curable. Prevention rests on a condom, caution with partners, clean needles, early diagnosis and complete treatment. AIDS and hepatitis-B are systemic infections that spread sexually, not infections confined to the sex organs (the book’s refinement; NCERT uses STD, STI, VD and RTI together)',
    why: 'Early diagnosis matters because the early stage is often silent and stigma delays help.',
    say: null,
  },
  // p. 126
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you pick the ART in a “which technique?” question?',
    a: 'Take two facts from the stem: the working material (sperm, gamete, zygote, embryo) and its stage or site. Very low or abnormal sperm that cannot penetrate points to ICSI; a low count or inability to inseminate points to AI or IUI; a woman who cannot produce ova but can host fertilisation points to GIFT; an early embryo (up to 8 blastomeres) to the tube is ZIFT; more than 8 to the uterus is IUT. In the worked example the wife’s ova were healthy and the husband’s sperm could not penetrate, so ICSI fitted and GIFT, ZIFT and tubectomy did not',
    why: 'Tubectomy is a contraceptive, so it does not answer an infertility question.',
    say: null,
  },

  // ── Topic 03 · Reproductive Health: Problems, Strategies & Population Stabilisation ──
  // pp. 127–128, 132
  {
    topic: 2,
    kind: 'remember',
    q: 'How does the WHO define reproductive health, and what is India’s approach?',
    a: 'According to the WHO, reproductive health is total well-being in the physical, emotional, behavioural and social aspects of reproduction. India was among the first countries to start national programmes for it: family planning (1951), later broadened into Reproductive and Child Health Care (RCH). The strategies are sex education in schools, correct information about reproductive organs, adolescence and safe, hygienic practices, awareness of STDs and of uncontrolled population growth, prevention of sex abuse, better medical facilities (prenatal care, assisted deliveries, postnatal care) and research, for example Saheli at CDRI, Lucknow',
    why: 'The definition has four aspects, so a one-word or two-word version loses the mark.',
    say: '51 plans the family, 71 ends the pregnancy (1951 family planning; 1971 MTP).',
  },
  // pp. 128–129, 132
  {
    topic: 2,
    kind: 'remember',
    q: 'What caused the population explosion, and what measures check it?',
    a: 'Better health care lowered the death rate, the maternal mortality rate (MMR) and the infant mortality rate (IMR), while the birth rate stayed high and more people reached reproductive age, so births outran deaths. The measures are to motivate small families through contraceptives, to raise the statutory marriageable age to 18 years for females and 21 years for males, and to give incentives to couples with small families. A healthier society shows more awareness, lower MMR and IMR, more medically assisted deliveries, smaller families and better detection and cure of STDs',
    why: 'Read the indicators to the conclusion: they point to a reproductively healthier society.',
    say: null,
  },
  // pp. 127, 132, 137
  {
    topic: 2,
    kind: 'mixup',
    q: 'Which year goes with family planning, the MTP Act and the sex-determination ban?',
    a: 'Family planning programme: 1951. MTP Act, which legalised abortion: 1971. Sex-determination ban: the Pre-Natal Diagnostic Techniques Act of 1994 (now called the Pre-Conception and Pre-Natal Diagnostic Techniques, PCPNDT, Act), a statutory ban on prenatal sex determination. The world population rose from about 2 billion in 1900 to about 6 billion in 2000, and India’s from about 350 million in 1947 to about 1 billion by 2000 (NCERT figures)',
    why: 'Anchor them in order: 51 plans, 71 ends the pregnancy, 94 bans sex tests.',
    say: null,
  },
  // pp. 129–130, 132
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is amniocentesis banned?',
    a: 'No: its use for sex determination is banned. Amniocentesis samples the amniotic fluid, and the foetal cells in it reveal chromosomal pattern and genetic disorders such as Down syndrome and haemophilia, a legitimate use. The same test also shows foetal sex, and misuse for sex determination leads to female foeticide and a skewed sex ratio, so prenatal sex determination is a punishable offence under the PCPNDT Act. The ban is on the misuse, not on the diagnosis',
    why: 'In an assertion–reason item, an option that says amniocentesis cannot detect genetic disorders is the false part.',
    say: null,
  },
  // p. 132
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you answer a question that gives trends such as falling MMR and IMR?',
    a: 'Read the indicators and give the conclusion in one step: falling maternal and infant mortality, smaller families, more assisted deliveries and better cure of STDs show improved reproductive health, a working RCH strategy. A rising sex-ratio imbalance or rising STD incidence shows the strategies need reinforcing through awareness, sex education and enforcement of the ban',
    why: 'The stem hands you the indicators and asks what they show.',
    say: null,
  },

  // ── Topic 04 · Medical Termination of Pregnancy (MTP) ──
  // pp. 133–134, 137
  {
    topic: 3,
    kind: 'remember',
    q: 'What is MTP, and why is the first trimester the safe time?',
    a: 'MTP, or induced abortion, is the intentional termination of a pregnancy before full term; a spontaneous abortion is a natural miscarriage. It is not a contraceptive: contraception prevents fertilisation or implantation, whereas MTP ends an established pregnancy. It is relatively safe in the first trimester (up to about 12 weeks, NCERT) because the foetus is not yet intimately associated with maternal tissue, and riskier in the second trimester when it is. NCERT’s estimate is nearly 45–50 million MTPs worldwide each year, about <frac><num>1</num><den>5</den></frac> of conceived pregnancies. Methods are pharmacological or surgical, depending on the stage',
    why: 'Early is safer because there is less tissue and a simpler procedure to disrupt.',
    say: null,
  },
  // pp. 133–134, 137
  {
    topic: 3,
    kind: 'remember',
    q: 'What does the Indian law on MTP lay down?',
    a: 'The MTP Act, 1971 legalised abortion; the MTP (Amendment) Act, 2021 raised the upper limit from 20 to 24 weeks for special categories. In the book’s summary: up to 20 weeks, the opinion of one registered medical practitioner (RMP); 20–24 weeks, two RMPs, for special categories of women (survivors of rape or incest, minors, women whose marital status changed during pregnancy, differently abled and other vulnerable women); beyond 24 weeks, substantial foetal abnormality on the decision of a state Medical Board (and, at any stage, when termination is immediately necessary to save the woman’s life). The Amendment also lets unmarried women seek MTP on the ground of contraceptive failure and adds a confidentiality clause. MTP must be done by qualified RMPs in an approved facility, because unsafe abortions caused high maternal mortality',
    why: 'The conditions exist to keep it safe and to block its misuse, not to hinder it.',
    say: '71 makes it legal, 12 keeps it safe (1971 Act; ≤12-week safety).',
  },
  // pp. 134, 137
  {
    topic: 3,
    kind: 'mixup',
    q: 'Is the 12-week figure or the 20 and 24 weeks the answer?',
    a: 'They answer different questions. The medical-safety fact is the first trimester, about 12 weeks (NCERT’s “relatively safe” answer). The legal framework is the 20-week and 24-week structure of the 2021 Amendment: one RMP up to 20 weeks, two RMPs from 20 to 24 weeks for special categories. NCERT gives the older split: one RMP up to 12 weeks, two RMPs from 12 to 24 weeks. Decide which axis the question tests before choosing',
    why: 'A stem about biological safety wants the first trimester and the foetus–maternal tissue reason; a stem about who may do it and when wants the Act.',
    say: null,
  },
  // pp. 133, 135, 137
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is MTP a method of birth control, and what is its misuse?',
    a: 'No. MTP is not a contraceptive and is not meant for population control or convenience; it removes unwanted or harmful pregnancies (contraceptive failure, rape, danger to the mother or the foetus, foetal abnormality) and protects the mother’s health. Its misuse is the abortion of healthy female foetuses after illegal sex determination, which skews the sex ratio, so the sex determination ban and the regulation of MTP work together. Sex-selective abortion is a punishable offence, while MTP for a medical or humanitarian reason is legitimate',
    why: 'MTP’s dark side, sex-selective female foeticide, is a recurring assertion–reason theme in the book’s estimate.',
    say: null,
  },
  // p. 137
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you choose between safe window and legal limit in a question?',
    a: 'If the stem stresses biological safety, answer the first trimester, about 12 weeks, with the reason that the foetus is not yet intimately associated with maternal tissue. If it stresses who may do the procedure and when it is legal, switch to the 1971 Act and the 20 and 24 weeks (NCERT’s own split is one RMP up to 12 weeks, two RMPs from 12 to 24 weeks). Quoting 20 weeks for the safe window is the recurring mix-up',
    why: 'One decision before the options saves the mark.',
    say: null,
  },

  // ── Additional topic A · Emergency Contraception ──
  // pp. 139–140
  {
    topic: 4,
    kind: 'remember',
    q: 'Within what time must emergency contraception be used, and how do the pills work?',
    a: 'As soon as possible, and within 72 hours (3 days) of unprotected coitus (NCERT’s limit): the effect falls with delay, so 72 hours is the outer limit, not the ideal time. The levonorgestrel pill, a progestogen given as a single dose or in two doses 12 hours apart, works mainly by preventing or delaying ovulation and by thickening the cervical mucus. The older combined oestrogen–progestogen (Yuzpe) regimen is less used. Ulipristal acetate, a selective progesterone receptor modulator, blocks progesterone receptors and delays ovulation even after the LH surge has begun. It is used after unprotected coitus, a condom burst, missed pills or rape',
    why: 'A woman 60 hours after coitus is still inside the 72-hour window.',
    say: null,
  },
  // pp. 140–141
  {
    topic: 4,
    kind: 'remember',
    q: 'Why is a copper IUD a double-duty emergency method, and what can a pill not do?',
    a: 'A copper-releasing IUD (Cu-T, Multiload 375) inserted within the 72-hour window releases Cu<sup>2+</sup> ions that suppress sperm motility and fertilising capacity, and it then stays on as long-term contraception for 5–10 years, depending on the device, so it covers the emergency and the future. A pill acts mainly before fertilisation: once ovulation and fertilisation have occurred it cannot prevent the pregnancy from establishing, and emergency contraception does not work by ending an established pregnancy. The insertion needs a doctor, and no existing infection or pregnancy',
    why: 'The pill answers the event; the IUD answers the event and the years after.',
    say: null,
  },

  // ── Additional topic B · ART Decision Matrix ──
  // pp. 141–142
  {
    topic: 5,
    kind: 'remember',
    q: 'What three questions pick the ART, and which technique answers each problem?',
    a: 'Where is the block (sperm, ovum or fertilisation)? Can fertilisation happen in the body or must it happen in the lab? How many cells does the embryo have at transfer? Cannot inseminate or low sperm count: AI or IUI, semen into the vagina or uterus. Very low or abnormal sperm, or penetration failure: ICSI. Woman cannot produce ova but can host fertilisation: GIFT, donor ovum and sperm into the tube. Both gametes normal but fertilisation must be assisted: IVF, then ET. A zygote or embryo up to 8 cells: ZIFT, tube. More than 8 cells: IUT, uterus',
    why: 'GIFT moves unfused gametes, ZIFT a zygote or early embryo, IUT a more developed embryo.',
    say: null,
  },
  // pp. 142–144
  {
    topic: 5,
    kind: 'remember',
    q: 'Why does the tube take the early embryo and the uterus the later one, and what does GIFT need?',
    a: 'In natural conception the zygote begins cleavage (2, 4, 8 cells) as it travels along the fallopian tube, and the later morula and blastocyst reach the uterus; ZIFT follows that sequence, and an embryo of more than 8 cells is ready to implant in the uterus. GIFT places gametes in the tube because fertilisation takes place in the fallopian tube, so the couple’s own tubal environment must be healthy. If the tubes are blocked, IVF with transfer to the uterus is used. In IVF the sperm penetrates the ovum on its own; in ICSI one sperm is injected, so no penetration occurs',
    why: 'The uterus is the site of implantation, not of fertilisation.',
    say: null,
  },

  // ── Additional topic C · Population Mathematics ──
  // pp. 144–145
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you find a doubling time and a projected population?',
    a: 'With growth at <i>r</i> per cent a year, the rule of 70 gives the doubling time <i>T</i><sub>d</sub> = <frac><num>70</num><den><i>r</i></den></frac> years, an approximation of <frac><num>ln 2</num><den><i>r</i></den></frac> with <i>r</i> as a decimal. The projection after <i>t</i> years is <i>P</i><sub><i>t</i></sub> = <i>P</i><sub>0</sub> (1 + <frac><num><i>r</i></num><den>100</den></frac>)<sup><i>t</i></sup>. At 1.7% a year, <i>T</i><sub>d</sub> = <frac><num>70</num><den>1.7</den></frac> ≈ 41 years, and 1000 million becomes 1000 × (1.017)<sup>30</sup> ≈ 1000 × 1.658 = 1658 million in 30 years. At 2.5% the doubling time is <frac><num>70</num><den>2.5</den></frac> = 28 years; at 1.3% it is <frac><num>70</num><den>1.3</den></frac> ≈ 54 years',
    why: 'Check that r is in per cent in the rule of 70 and the compound formula.',
    say: null,
  },
  // pp. 144–146
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the stages of the demographic transition, and how does compound growth compare with linear?',
    a: 'Stage 1 (high stationary): death rate and birth rate both high, growth slow or nil. Stage 2 (early expanding): death rate falling with better health, birth rate high, so the population rises fast, the population explosion. Stage 3 (late expanding): death rate low, birth rate falling with urbanisation and education, growth slows. Stage 4 (low stationary): both low, growth near zero. A country of 50 million growing at 2% a year doubles in <frac><num>70</num><den>2</den></frac> = 35 years and reaches 50 × (1.02)<sup>30</sup> is about 50 × 1.811 = 90.6 million in 30 years, against 80 million with the same 1 million added each year',
    why: 'The gap between the 80 and the 90.6 million is the compound effect, and it widens each year.',
    say: null,
  },

  // ── Additional topic D · STD Clinical Picture ──
  // pp. 146–148
  {
    topic: 7,
    kind: 'remember',
    q: 'How does an untreated STD lead to infertility and ectopic pregnancy?',
    a: 'Untreated gonorrhoea and chlamydiasis can ascend the reproductive tract to cause pelvic inflammatory disease (PID), inflammation of the uterus, fallopian tubes and surrounding tissues. PID scars the fallopian tubes, so the egg and sperm cannot meet even though both are functional (tubal-factor infertility), and a partly blocked tube can let a fertilised ovum implant outside the uterus (ectopic pregnancy). Many infections are silent in women, so a carrier feels well and passes the infection on, which is why regular screening matters as well as testing for symptoms',
    why: 'This chain links the blocked tube of the infertility topic back to the STD that caused it.',
    say: null,
  },
  // pp. 147–149
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the window period, and what are the clinical clues for each STD?',
    a: 'After infection a person may be infectious while standard tests are still negative: for HIV the book gives 2–12 weeks, depending on the test, so a negative test soon after exposure is repeated after the window period. Clues: gonorrhoea, a mucopurulent or purulent discharge with pain on passing urine; chlamydiasis, often silent; trichomoniasis, a frothy yellow-green discharge with itching; genital herpes, painful vesicles or ulcers that recur; genital warts, cauliflower-like growths from HPV (other HPV types are linked to cervical cancer); syphilis, a painless chancre, then a rash; hepatitis-B, jaundice and liver disease, also spread by blood',
    why: 'A negative HIV test one week after exposure does not rule out infection.',
    say: null,
  },

  // ── Additional topic E · Hormonal Contraception and the MTP Protocol ──
  // pp. 149–150
  {
    topic: 8,
    kind: 'remember',
    q: 'How do pills block pregnancy, and how does Saheli differ?',
    a: 'Combined pills hold oestrogen and a progestogen; the progestogen-only pill (mini-pill) holds a progestogen alone. Progestogen acts at three sites: negative feedback on the hypothalamus and pituitary lowers GnRH, FSH and LH, so there is no pre-ovulatory LH surge and no ovulation (the primary action of the combined pill); the cervical mucus thickens and blocks sperm; the endometrium stays thin and unsuitable for implantation. The mini-pill acts mainly through the cervical mucus, so it works even if ovulation occurs. Saheli (centchroman) is non-steroidal and blocks oestrogen receptors in the uterus, so the endometrium stays unreceptive, acting at the uterus, not through the pituitary',
    why: 'Pill: central, ovulation blocked. Saheli: local, at the uterus.',
    say: null,
  },
  // pp. 150–152
  {
    topic: 8,
    kind: 'remember',
    q: 'What drugs are used in medical MTP, and why is MTP not contraception?',
    a: 'Two drugs in sequence: mifepristone (RU-486), an antiprogestogen that blocks progesterone receptors, breaks down the decidua, softens the cervix and detaches the embryo; then misoprostol, a prostaglandin E<sub>1</sub> analogue given 24–48 hours later, whose uterine contractions expel the conceptus. The book gives up to 9 weeks (63 days) for this regimen in India (the figure in current Indian rules; NCERT gives only the 12-week safety limit); MVA (manual vacuum aspiration) or D&C (dilatation and curettage) are used for later or more advanced pregnancies. MTP is not contraception because by the time a woman finds she is pregnant (typically 4–6 weeks) the embryo has implanted and makes hCG, and an emergency pill cannot reverse implantation',
    why: 'Mifepristone prepares the uterus; misoprostol completes the expulsion.',
    say: null,
  },

  // ── Additional topic F · Practice: Full Paper (All Addenda) ──
  // pp. 152–153
  {
    topic: 9,
    kind: 'remember',
    q: 'Which short answers does the full paper repeat for contraception and ART?',
    a: 'Emergency contraception: within 72 hours, the earlier the better. A donor ovum with the husband’s sperm placed in the wife’s fallopian tube: GIFT. Very few sperm, none able to penetrate the ovum: ICSI. An early embryo of up to 8 cells goes to the tube, because the zygote and early cleavage stages are in the tube; the uterus takes the embryo of more than 8 cells, ready to implant. The copper IUD is both an emergency method (within 72 hours) and ongoing cover for 5–10 years, depending on the device',
    why: 'These five answers come from items 1, 2, 8, 9 and 10 of the paper.',
    say: null,
  },
  // pp. 152–153
  {
    topic: 9,
    kind: 'remember',
    q: 'Which short answers does the full paper repeat for mechanisms and numbers?',
    a: 'A population of 80 million growing at 2.5%: <i>T</i><sub>d</sub> = <frac><num>70</num><den>2.5</den></frac> = 28 years. Chlamydiasis and gonorrhoea are frequently silent in women and can cause PID, tubal scarring and infertility. Progestogen in pills: negative feedback on the hypothalamus and pituitary, suppressing GnRH, FSH and LH, so the LH surge and ovulation are prevented. Saheli blocks oestrogen receptors in the uterus; combined pills act through the hypothalamus–pituitary axis. Misoprostol induces the uterine contractions that expel the conceptus',
    why: 'Pair each drug with its site: pituitary, uterus or myometrium.',
    say: null,
  },

  // ── Additional topic G · What NEET Actually Asks ──
  // pp. 153–157, 161
  {
    topic: 10,
    kind: 'remember',
    q: 'How is this chapter weighted in the book’s estimate, and what question shapes return?',
    a: 'The distribution is the book’s estimate from past papers, not official figures. It puts contraception (methods, mechanisms, classification) at the top, ART next, STDs and infertility and the health strategies and population in the middle, and MTP and amniocentesis lower but steady. Six shapes come back: direct recall of a full form, year or organism; which method–mechanism pair is wrong; a mixed fact match; a case that asks for an ART; assertion–reason (judge A and R separately, then the link); and a statement-selection question. Two habits help: test each pair on its own, and keep the blastomere rule ready (up to 8 to the tube, more than 8 to the uterus)',
    why: 'Treat the weighting as a guide to what to revise first, not a count of past questions.',
    say: null,
  },
  // pp. 157–161
  {
    topic: 10,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: 'The book’s estimate from past papers, not official figures. Sterilisation stops gamete production: it blocks transport. IUDs treated as one mechanism: they differ, phagocytosis (non-medicated), Cu<sup>2+</sup> ions (copper), mucus and endometrium changes (hormone-releasing); Cu-T and Cu-7 suppress sperm motility and do not release hormones. Azoospermia as a low count: it is no sperm in the semen. The blastomere rule reversed: up to 8 to the tube (ZIFT), more than 8 to the uterus (IUT), and GIFT places gametes, not embryos, in the tube. Years: family planning 1951, MTP 1971, PCPNDT 1994. MTP safety about 12 weeks, not the legal 20 or 24. AIDS and hepatitis-B as infections confined to the reproductive tract. Tubectomy preventing egg formation, or genital warts caused by the herpes virus (it is HPV). Copper-T supplying nutrients to speed sperm',
    why: 'Check each pair of an option on its own: one wrong pair makes the whole option wrong.',
    say: null,
  },
];
