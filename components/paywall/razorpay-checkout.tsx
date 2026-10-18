import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Linking, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';

import { ApiError } from '@/lib/api';
import { passStatus, type PassKind, type PassStatus } from '@/lib/pass';
import {
  PAYMENTS_ON_THIS_DEVICE,
  PriceMismatchError,
  checkoutHtml,
  createOrder,
  isAppLink,
  parseCheckoutMessage,
  verifyPayment,
  webViewMayLoad,
  type CheckoutEvent,
  type Order,
} from '@/lib/payments';
import { ob, obFont } from '@/constants/onboarding';

/**
 * PAYING FOR A PASS: ONE HOOK, ONE SHEET.
 *
 *   const { pay, checkout } = usePassCheckout();
 *   ...
 *   {checkout}                       // anywhere in the screen's tree
 *   const result = await pay('3m');  // opens Razorpay, resolves when it is over
 *
 * The plans screen and the onboarding pass screen both buy a pass, and neither
 * should know how. `pay` can THROW (the order could not be created: no signal,
 * the server said no) - that is before any money moves, so the caller shows the
 * message and the student tries again. Once the sheet has opened, every outcome
 * is a RESULT:
 *
 *   paid       the server verified the payment; `pass` is read back from it
 *   pending    the student paid but the server has not confirmed it yet. Money
 *              has moved: say so, never "failed". Razorpay also reports the
 *              payment to the server itself, so the pass appears on its own.
 *   cancelled  the student closed the sheet before paying
 *   failed     the payment was declined, or could not be verified
 */

export type PayResult =
  | { status: 'paid'; pass: PassStatus; /** Paise charged, as the server priced the order. */ amountPaise: number }
  | { status: 'pending' }
  | { status: 'cancelled' }
  | { status: 'failed'; message: string };

type Closed = { type: 'closed' };
/** Points from the top of the screen to clear on iOS: the Dynamic Island and the clock. */
export const IOS_MIN_TOP_CLEARANCE = 54;

const POLL_EVERY_MS = 3000;
const POLL_TIMES = 10;
/** Each poll gives up sooner than an ordinary check: ten slow polls used to
 *  add up to two minutes of a student watching nothing happen. */
const POLL_TIMEOUT_MS = 6000;
/** After the sheet closed without a success message: a short look, because a
 *  UPI payment approved in another app can still have gone through. */
const CHECK_ON_EXIT_TIMES = 2;
const CHECK_ON_EXIT_GAP_MS = 1500;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** When the student's paid time ends now, or null with no running pass. */
function endOf(status: PassStatus): number | null {
  // A team account's stand-in "pass" is not paid time: it runs ten years and
  // would hide any real pass bought on top of it.
  if (status.state !== 'active' || status.record.source === 'exempt') return null;
  return status.endsAt.getTime();
}

/**
 * Whether THIS purchase has landed: a pass now running that was not running
 * before, or one that now ends later than it did. Without the comparison a
 * student extending a running pass read as "paid" the moment verify failed,
 * because the old pass was already active.
 */
function landed(status: PassStatus, before: number | null): boolean {
  if (status.state !== 'active' || status.record.source === 'exempt') return false;
  return before === null || status.endsAt.getTime() > before + 60000;
}

/** After a payment the server may take a moment (its webhook, our verify). */
async function waitForPass(before: number | null, times = POLL_TIMES, gapMs = POLL_EVERY_MS): Promise<PassStatus | null> {
  for (let i = 0; i < times; i++) {
    const status = await passStatus({ timeoutMs: POLL_TIMEOUT_MS });
    if (landed(status, before)) return status;
    if (i < times - 1) await wait(gapMs);
  }
  return null;
}

