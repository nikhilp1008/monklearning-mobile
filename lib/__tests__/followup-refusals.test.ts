/**
 * A follow-up the server refuses. The ask routes are XHR, not `apiFetch`, so a
 * 402 has to reach the pass gate from here, and the bar has to know it is not
 * a "Try again".
 */
import { FollowUpError, askAboutDoubt, followUpFailureOf } from '@/lib/doubt-followup';
import { onPassRequired } from '@/lib/pass-events';

jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: async () => ({ data: { session: { access_token: 't' } } }) } },
}));

class FakeXHR {
  static last: FakeXHR;
  responseText = '';
  status = 0;
  readyState = 0;
  sent: unknown = null;
  url = '';
  onreadystatechange: (() => void) | null = null;
  onerror: (() => void) | null = null;
  ontimeout: (() => void) | null = null;
  onprogress: (() => void) | null = null;
  open(_method: string, url: string) {
    this.url = url;
  }
  setRequestHeader() {}
  send(body: unknown) {
    this.sent = body;
    FakeXHR.last = this;
  }
  abort() {}
  push(event: string, data: object) {
    this.readyState = 3;
    this.status = 200;
    this.responseText += `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    this.onreadystatechange?.();
  }
  end(status = 200, body?: unknown) {
    this.status = status;
    if (body !== undefined) this.responseText = typeof body === 'string' ? body : JSON.stringify(body);
    this.readyState = 4;
    this.onreadystatechange?.();
  }
}

const opened = async () => {
  for (let i = 0; i < 5; i++) await Promise.resolve();
};
const ask = () => askAboutDoubt('d1', 'why?', [], { onStep: jest.fn() });

beforeAll(() => {
  process.env.EXPO_PUBLIC_API_URL = 'https://api.example.test';
  (global as unknown as { XMLHttpRequest: unknown }).XMLHttpRequest = FakeXHR;
});

it('an ended pass tells the app root and is a pass failure, not a retry', async () => {
  const heard = jest.fn();
  const off = onPassRequired(heard);
  const result = ask();
  await opened();
  FakeXHR.last.end(402, { detail: { error: 'pass_required' } });
  const err = await result.catch((e) => e);
  expect(err).toBeInstanceOf(FollowUpError);
  expect(followUpFailureOf(err)).toBe('pass');
  expect(heard).toHaveBeenCalledTimes(1);
  off();
});

it('any other refusal is a retry, and does not touch the pass gate', async () => {
  const heard = jest.fn();
  const off = onPassRequired(heard);
  const result = ask();
  await opened();
  FakeXHR.last.end(502, '<html>Bad gateway</html>');
  expect(followUpFailureOf(await result.catch((e) => e))).toBe('retry');
  expect(heard).not.toHaveBeenCalled();
  off();
});

it('the daily limit is its own failure, so the bar does not say Try again', async () => {
  const result = ask();
  await opened();
  FakeXHR.last.end(429, {
    detail: { message: 'You have reached today’s limit for this.', stage: 'quota', daily_limit: 100 },
  });
  expect(followUpFailureOf(await result.catch((e) => e))).toBe('quota');
});

describe('a stalled answer', () => {
  afterEach(() => jest.useRealTimers());

  it('is given up on after the idle limit, as a retry', async () => {
    jest.useFakeTimers();
    const result = ask();
    await opened();
    FakeXHR.last.push('step_partial', { n: 1, text: 'First' });
    jest.advanceTimersByTime(91000);
    expect(followUpFailureOf(await result.catch((e) => e))).toBe('retry');
  });

  it('is not cut while frames keep arriving', async () => {
    jest.useFakeTimers();
    const onStep = jest.fn();
    const result = askAboutDoubt('d1', 'why?', [], { onStep });
    await opened();
    for (let n = 1; n <= 3; n++) {
      jest.advanceTimersByTime(60000);
      FakeXHR.last.push('step', { n, text: `Step ${n}` });
    }
    FakeXHR.last.end(200);
    await expect(result).resolves.toBeUndefined();
    expect(onStep).toHaveBeenCalledTimes(3);
  });
});
