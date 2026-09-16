import AVFoundation
import ExpoModulesCore

/**
 * Gapless playback for the follow-up voice: raw Int16/24kHz/mono PCM chunks
 * scheduled onto one AVAudioPlayerNode as they stream in.
 *
 * This exists because every off-the-shelf route failed in a measured way:
 * expo-audio plays FILES, so nothing sounds until a whole sentence has been
 * synthesised (seconds, at Rumik's half-realtime pace), and
 * react-native-audio-api segfaulted in AudioContext.resume() the week this
 * was first tried. A player node fed buffers has no per-clip file-open gap
 * and starts on the first quarter-second of audio.
 *
 * The AVAudioUnitTimePitch in the chain carries the 1.15x the founder tuned
 * by ear, with pitch held — rate without it would raise the teacher's voice.
 */
public class PcmPlayerModule: Module {
  private var engine: AVAudioEngine?
  private var player: AVAudioPlayerNode?
  private var timePitch: AVAudioUnitTimePitch?
  private var format: AVAudioFormat?
  /// Seconds of audio handed to the player since start() — the JS side reads
  /// this to know when the queue has genuinely drained.
  private var fedSeconds: Double = 0

  public func definition() -> ModuleDefinition {
    Name("PcmPlayer")

    Function("start") { (sampleRate: Double, rate: Double) in
      self.teardown()
      let engine = AVAudioEngine()
      let player = AVAudioPlayerNode()
      let timePitch = AVAudioUnitTimePitch()
      timePitch.rate = Float(rate)
      // Float32 internally; the feed converts from Int16. Mono.
      guard let format = AVAudioFormat(standardFormatWithSampleRate: sampleRate,
                                       channels: 1) else {
        throw Exception(name: "format", description: "unsupported sample rate")
      }
      engine.attach(player)
      engine.attach(timePitch)
      engine.connect(player, to: timePitch, format: format)
      engine.connect(timePitch, to: engine.mainMixerNode, format: format)
      try engine.start()
      player.play()
      self.engine = engine
      self.player = player
      self.timePitch = timePitch
      self.format = format
      self.fedSeconds = 0
    }

    Function("feed") { (base64: String) in
      guard let data = Data(base64Encoded: base64),
            let player = self.player,
            let format = self.format, data.count >= 2 else { return }
      let frames = AVAudioFrameCount(data.count / 2)
      guard let buffer = AVAudioPCMBuffer(pcmFormat: format,
                                          frameCapacity: frames) else { return }
      buffer.frameLength = frames
      data.withUnsafeBytes { (raw: UnsafeRawBufferPointer) in
        let int16 = raw.bindMemory(to: Int16.self)
        if let channel = buffer.floatChannelData?[0] {
          for i in 0..<Int(frames) {
            channel[i] = Float(int16[i]) / 32768.0
          }
        }
      }
      player.scheduleBuffer(buffer, completionHandler: nil)
      self.fedSeconds += Double(frames) / format.sampleRate
    }

    Function("fedSeconds") { () -> Double in
      return self.fedSeconds
    }

    Function("stop") {
      self.teardown()
    }
  }

  private func teardown() {
    player?.stop()
    engine?.stop()
    player = nil
    timePitch = nil
    engine = nil
    format = nil
    fedSeconds = 0
  }
}
