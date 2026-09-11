# drona-illustrations-v1.1 — final report (blocks A–H)

## Where it landed

    concept_assets rows        113
    objects in drona-assets    226   (113 masters + 113 @2x)
    rows without objects         0
    objects without rows         0
    public HEAD                226/226 -> 200
    label-set drafts           110   697 anchors, every set reviewed_by NULL
    concepts resolving to slot 3  48 of 48 that carry an asset

## The reader was the bug, not the catalogue

**PostgREST caps an unpaged `select` at 1,000 rows and reports the
truncation nowhere** — no error, no warning, a short list that looks
plausible. `concepts` holds 1,172. `load_concept_tables` used a raw select,
read 1,000 of them, and four assets were refused for naming concepts that
were present, `active`, and in exactly the chapter the manifest named. I
reported that as a gap in the concept catalogue. There was no gap.

Every concept-table read in the ingest path now goes through
`app.db.fetch_all`, which pages, and a test reads a 1,172-row fixture through
a double that truncates at 1,000 the way PostgREST does — the previous fake
returned everything from `execute()` and ignored `range()`, so it could not
tell a paging reader from a truncating one and the suite passed either way.
Falsified both directions: the new test fails with `read 1000 of 1172`
against the raw select.

## Routes

Twelve chapters: bio11 ch2,3,4,5,6,7,14,15,16,17,18 and bio12 ch2.

| slot | before | after |
|---|---|---|
| `widget_precomputed` | 0 | 0 |
| `widget_archetype` | 9 | 9 |
| `illustration` | 48 | 48 |
| `svg_precomputed` | 0 | 77 |
| `svg_live` | 77 | 0 |

The only movement is 77 concepts from `svg_live` to `svg_precomputed`, which
is the precompute run doing its job. **48 of 48 asset-bearing concepts
resolve to `illustration`, and no concept resolves to `illustration` without
an asset.** Zero stop conditions.

Slot 1 is a payload stored on a lesson SEGMENT, not a per-concept row, so it
cannot be measured per concept and is treated as absent here. That biases the
count toward `illustration`, never away from it, which is the safe direction
for the stop condition.

## Per concept, the 48 that carry an asset

