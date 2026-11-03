// Support: a chat with the help assistant, and with the team when the assistant can't sort it out.
//
// THE CONTRACT (API, app/routers/help.py)
//   ask       POST /help/ask { question }      ->  { ask_id, answer, route, covered, escalation_offered, sources }
//   escalate  POST /help/escalate { ask_id } or { question }  ->  { escalated, id, already, message }
//   request   GET /help/escalations/<id>       ->  a thread: { id, question, status, created_at, replies, messages, awaiting_team, note }
//   list      GET /help/escalations            ->  { escalations: [thread, ...] }   (newest first, last 10)
//   write     POST /help/escalations/<id>/messages { text }  ->  the updated thread (409 closed, 429 too many)
//   - `route` is a key from content/app_help/app_help.md in the API repo: lib/help-chat.ts maps it to a screen,
//     "none" means the answer stands alone, "support" opens an email to support.
//   - "Talk to a person" is always offered, not only when `escalation_offered` is true: the help file answers
//     "talk to a person" with the support email, so a student who asked for one was never given the team.
//   - A founder answers in Telegram; the words arrive here as the monklearning team (nobody is named), and the
//     phone is pushed if the student has left the screen (lib/push.ts routes that tap back here).
//   - The screen polls while the team owes an answer: every 4 s for two minutes, then every 15 s for half an hour.
//   - The assistant answers one question at a time: it does not remember the last one (a server change, for later).
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useFocusEffect, type Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { GridPaper } from '@/components/grid-paper';
import { KeyboardSpacer } from '@/components/keyboard-spacer';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { ApiError, apiFetch, friendlyError } from '@/lib/api';
import { HELP_ROUTES, activeThread, buildChat, trimLocal, type ChatItem, type HelpThread, type LocalItem } from '@/lib/help-chat';
import { getStoredName } from '@/lib/profile';
import { supabase } from '@/lib/supabase';

const SUPPORT_EMAIL = 'support@monklearning.com';

const FAST_POLL_MS = 4000;
const SLOW_POLL_MS = 15000;
const FAST_WINDOW_MS = 2 * 60 * 1000;
const GIVE_UP_MS = 30 * 60 * 1000;

const STARTERS = ['My payment went through but no plan', 'How many classes do I get?', 'Change my teacher', 'The mic is not working'];
const TALK = 'Talk to a person';

type HelpAnswer = { ask_id: number; answer: string; route: string; covered: boolean; escalation_offered: boolean };
type Escalated = { escalated: boolean; id: string | null; already: boolean; message: string };

const stamp = () => new Date().toISOString();
const newKey = () => `${Date.now()}-${Math.round(Math.random() * 1e6)}`;

/** The sentence for a refusal. The server's own for a closed request; its daily limits are said here. */
function refusal(err: unknown, doing: string): string {
  if (err instanceof ApiError && err.status === 409) return err.message;
  if (err instanceof ApiError && err.status === 429) {
    return `That's the limit for today. Try again tomorrow, or write to ${SUPPORT_EMAIL}.`;
  }
  return friendlyError(err, doing);
}

function openRoute(route: string) {
  if (route === 'support') {
    void Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
    return;
  }
  const to = HELP_ROUTES[route];
  if (to) router.push(to.path as Href);
}

function routeLabel(route: string | undefined): string | null {
  if (!route) return null;
  if (route === 'support') return 'Email support';
  return HELP_ROUTES[route]?.label ?? null;
}

function Bubble({ item }: { item: ChatItem }) {
  if (item.kind === 'line') return <Text style={styles.line}>{item.text}</Text>;
  const me = item.kind === 'me';
  const label = item.kind === 'bot' ? routeLabel(item.route) : null;
  return (
    <View style={[styles.bubble, me ? styles.bubbleMe : styles.bubbleThem, item.kind === 'team' && styles.bubbleTeam]}>
      <Text selectable style={[styles.bubbleText, me && styles.bubbleTextMe]}>
        {item.text}
      </Text>
      {label && item.kind === 'bot' ? (
        <PressableScale style={styles.action} accessibilityRole="button" onPress={() => openRoute(item.route as string)}>
          <Text style={styles.actionText}>{label}</Text>
          <ArrowRightIcon size={15} color={colors.ink} />
        </PressableScale>
      ) : null}
    </View>
  );
}

