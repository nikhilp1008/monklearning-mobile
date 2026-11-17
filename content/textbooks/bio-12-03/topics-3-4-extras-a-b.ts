import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 3, Reproductive Health: Topics 03 and 04 and Additional topics A and B, word for
 * word from the Class 12 Biology Master Reference (pp. 127-144).
 *
 * Topic 03 Reproductive Health: Problems, Strategies & Population Stabilisation, pp. 127-132
 * (Figure 3.5: caption p. 129, drawing p. 130, set in Mechanisms and procedures where the caption
 * stands). Topic 04 Medical Termination of Pregnancy (MTP), pp. 133-138 (Figure 3.6: caption p. 135,
 * drawing p. 136, set at the end of Mechanisms and procedures). The shared opening of "Additional
 * Topics: Chapter 3: Reproductive Health" (p. 139) heads Additional topic A's Introduction.
 * A Emergency Contraception, pp. 139-141; B ART Decision Matrix, pp. 141-144 (its answers end at the
 * top of p. 144, where Addendum C begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), every fraction
 * stacked, options (a) to (d) as printed, "subtopic" is "topic", "Section 1 / 3" is "Topic 01 / 03".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 127-132 ─────────────────────────
  {
    n: '03',
    title: 'Reproductive Health: Problems, Strategies & Population Stabilisation',
    kalam: 'Two big problems dominate: people did not know enough about reproduction, and there were simply too many people being added too fast.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The “social biology” backbone of the chapter and a high-scoring topic if the facts are learned. CBSE Boards loves the WHO definition, the RCH/sex-education strategies, and “suggest steps to improve reproductive health” (2–5 marks). NEET picks the amniocentesis-ban fact, the causes of population explosion, and the statutory marriageable ages often; assertion–reason on female foeticide is common (the book’s estimate from past papers, not official figures). CUET sticks to direct recall (full forms, years, ages) (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Every other part of this chapter (contraception, STDs, infertility, MTP) is really a response to a problem. This topic is where we name the problems themselves and the society-wide strategies built to tackle them. Two big problems dominate: people did not <b>know enough</b> about reproduction, and there were simply <b>too many</b> people being added too fast.',
      },
      {
        t: 'p',
        html: 'Start with what we are trying to protect. According to the <b>World Health Organisation (WHO)</b>, reproductive health is not merely the absence of disease; it is <b>total well-being in all aspects of reproduction: physical, emotional, behavioural, and social.</b> Think of it like the health of a whole cricket team, not just one star batsman: a “reproductively healthy” society needs people with normal reproductive organs and healthy emotional and behavioural attitudes toward sex and reproduction.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> India was actually <b>among the first countries in the world to launch national-level programmes</b> to achieve reproductive health as a social goal: the “family planning” programmes begun in <b>1951</b>, later broadened into today’s <b>Reproductive and Child Health Care (RCH)</b> programmes. The strategy was never just handing out contraceptives; it was building awareness. That means <b>sex education in schools</b> (to replace myths with facts), spreading correct information about reproductive organs, adolescence, safe and hygienic practices, and STDs, encouraging couples to plan small families, and improving medical facilities (prenatal care, assisted deliveries, postnatal care) so that <b>maternal and infant mortality fall</b>.',
      },
      {
        t: 'p',
        html: 'Now the second problem: <b>population explosion.</b> Picture a bucket filling with water (births) while the drain (deaths) is slowly being plugged by better healthcare. If water pours in faster than it drains, the bucket overflows. That overflow is exactly what happened, and it strains even the most basic resources: food, shelter, water.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Awareness and statutory measures only work when implemented and accepted: a law on paper (like the ban on sex-determination) does not by itself end a social evil if attitudes do not change. And “small family” incentives assume couples have real, accessible choices (the contraceptive menu of Topic 01). Improvement is measured not by slogans but by indicators: falling maternal and infant mortality, more medically-assisted deliveries, smaller families, and better detection and cure of STDs.',
      },

      { t: 'part', title: 'Key concepts, definitions and diagnostic indicators' },
      {
        t: 'p',
        html: 'A recall-dense section. (Qualitative biology: no SI units or dimensional formulae.)',
      },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'Reproductive health (WHO)',
        html: 'total well-being in the physical, emotional, behavioural, and social aspects of reproduction.',
      },
      {
        t: 'def',
        term: 'RCH (Reproductive and Child Health Care)',
        html: 'the umbrella national programme aimed at a reproductively healthy society.',
      },
      {
        t: 'def',
        term: 'Family planning',
        html: 'the national programme begun in <b>1951</b>; India was among the first countries to start one.',
      },
      {
        t: 'def',
        term: 'Population explosion',
        html: 'a rapid rise in population caused chiefly by a falling death rate (and MMR/IMR) alongside a continuing high birth rate and more people of reproducible age.',
      },
      {
        t: 'def',
        term: 'Amniocentesis',
        html: 'a prenatal test that uses <b>amniotic fluid</b> to detect genetic/chromosomal disorders (e.g., Down syndrome, haemophilia) in the foetus.',
      },
      {
        t: 'p',
        html: '<b>The spectrum of reproductive-health problems</b> Reproductive health is threatened on several fronts at once, for example <b>population explosion</b>, <b>infertility</b>, <b>sexually transmitted diseases (STDs)</b>, <b>complications of abortion</b>, <b>menstrual problems</b>, <b>pregnancy- and delivery-related problems</b>, and the broader <b>health of mothers</b>. Every strategy below targets one or more of these, which is why “improving reproductive health” is never a single fix but a coordinated package.',
      },
      {
        t: 'p',
        html: '<b>Strategies to improve reproductive health (NCERT’s “menu”)</b><br>• Sex education in schools.<br>• Correct information on reproductive organs, adolescence, and safe/hygienic practices.<br>• Awareness of STDs and of problems caused by uncontrolled population growth.<br>• Prevention of sex-abuse and sex-related crime.<br>• Better medical facilities: prenatal care, medically-assisted deliveries, postnatal care of mother and infant.<br>• Strong programmes and research (e.g., new contraceptives such as Saheli, developed at CDRI, Lucknow).',
      },
      {
        t: 'p',
        html: '<b>Indicators of a reproductively healthy society</b><br>• Better awareness about sex-related matters.<br>• <b>Decreased maternal mortality rate (MMR) and infant mortality rate (IMR).</b><br>• Increased number of medically-assisted deliveries.<br>• Smaller families.<br>• Better detection and cure of STDs.',
      },
      {
        t: 'p',
        html: '<b>Population control measures (the testable list)</b><br>• Motivate <b>smaller families</b> using contraceptive methods.<br>• Statutory raising of the <b>marriageable age: 18 years for females, 21 years for males.</b><br>• <b>Incentives</b> to couples with small families.',
      },
      {
        t: 'p',
        html: '<b>Acronyms to lock:</b> WHO (World Health Organisation) · RCH (Reproductive and Child Health Care) · MMR (Maternal Mortality Rate) · IMR (Infant Mortality Rate).',
      },
      {
        t: 'p',
        html: '<b>Scale (NCERT-illustrative figures):</b> the world population was around <b>2 billion (2000 million) in 1900</b> and rose to about <b>6 billion by 2000</b>; India’s grew from roughly <b>350 million at independence (1947)</b> to <b>about 1 billion by 2000</b> (NCERT: close to the billion mark).',
      },

      { t: 'part', title: 'Mechanisms and procedures' },
      {
        t: 'p',
        html: '<b>A. The demographic mechanism behind population explosion.</b> A population grows when <b>birth rate exceeds death rate</b>. Through the twentieth century, better health facilities caused a <b>rapid decline in the death rate, the MMR, and the IMR</b>, while the birth rate stayed high; add a larger number of people reaching reproducible age and better living conditions, and the net addition each year became explosive. The consequence is pressure on basic requirements: food, shelter, clothing. Left unchecked, this pressure deepens <b>poverty, unemployment, and resource scarcity</b>, which is why population stabilisation is treated as a precondition for reproductive health rather than a separate goal. The response is two-pronged: <b>reduce births</b> (promote small families through contraception) and <b>delay reproduction</b> (statutory marriageable ages of 18 and 21, which shorten each woman’s reproductive window and space generations), reinforced by <b>incentives</b> for small families.',
      },
      {
        t: 'p',
        html: 'It helps to see why the imbalance arose in the first place. Historically a population stays roughly in balance when a high birth rate is matched by a high death rate. Advances in medicine, vaccination, sanitation, and food security cut the <b>death rate first and fastest</b>, while cultural birth rates declined only slowly afterwards, opening a wide gap during which population surged. Population-stabilisation policy is essentially an effort to close that gap from the births side, because the deaths side (longer, healthier lives) is exactly the outcome we want to preserve.',
      },
      {
        t: 'p',
        html: '<b>B. How the strategies actually improve health: the RCH pillars.</b> The national programmes work through several reinforcing pillars. <b>Sex education</b> in schools is the foundation: giving adolescents correct information about reproductive organs, the changes of adolescence, safe and hygienic sexual practices, and STDs replaces myth and misconception with fact, so young people make safer choices. <b>Awareness-building</b> extends this to the wider public: the dangers of uncontrolled population growth and the need to prevent social evils such as sex-abuse and sex-related crime. <b>Better medical facilities</b> act downstream: prenatal screening, hygienic and medically-assisted deliveries, and postnatal care of mother and infant directly reduce MMR and IMR, while improved <b>detection and cure of STDs</b> raises the population’s reproductive health. <b>Counselling</b> on reproduction-related matters at the school level supports adolescents through these changes. Finally, <b>research</b> is encouraged to develop safer methods: the contraceptive Saheli, developed at the Central Drug Research Institute (CDRI), Lucknow, is the NCERT example. The outcome indicators (falling MMR/IMR, smaller families, better STD cure rates) are how we read backwards to confirm the pillars are working, which is why exam questions hand you those indicators and ask which strategy produced them.',
      },
      {
        t: 'p',
        html: '<b>C. Amniocentesis: a good tool, a dangerous misuse, and the legal response.</b> Amniocentesis withdraws a sample of <b>amniotic fluid</b> surrounding the foetus; the foetal cells in it reveal <b>chromosomal pattern and genetic disorders</b>, legitimately used to detect conditions such as Down syndrome or haemophilia. The problem is the misuse: because the chromosomal pattern also reveals <b>foetal sex</b>, the test has been abused for <b>prenatal sex-determination</b>, leading to <b>female foeticide</b> (selective abortion of female foetuses) and a dangerously skewed sex ratio. The societal strategy in response is a <b>statutory ban on using such techniques for sex-determination</b>: in India, the Pre-Natal Diagnostic Techniques Act of 1994, now called the <b>Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act</b> (<b>PCPNDT Act, 1994</b> in the book’s form), making prenatal sex-determination a punishable offence.',
      },
      {
        t: 'p',
        html: 'Why does this matter so much? A society that systematically aborts female foetuses develops a <b>skewed, male-biased sex ratio</b>, with long-term consequences: fewer women in the population, disrupted marriage patterns, and entrenched gender injustice. The ban therefore protects not just individual foetuses but the demographic and social balance of society itself; and because attitudes, not just statutes, drive the practice, <b>sex education and awareness</b> are treated as equally essential to enforcement.',
      },
      { t: 'fig', id: 'b12-03-fig-3.5' },
      {
        t: 'p',
        html: '<b>D. Reproductive health as a measurable social goal.</b> A useful way to tie the whole topic together: reproductive health is treated not as a private medical matter but as a <b>social goal</b> that a country plans for, which is why India was among the first nations to build national programmes around it. Such a goal needs <b>measurement</b>, and that is the role of the indicators. A society moving in the right direction shows <b>rising awareness, falling MMR and IMR, more medically-assisted deliveries, smaller families, and better detection and cure of STDs.</b> When an exam gives you a cluster of these trends and asks what they signify, the intended answer is “a reproductively healthier society / successful RCH strategy.” Conversely, a rising sex-ratio imbalance or rising STD incidence signals the strategies are failing and need reinforcement, through stronger awareness, sex education, and enforcement of the sex-determination ban.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level | 3–5 marks',
        q: 'Define reproductive health as per WHO, and suggest any three strategies a country could adopt to achieve it.',
        steps: [
          '<b>Reasoning & model answer.</b> The command “define + suggest three” wants a one-line definition plus three distinct strategies (not three rewordings of one). Definition: reproductive health is total well-being in the physical, emotional, behavioural, and social aspects of reproduction. Three strategies: (i) introduce <b>sex education</b> in schools to dispel myths; (ii) improve <b>medical facilities</b> (prenatal/postnatal care and assisted deliveries) to reduce MMR and IMR; (iii) create <b>awareness of STDs and population issues</b>, and support research into better contraceptives. (A fourth, if asked: statutory ban on prenatal sex-determination.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap level',
        q: 'The statutory marriageable ages in India for females and males respectively are: <b>(a)</b> 18 and 18 <b>(b)</b> 18 and 21 <b>(c)</b> 21 and 18 <b>(d)</b> 16 and 18',
        steps: [
          '<b>Reasoning.</b> A pure recall trap that punishes guessing. The figures are <b>18 years (female)</b> and <b>21 years (male)</b>.',
          '<b>Cue:</b> “ladies first, and the smaller number”: female 18.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>(cause → consequence)</b> Which combination best explains the population explosion in India? <b>(a)</b> Rising death rate and rising birth rate <b>(b)</b> Declining death rate, declining MMR and IMR, with a continuing high birth rate <b>(c)</b> Declining birth rate with rising death rate <b>(d)</b> Equal birth and death rates',
        steps: [
          '<b>Reasoning.</b> Population grows when births outpace deaths. <b>(a)</b> and <b>(c)</b> contain a rising death rate: wrong, healthcare lowered it. <b>(d)</b> gives zero net growth. <b>(b)</b> captures the real mechanism: deaths (and MMR/IMR) fell sharply while births stayed high.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | assertion–reason',
        q: 'Assertion (A): A statutory ban has been placed on the use of amniocentesis for sex-determination. Reason (R): Amniocentesis cannot detect any genetic disorder of the foetus. <b>(a)</b> Both A and R true, R explains A <b>(b)</b> Both A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> Test A: yes, prenatal sex-determination is banned (to curb female foeticide); A is <b>true</b>. Test R: amniocentesis is primarily a tool to <b>detect</b> genetic/chromosomal disorders; saying it cannot is <b>false</b>. A true, R false.',
          '<b>Trap:</b> the ban is on the misuse (sex-determination), not on the legitimate diagnostic use: students who conflate the two may wrongly accept R.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Expand RCH, MMR, and IMR, and state what falling MMR/IMR indicates about a society’s reproductive health. (3 marks)',
            a: 'RCH – Reproductive and Child Health Care; MMR – Maternal Mortality Rate; IMR – Infant Mortality Rate; their decline indicates improving reproductive health.',
          },
          {
            q: '[CUET] In which year did India initiate its national family-planning programme, and what is notable about India’s timing globally?',
            a: '1951; India was among the first countries in the world to launch such a national programme.',
          },
          {
            q: '[NEET] List any three measures used for population stabilisation in India.',
            a: 'Promote small families via contraception; statutory marriageable ages (18 female and 21 male); incentives for small families.',
          },
          {
            q: '[NEET] Why is amniocentesis legitimately useful, and why has its use for one purpose been legally banned?',
            a: 'Useful to detect genetic/chromosomal disorders (e.g., Down syndrome) from amniotic fluid; banned for prenatal sex-determination because of misuse leading to female foeticide.',
          },
          {
            q: '[NEET: assertion-reason] A: Sex education in schools is recommended. R: It provides correct information and dispels myths about sex-related aspects. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'According to WHO, reproductive health means total well-being in which aspects?',
        opts: [
          { label: 'Physical only', nudge: '<b>(a)</b>, <b>(b)</b> are incomplete subsets: the favourite distractors for students who remember “physical” first and stop.' },
          { label: 'Physical and emotional only', nudge: '<b>(a)</b>, <b>(b)</b> are incomplete subsets: the favourite distractors for students who remember “physical” first and stop.' },
          { label: 'Physical, emotional, behavioural and social', nudge: null },
          { label: 'Social and economic', nudge: '<b>(d)</b> inserts “economic,” which is not part of the definition.' },
        ],
        correct: 2,
        solution: 'WHO’s definition spans all four: physical, emotional, behavioural, and social.',
      },
      {
        t: 'mcq',
        q: 'Amniocentesis is based on the analysis of:',
        opts: [
          { label: 'maternal blood', nudge: '<b>(a)</b> describes other prenatal blood screens, not amniocentesis.' },
          { label: 'amniotic fluid', nudge: null },
          { label: 'cervical mucus', nudge: '<b>(c)</b>, <b>(d)</b> are unrelated to the technique.' },
          { label: 'placental tissue', nudge: '<b>(c)</b>, <b>(d)</b> are unrelated to the technique.' },
        ],
        correct: 1,
        solution: 'The test samples <b>amniotic fluid</b> surrounding the foetus.',
      },
      {
        t: 'mcq',
        q: 'Which is NOT a recognised measure for population stabilisation in India?',
        opts: [
          { label: 'Raising the marriageable age', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine measures.' },
          { label: 'Promoting small families', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine measures.' },
          { label: 'Incentives to small families', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine measures.' },
          { label: 'Banning all contraceptives', nudge: null },
        ],
        correct: 3,
        solution: 'Contraceptives are promoted, not banned: banning them would raise births. <b>(d)</b> inverts the logic; a student rushing the word “control” might misread it.',
      },
      {
        t: 'mcq',
        q: 'India launched its national family-planning programme in:',
        opts: [
          { label: '1921', nudge: '<b>(a)</b> 1921 is long before independence: the national programme began only after 1947.' },
          { label: '1947', nudge: '<b>(b)</b> 1947 is independence year: a tempting near-miss.' },
          { label: '1951', nudge: null },
          { label: '1971', nudge: '<b>(d)</b> 1971 is the year MTP was legalised, not family planning: a classic cross-fact trap.' },
        ],
        correct: 2,
        solution: 'The family-planning programme began in <b>1951</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Truncating the WHO definition.</b> It is <b>four</b> aspects: physical, emotional, behavioural, <b>and social</b>. Dropping “social” loses the mark.',
          '<b>Mixing up the years.</b> Family planning → <b>1951</b>; MTP legalised → <b>1971</b>. Keep them apart.',
          '<b>Thinking amniocentesis is banned outright.</b> Only its use for <b>sex-determination</b> is banned; its diagnostic use is legal and valuable.',
          '<b>Swapping the marriageable ages.</b> Female <b>18</b>, male <b>21</b>: never the reverse.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (for speed):</b> When a question gives you outcomes (falling MMR/IMR, smaller families, better STD cure) and asks what they show, the answer is usually “improved reproductive health / successful RCH strategy.” Read indicators → conclusion in one step.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Reproductive health (WHO)</b>', note: 'total well-being: physical, emotional, behavioural, <b>social.</b>' },
          { f: '<b>India</b>', note: 'among the <b>first</b> countries with a national programme; <b>family planning → 1951</b>, now <b>RCH.</b>' },
          { f: '<b>Strategies</b>', note: 'sex education, awareness (STDs + population), better medical facilities, prevention of sex-abuse, research (e.g., Saheli/CDRI).' },
          { f: '<b>Indicators of health</b>', note: '↓ MMR, ↓ IMR, more assisted deliveries, smaller families, better STD cure.' },
          { f: '<b>Population explosion cause</b>', note: '↓ death rate/MMR/IMR + high birth rate + more reproducible-age people.' },
          { f: '<b>Control measures</b>', note: 'small families (contraception) · marriageable age <b>18 (F) and 21 (M)</b> · incentives.' },
          { f: '<b>Amniocentesis</b>', note: 'amniotic-fluid test for <b>genetic/chromosomal disorders</b>; misused for sex-determination → female foeticide → <b>statutory ban (PCPNDT Act, 1994).</b>' },
        ],
        aids: ['<b>Memory hook:</b> <b>“51 plans the family, 71 ends the pregnancy”</b> (1951 family planning; 1971 MTP).'],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 133-138 ─────────────────────────
  {
    n: '04',
    title: 'Medical Termination of Pregnancy (MTP)',
    kalam: 'Contraception prevents fertilisation or implantation; MTP ends a pregnancy that is already established.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A compact but frequently tested topic. NEET and CBSE both ask the first-trimester safety fact and the “MTP is not a contraceptive” distinction; CBSE asks 2-mark “why are strict conditions needed for MTP” and reasons-MTP-is-advised. CUET tests the legalisation year (1971) and the trimester figure. Assertion–reason linking MTP misuse to female foeticide is common (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: '<b>Medical Termination of Pregnancy (MTP)</b>, also called <b>induced abortion</b>, is the intentional or voluntary termination of a pregnancy <b>before full term</b>, i.e., before the foetus becomes viable on its own. The word that matters is induced: this is a deliberate medical procedure, which is what separates it from a <b>spontaneous abortion</b> (a natural miscarriage that the body undergoes on its own).',
      },
      {
        t: 'p',
        html: 'The phrase “before full term” carries a precise idea: a pregnancy is terminated <b>before the foetus becomes viable</b>, before it could survive independently outside the womb. Viability is not a fixed instant; with modern neonatal care it is generally placed at about 24 weeks, near the end of the second trimester. This is one reason both medicine and law concentrate safe, straightforward termination in the earlier weeks of pregnancy.',
      },
      {
        t: 'p',
        html: 'Why does a society even need a legal route for this? Because unwanted pregnancies happen (through casual unprotected sex, failure of a contraceptive, or sexual assault) and because, sometimes, continuing a pregnancy would seriously endanger the mother or the foetus. Before legal, safe abortion existed, women turned to unsafe procedures that caused high maternal mortality. Legalising MTP was, at heart, a <b>public-health measure</b> to make a necessary procedure safe.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a train that is safest to disembark from while it is still moving slowly near the platform; the longer you wait, the faster and more dangerous it becomes to step off. Early pregnancy is the “slow” phase. In the <b>first trimester (up to about 12 weeks)</b> the foetus is not yet intimately fused with maternal tissue, so termination is comparatively safe; in the <b>second trimester</b> the foetus becomes intimately associated with the uterine lining and its blood supply, so the procedure becomes far riskier. This is the key biological idea in the topic.',
      },
      {
        t: 'p',
        html: 'A frequently tested conceptual point (the book’s estimate from past papers, not official figures): <b>MTP is NOT a method of contraception.</b> Contraception prevents fertilisation or implantation; MTP ends a pregnancy that is already established. Treating abortion as routine birth control is both medically wrong and not the law’s intent.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> MTP is meant for genuine need, not convenience, and must be done by <b>qualified medical personnel in an approved facility</b>; strict conditions exist precisely because an unsafe or late abortion is dangerous. And like amniocentesis, MTP carries a <b>dark misuse</b>: it has been used to abort healthy <b>female</b> foetuses after illegal sex-determination, which is why the procedure is tightly regulated and sex-selective abortion is a punishable offence.',
      },

      { t: 'part', title: 'Key concepts, definitions and diagnostic indicators' },
      {
        t: 'p',
        html: 'A definition-and-figures section. (Qualitative biology: no SI units.)',
      },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'MTP / induced abortion',
        html: 'intentional/voluntary termination of pregnancy before full term (before foetal viability).',
      },
      {
        t: 'def',
        term: 'Spontaneous abortion (miscarriage)',
        html: 'natural, unintended loss of pregnancy (for contrast: not MTP).',
      },
      {
        t: 'def',
        term: 'Methods of MTP',
        html: '<b>pharmacological (medical)</b> using drugs, or <b>surgical</b>, depending on gestational stage.',
      },
      {
        t: 'p',
        html: '<b>Scale (NCERT-illustrative):</b> nearly <b>45–50 million MTPs</b> are performed worldwide each year: about <b>one-fifth</b> (<frac><num>1</num><den>5</den></frac>) <b>of all conceived pregnancies</b> in a year. Newer WHO estimates are higher.',
      },
      {
        t: 'p',
        html: '<b>Safety window (the NCERT medical fact, high-yield):</b><br>• Relatively safe in the <b>FIRST TRIMESTER (up to ~12 weeks).</b><br>• <b>Riskier in the SECOND TRIMESTER</b>, because the foetus is by then intimately associated with maternal tissue.',
      },
      {
        t: 'p',
        html: '<b>Legal framework in India (legal limits differ from medical safety):</b><br>• Abortion was <b>legalised by the MTP Act, 1971.</b><br>• Amended by the <b>MTP (Amendment) Act, 2021</b> (in force from 24 September 2021), which <b>raised the upper gestational limit from 20 to 24 weeks</b> for special categories of women.<br>• <b>Up to 20 weeks:</b> opinion of <b>one</b> registered medical practitioner (RMP).<br>• <b>20–24 weeks:</b> opinion of <b>two</b> RMPs, for <b>special categories</b> (survivors of rape/incest, minors, women whose marital status changed during pregnancy, differently-abled and other vulnerable women).<br>• <b>Beyond 24 weeks:</b> permitted for <b>substantial foetal abnormality</b>, on the decision of a <b>state-level Medical Board</b> (and, at any stage, when termination is immediately necessary to save the woman’s life).<br>• The Amendment also allows <b>unmarried women</b> to seek MTP (e.g., on the ground of contraceptive failure) and adds a <b>confidentiality clause.</b><br>• <b>NCERT’s version:</b> NCERT describes the law as the MTP (Amendment) Act, 2017, with the older split: up to <b>12 weeks</b> on the opinion of <b>one</b> RMP, and from 12 to <b>24 weeks</b> on the opinion of <b>two</b> RMPs. For an NCERT-based question on how many practitioners are needed, use 12 and 24 weeks; the 20-week one-RMP limit above is the current law (2021).',
      },
      {
        t: 'p',
        html: '<b>Legal grounds for termination (under the Act):</b> abortion is permitted on <b>therapeutic</b> grounds (risk to the mother’s life or physical/mental health), <b>eugenic</b> grounds (substantial risk of serious foetal abnormality), <b>humanitarian</b> grounds (pregnancy resulting from rape or sexual assault), and <b>social</b> grounds (e.g., failure of a contraceptive method).',
      },
      {
        t: 'p',
        html: '<b>When MTP is advised (reasons):</b><br>• Unwanted pregnancy (casual unprotected intercourse, <b>contraceptive failure</b>, or <b>rape</b>).<br>• When continuation would be <b>harmful or even fatal to the mother, the foetus, or both.</b><br>• Diagnosed serious <b>foetal abnormality.</b>',
      },
      {
        t: 'p',
        html: '<b>Significance vs. drawbacks</b><br>• Significance: safely removes unwanted or harmful pregnancies and protects the health and life of the mother. <b>Note:</b> MTP is <b>not</b> intended as a tool of population control or contraception: its role in reducing population is insignificant; it exists for the health and welfare of the individual. NCERT adds that it does have a significant role in decreasing the population, though it is not meant for that purpose.<br>• Drawbacks/concerns: <b>misused for female foeticide</b> after illegal sex-determination; raises emotional, ethical, religious and social questions; unsafe if done late or by unqualified persons.',
      },

      { t: 'part', title: 'Mechanisms and procedures' },
      {
        t: 'p',
        html: '<b>A. Why the first trimester is safer (the core biology).</b> In early pregnancy the embryo/foetus is small and <b>not yet intimately connected to the maternal blood supply and uterine wall</b>; the placental attachment is still developing. Terminating at this stage therefore involves less tissue, less bleeding risk, and a simpler procedure. As pregnancy advances into the <b>second trimester</b>, the foetus becomes <b>intimately associated with maternal tissue</b> (a mature, vascular placental connection), so termination means disrupting a far more integrated structure: more bleeding, more risk, greater medical complexity. This is precisely why both the medical advice (do it early) and the legal limits (tighter conditions later) push toward early termination.',
      },
      {
        t: 'p',
        html: '<b>B. The procedure pathway and why it is regulated.</b> The method depends on how advanced the pregnancy is. <b>Medical (pharmacological) abortion</b> uses drugs to end a pregnancy in the earliest weeks; <b>surgical abortion</b> is used for later or more advanced cases. In every case MTP must be carried out by <b>qualified, registered medical practitioners (RMPs)</b> in approved facilities, following the gestational-limit rules (one RMP’s opinion up to 20 weeks, two for 20–24 weeks in special categories, and a state Medical Board beyond 24 weeks). These “strict conditions” are not bureaucratic hurdles. Before safe, legal abortion existed, women routinely resorted to <b>clandestine, unsafe procedures that caused high maternal mortality and morbidity</b>, and that public-health disaster is exactly why India enacted the MTP Act in the first place. Regulation converts a dangerous back-alley practice into a safe medical one; the conditions exist to keep it safe and to block its misuse.',
      },
      {
        t: 'p',
        html: '<b>C. The female-foeticide misuse chain (and why it is policed).</b> MTP becomes socially harmful when it is coupled with illegal <b>prenatal sex-determination</b>: a foetus is sexed (often via the misuse of amniocentesis), and a healthy <b>female</b> foetus is then aborted. Repeated across a population, this skews the <b>sex ratio</b> in favour of males, producing fewer women, disrupted marriage patterns, and entrenched gender injustice over a generation. The legal countermeasures are twofold: the ban on sex-determination (PCPNDT Act, 1994; see Topic 03) and the strict regulation of MTP itself (who may perform it, when, and on what grounds). Note that MTP performed for a genuine medical or humanitarian reason is legitimate; it is the <b>sex-selective</b> misuse that is the evil.',
      },
      {
        t: 'p',
        html: '<b>D. What the 2021 Amendment changed, and why.</b> The original 1971 Act capped termination at 20 weeks and, on the contraceptive-failure ground, covered only married women. Among the 2021 reforms were four that matter for exams. The <b>upper limit rose from 20 to 24 weeks</b> for special categories of women, a change that matters most for rape survivors and for women whose foetal abnormalities are detected only in the second trimester. It also let one practitioner decide up to 20 weeks (the 1971 Act needed two opinions after 12 weeks). The <b>married-only clause was dropped</b>, so unmarried women may now seek MTP on the ground of contraceptive failure. And a <b>confidentiality clause</b> was added to protect the woman’s identity. Beyond 24 weeks, termination is permitted for <b>substantial foetal abnormality</b>, decided by a state <b>Medical Board</b> (and, at any stage, when termination is immediately necessary to save the woman’s life). For exams, keep two layers separate: the medical-safety fact (relatively safe in the first trimester) and this legal framework (1971 Act, 2021 Amendment, the 20-week and 24-week structure). NCERT states the older split (one RMP up to 12 weeks, two RMPs from 12 to 24 weeks); use it for an NCERT-based question on the number of practitioners.',
      },
      { t: 'fig', id: 'b12-03-fig-3.6' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level | 2–3 marks',
        q: 'State any two situations in which MTP is advised, and explain why strict conditions must be followed during MTP procedures.',
        steps: [
          '<b>Reasoning & model answer.</b> Two situations (any two): (i) when the pregnancy is unwanted due to contraceptive failure or rape; (ii) when continuation is dangerous to the mother and/or foetus; (iii) diagnosed serious foetal abnormality. Why strict conditions: to ensure the procedure is performed safely by <b>qualified medical personnel in approved facilities</b> (unsafe/late abortions cause maternal mortality), and to <b>prevent misuse for sex-selective (female) foeticide.</b>',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap level',
        q: 'MTP is considered relatively safe when carried out during the: <b>(a)</b> first trimester <b>(b)</b> second trimester <b>(c)</b> third trimester <b>(d)</b> full term',
        steps: [
          '<b>Reasoning.</b> The medical-safety fact: the foetus is not yet intimately associated with maternal tissue early on. <b>First trimester (up to ~12 weeks)</b> is the safe window; later stages are riskier.',
          '<b>Cue:</b> “earlier = safer.”',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>(concept distinction)</b> Which statement about MTP is correct? <b>(a)</b> MTP is a routine method of contraception <b>(b)</b> MTP prevents fertilisation <b>(c)</b> MTP is the intentional termination of an established pregnancy and is not a contraceptive <b>(d)</b> MTP can be safely performed by anyone at any stage',
        steps: [
          '<b>Reasoning.</b> Eliminate on the contraception/safety logic. (a) and (b) wrongly equate MTP with contraception: MTP ends a pregnancy, it does not prevent one. (d) is false: it needs qualified personnel and is stage-restricted. <b>(c)</b> states both truths: it terminates an established pregnancy and is not a contraceptive.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | assertion–reason',
        q: 'Assertion (A): MTP is comparatively unsafe during the second trimester. Reason (R): By the second trimester the foetus has become intimately associated with the maternal tissues. <b>(a)</b> Both A and R true, R explains A <b>(b)</b> Both A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> A is <b>true</b> (second-trimester MTP is riskier). R is <b>true</b> and is the exact reason: the deep foetal–maternal tissue connection is what makes late termination hazardous, so R explains A.',
          '<b>Trap:</b> some pick (b), not realising the tissue association is the direct cause of the increased risk, not an unrelated fact.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define MTP and distinguish it from spontaneous abortion. (2 marks)',
            a: 'MTP = intentional/voluntary (induced) termination of pregnancy before full term; spontaneous abortion = natural, unintended miscarriage.',
          },
          { q: '[CUET] In which year was MTP legalised in India?', a: '1971.' },
          {
            q: '[NEET] Why is MTP not classified as a contraceptive method?',
            a: 'Because it terminates an already-established pregnancy rather than preventing fertilisation/implantation.',
          },
          {
            q: '[NEET] Give one beneficial use and one harmful misuse of MTP.',
            a: 'Use: safely ends unwanted/harmful pregnancies (e.g., contraceptive failure, rape, danger to mother). Misuse: sex-selective abortion of female foetuses (female foeticide).',
          },
          {
            q: '[NEET: assertion-reason] A: MTP must be performed only by registered medical practitioners. R: Unsafe abortions by unqualified persons can cause serious maternal harm. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Nearly how many MTPs are performed worldwide every year (NCERT estimate)?',
        opts: [
          { label: '45–50 thousand', nudge: '<b>(a)</b>, <b>(b)</b> drastically undercount.' },
          { label: '45–50 lakh', nudge: '<b>(a)</b>, <b>(b)</b> drastically undercount.' },
          { label: '45–50 million', nudge: null },
          { label: '45–50 billion', nudge: '<b>(d)</b> overcounts beyond the world’s annual pregnancies: a sanity-check should rule it out.' },
        ],
        correct: 2,
        solution: 'About <b>45–50 million</b> MTPs per year: roughly one-fifth of conceived pregnancies.',
      },
      {
        t: 'mcq',
        q: 'MTP is relatively safe up to how many weeks of pregnancy (medical safety, NCERT)?',
        opts: [
          { label: '6 weeks', nudge: '<b>(a)</b> and <b>(d)</b> are outside the NCERT figure.' },
          { label: '12 weeks', nudge: null },
          { label: '20 weeks', nudge: '<b>(c)</b> 20 weeks reflects a legal limit figure, not the medical-safety statement: the classic mix-up trap.' },
          { label: '28 weeks', nudge: '<b>(a)</b> and <b>(d)</b> are outside the NCERT figure.' },
        ],
        correct: 1,
        solution: 'The first trimester, about <b>12 weeks</b>, is the relatively safe window.',
      },
      {
        t: 'mcq',
        q: 'Which is a correct reason for advising MTP?',
        opts: [
          { label: 'As a regular substitute for contraceptives', nudge: '<b>(a)</b> misuses MTP as contraception.' },
          { label: 'Pregnancy resulting from rape or contraceptive failure', nudge: null },
          { label: 'To select the sex of the child', nudge: '<b>(c)</b> is the illegal sex-selective misuse.' },
          { label: 'For any pregnancy without restriction', nudge: '<b>(d)</b> ignores the legal/medical restrictions.' },
        ],
        correct: 1,
        solution: 'Rape and contraceptive failure are recognised grounds, as is danger to mother/foetus.',
      },
      {
        t: 'mcq',
        q: 'Abortion was legally permitted in India by the MTP Act passed in:',
        opts: [
          { label: '1951', nudge: '<b>(a)</b> 1951 is the family-planning programme year.' },
          { label: '1971', nudge: null },
          { label: '1994', nudge: '<b>(c)</b> 1994 is the PCPNDT Act (sex-determination ban).' },
          { label: '2021', nudge: '<b>(d)</b> 2021 is the amendment year, not the original legalisation: a tempting recent-news distractor.' },
        ],
        correct: 1,
        solution: 'The <b>MTP Act, 1971</b> legalised abortion.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling MTP a contraceptive.</b> It ends a pregnancy; contraceptives prevent one. This distinction is examined directly.',
          '<b>Confusing the medical-safety figure (12 weeks) with the legal limits.</b> Both exist; quote the right one for the question: NCERT’s “relatively safe” answer is the <b>first trimester (~12 weeks).</b> For the legal rule NCERT gives one RMP up to 12 weeks and two RMPs up to 24 weeks; the current law (2021) gives one RMP up to 20 weeks.',
          '<b>Forgetting the year split.</b> MTP legalised <b>1971</b>; family planning <b>1951</b>; sex-determination ban (PCPNDT) <b>1994</b>.',
          '<b>Ignoring the misuse angle.</b> MTP’s dark side is <b>sex-selective female foeticide</b>, a frequent assertion–reason theme (the book’s estimate from past papers, not official figures).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (for speed):</b> If a stem stresses biological safety, answer <b>first trimester (about 12 weeks)</b> and cite the foetus–maternal-tissue reason; if it stresses who/when is it legal, switch to the 1971-Act / 20–24-week framework (NCERT’s own legal split is 1 RMP up to 12 weeks, 2 RMPs 12–24 weeks). Decide which axis the question is testing before choosing.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>MTP = induced abortion</b> = intentional termination before full term. Spontaneous abortion = natural miscarriage.', note: '' },
          { f: '<b>NOT a contraceptive</b>', note: 'it ends an established pregnancy.' },
          { f: '<b>Safe window (medical)</b>', note: '<b>first trimester, ~12 weeks</b>; riskier later (foetus intimately associated with maternal tissue).' },
          { f: '<b>Scale</b>', note: '<b>~45–50 million/yr</b> worldwide (~<frac><num>1</num><den>5</den></frac> of conceived pregnancies).' },
          { f: '<b>Legal</b>', note: '<b>MTP Act 1971; MTP (Amendment) Act 2021</b> → up to <b>20 wks (1 doctor)</b>, <b>20–24 wks (2 doctors, special categories)</b>, <b>>24 wks via Medical Board</b> for foetal abnormality (or at any stage to save the woman’s life). NCERT: 1 RMP up to 12 wks, 2 RMPs 12–24 wks.' },
          { f: '<b>Reasons</b>', note: 'unwanted pregnancy (rape, contraceptive failure), danger to mother/foetus, foetal abnormality. Must use <b>qualified personnel.</b>' },
          { f: '<b>Misuse</b>', note: 'sex-selective <b>female foeticide</b> (linked to illegal sex-determination).' },
        ],
        aids: ['<b>Memory hook:</b> <b>“71 makes it legal, 12 keeps it safe”</b> (1971 Act; ≤12-week safety).'],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 139-141 ─────────────────────────
  {
    n: 'A',
    title: 'Emergency Contraception: The Complete Protocol the Chapter Names but Does Not Explain',
    extra: true,
    kalam: 'Emergency contraception must be used as soon as possible, and no later than 72 hours (3 days) after unprotected coitus.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section adds five topics that go beyond the main chapter text: the complete emergency-contraception protocol (A); the ART decision tree with cellular-stage logic (B); population-growth mathematics, including doubling time and exponential calculations (C); the clinical picture of STDs and the infertility-complication chain (D); and contraceptive mechanisms at the cellular level, including the mifepristone-misoprostol MTP protocol (E). A set of practice questions covering all five (Additional topic F) follows, and a closing section (Additional topic G) analyses what NEET asks on this chapter (the book’s view, not an official statement).',
      },
      {
        t: 'p',
        html: 'The chapter names emergency contraception in one bullet (progestin or progestin-oestrogen preparations, or an IUD, within 72 hours of coitus) but does not name the drugs, explain the reasoning behind the window, or say how a copper-IUD works as emergency cover.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The 72-hour rule.</b> Emergency contraception must be used as soon as possible, and no later than 72 hours (3 days) after unprotected coitus. Effectiveness is highest when it is used as early as possible and declines with the delay, so the best time is as soon as possible (ideally within 24 hours); 72 hours is the outer limit, not the ideal time. 72 hours (3 days) is NCERT’s limit and the figure to use in this syllabus; ulipristal is licensed for up to 120 hours, and a copper-IUD can be inserted up to 5 days after coitus.',
      },
      {
        t: 'p',
        html: '<b>Drug options (NCERT names progestogens or progestogen-oestrogen preparations; the specific drugs below go beyond NCERT).</b><br>• <b>Levonorgestrel-only pill (LNG):</b> a progestogen given as a single dose or in two split doses 12 hours apart. Works mainly by preventing ovulation and by thickening cervical mucus to block sperm penetration.<br>• <b>Combined oestrogen-progestogen pill (Yuzpe regimen):</b> an older option using standard combined oral pills in a specific high-dose protocol. Less used now because LNG pills are more effective and cause fewer side effects.<br>• <b>Ulipristal acetate (UPA):</b> a selective progesterone receptor modulator (SPRM) available in some settings; blocks progesterone receptors and delays ovulation even after the LH surge has begun.',
      },
      {
        t: 'p',
        html: '<b>Copper-IUD as emergency contraception.</b> NCERT lists an IUD among the emergency options, to be used within 72 hours of coitus. A copper-releasing IUD (Cu-T, Multiload-375) inserted within this window acts as a highly effective emergency contraceptive: the Cu<sup>2+</sup> ions it releases suppress sperm motility and fertilising capacity. (Clinical guidelines allow insertion for up to 5 days after unprotected coitus, but for NCERT-based exams use the 72-hour limit.) Its advantage over pills is that it provides continued long-term contraception after the emergency use: a single insertion covers 5–10 years, depending on the device. This dual role (emergency + ongoing) is worth remembering for exam questions.',
      },
      {
        t: 'p',
        html: '<b>Mechanism summary.</b> Emergency contraception does NOT work primarily by disrupting an established pregnancy: it acts mainly by preventing or delaying ovulation and, for the copper-IUD, by blocking fertilisation. It is not an abortifacient in the classical sense, and the chapter’s framing (“prevents fertilisation or implantation”) applies to contraception as a whole.',
      },
      {
        t: 'p',
        html: '<b>Indications for use.</b> Emergency contraception is indicated after: unprotected coitus, contraceptive failure (condom burst, missed pills), rape, or any situation where pregnancy is undesired and regular contraception was not used.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Emergency Contraception Timing.</b> A woman had unprotected coitus 60 hours ago. She asks about emergency contraception. Can she still use emergency contraception, and if so, which method is available to her within the effective window?',
        steps: [
          'The 72-hour window is measured from the time of coitus. 60 hours is within 72 hours, so she is still within the effective window. She can take a levonorgestrel pill as soon as possible or, alternatively, have a copper-IUD inserted (also within the 72-hour limit) for highly effective emergency cover plus ongoing contraception.',
        ],
        ans: 'Yes: within the 72-hour window. Levonorgestrel pill or copper-IUD insertion.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Copper-IUD as Emergency Contraception.</b> A couple had a condom failure 2 days ago. The woman is considering a copper-T insertion for emergency contraception. State two advantages of this choice over the emergency pill, and one condition that must be met for it to be medically appropriate.',
        steps: [
          '<b>Advantages:</b> (i) The copper-IUD is more effective than emergency pills when inserted within the 72-hour window. (ii) It provides long-term contraception (5–10 years, depending on the device) after the emergency use: the woman does not need another method. <b>Condition:</b> The insertion must be done within 72 hours of coitus, and the woman must have no existing infection or pregnancy at the time of insertion (a doctor must confirm).',
        ],
        ans: 'More effective + provides ongoing contraception; must be inserted within 72 hours by a qualified practitioner.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Mechanism Distinction.</b> Assertion (A): Emergency contraceptive pills work mainly by preventing ovulation. Reason (R): If ovulation has already occurred and fertilisation has taken place, emergency pills are ineffective at preventing pregnancy. <b>(a)</b> Both A and R true, R explains A <b>(b)</b> Both A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: the primary mechanism of LNG emergency pills is suppression of the pre-ovulatory LH surge, which prevents or delays ovulation. R is also true: if ovulation and fertilisation have already occurred, the pill cannot prevent a pregnancy from establishing (the window for action closes after fertilisation). However, R does not explain A: it describes a limitation rather than explaining the mechanism.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Within how many hours of unprotected coitus must emergency contraception be used, at the latest?',
            a: '72 hours (3 days) at the outside; it works best when used as early as possible.',
          },
          {
            q: '[NEET] Name the hormone used in emergency contraceptive pills and state its primary mechanism of action.',
            a: 'Levonorgestrel (a progestogen); primary mechanism is prevention/delay of ovulation and thickening of cervical mucus.',
          },
          {
            q: '[CUET] State one advantage of using a copper-IUD as emergency contraception over using an emergency pill.',
            a: 'The copper-IUD provides both emergency contraception and long-term contraception (5–10 years, depending on the device) in a single insertion; the pill only addresses the immediate event.',
          },
          {
            q: '[NEET] A woman uses emergency contraception 24 hours after coitus. Why might it still fail to prevent pregnancy?',
            a: 'If ovulation and fertilisation have already occurred before the pill is taken, the emergency pill cannot prevent the establishment of pregnancy: it has no post-fertilisation effect.',
          },
          {
            q: '[NEET: assertion-reason] A: The copper-IUD is considered a highly effective emergency contraceptive. R: The copper ions it releases suppress sperm motility and fertilising capacity. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 141-144 ─────────────────────────
  {
    n: 'B',
    title: 'ART Decision Matrix: Why Each Technique Exists and When to Choose It',
    extra: true,
    kalam: 'Given a couple’s specific problem, which ART is appropriate?',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the ART definitions, the blastomere rule, a one-line cue for each technique and the ART decision map (Figure 3.3). This section sets them out as one problem-to-technique table and adds the reasoning behind each choice. A question can be framed this way: given a couple’s specific problem, which ART is appropriate? The decision tree rests on the three questions below.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The three diagnostic questions for ART selection',
        steps: [
          '<b>Where is the block?</b> Sperm problem (count/motility/penetration), ovum problem (production), or fertilisation failure?',
          '<b>Can fertilisation happen in the body (in vivo), or must it happen in the lab (in vitro)?</b>',
          '<b>How many cells does the embryo have at transfer?</b> ≤8 blastomeres (early) goes to the natural early home (fallopian tube); >8 blastomeres (more developed) goes to the uterus.',
        ],
      },
      { t: 'p', html: '<b>The decision tree (built from NCERT’s definitions of the techniques).</b>' },
      {
        t: 'table',
        title: null,
        head: ['Problem', 'Technique', 'Rationale'],
        rows: [
          ['Male cannot inseminate, or has a low sperm count', 'AI / IUI', 'Semen placed in vagina/uterus; fertilisation in vivo'],
          ['Very low or abnormal sperm; penetration failure', 'ICSI', 'One sperm injected directly into ovum cytoplasm'],
          ['Woman cannot produce ova but can host fertilisation', 'GIFT', 'Donor ovum + sperm placed in fallopian tube; fertilisation in vivo'],
          ['Both gametes normal; fertilisation must be assisted', 'IVF', 'Fusion in vitro; embryo transferred (ET)'],
          ['IVF zygote or early embryo of up to 8 blastomeres', 'ZIFT', 'Early embryo → fallopian tube (natural early environment)'],
          ['IVF embryo >8 cells', 'IUT', 'More developed embryo → uterus (implantation-ready site)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key distinctions that trap students.</b><br>• <b>GIFT vs ZIFT vs IUT:</b> All three transfer into the female tract, but GIFT transfers gametes (unfused), ZIFT transfers a zygote/≤8-cell embryo to the tube, and IUT transfers an embryo >8 cells to the uterus. The tube is the natural environment for an early embryo; the uterus is for a more developed one.<br>• <b>ICSI vs IVF:</b> ICSI solves a sperm-penetration problem by injecting one sperm directly. IVF is used when fertilisation itself is the barrier and both gametes are functionally normal.<br>• <b>GIFT requires in-vivo fertilisation</b>: the couple’s own tubal environment must be healthy enough for fertilisation to proceed naturally once gametes are placed there.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>ART Selection Based on Cause.</b> A couple presents with: male partner has oligospermia (very low sperm count) and the sperm cannot penetrate the ovum even when placed near it in vitro. The wife has normal ovaries and uterus. Which ART technique is most appropriate, and why?',
        steps: [
          'The block is at the sperm-ovum interaction level: the sperm cannot penetrate. IVF alone will not solve this because even with egg and sperm together in a dish, penetration fails. ICSI (Intra Cytoplasmic Sperm Injection) is the correct technique: a single sperm is drawn up in a fine micropipette and injected directly into the ovum cytoplasm, bypassing the penetration step entirely.',
        ],
        ans: 'ICSI: a single sperm is injected directly into the ovum cytoplasm to bypass the penetration defect.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Distinguishing GIFT, ZIFT, and IUT.</b> A clinic performs assisted reproduction and transfers: (i) a donor ovum and the husband’s sperm (unfused gametes) into the wife’s fallopian tube; (ii) an 8-cell embryo formed by IVF into the wife’s fallopian tube; (iii) a 16-cell embryo formed by IVF into the wife’s uterus. Name the technique in each case.',
        steps: [
          'In case (i), gametes (unfused) go into the tube → GIFT (Gamete Intra Fallopian Transfer). In case (ii), a ≤8-cell embryo goes into the tube → ZIFT (Zygote Intra Fallopian Transfer). In case (iii), a >8-cell embryo goes into the uterus → IUT (Intra Uterine Transfer).',
        ],
        ans: '(i) GIFT; (ii) ZIFT; (iii) IUT.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why the Tube for ZIFT?</b> A student argues that since the ultimate goal of ART is a baby, all embryos should be transferred directly to the uterus. Explain why ZIFT uses the fallopian tube for an embryo that will eventually need to implant in the uterus.',
        steps: [
          'The fallopian tube is the natural early environment for an embryo. In natural conception the zygote begins its cleavage divisions (2, 4, 8 cells) as it travels along the tube, and only the later morula and blastocyst stages reach the uterus. ZIFT respects this natural developmental sequence: tube for the zygote and early embryo (up to 8 blastomeres), uterus for the more developed embryo (more than 8 blastomeres) that is ready for implantation.',
        ],
        ans: 'The tube is the natural early environment for ≤8-cell embryos; the uterus is the destination only when the embryo is developmentally ready (>8 cells) for implantation.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] A woman has blocked fallopian tubes but produces normal ova. The husband has normal sperm. Which ART technique is most appropriate, and where does fertilisation occur?',
            a: 'IVF (test-tube baby): fertilisation occurs outside the body (in vitro) because the tubes are blocked and sperm-egg meeting in vivo is impossible. With the tubes blocked, the embryo has to be transferred to the uterus.',
          },
          {
            q: '[NEET] State the key difference between ICSI and IVF in terms of whether the sperm penetrates the ovum on its own.',
            a: 'In IVF, sperm and ovum are placed together and the sperm fertilises the ovum by its own penetration. In ICSI, the sperm is injected directly into the cytoplasm, so it does not have to penetrate the zona pellucida or the egg membrane itself.',
          },
          {
            q: '[CBSE] Why is an embryo with more than 8 blastomeres transferred to the uterus rather than the fallopian tube?',
            a: 'An embryo >8 cells is developmentally ready for implantation; the uterus is the site of implantation in natural reproduction.',
          },
          {
            q: '[NEET] Name the ART technique indicated when a man has azoospermia and a few sperm are retrievable by surgery.',
            a: 'ICSI: a retrieved sperm is injected directly into the ovum cytoplasm.',
          },
          {
            q: '[CUET] In GIFT, why are the gametes placed in the fallopian tube and not the uterus?',
            a: 'In nature fertilisation occurs in the ampullary region of the fallopian tube, so GIFT places the gametes there to let fertilisation happen in vivo, as in a normal cycle. The uterus is the site of implantation, not of fertilisation.',
          },
        ],
      },
    ],
  },
];
