/**
 * How a refused snap reads. The stream is XHR, not `apiFetch`, so everything
 * `apiFetch` does for a refusal it has to do itself.
 */
import { onPassRequired } from '@/lib/pass-events';
import { snapDoubtStreaming } from '@/lib/snap-stream';

jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: async () => ({ data: { session: { access_token: 't' } } }) } },
}));

class FakeXHR {
  static last: FakeXHR;
  responseText = '';
  status = 0;
  upload = { onprogress: null };
  onprogress: (() => void) | null = null;
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  ontimeout: (() => void) | null = null;
  open() {}
  setRequestHeader() {}
  send() {
    FakeXHR.last = this;
  }
  abort() {}
  refuse(status: number, body: unknown) {
    this.status = status;
    this.responseText = typeof body === 'string' ? body : JSON.stringify(body);
    this.onload?.();
  }
}

const PHOTO = { uri: 'file:///snap.jpg' };
const opened = async () => {
  for (let i = 0; i < 5; i++) await Promise.resolve();
};

beforeAll(() => {
  process.env.EXPO_PUBLIC_API_URL = 'https://api.example.test';
  (global as unknown as { XMLHttpRequest: unknown }).XMLHttpRequest = FakeXHR;
});

it('an ended pass tells the app root, and is not "on our end"', async () => {
  const heard = jest.fn();
  const off = onPassRequired(heard);
  const result = snapDoubtStreaming(PHOTO, {});
  await opened();
  FakeXHR.last.refuse(402, { detail: { error: 'pass_required', message: 'Pass needed' } });
  await expect(result).rejects.toMatchObject({ snapFailure: { stage: 'pass' } });
  expect(heard).toHaveBeenCalledTimes(1);
  off();
});

it('the daily limit keeps the server’s own quota fields', async () => {
  const result = snapDoubtStreaming(PHOTO, {});
  await opened();
  FakeXHR.last.refuse(429, {
    detail: { message: 'You have used all 50.', stage: 'quota', used_today: 50, daily_limit: 50 },
  });
  await expect(result).rejects.toMatchObject({ snapFailure: { stage: 'quota' } });
});
