/**
 * The payment flow after the Play Store test, 2026-10-23.
 *
 * What the production data showed for a Rs 1 payment: the server heard about it only
 * from Razorpay's webhook, 20s after the order. Neither the redirect nor the page's
 * own handler reported it (a UPI payment ends in another app), so the app learned of
 * it only when the sheet was closed, and then looked just twice, 1.5s apart. Plus the
 * pass check (1.5-3s, 17s at worst) ran BEFORE the sheet could open.
 *
 * What is pinned here: the sheet watches the server for THIS order and closes by
 * itself; UPI intent is switched on; the check after close is the cheap one; the pass
 * check no longer delays the sheet; and an app-focus event cannot send the student
 * Home underneath a purchase that is running.
 */
import fs from 'fs';
import path from 'path';

jest.mock('@/lib/supabase', () => ({ supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } } }));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn(), ApiError: class ApiError extends Error {} }));
jest.mock('react-native-webview', () => ({ WebView: () => null }));

import { apiFetch } from '@/lib/api';
import { watchOrder } from '@/components/paywall/razorpay-checkout';
import { checkoutHtml, checkoutShellHtml, getOrderState, openCheckoutScript, type Order } from '@/lib/payments';

const read = (rel: string) => fs.readFileSync(path.join(__dirname, '../..', rel), 'utf8');
const ORDER: Order = {
  order_id: 'order_ABC', amount: 100, currency: 'INR', key_id: 'rzp_live_x', kind: 'day',
  callback_url: 'https://api.example.com/payments/callback',
};

describe('UPI intent is switched on in the checkout page', () => {
  test('the options carry webview_intent: true', () => {
    expect(checkoutHtml(ORDER, { description: '1 day pass' })).toContain('"webview_intent":true');
  });
  test('the redirect and callback it already had are still there', () => {
    const html = checkoutHtml(ORDER, { description: 'x' });
    expect(html).toContain('"redirect":true');
    expect(html).toContain('"callback_url":"https://api.example.com/payments/callback"');
  });
});

describe('the cheap order check', () => {
  test('asks for one order, by its id, escaped', async () => {
    (apiFetch as jest.Mock).mockResolvedValue({ status: 'paid', paid: true });
    expect(await getOrderState('order_A/B?c')).toEqual({ status: 'paid', paid: true });
    expect((apiFetch as jest.Mock).mock.calls[0][0]).toBe('/payments/orders/order_A%2FB%3Fc');
  });
});

describe('watchOrder', () => {
  const FAST = { first: 5, every: 5, max: 1000 };
  const tick = (ms: number) => new Promise((r) => setTimeout(r, ms));

  test('calls back once, when the server first says paid, then stops asking', async () => {
    const answers = [{ paid: false }, { paid: false }, { paid: true }, { paid: true }];
    const ask = jest.fn(async () => answers.shift()!);
    const onPaid = jest.fn();
    watchOrder('o1', onPaid, ask, FAST);
    await tick(120);
    expect(onPaid).toHaveBeenCalledTimes(1);
    expect(ask).toHaveBeenCalledTimes(3);
  });

  test('keeps asking through errors: no signal for a moment is not unpaid', async () => {
    const ask = jest.fn().mockRejectedValueOnce(new Error('offline')).mockResolvedValue({ paid: true });
    const onPaid = jest.fn();
    watchOrder('o1', onPaid, ask, FAST);
    await tick(120);
    expect(onPaid).toHaveBeenCalledTimes(1);
  });

  test('stopping it stops the calls and the callback', async () => {
    const ask = jest.fn(async () => ({ paid: false }));
    const onPaid = jest.fn();
    const stop = watchOrder('o1', onPaid, ask, FAST);
    await tick(30);
    stop();
    const seen = ask.mock.calls.length;
    await tick(60);
    expect(ask.mock.calls.length).toBeLessThanOrEqual(seen + 1);
    expect(onPaid).not.toHaveBeenCalled();
  });

  test('gives up by itself after its time limit', async () => {
    const ask = jest.fn(async () => ({ paid: false }));
    watchOrder('o1', jest.fn(), ask, { first: 2, every: 2, max: 40 });
    await tick(150);
    const seen = ask.mock.calls.length;
    await tick(60);
    expect(ask.mock.calls.length).toBe(seen);
  });

  test('a paid answer that arrives after stop is not delivered', async () => {
    let release!: (v: { paid: boolean }) => void;
    const ask = jest.fn(() => new Promise<{ paid: boolean }>((r) => (release = r)));
    const onPaid = jest.fn();
    const stop = watchOrder('o1', onPaid, ask, FAST);
    await tick(30);
    stop();
    release({ paid: true });
    await tick(30);
    expect(onPaid).not.toHaveBeenCalled();
  });
});

