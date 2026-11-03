import { installedUpiApps, orderUpiApps, payInUpiApp, upiAppsAvailable, type UpiApp } from '@/lib/upi-apps';

const app = (packageName: string, name = packageName): UpiApp => ({ name, packageName, iconBase64: null });
const GPAY = 'com.google.android.apps.nbu.paisa.user';
const PHONEPE = 'com.phonepe.app';
const PAYTM = 'net.one97.paytm';
const OTHER = 'com.example.bankupi';

describe('orderUpiApps', () => {
  test("Razorpay's order when nothing was used before: GPay, PhonePe, Paytm, then the rest", () => {
    const ordered = orderUpiApps([app(OTHER), app(PAYTM), app(PHONEPE), app(GPAY)], null);
    expect(ordered.map((a) => a.packageName)).toEqual([GPAY, PHONEPE, PAYTM, OTHER]);
  });

  test('the app used last comes first, even one Razorpay does not rank', () => {
    expect(orderUpiApps([app(GPAY), app(PHONEPE)], PHONEPE)[0].packageName).toBe(PHONEPE);
    expect(orderUpiApps([app(GPAY), app(OTHER)], OTHER)[0].packageName).toBe(OTHER);
  });

  test('a last-used app that is no longer installed changes nothing', () => {
    expect(orderUpiApps([app(PAYTM), app(GPAY)], PHONEPE).map((a) => a.packageName)).toEqual([GPAY, PAYTM]);
  });
});

describe('without the native kit (an older build, tests)', () => {
  test('there are no UPI apps, so the page keeps its Pay button', async () => {
    expect(upiAppsAvailable()).toBe(false);
    await expect(installedUpiApps()).resolves.toEqual([]);
  });

  test('paying in an app is an error, never a success', async () => {
    const order = { order_id: 'o1', amount: 7900, currency: 'INR', key_id: 'k' } as never;
    const e = await payInUpiApp(order, GPAY, { email: null, contact: null, description: '1 day pass' });
    expect(e.type).toBe('error');
  });
});
