import { LiveAsk, LiveUnavailable } from '@/lib/followup-live';

jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: async () => ({ data: { session: { access_token: 't' } } }) } },
}));

type Sent = string | ArrayBuffer;
class FakeSocket {
  static last: FakeSocket;
  sent: Sent[] = [];
  binaryType = '';
  onopen: (() => void) | null = null;
  onmessage: ((e: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  onclose: ((e: { code: number }) => void) | null = null;
  constructor() {
    FakeSocket.last = this;
  }
  send(d: Sent) {
    this.sent.push(d);
  }
  close() {
    this.onclose?.({ code: 1000 });
  }
  // test helpers
  serverSays(event: string, data: object) {
    this.onmessage?.({ data: `event: ${event}\ndata: ${JSON.stringify(data)}\n\n` });
  }
}

const START = { surface: 'doubts' as const, id: 'd1', history: [], pcm: true };
const handlers = () => ({ onStep: jest.fn(), onTranscript: jest.fn(), onSpoken: jest.fn() });

beforeAll(() => {
  process.env.EXPO_PUBLIC_API_URL = 'https://api.example.test';
  (global as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
});

it('queues audio until the socket opens, then sends start before the audio', async () => {
  const ask = await LiveAsk.begin(START);
  ask.sendPcm(new Uint8Array([1, 2, 3, 4]));
  FakeSocket.last.onopen?.();
  const [first, second] = FakeSocket.last.sent;
  expect(JSON.parse(first as string)).toMatchObject({ type: 'start', id: 'd1', surface: 'doubts' });
  expect(second).toBeInstanceOf(ArrayBuffer);
});

it('streams the answer frames into the same handlers', async () => {
  const ask = await LiveAsk.begin(START);
  const ws = FakeSocket.last;
  ws.onopen?.();
  const h = handlers();
  const done = ask.finish(h);
  expect(JSON.parse(ws.sent[ws.sent.length - 1] as string)).toEqual({ type: 'stop' });
  ws.serverSays('transcript', { text: 'why n by 2' });
  ws.serverSays('step', { n: 1, text: 'S_n = n/2 ...' });
  ws.close();
  await done;
  expect(h.onTranscript).toHaveBeenCalledWith('why n by 2');
  expect(h.onStep).toHaveBeenCalledWith({ n: 1, text: 'S_n = n/2 ...' });
});

it('falls back when the server declines', async () => {
  const ask = await LiveAsk.begin(START);
  const ws = FakeSocket.last;
  ws.onopen?.();
  const done = ask.finish(handlers());
  ws.serverSays('live_unavailable', { reason: 'off' });
  ws.close();
  await expect(done).rejects.toBeInstanceOf(LiveUnavailable);
});

it('falls back when the socket closes before any answer', async () => {
  const ask = await LiveAsk.begin(START);
  const ws = FakeSocket.last;
  ws.onopen?.();
  const done = ask.finish(handlers());
  ws.onclose?.({ code: 1006 });
  await expect(done).rejects.toBeInstanceOf(LiveUnavailable);
});

it('falls back when the socket never opened', async () => {
  const ask = await LiveAsk.begin(START);
  await expect(ask.finish(handlers())).rejects.toBeInstanceOf(LiveUnavailable);
});

it('an error frame is a real answer failure, not a fallback', async () => {
  const ask = await LiveAsk.begin(START);
  const ws = FakeSocket.last;
  ws.onopen?.();
  const done = ask.finish(handlers());
  ws.serverSays('error', { message: 'Monk did not catch that' });
  ws.close();
  await expect(done).rejects.toThrow('Monk did not catch that');
  await expect(done).rejects.not.toBeInstanceOf(LiveUnavailable);
});
