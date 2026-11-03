import Constants from 'expo-constants';
import { router } from 'expo-router';
import { Platform } from 'react-native';

import { apiFetch } from '@/lib/api';

/**
 * "This is wrong" — from wherever the student is standing.
 *
 * There have always been three places in the app to raise a flag, and until
 * now exactly one of them wrote a row anywhere:
 *
 *   snap doubt   report-sheet.tsx -> POST /doubts/{id}/report  ✓
 *   live class   a drawer with five reasons -> NOTHING. sendReport() closed
 *                the sheet and showed a thank-you toast. The student was told
 *                their report had been received; none ever was.
 *   practice     no button at all.
 *
 * All three now post here.
 *
 * ─── This one is allowed to fail loudly ────────────────────────────────────
 *
 * `lib/track.ts` swallows everything, because a student should never see an
 * error for telemetry they did not ask to send. A report is the opposite: they
 * deliberately told us something is broken and are shown a confirmation.
 * Swallowing a failure here would recreate the exact bug this replaces — a
 * thank-you for something that never arrived. So this throws, and every caller
 * is expected to say "couldn't send" rather than "thanks".
 */

/** `textbook` and `mock` need the API's migration 0098; an older server
 *  refuses them with a 400, which the sheet shows as "couldn't send". */
export type ReportSurface = 'snap' | 'live' | 'practice' | 'textbook' | 'mock';

/** The five the sheet offers. Kept in one place so live, snap and practice
 *  cannot drift into three slightly different vocabularies — which would show
 *  up on the dashboard as reasons that almost group. */
export const REPORT_REASONS = [
  'Wrong answer',
  'Confusing step',
  'Audio glitch',
  'Wrong language',
  'Something else',
] as const;

export type ReportReason = (typeof REPORT_REASONS)[number];

export type ReportInput = {
  surface: ReportSurface;
  reason?: string | null;
  comment?: string | null;
  /** Whichever one applies. A report is about a doubt, or a class, or a question. */
  doubtId?: string | null;
  sessionId?: string | null;
  questionId?: string | null;
  subject?: string | null;
  chapter?: string | null;
  /** The line that was on screen. For a live class this is most of the
   *  diagnosis — it says what Drona actually said, which no id recovers once
   *  the session ages out. */
  quote?: string | null;
  context?: Record<string, unknown> | null;
};

/** What a flag hands the sheet. */
export type ReportTarget = {
  doubtId?: string | null;
  /** A practice or mock-paper question instead of a doubt. */
  questionId?: string | null;
  sessionId?: string | null;
  subject?: string | null;
  chapter?: string | null;
  quote?: string | null;
  /** Which part of the app is reporting; defaults from whatever id arrived. */
  surface?: ReportSurface;
  /** Anything else worth sending with it (the classroom's phase, the
   *  follow-up just asked, the textbook page, the mock run). */
  context?: Record<string, unknown> | null;
};

/**
 * Open the report sheet as a route. Route params are strings, so the context
 * travels as JSON and app/report-sheet.tsx reads it back.
 */
export function openReportSheet(target: ReportTarget): void {
  const params: Record<string, string> = {};
  for (const key of ['doubtId', 'questionId', 'sessionId', 'subject', 'chapter', 'quote', 'surface'] as const) {
    const v = target[key];
    if (v) params[key] = String(v);
  }
  const context = target.context
    ? Object.fromEntries(Object.entries(target.context).filter(([, v]) => v !== null && v !== undefined && v !== ''))
    : null;
  if (context && Object.keys(context).length) params.context = JSON.stringify(context);
  router.push({ pathname: '/report-sheet', params });
}

const APP_VERSION =
  (Constants.expoConfig?.version as string | undefined) ??
  (Constants.manifest2?.extra?.expoClient?.version as string | undefined) ??
  null;

/** Send one report. Throws if it did not store — say so, don't thank them. */
export function sendReport(input: ReportInput): Promise<{ reported: boolean }> {
  return apiFetch('/reports', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      surface: input.surface,
      reason: input.reason ?? null,
      comment: input.comment ?? null,
      doubt_id: input.doubtId ?? null,
      session_id: input.sessionId ?? null,
      question_id: input.questionId ?? null,
      subject: input.subject ?? null,
      chapter: input.chapter ?? null,
      quote: input.quote ?? null,
      context: input.context ?? null,
      app_version: APP_VERSION,
      platform: Platform.OS,
    }),
    timeoutMs: 15000,
  });
}
