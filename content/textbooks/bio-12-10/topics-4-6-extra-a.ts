import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 10 (Biotechnology and its Applications), Topics 04 to 06 and Additional topic A, word for word from
 * the Class 12 Biology Master Reference (book pp. 556 to 577): Topic 04 "Molecular Diagnosis (Early Detection of Disease)"
 * (top of p. 556 to p. 561; Figure 10.5 is captioned on p. 558 and drawn on p. 559), Topic 05 "Transgenic Animals" (top of
 * p. 562 to p. 567; Figure 10.6 is captioned on p. 564 and drawn on p. 565), Topic 06 "Ethical Issues, Biopiracy & GEAC"
 * (top of p. 568 to p. 573; Figure 10.7 is captioned on p. 570 and drawn on p. 571), then the shared introduction to the
 * Additional topics (p. 574 lines 4 to 9, which opens Additional topic A's Introduction) and A "ELISA: The Full Protocol, Two
 * Formats, and the Antigen-Trapping Step" (p. 574 line 10 to p. 577 line 18, ending with its practice answers; Addendum B
 * begins at p. 577 line 19, the next writer).
 *
 * Topic indexes: Topic 04 = 3, Topic 05 = 4, Topic 06 = 5, A = 6. Each figure stands where the book's caption stands (at the
 * end of the part's paragraph before it). Em dashes of the book are written as a colon, commas or brackets (every one is
 * listed in the report). The book's "Q1: [CBSE Board level] (3 marks)." becomes the tag; "Example A.1: [NEET] Title"
 * becomes the tag and a bold lead on the question. Emphasis italics are dropped. The book prints "2.4 g/L" with a slash:
 * written g L with a raised minus one (house unit rule). The three Exam Relevance boxes and the two "constantly" and "most
 * tested" claims carry the label "the book’s estimate from past papers, not official figures". Where the book prints no
 * answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 556–561 ─────────────────────────
  {
    n: '04',
    title: 'Molecular Diagnosis (Early Detection of Disease)',
    kalam: 'For most diseases, the earlier you detect them, the better the outcome.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A steady source of NEET/CUET questions, usually one per paper (the book’s estimate from past papers, not official figures): “which technique is based on antigen–antibody interaction?” (ELISA), “what is a probe?”, and “PCR is used to detect…”. CBSE Boards asks 2–3 mark answers on why early detection matters and how PCR/ELISA/probes work. JEE does not test Biology.',
      },
      {
        t: 'p',
        html: 'For most diseases, the earlier you detect them, the better the outcome. But here is the cruel problem with ordinary diagnosis: by the time a patient actually feels symptoms, the pathogen has usually multiplied to a <b>very high concentration</b> in the body, sometimes too late for the easiest treatment. Conventional tests like routine serum or urine analysis simply are <b>not sensitive enough</b> to catch an infection in its earliest, low-concentration stage.',
      },
      {
        t: 'p',
        html: 'Molecular diagnosis flips this around. Instead of waiting for symptoms or for the pathogen to become abundant, it hunts for the pathogen’s <b>molecules</b>, its <b>nucleic acids (DNA/RNA)</b> or its <b>proteins (antigens)</b>, even when only a tiny amount is present. This lets doctors detect disease <b>before</b> symptoms appear, and even spot inherited genetic defects.',
      },
      {
        t: 'p',
        html: 'There are three star techniques you must know:<br>• <b>PCR</b>: amplify and detect. It makes millions of copies of a pathogen’s nucleic acid, so even a trace amount becomes detectable.<br>• <b>Probe hybridisation (autoradiography)</b>: match and reveal. A tagged single-stranded DNA/RNA “probe” pairs with its complementary sequence to flag a specific gene.<br>• <b>ELISA</b>: catch by recognition. It uses the antigen–antibody lock-and-key to detect a pathogen’s proteins or the antibodies made against it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Conventional diagnosis is like noticing thieves only after the house is already ransacked. PCR is like a <b>photocopier</b> that blows up a single fingerprint until it is impossible to miss. A probe is like a <b>sniffer dog</b> trained to bark only at one specific scent. ELISA is like a <b>lock that fits exactly one key</b>: if the key (antigen or antibody) is present, the alarm goes off.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> A probe works by <b>complementary base pairing</b>, so it will <b>not</b> pair properly with a <b>mutated</b> gene whose sequence no longer matches under the test conditions, which is exactly how it tells a normal gene from a mutated one. And ELISA detects <b>proteins/antibodies</b>, not the gene itself, so it answers a different question from PCR or a DNA probe. Choosing the right tool depends on whether you are after a <b>nucleic acid</b> (PCR/probe) or a <b>protein/antibody</b> (ELISA).',
      },

      { t: 'part', title: 'Key terms, tools and constructs' },
      {
        t: 'table',
        title: null,
        head: ['Term / Construct', 'What it is'],
        rows: [
          ['PCR (Polymerase Chain Reaction)', 'A technique that <b>amplifies (copies) nucleic acids</b>, enabling detection of even very low pathogen concentrations.'],
          ['Probe', 'A <b>single-stranded DNA or RNA</b> tagged with a <b>radioactive (or fluorescent) molecule</b>, used to find a complementary sequence.'],
          ['Hybridisation', 'The pairing of the probe with its <b>complementary</b> DNA/RNA in a clone of cells.'],
          ['Autoradiography', 'Detection step in which the bound radioactive probe exposes a <b>photographic film</b>.'],
          ['ELISA', 'Enzyme-Linked Immunosorbent Assay, based on <b>antigen–antibody interaction</b>.'],
          ['Antigen', 'A pathogen molecule (protein, glycoprotein) detected by ELISA.'],
          ['Antibody', 'A molecule made by the body against a pathogen; its presence can also be detected by ELISA.'],
        ],
      },
      { t: 'p', html: '<b>Which technique for which target, keep them separate:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Technique', 'Detects', 'Principle'],
        rows: [
          ['PCR', 'Nucleic acid (DNA/RNA)', '<b>Amplification</b> of nucleic acid'],
          ['Probe + autoradiography', 'A specific gene / mutation', '<b>Complementary base pairing</b> + radioactive tag'],
          ['ELISA', 'Protein antigen / antibody', '<b>Antigen–antibody</b> interaction'],
        ],
      },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>A. Why early detection needs molecular methods</b>' },
      {
        t: 'p',
        html: 'Effective treatment usually depends on detecting a disease <b>early</b>, but by the time visible <b>symptoms appear, the pathogen concentration is already very high</b> in the body. Conventional approaches such as routine serum/urine analysis cannot reliably catch an infection in its <b>early, low-concentration stage</b>. Molecular techniques solve this by detecting the pathogen’s <b>nucleic acids or proteins</b> even when present in <b>very low amounts</b>.',
      },
      { t: 'p', html: '<b>B. PCR: detection by amplification</b>' },
      {
        t: 'p',
        html: '<b>PCR helps in the early detection of pathogens by amplifying their nucleic acids.</b> Even if only a trace of the pathogen’s DNA/RNA is present, PCR makes <b>many copies</b>, raising the signal until it is detectable. This is why PCR can spot disease long before symptoms.',
      },
      {
        t: 'p',
        html: 'Its diagnostic uses include: detecting <b>HIV</b> in suspected AIDS patients (the virus is present in very low concentration early on), detecting <b>mutations in genes</b> of suspected <b>cancer</b> patients, and diagnosing <b>many genetic disorders</b>. (HIV is an RNA virus, so its RNA is first copied into DNA, as in RT-PCR, before it is amplified.) (The DNA-copying step relies on a thermostable DNA polymerase such as Taq.)',
      },
      { t: 'p', html: '<b>C. Probe hybridisation and autoradiography: finding a specific gene</b>' },
      {
        t: 'p',
        html: 'A <b>probe</b> is a <b>single strand of DNA or RNA tagged with a radioactive molecule</b>. To check whether a particular (normal or mutated) gene is present, the probe is allowed to <b>hybridise to its complementary DNA</b> in a clone of cells, and the result is read by <b>autoradiography</b> (exposing a photographic film).',
      },
      {
        t: 'p',
        html: 'The clever diagnostic twist: a probe pairs <b>only with a complementary sequence.</b> So a clone carrying the <b>mutated</b> gene <b>will not appear on the photographic film</b>, because the probe <b>cannot hybridise</b> with the altered sequence. Presence or absence of the spot therefore tells you whether the normal gene is intact or mutated.',
      },
      { t: 'p', html: '<b>D. ELISA: detection by antigen–antibody interaction</b>' },
      {
        t: 'p',
        html: '<b>ELISA is based on the principle of antigen–antibody interaction.</b> Infection by a pathogen can be detected either by the <b>presence of antigens</b> (proteins, glycoproteins of the pathogen) <b>or</b> by detecting the <b>antibodies</b> the body has synthesised against that pathogen. Because the antigen–antibody fit is highly specific, ELISA is a sensitive, widely used test (for example, in HIV screening).',
      },
      { t: 'fig', id: 'b12-10-fig-10.5' },
      { t: 'p', html: '<b>E. Putting it together: choosing and combining the tools</b>' },
      {
        t: 'p',
        html: 'In practice, the three techniques answer different questions and are often used together. If a doctor needs to know whether a <b>specific nucleic-acid sequence</b> (a virus’s genome, a cancer mutation, a genetic-disorder gene) is present, the choice is <b>PCR</b> (to amplify and detect even trace amounts) or a <b>DNA probe</b> (to flag a specific sequence by hybridisation). If instead the question is about a <b>protein signature</b> (has the body encountered a pathogen, or is a particular antigen present), then <b>ELISA</b> is the tool, because it reads the antigen–antibody interaction rather than the gene.',
      },
      {
        t: 'p',
        html: 'The common thread across all three is <b>sensitivity and earliness.</b> Each was developed precisely because waiting for symptoms means waiting until the pathogen is abundant and the disease advanced. By detecting <b>molecules</b>, nucleic acids or proteins, at very low levels, molecular diagnosis shifts detection to the earliest possible window, when treatment is most effective. This is why, despite needing specialised equipment, these methods have become the backbone of modern clinical diagnosis for infections, inherited disorders, and cancers alike.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Why is early diagnosis important, and how does PCR make early detection of a pathogen possible?',
        steps: [
          '<b>Model answer.</b> Early diagnosis matters because, by the time symptoms appear, the <b>pathogen concentration is already very high</b>, making treatment harder; conventional tests cannot detect the low concentrations present early. <b>PCR amplifies the pathogen’s nucleic acid</b>, making many copies of even a trace amount, so the pathogen can be <b>detected at a very early, low-concentration stage</b> (e.g., HIV in suspected AIDS patients).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the column.</b><br>Column I | Column II<br>A. PCR | 1. Antigen–antibody interaction<br>B. Probe | 2. Amplifies nucleic acid<br>C. ELISA | 3. Single-stranded tagged nucleic acid<br>D. Autoradiography | 4. Reads the bound probe on film',
        steps: [],
        ans: 'A–2, B–3, C–1, D–4.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> A clone carrying a mutated gene does not appear on the photographic film during probe hybridisation. <b>Reason (R):</b> The probe pairs only with a sequence complementary to it.<br><b>(a)</b> Both true, R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Both are true and R explains A: because the mutated sequence is no longer complementary, the probe cannot hybridise, so no radioactive spot forms on the film.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-statement.</b> Choose the correct statements: (i) ELISA detects either pathogen antigens or antibodies against the pathogen. (ii) A probe is a double-stranded DNA tagged with a radioactive molecule. (iii) PCR can detect mutations in genes of suspected cancer patients. (iv) Conventional methods detect pathogens at a very early stage.<br><b>(a)</b> (i) and (iii)<br><b>(b)</b> (i), (ii) and (iii)<br><b>(c)</b> (iii) and (iv)<br><b>(d)</b> all four',
        steps: [
          '(i) and (iii) are correct. (ii) is wrong: a probe is <b>single-stranded</b>. (iv) is wrong: conventional methods <b>fail</b> at early/low concentrations, which is why molecular methods are needed.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the molecular-diagnosis technique based on the principle of antigen–antibody interaction.',
            a: 'ELISA.',
          },
          {
            q: '[CUET] True or false: (i) A probe is single-stranded. (ii) PCR detects proteins by antigen–antibody binding.',
            a: '(i) True; (ii) False: PCR detects nucleic acids by amplification, not antigen–antibody binding.',
          },
          {
            q: '[NEET] State two diagnostic uses of PCR.',
            a: 'Detecting HIV in suspected AIDS patients; detecting gene mutations in suspected cancer patients (also diagnosing many genetic disorders).',
          },
          {
            q: '[NEET] Explain why a mutated gene fails to show up on the photographic film in probe hybridisation.',
            a: 'The probe binds only to a complementary sequence; the mutation alters the sequence so the probe cannot hybridise, leaving no radioactive spot.',
          },
          {
            q: '[NEET high-difficulty] A doctor must detect a virus present in extremely low concentration before symptoms appear. Which technique is most suitable and why?',
            a: 'PCR: it amplifies the pathogen’s nucleic acid, so even a trace amount becomes detectable at an early stage.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which technique is based on the principle of antigen–antibody interaction?',
        opts: [
          { label: 'PCR', nudge: '<b>(a)</b> PCR is nucleic-acid amplification.' },
          { label: 'ELISA', nudge: null },
          { label: 'Gene therapy', nudge: '<b>(c)</b> Gene therapy is treatment, not diagnosis.' },
          { label: 'Autoradiography', nudge: '<b>(d)</b> Autoradiography reads a radioactive probe, not antigen–antibody binding.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. ELISA relies on antigen–antibody binding.',
      },
      {
        t: 'mcq',
        q: 'A probe used in molecular diagnosis is:',
        opts: [
          { label: 'a double-stranded DNA tagged with a radioactive molecule', nudge: '<b>(a)</b> “Double-stranded” is the classic trap.' },
          { label: 'a single-stranded DNA or RNA tagged with a radioactive molecule', nudge: null },
          { label: 'an antibody', nudge: '<b>(c)</b> An antibody belongs to ELISA.' },
          { label: 'a thermostable enzyme', nudge: '<b>(d)</b> That describes Taq polymerase.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. A probe is a single-stranded nucleic acid carrying a radioactive (or fluorescent) tag.',
      },
      {
        t: 'mcq',
        q: 'PCR is used to detect:',
        opts: [
          {
            label: 'HIV in suspected AIDS patients',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are each correct individually, so the inclusive option is right; choosing only one is the error.',
          },
          {
            label: 'mutations in genes of suspected cancer patients',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are each correct individually, so the inclusive option is right; choosing only one is the error.',
          },
          {
            label: 'many genetic disorders',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are each correct individually, so the inclusive option is right; choosing only one is the error.',
          },
          { label: 'all of these', nudge: null },
        ],
        correct: 3,
        solution: 'Correct: <b>(d)</b>. PCR’s amplification supports all these diagnostic uses.',
      },
      {
        t: 'mcq',
        q: 'Conventional methods of diagnosis are often inadequate because:',
        opts: [
          { label: 'they are too expensive', nudge: '<b>(a)</b> is not the principal limitation.' },
          { label: 'by the time symptoms appear, the pathogen concentration is already very high', nudge: null },
          { label: 'they amplify nucleic acids', nudge: '<b>(c)</b> describes PCR.' },
          { label: 'they are based on antigen–antibody interaction', nudge: '<b>(d)</b> describes ELISA.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. They cannot catch the early, low-concentration stage; detection comes only after the pathogen is abundant.',
      },
      {
        t: 'mcq',
        q: 'Detection of a bound radioactive probe on a photographic film is called:',
        opts: [
          { label: 'electrophoresis', nudge: '<b>(a)</b> separates molecules by charge/size.' },
          { label: 'autoradiography', nudge: null },
          { label: 'chromatography', nudge: '<b>(c)</b>, <b>(d)</b> are separation techniques, not detection of radioactive tags.' },
          { label: 'centrifugation', nudge: '<b>(c)</b>, <b>(d)</b> are separation techniques, not detection of radioactive tags.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Autoradiography reveals where the radioactive probe has hybridised.',
      },
      {
        t: 'mcq',
        q: 'ELISA can detect:',
        opts: [
          { label: 'only protein antigens', nudge: '<b>(a)</b>, <b>(b)</b> are each too narrow.' },
          { label: 'only antibodies', nudge: '<b>(a)</b>, <b>(b)</b> are each too narrow.' },
          { label: 'antigens (proteins/glycoproteins) or antibodies against the pathogen', nudge: null },
          { label: 'only nucleic acids', nudge: '<b>(d)</b> is wrong: nucleic acids are the domain of PCR/probes, not ELISA.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. ELISA can pick up either the pathogen’s antigens or the antibodies the body makes against it.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Probe is double-stranded.”</b> A probe is <b>single-stranded</b> DNA/RNA with a radioactive tag.',
          '<b>Pitfall 2: Mixing up targets.</b> <b>PCR/probe → nucleic acids</b>; <b>ELISA → proteins (antigens)/antibodies.</b> Don’t say “ELISA amplifies DNA.”',
          '<b>Pitfall 3: “ELISA detects only antigens.”</b> It can detect <b>antigens or antibodies</b> against the pathogen.',
          '<b>Pitfall 4: “The mutated gene lights up.”</b> It is exactly the opposite: the mutated clone gives <b>no spot</b>, because the probe cannot pair with the altered sequence.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Decide the technique by the target: looking for a <b>gene/mutation/virus DNA → PCR or probe</b>; looking for a <b>protein/antibody → ELISA</b>. If a question asks which technique of this chapter rests on antigen–antibody interaction, the answer is ELISA.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Goal</b>',
            note: 'detect disease <b>early</b>, before the pathogen multiplies and symptoms appear; conventional tests miss the <b>low-concentration</b> early stage.',
          },
          { f: '<b>PCR</b>', note: '<b>amplifies nucleic acid</b> → detects trace pathogens; uses: <b>HIV, cancer mutations, genetic disorders</b>.' },
          {
            f: '<b>Probe</b>',
            note: '<b>single-stranded DNA/RNA + radioactive tag</b>; hybridises to complementary sequence; read by <b>autoradiography</b>; <b>mutated gene gives no spot</b>.',
          },
          { f: '<b>ELISA</b>', note: '<b>antigen–antibody interaction</b>; detects pathogen <b>antigens (proteins/glycoproteins)</b> or <b>antibodies</b> against it.' },
        ],
        aids: ['<b>Mnemonics:</b> “PCR = Photocopy & Reveal”; “Probe is single, mutant gives no spot”; “ELISA = antigen–antibody.”'],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 562–567 ─────────────────────────
  {
    n: '05',
    title: 'Transgenic Animals',
    kalam: 'Why bother engineering whole animals when bacteria are easier?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable NEET/CUET scorer (the book’s estimate from past papers, not official figures). The “95% of transgenic animals are mice” fact, Rosie the transgenic cow (1997, human α-lactalbumin), and the five uses are asked often. CBSE Boards asks “define transgenic animals and explain any four areas of use” (a standard long-answer). JEE does not test Biology.',
      },
      {
        t: 'p',
        html: 'We have already seen bacteria turned into tiny factories (humulin) and plants armed against pests (Bt cotton). The natural next question is: can we engineer <b>animals</b> the same way? The answer is yes, and such an animal is called a <b>transgenic animal</b>: one whose <b>DNA has been manipulated to carry and express an extra, foreign gene</b> (a transgene). Mice, rats, rabbits, pigs, sheep, cows and even fish have been made transgenic, and remarkably, about <b>95% of all existing transgenic animals are mice</b>, because mice are small, breed fast, and are genetically well understood.',
      },
      {
        t: 'p',
        html: 'Why bother engineering whole animals when bacteria are easier? Because an animal can do things a bacterium cannot: it has a real physiology, real organs, a real immune system and (in mammals) it produces <b>milk</b>. That makes transgenic animals very valuable for <b>studying how genes work, modelling human diseases, manufacturing complex human proteins, and safely testing vaccines and chemicals.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A transgenic mouse carrying a human disease gene is like a <b>flight simulator for doctors</b>: you can study the “crash” (the disease) and test new “landing techniques” (treatments) safely, without risking a human passenger. And a transgenic cow like <b>Rosie</b> is a <b>living dairy</b> that produces milk enriched with a human protein, more suitable for human babies than ordinary cow’s milk.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> A transgenic animal is defined by carrying a <b>foreign</b> gene that it <b>expresses</b>: simply being bred selectively does not make an animal transgenic; the foreign DNA must be deliberately introduced. Also, the famous “biological products” use overlaps with the medicine topic (e.g., α-1-antitrypsin, used to treat emphysema, has been made in transgenic sheep), but here the focus is the <b>animal</b> as the production platform, not the drug itself.',
      },

      { t: 'part', title: 'Key terms, tools and constructs' },
      {
        t: 'table',
        title: null,
        head: ['Term / Construct', 'What it is'],
        rows: [
          ['Transgenic animal', 'An animal whose DNA has been <b>manipulated to possess and express an extra (foreign) gene</b>.'],
          ['Transgene', 'The <b>foreign gene</b> introduced into the host animal.'],
          ['Mice (95%)', 'The overwhelmingly most common transgenic animals.'],
          ['Rosie', 'The <b>first transgenic cow (1997)</b>; her milk contained human <b>α-lactalbumin</b>.'],
          ['α-lactalbumin', 'The human milk protein in Rosie’s milk (~<b>2.4 g L<sup>−1</sup></b>), making it nutritionally more balanced for human babies.'],
          ['α-1-antitrypsin (AAT)', 'A human therapeutic protein produced in transgenic <b>sheep</b> (e.g., “Tracy”) to treat <b>emphysema</b>.'],
          ['Disease model', 'A transgenic animal engineered to mimic a human disease for research.'],
        ],
      },
      { t: 'p', html: '<b>The five NCERT uses of transgenic animals, memorise as a set:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Use', 'What it means'],
        rows: [
          ['1. Normal physiology & development', 'Study how genes are <b>regulated</b> and affect body function/development (e.g., insulin-like growth factor).'],
          ['2. Study of diseases', 'Serve as <b>models</b> for human diseases (cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer’s) to test new treatments.'],
          ['3. Biological products', '<b>Manufacture useful human proteins</b> (e.g., α-1-antitrypsin in sheep; Rosie’s α-lactalbumin milk).'],
          ['4. Vaccine safety testing', 'Transgenic mice are being used to test the safety of the <b>polio vaccine</b> and could replace monkeys.'],
          ['5. Chemical safety (toxicity) testing', 'Animals made <b>more sensitive to toxins</b> give <b>faster</b> safety results.'],
        ],
      },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>A. What makes an animal “transgenic”</b>' },
      {
        t: 'p',
        html: 'A transgenic animal has had its <b>DNA manipulated</b> so that it <b>possesses and expresses an extra, foreign gene.</b> The foreign gene (the transgene) is introduced and then passed on, so the animal stably carries a trait it would never have had naturally. Examples span <b>rats, rabbits, pigs, sheep, cows and fish</b>, but <b>about 95% of existing transgenic animals are mice</b>, the workhorse of genetic research.',
      },
      { t: 'p', html: '<b>B. The five uses, explained</b>' },
      {
        t: 'p',
        html: '<b>1. Normal physiology and development.</b> Transgenic animals let scientists watch <b>how specific genes are regulated</b> and how their products influence normal growth and development, for instance, studying complex factors such as <b>insulin-like growth factor.</b> By switching particular genes on, researchers learn what is needed, and when, during development.',
      },
      {
        t: 'p',
        html: '<b>2. Study of diseases.</b> Many transgenic animals are built as <b>models of human diseases: cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer’s</b> and more. Because the animal develops a disease resembling the human one, scientists can investigate <b>new treatments</b> safely before trying them on people.',
      },
      {
        t: 'p',
        html: '<b>3. Biological products.</b> Using rDNA technology, transgenic animals can be made to <b>produce valuable human proteins.</b> The textbook example is the introduction of the human <b>α-1-antitrypsin</b> gene into <b>sheep</b> to produce α-1-antitrypsin for treating <b>emphysema.</b> The first transgenic cow, <b>Rosie (1997)</b>, produced milk containing human <b>α-lactalbumin</b> (about <b>2.4 g L<sup>−1</sup></b>), nutritionally more <b>balanced for human babies</b> than natural cow’s milk.',
      },
      {
        t: 'p',
        html: '<b>4. Vaccine safety.</b> Transgenic animals are used to <b>test the safety of vaccines</b> before they are given to humans. Transgenic <b>mice</b> are being used to test <b>polio vaccine</b>, and could replace the use of monkeys for such testing.',
      },
      {
        t: 'p',
        html: '<b>5. Chemical safety (toxicity) testing.</b> Transgenic animals are created that are <b>more sensitive to toxic substances</b> than normal animals. They are exposed to the chemical and the effects studied, giving toxicity <b>results faster</b> than conventional testing.',
      },
      { t: 'fig', id: 'b12-10-fig-10.6' },
      { t: 'p', html: '<b>C. Why use whole animals, and why mostly mice</b>' },
      {
        t: 'p',
        html: 'For a protein that a bacterium can make without special processing, such as a single insulin chain, a bacterium is ideal. But many valuable human proteins are <b>complex</b>: they need the folding, processing and modifications that only a true animal cell can provide, and some are most conveniently harvested from <b>milk.</b> A transgenic sheep or cow can secrete a human therapeutic protein into its milk, which is then purified: this is why the human <b>α-1-antitrypsin</b> gene was put into <b>sheep</b> (such as “Tracy”), and why <b>Rosie’s</b> milk carried human α-lactalbumin. The animal becomes a living, renewable factory for a complex product.',
      },
      {
        t: 'p',
        html: 'Whole animals are also hard to replace for <b>studying a disease in a living body.</b> A petri dish cannot reproduce the way a tumour spreads through tissues, or how Alzheimer’s affects a working brain, but a transgenic animal model can, allowing treatments to be tested in a realistic system before reaching humans. And <b>mice dominate (about 95%)</b> because they are small, inexpensive, breed rapidly, share much of their biology with humans, and have an exceptionally well-characterised genome, making them a very practical canvas for genetic engineering. These advantages, taken together, are why transgenic animals occupy a niche that neither bacteria nor cell cultures can fill.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 5 marks',
        q: 'Define a transgenic animal and explain any four areas in which transgenic animals are useful.',
        steps: [
          '<b>Model answer.</b> A <b>transgenic animal</b> is one whose <b>DNA has been manipulated to possess and express an extra (foreign) gene.</b> Four areas of use: <b>(i) Normal physiology and development</b>: studying how genes are regulated and influence growth (e.g., insulin-like growth factor). <b>(ii) Study of diseases</b>: serving as models for human diseases such as cancer and Alzheimer’s to test new treatments. <b>(iii) Biological products</b>: producing useful human proteins, e.g., α-1-antitrypsin in sheep (for emphysema); Rosie’s milk with human α-lactalbumin. <b>(iv) Vaccine safety testing</b>: testing the safety of vaccines, for example transgenic mice being used for the polio vaccine.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the column.</b><br>Column I | Column II<br>A. Rosie | 1. Treats emphysema (made in sheep)<br>B. α-1-antitrypsin | 2. First transgenic cow (1997)<br>C. 95% | 3. Polio vaccine testing<br>D. Transgenic mice | 4. Proportion of transgenic animals that are mice',
        steps: [],
        ans: 'A–2, B–1, C–4, D–3.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> Transgenic animals are used in chemical safety testing. <b>Reason (R):</b> They can be made more sensitive to toxic substances, giving faster results.<br><b>(a)</b> Both true, R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: ['Both true and R explains A: heightened sensitivity to toxins is precisely why such animals speed up toxicity testing.'],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-statement.</b> Select the correct statements about transgenic animals: (i) About 95% of existing transgenic animals are mice. (ii) Rosie produced milk rich in human α-lactalbumin. (iii) A transgenic animal is one produced purely by selective breeding. (iv) The human protein α-1-antitrypsin, used to treat emphysema, has been made in transgenic sheep.<br><b>(a)</b> (i), (ii) and (iv)<br><b>(b)</b> (i), (ii) and (iii)<br><b>(c)</b> all four<br><b>(d)</b> (ii) and (iii) only',
        steps: [
          '(i), (ii) and (iv) are correct. (iii) is the trap: selective breeding does <b>not</b> make an animal transgenic; a <b>foreign gene</b> must be deliberately introduced and expressed.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a transgenic animal and name the most common transgenic animal.',
            a: 'An animal whose DNA has been manipulated to possess and express a foreign gene; most common = mice (~95%).',
          },
          {
            q: '[CUET] True or false: (i) Rosie was the first transgenic cow. (ii) About 50% of transgenic animals are mice.',
            a: '(i) True; (ii) False: about 95%.',
          },
          {
            q: '[NEET] Name the human protein in Rosie’s milk and state why it was significant.',
            a: 'Human α-lactalbumin (~2.4 g L<sup>−1</sup>); it made the milk nutritionally more balanced for human babies.',
          },
          {
            q: '[NEET] Give one example of a biological product made by a transgenic animal and the disease it treats.',
            a: 'α-1-antitrypsin, made in transgenic sheep, for emphysema (also acceptable: Rosie’s α-lactalbumin milk).',
          },
          {
            q: '[NEET high-difficulty] Explain how transgenic animals contribute to both disease research and vaccine safety, with one example each.',
            a: 'Disease research: transgenic mouse models of cancer/Alzheimer’s allow testing of new treatments; vaccine safety: transgenic mice are being used to test the polio vaccine.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Approximately what percentage of all existing transgenic animals are mice?',
        opts: [
          { label: '50%', nudge: '<b>(a)</b>, <b>(b)</b> are common under-estimates.' },
          { label: '75%', nudge: '<b>(a)</b>, <b>(b)</b> are common under-estimates.' },
          { label: '95%', nudge: null },
          { label: '100%', nudge: '<b>(d)</b> ignores transgenic sheep, cows, fish, etc.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. About 95% of transgenic animals are mice.',
      },
      {
        t: 'mcq',
        q: 'Rosie, the first transgenic cow, was significant because her milk contained:',
        opts: [
          { label: 'human insulin', nudge: '<b>(a)</b> insulin is made in <i>E. coli</i>.' },
          { label: 'human α-lactalbumin', nudge: null },
          { label: 'α-1-antitrypsin', nudge: '<b>(c)</b> AAT is from transgenic sheep.' },
          { label: 'cry protein', nudge: '<b>(d)</b> cry protein is from Bt plants.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Rosie’s milk contained human α-lactalbumin, more balanced for human babies.',
      },
      {
        t: 'mcq',
        q: 'Transgenic animals used in chemical safety testing are made:',
        opts: [
          { label: 'resistant to all chemicals', nudge: '<b>(a)</b> is the opposite of the goal.' },
          { label: 'more sensitive to toxic substances', nudge: null },
          { label: 'unable to reproduce', nudge: '<b>(c)</b>, <b>(d)</b> are unrelated to toxicity testing.' },
          { label: 'immune to infection', nudge: '<b>(c)</b>, <b>(d)</b> are unrelated to toxicity testing.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Increased sensitivity to toxins gives faster toxicity results.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is not a recognised use of transgenic animals?',
        opts: [
          { label: 'Study of normal physiology and development', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine uses.' },
          { label: 'Production of biological products', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine uses.' },
          { label: 'Vaccine and chemical safety testing', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all genuine uses.' },
          { label: 'Manufacture of Bt toxin in their tissues', nudge: null },
        ],
        correct: 3,
        solution: 'Correct: <b>(d)</b>. Bt toxin is produced by transgenic <b>plants</b>, not animals. <b>(d)</b> confuses the agriculture topic with transgenic animals.',
      },
      {
        t: 'mcq',
        q: 'Which transgenic animal produced milk containing a human protein more suitable for babies?',
        opts: [
          { label: 'Tracy the sheep', nudge: '<b>(a)</b> Tracy is linked to α-1-antitrypsin, not infant-milk protein.' },
          { label: 'Rosie the cow', nudge: null },
          { label: 'Dolly the sheep', nudge: '<b>(c)</b> Dolly was a clone, not a transgenic milk producer.' },
          { label: 'Herman the bull', nudge: '<b>(d)</b> Herman was a transgenic bull (born 1990), and a bull gives no milk; Rosie is the cow named for the human α-lactalbumin milk.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Rosie (1997) produced milk with human α-lactalbumin.',
      },
      {
        t: 'mcq',
        q: 'Transgenic mice are being used to test the safety of which vaccine, and could replace monkeys?',
        opts: [
          { label: 'Hepatitis-B vaccine', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are real vaccines but not the example cited for transgenic-mouse safety testing.' },
          { label: 'Polio vaccine', nudge: null },
          { label: 'Rabies vaccine', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are real vaccines but not the example cited for transgenic-mouse safety testing.' },
          { label: 'BCG vaccine', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are real vaccines but not the example cited for transgenic-mouse safety testing.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Transgenic mice are being used to test the polio vaccine.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Selective breeding = transgenic.”</b> No: a transgenic animal must carry a <b>deliberately introduced foreign gene</b> that it expresses.',
          '<b>Pitfall 2: Mixing up Rosie and AAT.</b> <b>Rosie (cow) → α-lactalbumin (milk)</b>; <b>sheep → α-1-antitrypsin (emphysema).</b> Keep the animal-product pairs straight.',
          '<b>Pitfall 3: Wrong percentage.</b> It is <b>95%</b> mice, not 50% or 100%.',
          '<b>Pitfall 4: Crossing topics.</b> Bt toxin and humulin are <b>not</b> transgenic-animal products (they are plant and bacterial). Don’t list them here.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Memorise the five uses with the chain <b>“Physiology – Disease – Products – Vaccine – Toxicity”</b> (P-D-P-V-T), and pin the two named animals: <b>Rosie–cow–α-lactalbumin</b> and <b>sheep–α-1-antitrypsin–emphysema.</b>',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Transgenic animal</b> = DNA manipulated to <b>possess + express a foreign gene</b>; examples: rats, rabbits, pigs, sheep, cows, fish; <b>~95% are mice.</b>',
            note: '',
          },
          {
            f: '<b>Five uses (P-D-P-V-T)</b>',
            note: '<b>P</b>hysiology/development; <b>D</b>isease models (cancer, cystic fibrosis, Alzheimer’s); biological <b>P</b>roducts; <b>V</b>accine safety; <b>T</b>oxicity/chemical safety.',
          },
          {
            f: '<b>Named examples</b>',
            note: '<b>Rosie</b> (first transgenic cow, <b>1997</b>) → milk with human <b>α-lactalbumin (~2.4 g L<sup>−1</sup>)</b>; <b>sheep → α-1-antitrypsin</b> (treats <b>emphysema</b>).',
          },
        ],
        aids: ['<b>Mnemonics:</b> “95% mice”; “Rosie cow → α-lactalbumin; sheep → α-1-antitrypsin”; “P-D-P-V-T.”'],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 568–573 ─────────────────────────
  {
    n: '06',
    title: 'Ethical Issues, Biopiracy & GEAC',
    kalam: 'Biotechnology is powerful, but power without rules is dangerous, and that is where ethics enters.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Almost always good for one NEET/CUET question (the book’s estimate from past papers, not official figures) and a CBSE short answer. The biopiracy definition, the Basmati/Neem/Turmeric examples, the Indian Patents Bill, and the full form and role of <b>GEAC</b> are the staples. CBSE Boards may ask “what is biopiracy?” or “why is regulation of GMOs needed?”. JEE does not test Biology.',
      },
      {
        t: 'p',
        html: 'Biotechnology is powerful, but power without rules is dangerous, and that is where <b>ethics</b> enters. <b>Ethics</b> are the rules of conduct by which a community regulates its behaviour and decides whether an activity is acceptable or lawful. When we start <b>manipulating living organisms</b>, moving genes between species, releasing genetically modified organisms (GMOs) into fields, two big worries arise. First, a GMO let loose in an ecosystem can have <b>unpredictable consequences</b> on other organisms and the environment. Second, granting <b>patents</b> (private ownership) over living things and traditional knowledge raises hard questions of fairness.',
      },
      {
        t: 'p',
        html: 'To handle the first worry, India set up a watchdog: the <b>GEAC (Genetic Engineering Approval Committee)</b>, which decides whether GM research is valid and whether it is safe to introduce a GM organism for public use.',
      },
      {
        t: 'p',
        html: 'The second worry has a sharp name: <b>biopiracy.</b> This is when companies or organisations (often from wealthy nations) take a country’s <b>bioresources</b> or its people’s <b>traditional knowledge</b>, and patent or commercialise them, <b>without permission and without sharing the benefits.</b> India has been a repeated target: foreign attempts have been made to patent <b>Basmati rice, Neem, and Turmeric</b>, all of which Indians have used for centuries.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine your grandmother’s secret recipe, used in your family for generations, suddenly being patented by a stranger who then charges you to cook it. That sense of theft of something that was always communal is exactly what biopiracy feels like, and why nations now demand authorisation and fair compensation.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Note the difference between related terms. A <b>biopatent</b> is the right granted over a biological invention; <b>biopiracy</b> is the misuse: taking bioresources/knowledge <b>without authorisation or payment</b>; <b>bioethics</b> is the broader study of right and wrong in the biological sciences. Keep these three separate. Also remember GEAC’s remit is <b>GM safety and approval</b>, not patents: patents are handled through the legal/Patents-Bill route.',
      },

      { t: 'part', title: 'Key terms, tools and constructs' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'What it is'],
        rows: [
          ['Ethics', 'Rules of conduct by which a community regulates behaviour and judges whether an activity is lawful/acceptable.'],
          ['GEAC', '<b>Genetic Engineering Approval Committee</b>, the Indian body that decides the <b>validity of GM research</b> and the <b>safety of introducing GM organisms</b> for public services.'],
          ['Biopatent', 'A <b>patent granted for biological entities</b> and products derived from them (microbial strains, cell lines, GM plants/animals, DNA sequences, proteins, biotech processes).'],
          ['Biopiracy', 'Use of <b>bioresources</b> by companies/organisations <b>without proper authorisation</b> from the countries/people concerned and <b>without compensatory payment</b>; appropriation of traditional knowledge.'],
          ['Bioethics', 'The branch of ethics dealing with the biological sciences and their impact on society.'],
          ['GMO concern', 'GM organisms may have <b>unpredictable effects</b> when introduced into ecosystems.'],
          ['Indian Patents Bill', 'India’s patent law; the step taken against biopiracy was its second amendment, with provisions on patent terms, emergency provisions and research and development initiatives.'],
        ],
      },
      { t: 'p', html: '<b>Three look-alike terms, lock the distinction:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Core idea'],
        rows: [
          ['Biopatent', 'The legal <b>right granted</b> over a biological invention'],
          ['Biopiracy', '<b>Unauthorised, uncompensated</b> use of bioresources/knowledge'],
          ['Bioethics', 'The <b>study</b> of moral questions in biology'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: '<b>A. Why biotechnology needs ethical regulation</b>' },
      {
        t: 'p',
        html: 'The manipulation of living organisms by humans needs regulation on <b>ethical and moral grounds.</b> Two concrete reasons stand out. <b>(i)</b> The <b>genetic modification of organisms can have unpredictable results</b> when those organisms are introduced into the <b>ecosystem</b>: they may affect other species or upset ecological balance in ways we cannot fully foresee. <b>(ii)</b> Using modified living organisms for public services has created <b>problems regarding the patents</b> granted for them, i.e., who may own and profit from a living thing. To address the first, the Indian government constituted the <b>GEAC.</b>',
      },
      { t: 'p', html: '<b>B. The role of GEAC</b>' },
      {
        t: 'p',
        html: 'The <b>Genetic Engineering Approval Committee (GEAC)</b> makes decisions regarding the <b>validity of GM research</b> and the <b>safety of introducing GM organisms</b> for public services, for example, approval to conduct large-scale field trials and the release of transgenic crops into the environment. It is the gatekeeper that ensures a GMO is assessed for safety <b>before</b> it reaches the public.',
      },
      { t: 'p', html: '<b>C. Biopatents and biopiracy</b>' },
      {
        t: 'p',
        html: 'A <b>biopatent</b> is a patent (a right granted by the government) for <b>biological entities and the products derived from them</b>, which can cover things like microbial strains, cell lines, genetically modified plants and animals, DNA sequences, the proteins they encode, and biotechnological processes.',
      },
      {
        t: 'p',
        html: '<b>Biopiracy</b> is the term for the <b>use of bioresources by multinational companies and other organisations without proper authorisation from the countries and people concerned, and without compensatory payment.</b> In essence, it is the appropriation of a community’s biological resources or traditional knowledge for commercial gain without consent or benefit-sharing.',
      },
      { t: 'p', html: '<b>D. Indian examples and India’s response</b>' },
      {
        t: 'p',
        html: 'India, rich in biodiversity and traditional knowledge, has been a frequent target:<br>• <b>Neem</b> (<i>Azadirachta indica</i>): its fungicidal/medicinal properties, used in India for ages, faced patenting.<br>• <b>Turmeric</b>: its wound-healing properties (long known in India) were patented by a US university.<br>• <b>Basmati rice</b>: a foreign company patented a rice variety despite India’s long-standing varieties.<br>(The turmeric and neem patents were later revoked after challenges from India; the Basmati patent was contested and its main claims were withdrawn.)',
      },
      {
        t: 'p',
        html: 'In response, the <b>Indian Parliament took steps</b> (notably the second amendment of the <b>Indian Patents Bill</b>, now the Patents (Amendment) Act 2002) with provisions on patent terms, emergency provisions and research and development initiatives, to deal with such issues and protect Indian bioresources and traditional knowledge.',
      },
      { t: 'fig', id: 'b12-10-fig-10.7' },
      { t: 'p', html: '<b>E. The three faces of biopiracy, and the wider stakes</b>' },
      {
        t: 'p',
        html: 'Biopiracy is not a single act. The book describes three fronts (the book’s own framing, not NCERT’s terms): <b>Intellectual piracy</b> makes a false claim to novelty and invention over knowledge that communities have in fact held since ancient times: patenting turmeric’s healing use, for instance, treats centuries-old common knowledge as a brand-new discovery. <b>Resource piracy</b> diverts scarce biological resources to the <b>monopoly control of corporations</b>, depriving the indigenous communities and practitioners who originally conserved and used them. <b>Economic piracy</b> then creates <b>market monopolies</b> that shut the original innovators out of their rightful share in local, national and international markets.',
      },
      {
        t: 'p',
        html: 'Seen this way, the ethical problem is really about <b>consent, ownership and fair benefit-sharing.</b> When a corporation patents a living resource or traditional knowledge without permission, it privatises something that was communal and uncompensated, which is why developing nations rich in biodiversity, like India, pushed back legislatively. The same ethical lens applies to GMOs: because releasing a genetically modified organism can have <b>unforeseeable ecological consequences</b>, society insists that a body like GEAC weigh the risks <b>before</b> approval. In both cases the underlying principle is identical: biotechnology’s power must be matched by rules that protect both people and the environment.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'What is biopiracy? Give two examples of Indian bioresources that have been targeted, and state the step India took in response.',
        steps: [
          '<b>Model answer.</b> <b>Biopiracy</b> is the <b>use of bioresources (or traditional knowledge) by companies/organisations without proper authorisation from the countries and people concerned and without compensatory payment.</b> Examples of targeted Indian resources: <b>Neem</b> (fungicidal/medicinal properties) and <b>Turmeric</b> (wound-healing), also Basmati rice. In response, the <b>Indian Parliament</b> introduced the <b>Indian Patents Bill</b> (second amendment), with provisions on patent terms, emergency provisions and research and development initiatives.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the column.</b><br>Column I | Column II<br>A. GEAC | 1. Unauthorised, uncompensated use of bioresources<br>B. Biopatent | 2. Approves validity/safety of GM organisms<br>C. Biopiracy | 3. Study of moral issues in biology<br>D. Bioethics | 4. Right granted over a biological invention',
        steps: [],
        ans: 'A–2, B–4, C–1, D–3.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> The release of GM crops requires regulatory approval. <b>Reason (R):</b> Genetically modified organisms can have unpredictable effects when introduced into ecosystems.<br><b>(a)</b> Both true, R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Both are true and R explains A: because GMOs may behave unpredictably in the environment, a body like GEAC must assess their safety before release.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-statement.</b> Choose the correct statements: (i) GEAC stands for Genetic Engineering Approval Committee. (ii) Biopiracy is the patent right legally granted over a biological invention. (iii) Turmeric and Neem are examples of Indian resources targeted by biopiracy. (iv) GMOs may have unpredictable effects on ecosystems.<br><b>(a)</b> (i), (iii) and (iv)<br><b>(b)</b> (i), (ii) and (iii)<br><b>(c)</b> all four<br><b>(d)</b> (ii) and (iv) only',
        steps: [
          '(i), (iii) and (iv) are correct. (ii) is the trap: it defines a <b>biopatent</b>, not biopiracy; biopiracy is the unauthorised, uncompensated use of bioresources.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Expand GEAC and state its main function.',
            a: 'Genetic Engineering Approval Committee; it decides the validity of GM research and the safety of introducing GM organisms for public services.',
          },
          {
            q: '[CUET] True or false: (i) Biopiracy involves proper authorisation and fair payment. (ii) Turmeric’s wound-healing property was patented abroad.',
            a: '(i) False: it is without authorisation/payment; (ii) True.',
          },
          { q: '[NEET] Name three Indian bioresources targeted by patenting attempts.', a: 'Basmati rice, Neem, Turmeric.' },
          {
            q: '[NEET] State two reasons why genetic modification of organisms raises ethical concerns.',
            a: 'GMOs may have unpredictable effects on ecosystems; patents over living organisms raise ownership/fairness problems.',
          },
          {
            q: '[NEET high-difficulty] Distinguish between biopatent, biopiracy and bioethics with one line each.',
            a: 'Biopatent = the legal right granted over a biological invention; Biopiracy = unauthorised, uncompensated use of bioresources/knowledge; Bioethics = the study of moral issues in the biological sciences.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'GEAC stands for:',
        opts: [
          { label: 'Genetic Engineering Approval Committee', nudge: null },
          { label: 'Gene Expression Analysis Committee', nudge: '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are invented look-alikes designed to test the exact expansion.' },
          { label: 'Genetic Estimation and Approval Council', nudge: '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are invented look-alikes designed to test the exact expansion.' },
          { label: 'Genome Engineering Advisory Committee', nudge: '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are invented look-alikes designed to test the exact expansion.' },
        ],
        correct: 0,
        solution: 'Correct: <b>(a)</b>. GEAC = Genetic Engineering Approval Committee, India’s GMO regulator.',
      },
      {
        t: 'mcq',
        q: 'The use of bioresources by multinational companies without authorisation and compensation is called:',
        opts: [
          { label: 'bioethics', nudge: '<b>(a)</b> is the study of moral issues.' },
          { label: 'biopiracy', nudge: null },
          { label: 'biopatent', nudge: '<b>(c)</b> is the legal right granted.' },
          { label: 'biowar', nudge: '<b>(d)</b> is unrelated (warfare with biological agents).' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. This is the definition of biopiracy.',
      },
      {
        t: 'mcq',
        q: 'Which Indian resource’s wound-healing properties were patented by a US institution?',
        opts: [
          { label: 'Basmati rice', nudge: '<b>(a)</b> Basmati was a rice patent.' },
          { label: 'Neem', nudge: '<b>(b)</b> Neem’s case concerned fungicidal/medicinal properties.' },
          { label: 'Turmeric', nudge: null },
          { label: 'Tulsi', nudge: '<b>(d)</b> is a distractor.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Turmeric’s wound-healing property was patented abroad.',
      },
      {
        t: 'mcq',
        q: 'The main reason regulation is needed before releasing GM organisms is that:',
        opts: [
          { label: 'they are always harmful', nudge: '<b>(a)</b> overstates: not “always” harmful.' },
          { label: 'they can have unpredictable effects on ecosystems', nudge: null },
          { label: 'they cannot reproduce', nudge: '<b>(c)</b>, <b>(d)</b> are irrelevant to the ethical/safety rationale.' },
          { label: 'they are too expensive', nudge: '<b>(c)</b>, <b>(d)</b> are irrelevant to the ethical/safety rationale.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Their environmental impact is unpredictable, so safety must be assessed first.',
      },
      {
        t: 'mcq',
        q: 'Patenting turmeric’s long-known wound-healing use as a “new invention” is which front, in the book’s three-front description of biopiracy?',
        opts: [
          { label: 'intellectual piracy', nudge: null },
          { label: 'resource piracy', nudge: '<b>(b)</b> concerns monopoly control of the physical resource.' },
          { label: 'economic piracy', nudge: '<b>(c)</b> concerns market exclusion.' },
          { label: 'none of these', nudge: '<b>(d)</b> is incorrect since it clearly fits (a).' },
        ],
        correct: 0,
        solution: 'Correct: <b>(a)</b>. Claiming novelty over ancient, communal knowledge is intellectual piracy.',
      },
      {
        t: 'mcq',
        q: 'Which of the following does the chapter list among the subjects of biopatents?',
        opts: [
          {
            label: 'a genetically modified strain of plant',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are each listed by the chapter as subjects of biopatents, so the inclusive option is correct.',
          },
          {
            label: 'a DNA sequence and the protein it encodes',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are each listed by the chapter as subjects of biopatents, so the inclusive option is correct.',
          },
          {
            label: 'a biotechnological production process',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are each listed by the chapter as subjects of biopatents, so the inclusive option is correct.',
          },
          { label: 'all of these', nudge: null },
        ],
        correct: 3,
        solution: 'Correct: <b>(d)</b>. The chapter lists GM strains, DNA sequences, encoded proteins and biotechnological processes among the subjects of biopatents (whether a claim is granted depends on national law).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Confusing the three “bio-” terms.</b> <b>Biopatent = right granted</b>, <b>biopiracy = unauthorised use</b>, <b>bioethics = the study.</b> Examiners swap these in distractors constantly (the book’s estimate from past papers, not official figures).',
          '<b>Pitfall 2: Wrong GEAC expansion.</b> It is <b>Genetic Engineering Approval Committee</b> as NCERT writes it (the body’s official name today is Genetic Engineering Appraisal Committee): learn the NCERT form for the exam.',
          '<b>Pitfall 3: Mixing up the Indian examples.</b> <b>Turmeric → wound-healing</b>, <b>Neem → fungicidal/medicinal</b>, <b>Basmati → rice variety.</b>',
          '<b>Pitfall 4: “Biopiracy is legal/fair.”</b> By definition it is the <b>opposite</b>: it lacks authorisation and compensation.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> If a definition mentions “without authorisation/compensation” → <b>biopiracy</b>; if it says “right granted” → <b>biopatent</b>; if it mentions “GM safety/approval” → <b>GEAC</b>. Match the keyword to the term and these questions become free marks.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Why ethics</b>', note: 'GMOs may have <b>unpredictable ecosystem effects</b>; patents over living things raise <b>ownership/fairness</b> issues.' },
          {
            f: '<b>GEAC = Genetic Engineering Approval Committee</b> → decides <b>validity of GM research + safety of releasing GM organisms.</b>',
            note: '',
          },
          {
            f: '<b>Biopatent</b> = right granted over a biological invention (strains, cell lines, GM organisms, DNA/proteins, processes).',
            note: '',
          },
          { f: '<b>Biopiracy</b> = use of bioresources/knowledge <b>without authorisation or compensatory payment.</b>', note: '' },
          {
            f: '<b>Indian targets</b>',
            note: '<b>Basmati</b> (rice), <b>Neem</b> (fungicidal/medicinal), <b>Turmeric</b> (wound-healing). <b>Response: Indian Patents Bill (second amendment).</b>',
          },
        ],
        aids: ['<b>Mnemonics:</b> “Patent = right, Piracy = theft, Ethics = study”; “GEAC = GM gatekeeper”; “Basmati-Neem-Turmeric = BNT targets.”'],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 574–577 ─────────────────────────
  {
    n: 'A',
    title: 'ELISA: The Full Protocol, Two Formats, and the Antigen-Trapping Step',
    extra: true,
    kalam: 'ELISA uses the lock-and-key specificity of antigen–antibody binding to detect a target molecule.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These Additional topics develop five examinable layers that go beyond the chapter text: the complete ELISA protocol including both assay formats and the antigen-trapping step, the three methods by which transgenic animals are actually produced, the three-step thermal cycling of PCR with specific temperatures and the reason a heat-stable polymerase is needed (the cycle is also met in Chapter 9), the comparison of gene-therapy vectors and the in vivo route set against the ex vivo procedure Topic 03 describes for ADA deficiency, and the legal mechanisms behind biopiracy with specific patent references and international conventions.',
      },
      {
        t: 'p',
        html: 'The chapter names ELISA as a molecular-diagnosis technique and states that it is based on the principle of antigen–antibody interaction. NEET and CUET go further: they ask which reagent sits in which well, why enzyme-linked antibodies produce colour, and the difference between direct and indirect formats. These are distinct, testable patterns.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The core principle.</b> ELISA uses the lock-and-key specificity of antigen–antibody binding to detect a target molecule. An antigen (or antibody) of known identity is immobilised, and the presence of the complementary antibody (or antigen) in a patient sample is revealed by an enzyme-linked secondary reagent followed by a colourless substrate that the enzyme converts to a coloured product. The colour intensity is proportional to the amount of target bound, giving both a qualitative (“present/absent”) and semi-quantitative result.',
      },
      {
        t: 'proc',
        title: 'The standard four-step protocol',
        steps: [
          '<b>Coating/adsorption.</b> The antigen (or antibody) of known identity is adsorbed onto the surface of a polystyrene microtitre well. Polystyrene is hydrophobic and binds proteins non-covalently. The coating antigen is the capture molecule.',
          '<b>Blocking.</b> Unoccupied sites on the well surface are blocked with a non-specific protein (e.g., bovine serum albumin) to prevent the detection reagents from binding directly to the plastic.',
          '<b>Primary binding.</b> The patient sample is added. If it contains the complementary antibody (or antigen), it binds to the immobilised antigen (or antibody) on the well surface.',
          '<b>Detection.</b> An enzyme-linked antibody (or antigen) that recognises the primary bound molecule is added. A substrate solution is then added; the enzyme converts the substrate to a coloured product. The reaction is stopped (with acid for HRP and TMB), and the absorbance is read spectrophotometrically. A coloured result indicates the target was present in the sample.',
        ],
      },
      {
        t: 'p',
        html: 'This four-step protocol is the indirect layout: a known antigen is coated and the sample’s antibody is what binds. In direct ELISA the sample’s antigen is itself adsorbed to the well in step 1, and the enzyme-linked antibody of step 4 is added straight after blocking. The antigen-trapping (sandwich) format below differs again: the well is coated with a capture antibody.',
      },
      { t: 'p', html: '<b>Two ELISA formats, keep them separate:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Direct ELISA', 'Indirect ELISA'],
        rows: [
          ['Target detected', 'Usually antigen', 'Usually antibody'],
          ['Detection reagent', 'Enzyme-linked primary antibody', 'Enzyme-linked secondary antibody'],
          ['Number of antibodies', 'One', 'Two (primary + secondary)'],
          ['Sensitivity', 'Lower', 'Higher (signal amplification via secondary)'],
          ['Use', 'Detecting pathogen antigens', 'Detecting host antibodies (e.g., HIV screening)'],
        ],
      },
      {
        t: 'p',
        html: '<b>In direct ELISA,</b> the antigen (from the sample) is adsorbed to the well, and an enzyme-linked primary antibody specific to that antigen is added directly: one antibody step, no secondary antibody.',
      },
      {
        t: 'p',
        html: '<b>In indirect ELISA,</b> the well is coated with the antigen, patient sample (containing primary antibodies) is added, and a separate enzyme-linked secondary antibody that recognises the primary antibody is added: two antibody steps. The secondary antibody provides amplification because one primary antibody can bind multiple enzyme-linked secondary antibodies.',
      },
      {
        t: 'p',
        html: '<b>Why the enzyme produces colour.</b> Common enzymes used are alkaline phosphatase (AP) and horseradish peroxidase (HRP). AP converts the substrate p-nitrophenyl phosphate (colourless) to p-nitrophenol (yellow). HRP converts tetramethylbenzidine (TMB, colourless) to a blue product that turns yellow on stopping. The enzyme is covalently attached to the detection antibody (the “enzyme-linked” of the name), and the antigen or antibody stuck to the plastic is the “immunosorbent.”',
      },
      {
        t: 'p',
        html: '<b>Antigen-trapping ELISA (double-antibody sandwich ELISA).</b> Used when the target is an antigen present in a complex sample (e.g., HBsAg in hepatitis B). The well is coated with a capture antibody (not antigen), the sample is added and the antigen is trapped between the immobilised antibody and a second enzyme-linked antibody. Two antibodies and one antigen are involved, hence “sandwich.” This format does not require the antigen to be purified beforehand.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the ELISA Format.</b> An ELISA test to detect antibodies against HIV in a patient’s blood serum uses two antibody steps: the patient’s primary antibodies bind to antigen-coated wells, and a secondary antibody-enzyme conjugate then binds to the patient’s antibodies. Name the format and identify the enzyme-linked reagent.',
        steps: ['The two-antibody-step format is indirect ELISA. The enzyme-linked reagent is the secondary antibody (enzyme-linked anti-human immunoglobulin).'],
        ans: 'Indirect ELISA; enzyme-linked secondary antibody.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Matching Reagents to Wells.</b> In an indirect ELISA to detect antibodies against a bacterial antigen, column I lists steps and column II lists what is present in the well at each step. Match them.<br>Column I: (P) After coating step, (Q) After adding patient sample, (R) After adding detection reagent, (S) After adding substrate<br>Column II: (i) Coloured product formed, (ii) Immobilised antigen with the patient’s antibodies bound to it, (iii) Bacterial antigen immobilised on the well, (iv) Immobilised antigen + patient’s antibody + enzyme-linked secondary antibody',
        steps: [
          'After coating: antigen immobilised on the well (iii). After patient sample: if antibodies are present they bind, giving an antigen–antibody complex (ii). After detection reagent: the enzyme-linked secondary antibody has bound to the patient’s antibody (iv). After substrate: the enzyme converts the colourless substrate into a coloured product (i).',
        ],
        ans: 'P–iii, Q–ii, R–iv, S–i.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Why Indirect ELISA Is More Sensitive Than Direct.</b> A student asks: “In indirect ELISA, an extra antibody step is required compared to direct ELISA. Why then is indirect ELISA described as more sensitive?” Explain.',
        steps: [
          'In direct ELISA, one primary antibody (with enzyme attached) binds each target molecule. In indirect ELISA, one primary antibody can bind multiple enzyme-linked secondary antibodies. Each primary antibody therefore generates a stronger colour signal from multiple enzyme molecules, making the assay more sensitive.',
        ],
        ans: 'The secondary antibody provides signal amplification: each primary antibody is detected by multiple enzyme-conjugated secondary antibodies, producing more coloured product per target molecule.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] State whether each is true or false: (i) In direct ELISA the antigen to be detected is adsorbed onto the well. (ii) Indirect ELISA uses two antibody steps.',
            a: '(i) True: in direct ELISA the sample’s antigen is adsorbed to the well and detected by an enzyme-linked primary antibody; (ii) True: primary antibody from patient + enzyme-linked secondary antibody.',
          },
          {
            q: '[NEET] Name the two enzymes commonly used in ELISA and one substrate for each.',
            a: 'Alkaline phosphatase (AP): substrate p-nitrophenyl phosphate (product p-nitrophenol, yellow); Horseradish peroxidase (HRP): substrate tetramethylbenzidine (TMB, blue product).',
          },
          {
            q: '[CUET] In a double-antibody sandwich ELISA to detect a virus antigen, what are the two antibodies called and which one is immobilised on the well?',
            a: 'Capture antibody (immobilised on well) and detection antibody (enzyme-linked); the capture antibody is immobilised on the well surface.',
          },
          {
            q: '[NEET] Why does blocking with BSA appear in the standard ELISA protocol?',
            a: 'Blocking fills unoccupied plastic sites with non-specific protein so the detection reagents do not bind directly to the well surface: this prevents false-positive colour from non-specific binding.',
          },
          {
            q: '[NEET] A patient tests positive in an indirect ELISA for hepatitis C antibodies. Name the three molecular species in the well at the point just before the substrate is added.',
            a: 'The immobilised (coated) hepatitis C antigen, the patient’s primary antibody bound to it, and the enzyme-linked secondary antibody bound to that primary antibody.',
          },
          {
            q: '[CBSE Board] Explain why colourless substrate is used in ELISA rather than a coloured one.',
            a: 'A substrate that is already coloured would give a high background and hide the small colour change produced by the enzyme, so it would be hard to tell whether the enzyme (indicating the target) was actually in the well. A colourless substrate gives colour only where the enzyme is active, reporting specifically that the target antigen–antibody binding has occurred.',
          },
        ],
      },
    ],
  },
];
