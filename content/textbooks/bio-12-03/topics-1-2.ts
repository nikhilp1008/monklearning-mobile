import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 3 (Reproductive Health), Topics 01 and 02: pp. 112 to 126
 * of the Class 12 Biology Master Reference, word for word. Topic 01 Birth
 * Control & Contraception (pp. 112 to 119; its heading and Exam Relevance box
 * sit at the foot of p. 112) and Topic 02 Sexually Transmitted Diseases &
 * Infertility (pp. 120 to 126), each cut at the book's Sections 1 to 8. Figures
 * 3.1 (caption p. 114, drawn p. 115), 3.2 (caption p. 116, drawn p. 117), 3.3
 * (caption p. 121, drawn p. 122) and 3.4 (caption p. 123, drawn p. 124) are
 * redrawn in lib/diagrams/biology-12-03.ts; these pages hold no unnumbered
 * drawing. Emphasis italics are dropped; italics are kept only for scientific
 * names. Em dashes became colons, commas, brackets or full stops; line-break
 * hyphens were removed; "Section 4" and "subtopic" became "Topic 04" and
 * "topic"; "•" lists inside a paragraph are set on their own lines.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 112–119 ─────────────────────────
  {
    n: '01',
    title: 'Birth Control & Contraception',
    kalam: 'Imagine you are managing the entrance gate of a busy railway platform.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic. NEET reliably draws 1–3 questions every year (method classification, mechanism of Cu-IUDs, Saheli, sterilisation; the book’s estimate from past papers, not official figures), CBSE Boards asks 1–3 mark definitions and “differentiate” questions, and CUET leans on direct recall MCQs. Assertion–reason and match-the-column formats are extremely common here (the book’s estimate from past papers, not official figures), so memorise which method does what, not just the names.',
      },
      {
        t: 'p',
        html: 'Imagine you are managing the entrance gate of a busy railway platform. A train (pregnancy) only departs when a passenger with a ticket (sperm) successfully reaches a waiting traveller (ovum) and they board together (fertilisation), and only then if the platform itself is ready for them to settle (implantation in the uterus). <b>Contraception is simply the art of breaking this chain at one or more points</b>: you can stop the passenger at the gate, prevent the traveller from ever showing up, jam the boarding, or keep the platform un-ready. Every single birth-control method you will ever study is just a different way of cutting one link in that chain.',
      },
      {
        t: 'p',
        html: 'This is the deeper idea behind <b>birth control</b>, which is the broad regulation of how many children are conceived, and <b>contraception</b>, its core toolkit: the methods that deliberately prevent fertilisation or stop a pregnancy from establishing. The two words are often used loosely as synonyms, but birth control is the umbrella and contraception is the main instrument under it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Before any method existed, a couple’s only “control” was abstinence or luck. Modern contraception gives a couple a menu, and the whole subject becomes easy if you stop memorising a flat list and instead sort every method into one of a few families based on which link it cuts: natural (avoid the meeting by timing), barrier (physically block the meeting), intra-uterine devices (make the uterus hostile), hormonal (switch off ovulation), and surgical (permanently cut the transport pipe). Once you internalise these five families, even an unfamiliar brand name becomes guessable.',
      },
      {
        t: 'p',
        html: 'What makes a method good? An <b>ideal contraceptive</b> should be user-friendly, easily available, effective, and reversible, with no or minimal side effects, and crucially, it should not interfere with the user’s sexual drive or the sexual act itself. No real method scores perfectly on all of these, which is exactly why the menu exists: a newly-married couple wanting to delay a first child needs reversibility (so an IUD or pills), whereas a couple who have completed their family want permanence (so sterilisation).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> No reversible method is 100% effective; each carries a failure rate, and “natural” methods carry the highest failure rates because they depend on perfect timing and self-discipline. The rhythm method relies on a predictable menstrual cycle and <b>fails when the cycle is irregular</b>, which is precisely when users wrongly feel “safe.” Lactational amenorrhea fails once menstruation returns or breastfeeding becomes infrequent; it is only dependable for about the first six months after childbirth, not the folklore “two years.” And among the methods in this chapter, only <b>barrier methods used as condoms (male or female)</b> do double duty by also reducing the risk of sexually transmitted infections; pills, IUDs and sterilisation protect against pregnancy, not infection. Keep that asymmetry in mind: examiners like to test it.',
      },

      { t: 'part', title: 'Key concepts, definitions and diagnostic indicators' },
      {
        t: 'p',
        html: 'This section is a what-is-what reference. Note that contraception is a qualitative biology topic: there are <b>no SI units or dimensional formulae</b> here; the “indicators” you must master are the diagnostic features that let you tell one method from another in an MCQ.',
      },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'Birth control',
        html: 'Regulation of conception by preventive methods or devices to limit the number of offspring.',
      },
      {
        t: 'def',
        term: 'Contraception',
        html: 'The set of methods that deliberately prevent fertilisation.',
      },
      {
        t: 'def',
        term: 'Ideal contraceptive',
        html: 'User-friendly, readily available, effective, reversible, with least side effects, and non-interfering with sexual drive/act.',
      },
      {
        t: 'def',
        term: 'Temporary vs. permanent',
        html: 'Temporary methods (natural, barrier, IUD, hormonal) are reversible; permanent methods (sterilisation) are essentially irreversible.',
      },
      {
        t: 'table',
        title: 'The five families and their diagnostic features',
        head: ['Family', 'Examples', 'Core diagnostic feature', 'Reversible?'],
        rows: [
          [
            'Natural',
            'Periodic abstinence (rhythm), withdrawal (coitus interruptus), lactational amenorrhea',
            'No device, no hormone, no surgery: relies on timing/behaviour; highest failure rate',
            'Yes',
          ],
          [
            'Barrier',
            'Condoms / femidoms, diaphragm, cervical cap, vault (+ spermicides)',
            'Physically blocks sperm–ovum meeting; <b>condom also limits STIs</b>',
            'Yes',
          ],
          [
            'Intra-Uterine Device (IUD)',
            'Non-medicated (Lippes loop); copper-releasing (Cu-T, Cu-7, Multiload-375); hormone-releasing (Progestasert, LNG-20)',
            'Inserted into the <b>uterus</b> by a doctor/trained nurse; long-term yet reversible',
            'Yes',
          ],
          [
            'Hormonal',
            'Oral pills (combined / mini-pill), Saheli, injectables (Depo-Provera), implants',
            'Alters hormones to block ovulation / mucus / implantation',
            'Yes',
          ],
          [
            'Surgical (sterilisation)',
            'Vasectomy (male), Tubectomy (female)',
            'Permanently blocks <b>gamete transport</b>; terminal method',
            'Practically no',
          ],
        ],
      },
      { t: 'p', html: '<b>Key indicators worth memorising</b>' },
      {
        t: 'p',
        html: '• <b>Periodic abstinence (rhythm):</b> avoid coitus during the fertile window, roughly <b>days 10–17</b> of the cycle.<br>• <b>Lactational amenorrhea:</b> absence of menstruation/ovulation during intense breastfeeding; reliable only up to ~<b>6 months</b> post-partum.<br>• <b>Emergency contraception:</b> progestin or progestin–oestrogen preparations (or an IUD) used within <b>72 hours</b> of coitus (NCERT’s limit; a copper IUD can be inserted up to about 5 days after coitus).<br>• <b>Saheli:</b> a once-a-week, <b>non-steroidal</b> oral contraceptive developed at <b>CDRI, Lucknow</b>. Its active compound is <b>centchroman</b>, and it blocks oestrogen receptors in the uterus so the endometrium stays un-receptive.<br>• <b>Copper-T / Multiload-375:</b> copper-releasing IUDs; <b>Lippes loop</b> is the classic non-medicated IUD; <b>Progestasert / LNG-20</b> are the hormone-releasing IUDs.<br>• <b>Vasectomy</b> cuts/ties the <b>vas deferens</b> (male); <b>Tubectomy</b> cuts/ties the <b>fallopian tube / oviduct</b> (female).',
      },
      { t: 'fig', id: 'b12-03-fig-3.1' },

      { t: 'part', title: 'Mechanisms and procedures' },
      {
        t: 'p',
        html: 'Definitions get you the easy marks; mechanisms get you the assertion–reason and “which-action-is-wrong” traps that decide ranks. Here is the <b>why</b> behind each family.',
      },
      {
        t: 'p',
        html: '<b>1. Natural methods: denying the meeting in time.</b> The <b>rhythm/periodic-abstinence</b> method exploits simple gamete biology: ovulation occurs around mid-cycle (about day 14); the ovum survives a day or two and sperm can survive for several days in the female tract. Allowing for this, NCERT takes roughly days 10–17 of the cycle as the fertile period; abstaining then starves fertilisation of a partner. <b>Withdrawal (coitus interruptus)</b> removes the penis before ejaculation so semen is not deposited, but pre-ejaculatory fluid can carry stray sperm, which is why its failure rate is high.',
      },
      {
        t: 'p',
        html: '<b>Lactational amenorrhea</b> is genuinely hormonal even though it is filed under “natural.” During intense suckling, prolactin rises, and high prolactin suppresses the hypothalamic–pituitary release of gonadotropins (FSH/LH). With no pre-ovulatory <b>LH surge</b>, ovulation does not occur, so conception chances are near nil, but only while breastfeeding is frequent and only for about six months.',
      },
      {
        t: 'p',
        html: '<b>2. Barrier methods: a physical wall.</b> Condoms (male) and femidoms (female) are thin latex/rubber sheaths that stop ejaculated semen from entering the female tract; the same physical seal also blocks pathogen exchange, giving condoms (male and female) their added protection against STIs. Diaphragms, cervical caps, and vaults are reusable rubber barriers that a woman places to cover the cervix. <b>Spermicidal</b> creams, jellies, and foams are chemicals that immobilise/kill sperm and are used alongside barriers to raise their effectiveness, not as a stand-alone method.',
      },
      {
        t: 'p',
        html: '<b>3. Intra-uterine devices: a hostile uterus.</b> A doctor or trained nurse inserts the IUD into the <b>uterus</b> (not the cervix). Mechanism varies by type:<br>• <b>Non-medicated (Lippes loop):</b> the device’s presence increases <b>phagocytosis of sperms</b> within the uterus.<br>• <b>Copper-releasing (Cu-T, Cu-7, Multiload-375):</b> released <b>Cu<sup>2+</sup> ions</b> are spermicidal: they suppress sperm motility and the fertilising capacity of sperm.<br>• <b>Hormone-releasing (Progestasert, LNG-20):</b> slow release of a progestogen (progesterone from Progestasert, levonorgestrel from LNG-20) thickens cervical mucus, suppresses endometrial proliferation, and makes the uterus unsuitable for implantation.',
      },
      {
        t: 'p',
        html: 'IUDs are ideal for women who wish to <b>delay</b> or <b>space</b> children, because they give long-term yet fully reversible protection.',
      },
      {
        t: 'p',
        html: '<b>4. Hormonal methods: switching ovulation off.</b> <b>Combined oral pills</b> contain a progestogen with an oestrogen (progestogen-only pills, the mini-pill, contain the progestogen alone), taken daily for 21 days (combined pills), starting within the first 5 days of the cycle, then a 7-day gap, repeated. The exogenous hormones act by negative feedback to inhibit FSH/LH secretion, so no ovulation occurs; they also thicken cervical mucus to retard sperm entry and render the endometrium non-receptive to implantation: a triple block. <b>Saheli</b> is the exception: a non-steroidal, once-a-week pill (centchroman) that blocks uterine oestrogen receptors. <b>Injectables (e.g., Depo-Provera)</b> are progestogen preparations given periodically that release hormone slowly to prevent ovulation; <b>implants</b> are inserted under the skin of the upper arm and act on the same hormonal principle as pills but last far longer: the difference between the two is the site (under-skin vs. oral) and the duration of action, not the mechanism.',
      },
      {
        t: 'p',
        html: '<b>5. Surgical methods (sterilisation): cutting the pipe.</b> These are terminal methods that block <b>gamete transport</b>, not gamete production.<br>• <b>Vasectomy (male):</b> through a small incision in the scrotum, a small part of each <b>vas deferens</b> is removed/tied. Sperm are still produced by the testes but can no longer reach the seminal fluid. (Note the trap: spermatogenesis continues; only transport is blocked.)<br>• <b>Tubectomy (female):</b> a small part of each <b>fallopian tube</b> is removed/tied (often laparoscopically), blocking the ovum’s passage so sperm and ovum cannot meet.',
      },
      {
        t: 'p',
        html: 'Both are highly effective (failure rate well under 1%) but poorly reversible: tubectomy even more difficult to reverse than vasectomy.',
      },
      { t: 'fig', id: 'b12-03-fig-3.2' },
      {
        t: 'p',
        html: '<b>Note:</b> Medical Termination of Pregnancy (MTP) is <b>not</b> a contraceptive method (it terminates an established pregnancy) and is treated in Topic 04.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level | 3 marks',
        q: '<b>(differentiate / definition)</b> Distinguish between vasectomy and tubectomy on the basis of (i) the structure operated on and (ii) the sex it is performed in. State one feature common to both.',
        steps: [
          '<b>Reasoning & model answer.</b> Read the command words: “distinguish” wants a paired contrast, and the question fixes the two axes for you. (i) <b>Structure:</b> In vasectomy, a part of the <b>vas deferens</b> is cut and tied; in tubectomy, a part of the <b>fallopian tube (oviduct)</b> is cut and tied. (ii) <b>Sex:</b> Vasectomy is performed in the <b>male</b>; tubectomy in the <b>female</b>. <b>Common feature:</b> Both are <b>surgical (sterilisation) methods</b> that prevent pregnancy by <b>blocking gamete transport</b>, and both are highly effective but practically irreversible. <b>Presentation tip:</b> a two-row table earns full marks faster than prose.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap level',
        q: '<b>(eliminate the wrong action)</b> Which method is paired with an INCORRECT mechanism? <b>(a)</b> Copper IUD → Cu<sup>2+</sup> ions suppress sperm motility <b>(b)</b> Barrier method → prevents physical meeting of sperm and ovum <b>(c)</b> Vasectomy → prevents spermatogenesis <b>(d)</b> Oral pills → inhibit ovulation',
        steps: [
          '<b>Reasoning.</b> This is a frequently set trap (the book’s estimate from past papers, not official figures). Scan for the one mechanism that names production instead of transport. Option (c) says vasectomy “prevents spermatogenesis”: false. Vasectomy blocks <b>transport</b> (the vas deferens); sperm are still produced in the testes. (a), (b), (d) are all correct.',
          '<b>Speed cue:</b> whenever you see “sterilisation → stops gamete formation,” reject it on sight.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>(multi-concept: family + indicator)</b> A newly-married couple wishes to delay their first child for two years and explicitly wants a reversible, long-term method requiring no daily action. Which option best fits, and why is each alternative weaker? <b>(a)</b> Tubectomy <b>(b)</b> Copper-T <b>(c)</b> Combined oral pills <b>(d)</b> Condom alone',
        steps: [
          '<b>Reasoning.</b> Decode the constraints: long-term + reversible + no daily action.<br>• (a) Tubectomy is long-term but <b>irreversible</b> → fails “reversible.”<br>• (c) Pills are reversible but need <b>daily</b> intake → fails “no daily action.”<br>• (d) Condom is reversible and not daily but is <b>per-act</b>, not long-term, and has a higher failure rate → weaker fit.<br>• (b) <b>Copper-T</b> is inserted once, gives long-term protection, and is <b>removable/reversible</b> → satisfies all three.',
          'This is the textbook indication for IUDs: women who want to delay or space children.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | assertion–reason',
        q: 'Assertion (A): Lactational amenorrhea is classified as a natural contraceptive method. Reason (R): During intense lactation, raised prolactin suppresses gonadotropin release, so ovulation does not occur. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is NOT the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> First test A independently: lactational amenorrhea uses no device/hormone-dose/surgery and works by the body’s own physiology, so it is indeed grouped under <b>natural</b> methods: A is <b>true</b>. Now test R: the prolactin → gonadotropin-suppression → no-ovulation chain is the actual physiological basis of the method: R is <b>true</b> and it is precisely why the method prevents conception, so R <b>explains</b> A.',
          '<b>Trap to avoid:</b> students often mark (b) because the word “natural” feels behavioural while R sounds “hormonal,” assuming they cannot match, but a natural method can still have a hormonal mechanism.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define an “ideal contraceptive” and list any three features it should possess. (3 marks)',
            a: 'User-friendly, easily available, effective, reversible, least side effects, non-interfering with sexual drive/act (any three).',
          },
          {
            q: '[CUET] Arrange these into the correct family: Lippes loop, condom, Saheli, tubectomy, withdrawal, naming each family.',
            a: 'Lippes loop → IUD; condom → barrier; Saheli → hormonal (oral); tubectomy → surgical; withdrawal → natural.',
          },
          {
            q: '[NEET] Name the IUD type that works mainly by increasing phagocytosis of sperms, and the type that works mainly by releasing metal ions.',
            a: 'Non-medicated IUD (e.g., Lippes loop) → phagocytosis; copper-releasing IUD (Cu-T/Multiload-375) → Cu<sup>2+</sup> ions.',
          },
          {
            q: '[NEET] Why is the copper-T preferred over sterilisation for a woman who wants only to space her children?',
            a: 'The copper-T is long-term and <b>reversible</b>, whereas sterilisation is permanent: spacing requires reversibility.',
          },
          {
            q: '[NEET: assertion-reason] A (Assertion): Condoms offer a benefit no pill or IUD provides. R (Reason): Condoms reduce the transmission of sexually transmitted infections. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The contraceptive Saheli is best described as:',
        opts: [
          { label: 'a copper-releasing IUD', nudge: '<b>(a)</b> confuses it with Cu-T: Saheli is not a device.' },
          { label: 'a non-steroidal once-a-week oral pill', nudge: null },
          { label: 'an injectable progesterone derivative', nudge: '<b>(c)</b> describes Depo-Provera, an injectable, not Saheli.' },
          {
            label: 'a post-coital emergency pill',
            nudge: '<b>(d)</b> describes emergency contraception (72-hour window); Saheli is a regular, not post-coital, method.',
          },
        ],
        correct: 1,
        solution: 'Saheli is a non-steroidal (centchroman) once-a-week pill developed at CDRI, Lucknow.',
      },
      {
        t: 'mcq',
        q: 'Emergency contraceptive pills are recommended within how many hours of coitus to be effective?',
        opts: [
          {
            label: '24',
            nudge: '<b>(a)</b> and <b>(b)</b> are too short: students who confuse “fertile window day numbers” with hours pick these.',
          },
          {
            label: '48',
            nudge: '<b>(a)</b> and <b>(b)</b> are too short: students who confuse “fertile window day numbers” with hours pick these.',
          },
          { label: '72', nudge: null },
          {
            label: '96',
            nudge: '<b>(d)</b> 96 h overshoots the effective window; a common distractor for those who half-remember the figure.',
          },
        ],
        correct: 2,
        solution: 'Progestin/progestin–oestrogen emergency preparations are effective within ~72 hours of coitus.',
      },
      {
        t: 'mcq',
        q: 'Which statement about IUDs is INCORRECT?',
        opts: [
          {
            label: 'They are inserted by a doctor or trained nurse',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all true descriptions of IUDs.',
          },
          {
            label: 'They may be non-medicated, copper-releasing, or hormone-releasing',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all true descriptions of IUDs.',
          },
          {
            label: 'They are inserted into the uterus',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all true descriptions of IUDs.',
          },
          { label: 'Copper IUDs work by supplying nutrients that speed sperm to the ovum', nudge: null },
        ],
        correct: 3,
        solution:
          '(This is the incorrect statement, i.e., the answer.) Copper IUDs release Cu<sup>2+</sup> ions that suppress sperm motility and fertilising capacity: the opposite of “speeding sperm.” The trap in <b>(d)</b> inverts a real mechanism; students rushing the keyword “copper + sperm” may not notice the direction is reversed.',
      },
      {
        t: 'mcq',
        q: 'In vasectomy, the structure cut and tied is the ____, and as a result ____.',
        opts: [
          { label: 'vas deferens; sperm cannot reach the seminal fluid', nudge: null },
          {
            label: 'vas deferens; spermatogenesis stops',
            nudge: '<b>(b)</b> right structure, wrong consequence: spermatogenesis continues (the classic trap).',
          },
          { label: 'fallopian tube; the ovum cannot pass', nudge: '<b>(c)</b> describes tubectomy, the female procedure.' },
          {
            label: 'epididymis; testosterone secretion stops',
            nudge: '<b>(d)</b> wrong structure and a hormonal claim that does not apply: sterilisation does not affect testosterone.',
          },
        ],
        correct: 0,
        solution: 'The vas deferens is severed; sperm are still made but cannot be transported into the ejaculate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Sterilisation stops gamete production.”</b> No: vasectomy and tubectomy block gamete <b>transport</b>. Production carries on. This single distinction is examined almost every year (the book’s estimate from past papers, not official figures).',
          '<b>Mixing up IUD mechanisms.</b> Three types, three actions: non-medicated → phagocytosis; copper → Cu<sup>2+</sup> ions suppress sperm; hormonal → thickened mucus + hostile endometrium. Don’t blur them into one.',
          '<b>Calling lactational amenorrhea a permanent or long-lasting safeguard.</b> It is reliable only ~6 months post-partum and only with intense breastfeeding.',
          '<b>Forgetting the condom’s dual role.</b> Among the methods in this chapter, only the condom (male or female) also lowers the risk of STIs. Assertion–reason items hinge on this.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (for speed):</b> In any “which method for this couple?” question, extract just two tags from the stem: reversible vs permanent and spacing/delaying vs completed-family. “Delay/space + reversible” → <b>IUD or pills</b>; “completed family + permanent” → <b>sterilisation</b>. You can answer most case-based MCQs without reading the options in detail.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Five families', note: 'Natural · Barrier · IUD · Hormonal · Surgical. Sort every method here first.' },
          {
            f: 'Ideal contraceptive',
            note: 'user-friendly, available, effective, reversible, least side effects, non-interfering. (Mnemonic: “<b>U-A-E-R-L-N</b>”)',
          },
          {
            f: 'Numbers to lock',
            note: 'fertile window ≈ days <b>10–17</b>; lactational amenorrhea ≈ <b>6 months</b>; combined pills <b>21 + 7</b> day cycle; emergency contraception within <b>72 h</b>; sterilisation failure <b>< 1%</b>.',
          },
          {
            f: 'IUD mechanisms',
            note: 'non-medicated → <b>phagocytosis</b>; copper → <b>Cu<sup>2+</sup> ions</b> (suppress sperm); hormonal → <b>mucus + endometrium</b>.',
          },
          {
            f: 'Surgery',
            note: 'Vasectomy = <b>vas deferens</b> (male); Tubectomy = <b>fallopian tube</b> (female). Both block <b>transport</b>, not production.',
          },
          {
            f: 'Saheli',
            note: 'non-steroidal, once-a-week, <b>CDRI Lucknow</b> (centchroman). Among these methods, <b>only the condom</b> (male or female) also lowers the risk of STIs.',
          },
        ],
        aids: ['<b>Memory hook:</b> “<b>Nice Boys Insert Hormones Surgically</b>” → Natural, Barrier, IUD, Hormonal, Surgical.'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 120–126 ─────────────────────────
  {
    n: '02',
    title: 'Sexually Transmitted Diseases & Infertility',
    kalam: 'Reproductive health has a threat side and a rescue side, and this topic is exactly those two faces.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, very high-yield topic. NEET almost always asks the STD↔causative-agent match and one ART definition (ZIFT vs GIFT vs IUT vs ICSI) (the book’s estimate from past papers, not official figures). Match-the-column and assertion–reason are the commonest formats (the book’s estimate from past papers, not official figures). CBSE Boards favours 2–3 mark “name two STDs and their preventive measures” and “differentiate ZIFT/GIFT” answers; CUET sticks to direct recall. Lock the causative agents and the blastomere-number rule and you bank easy marks.',
      },
      {
        t: 'p',
        html: 'Reproductive health has a <b>threat side</b> and a <b>rescue side</b>, and this topic is exactly those two faces. The threat is sexually transmitted disease; the rescue is assisted reproduction for couples who cannot conceive. Keep that pairing in your head and the whole topic organises itself.',
      },
      {
        t: 'p',
        html: 'Start with the threat. A <b>sexually transmitted disease (STD)</b>, also called a <b>sexually transmitted infection (STI)</b>, <b>venereal disease (VD)</b>, or <b>reproductive tract infection (RTI)</b>, is an infection that passes from person to person mainly through sexual contact. Think of it like a contagious rumour in a hostel: it spreads fastest among those with the most contacts, often before anyone realises it is circulating, and the damage is worst when it goes undetected. That is why the <b>15–24 year age band</b> is especially vulnerable, and why so many STDs are dangerous precisely because they can stay <b>silent (asymptomatic)</b> in the early stage, especially in women.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The same body fluids and the same intimate contact that can create a pregnancy can also carry a pathogen. The protection logic therefore overlaps with contraception at exactly one point: the <b>condom</b> (male or female), the one contraceptive that also lowers the risk of infection. Every other preventive rule for STDs is behavioural: avoid sex with unknown or multiple partners, insist on hygienic practices, do not share needles, and at the first sign of doubt see a qualified doctor early.',
      },
      {
        t: 'p',
        html: 'Now the rescue side. A couple is called <b>infertile</b> when they cannot conceive despite unprotected cohabitation, and the cause can lie with either partner, a crucial social point in India, where the woman is too often blamed unfairly. Causes range from physical and congenital problems to disease, drug use, immunological factors, and even psychological stress. <b>Assisted Reproductive Technologies (ARTs)</b> are the toolkit that helps such couples: collect the gametes, give fertilisation a helping hand (sometimes outside the body), and place the resulting zygote or embryo where it can develop.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Not every STD is curable: most can be cured if caught early, but <b>hepatitis-B, genital herpes, and HIV/AIDS are not completely curable</b>, a favourite exam trap. Equally, not every STD stays confined to the reproductive tract: <b>AIDS and hepatitis-B spread through sexual contact but are systemic, blood-borne infections</b>. NCERT uses STI, STD, VD and RTI together, so treat “STD but not confined to the sex organs” as the book’s refinement, not a separate NCERT category. And ART is not a guaranteed cure: it is an assistance, advised only after specialised diagnosis fails to correct the underlying problem.',
      },

      { t: 'part', title: 'Key concepts, definitions and diagnostic indicators' },
      {
        t: 'p',
        html: 'This is a recall-heavy section: the diagnostic “indicators” you must master are <b>which pathogen causes which STD</b> and <b>which ART moves which cell-stage where</b>. (No SI units or dimensional formulae: this is qualitative biology.)',
      },
      {
        t: 'table',
        title: 'STDs: causative agents',
        head: ['STD', 'Causative agent', 'Type of pathogen'],
        rows: [
          ['Syphilis', '<i>Treponema pallidum</i>', 'Bacterium'],
          ['Gonorrhoea', '<i>Neisseria gonorrhoeae</i>', 'Bacterium'],
          ['Chlamydiasis', '<i>Chlamydia trachomatis</i>', 'Bacterium'],
          ['Genital herpes', 'Herpes simplex virus', 'Virus'],
          ['Genital warts', 'Human Papilloma Virus (HPV)', 'Virus'],
          ['Trichomoniasis', '<i>Trichomonas vaginalis</i>', 'Protozoan'],
          ['Hepatitis-B', 'Hepatitis-B virus', 'Virus'],
          ['AIDS', 'HIV (Human Immunodeficiency Virus)', 'Virus (retrovirus)'],
        ],
        note: 'The book calls this the single most-tested table (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: '<b>Diagnostic indicators:</b> the <b>not-completely-curable trio = hepatitis-B, genital herpes, HIV/AIDS</b>. The book’s <b>systemic pair = AIDS and hepatitis-B</b> (sexually transmissible but systemic, not confined to the reproductive tract; NCERT groups STD, STI, VD and RTI together).',
      },
      {
        t: 'p',
        html: '<b>STD complications (if undetected/untreated):</b> pelvic inflammatory disease (PID), ectopic pregnancy, abortion, stillbirth, infertility, and even cancer of the reproductive tract.',
      },
      { t: 'p', html: '<b>Infertility: definitions</b>' },
      {
        t: 'def',
        term: 'Infertility',
        html: 'inability of a couple to conceive/produce children despite unprotected cohabitation; causes may be physical, congenital, disease-related, drug-induced, immunological, or psychological.',
      },
      { t: 'def', term: 'Primary infertility', html: 'conception has never occurred.' },
      { t: 'def', term: 'Secondary infertility', html: 'failure to conceive after a previous successful conception.' },
      {
        t: 'table',
        title: 'Common causes (diagnostic features)',
        head: ['In males', 'In females'],
        rows: [
          ['Oligospermia (low sperm count); azoospermia (no sperm in the semen)', ''],
          ['Cryptorchidism (testes fail to descend)', 'Polycystic ovary; endometriosis'],
          ['Faulty spermatogenesis; ductal obstruction', 'Blocked fallopian tube (salpingitis)'],
          ['Gonadotropin deficiency; erectile dysfunction', 'Implantation failure; ectopic pregnancy (often after tubal damage)'],
        ],
      },
      {
        t: 'table',
        title: 'Assisted Reproductive Technologies (ARTs): the definition set',
        head: ['Technique', 'What is moved', 'Destination', 'Key cue'],
        rows: [
          ['<b>IVF</b> (test-tube baby)', 'Egg + sperm fused <b>outside</b> the body', 'Embryo then transferred (ET)', 'Fertilisation in vitro'],
          [
            '<b>ZIFT</b> (Zygote Intra Fallopian Transfer)',
            'Zygote / early embryo <b>≤ 8 blastomeres</b>',
            'Fallopian tube',
            '“≤ 8 → tube”',
          ],
          ['<b>IUT</b> (Intra Uterine Transfer)', 'Embryo <b>> 8 blastomeres</b>', 'Uterus', '“> 8 → uterus”'],
          [
            '<b>GIFT</b> (Gamete Intra Fallopian Transfer)',
            '<b>Gamete</b> (donor ovum)',
            'Fallopian tube',
            'For a woman who <b>can’t produce ova</b> but can host fertilisation; fertilisation in vivo',
          ],
          [
            '<b>ICSI</b> (Intra Cytoplasmic Sperm Injection)',
            'A <b>single sperm</b>',
            'Injected directly into the ovum',
            'For very low / abnormal sperm',
          ],
          [
            '<b>AI / IUI</b> (Artificial Insemination / Intra-Uterine Insemination)',
            '<b>Semen</b> (husband/donor)',
            'Vagina or uterus',
            'For low sperm count / inability to inseminate',
          ],
        ],
      },
      { t: 'fig', id: 'b12-03-fig-3.3' },

      { t: 'part', title: 'Mechanisms and procedures' },
      {
        t: 'p',
        html: '<b>A. How STDs damage reproductive health.</b> Transmission is overwhelmingly through sexual contact, but several agents also travel by <b>shared needles/syringes, transfusion of infected blood, and from an infected mother to her foetus</b>. This is the route for <b>HIV and hepatitis-B</b> in particular. The early stage is frequently <b>asymptomatic</b> (especially in women), so the infection is detected late; by then it may have ascended the tract to cause <b>pelvic inflammatory disease</b>, scar the fallopian tubes (raising the risk of <b>ectopic pregnancy</b> and <b>infertility</b>), or trigger abortion, stillbirth, and reproductive-tract cancer. Two features make STDs especially insidious: many cases are <b>asymptomatic in the early stage</b>, so a carrier feels perfectly healthy and unknowingly passes the infection on; and the <b>social stigma</b> attached to these diseases discourages people from seeking help in time. Both factors push detection past the window in which simple treatment would have worked. The practical takeaway the examiner wants: prevention rests on barrier protection (condoms), partner caution, clean needles, and <b>early diagnosis and complete treatment</b>.',
      },
      {
        t: 'p',
        html: '<b>B. Why the book singles out AIDS and hepatitis-B.</b> An RTI is, by definition, an infection located in the reproductive tract. Most STDs (gonorrhoea, syphilis, genital herpes, chlamydiasis, trichomoniasis) do infect the reproductive organs, so they are RTIs. But <b>AIDS and hepatitis-B,</b> though spread through sexual contact (among other routes), are <b>systemic/blood-borne</b> infections that do not stay confined to the sex organs. NCERT uses STI, STD, VD and RTI together, so this is the book’s refinement, not a separate NCERT category.',
      },
      {
        t: 'p',
        html: '<b>C. The roots of infertility: the cause behind the cause.</b> Before reaching for ART, a clinician asks why fertilisation is not happening. In <b>men</b>, the commonest culprit is a sperm problem: oligospermia (too few sperm) or azoospermia (no sperm in the semen), which may stem from faulty spermatogenesis, <b>cryptorchidism</b> (testes that never descended into the scrotum, so the warmer abdominal temperature impairs sperm formation), obstruction of the sperm-conducting ducts, or a shortage of the gonadotropins (LH and FSH) that drive spermatogenesis. In <b>women</b>, the block is usually in ovulation or transport: <b>anovulation</b> or gonadotropin deficiency means no egg is released; a <b>polycystic ovary</b> or endometriosis disturbs the cycle; and a <b>blocked or inflamed fallopian tube (salpingitis)</b> physically keeps sperm and ovum apart, often the very scarring that an untreated STD leaves behind, which is exactly how the threat side and the rescue side of this topic connect. Because the fault is as likely to be the man’s as the woman’s, both partners are usually investigated.',
      },
      {
        t: 'p',
        html: '<b>D. The logic behind the ART procedures.</b> The whole ART menu is built around one question: where in the chain is the couple stuck?<br>• If sperm simply cannot reach or fertilise the ovum (low/abnormal sperm), you bypass the journey: <b>AI/IUI</b> places semen high in the tract, and <b>ICSI</b> goes all the way: injecting a single sperm straight into the ovum’s cytoplasm.<br>• If fertilisation must be done in the lab, that is <b>IVF</b>: gametes are collected and fused in vitro, and the product is transferred back (embryo transfer, ET). The <b>transfer destination depends on developmental stage</b>: the fallopian tube is the embryo’s natural early home, so an early embryo (<b>≤ 8 blastomeres</b>) goes there by <b>ZIFT</b>, whereas a more advanced embryo (<b>> 8 blastomeres</b>) is ready for the uterine lining and goes there by <b>IUT</b>.<br>• If the woman cannot produce ova but can host fertilisation, a donor gamete is placed in her fallopian tube along with sperm (<b>GIFT</b>), so fertilisation happens inside her body (in vivo).',
      },
      {
        t: 'p',
        html: '<b>E. Why GIFT uses the tube, not the uterus.</b> A natural student question: why not just drop the gametes into the uterus? Because <b>fertilisation naturally occurs in the fallopian tube</b> (at the ampullary–isthmic junction), and GIFT mimics that natural site: the gametes are placed in the tube so that fertilisation proceeds in vivo. The uterus is the site of implantation, not of fertilisation.',
      },
      { t: 'fig', id: 'b12-03-fig-3.4' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level | 2–3 marks',
        q: '<b>(match + name)</b> Name the causative organism of each: (i) syphilis, (ii) trichomoniasis, (iii) genital warts. For each, state whether the pathogen is a bacterium, virus, or protozoan.',
        steps: [
          '<b>Reasoning & model answer.</b> (i) Syphilis → <i>Treponema pallidum</i> → <b>bacterium</b>. (ii) Trichomoniasis → <i>Trichomonas vaginalis</i> → <b>protozoan</b>. (iii) Genital warts → Human Papilloma Virus (HPV) → <b>virus</b>. <b>Tip:</b> examiners award the “type” mark separately: never skip it. Memorise trichomoniasis as the <b>odd one out</b> (the only protozoan in the list).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap level',
        q: '<b>(eliminate the sex-organ infections)</b> Which one of the following spreads through sexual contact but is a systemic (not sex-organ-confined) infection? <b>(a)</b> Gonorrhoea <b>(b)</b> Genital herpes <b>(c)</b> AIDS <b>(d)</b> Chlamydiasis',
        steps: [
          '<b>Reasoning.</b> Re-read the stem: it is asking for an STD that is <b>not</b> an RTI. Gonorrhoea, herpes, and chlamydiasis all reside in the reproductive tract → eliminated. <b>AIDS</b> (HIV) is a systemic infection transmitted sexually but not localised to the sex organs.',
          '<b>Speed cue:</b> the book’s “systemic STD” pair is <b>AIDS + hepatitis-B</b>: spot either and pick it.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>(multi-concept: technique selection)</b> A couple seeks help: the wife produces healthy ova and has a normal uterus, but the husband has a very low sperm count and his few sperm cannot penetrate the egg. Which technique is most appropriate, and why are the others less suitable? <b>(a)</b> GIFT <b>(b)</b> ICSI <b>(c)</b> ZIFT alone <b>(d)</b> Tubectomy',
        steps: [
          '<b>Reasoning.</b> Identify the exact block: the ovum is fine; the failure is <b>sperm penetration</b>.<br>• (a) GIFT is for a woman who <b>cannot produce ova</b>, not this couple.<br>• (c) ZIFT is a transfer step; it presumes a zygote already formed: it doesn’t solve the penetration problem.<br>• (d) Tubectomy is a <b>contraceptive</b> (sterilisation) method, the opposite of the goal.<br>• (b) <b>ICSI</b> injects a single sperm directly into the ovum’s cytoplasm, bypassing the penetration failure exactly.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | assertion–reason',
        q: 'Assertion (A): In GIFT, the gametes are placed in the fallopian tube rather than the uterus. Reason (R): Fertilisation naturally occurs in the ampullary region of the fallopian tube, which GIFT imitates. <b>(a)</b> Both A and R true, R correctly explains A <b>(b)</b> Both A and R true, R does NOT explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> Test A: GIFT does place donor gamete(s) in the <b>fallopian tube</b>: A is <b>true</b>. Test R: fertilisation naturally takes place in the ampullary region of the fallopian tube, and GIFT places the gametes there so that fertilisation occurs in vivo: R is <b>true</b> and is the direct reason for A.',
          '<b>Trap:</b> students who half-remember “embryos > 8 cells go to the uterus” may wrongly think the uterus is always the destination, but that rule is about embryos, not free gametes.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between ZIFT and IUT on the basis of the developmental stage transferred and the site of transfer. (2 marks)',
            a: 'ZIFT → zygote/early embryo ≤8 blastomeres → fallopian tube; IUT → embryo >8 blastomeres → uterus.',
          },
          {
            q: '[CUET] Name the diagnostic give-away pathogen type for each: gonorrhoea, genital herpes, trichomoniasis.',
            a: 'Gonorrhoea: bacterium; genital herpes: virus; trichomoniasis: protozoan.',
          },
          {
            q: '[NEET] Which two STDs are transmitted sexually yet are systemic infections, not confined to the reproductive tract?',
            a: 'AIDS (HIV) and hepatitis-B.',
          },
          {
            q: '[NEET] A man’s report reads “azoospermia.” Define the term and name one ART by which the couple might still have a biological child if even a few sperm can be retrieved (for example surgically from the testis or epididymis).',
            a: 'Azoospermia = absence of sperm in the ejaculate; ICSI (if any viable sperm can be recovered).',
          },
          {
            q: '[NEET: assertion-reason] A: Most STDs are curable if detected early. R: Hepatitis-B, genital herpes, and HIV infections are completely curable. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(c): A is true but R is false (those three are not completely curable).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The technique in which a sperm is directly injected into the cytoplasm of an ovum is:',
        opts: [
          { label: 'GIFT', nudge: '<b>(a)</b> GIFT transfers gametes into the tube, not a single sperm into the egg.' },
          { label: 'ZIFT', nudge: '<b>(b)</b> ZIFT transfers an already-formed zygote/early embryo.' },
          { label: 'ICSI', nudge: null },
          { label: 'IUI', nudge: '<b>(d)</b> IUI introduces semen into the uterus: no direct injection into the egg.' },
        ],
        correct: 2,
        solution: 'ICSI = Intra Cytoplasmic Sperm Injection: one sperm placed directly inside the ovum.',
      },
      {
        t: 'mcq',
        q: 'Match STD with its causative organism: A. Syphilis B. AIDS C. Genital warts D. Gonorrhoea, with 1. HIV 2. <i>Neisseria</i> 3. <i>Treponema</i> 4. HPV.',
        opts: [
          { label: 'A–3 B–1 C–4 D–2', nudge: null },
          {
            label: 'A–1 B–3 C–2 D–4',
            nudge: 'The other options scramble the bacterium/virus pairings: the usual error is swapping syphilis (<i>Treponema</i>) and gonorrhoea (<i>Neisseria</i>).',
          },
          {
            label: 'A–2 B–4 C–1 D–3',
            nudge: 'The other options scramble the bacterium/virus pairings: the usual error is swapping syphilis (<i>Treponema</i>) and gonorrhoea (<i>Neisseria</i>).',
          },
          {
            label: 'A–4 B–2 C–3 D–1',
            nudge: 'The other options scramble the bacterium/virus pairings: the usual error is swapping syphilis (<i>Treponema</i>) and gonorrhoea (<i>Neisseria</i>).',
          },
        ],
        correct: 0,
        solution: 'Syphilis–<i>Treponema</i> (3); AIDS–HIV (1); Genital warts–HPV (4); Gonorrhoea–<i>Neisseria</i> (2).',
      },
      {
        t: 'mcq',
        q: 'Embryo with more than 8 blastomeres formed by in-vitro fertilisation is transferred into the:',
        opts: [
          {
            label: 'fallopian tube',
            nudge: '<b>(a)</b> is the destination for ≤8 blastomeres (ZIFT): the most common trap, picked by students who reverse the rule.',
          },
          { label: 'cervix', nudge: '<b>(b)</b> and <b>(d)</b> are not transfer sites in ART.' },
          { label: 'uterus', nudge: null },
          { label: 'fimbriae', nudge: '<b>(b)</b> and <b>(d)</b> are not transfer sites in ART.' },
        ],
        correct: 2,
        solution: '“>8 blastomeres → uterus” defines IUT.',
      },
      {
        t: 'mcq',
        q: 'Which statement about infertility is INCORRECT?',
        opts: [
          {
            label: 'The cause may lie with either the male or the female partner',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all true.',
          },
          {
            label: 'Primary infertility means conception has never occurred',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all true.',
          },
          { label: 'Azoospermia refers to a low but present sperm count', nudge: null },
          { label: 'Blocked fallopian tubes can cause female infertility', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all true.' },
        ],
        correct: 2,
        solution:
          '(The incorrect statement.) Azoospermia = <b>absence of sperm in semen;</b> low count is oligospermia. The trap in <b>(c)</b> swaps the two “-spermia” terms: a classic confusion.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“All STDs are curable.”</b> False. Memorise the <b>not-curable trio: hepatitis-B, genital herpes, HIV/AIDS</b>.',
          '<b>Confusing oligospermia and azoospermia.</b> Oligo = few (low count); azoo = none (no sperm in the semen). The prefix is the whole answer.',
          '<b>Reversing the ART transfer rule.</b> Lock it as a single phrase: <b>“≤ 8 to the tube (ZIFT), > 8 to the uterus (IUT).”</b>',
          '<b>Treating GIFT and AI as the same “donor” method.</b> GIFT moves a gamete (ovum) into the tube for in-vivo fertilisation; AI/IUI moves semen into the vagina/uterus. Different cell, different problem.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (for speed):</b> For any “which ART?” MCQ, extract two facts from the stem: what is the working material (sperm? gamete? zygote? embryo?) and what stage/where. The material usually points to a single technique, so you can answer before reading all four options.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'STD = STI = VD = RTI (NCERT groups them)', note: 'Most curable early; <b>NOT curable: hepatitis-B, genital herpes, HIV/AIDS</b>.' },
          {
            f: 'Causative agents',
            note: 'Syphilis–<i>Treponema pallidum</i> · Gonorrhoea–<i>Neisseria</i> · Chlamydiasis–<i>Chlamydia</i> · Genital herpes–Herpes simplex virus · Genital warts–HPV · Trichomoniasis–<i>Trichomonas</i> (protozoan) · Hepatitis-B–HBV · AIDS–HIV.',
          },
          { f: 'Systemic STDs', note: 'AIDS + hepatitis-B: the book singles them out as systemic, not confined to the sex organs.' },
          { f: 'Vulnerable age', note: '15–24 yrs. <b>Complications:</b> PID, ectopic pregnancy, infertility, cancer.' },
          {
            f: 'Infertility',
            note: 'can be either partner. Male: oligospermia/azoospermia/cryptorchidism. Female: anovulation/PCOS/tubal block.',
          },
          {
            f: 'ART rule',
            note: 'IVF (fertilise in vitro) → <b>≤ 8 blastomeres = ZIFT → tube; > 8 = IUT → uterus</b>. GIFT = donor ovum → tube (in vivo). ICSI = one sperm → into ovum. AI/IUI = semen → vagina/uterus.',
          },
        ],
        aids: ['<b>Memory hook:</b> “<b>Tubes take the young, the uterus takes the grown</b>” (≤8 cells → tube; >8 → uterus).'],
      },
    ],
  },
];
