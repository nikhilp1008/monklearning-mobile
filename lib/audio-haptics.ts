import { requireOptionalNativeModule } from 'expo-modules-core';
import { Platform } from 'react-native';

/**
 * Let haptics be felt while the classroom is recording. See
 * `modules/audio-haptics/ios/AudioHapticsModule.swift` for why this exists.
 *
 * Optional, like the PCM player: a JS reload on a binary built before this
 * module existed finds nothing here and simply goes without, rather than
 * crashing. Android has no equivalent restriction, so it is iOS only.
 */
type AudioHapticsModule = { allowDuringRecording(enabled: boolean): boolean };

const native =
  Platform.OS === 'ios' ? requireOptionalNativeModule<AudioHapticsModule>('AudioHaptics') : null;

/** True when the session accepted the setting; false on an older binary. */
export function allowHapticsWhileRecording(): boolean {
  try {
    return native?.allowDuringRecording(true) ?? false;
  } catch {
    return false;
  }
}
