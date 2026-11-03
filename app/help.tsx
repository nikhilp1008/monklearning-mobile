// Help: a plain screen to ask the help assistant a question about the app.
//
// A TEST SCREEN, built so the backend (POST /help/ask, /help/escalate, GET /help/escalations, API) can be tried
// from a phone before the real design exists. Layout and wording are placeholders for the cofounder to
// replace. What he should keep is the contract below.
//
// THE CONTRACT
//   ask       { question }  ->  { ask_id, answer, route, covered, escalation_offered, sources }
//   escalate  { ask_id }    ->  { escalated, id, already, message }
//   request   GET /help/escalations/<id>  ->  { id, question, status, created_at, replies: [{ id, text, at }] }
//   list      GET /help/escalations       ->  { escalations: [request, ...] }   (newest first, last 10)
//   - `route` is a key from content/app_help/app_help.md in the API repo. ROUTES below maps it to a
//     screen; "none" means the answer stands alone, "support" opens an email to support.
//   - `escalation_offered` is true when the assistant is not sure. Only then is "Send to the team"
//     shown. The reply never contains a founder's name or number, so the app never has one to show.
//   - After "Send to the team" the screen WAITS for the team: it polls the request every 4 s for two minutes,
//     then every 15 s for half an hour. A founder answers in Telegram; the words appear here as a reply from
//     "the MonkLearning team" (nobody is named), and the phone is pushed if the student has left the screen
//     (lib/push.ts routes that tap back here, where the open request is found again on mount).
//   - One question at a time: the assistant does not remember the last one, and a reply is one-way.
import { router, type Href } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Linking, StyleSheet, Text, TextInput, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { apiFetch, friendlyError } from '@/lib/api';

const SUPPORT_EMAIL = 'support@monklearning.com';

const FAST_POLL_MS = 4000;
const SLOW_POLL_MS = 15000;
const FAST_WINDOW_MS = 2 * 60 * 1000;
const GIVE_UP_MS = 30 * 60 * 1000;

// Route key -> screen. Keys the API may return but this map lacks open nothing.
const ROUTES: Record<string, string> = {
  home: '/',
  textbooks: '/(tabs)/textbooks',
  doubts: '/(tabs)/doubts',
  notes: '/(tabs)/notes',
  snap: '/snap-capture',
  class_picker: '/drona',
  select_teacher: '/select-teacher',
  practice: '/practice',
  practice_focus: '/practice-focus',
  mocks: '/mocks',
  progress: '/progress',
  exam_scope: '/exam-scope',
  plan_sheet: '/plan-sheet',
  profile: '/profile',
  account: '/account',
  subscription: '/subscription',
  plans: '/plans',
  promo: '/plans-promo',
  about: '/about-us',
  privacy: '/privacy-policy',
  terms: '/terms',
};

type HelpAnswer = {
  ask_id: number;
  answer: string;
  route: string;
  covered: boolean;
  escalation_offered: boolean;
  sources: unknown[];
};

type Escalated = { escalated: boolean; id: string | null; already: boolean; message: string };

type HelpRequest = {
  id: string;
  question: string;
  status: 'open' | 'answered' | 'closed';
  created_at: string;
  replies: { id: number; text: string; at: string }[];
};

function openRoute(route: string) {
  if (route === 'support') {
    Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
    return;
  }
  const path = ROUTES[route];
  if (path) router.push(path as Href);
}

