import { router } from 'expo-router';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Linking, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { PracticeIcon, SnapADoubtIcon } from '@/components/monk-icons';
import { NightSky } from '@/components/night-sky';
import { ObButton } from '@/components/onboarding-kit';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';
import { useFreeTier, usePlan } from '@/lib/free-tier';
import { PASS_NAME, cachedPassStatus, isTeamAccess, passDays, passStatus, type PassRecord, type PassStatus } from '@/lib/pass';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';

/**
 * YOUR PLAN — Profile → Manage plan (redesigned 2026-10-17).
 *
 * It answers, in this order, what a student comes here to ask: is my pass
 * running, until when, how much is left; then the facts of it (what it is,
 * when it started and ends, how I got it, whether it renews); then what it
 * includes; then where to ask about a payment.
 *
 * It was a white card with a green "ACTIVE" pill, a beige note box and a pill
 * button, in a style nothing else in the app uses any more, with a list of
 * what's included worded differently from the plans page. Now:
 *
 *   - THE PASS sits on the teacher's night sky, as the plans page and Home's
 *     header do: the one piece of colour on the page.
 *   - THE DETAILS are a plain list, including what the old page never said:
 *     how the pass was got (paid, a promo code, given by us) and that it never
 *     renews.
 *   - WHAT'S INCLUDED uses the plans page's own words, so the two pages
 *     promise the same thing.
 *   - THE KEY is the app's own button. It shows when there is something to
 *     do: the pass has ended or there is none (Choose a plan), or the last
 *     fortnight of one (Add more time). On iPhone the plans page takes a
 *     promo code (payments are Android-only for now), so it shows there too.
 *
 * No card on file, no cancel, no invoices: payments are one-time, nothing is
 * stored to manage, and there is nothing recurring to cancel.
 */

const asDate = (d: Date) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const PAPER = colors.paper;
const PAPER62 = 'rgba(255,253,248,.62)';

type Scale = (n: number) => number;

/** How the student came to hold this pass, as they would put it. */
function howGot(record: PassRecord): string {
  switch (record.source) {
    case 'razorpay':
      return 'Paid';
    case 'promo':
      return record.promo ? `Promo code ${record.promo}` : 'Promo code';
    case 'admin':
      return 'Added by MonkLearning';
    default:
      return record.promo ? `Promo code ${record.promo}` : '—';
  }
}

