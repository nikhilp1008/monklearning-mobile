import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';

import type { CheckoutEvent, Order } from '@/lib/payments';

/**
 * UPI APPS ON THE PASS PAGE (design B, picked by Nikhil 26 Oct 2026).
 *
 * The student taps PhonePe, GPay or Paytm on OUR page and lands straight in that
 * app with the order filled in: no Razorpay screen and no second Pay button.
 * Razorpay's Custom UI kit (react-native-customui) lists the UPI apps on the
 * phone and opens the chosen one with the order; the result comes back to us.
 * Cards, netbanking and every other way still go through Razorpay's own checkout.
 *
 * The kit is native, so it exists only in a build that includes it. Everywhere
 * else (an older build, iPhone, tests) this module says "no apps" and the page
 * keeps its ordinary Pay button.
 */

export type UpiApp = { name: string; packageName: string; iconBase64: string | null };

type Kit = {
  getAppsWhichSupportUPI: () => Promise<{ data?: { appName: string; packageName: string; iconBase64?: string }[] }>;
  open: (options: Record<string, unknown>) => Promise<Record<string, string>>;
};

let kit: Kit | null | undefined;
function getKit(): Kit | null {
  if (kit !== undefined) return kit;
  kit = null;
  // Checked before require: requiring a JS wrapper whose native half is missing
  // still shows an "Uncaught Error" in development.
  if (Platform.OS !== 'android' || !NativeModules.RazorpayCustomui) return kit;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    kit = require('react-native-customui').default as Kit;
  } catch {
    kit = null;
  }
  return kit;
}

export function upiAppsAvailable(): boolean {
  return getKit() !== null;
}

/** Razorpay's recommended order, then the rest as the phone lists them. */
const PREFERRED = [
  'com.google.android.apps.nbu.paisa.user',
  'com.phonepe.app',
  'net.one97.paytm',
  'in.org.npci.upiapp',
  'com.dreamplug.androidapp',
];
/** Shorter names for the rows; the phone's own label otherwise. */
const SHORT: Record<string, string> = {
  'com.google.android.apps.nbu.paisa.user': 'GPay',
  'net.one97.paytm': 'Paytm',
  'in.org.npci.upiapp': 'BHIM',
  'com.dreamplug.androidapp': 'CRED',
};

const LAST_KEY = 'pay.lastUpiApp';

export async function lastUsedUpiApp(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(LAST_KEY);
  } catch {
    return null;
  }
}

export async function rememberUpiApp(packageName: string): Promise<void> {
  try {
    await AsyncStorage.setItem(LAST_KEY, packageName);
  } catch {
    // only a convenience
  }
}

/** Last used first, then Razorpay's order, then whatever else the phone has. */
export function orderUpiApps(apps: UpiApp[], last: string | null): UpiApp[] {
  const rank = (p: string) => (p === last ? -1 : PREFERRED.indexOf(p) === -1 ? PREFERRED.length : PREFERRED.indexOf(p));
  return [...apps].sort((a, b) => rank(a.packageName) - rank(b.packageName));
}

/** The UPI apps installed on this phone, or none (no kit, or it never answered). */
export async function installedUpiApps(timeoutMs = 3000): Promise<UpiApp[]> {
  const k = getKit();
  if (!k) return [];
  const listed = k
    .getAppsWhichSupportUPI()
    .then((r) =>
      (r?.data ?? []).map((a) => ({
        name: SHORT[a.packageName] ?? a.appName,
        packageName: a.packageName,
        iconBase64: a.iconBase64 ?? null,
      }))
    )
    .catch(() => [] as UpiApp[]);
  const timeout = new Promise<UpiApp[]>((resolve) => setTimeout(() => resolve([]), timeoutMs));
  return Promise.race([listed, timeout]);
}

/**
 * Opens the chosen UPI app for this order and resolves with what happened, in
 * the same shape the checkout page reports, so the rest of `pay` is shared.
 */
export async function payInUpiApp(
  order: Order,
  app: string,
  who: { email: string | null; contact: string | null; description: string }
): Promise<CheckoutEvent> {
  const k = getKit();
  if (!k) return { type: 'error', message: 'This build cannot open UPI apps.' };
  try {
    const r = await k.open({
      key_id: order.key_id,
      order_id: order.order_id,
      amount: String(order.amount),
      currency: order.currency,
      description: who.description,
      ...(who.email ? { email: who.email } : {}),
      ...(who.contact ? { contact: who.contact } : {}),
      method: 'upi',
      '_[flow]': 'intent',
      upi_app_package_name: app,
    });
    if (r?.razorpay_payment_id && r?.razorpay_signature) {
      return {
        type: 'success',
        razorpay_order_id: r.razorpay_order_id ?? order.order_id,
        razorpay_payment_id: r.razorpay_payment_id,
        razorpay_signature: r.razorpay_signature,
      };
    }
    return { type: 'failed', description: 'Payment cancelled.', final: true };
  } catch (err) {
    const description =
      (err as { description?: string } | null)?.description ?? 'Payment cancelled.';
    return { type: 'failed', description, final: true };
  }
}