describe('pay()', () => {
  const src = read('components/paywall/razorpay-checkout.tsx');
  const pay = src.slice(src.indexOf('const pay = useCallback'), src.indexOf('const checkout = open'));

  test('the pass check no longer holds the sheet back', () => {
    expect(pay).toContain('const beforeRead = passStatus(');
    expect(pay.indexOf('const beforeRead')).toBeLessThan(pay.indexOf('createOrder('));
    // The sheet is opened (no order yet) before the order is asked for.
    expect(pay.indexOf('setOpen({ order: null')).toBeGreaterThan(-1);
    expect(pay.indexOf('setOpen({ order: null')).toBeLessThan(pay.indexOf('createOrder('));
    expect(pay).not.toMatch(/const before = endOf\(await passStatus/);
    expect(pay.indexOf('createOrder(')).toBeLessThan(pay.indexOf('await beforeRead'));
  });

  test('the server is watched for this order while the sheet is open, and the sheet closes on paid', () => {
    expect(pay).toMatch(/watchOrder\(order\.order_id/);
    expect(pay).toContain("{ type: 'settled' }");
    expect(pay.indexOf('stopWatching();')).toBeGreaterThan(pay.indexOf("await new Promise<CheckoutEvent | Closed | Settled>"));
  });

  test('a closed sheet is checked with the cheap order read, not two slow /pass calls', () => {
    expect(pay).toContain('orderPaidSoon(order.order_id)');
    expect(pay).not.toContain('CHECK_ON_EXIT');
  });
});

describe('the plans screen', () => {
  const src = read('app/plans.tsx');
  test('an app-focus check never runs while a purchase is running', () => {
    const start = src.indexOf('const recheck = useCallback');
    const recheck = src.slice(start, src.indexOf('useFocusEffect(', start));
    expect(recheck).toContain('payingNow.current');
    expect(recheck).toMatch(/if \(gated\.current !== true \|\| done \|\| payingNow\.current\) return;/);
  });
  test('the purchase flag is set on the tap and always cleared', () => {
    expect(src).toContain('payingNow.current = true;');
    expect(src).toMatch(/finally \{\s*payingNow\.current = false;/);
  });
});

describe('the sheet opens before the order exists', () => {
  it('the shell page loads the script and opens nothing by itself', () => {
    const html = checkoutShellHtml();
    expect(html).toContain('checkout.razorpay.com/v1/checkout.js');
    expect(html).toContain('window.__openCheckout = function');
    // The only call to it is the definition; nothing opens until the app says so.
    expect(html.match(/__openCheckout\(/g)).toBeNull();
  });

  it('opening it for an order passes that order, the amount and the email', () => {
    const js = openCheckoutScript(ORDER, { description: '1 day pass', email: 'a@b.com' });
    expect(js.startsWith('window.__openCheckout({')).toBe(true);
    expect(js).toContain(`"order_id":"${ORDER.order_id}"`);
    expect(js).toContain(`"amount":${ORDER.amount}`);
    expect(js).toContain('"prefill":{"email":"a@b.com"}');
    expect(js).toContain('"webview_intent":true');
  });

  it('no email, no prefill; and a hostile description cannot end the script', () => {
    expect(openCheckoutScript(ORDER, { description: 'x' })).not.toContain('prefill');
    expect(openCheckoutScript(ORDER, { description: '</script><script>alert(1)</script>' })).not.toContain('</script>');
  });
});
