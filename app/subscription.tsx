import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useMemo } from 'react';
import { useScale } from '@/constants/scale';

/**
 * Your plan.
 *
 * What this replaces described a product we don't sell: an "Annual" plan at
 * ₹11,999/year that "Renews", with a monthly/annual switcher. MonkLearning's
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

interface Purchase {
  id: string;
  /** What was bought, e.g. "JEE Main · 6 months". */
  title: string;
  paidOn: string;
  amount: string;
  invoiceNo: string;
}

interface PlanState {
  track: string;
  duration: string;
  startedOn: string;
  endsOn: string;
  daysLeft: number;
  totalDays: number;
  amount: string;
  purchases: Purchase[];
}

/**
 * PLACEHOLDER — there is no plans/purchases endpoint on the API yet (the
 * router table is doubts, drona, notes, practice, progress and nothing else),
 * so this screen renders from a fixed object. The amounts here are NOT
 * confirmed pricing: monklearning.com was unreachable when this was built, so
 * every figure below is waiting on the real price list. Replace this whole
 * object with the API response — the components read nothing else.
 */
const PLAN: PlanState = {
  track: 'JEE Main',
  duration: '6 months',
  startedOn: '2 Jun 2026',
  endsOn: '2 Dec 2026',
  daysLeft: 107,
  totalDays: 183,
  amount: '₹—',
  purchases: [
    { id: 'p1', title: 'JEE Main · 6 months', paidOn: '2 Jun 2026', amount: '₹—', invoiceNo: 'ML-2026-0412' },
    { id: 'p2', title: 'Day Pass', paidOn: '19 May 2026', amount: '₹249', invoiceNo: 'ML-2026-0288' },
  ],
};

const INCLUDED = [
  'Live classes with Drona or Vedha, in English or Hinglish',
  'Snap a doubt — up to 3 questions a photo',
  'Unlimited practice, and mock tests as chapters unlock',
  'Every note and doubt you save, kept and exportable',
];

export default function SubscriptionScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const elapsed = Math.max(0, Math.min(1, 1 - PLAN.daysLeft / PLAN.totalDays));
  const expiringSoon = PLAN.daysLeft <= 14;

  return (
    <SettingsPage title="Your plan">
      {/* What you have, and how long it has left. */}
      <View style={styles.planCard}>
        <View style={styles.planTopRow}>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>ACTIVE</Text>
          </View>
          <Text style={styles.daysLeft}>
            {PLAN.daysLeft} <Text style={styles.daysLeftUnit}>days left</Text>
          </Text>
        </View>

        <Text style={styles.planTitle}>{PLAN.track}</Text>
        <Text style={styles.planDuration}>{PLAN.duration} of full access</Text>

        {/* One bar, because a date alone doesn't tell you where you are in it. */}
        <View style={styles.track}>
          <View style={[styles.trackFill, { width: `${elapsed * 100}%` }]} />
        </View>

        <View style={styles.datesRow}>
          <View>
            <Text style={styles.dateLabel}>STARTED</Text>
            <Text style={styles.dateValue}>{PLAN.startedOn}</Text>
          </View>
          <View style={styles.dateRight}>
            <Text style={styles.dateLabel}>ENDS</Text>
            <Text style={styles.dateValue}>{PLAN.endsOn}</Text>
          </View>
        </View>
      </View>

      {/* The thing students get wrong about one-time plans, said before they
          have to wonder about it. */}
      <View style={[styles.notice, expiringSoon && styles.noticeWarn]}>
        <Text style={styles.noticeText}>
          {expiringSoon
            ? `Your access ends on ${PLAN.endsOn}. Nothing renews on its own — extend it when you're ready.`
            : 'This is a one-time purchase. Nothing auto-renews, and no card is stored — when it ends, it just ends.'}
        </Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={() => {}}>
        <Text style={styles.primaryButtonText}>Extend my access</Text>
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

      {/* Receipts. GST invoices matter to parents paying for this. */}
      <Text style={styles.overline}>PAYMENTS</Text>
      <View style={styles.card}>
        {PLAN.purchases.map((purchase, i) => (
          <View
            key={purchase.id}
            style={[styles.payRow, i === PLAN.purchases.length - 1 && styles.rowLast]}>
            <View style={styles.payTextBlock}>
              <Text style={styles.payTitle}>{purchase.title}</Text>
              <Text style={styles.paySub}>
                {purchase.paidOn} · {purchase.invoiceNo}
              </Text>
            </View>
            <Text style={styles.payAmount}>{purchase.amount}</Text>
            <Pressable style={styles.invoiceButton} onPress={() => {}}>
              <DownloadIcon size={scale(13)} />
              <Text style={styles.invoiceButtonText}>Invoice</Text>
            </Pressable>
          </View>
        ))}
      </View>

      <Text style={styles.footNote}>
        Invoices include GST and are emailed to you as well. Questions about a payment? Write to{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:support@monklearning.com')}>
          support@monklearning.com
        </Text>{' '}
        — we reply within 24 hours.
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

function DownloadIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3v12M7 11l5 5 5-5M4 20h16"
        stroke={colors.ink}
        strokeWidth={2}
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
