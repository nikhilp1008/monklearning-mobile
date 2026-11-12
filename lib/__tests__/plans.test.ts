import { classLimitOf } from '@/lib/drona-live';
import { ApiError } from '@/lib/api';
import { DEFAULT_TIERS, PASS_NAME, endsAtFor, passDays, planFromServer, recordFromServer } from '@/lib/pass';
import { compareRows } from '@/components/paywall/compare';
import { PLANS } from '@/components/paywall/plans';
import { PASSES } from '@/constants/onboarding';
import { pendingLine } from '@/lib/pass-ending';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));

const NOW = new Date('2026-11-10T10:00:00.000Z');

describe('the plans and what they cost', () => {
  test('the two plans, a month each, at the agreed prices', () => {
    expect(PLANS.map((p) => [p.id, p.price])).toEqual([['pro_1m', 499], ['max_1m', 899]]);
    expect(PASSES.map((p) => [p.id, p.price])).toEqual([['day', 7], ['week', 39]]);
  });

  test('Pro and Max run thirty days and have names a student can read', () => {
    expect(passDays('pro_1m')).toBe(30);
    expect(passDays('max_1m')).toBe(30);
    expect(PASS_NAME.pro_1m).toBe('Pro');
    expect(PASS_NAME.max_1m).toBe('Max');
    const end = endsAtFor({ kind: 'pro_1m', startedAt: '2026-11-10T00:00:00.000Z' });
    expect(end.toISOString()).toBe('2026-12-10T00:00:00.000Z');
  });

  test('the built-in numbers are the server\'s defaults (app/tiers.py)', () => {
    expect(DEFAULT_TIERS.pro).toMatchObject({ classes: 45, classes_per_day: 3, snap_questions: 25, practice_questions: 100 });
    expect(DEFAULT_TIERS.max).toMatchObject({ classes: 90, classes_per_day: 7, snap_questions: 50, practice_questions: 200 });
    expect(DEFAULT_TIERS.day.classes).toBe(2);
    expect(DEFAULT_TIERS.week.classes).toBe(10);
    // A day or week pass is Pro for that long (its classes stay at two a day).
    for (const t of ['day', 'week'] as const) {
      expect(DEFAULT_TIERS[t]).toMatchObject({
        classes_per_day: 2,
        snap_questions: DEFAULT_TIERS.pro.snap_questions,
        practice_questions: DEFAULT_TIERS.pro.practice_questions,
      });
    }
  });
});

describe('reading the pass the server sends', () => {
  test('a build that knows Pro reads the real kind, though `kind` says 1m for older ones', () => {
    const record = recordFromServer(
      { state: 'active', kind: '1m', plan_kind: 'pro_1m', source: 'razorpay',
        started_at: '2026-11-10T10:00:00.000Z', ends_at: '2026-12-10T10:00:00.000Z' },
      NOW
    )!;
    expect(record.kind).toBe('pro_1m');
  });

  test('without plan_kind the kind is used, and an unknown kind is no pass', () => {
    const base = { state: 'active' as const, source: 'razorpay', started_at: '2026-11-10T10:00:00.000Z', ends_at: '2026-12-10T10:00:00.000Z' };
    expect(recordFromServer({ ...base, kind: '1m' }, NOW)!.kind).toBe('1m');
    expect(recordFromServer({ ...base, kind: 'platinum' }, NOW)).toBeNull();
  });

  test('the plan: tier, the server\'s numbers over the built-in ones, and classes left', () => {
    const plan = planFromServer({
      state: 'active', kind: '1m', plan_kind: 'pro_1m', plan_tier: 'pro',
      started_at: '2026-11-10T10:00:00.000Z', ends_at: '2026-12-10T10:00:00.000Z',
      free_tier: { tiers: { pro: { classes: 50 } } },
      classes: { limit: 50, used: 12, left: 38, window_days: 30, per_day: 2, used_today: 0 },
      starter_used: ['day', 'something-else'],
    });
    expect(plan.tier).toBe('pro');
    expect(plan.tiers.pro.classes).toBe(50);
    expect(plan.tiers.pro.snap_questions).toBe(25);          // not sent: the built-in one stays
    expect(plan.tiers.max.classes).toBe(90);
    expect(plan.classes).toMatchObject({ limit: 50, left: 38 });
    expect(plan.starterUsed).toEqual(['day']);
    expect(plan.starterEnds).toBeNull();
  });

  test('a running day pass says when it ends; one with something bought behind it does not', () => {
    const running = planFromServer({
      state: 'active', kind: 'day', started_at: '2026-11-10T10:00:00.000Z', ends_at: '2026-11-11T10:00:00.000Z',
    });
    expect(running.starterKind).toBe('day');
    expect(running.starterEnds).toBe('2026-11-11T10:00:00.000Z');
    const queued = planFromServer({
      state: 'active', kind: 'day', started_at: '2026-11-10T10:00:00.000Z', ends_at: '2026-12-11T10:00:00.000Z',
    });
    expect(queued.starterEnds).toBeNull();
    expect(planFromServer({ state: 'none' }).tier).toBeNull();
  });
});

