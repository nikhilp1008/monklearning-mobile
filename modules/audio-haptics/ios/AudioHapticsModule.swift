import AVFoundation
import ExpoModulesCore

/**
 * One switch: let haptics play while this app is recording.
 *
 * iOS silences the Taptic Engine for an app that is recording from the
 * microphone, unless that app opts back in. The live classroom records for the
 * whole class — its mic button only gates which frames are sent — so every tap
 * on that button fell inside the silent window and none of them could be felt.
 * Nothing the app uses exposes the opt-in: expo-audio does not, and
 * @siteed/audio-studio, which owns the classroom's session, never sets it.
 *
 * It is a property of the shared session and independent of its category, so
 * setting it does not disturb the `.playAndRecord` configuration audio-studio
 * chose. It is set again on every press rather than once, because the session
 * is reconfigured on interruptions and the call is cheap.
 */
public class AudioHapticsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("AudioHaptics")

    /// Returns whether the session accepted it, so a failure is observable
    /// rather than a silent no-op.
    Function("allowDuringRecording") { (enabled: Bool) -> Bool in
      do {
        try AVAudioSession.sharedInstance().setAllowHapticsAndSystemSoundsDuringRecording(enabled)
        return true
      } catch {
        return false
      }
    }
  }
}
