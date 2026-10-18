import { Redirect, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { supabase } from '@/lib/supabase';

import HomeScreen from './(tabs)/index';
import MocksScreen from './mocks';

/**
 * DEV-ONLY. Reached by deep link: monklearningapp://dev-diagnostic-preview.
 *
 * Runs the REAL Mock tests page, paper, and report against canned answers for
 * the four endpoints they call, so the free starting-point paper can be seen
 * and tapped through on a simulator with no student account and no server.
 * Nothing here is production code: the shim is installed when this route
 * mounts, removed when it unmounts, and the whole route renders nothing
 * outside `__DEV__`.
 *
 * The paper is fixture content, graded by a fixed pattern (physics weak,
 * chemistry mixed, maths strong) whatever is tapped — the point is the
 * screens, not the marking.
 */

const SUBJECTS = ['physics', 'chemistry', 'mathematics'] as const;
// 12 + 12 + 11, as the real 35-question paper is cut.
const COUNTS: Record<(typeof SUBJECTS)[number], number> = { physics: 12, chemistry: 12, mathematics: 11 };
const CHAPTERS: Record<(typeof SUBJECTS)[number], string[]> = {
  physics: ['Rotational motion', 'Thermodynamics', 'Kinematics', 'Optics', 'Current electricity'],
  chemistry: ['Chemical bonding', 'Equilibrium', 'Organic basics', 'Electrochemistry', 'Periodic table'],
  mathematics: ['Limits', 'Integrals', 'Vectors', 'Probability', 'Matrices'],
};
// Fraction of each chapter's questions the fixture marks right, per subject.
const RIGHT_RATE: Record<(typeof SUBJECTS)[number], number[]> = {
  physics: [0, 0, 1, 0.34, 0.34],
  chemistry: [0.67, 0.34, 1, 0.34, 0.67],
  mathematics: [1, 0.67, 1, 1, 0.67],
};

function buildFixtureQuestions() {
  const out: {
    id: string;
    subject: string;
    chapter: string;
    numerical: boolean;
    right: boolean;
  }[] = [];
  for (const subject of SUBJECTS) {
    for (let i = 0; i < COUNTS[subject]; i++) {
      const c = i % 5;
      const nth = Math.floor(i / 5); // 0..2 within the chapter
      out.push({
        id: `dev-${subject}-${i}`,
        subject,
        chapter: CHAPTERS[subject][c],
        numerical: i >= COUNTS[subject] - 3,
        right: nth < Math.round(RIGHT_RATE[subject][c] * 3),
      });
    }
  }
  return out;
}

// Module scope, so the canned "already sat it" survives the route remounting.
const state = { sat: false, submittedAt: '' };

function installShim() {
  const questions = buildFixtureQuestions();
  const realFetch = globalThis.fetch;
  const realGetSession = supabase.auth.getSession.bind(supabase.auth);
  const base = (process.env.EXPO_PUBLIC_API_URL ?? '').replace(/\/$/, '');

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json' },
    });

  const offer = () => ({
    available: !state.sat,
    recommended: !state.sat,
    questions: 35,
    duration_minutes: 45,
    max_marks: 140,
    sections: SUBJECTS.map((subject) => ({ subject, questions: COUNTS[subject] })),
  });

  const score = () => {
    const per: Record<string, { correct: number; wrong: number; unanswered: number; marks: number }> = {};
    for (const q of questions) {
      const b = (per[q.subject] ??= { correct: 0, wrong: 0, unanswered: 0, marks: 0 });
      if (q.right) {
        b.correct += 1;
        b.marks += 4;
      } else {
        b.wrong += 1;
        b.marks -= 1;
      }
    }
    const vals = Object.values(per);
    return {
      total_marks: vals.reduce((n, v) => n + v.marks, 0),
      max_marks: 140,
      correct: vals.reduce((n, v) => n + v.correct, 0),
      wrong: vals.reduce((n, v) => n + v.wrong, 0),
      unanswered: 0,
      marks: 0,
      per_subject: per,
    };
  };

  supabase.auth.getSession = (async () => ({
    data: {
      session: {
        access_token: 'dev-preview-token',
        expires_at: Math.floor(Date.now() / 1000) + 3600 * 6,
      },
    },
    error: null,
  })) as typeof supabase.auth.getSession;

  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(typeof input === 'string' ? input : (input as Request).url ?? input);
    if (!base || !url.startsWith(base)) return realFetch(input as RequestInfo, init);
    const path = url.slice(base.length);
    const method = (init?.method ?? 'GET').toUpperCase();

    if (method === 'GET' && path.startsWith('/mock/status')) {
      return json({
        exam: 'jee',
        threshold: 75,
        unique_correct: 0,
        credits_earned: 0,
        mocks_used: 0,
        credits_available: 0,
        correct_to_next: 75,
        active_paper: null,
        diagnostic: offer(),
      });
    }
    if (method === 'GET' && path.startsWith('/mock/runs')) {
      return json({
        runs: state.sat
          ? [
              {
                id: 'dev-run-1',
                exam: 'jee',
                kind: 'diagnostic',
                status: 'submitted',
                created_at: state.submittedAt,
                submitted_at: state.submittedAt,
                score: score(),
              },
            ]
          : [],
      });
    }
    if (method === 'GET' && path.startsWith('/mock/active')) return json({ paper: null });
    if (method === 'POST' && path === '/mock/paper') {
      const now = new Date();
      return json({
        mock_run_id: 'dev-run-1',
        exam: 'jee',
        kind: 'diagnostic',
        duration_minutes: 45,
        started_at: now.toISOString(),
        deadline: new Date(now.getTime() + 45 * 60000).toISOString(),
        seconds_left: 45 * 60,
        marks_correct: 4,
        marks_wrong: -1,
        total_questions: questions.length,
        max_marks: 140,
        sections: SUBJECTS.map((subject) => ({ subject, questions: COUNTS[subject] })),
        questions: questions.map((q, i) => ({
          question_num: i + 1,
          id: q.id,
          subject: q.subject,
          question_type: q.numerical ? 'numerical' : 'single_correct',
          question_text: `${q.chapter}: sample question ${i + 1}. Pick the correct statement.`,
          options: q.numerical ? null : { a: 'Option A', b: 'Option B', c: 'Option C', d: 'Option D' },
          image_url: null,
          diagram: null,
        })),
      });
    }
    if (method === 'POST' && /^\/mock\/[^/]+\/submit$/.test(path)) {
      state.sat = true;
      state.submittedAt = new Date().toISOString();
      return json({
        mock_run_id: 'dev-run-1',
        score: score(),
        // Canned "last paper" so the since-your-last-paper card can be seen.
        previous: {
          run_id: 'dev-run-0',
          kind: 'diagnostic',
          submitted_at: new Date(Date.now() - 9 * 86400000).toISOString(),
          before_percent: 41.4,
          after_percent: 64.3,
          delta_percent: 22.9,
          subjects: [
            { subject: 'physics', before: 25, after: 33 },
            { subject: 'chemistry', before: 40, after: 63 },
            { subject: 'mathematics', before: 59, after: 91 },
          ],
          improved: [
            { chapter_id: 'c1', name: 'Kinematics', before: { correct: 0, total: 1 }, after: { correct: 3, total: 3 } },
            { chapter_id: 'c2', name: 'Chemical bonding', before: { correct: 1, total: 2 }, after: { correct: 3, total: 3 } },
          ],
          slipped: [
            { chapter_id: 'c3', name: 'Thermodynamics', before: { correct: 1, total: 1 }, after: { correct: 0, total: 3 } },
          ],
        },
        questions: questions.map((q) => ({
          question_id: q.id,
          answered: true,
          is_correct: q.right,
          chosen_option: q.numerical ? null : q.right ? 'a' : 'b',
          chosen_value: q.numerical ? (q.right ? 4 : 3) : null,
          correct_option: q.numerical ? null : 'a',
          correct_value: q.numerical ? 4 : null,
          solution: null,
          chapter_id: `dev-${q.chapter}`,
          chapter_name: q.chapter,
        })),
      });
    }
    return json({ detail: 'Not part of the dev preview.' }, 404);
  }) as typeof fetch;

  return () => {
    globalThis.fetch = realFetch;
    supabase.auth.getSession = realGetSession;
  };
}

export default function DevDiagnosticPreview() {
  const { screen } = useLocalSearchParams<{ screen?: string }>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!__DEV__) return;
    const remove = installShim();
    setReady(true);
    return remove;
  }, []);

  if (!__DEV__) return <Redirect href="/" />;
  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Starting the dev preview…</Text>
      </View>
    );
  }
  // ?screen=home shows Home with the prompt; the default is Mock tests.
  return screen === 'home' ? <HomeScreen /> : <MocksScreen />;
}