export default function SubscriptionScreen() {
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);

  const [status, setStatus] = useState<PassStatus | null>(null);
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  useEffect(() => {
    let live = true;
    // The phone's last answer at once; the server's answer then wins.
    cachedPassStatus().then((c) => {
      if (live && c.state !== 'unknown') setStatus((s) => s ?? c);
    });
    passStatus().then((s) => live && setStatus(s));
    getTeacherPreference().then((t) => live && setTeacher(t));
    return () => {
      live = false;
    };
  }, []);

  const active = status?.state === 'active' ? status : null;
  const record = status?.state === 'active' || status?.state === 'expired' ? status.record : null;
  const endsAt = status?.state === 'active' || status?.state === 'expired' ? status.endsAt : null;
  const team = isTeamAccess(record);
  const unknown = status?.state === 'unknown';

  const totalDays = record && endsAt ? Math.max(1, Math.round((endsAt.getTime() - new Date(record.startedAt).getTime()) / 86400000)) : 1;
  const daysLeft = active?.daysLeft ?? 0;
  const used = active ? Math.max(0, Math.min(1, 1 - daysLeft / totalDays)) : 1;
  /** The last fortnight, where adding time stops being a sales pitch. */
  const nearingEnd = !!active && daysLeft <= 15;
  const ended = status?.state === 'expired' || status?.state === 'none';
  /** The free tier: not paying, but in the app with daily limits. */
  const { limits } = useFreeTier();
  /** The plan's own numbers and where the student stands on live classes. */
  const { tiers, classes } = usePlan();
  const planTier = record ? (record.kind === 'day' ? 'day' : record.kind === 'week' ? 'week' : record.kind === 'pro_1m' ? 'pro' : 'max') : 'pro';
  const allowed = tiers[planTier];
  const starterRunning = !!active && (record?.kind === 'day' || record?.kind === 'week');
  /** Pro and Max print their daily numbers; a starter pass is not told its own (it gets what Pro gets). */
  const showNumbers = planTier === 'pro' || planTier === 'max';
  const free = (status?.state === 'none' || status?.state === 'expired') && status.free === true;
  /** More than one plan bought back to back: the server reports the running
   *  plan's start and the end of ALL the paid time, so the two do not describe
   *  one plan. Said, rather than left to look like a wrong date. */
  const stacked =
    !!active && !!record && !!endsAt &&
    endsAt.getTime() - new Date(record.startedAt).getTime() > (passDays(record.kind) + 1) * 86400000;
  /** When the plan that is running right now ends, apart from the ones queued
   *  behind it. The server sends only the end of ALL the paid time, so this is
   *  the running plan's own start plus its own length. */
  const runningEnds = stacked && record ? new Date(new Date(record.startedAt).getTime() + passDays(record.kind) * 86400000) : null;
  const runningMs = runningEnds ? Math.max(runningEnds.getTime() - Date.now(), 0) : 0;
  const runningLeft = runningMs >= 86400000 ? `${Math.ceil(runningMs / 86400000)} days left` : `${Math.max(1, Math.ceil(runningMs / 3600000))} hours left`;

  return (
    <SettingsPage title="Your plan">
      {/* Nothing is drawn until the pass is read: a half-loaded page said
          "no pass" to students who had one. */}
      {status ? (
        <>
          <PassCard
            scale={scale}
            teacher={teacher}
            overline={team ? 'TEAM ACCESS' : active ? 'ACTIVE' : free ? 'FREE' : status.state === 'expired' ? 'ENDED' : unknown ? 'OFFLINE' : 'NO PASS'}
            live={!!active}
            title={team ? 'Team access' : free ? 'Free plan' : record ? PASS_NAME[record.kind] : unknown ? "Couldn't load your plan" : 'No pass yet'}
            line={
              team
                ? 'This account never needs a pass.'
                : active && endsAt && runningEnds
                  ? `This plan ends ${asDate(runningEnds)} · ${runningLeft}\nPaid until ${asDate(endsAt)}`
                : active && endsAt
                  ? `Ends ${asDate(endsAt)} · ${active.daysLeft > 1 ? `${active.daysLeft} days left` : `${active.hoursLeft} hours left`}`
                  : free
                    ? `Each day: ${limits.snap_questions} snapped questions, ${limits.practice_questions} practice questions and ${limits.followups} follow-ups. A plan adds live classes and full mock tests.`
                    : status.state === 'expired' && endsAt
                    ? `Ended ${asDate(endsAt)}`
                    : unknown
                      ? 'Check your connection and open this page again.'
                      : 'Choose a plan to start classes, snaps and practice.'
            }
            progress={active && !team ? (runningEnds && record ? Math.max(0, Math.min(1, 1 - runningMs / (passDays(record.kind) * 86400000))) : used) : null}
          />

          {(ended || nearingEnd || starterRunning) && !team ? (
            <View style={{ marginTop: scale(14) }}>
              <ObButton label={ended ? 'Choose a plan' : starterRunning ? 'Move up to Pro or Max' : 'Add more time'} withArrow onPress={() => router.push('/plans')} />
            </View>
          ) : null}

          {record && !team ? (
            <>
              <Text style={styles.overline}>DETAILS</Text>
              <View style={styles.card}>
                <Row scale={scale} label="Plan" value={PASS_NAME[record.kind]} />
                <Row scale={scale} label="Started" value={asDate(new Date(record.startedAt))} />
                {runningEnds ? <Row scale={scale} label="This plan ends" value={asDate(runningEnds)} /> : null}
                {endsAt ? <Row scale={scale} label={active ? (stacked ? 'All paid time ends' : 'Ends') : 'Ended'} value={asDate(endsAt)} /> : null}
                {active && classes ? (
                  <Row
                    scale={scale}
                    label={classes.window_days >= 30 ? 'Classes left this month' : 'Classes left'}
                    value={`${classes.left} of ${classes.limit}`}
                  />
                ) : null}
                <Row scale={scale} label="How you got it" value={howGot(record)} />
                <Row scale={scale} label="Renews" value="Never on its own" last />
              </View>
            </>
          ) : null}

          {stacked && !team ? (
            <Text style={styles.foot}>
              You added more time while a plan was running, so each plan starts when the one before it ends. The last
              date is when all of your paid time ends.
            </Text>
          ) : null}

          <Text style={styles.overline}>{record && !team ? 'YOUR PLAN INCLUDES' : 'EVERY PLAN INCLUDES'}</Text>
          <View style={styles.card}>
            <Included
              scale={scale}
              icon={<LiveGlyph size={scale(20)} />}
              title="Live classes with Drona or Vedha"
              line={`${allowed.classes} ${allowed.window_days >= 30 ? 'a month' : allowed.window_days === 7 ? 'this week' : 'today'}, and unlimited follow-ups.`}
            />
            <Included scale={scale} icon={<SnapADoubtIcon size={scale(20)} color={colors.ink} accent={colors.marigold} />} title="Snap any question" line={showNumbers ? `Solved step by step. Up to ${allowed.snap_questions} a day.` : 'Solved step by step, whenever you are stuck.'} />
            <Included scale={scale} icon={<PracticeIcon size={scale(20)} color={colors.ink} accent={colors.marigold} />} title="Practise from 20,000+ questions" line={showNumbers ? `In the exam's own pattern. Up to ${allowed.practice_questions} a day.` : "In the exam's own pattern, every day."} />
            <Included scale={scale} icon={<BookGlyph size={scale(20)} />} title="Textbooks made for revision" line="Formulas, diagrams and key points, chapter by chapter." last />
          </View>

          <Text style={styles.foot}>
            When a plan ends, your notes and doubts stay, and you can still read them. Only new classes, snaps and
            practice wait for the next one.
          </Text>
          <Text style={styles.foot}>
            Questions about a payment? Write to{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('mailto:support@monklearning.com')}>
              support@monklearning.com
            </Text>
            . We reply within 24 hours.
          </Text>
        </>
      ) : null}
    </SettingsPage>
  );
}

