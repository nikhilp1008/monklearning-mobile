import { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
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
 * The page opens with the student rather than with a field: monogram, name,
 * and the one line that says who they are here. The rows below are the
 * details behind it.
 *
 * Each field is exactly as editable as it really is. Name and email are
 * typed. Class changes — a student who signs up in Class 11 is still here in
 * Class 12 — so it opens a picker, rather than sitting in the page as three
 * permanently-visible options inviting a stray tap. Exam is fixed at sign-up.
 * Phone is the account itself, verified at the OTP step.
 */

const VERIFIED_GREEN = '#157A45';
const YEAR_ORDER: YearKey[] = ['class11', 'class12', 'dropper'];

export default function AccountScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verifySent, setVerifySent] = useState(false);
  const [classPickerOpen, setClassPickerOpen] = useState(false);

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
  const monogram = (profile?.name.trim()[0] ?? '·').toUpperCase();

  return (
    <SettingsPage title="Personal information" keyboardAware>
      {/* The student, not a form. */}
      <View style={styles.identity}>
        <View style={styles.monogramRing}>
          <View style={styles.monogram}>
            <Text style={styles.monogramText}>{monogram}</Text>
          </View>
        </View>
        <View style={styles.identityText}>
          <Text style={styles.identityName} numberOfLines={1}>
            {profile?.name || 'Your name'}
          </Text>
          <Text style={styles.identityMeta}>
            {profile ? `${YEARS[profile.year]} · ${EXAMS[profile.exam].name}` : ' '}
          </Text>
        </View>
      </View>

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

        {/* Opens a picker: this is the one detail that legitimately changes
            mid-subscription, and a row that states it beats three options
            sitting in the page waiting to be mis-tapped. */}
        <Pressable style={styles.field} onPress={() => setClassPickerOpen(true)}>
          <Text style={styles.fieldLabel}>CLASS</Text>
          <View style={styles.rowValue}>
            <Text style={styles.value}>{profile ? YEARS[profile.year] : '—'}</Text>
            <View style={styles.changeChip}>
              <Text style={styles.changeChipText}>Change</Text>
              <ChevronIcon size={scale(11)} />
            </View>
          </View>
        </Pressable>

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
                setVerifySent(false);
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
            ) : hasEmail ? (
              <Pressable
                style={[styles.verifyButton, verifySent && styles.verifyButtonSent]}
                disabled={verifySent}
                onPress={() => setVerifySent(true)}>
                <Text style={[styles.verifyButtonText, verifySent && styles.verifyButtonTextSent]}>
                  {verifySent ? 'Sent' : 'Verify'}
                </Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      </View>

      <ClassPicker
        open={classPickerOpen}
        current={profile?.year ?? 'class12'}
        onClose={() => setClassPickerOpen(false)}
        onPick={(year) => {
          patch({ year });
          setClassPickerOpen(false);
        }}
      />
    </SettingsPage>
  );
}

/** The class sheet — three rows, the current one marked. */
function ClassPicker({
  open,
  current,
  onClose,
  onPick,
}: {
  open: boolean;
  current: YearKey;
  onClose: () => void;
  onPick: (year: YearKey) => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <Modal visible={open} transparent animationType="none" onRequestClose={onClose}>
      <Animated.View entering={FadeIn.duration(180)} style={styles.scrimWrap}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Animated.View entering={SlideInDown.duration(260)} style={styles.sheet}>
          <View style={styles.sheetHandle} />
          <Text style={styles.sheetTitle}>Which class are you in?</Text>
          <Text style={styles.sheetSub}>
            Change it whenever you move up — your notes and progress come with you.
          </Text>

          <View style={styles.sheetList}>
            {YEAR_ORDER.map((key) => {
              const on = key === current;
              return (
                <Pressable
                  key={key}
                  style={[styles.sheetRow, on && styles.sheetRowOn]}
                  onPress={() => onPick(key)}>
                  <Text style={[styles.sheetRowText, on && styles.sheetRowTextOn]}>
                    {YEARS[key]}
                  </Text>
                  {on && <CheckIcon size={scale(15)} />}
                </Pressable>
              );
            })}
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
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

function ChevronIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M9 6l6 6-6 6"
        stroke={colors.slate}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    identity: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      marginTop: verticalScale(18),
    },
    // 2pt of amber showing around the monogram — the same ring Profile puts
    // around the chosen teacher.
    monogramRing: {
      padding: scale(2),
      borderRadius: scale(99),
      backgroundColor: 'rgba(238,163,31,.35)',
    },
    monogram: {
      width: scale(58),
      height: scale(58),
      borderRadius: scale(29),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    monogramText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(24),
      color: colors.paper,
    },
    identityText: {
      flex: 1,
      minWidth: 0,
    },
    identityName: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(22),
      letterSpacing: scale(-0.66),
      color: colors.ink,
    },
    identityMeta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.faint,
      marginTop: verticalScale(2),
    },

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
    changeChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(4),
      flexShrink: 0,
      paddingVertical: verticalScale(5),
      paddingLeft: scale(11),
      paddingRight: scale(8),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    changeChipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11.5),
      color: colors.slate,
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
    verifyButtonSent: {
      backgroundColor: 'rgba(28,26,22,.08)',
    },
    verifyButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.paper,
    },
    verifyButtonTextSent: {
      color: colors.slate,
    },

    scrimWrap: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(22,19,14,.38)',
    },
    sheet: {
      backgroundColor: colors.paper,
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(22),
      paddingBottom: verticalScale(34),
    },
    sheetHandle: {
      width: scale(40),
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
      alignSelf: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(16),
    },
    sheetTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.4),
      color: colors.ink,
    },
    sheetSub: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    sheetList: {
      gap: verticalScale(8),
      marginTop: verticalScale(18),
    },
    sheetRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(15),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    sheetRowOn: {
      borderWidth: scale(1.6),
      borderColor: colors.marigold,
      backgroundColor: '#FCF4E0',
    },
    sheetRowText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15.5),
      color: colors.slate,
    },
    sheetRowTextOn: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
  });
}
