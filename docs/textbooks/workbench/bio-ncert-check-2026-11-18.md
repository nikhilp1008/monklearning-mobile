# NCERT attribution check, six agents (2026-11-18)

Every line in the Biology 11 and 12 chapters that says "NCERT says", "NCERT gives" or similar was checked against an NCERT PDF, or the attribution was removed. About 483 lines, six Opus agents, one per group of chapters. This file keeps their reports with the other workbench notes. The working files they read (extracted NCERT text, line lists) were in a temporary folder and are gone, so the reports are the record.

## What was done with the findings

- About 38 corrections were applied (commit ec68231 on main, plus c20b816 and 943c33f for the echinoderm key, answer keys, Bio 12 Ch 11 and Ch 13 wording and the gene count).
- Eye and ear in Bio 11 Ch 18: the official NMC annexure in the NTA notice of 8 Jan 2026 does not list them, so the row now says so.
- First aid, MTP and emergency contraception lines in Bio 12 Ch 3 and Ch 7 were checked against WHO and the MTP Act, or cut back to NCERT's own words.
- Gene count: shown as "30,000 or 20,000-25,000" (the book's figure and the figure in NCERT's HGP goals list).
- Left on purpose: lines that are true only of older NCERT editions (the current Reprint 2026-27 is reduced). Three of those were tidied afterwards in c969553: the 1000 Da cut-off in Bio 11 Ch 9 is now labelled as the book's own, "(core NCERT)" is gone from a Bio 11 Ch 14 heading, and false and floating ribs are named separately in Bio 11 Ch 17.

## Sources

- Current: NCERT Class 11 `kebo1NN` and Class 12 `lebo1NN`, "Reprint 2026-27" (reduced syllabus).
- Older: 2018 to 2022 editions through the Wayback Machine.
- ncert.nic.in sends an incomplete certificate chain, so agents added the missing intermediate certificate and kept certificate checking on, or used Wayback copies.

## About the reports below

All six agents were refused when they tried to write their own report files ("Subagents should return findings as text"), so each returned its report as text and the six are reproduced here as returned, one section per group. Each group read read-only; no agent edited the repo. Where a report says a line was not checked, it was not checked. A report may say "file not written" near its top. That refers to the refused file, not to missing content.

