import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const SECTIONS = [
  {
    title: 'The agreement',
    body: 'Creating an account or using MonkLearning means you accept these terms. If you’re under 18, a parent or guardian accepts them at sign-up and stays responsible for the account.',
  },
  {
    title: 'What MonkLearning is',
    body: 'An AI teaching platform for JEE Main and NEET UG — live classroom sessions, a lesson library, Snap-a-doubt, unlimited practice, mock tests that unlock as you’re ready, and progress tracking. Every plan includes both AI teachers, in English or Hinglish.',
  },
  {
    title: 'Your account',
    body: 'One student per account — it’s built around your own learning data, not a shared login. Keep your sign-up details accurate and your password to yourself; we may pause accounts we find being shared.',
  },
  {
    title: 'Pricing & payment',
    body: 'Payments are one-time, not subscriptions — nothing auto-renews. You choose a duration (1, 3, 6 or 11 months) per exam track, or a ₹249 Day Pass for 24 hours of full access from your first class. You can switch exam tracks for free within 30 days of purchase, or upgrade to a combined plan for the difference. Prices include GST and are processed through RBI-regulated payment gateways.',
  },
  {
    title: 'Acceptable use',
    body: 'Please don’t share or resell your account, scrape content in bulk, try to reverse-engineer Drona or Vedha, use MonkLearning to cheat on an exam, or upload abusive or plagiarized doubts at scale.',
  },
  {
    title: 'Mock test access',
    body: 'Mock tests unlock based on how well our AI thinks you’ve mastered a chapter, not on a fixed schedule or extra payment — so the exact timing can shift with your own performance.',
  },
  {
    title: 'Who owns what',
    body: 'MonkLearning owns the platform itself — lessons, questions, and our teachers’ voices. Your notes and doubt submissions are yours, and stay exportable even after your access ends. If you send us feedback, we may use it without owing you anything for it.',
  },
  {
    title: 'Changes & availability',
    body: 'We do routine maintenance and occasionally have outages. If significant downtime affects a short plan or Day Pass, we’ll extend your access to make up for it. Features we describe as “coming soon,” like JEE Advanced, are plans — not something your current purchase guarantees.',
  },
  {
    title: 'What we don’t guarantee',
    body: 'MonkLearning is a study tool, not a promise of marks, rank, or admission. Our AI teachers can make mistakes — every screen has a way to report one. Where our content and the official NTA or NMC syllabus disagree, the official syllabus wins.',
  },
  {
    title: 'Suspension & account deletion',
    body: 'You can delete your own account anytime. We may suspend or terminate accounts for a material breach of these terms — usually after a warning, except in severe cases or where the law requires immediate action. Termination for breach doesn’t come with a refund.',
  },
  {
    title: 'Liability',
    body: 'Our total liability to you is capped at what you paid us in the past 12 months, and we’re not liable for indirect losses like a missed rank or a lost year. This doesn’t take away any consumer protection Indian law says can’t be waived.',
  },
  {
    title: 'Governing law',
    body: 'These terms are governed by Indian law, and courts in Bengaluru have jurisdiction over any dispute. Please reach out to support first so we can try to sort things out directly. We’ll notify you in-app and by email before any material change to these terms takes effect.',
  },
];

export default function TermsScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <BackArrowIcon size={scale(15)} />
            </Pressable>
            <Text style={styles.headerTitle}>Terms &amp; conditions</Text>
          </View>

          <Text style={styles.updated}>Effective · July 2026</Text>

          {SECTIONS.map((section) => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionBody}>{section.body}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
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
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(24),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    backButton: {
      width: scale(34),
      height: scale(34),
      flexShrink: 0,
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },
    updated: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(20),
    },
    section: {
      marginTop: verticalScale(20),
    },
    sectionTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      letterSpacing: scale(-0.15),
      color: colors.ink,
    },
    sectionBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(21),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
  });
}
