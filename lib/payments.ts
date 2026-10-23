import { Platform } from 'react-native';

import { ApiError, apiFetch } from '@/lib/api';
import type { PassKind } from '@/lib/pass';

/**
 * WHERE A PASS CAN BE BOUGHT: ANDROID ONLY, FOR NOW (founder, 2026-10-17).
 *
 * Selling access to the app's own features outside Apple's in-app purchase is
 * against App Store rule 3.1.1, so an iPhone build that opened Razorpay would
 * risk rejection or removal. Until Apple's purchase is added, iPhone stays on
 * TestFlight for team and teacher accounts (which the paywall never stops),
 * and every screen that sells asks this before showing a Pay button. A promo
 * code that makes a pass free is not a sale and still works everywhere.
 */
export const PAYMENTS_ON_THIS_DEVICE = Platform.OS === 'android';

/** The price the server would charge is not the price the student was shown. */
export class PriceMismatchError extends Error {
  constructor() {
    super('The price has changed since this page opened. Please check it and try again. Nothing was charged.');
    this.name = 'PriceMismatchError';
  }
}

/**
 * BUYING A PASS WITH RAZORPAY.
 *
 * The phone never decides that a payment worked and never sends a price:
 *
 *   1. `createOrder` asks the server for an order. The server prices it from its
 *      own list; all the app sends is which pass.
 *   2. The checkout page (below) runs Razorpay's own checkout.js inside a
 *      WebView and reports what happened.
 *   3. `verifyPayment` hands the three values Razorpay returned to the server,
 *      which recomputes the signature with a secret this app never has. Only
 *      then does a pass exist.
 *
 * If the student pays and loses signal before step 3, Razorpay tells the server
 * itself (a webhook), so the pass appears anyway; `usePassCheckout` polls for it.
 *
 * Only the public key id ever reaches the phone. The key secret and the webhook
 * secret live on the server.
 */

export type Order = {
  order_id: string;
  /** Paise, as charged. The screen shows its own rupee figure; this is what Razorpay will ask for. */
  amount: number;
  currency: string;
  key_id: string;
  kind: PassKind;
  /** Where Razorpay sends the browser after the bank page, with the result. */
  callback_url: string;
};

export type CheckoutSuccess = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

/** What the checkout page can tell the app. */
export type CheckoutEvent =
  | ({ type: 'success' } & CheckoutSuccess)
  /** `final`: this is the callback page, the last page of the attempt - Razorpay's
   *  own sheet is gone and nothing on it can be tapped, so the sheet must close.
   *  Without it (a decline inside Razorpay's sheet) the student may try again. */
  | { type: 'failed'; description: string; final?: boolean }
  | { type: 'dismiss' }
  | { type: 'error'; message: string };

export function createOrder(kind: PassKind, offer?: 'winback', promo?: string): Promise<Order> {
  // Only the code travels. The server prices the order from it, and refuses a
  // code that is not good for this student on this pass.
  const body: Record<string, string> = { kind };
  if (offer) body.offer = offer;
  else if (promo) body.promo = promo;
  return apiFetch<Order>('/payments/orders', {
    method: 'POST',
    body: JSON.stringify(body),
    timeoutMs: 20000,
  });
}

export function verifyPayment(payment: CheckoutSuccess): Promise<{ ok: boolean; state: string }> {
  return apiFetch<{ ok: boolean; state: string }>('/payments/verify', {
    method: 'POST',
    body: JSON.stringify(payment),
    timeoutMs: 20000,
  });
}

/**
 * Has THIS order been paid, as the server sees it. One cheap read (GET
 * /payments/orders/{id}), used while the sheet is open and right after it closes:
 * `/pass` answers the same question but reconciles with Razorpay and took 1.5-3s a
 * call (17s at worst) in production. It says nothing about access; the pass is
 * still read from `/pass`, once, after this says paid.
 */
export function getOrderState(orderId: string, timeoutMs = 6000): Promise<{ status: string; paid: boolean }> {
  return apiFetch<{ status: string; paid: boolean }>(`/payments/orders/${encodeURIComponent(orderId)}`, { timeoutMs });
}

const nonEmpty = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;

/**
 * What the checkout page posted, or null for anything that is not one of its
 * messages. Strict on purpose: a page that is not ours (a bank's 3-D Secure
 * screen, an ad inside a UPI app's redirect) can post to the same channel.
 * A success must name the order this screen opened - a payment for some other
 * order is not this purchase.
 */
