import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const SECTIONS = [
  {
    title: 'Built by EAO Labs to solve this problem',
    body: 'MonkLearning is built by EAO Labs Private Limited. EAO stands for Educate, Agitate, Organize — Dr. B.R. Ambedkar’s call to action, and the reason this company exists.',
  },
  {
    title: 'The problem we’re solving',
    body: 'Roughly 14 lakh students sit JEE Main and 23 lakh sit NEET UG every year, and most good coaching batches still run 100+ students to one teacher. Quality tutoring is concentrated in a handful of cities and can cost upwards of ₹2,00,000 a year — and the doubt that actually matters usually shows up at 11pm, long after class has ended.',
  },
  {
    title: 'How Drona actually teaches',
    body: 'Four things, every session: speaking it out loud on a real board, writing out each step as it’s said, listening for when you interrupt with a question, and remembering exactly where you got stuck so tomorrow picks up from there.',
  },
  {
    title: 'Two teachers, one plan',
    body: 'Drona is methodical and exacting — he builds every answer up from first principles. Vedha is encouraging and energetic, built for momentum on the days you need it. Both teach in English or Hinglish, and you can switch between them anytime.',
  },
  {
    title: 'What we believe',
    body: 'That patience is the actual product — teaching over just answering, progress you can see and trust, instruction in the language you think in, priced like a textbook, and built for how Indian students actually study.',
  },
  {
    title: 'What we won’t do',
    body: 'No auto-renewal traps, no celebrity endorsements, no answer-key PDFs, and no gamified tricks designed to keep you staring at a screen longer than you need to.',
  },
  {
    title: 'What’s next',
    body: 'Live today: JEE Main and NEET UG. Building next: JEE Advanced, more exams, and more Indian languages.',
  },
];

export default function AboutUsScreen() {
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
            <Text style={styles.headerTitle}>About us</Text>
          </View>

          {SECTIONS.map((section) => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionBody}>{section.body}</Text>
            </View>
          ))}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Get in touch</Text>
            <Text style={styles.sectionBody}>
              Questions about plans, payments or your account: write to{' '}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL('mailto:support@monklearning.com')}>
                support@monklearning.com
              </Text>{' '}
              — we reply within 24 hours. Stuck on a subject? Just ask your AI teacher inside the
              classroom instead.
            </Text>
            <View style={styles.socialRow}>
              {SOCIALS.map((social) => (
                <Pressable
                  key={social.label}
                  style={styles.socialPill}
                  onPress={() => Linking.openURL(social.url)}>
                  <Text style={styles.socialPillText}>{social.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <Text style={styles.footer}>MonkLearning · v2.0 · Made for students, not batches.</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const SOCIALS = [
  { label: 'Instagram', url: 'https://instagram.com/monklearning' },
  { label: 'X', url: 'https://x.com/MonkLearning_in' },
  { label: 'LinkedIn', url: 'https://linkedin.com/company/monklearning' },
  { label: 'Reddit', url: 'https://reddit.com/r/MonkLearning' },
  { label: 'Discord', url: 'https://discord.gg/8RZpBz5h2' },
];

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
    section: {
      marginTop: verticalScale(24),
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
    link: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
      textDecorationLine: 'underline',
      textDecorationColor: 'rgba(238,163,31,.6)',
    },
    socialRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
      marginTop: verticalScale(12),
    },
    socialPill: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(13),
      backgroundColor: '#fff',
    },
    socialPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    footer: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      color: colors.faint,
      marginTop: verticalScale(32),
      textAlign: 'center',
    },
  });
}
