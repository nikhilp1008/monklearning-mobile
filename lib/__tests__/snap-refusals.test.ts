/**
 * How a refused snap reads. The stream is XHR, not `apiFetch`, so everything
 * `apiFetch` does for a refusal it has to do itself.
 */
import { ApiError } from '@/lib/api';
import { readSnapFailure, rejectPhotoFailure } from '@/lib/doubts';
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

it('the size cap’s plain-sentence detail reads as too large, not "HTTP 413"', async () => {
  const result = snapDoubtStreaming(PHOTO, {});
  await opened();
  FakeXHR.last.refuse(413, { detail: 'That photo is larger than 10 MB.' });
  await expect(result).rejects.toMatchObject({
    snapFailure: { stage: 'too_large', message: 'That photo is larger than 10 MB.', retake_helps: true },
  });
});

it('a 413 from in front of the API (no JSON) is still too large', async () => {
  const result = snapDoubtStreaming(PHOTO, {});
  await opened();
  FakeXHR.last.refuse(413, '<html>Request Entity Too Large</html>');
  await expect(result).rejects.toMatchObject({ snapFailure: { stage: 'too_large' } });
});

describe('readSnapFailure (the POST /doubts fallback)', () => {
  it('reads a dropped connection as ours, never printing the raw message', () => {
    const failure = readSnapFailure(new TypeError('Network request failed'));
    expect(failure).toMatchObject({ stage: 'network', remedy: 'our_side', retake_helps: false });
    expect(failure.message).not.toMatch(/Network request failed/);
  });

  it('reads apiFetch’s timeout (status 0) as the connection', () => {
    expect(readSnapFailure(new ApiError('This is taking longer than expected.', 0))).toMatchObject({
      stage: 'network',
    });
  });

  it('reads a plain-sentence 4xx as a refused file, with that sentence', () => {
    const detail = 'That file type is not supported. Send a JPEG, PNG, WebP or HEIC photo.';
    expect(readSnapFailure(new ApiError(detail, 415, { detail }))).toMatchObject({
      stage: 'rejected',
      message: detail,
      remedy: 'retake',
    });
  });

  it('reads a 413 as too large', () => {
    const detail = 'That photo is larger than 10 MB.';
    expect(readSnapFailure(new ApiError(detail, 413, { detail }))).toMatchObject({ stage: 'too_large' });
  });
});

it('a photo over the cap is caught before upload as too large', () => {
  expect(rejectPhotoFailure({ uri: 'x', mimeType: 'image/jpeg', fileSize: 11 * 1024 * 1024 })).toMatchObject({
    stage: 'too_large',
  });
  expect(rejectPhotoFailure({ uri: 'x', mimeType: 'image/gif' })).toMatchObject({ stage: 'rejected' });
  expect(rejectPhotoFailure({ uri: 'x', mimeType: 'image/jpeg', fileSize: 1000 })).toBeNull();
});