export function parseCheckoutMessage(raw: unknown, expectedOrderId: string): CheckoutEvent | null {
  let m: Record<string, unknown>;
  try {
    m = typeof raw === 'string' ? JSON.parse(raw) : (raw as Record<string, unknown>);
  } catch {
    return null;
  }
  if (!m || typeof m !== 'object' || m.source !== 'monk-checkout') return null;
  switch (m.type) {
    case 'success':
      if (
        nonEmpty(m.razorpay_order_id) &&
        nonEmpty(m.razorpay_payment_id) &&
        nonEmpty(m.razorpay_signature) &&
        m.razorpay_order_id === expectedOrderId
      ) {
        return {
          type: 'success',
          razorpay_order_id: m.razorpay_order_id,
          razorpay_payment_id: m.razorpay_payment_id,
          razorpay_signature: m.razorpay_signature,
        };
      }
      return null;
    case 'failed':
      return {
        type: 'failed',
        description: nonEmpty(m.description) ? m.description : 'The payment did not go through.',
        // Strictly the boolean true: nothing else a page posts can end the sheet.
        ...(m.final === true ? { final: true } : {}),
      };
    case 'dismiss':
      return { type: 'dismiss' };
    case 'error':
      return { type: 'error', message: nonEmpty(m.message) ? m.message : 'The payment page could not load.' };
    default:
      return null;
  }
}

/** JSON that is safe to place inside an inline <script>. */
const forScript = (v: unknown) =>
  JSON.stringify(v).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/\u2028|\u2029/g, '');

/**
 * The page the WebView shows: Razorpay's Standard Checkout, opened at once.
 * Standard Checkout is a script Razorpay serves, not something this app can
 * bundle, so the page needs a network and says so if it has none.
 */
export function checkoutHtml(order: Order, opts: { description: string; themeColor?: string }): string {
  const options = {
    key: order.key_id,
    amount: order.amount,
    currency: order.currency,
    order_id: order.order_id,
    name: 'Monk Learning',
    description: opts.description,
    theme: { color: opts.themeColor ?? '#1C1A16' },
    // IN A WEBVIEW THE PAGE DOES NOT SURVIVE THE PAYMENT. A bank's 3-D Secure
    // page replaces it, taking `handler` with it: Razorpay showed PAYMENT
    // SUCCESSFUL and the app never heard. With redirect + a server callback_url,
    // Razorpay sends the browser to OUR server with the signed result; the
    // server records it and returns a page that tells the app (see
    // routers/payments.py::callback). `handler` stays for the cases that do
    // complete in place.
    redirect: true,
    callback_url: order.callback_url,
    // UPI INTENT INSIDE A WEBVIEW. Razorpay's WebView guide says to pass this so a
    // UPI payment opens the student's UPI app directly. Without it the checkout
    // falls back to the older collect / QR paths, which are slower and are being
    // retired by NPCI. Android only, which is the only place payments run.
    webview_intent: true,
  };
  return `<!doctype html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<style>html,body{margin:0;height:100%;background:#f6f4ef;font-family:-apple-system,Roboto,sans-serif;color:#1C1A16}
#msg{padding:32px 24px;font-size:15px;line-height:1.5}</style>
</head><body>
<div id="msg">Opening secure payment…</div>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
(function () {
  function post(m) { m.source = 'monk-checkout'; window.ReactNativeWebView.postMessage(JSON.stringify(m)); }
  var options = ${forScript(options)};
  if (typeof Razorpay === 'undefined') { post({ type: 'error', message: 'The payment page could not load. Check your connection and try again.' }); return; }
  options.handler = function (r) {
    post({ type: 'success', razorpay_order_id: r.razorpay_order_id, razorpay_payment_id: r.razorpay_payment_id, razorpay_signature: r.razorpay_signature });
  };
  options.modal = { ondismiss: function () { post({ type: 'dismiss' }); }, escape: false, confirm_close: true };
  var rzp = new Razorpay(options);
  rzp.on('payment.failed', function (r) {
    post({ type: 'failed', description: (r && r.error && r.error.description) || 'The payment did not go through.' });
  });
  rzp.open();
})();
</script>
</body></html>`;
}

/** Links that open another app: UPI apps, wallets, Android intents. */
const APP_SCHEMES = /^(upi|tez|gpay|phonepe|paytmmp|paytm|bhim|credpay|mobikwik|amazonpay|whatsapp|intent|market):/i;

export function isAppLink(url: string): boolean {
  return APP_SCHEMES.test(url);
}

/**
 * Whether the WebView may load this address itself. Banks run their own 3-D
 * Secure pages, so https cannot be limited to a list; everything else
 * (http, file, javascript, data) is refused.
 */
export function webViewMayLoad(url: string): boolean {
  return url === 'about:blank' || url.startsWith('https://');
}

/**
 * What to tell a student when buying (or applying a code) did not start.
 *
 * The server writes its refusals as plain sentences ("You have already used a
 * promo code."), so a 4xx/502 is shown as it came. Everything else - no signal,
 * a timeout, a 500 - is the same answer, and it says the one thing that matters
 * at that moment: nothing was charged.
 */
export function payErrorMessage(err: unknown): string {
  if (err instanceof PriceMismatchError) return err.message;
  if (err instanceof ApiError) {
    if (err.status === 429) return 'Too many tries. Please wait a little and try again.';
    if ([400, 404, 409, 410, 502, 503].includes(err.status) && err.message && !err.message.startsWith('API request failed')) {
      return err.message;
    }
  }
  return 'Check your connection and try again. Nothing was charged.';
}
