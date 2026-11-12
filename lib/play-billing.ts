import { Platform } from 'react-native';
import * as Crypto from 'expo-crypto';
import type { Purchase } from 'expo-iap';

import { ApiError, apiFetch } from '@/lib/api';
import type { PassKind } from '@/lib/pass';
import { supabase } from '@/lib/supabase';

/**
 * GOOGLE PLAY BILLING, BESIDE RAZORPAY (India user choice billing).
 *
 * Design and decisions: billing/USER_CHOICE_BILLING_PLAN.md. In short, on Android
 * every pass purchase opens GOOGLE'S choice screen first and the student picks:
 *
 *   Google Play  -> `purchaseUpdated` hands us a purchase token. The server checks it
 *                   with Google (POST /payments/play/verify) and grants the pass.
 *                   Only then is the purchase finished (consumed).
 *   Razorpay     -> `userChoiceBilling` hands us an `externalTransactionToken`. The
 *                   caller sends it with POST /payments/orders (so the server can
 *                   report the sale to Google within 24 hours) and only THEN opens
 *                   the Razorpay sheet. Nothing here touches Razorpay.
 *
 * This file is the Google side only: no React, no screens. The screen-facing
 * `startCheckout` lives in components/paywall/razorpay-checkout.tsx (it owns the
 * sheet and the confirming page) and calls into here.
 *
 * `expo-iap` is required lazily, never imported at the top: it is a native module,
 * iOS and every test would otherwise load it for nothing, and a build with
 * payments off never reaches it.
 *
 * NOTHING IN THIS FILE HAS RUN ON A DEVICE YET (it needs a build on the internal
 * track and Play Console products). Treat the first licence-tester purchase as the
 * real test.
 */

type Iap = typeof import('expo-iap');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const iap = (): Iap => require('expo-iap') as Iap;

/** Play Console product ids, one per pass on sale. Legacy kinds are not sold. */
export const PLAY_PRODUCT_IDS: Partial<Record<PassKind, string>> = {
  day: 'pass_day',
  week: 'pass_week',
  pro_1m: 'pass_pro_1m',
  max_1m: 'pass_max_1m',
};

export const PLAY_SKUS: string[] = Object.values(PLAY_PRODUCT_IDS) as string[];

export const playProductId = (kind: PassKind): string | null => PLAY_PRODUCT_IDS[kind] ?? null;

/** Google's own sentence is not shown to students; this one is. */
export class PlayBillingUnavailableError extends Error {
  constructor(message = 'Google Play purchases are not available right now. Please try again in a little while. Nothing was charged.') {
    super(message);
    this.name = 'PlayBillingUnavailableError';
  }
}

/**
 * What `obfuscatedAccountId` carries: the lowercase hex SHA-256 of the signed-in
 * user's id (the Supabase user uuid, lowercase, as a string). 64 characters, which
 * is Google's limit. The API recomputes the same hash from the signed-in user and
 * refuses a purchase whose account id differs. Stable across devices and sessions,
 * and it does not put the raw user id in Google's records.
 */
export async function obfuscatedAccountIdFor(userId: string): Promise<string> {
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, userId.trim().toLowerCase());
}

/** The signed-in student's `obfuscatedAccountId`; throws if nobody is signed in. */
export async function currentPlayAccountId(): Promise<string> {
  const { data } = await supabase.auth.getSession();
  const id = data.session?.user?.id;
  if (!id) throw new PlayBillingUnavailableError('Please sign in again to pay.');
  return obfuscatedAccountIdFor(id);
}

// ─── Connection and products ────────────────────────────────────────────────

let connecting: Promise<void> | null = null;
let productsRead: Promise<Map<string, { price: number | null }>> | null = null;

/**
 * Connect to Google Play Billing once, with user choice billing switched on. Both
 * the choice screen and the `userChoiceBilling` event depend on this flag, so every
 * connection is made with it. A failed attempt is forgotten so the next tap retries.
 */
