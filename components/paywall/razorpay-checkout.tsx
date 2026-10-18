import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Linking, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';

import { ApiError } from '@/lib/api';
import { passStatus, type PassKind, type PassStatus } from '@/lib/pass';
import {
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

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** After a payment the server may take a moment (its webhook, our verify). */
async function waitForPass(): Promise<PassStatus | null> {
  for (let i = 0; i < POLL_TIMES; i++) {
    const status = await passStatus();
    if (status.state === 'active') return status;
    await wait(POLL_EVERY_MS);
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

  const pay = useCallback(
    async (kind: PassKind, opts: { description: string; offer?: 'winback'; promo?: string }): Promise<PayResult> => {
      const order = await createOrder(kind, opts.offer, opts.promo);
      const event = await new Promise<CheckoutEvent | Closed>((resolve) => {
        resolveSheet.current = resolve;
        setOpen({ order, description: opts.description });
      });
      resolveSheet.current = null;
      setOpen(null);

      if (event.type === 'failed') return { status: 'failed', message: event.description };
      if (event.type === 'error') return { status: 'failed', message: event.message };
      if (event.type !== 'success') return { status: 'cancelled' };

      // Money has moved from here on. Nothing below may say "failed" unless the
      // server has said the payment itself is bad.
      try {
        await verifyPayment(event);
      } catch (err) {
        if (err instanceof ApiError && (err.status === 400 || err.status === 403)) {
          return { status: 'failed', message: 'We could not verify this payment. If money left your account, it will be returned.' };
        }
        // No signal, or the server is busy: Razorpay will tell it too.
      }
      const pass = await waitForPass();
      return pass ? { status: 'paid', pass, amountPaise: order.amount } : { status: 'pending' };
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

  return { pay, checkout };
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
