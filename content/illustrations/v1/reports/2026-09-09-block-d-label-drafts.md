# Block D — label-set drafts

`scripts/draft_labels.py --all` over the 112 ingested assets, per DIRECTIVE §5.

    sets drafted        109
    anchors             685
    omitted             624   'not in this figure'
    defaulted            48   several terms given the same point
    reviewed_by        NULL   on every set, without exception

685 + 624 = 1,309, which is exactly the manifest's total `ncert_labels`
count across the 112 rows. Every term the work order names was decided on.

## Nothing here ships

Every set is `reviewed_by = NULL` and the resolver refuses a set without a
human name on it. `draft_labels.py` has no flag that writes one and must
never be given one — the whole design is that the tool cannot promote its
own output. These plates render as art with no labels until an author opens
them in the anchor editor.

A wrong anchor is the worst thing this pipeline can produce: a correct word
confidently attached to the wrong structure, with nothing in the picture to
say so. A student cannot tell. A reviewer glancing at it may not either.

## 3 assets not drafted

    bio11-ch6-simple-permanent-tissues--parenchyma--collenchyma-and-sclerenchyma--a
    bio11-ch6-simple-permanent-tissues--parenchyma--collenchyma-and-sclerenchyma--b
    bio11-ch6-simple-permanent-tissues--parenchyma--collenchyma-and-sclerenchyma--c

`ncert_labels` is empty on all three — the same manifest truncation that
left their `chapter` as `ch6` and their `concept` blank. The chapter and
concept were fixable from the concepts table; the label list is not, because
it comes from a work order a subject author wrote against the book.

**Not drafted from an invented list.** Deciding WHICH terms a figure needs
is the work order's job, not a vision model's; only locating them is a
vision problem. These need the label list from whoever wrote the batch.

## 48 defaulted anchors — review these first

Terms the model gave the SAME coordinate. Two structures cannot occupy one
point, so a repeated anchor means the model stopped locating and started
defaulting. These are the dangerous ones precisely because they look
deliberate: the anchor sits on the drawing and the leader reaches it.

- `bio12-ch2-female-reproductive-system--ovary--oviduct--uterus-and-mamma--a` — ampulla, endometrium, fallopian-tube, uterus
- `bio11-ch15-formed-elements--rbc--wbc-and-platelets` — eosinophil, granule, lobed-nucleus, neutrophil
- `bio11-ch7-muscular-tissue--skeletal--smooth-and-cardiac--b` — nucleus, smooth-muscle-fibre, spindle-shape
- `bio11-ch6-anatomy-of-dorsiventral-and-isobilateral-leaf--b` — bundle-sheath, mesophyll, vascular-bundle
- `bio11-ch5-the-flower--floral-parts--symmetry-and-ovary-position` — petal, style
- `bio11-ch7-frog--external-morphology-and-digestive-system` — cloaca, cloacal-aperture
- `bio11-ch18-human-brain--forebrain-structure-and-functions--b` — cerebral-cortex, cerebrum
- `bio12-ch2-male-reproductive-system--testis--ducts-and-accessory-glands--b` — seminiferous-tubule, testis
- `bio12-ch2-female-reproductive-system--ovary--oviduct--uterus-and-mamma--b` — endometrium, uterus
- `bio11-ch7-connective-tissue--types-and-matrix--b` — adipocyte, fat-droplet
- `bio11-ch7-connective-tissue--types-and-matrix--d` — chondrocyte, lacuna
- `bio11-ch5-fruit--types--pericarp-and-false-fruits--a` — edible-part, mesocarp
- `bio11-ch5-fruit--types--pericarp-and-false-fruits--b` — edible-part, endocarp
- `bio11-ch6-epidermal-tissue-system--epidermis--stomata-and-trichomes--b` — guard-cell, stomatal-pore
- `bio11-ch6-anatomy-of-dicot-and-monocot-stem--b` — vascular-bundle, xylem
- `bio11-ch2-fungal-structure--nutrition-and-modes-of-reproduction--b` — coenocytic-hypha, hypha
- `bio11-ch3-algae--chlorophyceae--phaeophyceae-and-rhodophyceae--c` — colony, nucleus
- `bio11-ch4-phylum-coelenterata-and-ctenophora--a` — hypostome, mouth
- `bio11-ch7-connective-tissue--types-and-matrix--a` — collagen-fibre, matrix
- `bio11-ch7-connective-tissue--types-and-matrix--e` — haversian-canal, lacuna
- `bio11-ch6-epidermal-tissue-system--epidermis--stomata-and-trichomes--a` — guard-cell, stomatal-pore

## 137 anchors repeat across figures of their own set