export function connectPlayBilling(): Promise<void> {
  if (Platform.OS !== 'android') return Promise.reject(new PlayBillingUnavailableError());
  if (!connecting) {
    connecting = (async () => {
      const ok = await iap().initConnection({ enableBillingProgramAndroid: 'user-choice-billing' });
      if (!ok) throw new PlayBillingUnavailableError();
    })().catch((err) => {
      connecting = null;
      productsRead = null;
      throw err instanceof PlayBillingUnavailableError ? err : new PlayBillingUnavailableError();
    });
  }
  return connecting;
}

/** Forget the connection, so the next call connects again (Play's service dropped). */
function resetConnection() {
  connecting = null;
  productsRead = null;
}

/** The four products, read once per connection. Missing ones are simply absent. */
export function loadPlayProducts(): Promise<Map<string, { price: number | null }>> {
  if (!productsRead) {
    productsRead = (async () => {
      await connectPlayBilling();
      const found = (await iap().fetchProducts({ skus: PLAY_SKUS, type: 'in-app' })) ?? [];
      const map = new Map<string, { price: number | null }>();
      for (const p of found as { id: string; price?: number | null; productStatusAndroid?: string | null }[]) {
        if (p.productStatusAndroid && p.productStatusAndroid !== 'ok') continue;
        map.set(p.id, { price: typeof p.price === 'number' ? p.price : null });
      }
      return map;
    })().catch((err) => {
      productsRead = null;
      throw err instanceof PlayBillingUnavailableError ? err : new PlayBillingUnavailableError();
    });
  }
  return productsRead;
}

// ─── The choice ─────────────────────────────────────────────────────────────

export type ChoiceResult =
  /** Google Play: the purchase is made and must be verified by the server. */
  | { type: 'play'; purchase: Purchase }
  /** The student chose to pay another way: the server must be told, then Razorpay opens. */
  | { type: 'razorpay'; externalTransactionToken: string }
  /** Google is holding the payment (cash, pending approval): money may move later. */
  | { type: 'pending' }
  | { type: 'cancelled' }
  | { type: 'failed'; message: string };

/** The wire code in any spelling expo-iap uses ('user-cancelled', 'E_USER_CANCELLED'). */
const normalCode = (e: unknown) =>
  String((e as { code?: unknown } | null)?.code ?? '')
    .toLowerCase()
    .replace(/[^a-z]/g, '');

export function isCancelError(e: unknown): boolean {
  const c = normalCode(e);
  return c === 'usercancelled' || c === 'usercanceled' || c === 'eusercancelled' || c === 'eusercanceled';
}

/** Play's connection dropped or was never ready: connecting again can fix it. */
function isNotReadyError(e: unknown): boolean {
  const c = normalCode(e);
  return c === 'servicedisconnected' || c === 'notprepared' || c === 'initconnection' || c === 'enotprepared';
}

/** The one Google screen that can be open at a time, so the screen can close it. */
let cancelCurrent: (() => void) | null = null;

/** The screen went away with Google's screen open: stop waiting on it. */
export function cancelPlayChoice() {
  cancelCurrent?.();
}

/** True while Google's choice screen (or a Play payment) is being waited on. */
export function playChoiceOpen(): boolean {
  return cancelCurrent !== null;
}

/**
 * OPEN GOOGLE'S CHOICE SCREEN AND SAY WHAT THE STUDENT PICKED.
 *
 * The three listeners are on BEFORE the screen opens and off in every outcome.
 * Errors before Google's screen is up (not connected, product missing) THROW:
 * nothing happened, nothing was charged. After it is up, every outcome is a result.
 *
 * `accountId` is `obfuscatedAccountIdFor(user id)`; Play keeps it on the purchase
 * and the server checks it.
 */
