import { getResumableSession, resumeDronaSession } from '@/lib/drona-live';

const mockApiFetch = jest.fn();
jest.mock('@/lib/api', () => ({ apiFetch: (...a: unknown[]) => mockApiFetch(...a) }));

describe('resume helpers', () => {
  beforeEach(() => mockApiFetch.mockReset().mockResolvedValue({ resumable: false }));

  it('asks for the unfinished class with the lesson name encoded', async () => {
    await getResumableSession({ chapter_id: 'c-1', subtopic: "Newton's second law" });
    expect(mockApiFetch).toHaveBeenCalledWith(
      "/drona/session/resumable?chapter_id=c-1&subtopic=Newton's%20second%20law"
    );
  });

  it('re-opens a class by id with a POST', async () => {
    await resumeDronaSession('s-9');
    expect(mockApiFetch).toHaveBeenCalledWith('/drona/session/s-9/resume', {
      method: 'POST',
      body: '{}',
    });
  });
});
