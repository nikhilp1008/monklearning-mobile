// The Practice history calendar: month order, where the first month starts,
// and which squares open. (jest.mock calls are hoisted above the import.)
import { addDays, historyDayState, historyMonths, monthLayout } from '@/lib/practice-history';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));

const TODAY = '2026-11-20'; // a Friday
const FROM = addDays(TODAY, -89);

describe('historyMonths', () => {
  test('the 90-day window starts on 23 Aug', () => {
    expect(FROM).toBe('2026-08-23');
  });

  test('months run oldest first, ending on the current month', () => {
    const months = historyMonths(FROM, TODAY);
    expect(months).toEqual([
      { year: 2026, month: 7 },
      { year: 2026, month: 8 },
      { year: 2026, month: 9 },
      { year: 2026, month: 10 },
    ]);
    expect(months[months.length - 1]).toEqual({ year: 2026, month: 10 });
  });

  test('crosses a year boundary in order', () => {
    expect(historyMonths('2026-11-10', '2027-02-07')).toEqual([
      { year: 2026, month: 10 },
      { year: 2026, month: 11 },
      { year: 2027, month: 0 },
      { year: 2027, month: 1 },
    ]);
  });

  test('a window inside one month is that month alone', () => {
    expect(historyMonths('2026-11-01', '2026-11-20')).toEqual([{ year: 2026, month: 10 }]);
  });
});

describe('monthLayout', () => {
  test('the first month starts at the first kept day, with empty week rows dropped', () => {
    // 1 Aug 2026 is a Saturday (5 blanks Monday-first); 23 Aug is a Sunday.
    expect(monthLayout(2026, 7, FROM)).toEqual({ firstDay: 23, length: 31, blanks: 6 });
  });

  test('later months start on the 1st, after the weekday offset', () => {
    // 1 Nov 2026 is a Sunday; 1 Sep 2026 is a Tuesday.
    expect(monthLayout(2026, 10, FROM)).toEqual({ firstDay: 1, length: 30, blanks: 6 });
    expect(monthLayout(2026, 8, FROM)).toEqual({ firstDay: 1, length: 30, blanks: 1 });
  });
});

describe('historyDayState', () => {
  const at = (date: string, total: number, loaded = true) =>
    historyDayState(date, { today: TODAY, from: FROM, total, loaded });

  test('a past day with practice opens', () => {
    expect(at('2026-11-12', 14)).toEqual({ kind: 'practice', tappable: true, isToday: false });
  });

  test('a past day with nothing recorded does not open', () => {
    expect(at('2026-11-12', 0)).toEqual({ kind: 'empty', tappable: false, isToday: false });
  });

  test('a future day does not open, and is not the empty kind', () => {
    expect(at('2026-11-25', 0)).toEqual({ kind: 'future', tappable: false, isToday: false });
  });

  test('today without practice does not open but is still today', () => {
    expect(at(TODAY, 0)).toEqual({ kind: 'empty', tappable: false, isToday: true });
  });

  test('today with practice opens', () => {
    expect(at(TODAY, 3)).toEqual({ kind: 'practice', tappable: true, isToday: true });
  });

  test('days before the window, and anything while loading, do not open', () => {
    expect(at('2026-08-22', 5).tappable).toBe(false);
    expect(at('2026-08-22', 5).kind).toBe('old');
    expect(at('2026-08-23', 5).tappable).toBe(true);
    expect(at('2026-11-12', 14, false)).toEqual({ kind: 'loading', tappable: false, isToday: false });
  });
});