function Chip({ text, strong, onPress }: { text: string; strong?: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" style={({ pressed }) => [styles.chip, strong && styles.chipStrong, pressed && { opacity: 0.6 }]}>
      <Text style={styles.chipText}>{text}</Text>
    </Pressable>
  );
}

export default function SupportScreen() {
  const insets = useSafeAreaInsets();
  const scroll = useRef<ScrollView>(null);

  const [userKey, setUserKey] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [local, setLocal] = useState<LocalItem[]>([]);
  const [threads, setThreads] = useState<HelpThread[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /** The student said the answer helped: no more buttons under it. */
  const [settled, setSettled] = useState<string | null>(null);
  /** Asked for a person with nothing yet asked: the next message goes to the team. */
  const [tellingTeam, setTellingTeam] = useState(false);
  /** Went back to the assistant from this thread. */
  const [leftThread, setLeftThread] = useState<string | null>(null);

  const active = useMemo(() => activeThread(threads), [threads]);
  const withTeam = !!active && leftThread !== active.id;
  const chat = useMemo(() => buildChat(local, threads, active), [local, threads, active]);
  const last = chat[chat.length - 1];
  const awaiting = !!active && active.awaiting_team !== false && withTeam;

  const upsert = useCallback((thread: HelpThread) => {
    setThreads((all) => (all.some((t) => t.id === thread.id) ? all.map((t) => (t.id === thread.id ? thread : t)) : [thread, ...all]));
  }, []);

  // What the assistant said lives on this phone, one student's to a key.
  useEffect(() => {
    let stop = false;
    void (async () => {
      const [{ data }, name] = await Promise.all([supabase.auth.getSession(), getStoredName()]);
      if (stop) return;
      setFirstName(name?.trim().split(/\s+/)[0] || null);
      const id = data.session?.user?.id;
      if (!id) {
        setLoaded(true);
        return;
      }
      const key = `help.chat.v1:${id}`;
      setUserKey(key);
      try {
        const raw = await AsyncStorage.getItem(key);
        if (!stop && raw) setLocal(JSON.parse(raw) as LocalItem[]);
      } catch {
        // An unreadable chat is an empty one.
      }
      if (!stop) setLoaded(true);
    })();
    return () => {
      stop = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded || !userKey) return;
    AsyncStorage.setItem(userKey, JSON.stringify(trimLocal(local))).catch(() => {});
  }, [loaded, userKey, local]);

  // The team's side, every time the screen is come back to (a student who left, or tapped the notification).
  useFocusEffect(
    useCallback(() => {
      let stop = false;
      apiFetch<{ escalations: HelpThread[] }>('/help/escalations')
        .then((res) => {
          if (!stop) setThreads(res.escalations);
        })
        .catch(() => {});
      return () => {
        stop = true;
      };
    }, [])
  );

  // Waiting for the team: ask the server until a reply arrives, quickly at first and then gently.
  const watchId = awaiting ? active?.id : null;
  useEffect(() => {
    if (!watchId) return;
    let stop = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const started = Date.now();
    const tick = async () => {
      try {
        const thread = await apiFetch<HelpThread>(`/help/escalations/${watchId}`);
        if (stop) return;
        upsert(thread);
      } catch {
        // A dropped connection is not the end of the wait.
      }
      if (stop) return;
      const elapsed = Date.now() - started;
      if (elapsed > GIVE_UP_MS) return;
      timer = setTimeout(tick, elapsed < FAST_WINDOW_MS ? FAST_POLL_MS : SLOW_POLL_MS);
    };
    timer = setTimeout(tick, FAST_POLL_MS);
    return () => {
      stop = true;
      if (timer) clearTimeout(timer);
    };
  }, [watchId, upsert]);

  async function ask(question: string) {
    setLocal((all) => [...all, { kind: 'me', key: newKey(), text: question, at: stamp() }]);
    setBusy(true);
    setError(null);
    try {
      const res = await apiFetch<HelpAnswer>('/help/ask', { method: 'POST', body: JSON.stringify({ question }) });
      setLocal((all) => [...all, { kind: 'bot', key: newKey(), text: res.answer, at: stamp(), askId: res.ask_id, route: res.route, covered: res.covered }]);
    } catch (err) {
      setError(refusal(err, 'get an answer'));
    } finally {
      setBusy(false);
    }
  }

  async function handOver(body: { ask_id: number } | { question: string }, fallbackQuestion: string) {
    setBusy(true);
    setError(null);
    try {
      const res = await apiFetch<Escalated>('/help/escalate', { method: 'POST', body: JSON.stringify(body) });
      setLocal((all) => [...all, { kind: 'bot', key: newKey(), text: res.message, at: stamp(), threadId: res.id ?? undefined }]);
      if (res.id) {
        setLeftThread(null);
        // Show it at once as waiting, then let the poll bring the rest.
        upsert({ id: res.id, question: fallbackQuestion, status: 'open', created_at: stamp(), replies: [], messages: [], awaiting_team: true });
      }
    } catch (err) {
      setError(refusal(err, 'send that to the team'));
    } finally {
      setBusy(false);
    }
  }

  async function writeToTeam(id: string, text: string) {
    setBusy(true);
    setError(null);
    try {
      upsert(await apiFetch<HelpThread>(`/help/escalations/${id}/messages`, { method: 'POST', body: JSON.stringify({ text }) }));
    } catch (err) {
      setDraft(text);
      setError(refusal(err, 'send that to the team'));
    } finally {
      setBusy(false);
    }
  }

  function send() {
    const text = draft.trim();
    if (!text || busy) return;
    setDraft('');
    if (withTeam && active) {
      void writeToTeam(active.id, text);
      return;
    }
    if (tellingTeam) {
      setTellingTeam(false);
      setLocal((all) => [...all, { kind: 'me', key: newKey(), text, at: stamp() }]);
      void handOver({ question: text }, text);
      return;
    }
    void ask(text);
  }

  function talkToPerson() {
    if (busy) return;
    if (active) {
      setLeftThread(null);
      return;
    }
    const answered = [...local].reverse().find((i) => i.kind === 'bot' && i.askId !== undefined);
    const question = [...local].reverse().find((i) => i.kind === 'me');
    if (answered && answered.kind === 'bot' && answered.askId !== undefined && question) {
      void handOver({ ask_id: answered.askId }, question.text);
      return;
    }
    setTellingTeam(true);
    setLocal((all) => [...all, { kind: 'bot', key: newKey(), text: 'Tell me what you need help with, and I will send it to the team.', at: stamp() }]);
  }

  const empty = loaded && chat.length === 0;
  const askedLast = !withTeam && !tellingTeam && !busy && last?.kind === 'bot' && last.askId !== undefined && settled !== last.key;
  const hint = withTeam || tellingTeam ? 'Message the team' : 'Ask a question';
  const canSend = draft.trim().length > 0 && !busy;

  return (
    <View style={styles.page}>
      <StatusBar style="dark" />
      <GridPaper />
      <View style={[styles.head, { paddingTop: insets.top + 8 }]}>
        <PressableScale
          style={styles.back}
          accessibilityRole="button"
          accessibilityLabel="Back"
          hitSlop={8}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}>
          <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <Path d="M10 3.5L5.5 8l4.5 4.5" stroke={colors.ink} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </PressableScale>
        <Text accessibilityRole="header" style={styles.title}>
          Support
        </Text>
      </View>

      <ScrollView
        ref={scroll}
        style={styles.scroll}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={() => scroll.current?.scrollToEnd({ animated: true })}>
        {empty ? (
          <>
            <View style={[styles.bubble, styles.bubbleThem]}>
              <Text style={styles.bubbleText}>{`Hi${firstName ? ` ${firstName}` : ''}. Ask me anything about the app, or pick one of these.`}</Text>
            </View>
            <View style={styles.chips}>
              {STARTERS.map((t) => (
                <Chip key={t} text={t} onPress={() => void ask(t)} />
              ))}
              <Chip text={TALK} strong onPress={talkToPerson} />
            </View>
          </>
        ) : null}

        {chat.map((item) => (
          <Bubble key={item.key} item={item} />
        ))}

        {busy ? (
          <View style={[styles.bubble, styles.bubbleThem, styles.typing]}>
            <ActivityIndicator size="small" color={colors.slate} />
          </View>
        ) : null}

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {askedLast ? (
          <>
            <Text style={styles.ask}>Did this help?</Text>
            <View style={styles.chips}>
              <Chip text="Yes, thanks" onPress={() => setSettled(last.key)} />
              <Chip text={TALK} strong onPress={talkToPerson} />
            </View>
          </>
        ) : null}

        {!withTeam && !askedLast && !empty && !busy && !tellingTeam ? (
          <View style={styles.chips}>
            <Chip text={TALK} strong onPress={talkToPerson} />
          </View>
        ) : null}

        {withTeam && active ? (
          <View style={styles.chips}>
            <Chip text="Ask the assistant instead" onPress={() => setLeftThread(active.id)} />
          </View>
        ) : null}
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={styles.composerWrap}>
        <View style={styles.composer}>
          <TextInput
            style={styles.input}
            value={draft}
            onChangeText={setDraft}
            placeholder={hint}
            placeholderTextColor={colors.faint}
            multiline
            maxLength={1000}
            accessibilityLabel={hint}
          />
          <PressableScale
            style={styles.send}
            accessibilityRole="button"
            accessibilityLabel="Send"
            accessibilityState={{ disabled: !canSend }}
            onPress={send}>
            <View style={styles.sendArrow}>
              <ArrowRightIcon size={19} color={colors.paper} />
            </View>
          </PressableScale>
        </View>
      </SafeAreaView>
      <KeyboardSpacer ios bottomInset={insets.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#FFFFFF' },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    paddingBottom: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(28,26,22,.08)',
  },
  back: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: colors.hairline,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: { fontFamily: 'Onest_600SemiBold', fontSize: 17, lineHeight: 22, color: colors.ink },
  scroll: { flex: 1 },
  list: { padding: 16, gap: 10 },
  bubble: { maxWidth: '84%', borderRadius: 18, paddingHorizontal: 14, paddingVertical: 10, gap: 9 },
  bubbleMe: { alignSelf: 'flex-end', borderBottomRightRadius: 5, backgroundColor: colors.ink },
  bubbleThem: { alignSelf: 'flex-start', borderBottomLeftRadius: 5, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(28,26,22,.12)' },
  bubbleTeam: { borderColor: colors.marigold },
  bubbleText: { fontFamily: 'Onest_400Regular', fontSize: 15, lineHeight: 22, color: colors.ink },
  bubbleTextMe: { color: colors.paper },
  typing: { paddingVertical: 12, paddingHorizontal: 18 },
  line: { alignSelf: 'center', textAlign: 'center', fontFamily: 'Onest_500Medium', fontSize: 12.5, lineHeight: 18, color: colors.slate, marginVertical: 4, paddingHorizontal: 12 },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.16)',
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  actionText: { flexShrink: 1, fontFamily: 'Onest_600SemiBold', fontSize: 14, color: colors.ink },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 2 },
  chip: { borderRadius: 14, borderWidth: 1, borderColor: 'rgba(28,26,22,.16)', paddingHorizontal: 13, paddingVertical: 9, backgroundColor: '#FFFFFF' },
  chipStrong: { borderColor: colors.ink },
  chipText: { fontFamily: 'Onest_500Medium', fontSize: 13.5, lineHeight: 18, color: colors.ink },
  ask: { fontFamily: 'Onest_400Regular', fontSize: 12, color: colors.faint, marginTop: 2 },
  error: { fontFamily: 'Onest_400Regular', fontSize: 14, lineHeight: 20, color: colors.ink, marginTop: 2 },
  composerWrap: { backgroundColor: '#FFFFFF' },
  composer: { flexDirection: 'row', alignItems: 'flex-end', gap: 10, paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8 },
  input: {
    flex: 1,
    minHeight: 50,
    maxHeight: 120,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.16)',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    fontFamily: 'Onest_400Regular',
    fontSize: 15,
    lineHeight: 20,
    color: colors.ink,
    backgroundColor: '#FFFFFF',
  },
  send: { width: 50, height: 50, borderRadius: 16, backgroundColor: colors.ink, alignItems: 'center', justifyContent: 'center' },
  sendArrow: { transform: [{ rotate: '-90deg' }] },
});