export async function chooseHowToPay(kind: PassKind, accountId: string): Promise<ChoiceResult> {
  const sku = playProductId(kind);
  if (!sku) throw new PlayBillingUnavailableError('This pass cannot be bought through Google Play.');

  const products = await loadPlayProducts();
  if (!products.has(sku)) {
    throw new PlayBillingUnavailableError('This pass is not available on Google Play yet. Nothing was charged.');
  }

  const api = iap();
  let done!: (r: ChoiceResult) => void;
  const result = new Promise<ChoiceResult>((resolve) => {
    done = resolve;
  });
  cancelCurrent = () => done({ type: 'cancelled' });

  const subs = [
    // The student paid with Google Play.
    api.purchaseUpdatedListener((purchase) => {
      // A replay of some other unfinished purchase is not this one; recovery owns it.
      if (purchase.productId !== sku) return;
      if (purchase.purchaseState === 'pending') return done({ type: 'pending' });
      if (!purchase.purchaseToken) return done({ type: 'failed', message: 'Google Play did not return a purchase. Nothing was charged.' });
      done({ type: 'play', purchase });
    }),
    // The student chose the other option on Google's screen.
    api.userChoiceBillingListenerAndroid((details) => {
      if (!details.externalTransactionToken) {
        return done({ type: 'failed', message: 'Google did not return a payment token. Nothing was charged.' });
      }
      done({ type: 'razorpay', externalTransactionToken: details.externalTransactionToken });
    }),
    // Closed, declined, or Google refused.
    api.purchaseErrorListener((err) => {
      if (isCancelError(err)) return done({ type: 'cancelled' });
      done({ type: 'failed', message: 'The payment did not go through. Nothing was charged.' });
    }),
  ];

  const request = () =>
    api.requestPurchase({
      type: 'in-app',
      request: { google: { skus: [sku], obfuscatedAccountId: accountId } },
    });

  try {
    try {
      await request();
    } catch (err) {
      if (isCancelError(err)) return { type: 'cancelled' };
      if (!isNotReadyError(err)) throw new PlayBillingUnavailableError();
      // Play's service had dropped: connect again, once.
      resetConnection();
      await loadPlayProducts();
      await request();
    }
    return await result;
  } catch (err) {
    if (err instanceof PlayBillingUnavailableError) throw err;
    if (isCancelError(err)) return { type: 'cancelled' };
    throw new PlayBillingUnavailableError();
  } finally {
    cancelCurrent = null;
    for (const s of subs) s.remove();
  }
}

// ─── Verifying and finishing ────────────────────────────────────────────────

export type PlayVerifyResponse = { ok: boolean; state: string } & Record<string, unknown>;

/** Hand the purchase to the server, which checks it with Google and grants the pass. */
export function verifyPlayPurchase(purchase: Pick<Purchase, 'productId' | 'purchaseToken'>): Promise<PlayVerifyResponse> {
  return apiFetch<PlayVerifyResponse>('/payments/play/verify', {
    method: 'POST',
    body: JSON.stringify({ product_id: purchase.productId, purchase_token: purchase.purchaseToken }),
    timeoutMs: 20000,
  });
}

export type ConfirmOutcome =
  /** The server verified it and the pass is granted: safe to finish the purchase. */
  | { outcome: 'granted' }
  /** Google has not cleared the payment yet (409 "still pending"): nothing granted, ask again later. */
  | { outcome: 'pending' }
  /** The server said no (400, 403, or 409 "already used your day/week pass"). Its sentence is for the student. */
  | { outcome: 'refused'; message: string }
  /** No answer worth trusting (offline, 502 Google unreachable, 503 flag off): keep the purchase unfinished. */
  | { outcome: 'unknown' };

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * VERIFY, THE WAY THE API ANSWERS (billing/api-play-billing-contract.md):
 * 200 `ok` granted; 409 "pending" ask later; 409 otherwise (starter pass already
 * used) refused, NOT consumed, Google refunds it after 3 days; 400/403 refused;
 * 502 Google unreachable and no signal both RETRY (never "failed"); 503 the API's
 * flag is off. `tries` and `gapMs` are injectable for tests.
 */
