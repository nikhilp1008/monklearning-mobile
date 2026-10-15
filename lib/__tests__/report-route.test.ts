const mockPush = jest.fn();
jest.mock('expo-router', () => ({ router: { push: (...a: unknown[]) => mockPush(...a) } }));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));

import { lastFollowUpContext, rememberFollowUp } from '@/lib/last-followup';
import { openReportSheet } from '@/lib/reports';

describe('openReportSheet', () => {
  beforeEach(() => mockPush.mockClear());

  it('sends the context as JSON, without empty fields', () => {
    openReportSheet({
      surface: 'textbook',
      chapter: 'Current Electricity',
      quote: '',
      context: { page_key: 'physics-12-current', topic: 'Ohm’s law', picked: null },
    });
    const { pathname, params } = mockPush.mock.calls[0][0];
    expect(pathname).toBe('/report-sheet');
    expect(params.surface).toBe('textbook');
    expect(params.quote).toBeUndefined();
    expect(JSON.parse(params.context)).toEqual({ page_key: 'physics-12-current', topic: 'Ohm’s law' });
  });

  it('leaves context out when there is nothing in it', () => {
    openReportSheet({ doubtId: 'd1', context: lastFollowUpContext('never-asked') });
    expect(mockPush.mock.calls[0][0].params).toEqual({ doubtId: 'd1' });
  });
});

describe('last follow-up', () => {
  it('is kept per target and goes stale', () => {
    const now = jest.spyOn(Date, 'now').mockReturnValue(1_000_000);
    rememberFollowUp('d1', 'why divide by 2?', 'Because the mass is 0.1 kg.');
    expect(lastFollowUpContext('d1')).toEqual({
      followup_question: 'why divide by 2?',
      followup_answer: 'Because the mass is 0.1 kg.',
      teacher: expect.any(String),
    });
    expect(lastFollowUpContext('d2')).toBeNull();
    now.mockReturnValue(1_000_000 + 11 * 60 * 1000);
    expect(lastFollowUpContext('d1')).toBeNull();
    now.mockRestore();
  });
});
