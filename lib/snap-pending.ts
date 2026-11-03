import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

/**
 * A SNAP TAKEN WHILE ANDROID CLOSED THE APP.
 *
 * On a phone short of memory, Android can close the app while its camera is
 * open. The photo is taken, the app starts again from Home, and the snap the
 * student just took was simply gone. Android keeps it, though, and hands it
 * back once through `getPendingResultAsync`.
 *
 * Home asks for it when it opens (`recoverPendingSnap`) and, if there is one,
 * opens Snap, which takes it (`takePendingSnap`) and goes straight to the crop,
 * as if the camera had just returned. iOS never closes the app this way.
 */
let pending: ImagePicker.ImagePickerSuccessResult | null = null;

export async function recoverPendingSnap(): Promise<boolean> {
  if (Platform.OS !== 'android') return false;
  try {
    const result = await ImagePicker.getPendingResultAsync();
    if (result && 'canceled' in result && !result.canceled && result.assets?.length) {
      pending = result;
      return true;
    }
  } catch {
    // Nothing to recover.
  }
  return false;
}

export function takePendingSnap(): ImagePicker.ImagePickerSuccessResult | null {
  const p = pending;
  pending = null;
  return p;
}
