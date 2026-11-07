import { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';

/**
 * IS THE PHONE ONLINE?
 *
 * The app had no idea: offline only ever showed as one screen's fetch failing.
 * NetInfo asks the system, on iOS and Android alike, and says when it changes.
 * "Offline" here means the system is sure there is no internet (connected
 * false, or reachable false); while it is still finding out, the answer is
 * online, so a banner never flashes up on a cold start.
 *
 * Loaded lazily: a build installed before NetInfo was added has no native
 * module, and a top-level import would crash it. There the answer is always
 * "online", which is what the app assumed before.
 */
type NetInfoState = { isConnected: boolean | null; isInternetReachable: boolean | null };

function netInfo(): {
  addEventListener: (listener: (state: NetInfoState) => void) => () => void;
  fetch: () => Promise<NetInfoState>;
} | null {
  // Looked for before it is required. Requiring the package in a build with
  // no native side throws inside the module itself, and in development that
  // is reported as an Uncaught Error even though the require is in a try.
  if (!NativeModules.RNCNetInfo) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('@react-native-community/netinfo').default;
  } catch {
    return null;
  }
}

/**
 * `isInternetReachable` is the system pinging a test address in the background
 * (a Google one, on iOS), and it comes back false on a simulator, a VPN, a DNS
 * filter or a captive network while the app's own server answers fine. A screen
 * that has its own, truer signal (the class's socket) can ask to go by
 * `isConnected` alone.
 */
const offlineFrom = (s: NetInfoState, reachability: boolean) =>
  s.isConnected === false || (reachability && s.isInternetReachable === false);

export function useOnline({ reachability = true }: { reachability?: boolean } = {}): boolean {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const ni = netInfo();
    if (!ni) return;
    let live = true;
    let unsubscribe = () => {};
    try {
      ni.fetch()
        .then((s) => live && setOnline(!offlineFrom(s, reachability)))
        .catch(() => {});
      unsubscribe = ni.addEventListener((s) => setOnline(!offlineFrom(s, reachability)));
    } catch {
      // The module is present but its native side is not (tests, an old build).
    }
    return () => {
      live = false;
      unsubscribe();
    };
  }, [reachability]);
  return online;
}
