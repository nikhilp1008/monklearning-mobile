import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 7 (Human Health and Disease), Topic 04 and Additional topics A to D, word for word from the
 * Class 12 Biology Master Reference (book pp. 372 to 389): Topic 04 "Drug and Alcohol Abuse" (p. 372 to p. 378;
 * Figures 7.6 and 7.7 are captioned on p. 374 and drawn on p. 375), then the shared introduction to the Additional
 * Topics (p. 379 lines 1 to 8, which opens Additional topic A's Introduction), A "Hypersensitivity Reactions: The Four
 * Types" (p. 379 to p. 382 top), B "Autoimmune Diseases: Mechanism and Key Examples" (p. 382 to p. 384), C
 * "Immunodeficiency Disorders: Beyond AIDS" (p. 385 to p. 387 top) and D "Cancer: Staging, Tumour Markers, and
 * Oncogenic Viruses" (p. 387 to p. 389). Addendum E begins at the top of p. 390 (the next writer).
 *
 * Topic indexes: Topic 04 = 3, A = 4, B = 5, C = 6, D = 7. Em dashes of the book are written as a colon, commas,
 * brackets or a full stop (every one is listed in the report). The book's "Example A.1 - [CBSE Board] Title" becomes the
 * tag (the bracket) and a bold lead on the question. Where the book prints no answer line of its own, the example's
 * ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 372–378 ─────────────────────────
  {
    n: '04',
    title: 'Drug and Alcohol Abuse',
    kalam: 'Every drug discussed here is, at heart, a chemical that fools the nervous system into producing a feeling the body did not earn.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A small but reliable scorer. NEET and CUET ask 1–2 questions almost every year (the book’s estimate from past papers, not official figures): the drug-category-to-source-plant matching (opioid/cannabinoid/cocaine) and the nicotine/adrenal effect are the favourites. CBSE Boards lean on short-answer: addiction vs dependence, adolescent warning signs, and prevention measures. Low conceptual load, high recall payoff.',
      },
      {
        t: 'p',
        html: 'Every drug discussed here is, at heart, a chemical that fools the nervous system into producing a feeling the body did not earn. That is the whole story of substance abuse: <b>a borrowed good feeling paid back with real damage.</b>',
      },
      {
        t: 'p',
        html: 'Start with the setting. <b>Adolescence</b>, roughly <b>12 to 18 years</b>, is a period of rapid physical, mental and behavioural change, and it is precisely this turbulence that makes it a vulnerable window for experimenting with drugs and alcohol. What usually begins out of <b>curiosity, peer pressure, or the thrill of adventure</b> can quietly slide into a trap. The slide has two technical stages worth separating carefully, because exams test the difference.',
      },
      {
        t: 'p',
        html: 'First, <b>addiction</b>: a psychological attachment. The user chases the <b>euphoria and temporary sense of well-being</b> a drug produces and feels they cannot do without that feeling. Second, <b>dependence</b>: a physiological tightening of the noose. Now the body itself has adapted to the drug’s constant presence, so stopping abruptly triggers a <b>withdrawal syndrome</b>: anxiety, shakiness, nausea, sweating. A third twist completes the cycle, <b>tolerance</b>: the body’s receptors stop responding to the old dose, so the user needs ever-larger amounts to feel the same effect, which accelerates the descent.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a shopkeeper who keeps a customer happy with free samples. At first the customer comes for pleasure (addiction). Soon the shop adjusts its entire stock around that customer, so if he stops coming, the shop is thrown into disarray (dependence). And the customer, bored of the same sample, demands bigger and bigger ones (tolerance). The “shop” is your nervous system rewiring itself around the chemical.',
      },
      {
        t: 'p',
        html: 'A crucial nuance: <b>most of these drugs have legitimate medicinal uses, and abuse is the misuse of that medicine.</b> <b>Morphine</b> is an excellent painkiller for post-surgery patients; <b>barbiturates and benzodiazepines</b> are genuine sedatives and tranquillisers, and <b>amphetamines</b> (stimulants) are also used as medicines, to help patients cope with conditions such as depression and insomnia. The molecule is not evil: the pattern of use is.',
      },
      {
        t: 'p',
        html: '<b>Why are adolescents especially drawn in?</b> The reasons are rarely chemical at first: they are emotional and social. NCERT highlights a cluster: natural <b>curiosity and the need for adventure, excitement and experimentation</b>; the desire to <b>escape from stress, frustration, anxiety or depression</b>, often arising from academic or personal pressure; and <b>peer pressure</b>, the wish to fit in or appear grown-up. Two background factors amplify all of these: <b>unstable or unsupportive family structures</b> and the <b>glamorisation of drugs and alcohol</b> in films, television and advertising, which makes experimentation seem normal. Recognising that the root is psychological and social explains why prevention focuses on counselling and support, not just on warning about the chemicals.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) Addiction ≠ dependence: one is psychological, the other physiological; don’t merge them. (2) Two harms of abuse, <b>smoking-related cancer</b> and <b>HIV/hepatitis-B from shared intravenous needles</b>, are real and NCERT-listed, but they are consequences of abuse, not the mechanism of the drug itself (the cancer and AIDS biology belong to Topic 03). (3) The “high” is short-term; the damage (cirrhosis, cancer, brain and cardiovascular harm, social ruin) is long-term and often irreversible.',
      },

      { t: 'part', title: 'Key definitions and classification' },
      { t: 'p', html: '<b>4.2.1 Commonly abused drugs: the master table</b>' },
      {
        t: 'p',
        html: 'The single highest-yield grid in this topic (the book’s own view, not an official figure). Memorise drug → source plant → effect.',
      },
      {
        t: 'table',
        title: null,
        head: ['Category', 'Examples', 'Source plant', 'Effect on body'],
        rows: [
          [
            '<b>Opioids</b>',
            'Heroin (<b>smack</b>), Morphine',
            '<i>Papaver somniferum</i> (poppy), from the <b>latex</b>',
            '<b>Depressant</b>; bind opioid receptors in the CNS & gut; slow down body functions',
          ],
          [
            '<b>Cannabinoids</b>',
            'Marijuana, Hashish, Charas, Ganja',
            '<i>Cannabis sativa</i>: flower tops, leaves, <b>resin</b>',
            'Bind cannabinoid receptors in the brain; affect the <b>cardiovascular system</b> (heart rate rises)',
          ],
          [
            '<b>Cocaine</b> (coke/crack)',
            'Cocaine',
            '<i>Erythroxylum coca</i>',
            '<b>CNS stimulant</b>; interferes with <b>dopamine</b> transport → euphoria, energy; hallucinations at high dose',
          ],
          [
            '<b>Other hallucinogens</b>',
            '–',
            '<i>Atropa belladonna</i>, <i>Datura</i>',
            'Distort perception of reality',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Two chemistry facts worth knowing: <b>smack/heroin is chemically diacetylmorphine</b> (made by acetylation of morphine), and <b>morphine is extracted from the latex</b> of the poppy (tapped from the unripe capsule), not from the leaf.',
      },
      {
        t: 'p',
        html: '<b>4.2.2 Tobacco & nicotine</b><br>• <b>Nicotine</b> is an <b>alkaloid</b> from <i>Nicotiana tabacum</i>; intake is by smoking, chewing, or snuff.<br>• It <b>stimulates the adrenal gland to release adrenaline and nor-adrenaline</b>, which <b>raise blood pressure and heart rate</b>.<br>• Smoking is linked to <b>lung, throat, oral (especially with chewed tobacco) and urinary-bladder cancer, bronchitis, emphysema, and coronary heart disease</b>.<br>• <b>Benzopyrene</b> (a polycyclic aromatic hydrocarbon in smoke) is a key chemical carcinogen.<br>• Tobacco smoke raises blood <b>carbon monoxide</b>, which binds haemoglobin and lowers oxygen-carrying capacity → <b>oxygen deficiency</b> in tissues.',
      },
      {
        t: 'p',
        html: '<b>4.2.3 Alcohol</b><br>The active constituent of alcoholic drinks is <b>ethanol</b> (about 4–6% in beer, 9–15% in wine, about 40% in whisky). Chronic intake damages the liver, leading to <b>cirrhosis</b>.',
      },
      { t: 'p', html: '<b>4.2.4 Addiction vs Dependence (lock this distinction)</b>' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Nature', 'Definition'],
        rows: [
          ['<b>Addiction</b>', 'Psychological', 'Attachment to the euphoria / sense of well-being a drug gives'],
          [
            '<b>Dependence</b>',
            'Physiological',
            'The body shows a <b>withdrawal syndrome</b> (anxiety, shakiness, nausea, sweating) if the drug is stopped abruptly',
          ],
          ['<b>Tolerance</b>', 'Physiological', 'Receptors respond only to higher doses → dose escalation'],
        ],
      },

      { t: 'part', title: 'Mechanisms, cycles and pathways' },
      { t: 'p', html: '<b>4.3.1 How drugs hijack the nervous system</b>' },
      {
        t: 'p',
        html: 'These are not random poisons: each binds a specific receptor, which is why each produces a characteristic effect:<br>• <b>Opioids</b> bind <b>opioid receptors</b> found principally in the <b>central nervous system and gastrointestinal tract</b>. Occupying these receptors depresses brain activity, dulling pain and slowing the body: useful in medicine, dangerous in excess.<br>• <b>Cannabinoids</b> bind <b>cannabinoid receptors</b> present principally in the <b>brain</b>, and notably perturb the <b>cardiovascular system</b>.<br>• <b>Cocaine</b> interferes with <b>dopamine</b> transport in the brain, allowing the “reward” signal to accumulate, hence the burst of euphoria and energy.<br>• <b>Nicotine</b> acts on a different axis entirely: it drives the <b>adrenal medulla</b> to pour out <b>adrenaline and nor-adrenaline</b>, producing the surge in heart rate and blood pressure.',
      },
      { t: 'p', html: '<b>4.3.2 The addiction → dependence → withdrawal cycle</b>' },
      { t: 'fig', id: 'b12-07-fig-7.6' },
      {
        t: 'p',
        html: 'The biology of the loop: repeated exposure makes receptors <b>less responsive</b>, so the user needs more drug for the same effect (tolerance). The body re-tunes its baseline chemistry to the drug’s presence (dependence), so removing the drug now destabilises normal function: the <b>withdrawal syndrome</b>. Craving plus withdrawal together make quitting hard, which is why <b>de-addiction needs professional and medical help</b>, not willpower alone.',
      },
      { t: 'p', html: '<b>4.3.3 Tobacco’s two-front attack (a clean mechanism worth knowing)</b>' },
      { t: 'fig', id: 'b12-07-fig-7.7' },
      { t: 'p', html: '<b>4.3.4 Where abuse meets the other topics (cross-reference, not re-teaching)</b>' },
      {
        t: 'p',
        html: '• <b>Smoking → cancer:</b> a carcinogen such as benzopyrene initiates the proto-oncogene → oncogene change detailed in the cancer part of Topic 03.<br>• <b>Intravenous drug use → AIDS / hepatitis-B:</b> shared, contaminated needles transmit HIV and hepatitis-B, a transmission route covered under AIDS in Topic 03.',
      },
      { t: 'p', html: '<b>4.3.5 Effects of abuse: beyond the individual</b>' },
      {
        t: 'p',
        html: 'The damage radiates outward in three rings. For the <b>individual</b>, the immediate effects include <b>reckless behaviour, vandalism and violence</b>, alongside a steady physical and mental decline; the long-term toll is organ damage (liver cirrhosis from alcohol, lung and other cancers from tobacco, cardiovascular harm) and, in pregnant women, <b>retardation of foetal growth</b>. For the <b>family</b>, there is emotional distress, financial drain, and the breakdown of relationships as the user withdraws and becomes hostile. For <b>society</b>, the costs appear as lost productivity, crime linked to funding the habit, and the public-health burden of drug-linked infections. A particularly cruel feedback loop affects users who inject drugs: the very act of sharing needles exposes them to <b>HIV and hepatitis-B</b>, converting a behavioural problem into a life-threatening infectious one.',
      },
      { t: 'p', html: '<b>4.3.6 Prevention & control</b>' },
      {
        t: 'p',
        html: 'The strategy targets the adolescent and the trigger, not just the drug: <b>avoid undue peer pressure</b>; teach children to <b>accept failures and disappointments</b> as part of life; <b>seek timely help</b> from parents, teachers and peers; <b>look for early warning signs</b> (academic decline, withdrawal from family, neglected hygiene, aggression); and route affected individuals to <b>qualified psychologists and de-addiction & rehabilitation programmes</b> for professional and medical help.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Distinguish + define.</b> Differentiate between addiction and dependence with respect to drugs.',
        steps: [
          '<b>Answer.</b> <b>Addiction</b> is the psychological attachment to the euphoria and sense of well-being a drug produces: the mind craves the effect. <b>Dependence</b> is the physiological adaptation in which the body, accustomed to the drug, manifests a <b>withdrawal syndrome</b> (anxiety, shakiness, nausea, sweating) if the drug is stopped abruptly. (Mark split: psychological vs physiological + the withdrawal point.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b><br><b>Column I (Drug):</b> A. Morphine; B. Cocaine; C. Charas; D. Belladonna alkaloid.<br><b>Column II (Source plant):</b> 1. <i>Cannabis sativa</i>; 2. <i>Papaver somniferum</i>; 3. <i>Atropa belladonna</i>; 4. <i>Erythroxylum coca</i>.',
        steps: [
          '<b>Answer.</b> Morphine ← poppy → <b>A–2</b>. Cocaine ← coca → <b>B–4</b>. Charas is a cannabinoid ← <i>Cannabis</i> → <b>C–1</b>. Belladonna ← <i>Atropa belladonna</i> → <b>D–3</b>.',
        ],
        ans: 'A–2, B–4, C–1, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> Nicotine consumption raises a smoker’s blood pressure and heart rate. <b>Reason (R):</b> Nicotine stimulates the adrenal gland to secrete adrenaline and nor-adrenaline. <b>(a)</b> A & R true, R explains A <b>(b)</b> A & R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (BP and heart rate rise). R is true (nicotine stimulates the adrenal medulla to release adrenaline/nor-adrenaline). And R <b>explains</b> A: those very catecholamines are what drive cardiac output and vascular tone up.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-step reasoning.</b> A post-surgical patient is given morphine in hospital with no ill effect, yet the same molecule sold on the street as “smack” devastates users. Explain (i) the chemical relationship between morphine and smack, (ii) why the receptor it acts on makes it medically useful, and (iii) why repeated abuse leads to escalating doses.',
        steps: [
          '<b>Answer.</b> (i) <b>Smack (heroin) is diacetylmorphine</b>: morphine chemically modified by acetylation; morphine is an opioid from <i>Papaver somniferum</i>, and heroin is made from it. (ii) Morphine binds <b>opioid receptors in the CNS and gut</b>, depressing pain signalling, exactly the action a surgeon needs for controlled analgesia. (iii) With repeated abuse the opioid receptors <b>desensitise (tolerance)</b>, so the user must take progressively higher doses to obtain the same euphoria; meanwhile the body becomes <b>dependent</b>, so cessation triggers withdrawal, together driving dose escalation. The lesson: identical pharmacology becomes therapeutic or destructive depending on dose, control and intent, not on the molecule.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the source plant and the part used for: (i) morphine, (ii) cannabinoids.',
            a: '(i) <i>Papaver somniferum</i>, latex; (ii) <i>Cannabis sativa</i>, flower tops/leaves/resin.',
          },
          {
            q: '[CUET] Explain the effect of nicotine on the adrenal gland and its consequence on the heart.',
            a: 'Nicotine stimulates the adrenal gland to release <b>adrenaline and nor-adrenaline</b>, raising <b>heart rate and blood pressure</b>.',
          },
          {
            q: '[NEET] List any four warning signs that suggest drug/alcohol abuse in an adolescent.',
            a: 'Drop in academic performance; isolation from family/friends; neglect of personal hygiene; aggressive/rebellious behaviour (also vandalism, absenteeism).',
          },
          {
            q: '[NEET] Why does smoking lead to oxygen deficiency in body tissues even before any lung disease develops?',
            a: 'Smoke contains <b>carbon monoxide</b>, which binds haemoglobin and reduces its oxygen-carrying capacity → tissue oxygen deficiency.',
          },
          {
            q: '[NEET high-difficulty] Cocaine and opioids both act on the brain but produce opposite gross effects. Identify each as a stimulant or depressant and name the neurotransmitter/receptor system each targets.',
            a: '<b>Cocaine = stimulant</b> (interferes with <b>dopamine</b> transport); <b>opioids = depressants</b> (bind <b>opioid receptors</b> in CNS/gut).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Smack is chemically:',
        opts: [
          { label: 'diacetylmorphine', nudge: null },
          { label: 'diethylmorphine', nudge: 'The other three are near-miss decoys built to punish loose memorisation: only the acetyl form is correct.' },
          { label: 'dimethylmorphine', nudge: 'The other three are near-miss decoys built to punish loose memorisation: only the acetyl form is correct.' },
          { label: 'dihydromorphine', nudge: 'The other three are near-miss decoys built to punish loose memorisation: only the acetyl form is correct.' },
        ],
        correct: 0,
        solution: 'Correct: <b>(a)</b>. Smack/heroin = <b>diacetylmorphine</b> (acetylated morphine).',
      },
      {
        t: 'mcq',
        q: 'Cocaine is obtained from:',
        opts: [
          { label: '<i>Cannabis sativa</i>', nudge: '<b>(a)</b> is the cannabinoid source.' },
          { label: '<i>Papaver somniferum</i>', nudge: '<b>(b)</b> is the opioid source.' },
          { label: '<i>Erythroxylum coca</i>', nudge: null },
          { label: '<i>Atropa belladonna</i>', nudge: '<b>(d)</b> is a hallucinogen source.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Cocaine ← coca plant, <i>Erythroxylum coca</i>. Each wrong option is the “right plant for a different drug,” the classic mismatch trap.',
      },
      {
        t: 'mcq',
        q: 'Nicotine raises blood pressure and heart rate because it stimulates the:',
        opts: [
          { label: 'thyroid gland to release thyroxine', nudge: '<b>(a)</b> thyroxine affects metabolism, not the acute BP spike: a tempting endocrine distractor.' },
          { label: 'adrenal gland to release adrenaline and nor-adrenaline', nudge: null },
          { label: 'pancreas to release insulin', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated glands.' },
          { label: 'gonads to release sex hormones', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated glands.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Adrenal catecholamines drive BP/HR up.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> a property of dependence?',
        opts: [
          { label: 'Withdrawal syndrome on stopping the drug', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all genuine features of dependence.' },
          { label: 'Anxiety and nausea when the dose is missed', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all genuine features of dependence.' },
          { label: 'Psychological craving for euphoria with no bodily symptoms', nudge: null },
          { label: 'The body adapting to the drug’s regular presence', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all genuine features of dependence.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. A purely psychological craving with no bodily symptoms describes <b>addiction</b>, not dependence: dependence is defined by physiological withdrawal. The trap rewards students who blur the two terms.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Addiction vs dependence reversed.</b> Addiction = psychological craving; dependence = physiological withdrawal. If an option attaches “withdrawal symptoms” to addiction, it’s wrong.',
          '<b>Wrong source plant.</b> Opioids ← poppy (<i>Papaver</i>); cannabinoids ← <i>Cannabis</i>; cocaine ← <i>Erythroxylum coca</i>. Mixing these is the most common MCQ loss (the book’s estimate from past papers, not official figures).',
          '<b>Smack chemistry.</b> Smack = <b>di-acetyl</b>-morphine, not di-methyl/di-ethyl/di-hydro.',
          '<b>Nicotine target.</b> Nicotine → <b>adrenal</b> gland (not thyroid) → adrenaline/nor-adrenaline → BP & HR up.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Build a one-line mental map: “Poppy → opioid → depressant; Cannabis → cannabinoid → heart; Coca → cocaine → dopamine/stimulant; Tobacco → nicotine → adrenal/BP.” Almost every objective question in this topic is a single hop on that map (the book’s estimate from past papers, not official figures); tag the keyword to its node and the answer falls out without deeper recall.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Adolescence (12–18 yr)</b>',
            note: 'vulnerable window; abuse starts from curiosity/peer pressure → addiction.',
          },
          {
            f: '<b>Addiction</b> = psychological (euphoria craving) · <b>Dependence</b> = physiological (<b>withdrawal</b>: anxiety/shakiness/nausea/sweating) · <b>Tolerance</b> = need higher doses.',
            note: '',
          },
          {
            f: '<b>Drug map</b>',
            note: 'Opioids (heroin/<b>smack</b> = diacetylmorphine, morphine) ← <i>Papaver somniferum</i> latex → <b>depressant</b> (opioid receptors, CNS/gut). Cannabinoids (ganja/charas/hashish) ← <i>Cannabis sativa</i> → <b>cardiovascular</b> (brain receptors). Cocaine ← <i>Erythroxylum coca</i> → <b>stimulant</b> (dopamine). Hallucinogens ← <i>Atropa belladonna</i>, <i>Datura</i>.',
          },
          {
            f: '<b>Tobacco/nicotine</b>',
            note: 'alkaloid → adrenal → adrenaline/nor-adrenaline → ↑BP, ↑HR; smoke → benzopyrene (cancer) + CO (↓O<sub>2</sub>); causes lung/oral cancer, bronchitis, emphysema, CHD.',
          },
          { f: '<b>Alcohol</b>', note: 'ethanol; chronic → <b>cirrhosis</b> of liver.' },
          {
            f: '<b>Medicinal uses</b>',
            note: 'morphine (post-surgery painkiller); barbiturates/benzodiazepines (sedatives for depression/insomnia); abused when misused.',
          },
          {
            f: '<b>Prevention/de-addiction</b>',
            note: 'avoid peer pressure; face setbacks; seek parents/peers; professional & medical help; watch warning signs.',
          },
        ],
        aids: [
          '<b>Mnemonic:</b> “<b>P</b>oppy <b>P</b>uts you down (o<b>P</b>ioid depressant); <b>C</b>oca <b>C</b>harges you up (<b>C</b>ocaine stimulant); <b>C</b>annabis hits the <b>C</b>ardio.”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 379–382 ─────────────────────────
  {
    n: 'A',
    title: 'Hypersensitivity Reactions: The Four Types',
    extra: true,
    kalam: 'Hypersensitivity reactions are damaging immune responses.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These additional topics extend Chapter 7 with five topics that examiners test beyond the core text (hypersensitivity, autoimmune disease, immunodeficiency other than AIDS, cancer staging and markers, and sexually transmitted infections) and with two practical topics, antibiotics and first aid, which CBSE Boards and CUET test directly (the book’s view of what is examined, not an official statement). For each topic they give the taxonomy, the mechanism, and worked examples in the style of the board and entrance papers. A closing section (Additional topic H) shows what NEET actually asks and gives a graded practice set. The exam tags on the practice items (CBSE, NEET, CUET) show the style of question the book intends, not the paper it came from.',
      },
      {
        t: 'p',
        html: 'The chapter introduces allergy as an exaggerated immune response mediated by IgE and mast cells. NEET extends this into the standard four-type classification of hypersensitivity, which distinguishes immediate, antibody-mediated, immune-complex, and cell-mediated reactions. Every type has a distinct cellular basis, a characteristic timescale, and a typical clinical example, and questions routinely ask students to match a disease to its type (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The four-type framework.</b> Hypersensitivity reactions are damaging immune responses. They are classified by the mechanism, not by the antigen.',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Name', 'Mediator', 'Time', 'Typical examples'],
        rows: [
          ['Type I', 'Immediate / Anaphylactic', 'IgE + mast cells + histamine', 'Seconds to minutes', 'Pollen allergy, asthma, anaphylactic shock'],
          ['Type II', 'Cytotoxic / Antibody-mediated', 'IgG or IgM against cell-surface antigens', 'Minutes to hours', 'Blood transfusion reactions (ABO/Rh mismatch)'],
          ['Type III', 'Immune-complex', 'Antigen-antibody complexes deposited in tissues', 'Hours (Arthus reaction) to 1–2 weeks (serum sickness)', 'Serum sickness, Arthus reaction'],
          ['Type IV', 'Delayed / Cell-mediated', 'T-lymphocytes (no antibodies)', '24–72 hours', 'TB skin test (Mantoux), contact dermatitis from poison ivy'],
        ],
      },
      {
        t: 'p',
        html: '<b>Answering a classification question.</b> The trigger is the key identifier: inhaled pollen → Type I (IgE, immediate); a mismatched blood transfusion → Type II (IgG/IgM against RBC surface); serum therapy (injected serum proteins) → Type III (immune complexes); TB bacterium → Type IV (T-cell, delayed).',
      },
      {
        t: 'p',
        html: '<b>Two rules that eliminate most traps.</b> (1) If the answer involves antibodies against a cell-surface antigen (RBCs, tissues), it points to Type II. (2) If the answer involves T-cells and a delay of a day or more, it is Type IV. In question wording, Type I usually mentions IgE, mast cells, or histamine, and Type III usually mentions “immune complex” or “deposited in tissues.” These are rules of thumb for reading questions, not rules of biology.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Naming the Type.</b> A person who was stung by a wasp once before, with only a mild local reaction, develops severe wheezing, swelling of the face and throat, and a drop in blood pressure within minutes of a second sting. Name the type of hypersensitivity reaction involved and the class of antibody responsible.',
        steps: [
          'The rapid onset (minutes), involvement of wheezing and swelling, and drop in blood pressure are the hallmarks of anaphylaxis, a systemic Type I reaction. Type I needs prior sensitisation: the first sting led to the formation of IgE, which coated mast cells. On the second exposure the venom allergen cross-links that IgE, and the mast cells release histamine, causing vasodilation, bronchoconstriction, and oedema.',
        ],
        ans: 'Type I (immediate/anaphylactic) hypersensitivity; IgE.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Matching Disease to Type.</b> A patient develops fever, joint pain, and a rash one week after receiving anti-tetanus serum (horse-derived antitoxin). Which type of hypersensitivity is this, and what mediates it?',
        steps: [
          'Anti-tetanus serum is a foreign protein (horse serum). The body forms antibodies against it, and antigen-antibody complexes circulate and deposit in joints, skin, and small blood vessels, triggering inflammation. This is the classic description of serum sickness, a Type III (immune-complex) hypersensitivity.',
        ],
        ans: 'Type III; antigen-antibody (immune) complexes.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Delayed Hypersensitivity.</b> A healthcare worker who has been exposed to tuberculosis patients shows no immediate reaction to an intradermal tuberculin injection, but 48 hours later develops a raised, red, indurated area at the injection site. Name the type of hypersensitivity and the cells responsible.',
        steps: [
          'The 48-hour delay rules out Type I and II. The induration is caused by T-lymphocytes that have been previously sensitised to <i>Mycobacterium tuberculosis</i> antigens: when re-exposed to tuberculin, the T-cells release cytokines that recruit macrophages, producing the characteristic delayed-type (Type IV) reaction. This is the Mantoux test: a positive result shows sensitisation to tuberculin (past or present infection, or BCG vaccination); it does not by itself prove active TB.',
        ],
        ans: 'Type IV (delayed/cell-mediated); sensitised T-lymphocytes.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Contrast Type I and Type IV.</b> Distinguish between Type I and Type IV hypersensitivity under the headings: (a) cells involved, (b) antibody involvement, (c) time of onset.',
        steps: [
          '<b>(a) Cells involved:</b> Type I: IgE-coated mast cells and basophils. Type IV: T-lymphocytes (specifically T<sub>H</sub>1 cells and macrophages).<br><b>(b) Antibody involvement:</b> Type I: Yes, IgE mediates the response. Type IV: No, antibody-independent.<br><b>(c) Time of onset:</b> Type I: Immediate (seconds to minutes). Type IV: Delayed (24–72 hours).',
        ],
        ans: 'See the comparison above.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A person develops hives and itching after eating prawns. Which type of hypersensitivity is this, and what antibody class mediates it?',
            a: 'Type I (immediate); IgE.',
          },
          {
            q: '[NEET] A patient with Group O blood receives Group A blood by mistake. Within an hour the patient develops fever, chills, and haemoglobinuria. Identify the type of hypersensitivity and the antibodies involved.',
            a: 'Type II (cytotoxic/antibody-mediated); IgM anti-A antibodies from the recipient attack donor RBCs.',
          },
          {
            q: '[CUET] Give one example each of Type I and Type IV hypersensitivity reactions.',
            a: 'Type I: pollen allergy or asthma; Type IV: Mantoux test (TB skin test) or contact dermatitis from poison ivy.',
          },
          {
            q: '[NEET] Explain why the TB skin test reaction appears 48–72 hours after the injection and not immediately.',
            a: 'Type IV is mediated by sensitised T-lymphocytes, which must be recruited to the site and release cytokines: this cellular recruitment and response takes 24–72 hours. Type I involves pre-formed IgE on mast cells, which react instantly.',
          },
          {
            q: '[CUET] Serum sickness is a Type III hypersensitivity. What structural feature of the immune complexes deposited in tissues causes the pathology?',
            a: 'Small to medium-sized, soluble antigen-antibody complexes (formed when antigen is slightly in excess) escape clearance by phagocytes and become trapped in the walls of small blood vessels (especially in joints, skin, and kidneys), triggering complement activation and neutrophil infiltration, which causes local inflammation and tissue damage.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 382–384 ─────────────────────────
  {
    n: 'B',
    title: 'Autoimmune Diseases: Mechanism and Key Examples',
    extra: true,
    kalam: 'Organ-specific means the pathology is confined to one organ; systemic means it attacks connective tissue or multiple organ systems.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces autoimmunity as the immune system’s failure to tell self from non-self, with rheumatoid arthritis as the example. This additional topic explains how self-tolerance breaks down, lists the canonical autoimmune diseases, and distinguishes organ-specific from systemic autoimmunity. NEET and CUET treat all three as testable (the book’s view, not an official statement).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>How self-tolerance is lost.</b> Normally the immune system eliminates or inactivates self-reactive lymphocytes during development (central tolerance in bone marrow/thymus) and through peripheral mechanisms (anergy, regulatory T-cells). Autoimmunity results when:<br>1. <b>Molecular mimicry</b>: a pathogen’s antigen resembles a self-antigen; antibodies and T-cells raised against the pathogen cross-react with body tissues. Example: <i>Streptococcus pyogenes</i> (a throat infection with it can be followed by rheumatic fever) has antigens similar to heart valve tissue.<br>2. <b>Loss of regulatory T-cells</b>: T<sub>reg</sub> cells that suppress self-reactive lymphocytes are destroyed or inactivated.<br>3. <b>Sequestration of self-antigens</b>: some self-antigens (e.g., in the eye lens, testes) are hidden from the immune system during development; if released by injury they may trigger a response.<br>4. <b>Genetic factors</b>: certain HLA haplotypes increase susceptibility (HLA-DR4 with rheumatoid arthritis).',
      },
      { t: 'p', html: '<b>The two-class split.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Organ-specific autoimmune disease', 'Systemic autoimmune disease'],
        rows: [
          ['Target', 'Single organ or tissue', 'Multiple organs and tissues'],
          ['Autoantibodies', 'Against organ-specific antigen', 'Against widespread antigens (e.g., nuclear antigens)'],
          [
            'Examples',
            'Type 1 diabetes mellitus (against pancreatic beta cells); Graves’ disease (against TSH receptors); Hashimoto’s thyroiditis (against thyroid peroxidase)',
            'Systemic lupus erythematosus (SLE); Rheumatoid arthritis (rheumatoid factor and anti-CCP autoantibodies; immune complexes inflame the synovial joints)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key distinction for exams.</b> Organ-specific means the pathology is confined to one organ; systemic means it attacks connective tissue or multiple organ systems. Rheumatoid arthritis is systemic (joints, skin, blood vessels); Type 1 diabetes is organ-specific (pancreas).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Naming and Classification.</b> Name one organ-specific and one systemic autoimmune disease, and state the basis of their classification.',
        steps: [
          'Organ-specific: Type 1 diabetes mellitus. The immune system attacks and destroys the insulin-producing beta cells of the pancreatic islets of Langerhans. Systemic: Rheumatoid arthritis. Autoantibodies (rheumatoid factor, anti-CCP) form immune complexes that inflame the synovial joints, and the disease may also affect skin, lungs, and heart. Classification basis: organ-specific targets a single organ; systemic targets multiple organ systems simultaneously because the autoantigens are widespread (e.g., nuclear antigens in SLE).',
        ],
        ans: 'Organ-specific: Type 1 diabetes mellitus; Systemic: Rheumatoid arthritis (or SLE).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Mechanism of Tissue Damage.</b> Explain how molecular mimicry contributes to rheumatic fever following a throat infection with <i>Streptococcus pyogenes</i>.',
        steps: [
          '<i>Streptococcus pyogenes</i> (Group A strep) possesses antigens on its cell surface that resemble antigens present on cardiac tissue (especially heart valve glycoproteins). During the infection, the immune system produces antibodies against the bacterial antigens. These antibodies cross-react with cardiac tissue because the molecular shapes are similar (molecular mimicry). Antibody deposition in the heart valves and myocardium triggers inflammation, leading to carditis, the hallmark of rheumatic fever.',
        ],
        ans: 'Molecular mimicry: antibodies against strep antigens cross-react with cardiac tissue antigens, causing carditis.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Autoantibody Identification.</b> Match Column I (autoimmune disease) with Column II (autoantibody or target):<br><b>Column I:</b> (P) Graves’ disease, (Q) Hashimoto’s thyroiditis, (R) Systemic lupus erythematosus, (S) Myasthenia gravis.<br><b>Column II:</b> (i) Anti-TSH receptor antibodies, (ii) Anti-thyroid peroxidase antibodies, (iii) Anti-nuclear antibodies (ANA), (iv) Anti-acetylcholine receptor antibodies.',
        steps: [
          '<b>Reasoning:</b> Graves’ disease involves stimulating antibodies that mimic TSH and bind TSH receptors → P–i. Hashimoto’s involves destructive antibodies against thyroid enzymes → Q–ii. SLE is characterized by autoantibodies against nuclear components → R–iii. Myasthenia gravis involves antibodies against the acetylcholine receptor at neuromuscular junctions → S–iv.',
        ],
        ans: 'P–i, Q–ii, R–iii, S–iv',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is autoimmunity? Name one autoimmune disease.',
            a: 'Autoimmunity is a condition in which the immune system fails to distinguish self from non-self and attacks the body’s own cells and tissues. Example: Type 1 diabetes mellitus.',
          },
          {
            q: '[NEET] Distinguish between organ-specific and systemic autoimmune diseases, giving one example of each.',
            a: 'Organ-specific: autoimmunity confined to one organ (e.g., Type 1 diabetes: pancreatic beta cells; Graves’ disease: thyroid). Systemic: autoimmunity affects multiple organs (e.g., SLE: skin, joints, kidneys, heart; rheumatoid arthritis: joints, connective tissue).',
          },
          {
            q: '[CUET] Which type of hypersensitivity contributes to the tissue damage in rheumatoid arthritis? Explain briefly.',
            a: 'Type III hypersensitivity: autoantibodies (rheumatoid factor, which binds the Fc region of the patient’s own IgG, and anti-CCP, which binds citrullinated proteins) form immune complexes; these deposit in synovial joints, activating complement and causing inflammation.',
          },
          {
            q: '[NEET] Explain the role of regulatory T-cells in preventing autoimmunity.',
            a: 'Regulatory T-cells (T<sub>reg</sub>) suppress the activity of self-reactive lymphocytes in the periphery. They secrete anti-inflammatory cytokines (IL-10, TGF-beta) and express CTLA-4, which downregulates T-cell activation. Loss or dysfunction of T<sub>reg</sub> cells allows self-reactive T-cells to escape suppression and cause autoimmune tissue damage.',
          },
          {
            q: '[CUET] A patient with SLE shows a butterfly rash across the cheeks and joint pain. Name the class of autoantibodies most characteristic of SLE.',
            a: 'Anti-nuclear antibodies (ANA): SLE is the prototypical systemic autoimmune disease characterized by autoantibodies against nuclear antigens (DNA, histones, ribonucleoproteins).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 385–387 ─────────────────────────
  {
    n: 'C',
    title: 'Immunodeficiency Disorders: Beyond AIDS',
    extra: true,
    kalam: 'Immunodeficiency is a state in which the immune system’s ability to fight infectious disease is compromised or entirely absent.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'In the chapter, immunodeficiency appears only through AIDS: HIV, reverse transcriptase, helper T-cell destruction, and immune collapse (SCID caused by adenosine deaminase deficiency appears later, in the gene-therapy part of Chapter 10). CUET and NEET also ask about primary (inherited) immunodeficiencies and about secondary immunodeficiencies with causes other than HIV, particularly Severe Combined Immunodeficiency (SCID), the effect of malnutrition on immunity, and the link between immunodeficiency and opportunistic infections.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Primary immunodeficiency: the genetic forms.</b> These result from genetic defects, usually inherited, that impair specific components of the immune system.<br>• <b>B-cell defects:</b> Failure to produce antibodies → recurrent bacterial infections. Example: Bruton’s agammaglobulinaemia (X-linked, males affected; absent mature B-cells).<br>• <b>T-cell defects:</b> Impaired cell-mediated immunity → viral, fungal, opportunistic infections. Example: DiGeorge syndrome (thymic hypoplasia, chromosomal deletion 22q11.2).<br>• <b>Combined B- and T-cell defects:</b> Both arms impaired. Example: Severe Combined Immunodeficiency (SCID): the most severe, often fatal in early childhood without bone marrow transplant; may involve adenosine deaminase (ADA) deficiency.',
      },
      {
        t: 'p',
        html: '<b>Secondary immunodeficiency: acquired causes.</b> These arise from external factors:<br>• <b>HIV/AIDS</b>: destroys helper T-cells (the chapter’s focus).<br>• <b>Malnutrition</b>: protein-energy malnutrition impairs lymphocyte production and function; a major cause of secondary immunodeficiency worldwide.<br>• <b>Cancer chemotherapy and radiotherapy</b>: destroy rapidly dividing cells including immune progenitors.<br>• <b>Certain infections</b>: measles, tuberculosis, and chronic conditions can suppress immune function.',
      },
      {
        t: 'p',
        html: '<b>Key exam pattern.</b> SCID is the most frequently named primary immunodeficiency in NEET (the book’s estimate from past papers, not official figures): the question usually asks which cells are affected (both B- and T-cells) and what the clinical consequence is (severe, recurrent infections from early infancy, fatal without treatment). Malnutrition as immunodeficiency links back to Topic 01, where balanced nutrition is one of the four levers of health.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Defining and Classifying.</b> What is immunodeficiency? Distinguish between primary and secondary immunodeficiency, giving one example of each.',
        steps: [
          'Immunodeficiency is a state in which the immune system’s ability to fight infectious disease is compromised or entirely absent. Primary immunodeficiency is inborn, resulting from genetic defects, for example, Severe Combined Immunodeficiency (SCID) involves mutations in genes required for both B- and T-cell development, causing fatal recurrent infections from early infancy. Secondary immunodeficiency is acquired after birth, for example, AIDS caused by HIV, which destroys helper T-lymphocytes and collapses adaptive immunity.',
        ],
        ans: 'As above.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>SCID and B/T Cells.</b> A male infant fails to thrive from the first months of life, suffering from repeated bacterial and viral infections and persistent oral thrush (fungal). Which primary immunodeficiency is most likely, and which arms of the immune system are affected?',
        steps: [
          'The combination of bacterial (B-cell), viral (T-cell), and fungal (T-cell) infections from early infancy points to a defect in both arms of adaptive immunity. SCID affects both B-cells and T-cells; without T-cell help, B-cells cannot produce effective antibodies. The fungal infection (<i>Candida</i>) is particularly characteristic of T-cell deficiency.',
        ],
        ans: 'Severe Combined Immunodeficiency (SCID); both B-cell and T-cell arms are affected.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Malnutrition and Immunity.</b> Explain why protein-energy malnutrition increases susceptibility to infections and impairs vaccine efficacy.',
        steps: [
          'Protein-energy malnutrition reduces lymphocyte production (especially T-cells), decreases complement protein synthesis, impairs macrophage function, and atrophies lymphoid tissues (thymus, spleen, lymph nodes). With fewer functional lymphocytes, the primary immune response to infection is weak, and vaccination (which depends on generating a primary response and memory) produces inadequate antibody titres. This is why malnourished children show reduced seroconversion after vaccination.',
        ],
        ans: 'Malnutrition impairs B- and T-cell function, complement synthesis, and macrophage activity, reducing both natural and vaccine-induced immunity.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the immunodeficiency disorder in which both B-cells and T-cells are affected, and state the most common cause of death in untreated cases.',
            a: 'Severe Combined Immunodeficiency (SCID); untreated patients typically die from severe, recurrent infections in early childhood.',
          },
          {
            q: '[CUET] Give two examples of secondary immunodeficiency and their causes.',
            a: '(a) AIDS: caused by HIV, which destroys helper T-cells. (b) Immunodeficiency secondary to cancer chemotherapy: cytotoxic drugs destroy rapidly dividing immune cells.',
          },
          {
            q: '[NEET] Why are opportunistic infections (e.g., <i>Pneumocystis</i> pneumonia) a hallmark of immunodeficiency disorders?',
            a: 'Opportunistic infections are caused by organisms that the normal immune system keeps in check but that exploit a weakened immune system. Their presence signals that the immune system has collapsed: a hallmark of immunodeficiency.',
          },
          {
            q: '[CUET] A child with DiGeorge syndrome lacks a thymus. Which immune function is most directly compromised?',
            a: 'T-cell mediated immunity is most directly compromised: the thymus is the site of T-cell maturation; without it, few mature T-cells circulate, impairing cell-mediated immunity and T-dependent antibody responses.',
          },
          {
            q: '[NEET] State the link between HIV/AIDS (secondary immunodeficiency) and the cancers Kaposi’s sarcoma and lymphoma.',
            a: 'HIV-induced loss of immune surveillance allows oncogenic viruses (HHV-8 for Kaposi’s sarcoma, EBV for B-cell lymphoma) to proliferate unchecked, and allows cancerous transformation to progress without immune rejection.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 387–389 ─────────────────────────
  {
    n: 'D',
    title: 'Cancer: Staging, Tumour Markers, and Oncogenic Viruses',
    extra: true,
    kalam: 'Staging describes how far cancer has spread and guides treatment.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers the basic mechanism of carcinogenesis (proto-oncogene to oncogene, loss of contact inhibition, metastasis) and names surgery, radiation, chemotherapy, and immunotherapy as treatments. NEET also examines tumour staging, tumour markers, and the specific oncogenic viruses and the cancers they cause (the book’s view, not an official statement; TNM staging and the named markers go beyond the NCERT text).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Tumour staging: the TNM system.</b> Staging describes how far cancer has spread and guides treatment:<br>• <b>T (Tumour):</b> Size and local extent of the primary tumour.<br>• <b>N (Node):</b> Whether cancer has spread to regional lymph nodes.<br>• <b>M (Metastasis):</b> Presence or absence of distant metastasis.',
      },
      {
        t: 'p',
        html: 'A higher stage (Stage I through Stage IV) indicates more advanced disease. Stage I is localized and most treatable; Stage IV means distant metastasis and the poorest prognosis.',
      },
      {
        t: 'p',
        html: '<b>Tumour markers: what the exam asks.</b> A tumour marker is a substance produced by a tumour or by the body in response to a tumour, detectable in blood or urine.',
      },
      {
        t: 'table',
        title: null,
        head: ['Marker', 'Associated cancer', 'Notes'],
        rows: [
          ['Alpha-fetoprotein (AFP)', 'Liver cancer (hepatocellular carcinoma), yolk sac tumour', 'Also elevated in pregnancy'],
          ['Prostate-specific antigen (PSA)', 'Prostate cancer', 'Elevated PSA prompts biopsy'],
          ['CA-125', 'Ovarian cancer', 'Used for monitoring treatment response'],
          ['Carcinoembryonic antigen (CEA)', 'Colorectal cancer', 'Also elevated in smokers'],
          ['CA-19-9', 'Pancreatic cancer', '–'],
        ],
      },
      {
        t: 'p',
        html: '<b>Oncogenic viruses and their cancers.</b> Oncogenic viruses carry viral oncogenes, as the chapter notes. The specific viruses and their cancers are:<br>• <b>Hepatitis B virus (HBV):</b> Associated with hepatocellular carcinoma (liver cancer): chronic HBV infection → usually liver cirrhosis → cancer.<br>• <b>Hepatitis C virus (HCV):</b> Also associated with liver cancer.<br>• <b>Human papillomavirus (HPV):</b> Associated with cervical cancer (nearly all cases are HPV-related); HPV DNA integrates into cervical epithelial cells and expresses E6 and E7 oncoproteins that inactivate p53 and Rb tumour suppressors.<br>• <b>Epstein-Barr virus (EBV):</b> Associated with Burkitt’s lymphoma and nasopharyngeal cancer.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Tumour Markers.</b> Name one tumour marker for each of the following: (i) liver cancer, (ii) prostate cancer, (iii) ovarian cancer.',
        steps: [
          '(i) Alpha-fetoprotein (AFP) for liver cancer. (ii) Prostate-specific antigen (PSA) for prostate cancer. (iii) CA-125 for ovarian cancer.',
        ],
        ans: 'AFP; PSA; CA-125.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>HPV and Cervical Cancer.</b> Human papillomavirus (HPV) is associated with cervical cancer. Name the viral proteins responsible and explain how they cause malignant transformation.',
        steps: [
          'HPV encodes two oncoproteins, E6 and E7. E6 binds and promotes the degradation of the p53 tumour suppressor protein, disabling the apoptosis pathway. E7 binds and inactivates the Rb (retinoblastoma) protein, releasing the E2F transcription factor and forcing the cell into continuous division. Together, loss of p53 and Rb function removes the two principal brakes on the cell cycle, allowing uncontrolled proliferation: the first step toward malignancy.',
        ],
        ans: 'HPV E6 inactivates p53; HPV E7 inactivates Rb; together these remove cell-cycle checkpoints and drive malignant transformation.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>TNM Staging.</b> A patient has a 3-cm breast tumour confined to the breast tissue, with no spread to axillary lymph nodes and no distant metastasis. Assign the T, N, and M stages.',
        steps: [
          'T stage: a 3-cm tumour confined to the primary organ is T2 (tumours above 2 cm and up to 5 cm). N stage: no regional lymph node involvement → N0. M stage: no distant metastasis → M0.',
        ],
        ans: 'T2 N0 M0, Stage IIA breast cancer.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Oncogenic Virus and Cancer Link.</b><br><b>Column I (Virus):</b> (P) Hepatitis B virus, (Q) Human papillomavirus, (R) Epstein-Barr virus.<br><b>Column II (Cancer):</b> (i) Cervical cancer, (ii) Burkitt’s lymphoma, (iii) Liver cancer.',
        steps: [
          '<b>Reasoning:</b> HBV → liver cancer (hepatocellular carcinoma) → P–iii. HPV → cervical cancer → Q–i. EBV → Burkitt’s lymphoma (and nasopharyngeal cancer) → R–ii.',
        ],
        ans: 'P–iii, Q–i, R–ii',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is meant by metastasis? Why is metastasis the hallmark of a malignant tumour?',
            a: 'Metastasis is the spread of cancer cells from the primary tumour to distant sites via blood or lymph, establishing secondary tumours. It is the hallmark of malignancy because benign tumours remain localized and do not invade or spread.',
          },
          {
            q: '[CUET] Name the tumour marker associated with: (a) liver cancer, (b) colorectal cancer, (c) ovarian cancer.',
            a: '(a) AFP (alpha-fetoprotein); (b) CEA (carcinoembryonic antigen); (c) CA-125.',
          },
          {
            q: '[NEET] Explain how HPV oncoproteins E6 and E7 contribute to cervical cancer development.',
            a: 'HPV E6 protein binds and degrades p53 (removing the apoptosis checkpoint); HPV E7 protein inactivates Rb (releasing E2F and forcing cell-cycle entry). Loss of both tumour suppressors drives uncontrolled proliferation and malignant transformation of cervical epithelial cells.',
          },
          {
            q: '[NEET] What is meant by staging of cancer? In the TNM system, what do T, N, and M stand for?',
            a: 'Staging describes the extent of cancer spread at the time of diagnosis. T = size and local extent of the primary tumour; N = involvement of regional lymph nodes; M = presence or absence of distant metastasis.',
          },
          {
            q: '[CUET] A patient with chronic hepatitis B infection develops cirrhosis and subsequently liver cancer. Name the oncogenic virus involved and state one method of prevention.',
            a: 'Hepatitis B virus (HBV). Prevention: hepatitis B vaccination (recombinant surface antigen vaccine), safe blood transfusion practices, and avoiding shared needles.',
          },
        ],
      },
    ],
  },
];
