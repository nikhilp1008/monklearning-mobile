import { AudioBufferQueueSourceNode, AudioContext } from 'react-native-audio-api';

/**
 * Gapless playback of a follow-up answer, fed raw PCM as it arrives.
 *
 * Everything before this played FILES — a sequence of WAVs handed to
 * expo-audio one after another. That is why the voice kept breaking however it
 * was sequenced: opening a file has a load-and-start cost, so every clip
 * boundary is a gap, and the only way to hide one is to put it where a speaker
 * would have paused anyway. Cutting the audio every 0.8s by byte count put
 * those gaps mid-word, which no amount of sequencing could repair.
 *
 * `AudioBufferQueueSourceNode` is a different thing entirely: ONE source node
 * playing a queue of buffers as a continuous signal. Samples appended to it
 * follow the ones before with nothing in between, so the audio can be cut
 * anywhere — mid-word included — and still come out as one voice.
 *
 * Which makes Rumik's own streaming usable end to end at last: it emits PCM
 * while it is still speaking, and that PCM can now be played while it is still
 * arriving, instead of waiting for a whole sentence to exist as a file.
 *
 * The classroom keeps AudioPlaybackQueue and is untouched. It carries hard-won
 * behaviour for pausing, barge-in and a wedged playhead, none of which a
 * follow-up needs and none of which should be disturbed to make this faster.
 */

/** Rumik: 24kHz, 16-bit, mono. The server wraps it; this unwraps it. */
const SAMPLE_RATE = 24000;
/** A canonical RIFF header sits before the samples. */
const WAV_HEADER_BYTES = 44;
/** 16-bit signed at full scale, for the conversion to float. */
const INT16_FULL_SCALE = 32768;

export class FollowUpAudio {
  private context: AudioContext | null = null;
  private source: AudioBufferQueueSourceNode | null = null;
  private started = false;
  private stopped = false;

  /**
   * Appends one piece of audio. Any size, any boundary.
   *
   * The server still sends complete WAVs, so the same stream could feed a
   * file-based player if this one is ever swapped out; the header is stripped
   * here rather than asking the server for two formats.
   */
  enqueue(wav: Uint8Array) {
    if (this.stopped) return;
    try {
      const buffer = this.toBuffer(wav);
      if (!buffer) return;
      const source = this.ensureSource();
      source.enqueueBuffer(buffer);
      if (__DEV__ && !this.started) {
        console.log('[followup-audio] first buffer:', buffer.duration.toFixed(2),
                    's, context', this.context?.state);
      }
      if (!this.started) {
        // Started only once the FIRST buffer is in. Starting an empty queue
        // plays silence and the node can consider itself finished before the
        // audio it was waiting for ever arrives.
        this.started = true;
        source.start();
      }
    } catch {
      // A piece that will not enqueue is a moment of audio lost, not an
      // answer lost — the steps are on screen either way.
    }
  }

  /** Int16 PCM from the server into the float samples the graph wants. */
  private toBuffer(wav: Uint8Array) {
    const context = this.ensureContext();
    if (!context) return null;
    const bytes = wav.length - WAV_HEADER_BYTES;
    if (bytes <= 1) return null;
    const frames = Math.floor(bytes / 2);
    // `byteOffset` matters: a Uint8Array decoded from base64 can be a view
    // into a larger buffer, and reading the raw ArrayBuffer would play
    // whatever happens to sit in front of it.
    const samples = new Int16Array(
      wav.buffer.slice(
        wav.byteOffset + WAV_HEADER_BYTES,
        wav.byteOffset + WAV_HEADER_BYTES + frames * 2
      )
    );
    const buffer = context.createBuffer(1, frames, SAMPLE_RATE);
    const channel = buffer.getChannelData(0);
    for (let i = 0; i < frames; i += 1) {
      channel[i] = samples[i] / INT16_FULL_SCALE;
    }
    return buffer;
  }

  private ensureContext() {
    if (this.stopped) return null;
    if (!this.context) {
      this.context = new AudioContext({ sampleRate: SAMPLE_RATE });
      // iOS hands back a SUSPENDED context, and a suspended graph produces
      // silence with no error anywhere — the buffers enqueue, the source
      // starts, and nothing is heard. Resuming is asynchronous and nothing
      // waits on it: buffers queued meanwhile are played once it is running.
      this.context.resume().catch(() => {});
    }
    if (this.context.state === 'suspended') {
      // The session can be taken away again — the recorder claiming the
      // microphone for the next question is the obvious way — so this is
      // checked on every piece rather than only at creation.
      this.context.resume().catch(() => {});
    }
    return this.context;
  }

  private ensureSource() {
    const context = this.ensureContext();
    if (!context) throw new Error('the audio context is gone');
    if (!this.source) {
      this.source = context.createBufferQueueSource();
      this.source.connect(context.destination);
    }
    return this.source;
  }

  /** Stops immediately and releases the graph. Safe to call more than once. */
  stop() {
    if (this.stopped) return;
    this.stopped = true;
    try {
      // Clear BEFORE stop: anything still queued would otherwise play on for
      // as long as it lasts, which is how Done left the voice talking over a
      // screen the student had already dismissed.
      this.source?.clearBuffers();
      if (this.started) this.source?.stop();
    } catch {
      // Already stopped.
    }
    this.source = null;
    const context = this.context;
    this.context = null;
    // Closing is async and nothing waits on it; a context that will not close
    // is not worth failing a dismissal over.
    context?.close().catch(() => {});
  }
}
