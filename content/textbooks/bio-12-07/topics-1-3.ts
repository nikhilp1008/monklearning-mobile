import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 7 (Human Health and Disease), Topics 01 to 03: pp. 352 to 371
 * of the Class 12 Biology Master Reference, word for word. The chapter title page
 * and contents (p. 351) are not copied. Topic 01 (Introduction: The Concept of
 * Health, pp. 352 to 354) has six parts and no Practice Exercises or Pitfalls part;
 * Topic 02 (Common Human Diseases, pp. 355 to 362) and Topic 03 (Immunology, AIDS
 * & Cancer, pp. 363 to 371) have the book's eight sections. The book's own
 * "subtopic 01/02/03" pointers are renumbered Topic 02/03/04 (the book's section
 * numbers 2/3/4). Figures 7.1 and 7.2 (captions p. 358, drawn p. 359), 7.3 and 7.4
 * (captions p. 364, drawn p. 365) and 7.5 (caption p. 367, drawn p. 368) are redrawn
 * in lib/diagrams/biology-12-07.ts. Emphasis italics are dropped; no em dashes.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 352–354 ─────────────────────────
  {
    n: '01',
    title: 'Introduction: The Concept of Health',
    kalam: 'Before we study what makes people ill, we have to be clear about what it means to be well.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The chapter’s framing section. CBSE Boards and CUET frequently open with a 1-mark question on the WHO definition of health or the infectious vs non-infectious classification; NEET occasionally tests “factors affecting health.” (These frequencies are the book’s estimate from past papers, not official figures.) Short, certain marks, and the vocabulary here (health, disease, pathogen, infectious) underpins every later section.',
      },
      {
        t: 'p',
        html: 'Before we study what makes people ill, we have to be clear about what it means to be well. In everyday speech “health” is taken to mean simply the absence of disease: if nothing hurts, you are healthy. The modern, and exam-correct, view is broader. The <b>World Health Organization (WHO) defines health as “a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity.”</b> Read that carefully: a person can be free of any infection and still not be healthy in the full sense, if they are mentally distressed or socially isolated.',
      },
      {
        t: 'p',
        html: 'A <b>disease</b>, by contrast, is any condition in which the functioning of one or more organs or systems of the body is adversely affected, marked by recognisable <b>signs and symptoms</b>. The moment normal functioning breaks down and the body signals it, we say a disease is present.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a cricket team. “Health” is not just every player being injury-free (physical); it is also the players being confident and focused (mental) and working together as a unit (social). A team can have eleven fit bodies and still play badly if morale or teamwork has collapsed. The WHO is saying the human body is exactly like that: well-being is physical, mental and social together.',
      },
      {
        t: 'p',
        html: 'What determines health? Three broad influences: <b>Genetic disorders</b>: deficiencies a child is born with, inherited from the parents; <b>Infections</b>: by the pathogens we study through this chapter; <b>Lifestyle</b>: the food and water we consume, rest and exercise, habits and routines.',
      },
      {
        t: 'p',
        html: 'And health can be actively built and protected: by a balanced diet, personal and public hygiene, regular exercise, awareness, and large-scale <b>vaccination/immunisation programmes</b> that have eradicated or controlled once-deadly diseases. Good health, in turn, raises productivity, lengthens life expectancy, and reduces infant and maternal mortality, which is why it is treated as a national priority, not just a personal one.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Don’t equate “not infected” with “healthy”: the WHO definition deliberately includes mental and social dimensions. Equally, not every disease is something you “catch”: a large class is <b>non-infectious</b> (genetic, lifestyle, degenerative), and the leading non-infectious causes of death include cardiovascular disease and cancer.',
      },

      { t: 'part', title: 'Key definitions and classification' },
      { t: 'p', html: 'The vocabulary that the rest of the chapter assumes:' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning'],
        rows: [
          ['<b>Health</b>', 'A state of complete physical, mental and social well-being (WHO), not merely the absence of disease'],
          ['<b>Disease</b>', 'Impaired functioning of body organs/systems, shown by signs and symptoms'],
          ['<b>Pathogen</b>', 'Any disease-causing organism (bacterium, virus, fungus, protozoan, worm)'],
          ['<b>Vector</b>', 'An organism that transmits a pathogen without itself causing the disease'],
          ['<b>Infectious / communicable disease</b>', 'One that spreads from person to person'],
          ['<b>Non-infectious / non-communicable disease</b>', 'One that does not spread between people'],
        ],
      },
      {
        t: 'p',
        html: '<b>The master classification of diseases</b>, the tree the whole chapter hangs on:',
      },
      {
        t: 'p',
        html: '• <b>Infectious (communicable)</b>: caused by pathogens and transmissible. These are the focus of Topic 02. Grouped by pathogen type: bacterial, viral, protozoan, helminthic, fungal.<br>• <b>Non-infectious (non-communicable)</b>: not transmissible. Includes:<br>   – <b>Genetic / congenital</b> (present from birth; e.g., sickle-cell anaemia)<br>   – <b>Degenerative / lifestyle</b> (e.g., heart disease, diabetes)<br>   – <b>Cancer</b>: a major non-infectious cause of death (Topic 03)<br>   – <b>Disorders linked to substance abuse</b> (Topic 04)',
      },
      {
        t: 'p',
        html: 'This single split (can it spread or not?) is the first question to ask about any disease named in an exam, and it routes you to the right body of knowledge in the sections that follow.',
      },

      { t: 'part', title: 'Mechanisms, cycles and pathways' },
      {
        t: 'p',
        html: 'Health is not a static state you either have or lack; it is a balance actively maintained against constant microbial and lifestyle pressure. The practical “mechanisms” of staying healthy fall into four levers:',
      },
      {
        t: 'p',
        html: '• <b>Balanced nutrition</b>: adequate, clean food and safe drinking water keep the body’s defences and repair systems supplied.<br>• <b>Hygiene: personal and public.</b> Personal hygiene (a clean body, safe food and water) blocks pathogen entry at the individual level; public hygiene (proper disposal of waste and excreta, periodic cleaning of water reservoirs, vector control) protects the whole community. Many infectious diseases are common precisely where public hygiene fails, in overcrowded, poorly sanitated settlements.<br>• <b>Awareness and lifestyle</b>: regular exercise, adequate rest, and informed choices (avoiding tobacco, alcohol and drug abuse) prevent the large non-infectious disease burden.<br>• <b>Immunisation</b>: vaccination programmes train the population’s immune memory in advance, and have driven the control or eradication of diseases such as smallpox and polio. (The biology of how a vaccine works is developed fully in Topic 03.)',
      },
      {
        t: 'p',
        html: 'Notice how each lever maps onto a later section: hygiene and vector control → the infectious diseases of Topic 02; immunisation → the immunity of Topic 03; avoiding substance abuse → Topic 04. The introduction is, in effect, a map of the whole chapter.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Definition.</b> Define health as given by the World Health Organization.',
        steps: [
          '<b>Answer.</b> Health is “<b>a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity.</b>” A full-mark answer must include all three dimensions (physical, mental, social) and the clarification that it is more than the absence of disease.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Classification.</b> Classify the following as infectious or non-infectious: (i) malaria, (ii) cancer, (iii) typhoid, (iv) sickle-cell anaemia.',
        steps: [
          '<b>Answer.</b> Infectious (communicable): <b>(i) malaria, (iii) typhoid</b>, both caused by transmissible pathogens. Non-infectious (non-communicable): <b>(ii) cancer</b> (lifestyle/genetic, a non-infectious disease) and <b>(iv) sickle-cell anaemia</b> (genetic/congenital).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'According to the WHO, health is best defined as:',
        opts: [
          {
            label: 'the absence of disease',
            nudge: '<b>(a)</b> and <b>(d)</b> capture only the physical/infection dimension, the classic trap, since “health = no disease” is the everyday (wrong) usage.',
          },
          { label: 'a state of complete physical, mental and social well-being', nudge: null },
          { label: 'the presence of strong immunity', nudge: '<b>(c)</b> immunity is one contributor, not the definition.' },
          {
            label: 'freedom from infection',
            nudge: '<b>(a)</b> and <b>(d)</b> capture only the physical/infection dimension, the classic trap, since “health = no disease” is the everyday (wrong) usage.',
          },
        ],
        correct: 1,
        solution: 'The WHO definition is deliberately broad.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is a non-infectious disease?',
        opts: [
          {
            label: 'Typhoid',
            nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all infectious (bacterial, protozoan, fungal respectively), chosen by students who forget that “disease” is not synonymous with “infection.”',
          },
          { label: 'Cancer', nudge: null },
          {
            label: 'Amoebiasis',
            nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all infectious (bacterial, protozoan, fungal respectively), chosen by students who forget that “disease” is not synonymous with “infection.”',
          },
          {
            label: 'Ringworm',
            nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all infectious (bacterial, protozoan, fungal respectively), chosen by students who forget that “disease” is not synonymous with “infection.”',
          },
        ],
        correct: 1,
        solution: 'Cancer does not spread person-to-person.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Health (WHO)', note: 'complete physical, mental and social well-being, not merely the absence of disease.' },
          { f: 'Disease', note: 'impaired organ/system function shown by signs and symptoms.' },
          { f: 'Factors affecting health', note: 'genetic disorders · infections · lifestyle (diet, rest, habits).' },
          {
            f: 'Two great classes',
            note: 'Infectious/communicable (pathogen-borne, spreadable → Topic 02) vs Non-infectious/non-communicable (genetic, lifestyle, cancer, substance-abuse → Topics 03–04).',
          },
          { f: 'Maintaining health', note: 'balanced diet · personal & public hygiene · awareness/lifestyle · immunisation.' },
        ],
        aids: ['One-liner: “No germ ≠ healthy”, the WHO bar is physical + mental + social.'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 355–362 ─────────────────────────
  {
    n: '02',
    title: 'Common Human Diseases',
    kalam: 'Infectious diseases are organised by the kind of pathogen.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial high-yield topic. NEET asks 2–3 direct questions every year (disease–pathogen–vector matching, the <i>Plasmodium</i> life cycle, and diagnostic tests). CUET and CBSE Boards favour the disease tables and short “name the causative organism / confirmatory test” questions. The factual density here is high and the conceptual depth is low, so it is among the cheapest marks in the syllabus to lock down. (The frequency stated here is the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'Imagine your body as a walled city. Most of the time the gates hold, trade flows, and life is ordinary. A <b>disease</b> is what happens when that ordinary functioning breaks down: when one or more organs stop doing their job properly and the body announces the trouble through signs and symptoms. Diseases come in two broad families. <b>Non-infectious diseases</b> (cancer, diabetes, most genetic disorders) arise from within (oncogenic viruses are the cause of some cancers) and do not jump from person to person. <b>Infectious diseases</b>, our concern here, are caused by an invader, a living organism that gets inside the city walls and disrupts things. These are also called communicable or transmissible diseases, because they spread.',
      },
      {
        t: 'p',
        html: 'The invader has a name: a <b>pathogen</b>. A pathogen is any disease-causing organism, a bacterium, virus, fungus, protozoan, or worm (helminth). Crucially, most pathogens are <b>parasites</b>: they harm the host simply by living in or on it, stealing resources and damaging tissue as a by-product of their own survival.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the Indian railway network during a festival rush. The pathogen is the troublemaker who wants to reach a distant town. Sometimes the troublemaker walks in directly (you inhale a cough droplet). But sometimes they cannot make the journey alone and need a carrier: a train, a ticket, a courier. That courier is the <b>vector</b>: an organism (very often an insect) that does not cause the disease itself but ferries the pathogen from a sick person to a healthy one. The female <i>Anopheles</i> mosquito is the classic vector: she carries malaria from person to person without being made ill by it (for <i>Plasmodium</i> she is also a host, as the life cycle will show).',
      },
      { t: 'p', html: 'Three ideas anchor the whole topic, so fix them now:' },
      {
        t: 'p',
        html: '• <b>Host</b>: the organism the pathogen lives in (usually the human; for <i>Plasmodium</i> the mosquito is a host too).<br>• <b>Pathogen</b>: the organism that causes the disease.<br>• <b>Vector</b>: the organism that carries the pathogen from one host to another (and does not itself suffer the disease).',
      },
      {
        t: 'p',
        html: 'A pathogen must adapt to survive inside the host. A gut pathogen like <i>Salmonella</i> must withstand stomach acid and digestive enzymes to reach the intestine, which is why typhoid spreads through contaminated food and water (swallowed) rather than through the air.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two traps hide in this “war” picture. First, not every microbe is a pathogen: your gut teems with harmless and even helpful bacteria; the label “pathogen” applies only when harm results. Second, a person can carry and spread a pathogen without looking sick at all. The infamous “Typhoid Mary” (Mary Mallon, a cook) infected many people while remaining apparently healthy, a <b>carrier</b>. So “no symptoms” does not mean “no infection,” and this carrier state is exactly why public hygiene, not just personal hygiene, matters.',
      },

      { t: 'part', title: 'Key definitions and classification' },
      {
        t: 'p',
        html: 'Infectious diseases are organised by the kind of pathogen. A table the exam often draws on is the disease ↔ pathogen ↔ transmission ↔ symptom grid. (This is the book’s view, not an official figure.) Learn it as a grid, not as a paragraph.',
      },
      {
        t: 'table',
        title: 'Bacterial diseases',
        head: ['Disease', 'Causative organism', 'Mainly affects', 'Key symptoms', 'Transmission / Diagnosis'],
        rows: [
          [
            'Typhoid',
            '<i>Salmonella typhi</i>',
            'Small intestine',
            'Sustained high fever (39–40 °C), weakness, stomach pain, constipation, headache; intestinal perforation in severe cases',
            'Contaminated food & water → intestine → blood. <b>Widal test</b> confirms.',
          ],
          [
            'Pneumonia',
            '<i>Streptococcus pneumoniae</i>, <i>Haemophilus influenzae</i>',
            'Alveoli of lungs',
            'Fever, chills, cough, headache; lips and nail-beds turn grey-to-bluish in severe cases',
            'Inhaling droplets/aerosols; sharing utensils with an infected person',
          ],
          ['Plague', '<i>Yersinia pestis</i>', 'Lymph nodes', 'Fever, painful buboes', '(Rat-flea vector)'],
          ['Diphtheria', '<i>Corynebacterium diphtheriae</i>', 'Upper respiratory mucosa', 'Difficulty breathing', 'Respiratory route'],
        ],
      },
      {
        t: 'table',
        title: 'Viral disease',
        head: ['Disease', 'Causative organism', 'Affects', 'Key symptoms'],
        rows: [
          [
            'Common cold',
            'Rhinoviruses',
            'Nose & respiratory passage (<b>not</b> the lungs)',
            'Nasal congestion & discharge, sore throat, hoarseness, cough, headache; lasts 3–7 days',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Protozoan diseases',
        head: ['Disease', 'Causative organism', 'Vector', 'Affects', 'Key symptoms'],
        rows: [
          [
            'Malaria',
            '<i>Plasmodium vivax</i>, <i>P. malariae</i>, <i>P. falciparum</i> and <i>P. ovale</i>',
            'Female <i>Anopheles</i> mosquito',
            'RBCs & liver',
            'Recurring chills & high fever; <i>P. falciparum</i> causes the malignant, sometimes fatal form',
          ],
          [
            'Amoebiasis (amoebic dysentery)',
            '<i>Entamoeba histolytica</i>',
            'Houseflies (mechanical)',
            'Large intestine',
            'Constipation, abdominal pain & cramps, stools with excess mucus and blood clots',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Helminthic (worm) diseases',
        head: ['Disease', 'Causative organism', 'Vector', 'Affects', 'Key symptoms'],
        rows: [
          [
            'Ascariasis',
            '<i>Ascaris lumbricoides</i> (roundworm)',
            'None (contaminated food/water/soil)',
            'Intestine',
            'Internal bleeding, muscular pain, fever, anaemia, intestinal blockage',
          ],
          [
            'Filariasis (elephantiasis)',
            '<i>Wuchereria bancrofti</i>, <i>W. malayi</i>',
            'Female <i>Culex</i> mosquito',
            'Lymphatic vessels',
            'Chronic inflammation of lymphatic vessels → gross deformity of limbs/genitals',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Fungal disease',
        head: ['Disease', 'Causative organism', 'Affects', 'Key symptoms'],
        rows: [
          [
            'Ringworm',
            '<i>Microsporum</i>, <i>Trichophyton</i>, <i>Epidermophyton</i>',
            'Skin, nails, scalp',
            'Dry, scaly lesions with intense itching; thrives in heat & moisture (skin folds)',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Insect-vector cheat-grid (a common NEET trap)',
        head: ['Vector (female)', 'Disease(s) carried'],
        rows: [
          ['<i>Anopheles</i>', 'Malaria (<i>Plasmodium</i>)'],
          ['<i>Culex</i>', 'Filariasis (<i>Wuchereria</i>)'],
          ['<i>Aedes</i>', 'Dengue, chikungunya, yellow fever (all viral)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Disease classification.</b> Diseases split into communicable/infectious (transferred between people) and non-communicable/non-infectious (e.g., cancer, a major non-infectious cause of death). A parallel axis runs congenital (present from birth: mutation, chromosomal aberration; e.g., sickle-cell anaemia, Down syndrome) versus acquired (developed after birth, not inherited). Note one elegant evolutionary link: a person with <b>sickle-cell trait</b> (a carrier, heterozygous) <b>is less prone to severe malaria</b>, because the parasite fares poorly in sickled RBCs. (Homozygous sickle-cell anaemia is itself a severe disease.)',
      },

      { t: 'part', title: 'Mechanisms, cycles and pathways' },
      {
        t: 'p',
        html: 'For most diseases the mechanism is a three-beat rhythm: <b>entry → multiplication → damage.</b> The pathogen enters by a specific route (gut for typhoid, respiratory tract for the common cold, a mosquito bite for malaria), multiplies in a preferred tissue, and the damage, plus the body’s own response, produces the symptoms. Below is the one mechanism the exams treat as a “derivation”: the malaria life cycle.',
      },
      { t: 'p', html: '<b>The <i>Plasmodium</i> life cycle (the marquee mechanism)</b>' },
      {
        t: 'p',
        html: 'Malaria is <b>digenetic</b>; the parasite needs two hosts to complete its life cycle: the human (where it reproduces asexually) and the female <i>Anopheles</i> mosquito (where it reproduces sexually). Trace the loop step by step:',
      },
      {
        t: 'p',
        html: '1. <b>Bite: sporozoites injected.</b> An infected female <i>Anopheles</i> bites a person; the infective stage, the <b>sporozoite</b>, passes from the mosquito’s salivary glands into human blood.<br>2. <b>Liver phase.</b> Sporozoites travel via blood to the <b>liver</b>, where they multiply asexually inside liver cells (schizogony), then burst out as <b>merozoites</b>.<br>3. <b>Blood phase.</b> Merozoites invade <b>red blood cells</b>, multiply, and rupture the RBCs in synchronised waves. Each rupture releases a toxic pigment, <b>haemozoin</b>, which triggers the characteristic recurring <b>chills and high fever</b>. (This asexual blood multiplication is schizogony, a form of multiple fission.)<br>4. <b>Gametocytes formed.</b> Some parasites in RBCs become sexual forms, the <b>gametocytes</b>.<br>5. <b>Uptake by the mosquito and fertilisation.</b> When another female <i>Anopheles</i> takes a blood meal, she ingests the gametocytes; in her gut the gametes fuse, and the motile zygote (<b>ookinete</b>) forms an oocyst in the gut wall.<br>6. <b>Sporozoites ready.</b> The oocyst releases new sporozoites, which migrate to the <b>salivary glands</b>, ready for the next bite, closing the loop.',
      },
      {
        t: 'p',
        html: 'Two memory hooks worth fixing: the human is the <b>secondary/intermediate host</b>, the mosquito the <b>primary host</b> (because sexual reproduction defines the primary host); and the <b>infective stage for humans is the sporozoite</b>, not the merozoite.',
      },
      { t: 'fig', id: 'b12-07-fig-7.1' },
      { t: 'p', html: '<b>Transmission routes at a glance</b>' },
      { t: 'fig', id: 'b12-07-fig-7.2' },
      { t: 'p', html: '<b>Prevention & control: the common logic</b>' },
      {
        t: 'p',
        html: 'Whatever the pathogen, control attacks the chain of transmission: maintain personal hygiene (clean body, safe drinking water and food) and public hygiene (proper disposal of waste and excreta, periodic cleaning of water reservoirs). For vector-borne diseases, add vector control: eliminate breeding sites of mosquitoes, use nets and repellents, and introduce larvivorous fish such as <i>Gambusia</i> into ponds to eat mosquito larvae. Vaccination/immunisation and timely drugs/antibiotics complete the toolkit. Notice the strategy mirrors the mechanism: break entry, break multiplication, break the vector.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Direct recall, clean presentation.</b> Name the causative organism and the confirmatory diagnostic test for typhoid. State its mode of transmission.',
        steps: [
          '<b>Reasoning & answer.</b> Typhoid is a bacterial disease. (1) Causative organism: <i>Salmonella typhi</i>. (2) Confirmatory test: the Widal test (based on antigen–antibody interaction). (3) Transmission: through food and water contaminated with the bacterium, which enters via the small intestine and spreads through the blood.',
          'A clean board answer states all three points explicitly: examiners award marks point-wise.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> Match Column I (disease) with Column II (causative organism).<br>Column I: A. Elephantiasis; B. Amoebiasis; C. Ringworm; D. Malignant malaria<br>Column II: 1. <i>Entamoeba histolytica</i>; 2. <i>Wuchereria bancrofti</i>; 3. <i>Plasmodium falciparum</i>; 4. <i>Microsporum</i>',
        steps: [
          '<b>Reasoning & answer.</b> Elephantiasis = filariasis = <i>Wuchereria</i> → A–2. Amoebiasis is a protozoan gut disease → B–1. Ringworm is fungal → C–4. Malignant (the most serious, sometimes fatal) malaria is <i>P. falciparum</i> → D–3.',
        ],
        ans: 'A–2, B–1, C–4, D–3.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> A person with sickle-cell trait (a carrier) is less prone to severe malaria. <b>Reason (R):</b> <i>Plasmodium</i> completes its asexual cycle inside red blood cells. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is NOT the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer.</b> A is true: in a carrier the parasite does poorly in the sickling RBCs, so the person resists severe malaria. R is also true: <i>Plasmodium</i> multiplies asexually in RBCs (and liver). And R explains A: precisely because the parasite depends on RBCs, an RBC defect that disrupts that environment confers protection.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-step diagram-ID.</b> In the <i>Plasmodium</i> life cycle, four events are labelled: (A) sporozoites in mosquito salivary glands, (B) asexual multiplication releasing merozoites, (C) gametocytes in RBCs, (D) fusion of gametes. Arrange them in the order they occur, starting from a healthy person being bitten, and name the host (human/mosquito) for each.',
        steps: [
          '<b>Reasoning & answer.</b> Start at the bite: the mosquito delivers sporozoites (A is the source stage, in the salivary glands). Once in the human, the parasite first multiplies asexually → merozoites (B, human: liver then RBC). Inside RBCs, some become gametocytes (C, human). A mosquito then ingests these; gametes fuse in its gut (D, mosquito). New sporozoites form and return to the salivary glands (A, mosquito), completing the loop.',
          'The high-difficulty trap is mislabelling the site of asexual vs sexual reproduction: asexual is in the human, sexual in the mosquito; reverse them and every downstream answer collapses.',
        ],
        ans: 'A (mosquito) → B (human) → C (human) → D (mosquito), then back to A for the next bite.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between a pathogen and a vector, giving one example of each.',
            a: 'Pathogen causes disease (e.g., <i>Salmonella typhi</i>); vector only transmits it without causing it (e.g., female <i>Anopheles</i>).',
          },
          {
            q: '[CUET] Name the mosquito vector and the causative organism for: (i) malaria, (ii) filariasis, (iii) dengue.',
            a: '(i) <i>Anopheles</i> / <i>Plasmodium</i>; (ii) <i>Culex</i> / <i>Wuchereria</i>; (iii) <i>Aedes</i> / dengue virus.',
          },
          {
            q: '[NEET] Why does the common cold not infect the lungs, and how does this distinguish it symptomatically from pneumonia?',
            a: 'Rhinoviruses infect the nose and respiratory passage but not the lungs (alveoli), giving nasal/throat symptoms; pneumonia infects the alveoli, impairing gas exchange (fever, chills, grey-bluish lips/nails).',
          },
          {
            q: '[NEET] Name the toxic substance responsible for the recurring fever in malaria, and explain the event that releases it.',
            a: 'Haemozoin, released when parasitised RBCs rupture.',
          },
          {
            q: '[NEET high-difficulty] <i>Microsporum</i> causes ringworm. To which biological kingdom does it belong, and name one other organism from the same kingdom that is not a ringworm pathogen.',
            a: 'Kingdom Fungi; e.g., <i>Rhizopus</i> (a mould): same kingdom, not a ringworm agent.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The sporozoites that infect a human when a female <i>Anopheles</i> bites are located in the mosquito’s:',
        opts: [
          { label: 'gut', nudge: '<b>(a)</b> the gut is where the sexual phase and zygote/oocyst occur, not the infective stage: a very common mix-up.' },
          { label: 'salivary glands', nudge: null },
          { label: 'Malpighian tubules', nudge: '<b>(c)</b> Malpighian tubules are excretory organs of insects, irrelevant here (a cockroach/anatomy distractor).' },
          { label: 'haemolymph', nudge: '<b>(d)</b> “haemolymph” sounds technical but is not where the infective stage concentrates.' },
        ],
        correct: 1,
        solution: 'Mature, infective sporozoites migrate to the salivary glands, which is why they enter with the bite.',
      },
      {
        t: 'mcq',
        q: 'Which one is correctly matched (disease, organism, mode of transmission)?',
        opts: [
          { label: 'Typhoid, <i>Salmonella typhi</i>, inspired air', nudge: '<b>(a)</b> wrong mode: typhoid spreads by contaminated food/water, not air.' },
          { label: 'Pneumonia, <i>Streptococcus pneumoniae</i>, droplet infection', nudge: null },
          { label: 'Elephantiasis, <i>Wuchereria bancrofti</i>, contaminated food', nudge: '<b>(c)</b> wrong mode: filariasis is vector-borne (<i>Culex</i>), not food-borne.' },
          {
            label: 'Malaria, <i>Plasmodium vivax</i>, bite of male <i>Anopheles</i>',
            nudge: '<b>(d)</b> wrong vector sex: only the female <i>Anopheles</i> bites and transmits: the “male mosquito” swap is a common malaria trap.',
          },
        ],
        correct: 1,
        solution: 'Pneumonia spreads by inhaling droplets/aerosols: all three terms match.',
      },
      {
        t: 'mcq',
        q: 'A patient shows stools with excess mucus and blood clots, abdominal pain and cramps. The most likely disease and organ affected are:',
        opts: [
          {
            label: 'typhoid, small intestine',
            nudge: '<b>(a)</b> typhoid affects the small intestine but presents with constipation and sustained fever, not bloody dysentery.',
          },
          { label: 'amoebiasis, large intestine', nudge: null },
          {
            label: 'ascariasis, liver',
            nudge: '<b>(c)</b> ascariasis affects the intestine (not liver) with bleeding/anaemia/blockage: chosen by students who only register “worm + intestine.”',
          },
          { label: 'ringworm, skin', nudge: '<b>(d)</b> ringworm is a skin disease with no intestinal symptoms.' },
        ],
        correct: 1,
        solution: 'Mucus-and-blood stools with cramps are the signature of amoebiasis (<i>Entamoeba histolytica</i>), a parasite of the large intestine.',
      },
      {
        t: 'mcq',
        q: 'Which set is caused entirely by bacteria?',
        opts: [
          { label: 'Typhoid, pneumonia, diphtheria', nudge: null },
          { label: 'Malaria, amoebiasis, ringworm', nudge: '<b>(b)</b> mixes two protozoan diseases and a fungal one.' },
          {
            label: 'Common cold, typhoid, pneumonia',
            nudge: '<b>(c)</b> sneaks in the viral common cold: a classic trap because pneumonia and cold both hit the respiratory tract.',
          },
          {
            label: 'Filariasis, plague, ascariasis',
            nudge: '<b>(d)</b> mixes a helminth (filariasis), a bacterium (plague) and another helminth (ascariasis).',
          },
        ],
        correct: 0,
        solution: 'Typhoid, pneumonia and diphtheria are all bacterial.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Male vs female mosquito.”</b> Only the female mosquito bites and transmits (she needs a blood meal for her eggs), so any option naming a male mosquito vector is wrong.',
          '<b>Confusing the infective stage.</b> For humans the infective stage is the sporozoite (from salivary glands), not the merozoite. Merozoites are the internal multiplying stage.',
          '<b>Swapping where reproduction happens.</b> <i>Plasmodium</i> reproduces asexually in humans and sexually in the mosquito → mosquito is the primary host. Reversing this is a serious error to avoid.',
          '<b>Common cold vs pneumonia.</b> Cold = viral, nose/respiratory passage, not the lungs; pneumonia = bacterial, alveoli. Don’t let “respiratory” blur them.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Memorise diseases by pathogen-kind columns (bacterial / viral / protozoan / helminthic / fungal) rather than alphabetically. In a match-column question, first sort each option into its kingdom: wrong-kingdom pairs eliminate themselves in seconds, often leaving only one viable answer without any deeper recall.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Pathogen causes disease; vector only carries it; host harbours it. Female <i>Anopheles</i>, <i>Culex</i> and <i>Aedes</i> are the mosquito vectors (the housefly carries amoebiasis mechanically).', note: '' },
          {
            f: 'Bacterial',
            note: 'Typhoid (<i>Salmonella typhi</i>, Widal test, small intestine) · Pneumonia (<i>Streptococcus pneumoniae</i> / <i>Haemophilus influenzae</i>, alveoli) · Plague (<i>Yersinia pestis</i>) · Diphtheria (<i>Corynebacterium diphtheriae</i>).',
          },
          { f: 'Viral', note: 'Common cold (rhinoviruses, nose/passage, not lungs).' },
          {
            f: 'Protozoan',
            note: 'Malaria (<i>Plasmodium</i>; <i>P. falciparum</i> = malignant; vector <i>Anopheles</i>; toxin haemozoin) · Amoebiasis (<i>Entamoeba histolytica</i>, large intestine).',
          },
          {
            f: 'Helminthic',
            note: 'Ascariasis (<i>Ascaris lumbricoides</i>) · Filariasis/elephantiasis (<i>Wuchereria</i>, vector <i>Culex</i>, lymphatic vessels).',
          },
          { f: 'Fungal', note: 'Ringworm (<i>Microsporum</i> / <i>Trichophyton</i> / <i>Epidermophyton</i>; skin/nails/scalp).' },
          {
            f: 'Malaria loop',
            note: 'bite → sporozoite → liver (asexual) → RBC (asexual, fever ← haemozoin) → gametocytes → mosquito gut (sexual) → salivary glands.',
          },
          { f: 'Control = break the chain', note: 'personal + public hygiene, vector eradication, <i>Gambusia</i> fish, vaccination, drugs.' },
        ],
        aids: [
          '<i>Anopheles</i>–mAlaria, <i>Culex</i>–eleCephantiasis (filariasis), <i>Aedes</i>–DenguechikYellow.',
          '“Sporozoite IN, gametocyte OUT (to the mosquito).”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 363–371 ─────────────────────────
  {
    n: '03',
    title: 'Immunology, AIDS & Cancer',
    kalam: 'Immunity is simply the body’s ability to fight disease-causing agents.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The single densest scoring block of the chapter. NEET reliably pulls 3–4 questions (antibody classes, the innate-vs-acquired and active-vs-passive distinctions, the HIV replication sequence, and cancer cell properties). CBSE Boards favour short-answer on immunity types and the HIV/cancer mechanisms; CUET leans on the definition tables. Almost pure recall once the frameworks are organised. (The frequency stated here is the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'Topic 02 introduced the invaders. This topic is about the defenders, and about the two ways the story can go catastrophically wrong. First, the body’s defence system, <b>immunity</b>, which fights pathogens off. Second, <b>AIDS</b>, what happens when a virus destroys that very defence system. Third, <b>cancer</b>, what happens when the body’s own cells stop obeying the rules of growth. Defence, defence-destroyed, growth-out-of-control: hold those three arcs in mind and the whole topic organises itself.',
      },
      {
        t: 'p',
        html: 'Immunity is simply the body’s ability to fight disease-causing agents. It comes in two grand types. <b>Innate immunity</b> is the security you are born with: non-specific, always on, the same response to every intruder. Think of it as the outer wall and the standing guards: skin and mucous membranes (physical barriers), stomach acid and tears (physiological barriers), phagocytes like macrophages and neutrophils that eat anything foreign (cellular barriers), and interferons (cytokine barriers). <b>Acquired (adaptive) immunity</b> is the intelligence service you develop over a lifetime: specific, learned, and crucially, it remembers. It is built on two cell armies: <b>B-lymphocytes</b>, which manufacture antibodies (proteins that lock onto a specific antigen), and <b>T-lymphocytes</b>, which do not make antibodies themselves but help the B-cells and directly kill infected or foreign cells.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> acquired immunity is like a city that keeps a photo album of every criminal it has ever caught. The first time a pathogen attacks (the <b>primary response</b>), the response is slow: the immune system is meeting the stranger for the first time. But it files away memory cells. The next time that same pathogen appears (the <b>secondary response</b>), recognition is instant and the counter-attack is overwhelming. Vaccination is nothing more than showing the city a mugshot in advance: a weakened or inactivated pathogen that trains memory cells without causing disease, so the real attack meets a prepared defender.',
      },
      {
        t: 'p',
        html: 'Now the two failures. <b>AIDS</b> (Acquired Immuno Deficiency Syndrome) is what happens when the defenders themselves are hunted down: the virus HIV specifically destroys <b>helper T-lymphocytes</b>, so the immune system collapses and the patient dies not of HIV directly but of ordinary infections it can no longer fight. <b>Cancer</b> is a different betrayal: not an outside invader at all, but the body’s own cells losing the brake called <b>contact inhibition</b> and dividing without limit.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three traps. (1) <b>Active vs passive:</b> active immunity is earned (your body makes the antibodies, slow but long-lasting); passive immunity is borrowed (antibodies handed to you ready-made: colostrum, anti-tetanus injection; fast but short-lived). Don’t confuse the speed/durability trade-off. (2) <b>Not every tumour is cancer:</b> benign tumours stay put and usually do little harm (some, for example in the brain, can still be dangerous); only malignant tumours invade and spread (metastasis). (3) <b>AIDS is a syndrome of deficiency,</b> not a disease that kills by itself; the lethality is indirect.',
      },

      { t: 'part', title: 'Key definitions and classification' },
      { t: 'p', html: '<b>Immunity: the master tree</b>' },
      { t: 'fig', id: 'b12-07-fig-7.3' },
      { t: 'p', html: 'Innate immunity rests on <b>four barrier types</b>, a common one-mark target:' },
      {
        t: 'p',
        html: '• <b>Physical barriers</b>: the skin, and the mucus coating lining the respiratory, gastrointestinal and urogenital tracts, which physically block microbial entry.<br>• <b>Physiological barriers</b>: acid in the stomach, saliva in the mouth, tears from the eyes; their chemistry stops microbial growth.<br>• <b>Cellular barriers</b>: phagocytic leucocytes such as <b>neutrophils (PMNLs)</b> and <b>macrophages</b>, plus <b>natural killer (NK)</b> cells, which engulf and destroy intruders.<br>• <b>Cytokine barriers</b>: virus-infected cells secrete <b>interferons</b>, proteins that warn and protect neighbouring uninfected cells from further viral attack.',
      },
      {
        t: 'p',
        html: 'A useful framing: innate immunity is the body’s standing “lines of defence”: the skin/mucosa form the first line, and the phagocytes, NK cells and interferons form the second line. If these non-specific defences do not clear the invader, the specific, memory-bearing acquired system takes over and builds on them.',
      },
      {
        t: 'p',
        html: 'Acquired immunity is further split by which cell does the work: (i) <b>Humoral (antibody-mediated) immunity</b>, run by <b>B-lymphocytes,</b> which secrete antibodies into blood and lymph (the “humors”, i.e., body fluids); (ii) <b>Cell-mediated immunity (CMI)</b>, run by <b>T-lymphocytes,</b> which mature in the thymus, discriminate self from non-self, and are mainly responsible for <b>graft/transplant rejection</b>.',
      },
      { t: 'p', html: '<b>Antibody structure & the five classes</b>' },
      {
        t: 'p',
        html: 'Every antibody (immunoglobulin, Ig) is built from <b>four polypeptide chains</b>: two short <b>light chains</b> and two long <b>heavy chains</b>, held by disulphide bonds, written <b>H<sub>2</sub>L<sub>2</sub></b>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Class', 'Key feature'],
        rows: [
          ['<b>IgG</b>', 'Most abundant (~75–80%); <b>the only Ig that crosses the placenta</b> (natural passive immunity to the foetus)'],
          ['<b>IgM</b>', '<b>First</b> antibody produced on encountering an antigen; pentamer; ABO transfusion reactions'],
          ['<b>IgA</b>', 'Found in <b>colostrum</b>, saliva, tears, mucus; secretory; protects the newborn'],
          ['<b>IgE</b>', 'Mediates <b>allergic reactions</b> (binds mast cells/basophils)'],
          ['<b>IgD</b>', 'Antigen-recognition receptor on B lymphocytes'],
        ],
      },
      { t: 'fig', id: 'b12-07-fig-7.4' },
      { t: 'p', html: '<b>Related immune phenomena</b>' },
      {
        t: 'p',
        html: '• <b>Vaccination/Immunisation:</b> introduce a weakened/inactivated (attenuated) pathogen → body mounts a primary response and stores memory cells. For a quick need (tetanus, snakebite), inject pre-formed antibodies/antitoxin = <b>passive immunisation</b>. (Modern note: hepatitis-B vaccine is made by rDNA technology in yeast.)<br>• <b>Allergy:</b> an exaggerated immune response to harmless environmental allergens (pollen, dust, animal dander, drugs). Mast cells release histamine; IgE mediates it.<br>• <b>Autoimmunity:</b> the immune system fails to tell self from non-self and attacks the body’s own cells, e.g., rheumatoid arthritis.<br>• <b>Lymphoid organs:</b> <b>Primary</b> (where lymphocytes form/mature) = bone marrow and thymus (large at birth, shrinks after puberty). <b>Secondary</b> (where lymphocytes meet antigen) = spleen, lymph nodes, tonsils, appendix, Peyer’s patches, MALT (MALT ≈ 50% of the body’s lymphoid tissue).',
      },
      { t: 'p', html: '<b>AIDS at a glance</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Fact'],
        rows: [
          ['<b>Pathogen</b>', 'HIV (Human Immunodeficiency Virus), a retrovirus with single-stranded RNA'],
          ['<b>Key enzyme</b>', 'Reverse transcriptase (makes DNA from viral RNA)'],
          ['<b>Cells attacked</b>', 'Macrophages (“HIV factory”) then helper T-lymphocytes (T<sub>H</sub>)'],
          ['<b>Transmission</b>', 'Sexual contact; contaminated blood transfusion; shared infected needles; infected mother → child (placenta)'],
          ['<b>Not transmitted by</b>', 'Casual contact (handshakes, sharing meals, hugging)'],
          ['<b>Diagnosis</b>', 'ELISA (antigen–antibody based)'],
          ['<b>Treatment</b>', 'Anti-retroviral drugs, only partially effective (prolong life, no cure)'],
          ['<b>Prevention</b>', 'NACO education, safe blood banks, disposable needles, awareness'],
        ],
      },
      { t: 'p', html: '<b>Cancer at a glance</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Fact'],
        rows: [
          ['<b>Core defect</b>', 'Loss of contact inhibition → uncontrolled division → tumour'],
          ['<b>Benign tumour</b>', 'Stays in original location; little harm'],
          ['<b>Malignant tumour</b>', 'Neoplastic cells; invade tissues; metastasis (spread via blood and lymph to distant sites)'],
          ['<b>Carcinogens: physical</b>', 'Ionizing (X-rays, γ-rays); non-ionizing (UV) → DNA damage'],
          ['<b>Carcinogens: chemical</b>', 'Cigarette smoke (e.g., benzopyrene) (lung cancer)'],
          ['<b>Carcinogens: biological</b>', 'Oncogenic viruses (carry viral oncogenes)'],
          [
            '<b>Genetic basis</b>',
            'Normal cells carry proto-oncogenes (cellular oncogenes) in an inactive state; mutation converts them into active oncogenes',
          ],
          ['<b>Detection</b>', 'Biopsy, blood/bone-marrow tests, radiography, CT, MRI, monoclonal antibodies'],
          ['<b>Treatment</b>', 'Surgery, radiation therapy, chemotherapy, immunotherapy (α-interferon)'],
        ],
      },

      { t: 'part', title: 'Mechanisms, cycles and pathways' },
      { t: 'p', html: '<b>The HIV replication cycle (the marquee mechanism)</b>' },
      {
        t: 'p',
        html: 'This is the AIDS equivalent of the <i>Plasmodium</i> life cycle, a diagram the exam often uses. Trace it:',
      },
      {
        t: 'p',
        html: '1. <b>Entry.</b> HIV enters the bloodstream and infects a macrophage.<br>2. <b>Reverse transcription.</b> Inside the cell, the viral enzyme <b>reverse transcriptase</b> copies the viral RNA into DNA (the reverse of normal transcription, hence <b>retrovirus</b>).<br>3. <b>Integration.</b> This viral DNA inserts into the host cell’s genome and directs the cell to manufacture new virus particles. The macrophage now behaves as an “HIV factory”, churning out virus without itself dying immediately.<br>4. <b>T-cell invasion.</b> New virus particles attack helper T-lymphocytes (T<sub>H</sub>), replicate inside them, and progressively destroy them.<br>5. <b>Immune collapse.</b> As T<sub>H</sub> numbers fall, immunity fails. The patient succumbs to <b>opportunistic infections</b> (e.g., <i>Mycobacterium</i>, <i>Toxoplasma</i>, fungi) and shows fever, diarrhoea, weight loss. A long time-lag (usually about 5–10 years; in some people a few months to many years) separates infection from full AIDS.',
      },
      { t: 'fig', id: 'b12-07-fig-7.5' },
      { t: 'p', html: '<b>The immune-memory mechanism (why vaccines work)</b>' },
      {
        t: 'p',
        html: 'First exposure → slow <b>primary response</b> + creation of memory B/T cells. Second exposure to the same antigen → rapid, massive <b>secondary response</b> because memory cells recognise the pathogen instantly. A vaccine supplies a harmless version of the antigen to seed those memory cells in advance, converting a future “first encounter” into a “second encounter.”',
      },
      { t: 'p', html: '<b>Carcinogenesis (why a normal cell turns cancerous)</b>' },
      {
        t: 'p',
        html: 'Normal cells stop dividing when they touch neighbours (<b>contact inhibition</b>) and carry <b>proto-oncogenes</b> that drive growth only when needed. A <b>carcinogen</b> (radiation, a chemical like benzopyrene, or an oncogenic virus) damages DNA / mutates these genes, converting proto-oncogenes into permanently “on” <b>oncogenes</b>. Growth control is lost, the cell divides relentlessly, and if the mass acquires the ability to spread (<b>metastasis</b>) it becomes <b>malignant</b>. Note the elegant link back to immunity: tumour cells often evade immune detection, which is why immunotherapy with α-interferon is used to re-activate the immune attack.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Distinguish + define.</b> Differentiate between active and passive immunity, giving one example of each.',
        steps: [
          '<b>Answer.</b> <b>Active immunity:</b> the body produces its own antibodies after exposure to an antigen; develops slowly but is long-lasting. Example: immunity after a natural infection, or after vaccination (polio/tetanus vaccine). <b>Passive immunity:</b> ready-made antibodies are transferred into the body; acts immediately but is short-lived. Example: antibodies in colostrum to a newborn, or an anti-tetanus injection.',
          '(Examiners want the source of antibodies + the speed/durability contrast + one example each.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b><br>Column I (Immunoglobulin): A. IgG; B. IgA; C. IgE; D. IgM<br>Column II (Feature): 1. Allergic reactions; 2. Crosses the placenta; 3. First produced on infection; 4. Found in colostrum',
        steps: [
          '<b>Answer.</b> IgG crosses the placenta → A–2. IgA is in colostrum → B–4. IgE mediates allergy → C–1. IgM is first to appear → D–3.',
        ],
        ans: 'A–2, B–4, C–1, D–3.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> An HIV-positive person eventually loses the ability to fight even ordinary infections. <b>Reason (R):</b> HIV progressively destroys helper T-lymphocytes, which coordinate the immune response. <b>(a)</b> A & R true, R explains A <b>(b)</b> A & R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true: immune collapse leaves the patient defenceless against opportunistic infections. R is true: HIV progressively destroys helper T-lymphocytes. And R explains A: because the destroyed cells are the very coordinators of the immune response, their loss produces exactly the defencelessness described.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-step reasoning.</b> A child receives the OPV (oral polio vaccine) at birth and a booster later; the same child, after stepping on a rusty nail, is given an anti-tetanus injection. Classify each intervention as active or passive immunity and justify why two different strategies are used.',
        steps: [
          '<b>Answer.</b> OPV = <b>active immunity</b> (artificially acquired): the attenuated polio virus provokes the child’s own immune system to make antibodies and memory cells, slow to build but durable, which is why a booster reinforces memory for long-lasting protection. Anti-tetanus injection (antitoxin) = <b>passive immunity</b>: <i>Clostridium tetani</i> toxin acts fast, so there is no time to wait for the body’s own antibody production; pre-formed antitoxin (antibodies) is injected for an immediate effect, accepting that it is short-lived. The principle: use active immunity for prevention (time available), passive immunity for emergencies (time critical). The trap is mixing up the two tetanus products: the toxoid vaccine supplies antigen (active), but the injection given after a wound, antitoxin, supplies ready-made antibodies (passive).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the primary and secondary lymphoid organs in humans (two each).',
            a: 'Primary: bone marrow, thymus; Secondary: spleen, lymph nodes (also tonsils/appendix/Peyer’s patches/MALT).',
          },
          {
            q: '[CUET] Expand HIV, AIDS, ELISA and NACO.',
            a: 'Human Immunodeficiency Virus; Acquired Immuno Deficiency Syndrome; Enzyme-Linked Immuno-Sorbent Assay; National AIDS Control Organisation.',
          },
          {
            q: '[NEET] Why is IgG, and not IgM, responsible for natural passive immunity in a foetus?',
            a: 'Only IgG can cross the placenta, transferring maternal antibodies to the foetus; IgM cannot.',
          },
          {
            q: '[NEET] Distinguish between benign and malignant tumours on the basis of metastasis.',
            a: 'Benign: confined to origin, no metastasis; malignant: invades and metastasises to distant sites via blood and lymph.',
          },
          {
            q: '[NEET high-difficulty] A heavy smoker develops a lung tumour. Identify the class of carcinogen and a chemical agent in the smoke involved, and name the gene-level change that initiates the transformation.',
            a: 'Chemical carcinogen; benzopyrene is one of the carcinogens in cigarette smoke; it mutates proto-oncogenes into oncogenes, causing loss of growth control.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which immunoglobulin can cross the placenta to provide immunity to the foetus?',
        opts: [
          {
            label: 'IgA',
            nudge: '<b>(a)</b> IgA is the colostrum antibody: chosen by students who blur “mother → baby” routes (milk vs placenta).',
          },
          { label: 'IgE', nudge: '<b>(b)</b> IgE handles allergy.' },
          { label: 'IgG', nudge: null },
          { label: 'IgM', nudge: '<b>(d)</b> IgM is the first-responder antibody and is too large (pentamer) to cross.' },
        ],
        correct: 2,
        solution: 'Only IgG crosses the placenta.',
      },
      {
        t: 'mcq',
        q: 'HIV is called a retrovirus because it:',
        opts: [
          { label: 'infects only retroviral cells', nudge: '<b>(a)</b> is circular nonsense.' },
          { label: 'uses reverse transcriptase to make DNA from its RNA', nudge: null },
          { label: 'has double-stranded DNA', nudge: '<b>(c)</b> HIV carries single-stranded RNA, not DNA: a frequent slip.' },
          {
            label: 'replicates only in the nucleus',
            nudge: '<b>(d)</b> reverse transcription occurs in the cytoplasm first; the location distractor misses the defining enzyme.',
          },
        ],
        correct: 1,
        solution: '“Retro” = the reverse flow, RNA → DNA, via reverse transcriptase.',
      },
      {
        t: 'mcq',
        q: 'The property by which normal cells stop dividing on contact with neighbours, and which cancer cells lose, is:',
        opts: [
          { label: 'metastasis', nudge: '<b>(a)</b> metastasis is the spread of malignant cells, a later property: the classic swap.' },
          { label: 'contact inhibition', nudge: null },
          { label: 'apoptosis', nudge: '<b>(c)</b> apoptosis is programmed cell death (related but not “the contact brake”).' },
          { label: 'differentiation', nudge: '<b>(d)</b> differentiation is specialisation, unrelated to the growth brake.' },
        ],
        correct: 1,
        solution: 'Contact inhibition is the brake; cancer cells lose it.',
      },
      {
        t: 'mcq',
        q: 'Which statement about immunity is correct?',
        opts: [
          { label: 'Innate immunity is pathogen-specific', nudge: '<b>(a)</b> innate immunity is non-specific: that’s its definition.' },
          {
            label: 'Cell-mediated immunity is carried out by B-lymphocytes',
            nudge: '<b>(b)</b> CMI is run by T-cells, not B-cells (B-cells do humoral immunity).',
          },
          { label: 'Graft rejection is a function of T-lymphocytes', nudge: null },
          {
            label: 'Active immunity acts immediately and is short-lived',
            nudge: '<b>(d)</b> describes passive, not active, immunity: the speed/durability properties are reversed.',
          },
        ],
        correct: 2,
        solution: 'Graft rejection is cell-mediated, hence T-lymphocytes.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Active vs passive reversed.</b> Active = body makes its own antibodies (slow, lasting). Passive = antibodies received ready-made (fast, short-lived). If an option says “active immunity acts immediately,” it’s wrong by definition.',
          '<b>Humoral vs cell-mediated.</b> B-cells → antiBodies → humoral. T-cells → cell-mediated → transplant rejection. Lock the B/T mapping.',
          '<b>HIV carries RNA, not DNA.</b> It is a retrovirus: RNA converted to DNA by reverse transcriptase. Options offering “double-stranded DNA” for HIV are traps.',
          '<b>Metastasis ≠ contact inhibition.</b> Contact inhibition is the brake that’s lost; metastasis is the later spread of malignant cells to distant sites. Don’t swap them.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any immunity MCQ, first tag the keyword to its cell type: antibody/humoral/colostrum → B-cell side; graft/transplant/CMI/thymus → T-cell side. For AIDS, anchor on the enzyme (reverse transcriptase) and the target (helper T-cell); for cancer, anchor on the brake (contact inhibition) and the spread (metastasis). Four anchors clear most of the section without deeper recall.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Immunity tree',
            note: 'Innate (non-specific, born-with, 4 barriers) vs Acquired (specific, has memory) → Active (own antibodies, slow/lasting) vs Passive (given antibodies, fast/short).',
          },
          { f: 'B vs T', note: 'B-cells = antiBodies = humoral; T-cells = cell-mediated = graft rejection (mature in thymus).' },
          {
            f: 'Antibody = H<sub>2</sub>L<sub>2</sub> (2 heavy + 2 light, disulphide-bonded)',
            note: 'Classes: IgG (most/placenta) · IgM (first/pentamer) · IgA (colostrum) · IgE (allergy) · IgD (receptor).',
          },
          {
            f: 'Lymphoid organs',
            note: 'Primary = bone marrow + thymus; Secondary = spleen, lymph nodes, tonsils, appendix, Peyer’s patches, MALT.',
          },
          {
            f: 'AIDS',
            note: 'HIV (retrovirus, ssRNA) → reverse transcriptase → macrophage “factory” → destroys helper T-cells → immunity collapses. Dx ELISA; prevention NACO; no cure.',
          },
          {
            f: 'Cancer',
            note: 'loss of contact inhibition → tumour (benign = local; malignant = metastasis). Carcinogens: physical (UV/X/γ), chemical (e.g., benzopyrene), biological (oncogenic viruses). Proto-oncogene → (mutation) → oncogene. Tx: surgery / radiation / chemo / α-interferon.',
          },
        ],
        aids: [
          '“Goes through placenta = IgG; Made first = IgM; A for milk (colostrum) = IgA; E for allergy = IgE.”',
          '“Active = Athlete (trains slowly, lasts); Passive = Parcel (delivered ready, expires).”',
        ],
      },
    ],
  },
];
