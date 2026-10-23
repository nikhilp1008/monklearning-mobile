/**
 * The labels on a resolved force's two components.
 *
 * They used to be fixed: "cosθ" along the axis, "sinθ" across it. On an incline
 * the weight's component ALONG the slope is mg·sinθ (θ = the incline's angle),
 * so the picture taught the opposite of the formula every student must know.
 * Found reviewing the stored Class 11 physics widgets (2026-10-23); no stored
 * widget resolves a force, but the server's widget spec offers components_of
 * to the model, so a live answer could.
 */
import { freeBodyForces } from '..';
import { componentLabelFns, layoutFbd } from '../physics';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

type Node = { type: string; props: Record<string, unknown>; children?: (Node | string)[] | null };
const walk = (n: Node | string | null | undefined, out: Node[] = []): Node[] => {
  if (!n || typeof n === 'string') return out;
  out.push(n);
  for (const c of n.children ?? []) walk(c as Node, out);
  return out;
};
const textOf = (n: Node): string =>
  (n.children ?? []).map((c) => (typeof c === 'string' ? c : String((c as Node).props.content ?? ''))).join('');

function params(over: Record<string, unknown>) {
  const r = freeBodyForces.validate({ ...freeBodyForces.defaults, ...over });
  if (!r.ok) throw new Error(r.errors.join(', '));
  return r.params;
}
const first = (v: unknown) => (Array.isArray(v) ? Number(v[0]) : Number(v));
/** The drawn labels that name a component (they contain "·"), with their position. */
const componentTexts = (p: ReturnType<typeof params>) =>
  walk(renderWidgetTreeAt(freeBodyForces, p, {}, 343, 236) as Node)
    .filter((n) => n.type === 'RNSVGText' && textOf(n).includes('·'))
    .map((n) => ({ text: textOf(n), x: first(n.props.x), y: first(n.props.y) }));
/** The component label sitting nearest to a point: the label OF that arrow. */
const nearest = (texts: { text: string; x: number; y: number }[], x: number, y: number) =>
  [...texts].sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y))[0].text;

describe('componentLabelFns', () => {
  test('weight on an incline: sinθ along the slope, cosθ across it', () => {
    expect(componentLabelFns('incline', 270, 30)).toEqual({ along: 'sinθ', perp: 'cosθ' });
    expect(componentLabelFns('incline', 90, 25)).toEqual({ along: 'sinθ', perp: 'cosθ' });
  });

  test('any other force on an incline says its own angle off the slope', () => {
    // 100° against an axis at 30°: 70° apart.
    expect(componentLabelFns('incline', 100, 30)).toEqual({ along: 'cos 70°', perp: 'sin 70°' });
    // The force's line, not its sense: 280° against 30° is the same 70° line pair mod 180.
    expect(componentLabelFns('incline', 280, 30)).toEqual({ along: 'cos 70°', perp: 'sin 70°' });
  });

  test('a pendulum (string) keeps cosθ along the string and sinθ across it', () => {
    expect(componentLabelFns('string', 250, 90)).toEqual({ along: 'cosθ', perp: 'sinθ' });
  });
});

describe('the labels as drawn', () => {
  const lay = (p: ReturnType<typeof params>) => layoutFbd(p, 343, 236)!.components!;
  const len = (a: { x1: number; y1: number; x2: number; y2: number }) => Math.hypot(a.x2 - a.x1, a.y2 - a.y1);

  test('mg on a 30° incline: mg·sinθ labels the arrow ALONG the slope, mg·cosθ the one across', () => {
    const p = params({
      context: 'incline', incline_angle_deg: 30, components_of: 0,
      forces: [
        { label: 'mg', angle_deg: 270, magnitude_rel: 1 },
        { label: 'N', angle_deg: 120, magnitude_rel: 0.87 },
        { label: 'f', angle_deg: 30, magnitude_rel: 0.5 },
      ],
    });
    const { along, perp } = lay(p);
    // The geometry under the labels: along the slope is the SHORT component of
    // a weight on a 30° incline (tan 30° of the long one).
    expect(len(along) / len(perp)).toBeCloseTo(Math.tan((30 * Math.PI) / 180), 2);
    const texts = componentTexts(p);
    expect(texts).toHaveLength(2);
    expect(nearest(texts, along.x2, along.y2)).toBe('mg·sinθ');
    expect(nearest(texts, perp.x2, perp.y2)).toBe('mg·cosθ');
  });

  test('a pendulum picture is unchanged: mg·cosθ on the string, mg·sinθ across', () => {
    const p = params({
      body: 'sphere', context: 'string', components_of: 0,
      forces: [
        { label: 'mg', angle_deg: 250, magnitude_rel: 1 },
        { label: 'T', angle_deg: 90, magnitude_rel: 0.94 },
      ],
    });
    const { along, perp } = lay(p);
    const texts = componentTexts(p);
    expect(nearest(texts, along.x2, along.y2)).toBe('mg·cosθ');
    expect(nearest(texts, perp.x2, perp.y2)).toBe('mg·sinθ');
  });
});

describe('the arrowheads of the components', () => {
  /** Where the arrow really goes, anticlockwise from +x (screen y is down). */
  const runDeg = (a: { x1: number; y1: number; x2: number; y2: number }) =>
    ((Math.atan2(a.y1 - a.y2, a.x2 - a.x1) * 180) / Math.PI + 360) % 360;
  const diff = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

  test('every component head points the way its arrow runs, including against the axis', () => {
    // mg on a 30° incline: BOTH components run against their axes (down the
    // slope, into it), which is what turned the heads back toward the block.
    for (const incline of [20, 30, 40]) {
      const p = params({
        context: 'incline', incline_angle_deg: incline, components_of: 0,
        forces: [
          { label: 'mg', angle_deg: 270, magnitude_rel: 1 },
          { label: 'N', angle_deg: 120, magnitude_rel: 0.87 },
          { label: 'f', angle_deg: 30, magnitude_rel: 0.5 },
        ],
      });
      const { along, perp } = layoutFbd(p, 343, 236)!.components!;
      for (const a of [along, perp]) {
        expect(a.head_deg).toBeDefined();
        expect(diff(a.head_deg!, runDeg(a))).toBeLessThan(0.5);
      }
    }
  });

  test('and a component that runs WITH its axis is unchanged', () => {
    const p = params({
      context: 'incline', incline_angle_deg: 30, components_of: 0,
      forces: [{ label: 'F', angle_deg: 60, magnitude_rel: 1 }, { label: 'N', angle_deg: 120, magnitude_rel: 0.5 }],
    });
    const { along } = layoutFbd(p, 343, 236)!.components!;
    expect(diff(along.head_deg!, along.angle_deg)).toBeLessThan(0.5);
  });
});
