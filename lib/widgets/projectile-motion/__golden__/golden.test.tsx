/**
 * Compares a fresh render against the frozen tree. Diverging means either a
 * real regression or a legitimate dependency-driven change (a
 * react-native-svg/Reanimated bump) — either way it must be a deliberate,
 * reviewed decision: `npm run regenerate-golden`, review the diff, THEN
 * commit. Never regenerate blind. See ../../__generate__/golden.gen.ts and
 * docs/render-verification.md.
 */
import { REGISTRY } from '../../registry';
import { renderWidgetTree } from '../../__tests__/test-utils';
import golden from './45deg-22ms-earth.json';

test('projectile_motion@1 at defaults matches its golden tree', () => {
  const mod = REGISTRY.projectile_motion!;
  const tree = renderWidgetTree(mod, mod.defaults, {
    launch_angle_deg: mod.defaults.launch_angle_deg,
  });
  expect(tree).toEqual(golden);
});
