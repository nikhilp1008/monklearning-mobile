import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 13 (Plant Growth and Development), Additional topics C, D, E and F,
 * word for word from the Class 11 Biology Master Reference: C "PGR Signal Transduction:
 * How Each Regulator Acts" (pp. 798 to 800), D "Phytochrome: The Pr/Pfr Mechanism and
 * Photoperiodic Timekeeping" (pp. 801 to 804, ending partway down p. 804), E "Nastic
 * Movements: The Unexplored Half of Plant Mobility" (pp. 804 to 808, answers end at the top
 * of p. 808) and F "What NEET Actually Asks" (the book’s "Addendum P", pp. 808 to 818).
 * Page 819 is the next chapter.
 *
 * Tables the book prints inside a worked example (the matching columns of Archetype 4 and
 * Q11) are set as lines of cells separated by " | " inside that question. The book’s
 * example headings ("Example C.1 - [NEET] Sequence of Gibberellin Action in Cereal
 * Germination") become the example’s tag (the bracket) and a bold lead on its question.
 * F’s graded practice set is one practice block whose "Q1 (Easy)." headings are bold leads.
 * Scientific names are italic; common names (mimosa, tulip, lettuce) are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 798–800 ─────────────────────────
  {
    n: 'C',
    title: 'PGR Signal Transduction: How Each Regulator Acts',
    extra: true,
    kalam: 'Topic 02 says what each regulator does; this topic shows how it does it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 lists what each PGR does, including gibberellin and alpha-amylase in malting, ABA and stomata, and cytokinin and leaf senescence. Some questions go further and ask how it does it. This additional topic gives three cellular sequences: the gibberellin–alpha-amylase pathway in germinating cereals, the ABA stomatal-closure cascade in drought-stressed leaves, and the cytokinin delay-of-senescence mechanism. NCERT states the outcome of each; the cellular sequences below go beyond NCERT and are given as enrichment.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>C1: Gibberellin signaling in cereal aleurone.</b>' },
      {
        t: 'proc',
        title: 'The pathway is:',
        steps: [
          'Imbibed barley grain: embryo releases gibberellin (GA<sub>3</sub>) into the endosperm.',
          'GA<sub>3</sub> binds to GA receptors in the aleurone layer cells.',
          'GA signaling activates transcription of genes encoding alpha-amylase and other hydrolytic enzymes.',
          'Alpha-amylase is secreted into the starchy endosperm.',
          'Starch → maltose → glucose.',
          'Glucose fuels embryo growth → radicle protrusion → germination.',
        ],
      },
      {
        t: 'p',
        html: 'The fact to remember: gibberellin induces the synthesis of alpha-amylase and other hydrolytic enzymes in germinating cereal grains. The pathway above is the mechanism behind that statement.',
      },
      { t: 'p', html: '<b>C2: ABA signaling in stomatal closure.</b>' },
      {
        t: 'proc',
        title: 'The pathway is:',
        steps: [
          'Drought stress → roots send ABA signal to leaves.',
          'ABA accumulates in guard cells.',
          'ABA binds to ABA receptors in guard cell membranes.',
          'This triggers: (a) opening of anion channels → Cl<sup>−</sup> and malate<sup>2−</sup> efflux; (b) inhibition of H<sup>+</sup>-ATPase → membrane depolarisation.',
          'K<sup>+</sup> channels open → K<sup>+</sup> efflux.',
          'Loss of ions → the water potential inside the guard cells rises (becomes less negative) and is now higher than outside.',
          'Water leaves guard cells by osmosis.',
          'Guard cells become flaccid → stomatal pore closes.',
        ],
      },
      {
        t: 'p',
        html: 'The fact to remember: ABA causes stomatal closure during water stress by making the guard cells lose turgor. The steps above are the mechanism.',
      },
      { t: 'p', html: '<b>C3: Cytokinin anti-senescence mechanism (Richmond–Lang effect).</b>' },
      {
        t: 'proc',
        title: 'The sequence is:',
        steps: [
          'Cytokinin binds to receptors in leaf cells.',
          'This promotes synthesis of proteins and chloroplast proteins specifically.',
          'Cytokinin suppresses the synthesis of senescence-promoting factors (RNases, proteases, chlorophyll-degrading enzymes).',
          'Cytokinin promotes nutrient mobilisation: attracts nutrients from surrounding tissues into cytokinin-treated areas.',
          'Result: chlorophyll retention, delayed yellowing, maintained photosynthetic activity.',
        ],
      },
      {
        t: 'p',
        html: 'The fact to remember: cytokinins delay leaf senescence (the Richmond–Lang effect). The mechanism is maintenance of active protein synthesis plus suppression of degradative enzymes.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Sequence of Gibberellin Action in Cereal Germination.</b> Arrange in correct order: (a) Alpha-amylase breaks starch, (b) Embryo releases GA<sub>3</sub>, (c) Radicle protrudes, (d) GA<sub>3</sub> binds to aleurone receptors, (e) Sugars nourish embryo.',
        steps: [
          'Correct sequence: Embryo releases GA<sub>3</sub> → GA<sub>3</sub> binds to aleurone receptors → alpha-amylase breaks starch → sugars nourish embryo → radicle protrudes.',
        ],
        ans: '(b) → (d) → (a) → (e) → (c).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>ABA Mechanism in Stomatal Closure.</b> During a drought, a leaf’s ABA level rises sharply. Explain, in stepwise sequence, how ABA causes the stomata to close, naming the cells involved and the ion movements.',
        steps: [
          '1. ABA accumulates in and around guard cells.<br>2. ABA binds to ABA receptors in the guard-cell membrane.<br>3. Anion channels (Cl<sup>−</sup> channels) open → Cl<sup>−</sup> efflux from guard cells.<br>4. Simultaneously, H<sup>+</sup>-ATPase activity is inhibited → membrane depolarises.<br>5. K<sup>+</sup> channels open → K<sup>+</sup> efflux from guard cells.<br>6. Loss of ions (K<sup>+</sup>, Cl<sup>−</sup>, malate<sup>2−</sup>) makes the water potential inside the guard cells higher (less negative) than outside.<br>7. Water leaves guard cells by osmosis.<br>8. Guard cells lose turgor and become flaccid.<br>9. The flaccid guard cells contract, closing the stomatal pore.',
          'The cells involved are guard cells. The ion movements are: Cl<sup>−</sup> efflux, K<sup>+</sup> efflux, and H<sup>+</sup> pump inhibition. Water follows by osmosis.',
        ],
        ans: 'Steps 1–9 as above.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Richmond–Lang Effect.</b> A cut flower placed in a cytokinin solution stays fresh for days longer than one placed in water. Explain this at the cellular level, naming two biochemical events that cytokinin promotes to delay senescence.',
        steps: [
          'Cytokinin binds to leaf-cell receptors and (1) promotes synthesis of proteins and chloroplast proteins, maintaining chlorophyll and photosynthetic machinery; (2) suppresses synthesis and action of senescence-promoting enzymes (RNases, proteases, chlorophyllases that break down chlorophyll); (3) promotes nutrient mobilisation, drawing resources into the cytokinin-treated tissue. Together these actions prevent the protein degradation and pigment loss that characterise senescence, keeping the cut flower green and turgid.',
        ],
        ans: 'Two events from: active protein synthesis, chlorophyll retention, suppression of RNase/protease/chlorophyllase activity, nutrient mobilisation. (Any two correctly named.)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the tissue on which gibberellin acts to break seed dormancy in germinating cereals, and name the enzyme it induces.',
            a: 'Aleurone layer; alpha-amylase.',
          },
          {
            q: '[NEET] Arrange in correct order: (a) ABA binds guard cells, (b) K<sup>+</sup> efflux from guard cells, (c) Stomatal closure, (d) Water potential in guard cells rises, (e) Cl<sup>−</sup> efflux from guard cells.',
            a: '(a) → (e) → (b) → (d) → (c). ABA binds first, triggering Cl<sup>−</sup> efflux, then K<sup>+</sup> efflux; the guard-cell water potential rises, water leaves, the guard cells become flaccid and the stomatal pore closes.',
          },
          {
            q: '[CUET] State the Richmond–Lang effect and give one biochemical explanation for why cytokinin delays senescence.',
            a: 'Richmond–Lang effect: cytokinins delay leaf senescence, keeping chlorophyll and protein content high for longer. Biochemical explanation: cytokinin promotes active protein synthesis and suppresses degradative enzymes (RNases, proteases, chlorophyllases) in leaf cells.',
          },
          {
            q: '[NEET High-Difficulty] A drought-stressed plant is treated with an inhibitor of ABA synthesis. Predict what happens to its stomata and justify your answer.',
            a: 'Stomata remain open. ABA is the hormone that closes stomata under water stress by causing ion efflux from guard cells; blocking ABA synthesis removes this signal, so guard cells stay turgid and the stomatal pore stays open. The plant will lose water more rapidly: a trade-off.',
          },
          {
            q: '[CUET] Which PGR is responsible for inducing alpha-amylase synthesis in germinating barley grains? Name the layer of the endosperm that responds to this hormone.',
            a: 'Gibberellin (GA<sub>3</sub>); aleurone layer.',
          },
          {
            q: '[NEET] Explain why applying cytokinin to a senescing leaf area causes it to stay green while surrounding tissue turns yellow.',
            a: 'Cytokinin suppresses the synthesis of chlorophyll-degrading enzymes (chlorophyllases) and RNases/proteases in the treated cells, while simultaneously promoting synthesis of new proteins and chloroplast proteins. The treated patch therefore retains chlorophyll and protein content while adjacent cells, which lack cytokinin, undergo normal senescence (pigment loss and protein degradation). Cytokinin also causes nutrient mobilisation toward the treated area, further supporting the tissue.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 801–804 ─────────────────────────
  {
    n: 'D',
    title: 'Phytochrome: The Pr/Pfr Mechanism and Photoperiodic Timekeeping',
    extra: true,
    kalam: 'Phytochrome is a switch with two forms, and the form present tells the plant about light.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 introduces phytochrome as a light-absorbing photoreceptor pigment with two interconvertible forms. It does not name the forms, say which one is active, link phytochrome to the circadian clock or cover de-etiolation. Questions on this topic ask for the specific forms, their interconversion, which form is biologically active, and how this connects to the circadian clock and de-etiolation. The Pr/Pfr mechanism goes beyond the NCERT text and is given here as enrichment.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The two forms of phytochrome.</b><br>Phytochrome exists as a dimer of chromophore-bearing proteins. Each monomer exists in two interconvertible forms:<br>• <b>Pr (Phytochrome Red):</b> The inactive form. Absorbs red light (<i>λ</i><sub>max</sub> ≈ 660 nm). When Pr absorbs red light, it undergoes a conformational change and converts to Pfr.<br>• <b>Pfr (Phytochrome Far-red):</b> The biologically active, signaling form. Absorbs far-red light (<i>λ</i><sub>max</sub> ≈ 730 nm). When Pfr absorbs far-red light, it reverts to Pr. Pfr also slowly reverts to Pr in darkness (dark reversion).',
      },
      {
        t: 'p',
        html: '<b>Pr ⇌ Pfr interconversion (the molecular switch).</b><br><br>Pr → Pfr: red light (660 nm).<br>Pfr → Pr: far-red light (730 nm), and slowly in darkness.<br><br>Sunlight contains more red than far-red light, so in daylight the Pr/Pfr ratio is shifted toward Pfr. At night, Pfr slowly reverts to Pr in darkness. The Pfr:Pr ratio is therefore a molecular record of recent light exposure, one of the cues the plant uses to tell day from night.',
      },
      {
        t: 'p',
        html: '<b>Biological roles of Pfr.</b><br>Pfr (active form) triggers:<br>• Seed germination in some species (lettuce, <i>Arabidopsis</i>)<br>• Inhibition of stem elongation in seedlings (de-etiolation)<br>• Chloroplast development (spinach, cucumber)<br>• Flowering responses (in the classical model Pfr promotes flowering in LDP and inhibits it in SDP; the real pattern depends on species and phytochrome)<br><br>Pr (inactive form):<br>• Maintains seed dormancy in light-sensitive seeds<br>• Where Pfr is absent, as in darkness, the seedling stays etiolated',
      },
      {
        t: 'p',
        html: 'Shade avoidance is the opposite situation. Canopy leaves absorb red light and transmit far-red light, so under a canopy the Pfr:Pr ratio is low, and this low ratio (not Pfr) triggers the stem and petiole elongation of shade avoidance.',
      },
      {
        t: 'p',
        html: '<b>Red/far-red reversibility in seed germination.</b><br>The classic experiment: lettuce seeds exposed to red light germinate well; those exposed to far-red light germinate poorly. If red is followed by far-red, germination is inhibited: even a brief far-red flash reverses the effect. The final light treatment determines the outcome, because it sets the Pr/Pfr ratio.',
      },
      {
        t: 'table',
        title: null,
        head: ['Light treatment', 'Pfr:Pr at end', 'Germination'],
        rows: [
          ['Red (R)', 'High Pfr', 'High'],
          ['Far-red (FR)', 'Low Pfr (mostly Pr)', 'Low'],
          ['R then FR', 'Mostly Pr (FR converted Pfr back)', 'Low'],
          ['FR then R', 'High Pfr', 'High'],
        ],
      },
      {
        t: 'p',
        html: 'The conclusion: Pfr promotes germination, Pr maintains dormancy. The Pfr:Pr ratio at the end of the light treatment is what matters.',
      },
      {
        t: 'p',
        html: '<b>Phytochrome and circadian rhythms.</b><br>Plants possess an internal ~24-hour biological clock (circadian clock). Phytochrome acts as the set signal that entrains (synchronises) this clock to the external day/night cycle. Each dawn, red light converts Pr to Pfr and resets the clock. Each dusk, the decline of Pfr (partly by dark reversion) signals night. This allows the plant to anticipate dawn and dusk and gate its responses. For example, long-day plants (LDP) and short-day plants (SDP) judge day length by the length of the uninterrupted dark period, which they measure mainly with this clock (the classical hourglass explanation made the decline of Pfr in the dark the timer; the circadian clock is now thought to do most of the timing).',
      },
      {
        t: 'p',
        html: '<b>De-etiolation: the switch from dark to light growth.</b><br>In darkness, seedlings are etiolated (pale, elongated, apical hook, closed cotyledons: the Pr-dominant state). Upon light exposure, Pfr accumulates and triggers de-etiolation: chlorophyll synthesis, chloroplast development, inhibition of stem elongation, opening of cotyledons. This is the molecular basis of de-etiolation and normal seedling development; the opposite condition, a low Pfr:Pr ratio under a leaf canopy, triggers shade avoidance (stem elongation).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Red/Far-Red Reversibility.</b> Lettuce seeds are subjected to three treatments: (i) red light only, (ii) red light followed immediately by far-red light, (iii) far-red light followed immediately by red light. Predict the germination percentage in each case and explain with reference to Pr and Pfr.',
        steps: [
          '(i) Red light converts Pr to Pfr → high Pfr → high germination.<br>(ii) Red first gives high Pfr; far-red immediately converts it back to Pr → low Pfr → low germination (far-red wins over red when given after).<br>(iii) Far-red first keeps most Pr; red then converts it to Pfr → high Pfr → high germination (red wins when given after far-red).',
        ],
        ans: '(i) High germination; (ii) Low germination; (iii) High germination. The final light treatment determines the Pfr:Pr ratio, which controls germination.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying Active Form.</b> Which form of phytochrome is the biologically active, signal-transducing form?',
        steps: [
          'Pfr (Phytochrome Far-red) is the active form. It is produced from Pr upon red-light absorption and triggers downstream developmental responses (germination, de-etiolation). Pr is the inactive form that accumulates in darkness.',
        ],
        ans: 'Pfr.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Why Does Sunlight Trigger Seed Germination but Deep Shade Does Not?</b> A seed on a forest floor under a dense canopy germinates poorly, but the same seed in an open field germinates well. Explain using the Pr/Pfr mechanism.',
        steps: [
          'Sunlight (especially through open sky) has a high red:far-red ratio (~1.1–1.2), converting most Pr to Pfr, the active form that triggers germination. A dense forest canopy selectively filters out red light (absorbed by chlorophyll in overlying leaves) while transmitting more far-red light, giving a low red:far-red ratio (~0.1). This keeps most phytochrome in the Pr (inactive) form, suppressing germination. The plant is using the R:FR ratio as a proxy for “open sky vs shade,” and only germinating when the light environment promises adequate light for seedling establishment.',
        ],
        ans: 'High R:FR (open) → Pfr → germination; low R:FR (shade) → Pr → dormant seeds. The R:FR ratio is the proximate signal.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What are the two forms of phytochrome? Which form is biologically active and which wavelength of light converts the inactive form to the active form?',
            a: 'Pr (Phytochrome Red, inactive, <i>λ</i><sub>max</sub> ≈ 660 nm) and Pfr (Phytochrome Far-red, active, <i>λ</i><sub>max</sub> ≈ 730 nm). Red light converts Pr to Pfr. Pfr is biologically active.',
          },
          {
            q: '[CUET] A lettuce seed is given (a) red light, (b) far-red light, (c) red light followed by far-red light. State the expected germination response in each case, giving a reason.',
            a: '(a) Red → converts Pr to Pfr → high germination (Pfr is active). (b) Far-red → converts Pfr to Pr → low germination (Pr is inactive). (c) Red followed by far-red → Pfr produced by red is immediately converted back to Pr by far-red → low germination. The final light treatment sets the Pr/Pfr ratio.',
          },
          {
            q: '[NEET] Explain why a seed on a forest floor under thick canopy may not germinate even though it receives some light, using the concept of the red:far-red ratio.',
            a: 'Dense canopy has a low red:far-red ratio (~0.1) because leaves absorb red light and transmit/scatter far-red. This keeps phytochrome predominantly in the inactive Pr form, which maintains seed dormancy. Open sunlight has a high red:far-red ratio (~1.2), converting phytochrome to the active Pfr form, which triggers germination. The seed is “reading” the light quality, not just the presence or absence of light.',
          },
          {
            q: '[NEET High-Difficulty] What is meant by dark reversion of phytochrome? How does dark reversion contribute to a plant’s ability to measure the length of the night?',
            a: 'Dark reversion is the slow, spontaneous conversion of Pfr back to Pr in the absence of light. During the night, Pfr is gradually removed by dark reversion. In the classical hourglass explanation, a long night allows complete dark reversion, giving the plant a measure of night length, while a short night leaves some residual Pfr; on this view the plant tells long nights (SDP conditions) from short nights (LDP conditions) by how much Pfr has disappeared. The circadian clock is now thought to do most of the timing, with the Pfr level as one input.',
          },
          {
            q: '[CUET] Name the biological clock present in plants and state how phytochrome interacts with it to entrain (synchronise) the clock to the external day/night cycle.',
            a: 'The circadian clock (~24-hour biological rhythm). At dawn, red light converts Pr to Pfr and this rise in Pfr acts as a “reset” signal that synchronises the circadian clock to the external day. At dusk, the fall in Pfr (partly by dark reversion) signals the onset of night. This daily Pfr cycle entrains the internal clock so that it anticipates dawn and dusk, enabling time-of-day-specific responses.',
          },
          {
            q: '[NEET] State two responses triggered by the Pfr (active) form of phytochrome that are not triggered by the Pr form.',
            a: 'Any two from: seed germination (in light-requiring seeds), de-etiolation (chlorophyll synthesis, chloroplast development, inhibition of stem elongation, opening of cotyledons). (The Pr form, by contrast, maintains etiolation and seed dormancy in darkness. Stem and petiole elongation under a canopy is triggered by a low Pfr:Pr ratio, not by Pfr.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 804–808 ─────────────────────────
  {
    n: 'E',
    title: 'Nastic Movements: The Unexplored Half of Plant Mobility',
    extra: true,
    kalam: 'A response that occurs regardless of the direction from which the stimulus arrives is called a nastic movement.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 describes only one tropic movement, the phototropism of the coleoptile; gravitropism is not covered. The counterpart of tropisms, nastic movements, goes beyond the NCERT text but is examinable: questions on nyctinasty (sleep movements), seismonasty (touch response) and the tropism/nastic distinction are a common trap in CUET and NEET-style papers (the book’s estimate from past papers, not official figures). This additional topic covers it.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Tropisms vs Nastic movements: the definitional split',
        head: ['Feature', 'Tropism', 'Nastic movement'],
        rows: [
          ['Direction of response', 'Toward or away from the stimulus', 'Independent of stimulus direction'],
          ['Stimulus direction', 'Determines the direction of growth response', 'The stimulus is on/off, not directional'],
          ['Rate of response', 'Usually slow, growth-based', 'Can be slow (growth) or fast (turgor-based)'],
          [
            'Examples',
            'Phototropism, gravitropism, hydrotropism, thigmotropism',
            'Nyctinasty, seismonasty, thermonasty, photonasty',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The key test question: “A response that occurs regardless of the direction from which the stimulus arrives is called a nastic movement.” If the response direction depends on where the stimulus comes from, it is a tropism.',
      },
      {
        t: 'p',
        html: '<b>Nyctinasty: circadian leaf movements.</b><br>Many legumes (for example mimosa and beans) and other plants such as <i>Oxalis</i> move their leaves up at dawn and down at dusk in a rhythm that persists even in constant darkness. These are called nyctinastic movements (sleep movements).<br>• <b>Mechanism:</b> Turgor changes in the pulvinus (a joint-like swelling at the base of the leaf or leaflet). At dusk, water moves out of flexor cells and into extensor cells of the pulvinus, causing the leaf to close downward. At dawn, the reverse occurs: water moves into flexor cells, pushing the leaf upward.<br>• <b>Driver:</b> The circadian clock (internal ~24-hour rhythm). The movement continues even in complete darkness because it is clock-driven, not light-driven per se. However, light does entrain the clock.<br>• <b>Biological significance:</b> May reduce water loss by transpiration at night; may protect leaf surfaces from cold; may reduce herbivory by making the plant appear less leafy to nocturnal herbivores.',
      },
      {
        t: 'p',
        html: '<b>Seismonasty: rapid touch response.</b><br><i>Mimosa pudica</i> (touch-me-not, sleeping grass) closes its leaflets and droops its entire leaf within seconds of being touched, shaken, or heated.<br>• <b>Mechanism:</b> At the base of each leaflet and leaf is a pulvinus. Touch generates an electrical signal (action potential) that travels through the plant. At the pulvinus, this signal triggers rapid efflux of K<sup>+</sup> and Cl<sup>−</sup> from the motor (flexor) cells on the lower side of the pulvinus, followed by water efflux by osmosis. These cells lose turgor, so the leaf droops and the leaflets fold; the closure takes 1–2 seconds.<br>• <b>Speed:</b> Far faster than any growth-based movement: this is turgor-mediated, not growth-mediated.<br>• <b>Signal transmission:</b> The electrical signal propagates from the stimulated point to other leaves, which also close in a wave. This is a primitive “nervous system”: plants do not have nerves but do have electrical signaling.<br>• <b>Classification:</b> Seismonasty is the classic example of a rapid, non-directional response, qualifying it as nastic, not tropic.',
      },
      {
        t: 'p',
        html: '<b>Thermonasty and photonasty.</b><br>• <b>Thermonasty:</b> Flower opening in response to temperature (e.g. tulip flowers open in warmth and close in cold). Direction of response is not related to the direction of temperature change: it is nastic.<br>• <b>Photonasty:</b> Some flowers open in light and close in darkness (e.g. morning glory, poppy). The response is to the presence or absence of light, not to the direction from which light comes: nastic.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Distinguishing Tropism from Nastic Movement.</b> A plant’s leaves close at night and open during the day, regardless of the direction of sunlight. Name and define this movement.',
        steps: [
          'This is nyctinasty, a nastic movement driven by the circadian clock (leaf sleep movements). A nastic movement is a response whose direction is independent of the direction of the stimulus. Here the stimulus is the day/night cycle, but the leaf position (up or down) is not toward or away from any stimulus direction: it is simply “open in day, closed at night.”',
        ],
        ans: 'Nyctinasty (a circadian nastic movement). It is nastic because the response direction does not depend on the direction of the stimulus.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Rapid Leaf Closure in Mimosa.</b> A touch to the left leaflet of a <i>Mimosa pudica</i> compound leaf causes all leaflets on that leaf to close rapidly. (a) Is this a tropic or nastic movement? (b) Name the movement. (c) State the mechanism of the rapid response.',
        steps: [
          '(a) Nastic movement: the response occurs regardless of the direction from which the touch stimulus arrives.<br>(b) Seismonasty (touch-induced nastic movement).<br>(c) The touch generates an electrical signal (action potential) that travels through the pulvinus. This triggers rapid efflux of K<sup>+</sup> and Cl<sup>−</sup> from cells on the flexor side of the pulvinus, followed by water efflux by osmosis. Loss of turgor causes the cells to collapse and the leaf to close rapidly (1–2 seconds). The movement is turgor-based, not growth-based.',
        ],
        ans: '(a) Nastic; (b) Seismonasty; (c) Turgor change in pulvinus driven by ion efflux following an electrical signal.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Why Is Phototropism a Tropism But Nyctinasty Is Not?</b> Explain why phototropism in a coleoptile is classified as a tropism while the daily opening and closing of <i>Oxalis</i> leaves is classified as a nastic movement.',
        steps: [
          'Phototropism is a tropism because the direction of the growth response (bending toward light) is directly determined by the direction from which the light arrives. The coleoptile grows toward the light source: the stimulus direction sets the response direction. Nyctinasty is a nastic movement because the daily leaf open/close cycle is driven by the circadian clock and occurs at a set time regardless of light direction. If you shine a torch from any direction at noon, the <i>Oxalis</i> leaf is open; if you shine it at midnight, the leaf is closed: the response does not depend on the direction of the light, only on the time of day.',
        ],
        ans: 'Direction of stimulus determines response direction → tropism (phototropism). Response direction is independent of stimulus direction → nastic movement (nyctinasty).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Mechanism Comparison.</b> Compare the mechanism of nyctinasty and seismonasty in <i>Mimosa pudica</i> with respect to (a) speed of response, (b) driving force, and (c) involvement of the circadian clock.',
        steps: [
          '(a) Speed: Nyctinasty is relatively slow (minutes to hours), driven by gradual turgor changes in the pulvinus. Seismonasty is very fast (1–2 seconds), driven by rapid ion fluxes and water movement.<br>(b) Driving force: Nyctinasty is driven by the circadian clock-regulated turgor changes. Seismonasty is driven by a touch-generated electrical signal (action potential) that triggers ion efflux.<br>(c) Circadian clock: Nyctinasty is directly driven by the circadian clock: it continues in constant darkness. Seismonasty needs no clock to run, although the clock can modulate how readily it responds; it is triggered by touch.',
        ],
        ans: '(a) Nyctinasty slow, seismonasty fast (seconds). (b) Both are turgor-based, but nyctinasty is clock-driven turgor change, while seismonasty is electrically triggered turgor change. (c) Nyctinasty is circadian clock-dependent; seismonasty needs no clock to run, although the clock can modulate how readily it responds.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define nastic movement and distinguish it from a tropism, giving one example of each.',
            a: 'A nastic movement is a response whose direction is independent of the direction of the stimulus. A tropism is a response whose direction is determined by the direction of the stimulus. Example nastic: nyctinasty (leaf sleep movements); example tropic: phototropism (shoot bending toward light).',
          },
          {
            q: '[NEET] Name the rapid leaf-closure movement shown by <i>Mimosa pudica</i> and state the tissue responsible for the movement.',
            a: 'Seismonasty (touch-induced nastic movement); the pulvinus (joint-like motor organ at the leaf base).',
          },
          {
            q: '[CUET] State two differences between nyctinasty and seismonasty.',
            a: '(a) Speed: nyctinasty is slow (minutes to hours), seismonasty is very fast (1–2 seconds). (b) Trigger: nyctinasty is driven by the circadian clock and light/dark transition; seismonasty is triggered by mechanical disturbance. (c) Signal type: nyctinasty involves gradual clock-driven turgor changes; seismonasty involves rapid electrical signaling (action potentials).',
          },
          {
            q: '[NEET] Explain why the opening of tulip flowers on a warm day is classified as a nastic movement (thermonasty) and not as a tropism.',
            a: 'In thermonasty (tulip flowers opening in warmth), the response is to temperature change per se: the flower opens as temperature rises and closes as it falls. The direction of the temperature change (from warm to cool or cool to warm) does not determine the direction of the flower’s movement. A tropism requires the stimulus direction to determine the response direction. Since this is not the case for thermonasty, it is classified as a nastic movement.',
          },
          {
            q: '[NEET High-Difficulty] A plant kept in constant darkness for 48 hours still shows daily leaf open/close movements. What does this tell you about the driver of this movement?',
            a: 'The fact that the movement continues in constant darkness tells you that it is driven by an endogenous circadian clock (~24-hour rhythm), not by light per se. The clock is entrained (synchronised) by light/dark cycles but continues to run even in their absence. This is nyctinasty: the circadian clock opens leaves at subjective dawn and closes them at subjective dusk regardless of actual light conditions.',
          },
          {
            q: '[CUET] In <i>Mimosa pudica</i>, name the cells in the pulvinus responsible for the rapid leaf closure, and state the ion whose efflux is the primary trigger for water loss.',
            a: 'Flexor cells in the pulvinus are responsible for closure. The primary ion efflux is K<sup>+</sup> (potassium), accompanied by Cl<sup>−</sup> (chloride). Loss of these ions makes the water potential inside the flexor cells higher (less negative) than outside, so water leaves by osmosis and the cells lose turgor, producing rapid leaf closure.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 808–818 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'In NEET papers, questions from this chapter fall into three broad clusters, listed here from heaviest to lightest emphasis.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'In NEET papers, questions from this chapter fall into three broad clusters, listed here from heaviest to lightest emphasis (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Relative emphasis'],
        rows: [
          ['Plant Growth Regulators (Topic 02)', 'Heaviest: usually the largest share of the chapter’s questions'],
          ['Photoperiodism & Vernalisation (Topic 03)', 'Moderate: a recurring fact or night-break item'],
          ['Growth Phases & Differentiation (Topic 01)', 'Lighter: occasional questions on growth curves and differentiation'],
        ],
      },
      {
        t: 'p',
        html: '<b>PGR dominance is real and consistent.</b> Plant growth regulators are a heavily tested part of the chapter. Within PGR, ethylene and the auxin:cytokinin ratio are favourite topics. Topic 01 is tested lightly, but the questions that do appear are often high-difficulty assertion–reason items.',
      },
      {
        t: 'p',
        html: '<b>A note on emphasis:</b> treat this as a guide to what to revise first, not as a count of past questions.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'Six question shapes return reliably (the book’s estimate from past papers, not official figures). Each is described, cracked, and illustrated with a worked example modelled on past papers.',
      },

      { t: 'p', html: '<b>Archetype 1: Hormone → Function (Fact-Recall MCQ)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem names a hormone or gives its source/chemical class, and the correct option names the specific function, application, or another hormone.<br><b>Approach:</b> Run a two-filter check:<br>(a) Is this a promoter or an inhibitor?<br>(b) Which specific promoter or inhibitor is it?',
      },
      {
        t: 'p',
        html: 'If the stem says “gaseous hormone synthesised from methionine,” ethylene is the only answer. Never let a plausible-sounding distractor, such as ethane or acetylene, survive.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (modelled on past NEET questions):</b><br>Which plant growth regulator closes stomata during water stress and is antagonistic to gibberellin?<br>(a) Auxin (b) Abscisic acid (c) NAA (d) GA<sub>3</sub>',
        steps: [
          'ABA is the stress hormone that accumulates in guard cells and induces stomatal closure. It is also the direct antagonist of gibberellin (which breaks dormancy; ABA enforces it).',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 2: Auxin/Cytokinin Ratio in Tissue Culture</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A callus is subjected to different hormone ratios; candidates must predict roots, shoots, or undifferentiated callus.<br><b>Approach:</b> Lock the rule permanently into memory:<br>auxin-high → roots; cytokinin-high → shoots; balanced → dividing callus (the classic result from tobacco callus).<br>Read the ratio the question actually states: do not substitute “high auxin” for “auxin ∶ cytokinin = 2 ∶ 1” if the question says 1 ∶ 2.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (modelled on past NEET questions):</b><br>A callus explant is cultured on a medium containing a cytokinin-to-auxin ratio of 20 ∶ 1. The expected morphogenetic outcome is:<br>(a) roots only (b) shoots only (c) undifferentiated callus (d) somatic embryos',
        steps: [
          'At a cytokinin ∶ auxin ratio of 20 ∶ 1, cytokinin dominates overwhelmingly. Cytokinin-dominance directs the callus toward shoot differentiation.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 3: Statement / “All-of-the-above” with Multiple Correct</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of 4 statements (i–iv) is given; candidates select the correct combination (e.g. “which of the following statements are correct?”). This appears as both stand-alone and within match-the-column items.<br><b>Approach:</b> Evaluate every statement on its own before reading the options. Eliminate the options containing any statement you have already judged false. Never assume the pattern of correctness follows the order i, ii, iii, iv.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (modelled on past NEET questions):</b><br>Refer to functions of ethephon given below:<br>(i) Sprayed in aqueous solution and readily absorbed.<br>(ii) Hastens fruit ripening in tomatoes and apples.<br>(iii) Induces fruit thinning in cotton, cherry and walnut.<br>(iv) Promotes female sex expression in cucumber and increases yield.<br>How many of the above statements are correct?<br>(a) One (b) Two (c) Three (d) All four',
        steps: [
          '(i) Correct: ethephon is applied as an aqueous solution.<br>(ii) Correct: ethephon releases ethylene, the ripening hormone.<br>(iii) Correct: ethylene-induced abscission is used for fruit thinning.<br>(iv) Correct: ethylene promotes female flower formation in cucurbits.<br>All four statements are accurate.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>Archetype 4: Match-the-Column (PGR ↔ Function / Discovery)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns (hormone/discovery in column I, description/scientist in column II) must be paired 1 ∶ 1.<br><b>Approach:</b> Map each item in column I to exactly one in column II. Start with the unique identifiers: zeatin → corn kernels (cytokinin); florigen → flowering hormone; ethephon → ethylene source. Items described by chemical class or unique source (e.g. “from autoclaved DNA”) pin down one answer immediately, and the rest collapse into place.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (modelled on past NEET questions):</b><br>Match the discovery in Column I with the correct scientist in Column II.<br><br>Column I | Column II<br>A. Foolish seedling disease of rice | I. F.W. Went<br>B. Crystallised kinetin | II. Skoog and Miller<br>C. Release of ethylene gas | III. E. Kurosawa<br>D. Bioassay of auxin | IV. Cousins<br><br>(a) A–III; B–II; C–IV; D–I<br>(b) A–I; B–II; C–III; D–IV<br>(c) A–II; B–III; C–I; D–IV<br>(d) A–III; B–IV; C–II; D–I',
        steps: [
          'A. The “foolish seedling” or bakanae disease of rice was shown by Kurosawa to be caused by a fungal product → III.<br>B. Kinetin was crystallised by Skoog and Miller from autoclaved DNA → II.<br>C. Cousins demonstrated the volatile ripening signal (ethylene) from ripe oranges → IV.<br>D. F.W. Went identified auxin using the agar-block coleoptile curvature test → I.',
        ],
        ans: '(a) A–III; B–II; C–IV; D–I',
      },

      { t: 'p', html: '<b>Archetype 5: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Assertion (A) and Reason (R) statements; four answer patterns (both true + explains; both true + does not explain; A true R false; A false R true).<br><b>Approach:</b> Judge A and R independently first, before selecting the option. The most common trap is a true A paired with a partially true but logically disconnected R. A second trap: a factually true R that names the wrong site, hormone, or direction.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (modelled on past NEET questions):</b><br>Assertion (A): Decapitation (removal of the shoot tip) is widely used in tea plantations and hedge-making.<br>Reason (R): Removal of shoot tips results in the growth of lateral buds because the source of auxin (which suppresses lateral buds) is eliminated.<br>Options:<br>(1) Both A and R true; R correctly explains A.<br>(2) Both true; R does not explain A.<br>(3) A true; R false.<br>(4) A false; R true.',
        steps: [
          'A is factually correct: decapitation is standard practice in tea and hedge management.<br>R is also correct: the shoot tip is the primary source of auxin, which enforces apical dominance; removing the tip removes the auxin source, freeing lateral buds to grow.<br>R directly explains why decapitation works.',
        ],
        ans: '(1)',
      },

      { t: 'p', html: '<b>Archetype 6: Photoperiodic Classification + Night-Break Logic</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A plant is described as short-day or long-day with a stated critical dark period; candidates must predict whether it will flower under a given light/dark cycle, or identify what a night-break flash will do.<br><b>Approach:</b> Translate the category before answering.<br>SDP = “long-night plant”: needs continuous darkness longer than its critical value.<br>LDP = “short-night plant”: needs darkness shorter than its critical value.<br>A night-break destroys the continuous dark period for an SDP and therefore prevents flowering; for an LDP it may induce flowering by effectively shortening the night.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (modelled on past NEET questions):</b><br>Maryland Mammoth tobacco is a short-day plant whose critical duration of darkness is 10 hours. The plant is exposed to a cycle of 16 hours light and 8 hours darkness. Will it flower?',
        steps: [
          'Maryland Mammoth needs a continuous dark period exceeding 10 hours. The given cycle provides only 8 hours of darkness, which is below the critical minimum of 10 hours: not inductive. The plant will <b>not</b> flower.',
        ],
        ans: 'Does not flower.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The following confusion patterns appear repeatedly in the design of wrong options (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'Why the distractor works, and the correct idea'],
        rows: [
          [
            '<b>“Auxin causes fruit ripening”</b>',
            'Students remember auxin as a promoter and over-apply it; ethylene is the ripening hormone.',
          ],
          [
            '<b>Natural vs synthetic auxin mix-up</b>',
            'IBA is natural (plant-derived) but sounds synthetic; 2,4-D is synthetic (a weedicide for broad-leaved dicots). Natural: IAA and IBA. Synthetic: NAA, 2,4-D.',
          ],
          [
            '<b>“Cytokinin promotes apical dominance”</b>',
            'Cytokinin overcomes apical dominance (releases lateral buds); auxin enforces it. The two are antagonists here.',
          ],
          [
            '<b>“ABA causes abscission”</b>',
            'Despite the name, ethylene drives abscission; ABA’s headline roles are dormancy and stomatal closure.',
          ],
          [
            '<b>“Short-day = few hours of light”</b>',
            'The label is relative to the plant’s own critical value, and the dark period is what actually matters.',
          ],
          [
            '<b>“Shoot apex perceives photoperiod”</b>',
            'Light is perceived by leaves; the apex is the response site. This swap is a classic trap.',
          ],
          [
            '<b>“Vernalisation = inhibition by cold”</b>',
            'Vernalisation promotes flowering through cold; it is not a cold-mediated inhibition.',
          ],
          [
            '<b>“Day-neutral plants do not flower”</b>',
            'DNPs flower in essentially any photoperiod, not in none.',
          ],
          [
            '<b>“Arithmetic growth = sigmoid curve”</b>',
            'Arithmetic growth gives a straight line. Geometric growth is exponential (J-shaped while resources are unlimited) and, over the whole life cycle, flattens into the S-shaped sigmoid curve with lag, log, diminishing and stationary phases. Mixing pattern and graph is a persistent trap.',
          ],
          [
            '<b>“Ethylene is purely an inhibitor”</b>',
            'Ethylene promotes ripening, root-hair formation, and flowering in pineapple; it cannot be called a pure inhibitor.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Questions are arranged easy → hard. Answers are checked against the chapter content and NCERT.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q1 (Easy).</b> Which of the following is the only gaseous plant growth regulator?<br>(a) Abscisic acid (b) Ethylene (c) Gibberellin (d) Auxin',
            a: 'Ethylene (C<sub>2</sub>H<sub>4</sub>) is the only PGR that is a gas at room temperature. ABA is a carotenoid derivative; GA is a terpenoid acid; auxins are indole or phenoxy compounds.<br><b>Answer: (b)</b>',
          },
          {
            q: '<b>Q2 (Easy).</b> Identify the growth regulator used as a selective herbicide against broad-leaved dicot weeds in a wheat field.<br>(a) IAA (b) Kinetin (c) 2,4-D (d) GA<sub>3</sub>',
            a: '2,4-D (2,4-dichlorophenoxyacetic acid) is a synthetic auxin that is highly toxic to dicots but safe for monocots like wheat, making it the classic selective weedicide.<br><b>Answer: (c)</b>',
          },
          {
            q: '<b>Q3 (Moderate).</b> The graph of arithmetic growth of an organ plotted against time is:<br>(a) sigmoid (b) linear (c) parabolic (d) hyperbolic',
            a: 'Arithmetic growth occurs when only one daughter cell continues dividing after each mitosis; the rate of growth is constant, producing a straight line on a size-vs-time plot.<br><b>Answer: (b)</b>',
          },
          {
            q: '<b>Q4 (Moderate).</b> Two leaves have the following growth over one day:<br>• Leaf A: initial area 10 cm<sup>2</sup> → final area 55 cm<sup>2</sup><br>• Leaf B: initial area 50 cm<sup>2</sup> → final area 55 cm<sup>2</sup><br>Both grow for the same time period. Which statement is correct?<br>(a) AGR of B > AGR of A<br>(b) RGR of A > RGR of B<br>(c) Both AGR and RGR are equal<br>(d) RGR of B > RGR of A',
            a: 'AGR<sub><i>A</i></sub> = <frac><num>55 − 10</num><den>1</den></frac> = 45 cm<sup>2</sup> day<sup>−1</sup><br>AGR<sub><i>B</i></sub> = <frac><num>55 − 50</num><den>1</den></frac> = 5 cm<sup>2</sup> day<sup>−1</sup><br>AGR<sub><i>A</i></sub> > AGR<sub><i>B</i></sub>, so (a) is false and (c) is false.<br>RGR<sub><i>A</i></sub> = <frac><num>45</num><den>10</den></frac> × 100 = 450% per day<br>RGR<sub><i>B</i></sub> = <frac><num>5</num><den>50</den></frac> × 100 = 10% per day<br>RGR<sub><i>A</i></sub> ≫ RGR<sub><i>B</i></sub>, so (b) is correct and (d) is false.<br><b>Answer: (b)</b>',
          },
          {
            q: '<b>Q5 (Moderate).</b> “A short-day plant is in truth a long-night plant.” This statement is justified because:<br>(a) short-day plants need long periods of light<br>(b) the critical factor is the duration of uninterrupted darkness<br>(c) night breaks promote flowering in short-day plants<br>(d) short-day plants flower only under long-day conditions',
            a: 'Short-day plants require a continuous dark period exceeding a critical minimum. A night-break flash (light during the dark period) resets the measurement and prevents flowering, proving that the dark period, not the light period, is decisive.<br><b>Answer: (b)</b>',
          },
          {
            q: '<b>Q6 (Moderate).</b> Which of the following statements about ethephon is INCORRECT?<br>(a) It releases ethylene slowly when applied in aqueous solution.<br>(b) It hastens fruit ripening in tomatoes and apples.<br>(c) It induces flowering in long-day plants by extending the photoperiod.<br>(d) It accelerates abscission of flowers and fruits in cotton and cherry.',
            a: 'Ethephon releases ethylene and is used for ripening, abscission, and sex expression in cucumbers. It has no role in extending or manipulating the photoperiod for long-day plants; that is a phytochrome-mediated response unrelated to ethylene.<br><b>Answer: (c)</b>',
          },
          {
            q: '<b>Q7 (Moderate–Hard).</b> Assertion (A): In a tissue culture experiment, a callus grown on a medium with a high auxin-to-cytokinin ratio produces roots.<br>Reason (R): Auxin promotes shoot differentiation, while cytokinin promotes root differentiation.<br>(a) Both A and R are true, and R correctly explains A.<br>(b) Both true, but R does not correctly explain A.<br>(c) A is true; R is false.<br>(d) A is false; R is true.',
            a: 'A is correct: high auxin:cytokinin is the established condition for root differentiation in callus culture.<br>R is false: it reverses the roles: a high cytokinin:auxin ratio favours shoots and a high auxin:cytokinin ratio favours roots.<br><b>Answer: (c)</b>',
          },
          {
            q: '<b>Q8 (Hard).</b> Refer to the following statements about seed physiology:<br>(i) Scarification is a method that makes the seed coat permeable to water.<br>(ii) Vernalisation refers to the promotion of flowering by exposure to low temperature.<br>(iii) ABA promotes the breaking of seed dormancy.<br>(iv) The Richmond–Lang effect describes the delay of leaf senescence by cytokinin.<br>How many of the above statements are correct?<br>(a) One (b) Two (c) Three (d) Four',
            a: '(i) Correct: scarification (mechanical or chemical) renders the seed coat permeable, overcoming physical dormancy.<br>(ii) Correct: vernalisation is precisely the promotion of flowering by cold treatment.<br>(iii) Incorrect: ABA enforces dormancy; GA breaks it. The two act antagonistically, so ABA does not promote the breaking of dormancy.<br>(iv) Correct: the Richmond–Lang effect is the delay of senescence by cytokinin application.<br>Three statements are correct.<br><b>Answer: (c)</b>',
          },
          {
            q: '<b>Q9 (Hard).</b> A plant hormone X was first isolated from human urine and is weakly acidic. Another hormone Y is a carotenoid derivative that closes stomata and enforces seed dormancy. A third hormone Z, when applied to a dwarf pea plant, causes dramatic stem elongation and converts the dwarf phenotype to tall.<br>Identify X, Y and Z respectively.<br>(a) Auxin, ABA, Gibberellin<br>(b) Gibberellin, ABA, Auxin<br>(c) Cytokinin, Ethylene, Auxin<br>(d) ABA, Auxin, Gibberellin',
            a: 'X from human urine = auxin (IAA was the first auxin isolated from urine).<br>Y = ABA (carotenoid derivative; stomatal closure; dormancy).<br>Z = GA (causes dwarf-to-tall conversion; GA<sub>3</sub> is the standard bioassay demonstration).<br><b>Answer: (a)</b>',
          },
          {
            q: '<b>Q10 (Hard).</b> Which of the following statements is INCORRECT about plant growth and differentiation?<br>(a) The initial cells of the root and shoot apices are rich in protoplasm and possess a large, conspicuous nucleus.<br>(b) Cells in a watermelon may increase in size by up to 350,000 times.<br>(c) Cytokinins are most abundant in mature, fully differentiated leaves.<br>(d) Dedifferentiation is the regaining of the capacity to divide by living, already-differentiated cells.',
            a: '(a) Correct: meristematic cells have dense cytoplasm and large nuclei.<br>(b) Correct: this figure appears in NCERT.<br>(c) Incorrect: cytokinins are most abundant in meristematic regions and sites of rapid cell division (roots, shoot buds, young fruits), not in mature leaves.<br>(d) Correct: dedifferentiation restores division to mature cells.<br><b>Answer: (c)</b>',
          },
          {
            q: '<b>Q11 (Hard).</b> Match the entries in Column I with their correct descriptions in Column II.<br><br>Column I | Column II<br>A. Zeatin | I. One of the first gibberellins discovered; the most studied<br>B. Florigen | II. Cytokinin from corn kernels and coconut milk<br>C. GA<sub>3</sub> | III. Hypothesised flowering hormone from leaves<br>D. Kinetin | IV. Synthetic cytokinin from autoclaved DNA<br><br>Select the correct answer:<br>(a) A–II; B–III; C–I; D–IV<br>(b) A–I; B–II; C–III; D–IV<br>(c) A–III; B–IV; C–I; D–II<br>(d) A–II; B–I; C–IV; D–III',
            a: 'A. Zeatin is the natural cytokinin from <i>Zea mays</i> → II.<br>B. Florigen is the hypothesised hormone produced in leaves under inductive photoperiods → III.<br>C. GA<sub>3</sub> was one of the first gibberellins isolated and remains the most studied → I.<br>D. Kinetin (6-furfurylamino purine) was identified from autoclaved herring-sperm DNA by Skoog and Miller → IV.<br><b>Answer: (a)</b>',
          },
          {
            q: '<b>Q12 (Very Hard).</b> Assertion (A): A photoperiod-sensitive plant from which all leaves have been removed will not flower even when exposed to a fully inductive photoperiod.<br>Reason (R): The shoot apical meristem is the site of perception of the photoperiodic stimulus, and without leaves no signal can be transmitted to it.<br>(a) Both A and R are true and R correctly explains A.<br>(b) Both true but R does not correctly explain A.<br>(c) A is true; R is false.<br>(d) A is false; R is true.',
            a: 'A is true for a photoperiod-sensitive plant: a defoliated plant of this kind cannot flower under any photoperiod.<br>R is false: the leaf perceives the photoperiodic stimulus; the shoot apex is the effector site where florigen acts to form flowers. Without leaves, no florigen is produced, so the apex receives no signal, but the reason is that the leaf (not the apex) is the perception site.<br><b>Answer: (c)</b>',
          },
        ],
      },

      { t: 'part', title: 'Two Ideas Worth Drilling' },
      {
        t: 'p',
        html: 'Two ideas are worth rehearsing until they are automatic (the book’s estimate from past papers, not official figures). <b>The auxin:cytokinin ratio</b> is the master-switch logic behind tissue-culture questions: high auxin to cytokinin gives roots, high cytokinin to auxin gives shoots, and a balanced ratio keeps the callus dividing. <b>The decisiveness of the dark period</b> in photoperiodism (the “long-night plant” framing) is best reinforced with the night-break logic: a flash of light in the middle of the night destroys the continuous dark period, which stops flowering in a short-day plant and can induce it in a long-day plant. Knowing the facts is not enough; practise applying the ratio rule and the night-break consequence to unfamiliar situations.',
      },
    ],
  },
];
