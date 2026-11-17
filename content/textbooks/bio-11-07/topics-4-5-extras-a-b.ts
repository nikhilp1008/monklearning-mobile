import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 7 (Structural Organisation in Animals): Topic 04
 * Cockroach (pp. 425 to 431), Topic 05 Frog (pp. 432 to 438), then the shared
 * introduction to “Additional Topics” (p. 439, the first paragraph of
 * Additional topic A’s Introduction), Additional topic A Germ Layer
 * Derivatives (pp. 439 to 441) and Additional topic B Comprehensive
 * Comparative Anatomy (pp. 441 to 445), word for word from the Class 11
 * Biology Master Reference. Each regular topic is cut at the book’s Sections
 * 1 to 8. Figure 7.3 (caption p. 428, drawn p. 429) and Figure 7.4 (caption
 * p. 434, drawn p. 435) are redrawn in lib/diagrams/biology-11-07.ts; no other
 * page of this range draws anything (the rest are text and tables).
 * Scientific names are italic as the book prints them; emphasis italics are
 * dropped; the book’s em dashes are rewritten with ordinary punctuation. The
 * book numbers its options (a) to (d) here, and they are kept as printed.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 425–431 ─────────────────────────
  {
    n: '04',
    title: 'Cockroach (Periplaneta americana)',
    kalam:
      'The cockroach wears its skeleton on the outside, a hard chitinous exoskeleton made of plates (sclerites) joined by flexible membranes.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic for NEET: the open circulation with the 13-chambered heart, Malpighian-tubule excretion (uricotelic), the tracheal system with 10 pairs of spiracles, and paurometabolous development recur almost every year (the book’s estimate from past papers, not official figures). CBSE asks the alimentary-canal diagram and digestive/circulatory/reproductive short answers. CUET reuses segment-and-number one-liners.',
      },
      {
        t: 'p',
        html: 'The cockroach is the survivor everyone has met in a kitchen at night, but to a biologist it is a masterclass in the <b>arthropod body plan</b>: a body in three neat regions, sheathed in armour, breathing through holes in its sides, with blood that sloshes freely around its organs instead of running in pipes. Almost every feature is the opposite of the earthworm’s, which is exactly why the two are taught together.',
      },
      {
        t: 'p',
        html: 'Start with the armour. The cockroach wears its skeleton on the outside, a hard <b>chitinous exoskeleton</b> made of plates (<b>sclerites</b>) joined by flexible membranes, like a suit of plate armour with leather hinges so the wearer can still bend and run. This exoskeleton protects, prevents water loss, and anchors the muscles.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a knight in segmented plate armour riding in an open boat that is flooded with water. The armour is the exoskeleton. The flooded boat is the <b>haemocoel</b>: the cockroach does not pump blood through closed vessels; instead its body cavity is filled with <b>haemolymph</b> that bathes the organs directly. This <b>open circulation</b> is cheap and works fine for a small insect, and it goes with a surprising fact: the haemolymph carries <b>no respiratory pigment</b> at all, because in insects the air is carried by tracheae, not by blood, whereas earthworm and frog blood, which carry oxygen, do have one. Instead the cockroach breathes through a private pipework, the <b>tracheal system</b>, that carries air straight to the tissues through holes called <b>spiracles</b>.',
      },
      {
        t: 'p',
        html: 'So the cockroach solves the same problems as the earthworm and frog (eat, breathe, circulate, reproduce) with a completely different toolkit: external skeleton, open blood system, air-tube breathing, and uric-acid excretion suited to dry living.',
      },
      {
        t: 'p',
        html: 'That outside skeleton, for all its advantages, comes with one inescapable cost: it cannot grow. A rigid case of chitin has a fixed size, so the only way for a young cockroach to get bigger is to <b>moult</b>: shed the old exoskeleton, expand quickly while the new one is still soft, and let it harden again. Growth therefore happens in steps, between moults, rather than smoothly. Feeding, meanwhile, is the work of a thoroughly <b>complete and compartmentalised gut</b>: the cockroach is an <b>omnivorous scavenger</b> that will eat almost anything organic, moistening its food with saliva from paired <b>salivary glands</b>, storing it in the <b>crop</b>, grinding it in the <b>gizzard</b>, and digesting it with enzymes poured in by a ring of blind <b>hepatic caeca</b> before absorption in the midgut. Each chamber is a dedicated station, the same one-way assembly-line logic seen in the earthworm, but housed in an armoured insect.',
      },
      { t: 'p', html: '<b>Limiting conditions & cautions:</b>' },
      {
        t: 'p',
        html: '• The species studied is <i>Periplaneta americana</i>, the American cockroach (about 34–53 mm). Segment and number facts below are specific to it.<br>• “Open circulation” does <b>not</b> mean no heart: there is a 13-chambered heart; it just discharges blood into the body cavity rather than a closed vessel loop.<br>• Breathing is <b>decoupled from blood</b>: oxygen reaches tissues via tracheae, so do not link spiracles to the heart.',
      },

      { t: 'part', title: 'Key definitions and diagnostic features' },
      {
        t: 'p',
        html: '(Biology fork: body region, segment count and position are the operative quantities; no SI units apply.)',
      },
      {
        t: 'p',
        html: '<b>Body organisation:</b><br>• Three regions: <b>head, thorax, abdomen</b>, all under a chitinous <b>exoskeleton</b> of <b>sclerites</b> (dorsal <b>tergites</b>, ventral <b>sternites</b>) joined by flexible <b>arthrodial membrane</b>.<br>• <b>Head:</b> triangular, set at right angles to the body, formed by the <b>fusion of 6 segments</b>; bears a pair of <b>compound eyes</b> (mosaic vision) and thread-like <b>antennae</b> (sensory); <b>biting-and-chewing mouthparts</b>: labrum, mandibles, maxillae, labium, and the tongue-like <b>hypopharynx</b>.<br>• <b>Thorax:</b> three segments: <b>prothorax, mesothorax, metathorax</b>; <b>3 pairs of legs</b> (one per segment); <b>forewings (tegmina)</b> on the mesothorax, opaque, leathery, protective; <b>hindwings</b> on the metathorax, membranous, used for flight.<br>• <b>Abdomen: 10 segments</b>; a pair of <b>anal cerci</b> in both sexes; <b>anal styles</b> present only in the <b>male</b> (sexual dimorphism); the female’s 7th sternum forms a boat-shaped genital pouch.',
      },
      {
        t: 'table',
        title: 'Organ systems at a glance',
        head: ['System', 'Key structures', 'Diagnostic exam facts'],
        rows: [
          [
            'Digestive',
            'Mouth → pharynx → oesophagus → <b>crop</b> → <b>gizzard (proventriculus)</b> [foregut] → <b>midgut</b> → hindgut → anus; salivary glands',
            '<b>Crop</b> stores food; <b>gizzard</b> grinds (chitinous teeth); ring of <b>hepatic/gastric caeca</b> at the foregut–midgut junction secretes enzymes',
          ],
          [
            'Circulatory',
            '<b>Open</b> type; <b>haemocoel</b> bathed in <b>haemolymph</b>; tubular dorsal <b>13-chambered heart</b>',
            'Haemolymph = colourless plasma + haemocytes, <b>no respiratory pigment</b>; each heart chamber has paired <b>ostia</b> (valved) admitting blood',
          ],
          [
            'Respiratory',
            '<b>Tracheal system</b>: <b>10 pairs of spiracles</b> (2 thoracic + 8 abdominal) → tracheae → tracheoles',
            'Air delivered <b>directly to tissues</b>; independent of blood; spiracles guarded by sphincters',
          ],
          [
            'Excretory',
            '<b>Malpighian tubules</b> at the <b>midgut–hindgut junction</b> (~100–150, blind, yellow)',
            '<b>Uricotelic</b>: convert waste to <b>uric acid</b>; also fat body, nephrocytes, urecose glands',
          ],
          [
            'Nervous',
            'Double ventral <b>nerve cord</b> with ganglia (<b>3 thoracic + 6 abdominal</b>); fused head ganglia = <b>supra-oesophageal ganglion</b> (“brain”)',
            'Decentralised: can survive briefly without the head; senses via antennae, compound eyes, palps, <b>anal cerci</b>',
          ],
          [
            'Reproductive',
            '<b>Dioecious</b>; male testes (4th–6th seg.) + <b>mushroom gland</b>; female ovaries (2nd–6th seg., <b>8 ovarioles</b> each) + <b>spermatheca</b>',
            'Eggs packed in an <b>ootheca</b> (14–16 eggs); <b>collaterial glands</b> make the case; <b>paurometabolous</b> development (nymph, no pupa)',
          ],
        ],
      },

      { t: 'part', title: 'Structural logic and life cycle' },
      {
        t: 'p',
        html: '<b>1. Why the body is armoured and regionalised.</b> Sharing the same body plan as all arthropods, the cockroach puts its skeleton outside as a <b>chitinous exoskeleton</b>, which protects it, limits water loss (vital for a land insect), and gives muscles something to pull against. To keep that rigid armour from freezing the body solid, the plates (<b>sclerites</b>) are linked by flexible <b>arthrodial membranes</b>: armour with hinges. The body is split into a sensory-and-feeding <b>head</b>, a locomotory <b>thorax</b> (legs and wings), and a visceral <b>abdomen</b>, so each region specialises.',
      },
      {
        t: 'p',
        html: '<b>2. Why circulation is open and the blood is “empty.”</b> In the cockroach’s <b>open</b> system the <b>13-chambered dorsal heart</b> simply pumps <b>haemolymph</b> forward and lets it spill into the <b>haemocoel</b>, where it bathes the organs directly before seeping back into the heart through valved holes, the <b>ostia</b>. Because oxygen is not carried by this blood, the haemolymph contains <b>no respiratory pigment</b>; it mainly transports nutrients, wastes and immune cells. This is only viable because a separate system handles breathing.',
      },
      {
        t: 'p',
        html: '<b>3. Why breathing bypasses the blood.</b> The cockroach’s <b>tracheal system</b> is a branching network of air tubes opening at <b>10 pairs of spiracles</b> (2 on the thorax, 8 on the abdomen). Air travels in through the spiracles, down progressively finer tracheae, to microscopic <b>tracheoles</b> that touch the tissues and hand over oxygen <b>directly</b>, no blood middleman. That is why the empty haemolymph is no handicap: each cell gets its own air supply.',
      },
      {
        t: 'p',
        html: '<b>4. Why a desert-style excretory system.</b> A land insect must save water, so the cockroach is <b>uricotelic</b>: it converts nitrogenous waste into <b>uric acid</b>, which is nearly insoluble and can be excreted with almost no water loss. The job is done by <b>Malpighian tubules</b> at the <b>midgut–hindgut junction</b>: they pull waste out of the surrounding haemolymph and dump uric acid into the gut. Form again follows habitat: dry life demands dry waste.',
      },
      {
        t: 'p',
        html: '<b>The life cycle, paurometabolous development:</b> The cockroach is <b>dioecious</b> with clear <b>sexual dimorphism</b> (only the male has anal styles). After mating, the male transfers sperm packaged as <b>spermatophores</b>; the female stores them in her <b>spermatheca</b>. Her <b>collaterial glands</b> then secrete a tough capsule, the <b>ootheca</b>, around a batch of 14–16 eggs, which she carries briefly and deposits in a sheltered crack (a female may form roughly 9–10 oothecae in her life). The egg hatches not into a larva but into a <b>nymph</b>: a miniature, wingless, sexually immature version of the adult. The nymph grows by repeated <b>moulting (about 13 moults)</b>, developing wing pads and maturity along the way, until it becomes the adult. Because the young already resembles the adult and there is <b>no pupal stage</b>, this gradual change is called <b>paurometabolous (incomplete) metamorphosis</b>, quite unlike the egg→larva→pupa→adult of a butterfly.',
      },
      {
        t: 'p',
        html: '<b>5. Why feeding and sensing are concentrated in the head, and reproduction in the abdomen.</b> The cockroach packs its information-gathering and food-handling tools into the head: a pair of <b>compound eyes</b>, each built of thousands of units that together produce a coarse <b>mosaic image</b> (good at detecting movement), a pair of long <b>antennae</b> that smell and feel the environment, and <b>biting-and-chewing mouthparts</b> in which the toothed <b>mandibles</b> cut, the <b>maxillae</b> (with their palps) handle and taste food, and the tongue-like <b>hypopharynx</b> mixes in saliva. The nervous system, by contrast, is deliberately not centralised: a double <b>ventral nerve cord</b> strings together segmental <b>ganglia</b> (three in the thorax, six in the abdomen), with the fused head ganglia forming the <b>supra-oesophageal ganglion</b> (“brain”). Because so much control is local, a decapitated cockroach can survive and even move for a while. Reproduction is handled at the rear: the <b>male</b> stores sperm as packets called <b>spermatophores</b> in its <b>seminal vesicles</b> and adds secretions from the <b>mushroom gland</b>, while the <b>female</b> stores received sperm in her <b>spermatheca</b> and wraps each egg batch in an ootheca built by the <b>collaterial glands</b>.',
      },
      { t: 'fig', id: 'b11-07-fig-7.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Where are the Malpighian tubules of the cockroach located, and what is their function? Name the excretory product.',
        steps: [
          '<b>Reasoning.</b> The Malpighian tubules arise at the <b>junction of the midgut and hindgut</b>. They draw nitrogenous waste out of the surrounding haemolymph and convert it for excretion. Because the cockroach is a land insect that conserves water, the waste is excreted as <b>uric acid</b> (uricotelic).',
        ],
        ans: 'At the midgut–hindgut junction; they remove nitrogenous waste from the haemolymph and excrete it as uric acid.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The number and distribution of spiracles in the cockroach is: <b>(a)</b> 10 pairs: 2 thoracic + 8 abdominal <b>(b)</b> 8 pairs: all abdominal <b>(c)</b> 13 pairs <b>(d)</b> 10 pairs: all abdominal',
        steps: [
          '<b>Speed reasoning.</b> Recall the split, not just the total: <b>10 pairs = 2 thoracic + 8 abdominal</b>. Option (c) “13” is a deliberate bait: 13 is the heart chambers, not the spiracles. Don’t let the two famous numbers blur.',
          '<b>Pitfall it exploits:</b> swapping the spiracle count (10 pairs) with the 13-chambered heart.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> The haemolymph of a cockroach lacks a respiratory pigment yet its tissues are well oxygenated. <b>Reason (R):</b> Oxygen is delivered to the tissues directly through the tracheal system, independent of the blood. <b>(a)</b> Both A and R true, R correctly explains A <b>(b)</b> Both A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: cockroach haemolymph carries no haemoglobin-type pigment. R is true: the <b>tracheal system</b> ferries air straight to the tissues via tracheoles. And R is exactly why A is harmless: because breathing is decoupled from the blood, the haemolymph never needed an oxygen-carrying pigment.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'CUET / NCERT line-statement',
        q: 'Read the statements about cockroach development: (i) The egg hatches into a nymph that resembles the adult. (ii) There is no pupal stage. (iii) The nymph matures through a series of moults. Name this type of development and the structure in which the eggs are laid.',
        steps: [
          '<b>Reasoning.</b> Hatching into an adult-like nymph, no pupa, maturing by moulting = <b>paurometabolous (incomplete) metamorphosis</b>. The eggs are encased in a capsule called the <b>ootheca</b>.',
        ],
        ans: 'Paurometabolous (gradual) development; eggs are laid in an ootheca.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three regions of the cockroach’s body and state how many segments fuse to form the head.',
            a: 'Head, thorax, abdomen; the head is formed by the fusion of <b>6 segments</b>.',
          },
          {
            q: '[NEET] How many chambers does the cockroach’s heart have, and what are the openings that admit blood into it called?',
            a: '<b>13 chambers</b>; blood enters through paired valved openings called <b>ostia</b>.',
          },
          {
            q: '[NEET] In which abdominal segments do the ovaries of the cockroach lie, and how many ovarioles does each ovary contain?',
            a: 'The <b>2nd–6th</b> abdominal segments; each ovary has <b>8 ovarioles</b>.',
          },
          {
            q: '[CUET] Which mouthpart of the cockroach is comparable to a tongue?',
            a: 'The <b>hypopharynx</b> (lingua).',
          },
          {
            q: '[NEET Assertion–Reason] A: The cockroach can survive for some time even after losing its head. R: Its nervous system has segmentally arranged ganglia along a ventral nerve cord, not a single central brain. State whether R correctly explains A. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: 'Both true, and R correctly explains A: because control is distributed among ganglia rather than centralised in a brain, the body keeps functioning briefly without the head.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The circulatory system of the cockroach is:',
        opts: [
          { label: 'closed, with haemoglobin in red cells', nudge: '<b>(a)</b> is the vertebrate pattern.' },
          { label: 'open, with haemolymph in a haemocoel', nudge: null },
          {
            label: 'closed, with Hb in plasma',
            nudge: '<b>(c)</b> describes the earthworm: the classic earthworm/cockroach swap.',
          },
          { label: 'absent', nudge: '<b>(d)</b> is wrong; a heart is present.' },
        ],
        correct: 1,
        solution:
          'The cockroach has an <b>open</b> system: a 13-chambered heart discharges <b>haemolymph</b> into the <b>haemocoel</b>, bathing the organs.',
      },
      {
        t: 'mcq',
        q: 'Malpighian tubules in the cockroach are located at the junction of:',
        opts: [
          {
            label: 'foregut and midgut',
            nudge: '<b>(a)</b> is where the hepatic caeca sit: a tempting near-miss.',
          },
          {
            label: 'crop and gizzard',
            nudge: '<b>(b)</b> and <b>(d)</b> are foregut landmarks unrelated to excretion.',
          },
          { label: 'midgut and hindgut', nudge: null },
          {
            label: 'oesophagus and crop',
            nudge: '<b>(b)</b> and <b>(d)</b> are foregut landmarks unrelated to excretion.',
          },
        ],
        correct: 2,
        solution:
          'Malpighian tubules arise at the <b>midgut–hindgut junction</b> and handle excretion.',
      },
      {
        t: 'mcq',
        q: 'Anal styles in the cockroach are:',
        opts: [
          {
            label: 'present in both sexes',
            nudge: '<b>(a)</b> describes the cerci, not the styles: the most common trap.',
          },
          { label: 'present only in the female', nudge: '<b>(b)</b> reverses the sexes.' },
          { label: 'present only in the male', nudge: null },
          { label: 'absent in both', nudge: '<b>(d)</b> is wrong.' },
        ],
        correct: 2,
        solution:
          '<b>Anal styles occur only in the male</b>, the key sexual-dimorphism marker; <b>anal cerci</b> are present in both sexes.',
      },
      {
        t: 'mcq',
        q: 'The development of the cockroach is best described as:',
        opts: [
          {
            label: 'holometabolous (egg–larva–pupa–adult)',
            nudge: '<b>(a)</b> describes a butterfly/beetle: the favourite distractor.',
          },
          { label: 'paurometabolous (egg–nymph–adult)', nudge: null },
          {
            label: 'ametabolous (no metamorphosis)',
            nudge: '<b>(c)</b> ametabolous applies to primitively wingless insects.',
          },
          {
            label: 'direct, like the earthworm',
            nudge: '<b>(d)</b> is wrong; the earthworm’s direct development has no nymphal moulting series.',
          },
        ],
        correct: 1,
        solution:
          'The cockroach is <b>paurometabolous</b>: the nymph resembles the adult and there is no pupa.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing 13 and 10.</b> The <b>heart has 13 chambers</b>; there are <b>10 pairs of spiracles</b>. These two numbers are a favourite pairing in distractors.',
          '<b>Mixing earthworm and cockroach circulation.</b> Cockroach = <b>open</b> (haemolymph, no pigment); earthworm = <b>closed</b> (Hb in plasma). Decide which animal first, then answer.',
          '<b>Anal styles vs anal cerci.</b> Cerci are in both sexes; <b>styles are male-only</b>. This is the dimorphism question.',
          '<b>Calling the development “complete metamorphosis.”</b> There is <b>no pupa</b>: it is incomplete (paurometabolous).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (opposite of the worm):</b> Learn the cockroach as the earthworm’s mirror image: external skeleton vs none, open vs closed circulation, air-tubes vs skin breathing, uric acid vs ammonia/urea. Setting them as opposites lets you answer comparison questions about either animal from a single remembered contrast.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<i>Periplaneta americana</i>',
            note: 'three regions (<b>head, thorax, abdomen</b>), chitinous <b>exoskeleton</b> of <b>sclerites</b>; head = <b>6 fused segments</b>.',
          },
          {
            f: '<b>Thorax:</b> 3 pairs of legs; <b>tegmina</b> (fore) + membranous <b>hindwings</b>. <b>Abdomen: 10 segments</b>; <b>anal styles = male only</b>.',
            note: '',
          },
          {
            f: 'Digestion',
            note: 'mouth → crop → <b>gizzard</b> → midgut (<b>hepatic caeca</b>) → hindgut → anus.',
          },
          {
            f: 'Circulation',
            note: '<b>open</b>; <b>13-chambered heart + ostia</b>; <b>haemolymph, no respiratory pigment</b>; <b>haemocoel</b>.',
          },
          {
            f: 'Respiration',
            note: '<b>tracheal system</b>; <b>10 pairs spiracles</b> (2 thoracic + 8 abdominal) → tissues directly.',
          },
          {
            f: 'Excretion',
            note: '<b>Malpighian tubules</b> at midgut–hindgut junction; <b>uricotelic</b> (uric acid).',
          },
          {
            f: 'Nervous',
            note: 'ventral nerve cord, ganglia (3 thoracic + 6 abdominal); “brain” = supra-oesophageal ganglion.',
          },
          {
            f: 'Reproduction',
            note: 'dioecious; ovaries 2nd–6th seg. (<b>8 ovarioles</b> each), testes 4th–6th; ootheca (14–16 eggs); paurometabolous (nymph, no pupa, ~13 moults).',
          },
        ],
        aids: [
          '“13 in the heart, 10 at the sides (spiracles).”',
          '“Styles for males, cerci for all.”',
          '“Open boat of haemolymph: air comes by tube, not by blood.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 432–438 ─────────────────────────
  {
    n: '05',
    title: 'Frog (Rana tigrina)',
    kalam: 'Think of the frog as a dual-citizenship animal.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield, fact-dense topic. NEET asks 1–2 questions almost every year (the book’s estimate from past papers, not official figures): favourite hooks are the three-chambered heart with its accessory chambers, the male reproductive route (vasa efferentia → kidney → Bidder’s canal), ureotelic adult vs ammonotelic tadpole, and metamorphosis. CUET lifts NCERT line-statements directly. CBSE Boards set a labelled-diagram or short-answer question on one organ system.',
      },
      {
        t: 'p',
        html: 'You have almost certainly seen a frog near a pond after the first monsoon rains. It seems like a simple little animal, but a frog is one of biology’s great “in-between” creatures, and that is exactly why it earns a whole topic of its own. It is an <b>amphibian</b>: it lives part of its life in water and part on land, and its body is a beautiful compromise built to handle both worlds.',
      },
      {
        t: 'p',
        html: 'Think of the frog as a <b>dual-citizenship animal</b>. A fish is a full citizen of water; a lizard is a full citizen of land. The frog holds both passports at once, and almost every feature you study is a clue to how it juggles the two. Its skin must work underwater and in air, so it stays moist and even helps it breathe. Its eyes must see in two different optical media, so they come with special equipment. Its young live like fish (gilled tadpoles) and then rebuild themselves into land-capable adults through <b>metamorphosis</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a vehicle that has to drive on roads and float across rivers, an amphibious jeep. It cannot be the best car or the best boat; instead it carries clever features for both: sealed surfaces, a flexible engine, and the ability to switch modes. The frog is biology’s amphibious jeep. The frog is also <b>cold-blooded</b> (poikilothermic): its body temperature follows the surroundings. So when summers get brutally hot it goes into <b>aestivation</b> (summer sleep), and when winters get cold it goes into <b>hibernation</b> (winter sleep): both are “switch-off-and-wait” strategies for an animal that cannot heat or cool itself.',
      },
      {
        t: 'p',
        html: 'Why does the frog, of all animals, dominate this chapter? Because it is <b>cheap to obtain, harmless to handle, the right size for dissection, and ecologically important</b> as a link in food chains and a controller of insect pests. It is the classic teaching animal: a single organism in which you can see every major organ system at work.',
      },
      { t: 'p', html: '<b>Limiting conditions & cautions:</b>' },
      {
        t: 'p',
        html: '• The frog studied in Indian textbooks is <i>Rana tigrina</i>, the common Indian bullfrog (now placed in <i>Hoplobatrachus tigerinus</i>). Details such as chamber counts and nerve numbers are specific to it: don’t carry them over to mammals.<br>• The frog is cold-blooded, so it cannot regulate temperature internally, hence the seasonal sleeps. A warm-blooded animal would not need them.<br>• Tadpole features (gills, ammonotelism, herbivory) are not adult features. Mixing the two is the single most common exam mistake here.',
      },

      { t: 'part', title: 'Key definitions and diagnostic features' },
      {
        t: 'p',
        html: '(Biology fork: structure, location and function are the operative quantities; no SI units or dimensional formulae apply.)',
      },
      {
        t: 'p',
        html: '<b>External morphology:</b><br>• Body divided into just <b>two parts: head and trunk</b>; neck and tail are absent in the adult.<br>• Skin is <b>moist, smooth, scale-less and slimy</b>, richly supplied with two gland types: <b>mucous glands</b> (keep it moist) and <b>serous/poison glands</b> (cutaneous defence). <b>Chromatophores</b> (pigment cells) give protective colouration/mimicry.<br>• Forelimbs bear <b>4 digits</b>; hindlimbs bear <b>5 webbed digits</b> for swimming.<br>• A <b>tympanum</b> (eardrum) lies behind each eye; there is <b>no external ear</b>; the middle ear holds a single ear ossicle, the <b>columella auris</b>.<br>• Eyes carry a <b>nictitating membrane</b> that protects them and lets the frog see underwater.',
      },
      {
        t: 'p',
        html: '<b>Sexual dimorphism</b> (male vs female): only the <b>male</b> bears <b>vocal sacs</b> (for croaking) and a <b>copulatory (nuptial) pad</b> on the first digit of each forelimb.',
      },
      {
        t: 'table',
        title: 'Organ systems at a glance',
        head: ['System', 'Key structures', 'Diagnostic exam facts'],
        rows: [
          [
            'Digestive',
            'Mouth → buccal cavity → pharynx → oesophagus → stomach → intestine → rectum → <b>cloaca</b>; liver, pancreas',
            '<b>Bilobed protrusible tongue</b> captures prey; stomach wall glands secrete <b>HCl</b> and gastric juice (<b>pepsinogen</b>); adult <b>carnivorous</b>',
          ],
          [
            'Respiratory',
            'Skin, buccal cavity, lungs',
            '<b>Cutaneous</b> (skin) respiration underwater via dissolved O<sub>2</sub>; <b>pulmonary</b> on land; tadpole uses <b>gills</b>',
          ],
          [
            'Circulatory',
            'Closed; heart = <b>2 atria + 1 ventricle</b> + accessory <b>sinus venosus</b> and <b>truncus arteriosus</b> (NCERT: conus arteriosus); <b>pericardium</b>',
            '<b>Sinus venosus</b> = thin, triangular, dorsal chamber receiving deoxygenated blood; RBCs <b>nucleated</b>; hepatic + renal <b>portal systems</b>',
          ],
          [
            'Excretory',
            '<b>Mesonephric kidneys</b>, ureters, urinary bladder, cloaca',
            'Adult <b>ureotelic</b>; tadpole <b>ammonotelic</b>; in male the ureter doubles as <b>urinogenital duct</b>',
          ],
          [
            'Nervous',
            'Brain (fore/mid/hindbrain), spinal cord, nerves',
            '<b>10 pairs of cranial nerves (NCERT)</b>; medulla exits via the <b>foramen magnum</b>',
          ],
          [
            'Reproductive',
            'Dioecious; male testes, female ovaries',
            '<b>External fertilisation</b>; <b>indirect development</b> via tadpole + metamorphosis',
          ],
        ],
      },

      { t: 'part', title: 'Structural logic and life cycle' },
      {
        t: 'p',
        html: 'Biology connects structure to function rather than deriving formulae. Here is the reasoning that ties the frog’s body together, and its life cycle, which is the heart of why a frog is “amphibious.”',
      },
      {
        t: 'p',
        html: '<b>1. Why the skin does double duty.</b> Because the frog must survive both underwater and in air, its skin is kept moist and thin. A moist, thin surface is exactly what gases need to diffuse across, so the skin doubles as a <b>respiratory organ</b>. Underwater, the frog shuts down its lungs and relies entirely on <b>cutaneous respiration</b>, exchanging dissolved oxygen through the wet skin. The mucous glands exist largely to keep the skin wet enough for this to work.',
      },
      {
        t: 'p',
        html: '<b>2. Why the heart has extra chambers.</b> The frog’s heart has three main chambers (two atria, one ventricle), but it also carries a <b>sinus venosus</b> and a <b>truncus arteriosus</b>. The logic is plumbing: deoxygenated blood returning from the body first collects in the <b>sinus venosus</b>, which empties into the right atrium; the <b>left atrium</b> receives oxygenated blood from the lungs. Both atria pour into the <b>single ventricle</b>, and the <b>truncus arteriosus</b> then distributes the blood out. A single ventricle means some mixing of oxygenated and deoxygenated blood, an acceptable compromise for a low-energy, cold-blooded animal.',
      },
      {
        t: 'p',
        html: '<b>3. Why the male’s plumbing borrows the kidney.</b> In the male frog, sperm take a striking route: from the <b>testes</b> (attached to the upper kidney by a double fold of peritoneum, the <b>mesorchium</b>), <b>10–12 vasa efferentia</b> carry sperm into the kidney, where they join the <b>Bidder’s canal</b>, and then exit through the <b>urinogenital duct</b> (the ureter, which serves both urine and sperm) to the cloaca. Evolution simply repurposed existing tubing rather than building a separate sperm duct. In the <b>female</b>, by contrast, the ovaries have <b>no functional connection</b> to the kidney: eggs travel down separate oviducts.',
      },
      {
        t: 'p',
        html: '<b>4. Why the digestive system looks the way it does.</b> The adult frog is a <b>carnivore</b> that ambushes live prey, so its first tool is a <b>bilobed, sticky, protrusible tongue</b>: hinged at the front of the mouth and free at the back, it can be flicked out and flipped over to trap an insect, then folded back in. Food then passes down the oesophagus into the <b>stomach</b>, whose wall carries <b>gastric glands</b> that release <b>hydrochloric acid</b> and <b>pepsinogen</b> (the precursor of the protein-splitting enzyme; the acid activates it and creates the acidic environment). The <b>liver</b> (via bile) and <b>pancreas</b> add their secretions further along, and most chemical digestion and absorption is completed in the intestine before the residue reaches the rectum and cloaca. Every feature points back to one fact: this is an animal built to digest captured animal prey.',
      },
      {
        t: 'p',
        html: '<b>5. Why the brain and senses are arranged as they are.</b> The frog’s brain follows the standard vertebrate three-part plan: a <b>forebrain</b> (olfactory lobes for smell, paired cerebral hemispheres, and the diencephalon), a <b>midbrain</b> (paired optic lobes handling vision), and a <b>hindbrain</b> (cerebellum for balance and medulla oblongata for vital reflexes); the medulla continues as the spinal cord through the <b>foramen magnum</b>. Matching this, the frog’s sense organs are tuned to a double habitat: <b>eyes</b> with a <b>nictitating membrane</b> that lets it see underwater, an <b>internal ear</b> with the surface <b>tympanum</b> for hearing, plus <b>sensory papillae</b> (touch), <b>taste buds</b>, and <b>nasal epithelium</b> (smell). The best-organised of these are the eyes and internal ears.',
      },
      {
        t: 'p',
        html: '<b>The life cycle, metamorphosis:</b> Fertilisation is <b>external</b>: in water, the female releases a large clutch of eggs (a single female may lay a few thousand) and the male sheds sperm over them. The egg hatches into a <b>tadpole</b>, a fish-like larva that is <b>herbivorous, gilled, tailed, and ammonotelic</b>. The tadpole then undergoes <b>metamorphosis</b>: it grows limbs, loses its tail and gills, develops lungs, switches to a <b>carnivorous</b> diet, and shifts to <b>ureotelic</b> excretion, emerging as the adult frog. Because a distinct larval stage intervenes, the frog shows <b>indirect development</b>. This single life cycle is the whole “amphibian” story in miniature: a water-citizen young rebuilding itself into a land-citizen adult.',
      },
      { t: 'fig', id: 'b11-07-fig-7.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Trace the path of a sperm in a male frog from where it is produced until it leaves the body, naming each structure in order.',
        steps: [
          '<b>Reasoning.</b> Sperm are produced in the <b>testes</b>. From there, <b>10–12 vasa efferentia</b> carry them into the <b>kidney</b>, where they enter the <b>Bidder’s canal</b>. The sperm then pass into the <b>urinogenital duct</b> (the ureter, which serves a double role in the male) and finally exit through the <b>cloaca</b> and cloacal aperture.',
        ],
        ans: 'Testes → vasa efferentia → kidney → Bidder’s canal → urinogenital duct (ureter) → cloaca → cloacal aperture.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following is a feature of the frog tadpole but NOT of the adult frog? <b>(a)</b> Ureotelic excretion <b>(b)</b> Pulmonary respiration <b>(c)</b> Gills and a herbivorous diet <b>(d)</b> Three-chambered heart',
        steps: [
          '<b>Speed reasoning.</b> Don’t analyse all four: recall the tadpole-vs-adult contrast, a common trap. The tadpole is the aquatic, fish-like stage: <b>gilled, herbivorous, ammonotelic</b>. The adult is air-breathing, carnivorous and ureotelic. Options (a), (b) and (d) are all adult features. Only (c) is exclusively larval.',
          '<b>Pitfall it exploits:</b> students who blur the two stages and assume “frog = always carnivorous, always lungs.”',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> A frog can survive completely submerged underwater for long periods. <b>Reason (R):</b> When submerged, the frog carries out cutaneous respiration, exchanging dissolved oxygen across its moist skin. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: frogs can remain underwater for extended periods. R is true: underwater they shut down pulmonary breathing and rely on <b>cutaneous respiration</b> through the wet skin. And R is precisely why A is possible: the skin’s gas exchange is what keeps the submerged frog supplied with oxygen.',
          '<b>Trap:</b> option (b) catches students who know both facts but don’t connect skin-breathing to underwater survival.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'CUET / NCERT line-statement',
        q: 'Read the statements about the frog’s heart: (i) It is a thin-walled, triangular chamber. (ii) It is attached dorsally to the heart. (iii) It receives deoxygenated blood returning from the body. Name the structure described and state which atrium it opens into.',
        steps: [
          '<b>Reasoning.</b> A thin-walled, triangular, dorsally attached chamber receiving deoxygenated blood is the <b>sinus venosus</b>. It opens into the <b>right atrium</b>.',
        ],
        ans: 'Sinus venosus; opens into the right atrium.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the two types of glands present in the skin of a frog and state the function of each.',
            a: 'Mucous glands (keep the skin moist) and serous/poison glands (cutaneous defence).',
          },
          {
            q: '[NEET] Into how many parts is the body of an adult frog divided, and which body region is absent?',
            a: 'Two parts: head and trunk; the neck (and tail) is absent.',
          },
          {
            q: '[NEET] Which double fold of peritoneum attaches the testes of a frog to its kidneys?',
            a: 'The mesorchium.',
          },
          {
            q: '[CUET] State the chief nitrogenous waste of (a) the adult frog and (b) the frog tadpole.',
            a: '(a) Urea (ureotelic); (b) ammonia (ammonotelic).',
          },
          {
            q: '[NEET Assertion–Reason] A: The frog is regarded as a useful animal. R: It feeds on insects and pests and forms a link in the food chain. State whether R correctly explains A. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: 'Both true, and R correctly explains A: pest control and its food-chain role are exactly why the frog is considered useful.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The heart of a frog has, in addition to two atria and one ventricle, the accessory chambers:',
        opts: [
          { label: 'sinus venosus and truncus arteriosus', nudge: null },
          {
            label: 'sinus venosus and conus medullaris',
            nudge: '<b>(b)</b> “conus medullaris” is part of the spinal cord; the heart’s cone-shaped outflow chamber is the conus arteriosus (NCERT’s name; the book calls the outflow the truncus arteriosus).',
          },
          {
            label: 'two extra ventricles',
            nudge:
              '<b>(c)</b> frogs do not have extra ventricles: chosen by students who confuse them with crocodilian/mammalian hearts.',
          },
          {
            label: 'pericardium and mesorchium',
            nudge:
              '<b>(d)</b> pericardium is the sac around the heart and mesorchium belongs to the reproductive system: neither is a heart chamber.',
          },
        ],
        correct: 0,
        solution:
          'The frog heart carries a <b>sinus venosus</b> and a <b>truncus arteriosus</b> (NCERT calls it the conus arteriosus) alongside its three main chambers.',
      },
      {
        t: 'mcq',
        q: 'In a male frog, sperm reach the urinogenital duct by passing through:',
        opts: [
          {
            label: 'the oviduct',
            nudge:
              '<b>(a)</b> oviduct and <b>(c)</b> ovisac are female structures: picked by students who don’t track the sex of each part.',
          },
          { label: 'the Bidder’s canal after entering the kidney via vasa efferentia', nudge: null },
          {
            label: 'the ovisac',
            nudge:
              '<b>(a)</b> oviduct and <b>(c)</b> ovisac are female structures: picked by students who don’t track the sex of each part.',
          },
          {
            label: 'the truncus arteriosus',
            nudge: '<b>(d)</b> truncus arteriosus is a heart structure: an “any-tube-will-do” error.',
          },
        ],
        correct: 1,
        solution:
          'Sperm travel testes → vasa efferentia → kidney → <b>Bidder’s canal</b> → urinogenital duct.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is the chief nitrogenous waste of the frog tadpole?',
        opts: [
          {
            label: 'Urea',
            nudge: '<b>(a)</b> urea is the adult frog’s waste: the classic tadpole/adult swap trap.',
          },
          { label: 'Uric acid', nudge: '<b>(b)</b> uric acid belongs to terrestrial reptiles/birds.' },
          { label: 'Ammonia', nudge: null },
          {
            label: 'Guanine',
            nudge: '<b>(d)</b> guanine is a spider/some-arachnid waste: an outlier distractor.',
          },
        ],
        correct: 2,
        solution:
          'The aquatic, gilled tadpole is <b>ammonotelic</b>: surrounded by water, it can afford to excrete toxic but water-cheap ammonia.',
      },
      {
        t: 'mcq',
        q: 'The structure behind the frog’s eye that serves as its eardrum, in the absence of an external ear, is the:',
        opts: [
          {
            label: 'columella auris',
            nudge:
              '<b>(a)</b> columella auris is the single middle-ear ossicle lying deeper: a tempting “inner” answer.',
          },
          {
            label: 'nictitating membrane',
            nudge: '<b>(b)</b> nictitating membrane protects the eye, not the ear: a location confusion.',
          },
          { label: 'tympanum', nudge: null },
          {
            label: 'Eustachian tube',
            nudge:
              '<b>(d)</b> the Eustachian tube connects the middle ear to the pharynx but is not the eardrum.',
          },
        ],
        correct: 2,
        solution:
          'The <b>tympanum</b> is the visible eardrum behind the eye; the frog has no external ear flap.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing tadpole and adult.</b> Tadpole = gilled, herbivorous, ammonotelic, tailed. Adult = lungs/skin, carnivorous, ureotelic, no tail. Examiners often use this.',
          '<b>Mixing up male and female plumbing.</b> Testes connect to the kidney (vasa efferentia → Bidder’s canal); ovaries do <b>not</b> connect to the kidney. Memorise the asymmetry.',
          '<b>Treating the sinus venosus or truncus arteriosus as “ventricles.”</b> They are accessory chambers, not counted among the three main chambers (2 atria + 1 ventricle).',
          '<b>Calling the tympanum an “ear.”</b> It is the eardrum on the surface; the frog has no external ear, and the ossicle inside is the columella auris.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (the two-passport check):</b> For any frog feature, ask “is this for its water life or its land life?” Skin-breathing, webbed feet, external fertilisation and the gilled tadpole are the <b>water</b> passport; lungs, ureotelism and the carnivorous adult are the <b>land</b> passport. Sorting features into these two buckets makes almost every distractor fall away.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Frog = <i>Rana tigrina</i>,</b> cold-blooded amphibian; <b>aestivation</b> (summer) + <b>hibernation</b> (winter).',
            note: '',
          },
          {
            f: 'Body',
            note: 'head + trunk only (no neck/tail in adult); skin moist, scale-less, with <b>mucous + poison glands</b> and <b>chromatophores</b>; forelimbs 4 digits, hindlimbs 5 webbed digits; <b>tympanum</b> (no external ear).',
          },
          {
            f: 'Heart',
            note: '2 atria + 1 ventricle + <b>sinus venosus</b> + <b>truncus arteriosus</b>; in <b>pericardium</b>; nucleated RBCs.',
          },
          { f: 'Respiration', note: 'cutaneous (water) + pulmonary (land); tadpole = gills.' },
          {
            f: 'Excretion',
            note: 'adult <b>ureotelic</b>, tadpole <b>ammonotelic</b>; mesonephric kidneys.',
          },
          {
            f: 'Male sperm route',
            note: 'testes → vasa efferentia → kidney → <b>Bidder’s canal</b> → urinogenital duct → cloaca; testes held by <b>mesorchium</b>.',
          },
          {
            f: 'Reproduction',
            note: 'dioecious, <b>external fertilisation</b>, <b>tadpole → metamorphosis → adult</b> (indirect development).',
          },
          { f: 'Nervous', note: '<b>10 pairs of cranial nerves (NCERT)</b>.' },
        ],
        aids: [
          '“Two passports: water young, land adult.”',
          '“<b>SV → RA, LA from lungs, one ventricle.</b>”',
          '“Tadpole = ammonia; grown-up = urea.”',
        ],
      },
    ],
  },

  // ─────────────────── Additional topic A · pp. 439–441 ───────────────────
  {
    n: 'A',
    title: 'Germ Layer Derivatives',
    extra: true,
    kalam:
      'NEET asks germ-layer derivations directly: “which germ layer gives rise to cartilage?” or “from which layer is the liver derived?”',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the four animal tissue types (Topic 01), the organ-system ladder (Topic 02) and the three dissected animals (Topics 03 to 05). The Additional topics take their examinable patterns further. A gives the germ-layer origin of tissues and organs, which the chapter does not list. B sets earthworm, cockroach and frog side by side across seven systems; Topic 02 compares them only on gut and circulation. C puts the earthworm’s nephridia segments and outlets in one table. D explains the cockroach’s tracheal system and Malpighian tubules step by step. E covers the frog’s arterial arcades, the order of metamorphosis and the renal portal system. F is a location table for the epithelial and connective subtypes. G covers the frog brain and a three-animal nervous system comparison. H is mixed practice, I a checklist and J what NEET asks. Some of this repeats the chapter on purpose, so that you can compare facts side by side.',
      },
      {
        t: 'p',
        html: 'The chapter introduces the four tissue types and their functions but does not state which embryonic germ layer produces each. NEET asks germ-layer derivations directly: “which germ layer gives rise to cartilage?” or “from which layer is the liver derived?” The answer is usually found by knowing the developmental fate of each germ layer.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The three-layer rule:</b><br><br>• <b>Ectoderm</b> → outer covering (epidermis of skin), lining of mouth and anus, central and peripheral nervous system, sensory organs (eye, ear, nose), pineal and pituitary glands, enamel of teeth.<br>• <b>Mesoderm</b> → muscles (skeletal, smooth, cardiac), bones and cartilage, blood and blood vessels, kidneys and ureters, lining of body cavities (peritoneum, pericardium, pleura), gonads and their ducts.<br>• <b>Endoderm</b> → lining of gut and respiratory tract, liver, pancreas, thyroid, parathyroid, thymus, urinary bladder and urethra (parts derived from the embryonic cloaca).',
      },
      {
        t: 'p',
        html: '<b>Memory mnemonic:</b> “Ecto = outside, Endo = inside, Meso = middle.” Ectoderm makes the outer covering and the nervous system. Endoderm makes the gut tube and its major glands. Mesoderm makes the structural and circulatory machinery between them.',
      },
      {
        t: 'p',
        html: '<b>Glands follow their epithelium:</b> a gland takes the germ layer of the epithelium from which it buds. The parotid gland buds from the ectodermal lining of the mouth (ectoderm), whereas the liver and pancreas bud from the gut tube (endoderm). Whether a gland is serous or mucous says nothing about its germ layer.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Germ Layer Identification.</b> Which one of the following is derived from the mesoderm? <b>(a)</b> Epidermis of skin <b>(b)</b> Lining of gut <b>(c)</b> Cartilage <b>(d)</b> Thyroid gland',
        steps: [
          '<b>Reasoning.</b> Apply the three-layer rule. Epidermis = ectoderm (outer covering). Lining of gut = endoderm (gut tube lining). Thyroid gland = endoderm (a gut-derived gland). Cartilage = mesoderm (supporting connective tissue, part of the mesodermal skeletal system).',
        ],
        ans: '(c) Cartilage.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Connective Tissue and Germ Layers.</b> Name the germ layer from which the following are formed: (i) bone, (ii) blood, (iii) areolar tissue, (iv) the lining of the gut.',
        steps: [
          '<b>Reasoning.</b> Bone (skeletal connective tissue) and blood (fluid connective tissue) are both mesodermal. Areolar tissue is loose connective tissue, also mesodermal. The lining of the gut is the epithelium of the gut tube, which is endodermal.',
        ],
        ans: '(i) Mesoderm, (ii) Mesoderm, (iii) Mesoderm, (iv) Endoderm.',
      },
      {
        t: 'ex',
        tag: 'NEET Assertion–Reason',
        q: '<b>Embryonic Origin of Tissues.</b> <b>Assertion (A):</b> Bone, cartilage, blood and areolar tissue are all derived from the mesoderm. <b>Reason (R):</b> The mesoderm, the middle germ layer, forms the body’s supporting, packing and circulating tissues. Choose: <b>(a)</b> Both A and R true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is true: these connective tissues of the trunk and limbs arise from the mesoderm. R is true and explains A: bone and cartilage support, areolar tissue packs, and blood circulates, and these are the jobs of the tissues the middle layer forms. (Some connective tissue of the head and face comes from the neural crest instead, which is why the assertion names the tissues rather than saying “all”.) The correct option is (a): both A and R true, R is the correct explanation of A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which germ layer gives rise to the nervous system in an embryo?',
            a: 'Ectoderm.',
          },
          {
            q: '[CBSE] Name the germ layer from which the liver and pancreas are derived.',
            a: 'Endoderm.',
          },
          {
            q: '[NEET] The enamel of teeth is derived from: (a) ectoderm, (b) mesoderm, (c) endoderm, (d) mesenchyme.',
            a: '(a) Enamel is derived from ectoderm (specifically, the dental epithelium of ectodermal origin).',
          },
          {
            q: '[NEET] Which of the following is NOT derived from the ectoderm? (a) Epidermis, (b) Enamel, (c) Lining of foregut, (d) Lens of eye.',
            a: '(c) The lining of the foregut is endodermal, not ectodermal. The foregut develops from the embryonic gut tube, which is endodermal.',
          },
          {
            q: '[CUET] Give one example each of a tissue derived from (i) ectoderm, (ii) mesoderm, and (iii) endoderm.',
            a: '(i) Ectoderm: epidermis of skin (or nervous tissue, or enamel); (ii) Mesoderm: bone (or cartilage, or blood); (iii) Endoderm: lining of intestine (or liver, or thyroid).',
          },
        ],
      },
    ],
  },

  // ─────────────────── Additional topic B · pp. 441–445 ───────────────────
  {
    n: 'B',
    title: 'Comprehensive Comparative Anatomy',
    extra: true,
    kalam:
      'Topics 03 to 05 describe earthworm, cockroach and frog one at a time, and Topic 02 compares them only on gut and circulation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 03 to 05 describe earthworm, cockroach and frog one at a time, and Topic 02 compares them only on gut and circulation. NEET comparison questions (“Which of these has an open circulatory system?” or “Which animal has Malpighian tubules?”) require you to hold all three animals in one mental table and pick the right column. This section is that table, organized by system, with the key discriminating feature bolded where one stands out.',
      },

      { t: 'part', title: 'B1: Body Plan and Support' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          ['Body symmetry', 'Bilateral', 'Bilateral', 'Bilateral'],
          [
            'Segmentation',
            'Metamerism (~100–120 segments)',
            'Head + thorax + abdomen (6 + 3 + 10 segments); exoskeleton',
            'Head + trunk (no neck, no tail in adult)',
          ],
          [
            'Body wall',
            'Cuticle + epidermis + muscles (no hard skeleton)',
            'Chitinous exoskeleton (sclerites + arthrodial membrane)',
            'Moist skin (no scales) + underlying muscles',
          ],
          [
            'Coelom',
            'True coelom, partitioned segmentally',
            'Haemocoel (open body cavity; true coelom reduced)',
            'True coelom (well-developed body cavity)',
          ],
          [
            'Support system',
            'Hydrostatic skeleton (fluid-filled coelom)',
            'Exoskeleton (chitin)',
            'Endoskeleton (bones, cartilage)',
          ],
        ],
      },

      { t: 'part', title: 'B2: Digestive System' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          ['Gut type', 'Complete', 'Complete', 'Complete'],
          [
            'Feeding habit',
            'Detritivore (swallows soil and decaying matter)',
            'Omnivorous scavenger',
            'Carnivorous adult; herbivorous tadpole',
          ],
          ['Food storage', 'No crop', 'Crop (storage)', 'No crop; stomach is primary site'],
          [
            'Grinding chamber',
            'Gizzard (segments 8–9)',
            'Gizzard (proventriculus, foregut)',
            'No gizzard; stomach is muscular',
          ],
          [
            'Enzyme glands',
            'Intestinal caeca (segment 26)',
            'Hepatic/gastric caeca at foregut-midgut junction',
            'Liver (bile) + pancreas',
          ],
          [
            'Digestion site',
            'Intestine (absorption via typhlosole)',
            'Midgut (absorption)',
            'Small intestine (chemical digestion + absorption)',
          ],
          [
            'Anus/cloaca',
            'Anus (terminal)',
            'Anus (terminal)',
            'Cloaca (common opening for digestive, urinary, reproductive)',
          ],
        ],
      },

      { t: 'part', title: 'B3: Circulatory System' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          ['Type', '<b>Closed</b>', '<b>Open</b>', '<b>Closed</b>'],
          [
            'Blood pigment',
            'Haemoglobin dissolved in plasma (colourless corpuscles)',
            'None (haemolymph colourless)',
            'Haemoglobin in nucleated RBCs',
          ],
          [
            'Heart/Chambers',
            'Dorsal vessel + 4 pairs of “hearts” (segmental pumps)',
            '13-chambered dorsal heart in haemocoel',
            '2 atria + 1 ventricle + sinus venosus + truncus arteriosus',
          ],
          [
            'Blood cells',
            'Colourless, phagocytic',
            'Haemocytes (colourless)',
            'Nucleated RBCs + WBCs',
          ],
          ['Respiratory pigment', 'Yes (dissolved Hb)', 'No', 'Yes (in RBCs)'],
        ],
      },

      { t: 'part', title: 'B4: Respiratory System' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          [
            'Respiratory organ',
            'None specialised',
            '<b>Tracheal system</b>',
            'Skin + buccal cavity + lungs',
          ],
          [
            'Gas exchange surface',
            'Moist skin (cutaneous)',
            'Tracheoles to tissues directly',
            'Cutaneous (underwater) + pulmonary (land)',
          ],
          [
            'Spiracles',
            'None',
            '<b>10 pairs</b> (2 thoracic + 8 abdominal)',
            'None (air reaches the lungs through the nostrils and buccal cavity)',
          ],
          ['Tadpole stage', '–', '–', '<b>Gills</b> (external then internal)'],
        ],
      },

      { t: 'part', title: 'B5: Excretory System' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          [
            'Excretory organ',
            'Nephridia (3 types)',
            '<b>Malpighian tubules</b>',
            'Mesonephric kidneys',
          ],
          [
            'Nitrogenous waste',
            'Ammonia/urea (varied)',
            '<b>Uric acid (uricotelic)</b>',
            'Adult: <b>urea (ureotelic)</b>; Tadpole: <b>ammonia (ammonotelic)</b>',
          ],
          ['Water conservation', 'Moderate', 'Very high (uric acid)', 'Moderate'],
          [
            'Accessory excretory',
            'Chloragogen cells',
            'Fat body, nephrocytes, urecose glands',
            'Urinary bladder (stores urine)',
          ],
        ],
      },

      { t: 'part', title: 'B6: Nervous System' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          [
            'Pattern',
            'Cerebral ganglia above the pharynx, a nerve ring round it, and a double ventral nerve cord',
            'Double ventral nerve cord + ganglia (3 thoracic + 6 abdominal)',
            'Dorsal brain (fore/mid/hind) + spinal cord',
          ],
          [
            'Centralisation',
            'Partially decentralised',
            'Highly decentralised (can survive without the head for up to about a week)',
            'Centralised',
          ],
          [
            'Sensory structures',
            'Photoreceptor cells, touch receptors in skin; no eyes',
            'Compound eyes (mosaic vision), antennae (smell/feel), anal cerci, palps',
            'Eyes (nictitating membrane), tympanum, nasal epithelium, taste buds',
          ],
        ],
      },

      { t: 'part', title: 'B7: Reproductive System' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          [
            'Sex',
            '<b>Hermaphrodite</b> (bisexual)',
            '<b>Dioecious</b> (separate sexes)',
            '<b>Dioecious</b>',
          ],
          [
            'Fertilisation',
            'Cross-fertilisation (sperm exchanged during mating; eggs are fertilised in the cocoon)',
            'Internal (spermatophore transfer)',
            'External (in water)',
          ],
          [
            'Development',
            'Direct (tiny worm from cocoon)',
            '<b>Indirect: paurometabolous</b> (gradual, no pupa; nymph to adult, ~13 moults)',
            '<b>Indirect: via tadpole metamorphosis</b>',
          ],
          [
            'Young form',
            'None',
            'Nymph (miniature adult, no wings initially)',
            'Tadpole (gilled, tailed, herbivorous)',
          ],
          [
            'Cocoon/egg case',
            'Cocoon secreted by <b>clitellum (segments 14–16)</b>',
            '<b>Ootheca</b> (14–16 eggs, secreted by collaterial glands)',
            'Eggs in gelatinous mass (a few thousand per clutch)',
          ],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Identifying an Animal from Features.</b> An animal has: (i) an open circulatory system, (ii) Malpighian tubules for excretion, (iii) a chitinous exoskeleton, and (iv) 10 pairs of spiracles. The animal is: <b>(a)</b> earthworm, <b>(b)</b> cockroach, <b>(c)</b> frog, <b>(d)</b> <i>Hydra</i>.',
        steps: [
          '<b>Speed reasoning.</b> Scan for the most restrictive unique marker. Malpighian tubules, spiracles, a chitinous exoskeleton and an open circulation together point to an insect. The earthworm and the frog both have closed circulation and no spiracles, and <i>Hydra</i> has none of these organs. Among the options only the cockroach is an insect.',
          '<b>Note:</b> other insects also share the first three features; the NCERT-specific cockroach fact is its 10 pairs of spiracles (2 thoracic + 8 abdominal).',
        ],
        ans: '(b) Cockroach.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Circulatory System Comparison.</b> Differentiate between the circulatory systems of an earthworm and a cockroach under the headings: (i) type, (ii) respiratory pigment, (iii) oxygen transport.',
        steps: [
          '<b>Reasoning.</b> Earthworm = closed system, Hb dissolved in plasma, O<sub>2</sub> carried by blood. Cockroach = open system, no respiratory pigment, O<sub>2</sub> delivered by tracheal tubes directly to tissues.',
        ],
        ans: '(i) Earthworm: closed; Cockroach: open. (ii) Earthworm: haemoglobin present, dissolved in plasma; Cockroach: no respiratory pigment. (iii) Earthworm: oxygen transported by blood via closed vessels; Cockroach: oxygen delivered directly to tissues by tracheal system, independent of haemolymph.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which of these animals has nephridia as the excretory organ? (a) Cockroach, (b) Earthworm, (c) Frog, (d) All of the above.',
            a: '(b) Earthworm. (Earthworm has nephridia; cockroach has Malpighian tubules; frog has mesonephric kidneys.)',
          },
          {
            q: '[CBSE] Name one feature that is common to earthworm, cockroach and frog.',
            a: 'All three have a complete digestive system (mouth to anus, with different chambers).',
          },
          {
            q: '[NEET] The nitrogenous waste of a cockroach is: (a) ammonia, (b) urea, (c) uric acid, (d) creatinine.',
            a: '(c) Uric acid. (Uricotelic: conserves water.)',
          },
          {
            q: '[CUET] Which animal shows indirect development with a larval stage?',
            a: 'Frog (via the tadpole, a larva). The cockroach also develops indirectly, through nymphs, but a nymph is not a larva. Earthworm shows direct development.',
          },
          {
            q: '[NEET] The heart of a frog differs from that of a cockroach in being: (a) 13-chambered, (b) dorsal, (c) part of a closed circulation with haemoglobin, (d) part of an open circulation.',
            a: '(c) Closed with haemoglobin. The frog’s heart pumps blood that stays in vessels (closed circulation) and carries haemoglobin in nucleated RBCs. The cockroach’s heart discharges haemolymph into the haemocoel (open circulation), with no haemoglobin.',
          },
        ],
      },
    ],
  },
];