export function usePassCheckout() {
  const [open, setOpen] = useState<{ order: Order; description: string } | null>(null);
  const resolveSheet = useRef<((e: CheckoutEvent | Closed) => void) | null>(null);

  // If the screen goes away with the sheet open (a deep link, the pass gate
  // sending the student elsewhere), the purchase is over: resolve it as closed
  // so nothing waits forever on a sheet that no longer exists.
  useEffect(
    () => () => {
      resolveSheet.current?.({ type: 'closed' });
      resolveSheet.current = null;
    },
    []
  );

  /** One purchase at a time: a second `pay` used to replace the first one's
   *  sheet, and the first never finished. */
  const inFlight = useRef(false);
  /**
   * The sheet has closed and the app is asking the server what happened. The
   * screen shows the confirming page for exactly this stretch: it used to be a
   * greyed-out button and nothing else for up to half a minute.
   */
  const [confirming, setConfirming] = useState(false);

  const pay = useCallback(
    async (
      kind: PassKind,
      opts: {
        description: string;
        offer?: 'winback';
        promo?: string;
        /** What the page showed, in paise. The sheet does not open if the
         *  server would charge anything else. */
        expectedPaise?: number;
      }
    ): Promise<PayResult> => {
      if (!PAYMENTS_ON_THIS_DEVICE) throw new Error('Payments are not available on this device.');
      if (inFlight.current) return { status: 'cancelled' };
      inFlight.current = true;
      try {
        // Where the student stands BEFORE paying, so a pass already running is
        // never mistaken for this purchase arriving.
        const before = endOf(await passStatus({ timeoutMs: POLL_TIMEOUT_MS }));
        const order = await createOrder(kind, opts.offer, opts.promo);
        if (opts.expectedPaise != null && order.amount !== opts.expectedPaise) throw new PriceMismatchError();
        const event = await new Promise<CheckoutEvent | Closed>((resolve) => {
          resolveSheet.current = resolve;
          setOpen({ order, description: opts.description });
        });
        resolveSheet.current = null;
        setOpen(null);

        if (event.type !== 'success') {
          // Quietly: the student may well not have paid, so no "confirming"
          // page — the screen is back at once and only its Pay button waits.
          // CLOSED IS NOT CANCELLED UNTIL THE SERVER SAYS SO. A student who
          // approves a UPI request in their UPI app and then closes this sheet
          // has paid; so has one whose bank page finished after the sheet
          // stopped listening. Ask before saying anything.
          const arrived = await waitForPass(before, CHECK_ON_EXIT_TIMES, CHECK_ON_EXIT_GAP_MS);
          if (arrived) return { status: 'paid', pass: arrived, amountPaise: order.amount };
          if (event.type === 'failed') return { status: 'failed', message: event.description };
          if (event.type === 'error') return { status: 'failed', message: event.message };
          return { status: 'cancelled' };
        }

        setConfirming(true);
        // Money has moved from here on. Nothing below may say "failed" unless the
        // server has said the payment itself is bad, AND no pass arrived anyway
        // (Razorpay also tells the server, which can grant it on its own).
        let refused = false;
        try {
          await verifyPayment(event);
        } catch (err) {
          refused = err instanceof ApiError && (err.status === 400 || err.status === 403);
          // Otherwise: no signal, or the server is busy. Razorpay will tell it too.
        }
        const pass = await waitForPass(before, refused ? CHECK_ON_EXIT_TIMES : POLL_TIMES);
        if (pass) return { status: 'paid', pass, amountPaise: order.amount };
        if (refused) {
          return { status: 'failed', message: 'We could not verify this payment. If money left your account, it will be returned.' };
        }
        return { status: 'pending' };
      } finally {
        inFlight.current = false;
        setConfirming(false);
      }
    },
    []
  );

  const checkout = open ? (
    <CheckoutSheet
      order={open.order}
      description={open.description}
      onEvent={(e) => resolveSheet.current?.(e)}
    />
  ) : null;

  return { pay, checkout, confirming };
}

