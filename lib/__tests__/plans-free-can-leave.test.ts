/**
 * A free student on iPhone can leave the plans page. It has no swipe back, and
 * a free student reaches it by choice from Practice, Mock tests, Snap and Ask.
 */
import fs from 'fs';
import path from 'path';

const src = fs.readFileSync(path.join(__dirname, '../../app/plans.tsx'), 'utf8');

it('offers a close button to a free student on iPhone only', () => {
  expect(src).toContain("Platform.OS === 'ios' && (status?.state === 'none' || status?.state === 'expired') && !!status.free");
  expect(src).toContain("onClose={context === 'extend' ? () => router.back() : canLeaveFree ? leave : undefined}");
});

it('leaving works with or without a screen behind it', () => {
  expect(src).toContain("if (router.canGoBack()) router.back();\n    else router.replace('/');");
});