/** The pass, on the teacher's sky: what it is, until when, how far through. */
function PassCard({
  scale,
  teacher,
  overline,
  live,
  title,
  line,
  progress,
}: {
  scale: Scale;
  teacher: TeacherId;
  overline: string;
  live: boolean;
  title: string;
  line: string;
  /** 0–1 of the pass used, or null for no bar. */
  progress: number | null;
}) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  return (
    <View
      onLayout={(e: LayoutChangeEvent) => {
        const { width, height } = e.nativeEvent.layout;
        setSize((p) => (p.width === width && p.height === height ? p : { width, height }));
      }}
      style={{ marginTop: scale(20), borderRadius: scale(22), overflow: 'hidden', paddingHorizontal: scale(20), paddingTop: scale(20), paddingBottom: scale(20) }}>
      <NightSky width={size.width} height={size.height} theme={SKY_THEMES[teacher]} style={StyleSheet.absoluteFillObject} />
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          { borderRadius: scale(22), boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.14)', inset: true }] },
        ]}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(7) }}>
        <View style={{ width: scale(6), height: scale(6), borderRadius: scale(3), backgroundColor: live ? colors.paleGold : 'rgba(255,253,248,.4)' }} />
        <Text style={{ fontFamily: 'Onest_700Bold', fontSize: scale(10.5), letterSpacing: scale(1.3), color: live ? colors.paleGold : PAPER62 }}>{overline}</Text>
      </View>
      <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(26), lineHeight: scale(31), letterSpacing: scale(-0.6), color: PAPER, marginTop: scale(10) }}>{title}</Text>
      <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(20), color: PAPER62, marginTop: scale(4) }}>{line}</Text>
      {progress !== null ? (
        <View style={{ height: scale(4), borderRadius: scale(2), backgroundColor: 'rgba(255,253,248,.16)', overflow: 'hidden', marginTop: scale(18) }}>
          <View style={{ width: `${Math.max(3, progress * 100)}%`, height: '100%', borderRadius: scale(2), backgroundColor: colors.paleGold }} />
        </View>
      ) : null}
    </View>
  );
}

function Row({ scale, label, value, last }: { scale: Scale; label: string; value: string; last?: boolean }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: scale(12),
        paddingVertical: scale(14),
        borderBottomWidth: last ? 0 : 1,
        borderBottomColor: 'rgba(28,26,22,.08)',
      }}>
      <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), color: colors.slate }}>{label}</Text>
      <Text style={{ flexShrink: 1, textAlign: 'right', fontFamily: 'Onest_500Medium', fontSize: scale(14), color: colors.ink }}>{value}</Text>
    </View>
  );
}

function Included({ scale, icon, title, line, last }: { scale: Scale; icon: ReactNode; title: string; line: string; last?: boolean }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: scale(14),
        paddingVertical: scale(14),
        borderBottomWidth: last ? 0 : 1,
        borderBottomColor: 'rgba(28,26,22,.08)',
      }}>
      <View style={{ paddingTop: scale(1) }}>{icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(15), color: colors.ink }}>{title}</Text>
        <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18), color: colors.slate, marginTop: scale(2) }}>{line}</Text>
      </View>
    </View>
  );
}

/** A board with a line of working on it: the live class. */
function LiveGlyph({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5.6 4.5h12.8A2.6 2.6 0 0 1 21 7.1v7.3a2.6 2.6 0 0 1-2.6 2.6H5.6A2.6 2.6 0 0 1 3 14.4V7.1a2.6 2.6 0 0 1 2.6-2.6zM9 20.5h6M12 17v3.5" stroke={colors.ink} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M7 10.6c1.5-1.5 3 1.5 4.6 0" stroke={colors.marigold} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

/** A book, open: the textbooks. */
function BookGlyph({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6.4C10.3 5 7.8 4.5 4 4.6v13.6c3.8-.1 6.3.4 8 1.8 1.7-1.4 4.2-1.9 8-1.8V4.6c-3.8-.1-6.3.4-8 1.8zM12 6.4V20"
        stroke={colors.ink}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: Scale) {
  return StyleSheet.create({
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10.5),
      letterSpacing: scale(1.2),
      color: colors.faint,
      marginTop: scale(28),
      marginBottom: scale(10),
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(18),
      paddingHorizontal: scale(16),
    },
    foot: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.slate,
      marginTop: scale(16),
    },
    link: { fontFamily: 'Onest_500Medium', color: colors.ink, textDecorationLine: 'underline' },
  });
}
