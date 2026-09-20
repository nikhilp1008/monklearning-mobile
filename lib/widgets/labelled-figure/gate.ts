/**
 * The publish gate's decision, as a function.
 *
 * WHY IT IS HERE AND NOT IN THE SCRIPT. `scripts/gate-label-set.mjs` is what
 * `apply_review.py` shells out to, and for as long as the decision lived
 * inside that script the only way to test it was to spawn node once per set —
 * so it was never tested across the corpus, and the one property that matters
 * went unchecked: THE GATE AND THE RUNTIME MUST AGREE. They did not. The
 * Taenia passed the gate at all five frames and the runtime drew a blank
 * board, because the anchor floor lives in `validate()` and the gate never
 * called it.
 *
 * So the decision moved here, the script became a thin CLI over it, and
 * `__tests__/gate-agrees-with-runtime.test.ts` runs it over every served set.
 * Nothing in this module's import graph may reach React or react-native-svg —
 * that is what lets the CLI load it under bare node. See ./validate.
 *
 * THE PUBLISH RULE, which is deliberately stricter than the runtime's:
 * at runtime a dropped label is a survivable loss (the plate still teaches);
 * at publish time it is a refusal, because a set we are about to freeze should
 * place every label it declares.
 */
import { describeViolations, gateLabelSet } from './figure-layout';
import type { FigureRecord } from './figure-resolver';
import { toFigureRecord, validateLabelSet, type LabelSet } from './label-set';
import { validate as validateFigure } from './validate';

export type GateStage = 'validate' | 'widget-validate' | 'layout';

export interface GateResult {
  ok: boolean;
  stage: GateStage;
  verdict: string;
  /** Present from `widget-validate` on. */
  asset_slug?: string;
  errors?: readonly string[];
  group?: string;
  dropped?: readonly string[];
  labels?: number;
  groups?: number;
  violations?: ReturnType<typeof gateLabelSet>;
}

/** Every label the widget would refuse to place, per group, with its reason. */
function widgetVerdict(set: LabelSet, record: FigureRecord): GateResult | null {
  for (const g of record.groups) {
    const want = record.labels.filter((l) => l.group === g.id);
    const checked = validateFigure({
      asset_slug: set.asset_slug, art: record.art, groups: record.groups,
      labels: record.labels, lang: 'english', active_group: g.id,
    });
    if (!checked.ok) {
      return {
        ok: false, stage: 'widget-validate', group: g.id, errors: checked.errors,
        asset_slug: set.asset_slug,
        verdict: `refused by the widget's validate(): ${checked.errors.join('; ')}`,
      };
    }
    const kept = checked.params.labels.filter((l) => l.group === g.id);
    if (kept.length !== want.length) {
      const lost = want.filter((w) => !kept.some((k) => k.id === w.id)).map((l) => l.id);
      return {
        ok: false, stage: 'widget-validate', group: g.id, dropped: lost,
        asset_slug: set.asset_slug,
        verdict: `the widget would DROP ${lost.length} label(s) in group "${g.id}": `
          + `${lost.join(', ')} — the plate would still draw, but a published set `
          + `must place every label it declares`,
      };
    }
  }
  return null;
}

export function gateSet(raw: unknown): GateResult {
  // The CLIENT'S OWN wire-format validator first. A set the resolver would
  // reject has no meaningful layout verdict, and reporting "places clear" for
  // something that will never be drawn is the false-confidence failure this
  // gate exists to prevent.
  const checked = validateLabelSet(raw);
  if (!checked.ok) {
    return {
      ok: false, stage: 'validate', errors: checked.errors,
      verdict: `refused by validateLabelSet: ${checked.errors.join('; ')}`,
    };
  }
  const set = checked.set;
  // `toFigureRecord` is what the widget actually draws from, so the gate runs
  // on the converted record rather than the wire format — the same bytes the
  // board would see.
  const record = toFigureRecord(set, 1);

  const refused = widgetVerdict(set, record);
  if (refused) return refused;

  const violations = gateLabelSet(record.labels, record.groups, record.art);
  return {
    ok: violations.length === 0,
    stage: 'layout',
    verdict: describeViolations(violations),
    asset_slug: set.asset_slug,
    labels: record.labels.length,
    groups: record.groups.length,
    violations,
  };
}
