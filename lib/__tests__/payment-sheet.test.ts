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

