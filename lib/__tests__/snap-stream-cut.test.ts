/**
 * A snap stream that breaks is only re-sent on `POST /doubts` if it never
 * started. After the first frame the server has the photo and is saving and
 * charging answers, so a second upload would solve it twice.
 */
import { snapDoubt } from '@/lib/doubts';
import { cancelSnapJob, startSnapJob, useSnapJob, type SnapJob } from '@/lib/snap-job';
import { snapDoubtStreaming } from '@/lib/snap-stream';

jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: async () => ({ data: { session: { access_token: 't' } } }) } },
}));
jest.mock('@/lib/doubts', () => ({
  ...jest.requireActual('@/lib/doubts'),
  snapDoubt: jest.fn(),
}));

class FakeXHR {
  static last: FakeXHR;
  responseText = '';
  status = 0;
  aborted = false;
  upload: { onprogress: (() => void) | null } = { onprogress: null };
  onprogress: (() => void) | null = null;
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  ontimeout: (() => void) | null = null;
  open() {}
  setRequestHeader() {}
  send() {
    FakeXHR.last = this;
  }
  abort() {
    this.aborted = true;
  }
  // test helpers
  push(event: string, data: object) {
    this.responseText += `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    this.onprogress?.();
  }
  end(status = 200, body?: string) {
    this.status = status;
    if (body !== undefined) this.responseText = body;
    this.onload?.();
  }
}

const PHOTO = { uri: 'file:///snap.jpg' };
const QUESTION = {
  id: 'q1', question_index: 1, question_text: 'Q1. x', subject: 'physics', chapter: null,
  legible: true, legibility_note: null, answer: '2', key_idea: null, status: 'solved', failure_reason: null,
};

/** Lets the stream's `await getSession()` run, so the request is open. */
const opened = async () => {
  for (let i = 0; i < 5; i++) await Promise.resolve();
};

let job: SnapJob = { status: 'idle' };
// Read straight off the store's snapshot: useSnapJob is a hook, and this is
// the same function it subscribes with.
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useSyncExternalStore: (_s: unknown, get: () => SnapJob) => get(),
}));
// eslint-disable-next-line react-hooks/rules-of-hooks -- the store's snapshot, not a render
const read = (): SnapJob => useSnapJob();

beforeAll(() => {
  process.env.EXPO_PUBLIC_API_URL = 'https://api.example.test';
  (global as unknown as { XMLHttpRequest: unknown }).XMLHttpRequest = FakeXHR;
});

beforeEach(() => {
  (snapDoubt as jest.Mock).mockReset();
  cancelSnapJob();
});

afterEach(() => {
  jest.useRealTimers();
});

it('falls back to POST /doubts when the stream fails before any frame', async () => {
  (snapDoubt as jest.Mock).mockResolvedValue({ submission_id: 's', note: null, solved_count: 1, questions: [QUESTION] });
  startSnapJob(PHOTO);
  await opened();
  FakeXHR.last.onerror?.();
  await opened();
  expect(snapDoubt).toHaveBeenCalledTimes(1);
  job = read();
  expect(job.status).toBe('solved');
});

it('keeps what arrived, and does not upload again, when the stream breaks mid-page', async () => {
  startSnapJob(PHOTO);
  await opened();
  const xhr = FakeXHR.last;
  xhr.push('meta', { submission_id: 's1', question_count: 2 });
  xhr.push('question', QUESTION);
  xhr.onerror?.();
  await opened();
  expect(snapDoubt).not.toHaveBeenCalled();
  job = read();
  expect(job.status).toBe('solved');
  if (job.status !== 'solved') return;
  expect(job.response.questions).toHaveLength(1);
  expect(job.response.submission_id).toBe('s1');
  expect(job.response.note).toMatch(/connection dropped/);
});

it('fails on our side, without uploading again, when nothing was answered yet', async () => {
  startSnapJob(PHOTO);
  await opened();
  const xhr = FakeXHR.last;
  xhr.push('meta', { submission_id: 's1', question_count: 1 });
  xhr.push('thinking', { seconds: 3 });
  xhr.onerror?.();
  await opened();
  expect(snapDoubt).not.toHaveBeenCalled();
  job = read();
  expect(job.status).toBe('failed');
  if (job.status !== 'failed') return;
  expect(job.failure.remedy).toBe('our_side');
  expect(job.failure.retake_helps).toBe(false);
});

it('treats a stream that closes without done as cut, not finished', async () => {
  startSnapJob(PHOTO);
  await opened();
  const xhr = FakeXHR.last;
  xhr.push('meta', { submission_id: 's1', question_count: 1 });
  xhr.end(200);
  await opened();
  expect(snapDoubt).not.toHaveBeenCalled();
  expect(read().status).toBe('failed');
});

describe('the idle limit', () => {
  it('is reset by every frame, so a long solve that keeps ticking is not cut', async () => {
    jest.useFakeTimers();
    const result = snapDoubtStreaming(PHOTO, {});
    await opened();
    const xhr = FakeXHR.last;
    xhr.push('meta', { submission_id: 's1', question_count: 1 });
    // 200s of solving, a tick every 60s: past the old 150s ceiling.
    for (let t = 0; t < 4; t++) {
      jest.advanceTimersByTime(60000);
      xhr.push('thinking', { seconds: (t + 1) * 60 });
    }
    xhr.push('question', QUESTION);
    xhr.push('done', { submission_id: 's1', solved_count: 1 });
    xhr.end(200);
    await expect(result).resolves.toMatchObject({ solved_count: 1 });
    expect(xhr.aborted).toBe(false);
  });

  it('cuts a stream that goes quiet, and says how far it got', async () => {
    jest.useFakeTimers();
    const result = snapDoubtStreaming(PHOTO, {});
    await opened();
    const xhr = FakeXHR.last;
    xhr.push('meta', { submission_id: 's1', question_count: 1 });
    jest.advanceTimersByTime(121000);
    await expect(result).rejects.toMatchObject({ streamCut: { framesReceived: true } });
    expect(xhr.aborted).toBe(true);
  });

  it('is fed by the upload too, so a slow photo upload is not a stalled stream', async () => {
    jest.useFakeTimers();
    const result = snapDoubtStreaming(PHOTO, {});
    await opened();
    const xhr = FakeXHR.last;
    for (let t = 0; t < 3; t++) {
      jest.advanceTimersByTime(60000);
      xhr.upload.onprogress?.();
    }
    expect(xhr.aborted).toBe(false);
    xhr.push('meta', { submission_id: 's1', question_count: 1 });
    xhr.push('done', { submission_id: 's1', solved_count: 0 });
    xhr.end(200);
    await expect(result).resolves.toBeTruthy();
  });
});
