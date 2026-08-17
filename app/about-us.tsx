import { Linking, Pressable, Text, View } from 'react-native';

import { SettingsPage, useSettingsStyles } from '@/components/settings-page';

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
  const styles = useSettingsStyles();

  return (
    <SettingsPage title="About us">
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
        <View style={styles.chipRow}>
          {SOCIALS.map((social) => (
            <Pressable
              key={social.label}
              style={styles.chip}
              onPress={() => Linking.openURL(social.url)}>
              <Text style={styles.chipText}>{social.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Text style={styles.footer}>MonkLearning · v2.0 · Made for students, not batches.</Text>
    </SettingsPage>
  );
}

const SOCIALS = [
  { label: 'Instagram', url: 'https://instagram.com/monklearning' },
  { label: 'X', url: 'https://x.com/MonkLearning_in' },
  { label: 'LinkedIn', url: 'https://linkedin.com/company/monklearning' },
  { label: 'Reddit', url: 'https://reddit.com/r/MonkLearning' },
  { label: 'Discord', url: 'https://discord.gg/8RZpBz5h2' },
];
