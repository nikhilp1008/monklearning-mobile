import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 7 (Human Health and Disease), Additional topics E to H, word for word from the Class 12 Biology
 * Master Reference (book pp. 390 to 407): E "Sexually Transmitted Infections: Syphilis, Gonorrhoea, and Chlamydia"
 * (the top of p. 390 to the foot of the practice answers high on p. 392), F "Antibiotics: Mode of Action and the Basis of Resistance" (mid p. 392 to the practice answers high on
 * p. 395), G "First Aid: Principles and Emergency Procedures" (mid p. 395 to the practice answers at the top of p. 398) and H "What NEET
 * Actually Asks" (the book's "Addendum P", mid p. 398 to p. 407). Page 408 is the next chapter.
 *
 * Topic indexes: E = 8, F = 9, G = 10, H = 11 (Topics 01 to 04 = 0 to 3, Additional A to D = 4 to 7). No figure is
 * drawn on these pages (the drawing census shows ruled table lines and boxes only). The book's example headings
 * ("Example E.1 - [CBSE Board] Naming and Causative Organism") become the example's tag (the bracket) and a bold lead on
 * its question. Where the book prints no answer line of its own the example's ans is ''. Assertion-reason items print
 * their fourth option as "Both false" on pp. 406 and 407: written here as the standard "A false, R true" (see the report).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic E · pp. 390–392 ─────────────────────────
  {
    n: 'E',
    title: 'Sexually Transmitted Infections: Syphilis, Gonorrhoea, and Chlamydia',
    extra: true,
    kalam: 'The chapter covers infectious diseases transmitted by air, water, and insect vectors, and HIV transmission through sexual contact.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers infectious diseases transmitted by air, water, and insect vectors, and HIV transmission through sexual contact. NCERT’s reproductive-health chapter also names the classical sexually transmitted infections (STIs): syphilis, gonorrhoea, and chlamydia, which CUET and CBSE Boards examine (the book’s view, not an official statement). Chapter 3 (Reproductive Health) names these infections in its Topic 02 and describes their clinical picture in its Additional topic D.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The three classical STIs.</b> All three are bacterial.' },
      {
        t: 'table',
        title: null,
        head: ['Disease', 'Causative organism', 'Key symptoms', 'Complications if untreated'],
        rows: [
          [
            'Syphilis',
            '<i>Treponema pallidum</i> (spirochete)',
            'Painless chancre (primary), rash and fever (secondary), organ damage (tertiary)',
            'Cardiovascular syphilis, neurosyphilis, gummas',
          ],
          [
            'Gonorrhoea',
            '<i>Neisseria gonorrhoeae</i> (Gram-negative diplococcus)',
            'Purulent urethral/vaginal discharge, painful urination; may be asymptomatic',
            'Infertility, ectopic pregnancy, PID in women; epididymitis in men',
          ],
          [
            'Chlamydia',
            '<i>Chlamydia trachomatis</i> (obligate intracellular bacterium)',
            'Often asymptomatic; mucopurulent discharge',
            'Infertility, reactive arthritis, PID',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key distinction.</b> Gonorrhoea and chlamydia often occur as co-infections. The asymptomatic nature of chlamydia (especially in women) is a major reason it spreads silently: it causes tubal scarring and infertility.',
      },
      {
        t: 'p',
        html: '<b>Diagnosis and treatment.</b> All three are bacterial and are treated with antibiotics. Gonorrhoea: cephalosporins (ceftriaxone). Syphilis: penicillin G. Chlamydia: azithromycin or doxycycline. No vaccine against these three is in India’s routine immunisation schedule (a meningococcal B vaccine gives partial protection against gonorrhoea and is used in some countries).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Naming and Causative Organism.</b> Name the causative organism of syphilis and state one characteristic symptom of the primary stage.',
        steps: [
          'Syphilis is caused by <i>Treponema pallidum</i>, a spirochete bacterium. The primary stage is marked by a painless, indurated ulcer called a chancre at the site of infection (usually the genitals).',
        ],
        ans: '<i>Treponema pallidum</i>; painless chancre (hard ulcer).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Why Chlamydia Is Called the “Silent” Infection.</b> Why is <i>Chlamydia trachomatis</i> infection described as a “silent” infection, and what are its long-term consequences in women?',
        steps: [
          'Chlamydia infection is called silent because about 70% of infected women (a commonly quoted figure) and a significant proportion of infected men show no symptoms at all. The infection persists without causing pain or obvious discharge, allowing it to spread unchecked. In women, chronic chlamydial infection ascends to the upper reproductive tract, causing pelvic inflammatory disease (PID), tubal scarring, and adhesions. This tubal damage is a leading preventable infectious cause of female infertility and also increases the risk of ectopic pregnancy.',
        ],
        ans: 'Asymptomatic in most cases; long-term consequences include pelvic inflammatory disease, tubal infertility, and increased risk of ectopic pregnancy.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Differentiating STIs.</b> Distinguish between gonorrhoea and chlamydia on the basis of (a) causative organism, (b) key symptom, (c) diagnostic test.',
        steps: [
          '<b>(a) Causative organism.</b> Gonorrhoea: <i>Neisseria gonorrhoeae</i> (Gram-negative diplococcus). Chlamydia: <i>Chlamydia trachomatis</i> (obligate intracellular bacterium).',
          '<b>(b) Key symptom.</b> Gonorrhoea: profuse purulent (yellow-green) discharge; painful urination. Chlamydia: often asymptomatic; when present, mucopurulent discharge.',
          '<b>(c) Diagnostic test.</b> Gonorrhoea: Gram stain (shows intracellular Gram-negative diplococci in neutrophils); culture; NAAT is also used and is the preferred test for both infections. Chlamydia: NAAT (nucleic acid amplification test) on swab/urine.',
        ],
        ans: 'See the rows above.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the causative organism and the vector (if any) for syphilis, gonorrhoea, and chlamydia.',
            a: 'Syphilis: <i>Treponema pallidum</i> (spirochete; no vector). Gonorrhoea: <i>Neisseria gonorrhoeae</i> (Gram-negative diplococcus; no vector). Chlamydia: <i>Chlamydia trachomatis</i> (obligate intracellular bacterium; no vector). None of these is vector-borne.',
          },
          {
            q: '[CUET] State one complication of untreated gonorrhoea in men and one in women.',
            a: 'Men: epididymitis (inflammation of the epididymis) → infertility. Women: pelvic inflammatory disease (PID) → tubal scarring → infertility or ectopic pregnancy.',
          },
          {
            q: '[NEET] Why are gonorrhoea and chlamydia often detected together in the same patient?',
            a: 'Both are transmitted by the same route (sexual contact), and the presence of one predisposes to the other (both infect the urogenital epithelium). The high-risk behaviours that transmit gonorrhoea also transmit chlamydia, so co-infection is common.',
          },
          {
            q: '[CUET] Which antibiotic is the drug of choice for treating syphilis, and why is early treatment critical?',
            a: 'Penicillin G (benzathine penicillin for early syphilis; crystalline penicillin for neurosyphilis). Early treatment prevents progression to the tertiary stage, where cardiovascular syphilis (aortitis), neurosyphilis (dementia, paralysis), and gummas (granulomatous lesions) cause irreversible organ damage.',
          },
          {
            q: '[CBSE] Name the type of bacterium that causes syphilis and give one identifying feature of this organism.',
            a: '<i>Treponema pallidum</i> is a spirochete, a helical (corkscrew-shaped) bacterium that is thin and motile, best seen by dark-field microscopy (it is too thin to be seen by an ordinary Gram stain).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 392–395 ─────────────────────────
  {
    n: 'F',
    title: 'Antibiotics: Mode of Action and the Basis of Resistance',
    extra: true,
    kalam: 'In the chapter, antibiotics appear only in one line, as part of the toolkit for preventing and controlling infectious diseases (Topic 02).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'In the chapter, antibiotics appear only in one line, as part of the toolkit for preventing and controlling infectious diseases (Topic 02). NEET regularly asks how antibiotics are classified by their mechanism of action and why resistance develops (the book’s estimate from past papers, not official figures), and CUET asks students to match the antibiotic class to the bacterial target.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The two overarching categories.</b><br>• <b>Bactericidal</b>: kills bacteria directly (e.g., penicillin, rifampicin).<br>• <b>Bacteriostatic</b>: inhibits growth, allowing the immune system to clear the infection (e.g., tetracycline, erythromycin).',
      },
      {
        t: 'p',
        html: '<b>Three major mechanisms of action, four targets.</b> Each class attacks a bacterial structure or process that differs in human cells: this selectivity is why antibiotics are largely toxic to bacteria and relatively safe for humans.',
      },
      {
        t: 'table',
        title: null,
        head: ['Mechanism', 'Target', 'Antibiotic examples', 'Source organism'],
        rows: [
          [
            'Inhibit cell wall synthesis',
            'Peptidoglycan layer of bacterial cell wall',
            'Penicillin, ampicillin',
            'Penicillin from <i>Penicillium notatum</i> (the first antibiotic to be discovered; the species is now named <i>P. rubens</i>)',
          ],
          [
            'Inhibit protein synthesis',
            '70S bacterial ribosome (30S subunit)',
            'Tetracycline, aminoglycosides (streptomycin)',
            'Streptomycin from <i>Streptomyces griseus</i>',
          ],
          [
            'Inhibit protein synthesis',
            '70S bacterial ribosome (50S subunit)',
            'Chloramphenicol, erythromycin, azithromycin',
            'Erythromycin from <i>Saccharopolyspora erythraea</i>',
          ],
          [
            'Inhibit nucleic acid synthesis',
            'DNA replication or transcription',
            'Quinolones (inhibit DNA gyrase); Rifampicin (inhibits RNA polymerase)',
            'Rifampicin (made from rifamycin) from <i>Streptomyces mediterranei</i> (now <i>Amycolatopsis</i>)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Why resistance develops.</b> Bacteria acquire resistance through:<br>1. <b>Gene mutation</b>: a random mutation alters the antibiotic’s target (e.g., a mutated ribosomal protein binds tetracycline less well).<br>2. <b>Horizontal gene transfer</b>: resistance genes spread via plasmids (conjugation), transduction (phages), or transformation (naked DNA). This is how resistance spreads rapidly through bacterial populations.<br>3. <b>Enzymatic inactivation</b>: bacteria produce enzymes that destroy the antibiotic (e.g., beta-lactamase breaks penicillin).<br>4. <b>Efflux pumps</b>: bacteria pump the antibiotic out of the cell before it can act.',
      },
      {
        t: 'p',
        html: '<b>Key exam rule.</b> Antibiotics that target the cell wall are generally bactericidal: without an intact cell wall the bacterium bursts (osmotic lysis). Bacteriostatic antibiotics (tetracyclines, macrolides) generally target the ribosome (streptomycin, also a ribosome drug, is bactericidal), halting protein synthesis and giving the host’s immune system time to eliminate the stalled bacteria.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Naming and Source.</b> Name the antibiotic obtained from <i>Penicillium notatum</i> and state its mode of action.',
        steps: [
          'Penicillin (specifically benzylpenicillin/penicillin G) is obtained from the fungus <i>Penicillium notatum</i>. It inhibits bacterial cell wall synthesis by binding to the transpeptidase enzyme (also called penicillin-binding proteins) that cross-links peptidoglycan chains. Without cross-linking, the cell wall is mechanically weak and the bacterium bursts by osmotic lysis.',
        ],
        ans: 'Penicillin; inhibits cell wall synthesis.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Mechanism of Action.</b> Describe the mode of action of tetracycline and state why it does not harm human cells.',
        steps: [
          'Tetracycline binds to the 30S subunit of the bacterial 70S ribosome and blocks the attachment of aminoacyl-tRNA to the ribosomal acceptor site, halting protein synthesis. Human cells have 80S cytoplasmic ribosomes (composed of 40S and 60S subunits), structurally distinct from the 70S ribosomes of bacteria (and mitochondria). Because tetracycline binds the bacterial 70S ribosome far more strongly than the human 80S ribosome, it inhibits bacterial protein synthesis at doses that do little harm to human cells (it can affect mitochondrial ribosomes, which resemble bacterial ones, and this explains some of its side effects).',
        ],
        ans: 'Tetracycline inhibits the 30S ribosomal subunit, blocking protein synthesis in bacteria. Human cells have 80S ribosomes, which tetracycline affects far less.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Bactericidal vs Bacteriostatic.</b> Classify the following as bactericidal or bacteriostatic: (i) Penicillin, (ii) Tetracycline, (iii) Rifampicin, (iv) Erythromycin.',
        steps: [
          '(i) Penicillin: bactericidal (cell wall inhibitor; bacteria lyse without a functional wall).',
          '(ii) Tetracycline: bacteriostatic (ribosome inhibitor; bacterial growth halts, immune system clears).',
          '(iii) Rifampicin: bactericidal (inhibits bacterial RNA polymerase; transcription stops and bacteria die).',
          '(iv) Erythromycin: bacteriostatic (50S ribosome inhibitor; protein synthesis halts).',
          'These are the usual classifications, a general pattern only: the effect can depend on the species and the dose (streptomycin, a ribosome drug, is bactericidal).',
        ],
        ans: 'Bactericidal: (i) and (iii); Bacteriostatic: (ii) and (iv).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Resistance Mechanism.</b> Explain how a bacterium that has never encountered penicillin can nevertheless become resistant to it through horizontal gene transfer.',
        steps: [
          'A susceptible bacterium can acquire a resistance gene (e.g., the gene for beta-lactamase) from a resistant bacterium via a plasmid; this process is called conjugation. The resistant bacterium carries the plasmid with the resistance gene; the susceptible bacterium receives a copy through the conjugation channel that the sex pilus sets up. The new plasmid expresses beta-lactamase, which cleaves the beta-lactam ring of penicillin, inactivating it. Once the plasmid is established, the recipient bacterium stays resistant for as long as it keeps the plasmid, and can pass the plasmid to other bacteria, spreading resistance through the population rapidly. This explains why resistance can spread quickly once an antibiotic is in wide use.',
        ],
        ans: 'Via conjugation: a plasmid carrying a resistance gene (e.g., beta-lactamase) is transferred from a resistant donor to a susceptible recipient through the conjugation channel set up by a sex pilus; the recipient acquires resistance and can spread it further.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name one antibiotic that inhibits bacterial protein synthesis and one that inhibits cell wall synthesis.',
            a: 'Protein synthesis inhibitor: tetracycline (or streptomycin, erythromycin). Cell wall synthesis inhibitor: penicillin (or ampicillin).',
          },
          {
            q: '[CUET] Why are antibiotics that target bacterial cell wall synthesis generally bactericidal?',
            a: 'The bacterial cell wall (peptidoglycan) maintains structural integrity against osmotic pressure. Inhibiting its synthesis leaves the wall mechanically weak; the bacterium swells and bursts by osmotic lysis, killing it outright (bactericidal). Human cells lack peptidoglycan, so the drug selectively targets bacteria.',
          },
          {
            q: '[NEET] Distinguish between bacteriostatic and bactericidal antibiotics, giving one example of each.',
            a: 'Bactericidal antibiotics generally kill bacteria directly (e.g., penicillin: cell wall inhibitor; rifampicin: RNA polymerase inhibitor). Bacteriostatic antibiotics generally inhibit growth, allowing the host immune system to clear the infection (e.g., tetracycline: 30S ribosome inhibitor; erythromycin: 50S ribosome inhibitor). The pattern has exceptions: streptomycin is a ribosome drug that is bactericidal.',
          },
          {
            q: '[NEET] Explain how the misuse of antibiotics leads to the development of antibiotic-resistant bacteria.',
            a: 'Misuse (incomplete doses, wrong drug, or use for viral infections) creates selective pressure: susceptible bacteria die, but rare mutants with resistance genes survive and reproduce. Horizontal gene transfer (plasmids) spreads resistance genes through the population rapidly. Over successive generations, resistant strains predominate, making the antibiotic ineffective.',
          },
          {
            q: '[CUET] Name the source organism for: (i) penicillin, (ii) streptomycin, (iii) erythromycin.',
            a: '(i) Penicillin: <i>Penicillium notatum</i> (now named <i>P. rubens</i>); (ii) Streptomycin: <i>Streptomyces griseus</i>; (iii) Erythromycin: <i>Saccharopolyspora erythraea</i>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 395–398 ─────────────────────────
  {
    n: 'G',
    title: 'First Aid: Principles and Emergency Procedures',
    extra: true,
    kalam: 'First aid, the immediate, temporary care given before professional medical treatment, is tested by CBSE Boards and CUET as a health-education topic (the book’s view, not an official statement).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'First aid, the immediate, temporary care given before professional medical treatment, is tested by CBSE Boards and CUET as a health-education topic (the book’s view, not an official statement). It is the individual-level counterpart of the chapter’s public-health measures (hygiene, vector control, vaccination).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The universal first aid principle: DRABC.</b><br>• <b>D (Danger):</b> Check for danger to yourself, the victim, and bystanders.<br>• <b>R (Response):</b> Check if the victim is conscious and responsive.<br>• <b>A (Airway):</b> Ensure the airway is open and clear of obstructions.<br>• <b>B (Breathing):</b> Check for normal breathing.<br>• <b>C (Circulation):</b> Look for signs of life. If the person is unresponsive and not breathing normally, call for emergency help (112 in India) and begin CPR at once; a lay rescuer does not need to check for a pulse.',
      },
      {
        t: 'p',
        html: '<b>Five high-frequency exam scenarios.</b> (The book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: '<b>1. Sprains and strains: the RICE protocol.</b><br>• <b>R (Rest):</b> Stop using the injured limb immediately.<br>• <b>I (Ice):</b> Apply ice wrapped in cloth for 15–20 minutes at a time, repeated every 2 to 3 hours while swelling lasts, to reduce swelling.<br>• <b>C (Compression):</b> Apply an elastic bandage to limit swelling (not too tight).<br>• <b>E (Elevation):</b> Raise the injured limb above heart level to reduce fluid accumulation.',
      },
      {
        t: 'p',
        html: '<b>2. Choking: Heimlich manoeuvre.</b> When the airway is blocked by food or a foreign object:<br>• Stand behind the victim, wrap your arms around the waist.<br>• Make a fist with one hand and place it just above the navel, below the ribcage.<br>• Grasp the fist with the other hand and deliver a quick, upward thrust.<br>• Repeat until the object is expelled. If the person cannot cough, speak or breathe, or becomes unresponsive, call for emergency help; if unresponsive, start CPR. Many first-aid courses (Red Cross, ERC) give 5 back blows between the shoulder blades first and then alternate with up to 5 abdominal thrusts. For an infant use back blows and chest thrusts; for a pregnant or obese person use chest thrusts.',
      },
      {
        t: 'p',
        html: '<b>3. CPR (cardiopulmonary resuscitation): when to use it.</b> When a victim is unresponsive and not breathing normally (an occasional gasp does not count): call for emergency help, then give 30 chest compressions (lower half of sternum, 5–6 cm deep, 100–120 per minute) followed by 2 rescue breaths. Continue until the person starts to breathe normally, medical help arrives or you can no longer continue. A question that says “no pulse and no breathing” expects CPR.',
      },
      {
        t: 'p',
        html: '<b>4. Burns.</b> First-degree (superficial): cool with running water for 10–20 minutes; do not apply ice, butter, or toothpaste. Second-degree (blistering): cool under running water for 20 minutes; do not break blisters; cover loosely with a clean, non-fluffy cloth or a non-adhesive dressing; see a doctor. Third-degree (deep): call emergency services; cover with a clean, non-fluffy cloth; do not remove adhered clothing.',
      },
      {
        t: 'p',
        html: '<b>5. Dog bite.</b> Wash thoroughly with soap and running water for at least 15 minutes, then apply an antiseptic such as povidone-iodine; do not put chilli, turmeric or other home remedies on the wound and do not bandage it tightly; go to a medical facility immediately for the anti-rabies vaccine (post-exposure prophylaxis) and, for a deep or bleeding bite, rabies immunoglobulin.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>RICE Protocol.</b> A student twists an ankle during a basketball game. Name the steps of the RICE protocol that should be applied immediately.',
        steps: [
          'R (Rest): stop playing and avoid bearing weight on the ankle. I (Ice): apply ice wrapped in a cloth for 15–20 minutes to reduce swelling. C (Compression): wrap with an elastic bandage (firm but not cutting circulation). E (Elevation): raise the ankle above heart level using a pillow or raised surface.',
        ],
        ans: 'Rest, Ice, Compression, Elevation.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Heimlich Manoeuvre.</b> A person at dinner suddenly clutches the throat and cannot speak. State the immediate first aid procedure and the underlying principle.',
        steps: [
          'The Heimlich manoeuvre (abdominal thrust): stand behind, wrap arms around the waist, make a fist above the navel, and deliver a quick upward thrust. The principle is to create an artificial cough: the thrust raises intra-abdominal pressure suddenly, compressing the lungs and expelling the trapped air (and any object lodged in the airway) with enough force to clear the obstruction. The Heimlich manoeuvre is for a person who is choking and cannot cough or speak; if they can cough, encourage coughing.',
        ],
        ans: 'Heimlich manoeuvre; it creates artificial pressure to expel the obstructing object from the airway.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>CPR Indication.</b> In which situation should cardiopulmonary resuscitation (CPR) be initiated, and what is the correct ratio of chest compressions to rescue breaths?',
        steps: [
          'CPR is initiated when a victim is unresponsive and not breathing normally. The standard ratio for a single rescuer is 30 chest compressions followed by 2 rescue breaths, 30 ∶ 2. Chest compressions should be at the centre of the lower half of the sternum, 5–6 cm deep, at a rate of 100–120 compressions per minute.',
        ],
        ans: 'Unresponsive and not breathing normally; 30 compressions ∶ 2 breaths.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Dog Bite Management.</b> A child is bitten by a stray dog. State the immediate first aid steps and the subsequent medical intervention required.',
        steps: [
          'Immediate first aid: wash the wound thoroughly with soap and copious amounts of running water for at least 15 minutes; this physically removes and inactivates the rabies virus. Apply an antiseptic after washing; do not put turmeric or traditional remedies on the wound and do not bandage it tightly. Go to the nearest medical facility immediately.',
          'Medical intervention: post-exposure prophylaxis (PEP), the anti-rabies vaccine (inactivated virus vaccine, for example the five-dose intramuscular Essen schedule on days 0, 3, 7, 14 and 28; shorter schedules approved by WHO also exist) and, if indicated, rabies immunoglobulin (RIG) infiltrated around the wound.',
        ],
        ans: 'Wash with soap and water for at least 15 minutes; seek immediate medical care for anti-rabies vaccination (post-exposure prophylaxis).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is first aid? State two situations in which first aid might be required.',
            a: 'First aid is the immediate, temporary care given to an injured or ill person before professional medical help arrives. Situations: (a) a sprained ankle during sport (RICE protocol), (b) a choking episode (Heimlich manoeuvre), (c) a dog bite (wound washing + PEP).',
          },
          {
            q: '[CUET] Explain the DRABC sequence in first aid management.',
            a: 'D: check for danger; R: check victim’s response (conscious or unconscious); A: open the airway (tilt head, lift chin); B: check for breathing; C: look for signs of life and start CPR if the person is unresponsive and not breathing normally (after calling for help).',
          },
          {
            q: '[CBSE] A person has a first-degree burn on the hand. What immediate first aid should be given?',
            a: 'Cool the burn under running tap water for 10–20 minutes; do not apply ice (it can damage the skin further), butter, toothpaste, or any ointment; cover with a sterile, non-adhesive dressing.',
          },
          {
            q: '[CUET] State two differences between first-degree and second-degree burns.',
            a: 'First-degree burn: superficial (epidermis only), painful, red, no blisters (e.g., sunburn). Second-degree burn: deeper (dermis), painful, red, blistered, wet appearance; a superficial one heals in about 2–3 weeks, a deeper one takes longer and may scar.',
          },
          {
            q: '[NEET] What is the immediate first aid for a nosebleed (epistaxis)?',
            a: 'Sit up and lean forward (do not tilt the head back: this makes blood run down the throat); pinch the soft part of the nose firmly for 10 to 15 minutes; apply a cold compress to the bridge of the nose; if bleeding persists, seek medical attention.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 398–407 ─────────────────────────
  {
    n: 'H',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Across NEET/AIPMT papers, questions on this chapter fall into four broad clusters (the book’s estimate from past papers, not official figures).',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Across NEET/AIPMT papers, questions on this chapter fall into four broad clusters (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Why it is tested so often'],
        rows: [
          [
            'Immunology (innate/acquired, antibodies, cells)',
            'Concept-heavy; several distinct MCQ types are possible from a single diagram (HIV life cycle, immunoglobulin classes, lymphoid organs) (the book’s view, not an official statement)',
          ],
          [
            'Common human diseases (pathogen–disease–vector)',
            'Pure recall grid; the examiner can change one entry and generate a fresh question',
          ],
          [
            'Drug and alcohol abuse (source plant, drug type)',
            'Small table, high recall payoff; a dependable source of marks (the book’s view, not an official statement)',
          ],
          [
            'Health concepts + cancer',
            'WHO definition, cancer properties, and metastasis appear in rotation',
          ],
        ],
      },

      { t: 'part', title: 'The Recurring Archetypes' },

      { t: 'p', html: '<b>1. The Disease–Pathogen–Vector Grid (Match-the-Column)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of diseases on the left, organism names or vectors on the right; the student must pair them correctly.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Sort every option into its pathogen kingdom before reading the right column. A bacterial disease cannot match a protozoan entry. This eliminates the wrong options quickly.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> Match Column I (disease) with Column II (causative organism):<br>Column I: A. Amoebiasis; B. Elephantiasis; C. Ringworm; D. Malignant malaria<br>Column II: 1. <i>Wuchereria bancrofti</i>; 2. <i>Entamoeba histolytica</i>; 3. <i>Plasmodium falciparum</i>; 4. <i>Microsporum</i>',
        steps: [
          '<b>Worked answer:</b> Amoebiasis is a gut protozoan → <i>Entamoeba histolytica</i> → A–2. Elephantiasis is filariasis → <i>Wuchereria bancrofti</i> → B–1. Ringworm is fungal → <i>Microsporum</i> → C–4. Malignant malaria is the fatal form → <i>Plasmodium falciparum</i> → D–3.',
        ],
        ans: 'Correct pairing: A–2, B–1, C–4, D–3.',
      },

      { t: 'p', html: '<b>2. The Antibody-Class Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A description of one property; the student must name the immunoglobulin class (IgG, IgM, IgA, IgE, IgD).',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Anchor each class to a single distinguishing feature:<br>• <b>IgG</b>: crosses the placenta (the only Ig that does in humans).<br>• <b>IgM</b>: first antibody produced on first infection; pentamer.<br>• <b>IgA</b>: found in colostrum and secretions.<br>• <b>IgE</b>: mediates allergy; binds mast cells.<br>• <b>IgD</b>: antigen receptor on naïve B-cells.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> A pregnant woman’s blood sample is found to contain antibodies that have crossed the placental barrier to protect the foetus. Which class of immunoglobulin is responsible?<br><b>(a)</b> IgA<br><b>(b)</b> IgE<br><b>(c)</b> IgG<br><b>(d)</b> IgM',
        steps: [
          '<b>Worked answer:</b> In humans only <b>IgG</b> crosses the placenta (its Fc region binds the Fc receptor of the placenta, FcRn, which carries it across). IgM is a pentamer and cannot cross. IgA is secreted into milk, not across the placenta. IgE does not cross.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>3. The Immune-Cell / Mechanism Tag (Assertion-Reason)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> An assertion about immunity, AIDS, or cancer paired with a reason that may or may not explain it.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Treat each statement independently. State whether it is TRUE or FALSE before deciding the relationship. Never assume the reason must be true just because the assertion looks plausible.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b><br>Assertion (A): An HIV-positive person eventually loses the ability to fight even ordinary infections.<br>Reason (R): HIV progressively destroys helper T-lymphocytes, which coordinate the immune response.<br><b>(a)</b> Both A and R are true and R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          '<b>Worked answer:</b><br>• A is <b>true</b>: immune collapse leaves the patient susceptible to opportunistic infections.<br>• R is <b>true</b>: HIV infects and progressively destroys CD4<sup>+</sup> helper T-cells (its reverse transcriptase copies the viral RNA into DNA, which integrates into the host genome).<br>• R <b>explains</b> A: helper T-cells coordinate both humoral and cell-mediated responses; their destruction cripples much of the adaptive immune system.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>4. The Drug–Source Plant Matching</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Name the plant or the drug class from a short description or chemical fact.',
      },
      { t: 'p', html: '<b>Approach:</b> Build a three-node mental map:' },
      {
        t: 'table',
        title: null,
        head: ['Drug/class', 'Source plant', 'Main effect or action'],
        rows: [
          ['Opioids (morphine, heroin)', '<i>Papaver somniferum</i> (poppy latex)', 'Depressant'],
          ['Cannabinoids (charas, ganja)', '<i>Cannabis sativa</i>', 'Cardiovascular'],
          ['Cocaine', '<i>Erythroxylum coca</i>', 'Stimulant (dopamine)'],
          ['LSD', '<i>Claviceps purpurea</i> (ergot fungus; LSD is made from its alkaloids)', 'Hallucinogen'],
          ['Belladonna', '<i>Atropa belladonna</i>', 'Anticholinergic (NCERT lists it with the hallucinogens)'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> “Smack,” commonly called heroin, is obtained by chemical modification of a natural compound. Which plant provides the precursor and what is the modifying reaction?<br><b>(a)</b> <i>Cannabis sativa</i>: methylation<br><b>(b)</b> <i>Papaver somniferum</i>: acetylation<br><b>(c)</b> <i>Erythroxylum coca</i>: oxidation<br><b>(d)</b> <i>Atropa belladonna</i>: glycosylation',
        steps: [
          '<b>Worked answer:</b> Heroin (smack) is <b>diacetylmorphine</b>: morphine acetylated at two hydroxyl groups. The precursor comes from <i>Papaver somniferum</i>. Only acetylation produces the correct answer.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>5. The <i>Plasmodium</i> Life-Cycle Stage Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A description of one stage or a question about the infective form.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Memorise two anchor facts:<br>1. <b>Infective stage for humans</b> = sporozoite (in mosquito salivary glands).<br>2. <b>Human host</b> = site of asexual reproduction; <b>mosquito</b> = site of sexual reproduction (gamete fusion) and of the sporozoite-forming multiplication in the oocyst.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> The sporozoites that infect a human when a female <i>Anopheles</i> bites are located in the mosquito’s:<br><b>(a)</b> gut<br><b>(b)</b> salivary glands<br><b>(c)</b> Malpighian tubules<br><b>(d)</b> haemocoel',
        steps: [
          '<b>Worked answer:</b> Mature sporozoites migrate to and reside in the <b>salivary glands</b>, ready to be injected with the bite. The gut houses the oocyst stage; Malpighian tubules are excretory organs of insects.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>6. The Cancer Cell Property</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A statement about a property and the student must identify whether it belongs to normal or cancerous cells.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Anchor on two contrasts:<br>• Normal cells → contact inhibition (they stop dividing on touching neighbours).<br>• Cancer cells → loss of contact inhibition, uncontrolled division, metastasis.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> Which of the following is NOT a property of cancerous cells?<br><b>(a)</b> They divide in an uncontrolled manner.<br><b>(b)</b> They show contact inhibition.<br><b>(c)</b> They compete with normal cells for nutrients.<br><b>(d)</b> They do not remain confined to the area of formation.',
        steps: [
          '<b>Worked answer:</b> Contact inhibition is the brake that <b>normal</b> cells exhibit: they stop dividing when crowded. Cancer cells <b>lose</b> this property. Options (a), (c), and (d) are all true characteristics of cancer cells.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>7. The Transmission/Pathogen Route Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A symptom set or disease name paired with a transmission route.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Learn the five transmission buckets:<br>1. <b>Air/droplet</b> → common cold, pneumonia, diphtheria.<br>2. <b>Contaminated food/water</b> → typhoid, amoebiasis, ascariasis, hepatitis A.<br>3. <b>Insect vector</b> → malaria (<i>Anopheles</i>), filariasis (<i>Culex</i>), dengue/chikungunya (<i>Aedes</i>).<br>4. <b>Direct contact/soil</b> → ringworm.<br>5. <b>Blood/body fluids</b> → HIV, hepatitis B.<br>(A disease can have more than one route; for example HIV and hepatitis B also pass from mother to child.)',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> A patient shows stools with excess mucus and blood clots, abdominal pain and cramps. The most likely disease and its mode of transmission are:<br><b>(a)</b> Typhoid: contaminated food<br><b>(b)</b> Amoebiasis: contaminated food<br><b>(c)</b> Ascariasis: mosquito bite<br><b>(d)</b> Ringworm: direct contact',
        steps: [
          '<b>Worked answer:</b> Mucus-and-blood dysentery is the signature of <b>amoebiasis</b> (<i>Entamoeba histolytica</i>, large intestine), transmitted via contaminated food and water. Ascariasis is intestinal but presents with internal bleeding and blockage, not bloody stools.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>8. The Definition/Classification Gate</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A one-line definition and the student must identify the term.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> The WHO health definition and the infectious/non-infectious split are the two highest-frequency targets (the book’s estimate from past papers, not official figures). The exact wording matters.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Typical question:</b> According to the WHO, health is best described as:<br><b>(a)</b> absence of disease<br><b>(b)</b> a state of complete physical, mental and social well-being<br><b>(c)</b> strong immunity<br><b>(d)</b> freedom from infection',
        steps: [
          '<b>Worked answer:</b> The WHO definition explicitly includes <b>all three dimensions</b> (physical, mental, social) and explicitly rejects “absence of disease” as insufficient. Option (b) matches the WHO wording (the full WHO sentence ends “and not merely the absence of disease or infirmity”).',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'Why it works', 'How to avoid it'],
        rows: [
          [
            '“Male mosquito” for malaria',
            'Only the female <i>Anopheles</i> bites; exam writers swap in “male” as a distractor',
            'By reflex: any option naming a male mosquito as the vector of a mosquito-borne disease is wrong',
          ],
          [
            '“Contaminated water” for diphtheria',
            'Diphtheria is droplet-spread, not water-borne; students see “bacterial disease” and guess water',
            'Memorise the five transmission buckets; don’t guess',
          ],
          [
            'IgA = placenta',
            'Both involve mother-to-baby transfer; IgA is secreted into breast milk and does not cross the placenta',
            'IgG = placenta (in humans); IgA = colostrum/milk',
          ],
          [
            '“Active immunity acts immediately”',
            'Active is slow (body makes antibodies); only passive is fast',
            'Speed and durability trade off: active = slow + lasting; passive = fast + short',
          ],
          [
            '“Heroin = methylmorphine”',
            'Chemically it is diacetylmorphine (morphine acetylated at two hydroxyl groups); methylation is wrong (methylmorphine is codeine)',
            'Recall the specific reaction: acetylation of the two hydroxyl groups',
          ],
          [
            '“Cocaine from <i>Cannabis</i>”',
            'Wrong plant for the drug class',
            '<i>Cannabis</i> → cannabinoids; Coca → cocaine; Poppy → opioids',
          ],
          [
            '“Contact inhibition in cancer cells”',
            'Cancer cells lose contact inhibition; the statement is reversed',
            'The brake is lost; the spread (metastasis) is what they gain',
          ],
          [
            '“Reverse transcriptase makes DNA from DNA”',
            'HIV is a retrovirus: it makes DNA from RNA',
            'Retro = reverse: the first copy is DNA made from the viral RNA',
          ],
          [
            '“Sporozoite in the gut”',
            'The gut wall houses the oocyst, where sporozoites form, but they are released and stored in the salivary glands',
            'Associate sporozoite with the bite (salivary gland → human)',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Twelve questions in increasing order of difficulty; each answer is followed by its explanation.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Q1: Easy] The Widal test is used to confirm:<br><b>(a)</b> Tuberculosis<br><b>(b)</b> Typhoid<br><b>(c)</b> Plague<br><b>(d)</b> Tetanus',
            a: '<b>Answer:</b> (b)<br>The Widal test detects antibodies against <i>Salmonella typhi</i> in the blood. Tuberculosis is supported by the Mantoux test and confirmed by sputum smear or culture; plague by culture; tetanus by clinical signs (it is a clinical diagnosis).',
          },
          {
            q: '[Q2: Easy] Which of the following acts as a physiological barrier to the entry of microorganisms?<br><b>(a)</b> Skin<br><b>(b)</b> Tears<br><b>(c)</b> Epithelium of urogenital tract<br><b>(d)</b> Monocytes',
            a: '<b>Answer:</b> (b)<br>Tears (containing lysozyme) and saliva are physiological barriers: they act by chemical means. Skin is a physical barrier; urogenital epithelium is also physical. Monocytes are cellular barriers (phagocytes).',
          },
          {
            q: '[Q3: Medium] A person shows painful swelling of the parotid glands and difficulty in swallowing. The most likely disease is:<br><b>(a)</b> Mumps<br><b>(b)</b> Diphtheria<br><b>(c)</b> Tonsillitis<br><b>(d)</b> Hepatitis A',
            a: '<b>Answer:</b> (a)<br>Mumps is a viral disease (Paramyxovirus) that mainly affects the parotid salivary glands. Diphtheria affects the respiratory mucosa; tonsillitis involves the tonsils; hepatitis A targets the liver.',
          },
          {
            q: '[Q4: Medium] The sporozoites of the malarial parasite are found in:<br><b>(a)</b> Gut of the female <i>Anopheles</i> mosquito<br><b>(b)</b> Saliva of infected female <i>Anopheles</i> mosquito<br><b>(c)</b> Red blood corpuscles of humans<br><b>(d)</b> Spleen of infected humans',
            a: '<b>Answer:</b> (b)<br>Mature sporozoites reside in the salivary glands of the female <i>Anopheles</i> and are injected with the bite. RBCs contain the asexual blood stages (trophozoites, schizonts and merozoites) and the gametocytes (the sexual forms, which fuse only in the mosquito’s gut); the spleen filters infected RBCs but does not house sporozoites.',
          },
          {
            q: '[Q5: Medium] Which immunoglobulin is present in the highest concentration in human serum and can cross the placenta?<br><b>(a)</b> IgA<br><b>(b)</b> IgM<br><b>(c)</b> IgG<br><b>(d)</b> IgE',
            a: '<b>Answer:</b> (c)<br>IgG constitutes ~75–80% of serum immunoglobulins and is the only class that crosses the placenta in humans, providing passive immunity to the foetus. IgA is secretory; IgM is the first responder but does not cross the placenta.',
          },
          {
            q: '[Q6: Medium] A chronic smoker develops a tumour in the lung. Which of the following is a chemical carcinogen present in tobacco smoke?<br><b>(a)</b> Nicotine<br><b>(b)</b> Benzopyrene<br><b>(c)</b> Carbon monoxide<br><b>(d)</b> Ethanol',
            a: '<b>Answer:</b> (b)<br>Benzopyrene, a polycyclic aromatic hydrocarbon in cigarette smoke, damages DNA and can mutate growth-control genes (proto-oncogenes and tumour suppressor genes). Nicotine is the addictive alkaloid; CO reduces oxygen-carrying capacity; ethanol is the active constituent of alcoholic drinks, not a carcinogen of tobacco smoke.',
          },
          {
            q: '[Q7: Medium] A child is given an oral polio vaccine (OPV) at birth and a booster at 6 weeks. The same child, after a dog bite, is injected with anti-rabies serum. Which statement correctly classifies these two interventions?<br><b>(a)</b> Both are active immunity<br><b>(b)</b> Both are passive immunity<br><b>(c)</b> OPV is active; anti-rabies serum is passive<br><b>(d)</b> OPV is passive; anti-rabies serum is active',
            a: '<b>Answer:</b> (c)<br>OPV contains attenuated poliovirus: the body makes its own antibodies and memory cells (active, artificially acquired). Anti-rabies serum contains pre-formed antibodies harvested from immunised animals: immediate but short-lived (passive).',
          },
          {
            q: '[Q8: Hard] Assertion (A): Humans are resistant to most infectious diseases despite constant exposure to pathogens.<br>Reason (R): The innate immune system provides non-specific, always-active defence against a wide variety of pathogens.<br><b>(a)</b> Both A and R are true and R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
            a: '<b>Answer:</b> (a)<br>Humans possess innate immunity (physical barriers, phagocytes, interferons) that provides immediate, non-specific protection. This explains why we do not fall ill from every pathogen we encounter. Both statements are true and the reason directly explains the assertion. Innate immunity is a large part of the explanation (adaptive immunity and the narrow host range of most microbes also matter), so (a) is the intended answer.',
          },
          {
            q: '[Q9: Hard] AIDS patients mostly die of opportunistic infections and cancers rather than of direct killing by HIV. The biological reason is:<br><b>(a)</b> HIV is a weak virus that cannot kill directly<br><b>(b)</b> HIV destroys helper T-lymphocytes, collapsing adaptive immunity<br><b>(c)</b> Opportunistic pathogens are more virulent than HIV<br><b>(d)</b> HIV only attacks red blood cells',
            a: '<b>Answer:</b> (b)<br>HIV specifically targets and destroys CD4<sup>+</sup> helper T-cells, which coordinate both humoral and cell-mediated adaptive responses. When T<sub>H</sub> counts fall below a critical threshold, the body cannot mount effective responses against ordinary pathogens; hence opportunistic infections kill.',
          },
          {
            q: '[Q10: Hard] Assertion (A): Smoking causes oxygen deficiency in tissues even before any lung disease develops.<br>Reason (R): Carbon monoxide in tobacco smoke binds haemoglobin with higher affinity than oxygen, forming carboxyhaemoglobin.<br><b>(a)</b> Both A and R are true and R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
            a: '<b>Answer:</b> (a)<br>Carbon monoxide (CO) from smoke binds haemoglobin to form carboxyhaemoglobin, which cannot carry oxygen. This reduces tissue oxygen supply independent of any structural lung damage. Both statements are true and the reason directly explains the reduced oxygen delivery.',
          },
          {
            q: '[Q11: Hard] A patient with a transplanted kidney must take immunosuppressive drugs long-term. The type of immune response that causes graft rejection is:<br><b>(a)</b> Humoral immunity mediated by B-lymphocytes<br><b>(b)</b> Cell-mediated immunity mediated by T-lymphocytes<br><b>(c)</b> Innate immunity mediated by phagocytes<br><b>(d)</b> Passive immunity transferred from the donor',
            a: '<b>Answer:</b> (b)<br>Graft rejection is a cell-mediated immune response. T-lymphocytes recognise foreign MHC molecules on the transplanted tissue and mount a cytotoxic attack. B-cells produce antibodies but are not the primary mechanism of solid organ rejection.',
          },
          {
            q: '[Q12: Hard] Which of the following is NOT a property of cancerous cells?<br><b>(a)</b> Uncontrolled division<br><b>(b)</b> Contact inhibition<br><b>(c)</b> Competition with normal cells for nutrients<br><b>(d)</b> Metastasis',
            a: '<b>Answer:</b> (b)<br>Contact inhibition (the phenomenon by which normal cells stop dividing when they touch neighbours) is lost in cancer cells. This loss is the defining feature of malignant transformation. Options (a), (c), and (d) are all established properties of cancer cells.',
          },
        ],
      },
    ],
  },
];
