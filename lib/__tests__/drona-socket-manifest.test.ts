/**
 * EVERY SOCKET THE CLIENT OPENS CARRIES THE WIDGET MANIFEST.
 *
 * The server serves a widget only to a client that says it can draw it, and a
 * socket with no `widgets=` is treated as the 19 Sep baseline — which has no
 * comparison_table, flux_surface, lcr_resonance, region_plot or vector_sum. A
 * socket opened by any path that forgets the manifest therefore silently
 * downgrades a current build to a week-old one.
 *
 * Session T (2026-09-26) suspected exactly that of the prewarmed socket, when
 * an adopted comparison_table drew as its stored SVG on the simulator. It was
 * not the cause — production was refusing the payload before slot 1, because
 * the validator it shells out to is not in the Railway container — but the
 * contract is worth pinning: a fresh connect, the prewarm on the scoping
 * screen, and a reconnect after the socket drops must all carry it.
 */
import { REGISTRY_MANIFEST } from '@/lib/widgets/registry';

jest.mock('@/lib/pcm-player', () => ({ pcmAvailable: true }));
// Playback is irrelevant to which URL a socket opens, and the queues touch
// native audio. Any method they are asked for is a no-op.
const mockAnyMethod = () =>
  new Proxy({}, { get: (t: Record<string, unknown>, k: string) => (t[k] ??= jest.fn()) });
jest.mock('@/lib/audio-playback-queue', () => ({
  AudioPlaybackQueue: jest.fn().mockImplementation(() => mockAnyMethod()),
}));
jest.mock('@/lib/pcm-playback-queue', () => ({
  PcmPlaybackQueue: jest.fn().mockImplementation(() => mockAnyMethod()),
}));

const opened: string[] = [];
const sockets: FakeSocket[] = [];

class FakeSocket {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  readyState = FakeSocket.CONNECTING;
  binaryType = '';
  onopen: ((e: unknown) => void) | null = null;
  onclose: ((e: unknown) => void) | null = null;
  onerror: ((e: unknown) => void) | null = null;
  onmessage: ((e: unknown) => void) | null = null;
  constructor(url: string) {
    opened.push(url);
    sockets.push(this);
  }
  send() {}
  close() {
    this.readyState = FakeSocket.CLOSED;
  }
}

const EXPECTED = REGISTRY_MANIFEST.map((m) => `${m.id}@${m.version}`).sort();

/** The manifest a URL carries, parsed the way the SERVER parses it
 *  (app/drona/live_session_ws.py `_parse_client_widgets`). */
function manifestOf(url: string): string[] | null {
  const q = url.split('?')[1] ?? '';
  const raw = new URLSearchParams(q).get('widgets');
  if (raw === null) return null;
  return raw.split(',').map((p) => p.trim()).filter((p) => p.includes('@')).sort();
}

const flush = () => new Promise((r) => setImmediate(r));

beforeEach(() => {
  opened.length = 0;
  sockets.length = 0;
  (global as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
});

test('the check can fail: a URL without the manifest reads as absent', () => {
  // Without this, every assertion below could pass on a parser that finds a
  // manifest everywhere.
  expect(manifestOf('wss://api.test/drona/session/s/live?stream_tts=1')).toBeNull();
  expect(manifestOf('wss://api.test/drona/session/s/live?stream_tts=1&widgets=')).toEqual([]);
});

test('the manifest has something in it (vacuity guard)', () => {
  expect(EXPECTED.length).toBeGreaterThanOrEqual(17);
  expect(EXPECTED).toContain('comparison_table@1');
});

test('a fresh connect carries the full manifest', async () => {
  // Required after the WebSocket fake is installed.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { DronaVoiceClient } = require('@/lib/drona-voice-client');
  const client = new DronaVoiceClient('s-fresh', async () => 'tok', 'https://api.test', {});
  client.connect();
  await flush();
  expect(opened).toHaveLength(1);
  expect(opened[0]).toContain('/drona/session/s-fresh/live');
  expect(manifestOf(opened[0])).toEqual(EXPECTED);
  client.disconnect();
});

test('the prewarmed socket on the scoping screen carries it too', async () => {
  // Required after the WebSocket fake is installed.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { prewarmDronaClient, discardPrewarmedClient } = require('@/lib/drona-prewarm');
  prewarmDronaClient('s-warm', async () => 'tok', 'https://api.test');
  await flush();
  expect(opened).toHaveLength(1);
  expect(manifestOf(opened[0])).toEqual(EXPECTED);
  discardPrewarmedClient();
});

test('a reconnect after the socket drops carries it too', async () => {
  jest.useFakeTimers({ doNotFake: ['setImmediate'] });
  try {
    // Required after the WebSocket fake is installed.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { DronaVoiceClient } = require('@/lib/drona-voice-client');
    const client = new DronaVoiceClient('s-drop', async () => 'tok', 'https://api.test', {});
    client.connect();
    await flush();
    expect(opened).toHaveLength(1);
    // The socket opens, then drops the way a network blip drops it.
    sockets[0].readyState = FakeSocket.OPEN;
    sockets[0].onopen?.({});
    sockets[0].readyState = FakeSocket.CLOSED;
    sockets[0].onclose?.({ code: 1006, reason: 'abnormal' });
    jest.advanceTimersByTime(60_000);
    await flush();
    expect(opened.length).toBeGreaterThanOrEqual(2);
    for (const url of opened) expect(manifestOf(url)).toEqual(EXPECTED);
    client.disconnect();
  } finally {
    jest.useRealTimers();
  }
});
