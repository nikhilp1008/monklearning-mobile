/**
 * A SAVED PAPER BELONGS TO THE STUDENT WHO SAT IT.
 *
 * The founder saw a brand-new account open Mock tests and, for a second or
 * two, show the previous account's scorecard. The list of saved papers was one
 * list for the whole phone and survived sign-out. It is one list per student
 * now, and signing out clears it.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

let mockUserId: string | null = 'student-a';
jest.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: () => Promise.resolve({ data: { session: mockUserId ? { user: { id: mockUserId } } : null } }),
    },
  },
}));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));

import { clearSavedReports, loadReport, saveReport, savedReportIds, type MockReport } from '@/lib/mock-report';

const report = (id: string) => ({ run_id: id, exam: 'jee', submitted_at: '2026-10-17T10:00:00.000Z' }) as unknown as MockReport;

beforeEach(async () => {
  mockUserId = 'student-a';
  await AsyncStorage.clear();
});

test("another student on the same phone does not see this student's papers", async () => {
  await saveReport(report('run-a1'));
  expect(await savedReportIds()).toEqual(['run-a1']);
  mockUserId = 'student-b';
  expect(await savedReportIds()).toEqual([]);
});

test('signing out clears the list and the papers', async () => {
  await saveReport(report('run-a1'));
  await clearSavedReports();
  expect(await savedReportIds()).toEqual([]);
  expect(await loadReport('run-a1')).toBeNull();
});

test('with no student signed in, nothing is kept for whoever comes next', async () => {
  mockUserId = null;
  await saveReport(report('run-x'));
  mockUserId = 'student-a';
  expect(await savedReportIds()).toEqual([]);
  expect(await loadReport('run-x')).toBeNull();
});
