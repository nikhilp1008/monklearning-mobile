/**
 * ONE PAGE FOR EVERY WAIT AFTER A PAYMENT (19 Nov 2026).
 *
 * There were three: the confirming cover, a spinner in one row of the price
 * list (back from a UPI app, up to 20 seconds), and a system pop-up over the
 * price list with Pay live under it (a slow bank). A student who has just paid
 * sees the confirming page for all of it now, and only its words change.
 */
import fs from 'fs';
import path from 'path';

const root = (p: string) => fs.readFileSync(path.join(__dirname, '../..', p), 'utf8');
const checkout = root('components/paywall/razorpay-checkout.tsx');
const page = root('components/paywall/payment-confirming.tsx');
const onboarding = root('app/(onboarding)/pass.tsx');
const plans = root('app/plans.tsx');

describe('back from a UPI app', () => {
  it('the confirming page is up while the server is asked, not a spinner on the price list', () => {
    expect(checkout).toContain("if (upiApp) setConfirming('checking');");
    // Before the looks start, not after them.
    expect(checkout.indexOf("if (upiApp) setConfirming('checking');")).toBeLessThan(checkout.indexOf('const outcome = await Promise.race([look(), saidNotPaid]);'));
  });

  it("the student can say they didn't pay, and that is unsure, never 'nothing was charged'", () => {
    expect(checkout).toContain("stopLooking.current = () => resolve('unknown');");
    expect(checkout).toContain("const unsure = !!upiApp && outcome === 'unknown';");
    expect(page).toContain("label: \"I didn't pay\"");
  });

  it('never says Paid before the money is known to have moved', () => {
    expect(page).toContain("mode === 'checking' ? 'Amount' : 'Paid'");
  });
});

describe('a bank that is slow to confirm', () => {
  it('is the same page, not a pop-up, on both price pages', () => {
    expect(onboarding).not.toContain("'Payment received'");
    expect(plans).not.toContain("'Payment received'");
    expect(onboarding).toMatch(/result\.status === 'pending'\) \{[\s\S]*?setLate\(true\);\s*watchLate\(\);/);
    expect(plans).toMatch(/setPending\(true\);\s*setLate\(true\);/);
  });

  it('the page keeps asking and opens the receipt itself', () => {
    expect(plans).toMatch(/if \(!late\) return;[\s\S]*?setDone\(\{ kind: buying\.kind/);
    // The gate's own check must not send the student Home from under the page.
    expect(plans).toContain('if (lateNow.current) return;');
  });

  it('closing it leaves the "do not pay again" banner, not a clean price list', () => {
    expect(onboarding).toMatch(/onClose=\{\(\) => \{[\s\S]*?setLate\(false\);\s*setNotPaid\('unsure'\);/);
    expect(plans).toMatch(/onClose=\{\(\) => \{[\s\S]*?setLate\(false\);\s*setNotPaid\('unsure'\);/);
  });
});

describe('the page itself', () => {
  it('says when the wait is running long instead of repeating "a few seconds"', () => {
    expect(page).toContain('const SLOW_AFTER_MS = 8000;');
    expect(page).toContain('Banks can take up to a minute.');
  });

  it("Android's Back is held on the onboarding price page while a payment runs", () => {
    expect(onboarding).toContain('useAndroidBack(() => paying || !!confirming || late);');
  });
});
