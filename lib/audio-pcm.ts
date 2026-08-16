/**
 * Manual base64 <-> bytes, since we can't assume `atob`/`btoa` exist across
 * web preview / iOS / Android Hermes consistently. Only decode is actually
 * needed today (audio_chunk.audio arrives as base64 text over the WS; mic
 * PCM goes out as raw binary frames and file writes take Uint8Array
 * directly via expo-file-system's new API) — encode is kept for symmetry
 * and any future debug/logging need.
 */
const B64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export function base64ToBytes(base64: string): Uint8Array {
  const clean = base64.replace(/[^A-Za-z0-9+/]/g, '');
  const byteLength = Math.floor((clean.length * 6) / 8);
  const bytes = new Uint8Array(byteLength);
  let byteIndex = 0;
  let buffer = 0;
  let bitsFilled = 0;
  for (let i = 0; i < clean.length; i++) {
    const value = B64_CHARS.indexOf(clean[i]);
    if (value === -1) continue;
    buffer = (buffer << 6) | value;
    bitsFilled += 6;
    if (bitsFilled >= 8) {
      bitsFilled -= 8;
      bytes[byteIndex++] = (buffer >> bitsFilled) & 0xff;
    }
  }
  return bytes;
}

export function bytesToBase64(bytes: Uint8Array): string {
  let result = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i];
    const b1 = i + 1 < bytes.length ? bytes[i + 1] : undefined;
    const b2 = i + 2 < bytes.length ? bytes[i + 2] : undefined;
    result += B64_CHARS[b0 >> 2];
    result += B64_CHARS[((b0 & 0x03) << 4) | ((b1 ?? 0) >> 4)];
    result += b1 === undefined ? '=' : B64_CHARS[((b1 & 0x0f) << 2) | ((b2 ?? 0) >> 6)];
    result += b2 === undefined ? '=' : B64_CHARS[b2 & 0x3f];
  }
  return result;
}

/** Wraps raw headerless PCM in a 44-byte canonical WAV/RIFF header so it can
 *  be handed to an ordinary file-based audio player (expo-audio's AudioPlayer
 *  only accepts complete playable sources, not bare PCM). */
export function wrapPcmAsWav(
  pcm: Uint8Array,
  sampleRate: number,
  numChannels: number,
  bitsPerSample: number
): Uint8Array {
  const blockAlign = numChannels * (bitsPerSample / 8);
  const byteRate = sampleRate * blockAlign;
  const header = new Uint8Array(44);
  const view = new DataView(header.buffer);

  writeAscii(view, 0, 'RIFF');
  view.setUint32(4, 36 + pcm.length, true);
  writeAscii(view, 8, 'WAVE');
  writeAscii(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // fmt chunk size
  view.setUint16(20, 1, true); // PCM = 1
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeAscii(view, 36, 'data');
  view.setUint32(40, pcm.length, true);

  const wav = new Uint8Array(44 + pcm.length);
  wav.set(header, 0);
  wav.set(pcm, 44);
  return wav;
}

/** Strips a WAV/RIFF header, returning just the `data` chunk payload — for
 *  when a locally-recorded file needs to be sent as headerless PCM. Falls
 *  back to returning the input unchanged if it isn't a RIFF/WAVE file (e.g.
 *  already-raw PCM), rather than throwing. */
export function extractPcmFromWav(wavBytes: Uint8Array): Uint8Array {
  if (wavBytes.length < 12) return wavBytes;
  const view = new DataView(wavBytes.buffer, wavBytes.byteOffset, wavBytes.byteLength);
  const isRiff = readAscii(view, 0, 4) === 'RIFF' && readAscii(view, 8, 4) === 'WAVE';
  if (!isRiff) return wavBytes;

  let offset = 12;
  while (offset + 8 <= wavBytes.length) {
    const chunkId = readAscii(view, offset, 4);
    const chunkSize = view.getUint32(offset + 4, true);
    if (chunkId === 'data') {
      return wavBytes.subarray(offset + 8, offset + 8 + chunkSize);
    }
    offset += 8 + chunkSize + (chunkSize % 2);
  }
  return wavBytes;
}

function writeAscii(view: DataView, offset: number, text: string) {
  for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
}

function readAscii(view: DataView, offset: number, length: number): string {
  let s = '';
  for (let i = 0; i < length; i++) s += String.fromCharCode(view.getUint8(offset + i));
  return s;
}
