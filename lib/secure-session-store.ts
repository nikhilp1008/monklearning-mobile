import AsyncStorage from '@react-native-async-storage/async-storage';
import aesjs from 'aes-js';
import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';

/**
 * The Supabase session, at rest in the Keychain/Keystore instead of a flat file.
 *
 * AsyncStorage is unencrypted storage in the app container — readable from a
 * device backup, a rooted phone, or any file-read bug — and the session it
 * held includes the REFRESH token, which is long-lived account takeover
 * (security assessment, finding 10). SecureStore is the platform's hardware-
 * backed store, but it caps values at ~2KB and a Supabase session JSON is
 * larger, so this is the adapter Supabase's own React Native docs prescribe:
 * a fresh AES-256-CTR key per write lives in SecureStore, and the session —
 * now ciphertext — stays in AsyncStorage, worthless without the Keychain.
 *
 * Existing signed-in students are migrated in place: a session found in the
 * old plaintext slot is re-stored encrypted and the plaintext deleted, so
 * nobody is logged out by the upgrade. If either half goes missing or fails
 * to decrypt, the answer is null — supabase-js treats that as signed out,
 * which beats throwing inside every auth call.
 *
 * AFTER_FIRST_UNLOCK, not the default WHEN_UNLOCKED: autoRefreshToken renews
 * the session while the app is backgrounded and the phone may be locked; a
 * store that refuses reads then would sign students out overnight.
 */
const SECURE_OPTS: SecureStore.SecureStoreOptions = {
  keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
};

/** The ciphertext's AsyncStorage slot — distinct from `key` itself, which is
 *  reserved for detecting (and migrating) a pre-upgrade plaintext session. */
const encSlot = (key: string) => `${key}.enc`;

export const secureSessionStore = {
  async getItem(key: string): Promise<string | null> {
    let keyHex: string | null = null;
    try {
      keyHex = await SecureStore.getItemAsync(key, SECURE_OPTS);
    } catch {
      // Keychain unavailable (fresh install restoring a backup made on
      // another device, entitlement hiccough) — treat as signed out.
      return null;
    }
    if (!keyHex) return migrateLegacyPlaintext(key);

    const blobHex = await AsyncStorage.getItem(encSlot(key));
    if (!blobHex) return null;
    try {
      const cipher = new aesjs.ModeOfOperation.ctr(
        aesjs.utils.hex.toBytes(keyHex),
        new aesjs.Counter(1)
      );
      return aesjs.utils.utf8.fromBytes(cipher.decrypt(aesjs.utils.hex.toBytes(blobHex)));
    } catch {
      return null;
    }
  },

  async setItem(key: string, value: string): Promise<void> {
    const aesKey = Crypto.getRandomBytes(32);
    const cipher = new aesjs.ModeOfOperation.ctr(aesKey, new aesjs.Counter(1));
    const encrypted = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
    // Key first: a crash between the two writes then leaves ciphertext the
    // new key cannot open, which getItem answers with null — signed out, not
    // wedged.
    await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(aesKey), SECURE_OPTS);
    await AsyncStorage.setItem(encSlot(key), aesjs.utils.hex.fromBytes(encrypted));
  },

  async removeItem(key: string): Promise<void> {
    // The plaintext slot too, in case sign-out lands before migration did.
    await AsyncStorage.multiRemove([encSlot(key), key]);
    try {
      await SecureStore.deleteItemAsync(key, SECURE_OPTS);
    } catch {
      // Nothing to delete is the outcome we wanted.
    }
  },
};

async function migrateLegacyPlaintext(key: string): Promise<string | null> {
  const plain = await AsyncStorage.getItem(key);
  if (!plain) return null;
  await secureSessionStore.setItem(key, plain);
  await AsyncStorage.removeItem(key);
  return plain;
}