describe('Pro and Max side by side', () => {
  test('the unit is in the label and each cell is just the number', () => {
    const rows = compareRows(DEFAULT_TIERS.pro, DEFAULT_TIERS.max);
    expect(rows).toEqual([
      { label: 'Live classes a month', pro: '45', max: '90' },
      { label: 'Most classes in a day', pro: '3', max: '7' },
      { label: 'Snapped questions a day', pro: '25', max: '50' },
      { label: 'Practice questions a day', pro: '100', max: '200' },
      { label: 'Follow-up questions', pro: 'Unlimited', max: 'Unlimited' },
    ]);
    expect(rows.some((r) => /\ba (day|month)\b/.test(r.pro) || /\ba (day|month)\b/.test(r.max))).toBe(false);
  });

  test('a moved limit moves the table, and a weekly window says so', () => {
    const rows = compareRows({ ...DEFAULT_TIERS.pro, classes: 40 }, DEFAULT_TIERS.max);
    expect(rows[0].pro).toBe('40');
    expect(compareRows({ ...DEFAULT_TIERS.pro, window_days: 7 }, DEFAULT_TIERS.max)[0].label).toBe('Live classes a week');
  });
});

describe('the reminder on Home', () => {
  test('a day pass speaks in its last six hours, never before and never after the end', () => {
    expect(pendingLine('day', 7)).toBeNull();
    expect(pendingLine('day', 4)!.title).toBe('Your day pass ends in 4 hours');
    expect(pendingLine('day', 0.4)!.title).toBe('Your day pass ends in less than an hour');
    expect(pendingLine('day', 1)!.title).toBe('Your day pass ends in 1 hour');
    expect(pendingLine('day', 0)).toBeNull();
    expect(pendingLine('day', 4)!.line).toContain('₹499');
  });

  test('a week pass speaks in its last two days', () => {
    expect(pendingLine('week', 49)).toBeNull();
    expect(pendingLine('week', 47)!.title).toBe('Your week pass ends in 2 days');
    expect(pendingLine('week', 20)!.title).toBe('Your week pass ends in 20 hours');
  });
});

describe('a class the plan will not start', () => {
  const refused = (detail: unknown, status = 429) => new ApiError('[object Object]', status, { detail });

  test('reads the sentence and whether a bigger plan would help', () => {
    expect(classLimitOf(refused({ endpoint: 'class_start', message: 'Used all 45.', upgrade: true }))).toEqual({
      message: 'Used all 45.', upgrade: true,
    });
    expect(classLimitOf(refused({ endpoint: 'class_start', message: 'Plenty today.' }))).toEqual({
      message: 'Plenty today.', upgrade: false,
    });
  });

  test('is silent about every other failure', () => {
    expect(classLimitOf(refused({ endpoint: 'followup_ask', message: 'x' }))).toBeNull();
    expect(classLimitOf(refused({ endpoint: 'class_start' }))).toBeNull();
    expect(classLimitOf(refused({ endpoint: 'class_start', message: 'x' }, 500))).toBeNull();
    expect(classLimitOf(new Error('boom'))).toBeNull();
    expect(classLimitOf(new ApiError('x', 429, 'plain text'))).toBeNull();
  });
});