| chapter | concept | assets | slot |
|---|---|---|---|
| Anatomy of Flowering Plants | Anatomy of Dicot and Monocot Root | 2 | `illustration` |
| Anatomy of Flowering Plants | Anatomy of Dicot and Monocot Stem | 2 | `illustration` |
| Anatomy of Flowering Plants | Anatomy of Dorsiventral and Isobilateral Leaf | 2 | `illustration` |
| Anatomy of Flowering Plants | Cork Cambium, Periderm and Lenticels | 1 | `illustration` |
| Anatomy of Flowering Plants | Epidermal Tissue System: Epidermis, Stomata and Trichomes | 4 | `illustration` |
| Anatomy of Flowering Plants | Phloem: Structure and Conducting Elements | 1 | `illustration` |
| Anatomy of Flowering Plants | Simple Permanent Tissues: Parenchyma, Collenchyma and Sclerenchyma | 3 | `illustration` |
| Anatomy of Flowering Plants | Xylem: Structure and Conducting Elements | 1 | `illustration` |
| Animal Kingdom | Class Amphibia and Reptilia | 3 | `illustration` |
| Animal Kingdom | Class Aves and Mammalia | 4 | `illustration` |
| Animal Kingdom | Class Cyclostomata, Chondrichthyes and Osteichthyes | 3 | `illustration` |
| Animal Kingdom | Phylum Annelida | 2 | `illustration` |
| Animal Kingdom | Phylum Arthropoda | 6 | `illustration` |
| Animal Kingdom | Phylum Aschelminthes (Nematoda) | 1 | `illustration` |
| Animal Kingdom | Phylum Coelenterata and Ctenophora | 4 | `illustration` |
| Animal Kingdom | Phylum Echinodermata and Hemichordata | 2 | `illustration` |
| Animal Kingdom | Phylum Mollusca | 3 | `illustration` |
| Animal Kingdom | Phylum Platyhelminthes | 2 | `illustration` |
| Animal Kingdom | Phylum Porifera | 1 | `illustration` |
| Biological Classification | Fungal Structure, Nutrition and Modes of Reproduction | 3 | `illustration` |
| Body Fluids and Circulation | Formed Elements: RBC, WBC and Platelets | 1 | `illustration` |
| Body Fluids and Circulation | Structure of the Human Heart and Its Chambers | 1 | `illustration` |
| Breathing and Exchange of Gases | Human Respiratory System: Structure of the Respiratory Tract | 2 | `illustration` |
| Excretory Products and their Elimination | Structure of the Human Kidney and Urinary Tract | 1 | `illustration` |
| Human Reproduction | Female Reproductive System: Ovary, Oviduct, Uterus and Mammary Gland | 3 | `illustration` |
| Human Reproduction | Male Reproductive System: Testis, Ducts and Accessory Glands | 2 | `illustration` |
| Locomotion and Movement | Appendicular Skeleton: Girdles and Limb Bones | 2 | `illustration` |
| Locomotion and Movement | Axial Skeleton: Skull, Vertebral Column, Ribs and Sternum | 3 | `illustration` |
| Morphology of Flowering Plants | Fruit: Types, Pericarp and False Fruits | 3 | `illustration` |
| Morphology of Flowering Plants | Root System: Types, Regions and Modifications | 4 | `illustration` |
| Morphology of Flowering Plants | Seed Structure in Dicots and Monocots | 2 | `illustration` |
| Morphology of Flowering Plants | Stem: Modifications and Functions | 3 | `illustration` |
| Morphology of Flowering Plants | The Flower: Floral Parts, Symmetry and Ovary Position | 1 | `illustration` |
| Neural Control and Coordination | Human Brain: Forebrain Structure and Functions | 2 | `illustration` |
| Neural Control and Coordination | Human Brain: Midbrain and Hindbrain | 1 | `illustration` |
| Plant Kingdom | Algae: Chlorophyceae, Phaeophyceae and Rhodophyceae | 5 | `illustration` |
| Plant Kingdom | Bryophytes: Liverworts and Mosses | 2 | `illustration` |
| Plant Kingdom | Gymnosperms: Characteristics, Structure and Examples | 2 | `illustration` |
| Structural Organisation in Animals | Cockroach: Circulatory, Respiratory and Excretory Systems | 1 | `illustration` |
| Structural Organisation in Animals | Cockroach: Morphology and Digestive System | 2 | `illustration` |
| Structural Organisation in Animals | Cockroach: Nervous System and Reproduction | 1 | `illustration` |
| Structural Organisation in Animals | Connective Tissue: Types and Matrix | 6 | `illustration` |
| Structural Organisation in Animals | Earthworm: Circulatory, Excretory and Reproductive Systems | 3 | `illustration` |
| Structural Organisation in Animals | Earthworm: Morphology and Digestive System | 2 | `illustration` |
| Structural Organisation in Animals | Frog: Circulatory and Respiratory Systems | 2 | `illustration` |
| Structural Organisation in Animals | Frog: Excretory, Nervous and Reproductive Systems | 2 | `illustration` |
| Structural Organisation in Animals | Frog: External Morphology and Digestive System | 1 | `illustration` |
| Structural Organisation in Animals | Muscular Tissue: Skeletal, Smooth and Cardiac | 3 | `illustration` |

## What is not done

- **The API is not deployed.** The slot-3 fix is committed locally and
  `origin/main` still filters on `manifest_status = 'approved'`, so the
  Railway API every device talks to still returns an empty set for every
  concept. A live class on the simulator teaches the frog heart in words and
  draws no figure. That is the deployed code, not a client bug.
- **`syllabus_gap` is NULL on all 113**, by design: it is filled by a subject
  author during label review, not by the ingest.
- **`reviewed_by` is NULL on all 110 label sets**, by design: the resolver
  refuses a set without a human name on it, and `draft_labels.py` has no flag
  that writes one.
- **3 assets have no label draft** — the sclerenchyma set carries no
  `ncert_labels`. Deciding WHICH terms a figure needs is the work order's job,
  not a vision model's.
