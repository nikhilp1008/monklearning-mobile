import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 03, Diazonium Salts — Preparation & Reactions: pp. 448–457
 * of the Class 12 Chemistry Master Reference, word for word, split at its
 * sections 9.3.1 to 9.3.8. Figure 9.5, the diazonium wheel (caption p. 448,
 * drawn p. 449), closes "Concept intuition", where the book prints its caption;
 * Figure 9.6, azo coupling (caption p. 452, drawn p. 453), follows the pH-window
 * paragraph of 3.3, which it shows. Both are redrawn in
 * lib/diagrams/chemistry-12-09.ts. The book's "Balz-Schiemann" is written
 * Balz–Schiemann (en dash between two names), and its maths-italic p- locants
 * in equations are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 448–457 ─────────────────────────
  {
    n: '03',
    title: 'Diazonium Salts — Preparation & Reactions',
    kalam: 'Think of the diazonium group as a molecular ejector seat.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The “aniline conversion wheel” is a CBSE 2–3 mark perennial and the backbone of JEE Main multi-step synthesis. NEET tests Sandmeyer/Gattermann/coupling as single MCQs. JEE Advanced probes the Sandmeyer radical mechanism, coupling regiochemistry/conditions, and uses diazonium as the key step in retrosynthesis. This is the chapter’s highest-leverage problem-solving topic.',
      },
      {
        t: 'p',
        html: 'In Topic 02 we saw that a primary aromatic amine reacts with nitrous acid at low temperature to give a comparatively stable <b>arenediazonium salt</b>, Ar–N<sub>2</sub><sup>+</sup>X<sup>−</sup>. This topic is the pay-off: that little –N<sub>2</sub><sup>+</sup> group is the most useful temporary passenger in all of aromatic chemistry.',
      },
      {
        t: 'p',
        html: '<b>Think of the diazonium group as a molecular ejector seat.</b> The –N<sub>2</sub><sup>+</sup> is bonded to the ring, but it is desperate to leave as <b>nitrogen gas</b> — one of the most stable small molecules there is. That escaping N<sub>2</sub> is such a good “leaving group” that almost any group can take the vacated spot: –F, –Cl, –Br, –I, –CN, –OH, –NO<sub>2</sub>, even plain –H. So the strategy is: install an –NH<sub>2</sub> where you want a substituent (often using it earlier as an ortho/para director), convert it to diazonium, and then <b>eject it and drop in whatever group you actually wanted</b> — including groups like –F and –I that cannot be put onto benzene cleanly by direct halogenation (fluorine reacts violently; iodination is reversible unless an oxidising agent such as HNO<sub>3</sub> removes the HI formed), or –CN, which won’t go on by nucleophilic substitution of chlorobenzene.',
      },
      {
        t: 'p',
        html: 'A good Indian-context picture: the diazonium salt is a <b>railway junction</b>. The amine arrives on one line; at the junction you can switch it onto the chloro line, the bromo line, the cyanide line, the phenol line — each “platform” is a different reagent, and the train of nitrogen always departs.',
      },
      {
        t: 'p',
        html: '<b>Why only aromatic?</b> An aliphatic diazonium salt is hopeless — it falls apart the instant it forms, spitting out N<sub>2</sub> and leaving a carbocation (which is why 1° aliphatic amines + HNO<sub>2</sub> give alcohols, as we saw in Topic 02 — NCERT’s answer; in practice alkenes and alkyl halides form too). An arenediazonium ion survives because the positive charge is <b>delocalised by resonance into the benzene ring</b>, spreading the instability out.',
      },
      {
        t: 'p',
        html: 'The two reaction families fall straight out of the ejector-seat idea:<br>• <b>(A) Lose the nitrogen</b> — replacement (substitution) reactions: –N<sub>2</sub><sup>+</sup> is replaced by another group, N<sub>2</sub> escapes.<br>• <b>(B) Keep the nitrogen</b> — coupling reactions: the whole –N=N– unit is retained and joins to a second aromatic ring, building a coloured <b>azo dye</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Even the aromatic salt is only metastable: it must be made and kept <b>cold (273–278 K, i.e. 0–5 °C)</b> and used immediately — warm the solution and it hydrolyses to phenol; dry the salt and it can be explosive. So diazonium salts are normally not isolated or stored; everything is done in one cold pot, in situ. (The one common exception is the fluoroborate, C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup>: insoluble in water and stable at room temperature, it is filtered off and dried for the Balz–Schiemann reaction.)',
      },
      { t: 'fig', id: 'c12-09-fig-9.5' },

      { t: 'part', title: 'Key definitions, data and reagents' },
      {
        t: 'p',
        html: '<b>Diazonium salt:</b> general formula Ar–N<sub>2</sub><sup>+</sup>X<sup>−</sup>, where Ar is an aryl group and X<sup>−</sup> is Cl<sup>−</sup>, HSO<sub>4</sub><sup>−</sup>, BF<sub>4</sub><sup>−</sup>, etc. The –N<sub>2</sub><sup>+</sup> is the <b>diazonium group</b>. Named as (parent hydrocarbon)diazonium (anion): C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> = benzenediazonium chloride; C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>HSO<sub>4</sub><sup>−</sup> = benzenediazonium hydrogensulphate.',
      },
      {
        t: 'p',
        html: '<b>Diazotisation:</b> conversion of a primary aromatic amine to a diazonium salt using HNO<sub>2</sub> (generated in situ from NaNO<sub>2</sub> + dil. HCl) at 273–278 K.',
      },
      {
        t: 'formula',
        kicker: 'Diazotisation',
        main: 'C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NaNO<sub>2</sub> + 2 HCl →<sup>273–278 K</sup> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + NaCl + 2 H<sub>2</sub>O',
        legend: [
          'C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> = aniline, a primary aromatic amine',
          'NaNO<sub>2</sub> = sodium nitrite',
          'HCl = dilute hydrochloric acid',
          '273–278 K = temperature (0–5 °C)',
          'C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> = benzenediazonium chloride',
          'NaCl = sodium chloride',
          'H<sub>2</sub>O = water',
        ],
        note: null,
      },
      { t: 'p', html: '<b>Replacement reagent map (family A — N<sub>2</sub> lost):</b>' },
      {
        t: 'table',
        title: null,
        head: ['Target group', 'Reagent', 'Reaction name'],
        rows: [
          ['–Cl / –Br (chloro, bromo)', 'CuCl/HCl or CuBr/HBr', '<b>Sandmeyer</b>'],
          ['–Cl / –Br (chloro, bromo)', 'Cu powder + HCl/HBr', '<b>Gattermann</b> (lower yield)'],
          ['–CN (cyano)', 'CuCN/KCN', 'Sandmeyer (→ aryl cyanide)'],
          ['–I (iodo)', 'KI (no Cu needed), warm', '—'],
          ['–F (fluoro)', 'HBF<sub>4</sub>, then heat the N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup>', '<b>Balz–Schiemann</b>'],
          ['–OH (hydroxy)', 'warm with H<sub>2</sub>O (<i>T</i> > 283 K)', 'hydrolysis → phenol'],
          ['–H (hydrogen)', 'H<sub>3</sub>PO<sub>2</sub> (phosphinic acid) or ethanol', 'deamination'],
          ['–NO<sub>2</sub> (nitro)', 'NaNO<sub>2</sub> / Cu (via fluoroborate)', '—'],
        ],
      },
      { t: 'p', html: '<b>Coupling map (family B — diazo group retained):</b>' },
      {
        t: 'table',
        title: null,
        head: ['Coupling partner', 'Medium', 'Product (azo dye)'],
        rows: [
          ['Phenol', 'mild alkali, pH ≈ 9–10', 'p-hydroxyazobenzene (orange)'],
          ['Aniline', 'mild acid, pH ≈ 4–5', 'p-aminoazobenzene (yellow)'],
        ],
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      { t: 'p', html: '<b>3.1 Diazotisation</b>' },
      {
        t: 'p',
        html: 'Dissolve the aromatic amine in cold excess mineral acid, then add cold NaNO<sub>2</sub> solution, keeping the temperature at <b>273–278 K</b> throughout. The acid does two jobs: it generates HNO<sub>2</sub> in situ and it must be in <b>excess</b> so that unreacted amine is protonated to its non-nucleophilic anilinium form — otherwise the freshly made diazonium ion would couple with leftover amine. (<b>JEE-level mechanism:</b> HNO<sub>2</sub> furnishes the nitrosonium ion NO<sup>+</sup>; the amine attacks it to give an N-nitrosamine, which tautomerises to a diazohydroxide and loses water to give the diazonium ion Ar–N<sub>2</sub><sup>+</sup>.) The salt is used at once.<br>NaNO<sub>2</sub> + HCl → HNO<sub>2</sub> + NaCl; HNO<sub>2</sub> + H<sup>+</sup> → NO<sup>+</sup> + H<sub>2</sub>O<br>Ar–NH<sub>2</sub> + NO<sup>+</sup> →<sup>−H⁺</sup> Ar–NH–N=O → Ar–N=N–OH →<sup>H⁺, −H₂O</sup> Ar–N<sub>2</sub><sup>+</sup>',
      },
      { t: 'p', html: '<b>3.2 Replacement reactions (loss of N<sub>2</sub>)</b>' },
      {
        t: 'p',
        html: 'The diazonium group is an outstanding leaving group; nucleophiles displace it, expelling N<sub>2</sub>.<br>• <b>Sandmeyer:</b> Cl<sup>−</sup>, Br<sup>−</sup>, CN<sup>−</sup> are introduced in the presence of the corresponding <b>Cu(I)</b> salt. <b>Mechanism (JEE):</b> this is <b>not</b> a simple ionic substitution — Cu(I) reduces the diazonium ion by one electron to give an <b>aryl radical</b> plus N<sub>2</sub>; the aryl radical then abstracts the halogen from the resulting Cu(II) species, and Cu(I) is regenerated, acting as a <b>true catalyst</b>.<br>Ar–N<sub>2</sub><sup>+</sup> + CuX → Ar<sup>•</sup> + N<sub>2</sub> + CuX<sup>+</sup>; Ar<sup>•</sup> + CuX<sup>+</sup> → Ar–X + Cu<sup>+</sup><br>• <b>Gattermann:</b> the same Cl/Br introduction using <b>copper powder + HX</b> instead of the Cu(I) salt — simpler but lower-yielding than Sandmeyer.<br>• <b>Iodide:</b> simply warming with <b>KI</b> gives aryl iodide — no copper needed.<br>• <b>Fluoride (Balz–Schiemann):</b> treat with <b>fluoroboric acid (HBF<sub>4</sub>)</b> to precipitate the diazonium fluoroborate, then heat it dry — it decomposes to aryl fluoride + N<sub>2</sub> + BF<sub>3</sub>.<br>• <b>Hydroxyl:</b> warming the aqueous solution above 283 K hydrolyses the salt to <b>phenol</b>.<br>• <b>Hydrogen (deamination):</b> mild reductants like <b>hypophosphorous (phosphinic) acid, H<sub>3</sub>PO<sub>2</sub></b>, or ethanol replace –N<sub>2</sub><sup>+</sup> by –H (themselves oxidised to H<sub>3</sub>PO<sub>3</sub> or ethanal).<br>• <b>Nitro:</b> heating the fluoroborate with NaNO<sub>2</sub> in the presence of copper installs –NO<sub>2</sub>.',
      },
      {
        t: 'p',
        html: 'The core spokes as balanced equations (benzenediazonium chloride as the example; the copper(I) salts are catalysts, so they stand over the arrow):<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> →<sup>CuCl/HCl</sup> C<sub>6</sub>H<sub>5</sub>Cl + N<sub>2</sub><br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + HBr →<sup>CuBr</sup> C<sub>6</sub>H<sub>5</sub>Br + N<sub>2</sub> + HCl<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + KCN →<sup>CuCN</sup> C<sub>6</sub>H<sub>5</sub>CN + N<sub>2</sub> + KCl<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + KI →<sup>warm</sup> C<sub>6</sub>H<sub>5</sub>I + N<sub>2</sub> + KCl<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + HBF<sub>4</sub> → C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup> + HCl; C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup> →<sup>Δ</sup> C<sub>6</sub>H<sub>5</sub>F + N<sub>2</sub> + BF<sub>3</sub><br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + H<sub>2</sub>O →<sup>warm</sup> C<sub>6</sub>H<sub>5</sub>OH + N<sub>2</sub> + HCl<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + H<sub>3</sub>PO<sub>2</sub> + H<sub>2</sub>O → C<sub>6</sub>H<sub>6</sub> + N<sub>2</sub> + H<sub>3</sub>PO<sub>3</sub> + HCl',
      },
      {
        t: 'p',
        html: 'Note the pattern: <b>every spoke evolves N<sub>2</sub></b>, and the position vacated by –N<sub>2</sub><sup>+</sup> is exactly where the original –NH<sub>2</sub> sat — that positional fidelity is what makes the route so powerful in synthesis.',
      },
      { t: 'p', html: '<b>3.3 Coupling reactions (retention of the diazo group)</b>' },
      {
        t: 'p',
        html: 'The diazonium ion is a <b>weak electrophile</b>, so it performs electrophilic aromatic substitution only on <b>strongly activated rings</b> — phenols and arylamines — attacking at the <b>para</b> position (ortho if para is blocked). The product is an <b>azo compound</b> Ar–N=N–Ar′ with an extended conjugated system, hence strongly coloured (the basis of azo dyes).<br>• With <b>phenol</b> in mildly alkaline medium (pH ≈ 9–10): the phenol is converted to the more electron-rich <b>phenoxide</b>, giving <b>p-hydroxyazobenzene</b> (orange).<br>• With <b>aniline</b> in mildly acidic medium (pH ≈ 4–5): gives <b>p-aminoazobenzene</b>. (Strictly, the ion first attacks the nitrogen, giving diazoaminobenzene, which rearranges to the para product in acid.)<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + C<sub>6</sub>H<sub>5</sub>OH + OH<sup>−</sup> →<sup>pH 9–10</sup> p-HO–C<sub>6</sub>H<sub>4</sub>–N=N–C<sub>6</sub>H<sub>5</sub> + Cl<sup>−</sup> + H<sub>2</sub>O<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> →<sup>H⁺, pH 4–5</sup> p-H<sub>2</sub>N–C<sub>6</sub>H<sub>4</sub>–N=N–C<sub>6</sub>H<sub>5</sub> + HCl',
      },
      {
        t: 'p',
        html: '<b>Why the narrow pH windows matter:</b> in <b>strongly basic</b> medium the diazonium ion is converted to non-electrophilic diazohydroxide/diazoate and cannot couple; in <b>strongly acidic</b> medium the amine partner is protonated to the non-nucleophilic anilinium ion. Only the mild window lets both partners stay reactive. (The figures pH 9–10 and 4–5 are the usual coaching values; NCERT shows only OH<sup>−</sup> over the arrow for phenol and H<sup>+</sup> for aniline.)',
      },
      { t: 'fig', id: 'c12-09-fig-9.6' },
      { t: 'p', html: '<b>3.4 Why diazonium salts are synthetically prized</b>' },
      {
        t: 'p',
        html: 'They introduce groups unavailable by direct routes: <b>aryl fluorides and iodides</b> (direct halogenation fails or reverses), <b>aryl cyanides</b> (no S<sub>N</sub> on chlorobenzene), and they allow an –NH<sub>2</sub> to serve as a removable ortho/para “handle” — direct a substitution, then deaminate — giving substitution patterns impossible by direct electrophilic substitution alone.<br><br>The coupling family is industrially just as important. The –N=N– azo bridge extends conjugation across both rings, so azo compounds absorb visible light and are intensely coloured; this makes diazonium coupling the foundation of a vast class of <b>synthetic azo dyes</b> for textiles and of several <b>acid–base indicators</b> (whose colour shifts as protonation alters the conjugated system). Because the shade can be tuned by the substituents on each ring, a single, cheap, cold reaction gives chemists access to an enormous palette — which is why this otherwise fragile salt is one of the workhorses of the aromatic chemist’s toolkit.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Starting from aniline, how would you prepare (i) fluorobenzene and (ii) iodobenzene? Name the reaction in each case.',
        steps: [
          'First diazotise: C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup><br>(NaNO<sub>2</sub>/HCl, 273–278 K).',
          '(i) <b>Fluorobenzene</b> — treat the salt with <b>HBF<sub>4</sub></b>; the precipitated C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup> on heating gives C<sub>6</sub>H<sub>5</sub>F + N<sub>2</sub> + BF<sub>3</sub>. This is the <b>Balz–Schiemann reaction</b>.',
          '(ii) <b>Iodobenzene</b> — simply warm the salt with <b>KI</b>: C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + KI → C<sub>6</sub>H<sub>5</sub>I + N<sub>2</sub> + KCl (no copper required). Both groups would be very hard to attach by direct halogenation — that is exactly why the diazonium route exists.',
        ],
        ans: '(i) Diazotise, then HBF<sub>4</sub> and heat the dry fluoroborate: Balz–Schiemann reaction. (ii) Diazotise, then warm with KI: replacement by iodide, which has no special name and needs no copper.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which couples fastest with benzenediazonium chloride: benzene, chlorobenzene, phenol, or nitrobenzene?',
        steps: [
          '<b>Speed reasoning.</b> Coupling is electrophilic substitution by a weak electrophile, so the most <b>electron-rich (most activated)</b> ring wins. Rank activation: <b>phenol</b> (–OH, strong activator) ≫ benzene > chlorobenzene (mild deactivator) > nitrobenzene (–NO<sub>2</sub>, strong deactivator). Of the four, only phenol is activated enough to couple at all.',
          '<b>Trap:</b> nitrobenzene does not couple at all — a weak electrophile cannot attack a strongly deactivated ring; never pick the nitro compound.',
        ],
        ans: 'Phenol.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Synthesise 1,3,5-tribromobenzene from aniline, and explain why aniline (not benzene) is the right starting point.',
        steps: [
          '1. <b>Tribrominate:</b> aniline + Br<sub>2</sub> (bromine water) → <b>2,4,6-tribromoaniline</b> (the strongly activating –NH<sub>2</sub> forces substitution at all three ortho/para positions — established in Topic 02).',
          '2. <b>Diazotise:</b> NaNO<sub>2</sub>/HCl, 273–278 K → 2,4,6-tribromo​benzenediazonium chloride.',
          '3. <b>Deaminate:</b> H<sub>3</sub>PO<sub>2</sub> replaces –N<sub>2</sub><sup>+</sup> by –H → <b>1,3,5-tribromobenzene</b>.',
          'Direct bromination of benzene cannot deliver the symmetric 1,3,5 pattern (bromine is an ortho/para director, so successive brominations give 1,2- and 1,4-dibromobenzene and then mainly 1,2,4-tribromobenzene, never three bromines meta to one another). The trick is to exploit –NH<sub>2</sub> as a powerful o/p-director to set up the 2,4,6 pattern, then <b>remove the handle</b> via diazonium deamination — a textbook demonstration of why this chemistry matters.',
        ],
        ans: 'Aniline →(Br<sub>2</sub> water) 2,4,6-tribromoaniline →(NaNO<sub>2</sub>/HCl, 273–278 K) its diazonium salt →(H<sub>3</sub>PO<sub>2</sub>) 1,3,5-tribromobenzene. Aniline is chosen because its –NH<sub>2</sub> puts all three bromines meta to one another and can then be removed.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'In the Sandmeyer synthesis of chlorobenzene, C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> gives only traces of product with NaCl alone but a good yield with CuCl. (a) Account for the role of copper. (b) Give the mechanism. (c) Contrast mechanistically with the Balz–Schiemann fluoride formation.',
        steps: [
          '(a) Cu(I) is essential because the replacement is <b>not</b> a simple ionic substitution by Cl<sup>−</sup>; chloride alone is a poor enough nucleophile toward the aryl position that little reaction occurs. Cu(I) instead acts as a <b>one-electron redox catalyst</b>.',
          '(b) <b>Radical mechanism:</b> Cu(I) reduces Ar–N<sub>2</sub><sup>+</sup>, releasing N<sub>2</sub> and generating an <b>aryl radical</b> Ar<sup>•</sup> plus Cu(II); the aryl radical then abstracts chlorine from the Cu(II) chloride, forming Ar–Cl and regenerating Cu(I), which re-enters the cycle as a true catalyst.',
          '(c) The <b>Balz–Schiemann</b> route is different in kind: the dry diazonium fluoroborate decomposes <b>thermally</b> — loss of N<sub>2</sub> generates a highly reactive <b>aryl cation</b> (an S<sub>N</sub>1-like, ionic pathway) that captures fluoride from BF<sub>4</sub><sup>−</sup>. So the same “lose N<sub>2</sub>, gain a halogen” outcome runs by a <b>radical</b> path for Cu-mediated Sandmeyer and an <b>ionic</b> path for Balz–Schiemann — the kind of mechanistic contrast prized at the Advanced level. (The radical-vs-ionic distinction is beyond CBSE/NEET.)',
        ],
        ans: '(a) Cu(I) is a one-electron redox catalyst; without it chloride hardly reacts. (b) Radical: Cu(I) reduces Ar–N<sub>2</sub><sup>+</sup> to Ar<sup>•</sup> + N<sub>2</sub>, and Ar<sup>•</sup> takes Cl from Cu(II), regenerating Cu(I). (c) Balz–Schiemann is ionic: heat gives an aryl cation that takes F<sup>−</sup> from BF<sub>4</sub><sup>−</sup>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why must benzenediazonium chloride be kept below 278 K and used immediately after preparation?',
            a: 'The salt is only metastable: it decomposes as it warms, and above 283 K it hydrolyses quickly to phenol (losing N<sub>2</sub>); dry salts are explosive — so it is made cold and used in situ.',
          },
          {
            q: '[NEET] Which reagent converts benzenediazonium chloride to benzene: KI, CuCl/HCl, H<sub>3</sub>PO<sub>2</sub>, or HBF<sub>4</sub>?',
            a: 'H<sub>3</sub>PO<sub>2</sub> (phosphinic acid); also ethanol.',
          },
          {
            q: '[JEE Main] Write the steps to convert aniline into benzonitrile (cyanobenzene), naming the key reaction.',
            a: 'Diazotise aniline (NaNO<sub>2</sub>/HCl, 273–278 K) → benzenediazonium chloride; then <b>CuCN/KCN (Sandmeyer)</b> → C<sub>6</sub>H<sub>5</sub>CN + N<sub>2</sub>.',
          },
          {
            q: '[JEE Main] Predict the product and the required medium when benzenediazonium chloride is treated with phenol.',
            a: '<b>p-Hydroxyazobenzene</b> (orange dye) in <b>mild alkali, pH ≈ 9–10</b> (phenol as the more reactive phenoxide).',
          },
          {
            q: '[JEE Advanced] Explain why the coupling of benzenediazonium chloride with aniline fails in both strongly acidic and strongly basic media.',
            a: 'In strong acid the aniline partner is protonated to the non-nucleophilic anilinium ion; in strong base the diazonium electrophile is converted to non-electrophilic diazohydroxide/diazoate — both kill one of the two reactive partners, so only the mild (pH 4–5) window works.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The reagent used to convert benzenediazonium chloride into fluorobenzene is:',
        opts: [
          { label: 'KI', nudge: '<b>(a)</b> gives iodobenzene.' },
          { label: 'HBF<sub>4</sub> then heat', nudge: null },
          { label: 'CuCl/HCl', nudge: '<b>(c)</b> gives chlorobenzene (Sandmeyer).' },
          { label: 'H<sub>3</sub>PO<sub>2</sub>', nudge: '<b>(d)</b> gives benzene (deamination).' },
        ],
        correct: 1,
        solution: 'Fluoroboric acid precipitates the diazonium fluoroborate, which on heating gives aryl fluoride (Balz–Schiemann). Each wrong option is the right answer to a different spoke of the wheel — the trap is matching the wrong reagent to the target.',
      },
      {
        t: 'mcq',
        q: 'The reaction in which copper powder with HCl/HBr replaces the diazonium group by halogen is the:',
        opts: [
          {
            label: 'Sandmeyer reaction',
            nudge: '<b>(a)</b> Sandmeyer uses the <b>Cu(I) salt</b> (CuCl/CuBr) — the common confusion; remember “Sandmeyer = salt.”',
          },
          { label: 'Gattermann reaction', nudge: null },
          { label: 'Balz–Schiemann reaction', nudge: '<b>(c)</b> is the fluoride route.' },
          { label: 'coupling reaction', nudge: '<b>(d)</b> retains N<sub>2</sub> rather than replacing it.' },
        ],
        correct: 1,
        solution: 'Cu powder + HX (lower yield).',
      },
      {
        t: 'mcq',
        q: 'In azo coupling, the diazonium ion behaves as:',
        opts: [
          { label: 'a nucleophile', nudge: '<b>(a)</b> is backwards (it is electron-poor).' },
          { label: 'a weak electrophile', nudge: null },
          {
            label: 'a strong electrophile',
            nudge: '<b>(c)</b> is wrong — if it were strong it would attack benzene too, which it cannot.',
          },
          { label: 'a free radical', nudge: '<b>(d)</b> confuses coupling with the Sandmeyer replacement mechanism.' },
        ],
        correct: 1,
        solution: 'It performs electrophilic aromatic substitution only on strongly activated rings (phenols, amines), at para.',
      },
      {
        t: 'mcq',
        q: '(JEE-Advanced extension) The key intermediate in the Cu(I)-catalysed Sandmeyer reaction is:',
        opts: [
          {
            label: 'an aryl carbocation',
            nudge: '<b>(a)</b> is the intermediate in the thermal Balz–Schiemann (ionic) route, not Sandmeyer — the classic mix-up.',
          },
          { label: 'an aryl radical', nudge: null },
          { label: 'an aryl carbanion', nudge: '<b>(c)</b> plays no role here.' },
          { label: 'a benzyne', nudge: '<b>(d)</b> plays no role here.' },
        ],
        correct: 1,
        solution: 'Cu(I) reduces the diazonium ion by one electron to give Ar<sup>•</sup>, which then abstracts halogen from Cu(II). (Beyond CBSE/NEET.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Ignoring the temperature window.</b> Diazotisation and use must stay at 273–278 K; let it warm and you get phenol, not your intended product.',
          '<b>Mixing up Sandmeyer / Gattermann / iodide / fluoride.</b> Sandmeyer = <b>Cu(I) salt</b>; Gattermann = <b>Cu powder + HX</b>; iodide = <b>KI, no copper</b>; fluoride = <b>HBF<sub>4</sub> (Balz–Schiemann)</b>.',
          '<b>Trying to couple onto a deactivated ring.</b> The diazonium ion is a weak electrophile — it will not couple with nitrobenzene or other deactivated arenes.',
          '<b>Wrong coupling pH.</b> Phenol couples in <b>mild alkali</b> (phenoxide), aniline in <b>mild acid</b>; extremes deactivate one partner.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Memorise the <b>aniline wheel</b> as reagent → group: CuX → Cl/Br, CuCN → CN, KI → I, HBF<sub>4</sub> → F, warm H<sub>2</sub>O → OH, H<sub>3</sub>PO<sub>2</sub> → H. For synthesis problems, work backwards from the target group to its spoke; if the target is –F, –I, –CN or a symmetric pattern needing deamination, the diazonium route is almost always the intended path.',
      },
      {
        t: 'p',
        html: '<b>Beyond syllabus (JEE-Adv only):</b> the <b>Gomberg reaction</b> couples diazonium with another arene to give a biaryl (diphenyl); the Sandmeyer (radical) and Balz–Schiemann (ionic, aryl cation) routes differ in mechanism; and the diazonium ↔ diazohydroxide ↔ diazoate equilibrium governs the pH dependence of coupling. <b>Trivia pitfall:</b> diazonium salts give a <b>negative Lassaigne’s test</b> for nitrogen — they eject N<sub>2</sub> before the sodium fusion can capture it.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Diazonium',
            note: 'Ar–N<sub>2</sub><sup>+</sup>X<sup>−</sup>; aromatic salt resonance-stabilised (aliphatic ones decompose instantly). Made cold (<b>273–278 K</b>), used in situ; not stored (only the fluoroborate is isolated).',
          },
          {
            f: 'Diazotisation',
            note: 'aniline + NaNO<sub>2</sub> + excess dil. HCl, 273–278 K → benzenediazonium chloride (excess acid prevents premature coupling).',
          },
          {
            f: 'Replacement wheel (lose N<sub>2</sub>)',
            note: 'Sandmeyer (Cu(I)X → Cl/Br/CN) • Gattermann (Cu/HX → Cl/Br) • KI → I • HBF<sub>4</sub> → F (Balz–Schiemann) • warm H<sub>2</sub>O → OH • H<sub>3</sub>PO<sub>2</sub>/EtOH → H • NaNO<sub>2</sub>/Cu on the fluoroborate → NO<sub>2</sub>.',
          },
          {
            f: 'Coupling (keep N<sub>2</sub>)',
            note: 'weak electrophile, activated rings only, para attack. Phenol (pH 9–10) → p-hydroxyazobenzene (orange); aniline (pH 4–5) → p-aminoazobenzene. Azo dyes.',
          },
          {
            f: 'Why it matters',
            note: 'the standard route to Ar–F, Ar–I, Ar–CN, and to o/p patterns set by a removable –NH<sub>2</sub> handle.',
          },
        ],
        aids: [
          '“Salt for Sandmeyer, Powder for Gattermann; keep it Cold, then choose your Group.”',
          'Acid window for coupling: <b>A</b>mine in <b>A</b>cid, <b>P</b>henol… in alkali (the odd one out — phenoxide needs base).',
        ],
      },
    ],
  },
];
