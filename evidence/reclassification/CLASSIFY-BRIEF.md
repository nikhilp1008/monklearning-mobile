# Adversarial reclassification brief

## Why this exists

The existing `archetype` column in `content/concept-archetypes.csv` was built by
reading CONCEPT NAMES ONLY — no syllabus text, no lesson content, no book chunks.
That method fails in exactly one direction: a name that *sounds* like a picture
gets marked as one. Audits found it wrong for roughly 40% of rows, optimistic
every single time.

This column is about to become the RUNTIME WIDGET SELECTOR. A wrong row puts the
wrong diagram on the board in a live class, deterministically, forever. So the
cost of a false "widget" is much higher than the cost of a false "none".

## Your job

You are given a slice of concepts. Each carries the top-6 book chunks retrieved
for it from the actual textbook content (pgvector cosine, same path production
uses). CLASSIFY FROM THE CHUNK TEXT, NOT FROM THE CONCEPT NAME.

**BE ADVERSARIAL. Your job is to DEMOTE, not to confirm.** Default every concept
to `none_symbolic` and require the retrieved content to EARN a widget. The
previous pass did the opposite and that is why it is wrong.

Concretely, to assign a widget you must be able to point to text in the chunks
that describes something with an actual spatial, structural, or quantitative
form to draw. If the chunks are definitions, formulae, prose, classifications,
lists of properties, or worked algebra — that is `none_symbolic`, no matter how
visual the concept's NAME sounds. "Electric Flux" sounds like a picture; if its
chunks are a scalar-product definition and a units discussion, it is not one.

Watch for these specific traps, all of which the previous pass fell into:
- A name containing "structure", "diagram", "cycle", "mechanism", "types of",
  "shapes" is NOT evidence. The chunks are the evidence.
- Some chunks are retrieval noise — check `sim`. Below ~0.45 the chunk may be
  about something else entirely. Say so if the retrieval clearly missed.
- A concept can be genuinely visual but need an ILLUSTRATION (a drawn figure of
  a real object: anatomy, apparatus, an organism) rather than a WIDGET (a
  parametric renderer). Anatomy is an illustration. A cycle of labelled boxes
  is a widget. If moving a part would change the physiology, it is a drawing.

## Closed vocabulary — use EXACTLY these strings, nothing else

SHIPPED widgets (exist today, safe to point at):
  xy_plot            2-D plot of a closed-form curve, area under it, or a small dataset
  data_table_trend   values side by side in a grid; reads a trend and its exceptions
  field_lines        vector field around charges/magnets
  projectile_motion  parabolic trajectory under gravity
  molecule_3d        real 3-D molecular structure from an identifier (pubchem:/pdb:)

BEING BUILT (approved, safe to point at):
  process_flow       ordered stages as nodes+arrows; ring (closed cycle) or chain (linear pathway)
  reaction_scheme    chemical species as text nodes, arrows carrying reagent labels
  molecule_struct    2-D structural formula: one central atom, ligands placed by electron-domain count
  circuit_network    lumped two-terminal circuit on a named topology, reduced to an equivalent

ILLUSTRATION (a drawn figure, sourced or commissioned — NOT a renderer):
  labelled_figure    anatomy, organisms, tissues, organs, morphology
  apparatus          lab equipment, experimental setups, instruments

NO DIAGRAM:
  none_symbolic      definitions, formulae, prose, classification lists, algebra

GENUINE GAP (needs a widget nobody has built or approved):
  gap_<short_name>   e.g. gap_energy_level, gap_ray_optics, gap_genetics_cross,
                     gap_free_body, gap_wave_form, gap_geometry_3d
  Use this rather than forcing a concept into a widget that does not fit.
  A gap honestly recorded is worth more than false coverage.

## Output

Write ONE JSON file to the path you are given, an array with one object per
concept, in the same order as the input:

{
 "concept": "<verbatim from input>",
 "current_archetype": "<verbatim from input>",
 "new_archetype": "<from the closed vocabulary above>",
 "changed": true|false,
 "confidence": "high"|"med"|"low",
 "evidence": "<<=200 chars: what IN THE CHUNKS drove the decision. Quote or
              closely paraphrase. If you demoted, say what the chunks turned
              out to actually contain. If retrieval looked wrong, say so.>"
}

No preamble, no commentary in the file. Then report to me: total, how many
changed, the direction of change (how many demoted to none_symbolic, how many
moved widget->illustration, how many promoted), your confidence distribution,
and the 3 changes you are least sure about.
