// Help: a plain screen to ask the help assistant a question about the app.
//
// A TEST SCREEN, built so the backend (POST /help/ask and /help/escalate, API dadaf370) can be tried
// from a phone before the real design exists. Layout and wording are placeholders for the cofounder to
// replace. What he should keep is the contract below.
//
// THE CONTRACT
//   ask       { question }  ->  { ask_id, answer, route, covered, escalation_offered, sources }
//   escalate  { ask_id }    ->  { escalated, id, already, message }
//   - `route` is a key from content/app_help/app_help.md in the API repo. ROUTES below maps it to a
//     screen; "none" means the answer stands alone, "support" opens an email to support.
//   - `escalation_offered` is true when the assistant is not sure. Only then is "Send to the team"
//     shown. The reply never contains a founder's name or number, so the app never has one to show.
//   - One question at a time: the assistant does not remember the last one.
import { router, type Href } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Linking, StyleSheet, Text, TextInput, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { apiFetch, friendlyError } from '@/lib/api';

const SUPPORT_EMAIL = 'support@monklearning.com';

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

  const canAsk = question.trim().length > 0 && busy === null;
  const canOpen = !!answer && (answer.route === 'support' || !!ROUTES[answer.route]);

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
      setSent(
        await apiFetch<Escalated>('/help/escalate', {
          method: 'POST',
          body: JSON.stringify({ ask_id: answer.ask_id }),
        }),
      );
    } catch (err) {
      setError(friendlyError(err, 'send that to the team'));
    } finally {
      setBusy(null);
    }
  }

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

          {/* Test-only: what the backend matched, so a wrong answer can be traced. Remove with the screen. */}
          <Text style={styles.debug}>
            covered={String(answer.covered)} · route={answer.route} · sources=
            {answer.sources.map(String).join(', ') || 'none'}
          </Text>
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
  debug: {
    fontFamily: 'Onest_400Regular',
    fontSize: 11,
    color: colors.faint,
    marginTop: 14,
  },
});
