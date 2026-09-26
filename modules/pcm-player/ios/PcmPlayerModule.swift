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
  /// Seconds the hardware has ACTUALLY rendered — advanced only by
  /// dataPlayedBack completions. Underruns and idle time add nothing.
  private var consumedSeconds: Double = 0
  /// Playback holds until this much audio is queued — the jitter buffer that
  /// keeps the FIRST word from stuttering while the stream ramps up. The
  /// stream's producer outruns realtime once warm, so only the start needs it.
  private var prebufferSeconds: Double = 0.5
  private var playing = false

  /// Buffers scheduled but not yet heard, in order. Kept so an interruption
  /// (a call, Siri, an alarm) or a route change (headphones out) can put them
  /// back on the player instead of losing them: iOS stops the engine for
  /// either, and a stopped engine never restarts on its own. Before this,
  /// the reveal clock froze, the drain never fired, and the answer or the
  /// class hung silent until the app was killed.
  private struct Pending {
    let id: Int
    let buffer: AVAudioPCMBuffer
    let seconds: Double
  }
  private var pending: [Pending] = []
  private var nextBufferId = 0
  /// Bumped whenever the player is stopped out from under us. AVFoundation
  /// fires the completion of EVERY queued buffer when a player stops, played
  /// or not, so a completion from an older generation is ignored — counting
  /// it would move the reveal clock through audio nobody heard.
  private var generation = 0
  private var observers: [NSObjectProtocol] = []
  private var interrupted = false
  /// The student paused (a live class's pause). Recovery restores the engine
  /// but must not undo a pause somebody chose.
  private var userPaused = false

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
      // NOT playing yet: buffers queue silently until the prebuffer fills,
      // so the first word starts whole instead of shaky. feed() starts it.
      self.playing = false
      self.engine = engine
      self.player = player
      self.timePitch = timePitch
      self.format = format
      self.fedSeconds = 0
      self.observeInterruptions()
    }

    Function("feed") { (base64: String) in
      guard let data = Data(base64Encoded: base64) else { return }
      self.schedule(data)
    }

    Function("feedBytes") { (data: Data) in
      // The classroom already holds decoded PCM bytes; re-encoding them to
      // base64 just to decode again here would be pure ceremony.
      self.schedule(data)
    }

    Function("pause") {
      self.userPaused = true
      self.player?.pause()
    }

    Function("resume") {
      self.userPaused = false
      if self.playing { self.player?.play() }
    }

    Function("playedSeconds") { () -> Double in
      // Rendered audio only. AVAudioPlayerNode's own timeline keeps running
      // through buffer underruns, so the previous clock raced through
      // silence whenever synthesis lagged playback — and the board revealed
      // lines whose audio had not sounded. Seen live, a class showing far
      // more than it was teaching.
      return self.consumedSeconds
    }



    Function("finish") {
      // The stream is over. An answer shorter than the prebuffer would
      // otherwise wait forever for a fill that is never coming.
      if !self.playing, let player = self.player, self.fedSeconds > 0 {
        player.play()
        self.playing = true
      }
    }

    Function("fedSeconds") { () -> Double in
      return self.fedSeconds
    }

    Function("stop") {
      self.teardown()
    }
  }

  private func schedule(_ data: Data) {
    guard let player = self.player,
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
    let seconds = Double(frames) / format.sampleRate
    let item = Pending(id: nextBufferId, buffer: buffer, seconds: seconds)
    nextBufferId += 1
    pending.append(item)
    enqueue(item, on: player)
    self.fedSeconds += seconds
    // While interrupted the engine is stopped; queue now, play on recovery.
    if !self.interrupted && !self.playing && self.fedSeconds >= self.prebufferSeconds {
      player.play()
      self.playing = true
    }
  }

  /// Puts one buffer on the player, stamped with the current generation.
  private func enqueue(_ item: Pending, on player: AVAudioPlayerNode) {
    let gen = generation
    player.scheduleBuffer(item.buffer, at: nil, options: [],
                          completionCallbackType: .dataPlayedBack) { [weak self] _ in
      DispatchQueue.main.async {
        guard let self = self, gen == self.generation else { return }
        self.consumedSeconds += item.seconds
        self.pending.removeAll { $0.id == item.id }
      }
    }
  }

  private func observeInterruptions() {
    removeObservers()
    let center = NotificationCenter.default
    observers.append(center.addObserver(
      forName: AVAudioSession.interruptionNotification,
      object: AVAudioSession.sharedInstance(), queue: .main
    ) { [weak self] note in
      guard let self = self,
            let raw = note.userInfo?[AVAudioSessionInterruptionTypeKey] as? UInt,
            let type = AVAudioSession.InterruptionType(rawValue: raw) else { return }
      if type == .began {
        // The system has already stopped the engine. Retire this
        // generation now, before the stopped player's completions land.
        self.interrupted = true
        self.generation += 1
        NSLog("[PcmPlayer] interrupted with %d buffer(s) unplayed", self.pending.count)
      } else {
        // Recover whether or not iOS sets .shouldResume. The voice is the
        // answer the student asked for; staying silent is never right, and
        // the JS side has no control to resume it.
        self.recover(reason: "interruption ended")
      }
    })
    if let engine = engine {
      // Headphones out, Bluetooth dropping, a new output: the engine stops
      // itself and waits to be restarted on the new route.
      observers.append(center.addObserver(
        forName: .AVAudioEngineConfigurationChange,
        object: engine, queue: .main
      ) { [weak self] _ in
        guard let self = self else { return }
        self.generation += 1
        self.recover(reason: "audio route changed")
      })
    }
  }

  /// Restart the engine and replay everything that had not been heard.
  /// A buffer cut off mid-way plays again from its start, so up to about a
  /// second may repeat — better than a sentence with a hole in it.
  private func recover(reason: String) {
    guard let engine = engine, let player = player,
          let timePitch = timePitch, let format = format else { return }
    interrupted = false
    generation += 1
    do {
      try AVAudioSession.sharedInstance().setActive(true)
    } catch {
      NSLog("[PcmPlayer] could not reactivate the audio session: %@", "\(error)")
    }
    player.stop()
    // Connections survive a stop, but a route change can leave the output
    // expecting another format. Re-making them is cheap and always valid.
    engine.connect(player, to: timePitch, format: format)
    engine.connect(timePitch, to: engine.mainMixerNode, format: format)
    do {
      try engine.start()
    } catch {
      NSLog("[PcmPlayer] engine restart failed after %@: %@", reason, "\(error)")
      return
    }
    for item in pending {
      enqueue(item, on: player)
    }
    NSLog("[PcmPlayer] recovered after %@, replaying %d buffer(s)", reason, pending.count)
    if (playing || fedSeconds >= prebufferSeconds) && !userPaused {
      player.play()
      playing = true
    }
  }

  private func removeObservers() {
    for token in observers {
      NotificationCenter.default.removeObserver(token)
    }
    observers.removeAll()
  }

  private func teardown() {
    removeObservers()
    // Retire the generation first: stop() fires every queued completion,
    // and none of those belong to whatever starts next.
    generation += 1
    pending.removeAll()
    interrupted = false
    userPaused = false
    player?.stop()
    engine?.stop()
    player = nil
    timePitch = nil
    engine = nil
    format = nil
    fedSeconds = 0
    consumedSeconds = 0
    playing = false
  }
}