function CheckoutSheet({
  order,
  description,
  onEvent,
}: {
  order: Order;
  description: string;
  onEvent: (e: CheckoutEvent | Closed) => void;
}) {
  const html = useMemo(() => checkoutHtml(order, { description }), [order, description]);
  const [loading, setLoading] = useState(true);
  // Read HERE, outside the Modal. A Modal is its own native hierarchy and the
  // inset measured inside it reads zero: the header sat under the status bar and
  // the Dynamic Island, and its Close button could not be tapped.
  //
  // The measurement is still not trusted on its own. The header is also never
  // allowed closer to the top than a Dynamic Island needs: on an older phone
  // that makes the header a little taller, on a new one it is exactly the
  // inset. Android's Modal already starts below its status bar.
  const insets = useSafeAreaInsets();
  const top = Platform.OS === 'ios' ? Math.max(insets.top, IOS_MIN_TOP_CLEARANCE) : 0;
  const bottom = Platform.OS === 'ios' ? insets.bottom : 0;
  // Razorpay lets a declined payment be retried inside its own sheet, so a
  // decline is not the end. It is remembered, and reported only if the student
  // then leaves without paying.
  const lastFailure = useRef<string | null>(null);

  const leave = () =>
    onEvent(lastFailure.current ? { type: 'failed', description: lastFailure.current } : { type: 'dismiss' });

  const onMessage = (e: WebViewMessageEvent) => {
    const msg = parseCheckoutMessage(e.nativeEvent.data, order.order_id);
    if (!msg) return;
    if (msg.type === 'failed') {
      lastFailure.current = msg.description;
      return;
    }
    if (msg.type === 'dismiss') return leave();
    onEvent(msg);
  };

  return (
    // onDismiss is iOS's "this sheet is gone", however it went: swiped, closed, or
    // taken down by a deep link. Without it a sheet dismissed from outside left
    // the purchase waiting forever and the Pay button disabled for good.
    <Modal
      visible
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={leave}
      onDismiss={leave}
    >
      <SheetBody
        html={html}
        loading={loading}
        top={top}
        bottom={bottom}
        onLoaded={() => setLoading(false)}
        onMessage={onMessage}
        onFailedToLoad={() =>
          onEvent({ type: 'error', message: 'The payment page could not load. Check your connection and try again.' })
        }
        onLeave={leave}
      />
    </Modal>
  );
}

function SheetBody({
  html,
  loading,
  top,
  bottom,
  onLoaded,
  onMessage,
  onFailedToLoad,
  onLeave,
}: {
  html: string;
  loading: boolean;
  top: number;
  bottom: number;
  onLoaded: () => void;
  onMessage: (e: WebViewMessageEvent) => void;
  onFailedToLoad: () => void;
  onLeave: () => void;
}) {
  return (
    <View style={[styles.screen, { paddingTop: top, paddingBottom: bottom }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Secure payment</Text>
        <Pressable onPress={onLeave} hitSlop={12} accessibilityRole="button" accessibilityLabel="Close payment">
          <Text style={styles.close}>Close</Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <WebView
          source={{ html, baseUrl: 'https://monklearning.com' }}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          thirdPartyCookiesEnabled
          sharedCookiesEnabled
          setSupportMultipleWindows={false}
          mixedContentMode="never"
          onMessage={onMessage}
          onLoadEnd={onLoaded}
          onError={onFailedToLoad}
          onShouldStartLoadWithRequest={(req) => {
            if (isAppLink(req.url)) {
              // A UPI app, a wallet: hand over to it. The payment itself is
              // reported to the page, or to the server by Razorpay.
              Linking.openURL(req.url).catch(() => {});
              return false;
            }
            return webViewMayLoad(req.url);
          }}
        />
        {loading ? (
          <View style={styles.loading} pointerEvents="none">
            <ActivityIndicator color={ob.ink} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: ob.cream },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  title: { fontFamily: obFont.sb600, fontSize: 16, color: ob.ink },
  close: { fontFamily: obFont.m500, fontSize: 15, color: ob.ink },
  body: { flex: 1 },
  loading: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
});