export default function HelpScreen() {
  const [question, setQuestion] = useState('');
  const [busy, setBusy] = useState<'ask' | 'escalate' | null>(null);
  const [answer, setAnswer] = useState<HelpAnswer | null>(null);
  const [sent, setSent] = useState<Escalated | null>(null);
  const [error, setError] = useState<string | null>(null);

  // The student's requests, and the one we are waiting on.
  const [requests, setRequests] = useState<HelpRequest[]>([]);
  const [watchId, setWatchId] = useState<string | null>(null);
  const [longWait, setLongWait] = useState(false);

  const canAsk = question.trim().length > 0 && busy === null;
  const canOpen = !!answer && (answer.route === 'support' || !!ROUTES[answer.route]);

  const upsert = useCallback((req: HelpRequest) => {
    setRequests((all) => (all.some((r) => r.id === req.id) ? all.map((r) => (r.id === req.id ? req : r)) : [req, ...all]));
  }, []);

  // On opening: show earlier requests, and pick the wait back up for one still open and recent (a student who
  // left and came back, or tapped the notification).
  useEffect(() => {
    let stop = false;
    apiFetch<{ escalations: HelpRequest[] }>('/help/escalations')
      .then((res) => {
        if (stop) return;
        setRequests(res.escalations);
        const waiting = res.escalations.find(
          (r) => r.status === 'open' && r.replies.length === 0 && Date.now() - Date.parse(r.created_at) < GIVE_UP_MS,
        );
        if (waiting) setWatchId(waiting.id);
      })
      .catch(() => {});
    return () => {
      stop = true;
    };
  }, []);

  // Waiting for the team: ask the server until a reply arrives, quickly at first and then gently.
  useEffect(() => {
    if (!watchId) return;
    let stop = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const started = Date.now();
    setLongWait(false);

    const tick = async () => {
      try {
        const req = await apiFetch<HelpRequest>(`/help/escalations/${watchId}`);
        if (stop) return;
        upsert(req);
        if (req.replies.length > 0) {
          setWatchId(null);
          return;
        }
      } catch {
        // a dropped connection is not the end of the wait
      }
      if (stop) return;
      const elapsed = Date.now() - started;
      if (elapsed > GIVE_UP_MS) return;
      if (elapsed > FAST_WINDOW_MS) setLongWait(true);
      timer = setTimeout(tick, elapsed < FAST_WINDOW_MS ? FAST_POLL_MS : SLOW_POLL_MS);
    };
    timer = setTimeout(tick, FAST_POLL_MS);
    return () => {
      stop = true;
      if (timer) clearTimeout(timer);
    };
  }, [watchId, upsert]);

  async function ask() {
    if (!canAsk) return;
    setBusy('ask');
    setError(null);
    setAnswer(null);
    setSent(null);
    try {
      setAnswer(
        await apiFetch<HelpAnswer>('/help/ask', {
          method: 'POST',
          body: JSON.stringify({ question: question.trim() }),
        }),
      );
    } catch (err) {
      setError(friendlyError(err, 'get an answer'));
    } finally {
      setBusy(null);
    }
  }

  async function escalate() {
    if (!answer || busy) return;
    setBusy('escalate');
    setError(null);
    try {
      const res = await apiFetch<Escalated>('/help/escalate', {
        method: 'POST',
        body: JSON.stringify({ ask_id: answer.ask_id }),
      });
      setSent(res);
      if (res.id) {
        // Show it at once as waiting, then let the poll bring the reply.
        upsert({
          id: res.id,
          question: question.trim(),
          status: 'open',
          created_at: new Date().toISOString(),
          replies: [],
        });
        setWatchId(res.id);
      }
    } catch (err) {
      setError(friendlyError(err, 'send that to the team'));
    } finally {
      setBusy(null);
    }
  }

  const current = sent?.id ? requests.find((r) => r.id === sent.id) : undefined;
  const earlier = requests.filter((r) => r.id !== current?.id);

  return (
    <SettingsPage title="Help" keyboardAware>
      <Text style={styles.lede}>Ask anything about how the app works.</Text>
      <TextInput
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
        placeholder="For example: how do I snap a question?"
        placeholderTextColor={colors.faint}
        multiline
        maxLength={1000}
        editable={busy === null}
        accessibilityLabel="Your question"
      />
      <PressableScale
        style={[styles.button, !canAsk && styles.buttonOff]}
        accessibilityRole="button"
        accessibilityState={{ disabled: !canAsk }}
        onPress={ask}>
        {busy === 'ask' ? <ActivityIndicator color={colors.ink} /> : <Text style={styles.buttonText}>Ask</Text>}
      </PressableScale>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {answer ? (
        <View style={styles.answer}>
          <Text style={styles.answerText}>{answer.answer}</Text>

          {canOpen ? (
            <PressableScale
              style={styles.secondary}
              accessibilityRole="button"
              onPress={() => openRoute(answer.route)}>
              <Text style={styles.secondaryText}>
                {answer.route === 'support' ? 'Email support' : 'Take me there'} →
              </Text>
            </PressableScale>
          ) : null}

          {answer.escalation_offered && !sent ? (
            <PressableScale
              style={[styles.secondary, busy !== null && styles.buttonOff]}
              accessibilityRole="button"
              onPress={escalate}>
              {busy === 'escalate' ? (
                <ActivityIndicator color={colors.ink} />
              ) : (
                <Text style={styles.secondaryText}>Send to the team</Text>
              )}
            </PressableScale>
          ) : null}

          {sent ? <Text style={styles.sent}>{sent.message}</Text> : null}

          {current && current.replies.length === 0 ? (
            <View style={styles.waiting}>
              <ActivityIndicator color={colors.ink} />
              <Text style={styles.waitingText}>
                {longWait
                  ? 'Still waiting. The team has your question. You can leave this screen: we will notify you when they reply.'
                  : 'Waiting for the team to reply. This usually takes a few minutes.'}
              </Text>
            </View>
          ) : null}

          {current?.replies.map((r) => (
            <View key={r.id} style={styles.reply}>
              <Text style={styles.replyFrom}>Reply from the MonkLearning team</Text>
              <Text style={styles.replyText}>{r.text}</Text>
            </View>
          ))}

          {/* Test-only: what the backend matched, so a wrong answer can be traced. Remove with the screen. */}
          <Text style={styles.debug}>
            covered={String(answer.covered)} · route={answer.route} · sources=
            {answer.sources.map(String).join(', ') || 'none'}
          </Text>
        </View>
      ) : null}

      {earlier.length > 0 ? (
        <View style={styles.history}>
          <Text style={styles.historyTitle}>Your questions to the team</Text>
          {earlier.map((r) => (
            <View key={r.id} style={styles.historyItem}>
              <Text style={styles.historyQuestion} numberOfLines={2}>
                {r.question}
              </Text>
              <Text style={styles.historyStatus}>
                {r.replies.length > 0 ? 'Answered' : r.status === 'closed' ? 'Closed' : 'Waiting for a reply'}
              </Text>
              {r.replies.map((rep) => (
                <View key={rep.id} style={styles.reply}>
                  <Text style={styles.replyFrom}>Reply from the MonkLearning team</Text>
                  <Text style={styles.replyText}>{rep.text}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      ) : null}
    </SettingsPage>
  );
}

const styles = StyleSheet.create({
  lede: {
    fontFamily: 'Onest_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: colors.slate,
    marginTop: 16,
  },
  input: {
    fontFamily: 'Onest_400Regular',
    fontSize: 16,
    color: colors.ink,
    minHeight: 96,
    marginTop: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderRadius: 12,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 12,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.marigold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOff: { opacity: 0.45 },
  buttonText: { fontFamily: 'Onest_700Bold', fontSize: 16, color: colors.ink },
  error: {
    fontFamily: 'Onest_400Regular',
    fontSize: 14,
    color: colors.red,
    marginTop: 14,
  },
  answer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.tint,
  },
  answerText: {
    fontFamily: 'Onest_400Regular',
    fontSize: 15,
    lineHeight: 23,
    color: colors.ink,
  },
  secondary: {
    marginTop: 14,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: { fontFamily: 'Onest_700Bold', fontSize: 15, color: colors.ink },
  sent: {
    fontFamily: 'Onest_700Bold',
    fontSize: 14,
    lineHeight: 21,
    color: colors.ink,
    marginTop: 14,
  },
  waiting: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  waitingText: {
    flex: 1,
    fontFamily: 'Onest_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: colors.slate,
  },
  reply: {
    marginTop: 14,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  replyFrom: {
    fontFamily: 'Onest_700Bold',
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: colors.faint,
  },
  replyText: {
    fontFamily: 'Onest_400Regular',
    fontSize: 15,
    lineHeight: 23,
    color: colors.ink,
    marginTop: 6,
  },
  debug: {
    fontFamily: 'Onest_400Regular',
    fontSize: 11,
    color: colors.faint,
    marginTop: 14,
  },
  history: { marginTop: 28 },
  historyTitle: { fontFamily: 'Onest_700Bold', fontSize: 16, color: colors.ink },
  historyItem: {
    marginTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  historyQuestion: { fontFamily: 'Onest_400Regular', fontSize: 15, lineHeight: 22, color: colors.ink },
  historyStatus: { fontFamily: 'Onest_700Bold', fontSize: 12, color: colors.slate, marginTop: 4 },
});
