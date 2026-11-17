import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 2 (Human Reproduction), Additional topics C to F, word for word from the Class 12 Biology
 * Master Reference (book pp. 95 to 111): C "Contraceptive Methods" (opens mid-page 95 after Addendum B's practice
 * answers; its practice answers end at the top of p. 98), D "Sperm Capacitation and the Acrosome Reaction" (p. 98 to
 * p. 100), E "Menstrual Cycle: Hormonal Feedback and Clinical Applications" (p. 100 to the top of p. 103) and F "What
 * NEET Actually Asks" (the book's "Addendum P", p. 103 to p. 111). Page 112 is the next chapter.
 *
 * Topic indexes (position in the chapter's topics array): Topics 01 to 03 = 0 to 2, Additional A to B = 3 to 4,
 * so C = 5, D = 6, E = 7 and F (the last) = 8. No figure occurs in these pages (only ruled table lines).
 * The book's example headings ("Example C.1 - [CBSE Board] Mechanism of the Combined Pill") become the example's tag
 * (the bracket) and a bold lead on its question. Assertion-reason items that print no options carry the standard four
 * (new wording, listed in the report). Where the book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 95–98 ─────────────────────────
  {
    n: 'C',
    title: 'Contraceptive Methods',
    extra: true,
    kalam: 'Contraceptive methods are classified by how each works, and by whether it is reversible or permanent.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'NEET and CBSE ask for the classification of contraceptive methods, the biological mechanism of each, and which methods are reversible and which are permanent (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Classification by mechanism:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Method', 'How it works', 'Type'],
        rows: [
          [
            'Oral contraceptive pills (OCPs): combined (oestrogen + progesterone)',
            'Suppress ovulation by inhibiting LH surge; thicken cervical mucus to block sperm',
            'Hormonal; reversible',
          ],
          [
            'Oral contraceptive pills: progesterone-only (“mini-pill”)',
            'Suppress ovulation partially; make endometrium unreceptive; thicken cervical mucus',
            'Hormonal; reversible',
          ],
          [
            'Emergency contraceptive (levonorgestrel)',
            'Progestogen taken within 72 hours of unprotected coitus; mainly prevents ovulation',
            'Hormonal; emergency use',
          ],
          [
            'Mifepristone (RU-486)',
            'Blocks progesterone receptors, so the endometrium breaks down and cannot sustain an implanted embryo',
            'Not a contraceptive in the NCERT context; used for medical termination of early pregnancy',
          ],
          [
            'Copper-releasing IUD (Cu-T, Cu-7)',
            'Copper ions suppress sperm motility and the fertilising capacity of sperm',
            'Intrauterine; reversible',
          ],
          ['Inert IUD (Lippes loop)', 'Non-medicated device in the uterus; prevents implantation', 'Intrauterine; reversible'],
          [
            'Hormone-releasing IUD (LNG-20, Mirena)',
            'Releases levonorgestrel (a progestogen) locally; makes the uterus unsuitable for implantation and the cervix hostile to sperm',
            'Intrauterine; reversible',
          ],
          ['Barrier methods (condom, diaphragm)', 'Physical block prevents sperm entry', 'Barrier; reversible'],
          ['Vasectomy', 'Cuts and ties the vas deferens; blocks sperm transport', 'Surgical; permanent (usually)'],
          ['Tubectomy', 'Cuts and ties the Fallopian tubes; blocks egg-sperm meeting', 'Surgical; permanent (usually)'],
          [
            'Natural methods',
            'Periodic abstinence (rhythm): avoid intercourse during the fertile window, about days 10–17 of the cycle. Coitus interruptus: the male withdraws the penis before ejaculation',
            'Behavioural; low efficacy',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Note:</b> Saheli (NCERT: a once-a-week, non-steroidal oral contraceptive pill) contains centchroman (ormeloxifene); chemically it is a selective oestrogen receptor modulator (SERM), a detail beyond NCERT.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Mechanism of the Combined Pill.</b> Explain how a combined oral contraceptive pill (containing oestrogen and progesterone) prevents pregnancy at three distinct biological steps.',
        steps: [
          '<b>Suppression of ovulation:</b> Exogenous oestrogen and progesterone suppress the pituitary LH surge (without the LH peak, the Graafian follicle does not rupture: ovulation does not occur).',
          '<b>Cervical mucus thickening:</b> Progesterone in the pill makes cervical mucus thick and viscous, creating a physical barrier that sperm cannot penetrate.',
          '<b>Endometrial changes:</b> The altered hormonal environment makes the endometrium less receptive to implantation, even if fertilisation somehow occurred.',
        ],
        ans: 'Three mechanisms: blocks ovulation (no LH surge), thickens cervical mucus (sperm barrier), alters endometrium (anti-implantation).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Correct Contraceptive.</b> A woman with severe hypertension and a history of blood clots cannot use oestrogen-containing pills. Name one suitable alternative and state its mechanism.',
        steps: [
          'Oestrogen increases blood coagulability and is contraindicated in hypertension and thrombotic history. A progesterone-only pill, a copper IUD, or a hormone-releasing IUD (Mirena) would be appropriate. Of these, the copper-IUD provides long-acting, hormone-free contraception that does not interact with blood clotting. The answer should identify one suitable method and state its mechanism clearly.',
        ],
        ans: 'Any one of: progesterone-only pill, copper IUD or hormone-releasing IUD; for example the copper-releasing IUD (Cu-T): copper ions suppress sperm motility and fertilising capacity, it is oestrogen-free and does not affect blood clotting.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match Method to Mechanism.</b><br>Column I: (P) Combined OCP, (Q) Copper IUD, (R) Vasectomy, (S) Emergency pill (levonorgestrel)<br>Column II: (i) Blocks sperm transport, (ii) Copper ions suppress sperm motility, (iii) Suppresses the LH surge and so prevents ovulation, (iv) Taken within 72 hours of unprotected coitus.',
        steps: [
          '<b>Reasoning:</b> The combined OCP suppresses the LH surge, so ovulation does not occur (iii). The copper IUD releases copper ions that suppress sperm motility (ii). Vasectomy blocks sperm transport (i). The levonorgestrel emergency pill is defined by its timing: it is taken within 72 hours of unprotected coitus (iv).',
        ],
        ans: 'P–iii, Q–ii, R–i, S–iv.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name two surgical contraceptive methods and state in each case which duct or tube is blocked.',
            a: 'Vasectomy (vas deferens cut and tied); tubectomy (Fallopian tubes cut and tied).',
          },
          {
            q: '[NEET] Why is the progesterone-only pill (“mini-pill”) less effective at preventing ovulation than the combined pill?',
            a: 'Progesterone-only pills carry a low dose of progestogen, so they suppress the LH surge and ovulation less consistently than the combined pill, where oestrogen and progestogen together make the suppression more reliable; they therefore rely more on thickened cervical mucus and an unreceptive endometrium.',
          },
          {
            q: '[CUET] State one advantage of a hormone-releasing IUD (Mirena) over a copper IUD.',
            a: 'Mirena releases levonorgestrel (a progestogen) locally, with little systemic absorption; it also reduces menstrual blood loss, unlike copper IUDs, which may increase it.',
          },
          {
            q: '[NEET] Assertion: Mifepristone is not a contraceptive. Reason: It is used to terminate an established early pregnancy by blocking progesterone receptors. Evaluate A, R and whether R explains A.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, and R explains A. A contraceptive prevents conception or implantation, whereas mifepristone acts on an established pregnancy: by blocking progesterone receptors it makes the endometrium break down. It is therefore a medical-termination drug, not a contraceptive.',
          },
          {
            q: '[CBSE] Name the non-steroidal oral contraceptive named in NCERT, its active compound, how often it is taken, and the class of compound it belongs to.',
            a: 'Saheli, taken once a week; it contains centchroman (ormeloxifene), a selective oestrogen receptor modulator (SERM).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 98–100 ─────────────────────────
  {
    n: 'D',
    title: 'Sperm Capacitation and the Acrosome Reaction',
    extra: true,
    kalam: 'Before fertilisation a sperm must undergo capacitation, and its acrosome then releases enzymes that let it penetrate the coverings of the ovum.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Before fertilisation a sperm must undergo capacitation, and its acrosome then releases enzymes that let it penetrate the coverings of the ovum. NEET high-difficulty questions ask for the precise order of these events (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Capacitation (occurs in the female reproductive tract and takes several hours):</b><br>Capacitation is the final functional maturation of the sperm that gives it fertilising ability. It involves two changes to the sperm membrane, followed by a functional change:<br>1. <b>Membrane destabilisation:</b> The cholesterol-rich membrane of the sperm head loses cholesterol to the albumin in female tract secretions. This increases membrane fluidity.<br>2. <b>Glycoprotein removal:</b> The sperm plasma membrane is coated with adsorbed proteins and glycoproteins from the seminal plasma (the “decapacitation factors”). These are removed during capacitation.<br>3. <b>Calcium influx:</b> The destabilised membrane allows Ca<sup>2+</sup> to enter the sperm, triggering hyperactivated motility (asymmetric, whip-like tail movement).',
      },
      {
        t: 'p',
        html: '<b>Result:</b> The sperm becomes fully motile, membrane-ready, and capable of undergoing the acrosome reaction upon contacting the zona pellucida.',
      },
      {
        t: 'p',
        html: '<b>The Acrosome Reaction (triggered by contact with zona pellucida):</b><br>The acrosome is a large, enzyme-filled vesicle on the anterior surface of the sperm head (covering the nucleus). When a capacitated sperm contacts the zona pellucida:<br>1. <b>Binding:</b> Sperm surface receptors (e.g. ZP3 receptors) bind to ZP3 glycoprotein of the zona pellucida.<br>2. <b>Acrosome membrane fusion:</b> The plasma membrane and outer acrosomal membrane fuse at multiple points.<br>3. <b>Enzyme release:</b> The fused membranes break into vesicles through which the acrosomal contents escape: acrosin (a protease) and other glycosidases. (Hyaluronidase, which breaks down hyaluronic acid between the granulosa (cumulus) cells, has already acted earlier: much of it sits on the sperm surface, and it lets the sperm cross the cumulus layer before it reaches and binds the zona.)<br>4. <b>Penetration path:</b> acrosin helps digest a path through the zona pellucida.<br>5. <b>Membrane merger:</b> The sperm plasma membrane (equatorial region of the head) fuses with the oocyte plasma membrane, allowing the sperm nucleus to enter the ooplasm.<br>6. <b>Block to polyspermy:</b> Contact of the sperm with the oocyte triggers the cortical reaction (cortical granules release their contents into the perivitelline space), modifying the zona pellucida to prevent additional sperm from binding.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Correct Sequence of the Acrosome Reaction.</b> Arrange the following events in the correct order of the acrosome reaction: (A) Binding of sperm to ZP3 of zona pellucida; (B) Fusion of plasma and outer acrosomal membranes; (C) Release of acrosomal enzymes; (D) Penetration through zona pellucida; (E) Entry of sperm nucleus into ooplasm.',
        steps: [
          '<b>Reasoning:</b> The sperm must first recognise and bind the zona (A), then the acrosome membrane fuses (B), releasing enzymes (C) that create a path through the zona (D), allowing the sperm nucleus to enter (E). (This is the exam sequence for the zona stage: bind, fuse, release, penetrate, enter.)',
        ],
        ans: 'A → B → C → D → E.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Capacitation Changes.</b> Explain why a sperm that has not undergone capacitation cannot fertilise an ovum even if it reaches the ampullary-isthmic junction.',
        steps: [
          'A non-capacitated sperm has its plasma membrane stabilised by adsorbed seminal plasma proteins and has a high cholesterol content. This makes the membrane rigid and prevents the Ca<sup>2+</sup> influx required for hyperactivated motility. Additionally, the decapacitation factors on its surface prevent proper binding to the zona pellucida receptors (ZP3). Without hyperactivated motility and the ability to bind ZP3, the acrosome reaction cannot be triggered and the sperm cannot penetrate the zona pellucida.',
        ],
        ans: 'Capacitation removes decapacitation factors, removes membrane cholesterol, and allows Ca<sup>2+</sup> influx for hyperactivated motility: without these, the acrosome reaction cannot occur and fertilisation is impossible.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name the two structural changes that occur during capacitation that prepare the sperm for fertilisation.',
            a: 'Removal of decapacitation factors (seminal plasma glycoproteins) from the sperm surface; and loss of cholesterol from the sperm plasma membrane, increasing its fluidity.',
          },
          {
            q: '[NEET] Name the two key enzymes released from the acrosome and their functions.',
            a: 'Acrosin (protease): digests the zona pellucida to create a path; hyaluronidase: disperses the granulosa (cumulus) cells surrounding the ovum.',
          },
          {
            q: '[NEET] What is the cortical reaction and what is its purpose?',
            a: 'The cortical reaction is the release of contents from cortical granules (in the oocyte’s cortex) into the perivitelline space following contact of the sperm with the oocyte. The contents modify the zona pellucida (zona reaction) to prevent polyspermy.',
          },
          {
            q: '[CUET] Assertion: Capacitation occurs in the epididymis. Reason: The sperm mature in the epididymis before ejaculation. Evaluate A, R and whether R explains A.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A false, R true, and R does not explain A. Capacitation occurs in the female reproductive tract (uterus and oviduct), not the epididymis. It is true that sperm mature in the epididymis before ejaculation, but capacitation is a separate, later process that depends on the female tract.',
          },
          {
            q: '[NEET High-Difficulty] A researcher treats sperm with a chemical that chelates (removes) extracellular calcium. Predict the effect on the acrosome reaction and give a reason.',
            a: 'Calcium is essential for the acrosome reaction. Removing extracellular calcium prevents the acrosome membrane from fusing, so acrosomal enzymes are not released and the sperm cannot penetrate the zona pellucida: fertilisation fails.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 100–103 ─────────────────────────
  {
    n: 'E',
    title: 'Menstrual Cycle: Hormonal Feedback and Clinical Applications',
    extra: true,
    kalam: 'Beyond the four phases and four hormones lie the feedback relationships across the cycle and the hormonal basis of common clinical conditions.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Beyond the four phases and four hormones, NEET high-difficulty and CUET case-based questions ask about the feedback relationships across the cycle, the hormonal basis of common clinical conditions, and the interpretation of hormone-level graphs (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Feedback relationships across the cycle (a simplified pattern):</b>' },
      {
        t: 'table',
        title: null,
        head: ['Phase', 'GnRH', 'FSH', 'LH', 'Oestrogen', 'Progesterone'],
        rows: [
          ['Menstrual (days 1–5)', 'Low', 'Rising slowly', 'Low', 'Low', 'Low'],
          ['Follicular (days 6–13)', 'Rising', 'Rising', 'Low, rising late', 'Steadily rising', 'Low'],
          ['Ovulatory (day 14)', 'Pulses more frequent (drives the surge)', 'Peaks with LH (days 13–14)', 'LH surge', 'Peak just before (days 12–13); triggers the LH surge', 'Low'],
          ['Luteal (days 15–28)', 'Pulses slowed', 'Low', 'Low', 'Rises then falls', 'High then falls'],
        ],
      },
      {
        t: 'p',
        html: '(The table follows NCERT’s simple wording, a gradual rise of FSH and LH through the follicular phase. Figure 2.6 shows the finer pattern: FSH is highest at the start of the cycle, falls through the follicular phase as oestrogen and inhibin hold it down, and peaks again with LH at mid-cycle.)',
      },
      {
        t: 'p',
        html: '<b>Key feedback principles:</b><br>• <b>Negative feedback:</b> Oestrogen at low/moderate levels suppresses FSH and LH (follicular phase).<br>• <b>Positive feedback:</b> Oestrogen at high sustained levels (about days 12–13) switches to positive feedback, triggering the LH surge. (Oxytocin at parturition is another example of positive feedback.)<br>• <b>Progesterone negative feedback:</b> High progesterone suppresses GnRH, FSH, and LH (luteal phase).<br>• <b>Unopposed oestrogen:</b> If oestrogen continues without progesterone (an anovulatory cycle), the endometrium keeps proliferating without secretory stabilisation and is shed irregularly: the hormonal basis of dysfunctional uterine bleeding.',
      },
      { t: 'p', html: '<b>Clinical conditions and their hormonal basis:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Condition', 'Hormonal cause', 'Note'],
        rows: [
          ['Amenorrhoea', 'Low GnRH/FSH/LH (hypogonadotropic) or high androgens (PCOS)', 'Absence of menstruation'],
          ['Anovulatory cycle', 'No LH surge → no ovulation → no corpus luteum → no progesterone', 'A cycle without ovulation'],
          [
            'PCOS (Polycystic Ovary Syndrome)',
            'Elevated LH ∶ FSH ratio (>2 ∶ 1); anovulation; hyperandrogenism',
            'Beyond the NCERT Class 12 syllabus',
          ],
          [
            'Dysfunctional uterine bleeding',
            'Oestrogen without progesterone → unstable endometrium → irregular shedding',
            'Irregular or heavy bleeding',
          ],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Interpreting a Hormone Graph.</b> A graph shows a woman’s serum hormone levels over 28 days. FSH is low on days 1–5, rises steadily from day 6 to day 12, peaks on day 13 to 14, then drops sharply. LH follows a similar pattern but peaks sharply on day 14. Oestrogen rises steadily, peaks on day 13, then drops. Progesterone is low until day 15, then rises to a peak on day 21, and falls on day 28. Identify which phase each hormone peak corresponds to and the likely event on day 14.',
        steps: [
          'FSH rise (days 6–12) = follicular phase (follicle development). LH peak day 14 = ovulatory surge → ovulation occurs. Oestrogen peak day 13 = pre-ovulatory oestrogen peak (positive feedback trigger). Progesterone rise (day 15 onward) = luteal phase (corpus luteum formed). The sharp drop on day 28 = corpus luteum degeneration → menstruation begins.',
        ],
        ans: 'Day 14 = ovulation (LH surge); days 15–28 = luteal phase driven by progesterone from corpus luteum.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Hormonal Cause of Primary Amenorrhoea.</b> A 16-year-old girl has never menstruated (primary amenorrhoea). Blood tests show very low FSH and LH. The doctor suspects a hypothalamic-pituitary axis problem. Name the condition and explain why low FSH/LH would prevent menstruation.',
        steps: [
          'Primary amenorrhoea with low FSH and LH indicates <b>hypogonadotropic hypogonadism</b>: insufficient GnRH stimulation of the pituitary, or pituitary insufficiency. Without FSH, the ovarian follicles do not develop; without LH, there is no ovulation and no oestrogen production from the follicles. Without oestrogen, the endometrium does not proliferate during the follicular phase, so there is no thickened endometrium to shed as menstruation. The entire menstrual cycle cannot be initiated.',
        ],
        ans: 'Hypogonadotropic hypogonadism; low FSH means no follicle development, low LH means no ovulation and no oestrogen, so the endometrium never proliferates and menstruation does not occur.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why the LH Surge Needs Sustained High Oestrogen.</b> Oestrogen is already moderately raised in the early follicular phase (days 6–10), yet no LH surge follows; the surge comes only around day 14. Explain why.',
        steps: [
          'At low and moderate levels, oestrogen acts by negative feedback on the hypothalamus and pituitary and holds FSH and LH down. Only when oestrogen from the maturing pre-ovulatory follicle becomes high and stays high for a sustained period (roughly 36–48 hours, a figure beyond NCERT) does the feedback switch to positive. The pituitary then becomes more sensitive to GnRH (more GnRH receptors on the gonadotrophs) and releases the LH surge, which triggers ovulation. A modest or brief rise earlier in the cycle does not reach this threshold.',
        ],
        ans: 'Moderate oestrogen gives negative feedback; only high, sustained oestrogen (about 36–48 hours, a figure beyond NCERT, from the mature follicle) switches to positive feedback, sensitising the pituitary to GnRH and producing the LH surge.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the source of oestrogen in the (a) follicular phase and (b) luteal phase of the menstrual cycle.',
            a: '(a) Growing ovarian follicle (granulosa cells); (b) Corpus luteum.',
          },
          {
            q: '[NEET] A woman with PCOS has an LH ∶ FSH ratio of 3 ∶ 1. Explain how this hormonal pattern leads to anovulation.',
            a: 'With FSH low relative to LH, follicles start to grow but stall before reaching the Graafian stage (giving the polycystic appearance). No follicle matures, so the sustained high oestrogen needed for the positive-feedback LH surge is not produced in the right pattern and ovulation does not occur. The high LH also stimulates excess androgen production.',
          },
          {
            q: '[CUET] Which hormone peak acts as the trigger for ovulation and from which structure does this peak originate?',
            a: 'The LH surge (peak) acts as the trigger for ovulation; it originates from the anterior pituitary (under GnRH stimulation from the hypothalamus) and is elicited by high sustained oestrogen from the pre-ovulatory follicle.',
          },
          {
            q: '[NEET] Assertion: The corpus luteum secretes progesterone from day 15 until day 28 of a normal 28-day cycle. Reason: The corpus luteum degenerates into the corpus albicans if fertilisation does not occur. Evaluate A, R and whether R explains A.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, and R is not the explanation of A: R describes what happens at the end of the luteal phase, while A describes what the corpus luteum does during it. R explains the progesterone fall on day 28, not the secretion during days 15–28.',
          },
          {
            q: '[CUET] Draw a labelled diagram of the hormonal feedback loop of the menstrual cycle, showing both positive and negative feedback.',
            a: '(Diagram description): Hypothalamus releases GnRH → anterior pituitary releases FSH and LH → FSH stimulates follicle growth → oestrogen from follicle → oestrogen has negative feedback on FSH at moderate levels, then positive feedback (sustained high) triggering LH surge → LH surge causes ovulation → luteal phase: corpus luteum secretes progesterone → progesterone has negative feedback on GnRH, FSH, and LH → if no pregnancy, corpus luteum degenerates → progesterone falls → endometrium sheds → cycle restarts.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F (the book’s Addendum P) · pp. 103–111 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET papers from this chapter fall into six repeatable shapes.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Past AIPMT/NEET questions from Chapter 2 fall into seven areas. How often each recurs (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Area', 'Frequency in past papers'],
        rows: [
          ['<b>Male reproductive anatomy</b> (ducts, glands, scrotum, sperm pathway)', 'High: recurs often'],
          ['<b>Gametogenesis: spermatogenesis</b> (stages, ploidy, hormones)', 'High: a large node'],
          ['<b>Gametogenesis: oogenesis</b> (stages, polar bodies, zona pellucida, follicle development)', 'Moderate–High'],
          ['<b>Menstrual cycle</b> (phases, hormones, LH surge, progesterone source)', 'Moderate: steady presence'],
          ['<b>Fertilisation & early development</b> (zygote, cleavage, morula, blastocyst, implantation)', 'Moderate'],
          ['<b>Placenta</b> (hormones, structure, functions)', 'Moderate'],
          ['<b>Pregnancy, parturition & lactation</b> (hCG, oxytocin, colostrum, foetal ejection reflex)', 'Moderate'],
        ],
      },
      {
        t: 'p',
        html: '<b>Concentrated reading:</b> Anatomy of the male duct system, the spermatogenesis stage-sequence, and the menstrual-hormone table together account for roughly half the chapter’s NEET questions (the book’s estimate from past papers, not official figures). Placental hormones and the germ-layer derivatives also appear often.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'NEET papers from this chapter fall into six repeatable shapes. Each has a typical trap.',
      },
      { t: 'p', html: '<b>Archetype 1: The Route/Sequence Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Arrange the following in correct order” or “Which comes next in the pathway?” Tests the fixed anatomical routes (sperm pathway, oocyte→uterus path, follicle development, cleavage stages).<br><b>The approach:</b> Do not memorise facts randomly. Walk the one-way route mentally, as a single unbroken sentence. The answer is the next station in the sequence: the route does not branch.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Arrange in correct sequence: Seminiferous tubule → Rete testis → Vasa efferentia → Epididymis → ________ → Ejaculatory duct.',
        steps: [
          'The missing station is the <b>vas deferens</b>. The full male duct route is:',
          'Seminiferous tubule → Rete testis → Vasa efferentia → Epididymis → Vas deferens → Ejaculatory duct → Urethra',
          '<b>Confidence check:</b> vasa efferentia are the many short tubes right at the testis; the vas deferens is the single long duct that loops over the bladder before joining the seminal vesicle duct. Same Latin root (ferre, “to carry”), but the vasa efferentia leave the rete testis and the vas deferens leaves the epididymis.',
        ],
        ans: 'Vas deferens.',
      },
      { t: 'p', html: '<b>Archetype 2: The Cell-Location / Function Pair</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Which cells do X, and which do Y?” or “The cells that nourish developing germ cells and the cells that secrete androgens are, respectively: (a) …” Tests the Sertoli vs. Leydig spatial distinction.<br><b>The approach:</b> Location first, function follows. Inside the seminiferous tubule = Sertoli (nourish). Outside the tubule, in interstitial spaces = Leydig (androgens). This one check settles most variants.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The cells that nourish the developing male germ cells and the cells that secrete androgens are, respectively:<br><b>(a)</b> Leydig cells and Sertoli cells<br><b>(b)</b> Sertoli cells and Leydig cells<br><b>(c)</b> Sertoli cells and spermatogonia<br><b>(d)</b> Spermatogonia and Leydig cells',
        steps: [
          '<b>Decode:</b> “nourish developing male germ cells” → inside the tubule → Sertoli cells. “Secrete androgens” → outside the tubule → Leydig cells. Option (b) is correct. Option (a) reverses both: a common error in this chapter. Option (c) confuses the nourishing cell with the germ cell itself.',
        ],
        ans: '(b) Sertoli cells and Leydig cells.',
      },
      { t: 'p', html: '<b>Archetype 3: The Hormone-Source Table</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Which hormone is produced by the corpus luteum?” or “FSH acts on which cells in the male?” Tests the roster in the hormone table.<br><b>The approach:</b> Commit to a single source mnemonic. A tested option: “Hypothalamus Pings Pituitary, Ovary Plays Back.” GnRH → FSH/LH (pituitary) → oestrogen/progesterone (ovary). Then layer on: Leydig makes androgens; Sertoli makes inhibin (the granulosa cells of the follicle also make it); corpus luteum makes progesterone; growing follicle makes oestrogen; placenta makes hCG/hPL.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The structure that secretes progesterone to maintain the endometrium during the luteal phase is the:<br><b>(a)</b> Graafian follicle<br><b>(b)</b> Corpus luteum<br><b>(c)</b> Anterior pituitary<br><b>(d)</b> Granulosa cells of the primary follicle',
        steps: [
          'Graafian follicle → pre-ovulation, produces oestrogen. After ovulation the ruptured Graafian follicle transforms into the <b>corpus luteum</b>, which secretes progesterone. Pituitary secretes FSH/LH, not progesterone. Granulosa cells of a growing follicle make oestrogen; progesterone comes from the corpus luteum that forms after ovulation.',
        ],
        ans: '(b) Corpus luteum.',
      },
      { t: 'p', html: '<b>Archetype 4: The Ploidy Drop Anchor</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “At which stage does the chromosome number first become haploid?” or “The ploidy of a secondary spermatocyte is: ______”<br><b>The approach:</b> The halving happens at <b>meiosis I</b>: between the primary cell and the secondary cell. Draw the ladder once and it holds for both spermatogenesis and oogenesis:<br>Primary cell (2<i>n</i>) → meiosis I → secondary cell (<i>n</i>) → meiosis II → spermatid or ovum (<i>n</i>)<br>The drop sits between the primary and secondary stage. Everything before is 2<i>n</i>; everything after is <i>n</i>.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'During spermatogenesis, the chromosome number is first halved at the formation of the:<br><b>(a)</b> Primary spermatocyte<br><b>(b)</b> Secondary spermatocyte<br><b>(c)</b> Spermatid<br><b>(d)</b> Spermatozoon',
        steps: [
          'Primary spermatocyte is still diploid (it hasn’t divided yet). Meiosis I converts the primary spermatocyte into <b>two haploid secondary spermatocytes</b>: that is the first halving. Spermatids and spermatozoa are already haploid but come after the halving.',
        ],
        ans: '(b) Secondary spermatocyte.',
      },
      { t: 'p', html: '<b>Archetype 5: The Assertion–Reason (A–R) Pair</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Assertion (A): [statement]. Reason (R): [statement]. Choose: (a) Both true, R explains A; (b) Both true, R does not explain A; (c) A true, R false; (d) A false, R true.”<br><b>The approach:</b> Evaluate each statement independently first. Only if both are true, ask whether R is the cause of A. The trap runs both ways: picking (b) when R really is the reason for A, and picking (a) when R is only a consequence of A or a fact that happens alongside it.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> Corpus luteum degenerates in the absence of fertilisation. <b>Reason (R):</b> Progesterone level decreases.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          'Evaluate A: True. If no fertilisation occurs, the corpus luteum degenerates (becomes the corpus albicans). Evaluate R: True. Progesterone does decrease. But look at the causal direction: the fall in progesterone is a consequence of the corpus luteum degenerating, since the degenerating corpus luteum stops secreting it. R therefore describes what follows from A; it is not the reason A happens. (The progesterone fall then triggers the next menstruation.)',
        ],
        ans: '(b) Both true, but R does not explain A.',
      },
      { t: 'p', html: '<b>Second example, counter-trap:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> During fertilisation, only one spermatozoon enters the egg. <b>Reason (R):</b> If several spermatozoa hit the egg at the same time, all can enter the egg.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          'A is true. R is false: the zona pellucida and cortical reaction block polyspermy; only one sperm enters. So the answer is (c): A true, R false.',
        ],
        ans: '(c) A true, R false.',
      },
      { t: 'p', html: '<b>Archetype 6: The Germ-Layer Derivative Table</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “From which germ layer does bone arise?” or “Muscles are derived from: ______”<br><b>The approach:</b> Hold three anchors:<br>• <b>Ectoderm</b> = covering (skin, hair, nails) + nervous system (brain, spinal cord, nerves).<br>• <b>Mesoderm</b> = movement and transport (most muscles, bone, cartilage, blood, blood vessels, kidneys, gonads).<br>• <b>Endoderm</b> = inner linings and glands (gut epithelium, lung lining, liver, pancreas, thyroid).<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following are correctly matched?<br>(i) Brain: ectoderm<br>(ii) Bone: mesoderm<br>(iii) Lining of the gut tube (stomach, intestine): endoderm<br>(iv) Epidermis: ectoderm',
        steps: [
          'All four are correct. Brain (nervous tissue) and epidermis (skin) both arise from ectoderm. Bone and most muscles both arise from mesoderm. The lining of the gut tube arises from endoderm.',
        ],
        ans: 'All four are correctly matched.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'Past papers show specific confusions that examiners often use (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'Distractor pattern'],
        rows: [
          [
            '<b>“Vasa efferentia” vs. “Vas deferens”</b>',
            'Both are “vas-something,” but vasa efferentia are the many short tubes at the testis; vas deferens is the single long duct running from the epididymis to the ejaculatory duct.',
            'Typical distractor: swapping them breaks the order of the sperm pathway.',
          ],
          [
            '<b>Sertoli vs. Leydig reversal</b>',
            '“Inside the tubule = nourish; outside = androgens.” Students memorise the names but not the spatial clue.',
            'Typical distractor: an option assigns testosterone secretion to Sertoli cells (wrong location).',
          ],
          [
            '<b>Graafian follicle vs. corpus luteum</b>',
            'The Graafian follicle is pre-ovulation (oestrogen source); the corpus luteum is post-ovulation (progesterone source).',
            'Typical distractor: mistaking the progesterone source costs the marks on both questions.',
          ],
          [
            '<b>Morula size</b>',
            'Students assume “more cells = bigger.” Cleavage is division without growth; the morula is the same size as the zygote.',
            'Typical distractor: an assertion–reason item on this exact point.',
          ],
          [
            '<b>Secondary oocyte ≠ ovum</b>',
            'Ovulation releases a secondary oocyte, arrested at metaphase II. It only becomes an ovum if a sperm fertilises it.',
            'Typical distractor: completion of meiosis II requires fertilisation, not implantation or gametogenesis alone.',
          ],
          [
            '<b>“Ampulla” in two places</b>',
            'Same word, different organs: the wide part of the Fallopian tube (fertilisation happens at its junction with the isthmus) and the widened part of the mammary duct.',
            'Typical distractor: the same word read for the wrong organ.',
          ],
          [
            '<b>Uterine wall layers scrambled</b>',
            'Perimetrium (outer), myometrium (middle, muscular), endometrium (inner, glandular). Students drop or reorder them.',
            'Common in diagram questions; the mnemonic “PME: Protects, Moves, Embeds” holds the order.',
          ],
          [
            '<b>Positive feedback at parturition</b>',
            'Oxytocin release is amplified by the contractions it causes: a rare positive feedback loop. Students confuse it with negative feedback.',
            'Typical distractor: an option wrongly attributes parturition to prolactin.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'The following 10 questions follow the patterns of past NEET papers.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy: Fact recall, single best answer] The enlarged end of the penis is covered by a loose fold of skin called:<br><b>(a)</b> Glans penis<br><b>(b)</b> Foreskin<br><b>(c)</b> Hymen<br><b>(d)</b> Urethral meatus',
            a: '<b>Solution:</b> The glans penis is the tip itself; the foreskin is the loose double-layered fold that covers it. The hymen is a membrane at the vaginal opening (female). The urethral meatus is the external opening of the urethra.<br><b>Answer:</b> (b) Foreskin.',
          },
          {
            q: '[Easy: Sequence, male duct route] Arrange in the correct order the path of a sperm from its site of formation to the body exterior:<br>(i) Epididymis<br>(ii) Ejaculatory duct<br>(iii) Rete testis<br>(iv) Seminiferous tubule<br>(v) Urethra<br>(vi) Vasa efferentia<br>(vii) Vas deferens',
            a: '<b>Solution:</b> Walk the route: sperm are made in the seminiferous tubule (iv), drain into the rete testis (iii), pass through the vasa efferentia (vi), mature and are stored in the epididymis (i), then travel up the vas deferens (vii), which joins the seminal vesicle duct to form the ejaculatory duct (ii), which opens into the urethra (v).<br><b>Answer:</b> iv → iii → vi → i → vii → ii → v.',
          },
          {
            q: '[Moderate: Cell location and function] Which one of the following is a correct statement?<br><b>(a)</b> Sertoli cells are found outside the seminiferous tubules and secrete testosterone.<br><b>(b)</b> Leydig cells are found inside the seminiferous tubules and nourish developing sperms.<br><b>(c)</b> Leydig cells are found outside the seminiferous tubules and secrete androgens.<br><b>(d)</b> Sertoli cells are found inside the seminiferous tubules and secrete androgens.',
            a: '<b>Solution:</b> The two cell types inside the seminiferous tubules are germ cells (spermatogonia) and Sertoli cells (nurse cells). Leydig cells sit in the interstitial spaces outside the tubules and secrete androgens. Only (c) has both the correct location and the correct product.<br><b>Answer:</b> (c) Leydig cells are found outside the seminiferous tubules and secrete androgens.',
          },
          {
            q: '[Moderate: Hormone source] Which of the following hormones is produced in women only during pregnancy?<br><b>(a)</b> Relaxin<br><b>(b)</b> Oestrogen<br><b>(c)</b> Oxytocin<br><b>(d)</b> Progesterone',
            a: '<b>Solution:</b> Oestrogen and progesterone are produced throughout the menstrual cycle and escalate during pregnancy but are not exclusive to it. Oxytocin is released at parturition from the maternal posterior pituitary. Relaxin rises in late pregnancy to relax the pelvic ligaments; NCERT lists hCG, hPL and relaxin as hormones produced in women only during pregnancy, so (a) is the keyed answer (the corpus luteum also makes a little relaxin in the luteal phase).<br><b>Answer:</b> (a) Relaxin.',
          },
          {
            q: '[Moderate: Menstrual cycle, LH surge and ovulation] The LH surge that induces ovulation occurs during which phase of the menstrual cycle?<br><b>(a)</b> Menstrual phase<br><b>(b)</b> Follicular phase<br><b>(c)</b> Ovulatory phase<br><b>(d)</b> Luteal phase',
            a: '<b>Solution:</b> The ovulatory phase (~day 14 of a 28-day cycle) is characterised by the mid-cycle surge in both LH and FSH. The LH surge ruptures the Graafian follicle, releasing the secondary oocyte. The menstrual phase involves bleeding from the endometrium. The follicular phase involves rebuilding of the endometrium under rising oestrogen from the growing follicles (which FSH stimulates). The luteal phase follows ovulation and is dominated by progesterone.<br><b>Answer:</b> (c) Ovulatory phase.',
          },
          {
            q: '[Moderate: Oogenesis, stages] At ovulation, the cell released from the ovary, surrounded by the zona pellucida, is a:<br><b>(a)</b> Primary oocyte<br><b>(b)</b> Secondary oocyte<br><b>(c)</b> Ovum<br><b>(d)</b> Oogonium',
            a: '<b>Solution:</b> The primary oocyte completes meiosis I in the large (tertiary, then Graafian) follicle just before ovulation, forming a large secondary oocyte and a tiny first polar body; the secondary oocyte is surrounded by the zona pellucida. The Graafian follicle ruptures at ovulation and releases this secondary oocyte, which stays arrested at metaphase II. It becomes an ovum only if a sperm enters and meiosis II is completed. The oogonia and primary oocytes remain in the ovary; they are not released.<br><b>Answer:</b> (b) Secondary oocyte.',
          },
          {
            q: '[Moderate–Difficult: Assertion–Reason] <b>Assertion (A):</b> The morula stage embryo is not larger than the zygote despite having more cells. <b>Reason (R):</b> Cleavage involves rapid mitotic divisions without an increase in overall size.<br>Choose: <b>(a)</b> Both A and R are true and R correctly explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true.',
            a: '<b>Solution:</b> A is factually correct: the morula (8–16 cells) is roughly the same size as the zygote because the cytoplasm is partitioned into more, smaller cells without net growth. R states exactly the mechanism: cleavage is mitosis without growth. R is therefore the correct explanation of A.<br><b>Answer:</b> (a) Both true, R correctly explains A.',
          },
          {
            q: '[Difficult: Oogenesis timing, multi-step] A student claims that oogenesis begins before birth but is not finished until adulthood. Explain why this statement is biologically accurate, naming the stage at which meiosis is first arrested and the stage at which it resumes.',
            a: '<b>Solution:</b> Oogenesis starts in the embryonic ovary when oogonia enter meiosis but immediately arrest at prophase I, becoming primary oocytes. This arrested state persists through childhood, sometimes for decades. Meiosis I only completes in the large follicle just before ovulation (after puberty), producing a secondary oocyte that immediately arrests again at metaphase II. The second division only finishes if a sperm enters at fertilisation. Thus the process truly spans from the foetal period to potential adulthood, with two arrest points.<br><b>Answer:</b> First arrest at prophase I (primary oocyte); resumes in the large follicle before ovulation (completes meiosis I); second arrest at metaphase II (secondary oocyte); final completion only at fertilisation.',
          },
          {
            q: '[Difficult: Germ-layer derivatives] Which of the following is an incorrect match of a structure with its embryonic germ layer of origin?<br><b>(a)</b> Brain: ectoderm<br><b>(b)</b> Bone: mesoderm<br><b>(c)</b> Lining of the gut: ectoderm<br><b>(d)</b> Muscles: mesoderm',
            a: '<b>Solution:</b> The brain and entire central nervous system arise from ectoderm: (a) is correct. Bone and most muscles arise from mesoderm: (b) and (d) are correct. The lining of the gut tube (stomach, intestine) arises from <b>endoderm</b>, not ectoderm. Ectoderm gives the outer skin layers; endoderm gives the inner gut lining. Only (c) is mismatched.<br><b>Answer:</b> (c) Lining of the gut: ectoderm (incorrect; it is endoderm).',
          },
          {
            q: '[Difficult: Parturition mechanism] Parturition in humans is best described as being controlled by:<br><b>(a)</b> A simple on/off hormonal switch<br><b>(b)</b> Negative feedback that reduces contractions<br><b>(c)</b> Positive feedback involving oxytocin<br><b>(d)</b> The same hormones that regulate the menstrual cycle',
            a: '<b>Solution:</b> Parturition is driven by a <b>positive feedback loop</b>: the fully developed foetus and placenta induce mild uterine contractions (the foetal-ejection reflex), which trigger oxytocin release from the maternal posterior pituitary, which causes stronger contractions, which stimulate more oxytocin: a self-amplifying cascade ending in delivery. This is not an on/off switch (a), not negative feedback that reduces contractions (b), and not the menstrual cycle hormones (d): those regulate the monthly cycle, not birth.<br><b>Answer:</b> (c) Positive feedback involving oxytocin.',
          },
        ],
      },

      { t: 'part', title: 'High-Yield Recall' },
      {
        t: 'p',
        html: '• <b>Hormone sources:</b> GnRH: hypothalamus; FSH and LH: anterior pituitary; androgens: Leydig cells; inhibin: Sertoli cells (granulosa cells also make it); oestrogen: growing follicle; progesterone: corpus luteum; hCG and hPL: placenta; relaxin: ovary (late pregnancy; the corpus luteum also makes a little); oxytocin: maternal posterior pituitary.<br>• <b>The male route in one line:</b> Seminiferous tubule → rete testis → vasa efferentia → epididymis → vas deferens → ejaculatory duct → urethra → urethral meatus.<br>• <b>Two arrest points in oogenesis:</b> prophase I (the primary oocyte, from foetal life until the follicle matures) and metaphase II (the secondary oocyte, until a sperm enters).<br>• <b>Released at ovulation:</b> a secondary oocyte, not an ovum; meiosis II is completed only at fertilisation.',
      },
    ],
  },
];
