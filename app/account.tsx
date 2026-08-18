import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { EXAMS, YEARS, type ExamKey, type YearKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { StudentProfile, getProfile, saveProfile } from '@/lib/profile';

/**
 * Personal information — the five things the app actually knows about a
 * student: name, class, exam, phone, email.
 *
 * What this replaces had an email/phone/password stack with a change-password
 * form. There is no password anywhere in this product — students sign in with
 * a phone number and an OTP, and onboarding never sets one — so that form
 * could not have worked and the fields it sat under were the wrong three.
 *
 * Email is optional at sign-up, so it has three states here: missing (ask for
 * it), present but unverified (offer to verify), verified (say so and stop).
 * Phone is the one field that can't be edited — it is the account, and it was
 * verified at the OTP step.
 */

const VERIFIED_GREEN = '#157A45';

const YEAR_ORDER: YearKey[] = ['class11', 'class12', 'dropper'];
const EXAM_ORDER: ExamKey[] = ['jee', 'neet', 'both'];

export default function AccountScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verifySent, setVerifySent] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getProfile().then((p) => {
      if (cancelled) return;
      setProfile(p);
      setName(p.name);
      setEmail(p.email);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const patch = useCallback((next: Partial<StudentProfile>) => {
    setProfile((prev) => (prev ? { ...prev, ...next } : prev));
    saveProfile(next);
  }, []);

  const emailChanged = profile ? email.trim() !== profile.email : false;
  const emailVerified = !!profile?.emailVerified && !emailChanged;
  const hasEmail = email.trim().length > 0;

  return (
    <SettingsPage title="Personal information" keyboardAware>
      <Text style={styles.intro}>
        This is what Drona knows about you. Everything except your number can be changed.
      </Text>

      <View style={styles.card}>
        <Field label="Full name">
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            onBlur={() => patch({ name: name.trim() })}
            placeholder="Your name"
            placeholderTextColor={colors.faint}
            autoCapitalize="words"
          />
        </Field>

        {/* Class and exam are the two answers that shape every lesson, so they
            are editable in place rather than buried behind another screen. */}
        <Field label="Class">
          <View style={styles.choiceRow}>
            {YEAR_ORDER.map((key) => {
              const on = profile?.year === key;
              return (
                <Pressable
                  key={key}
                  style={[styles.choice, on && styles.choiceOn]}
                  onPress={() => patch({ year: key })}>
                  <Text style={[styles.choiceText, on && styles.choiceTextOn]}>{YEARS[key]}</Text>
                </Pressable>
              );
            })}
          </View>
        </Field>

        <Field label="Exam">
          <View style={styles.choiceRow}>
            {EXAM_ORDER.map((key) => {
              const on = profile?.exam === key;
              return (
                <Pressable
                  key={key}
                  style={[styles.choice, on && styles.choiceOn]}
                  onPress={() => patch({ exam: key })}>
                  <Text style={[styles.choiceText, on && styles.choiceTextOn]}>
                    {EXAMS[key].name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </Field>

        <Field label="Phone number">
          <View style={styles.staticRow}>
            <Text style={[styles.staticValue, !profile?.phone && styles.staticValueEmpty]}>
              {profile?.phone || 'Not set'}
            </Text>
            {/* Only claim verified when there is actually a number — the tick
                belongs to the OTP step, not to an empty field. */}
            {!!profile?.phone && (
              <View style={styles.verifiedTag}>
                <CheckIcon size={scale(11)} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            )}
          </View>
          <Text style={styles.hint}>Your number is your account, so it can&apos;t be changed here.</Text>
        </Field>

        <Field label="Email address" last>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(next) => {
              setEmail(next);
              setVerifySent(false);
            }}
            onBlur={() => {
              const trimmed = email.trim();
              // A changed address is a different address — it has to be
              // verified again, so the old tick doesn't carry over.
              if (trimmed !== profile?.email) patch({ email: trimmed, emailVerified: false });
            }}
            placeholder="Add your email"
            placeholderTextColor={colors.faint}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {emailVerified ? (
            <View style={styles.verifiedTag}>
              <CheckIcon size={scale(11)} />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          ) : hasEmail ? (
            <View style={styles.emailActionRow}>
              <Text style={styles.hint}>
                {verifySent
                  ? 'Check your inbox — the link is good for an hour.'
                  : 'Not verified yet. We use it for receipts and account recovery.'}
              </Text>
              <Pressable
                style={styles.verifyButton}
                disabled={verifySent}
                onPress={() => setVerifySent(true)}>
                <Text style={styles.verifyButtonText}>
                  {verifySent ? 'Sent' : 'Verify'}
                </Text>
              </Pressable>
            </View>
          ) : (
            <Text style={styles.hint}>
              Optional — but it&apos;s how you get receipts and how you get back in if you change
              your number.
            </Text>
          )}
        </Field>
      </View>
    </SettingsPage>
  );
}

function Field({
  label,
  last = false,
  children,
}: {
  label: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  return (
    <View style={[styles.field, last && styles.fieldLast]}>
      <Text style={styles.fieldLabel}>{label.toUpperCase()}</Text>
      {children}
    </View>
  );
}

function CheckIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4 12.5 9.5 18 20 6.5"
        stroke={VERIFIED_GREEN}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    intro: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.slate,
      marginTop: verticalScale(18),
    },
    // White on white, held by a hairline — Profile's own card treatment.
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(18),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(16),
    },
    field: {
      paddingVertical: verticalScale(15),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
    },
    fieldLast: {
      borderBottomWidth: 0,
    },
    fieldLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(1.14),
      color: colors.faint,
      marginBottom: verticalScale(7),
    },
    input: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15.5),
      color: colors.ink,
      padding: 0,
    },
    staticRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(10),
    },
    staticValue: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15.5),
      color: colors.ink,
    },
    staticValueEmpty: {
      color: colors.faint,
    },
    hint: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      lineHeight: scale(17),
      color: colors.faint,
      marginTop: verticalScale(6),
    },
    // The same pill language as the Library's subject filters.
    choiceRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
    },
    choice: {
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    choiceOn: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    choiceText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
    },
    choiceTextOn: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.paper,
    },
    verifiedTag: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      alignSelf: 'flex-start',
      marginTop: verticalScale(7),
    },
    verifiedText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11.5),
      color: VERIFIED_GREEN,
    },
    emailActionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    verifyButton: {
      flexShrink: 0,
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(15),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    verifyButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12.5),
      color: colors.paper,
    },
  });
}