A sub-asset set shares one `ncert_labels` list across all its figures, and
each figure decides which terms are visible in it. When the same term is
placed on more than one figure of a set, either the structure genuinely
appears twice — an epidermis does appear in both leaf plates — or the model
failed to tell the figures apart.

This is not reported as a defect, because both are real. It is reported
because it is where a reviewer's time is best spent: 137 of 685 anchors,
across 29 of the 34 sub-asset sets.

The earthworm is the clearest case to check by hand: `--a` placed only the
three circulatory terms, which is right, while `--b` placed circulatory AND
reproductive terms and `--c` placed nephridial and reproductive ones. The
reproductive terms cannot be correct on both.

## Per asset

| asset_slug | terms | drafted | omitted | defaulted |
|---|---|---|---|---|
| `bio11-ch14-human-respiratory-system--structure-of-the-respiratory-tract--a` | 15 | 14 | 1 | 0 |
| `bio11-ch14-human-respiratory-system--structure-of-the-respiratory-tract--b` | 15 | 4 | 11 | 0 |
| `bio11-ch15-formed-elements--rbc--wbc-and-platelets` | 9 | 9 | 0 | 4 |
| `bio11-ch15-structure-of-the-human-heart-and-its-chambers` | 22 | 21 | 1 | 0 |
| `bio11-ch16-structure-of-the-human-kidney-and-urinary-tract` | 15 | 15 | 0 | 0 |
| `bio11-ch17-appendicular-skeleton--girdles-and-limb-bones--a` | 19 | 8 | 11 | 0 |
| `bio11-ch17-appendicular-skeleton--girdles-and-limb-bones--b` | 19 | 10 | 9 | 0 |
| `bio11-ch17-axial-skeleton--skull--vertebral-column--ribs-and-sternum--a` | 16 | 3 | 13 | 0 |
| `bio11-ch17-axial-skeleton--skull--vertebral-column--ribs-and-sternum--b` | 16 | 7 | 9 | 0 |
| `bio11-ch17-axial-skeleton--skull--vertebral-column--ribs-and-sternum--c` | 16 | 10 | 6 | 0 |
| `bio11-ch18-human-brain--forebrain-structure-and-functions--a` | 12 | 10 | 2 | 0 |
| `bio11-ch18-human-brain--forebrain-structure-and-functions--b` | 12 | 7 | 5 | 2 |
| `bio11-ch18-human-brain--midbrain-and-hindbrain` | 11 | 11 | 0 | 0 |
| `bio11-ch2-fungal-structure--nutrition-and-modes-of-reproduction--a` | 9 | 7 | 2 | 0 |
| `bio11-ch2-fungal-structure--nutrition-and-modes-of-reproduction--b` | 9 | 3 | 6 | 2 |
| `bio11-ch2-fungal-structure--nutrition-and-modes-of-reproduction--c` | 9 | 6 | 3 | 0 |
| `bio11-ch3-algae--chlorophyceae--phaeophyceae-and-rhodophyceae--a` | 11 | 6 | 5 | 0 |
| `bio11-ch3-algae--chlorophyceae--phaeophyceae-and-rhodophyceae--b` | 11 | 4 | 7 | 0 |
| `bio11-ch3-algae--chlorophyceae--phaeophyceae-and-rhodophyceae--c` | 11 | 4 | 7 | 2 |
| `bio11-ch3-algae--chlorophyceae--phaeophyceae-and-rhodophyceae--d` | 11 | 3 | 8 | 0 |
| `bio11-ch3-algae--chlorophyceae--phaeophyceae-and-rhodophyceae--e` | 11 | 5 | 6 | 0 |
| `bio11-ch3-bryophytes--liverworts-and-mosses--a` | 11 | 5 | 6 | 0 |
| `bio11-ch3-bryophytes--liverworts-and-mosses--b` | 11 | 7 | 4 | 0 |
| `bio11-ch3-gymnosperms--characteristics--structure-and-examples--a` | 9 | 7 | 2 | 0 |
| `bio11-ch3-gymnosperms--characteristics--structure-and-examples--b` | 9 | 1 | 8 | 0 |
| `bio11-ch4-class-amphibia-and-reptilia--b` | 7 | 3 | 4 | 0 |
| `bio11-ch4-class-amphibia-and-reptilia--c` | 7 | 2 | 5 | 0 |
| `bio11-ch4-class-amphibia-and-reptilia--d` | 7 | 3 | 4 | 0 |
| `bio11-ch4-class-aves-and-mammalia--a` | 8 | 4 | 4 | 0 |
| `bio11-ch4-class-aves-and-mammalia--b` | 8 | 2 | 6 | 0 |
| `bio11-ch4-class-aves-and-mammalia--c` | 8 | 2 | 6 | 0 |
| `bio11-ch4-class-aves-and-mammalia--d` | 8 | 2 | 6 | 0 |
| `bio11-ch4-class-cyclostomata--chondrichthyes-and-osteichthyes--a` | 9 | 2 | 7 | 0 |
| `bio11-ch4-class-cyclostomata--chondrichthyes-and-osteichthyes--b` | 9 | 5 | 4 | 0 |
| `bio11-ch4-class-cyclostomata--chondrichthyes-and-osteichthyes--c` | 9 | 4 | 5 | 0 |
| `bio11-ch4-phylum-annelida--a` | 6 | 3 | 3 | 0 |
| `bio11-ch4-phylum-annelida--b` | 6 | 5 | 1 | 0 |
| `bio11-ch4-phylum-arthropoda--a` | 9 | 9 | 0 | 0 |
| `bio11-ch4-phylum-arthropoda--b` | 9 | 8 | 1 | 0 |
| `bio11-ch4-phylum-arthropoda--c` | 9 | 7 | 2 | 0 |
| `bio11-ch4-phylum-arthropoda--d` | 9 | 7 | 2 | 0 |
| `bio11-ch4-phylum-arthropoda--e` | 9 | 7 | 2 | 0 |
| `bio11-ch4-phylum-arthropoda--f` | 9 | 0 | 9 | 0 |
| `bio11-ch4-phylum-aschelminthes--nematoda` | 8 | 3 | 5 | 0 |
| `bio11-ch4-phylum-coelenterata-and-ctenophora--a` | 9 | 6 | 3 | 2 |
| `bio11-ch4-phylum-coelenterata-and-ctenophora--b` | 9 | 3 | 6 | 0 |
| `bio11-ch4-phylum-coelenterata-and-ctenophora--c` | 9 | 1 | 8 | 0 |
| `bio11-ch4-phylum-coelenterata-and-ctenophora--d` | 9 | 2 | 7 | 0 |
| `bio11-ch4-phylum-echinodermata-and-hemichordata--a` | 8 | 5 | 3 | 0 |
| `bio11-ch4-phylum-echinodermata-and-hemichordata--b` | 8 | 3 | 5 | 0 |
| `bio11-ch4-phylum-mollusca--a` | 8 | 4 | 4 | 0 |
| `bio11-ch4-phylum-mollusca--b` | 8 | 4 | 4 | 0 |
| `bio11-ch4-phylum-mollusca--c` | 8 | 2 | 6 | 0 |
| `bio11-ch4-phylum-platyhelminthes--a` | 7 | 7 | 0 | 0 |
| `bio11-ch4-phylum-platyhelminthes--b` | 7 | 0 | 7 | 0 |
| `bio11-ch4-phylum-porifera` | 7 | 7 | 0 | 0 |
| `bio11-ch5-fruit--types--pericarp-and-false-fruits--a` | 7 | 5 | 2 | 2 |
| `bio11-ch5-fruit--types--pericarp-and-false-fruits--b` | 7 | 5 | 2 | 2 |
| `bio11-ch5-fruit--types--pericarp-and-false-fruits--c` | 7 | 5 | 2 | 0 |
| `bio11-ch5-root-system--types--regions-and-modifications--a` | 14 | 3 | 11 | 0 |
| `bio11-ch5-root-system--types--regions-and-modifications--b` | 14 | 5 | 9 | 0 |
| `bio11-ch5-root-system--types--regions-and-modifications--c` | 14 | 3 | 11 | 0 |
| `bio11-ch5-root-system--types--regions-and-modifications--d` | 14 | 4 | 10 | 0 |
| `bio11-ch5-seed-structure-in-dicots-and-monocots--a` | 13 | 6 | 7 | 0 |
| `bio11-ch5-seed-structure-in-dicots-and-monocots--b` | 13 | 11 | 2 | 0 |
| `bio11-ch5-stem--modifications-and-functions--a` | 13 | 5 | 8 | 0 |
| `bio11-ch5-stem--modifications-and-functions--b` | 13 | 4 | 9 | 0 |
| `bio11-ch5-stem--modifications-and-functions--c` | 13 | 4 | 9 | 0 |
| `bio11-ch5-the-flower--floral-parts--symmetry-and-ovary-position` | 15 | 14 | 1 | 2 |
| `bio11-ch6-anatomy-of-dicot-and-monocot-root--a` | 12 | 7 | 5 | 0 |
| `bio11-ch6-anatomy-of-dicot-and-monocot-root--b` | 12 | 10 | 2 | 0 |
| `bio11-ch6-anatomy-of-dicot-and-monocot-stem--a` | 14 | 10 | 4 | 0 |
| `bio11-ch6-anatomy-of-dicot-and-monocot-stem--b` | 14 | 10 | 4 | 2 |
| `bio11-ch6-anatomy-of-dorsiventral-and-isobilateral-leaf--a` | 12 | 12 | 0 | 0 |
| `bio11-ch6-anatomy-of-dorsiventral-and-isobilateral-leaf--b` | 12 | 12 | 0 | 3 |
| `bio11-ch6-cork-cambium--periderm-and-lenticels` | 8 | 7 | 1 | 0 |
| `bio11-ch6-epidermal-tissue-system--epidermis--stomata-and-trichomes--a` | 9 | 5 | 4 | 2 |
| `bio11-ch6-epidermal-tissue-system--epidermis--stomata-and-trichomes--b` | 9 | 5 | 4 | 2 |
| `bio11-ch6-epidermal-tissue-system--epidermis--stomata-and-trichomes--c` | 9 | 2 | 7 | 0 |
| `bio11-ch6-epidermal-tissue-system--epidermis--stomata-and-trichomes--d` | 9 | 3 | 6 | 0 |
| `bio11-ch6-phloem--structure-and-conducting-elements` | 7 | 7 | 0 | 0 |
| `bio11-ch6-xylem--structure-and-conducting-elements` | 8 | 8 | 0 | 0 |
| `bio11-ch7-cockroach--circulatory--respiratory-and-excretory-systems` | 12 | 6 | 6 | 0 |
| `bio11-ch7-cockroach--morphology-and-digestive-system--a` | 28 | 14 | 14 | 0 |
| `bio11-ch7-cockroach--morphology-and-digestive-system--b` | 28 | 13 | 15 | 0 |
| `bio11-ch7-cockroach--nervous-system-and-reproduction` | 19 | 17 | 2 | 0 |
| `bio11-ch7-connective-tissue--types-and-matrix--a` | 15 | 6 | 9 | 2 |
| `bio11-ch7-connective-tissue--types-and-matrix--b` | 15 | 2 | 13 | 2 |
| `bio11-ch7-connective-tissue--types-and-matrix--c` | 15 | 2 | 13 | 0 |
| `bio11-ch7-connective-tissue--types-and-matrix--d` | 15 | 2 | 13 | 2 |
| `bio11-ch7-connective-tissue--types-and-matrix--e` | 15 | 5 | 10 | 2 |
| `bio11-ch7-connective-tissue--types-and-matrix--f` | 15 | 0 | 15 | 0 |
| `bio11-ch7-earthworm--circulatory--excretory-and-reproductive-systems--a` | 15 | 3 | 12 | 0 |
| `bio11-ch7-earthworm--circulatory--excretory-and-reproductive-systems--b` | 15 | 10 | 5 | 0 |
| `bio11-ch7-earthworm--circulatory--excretory-and-reproductive-systems--c` | 15 | 7 | 8 | 0 |
| `bio11-ch7-earthworm--morphology-and-digestive-system--a` | 19 | 5 | 14 | 0 |
| `bio11-ch7-earthworm--morphology-and-digestive-system--b` | 19 | 13 | 6 | 0 |
| `bio11-ch7-frog--circulatory-and-respiratory-systems--b` | 16 | 7 | 9 | 0 |
| `bio11-ch7-frog--excretory--nervous-and-reproductive-systems--a` | 20 | 3 | 17 | 0 |
| `bio11-ch7-frog--excretory--nervous-and-reproductive-systems--b` | 20 | 11 | 9 | 0 |
| `bio11-ch7-frog--external-morphology-and-digestive-system` | 22 | 19 | 3 | 2 |
| `bio11-ch7-muscular-tissue--skeletal--smooth-and-cardiac--a` | 9 | 2 | 7 | 0 |
| `bio11-ch7-muscular-tissue--skeletal--smooth-and-cardiac--b` | 9 | 3 | 6 | 3 |
| `bio11-ch7-muscular-tissue--skeletal--smooth-and-cardiac--c` | 9 | 5 | 4 | 0 |
| `bio12-ch2-female-reproductive-system--ovary--oviduct--uterus-and-mamma--a` | 18 | 13 | 5 | 4 |
| `bio12-ch2-female-reproductive-system--ovary--oviduct--uterus-and-mamma--b` | 18 | 13 | 5 | 2 |
| `bio12-ch2-female-reproductive-system--ovary--oviduct--uterus-and-mamma--c` | 18 | 5 | 13 | 0 |
| `bio12-ch2-male-reproductive-system--testis--ducts-and-accessory-glands--a` | 14 | 11 | 3 | 0 |
| `bio12-ch2-male-reproductive-system--testis--ducts-and-accessory-glands--b` | 14 | 7 | 7 | 2 |

Full per-label detail, including which terms were omitted, is in each
`content/label-drafts/<slug>.draft.json` under `_draft`.

## syllabus_gap

Still NULL on all 112, deliberately. It is filled by a subject author during
label review, not by the ingest — NULL means nobody has looked, and that is
a true statement today.
