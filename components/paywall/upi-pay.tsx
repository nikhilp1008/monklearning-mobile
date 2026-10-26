import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';

import { ob, obFont } from '@/constants/onboarding';
import { hapticKey } from '@/lib/haptics';
import { installedUpiApps, lastUsedUpiApp, orderUpiApps, upiAppsAvailable, type UpiApp } from '@/lib/upi-apps';

/** Rows shown on the page; the rest are a tap away in Razorpay's checkout. */
const MAX_ROWS = 3;

/**
 * The UPI apps on this phone, read once. Null while asking; [] when there are
 * none or this build cannot open UPI apps, and the page keeps its Pay button.
 */
export function useUpiApps(): { apps: UpiApp[] | null; last: string | null } {
  const [state, setState] = useState<{ apps: UpiApp[] | null; last: string | null }>({
    apps: upiAppsAvailable() ? null : [],
    last: null,
  });
  useEffect(() => {
    if (!upiAppsAvailable()) return;
    let live = true;
    void Promise.all([installedUpiApps(), lastUsedUpiApp()]).then(([found, last]) => {
      if (live) setState({ apps: orderUpiApps(found, last).slice(0, MAX_ROWS), last });
    });
    return () => {
      live = false;
    };
  }, []);
  return state;
}

/**
 * PAY WITH A UPI APP, ON OUR PAGE (design B, 26 Oct 2026).
 *
 * "Pay ₹79 with", then one white row per app (icon, name, chevron), the app
 * used last marked "Last used" and first. One tap opens that app with the order.
 * Everything else (cards, netbanking, wallets, other UPI apps and UPI ID) is the
 * link under the rows, which opens Razorpay's own checkout.
 */
export function UpiPay({
  amount,
  apps,
  last,
  busy,
  disabled,
  onPick,
  onOther,
}: {
  amount: string;
  apps: UpiApp[];
  /** Package name of the app used last, if it is among `apps`. */
  last: string | null;
  /** The app whose payment is starting, for its spinner. */
  busy: string | null;
  disabled: boolean;
  onPick: (app: UpiApp) => void;
  onOther: () => void;
}) {
  return (
    <View style={{ gap: 10 }}>
      <Text style={{ fontFamily: obFont.sb600, fontSize: 13, color: ob.ink55 }}>Pay {amount} with</Text>
      {apps.map((app) => (
        <Pressable
          key={app.packageName}
          disabled={disabled}
          onPress={() => {
            hapticKey();
            onPick(app);
          }}
          accessibilityRole="button"
          accessibilityLabel={`Pay ${amount} with ${app.name}`}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            height: 58,
            paddingHorizontal: 16,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: ob.fieldBorder,
            backgroundColor: '#FFFFFF',
            opacity: disabled && busy !== app.packageName ? 0.45 : pressed ? 0.7 : 1,
          })}>
          <View style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
            {app.iconBase64 ? (
              <Image
                source={{ uri: app.iconBase64.startsWith('data:') ? app.iconBase64 : `data:image/png;base64,${app.iconBase64}` }}
                style={{ width: 28, height: 28 }}
                resizeMode="contain"
              />
            ) : null}
          </View>
          <Text style={{ flex: 1, fontFamily: obFont.m500, fontSize: 16, color: ob.ink }} numberOfLines={1}>
            {app.name}
          </Text>
          {busy === app.packageName ? (
            <ActivityIndicator color={ob.ink} />
          ) : (
            <>
              {app.packageName === last ? (
                <Text style={{ fontFamily: obFont.r400, fontSize: 13, color: ob.ink55 }}>Last used</Text>
              ) : null}
              <Text style={{ fontSize: 18, color: ob.ink40 }}>›</Text>
            </>
          )}
        </Pressable>
      ))}
      <Pressable onPress={onOther} disabled={disabled} hitSlop={10} accessibilityRole="button">
        <Text style={{ textAlign: 'center', marginTop: 4, fontFamily: obFont.m500, fontSize: 15, color: ob.link, opacity: disabled ? 0.45 : 1 }}>
          Cards, netbanking and other UPI apps →
        </Text>
      </Pressable>
    </View>
  );
}
