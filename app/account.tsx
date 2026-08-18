import { useCallback, useEffect, useMemo, useState } from 'react';
import { LayoutAnimation, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { EXAMS, YEARS, type YearKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { StudentProfile, getProfile, saveProfile } from '@/lib/profile';

/**
 * Personal information.
 *
 * What this replaces had email, phone and a change-password form. There is no
 * password anywhere in this product — students sign in with a phone number
 * and an OTP — so that form could not have worked.
 *
 * Each field is exactly as editable as it really is. Name and email are
 * typed. Class changes — a student who signs up in Class 11 is still here in
 * Class 12 — so its row opens in place to offer the three options, and closes
 * again on the pick. No sheet, no scrim, nothing dimmed: this is one field on
 * a settings page, and a modal to change it was more furniture than the
 * choice deserves. Exam is fixed at sign-up. Phone is the account itself,
 * verified at the OTP step.
 */

const VERIFIED_GREEN = '#157A45';
const YEAR_ORDER: YearKey[] = ['class11', 'class12', 'dropper'];

export default function AccountScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [classOpen, setClassOpen] = useState(false);

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

  const closeOtp = useCallback(() => {
    setOtpOpen(false);
    setOtp('');
    setOtpError(false);
  }, []);

  const openOtp = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOtp('');
    setOtpError(false);
    setOtpOpen(true);
    // No endpoint sends this yet — see the note at the top of lib/profile.ts.
  }, []);

  const confirmOtp = useCallback(() => {
    // Nothing checks the code yet either, so any six digits pass. The moment
    // there is an endpoint, this is the one call to make.
    if (otp.length < 6) {
      setOtpError(true);
      return;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    patch({ emailVerified: true });
    setOtpOpen(false);
    setOtp('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  const emailChanged = profile ? email.trim() !== profile.email : false;
  const emailVerified = !!profile?.emailVerified && !emailChanged;
  const hasEmail = email.trim().length > 0;

  return (
    <SettingsPage title="Personal information" keyboardAware>
      <View style={styles.card}>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>FULL NAME</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            onBlur={() => patch({ name: name.trim() })}
            placeholder="Your name"
            placeholderTextColor={colors.faint}
            autoCapitalize="words"
          />
        </View>

        {/* The one detail that legitimately changes mid-subscription. The
            options are not on the page until asked for, so there is nothing
            to mis-tap, and asking costs one tap rather than a whole sheet. */}
        <View style={styles.field}>
          <Pressable
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setClassOpen((open) => !open);
            }}>
            <Text style={styles.fieldLabel}>CLASS</Text>
            <View style={styles.rowValue}>
              <Text style={styles.value}>{profile ? YEARS[profile.year] : '—'}</Text>
              <Text style={styles.changeText}>{classOpen ? 'Done' : 'Change'}</Text>
            </View>
          </Pressable>

          {classOpen && (
            <View style={styles.optionRow}>
              {YEAR_ORDER.map((key) => {
                const on = profile?.year === key;
                return (
                  <Pressable
                    key={key}
                    style={[styles.option, on && styles.optionOn]}
                    onPress={() => {
                      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                      patch({ year: key });
                      setClassOpen(false);
                    }}>
                    <Text style={[styles.optionText, on && styles.optionTextOn]}>{YEARS[key]}</Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>EXAM</Text>
          <View style={styles.rowValue}>
            <Text style={styles.value}>{profile ? EXAMS[profile.exam].name : '—'}</Text>
            <Text style={styles.subjectTag}>{profile ? EXAMS[profile.exam].tag : ''}</Text>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>PHONE NUMBER</Text>
          <View style={styles.rowValue}>
            <Text style={[styles.value, !profile?.phone && styles.valueEmpty]}>
              {profile?.phone || 'Not set'}
            </Text>
            {!!profile?.phone && (
              <View style={styles.verifiedTag}>
                <CheckIcon size={scale(11)} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            )}
          </View>
        </View>

        <View style={[styles.field, styles.fieldLast]}>
          <View style={styles.labelRow}>
            <Text style={styles.fieldLabel}>EMAIL ADDRESS</Text>
            <Text style={styles.optionalTag}>OPTIONAL</Text>
          </View>
          <View style={styles.rowValue}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(next) => {
                setEmail(next);
                closeOtp();
              }}
              onBlur={() => {
                const trimmed = email.trim();
                // A changed address is a different address — the old tick
                // can't carry over to it.
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
            ) : hasEmail && !otpOpen ? (
              <Pressable style={styles.verifyButton} onPress={openOtp}>
                <Text style={styles.verifyButtonText}>Verify</Text>
              </Pressable>
            ) : null}
          </View>

          {/* The code is taken here rather than on a screen of its own: it is
              one field and one button, and sending the student somewhere else
              to type six digits costs more than it is worth. */}
          {otpOpen && (
            <View style={styles.otpBlock}>
              <View style={styles.otpRow}>
                <TextInput
                  style={styles.otpInput}
                  value={otp}
                  onChangeText={(next) => {
                    setOtp(next.replace(/[^0-9]/g, '').slice(0, 6));
                    setOtpError(false);
                  }}
                  placeholder="6-digit code"
                  placeholderTextColor={colors.faint}
                  keyboardType="number-pad"
                  maxLength={6}
                  autoFocus
                />
                <Pressable
                  style={[styles.otpButton, otp.length < 6 && styles.otpButtonOff]}
                  disabled={otp.length < 6}
                  onPress={confirmOtp}>
                  <Text
                    style={[styles.otpButtonText, otp.length < 6 && styles.otpButtonTextOff]}>
                    Confirm
                  </Text>
                </Pressable>
              </View>
              <Text style={[styles.otpHint, otpError && styles.otpHintError]}>
                {otpError ? (
                  'That code didn’t match. Check it and try again.'
                ) : (
                  <>
                    Sent to {email.trim()} ·{' '}
                    <Text style={styles.otpResend} onPress={openOtp}>
                      Resend
                    </Text>
                  </>
                )}
              </Text>
            </View>
          )}
        </View>
      </View>

    </SettingsPage>
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
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(18),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(20),
    },
    field: {
      paddingVertical: verticalScale(14),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
    },
    fieldLast: {
      borderBottomWidth: 0,
    },
    labelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    fieldLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(1.14),
      color: colors.faint,
      marginBottom: verticalScale(7),
    },
    optionalTag: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(8.5),
      letterSpacing: scale(0.85),
      color: colors.faint,
      marginBottom: verticalScale(7),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(6),
      borderRadius: scale(4),
      backgroundColor: 'rgba(28,26,22,.06)',
      overflow: 'hidden',
    },
    rowValue: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(10),
    },
    value: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15.5),
      color: colors.ink,
    },
    valueEmpty: {
      color: colors.faint,
    },
    input: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15.5),
      color: colors.ink,
      padding: 0,
    },
    // A word, not a button. The row is the tap target.
    changeText: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12.5),
      color: colors.amberText,
    },
    // Shown only while the row is open.
    optionRow: {
      flexDirection: 'row',
      gap: scale(7),
      marginTop: verticalScale(12),
    },
    option: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(9),
      borderRadius: scale(11),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    optionOn: {
      borderColor: colors.ink,
      backgroundColor: colors.ink,
    },
    optionText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
    },
    optionTextOn: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.paper,
    },
    subjectTag: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      letterSpacing: scale(0.66),
      color: colors.faint,
    },
    verifiedTag: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      flexShrink: 0,
    },
    verifiedText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11.5),
      color: VERIFIED_GREEN,
    },
    verifyButton: {
      flexShrink: 0,
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },

    verifyButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.paper,
    },
    otpBlock: {
      marginTop: verticalScale(12),
    },
    otpRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    otpInput: {
      flex: 1,
      height: verticalScale(42),
      borderRadius: scale(11),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
      paddingHorizontal: scale(14),
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      letterSpacing: scale(3),
      color: colors.ink,
    },
    otpButton: {
      flexShrink: 0,
      height: verticalScale(42),
      justifyContent: 'center',
      paddingHorizontal: scale(16),
      borderRadius: scale(11),
      backgroundColor: colors.ink,
    },
    otpButtonOff: {
      backgroundColor: 'rgba(28,26,22,.1)',
    },
    otpButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.paper,
    },
    otpButtonTextOff: {
      color: colors.faint,
    },
    otpHint: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11.5),
      color: colors.faint,
      marginTop: verticalScale(8),
    },
    otpHintError: {
      fontFamily: 'AnekLatin_600SemiBold',
      color: colors.red,
    },
    otpResend: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.amberText,
    },

  });
}
