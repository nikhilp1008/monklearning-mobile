/**
 * THE PLACEHOLDER. Not content — scaffolding, so the illustration tier can be
 * proven end to end before a single real asset exists.
 *
 * There is no `concept_assets` table and no R2 bucket yet, and all 48 rows of
 * `illustration-manifest.csv` are `status=todo`. What exists is this: one
 * bundled 1600x1200 PNG generated in-repo, and one hand-written label set over
 * it. Everything downstream — the letterbox arithmetic, de-collision, the
 * group reveal, the gate at three board sizes — is exercised against it, so
 * when the real art lands the only thing that changes is which loader the
 * resolver was built with.
 *
 * WHAT THIS IS NOT: it is not a figure with provenance. The art was generated
 * by `scripts` in this repo for this purpose, it depicts nothing sourced, and
 * it is deliberately obvious about that. No provenance block is faked here —
 * a plausible-looking `licence_url` on art nobody licensed is the exact defect
 * shape docs/label-layer.md §4 is written against.
 *
 * It carries TWO groups, on purpose: a single-group placeholder would never
 * exercise the group strip, the reserved band, or the cue-driven reveal, and
 * those are the parts the 48-figure work order actually needs.
 */
import type { FigureRecord } from './figure-resolver';
import { createFigureResolver } from './figure-resolver';

/** Metro bundles this; `require` yields an asset module id, which is exactly
 *  what react-native-svg's `Image href` takes. No network, ever. */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PLACEHOLDER_ART = require('../../../assets/figures/placeholder-plant-cell.png') as number;

export const PLACEHOLDER_SLUG = 'placeholder--generalised-plant-cell';

/**
 * Anchors are normalised against the art's INTRINSIC 1600x1200, measured
 * where the shapes were drawn (see the generator's ellipse centres), not
 * eyeballed off a scaled preview — which is the whole reason §1.3 stores a
 * fraction rather than a source pixel.
 */
export const PLACEHOLDER_FIGURE: FigureRecord = {
  asset_slug: PLACEHOLDER_SLUG,
  art: { source: PLACEHOLDER_ART, intrinsic_w: 1600, intrinsic_h: 1200 },
  groups: [
    { id: 'organelles', label: { en: 'Organelles', hi: 'कोशिकांग' } },
    { id: 'nucleus', label: { en: 'Nucleus', hi: 'केंद्रक' } },
  ],
  labels: [
    {
      id: 'cell-wall',
      term: { en: 'Cell wall', hi: 'कोशिका भित्ति' },
      anchor: { u: 0.5, v: 0.117 },
      side: 'left',
      group: 'organelles',
    },
    {
      id: 'plasma-membrane',
      term: { en: 'Plasma membrane', hi: 'जीवद्रव्य झिल्ली' },
      anchor: { u: 0.52, v: 0.16 },
      side: 'left',
      group: 'organelles',
    },
    {
      id: 'cytoplasm',
      term: { en: 'Cytoplasm', hi: 'कोशिकाद्रव्य' },
      anchor: { u: 0.3, v: 0.7 },
      side: 'left',
      group: 'organelles',
    },
    {
      id: 'vacuole',
      term: { en: 'Vacuole', hi: 'रसधानी' },
      anchor: { u: 0.681, v: 0.317 },
      side: 'right',
      group: 'organelles',
    },
    {
      id: 'mitochondrion',
      term: { en: 'Mitochondrion', hi: 'सूत्रकणिका' },
      anchor: { u: 0.7, v: 0.633 },
      side: 'right',
      group: 'organelles',
      // An elbow, so the leader clears the vacuole instead of crossing it.
      leader_via: { u: 0.86, v: 0.52 },
    },
    {
      id: 'nuclear-envelope',
      term: { en: 'Nuclear envelope', hi: 'केंद्रक कला' },
      anchor: { u: 0.4, v: 0.292 },
      side: 'left',
      group: 'nucleus',
    },
    {
      id: 'nucleoplasm',
      term: { en: 'Nucleoplasm', hi: 'केंद्रकद्रव्य' },
      anchor: { u: 0.47, v: 0.4 },
      side: 'right',
      group: 'nucleus',
    },
    {
      id: 'nucleolus',
      term: { en: 'Nucleolus', hi: 'केंद्रिका' },
      anchor: { u: 0.4, v: 0.433 },
      side: 'right',
      group: 'nucleus',
    },
  ],
};

/**
 * The resolver the app runs against today.
 *
 * Seeded, so `get()` succeeds with no `prefetch()` at all — a bundled record
 * needs no I/O. `prefetch()` still resolves (from the seed) and still reports
 * misses, so the call site's shape is the real one: prefetch before the class,
 * `get()` during it. Swapping in the R2 loader changes this one expression and
 * nothing else.
 */
export const placeholderFigureResolver = createFigureResolver(
  async (slug: string) => {
    throw new Error(
      `[labelled_figure] no asset store wired yet — cannot load "${slug}". ` +
        `Only the bundled placeholder resolves today.`
    );
  },
  [PLACEHOLDER_FIGURE]
);
