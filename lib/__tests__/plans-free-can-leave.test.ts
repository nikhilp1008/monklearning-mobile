/**
 * A free student can leave the plans page, on either phone, from the first
 * frame. A free student reaches it by choice from Practice, Mock tests, Snap
 * and Ask, so for them it is a page to look at, not the gate.
 */
import fs from 'fs';
import path from 'path';

const src = fs.readFileSync(path.join(__dirname, '../../app/plans.tsx'), 'utf8');
const page = fs.readFileSync(path.join(__dirname, '../../components/paywall/plans-page.tsx'), 'utf8');

it('offers the way back to a free student on both phones, and only after a pass ended', () => {
  // A student who never had a pass starts with one: no way past free.
  expect(src).toContain("const canLeaveFree = status?.state === 'expired' && (tier === 'free' || !!status.free);");
  // 19 Nov 2026: it was iPhone only, so an Android free student had no button.
  expect(src).not.toContain("Platform.OS === 'ios' && status?.state === 'expired'");
  expect(src).toContain("onClose={context === 'extend' ? () => router.back() : canLeaveFree ? leave : undefined}");
});

it('does not wait for the server: what the app already knows is enough', () => {
  expect(src).toContain('const { starterUsed, tier } = usePlan();');
});

it('Android Back is the same way back, not a way out of the app', () => {
  expect(src).toMatch(/if \(gated\.current !== false && canLeaveFree\) \{\s*leave\(\);\s*return true;/);
});

it('the button sits outside the scroll, so it is there with the page and stays put', () => {
  expect(page.indexOf('<BackButton onPress={props.onClose} />')).toBeGreaterThan(-1);
  // `ref={scroll}` is the page's one ScrollView.
  expect(page.indexOf('<BackButton onPress={props.onClose} />')).toBeLessThan(page.indexOf('ref={scroll}'));
});

it('leaving works with or without a screen behind it', () => {
  expect(src).toContain("if (router.canGoBack()) router.back();\n    else router.replace('/');");
});