export async function confirmPlayPurchase(
  purchase: Pick<Purchase, 'productId' | 'purchaseToken'>,
  tries = 3,
  gapMs = 1500
): Promise<ConfirmOutcome> {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await verifyPlayPurchase(purchase);
      if (res.ok === true) return { outcome: 'granted' };
      return { outcome: 'refused', message: 'We could not verify this payment. If money left your account, Google will return it.' };
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 409) {
          if (/pending/i.test(err.message)) return { outcome: 'pending' };
          return { outcome: 'refused', message: err.message };
        }
        if (err.status === 400 || err.status === 403) {
          return { outcome: 'refused', message: 'We could not verify this payment. If money left your account, Google will return it.' };
        }
        if (err.status === 503) return { outcome: 'unknown' };
      }
      // 502, a timeout, no signal: try again.
    }
    if (i < tries - 1) await wait(gapMs);
  }
  return { outcome: 'unknown' };
}

/**
 * FINISH A PURCHASE, ONLY AFTER THE SERVER CONFIRMED IT. Finishing consumes it, so
 * the product can be bought again, and acknowledges it; Google refunds a purchase
 * that is neither within 3 days. The server consumes it too (plan: "then consumes it
 * server-side"), so whichever comes second finds it already done: that error is
 * harmless and is swallowed. Never call this before `verifyPlayPurchase` said ok.
 */
export async function finishPlayPurchase(purchase: Purchase): Promise<void> {
  try {
    await iap().finishTransaction({ purchase, isConsumable: true });
  } catch {
    // Already consumed by the server, or Play is briefly away: the server's sweep
    // (and the next recovery pass) covers it. The pass is already granted.
  }
}

/**
 * PURCHASES GOOGLE STILL HOLDS FOR US. A student who paid and then lost signal, or
 * had the app killed, before the server confirmed has a Play purchase nobody has
 * verified. Left alone Google refunds it after 3 days. This asks Google for what is
 * unfinished, verifies each one of ours, and finishes the ones the server accepts.
 * Returns how many the server accepted. Silent: it never throws.
 */
export async function recoverPlayPurchases(): Promise<number> {
  if (Platform.OS !== 'android' || playChoiceOpen()) return 0;
  let granted = 0;
  try {
    await connectPlayBilling();
    const held = await iap().getAvailablePurchases();
    for (const p of held ?? []) {
      if (!p.purchaseToken || p.purchaseState !== 'purchased' || !PLAY_SKUS.includes(p.productId)) continue;
      // One try each: pending, refused and unknown are all "leave it for the next pass".
      if ((await confirmPlayPurchase(p, 1)).outcome === 'granted') {
        granted += 1;
        await finishPlayPurchase(p);
      }
    }
  } catch {
    // No billing on this device right now.
  }
  return granted;
}

/** The Play price in paise, when Google reported one. */
export async function playPricePaise(kind: PassKind): Promise<number | null> {
  const sku = playProductId(kind);
  if (!sku) return null;
  try {
    const price = (await loadPlayProducts()).get(sku)?.price;
    return typeof price === 'number' && Number.isFinite(price) && price > 0 ? Math.round(price * 100) : null;
  } catch {
    return null;
  }
}

/**
 * THE LINE UNDER THE PAY BUTTON WHEN A PROMO CODE TAKES SOME OFF. Google Play's
 * products have one fixed price, so a code only counts if the student picks
 * Razorpay on Google's screen. Said plainly, before they tap, so nobody picks
 * Google Play expecting the discounted amount.
 */
export function promoPlayNote(code: string, savedRupees: number, listRupees: number): string {
  return `${code} takes ₹${savedRupees} off only when you choose Razorpay on the next screen. Google Play charges the full ₹${listRupees}.`;
}
