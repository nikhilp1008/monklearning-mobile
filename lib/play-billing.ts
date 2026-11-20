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

/**
 * RAZORPAY BESIDE GOOGLE PLAY IS A SEPARATE SWITCH, OFF BY DEFAULT.
 *
 * `EXPO_PUBLIC_RAZORPAY_CHOICE=1` (set when the build is made) turns on India user
 * choice billing: Google's screen offers Google Play AND Razorpay. It is only allowed
 * once Google has approved the Alternative billing enrolment for this account. Until
 * then a payments build (`EXPO_PUBLIC_ANDROID_PAYMENTS=1`) is GOOGLE PLAY ONLY: a normal
 * Play Billing connection, Google's ordinary purchase sheet, no Razorpay on Android.
 * Read at the moment of use (not frozen at import) so tests can flip it.
 */
export const razorpayChoiceOn = (): boolean => process.env.EXPO_PUBLIC_RAZORPAY_CHOICE === '1';

/**
 * Play Console product ids, one per pass on sale. Legacy kinds are not sold.
 *
 * The day and 7-day passes are ONE-TIME products (bought, then consumed). Pro and Max are
 * MONTHLY SUBSCRIPTIONS (base plan "monthly", auto-renewing, India): one purchase token that
 * renews itself, never consumed, acknowledged instead. See billing/PLAY_SUBSCRIPTIONS_SCOPE.md.
 */
export const PLAY_PRODUCT_IDS: Partial<Record<PassKind, string>> = {
  day: 'pass_day',
  week: 'pass_week',
  pro_1m: 'pro_monthly',
  max_1m: 'max_monthly',
};

/** The Play subscriptions (a renewing token), as opposed to the one-time products. */
export const PLAY_SUBSCRIPTION_IDS: string[] = ['pro_monthly', 'max_monthly'];
export const isPlaySubscription = (productId: string): boolean => PLAY_SUBSCRIPTION_IDS.includes(productId);
/** The base plan every subscription here is sold on. */
export const PLAY_BASE_PLAN = 'monthly';

/** Google Play's own page for managing or cancelling one subscription of this app. */
export const manageSubscriptionUrl = (productId: string): string =>
  `https://play.google.com/store/account/subscriptions?package=com.monklearning.app${productId ? `&sku=${encodeURIComponent(productId)}` : ''}`;

export const PLAY_SKUS: string[] = Object.values(PLAY_PRODUCT_IDS) as string[];

export const playProductId = (kind: PassKind): string | null => PLAY_PRODUCT_IDS[kind] ?? null;

/**
 * Google's own sentence is not shown to students; this one is. `detail` is a short tag (where it failed and
 * Google's code) added in brackets so a screenshot says WHY. It carries no personal data.
 */
export class PlayBillingUnavailableError extends Error {
  constructor(message = 'Google Play could not start the payment. Check that you are signed in to Google Play on this phone, then try again. Nothing was charged.', detail?: string) {
    super(detail ? `${message} [${detail}]` : message);
    this.name = 'PlayBillingUnavailableError';
  }
}

/** "stage: code message", short, for the bracket on PlayBillingUnavailableError. */
function billingDetail(stage: string, e: unknown): string {
  const x = e as { code?: unknown; message?: unknown } | null;
  const code = x?.code != null ? String(x.code) : '';
  const msg = typeof x?.message === 'string' ? x.message : '';
  return `${stage}: ${[code, msg].filter(Boolean).join(' ').replace(/\s+/g, ' ').slice(0, 70) || 'no detail'}`;
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
      // User choice billing only when Razorpay-beside-Google is switched on; otherwise a
      // plain Play Billing connection (Google Play is the only way to pay).
      const ok = await (razorpayChoiceOn() ? iap().initConnection({ enableBillingProgramAndroid: 'user-choice-billing' }) : iap().initConnection());
      if (!ok) throw new PlayBillingUnavailableError(undefined, 'connect: init returned false');
    })().catch((err) => {
      connecting = null;
      productsRead = null;
      throw err instanceof PlayBillingUnavailableError ? err : new PlayBillingUnavailableError(undefined, billingDetail('connect', err));
    });
  }
  return connecting;
}

