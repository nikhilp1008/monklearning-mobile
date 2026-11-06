import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 06, Importance & Applications of Coordination Compounds:
 * pp. 231–236 of the Class 12 Chemistry Master Reference, word for word, split at
 * its Sections 1 to 8. These pages hold no figure and no drawing. The book's
 * "Sub-01" to "Sub-05" are "Topic 01" to "Topic 05" here, and its "subtopic" is
 * "topic". Its formulas inside italic text are upright (errata, cosmetic).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 06 · pp. 231–236 ─────────────────────────
  {
    n: '06',
    title: 'Importance & Applications of Coordination Compounds',
    kalam: 'A coordination compound is nature’s and industry’s way of taking control of a metal ion.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Almost guaranteed marks if you have memorised the right examples. CBSE Boards regularly ask 2–3 mark “role of coordination compounds in biological systems / analytical chemistry / medicine / metallurgy.” NEET loves match-the-column questions linking a central metal to its biomolecule. JEE Main occasionally tests an application (cisplatin, EDTA, cyanide extraction) inside a mixed question.',
      },
      {
        t: 'p',
        html: 'Everything in the previous five topics — Werner’s inner and outer spheres, ligands and chelates, isomerism, bonding, stability — might feel abstract until you realise that coordination compounds are quietly running much of the living and industrial world. The green of every leaf, the red of your blood, the drug that treats certain cancers, the way silver is pulled out of crushed rock, the smooth silver on a plated spoon — all of these are coordination chemistry at work. This topic is where the whole chapter pays off: every concept you have built up now turns out to explain something you can see, touch, or depend on for life itself.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a coordination compound is nature’s and industry’s way of taking control of a metal ion. A free metal ion is reactive and indiscriminate; wrap it in the right ligands and you can tune its colour, its reactivity, its solubility, even whether it will give a chemical test at all. That control is exactly what makes these compounds useful — a biomolecule positions a metal precisely so it can carry oxygen; a chemist wraps a toxic metal in a chelate so the body can excrete it; a metallurgist dissolves an unreactive metal by turning it into a soluble complex.',
      },
      {
        t: 'p',
        html: 'The single most important idea threading through every application is one you already know: the <b>chelate effect</b> (Topic 01) and the resulting high <b>stability</b> (Topic 05). Most of the workhorse applications — EDTA in water testing, chelate therapy in medicine, the porphyrin ring in haemoglobin — rely on a polydentate ligand clamping a metal in an unusually stable grip.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The usefulness of a particular complex depends on its stability being appropriate for the job: in chelate therapy the drug must bind the toxic metal more strongly than the body’s own ligands do, but not so strongly that it strips out essential metals; in extraction the complex must be stable enough to dissolve the metal but able to release it again on treatment. Stability is a tool to be tuned, not simply maximised.',
      },

      { t: 'part', title: 'The major application areas' },
      {
        t: 'p',
        html: '<b>1. Biological systems.</b> Many molecules essential to life are coordination compounds of a metal held in a ring of donor atoms:<br>• <b>Chlorophyll</b> — a coordination compound of <b>magnesium</b>, the green pigment that captures light for photosynthesis. The magnesium sits at the centre of a large nitrogen-donor ring (a porphyrin-like macrocycle); the ring, held in shape by the metal, absorbs red and blue light and passes on the energy.<br>• <b>Haemoglobin</b> — a coordination compound of <b>iron</b>, the red pigment of blood that binds and transports oxygen (myoglobin, a related iron protein, stores oxygen in muscle). The iron(II) is held inside a flat <b>heme (porphyrin)</b> ring by four nitrogen donors, with a protein supplying a fifth bond; the sixth position is left free to grip an oxygen molecule <b>reversibly</b> — tight enough to pick O<sub>2</sub> up in the lungs, loose enough to release it in the tissues. It is precisely this reversible coordination that makes blood an oxygen courier. Carbon monoxide is poisonous because it binds that same iron site (through the synergic mechanism of Topic 04) far more strongly than O<sub>2</sub> and lets go only slowly, shutting the courier down.<br>• <b>Vitamin B<sub>12</sub> (cyanocobalamin)</b> — a coordination compound of <b>cobalt</b>, the anti-pernicious-anaemia factor, with cobalt held in a ring related to the porphyrins.<br>• <b>Metalloenzymes</b> such as carboxypeptidase A and carbonic anhydrase, which catalyse biological reactions with a metal ion (zinc, in both of these) at their active site.',
      },
      {
        t: 'p',
        html: '<b>2. Medicinal chemistry.</b><br>• <b>Cisplatin</b>, cis-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>], and related platinum complexes inhibit the growth of tumours and are used in cancer chemotherapy — and recall (Topic 02) that only the cis isomer is active, because it must bind two adjacent sites on a DNA strand to block the cancer cell from dividing.<br>• <b>Chelate therapy:</b> a chelating ligand is used to mop up a metal present in toxic amounts and carry it out of the body. <b>D-penicillamine</b> and <b>desferrioxime B</b> (the drug is also called desferrioxamine, or deferoxamine) remove excess copper and iron (the latter is used to treat iron overload from repeated blood transfusions); <b>EDTA</b> is used in the treatment of <b>lead poisoning</b> (given as its calcium salt, so that it does not strip calcium), where it wraps the lead in a stable, water-soluble chelate that the kidneys can excrete. The art of chelate therapy is selectivity — the drug must out-compete the body’s own ligands for the toxic metal without stripping out essential ones (Topic 05).',
      },
      {
        t: 'p',
        html: '<b>3. Analytical chemistry.</b><br>• <b>Complexometric (EDTA) titration:</b> because EDTA forms very stable 1:1 chelates, it is used to estimate metal ions such as Ca<sup>2+</sup>, Mg<sup>2+</sup> and Zn<sup>2+</sup> quantitatively, with a sharp end-point signalled by a metal-ion indicator.<br>• <b>Hardness of water</b> is measured by titration with disodium EDTA, since Ca<sup>2+</sup> and Mg<sup>2+</sup> form stable complexes with it; the volume of EDTA used gives the total hardness directly.<br>• <b>Qualitative analysis:</b> selective complex formation gives characteristic results — dimethylglyoxime (DMG) gives a rosy-red precipitate of a complex with Ni<sup>2+</sup>; the brown-ring test for nitrate relies on [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup>; and the deep-blue [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> confirms copper. Many separation steps in the analysis of metal-ion mixtures depend on forming or destroying complexes selectively (<b>masking and demasking</b>, the practical face of Topic 05 stability).<br>• <b>Colorimetric estimation:</b> the characteristic colours of transition-metal complexes (Topic 03) let concentrations be measured from the depth of colour.',
      },
      {
        t: 'p',
        html: '<b>4. Metallurgy and extraction.</b><br>• <b>Extraction of silver and gold:</b> the metals are leached from their ores by cyanide solution in the presence of air, as soluble cyanide complexes, [Ag(CN)<sub>2</sub>]<sup>−</sup> and [Au(CN)<sub>2</sub>]<sup>−</sup>, then recovered by displacement with a more reactive metal such as zinc (the cyanide process). Complexation makes an unreactive, insoluble noble metal mobile, and a reactivity difference then sets it free.<br>• <b>Purification of nickel (Mond process):</b> impure nickel is converted to volatile [Ni(CO)<sub>4</sub>] (Topic 04), which is then decomposed on heating to deposit pure nickel and regenerate CO.',
      },
      {
        t: 'p',
        html: '<b>5. Electroplating.</b> Articles are plated with silver and gold far more smoothly and evenly from solutions of the complexes [Ag(CN)<sub>2</sub>]<sup>−</sup> and [Au(CN)<sub>2</sub>]<sup>−</sup> than from solutions of the simple metal ions, because the complex releases metal ions slowly and uniformly, giving a fine, adherent, mirror-like deposit instead of a coarse, flaky one.',
      },
      {
        t: 'p',
        html: '<b>6. Photography.</b> In black-and-white photography the developed film is <b>fixed</b> by washing with “hypo” (sodium thiosulphate), which dissolves the unexposed silver bromide as the soluble complex [Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>, removing the light-sensitive salt so the image becomes permanent and no longer darkens on exposure to light.',
      },
      {
        t: 'p',
        html: '<b>7. Catalysis.</b> Coordination and organometallic complexes are widely used as industrial catalysts:<br>• <b>Wilkinson’s catalyst</b>, [(PPh<sub>3</sub>)<sub>3</sub>RhCl], also written [RhCl(PPh<sub>3</sub>)<sub>3</sub>], a rhodium complex used for the hydrogenation of alkenes under mild conditions.<br>• <b>Ziegler–Natta catalysts</b> (titanium/aluminium complexes) for the polymerisation of alkenes to polythene and polypropene.<br>• The <b>hydroformylation (oxo) process</b>, in which cobalt or rhodium carbonyl complexes convert an alkene, CO and hydrogen into an aldehyde — a large-scale industrial route to aldehydes and alcohols.',
      },
      {
        t: 'p',
        html: 'These are mostly examples of <b>homogeneous catalysis</b> — the catalyst and reactants share the same (liquid) phase, so every metal centre is accessible and conditions are mild and selective. (Classic Ziegler–Natta catalysts are the exception: they are solids, so heterogeneous.) A coordination complex makes an ideal homogeneous catalyst because it can hold a reactant at a vacant coordination site, activate it (often by the kind of back-donation seen in Topic 04), let it react, and then release the product and start again — a cycle made possible by the very lability discussed in Topic 05.',
      },
      {
        t: 'p',
        html: '<b>8. Pigments and dyes.</b> Many intense pigments are coordination compounds: <b>Prussian blue</b>, an iron–cyanide complex, is a classic blue pigment (its intense colour comes from electron transfer between Fe(II) and Fe(III), not from d–d), and a wide range of dyes owe their colour to metal–ligand coordination, through the d–d transitions of Topic 03 or, for the most intense colours, charge transfer. Mordant dyes work by forming a coloured coordination complex that anchors the dye to the fabric through a metal ion.',
      },
      {
        t: 'p',
        html: '<b>9. Agriculture and a wider biological role.</b> Chelated micronutrients such as iron–EDTA are added to fertilisers so that plants can absorb the metal in a soluble, available form rather than as an insoluble salt. And beyond the molecules already named, the enzyme <b>nitrogenase</b>, which lets certain bacteria fix atmospheric nitrogen into ammonia, carries an iron–molybdenum coordination cluster at its heart — coordination chemistry quietly underpinning the nitrogen cycle on which all agriculture depends.',
      },
      {
        t: 'p',
        html: '<b>10. Water softening and sequestering.</b> Chelating agents such as EDTA and polyphosphates “sequester” hardness-causing Ca<sup>2+</sup> and Mg<sup>2+</sup> ions by locking them into stable complexes, softening the water. The same principle puts these chelating agents into detergents (so soap is not wasted fighting hard-water ions) and into food preservation, where they sequester trace metal ions that would otherwise catalyse spoilage.',
      },

      { t: 'part', title: 'The logic behind the applications' },
      {
        t: 'p',
        html: 'No derivations here; the framework is why each application works, which is far more memorable than a bare list.',
      },
      {
        t: 'p',
        html: '<b>Why chelates dominate biology and medicine.</b> A polydentate ligand wraps a metal in several rings, giving an unusually stable complex (chelate effect, Topic 01; high <i>K</i><sub>f</sub>, Topic 05). Nature uses this to hold a metal precisely in place (the iron in haemoglobin, the magnesium in chlorophyll); medicine uses it to grab a toxic metal more tightly than the body’s own ligands can, so the metal can be excreted (chelate therapy). The common thread is stability through chelation.',
      },
      {
        t: 'p',
        html: '<b>Why cyanide is used to extract silver and gold.</b> These noble metals are very unreactive, so they will not simply dissolve. Cyanide, with oxygen from the air as the oxidant, converts them into highly stable, water-soluble complexes ([Ag(CN)<sub>2</sub>]<sup>−</sup>, [Au(CN)<sub>2</sub>]<sup>−</sup>); once in solution the metal can be recovered by displacing it with a more reactive metal (zinc). Complexation turns an insoluble, unreactive metal into a soluble one — and then releases it again.',
      },
      {
        t: 'p',
        html: '<b>Why EDTA is the analytical chemist’s favourite.</b> EDTA is hexadentate (Topic 01): it forms a single, very stable 1:1 chelate with almost any metal ion beyond the alkali metals, with sharp, well-defined stoichiometry. That makes the titration end-point clean and the calculation simple — ideal for estimating Ca<sup>2+</sup>/Mg<sup>2+</sup> (water hardness) and many other ions.',
      },
      {
        t: 'p',
        html: '<b>Why electroplating prefers complex baths.</b> A complex such as [Ag(CN)<sub>2</sub>]<sup>−</sup> holds the silver ion in equilibrium (Topic 05) and releases free Ag<sup>+</sup> slowly and steadily. A low, controlled supply of metal ions deposits as a fine, even, adherent layer rather than a rough, patchy one. The stability constant is being used as a slow-release valve.',
      },
      {
        t: 'p',
        html: '<b>Why coordination complexes make good catalysts.</b> A metal centre in a complex can offer a vacant coordination site that grabs a reactant, hold it in just the right orientation, weaken its bonds by donation and back-donation (Topic 04), let it react, and then release the product — all without being consumed. Because the metal can cycle through these steps over and over, a tiny amount of complex turns over huge quantities of substrate. The same lability that Topic 05 treated as a property to be classified is, here, the very thing that lets a catalyst pick up and put down reactants quickly. Coordination is what lets a single metal atom do chemistry on a molecule and then walk away unchanged.',
      },
      {
        t: 'p',
        html: '<b>Why biology hides its metals inside rings.</b> A bare metal ion in the bloodstream would be reactive and toxic; sealed inside a macrocyclic ring (a porphyrin in haemoglobin, a porphyrin-like ring in chlorophyll), it is held with high stability (the macrocyclic effect, Topic 05) yet still does its job — gripping oxygen at the one site left free in haemoglobin, or holding the light-absorbing ring in shape in chlorophyll. The ring tames the metal while preserving exactly the reactivity life needs.',
      },
      {
        t: 'p',
        html: '<b>Why “hypo” fixes a photograph.</b> Unexposed silver bromide on the film is insoluble and still light-sensitive — left in place, it would darken and ruin the image. Thiosulphate converts it into the soluble complex [Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>, which simply washes away, leaving only the dark silver of the developed image behind. Complexation dissolves away exactly the salt that would otherwise spoil the picture — the same “make it soluble” logic as cyanide extraction, used for a completely different purpose.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Name the central metal ion in (i) chlorophyll, (ii) haemoglobin, (iii) vitamin B<sub>12</sub>, and state the biological role of each.',
        steps: [
          '(i) Chlorophyll — <b>magnesium</b>; captures light energy for photosynthesis.',
          '(ii) Haemoglobin — <b>iron</b>; binds and transports oxygen in the blood.',
          '(iii) Vitamin B<sub>12</sub> (cyanocobalamin) — <b>cobalt</b>; the anti-pernicious-anaemia factor.',
          'In each case the metal is held inside a nitrogen-donor ring that fixes it in place while leaving it able to do its biological job — the same structural theme runs through all three.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Match each coordination compound with its central metal: (A) chlorophyll, (B) haemoglobin, (C) Wilkinson’s catalyst, (D) vitamin B<sub>12</sub>.',
        steps: [
          '<b>Speed logic:</b> memorise the four-card set — “Magnesium leaf, Iron blood, Cobalt vitamin, Rhodium catalyst.”',
          '<b>Trap to avoid:</b> swapping Fe and Co (blood is iron, the vitamin is cobalt) and forgetting that Wilkinson’s catalyst is <b>rhodium</b>, not platinum. These four come up as a matching set again and again.',
        ],
        ans: '(A) Mg, (B) Fe, (C) Rh, (D) Co.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (reasoning across topics)',
        q: 'Explain why gold, an unreactive metal, can nevertheless be extracted from its ore using sodium cyanide, and how the dissolved gold is finally recovered.',
        steps: [
          'Gold is too noble to dissolve directly, but cyanide ions, with oxygen from the air as the oxidant, convert it into the highly stable, water-soluble complex [Au(CN)<sub>2</sub>]<sup>−</sup>: 4Au + 8CN<sup>−</sup> + 2H<sub>2</sub>O + O<sub>2</sub> → 4[Au(CN)<sub>2</sub>]<sup>−</sup> + 4OH<sup>−</sup>. A large stability constant (Topic 05) is what makes this oxidation of gold go. The gold therefore passes into solution as a complex anion.',
          'The gold is then recovered by <b>displacement</b>: adding a more reactive metal such as zinc reduces the complexed gold back to the free metal, 2[Au(CN)<sub>2</sub>]<sup>−</sup> + Zn → [Zn(CN)<sub>4</sub>]<sup>2−</sup> + 2Au. Complexation made the unreactive metal mobile; a reactivity difference then sets it free. This two-step logic — dissolve as a stable complex, then break the complex to recover the metal — is a direct application of the stability ideas of Topic 05. (The Mond process for nickel shares only the outline of forming a complex and recovering the metal: [Ni(CO)<sub>4</sub>] is volatile, nothing dissolves, and it is chosen because it falls apart easily on heating.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (application + stability + isomerism)',
        q: 'Cisplatin is used in cancer therapy, but its geometrical isomer is therapeutically useless. (i) Write the formula and name of the active compound. (ii) Explain, linking to its structure, why only one isomer works. (iii) Why must a chelating drug used to treat metal poisoning have a high but not unlimited stability constant?',
        steps: [
          '(i) cis-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>], cis-diamminedichloridoplatinum(II).',
          '(ii) The drug acts by having its two labile chloride sites bind to adjacent positions on DNA; only the <b>cis</b> geometry (Topic 02) places the two chlorides next to each other so they can bridge to the DNA strand. The <b>trans</b> isomer has them opposite and cannot make the same two-point attachment, so it is inactive — a clinical consequence of geometrical isomerism.',
          '(iii) A chelating drug must bind the toxic metal more strongly than the body’s own ligands (so it can capture and excrete it), which needs a high stability constant (Topic 05); but if it bound too strongly and indiscriminately it would also strip out essential metals like zinc and calcium. The stability must be high enough to do the job yet selective — stability tuned, not merely maximised. This is the single most important design principle in chelate therapy, and it ties the entire chapter together: nomenclature and structure (Topics 01, 02) identify the species, bonding (Topics 03, 04) explains how it binds, and stability (Topic 05) decides whether it will work as a medicine.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Give one example each of the role of coordination compounds in (i) medicine, (ii) analytical chemistry, (iii) metallurgy.',
            a: '(i) cisplatin / chelate therapy; (ii) EDTA titration for Ca<sup>2+</sup>/Mg<sup>2+</sup> or water hardness; (iii) Mond process for nickel, or cyanide extraction of Ag/Au.',
          },
          {
            q: '[NEET] Which metal is present at the centre of the chlorophyll molecule?',
            a: 'Magnesium.',
          },
          {
            q: '[JEE Main] Explain how the hardness of water is estimated using a coordination compound.',
            a: 'By complexometric titration with disodium EDTA, which forms stable 1:1 complexes with the Ca<sup>2+</sup> and Mg<sup>2+</sup> that cause hardness.',
          },
          {
            q: '[JEE Main] Why is a complex bath, rather than a simple salt solution, preferred for electroplating silver?',
            a: 'The complex releases Ag<sup>+</sup> slowly and steadily, giving a fine, even, adherent deposit instead of a rough one.',
          },
          {
            q: '[JEE Advanced] Account for the use of cisplatin in cancer therapy and explain why its trans isomer is ineffective.',
            a: 'Cisplatin (the cis isomer) binds adjacent sites on DNA and inhibits tumour-cell division; the trans isomer cannot make the same two-point attachment and is inactive.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The central metal ion in haemoglobin is:',
        opts: [
          { label: 'magnesium', nudge: '<b>(a)</b> is chlorophyll — one of the two classic swaps.' },
          { label: 'cobalt', nudge: '<b>(b)</b> is vitamin B<sub>12</sub> — one of the two classic swaps.' },
          { label: 'iron', nudge: null },
          { label: 'zinc', nudge: '<b>(d)</b> zinc is in some enzymes, not haemoglobin.' },
        ],
        correct: 2,
        solution: 'Haemoglobin is an iron coordination compound that carries oxygen.',
      },
      {
        t: 'mcq',
        q: 'Cisplatin, used as an anticancer drug, is:',
        opts: [
          { label: 'trans-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]', nudge: '<b>(a)</b> the trans isomer is inactive — the key distinction.' },
          { label: 'cis-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]', nudge: null },
          { label: '[Pt(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>', nudge: '<b>(c)</b> is not the drug.' },
          { label: '[PtCl<sub>4</sub>]<sup>2−</sup>', nudge: '<b>(d)</b> is not the drug.' },
        ],
        correct: 1,
        solution: 'Only the cis isomer is therapeutically active.',
      },
      {
        t: 'mcq',
        q: 'Which ligand is used in the volumetric estimation of Ca<sup>2+</sup> and Mg<sup>2+</sup> (water hardness)?',
        opts: [
          { label: 'ammonia', nudge: '<b>(a)</b> does not give the clean 1:1 hardness titration.' },
          { label: 'EDTA', nudge: null },
          { label: 'cyanide', nudge: '<b>(c)</b> does not give the clean 1:1 hardness titration.' },
          { label: 'carbon monoxide', nudge: '<b>(d)</b> is a carbonyl ligand, irrelevant here.' },
        ],
        correct: 1,
        solution: 'EDTA forms stable 1:1 chelates with these ions, giving a sharp titration end-point.',
      },
      {
        t: 'mcq',
        q: 'Silver is extracted from its ore by forming the soluble complex:',
        opts: [
          { label: '[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>', nudge: '<b>(a)</b> is not the extraction complex.' },
          { label: '[Ag(CN)<sub>2</sub>]<sup>−</sup>', nudge: null },
          { label: '[AgCl<sub>2</sub>]<sup>−</sup>', nudge: '<b>(c)</b> is not the extraction complex.' },
          { label: '[Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>', nudge: '<b>(d)</b> is the photographic fixing complex (a different application) — a tempting distractor.' },
        ],
        correct: 1,
        solution: 'The cyanide process leaches silver as [Ag(CN)<sub>2</sub>]<sup>−</sup>, recovered by displacement with zinc.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the biomolecule–metal pairs.</b> Fix them as a set: chlorophyll = Mg, haemoglobin = Fe, vitamin B<sub>12</sub> = Co, Wilkinson’s catalyst = Rh. The Fe/Co swap (blood vs vitamin) is the most common error.',
          '<b>Forgetting that only cisplatin is active.</b> The anticancer activity is isomer-specific (Topic 02); naming the trans isomer loses the point of the question.',
          '<b>Confusing the extraction and photography complexes.</b> Ag/Au extraction uses cyanide [M(CN)<sub>2</sub>]<sup>−</sup>; photographic fixing uses thiosulphate [Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>.',
          '<b>Listing applications without the reason.</b> Marks (and understanding) come from why — chelation/stability for biology and medicine, soluble-complex formation for extraction, slow ion release for electroplating.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> anchor every application to the one underlying idea — control of the metal through stable complex formation. Biology and chelate therapy = chelate-effect stability; extraction and electroplating = make a soluble complex, then release the metal in a controlled way; analysis = sharp 1:1 EDTA stoichiometry. If you can state the reason, you can reconstruct the example even if you forget the exact name.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Biology',
            note: 'chlorophyll = <b>Mg</b> (photosynthesis); haemoglobin = <b>Fe</b> (O<sub>2</sub> transport); vitamin B<sub>12</sub> = <b>Co</b>; metalloenzymes (carboxypeptidase A, carbonic anhydrase).',
          },
          {
            f: 'Medicine',
            note: 'cisplatin cis-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] (anticancer, isomer-specific); chelate therapy — D-penicillamine/desferrioxime (Cu, Fe), EDTA (lead poisoning).',
          },
          {
            f: 'Analysis',
            note: 'EDTA complexometric titration of Ca<sup>2+</sup>/Mg<sup>2+</sup> (water hardness); DMG for Ni<sup>2+</sup>; colorimetry.',
          },
          {
            f: 'Metallurgy',
            note: 'Ag/Au extracted as [M(CN)<sub>2</sub>]<sup>−</sup> (cyanide process); Ni purified via [Ni(CO)<sub>4</sub>] (Mond process).',
          },
          {
            f: 'Electroplating',
            note: 'from [Ag(CN)<sub>2</sub>]<sup>−</sup>/[Au(CN)<sub>2</sub>]<sup>−</sup>; <b>photography</b> fixing with hypo → [Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>; <b>catalysis</b> — Wilkinson’s [(PPh<sub>3</sub>)<sub>3</sub>RhCl].',
          },
        ],
        aids: [
          '“Magnesium leaf, Iron blood, Cobalt vitamin, Rhodium catalyst.”',
          '“cis works, trans shirks” — of the two isomers, only the cis is the drug.',
          '“Cyanide to catch (extract), thiosulphate to fix (photo).”',
          'Every application = controlling a metal with a stable complex.',
        ],
      },
    ],
  },
];
