import { Text, View } from 'react-native';

import { SettingsPage, useSettingsStyles } from '@/components/settings-page';

const SECTIONS = [
  {
    title: 'Information we collect',
    body: 'Account basics like your name, email, phone and password; your exam track, class and language preference; a parent or guardian’s details if you’re under 18; and any messages or attachments you send our support team. We never store your card details — payment confirmations only. While you study, we also pick up classroom audio and transcripts, which chapters and topics you touch, your practice answers and response times, doubt photos and handwritten work, and your progress metrics like Monk Score and mastery. Standard technical data — device, OS, app version, IP address and region, crash logs — comes along for the ride too.',
  },
  {
    title: 'How we use it',
    body: 'To actually run your classes, track what you’ve mastered, and decide what Drona or Vedha teaches you next. We also use it to keep the service running, to improve MonkLearning through de-identified analysis, and to catch fraud. We don’t sell your data, and we don’t use it to train anything outside your own account.',
  },
  {
    title: 'Who we share it with',
    body: 'Only the service providers that keep MonkLearning running — cloud hosting, payment processing, messaging, crash reporting — and only under contracts that restrict what they can do with it. We’ll disclose data if Indian law or a valid legal process requires it. We never share your study data with other students, coaching institutes, or advertisers.',
  },
  {
    title: 'How long we keep it',
    body: 'Your learning data sticks around for as long as your account is active. Voice recordings can be deleted anytime from Personal information. Delete your account and we purge your personal data within 30 days — payment and tax records are kept a little longer, as Indian law requires.',
  },
  {
    title: 'Your rights',
    body: 'Under India’s Digital Personal Data Protection Act, you can access, correct, export, or delete your data, and withdraw consent, at any time from Personal information. We aim to respond to any request within 7 days.',
  },
  {
    title: 'If you’re under 18',
    body: 'A parent or guardian gives consent when your account is created, and can view your progress or request a copy or deletion of your data on your behalf. We don’t run third-party ads or build marketing profiles on students.',
  },
  {
    title: 'Contact us',
    body: 'Questions about this policy can be sent to support@monklearning.com — we reply within 24 hours, usually much faster.',
  },
];

export default function PrivacyPolicyScreen() {
  const styles = useSettingsStyles();

  return (
    <SettingsPage title="Privacy policy">
      <Text style={styles.eyebrow}>Last updated · July 2026</Text>

      {SECTIONS.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionBody}>{section.body}</Text>
        </View>
      ))}
    </SettingsPage>
  );
}
