import { useCallback, useEffect, useMemo, useState } from 'react';
import { LayoutAnimation, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { EXAMS, YEARS, type YearKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { StudentProfile, getProfile, pullProfile, saveProfile } from '@/lib/profile';

/**
 * Personal information.
 *
 * What this replaces had email, phone and a change-password form. There is no
 * password anywhere in this product — students sign in with an email address
 * and an OTP — so that form could not have worked.
 *
 * Each field is exactly as editable as it really is. Name is typed. Class
 * changes — a student who signs up in Class 11 is still here in Class 12 — so
 * its row opens in place to offer the three options, and closes again on the
 * pick. No sheet, no scrim, nothing dimmed: this is one field on a settings
 * page, and a modal to change it was more furniture than the choice deserves.
 * Exam is fixed at sign-up.
 *
 * Email and phone have swapped roles. Email is now the account itself — it is
 * what the sign-in code was sent to, so it is verified by definition and
 * cannot be edited here; changing it would mean re-verifying, and there is no
 * flow for that yet. Phone is collected but unverified: SMS needs an Indian
 * sender and the legal work behind it, so its Verify button is deliberately
 * present but says so rather than pretending.
 */

const VERIFIED_GREEN = '#157A45';
const YEAR_ORDER: YearKey[] = ['class11', 'class12', 'dropper'];

export default function AccountScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneNote, setPhoneNote] = useState(false);
  const [classOpen, setClassOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const apply = (p: StudentProfile) => {
      if (cancelled) return;
      setProfile(p);
      setName(p.name);
      setPhone(p.phone);
    };
    // Local first so the form paints instantly, then the server's copy — this
    // page can be the first one opened on a new device, where local storage is
    // empty and `profiles` holds the only real answers.
    getProfile().then(apply);
    pullProfile()
      .then(getProfile)
      .then(apply)
      .catch(() => {
        // The locally-loaded copy above still stands.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const patch = useCallback((next: Partial<StudentProfile>) => {
    setProfile((prev) => (prev ? { ...prev, ...next } : prev));
    saveProfile(next);
  }, []);

  const email = profile?.email ?? '';

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
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={(next) => {
                setPhone(next);
                setPhoneNote(false);
              }}
              onBlur={() => patch({ phone: phone.trim(), phoneVerified: false })}
              placeholder="Add your number"
              placeholderTextColor={colors.faint}
              keyboardType="phone-pad"
            />
            {/* Present, but honest. SMS verification isn't live, and a button
                that silently does nothing is worse than one that says why. */}
            {phone.trim().length > 0 && (
              <Pressable
                style={styles.verifyButton}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                  setPhoneNote((v) => !v);
                }}>
                <Text style={styles.verifyButtonText}>Verify</Text>
              </Pressable>
            )}
          </View>
          {phoneNote && (
            <Text style={styles.fieldNote}>
              Number verification isn&apos;t live yet — your email is what keeps your account
              secure for now. We&apos;ll text you the moment it is.
            </Text>
          )}
        </View>

        <View style={[styles.field, styles.fieldLast]}>
          <Text style={styles.fieldLabel}>EMAIL ADDRESS</Text>
          <View style={styles.rowValue}>
            <Text style={[styles.value, !email && styles.valueEmpty]} numberOfLines={1}>
              {email || 'Not set'}
            </Text>
            {!!email && (
              <View style={styles.verifiedTag}>
                <CheckIcon size={scale(11)} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            )}
          </View>
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
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.55),
      letterSpacing: scale(0.85),
      color: colors.faint,
      marginBottom: verticalScale(7),
    },
    optionalTag: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(7.65),
      letterSpacing: scale(0.64),
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
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15.5),
      color: colors.ink,
    },
    valueEmpty: {
      color: colors.faint,
    },
    input: {
      flex: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15.5),
      color: colors.ink,
      padding: 0,
    },
    // A word, not a button. The row is the tap target.
    changeText: {
      flexShrink: 0,
      fontFamily: 'Onest_700Bold',
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
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
    },
    optionTextOn: {
      fontFamily: 'Onest_700Bold',
      color: colors.paper,
    },
    subjectTag: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(9.9),
      letterSpacing: scale(0.49),
      color: colors.faint,
    },
    fieldNote: {
      marginTop: verticalScale(8),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(13 * 1.5),
      color: colors.faint,
    },
    verifiedTag: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      flexShrink: 0,
    },
    verifiedText: {
      fontFamily: 'Onest_700Bold',
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.paper,
    },
    otpBlock: {
      marginTop: verticalScale(12),
    },
    // One box per digit, as onboarding does it — smaller, because this one
    // lives inside a settings card rather than on its own screen.
    boxesRow: {
      flexDirection: 'row',
      gap: scale(8),
    },
    box: {
      flex: 1,
      height: verticalScale(46),
      borderRadius: scale(12),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxActive: {
      borderWidth: scale(1.5),
      borderColor: colors.ink,
    },
    boxError: {
      borderWidth: scale(1.5),
      borderColor: colors.red,
      backgroundColor: 'rgba(221,68,51,.06)',
    },
    boxDigit: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(20),
      color: colors.ink,
    },
    boxDigitError: {
      color: colors.red,
    },
    hiddenInput: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0,
    },
    otpHint: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11.5),
      color: colors.faint,
      marginTop: verticalScale(8),
    },
    otpResend: {
      fontFamily: 'Onest_700Bold',
      color: colors.amberText,
    },

  });
}
