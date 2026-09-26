import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';

import { secureSessionStore } from '@/lib/secure-session-store';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'EXPO_PUBLIC_SUPABASE_URL / EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY are not set (check .env.local).'
  );
}

// Expo Router's web build renders once on the server (Node), where there's
// no `window` and AsyncStorage's web backend throws. RN polyfills `window`
// as `global` on native, so this only ever picks the no-op path during SSR.
const noopStorage = {
  getItem: async () => null,
  setItem: async () => {},
  removeItem: async () => {},
};
// On native the session — refresh token included — lives Keychain-encrypted
// (see lib/secure-session-store.ts, which also migrates a plaintext session
// left by earlier builds). Web has no SecureStore, and a browser session is
// localStorage territory anyway, so it keeps the AsyncStorage shim there.
const authStorage =
  typeof window === 'undefined'
    ? noopStorage
    : Platform.OS === 'web'
      ? AsyncStorage
      : secureSessionStore;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: authStorage,
    autoRefreshToken: true,
    persistSession: true,
    // No browser redirect flow on native — nothing to detect in a URL bar.
    detectSessionInUrl: false,
  },
});