/** Forget the connection, so the next call connects again (Play's service dropped). */
function resetConnection() {
  connecting = null;
  productsRead = null;
}

/** What the app knows about one Play product: its price, and for a subscription the offer to buy. */
export type PlayProduct = { price: number | null; offerToken?: string };

/**
 * The four products, read once per connection: the one-time passes as in-app products and Pro and
 * Max as subscriptions (each read on its own, so one kind failing never hides the other). Missing
 * ones are simply absent. A subscription is present only with an offer token on its monthly base
 * plan: without it there is nothing to buy.
 */
export function loadPlayProducts(): Promise<Map<string, PlayProduct>> {
  if (!productsRead) {
    productsRead = (async () => {
      await connectPlayBilling();
      const map = new Map<string, PlayProduct>();
      const oneTime = PLAY_SKUS.filter((s) => !isPlaySubscription(s));
      const subs = PLAY_SKUS.filter(isPlaySubscription);
      type Found = { id: string; price?: number | null; productStatusAndroid?: string | null };
      const inApp = (await iap().fetchProducts({ skus: oneTime, type: 'in-app' })) ?? [];
      for (const p of inApp as Found[]) {
        if (p.productStatusAndroid && p.productStatusAndroid !== 'ok') continue;
        map.set(p.id, { price: typeof p.price === 'number' ? p.price : null });
      }
      let subscriptions: unknown[] = [];
      try {
        subscriptions = (await iap().fetchProducts({ skus: subs, type: 'subs' })) ?? [];
      } catch {
        // Subscriptions unavailable: the one-time passes still work.
      }
      type Offer = { basePlanIdAndroid?: string | null; offerTokenAndroid?: string | null; price?: number | null };
      for (const p of subscriptions as (Found & { subscriptionOffers?: Offer[] | null })[]) {
        if (p.productStatusAndroid && p.productStatusAndroid !== 'ok') continue;
        const offers = p.subscriptionOffers ?? [];
        const offer = offers.find((o) => o.basePlanIdAndroid === PLAY_BASE_PLAN && o.offerTokenAndroid) ?? offers.find((o) => o.offerTokenAndroid);
        if (!offer?.offerTokenAndroid) continue;
        const price = typeof offer.price === 'number' ? offer.price : typeof p.price === 'number' ? p.price : null;
        map.set(p.id, { price, offerToken: offer.offerTokenAndroid });
      }
      return map;
    })().catch((err) => {
      productsRead = null;
      throw err instanceof PlayBillingUnavailableError ? err : new PlayBillingUnavailableError(undefined, billingDetail('products', err));
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
/** A checkout is running (Google's screen, verifying, or the Razorpay sheet). Set by the hook. */
let checkoutActive = false;

/** The screen went away with Google's screen open: stop waiting on it. */
export function cancelPlayChoice() {
  cancelCurrent?.();
}

/** The checkout hook says a purchase has started or ended, so recovery keeps out of its way. */
export function markPlayCheckout(active: boolean) {
  checkoutActive = active;
}

/** True while Google's choice screen is up or a checkout is running. */
export function playChoiceOpen(): boolean {
  return cancelCurrent !== null || checkoutActive;
}

/** Google's screen is left open this long at most, then the wait ends as a cancel. */
export const CHOICE_TIMEOUT_MS = 30 * 60 * 1000;

/**
 * OPEN GOOGLE'S CHOICE SCREEN AND SAY WHAT THE STUDENT PICKED.
 *
 * The three listeners are on BEFORE the screen opens and off in every outcome,
 * including one of them throwing while it is being attached. Errors before Google's
 * screen is up (not connected, product missing) THROW: nothing happened, nothing
 * was charged. After it is up, every outcome is a result.
 *
 * `accountId` is `obfuscatedAccountIdFor(user id)`; Play keeps it on the purchase
 * and the server checks it.
 */
export async function chooseHowToPay(kind: PassKind, accountId: string): Promise<ChoiceResult> {
  const sku = playProductId(kind);
  if (!sku) throw new PlayBillingUnavailableError('This pass cannot be bought through Google Play.');

  const products = await loadPlayProducts();
  const product = products.get(sku);
  if (!product) {
    throw new PlayBillingUnavailableError('This pass is not available on Google Play yet. Nothing was charged.');
  }
  const offerToken = product.offerToken;
  if (isPlaySubscription(sku) && !offerToken) {
    throw new PlayBillingUnavailableError('This plan is not available on Google Play yet. Nothing was charged.');
  }

  const api = iap();
  let done!: (r: ChoiceResult) => void;
  const result = new Promise<ChoiceResult>((resolve) => {
    done = resolve;
  });
  const subs: { remove: () => void }[] = [];
  let timer: ReturnType<typeof setTimeout> | null = null;

  // A subscription is bought with its offer token (the monthly base plan); a one-time pass without.
  const request = () =>
    isPlaySubscription(sku) && offerToken
      ? api.requestPurchase({
          type: 'subs',
          request: { google: { skus: [sku], subscriptionOffers: [{ sku, offerToken }], obfuscatedAccountId: accountId } },
        })
      : api.requestPurchase({
          type: 'in-app',
          request: { google: { skus: [sku], obfuscatedAccountId: accountId } },
        });

  try {
    cancelCurrent = () => done({ type: 'cancelled' });
    // A screen left open for good must not hold the checkout (and recovery) forever.
    timer = setTimeout(() => done({ type: 'cancelled' }), CHOICE_TIMEOUT_MS);

    // The student paid with Google Play.
    subs.push(
      api.purchaseUpdatedListener((purchase) => {
        // A replay of some other unfinished purchase is not this one; recovery owns it.
        if (purchase.productId !== sku) return;
        if (purchase.purchaseState === 'pending') return done({ type: 'pending' });
        if (!purchase.purchaseToken) return done({ type: 'failed', message: 'Google Play did not return a purchase. Nothing was charged.' });
        done({ type: 'play', purchase });
      })
    );
    // The student chose the other option on Google's screen. Only exists when user
    // choice billing is on; in Google-Play-only mode Google never shows that option.
    if (razorpayChoiceOn()) {
      subs.push(
        api.userChoiceBillingListenerAndroid((details) => {
          if (!details.externalTransactionToken) {
            return done({ type: 'failed', message: 'Google did not return a payment token. Nothing was charged.' });
          }
          done({ type: 'razorpay', externalTransactionToken: details.externalTransactionToken });
        })
      );
    }
    // Closed, declined, or Google refused.
    subs.push(
      api.purchaseErrorListener((err) => {
        if (isCancelError(err)) return done({ type: 'cancelled' });
        done({ type: 'failed', message: 'The payment did not go through. Nothing was charged.' });
      })
    );

    try {
      await request();
    } catch (err) {
      if (isCancelError(err)) return { type: 'cancelled' };
      if (!isNotReadyError(err)) throw new PlayBillingUnavailableError(undefined, billingDetail('buy', err));
      // Play's service had dropped: connect again, once.
      resetConnection();
      await loadPlayProducts();
      await request();
    }
    return await result;
  } catch (err) {
    if (err instanceof PlayBillingUnavailableError) throw err;
    if (isCancelError(err)) return { type: 'cancelled' };
    throw new PlayBillingUnavailableError(undefined, billingDetail('buy2', err));
  } finally {
    if (timer) clearTimeout(timer);
    cancelCurrent = null;
    for (const s of subs) {
      try {
        s.remove();
      } catch {
        // Already gone.
      }
    }
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
    // A subscription is ACKNOWLEDGED, never consumed (consuming would end it); a one-time pass is consumed.
    await iap().finishTransaction({ purchase, isConsumable: !isPlaySubscription(purchase.productId) });
  } catch {
    // Already consumed by the server, or Play is briefly away: the server's sweep
    // (and the next recovery pass) covers it. The pass is already granted.
  }
}

/** The pass kind a Play product id stands for. */
export function kindOfPlayProduct(productId: string): PassKind | null {
  const hit = (Object.entries(PLAY_PRODUCT_IDS) as [PassKind, string][]).find(([, id]) => id === productId);
  return hit ? hit[0] : null;
}

/**
 * The API allows 60 verify calls per student per day, and recovery can run from the
 * app root, every return to the app and every few seconds on a pending screen. So a
 * token the server REFUSED is never sent again in this process, and one that came
 * back pending or unknown is tried at most once a minute.
 */
export const RECOVER_RETRY_GAP_MS = 60 * 1000;
const refusedTokens = new Set<string>();
const triedAt = new Map<string, number>();
let recovering: Promise<string[]> | null = null;

/**
 * PURCHASES GOOGLE STILL HOLDS FOR US. A student who paid and then lost signal, or
 * had the app killed, before the server confirmed has a Play purchase nobody has
 * verified. Left alone Google refunds it after 3 days. This asks Google for what is
 * unfinished, verifies each one of ours, and finishes the ones the server accepts.
 *
 * Returns the product ids the server accepted (empty = none). Silent: it never
 * throws. ONE RUN AT A TIME: callers that arrive while one is running share its
 * promise, so a token is never verified or finished twice at once. Keeps out of the
 * way of a checkout in progress.
 */
export function recoverPlayPurchases(): Promise<string[]> {
  if (Platform.OS !== 'android' || playChoiceOpen()) return Promise.resolve([]);
  if (!recovering) {
    recovering = (async () => {
      const granted: string[] = [];
      try {
        await connectPlayBilling();
        const held = await iap().getAvailablePurchases();
        const mine = await currentPlayAccountId();
        for (const p of held ?? []) {
          if (!p.purchaseToken || p.purchaseState !== 'purchased' || !PLAY_SKUS.includes(p.productId)) continue;
          // A purchase made under another account on this phone: the server would
          // refuse it (403), so do not ask.
          const owner = 'obfuscatedAccountIdAndroid' in p ? p.obfuscatedAccountIdAndroid : null;
          if (owner && owner !== mine) continue;
          if (refusedTokens.has(p.purchaseToken)) continue;
          const last = triedAt.get(p.purchaseToken);
          if (last !== undefined && Date.now() - last < RECOVER_RETRY_GAP_MS) continue;
          triedAt.set(p.purchaseToken, Date.now());
          // One try each: pending and unknown are "leave it for the next pass".
          const res = await confirmPlayPurchase(p, 1);
          if (res.outcome === 'refused') refusedTokens.add(p.purchaseToken);
          if (res.outcome === 'granted') {
            // A SUBSCRIPTION never leaves Google's list (it is not consumed), so it comes back here on
            // every open. The call above is what finds a renewal; that is NOT news to the student, so an
            // already-acknowledged subscription is not reported as a recovered purchase. One the phone never
            // got to acknowledge (the app was killed after paying) IS news. Acknowledging again is harmless.
            const acknowledged = 'isAcknowledgedAndroid' in p && p.isAcknowledgedAndroid === true;
            if (!isPlaySubscription(p.productId) || !acknowledged) granted.push(p.productId);
            await finishPlayPurchase(p);
          }
        }
      } catch {
        // No billing on this device right now, or nobody is signed in.
      }
      return granted;
    })().finally(() => {
      recovering = null;
    });
  }
  return recovering;
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
  if (!razorpayChoiceOn()) {
    return `${code} cannot be used when paying with Google Play, which charges the full ₹${listRupees}.`;
  }
  return `${code} takes ₹${savedRupees} off only when you choose Razorpay on the next screen. Google Play charges the full ₹${listRupees}.`;
}
