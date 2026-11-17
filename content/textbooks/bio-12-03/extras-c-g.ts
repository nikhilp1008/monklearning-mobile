import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 3 (Reproductive Health), Additional topics C to G, word for word from the Class 12 Biology Master
 * Reference (book pp. 144 to 161): C "Population Mathematics: Doubling Time, Growth Rate, and the Demographic Transition"
 * (opens at line 11 of p. 144, after Addendum B's practice answers; ends p. 146), D "STD Clinical Picture: Symptoms,
 * Complications, and the Infertility Connection" (low on p. 146 to p. 149), E "Hormonal Contraception at the Cellular
 * Level and the MTP Pharmacological Protocol" (mid p. 149 to the top of p. 152), F "Practice: Full Paper (All Addenda)"
 * (p. 152 line 3 to p. 153 line 6) and G "What NEET Actually Asks" (the book's "Addendum P", p. 153 line 7 to p. 161).
 * Page 162 is the next chapter.
 *
 * Topic indexes: C = 6, D = 7, E = 8, F = 9, G = 10. No figure is drawn on these pages (p. 145, 147, 153 to 155 and
 * 158 hold ruled tables only). The book's example headings ("Example C.1 - [NEET] Doubling Time Calculation") become
 * the example's tag (the bracket) and a bold lead on its question. Where the book prints no answer line of its own the
 * example's ans is ''. Assertion-reason items follow the standard four options (Q7's option (d) is our own, see new-text-F2.md).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 144–146 ─────────────────────────
  {
    n: 'C',
    title: 'Population Mathematics: Doubling Time, Growth Rate, and the Demographic Transition',
    extra: true,
    kalam: 'Questions can be framed like this: given a population growth rate, how long to double?',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter explains the causes of population explosion (falling death rate, continuing high birth rate) and gives the world and Indian population figures, but does not give the doubling-time and projection arithmetic. Questions can be framed like this: given a population growth rate, how long to double? Given current population, what will it be in 30 years at this rate? These are standard exponential-growth equations, applied here to human demography.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Doubling time formula (rule of 70).</b> For a population growing at rate <i>r</i> percent per year:<br><i>T</i><sub>d</sub> = <frac><num>70</num><den><i>r</i></den></frac> years.<br>This comes from <i>T</i><sub>d</sub> = <frac><num>ln 2</num><den><i>r</i></den></frac> where <i>r</i> is in decimal form (e.g., <i>r</i> = 0.02 for 2%). (70 is the rounded value of 100 × ln 2 = 69.3.) Solving (1 + <frac><num><i>r</i></num><den>100</den></frac>)<sup><i>T</i></sup> = 2 exactly gives 35.0 years at 2% and 41.1 years at 1.7%.',
      },
      {
        t: 'p',
        html: '<b>Population projection.</b> If a population is <i>P</i><sub>0</sub> now and grows at rate <i>r</i> per year for <i>t</i> years:<br><i>P</i><sub><i>t</i></sub> = <i>P</i><sub>0</sub> (1 + <frac><num><i>r</i></num><den>100</den></frac>)<sup><i>t</i></sup>.',
      },
      {
        t: 'p',
        html: '<b>Exponential form (continuous growth).</b><br><i>P</i><sub><i>t</i></sub> = <i>P</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup>, <i>T</i><sub>d</sub> = <frac><num>ln 2</num><den><i>r</i></den></frac>, where <i>r</i> is the continuous rate as a decimal. For small <i>r</i> it gives nearly the same results as the yearly formula above (for 1.7% a year over 30 years, 1.665 against 1.658). Every worked example here uses the yearly formula and the rule of 70.',
      },
      {
        t: 'p',
        html: '<b>The demographic transition model (beyond NCERT; the chapter describes only the imbalance between falling death rate and high birth rate).</b> The demographic transition model describes this imbalance in stages:',
      },
      {
        t: 'table',
        title: null,
        head: ['Stage', 'Death rate', 'Birth rate', 'Net growth'],
        rows: [
          ['Stage 1: High stationary', 'High', 'High', 'Slow/nil'],
          ['Stage 2: Early expanding', 'Falling (better health)', 'High', 'Population rises'],
          ['Stage 3: Late expanding', 'Low', 'Falling (urbanisation, education)', 'Growth slows'],
          ['Stage 4: Low stationary', 'Low', 'Low', 'Near zero'],
        ],
      },
      {
        t: 'p',
        html: 'The “population explosion” corresponds to the early-expanding stage, when India’s death rate fell sharply (post-1950s health advances) while the birth rate stayed high; its birth rate has since been falling (late expanding).',
      },
      {
        t: 'p',
        html: '<b>NCERT figures:</b> The world population rose from about 2 billion in 1900 to about 6 billion in 2000. India’s population grew from about 350 million at independence (1947) to about 1 billion by 2000.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Doubling Time Calculation.</b> India’s population was approximately 1 billion in 2001 and was growing at about 1.7% per year at that time. Calculate the approximate doubling time and predict the population in 2031 (30 years later) at this growth rate.',
        steps: [
          'Doubling time:<br><i>T</i><sub>d</sub> = <frac><num>70</num><den>1.7</den></frac> ≈ 41 years.',
          'Population in 2031 (<i>t</i> = 30 years):<br><i>P</i><sub>2031</sub> = 1000 million × (1 + <frac><num>1.7</num><den>100</den></frac>)<sup>30</sup> = 1000 million × (1.017)<sup>30</sup>.',
          '(1.017)<sup>30</sup> ≈ 1.658 (using a calculator). <i>P</i><sub>2031</sub> ≈ 1000 × 1.658 = 1658 million.',
        ],
        ans: 'Doubling time ≈ 41 years; predicted 2031 population ≈ 1.66 billion.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Demographic Transition Stage.</b> The following data is observed in a country: Death rate has fallen sharply over 20 years, birth rate is still high, and the population is growing rapidly. Identify which stage of demographic transition this represents, and name the phenomenon of the population surge during the gap between the falling death rate and the later fall in birth rate.',
        steps: [
          'This is Stage 2 (early expanding). During the gap between the sharp fall in death rate and the later fall in birth rate, the population grows rapidly: this is the <b>population explosion</b> or <b>population surge</b>.',
        ],
        ans: 'Early expanding stage; the population surge during this gap is called the population explosion.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Population Growth Equation.</b> A country had 50 million people in 2000 and a growth rate of 2% per year. (i) What is the doubling time? (ii) What will the population be in 2030? (iii) How does this compare with linear growth over the same period?',
        steps: [
          '(i) <i>T</i><sub>d</sub> = <frac><num>70</num><den>2</den></frac> = 35 years.',
          '(ii) <i>P</i><sub>2030</sub> = 50 × (1.02)<sup>30</sup>. (1.02)<sup>30</sup> is about 1.811. <i>P</i><sub>2030</sub> is about 50 × 1.811 = 90.6 million.',
          '(iii) Linear growth at 2% of 50 million = 1 million per year → 30 years → 30 million added → population = 80 million. Exponential gives about 90.6 million: the difference of about 10.6 million is the compound interest effect, and it grows larger each year.',
        ],
        ans: '(i) ~35 years; (ii) about 90.6 million; (iii) Exponential growth exceeds linear by about 10.6 million over 30 years: the gap widens over time.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] A population is growing at 2.5% per year. Calculate its approximate doubling time.',
            a: '<i>T</i><sub>d</sub> = <frac><num>70</num><den>2.5</den></frac> = 28 years.',
          },
          {
            q: '[NEET] The world population was about 6 billion in 2000 and was growing at roughly 1.3% per year. Estimate the doubling time and the year by which it would reach 12 billion at this rate.',
            a: '<i>T</i><sub>d</sub> = <frac><num>70</num><den>1.3</den></frac> ≈ 54 years, so the population would reach 12 billion (a doubling from 6 billion) around the year 2000 + 54 = 2054.',
          },
          {
            q: '[CBSE] Distinguish between the death rate and birth rate trends in Stage 2 vs Stage 4 of demographic transition.',
            a: 'Stage 2: death rate falling sharply (better health), birth rate still high → population rises rapidly. Stage 4: both death rate and birth rate low → population stable or slowly growing.',
          },
          {
            q: '[NEET] A town had 100,000 people in 2010. If it grows at 1% per year, what is its projected population in 2040?',
            a: '<i>P</i><sub>2040</sub> = 100,000 × (1.01)<sup>30</sup> ≈ 100,000 × 1.348 = 134,800 people.',
          },
          {
            q: '[CUET] Name the demographic stage in which India was most likely placed during the 1970s–1990s, and give one reason for your answer.',
            a: 'Between the early-expanding and late-expanding stages (Stage 2 moving into Stage 3): death rate had fallen substantially due to health programmes (IMR/MMR declining), while birth rate was slowly declining due to urbanisation and education, but population was still growing rapidly (the explosion phase).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 146–149 ─────────────────────────
  {
    n: 'D',
    title: 'STD Clinical Picture: Symptoms, Complications, and the Infertility Connection',
    extra: true,
    kalam: 'Untreated gonorrhoea and chlamydiasis ascend the reproductive tract to cause Pelvic Inflammatory Disease (PID).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives causative agents in a table and lists the complications of untreated STDs, but does not give the symptoms of each disease or the window-period concept. The link between untreated STDs and tubal-factor infertility is a key cross-topic connection in the chapter.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The window period.</b> After initial infection, many STDs have a “window period” during which the person is infectious but standard tests may not detect the pathogen. This is why a negative test shortly after exposure does not rule out infection: testing must be repeated after the window period (about 2–12 weeks for HIV, depending on the test).',
      },
      { t: 'p', html: '<b>Clinical features: the diagnostic clues.</b>' },
      {
        t: 'table',
        title: null,
        head: ['STD', 'Key symptom in females', 'Key symptom in males', 'Notes'],
        rows: [
          ['Gonorrhoea', 'Mucopurulent vaginal discharge, dysuria', 'Purulent urethral discharge, dysuria', 'Often asymptomatic in women'],
          ['Chlamydiasis', 'Mucoid cervical discharge (often none); PID if untreated', 'Watery/burning urethral discharge', 'Most common bacterial STI; frequently asymptomatic'],
          ['Trichomoniasis', 'Frothy yellow-green vaginal discharge, itching', 'Often none; urethritis or prostatitis', 'Protozoan; pH of vagina altered'],
          ['Genital herpes', 'Painful vesicles/ulcers on genitals', 'Same', 'Virus (herpes simplex virus); lesions recur'],
          ['Genital warts', 'Cauliflower-like growths on vulva/cervix', 'Genital warts', 'HPV (warts: types 6 and 11); other HPV types, mainly 16 and 18, are linked to cervical cancer'],
          ['Syphilis', 'Painless chancre (primary); rash (secondary)', 'Same', 'Primary, secondary and tertiary stages if untreated (with a symptom-free latent period between)'],
          ['HIV/AIDS', 'Often no symptoms for years (an early flu-like illness may occur); then opportunistic infections', 'Same', 'Retrovirus; window period about 2–12 weeks, depending on the test'],
          ['Hepatitis-B', 'Jaundice, liver disease', 'Same', 'Systemic (mainly liver); also spread by blood'],
        ],
      },
      {
        t: 'p',
        html: '<b>The PID–infertility chain (linking the STD topic to the infertility topic).</b> Untreated gonorrhoea and chlamydiasis ascend the reproductive tract to cause Pelvic Inflammatory Disease (PID), inflammation of the uterus, fallopian tubes, and surrounding tissues. PID scars the fallopian tubes, causing tubal-factor infertility (the egg and sperm cannot meet even though both are functional). This is a major consequence of untreated STDs and the direct link between the STD material and the infertility material in the chapter. The chapter mentions “blocked fallopian tubes” as a cause of female infertility and notes that untreated STD scarring is often behind it, but does not give the step-by-step PID chain.',
      },
      {
        t: 'p',
        html: '<b>Asymptomatic transmission.</b> STDs are most dangerous when asymptomatic: the person feels well and unknowingly passes the infection to partners. This is especially true for chlamydiasis and gonorrhoea in women, where a large share of infections produce no symptoms. This is why regular screening, not just symptoms-based testing, is essential for high-risk individuals.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>PID–Infertility Connection.</b> A 28-year-old woman reports infertility. History reveals she had an untreated vaginal discharge five years ago. Investigations show blocked fallopian tubes. Explain the chain of events connecting the untreated discharge to the infertility.',
        steps: [
          'Untreated discharge → likely chlamydial or gonococcal infection → ascended the reproductive tract → caused Pelvic Inflammatory Disease (PID) → inflammation scarred the fallopian tubes → tubal-factor infertility → blocked tubes prevent sperm-egg meeting. This is the standard pathophysiology of STD-induced infertility.',
        ],
        ans: 'Infection (probably chlamydial or gonococcal) → PID → tubal scarring → infertility due to blocked tubes.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Window Period.</b> A man had unprotected intercourse with a new partner. He tests negative for HIV one week later. His doctor advises a repeat test after three months. Why is the initial test result unreliable?',
        steps: [
          'The HIV window period (time between infection and when tests can detect it) is approximately 2–12 weeks, depending on the test. During this period the person is infected and infectious but antibody/antigen tests may be negative. A single negative test after only one week is therefore unreliable: it must be repeated after the window period has elapsed.',
        ],
        ans: 'The window period means antibodies/antigens may not be detectable for 2–12 weeks after infection; the test must be repeated later.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Asymptomatic Transmission Case.</b> A man is diagnosed with gonorrhoea. He insists he has had only one sexual partner. The doctor explains that his partner likely had no symptoms. What term describes this situation and why is it clinically important?',
        steps: [
          'The term is asymptomatic carrier. Many STDs, especially chlamydiasis and gonorrhoea in women, present with no symptoms in a large proportion of cases. The partner was infectious without knowing it. This is clinically important because asymptomatic individuals do not seek treatment, allowing the infection to persist and cause complications (PID, infertility, ectopic pregnancy), and they continue transmitting the infection unknowingly. It is also why partner notification and screening are essential.',
        ],
        ans: 'Asymptomatic carrier: the partner had no symptoms but was infectious; this explains the transmission and highlights why screening, not just symptom-based diagnosis, is necessary.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[CUET] Name two STDs that are often asymptomatic, especially in women.', a: 'Chlamydiasis and gonorrhoea: both frequently asymptomatic in women (a large share of cases).' },
          {
            q: '[NEET] Name the complication that links untreated gonorrhoea or chlamydiasis to female infertility.',
            a: 'Pelvic Inflammatory Disease (PID), which scars the fallopian tubes causing tubal-factor infertility.',
          },
          {
            q: '[CBSE] Why is a single HIV test immediately after a potential exposure considered unreliable?',
            a: 'The HIV window period (about 2–12 weeks, depending on the test) means antibodies may not be detectable immediately after infection; a repeat test after the window period is necessary.',
          },
          {
            q: '[NEET] A woman with trichomoniasis has a frothy yellow-green discharge. What organism causes this and what additional complication is she at risk for during pregnancy?',
            a: '<i>Trichomonas vaginalis</i> (a protozoan); pregnant women with trichomoniasis are at increased risk of preterm labour and low birth weight babies.',
          },
          {
            q: '[CUET] State one reason why untreated STIs can lead to ectopic pregnancy.',
            a: 'PID caused by untreated STIs scars the fallopian tubes. Scarring can partially obstruct the tube, so the fertilised ovum implants outside the uterus (ectopic pregnancy) rather than travelling normally to the uterus.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 149–152 ─────────────────────────
  {
    n: 'E',
    title: 'Hormonal Contraception at the Cellular Level and the MTP Pharmacological Protocol',
    extra: true,
    kalam: 'Combined oral pills contain oestrogen + progestogen; progestogen-only pills (mini-pill) contain only progestogen.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names the contraceptive hormones and gives the progestogen’s triple block and Saheli’s receptor-blocking action in brief, but not the cellular detail or the drugs used in medical (pharmacological) MTP.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Progestin triple block: the cellular mechanism.</b> Combined oral pills contain oestrogen + progestogen; progestogen-only pills (mini-pill) contain only progestogen. The combined pill acts through all three mechanisms below; the progestogen-only pill (mini-pill) acts mainly through mechanism 2 (thick mucus) and only partly on ovulation:<br>1. <b>Negative feedback on the hypothalamus-pituitary axis:</b> Exogenous progestogen suppresses the pulsatile GnRH secretion from the hypothalamus, which reduces both FSH and LH release from the anterior pituitary. Without a pre-ovulatory LH surge, ovulation does not occur. (Oestrogen augments this feedback.)<br>2. <b>Thickened cervical mucus:</b> Progesterone acts on the cervical epithelium to produce thick, viscous, cellular mucus that physically blocks sperm penetration. This alone can prevent pregnancy even if ovulation occurs.<br>3. <b>Hostile endometrium:</b> The progestogen prevents the normal proliferative (oestrogen-driven) growth of the endometrium. The endometrium remains thin and atrophic, making it unsuitable for blastocyst implantation.',
      },
      {
        t: 'p',
        html: '<b>Saheli’s unique mechanism: oestrogen receptor blockade.</b> Saheli (centchroman) is a selective oestrogen receptor modulator (SERM). Unlike progestins, it acts mainly at the uterus rather than through the pituitary-ovarian axis. It selectively blocks oestrogen receptors in the uterus and breast while acting as an oestrogen agonist on bone. In the uterus, blocking oestrogen receptors prevents the normal oestrogen-driven endometrial proliferation: the endometrium remains unreceptive to implantation. It is a non-steroidal pill (NCERT) and is taken once a week (NCERT’s wording; the clinical schedule begins with two tablets a week for the first three months).',
      },
      {
        t: 'p',
        html: '<b>Medical (pharmacological) MTP protocol.</b> First-trimester medical abortion uses two drugs in sequence:<br>1. <b>Mifepristone (RU-486):</b> An antiprogestogen. It blocks progesterone receptors at the uterine level, causing decidual breakdown, softening of the cervix, and detachment of the embryo from the uterine wall. It also sensitises the myometrium to prostaglandins.<br>2. <b>Misoprostol:</b> A prostaglandin E<sub>1</sub> analogue. Given 24–48 hours after mifepristone, it induces uterine contractions that expel the conceptus. Used up to 9 weeks of gestation (63 days) for medical abortion (the figure in current Indian rules; NCERT gives only the 12-week safety limit).<br>The combination is ~95% effective. Surgical methods (MVA: Manual Vacuum Aspiration, or D&C: Dilatation and Curettage) are used for later or more advanced pregnancies where medical abortion is less reliable.',
      },
      {
        t: 'p',
        html: '<b>Why MTP is not a contraceptive: the cellular distinction.</b> Contraception prevents fertilisation or blocks implantation of a pre-implantation embryo. MTP terminates an established pregnancy: by the time a woman discovers she is pregnant (typically 4–6 weeks), the embryo has already implanted and is producing hCG. No emergency contraceptive pill can reverse implantation once it has occurred. This is the biological boundary between contraception and termination.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Progestin Triple Block.</b> Name the three sites at which progestogen acts to prevent pregnancy in combined oral contraceptive pills, and state which site is the primary mechanism.',
        steps: [
          'The three sites are: (i) hypothalamus-pituitary: suppression of GnRH, FSH, and LH to block ovulation; (ii) cervix: thickened cervical mucus blocking sperm entry; (iii) uterus: hostile, thin endometrium unsuitable for implantation. The primary mechanism is suppression of the LH surge (ovulation block) through pituitary inhibition.',
        ],
        ans: 'Hypothalamus-pituitary (blocks ovulation), cervix (thick mucus), uterus (unreceptive endometrium); primary mechanism is ovulation prevention.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Saheli’s Mechanism Distinction.</b> How does the contraceptive mechanism of Saheli differ from that of combined oral pills?',
        steps: [
          'Combined oral pills act mainly through the hypothalamus-pituitary axis: oestrogen and progestogen suppress FSH/LH to block ovulation, with secondary effects on cervical mucus and endometrium. Saheli (centchroman) is a selective oestrogen receptor modulator (SERM) that acts mainly on uterine oestrogen receptors rather than through the pituitary-ovarian axis. It blocks oestrogen receptors in the uterus, preventing endometrial proliferation and making the endometrium unreceptive to implantation.',
        ],
        ans: 'Saheli blocks oestrogen receptors in the uterus (peripheral action); combined pills suppress the hypothalamic-pituitary-ovarian axis (central action).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>MTP Pharmacological Protocol.</b> Assertion (A): Mifepristone is used together with misoprostol for medical abortion, not on its own. Reason (R): Mifepristone blocks progesterone receptors and detaches the embryo, while misoprostol, a prostaglandin analogue, causes the uterine contractions that expel the conceptus.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is true: the regimen has two steps: mifepristone first, then misoprostol 24–48 hours later. R is also true and is the reason: mifepristone prepares the uterus (receptor blockade, decidual breakdown, cervical softening), but expelling the conceptus needs the prostaglandin-induced contractions that misoprostol supplies. R explains A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name the two drugs used in medical (pharmacological) abortion and state the function of each.',
            a: 'Mifepristone (antiprogestogen: blocks progesterone receptors, detaches embryo, sensitises uterus) and Misoprostol (prostaglandin E<sub>1</sub> analogue: induces uterine contractions to expel the conceptus).',
          },
          {
            q: '[NEET] Why is Saheli described as a “selective oestrogen receptor modulator” rather than simply a hormone pill?',
            a: 'Because it selectively blocks oestrogen receptors in the uterus and breast (preventing endometrial proliferation) while acting as an oestrogen agonist in bone: its effects are tissue-specific, not systemic hormonal suppression.',
          },
          {
            q: '[CBSE] Up to how many weeks of gestation is the mifepristone-misoprostol regimen approved for medical abortion in India?',
            a: 'Up to 9 weeks (63 days), the figure in current Indian rules (NCERT gives only the 12-week safety limit). For more advanced pregnancies, surgical methods (MVA, D&C) are used.',
          },
          {
            q: '[NEET] What is the primary mechanism by which progestogen-only pills (mini-pills) prevent pregnancy, even in women who continue to ovulate?',
            a: 'Thickened cervical mucus: progestogen acts directly on the cervix to produce thick, viscous mucus that blocks sperm penetration, preventing fertilisation even if ovulation occurs.',
          },
          {
            q: '[CUET] Why does mifepristone alone not reliably terminate pregnancy: why is misoprostol necessary?',
            a: 'Mifepristone alone causes decidual breakdown and embryo detachment, but without prostaglandin-induced uterine contractions the conceptus is not expelled efficiently. Misoprostol provides the necessary uterine contractions to complete the expulsion.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 152–153 ─────────────────────────
  {
    n: 'F',
    title: 'Practice: Full Paper (All Addenda)',
    extra: true,
    kalam: 'Emergency contraceptive pills should be taken within how many hours of unprotected coitus?',
    blocks: [
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Emergency contraceptive pills should be taken within how many hours of unprotected coitus?',
            a: '72 hours (3 days) at the outside (NCERT’s limit); the earlier the better.',
          },
          {
            q: '[CBSE] Name the ART technique in which a donor ovum and the husband’s sperm are placed in the wife’s fallopian tube.',
            a: 'GIFT (Gamete Intra Fallopian Transfer).',
          },
          {
            q: '[NEET] A population of 80 million is growing at 2.5% per year. Calculate the approximate doubling time.',
            a: '<i>T</i><sub>d</sub> = <frac><num>70</num><den>2.5</den></frac> = 28 years.',
          },
          {
            q: '[CUET] Name two STDs that are frequently asymptomatic in women and can lead to infertility if untreated.',
            a: 'Chlamydiasis and gonorrhoea: both frequently asymptomatic in women and can ascend to cause PID, scarring fallopian tubes and leading to tubal-factor infertility.',
          },
          {
            q: '[NEET] State the primary mechanism by which progestogen in oral contraceptive pills prevents ovulation.',
            a: 'Negative feedback on the hypothalamus-pituitary axis: suppresses GnRH, FSH, and LH, preventing the pre-ovulatory LH surge and thus ovulation.',
          },
          {
            q: '[CBSE] Distinguish between the mechanism of action of Saheli and combined oral pills.',
            a: 'Combined pills act through the hypothalamus-pituitary axis (suppressing FSH/LH → blocking ovulation) plus cervical mucus and endometrial effects. Saheli is a SERM that blocks oestrogen receptors mainly in the uterus rather than acting through the pituitary-ovarian axis.',
          },
          {
            q: '[NEET] What is the function of misoprostol in medical abortion?',
            a: 'Misoprostol is a prostaglandin E<sub>1</sub> analogue that induces uterine contractions to expel the conceptus after mifepristone has detached it from the uterine wall.',
          },
          {
            q: '[CUET] Why is the copper-IUD described as both an emergency contraceptive and a long-term contraceptive?',
            a: 'When inserted within 72 hours of unprotected coitus it prevents pregnancy as emergency contraception (the copper ions suppress sperm motility and fertilising capacity). After the emergency use it remains in place as an ongoing contraceptive for 5–10 years, depending on the device.',
          },
          {
            q: '[NEET] A couple presents with male-factor infertility: very few sperm and none can penetrate the ovum. Which ART technique is indicated?',
            a: 'ICSI (Intra Cytoplasmic Sperm Injection): a single sperm is injected directly into the ovum cytoplasm to bypass the penetration defect.',
          },
          {
            q: '[CBSE] Explain why an early embryo (≤8 cells) is transferred to the fallopian tube rather than the uterus in ART.',
            a: 'In natural development the zygote and its early cleavage stages (up to the 8-cell stage) are in the fallopian tube, and the uterus is reached later as a morula or blastocyst. So an embryo with ≤8 cells goes to the tube, and the uterus is the destination only when the embryo is developmentally ready (>8 cells) for implantation.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 153–161 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The book groups Reproductive Health questions into six recognisable shapes.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Across recent NEET and CBSE papers, Reproductive Health questions fall into five themes (the book’s estimate from past papers, not official figures). The table shows how much emphasis each one receives.',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Emphasis'],
        rows: [
          ['Contraception (methods, mechanisms, classification)', 'Highest'],
          ['Assisted Reproductive Technologies (IVF, ZIFT, GIFT, ICSI, IUI)', 'High'],
          ['STDs and infertility', 'Moderate'],
          ['Reproductive health strategies and population', 'Moderate'],
          ['MTP and amniocentesis', 'Lower but consistent'],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means in practice:</b> A student who masters contraception mechanisms and ART technique selection can answer a large share of the chapter’s questions. Numerical details such as failure rates are rarely asked (the book’s estimate from past papers, not official figures), so spend your time on mechanisms and decision rules first.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'The book groups Reproductive Health questions into six recognisable shapes. Each is cracked below.',
      },

      { t: 'p', html: '<b>1. The Definition/Fact Recall (straight factual question)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single-sentence stem asking for a full form, a year, or a single correct match: no analysis required if you know it.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example:</b> RCH stands for:<br><b>(a)</b> Routine Check-up of Health<br><b>(b)</b> Reproduction Cum Hygiene<br><b>(c)</b> Reversible Contraceptive Hazards<br><b>(d)</b> Reproductive and Child Health Care',
        steps: [
          '<b>Approach:</b> These are pure recall. Build a one-page cheat sheet of every acronym, year, and organism name in the chapter. There is no reasoning path: either you have it or you lose it.',
          '<b>Why:</b> RCH is the national programme for reproductive health; its expansion is Reproductive and Child Health Care.',
        ],
        ans: '(d) Reproductive and Child Health Care.',
      },

      { t: 'p', html: '<b>2. The Method–Mechanism Match (“Which Pair Is Wrong?”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of methods must be matched with their modes of action, or four options each pair a method with a mechanism and one pair is false. This is a frequently set trap (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example:</b> Match the method in Column I with its mode of action in Column II:<br><br>Column I<br>A. Contraceptive pill<br>B. Condom<br>C. Vasectomy<br>D. Copper T<br><br>Column II<br>I. Prevents sperms reaching cervix<br>II. Suppresses sperm motility and fertilising capacity<br>III. Prevents ovulation<br>IV. Semen contains no sperms<br><br><b>(a)</b> A–II; B–III; C–I; D–IV<br><b>(b)</b> A–III; B–I; C–IV; D–II<br><b>(c)</b> A–IV; B–I; C–II; D–III<br><b>(d)</b> A–III; B–IV; C–I; D–II',
        steps: [
          '<b>Approach:</b> Test each pair independently. The pill prevents ovulation (III). The condom physically blocks sperm from reaching the cervix (I). Copper T releases Cu<sup>2+</sup> ions that suppress sperm motility and fertilising capacity (II). Vasectomy leaves the ejaculate without sperms (IV), but note why: spermatogenesis continues in the testes, and only the transport pipeline (the vas deferens) is cut. The classic trap is any option claiming that vasectomy or tubectomy stops gamete production: that is always wrong.',
          '<b>Why:</b> Contraceptive pill → prevents ovulation (III); condom → prevents sperms reaching the cervix (I); vasectomy → semen contains no sperms because transport is blocked (IV); Copper T → suppresses sperm motility and fertilising capacity (II). Option (b) is the only sequence that gets all four right.',
        ],
        ans: '(b) A–III; B–I; C–IV; D–II.',
      },

      { t: 'p', html: '<b>3. The Mixed Fact Match</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of terms (a disease, a drug, an institution, a date, a vitamin, a test) must be matched with a list of facts. The pairs come from different parts of the chapter, so no single topic is enough.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example:</b><br>Column I<br>(A) Hepatitis B<br>(B) Saheli<br>(C) Normal functioning of reproductive organs<br>(D) WHO<br>(E) ELISA technique<br><br>Column II<br>I. CDRI, Lucknow<br>II. 7 April 1948<br>III. Detection of antibody/antigen<br>IV. Hepatitis B virus<br>V. Vitamin E<br><br><b>(a)</b> A–V; B–III; C–I; D–II; E–IV<br><b>(b)</b> A–IV; B–I; C–V; D–II; E–III<br><b>(c)</b> A–V; B–III; C–IV; D–II; E–I<br><b>(d)</b> A–IV; B–I; C–II; D–V; E–III',
        steps: [
          '<b>Approach:</b> Memorise such facts as a table, not as prose, and check each pair on its own. Hepatitis B → Hepatitis B virus (IV). Saheli → CDRI, Lucknow (I). WHO → established on 7 April 1948 (II). ELISA → detection of antibody/antigen (III). Normal functioning of the reproductive organs → Vitamin E, the anti-sterility vitamin (V; the “anti-sterility vitamin” label comes from animal studies). Once the five pairs are fixed, only one option fits.',
          '<b>Why:</b> Hepatitis B is caused by HBV (IV); Saheli was developed at CDRI (I); Vitamin E is the anti-sterility vitamin (V); WHO was established on 7 April 1948 (II); the ELISA test detects antibodies/antigens (III). Option (b) satisfies all five pairs.',
        ],
        ans: '(b) A–IV; B–I; C–V; D–II; E–III.',
      },

      { t: 'p', html: '<b>4. The ART Technique Selection (case-based)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A clinical scenario describes a couple’s problem; you must name the correct ART procedure.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example:</b> The technique called Gamete Intra Fallopian Transfer (GIFT) is recommended for those females:<br><b>(a)</b> who cannot produce an ovum<br><b>(b)</b> who cannot retain the foetus inside the uterus<br><b>(c)</b> whose cervical canal is too narrow to allow passage for the sperms<br><b>(d)</b> who cannot provide suitable environment for fertilisation',
        steps: [
          '<b>Approach:</b> Extract exactly two facts from the stem: (1) what is the problem? (2) what stage is being handled? GIFT uses gametes (not embryos) placed in the fallopian tube, so fertilisation happens inside the woman’s body. It is specifically for a woman who cannot produce an ovum but who can provide the suitable environment for fertilisation and development. That matches option (a). Option (d) states the reverse: GIFT depends on the woman’s own tube providing a suitable environment, so a woman who cannot provide one is not helped by it.',
          '<b>Why:</b> GIFT transfers an ovum collected from a donor into the fallopian tube of a woman who cannot produce ova but can provide the suitable environment for fertilisation and further development.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>5. The Assertion–Reason (A–R) Format</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements are linked; you must choose whether both are true, whether R explains A, and other combinations.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example:</b> Assertion (A): Amniocentesis is often misused.<br>Reason (R): Amniocentesis is meant for determining genetic disorders in the foetus, but it is being used to determine the sex of the foetus, to kill the normal female foetus.<br><b>(a)</b> Both A and R are true and R correctly explains A<br><b>(b)</b> Both A and R are true but R does not explain A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
        steps: [
          '<b>Approach:</b> Always test A and R independently before testing the relationship. (A) is true: the misuse of amniocentesis for sex determination is well documented. (R) is also true: it gives the reason for the misuse. Does R explain A? Yes: because amniocentesis reveals sex, it is misused for sex determination and female foeticide. That is the explanation of why it is misused. Therefore (a).',
          '<b>Why:</b> Amniocentesis, meant to detect genetic disorders, has been abused for prenatal sex determination, leading to female foeticide, which is why a statutory ban exists (PCPNDT Act, 1994). This supports both A and R and the causal link between them.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>6. The Statement-Selection (Multiple-Correct) Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Several numbered statements are given; you must identify which combination is correct.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example:</b> Which of the following statements are correct?<br>(i) Purpose of tubectomy is to prevent egg formation.<br>(ii) The most important component of oral contraceptive pills is progesterone.<br>(iii) Contraceptive oral pills help in birth control by preventing ovulation.<br>(iv) Genital warts is a sexually transmitted disease caused by herpes virus.<br>(v) In India, there is rapid decline in infant mortality rate and maternal mortality rate.<br><b>(a)</b> (i), (ii) and (iii)<br><b>(b)</b> (ii), (iii) and (v)<br><b>(c)</b> (iii), (iv) and (v)<br><b>(d)</b> (i), (iv) and (v)',
        steps: [
          '<b>Approach:</b> Evaluate each statement on its own. (i) is wrong: tubectomy blocks transport of the egg, not its formation; eggs continue to be produced. (ii) is correct: progestogen/progesterone is the primary active component. (iii) is correct: pills inhibit FSH/LH, preventing ovulation. (iv) is wrong: genital warts is caused by HPV (Human Papillomavirus), not herpes virus; genital herpes is caused by herpes simplex virus. (v) is correct: falling MMR and IMR are among the indicators of improving reproductive health in India. Only (ii), (iii) and (v) are correct.',
          '<b>Why:</b> Pills contain progestogen; HPV causes genital warts; and declining MMR and IMR are indicators of a reproductively healthier society.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The examiner builds these questions to punish specific, predictable errors. Here are traps that are set often (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What students do wrong', 'Why it is wrong'],
        rows: [
          [
            'Sterilisation stops gamete production',
            'Select options saying vasectomy/tubectomy prevents sperm or egg formation',
            'Both procedures block transport only; production continues.',
          ],
          [
            'Confusing IUD mechanisms',
            'Think all IUDs work the same way',
            'Three distinct mechanisms: phagocytosis (non-medicated), Cu<sup>2+</sup> ions suppress sperm motility and fertilising capacity (copper), mucus/endometrium changes (hormonal).',
          ],
          [
            'Swapping oligospermia and azoospermia',
            'Treat azoospermia as “low sperm count”',
            'Azoospermia = no sperm in the semen; oligospermia = low count.',
          ],
          [
            'ART blastomere rule reversed',
            'Send >8 cells to the tube, ≤8 to the uterus',
            '≤8 blastomeres → ZIFT → fallopian tube; >8 → IUT → uterus.',
          ],
          [
            'GIFT vs. IVF destination confusion',
            'Think GIFT uses the uterus',
            'GIFT places gametes (not embryos) in the fallopian tube for in-vivo fertilisation.',
          ],
          [
            'Mixing up the year figures',
            '1951 ↔ 1971 ↔ 1994',
            'Family planning = 1951; MTP legalised = 1971; PCPNDT Act = 1994.',
          ],
          [
            'Confusing medical safety window with legal limit for MTP',
            'Quote 20 weeks when the question asks for the safe window',
            'Medical safety: first trimester (~12 weeks). Legal limits: 20 weeks (one RMP), up to 24 weeks for special categories (two RMPs).',
          ],
          [
            'STD-but-not-RTI',
            'Think all STDs infect the reproductive tract',
            'AIDS and hepatitis-B are sexually transmitted but are systemic infections, not infections confined to the reproductive tract. (NCERT uses STD, STI, VD and RTI as names for the same group; this distinction is the book’s and matters only if an item asks it.)',
          ],
          [
            'Condom’s dual role forgotten',
            'In assertion-reason, miss that condoms also lower the risk of STDs',
            'Among the methods of this chapter, only the condom (male or female) also lowers the risk of STDs; pills, IUDs and sterilisation protect against pregnancy only.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Eight questions in ascending difficulty, each with a worked explanation.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Q1: Easy (direct recall)] Which one of the following organisations defined “reproductive health means a total well-being in all aspects of reproduction”?<br><b>(a)</b> WHL<br><b>(b)</b> UNESCO<br><b>(c)</b> WHO<br><b>(d)</b> WWW',
            a: '(c) WHO. <b>Explanation:</b> According to the World Health Organisation (WHO), reproductive health is total well-being in the physical, emotional, behavioural, and social aspects of reproduction.',
          },
          {
            q: '[Q2: Easy (method classification)] ‘Saheli’, the once-a-week oral contraceptive, was developed at:<br><b>(a)</b> AIIMS<br><b>(b)</b> Central Drug Research Institute<br><b>(c)</b> Health Care Pvt. Ltd.<br><b>(d)</b> Bharat Immunologicals',
            a: '(b) Central Drug Research Institute, Lucknow. <b>Explanation:</b> Saheli is a once-a-week, non-steroidal oral contraceptive developed at CDRI, Lucknow. Its active compound is centchroman.',
          },
          {
            q: '[Q3: Medium (mechanism trap)] The most important component of oral contraceptive pills is:<br><b>(a)</b> Progesterone<br><b>(b)</b> Growth hormone<br><b>(c)</b> Thyroxine<br><b>(d)</b> Luteinizing hormone',
            a: '(a) Progesterone. <b>Explanation:</b> Combined oral pills contain a progestogen with an oestrogen, taken daily for 21 days (progestogen-only pills contain the progestogen alone). Progestogen (a progesterone-like compound, often with oestrogen) is the main component.',
          },
          {
            q: '[Q4: Medium (mechanism trap)] Copper ions in copper-releasing IUDs work by:<br><b>(a)</b> Increasing phagocytosis of sperms<br><b>(b)</b> Supplying nutrients to speed sperm to the ovum<br><b>(c)</b> Suppressing sperm motility and fertilising capacity<br><b>(d)</b> Thickening cervical mucus',
            a: '(c) Suppressing sperm motility and fertilising capacity. <b>Explanation:</b> Copper-releasing IUDs (Cu-T, Cu-7, Multiload-375) release Cu<sup>2+</sup> ions that are spermicidal: they suppress sperm motility and the fertilising capacity of sperm. Option (a) describes the non-medicated IUD. Option (b) is the inverse: it claims copper helps sperm, which is the exact opposite of the mechanism. Option (d) describes a hormone-releasing IUD.',
          },
          {
            q: '[Q5: Medium (ART selection)] The technique in which a single sperm is directly injected into the cytoplasm of an ovum is:<br><b>(a)</b> GIFT<br><b>(b)</b> ZIFT<br><b>(c)</b> ICSI<br><b>(d)</b> IUI',
            a: '(c) ICSI (Intra Cytoplasmic Sperm Injection). <b>Explanation:</b> ICSI injects a single sperm straight into the ovum’s cytoplasm. It is used when sperm cannot penetrate the egg.',
          },
          {
            q: '[Q6: Hard (statement selection, multiple correct)] Which of the following statements are correct?<br>(i) MTPs are considered relatively safe during the first trimester of pregnancy.<br>(ii) Generally, chances of conception are nil until a mother breast-feeds the infant for up to two years.<br>(iii) Intrauterine devices like copper-T are effective contraceptives.<br>(iv) Contraception pills may be taken up to one week after coitus to prevent conception.<br><b>(a)</b> (i) and (ii)<br><b>(b)</b> (ii) and (iii)<br><b>(c)</b> (iii) and (iv)<br><b>(d)</b> (i) and (iii)',
            a: '(d) (i) and (iii). <b>Explanation:</b> (i) is true: the first trimester (~12 weeks) is the relatively safe window. (ii) is false: lactational amenorrhea is reliable only up to ~6 months, not two years. (iii) is true: copper-T is an effective contraceptive. (iv) is false: regular contraceptive pills are not a post-coital method (they are started within the first 5 days of the cycle and taken daily), and emergency pills must be taken within 72 hours of coitus, not a week.',
          },
          {
            q: '[Q7: Hard (assertion–reason)] Assertion (A): Cu-T and Cu-7 do not suppress sperm motility.<br>Reason (R): The copper ions released by them affect sperm motility.<br><b>(a)</b> Both A and R are true and R correctly explains A<br><b>(b)</b> Both A and R are true but R does not explain A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
            a: '(d) A is false, R is true. <b>Explanation:</b> A is false: the Cu<sup>2+</sup> ions released by Cu-T and Cu-7 do suppress sperm motility. R is true: it is the copper ions (not hormones) that do this, but R cannot rescue A. Cu-T and Cu-7 are copper-releasing, not hormone-releasing (the hormone-releasing IUDs are Progestasert and LNG-20). So the answer is (d).',
          },
          {
            q: '[Q8: Hard (mechanism)] A woman is fitted with a copper-releasing intrauterine device such as Cu-T. Which feature is correctly associated with it?<br><b>(a)</b> It suppresses sperm motility and its fertilising capacity<br><b>(b)</b> It makes the uterus unsuitable for the attachment of blastocysts<br><b>(c)</b> It protects the user from contracting AIDS and STDs<br><b>(d)</b> It acts as a spermicidal means and decreases contraceptive efficiency',
            a: '(a) It suppresses sperm motility and its fertilising capacity. <b>Explanation:</b> Copper-releasing IUDs release Cu<sup>2+</sup> ions that are spermicidal and suppress sperm motility and fertilising capacity. Option (b) describes the hormone-releasing IUD mechanism. Option (c) is false: a copper IUD gives no protection against STDs; among these methods only the condom does. Option (d) is self-contradictory (a spermicidal device increases, not decreases, efficiency).',
          },
        ],
      },

      { t: 'part', title: 'Two Habits That Win Marks' },
      {
        t: 'p',
        html: '<b>Test the pairs one at a time.</b> Questions often ask which mechanism is paired wrongly (the book’s estimate from past papers, not official figures), a format that a flat list of contraceptive methods does not rehearse. Check each option on its own before choosing.',
      },
      {
        t: 'p',
        html: '<b>Keep the blastomere rule at your fingertips.</b> Up to 8 blastomeres → fallopian tube (ZIFT); more than 8 blastomeres → uterus (IUT). This single decision key drives many ART questions (the book’s estimate from past papers, not official figures), so learn it as a rule rather than re-deriving it each time.',
      },
    ],
  },
];
