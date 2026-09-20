import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { PASS_NAME, passStatus, type PassStatus } from '@/lib/pass';

/**
 * Your plan.
 *
 * What this replaces described a product we don't sell: an "Annual" plan at
 * ₹11,999/year that "Renews", with a monthly/annual switcher. monklearning's
 * payments are one-time and nothing auto-renews — our own Terms say so — so
 * every number and every word on that screen was wrong.
 *
 * This screen answers what a student actually comes here to ask: what did I
 * buy, when does it run out, what did I pay, and where is the receipt. The
 * order below is that order.
 *
 * Chosen deliberately over the usual SaaS furniture:
 *   * no card on file and no "manage billing" — we never store card details
 *     (Privacy policy: "payment confirmations only"), so there is nothing to
 *     manage between purchases;
 *   * no cancel — there is no recurring charge to cancel, and saying so
 *     plainly is worth more than a button that does nothing;
 *   * expiry is stated as a date AND as days left, because "18 days" is what
 *     a student actually reacts to.
 */

const GREEN = '#157A45';
const GREEN_DOT = '#1C9B57';

/**
 * WHAT THIS READS, AND WHAT IT STILL CANNOT.
 *
 * It was a fixed object: a six-month plan bought on 2 June with 107 days left
 * and two invoices, none of it true for anybody. It now reads the student's
 * real pass from `lib/pass` — what they took, when it started, when it ends,
 * how long is left, and the code that made it free.
 *
 * PAYMENTS ARE NOT LISTED, because there have been none. No provider is wired
 * and every pass so far exists because a promo code brought a price to zero;
 * a list of invoices would be a list of fictions. The block returns when the
 * server has purchases to return.
 */

const INCLUDED = [
  'Live classes with Drona or Vedha, in English or Hinglish',
  'Snap a doubt, up to 3 questions a photo',
  'Unlimited practice, and mock tests as chapters unlock',
  'Every note and doubt you save, kept and exportable',
];

const asDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function SubscriptionScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [status, setStatus] = useState<PassStatus | null>(null);
  useEffect(() => {
    let cancelled = false;
    passStatus().then((s) => !cancelled && setStatus(s));
    return () => {
      cancelled = true;
    };
  }, []);

  const active = status?.state === 'active' ? status : null;
  const record = status && status.state !== 'none' ? status.record : null;
  const endsAt = status && status.state !== 'none' ? status.endsAt : null;
  const totalDays = record
    ? Math.max(1, Math.round((endsAt!.getTime() - new Date(record.startedAt).getTime()) / 86400000))
    : 1;
  const daysLeft = active?.daysLeft ?? 0;
  const elapsed = Math.max(0, Math.min(1, 1 - daysLeft / totalDays));
  const expiringSoon = !!active && daysLeft <= 3;

  return (
    <SettingsPage title="Your plan">
      {/* What you have, and how long it has left. */}
      <View style={styles.planCard}>
        <View style={styles.planTopRow}>
          <View style={[styles.statusPill, !active && styles.statusPillOff]}>
            <View style={[styles.statusDot, !active && styles.statusDotOff]} />
            <Text style={[styles.statusText, !active && styles.statusTextOff]}>
              {active ? 'ACTIVE' : status?.state === 'expired' ? 'ENDED' : 'NO PASS'}
            </Text>
          </View>
          {active && (
            <Text style={styles.daysLeft}>
              {/* Under a day is said in hours: "1 day left" on a pass with two
                  hours in it is the kind of thing a student plans around. */}
              {active.daysLeft > 1 ? active.daysLeft : active.hoursLeft}{' '}
              <Text style={styles.daysLeftUnit}>
                {active.daysLeft > 1 ? 'days left' : 'hours left'}
              </Text>
            </Text>
          )}
        </View>

        <Text style={styles.planTitle}>
          {record ? PASS_NAME[record.kind] : 'No pass yet'}
        </Text>
        <Text style={styles.planDuration}>
          {record
            ? `${record.promo ? `${record.promo} · ` : ''}JEE Main and NEET UG, both covered`
            : 'Take one to start classes, snaps and practice'}
        </Text>

        {/* One bar, because a date alone doesn't tell you where you are in it. */}
        <View style={styles.track}>
          <View style={[styles.trackFill, { width: `${elapsed * 100}%` }]} />
        </View>

        {!!record && !!endsAt && (
          <View style={styles.datesRow}>
            <View>
              <Text style={styles.dateLabel}>STARTED</Text>
              <Text style={styles.dateValue}>{asDate(new Date(record.startedAt))}</Text>
            </View>
            <View style={styles.dateRight}>
              <Text style={styles.dateLabel}>{active ? 'ENDS' : 'ENDED'}</Text>
              <Text style={styles.dateValue}>{asDate(endsAt)}</Text>
            </View>
          </View>
        )}
      </View>

      {/* The thing students get wrong about one-time plans, said before they
          have to wonder about it. */}
      <View style={[styles.notice, expiringSoon && styles.noticeWarn]}>
        <Text style={styles.noticeText}>
          {active
            ? expiringSoon
              ? `Your access ends on ${asDate(endsAt!)}. Nothing renews on its own — take another when you're ready.`
              : 'This is a one-time purchase. Nothing auto-renews, and no card is stored. When it ends, it just ends.'
            : 'Your notes and doubts stay yours either way. Only new classes, snaps and practice wait on a pass.'}
        </Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={() => router.push('/plans')}>
        <Text style={styles.primaryButtonText}>
          {active ? 'Extend my access' : 'Get a pass'}
        </Text>
      </Pressable>

      <Text style={styles.overline}>WHAT&apos;S INCLUDED</Text>
      <View style={styles.card}>
        {INCLUDED.map((line, i) => (
          <View key={line} style={[styles.includedRow, i === INCLUDED.length - 1 && styles.rowLast]}>
            <TickIcon size={scale(13)} />
            <Text style={styles.includedText}>{line}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footNote}>
        Questions about a payment? Write to{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:support@monklearning.com')}>
          support@monklearning.com
        </Text>. We reply within 24 hours.
      </Text>

      <Text style={styles.footNote}>
        If your plan lapses, your notes and doubts stay yours and stay exportable. Only new
        classes, snaps and practice pause.
      </Text>
    </SettingsPage>
  );
}

function TickIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4 12.5 9.5 18 20 6.5"
        stroke={GREEN}
        strokeWidth={2.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    planCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(20),
      padding: scale(18),
      marginTop: verticalScale(20),
    },
    planTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statusPill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(11),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,155,87,.1)',
    },
    statusDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      backgroundColor: GREEN_DOT,
    },
    statusText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.55),
      letterSpacing: scale(0.85),
      color: GREEN,
    },
    /** Ended, or never taken: the same pill, off. Grey would read as broken;
     *  this is simply the state without the green. */
    statusPillOff: { backgroundColor: 'rgba(28,26,22,.06)' },
    statusDotOff: { backgroundColor: colors.faint },
    statusTextOff: { color: colors.slate },
    daysLeft: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.ink,
    },
    daysLeftUnit: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12.5),
      color: colors.faint,
    },
    planTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(25),
      letterSpacing: scale(-0.75),
      color: colors.ink,
      marginTop: verticalScale(14),
    },
    planDuration: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13.5),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    track: {
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.08)',
      overflow: 'hidden',
      marginTop: verticalScale(16),
    },
    trackFill: {
      height: '100%',
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
    },
    datesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(12),
    },
    dateRight: {
      alignItems: 'flex-end',
    },
    dateLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.81),
      color: colors.faint,
    },
    dateValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13.5),
      color: colors.ink,
      marginTop: verticalScale(3),
    },

    notice: {
      borderRadius: scale(14),
      backgroundColor: colors.welcomePaper,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(12),
    },
    noticeWarn: {
      backgroundColor: 'rgba(238,163,31,.1)',
      borderColor: 'rgba(238,163,31,.35)',
    },
    noticeText: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12.5),
      lineHeight: scale(18.5),
      color: colors.slate,
    },
    primaryButton: {
      height: verticalScale(50),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(14),
    },
    primaryButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.paper,
    },

    overline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.55),
      letterSpacing: scale(1.0),
      color: colors.faint,
      marginTop: verticalScale(26),
      marginBottom: verticalScale(9),
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(18),
      paddingHorizontal: scale(16),
    },
    includedRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(10),
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    rowLast: {
      borderBottomWidth: 0,
    },
    includedText: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19.5),
      color: colors.slate,
    },

    payRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(13),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    payTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    payTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    paySub: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11.5),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    payAmount: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    invoiceButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(11),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.18)',
      backgroundColor: '#fff',
    },
    invoiceButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11.5),
      color: colors.ink,
    },

    footNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.faint,
      marginTop: verticalScale(16),
    },
    link: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
      textDecorationLine: 'underline',
      textDecorationColor: 'rgba(238,163,31,.6)',
    },
  });
}
