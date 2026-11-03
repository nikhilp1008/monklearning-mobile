/**
 * Paging the Doubts history: `GET /doubts?limit=60&before=…&before_id=…`, and
 * a server from before the cursor (which ignores it and sends page one again)
 * must not fill the list with copies.
 */
import { apiFetch } from '@/lib/api';
import {
  DOUBTS_PAGE_SIZE,
  absorbDoubtsPage,
  listDoubts,
  olderThanCursor,
  type DoubtSummary,
} from '@/lib/doubts';

jest.mock('@/lib/supabase', () => ({ supabase: { auth: { getSession: async () => ({ data: {} }) } } }));
jest.mock('@/lib/api', () => ({ ...jest.requireActual('@/lib/api'), apiFetch: jest.fn() }));

const row = (id: string, created_at: string) => ({ id, created_at }) as DoubtSummary;
const page = (from: number, n: number) =>
  Array.from({ length: n }, (_, i) =>
    row(`id-${String(1000 - from - i).padStart(4, '0')}`, new Date(Date.UTC(2026, 9, 1) - (from + i) * 60000).toISOString())
  );

describe('listDoubts', () => {
  beforeEach(() => (apiFetch as jest.Mock).mockReset().mockResolvedValue({ doubts: [] }));

  it('asks for the first page with the page size and no cursor', async () => {
    await listDoubts();
    expect(apiFetch).toHaveBeenCalledWith(`/doubts?limit=${DOUBTS_PAGE_SIZE}`);
  });

  it('sends both halves of the cursor, encoded', async () => {
    await listDoubts({ cursor: { before: '2026-10-01T10:00:00.123+00:00', beforeId: 'abc' } });
    const url = (apiFetch as jest.Mock).mock.calls[0][0] as string;
    expect(url).toContain('before=2026-10-01T10%3A00%3A00.123%2B00%3A00');
    expect(url).toContain('before_id=abc');
  });
});

describe('absorbDoubtsPage', () => {
  it('pages on while full pages bring new rows, and stops at a short one', () => {
    const seen = new Set<string>();
    const first = absorbDoubtsPage(seen, page(0, 60));
    expect(first.fresh).toHaveLength(60);
    expect(first.done).toBe(false);
    expect(first.cursor).toEqual({ before: page(0, 60)[59].created_at, beforeId: page(0, 60)[59].id });

    const last = absorbDoubtsPage(seen, page(60, 12));
    expect(last.fresh).toHaveLength(12);
    expect(last.done).toBe(true);
  });

  it('stops when an older server sends the first page again', () => {
    const seen = new Set<string>();
    absorbDoubtsPage(seen, page(0, 60));
    const again = absorbDoubtsPage(seen, page(0, 60));
    expect(again.fresh).toHaveLength(0);
    expect(again.done).toBe(true);
  });

  it('drops the overlap of a page that partly repeats', () => {
    const seen = new Set<string>();
    absorbDoubtsPage(seen, page(0, 60));
    const next = absorbDoubtsPage(seen, page(50, 60));
    expect(next.fresh).toHaveLength(50);
    expect(next.done).toBe(false);
  });

  it('an empty page is the end', () => {
    expect(absorbDoubtsPage(new Set(), [])).toEqual({ fresh: [], cursor: null, done: true });
  });
});

it('orders by time, then by id within one snap, as the server does', () => {
  const cursor = { before: '2026-10-01T10:00:00Z', beforeId: 'm' };
  expect(olderThanCursor(row('z', '2026-10-01T09:59:59Z'), cursor)).toBe(true);
  expect(olderThanCursor(row('a', '2026-10-01T10:00:01Z'), cursor)).toBe(false);
  expect(olderThanCursor(row('a', '2026-10-01T10:00:00Z'), cursor)).toBe(true);
  expect(olderThanCursor(row('z', '2026-10-01T10:00:00Z'), cursor)).toBe(false);
});