Chapter ranges (as each agent's own title gives them): A Biology 11 Ch 1 to 5, B Biology 11 Ch 6 to 12, C Biology 11 Ch 13 to 19, D Biology 12 Ch 1 to 5, E Biology 12 Ch 6 to 9, F Biology 12 Ch 10 to 13.

---

# Group A: Biology 11, chapters 1 to 5

## NCERT attribution check, list A (Biology 11, chapters 1-5)

**Report file not written.** The harness refused the Write to `/private/tmp/claude-501/-Users-raasikhnaveed--claude-spares-spare-WyHVJX/acc2ce4c-c76d-4145-84f8-c0971c402b4e/scratchpad/report-A.md` with "Subagents should return findings as text". The full findings are below. Nothing in the repo was edited.

**What I read.** Our folder numbers match NCERT's chapters 1-5.
- **Current edition:** NCERT Class 11 kebo101-105 and kebo108, plus Class 12 lebo101-113, all from ncert.nic.in and stamped "Reprint 2026-27".
- **Older edition:** the 2018-20 prints of kebo101-105, from the Wayback Machine.

**The current reprint has dropped several passages our text cites:**
- **Ch 1:** "What is Living?" and "Taxonomical Aids".
- **Ch 3:** the double-fertilisation paragraph and §3.6 Plant Life Cycles.
- **Ch 5:** root, stem and leaf modifications, and the Fabaceae and Liliaceae descriptions.

Claims backed only by those passages are counted below as "old edition only". They are true of the NCERT text NEET students have long used, but they are no longer in the printed book.

### Counts (93 lines)
- **Skipped** (header comment, title or generic label): 14 lines.
- **SUPPORTED** (current reprint): 49 lines.
- **SUPPORTED, old edition only:** 24 lines.
  - Ch 1 consciousness / metabolism / growth / self-consciousness lines: extras-c-e:302, 313, 322, 438, 479, 503, 519 and topics-0-1:42, 95, 113, 186.
  - Ch 1 key as a taxonomical aid: extras-c-e:31.
  - Ch 3 seed plants diplontic: extras:612, 625, 733, 857 and topics-4-6:725, 935.
  - Ch 5 onion/garlic storage leaves: topics-1-2:116.
  - Ch 5 Rhizophora as the pneumatophore example: extras:707, 871, 875.
  - Ch 5 "NCERT studies three families": topics-3-4:383.
- **CONTRADICTED:** 2.
- **NOT FOUND IN NCERT:** 2.
- **COULD NOT VERIFY:** 0.

**Double fertilisation is still covered.** It has gone from Class 11 Ch 3, but the current Class 12 Ch 1 §1.3 still calls it "an event unique to flowering plants". So bio-11-03/extras.ts:247, 354, 655 and 991 are supported in the current books.

### CONTRADICTED
1. **content/textbooks/bio-11-01/extras-c-e.ts:160** says "the six-kingdom label and Woese's name are extra".
   - NCERT Ch 2 intro (p.11, both editions) does mention the six-kingdom label: one sentence says the three-domain system splits Monera into two domains, giving "a six kingdom classification".
   - Only Woese's name is absent.
   - **Fix:** "NCERT Class 11 teaches Whittaker's five kingdoms, names Archaebacteria and Eubacteria within Monera, and mentions in one sentence that the three-domain system gives a six-kingdom classification; Woese's name is extra, but it appears in statement items."
2. **content/textbooks/bio-11-04/topics-4-5-extras-a-c.ts:447** lists "the organ of Bojanus, LAL and the stomochord" as not in NCERT.
   - NCERT Ch 4 §4.2.10 Hemichordata names the stomochord (both editions), as a rudimentary notochord-like structure in the collar.
   - The organ of Bojanus and LAL are indeed absent.
   - **Fix:** "…some book-level detail here (for example the organ of Bojanus and LAL) is not in NCERT even where unmarked."

### NOT FOUND IN NCERT
3. **content/textbooks/bio-11-03/extras.ts:408**, table cell "Cyanobacteria (listed with the algae in NCERT)" for Spirulina.
   - NCERT Ch 3's economic-importance passage (both editions) names only Chlorella as the protein-rich food supplement used by space travellers.
   - Spirulina appears in neither Ch 2 nor Ch 3, and in none of the current Class 12 chapters (lebo101-113).
   - **Fix:** make the cell just "Cyanobacteria" and drop the parenthesis.
4. **content/textbooks/bio-11-03/topics-1-3.ts:407** says Spirulina is "a filamentous cyanobacterium, listed with the algae in NCERT". This has the same problem as item 3.
   - **Fix:** "<i>Chlorella</i> (a unicellular green alga; NCERT's example) and <i>Spirulina</i> (a filamentous cyanobacterium, not named in NCERT) are protein-rich food supplements; …"

### Worth a look though not wrong for the old edition
- **content/textbooks/bio-11-05/topics-3-4.ts:383**, "NCERT studies three: Fabaceae, Solanaceae, Liliaceae", is out of date. The 2026-27 reprint describes only Solanaceae (§5.9), and its exercise asks only about Solanaceae.
  - **Suggested:** "NCERT describes Solanaceae in full; older editions also described Fabaceae and Liliaceae, and NEET still asks about all three."

### Minor wording, optional
- **bio-11-01/topic-2-extras-a-b.ts:341 and 350** say NCERT gives numerical, cyto- and chemotaxonomy "a single line each". In the Ch 3 intro, numerical taxonomy actually gets about three sentences, and the other two share one.
- **bio-11-02/topics-0-2.ts:426** says the mesosome helps in "equal distribution" of DNA. NCERT Ch 8 says only "distribution".

### Caveats
- I could not get the old Class 12 "Strategies for Enhancement in Food Production" PDF from the archive: the download was corrupt.
- From memory, that chapter called Spirulina a "microbe", not an alga. That would not change the NOT FOUND verdict, but I did not re-check it.

Working copies of the NCERT text are in `/private/tmp/claude-501/-Users-raasikhnaveed--claude-spares-spare-WyHVJX/acc2ce4c-c76d-4145-84f8-c0971c402b4e/scratchpad/ncertA/`. In that folder, c1-c5.txt are the current reprint, o1-o5.txt the 2019-20 edition, and lebo1NN.txt the current Class 12 chapters.

---

# Group B: Biology 11, chapters 6 to 12

# NCERT attribution check: Biology 11, our chapters 06-12 (list B)

Read-only. No repo file edited.

## Sources and editions
NCERT's site (ncert.nic.in) failed TLS verification, both from WebFetch and from curl, because its certificate chain is incomplete. I did not bypass the check. Instead I used the Wayback Machine copies of the same PDFs and extracted the text with pdftotext.
- **Current edition**: kebo106-kebo112, snapshots from Oct 2026, marked "Reprint 2026-27" (the rationalised edition). In this edition the chapter numbers match ours: 6 Anatomy, 7 Structural Organisation in Animals, 8 Cell, 9 Biomolecules, 10 Cell Cycle, 11 Photosynthesis, 12 Respiration.
- **Older edition**: kebo106-110 and kebo114, snapshots from 2022, marked "2022-23" (the pre-rationalisation edition). The kebo113 download failed, but every photosynthesis claim was settled from the current edition, so it was not needed.

**Edition caveat.** Several of our NCERT attributions hold only in the 2022-23 edition. The current edition removed this material:
- Ch 6: the opening tissue definition ("usually performing a common function") and the whole of 6.4 Secondary Growth (periderm, lenticels, bark).
- Ch 7: animal tissues, earthworm and cockroach. The chapter is now organ systems plus the frog only.
- Ch 9: section 9.11 The Living State (the blood glucose figure).

These are marked "SUPPORTED (old ed.)". Where nothing else is wrong, no fix is proposed for them, but the owner may want to note "older NCERT editions" on them.

## Verdict counts (59 listed lines)
- SUPPORTED: 43 (some only in the 2022-23 edition; see the table)
- CONTRADICTED: 1
- NOT FOUND IN NCERT: 4
- COULD NOT VERIFY: 0
- Skipped (tags, generic exam-pattern text, no checkable claim): 11

## Table
| file:line | claim | verdict | NCERT evidence | proposed fix |
|---|---|---|---|---|
| bio-11-06/extras.ts:49 | Dicot stem: endodermis is the innermost cortex layer, rich in starch, called the starch sheath, part of the ground tissue; pericycle is in the stele and gives rise to lateral roots and the vascular cambium in roots | SUPPORTED | Ch6 6.2.3 (current ed.): the innermost cortex layer is the endodermis, its cells "rich in starch grains", and the layer is also called the starch sheath. 6.1.2: all tissues except epidermis and vascular bundles are ground tissue. 6.2.1: the stele is pericycle, vascular bundles and pith, and lateral roots and vascular cambium are initiated in the pericycle. (The ch6 summary also lists pericycle as a ground-tissue zone, an NCERT inconsistency.) | — |
| bio-11-06/extras.ts:326 | Dracaena lies beyond NCERT; monocots lack secondary growth | SUPPORTED | Dracaena is absent from both editions. Current ed. 6.1.3: monocot bundles have no cambium, are "closed" and form no secondary tissues; 6.2.2: monocot roots do not undergo secondary growth. | — |
| bio-11-06/extras.ts:347 | "The NCERT rule is that monocots lack secondary growth"; Dracaena is beyond NCERT | SUPPORTED | 2022-23 ed. 6.4: secondary growth does not occur in monocotyledons. Current ed. says the same for roots and closed bundles. | — |
| bio-11-06/extras.ts:550 | NCERT says Casparian strips are on the tangential as well as radial walls | SUPPORTED | Ch6 6.2.1 dicot root: "tangential as well as radial walls" carry suberin as casparian strips. | — |
| bio-11-06/topics-3-4.ts:524 | NCERT calls the lenticel cells closely arranged parenchymatous cells | SUPPORTED (old ed.) | 2022-23 ed. 6.4.2: in places the phellogen cuts off "closely arranged parenchymatous cells" instead of cork cells. The whole section is deleted in the 2026-27 edition. | optional: "(older NCERT editions call these …)" |
| bio-11-06/topics-1-2.ts:324 | The NCERT tissue definition says "usually" | SUPPORTED (old ed.) | 2022-23 ed. 6.1: a tissue is a group of cells with a common origin and "usually performing a common function". The 2026-27 edition drops this definition. | optional edition note |
| bio-11-07/topics-1-3.ts:27 | CUET reuses NCERT line statements | skipped (generic) | — | — |
| bio-11-07/topics-1-3.ts:174, :526 | tag | skipped | — | — |
| bio-11-07/extras-c-j.ts:281 | The NCERT chapter does not describe the stages of frog metamorphosis | SUPPORTED | Ch7 7.2.2: only says the tadpole "undergoes metamorphosis to form the adult". No stages are given and thyroxine is not mentioned. | — |
| bio-11-07/extras-c-j.ts:346, :662 | tag | skipped | — | — |
| bio-11-07/extras-c-j.ts:807 | Single-fact questions test "exact numbers and facts from NCERT", e.g. the cockroach spiracle/heart counts | NOT FOUND (the heart count) | 2022-23 ed. 7.3.2 gives 10 pairs of spiracles, but the heart is only "differentiated into funnel shaped chambers" with no number. (The cockroach is absent from the 2026-27 edition.) | "…the key earthworm segment numbers, the cockroach spiracle count, and the tissue defining features." |
| bio-11-07/extras-c-j.ts:814 | Cartilage in the tip of the nose and the outer ear, stated in NCERT's connective tissue section | SUPPORTED (old ed.) | 2022-23 ed. 7.1.2: cartilage is present in the tip of the nose and outer ear joints. Ligaments attach bone to bone. | — |
| bio-11-07/extras-c-j.ts:822 | Statements are usually NCERT-fact checks | skipped (generic) | — | — |
| bio-11-07/extras-c-j.ts:829 | NCERT classes adipose as loose connective tissue alongside areolar; tendons and ligaments are dense regular; NCERT lists cartilage, bone and blood as specialised | SUPPORTED (old ed.), with caveat | 2022-23 ed. 7.1.2: adipose is "another type of loose connective tissue". Tendons and ligaments are dense regular; dense irregular is in the skin. "Cartilage, bones and blood" are specialised connective tissues. **Caveat:** the same chapter also lists adipose among the specialised tissues (in the 7.1.2 lead-in and in the Summary), so NCERT is internally inconsistent. | optional: "NCERT's main text classes it as loose connective alongside areolar (its summary also lists it as specialised)." |
| bio-11-07/extras-c-j.ts:870 | NCERT classes blood as a specialised connective tissue | SUPPORTED (old ed.) | 2022-23 ed. 7.1.2: blood is among the specialised connective tissues; "Blood is a fluid connective tissue". | — |
| bio-11-07/extras-c-j.ts:913 | NCERT's gland section distinguishes exocrine (ducts) from endocrine (ductless) | SUPPORTED (old ed.) | 2022-23 ed. 7.1.1: exocrine products are released through ducts; endocrine glands "do not have ducts". | — |
| bio-11-07/extras-c-j.ts:937 | Open circulation, paurometabolous development with about 13 moults, and a 13-chambered dorsal heart "are all NCERT facts" | NOT FOUND (the 13-chambered heart); the rest SUPPORTED (old ed.) | 2022-23 ed. 7.3: blood vascular system is "open type"; development is paurometabolous, the nymph moulting about 13 times; dioecious. The heart is described only as having funnel-shaped chambers, with no count. | "…open circulatory system and paurometabolous development with ~13 nymphal moults are NCERT facts; the 13-chambered dorsal heart comes from standard zoology texts (NCERT says only that the heart has funnel-shaped chambers)." |
| bio-11-07/topics-4-5-extras-a-b.ts:162, :483 | tag | skipped | — | — |
| bio-11-07/topics-4-5-extras-a-b.ts:345 | Male frog route vasa efferentia → kidney → Bidder's canal; ureotelic adult; metamorphosis | SUPPORTED | Ch7 7.2.2: 10-12 vasa efferentia enter the kidneys and open into Bidder's canal; the frog is ureotelic; the tadpole undergoes metamorphosis. (An ammonotelic tadpole is not in NCERT, but the line does not attribute it.) | — |
| bio-11-07/topics-4-5-extras-a-b.ts:399 | NCERT names the outflow chamber the conus arteriosus | SUPPORTED | Ch7 7.2.2: the ventricle opens into a "sac-like conus arteriosus"; sinus venosus joins the right atrium. NCERT never uses "truncus". | — |
| bio-11-07/topics-4-5-extras-a-b.ts:410 | 10 pairs of cranial nerves (NCERT); medulla exits via the foramen magnum | SUPPORTED | Ch7 7.2.2: "ten pairs of cranial nerves arising from the brain"; the medulla oblongata passes out through the foramen magnum. | — |
| bio-11-07/topics-4-5-extras-a-b.ts:526 | conus arteriosus is NCERT's name | SUPPORTED | as for :399 | — |
| bio-11-07/topics-4-5-extras-a-b.ts:541 | NCERT calls it the conus arteriosus | SUPPORTED | as for :399 | — |
| bio-11-07/topics-4-5-extras-a-b.ts:655 | 10 pairs of cranial nerves (NCERT) | SUPPORTED | as for :410 | — |
| bio-11-07/topics-4-5-extras-a-b.ts:1003 | The NCERT-specific fact is 10 pairs of spiracles "(2 thoracic + 8 abdominal)" | 10 pairs SUPPORTED (old ed.); the **2 + 8 split is NOT FOUND** | 2022-23 ed. 7.3.2: trachea open through 10 pairs of small spiracles on the lateral side of the body. No thoracic/abdominal split is given. | "…the NCERT-specific cockroach fact is its 10 pairs of spiracles (the 2 thoracic + 8 abdominal split is from standard zoology texts, not NCERT)." Or drop the parenthesis. |
| bio-11-08/topics-1-2.ts:34 | "Theodor Schwann (1839; NCERT calls him British, but he was German)" | CONTRADICTED (current ed.) | The 2026-27 edition, 8.2, now reads "Schwann (1839), a German Zoologist". Only the 2022-23 edition said "British Zoologist". | "<b>Theodor Schwann</b> (1839), a German zoologist, extended this to animals, …" (drop the NCERT parenthesis). If the older edition matters to the owner: "(older NCERT reprints called him British; the current edition corrects this to German)". |
| bio-11-08/topics-3-4.ts:449 | NCERT lists respiration among mesosome functions | SUPPORTED | Ch8 8.4.1: mesosomes "also help in respiration", secretion, and increasing membrane surface area. | — |
| bio-11-08/extras.ts:194 | 70S mitochondrial ribosomes as NCERT gives it | SUPPORTED | Ch8 8.5.4: the mitochondrial matrix has "ribosomes (70S)". | — |
| bio-11-08/extras.ts:775 | NCERT gives 70S for mitochondria; 80S eukaryotic cytoplasm, 70S prokaryotes and chloroplasts | SUPPORTED | Ch8 8.5.4, 8.5.5 (chloroplast 70S vs cytoplasmic 80S), 8.5.6. | — |
| bio-11-08/extras.ts:803 | Bacteria respire on the plasma membrane and its infoldings (NCERT's mesosome) | SUPPORTED | Ch8 8.4.1: mesosomes are infoldings of the cell membrane and help in respiration. | — |
| bio-11-08/extras.ts:809 | answers checked against NCERT | skipped (generic) | — | — |
| bio-11-08/extras.ts:844 | In NCERT's account the mesosome carries the respiratory functions in bacteria | SUPPORTED (slightly stronger than NCERT) | NCERT says only that mesosomes "help in respiration". "Making mitochondria unnecessary" is our own inference. | optional: "…the mesosome, an infolding of the plasma membrane, helps in respiration…" |
| bio-11-09/extras.ts:568 | Straight NCERT definitions (e.g. acidic amino acid) | skipped (generic; NCERT 9.2 does give glutamic acid as acidic) | — | — |
| bio-11-09/topics-3-4.ts:378 | Six enzyme classes used by NCERT (OTHLIL) | SUPPORTED | Ch9 9.8.5: enzymes are divided into 6 classes, in the order oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases. (NCERT does not say "IUB".) | — |
| bio-11-09/topics-1-2.ts:67 | Macromolecules are generally 10,000 Da and above (NCERT); lipids are trapped as vesicles | SUPPORTED | Ch9 9.3: the acid-insoluble classes other than lipids are in the range of ten thousand daltons and above; lipids form vesicles when membranes are broken. **Framing issue**: NCERT itself puts the micromolecule line at less than 1000 Da (9.3 and the Summary), so the 1000 Da cut-off is NCERT's, not just "the book's convenience". | see the note after the table |
| bio-11-09/topics-1-2.ts:72 | NCERT puts macromolecules at generally 10,000 Da and above | SUPPORTED (same framing issue) | as above | see the note after the table |
| bio-11-09/topics-1-2.ts:222 | NCERT lists cellulose under secondary polymeric substances | SUPPORTED | Ch9 Table 9.3: polymeric substances are rubber, gums, cellulose. | — |
| bio-11-09/topics-1-2.ts:282 | NCERT: macromolecules generally 10,000 Da and above | SUPPORTED (same framing issue) | as above | see the note after the table |
| bio-11-09/topics-1-2.ts:310 | check your current NCERT edition | skipped (generic; correct: The Living State was dropped from 2026-27) | — | — |
| bio-11-09/topics-1-2.ts:318 | Blood glucose 4.2-6.1 mM (NCERT) | SUPPORTED (old ed. only) | 2022-23 ed. 9.11: 4.2-6.1 mmol/L, hormones in nanograms/mL, non-equilibrium steady state. Section absent from 2026-27. | optional: "(older NCERT editions)" |
| bio-11-09/topics-1-2.ts:559 | NCERT lists cellulose among polymeric secondary metabolites | SUPPORTED | Table 9.3 | — |
| bio-11-10/extras-c-f.ts:28 | NCERT gives the furrow and cell plate direction and the coconut syncytium; the molecular machinery is beyond NCERT | SUPPORTED | Ch10 10.2.5: the furrow deepens and joins in the centre; the plant wall starts in the centre and grows outward; liquid endosperm in coconut. No actomyosin or phragmoplast. (NCERT does give a direction, so "adds … the direction of movement" is slightly redundant.) | — |
| bio-11-10/extras-c-f.ts:228 | Oncogenes etc. are beyond NCERT | SUPPORTED | Neither edition of ch10 mentions cancer, tumours, oncogenes or checkpoints. ("The chapter mentions … cancer" refers to our own Topic, not NCERT.) | — |
| bio-11-10/topics-3-4-extras-a-b.ts:425 | Our chapter names the 90-minute yeast cycle and the haploid male honeybee | SUPPORTED | Ch10 10.1: yeast about 90 minutes; 10.1.1: male honey bees as haploid cells dividing by mitosis. | — |
| bio-11-10/topics-3-4-extras-a-b.ts:429 | Named checkpoints and cyclin-CDK pairs are beyond NCERT | SUPPORTED | Ch10 (both editions) has no check points, cyclins or CDKs at all. "The chapter tells you…" refers to our own Topic 01. | — |
| bio-11-10/topics-1-2.ts:105 | Molecular details are beyond NCERT, but "the named G1/S and G2/M check points and the cyclin-CDK mechanism above are within scope" | NOT FOUND | Neither the 2026-27 nor the 2022-23 ch10 mentions check points, cyclins or cyclin-dependent kinases. 10.1 covers only the phases, G0 and the yeast/human cycle times. | "…The named G<sub>1</sub>/S and G<sub>2</sub>/M check points and the cyclin–CDK mechanism above are not in the NCERT text either; treat them as enrichment too." |
| bio-11-11/extras.ts:549 | NCERT gives light saturation at about 10 per cent of full sunlight | SUPPORTED | Ch11 11.10.1: light saturation occurs at 10 per cent of full sunlight. | — |
| bio-11-11/topics-1-2.ts:70 | Four bands; the order NCERT lists them (chl a, chl b, xanthophylls, carotenoids, with colours) | SUPPORTED | Ch11 11.4: chlorophyll a (bright or blue green), chlorophyll b (yellow green), xanthophylls (yellow), carotenoids (yellow to yellow-orange). | — |
| bio-11-11/topics-3-4.ts:407 | NCERT values: C4 higher temperature response, C3 lower optimum; C4 CO2 saturation about 360 µL/L, C3 beyond 450 µL/L; light saturation 10% of full sunlight | SUPPORTED | Ch11 11.10.1-11.10.3, matching numbers. | — |
| bio-11-12/topics-2-3.ts:371 | NCERT quotes protein RQ about 0.9 | SUPPORTED | Ch12 12.7: for proteins the ratio "would be about 0.9"; fat example 0.7. | — |
| bio-11-12/topics-2-3.ts:581 | same | SUPPORTED | same | — |
| bio-11-12/extras.ts:33 | Our chapter does not address alternative oxidase; it is beyond NCERT | SUPPORTED | Ch12 has no alternative oxidase ("alternative" appears only as "alternative substrates"). | — |
| bio-11-12/extras.ts:90 | 38 ATP is the idealised figure the NCERT chapter works with | SUPPORTED | Ch12 12.5: under stated assumptions, "a net gain of 38 ATP", called a theoretical exercise. (The 4 + 34 breakdown is ours, not NCERT's, but it is not attributed.) | — |
| bio-11-12/extras.ts:299 | NCERT quotes about 0.9 for protein | SUPPORTED | 12.7 | — |
| bio-11-12/extras.ts:396 | Covers complexes I-IV with ATP synthase as complex V, amphibolic; no AOX; beyond NCERT | SUPPORTED | Ch12 12.4.3: complex I (NADH dehydrogenase), II (FADH2 from succinate), III (cyt bc1), IV (cyt c oxidase), ATP synthase (complex V); 12.6 amphibolic pathway. | — |
| bio-11-12/extras.ts:826 | At NCERT level "anaerobic respiration" in plants and muscle usually means fermentation | SUPPORTED | Ch12 12.3: fermentation under anaerobic conditions (yeast; lactic acid in muscle when oxygen is inadequate). Note on point 2: "the Krebs enzymes the chapter names" refers to our chapter. NCERT itself never names succinate dehydrogenase (only "oxidation of succinate" feeding complex II, plus citrate synthase). | optional: "Among the Krebs enzymes this book names…" |

## Supported, but the framing is worth fixing
bio-11-09/topics-1-2.ts:67, :72, :282 call the roughly 1000 Da line "the book's working cut-off … a convenience", as opposed to NCERT. In fact NCERT 9.3 itself defines micromolecules as having molecular weights below one thousand dalton, and its summary repeats "<1000 Da". The 10,000 Da figure is the size of the acid-insoluble macromolecules (proteins, nucleic acids, polysaccharides). Suggested wording for :72:

> "NCERT's dividing line is a molecular weight of about 1000 Da: below it, micromolecule (small biomolecule); in the acid-insoluble pool, macromolecule/biomacromolecule (these, apart from lipids, are generally 10,000 Da and above)."

Make the parallel change in :67 and :282.

---

# Group C: Biology 11, chapters 13 to 19

# NCERT attribution check, list C (Biology 11, our chapters 13-19)

Source read: the official NCERT PDFs kebo113-kebo119 (https://ncert.nic.in/textbook/pdf/kebo1NN.pdf), downloaded and converted with pdftotext. Every page is footed "Reprint 2026-27", so this is the current **rationalised** edition. In it, Ch 13 has no photoperiodism, vernalisation, seed-dormancy or phytochrome sections (only end-of-chapter exercises still mention photoperiod). Ch 18 stops at 18.4 Central Neural System, with no sensory-reception (eye/ear) section. NCERT chapter numbers match ours: 13 Plant Growth, 14 Breathing, 15 Body Fluids, 16 Excretory Products, 17 Locomotion, 18 Neural Control, 19 Chemical Coordination.
(The ncert.nic.in server leaves out its intermediate TLS certificate, so WebFetch failed. I fetched the Let's Encrypt YE1 intermediate from the URL in the server's own certificate and downloaded the PDFs with normal TLS verification.)

Counts: 63 lines. SUPPORTED 55, CONTRADICTED 2, NOT FOUND IN NCERT 4, COULD NOT VERIFY 0, skipped (generic, nothing to check) 2.

| file:line | claim | verdict | NCERT evidence | proposed fix |
|---|---|---|---|---|
| bio-11-13/topic-3-extras-a-b.ts:84 | FT-gene identity of florigen is beyond NCERT 11 | SUPPORTED | Ch13 (2026-27) has no florigen or photoperiodism text at all (removed in rationalisation) | none (optional note: florigen itself is also absent from the current edition) |
| bio-11-13/topic-3-extras-a-b.ts:107 | LSDP/SLDP beyond NCERT 11 | SUPPORTED | not in Ch13 | none |
| bio-11-13/topic-3-extras-a-b.ts:304 | Richmond-Lang, Pr/Pfr, nastic etc. go beyond NCERT | SUPPORTED | none of these terms appear in Ch13 | none |
| bio-11-13/topic-3-extras-a-b.ts:486 | GA used to speed malting in brewing (NCERT) | SUPPORTED | 13.4.3.2: GA3 is used to speed up malting in brewing; 13.4.3.5: ABA mostly antagonises GAs | none |
| bio-11-13/extras-c-f.ts:30 | NCERT states the outcomes (malting, ABA closes stomata, cytokinin delays leaf senescence); the cellular sequences are beyond it | SUPPORTED | 13.4.3.2/.3/.5 state all three outcomes; alpha-amylase is not mentioned | none |
| bio-11-13/extras-c-f.ts:160 | Pr/Pfr mechanism beyond NCERT | SUPPORTED | "phytochrome" does not appear in Ch13 | none |
| bio-11-13/extras-c-f.ts:280 | only coleoptile phototropism; no gravitropism; nastic movements beyond NCERT | SUPPORTED | 13.4.3.1 gives Darwin's canary-grass coleoptile phototropism only; gravity appears only as an environmental signal; no nastic movements | none |
| bio-11-13/extras-c-f.ts:617 | watermelon figure appears in NCERT; meristem cells protoplasm-rich, large nuclei; cytokinins at sites of rapid division | SUPPORTED | 13.1.2: watermelon cells may enlarge up to 3,50,000 times; 13.1.3: meristematic cells rich in protoplasm with large conspicuous nuclei; 13.4.3.3: natural cytokinins made where rapid cell division occurs (root apices, shoot buds, young fruits) | none |
| bio-11-14/extras-c-g.ts:41 | 4 mL CO2 per 100 mL unloaded at lungs is NCERT's figure | SUPPORTED | 14.4.2: every 100 ml deoxygenated blood delivers about 4 ml CO2 to alveoli | none |
| bio-11-14/extras-c-g.ts:49 | Gibbs-Donnan beyond NCERT; "the chapter itself needs only the exchange of bicarbonate for chloride" | NOT FOUND (second half) | Ch14 never mentions chloride or the chloride shift; it covers only carbonic anhydrase and bicarbonate (14.4.2). Our own topics-1-3.ts:551 says correctly that the chloride shift is beyond core NCERT | "This exchange is rapid (completes in less than a second) and maintains the Gibbs-Donnan equilibrium across the RBC membrane. Both the chloride shift and the Gibbs-Donnan wording go beyond the NCERT text, which covers only the formation of bicarbonate by carbonic anhydrase." |
| bio-11-14/extras-c-g.ts:124 | V/Q beyond NCERT | SUPPORTED | not in Ch14 | none |
| bio-11-14/extras-c-g.ts:129 | three factors (gradient, solubility, thickness); no V/Q; V/Q beyond NCERT | SUPPORTED | 14.3 names pressure/concentration gradient, solubility and membrane thickness | none |
| bio-11-14/extras-c-g.ts:353 | chapter names organs across animals (earthworm, insects, fish, birds, mammals); comparative adaptations beyond NCERT | SUPPORTED | 14.1: earthworm cuticle, insect tracheae, fish gills; amphibians, reptiles, birds and mammals use lungs. (High altitude refers to our Topic 04; Ch14 has none.) | none |
| bio-11-14/extras-c-g.ts:510 | NCERT: ~5 mL O2 per 100 mL oxygenated blood | SUPPORTED | 14.4.1 | none |
| bio-11-14/extras-c-g.ts:517 | carbaminohaemoglobin 20-25% (NCERT table/definition) | SUPPORTED | 14.4 / 14.4.2: 20-25 per cent | none |
| bio-11-14/extras-c-g.ts:571 | NCERT Figure 14.1 is the human respiratory system diagram | SUPPORTED | Fig 14.1 is a diagrammatic view of the human respiratory system (sectional view of left lung) | none |
| bio-11-14/extras-c-g.ts:717 | 70% bicarbonate, 20-25% carbamino, 7% dissolved; NCERT's conducting part ends at terminal bronchioles; respiratory bronchioles not in NCERT | SUPPORTED | 14.4 gives all three percentages; 14.1 says the conducting part runs from the nostrils to the terminal bronchioles, and the alveoli and their ducts form the exchange part | none |
| bio-11-14/topics-4-5-extras-a-b.ts:57 | O2 sensing beyond core NCERT | SUPPORTED | 14.5: oxygen's role in regulating the rhythm is "quite insignificant"; receptors on the aortic arch and carotid artery are described for CO2/H+ only | none |
| bio-11-14/topics-4-5-extras-a-b.ts:86 | heading "major respiratory disorders (core NCERT)" | SUPPORTED (caveat) | 14.6: asthma, emphysema, occupational disorders. The definitions under this heading add things NCERT lacks: allergy and mast cells, COPD, silicosis/asbestosis | optional: "(core NCERT; the examples and the COPD label are added)" |
| bio-11-14/topics-4-5-extras-a-b.ts:425 | conducting zone defined by NCERT, volume not given | SUPPORTED | 14.1 defines the conducting part; no dead-space volume | none |
| bio-11-14/topics-4-5-extras-a-b.ts:547 | NCERT gives only ~5 mL O2/100 mL, not 1.34 mL/g | SUPPORTED | 14.4.1; no 1.34 figure (only 12-16 g Hb per 100 ml, in Ch15) | none |
| bio-11-14/topics-1-3.ts:53 | NCERT frames respiration as five steps | SUPPORTED | 14.1 lists steps (i)-(v), matching ours | none |
| bio-11-14/topics-1-3.ts:158 (values at :162) | TV 500, IRV 2500-3000, ERV 1000-1100, RV 1100-1200 mL | SUPPORTED | 14.2.1, all four match | none |
| bio-11-14/topics-1-3.ts:466 | partial-pressure table (159/0.3, 104/40, 40/45, 95/40, 40/45) | SUPPORTED | Table 14.1 matches exactly | none |
| bio-11-14/topics-1-3.ts:551 | Haldane and Hamburger beyond core NCERT | SUPPORTED | neither is in Ch14 | none |
| bio-11-15/extras-d-i.ts:94 | NCERT SAN rate 70-75/min (SV 70 mL, CO 5 L) | SUPPORTED | 15.3.1: SAN generates the most action potentials, 70-75 min^-1; 15.3.2: stroke volume about 70 mL, cardiac output about 5000 mL | none |
| bio-11-15/extras-d-i.ts:544 | "the answer lives in one line of the NCERT table"; tables of WBC differential, clotting factors, blood-group antigens | NOT FOUND (partly) | Ch15 has one table, Table 15.1 (blood groups and donor compatibility). WBC percentages are given in prose (15.1.2). There is no list or table of clotting factors (15.1.4 names only thrombokinase, thrombin, fibrinogen and Ca++) | "...No passage to read; the answer lives in one line of the NCERT text (or Table 15.1 for blood groups). Approach: ... If you have the facts (WBC differential, the clotting steps, blood-group antigens) locked in memory, ..." |
| bio-11-15/topics-3-4-extras-a-c.ts:56 | "NCERT counts three phases" | NOT FOUND | 15.3.2 narrates joint diastole, atrial systole, ventricular systole, ventricular diastole and back to joint diastole, but never numbers or counts phases. The three-phase count is a common derivation, not NCERT's wording | "The three-phase count (joint diastole, atrial systole, ventricular systole) follows NCERT's narration of the cycle. The four steps listed under Key processes and mechanisms split the cycle by the valves: steps 1 and 4 together are the joint diastole of the three-phase count (all chambers relaxed)." |
| bio-11-16/extras-g-j.ts:43 | human max ~1,200 mOsm/L is the NCERT figure; kangaroo-rat figure not in NCERT | SUPPORTED | 16.4: medullary gradient runs from 300 to about 1200 mOsmolL^-1; filtrate concentrated about four times. Uricotelic list in NCERT (16 intro): reptiles, birds, land snails, insects | none |
| bio-11-16/extras-g-j.ts:134 | NCERT gives 70-80% of electrolytes and water for PCT | SUPPORTED | 16.3, PCT | none |
| bio-11-16/extras-g-j.ts:187 | GFR, 99%, 1-1.5 L, 1,200 mOsm/L are NCERT's | SUPPORTED | 16.2: 125 ml/min, 180 L/day; nearly 99% reabsorbed (from 180 L vs 1.5 L); 16.6: 1 to 1.5 L urine/day; 16.4: 1200 | none |
| bio-11-16/extras-g-j.ts:329 | NCERT: 70-80% electrolytes and water | SUPPORTED | 16.3 | none |
| bio-11-16/extras-g-j.ts:385 | 125 mL/min, 180 L/day, 99%, 300 to 1200 mOsm/L | SUPPORTED | 16.2, 16.4 | none |
| bio-11-16/extras-g-j.ts:441 | "recall its Column II partner from the NCERT table" | NOT FOUND | Ch16 contains no table; organs, structures and disorders appear only in prose (16 intro, 16.3, 16.8) | "...For each item in Column I, recall its Column II partner from the NCERT text. Then compare your table to the given options." |
| bio-11-16/extras-g-j.ts:543 | answers follow from NCERT principles | skipped (generic) | n/a | n/a |
| bio-11-16/extras-g-j.ts:554 | PCT 70-80% electrolytes and water; glucose and amino acids actively | SUPPORTED | 16.3: nearly all essential nutrients plus 70-80% of electrolytes and water; 16.2: glucose, amino acids and Na+ are reabsorbed actively | none |
| bio-11-16/topics-1-3.ts:590 | ~1-1.5 L urine is the NCERT figure | SUPPORTED | 16.6 (1 to 1.5 L); 16.2 uses 1.5 L | none |
| bio-11-16/topics-1-3.ts:833 | GFR 125/180, 99%, 1-1.5 L (NCERT) | SUPPORTED | 16.2, 16.6 | none |
| bio-11-16/topic-4-extras-a-f.ts:265 | chapter covers RAAS/ADH/ANF, disorders; much of the unit beyond NCERT | SUPPORTED | 16.5 covers ADH, the renin-angiotensin system and ANF; 16.8 covers disorders; aquaporins, ornithine cycle and diuretics are absent | none |
| bio-11-17/topics-0-2.ts:666 | calsequestrin / Ca-logistics comparison beyond NCERT | SUPPORTED | 17.2 says only that the SR stores calcium | none |
| bio-11-17/topics-3-4-extras-a-b.ts:104 | NCERT places ear ossicles and hyoid with the skull; 22 = 8 + 14; vertebral counts; rib classes; total 80 | SUPPORTED (aside) | 17.3: 8 cranial and 14 facial = 22; hyoid and ossicles described in the skull paragraph; axial skeleton 80 bones; 26 vertebrae, 7/12/5/1/1; 12 rib pairs, 7 true, 8-10 false, 11-12 floating. Aside, not an NCERT attribution: NCERT says ribs 8-10 join the **seventh rib** by hyaline cartilage, while our line says "the costal cartilage of the rib above" | none required (optional: "joining the seventh rib by hyaline cartilage (NCERT)") |
| bio-11-17/topics-3-4-extras-a-b.ts:650 | vesicle numbers, curare/bungarotoxin timescale beyond NCERT | SUPPORTED | Ch17 has none of these | none |
| bio-11-17/topics-3-4-extras-a-b.ts:700 | twitch durations beyond NCERT | SUPPORTED | no twitch/summation in Ch17 | none |
| bio-11-17/extras-c-g.ts:29 | ossification and synovial architecture beyond NCERT | SUPPORTED | Ch17 17.3-17.4 has neither | none |
| bio-11-17/extras-c-g.ts:75 | chapter names five synovial subtypes and the fluid-filled cavity; full architecture beyond NCERT | SUPPORTED | 17.4: ball and socket, hinge, pivot, gliding, saddle; fluid-filled synovial cavity | none |
| bio-11-17/extras-c-g.ts:116 | synovial fluid composition beyond NCERT | SUPPORTED | not in Ch17 | none |
| bio-11-17/extras-c-g.ts:236 | NCERT: PTH increases Ca2+ absorption from digested food | SUPPORTED | Ch19 19.2.5 (Parathyroid) states this | none |
| bio-11-17/extras-c-g.ts:240 | normal Ca range is outside NCERT | SUPPORTED | no mg/dL value in Ch17 or Ch19; 17.5 defines tetany as low Ca++ in body fluid | none |
| bio-11-17/extras-c-g.ts:324 | four clinical patterns beyond NCERT | SUPPORTED | training adaptation, haemarthrosis etc. not in Ch17 | none |
| bio-11-17/extras-c-g.ts:607 | cartilaginous is the NCERT answer for the joint between vertebrae | SUPPORTED | 17.4: joint between adjacent vertebrae is cartilaginous, permits limited movement | none |
| bio-11-18/extras-c-h.ts:488 | "study them from the sensory-reception section of NCERT. That section may have been removed" | CONTRADICTED | The current edition (2026-27) of Ch18 has sections 18.1-18.4 only. No sensory-reception (eye/ear) section exists, so there is nothing in NCERT 11 to study them from | "...They are not part of this chapter's text, and the current rationalised NCERT chapter no longer has its sensory-reception (eye and ear) section, so check the current NEET syllabus before spending time on them." |
| bio-11-18/extras-c-h.ts:509 | generic "false-test against NCERT fact" | skipped (generic) | n/a | n/a |
| bio-11-18/extras-c-h.ts:668 | NCERT has the hypothalamus working with the limbic system, not inside it | SUPPORTED | 18.4.1: inner parts of the cerebral hemispheres plus deep structures (amygdala, hippocampus) form the limbic system; together with the hypothalamus it regulates sexual behaviour, emotional reactions and motivation | none |
| bio-11-18/extras-c-h.ts:696 | "Study the sensory-reception section of NCERT... this section may have been removed" | CONTRADICTED | same as :488; the section is not in the current Ch18 | "2. Eye and ear are not covered in this chapter's text, and the rationalised NCERT chapter has dropped its sensory-reception section. Check the current NEET syllabus first; if they are examinable, make a comparison table (structure, location, function, what is absent there)." |
| bio-11-18/topics-0-2.ts:28 | covers the complete rationalised NCERT Class 11 chapter Neural Control and Coordination | SUPPORTED | Ch18 2026-27: 18.1-18.4 (the "four topics" are ours) | none |
| bio-11-18/topics-0-2.ts:533 | NCERT wording of the limbic system | SUPPORTED | 18.4.1, as for :668 | none |
| bio-11-19/extras-b-g.ts:134 | calcitriol/vitamin D activation beyond NCERT 11 | SUPPORTED | Ch19 covers PTH (19.2.5) and TCT (19.2.4) but never vitamin D or calcitriol | none |
| bio-11-19/extras-b-g.ts:216 | Gs/cAMP/PKA cascade and amplification beyond NCERT | SUPPORTED | 19.4 names cyclic AMP, IP3 and Ca++ only as examples of second messengers; no Gs, PKA or amplification | none |
| bio-11-19/extras-b-g.ts:314 | counter-regulatory response beyond NCERT | SUPPORTED | Ch19 gives glucagon (hyperglycemic) and the glucocorticoids' gluconeogenesis separately; no counter-regulatory concept | none |
| bio-11-19/extras-b-g.ts:409 | autocrine/paracrine and prostaglandins beyond NCERT | SUPPORTED | none in Ch19 | none |
| bio-11-19/extras-b-g.ts:485 | topics go beyond NCERT Ch19 | SUPPORTED | as above | none |
| bio-11-19/extras-b-g.ts:504 | same | SUPPORTED | as above | none |
| bio-11-19/topics-1-12-extra-a.ts:213 | NCERT credits the JG cells with erythropoietin | SUPPORTED | 19.3: JG cells of the kidney produce erythropoietin; renin from JG cells is in Ch16 16.2 | none |

---

# Group D: Biology 12, chapters 1 to 5

# Report D: NCERT attributions, Biology 12 Ch 1-5 (bio-12-01 .. bio-12-05)

Sources read (full text extracted locally from ncert.nic.in PDFs, every page footer reads "Reprint 2026-27", i.e. the current rationalised edition):
- lebo101 Sexual Reproduction in Flowering Plants; lebo102 Human Reproduction; lebo103 Reproductive Health; lebo104 Principles of Inheritance and Variation; lebo105 Molecular Basis of Inheritance; lebo106 Evolution
- kebo113 (Class 11 Ch 13 Plant Growth and Development); kebo115 (Class 11 Ch 15 Body Fluids and Circulation, Rh section)
- NCERT Exemplar Class XII Biology leep402 (Sexual Reproduction in Flowering Plants), leep404 (Reproductive Health)
Older (pre-2023) editions were NOT read; where a claim looks like it came from an older edition I say so but have not confirmed it.

Counts: 93 lines. 3 skipped (generic, no checkable claim). 90 checked: SUPPORTED 83, CONTRADICTED 2 (partial), NOT FOUND IN NCERT 5, COULD NOT VERIFY 0.

Skipped: bio-12-01/extras-d-g.ts:338 (exam tip, "exact NCERT term"); bio-12-02/topics-1-2.ts:27 (exam-relevance box); bio-12-03/topics-3-4-extras-a-b.ts:650 (heading "built from NCERT's definitions").

| file:line | claim | verdict | NCERT evidence | proposed fix |
|---|---|---|---|---|
| bio-12-01/extras-d-g.ts:28 | NCERT does not describe dispersal mechanisms | SUPPORTED | lebo101 §1.4: says many fruits have evolved seed-dispersal mechanisms and asks students to recall them from an earlier class; seeds have better strategies for dispersal to new habitats. Mechanisms not described. | (optional) mention NCERT's one-line pointer to fruit dispersal mechanisms |
| bio-12-01/extras-d-g.ts:181 | non-recurrent (haploid) apomixis is not NCERT's focus | SUPPORTED | lebo101 §1.5 describes only an unreduced diploid egg and nucellar embryos | - |
| bio-12-01/extras-d-g.ts:403 | anther T.S. layers epidermis, endothecium, middle layers, tapetum, sporogenous tissue | SUPPORTED | lebo101 §1.2.1: four wall layers in that order | - |
| bio-12-01/extras-d-g.ts:481 | cleistogamous flowers invariably autogamous "as NCERT says" | SUPPORTED | lebo101 §1.2.3: cleistogamous flowers do not open and are invariably autogamous | - |
| bio-12-01/topic-4-extras-a-c.ts:27 | apomixis classification beyond NCERT | SUPPORTED | lebo101 §1.5 has no diplospory/apospory/agamospermy terms | - |
| bio-12-01/topic-4-extras-a-c.ts:47 | Exemplar asks how polyembryony can be commercially exploited | SUPPORTED | Exemplar leep402: "What is polyembryony and how can it be commercially exploited?" | - |
| bio-12-01/topic-4-extras-a-c.ts:58 | NCERT definition: seeds without fertilisation; Asteraceae and grasses | SUPPORTED | lebo101 §1.5: some Asteraceae and grasses produce seeds without fertilisation (apomixis); asexual reproduction that mimics sexual | - |
| bio-12-01/topic-4-extras-a-c.ts:75 | "Beyond-NCERT classification" | SUPPORTED | terms absent from lebo101 | - |
| bio-12-01/topic-4-extras-a-c.ts:100 | Exemplar asks why an apomictic embryo sac looks normal but is diploid | SUPPORTED | Exemplar leep402 long-answer question on exactly this | - |
| bio-12-01/topic-4-extras-a-c.ts:102 | "Routes to apomictic seeds (beyond NCERT)" | CONTRADICTED (partial) | lebo101 §1.5 describes two routes itself: a diploid egg formed without reduction division developing without fertilisation, and nucellar cells (Citrus, mango) protruding into the embryo sac and forming embryos. Only the names are beyond NCERT. | `<b>3.2 Routes to apomictic seeds (the names are beyond NCERT: NEET-advanced; NCERT describes the unreduced-egg and nucellar routes without naming them)</b>` |
| bio-12-01/topic-4-extras-a-c.ts:105 | in NCERT apomixis means asexual seed formation | SUPPORTED | lebo101 §1.5 | - |
| bio-12-01/topic-4-extras-a-c.ts:123 | Allium odorum example beyond NCERT | SUPPORTED | not in lebo101 | - |
| bio-12-01/topic-4-extras-a-c.ts:128 | Exemplar asks apomixis vs parthenocarpy | SUPPORTED | Exemplar leep402: "Are parthenocarpy and apomixis different phenomena? Discuss..." | - |
| bio-12-01/topic-4-extras-a-c.ts:320 | "Apomixis routes (beyond NCERT)" | CONTRADICTED (partial) | as for :102; NCERT covers diploid-egg and nucellar (adventive) routes in substance | `f: '<b>Apomixis routes (names beyond NCERT)</b>'` |
| bio-12-01/topic-4-extras-a-c.ts:361 | NCERT Class 11: ABA enforces dormancy and GA breaks it | NOT FOUND (GA half) | kebo113 §13.4.3.5: ABA inhibits germination and induces seed dormancy; "ABA acts as an antagonist to GAs". The GA section (§13.4.3.2) says nothing about dormancy; §13.4.3.4 names ethylene as breaking seed and bud dormancy. | `The standard teaching (NCERT Class 11, plant growth regulators) is that ABA induces seed dormancy and inhibits germination and acts as an antagonist to GAs (that GA breaks dormancy goes beyond NCERT, which credits ethylene with breaking seed dormancy); the mechanism is testable:` |
| bio-12-01/topic-4-extras-a-c.ts:477 | NCERT introduces SI as an outbreeding device but no genetics/types/S-alleles | SUPPORTED | lebo101 §1.2.3: SI is "a genetic mechanism" that inhibits self-pollen germination or tube growth; no types or S-alleles | - |
| bio-12-01/topics-1-3.ts:613 | NCERT calls double fertilisation unique to flowering plants | SUPPORTED | lebo101 §1.3 | - |
| bio-12-02/extras-c-f.ts:55 | Mifepristone "not a contraceptive in the NCERT context" | NOT FOUND | Mifepristone/RU-486 does not appear anywhere in lebo102 or lebo103 | `'Not covered in NCERT; used for medical termination of early pregnancy, not as a routine contraceptive'` |
| bio-12-02/extras-c-f.ts:80 | Saheli: once-a-week, non-steroidal (NCERT); centchroman/SERM beyond | SUPPORTED | lebo103 §3.2 | - |
| bio-12-02/extras-c-f.ts:135 | non-steroidal oral contraceptive named in NCERT | SUPPORTED | lebo103 §3.2 names Saheli (centchroman not named in NCERT; question asks it, so its answer must be beyond-NCERT) | - |
| bio-12-02/extras-c-f.ts:247 | NCERT: gradual rise of FSH and LH in follicular phase | SUPPORTED | lebo102 §2.4. ("Figure 2.6" is our own figure b12-02-fig-2.6, not NCERT's; NCERT's cycle figure is 2.9.) | - |
| bio-12-02/extras-c-f.ts:264 | PCOS beyond NCERT | SUPPORTED | not in lebo102/103 | - |
| bio-12-02/extras-c-f.ts:298 | 36-48 h figure beyond NCERT | SUPPORTED | NCERT gives no feedback timing | - |
| bio-12-02/extras-c-f.ts:300 | same | SUPPORTED | same | - |
| bio-12-02/extras-c-f.ts:540 | NCERT lists hCG, hPL, relaxin as produced only in pregnancy | SUPPORTED | lebo102 §2.7 | - |
| bio-12-02/topic-3-extras-a-b.ts:117 | same | SUPPORTED | lebo102 §2.7 | - |
| bio-12-02/topic-3-extras-a-b.ts:170 | heart after 1 month; heartbeat via stethoscope; limbs/digits end of month 2; organs by 12 wk; movements month 5; fine hair, eyelids, eyelashes by 24 wk | SUPPORTED | lebo102 §2.7, all milestones match | - |
| bio-12-02/topic-3-extras-a-b.ts:329 | hCG, hPL, relaxin only in pregnancy; relaxin from ovary | SUPPORTED | lebo102 §2.7 (relaxin secreted by the ovary in later pregnancy) | - |
| bio-12-02/topic-3-extras-a-b.ts:359 | NCERT's GIFT: donor ovum for a woman who cannot produce ova | SUPPORTED | lebo103 §3.5 | - |
| bio-12-02/topic-3-extras-a-b.ts:413 | same | SUPPORTED | lebo103 §3.5 | - |
| bio-12-02/topic-3-extras-a-b.ts:442 | NCERT names common STIs; infertility a consequence | SUPPORTED | lebo103 §3.4 | - |
| bio-12-02/topic-3-extras-a-b.ts:453 | candidiasis not in NCERT list | SUPPORTED | list: gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV | - |
| bio-12-02/topics-1-2.ts:456 | couple of million oogonia per foetal ovary; 60,000-80,000 per ovary at puberty | SUPPORTED | lebo102 §2.3 | - |
| bio-12-02/topics-1-2.ts:522 | meiosis I completes in tertiary follicle | SUPPORTED | lebo102 §2.3 | - |
| bio-12-02/topics-1-2.ts:629 | NCERT cycle text calls it the ovum | SUPPORTED | lebo102 §2.4 says "release of ovum"; §2.3 says secondary oocyte (ovum) | - |
| bio-12-03/extras-c-g.ts:46 | chapter describes only the imbalance between falling death rate and high birth rate | NOT FOUND (partial) | lebo103 §3.2 gives the causes as a rapid decline in death rate, MMR and IMR plus more people of reproducible age; birth rate is not mentioned | `<b>The demographic transition model (beyond NCERT; the chapter gives only the causes: a rapid fall in death rate, MMR and IMR and more people of reproductive age).</b> The demographic transition model describes this imbalance in stages:` |
| bio-12-03/extras-c-g.ts:65 | 2 bn 1900, 6 bn 2000; India 350 m at 1947 to ~1 bn by 2000 | SUPPORTED | lebo103 §3.2 ("close to the billion mark") | - |
| bio-12-03/extras-c-g.ts:248 | Saheli non-steroidal, once a week (NCERT) | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/extras-c-g.ts:252 | NCERT gives only the 12-week safety limit | SUPPORTED | lebo103 §3.3; no medical-abortion drugs in NCERT | - |
| bio-12-03/extras-c-g.ts:302 | same | SUPPORTED | same | - |
| bio-12-03/extras-c-g.ts:330 | 72 h is NCERT's limit | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/extras-c-g.ts:358 | IUD within 72 h (NCERT) | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/extras-c-g.ts:547 | NCERT: 1 RMP to 12 wk, 2 RMPs 12-24 wk | SUPPORTED | lebo103 box, MTP (Amendment) Act 2017 | - |
| bio-12-03/extras-c-g.ts:552 | NCERT uses STD/STI/VD/RTI for the same group | SUPPORTED | lebo103 §3.4 (STI/VD/RTI), STD used in §3.1 and summary | - |
| bio-12-03/topics-3-4-extras-a-b.ts:88 | NCERT's strategy menu | SUPPORTED | lebo103 §3.1 (our list omits NCERT's statutory ban on amniocentesis, child immunisation and educating couples; not wrong, just incomplete) | (optional) add those three items |
| bio-12-03/topics-3-4-extras-a-b.ts:104 | population figures | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:118 | Saheli, CDRI Lucknow is the NCERT example | SUPPORTED | lebo103 §3.1 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:342 | 45-50 m MTPs/yr, one-fifth of conceived pregnancies | SUPPORTED | lebo103 §3.3 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:346 | first trimester safe; second riskier "because the foetus is intimately associated with maternal tissue" (in NCERT-labelled block) | NOT FOUND (reason only) | lebo103 §3.3: safe up to 12 weeks; second-trimester abortions much riskier. No reason given; not in Exemplar leep404 either | `• <b>Riskier in the SECOND TRIMESTER</b> (NCERT); the usual explanation, beyond NCERT, is that the foetus is by then intimately associated with maternal tissue.` |
| bio-12-03/topics-3-4-extras-a-b.ts:350 | NCERT: MTP (Amendment) Act 2017, 12/24-week split | SUPPORTED | lebo103 box | - |
| bio-12-03/topics-3-4-extras-a-b.ts:362 | "NCERT adds that it does have a significant role in decreasing the population, though it is not meant for that purpose" | NOT FOUND (current edition) | Not in lebo103 (Reprint 2026-27) §3.3 or anywhere in the chapter. Probably from an older edition; not confirmed. | Delete the sentence `NCERT adds that it does have a significant role in decreasing the population, though it is not meant for that purpose.` (or, if kept: `Older NCERT editions added that it does have a significant role in decreasing the population, though it is not meant for that purpose.`) |
| bio-12-03/topics-3-4-extras-a-b.ts:380 | NCERT older split | SUPPORTED | lebo103 box | - |
| bio-12-03/topics-3-4-extras-a-b.ts:451 | NCERT estimate of MTPs | SUPPORTED | 45-50 million | - |
| bio-12-03/topics-3-4-extras-a-b.ts:463 | relatively safe up to 12 weeks | SUPPORTED | lebo103 §3.3 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:465 | 6 weeks outside NCERT figure | SUPPORTED | - | - |
| bio-12-03/topics-3-4-extras-a-b.ts:468 | 28 weeks outside NCERT figure | SUPPORTED | - | - |
| bio-12-03/topics-3-4-extras-a-b.ts:503 | NCERT first trimester; 1 RMP to 12, 2 to 24 | SUPPORTED | lebo103 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:510 | NCERT legal split | SUPPORTED | lebo103 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:521 | NCERT legal split | SUPPORTED | lebo103 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:550 | 72 h NCERT's limit | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:554 | NCERT names progestogens or progestogen-oestrogen preparations | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/topics-3-4-extras-a-b.ts:558 | NCERT lists an IUD among emergency options within 72 h | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/topics-1-2.ts:116 | 72 h NCERT's limit; days 10-17; LAM up to 6 months | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/topics-1-2.ts:127 | NCERT takes days 10-17 as fertile period | SUPPORTED | lebo103 §3.2 | - |
| bio-12-03/topics-1-2.ts:384 | NCERT uses STI/STD/VD/RTI together; not-curable trio | SUPPORTED | lebo103 §3.4 | - |
| bio-12-03/topics-1-2.ts:410 | same | SUPPORTED | lebo103 §3.4 | - |
| bio-12-03/topics-1-2.ts:477 | same | SUPPORTED | lebo103 §3.4 | - |
| bio-12-03/topics-1-2.ts:648 | same | SUPPORTED | lebo103 §3.4 | - |
| bio-12-04/extras-d-g.ts:202 | NCERT Evolution lists five factors | SUPPORTED | lebo106 §6.7: gene migration/flow, genetic drift, mutation, recombination, natural selection | - |
| bio-12-04/extras-d-g.ts:309 | chromosomal disorders and sickle-cell basis are NCERT; 2n+1 not NCERT | SUPPORTED | lebo104 §4.8 | - |
| bio-12-04/topics-4-5-extras-a-c.ts:85 | epistasis beyond NCERT core; 3-gene skin-colour is a model | SUPPORTED | lebo104 §4.4 ("let us assume that three genes"); no epistasis | - |
| bio-12-04/topics-4-5-extras-a-c.ts:92 | NCERT: generally three or more genes | SUPPORTED | lebo104 §4.4 | - |
| bio-12-04/topics-4-5-extras-a-c.ts:239 | same | SUPPORTED | lebo104 §4.4 | - |
| bio-12-04/topics-4-5-extras-a-c.ts:699 | epistatic ratios beyond NCERT | SUPPORTED | none in lebo104 | - |
| bio-12-04/topics-4-5-extras-a-c.ts:959 | exposure at delivery (NCERT's wording) | SUPPORTED | Class 11 kebo115 §15.1.3.2 (not in Class 12 Ch 4) | - |
| bio-12-05/topics-4-6.ts:561 | NCERT: ~30,000 genes (features) and 20,000-25,000 (goals) | SUPPORTED | lebo105 §5.11 | note: the same box lists model organisms "E. coli, yeast, roundworm, mouse"; NCERT lists bacteria, yeast, C. elegans, Drosophila, rice and Arabidopsis (no mouse). Not attributed to NCERT, but worth aligning. |
| bio-12-05/topics-4-6.ts:601 | PCR is a modern addition to NCERT's list of steps | SUPPORTED | lebo105 §5.12: PCR not in the step list, but NCERT does mention that PCR increased sensitivity | (optional) `(not one of NCERT's listed steps, though NCERT notes PCR raised the technique's sensitivity)` |
| bio-12-05/topics-4-6.ts:663 | NCERT: approximately 20,000-25,000 | SUPPORTED | lebo105 Goals of HGP (i) | - |
| bio-12-05/topics-1-3.ts:237 | NCERT figure is not 146 bp | SUPPORTED | lebo105 §5.1.3: typical nucleosome 200 bp | - |
| bio-12-05/topics-1-3.ts:246 | about 200 bp | SUPPORTED | same | - |
| bio-12-05/topics-1-3.ts:273 | ~200 bp | SUPPORTED | same | - |
| bio-12-05/topics-1-3.ts:699 | Pol III: tRNA, 5S rRNA, snRNAs | SUPPORTED | lebo105 §5.7 | - |
| bio-12-05/extras-a-g.ts:137 | NCERT-exact product map | SUPPORTED | lebo105 §5.7 | - |
| bio-12-05/extras-a-g.ts:147 | as in NCERT (snRNAs to Pol III) | SUPPORTED | lebo105 §5.7 | - |
| bio-12-05/extras-a-g.ts:219 | trp operon only named; comparison beyond NCERT | SUPPORTED | lebo105 §5.8: lists lac, trp, ara, his, val operons | - |
| bio-12-05/extras-a-g.ts:319 | Chromosome 1 ~2968 genes (NCERT) | SUPPORTED | lebo105 salient features (viii); Y 231 | - |
| bio-12-05/extras-a-g.ts:343 | NCERT lists six goals | SUPPORTED | lebo105 Goals of HGP (i)-(vi) | - |
| bio-12-05/extras-a-g.ts:352 | avg gene 3000 bases; 3164.7 million bp | SUPPORTED | lebo105 salient features (i), (ii) | - |
| bio-12-05/extras-a-g.ts:398 | paternity band matching, Y-STR, match probability beyond NCERT | SUPPORTED | absent from lebo105 §5.12 | - |
| bio-12-05/extras-a-g.ts:665 | ~30,000 genes, older estimate used in NCERT | SUPPORTED | lebo105 salient features (iii) | - |

---

# Group E: Biology 12, chapters 6 to 9

# Report E: NCERT attributions, Biology 12 Ch 6-9 (bio-12-06 .. bio-12-09)

**Source read:** official NCERT PDFs downloaded from ncert.nic.in (lebo103, lebo106, lebo107, lebo108, lebo109, lebo110), every page footed "Reprint 2026-27". This is the current rationalised 13-chapter edition: Ch 3 Reproductive Health, Ch 6 Evolution, Ch 7 Human Health and Disease, Ch 8 Microbes in Human Welfare, Ch 9 Biotechnology: Principles and Processes, Ch 10 Biotechnology and its Applications. Our chapter numbers match NCERT here.
Local text copies are in scratchpad/ncertE/*.plain.txt.
How the files were fetched: ncert.nic.in does not send its Let's Encrypt intermediate certificate (YE1). I fetched it from the issuer's published AIA URL and verified the connection against the system roots plus that intermediate. TLS checking was not turned off.

**Counts (74 lines):** 5 skipped (labels or no claim). Of the 69 checked: SUPPORTED 63, CONTRADICTED 4, NOT FOUND IN NCERT 2, COULD NOT VERIFY 0. One caveat: NCERT Fig 6.9, the plant-evolution sketch, is an image, so I confirmed only its caption, not its contents.

Skipped: bio-12-06/extras-b-d.ts:261 (frequency label), :469 (generic), bio-12-08/extras-a-g.ts:659 (table header), :830 (generic), bio-12-08/topics-3-5.ts:443 ("NCERT" is only an MCQ distractor; the answer, IARI and KVIC, matches NCERT 8.4).

| file:line | claim | verdict | NCERT evidence | proposed fix |
|---|---|---|---|---|
| bio-12-06/topics-1-2.ts:511 | NCERT lists five factors affecting H-W equilibrium | SUPPORTED | Ch6 §6.7: gene flow, drift, mutation, recombination, natural selection | - |
| bio-12-06/extras-b-d.ts:35 | Darwin's finches are an NCERT example of adaptive radiation | SUPPORTED | §6.4: the finches are one of the best examples. Note: NCERT says the varieties evolved on the same island, so using them as an allopatric example is our framing, not NCERT's | optional: none needed for the attribution |
| bio-12-06/extras-b-d.ts:43 | NCERT has no allopatric/sympatric split; its adaptive-radiation examples are finches and Australian marsupials | SUPPORTED | §6.4. "allopatric" and "sympatric" do not occur in the chapter | - |
| bio-12-06/extras-b-d.ts:266 | plant-evolution sequence and dinosaur extinction followed by mammals come from NCERT | SUPPORTED | §6.8: dinosaurs disappeared about 65 mya and then mammals took over. Fig 6.9 is a sketch of plant evolution (image; contents not read as text) | - |
| bio-12-06/extras-b-d.ts:431 | NCERT gives about 2 mya for Australopithecus | SUPPORTED | §6.9: "Two mya, Australopithecines probably lived in East African grasslands". The 3-4 mya figure in NCERT is for unnamed man-like primates. NCERT gives no date for H. habilis (our line does not attribute one to it) | - |
| bio-12-06/extras-b-d.ts:508 | NCERT says Haeckel's embryological support was disproved by von Baer | SUPPORTED | §6.3: support proposed by "Ernst Heckel" (NCERT's spelling), "disapproved" after study by Karl Ernst von Baer, who found embryos never pass through adult stages of other animals | - |
| bio-12-06/extras-b-d.ts:512 | NCERT states a reducing early atmosphere | SUPPORTED | §6.1: reducing atmosphere with CH4, NH3 | - |
| bio-12-06/extras-b-d.ts:532 | NCERT: Darwin's variations small and directional; de Vries' mutations large and random | SUPPORTED | §6.6: mutation is a large, sudden difference; mutations random and directionless, Darwinian variations small and directional | - |
| bio-12-06/topics-3-4-extra-a.ts:57 | NCERT presents Ramapithecus as more man-like; it comes first | SUPPORTED | §6.9: Dryopithecus and Ramapithecus about 15 mya; Ramapithecus more man-like, Dryopithecus more ape-like | - |
| bio-12-06/topics-3-4-extra-a.ts:80 | table dates/brain sizes mostly NCERT's; NCERT gives ~2 mya for Australopithecus | SUPPORTED | NCERT dates: 15 mya, 2 mya, 1.5 mya, 1,00,000-40,000 yr, 75,000-10,000 yr. Brains: 650-800, 900, 1400 cc. NOT in NCERT: H. habilis ~2 mya, Australopithecus 400-500 cc, H. sapiens 1350-1600 cc, erectus "used fire". "Mostly" holds | - |
| bio-12-06/topics-3-4-extra-a.ts:153 | NCERT traditionally credits H. habilis with making and using tools | NOT FOUND | §6.9 never mentions tools for H. habilis. The only tool use in NCERT is Australopithecines that "hunted with stone weapons" | "Which hominin is traditionally credited with making and using tools?" (drop "in NCERT") |
| bio-12-06/topics-3-4-extra-a.ts:155 | Australopithecus was pre-tool; the NCERT tool-maker slot is H. habilis | CONTRADICTED | §6.9: Australopithecines hunted with stone weapons but mainly ate fruit. Nothing on H. habilis tools. (Neanderthal hides and burial: supported. Erectus meat: supported; fire is not in NCERT but is unattributed) | Replace "Australopithecus (a) was bipedal but pre-tool" with "Australopithecus (a) is described in NCERT as hunting with stone weapons, but the 'handy man' tool-maker label belongs to H. habilis". Replace the last sentence with "The 'tool-maker' label belongs to H. habilis in standard accounts; NCERT itself does not mention its tools." Also flag: under NCERT's text alone, (a) is arguably defensible |
| bio-12-06/topics-3-4-extra-a.ts:322 | Ramapithecus taught first in the NCERT sequence | SUPPORTED | §6.9 | - |
| bio-12-06/topics-3-4-extra-a.ts:389 | NCERT: first cellular life ~2000 mya | SUPPORTED | §6.1 and §6.8: about 2000 million years ago | - |
| bio-12-06/topics-3-4-extra-a.ts:392 | NCERT: jawless fish ~350 mya | SUPPORTED | §6.8: jawless fish probably evolved around 350 mya | - |
| bio-12-07/extras-e-h.ts:27 | NCERT reproductive-health chapter names syphilis, gonorrhoea, chlamydia | SUPPORTED | lebo103 §3.4: gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV | - |
| bio-12-07/extras-e-h.ts:480 | NCERT lists belladonna with the hallucinogens | SUPPORTED | §7.5: "Atropa belladona" (NCERT's spelling) and Datura as plants with hallucinogenic properties | - |
| bio-12-07/topic-4-extras-a-d.ts:47 | NCERT groups "all three" (morphine; barbiturates/benzodiazepines; amphetamines) as medicines for depression and insomnia | CONTRADICTED (partial) | §7.5: barbiturates, amphetamines, benzodiazepines and similar drugs are normally medicines for mental illnesses such as depression and insomnia. Morphine is described separately, as a sedative and painkiller for post-surgery patients | "...; NCERT groups barbiturates, amphetamines and benzodiazepines as medicines normally used to help patients cope with mental illnesses such as depression and insomnia, and describes morphine separately as a sedative and painkiller for surgery patients." |
| bio-12-07/topic-4-extras-a-d.ts:51 | NCERT's cluster of reasons includes escape from "stress, frustration, anxiety or depression" | NOT FOUND (partial) | §7.5.1: curiosity, adventure, excitement, experimentation; later use "to escape facing problems"; academic stress; the "cool or progressive" perception promoted by TV, movies, newspapers and internet; unstable family; peer pressure. "Frustration", "anxiety" and "depression" are not in this list | Replace "the desire to escape from stress, frustration, anxiety or depression, often arising from academic or personal pressure" with "the desire to escape facing problems, and stress from pressure to excel in academics" |
| bio-12-07/topic-4-extras-a-d.ts:55 | smoking-related cancer and HIV/hepatitis B from shared needles are NCERT-listed | SUPPORTED | §7.5: smoking linked to cancers of lung, bladder and throat; intravenous users at risk of AIDS and Hepatitis B through shared needles | - |
| bio-12-07/topic-4-extras-a-d.ts:306 | NCERT groups morphine, barbiturates/benzodiazepines and amphetamines as medicines for depression and insomnia | CONTRADICTED (partial) | same as :47 | "...; amphetamines (stimulants); NCERT groups barbiturates, amphetamines and benzodiazepines as medicines for coping with depression and insomnia (morphine separately as a painkiller); abused when misused." |
| bio-12-07/topic-4-extras-a-d.ts:620 | carcinogenesis basics and surgery, radiation, chemo, immunotherapy are in NCERT; TNM and markers are not | SUPPORTED | §7.4: contact inhibition, metastasis, proto-oncogenes; common approaches are surgery, radiation therapy and immunotherapy, plus chemotherapeutic drugs and α-interferon. No staging or markers | - |
| bio-12-08/extras-a-g.ts:30 | six NCERT sections | SUPPORTED | §8.1-8.6 | - |
| bio-12-08/extras-a-g.ts:34 | NCERT names end products but gives no balanced equations | SUPPORTED | Ch8 names lactic acid, ethanol, CO2; no equations | - |
| bio-12-08/extras-a-g.ts:86 | NCERT: Acetobacter aceti produces acetic acid; ethanol oxidation goes beyond NCERT | SUPPORTED | §8.2.3 | - |
| bio-12-08/extras-a-g.ts:169 | penicillin first antibiotic discovered; NCERT does not classify by spectrum | SUPPORTED | §8.2.2. "spectrum" appears only for baculoviruses | - |
| bio-12-08/extras-a-g.ts:197 | Fleming, P. notatum, Chain and Florey, Nobel 1945 | SUPPORTED | §8.2.2. NCERT says "Nobel Prize in 1945" without naming the category | - |
| bio-12-08/extras-a-g.ts:271 | NCERT BOD definition ("if all oxidised"); secondary treatment lowers BOD; the 5-day test is not NCERT's | SUPPORTED | §8.3: oxygen consumed if all organic matter in one litre were oxidised by bacteria. The BOD test is described only as measuring the rate of oxygen uptake; no 5 days or 20 °C | - |
| bio-12-08/extras-a-g.ts:350 | same BOD definition | SUPPORTED | §8.3 | - |
| bio-12-08/extras-a-g.ts:383 | NCERT: biogas predominantly methane; methanogens; rumen; no equations | SUPPORTED | §8.4 | - |
| bio-12-08/extras-a-g.ts:400 | NCERT calls methanogens bacteria | SUPPORTED | §8.4 | - |
| bio-12-08/extras-a-g.ts:423 | NCERT says "predominantly methane" | SUPPORTED | §8.4 (exact) | - |
| bio-12-08/extras-a-g.ts:494 | NCERT: rumen methanogens help break down cellulose and aid cattle nutrition | SUPPORTED | §8.4 | - |
| bio-12-08/extras-a-g.ts:511 | no numeric temperature or pH ranges in NCERT | SUPPORTED | "The chapter" here means our chapter (topics-3-5.ts has the alkaline gut and moisture text). NCERT Ch8 gives no ranges. The alkaline-gut point is in NCERT Ch10, not Ch8; "moisture and temperature" is not in NCERT at all, but this sentence does not attribute it | - |
| bio-12-08/extras-a-g.ts:542 | NCERT gives none of the ranges | SUPPORTED | Ch8 | - |
| bio-12-08/extras-a-g.ts:546 | Bt activated by alkaline gut (NCERT Ch10); Trichoderma free-living root fungi; mycoparasitism beyond NCERT; Rhizobium; Glomus | SUPPORTED | Ch10 §10.1; Ch8 §8.5, §8.6 | - |
| bio-12-08/extras-a-g.ts:629 | BOD definition | SUPPORTED | §8.3 | - |
| bio-12-08/extras-a-g.ts:688 | NCERT calls Monascus a yeast; Mucor javanicus not cited in NCERT | SUPPORTED | §8.2.3 ("the yeast Monascus purpureus"). Mucor does not appear in Class 12 Ch3/6-10. Class 11 not checked; it names the genus Mucor, not this species | - |
| bio-12-08/extras-a-g.ts:703 | NCERT's names: T. polysporum, C. butylicum, P. sharmanii | SUPPORTED | §8.1, §8.2.3 | - |
| bio-12-08/extras-a-g.ts:845 | T. polysporum is NCERT's attribution for cyclosporin A | SUPPORTED | §8.2.3 | - |
| bio-12-08/extras-a-g.ts:857 | "the crystal detail goes beyond NCERT" | CONTRADICTED | Ch10 §10.1: B. thuringiensis forms protein crystals; the toxin exists as inactive protoxins; the alkaline gut pH solubilises the crystals. (Ch8 itself only says the toxin is released in the larval gut) | "(the crystal and protoxin detail is in NCERT Chapter 10, not in this chapter)", or delete the parenthesis |
| bio-12-08/extras-a-g.ts:865 | fermenter temperatures go beyond NCERT | SUPPORTED | NCERT names fermentors; no temperatures | - |
| bio-12-08/extras-a-g.ts:869 | NCERT lists streptokinase with enzymes; plasminogen detail beyond NCERT | SUPPORTED | §8.2.3: streptokinase sits in the enzymes paragraph, right after lipases, pectinases and proteases; NCERT does not label it an enzyme outright; no plasminogen | - |
| bio-12-08/extras-a-g.ts:873 | Bt reliability/residue goes beyond NCERT | SUPPORTED | Ch8 does not make these claims. Baculovirus narrow spectrum matches §8.5 | - |
| bio-12-08/extras-a-g.ts:881 | T. polysporum NCERT's attribution; BOD definition | SUPPORTED | §8.2.3, §8.3 | - |
| bio-12-08/topics-0-2.ts:25 | six NCERT sections in this order | SUPPORTED | §8.1-8.6 in that order | - |
| bio-12-08/topics-0-2.ts:88 | Lactobacillus is the LAB NCERT names for curd; B12; stomach | SUPPORTED | §8.1 | - |
| bio-12-08/topics-0-2.ts:333 | penicillin first antibiotic discovered (NCERT) | SUPPORTED | §8.2.2 | - |
| bio-12-08/topics-0-2.ts:360 | T. polysporum is NCERT's name | SUPPORTED | §8.2.3 | - |
| bio-12-08/topics-0-2.ts:361 | NCERT calls Monascus a yeast | SUPPORTED | §8.2.3 | - |
| bio-12-08/topics-0-2.ts:366 | names as NCERT prints them | SUPPORTED | §8.1-8.2 | - |
| bio-12-08/topics-0-2.ts:375 | NCERT calls Monascus a yeast | SUPPORTED | §8.2.3 | - |
| bio-12-08/topics-0-2.ts:417 | penicillin first (NCERT); Fleming; P. notatum; plague, whooping cough, diphtheria, leprosy | SUPPORTED | §8.2.2 | - |
| bio-12-08/topics-0-2.ts:547 | as above, plus Chain and Florey and Nobel 1945 | SUPPORTED | §8.2.2 | - |
| bio-12-08/topics-3-5.ts:302 | NCERT calls methanogens bacteria; they make methane with CO2 and H2 | SUPPORTED | §8.4 | - |
| bio-12-08/topics-3-5.ts:327 | NCERT calls them bacteria | SUPPORTED | §8.4 | - |
| bio-12-08/topics-3-5.ts:328 | NCERT: methane, CO2, H2 | SUPPORTED | §8.4 (§8.3 lists digester gases as methane, H2S, CO2) | - |
| bio-12-08/topics-3-5.ts:393 | NCERT: bacteria; CO2 and H2 | SUPPORTED | §8.4 | - |
| bio-12-08/topics-3-5.ts:524 | same | SUPPORTED | §8.4 | - |
| bio-12-08/topics-3-5.ts:575 | Rhizobium in legume nodules is NCERT's example | SUPPORTED | §8.6 | - |
| bio-12-09/topic-4-extras-a-b.ts:414 | NCERT calls the chromogenic test and insertional inactivation selectable markers | SUPPORTED | §9.3.2: selection by antibiotic inactivation, then "alternative selectable markers" based on a chromogenic substrate (β-galactosidase insertional inactivation) | - |
| bio-12-09/topics-1-3.ts:68 | NCERT gives 1972 for Cohen and Boyer | SUPPORTED | §9.1 | - |
| bio-12-09/topics-1-3.ts:199 | NCERT's two core techniques (genetic engineering and bioprocess engineering) | SUPPORTED | §9.1 | - |
| bio-12-09/topics-1-3.ts:317 | first one discovered (NCERT): Hind II | SUPPORTED | §9.2.1: the first restriction endonuclease, Hind II, isolated and characterised five years later. NCERT says "isolated and characterised", not "discovered" | - |
| bio-12-09/topics-1-3.ts:412 | NCERT calls antibiotic insertional inactivation a selectable marker | SUPPORTED | §9.3.2 (implicit: the chromogenic method is called the "alternative" selectable marker) | - |
| bio-12-09/topics-1-3.ts:517 | NCERT calls Hind II the first restriction endonuclease | SUPPORTED | §9.2.1 | - |
| bio-12-09/topics-1-3.ts:769 | agarose is the matrix NCERT names | SUPPORTED | §9.3.3: agarose is the most commonly used matrix | - |
| bio-12-09/extras-c-d.ts:389 | NCERT calls Hind II simply the first restriction endonuclease | SUPPORTED | §9.2.1. Smith, 1970 and the 1978 Nobel are not in NCERT (not attributed) | - |
| bio-12-09/extras-c-d.ts:433 | NCERT calls both selectable markers | SUPPORTED | §9.3.2. NCERT gives heat shock at 42 °C on ice (unattributed here) | - |

---

# Group F: Biology 12, chapters 10 to 13

I checked list F (Biology 12, our chapters 10–13) against NCERT. I did not write report-F.md because the harness blocks subagents from writing report files, so the full table is at the end of this message. No repo file was edited.

**Sources.** I read the current NCERT text, the 2026-27 reprint, from ncert.nic.in: lebo110–113. These are NCERT Ch 10–13 and match our bio-12-10..13 one to one. I also read the older 2021-22 edition from the Wayback Machine (old Ch 12–15). I rendered Fig 14.5 from the old edition as an image to check it. The extracted PDFs and text are in /private/tmp/claude-501/-Users-raasikhnaveed--claude-spares-spare-WyHVJX/acc2ce4c-c76d-4145-84f8-c0971c402b4e/scratchpad/ncertF/.

**Edition caveat.** The 2026-27 book drops whole sections we cite:
- **Ch 11:** old 13.1, "Organism and its Environment" (abiotic factors, regulators and conformers, the 99% figure, shrews, salinity, light and UV).
- **Ch 12:** old 14.6 Succession, 14.7 Nutrient Cycling and 14.8 Ecosystem Services (the list and the Costanza figures). Only one summary sentence remains.

Claims on these topics are correct against the 2021-22 text but are not in the current book. I marked them "SUPPORTED (old ed. only)".

**Counts.** There are 101 lines: 8 were skipped as headers or generic labels, and 93 are checkable claims.
- SUPPORTED: 84 (22 of them only in the older edition)
- CONTRADICTED: 3
- NOT FOUND IN NCERT: 6
- COULD NOT VERIFY: 0

## CONTRADICTED

1. **bio-12-12/topics-4-5-extras-a-b.ts:132** — We say NCERT's text gives a "shorter order" for hydrarch succession and that its figure gives our stages. Both parts are wrong.
   - Old 14.6.1 text: phytoplankton → rooted-submerged plants → rooted-floating angiosperms → free-floating plants → reed-swamp → marsh-meadow → scrub → trees.
   - Fig 14.5 shows the same stages and names no genera.
   - Fix: "(NCERT's text gives phytoplankton → rooted submerged plants → rooted floating angiosperms → free-floating plants → reed-swamp → marsh-meadow → scrub → trees, and its figure shows the same stages; the example genera are ours, not NCERT's.)"

2. **bio-12-11/topic-4-extras-a-c.ts:280** — We say all five added topics go beyond NCERT. The core of topic (C) is in NCERT 11.1.4(ii): Gause's principle, Connell's Balanus/Chthamalus case, and resource partitioning (MacArthur's warblers).
   - Fix: "This section adds five topics that go beyond the main chapter text (most also go beyond NCERT; the core of (C), Gause's principle, the barnacle case and resource partitioning, is in NCERT)…"

3. **bio-12-13/extras-e-f.ts:285** — We say the passenger pigeon is "not among NCERT's named recent extinctions". The five-item list is right, but NCERT 13.1.4(ii) does name the passenger pigeon, with Steller's sea cow, as an extinction caused by over-exploitation. As written, a student could reject a correct option.
   - Fix: "…The passenger pigeon is not in NCERT's list of recent extinctions (dodo, quagga, thylacine, Steller's sea cow, three tiger subspecies), but NCERT does name it, with Steller's sea cow, as an extinction caused by over-exploitation."

## NOT FOUND IN NCERT

1. **bio-12-10/topics-1-3.ts:463** — The 30 and 12 figures are NCERT's (10.2). "Humulin" does not appear in NCERT Class 12 at all; I checked all 13 current chapters and the old edition.
   - Fix: "(For scale, NCERT's figures: around 30 recombinant therapeutics are approved for human use worldwide, of which about 12 are marketed in India; the numbers have grown since. Humulin, the brand name of this insulin, is the best-known example.)"

2. **bio-12-11/topic-4-extras-a-c.ts:83** — The heading calls the list at :87 "canonical NCERT examples". NCERT's interactions section has no Glomus, no Yucca–Pronuba moth, no tapeworm, and no amensalism example at all (so not Penicillium). Glomus and Penicillium do appear in other NCERT chapters, but not as these examples.
   - Fix: "Diagnostic features & examples (NCERT's, plus a few extra: Glomus, Yucca–Pronuba, tapeworm, Penicillium)"

3. **bio-12-11/topic-4-extras-a-c.ts:87** — The Galápagos goats and Abingdon tortoise case sits inside "NCERT adds… totally unrelated species can also compete". NCERT's only example of unrelated species competing is flamingos and fishes. It gives the tortoise case separately, as evidence of competitive exclusion in nature. The rest of the line is supported: interference competition, and Balanus/Chthamalus in Scotland.
   - Fix: "…(flamingos and resident fishes compete for zooplankton in some shallow South American lakes), and resources need not be limiting… NCERT separately cites the Galápagos case, where introduced goats drove out the Abingdon tortoise by out-browsing it, as evidence of competitive exclusion in nature."

4. **bio-12-12/topics-1-3.ts:236** — NCERT 12.2 names plant species, "a variety of environmental factors", nutrient availability and photosynthetic capacity. It does not name temperature, water or light.
   - Fix: "NCERT names both nutrient availability and the plants' photosynthetic capacity, along with the plant species present and a variety of environmental factors."

5. **bio-12-12/topics-4-5-extras-a-b.ts:337** — We say NCERT names forests as "the major source of ecological services". NCERT only uses healthy forests as its example (old 14.8, and the current summary). "Major source" is not there.
   - Fix: "…which is why NCERT uses forests as its example of an ecosystem that provides these services."

6. **bio-12-12/topics-4-5-extras-a-b.ts:515** — Same problem as :337. Also, no NCERT fill-in-the-blank exercise in either edition asks this, so "a common one-mark fill-in" has no NCERT basis.
   - Fix: "<b>Forests are NCERT's example</b> of an ecosystem providing these services (purifying air and water, and so on)."

**One near-miss, left as SUPPORTED.** bio-12-13/extras-e-f.ts:290 says "NCERT gives −196 °C". Ch 13 only says "cryopreservation", with no temperature. The −196 °C figure does appear in NCERT Class 12 Ch 1, for storing pollen in liquid nitrogen. The claim is correct but cites a different chapter.

## Full table

Skipped as generic or headers: 11/extras-d-f:324; 11/topic-4-extras-a-c:302; 12/extras-c-f:319, :495; 12/topics-4-5-extras-a-b:444; 13/extras-e-f:183, :326; 13/topics-1-3:602.

Section numbers are the current edition's unless marked "old" (2021-22).

| file:line | claim | verdict | NCERT evidence | fix |
|---|---|---|---|---|
| 10/extras-b-f:35 | Rosie 1997, first transgenic cow, human α-lactalbumin | SUPPORTED | 10.3(iii); 2.4 g/L; >95% of transgenic animals are mice | – |
| 10/extras-b-f:62, :73, :116 | NCERT does not name Rosie's method | SUPPORTED | 10.3(iii) names no method | – |
| 10/extras-b-f:389 | neem revocation dates not in NCERT | SUPPORTED | 10.4 names turmeric and neem only, no dates | – |
| 10/extras-b-f:489 | RNAi gets less space than Bt | SUPPORTED (marginal) | 10.1: Bt passage slightly longer | – |
| 10/extras-b-f:508, :627; 10/topics-4-6-extra-a:816 | NCERT writes "Approval" Committee | SUPPORTED | 10.4 | – |
| 10/extras-b-f:603, :623, :693; 10/topics-1-3:385, :530, :615 | 1983 Eli Lilly: A and B chains made separately in E. coli, joined by disulphide bonds, no proinsulin step | SUPPORTED | 10.2.1 | – |
| 10/extras-b-f:607 | Bt cotton is NCERT's example | SUPPORTED | 10.1 (NCERT says nothing about commercial cultivation in India; we don't attribute that) | – |
| 10/topics-1-3:463 | 30 / 12 figures; Humulin as flagship | NOT FOUND (Humulin part) | 10.2 has 30 / 12; no "Humulin" anywhere | see above |
| 10/topics-1-3:647 | 30 / 12 figures | SUPPORTED | 10.2 | – |
| 10/topics-1-3:684 | marrow-cell gene into early embryo would be a permanent cure | SUPPORTED | 10.2.2 | – |
| 10/topics-1-3:699, :701, :868, :989 | ADA deficiency is caused by gene deletion | SUPPORTED | 10.2.2 | – |
| 10/topics-4-6-extra-a:345 | five uses of transgenic animals | SUPPORTED | 10.3 (i)–(v) | – |
| 10/topics-4-6-extra-a:661 | piracy "fronts" are not NCERT's terms | SUPPORTED | 10.4 | – |
| 11/extras-d-f:271 | fig–wasp is NCERT's mutualism | SUPPORTED | 11.1.4(v) ("obligate" is our word, not attributed) | – |
| 11/extras-d-f:331 | low-light forest herbs; UV harmful | SUPPORTED (old ed. only) | old 13.1.1 | – |
| 11/extras-d-f:395 | salinity <5 / >100 ppt | SUPPORTED (old ed. only) | old 13.1.1 | – |
| 11/extras-d-f:419 | shrews and hummingbirds | SUPPORTED (old ed. only) | old 13.1.2 | – |
| 11/topic-4-extras-a-c:83 | "canonical NCERT examples" | NOT FOUND (in part) | Glomus, Yucca–Pronuba, tapeworm, Penicillium not in 11.1.4 | see above |
| 11/topic-4-extras-a-c:87 | goats/tortoise as an "unrelated species" example | NOT FOUND as framed | 11.1.4(ii) | see above |
| 11/topic-4-extras-a-c:97 | Pisaster removal: >10 species lost | SUPPORTED | 11.1.4(i) | – |
| 11/topic-4-extras-a-c:127 | clownfish–anemone is commensalism | SUPPORTED | 11.1.4(iv) | – |
| 11/topic-4-extras-a-c:164 | mycorrhiza and fig–wasp are NCERT mutualisms | SUPPORTED | 11.1.4(v) | – |
| 11/topic-4-extras-a-c:218, :504 | Gause stated for closely related species, only where resources are limiting | SUPPORTED | 11.1.4(ii) | – |
| 11/topic-4-extras-a-c:280 | all five topics beyond NCERT | CONTRADICTED (topic C) | 11.1.4(ii) | see above |
| 11/topics-1-3:368, :373, :406, :513, :569 | regulators: all birds and mammals plus very few others; 99% of animals and nearly all plants conform | SUPPORTED (old ed. only) | old 13.1.2 | – |
| 12/topics-1-3:236 | temperature / water / light named as factors | NOT FOUND (that part) | 12.2 | see above |
| 12/topics-1-3:755 | energy pyramid never inverts | SUPPORTED | 12.5 | – |
| 12/extras-c-f:238, :262, :292; 12/topics-4-5:375, :397, :426, :449, :493, :513, :541 | Costanza: $33T, ~2× GNP of $18T; soil formation ~50%; recreation and nutrient cycling <10% each; climate and habitat ~6% each | SUPPORTED (old ed. only) | old 14.8 | – |
| 12/extras-c-f:271 | carbon storage and soils are in NCERT's services list | SUPPORTED (old ed. only) | old 14.8 | – |
| 12/extras-c-f:386 | NPP = GPP − R | SUPPORTED | 12.2 | – |
| 12/extras-c-f:501 | 170 billion tons, Ch 12 | SUPPORTED | 12.2 | – |
| 12/extras-c-f:505 | sulphur and phosphorus are sedimentary cycles | SUPPORTED (old ed. only) | old 14.7 (current summary keeps only phosphorus) | – |
| 12/topics-4-5:56 | "perfect/imperfect" is not NCERT's wording | SUPPORTED | – | – |
| 12/topics-4-5:132 | "shorter order" in NCERT text; figure gives our stages | CONTRADICTED | old 14.6.1 and Fig 14.5 | see above |
| 12/topics-4-5:140 | carbon and phosphorus cycles; air 1%, oceans 71% | SUPPORTED (old ed. only) | old 14.7.1–14.7.2 | – |
| 12/topics-4-5:337, :515 | forests are "the major source" | NOT FOUND | old 14.8 / current summary | see above |
| 12/topics-4-5:365 | 9-item services list | SUPPORTED (old ed. only) | old 14.8 | – |
| 12/topics-4-5:393 | the list has no provisioning item | SUPPORTED | old 14.8 | – |
| 12/topics-4-5:588 | C:N bands not in NCERT | SUPPORTED | – | – |
| 13/extras-a-d:270; 13/topics-1-3:46, :80, :260 | rectangular hyperbola; "only up to a limit" | SUPPORTED | 13.1.2(ii) | – |
| 13/extras-a-d:305, :309, :375 | endemic examples not NCERT's; NCERT names 4 invasives; no Parthenium route | SUPPORTED | 13.1.4(iii) | – |
| 13/extras-e-f:239, :387 | more than 70% of species are animals | SUPPORTED | 13.1.1 | – |
| 13/extras-e-f:285 | passenger pigeon not named by NCERT | CONTRADICTED (misleading) | 13.1.4(ii) | see above |
| 13/extras-e-f:290 | NCERT gives −196 °C | SUPPORTED (Ch 1, not Ch 13) | Ch 1, pollen in liquid nitrogen | – |
| 13/extras-e-f:295, :320 | Evil Quartet | SUPPORTED | 13.1.4 | – |
| 13/extras-e-f:299, :300, :386; 13/topics-1-3:359, :537, :557 | 34 hotspots | SUPPORTED | 13.2.2 (NCERT itself says 34) | – |
| 13/extras-e-f:332 | 338 / 359 / 87 | SUPPORTED | 13.1.4 | – |
| 13/extras-e-f:368; 13/topics-1-3:128 | Amazon ~20% of oxygen | SUPPORTED | 13.2.1 | – |
| 13/topics-1-3:363 | three Indian hotspots | SUPPORTED | 13.2.2 | – |
| 13/topics-1-3:390 | 14 biosphere reserves; sacred groves "Madhya Pradesh" | SUPPORTED | 13.2.2 | – |
| 13/topics-1-3:614, :677, :804 | 22% of species recorded (May's 7 million) | SUPPORTED | 13.1.1 (the 1.5 ÷ 7 = 21.4% rounding is our inference; NCERT just says 22%) | – |
