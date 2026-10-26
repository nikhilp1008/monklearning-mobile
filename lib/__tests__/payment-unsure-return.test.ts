/**
 * Back from a UPI app with no success, 2026-10-26 release review.
 *
 * The pass page looked at the order for 3 seconds after a UPI app came back
 * without a success, then said "Payment cancelled. Nothing was charged." A
 * student who approved in PhonePe and returned before the bank answered could
 * believe it and pay again on a new order, and both payments would go through
 * (the webhook came 20s after the order in the 23 Oct Play Store test).
 *
 * Pinned here: the check after a UPI app looks for about 20 seconds and stops
 * early on a failed order; a result the server could not confirm is "unsure"
 * and the banner says so; the pass page keeps asking for the pass after an
 * unsure result; and a second tap in the same frame is ignored instead of
 * flashing "Payment not made" over a live payment.
 */
import fs from 'fs';
import path from 'path';

jest.mock('@/lib/supabase', () => ({ supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } } }));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn(), ApiError: class ApiError extends Error {} }));
jest.mock('react-native-webview', () => ({ WebView: () => null }));

import { orderPaidSoon } from '@/components/paywall/razorpay-checkout';

const read = (rel: string) => fs.readFileSync(path.join(__dirname, '../..', rel), 'utf8');

describe('orderPaidSoon', () => {
  test('paid as soon as the server says so', async () => {
    const answers = [{ paid: false, status: 'created' }, { paid: true, status: 'paid' }];
    const ask = jest.fn(async () => answers.shift()!);
    expect(await orderPaidSoon('o1', 10, 1, ask)).toBe('paid');
    expect(ask).toHaveBeenCalledTimes(2);
  });

  test('failed as soon as the server says the payment failed, without using every look', async () => {
    const ask = jest.fn(async () => ({ paid: false, status: 'failed' }));
    expect(await orderPaidSoon('o1', 10, 1, ask)).toBe('failed');
    expect(ask).toHaveBeenCalledTimes(1);
  });

  test('unknown after every look said neither, and errors are just another look', async () => {
    let n = 0;
    const ask = jest.fn(async () => {
      n += 1;
      if (n % 2) throw new Error('offline');
      return { paid: false, status: 'attempted' };
    });
    expect(await orderPaidSoon('o1', 6, 1, ask)).toBe('unknown');
    expect(ask).toHaveBeenCalledTimes(6);
  });
});

describe('pay() after a UPI app', () => {
  const src = read('components/paywall/razorpay-checkout.tsx');

  test('looks for about 20 seconds, not 3', () => {
    const looks = Number(src.match(/const UPI_EXIT_LOOKS = (\d+)/)?.[1]);
    const gap = Number(src.match(/const UPI_EXIT_GAP_MS = (\d+)/)?.[1]);
    expect(looks * gap).toBeGreaterThanOrEqual(18000);
    expect(src).toMatch(/upiApp\s*\?\s*await orderPaidSoon\(order\.order_id, UPI_EXIT_LOOKS, UPI_EXIT_GAP_MS\)/);
  });

  test('an answer the server never gave is unsure, and only after a UPI app', () => {
    expect(src).toContain("const unsure = !!upiApp && outcome === 'unknown';");
    expect(src).toContain("return { status: 'cancelled', unsure };");
  });

  test('a second purchase while one runs is busy, not cancelled', () => {
    expect(src).toContain("if (inFlight.current) return { status: 'busy' };");
  });
});

describe('the banner', () => {
  const src = read('components/paywall/payment-notice.tsx');

  test('an unsure payment never says nothing was charged', () => {
    expect(src).toContain('bold="Payment not confirmed yet."');
    expect(src).toContain("Don't pay again.");
  });
});

describe('the pass page', () => {
  const src = read('app/(onboarding)/pass.tsx');

  test('a second tap in the same frame is ignored (the ref is set on the tap)', () => {
    expect(src).toContain('if (!active || paying || payingNow.current) return;');
  });

  test('an unsure result shows the unsure banner and keeps asking for the pass', () => {
    expect(src).toContain("setNotPaid(result.unsure ? 'unsure' : 'sure');");
    expect(src).toContain('if (result.unsure) watchLate();');
    expect(src).toContain("unsure={notPaid === 'unsure'}");
  });

  test('the late watch stops on leaving, after its time, and when the page goes', () => {
    expect(src).toMatch(/Date\.now\(\) > until \|\| leaving\.current/);
    expect(src).toContain('if (lateWatch.current) clearInterval(lateWatch.current);');
  });
});

describe('the in-app privacy policy matches the app', () => {
  const src = read('app/privacy-policy.tsx');

  test('no password, no crash logs, no voice-delete control', () => {
    expect(src).not.toMatch(/password/i);
    expect(src).not.toMatch(/crash/i);
    expect(src).not.toContain('Voice recordings can be deleted');
  });

  test('photos kept up to 180 days after deletion, as the website says', () => {
    expect(src).toContain('kept for up to 180 days and then erased');
  });
});
