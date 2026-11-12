import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * The payment sheet must never leave a purchase waiting on a sheet that is gone.
 *
 * Found on a simulator, 2026-10-17: the sheet was open, a deep link arrived, iOS
 * took the sheet down, and nothing told the flow - `pay()` never resolved and the
 * Pay button stayed disabled for good. Read from source, as the repo does for
 * native-only behaviour a unit test cannot drive.
 */
const SRC = readFileSync(join(__dirname, '../../components/paywall/razorpay-checkout.tsx'), 'utf8');

describe('a sheet that disappears does not strand the purchase', () => {
  test('iOS telling us the sheet is gone ends the purchase', () => {
    expect(SRC).toMatch(/<Modal[\s\S]*?onDismiss=\{leave\}[\s\S]*?>/);
  });

  test('the Android back button ends it too', () => {
    expect(SRC).toMatch(/<Modal[\s\S]*?onRequestClose=\{leave\}[\s\S]*?>/);
  });

  test('the screen going away with the sheet open resolves it as closed', () => {
    expect(SRC).toMatch(/useEffect\(\s*\(\) => \(\) => \{\s*resolveSheet\.current\?\.\(\{ type: 'closed' \}\)/);
  });

  test('leaving after a decline reports the decline, not a plain cancel', () => {
    expect(SRC).toMatch(/lastFailure\.current \? \{ type: 'failed'/);
  });
});

describe('the callback page is the last page of an attempt', () => {
  test('a final failure ends the sheet at once instead of waiting for Close', () => {
    // 2026-10-19: a callback that could not verify its signature left the sheet on
    // "Finishing up..." with only Close to get out.
    expect(SRC).toMatch(/if \(msg\.final\) return onEvent\(msg\);/);
  });

  test('a decline inside Razorpay\'s own sheet is still only remembered, so the student can retry', () => {
    expect(SRC).toMatch(/lastFailure\.current = msg\.description;\s*return;/);
  });
});


/**
 * PLAY BILLING (user choice billing, India): the sheet no longer opens on the tap.
 * Google's choice screen opens first; Razorpay's sheet opens only if the student
 * picks Razorpay there. Pinned from source: `startCheckout` is the one entry point.
 */
describe('Razorpay opens only after the student picks it on Google\'s screen', () => {
  const startOf = SRC.indexOf('const startCheckout = useCallback');
  const start = SRC.slice(startOf, SRC.indexOf('// Verify a Play purchase that was paid for', startOf));

  test('startCheckout asks Google before it does anything that could open Razorpay', () => {
    expect(startOf).toBeGreaterThan(-1);
    expect(start.indexOf('chooseHowToPay(kind, accountId)')).toBeGreaterThan(-1);
    expect(start.indexOf('chooseHowToPay(')).toBeLessThan(start.indexOf('await pay('));
  });

  test('startCheckout itself never opens the sheet or makes an order: only pay() does, and only for the Razorpay pick', () => {
    expect(start).not.toContain('setOpen(');
    expect(start).not.toContain('createOrder(');
    expect(start).toMatch(/if \(choice\.type === 'razorpay'\) \{[\s\S]*?await pay\(kind, \{[\s\S]*?externalTransactionToken: choice\.externalTransactionToken/);
    expect((SRC.match(/await pay\(/g) ?? []).length).toBe(1);
  });

  test('the order is made with Google\'s token, before the sheet is handed the order', () => {
    expect(SRC).toContain('createOrder(kind, opts.offer, opts.promo, opts.externalTransactionToken)');
  });

  test('a cancelled, failed or pending Google screen never reaches Razorpay or the server\'s order', () => {
    expect(start).toMatch(/choice\.type === 'cancelled'\) return \{ status: 'cancelled' \}/);
    expect(start).toMatch(/choice\.type === 'failed'\) return \{ status: 'failed'/);
    expect(start).toMatch(/choice\.type === 'pending'\) return \{ status: 'pending' \}/);
  });

  test('a Play purchase is finished only after the server confirmed it', () => {
    expect(start).toContain('if (verified) await finishPlayPurchase(choice.purchase);');
    expect(start.indexOf('verifyPlayPurchase(')).toBeLessThan(start.indexOf('finishPlayPurchase('));
  });

  test('one purchase at a time across Google\'s screens and the sheet', () => {
    expect(start).toContain("if (choosing.current || inFlight.current) return { status: 'busy' };");
    expect(start).toMatch(/finally \{\s*choosing\.current = false;/);
  });

  test('the screen going away with Google\'s screen open stops the wait', () => {
    expect(SRC).toMatch(/if \(choosing\.current\) cancelPlayChoice\(\);/);
  });

  test('payments stay behind the build flag', () => {
    expect(start).toContain("if (!PAYMENTS_ON_THIS_DEVICE) throw new Error('Payments are not available on this device.');");
  });

  test('the hook hands screens startCheckout, not pay', () => {
    expect(SRC).toContain('return { startCheckout, checkout, confirming };');
  });
});
