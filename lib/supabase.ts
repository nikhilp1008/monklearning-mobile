import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

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
const authStorage = typeof window === 'undefined' ? noopStorage : AsyncStorage;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: authStorage,
    autoRefreshToken: true,
    persistSession: true,
    // No browser redirect flow on native — nothing to detect in a URL bar.
    detectSessionInUrl: false,
  },
});
