/**
 * KEY POINTS for Biology Class 12, Chapter 13 (Biodiversity and Conservation).
 *
 * Written for test mode, in the form of the Biology 11 Chapter 14 and 13 files:
 * every point is a question to answer in your head, then the answer and at most
 * one more line. Four kinds, each a section on the screen: Remember (two a
 * topic), Don't mix up, Common mistakes and Exam shortcuts (one each, where the
 * topic has them); an Additional topic has two points for its central results,
 * except the last (What NEET Actually Asks), which has one Remember and one
 * Common mistakes. Memory lines are a fifth, short section of their own, read
 * rather than tested.
 *
 * `topic`: Topics 01 to 03 are 0 to 2; Additional topics A to E are 3 to 7; F
 * (the book's What NEET Actually Asks) is 8. No point refers to another topic by
 * number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it stands;
 * the page (the bottom folio) is above each point. Topics 01 to 03 follow the
 * Chapter 13 form (Remember from the definitions and Cheat sheet, Don't mix up
 * from the tables and frameworks, Common mistakes from the Common student
 * pitfalls, Exam shortcuts from the Pro-Tip). `say`: the cheat sheet's memory
 * aids, word for word, in the Chemistry form: no quotation marks and no markup,
 * the label turned into the arrow form. Each of Topics 01 to 03 prints one aid
 * (recent extinctions and place; ex situ methods; animal dominance), so the
 * chapter has three lines. The Additional topics have none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - the species-area curve: S = CA^z is a power law, straight on log-log axes;
 *   "rectangular hyperbola", "saturating curve", "plateau" and "the curve flattens
 *   at very large scales" are not used (the points say richness rises with area,
 *   more slowly as the area grows, and that the continental slope is steeper, not
 *   flatter); C is given as the species count at unit area on the fitted line, and
 *   "dimensionless" is said of z only; a fitted line is not extended far beyond
 *   the areas it was fitted to;
 * - the Evil Quartet: habitat loss and fragmentation is said to be generally
 *   ranked the most important cause; the order of the other three (and "always",
 *   "worst") is not given as a law, HOAC is only the book's memory order; hunting
 *   is a form of over-exploitation, not a fifth cause;
 * - the Amazon's "about 20 per cent of atmospheric oxygen" is not used (a popular
 *   overstatement); the broadly utilitarian argument is given as ecosystem
 *   services such as pollination and climate regulation;
 * - amphibians are given as about 32 per cent threatened, "the highest among the
 *   groups the book lists", not "among the major groups"; "more than 15,500" and
 *   the 2004 baseline are the book's dated figures and no newer figure is added;
 * - the hotspot number is given as 34 in the NCERT-based key and 36 in current
 *   Conservation International lists, with the three Indian hotspots as the book
 *   names them; the count of biosphere reserves, the Hailey park date and the
 *   Green Books attribution are not used; cryopreservation is "an advanced ex situ
 *   method", not "the most advanced";
 * - the in situ and ex situ lists are given with the botanical garden and the
 *   safari park in ex situ, and "only off-site storage" is not repeated;
 * - 1.5 million of about 7 million is about 21 per cent (the book's 22 per cent
 *   is NCERT's figure and is given as "about 22 per cent" with the arithmetic
 *   shown); "three-quarters undiscovered" is not used; the animals share is "about
 *   70 per cent" (the two figures print exactly 70), so insects are about 49 per
 *   cent of all species and 70 per cent of animals, the other animals about 21
 *   per cent, plants with algae and fungi about 22 per cent and other groups about
 *   8 per cent; fungal species outnumber all vertebrate species combined, but
 *   insects stay the largest group overall;
 * - the stability section is "two strands plus a link" in the book; the points say
 *   Tilman's two results and the three conditions of a stable community, and
 *   "always has something doing well" is not used;
 * - "exotic species reduce biodiversity" is said of invasive exotic species;
 *   endemic is judged against a stated region; "endemics are the highest priority"
 *   is not used (priority also depends on threat);
 * - Simpson: the 0.90 against 0.17 of the worked example are values of Simpson's
 *   index of diversity D = 1 minus the sum of p squared, not of the dominance sum
 *   itself; beta diversity is gamma over mean alpha, and "beta of 3.0 between two
 *   habitats" is not used (two habitats give a value between 1 and 2); the
 *   Shannon index uses the natural logarithm and its "1.5 to 3.5" is a typical
 *   range, not a limit;
 * - IUCN: Extinct in the Wild is given between Extinct and Critically
 *   Endangered; "threatened" means CR, EN and VU of the assessed species; the
 *   thresholds are the printed 80, 50 and 30 per cent declines over 10 years or
 *   three generations (whichever is longer) and fewer than 50 mature individuals
 *   for CR; a species is Extinct only after exhaustive surveys;
 * - the rate: about 1 species per million species per year in the background and
 *   100 to 1000 times that now; the 50 ha fragment of the practice set (a local
 *   loss against a global background rate) is not used;
 * - capture-recapture: Lincoln-Petersen, population = M times the size of the
 *   second sample over R (the book calls the second sample N and the population
 *   N total; the points say "second sample"); 60 x 80 / 16 = 300 and 80 x 60 /
 *   12 = 400; an estimate resting on one or a few marked recaptures is rough, and
 *   "at least 5 to 10" is not given as a rule;
 * - the core zone of a biosphere reserve is strictly protected, with only non-destructive
 *   research and monitoring, not "no human activity"; the Earth Summit opened the
 *   Convention on Biological Diversity for signature;
 * - What NEET Actually Asks: the shares are the book's estimate from past papers
 *   and no percentages, years or "every year" claims are repeated; "all answers
 *   checked against NCERT" and "pairs that never change" are not used; the
 *   current Class 12 text's own count of hotspots is not claimed.
 *
 * Markup is the chapter's own: <i> for variables (S, C, A, z, M, R, H', D) and
 * for scientific names, <sub> and <sup>, <frac> for a fraction, no em dash. A
 * value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Biodiversity Patterns & Loss ──
  // pp. 715–717, 720–721
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the species–area relationship, and what do its two slope ranges say?',
    a: 'Within a region, species richness rises with the area sampled, and more slowly as the area grows: <i>S</i> = <i>C</i><i>A</i><sup><i>z</i></sup>, where <i>S</i> is the richness, <i>A</i> the area, <i>C</i> a fitted constant and <i>z</i> the slope. Taking logarithms gives log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>, a straight line of slope <i>z</i> on log–log axes, with log <i>C</i> as its intercept. For small areas within a region <i>z</i> is about 0.1–0.2, and for very large areas such as whole continents about 0.6–1.2. With log <i>S</i> = 0.25 log <i>A</i> + 1.40 and <i>A</i> = 100 ha, log <i>S</i> = 0.25 × 2 + 1.40 = 1.90, so <i>S</i> = 10<sup>1.90</sup> ≈ 79 species',
    why: 'The steeper slope belongs to the larger scale, because bigger areas take in more distinct species pools.',
    say: null,
  },
  // pp. 716–718
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the four causes of biodiversity loss (the Evil Quartet), and which is generally ranked first?',
    a: 'Habitat loss and fragmentation (generally ranked the most important cause, since it removes the home of whole communities at once), over-exploitation (harvesting faster than a species can reproduce, as with Steller’s sea cow and the passenger pigeon), alien species invasions (the Nile perch in Lake Victoria and the cichlids; water hyacinth <i>Eichhornia</i>, <i>Parthenium</i> and <i>Lantana</i>; the African catfish <i>Clarias gariepinus</i>) and co-extinctions (a host fish takes its specific parasites with it, a plant loses its only pollinator). The memory order is HOAC, Habitat, Over-exploitation, Alien, Co-extinction',
    why: 'Hunting is a form of over-exploitation, so it is not a separate cause.',
    say: null,
  },
  // pp. 714–715
  {
    topic: 0,
    kind: 'mixup',
    q: 'Genetic, species or ecological diversity: how do you tell which one a question describes?',
    a: 'Genetic diversity is variation within one species (the Alphonso, Dasheri and Langra mangoes are all <i>Mangifera indica</i>; <i>Rauvolfia vomitoria</i> making different amounts of reserpine across its range). Species diversity is the variety between species in a place (the mango, teak, sal and leopards of one forest). Ecological diversity is the variety of habitats and ecosystems (a mangrove, a desert and an alpine meadow)',
    why: 'Check the species name first: variation inside one named species is genetic, a count of different species is species diversity.',
    say: null,
  },
  // pp. 716, 718, 720–721
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is the present loss of species natural, and how big is it?',
    a: 'No. The five earlier mass extinctions were natural; the present, sixth episode is caused by humans and runs about 100–1000 times the natural background rate. The book gives 784 species extinct in the last 500 years: 338 vertebrates + 359 invertebrates + 87 plants = 784. Its recent examples are the Dodo (Mauritius), the Quagga (Africa), the Thylacine (Australia), Steller’s sea cow (Russia) and three tiger subspecies (Bali, Javan, Caspian). About 32% of amphibians are threatened, the highest of the groups the book lists (birds about 12%, mammals about 23%, gymnosperms about 31%)',
    why: 'The cause and the rate are the whole point of comparing the sixth extinction with the five before it.',
    say: 'recent extinctions and place → Did Quaggas Take Steller’s Tigers? → Dodo(Mauritius), Quagga(Africa), Thylacine(Australia), Steller’s sea cow(Russia), Tiger subspecies(Bali/Javan/Caspian).',
  },
  // p. 721
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you name the cause of loss in a question in a few seconds?',
    a: 'Look at the verb. An introduced species means alien invasion; hunted or harvested means over-exploitation; cleared, cut or fragmented means habitat loss; a partner died first means co-extinction. The same trick separates the levels: variation inside one named species is genetic diversity',
    why: 'The verb in the question usually names the cause, so read it before the options.',
    say: null,
  },

  // ── Topic 02 · Biodiversity Conservation ──
  // pp. 722–725, 727
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the difference between in situ and ex situ conservation, with examples of each?',
    a: 'In situ conservation protects species in their natural habitat and conserves the whole ecosystem, so evolution and natural selection keep running: biodiversity hotspots, biosphere reserves, national parks, wildlife sanctuaries, sacred groves and Ramsar wetlands. Ex situ conservation protects components of biodiversity outside the habitat: zoological parks, botanical gardens, seed banks and gene banks, tissue culture, cryopreservation (germplasm at about −196 °C in liquid nitrogen, an advanced method) and in vitro fertilisation. A biosphere reserve has a core zone (strictly protected; only non-destructive research and monitoring), a buffer zone and a transition zone. In situ is the primary strategy, and ex situ is the safety net that aims at reintroduction',
    why: 'Ask one question: is the organism still in its natural home? Yes means in situ, moved or stored means ex situ.',
    say: 'ex situ methods → Zoos Bring Genes Safely To Cold storage: Zoos, Botanical gardens, Gene banks, Seed banks, Tissue culture, Cryopreservation.',
  },
  // pp. 722–723, 727
  {
    topic: 1,
    kind: 'remember',
    q: 'What makes a region a biodiversity hotspot, and which hotspots lie in India?',
    a: 'Both conditions are needed: high endemism (at least 1,500 species of endemic vascular plants) and high threat (at least 70% of the original vegetation lost, which is the same as 30% or less remaining). The idea is due to Norman Myers. The number is 34 in the NCERT-based key and 36 in current Conservation International lists, so match the source the question cites. Three hotspots extend into India: the Western Ghats–Sri Lanka, the Himalaya and Indo-Burma. Focusing money on hotspots gives a large cut in extinctions for a small area',
    why: 'A region rich in species but not under threat does not qualify: the threat is half of the definition.',
    say: null,
  },
  // pp. 724, 726
  {
    topic: 1,
    kind: 'mixup',
    q: 'Ramsar, the Earth Summit and Johannesburg: which is which?',
    a: 'The Ramsar Convention (1971) is about wetlands. At the Earth Summit at Rio de Janeiro (1992) the Convention on Biological Diversity was opened for signature. The World Summit on Sustainable Development at Johannesburg (2002) saw 190 countries pledge to reduce the rate of biodiversity loss by 2010. Other dates the book locks: Wildlife (Protection) Act 1972, Project Tiger 1973, Project Elephant 1992',
    why: 'Wetlands go with Ramsar, the convention with Rio, and the 2010 pledge with Johannesburg.',
    say: null,
  },
  // pp. 724, 726
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is a wildlife sanctuary, a hotspot or a sacred grove ex situ?',
    a: 'No. Anything that protects organisms in their own habitat is in situ: national parks, sanctuaries, biosphere reserves, sacred groves and hotspots. Zoos, botanical gardens, seed banks and cryopreservation are ex situ. Nor is ex situ the end goal: captive populations are meant to go back to the wild, and small captive groups can suffer inbreeding and lose survival behaviours, which is why ex situ complements in situ',
    why: 'Sounding protective is not the test: where the organism lives is.',
    say: null,
  },
  // p. 727
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you settle an "in situ or ex situ?" option in seconds?',
    a: 'Ask whether the organism is still in its natural home. If yes, it is in situ (sanctuary, park, reserve, grove, hotspot). If it has been moved or stored (seed bank, zoo, garden, cryopreserved gametes), it is ex situ. A "which is not ex situ" item has one on-site answer among three off-site ones',
    why: 'This one test settles almost every distractor of the in situ and ex situ kind.',
    say: null,
  },

  // ── Topic 03 · The Magnitude & Value of Biodiversity ──
  // pp. 728–729, 733
  {
    topic: 2,
    kind: 'remember',
    q: 'How many species are known and estimated, and what does the book give for India?',
    a: 'About 1.5 million species are recorded, against an estimated total of about 7 million (Robert May), so about 22% by the book’s figure (1.5 ÷ 7 is about 21%) have been described. India has 2.4% of the world’s land area and about 8.1% of its recorded species, which makes it a megadiversity nation: about 45,000 recorded plant species and about twice as many animal species (about 90,000)',
    why: 'Read 8.1% on 2.4% as a high share on a small area, and keep May with the 7 million.',
    say: 'animal dominance → about 7 of 10 animals are insects, and about 7 of 10 species are animals.',
  },
  // pp. 729–732
  {
    topic: 2,
    kind: 'remember',
    q: 'What did Tilman find, and what makes a community stable?',
    a: 'In David Tilman’s long-term plots, plots with more species showed less year-to-year variation in total biomass and were more productive. Different species respond differently to a bad year, so their good and bad years partly cancel. A community is stable if it does not vary much in productivity from year to year, is resistant or resilient against disturbance, and is resistant to alien invasions. A monoculture is the low-diversity case: it can be productive in a good year but is fragile',
    why: 'Both findings come together: steadier and more productive.',
    say: null,
  },
  // pp. 728–730, 733
  {
    topic: 2,
    kind: 'mixup',
    q: 'Insects, fungi and vertebrates: which group is largest, and how do the shares chain?',
    a: 'Animals are about 70% of recorded species, and insects are about 70% of animals, so insects are about 49% of all species (0.70 × 0.70 = 0.49). The pie of Figure 13.5 reads insects about 49%, other animals about 21% (49 + 21 = 70), plants with algae and fungi about 22% and other groups about 8%, which add to 100%. Fungal species outnumber all vertebrate species combined, but insects remain the largest group overall',
    why: 'The 70% for insects is a share of animals only, not of all species.',
    say: null,
  },
  // p. 733
  {
    topic: 2,
    kind: 'mistake',
    q: 'Which wrong answers come up in this topic?',
    a: 'Saying fungi have the most species: they outnumber vertebrates, but insects top the whole list. Crediting the wrong scientist: Robert May is the 7 million estimate, Wilson popularised the word biodiversity, Humboldt the species–area relationship, Ehrlich the Rivet Popper and Tilman the diversity and stability plots. Reading stability as "no change": it means low variation with the power to resist or recover. Taking only one of Tilman’s results: it was steadier biomass and higher productivity together',
    why: 'Check whether the comparison is overall or only against vertebrates.',
    say: null,
  },
  // p. 733
  {
    topic: 2,
    kind: 'shortcut',
    q: 'What is the safe answer to "which group has the most species?"',
    a: 'Insects, unless the question restricts the comparison (among these plants, or compared with vertebrates). The restriction tells you when to change the answer. Fungi beat the vertebrates and still lose to the insects',
    why: 'Look for the restricting phrase before changing from the default.',
    say: null,
  },

  // ── Additional A · Biodiversity Indices: Quantifying Diversity Beyond Species Counts ──
  // pp. 734–737
  {
    topic: 3,
    kind: 'remember',
    q: 'What do the Shannon index and Simpson’s index of diversity measure, and how are they computed?',
    a: 'Species richness <i>S</i> is only the count of species. The Shannon index <i>H</i>′ = −∑ <i>p</i><sub><i>i</i></sub> ln <i>p</i><sub><i>i</i></sub> (natural logarithm, <i>p</i><sub><i>i</i></sub> the share of individuals in species <i>i</i>) combines richness with evenness, and a higher value means more diverse. Simpson’s index of diversity is <i>D</i> = 1 − ∑ <i>p</i><sub><i>i</i></sub><sup>2</sup> (the chance that two individuals drawn at random belong to different species; the sum on its own measures dominance). For shares 0.50, 0.25, 0.15 and 0.10, <i>H</i>′ ≈ 0.347 + 0.347 + 0.285 + 0.230 ≈ 1.21. For ten species of 10 individuals each, <i>D</i> = 1 − 10 × 0.01 = 0.90, but for 91, 1, 1, 1, 1, 1, 1, 1, 1, 1 it is 1 − 0.829 ≈ 0.17',
    why: 'The same ten species can give very different values: evenness matters as well as the count.',
    say: null,
  },
  // pp. 735–736
  {
    topic: 3,
    kind: 'remember',
    q: 'What are alpha, beta and gamma diversity, and how is beta found?',
    a: 'Alpha diversity is the richness within one community or sample, beta diversity the turnover of species between communities, and gamma diversity the total richness of the whole landscape or region. Beta = <frac><num><i>γ</i></num><den>mean <i>α</i></den></frac>, the regional richness over the mean alpha. For three patches with 3, 4 and 3 species and 6 species in all, mean <i>α</i> = <frac><num>10</num><den>3</den></frac> ≈ 3.33 and <i>β</i> = <frac><num>6</num><den>3.33</den></frac> ≈ 1.80',
    why: 'Alpha is within a habitat, beta between habitats and gamma over the region.',
    say: null,
  },

  // ── Additional B · Species-Area Relationship: Logarithmic Form and Slope Interpretation ──
  // pp. 737–740
  {
    topic: 4,
    kind: 'remember',
    q: 'What do C and z mean on the log–log line, and why is the continental slope steeper?',
    a: 'On a plot of log <i>S</i> against log <i>A</i> the line log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i> has slope <i>z</i> and intercept log <i>C</i>. When <i>A</i> is 1 unit of area, <i>S</i> = <i>C</i>, so <i>C</i> is the fitted count at unit area. <i>z</i> is a pure number. Across continents the added area crosses biogeographic boundaries with different species pools, so much new species turnover (high beta diversity) gives <i>z</i> of about 0.6–1.2; within a region added area mostly re-samples the same pool, so <i>z</i> is about 0.1–0.2',
    why: 'The intercepts of two studies fitted over very different areas cannot be compared directly.',
    say: null,
  },
  // pp. 738–739
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you predict richness from a log–log equation, and what limits the prediction?',
    a: 'Read <i>C</i> and <i>z</i>, take log <i>A</i>, find log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>, then take the antilog. For log <i>S</i> = 0.30 + 0.18 log <i>A</i> and <i>A</i> = 50 ha, log <i>A</i> = 1.699, log <i>S</i> = 0.30 + 0.306 = 0.606 and <i>S</i> = 10<sup>0.606</sup> ≈ 4 species; <i>C</i> = 10<sup>0.30</sup> ≈ 2.0. The line is fitted over a range of areas, so a prediction far outside it (1–100 ha extended to 10,000 ha) is unreliable, as larger areas may take in other biomes',
    why: 'The slope tells the scale: 0.18 is a within-region value, 0.6–1.2 a continental one.',
    say: null,
  },

  // ── Additional C · India as Megadiversity Nation ──
  // pp. 740–743
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the difference between endemic and exotic species, with Indian examples?',
    a: 'An endemic species is found naturally only in one restricted region and nowhere else (the frog <i>Hydrophylax malabaricus</i> of the Western Ghats). An exotic (alien) species is introduced by humans from outside its natural range (<i>Lantana camara</i> from tropical America; <i>Parthenium hysterophorus</i>; <i>Eichhornia crassipes</i>; <i>Clarias gariepinus</i>; <i>Prosopis juliflora</i>). Whether a species is native, endemic or exotic is judged against a stated region, and an exotic species is native somewhere else. Invasive exotic species can displace natives and reduce biodiversity',
    why: 'An endemic species lost from its only home is lost from the world, which is why endemic-rich hotspots matter.',
    say: null,
  },
  // pp. 741–742
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you show that India has more species per unit area than the world average?',
    a: 'Compare the shares. India has 8.1% of the recorded species on 2.4% of the land, so its density relative to the world average is <frac><num>0.081</num><den>0.024</den></frac> ≈ 3.4, about 3.4 times the global average. The three hotspots that extend into India are the Western Ghats–Sri Lanka, the Himalaya and Indo-Burma',
    why: 'The same ratio of a species share to a land share works for any region.',
    say: null,
  },

  // ── Additional D · Extinction: IUCN Categories and Rate Distinctions ──
  // pp. 743–744, 745–746
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the IUCN Red List categories in order, and which count as threatened?',
    a: 'Extinct (EX), Extinct in the Wild (EW), Critically Endangered (CR), Endangered (EN), Vulnerable (VU), Near Threatened (NT), Least Concern (LC), Data Deficient (DD) and Not Evaluated (NE). “Threatened” means CR, EN and VU together, not EX, NT or LC. The book’s thresholds are declines of at least 80% (CR), 50% (EN) and 30% (VU) over 10 years or three generations (whichever is longer), and fewer than 50 mature individuals for CR. About 32% of amphibians threatened means about a third of the assessed species are in CR, EN or VU',
    why: 'A species is placed in Extinct only after exhaustive surveys fail to find it.',
    say: null,
  },
  // pp. 744–745
  {
    topic: 6,
    kind: 'remember',
    q: 'How does the present extinction rate compare with the background rate?',
    a: 'The background rate is about 1 species per million species per year (10<sup>−6</sup> per year); the present rate is 100–1000 times as high. In a group of 10,000 species over 100 years, the background rate loses 10,000 × 10<sup>−6</sup> × 100 = 1 species, and a rate 500 times higher loses 10,000 × 5 × 10<sup>−4</sup> × 100 = 500 species, 5% of the group. The five earlier mass extinctions were natural, and the present one is caused by the Evil Quartet',
    why: 'Convert the rate to a per-year fraction first, then multiply by the number of species and years.',
    say: null,
  },

  // ── Additional E · Sampling Biodiversity: Methods, Assumptions, and Limitations ──
  // pp. 747–748
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you estimate a plant population with quadrats, and what must hold?',
    a: 'Place quadrats of known area at random or in a systematic pattern, count the individuals in each, find the mean count per quadrat, and divide by the quadrat area: density = <frac><num>mean individuals per quadrat</num><den>quadrat area</den></frac>, then multiply by the total habitat area. For counts 12, 8, 15, 10 and 11 in 1 m<sup>2</sup> quadrats the mean is <frac><num>56</num><den>5</den></frac> = 11.2 m<sup>−2</sup>, and over 500 m<sup>2</sup> that is 11.2 × 500 = 5,600 individuals. It assumes organisms are not strongly clumped, the quadrat size suits the organism and the habitat is fairly uniform. Too few or too small quadrats miss rare species',
    why: 'Convenient places are not random: random placement avoids bias.',
    say: null,
  },
  // pp. 747–749
  {
    topic: 7,
    kind: 'remember',
    q: 'How does capture–recapture estimate the size of a moving population?',
    a: 'Mark and release <i>M</i> animals, later capture a second sample and count the marked ones, <i>R</i>. The population is <frac><num><i>M</i> × (size of second sample)</num><den><i>R</i></den></frac>. For 80 marked, a second sample of 60 and 12 marked, 80 × 60 ÷ 12 = 400; for 60 marked, a second sample of 80 and 16 marked, 60 × 80 ÷ 16 = 300. It assumes marks are not lost, the population is closed, every individual is equally likely to be caught and marks do not affect survival. With few marked recaptures the estimate is rough: 50 × 20 ÷ 1 = 1,000 rests on a single animal',
    why: 'A small <i>R</i> in the denominator makes the estimate swing widely.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 750–754
  {
    topic: 8,
    kind: 'remember',
    q: 'How is this chapter weighted in the book’s estimate, and what question shapes return?',
    a: 'The distribution is the book’s estimate from past papers, not official figures. It puts biodiversity patterns and loss first, then conservation strategies, then magnitude and taxonomy, and assertion–reason and matching items as the smallest group. Six shapes come back: a one-line fact or definition (a distractor swaps one key word); the in situ and ex situ boundary (is the organism in its home?); assertion–reason (judge A and R, then check that R explains A); matching of two columns; a pie or bar diagram of species by group (animals about 70%, insects about 70% of animals, so about 49% of all species); and a species–area calculation (read <i>z</i>, find <i>S</i>, name the scale)',
    why: 'Treat the weighting as a guide to what to revise first, not a count of past questions.',
    say: null,
  },
  // pp. 754–755, 758
  {
    topic: 8,
    kind: 'mistake',
    q: 'Which traps recur in this chapter?',
    a: 'Treating every exotic species as harmful: invasive exotic species displace natives, and not every introduced species does. Endemic is not cosmopolitan: endemic is restricted to one region, exotic is introduced. Hunting as a separate fourth cause: it is over-exploitation. Calling a sanctuary or sacred grove ex situ: both are in situ, while zoos, botanical gardens, safari parks, seed banks and cryopreservation are ex situ. Cryopreservation at −196 °F: it is −196 °C. Hotspots: 34 in the NCERT-based key, 36 in current lists. Fungi as the largest group: fungi outnumber all vertebrates combined, but insects top the list',
    why: 'Match the number to the source the question cites, and read the unit.',
    say: null,
  },
];
