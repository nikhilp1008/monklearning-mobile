/**
 * What the Doubts tab keeps. An `unsure` doubt was shown to the student right
 * after the snap, working and all, so it has to be findable again.
 */
import { inHistory } from '@/lib/doubts';

jest.mock('@/lib/supabase', () => ({ supabase: { auth: { getSession: async () => ({ data: {} }) } } }));

it('keeps solved and unsure doubts, and drops the ones with nothing to read', () => {
  expect(inHistory({ status: 'solved' })).toBe(true);
  expect(inHistory({ status: 'unsure' })).toBe(true);
  expect(inHistory({ status: 'failed' })).toBe(false);
  expect(inHistory({ status: 'illegible' })).toBe(false);
});
