import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { apiFetch } from '@/lib/api';

/**
 * PUSH NOTIFICATIONS, through Expo's push service.
 *
 * The phone gives this app a push token; the app tells the API (POST
 * /push/register); the API sends to it when a class's notes are ready or a snap
 * finishes after the student has left (app/push.py on the server). Nothing here
 * is a nudge to come back: MOMENTS.md rules that out. Every notification is
 * about something the student already asked for.
 *
 * ASKING. The system prompt can be answered once; after "Don't allow" only
 * Settings can undo it. So the app does not ask at launch, with nothing to
 * show for it. It asks at the two moments a notification has just become
 * useful: when a snap starts solving and when a class ends. `registerForPush
 * ({ ask: true })` is called from there; at launch `{ ask: false }` only
 * refreshes a token for a student who already said yes.
 *
 * NEVER FAILS THE APP. A simulator, a denied permission, an Android build with
 * no Firebase key, a network error: each returns quietly. A student who cannot
 * be reached by notification still has the whole app.
 */

const TOKEN_KEY = 'push.token.v1';
const ASKED_KEY = 'push.asked.v1';

/** What a notification's `data` carries, as the server sends it (app/push.py). */
export type PushData = {
  type?: 'note' | 'doubt' | 'test';
  note_id?: string | null;
  doubt_id?: string | null;
  session_id?: string | null;
  submission_id?: string | null;
};

/**
 * Where tapping a notification goes, or null for one that goes nowhere (the
 * admin's test, or anything this version does not know — an older app must not
 * crash on a newer server's kind).
 */
export function routeForNotification(
  data: PushData | null | undefined
): { pathname: '/note-detail' | '/doubt-detail'; params: { id: string } } | null {
  if (!data) return null;
  if (data.type === 'note' && data.note_id) {
    return { pathname: '/note-detail', params: { id: data.note_id } };
  }
  if (data.type === 'doubt' && data.doubt_id) {
    return { pathname: '/doubt-detail', params: { id: data.doubt_id } };
  }
  return null;
}

/**
 * While the app is open the student is already looking at the thing, so a
 * banner on top of it is noise. Called once, at module load of the root layout.
 */
export function installForegroundHandler(): void {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: false,
      shouldShowList: false,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

function projectId(): string | undefined {
  const extra = Constants.expoConfig?.extra as { eas?: { projectId?: string } } | undefined;
  return extra?.eas?.projectId ?? Constants.easConfig?.projectId;
}

async function ensureAndroidChannel(): Promise<void> {
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync('default', {
    name: 'Notes and doubts',
    importance: Notifications.AndroidImportance.DEFAULT,
  });
}

/**
 * Registers this phone for the signed-in student. Returns true when the server
 * has a token for it.
 *
 * `ask`: show the system prompt if the student has never been asked. Without it
 * a phone that has not granted permission is left alone.
 */
export async function registerForPush(opts: { ask: boolean }): Promise<boolean> {
  try {
    // Simulators have no push service; a token request there only errors.
    if (!Device.isDevice) return false;
    await ensureAndroidChannel();

    let { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted' && opts.ask) {
      const asked = await AsyncStorage.getItem(ASKED_KEY);
      // iOS will not show the prompt twice, and Android 13+ shows it twice at
      // most. One try, then Settings is the student's to use.
      if (!asked) {
        await AsyncStorage.setItem(ASKED_KEY, '1');
        status = (await Notifications.requestPermissionsAsync()).status;
      }
    }
    if (status !== 'granted') return false;

    const id = projectId();
    if (!id) return false;
    const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId: id });
    if (!token) return false;

    const res = await apiFetch<{ ok: boolean }>('/push/register', {
      method: 'POST',
      body: JSON.stringify({
        token,
        platform: Platform.OS === 'ios' ? 'ios' : 'android',
        app_version: Constants.expoConfig?.version ?? null,
      }),
      timeoutMs: 15000,
    });
    if (res?.ok) await AsyncStorage.setItem(TOKEN_KEY, token);
    return !!res?.ok;
  } catch {
    return false;
  }
}

/**
 * Takes this phone off the signed-in student, so the next person to sign in
 * here is not sent the last one's notes. Called by signOut BEFORE the session
 * ends: the call needs the student's token. Best effort — if it fails, the
 * server moves the phone to whoever registers next (the token is unique).
 */
export async function unregisterPush(): Promise<void> {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (!token) return;
    await apiFetch('/push/register', {
      method: 'DELETE',
      body: JSON.stringify({ token }),
      timeoutMs: 8000,
    });
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch {
    // The phone keeps its token; see above.
  }
}
