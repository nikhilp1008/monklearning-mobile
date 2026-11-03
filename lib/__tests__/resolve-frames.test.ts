import { dispatchFollowUpFrame, type ResolveEvent } from '@/lib/doubt-followup';
import { solutionView } from '@/lib/solution-view';

jest.mock('@/lib/supabase', () => ({ supabase: { auth: { getSession: async () => ({ data: {} }) } } }));

describe('re-solve frames', () => {
  const run = (frames: { event: string; data: unknown }[]) => {
    const seen: ResolveEvent[] = [];
    const steps: unknown[] = [];
    for (const f of frames) {
      dispatchFollowUpFrame(f, { onStep: (s) => steps.push(s), onResolve: (e) => seen.push(e) });
    }
    return { seen, steps };
  };

  it('go to onResolve and never onto the follow-up board', () => {
    const { seen, steps } = run([
      { event: 'resolving', data: { doubt_id: 'd1', applied: 'exponent -8' } },
      { event: 'resolve_step_partial', data: { n: 1, text: '$R = \\rho' } },
      { event: 'resolve_step', data: { n: 1, text: '$R = 50 \\Omega$' } },
      { event: 'resolved', data: { id: 'd1', status: 'solved', answer: '50 Ω' } },
    ]);
    expect(steps).toEqual([]);
    expect(seen.map((e) => e.kind)).toEqual(['resolving', 'partial', 'step', 'resolved']);
    expect(seen[0]).toEqual({ kind: 'resolving', doubtId: 'd1' });
  });

  it('carries a failure message', () => {
    const { seen } = run([{ event: 'resolve_failed', data: { doubt_id: 'd1', message: 'Still incomplete.' } }]);
    expect(seen[0]).toEqual({ kind: 'failed', doubtId: 'd1', message: 'Still incomplete.' });
  });
});

describe('the clarify invitation', () => {
  const base = {
    id: 'd1', question_text: 'A wire of resistivity 1.963 × 10^{-} Ω·m', answer: null,
    key_idea: null, failure_reason: 'The exponent is missing.',
  };

  it('shows on an unsolved doubt the server says can be clarified', () => {
    expect(solutionView({ ...base, status: 'failed', can_clarify: true }, 'Q1').canClarify).toBe(true);
  });

  it('never on a solved one, nor from an older server', () => {
    expect(solutionView({ ...base, status: 'solved', can_clarify: true }, 'Q1').canClarify).toBe(false);
    expect(solutionView({ ...base, status: 'failed' }, 'Q1').canClarify).toBe(false);
  });
});
