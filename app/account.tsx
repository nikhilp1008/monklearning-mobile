import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const VERIFIED_GREEN = '#157A45';

export default function AccountScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCancel = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <SettingsPage title="Personal information" keyboardAware>
      <View style={styles.card}>
        <SecurityRow styles={styles} label="Email" value="aarav@example.com" />
        <SecurityRow styles={styles} label="Phone" value="+91 98••• ••432" />

        <View style={[styles.securityRow, styles.securityRowLast]}>
          <View>
            <Text style={styles.rowLabel}>Password</Text>
            <Text style={styles.rowValue}>••••••••••</Text>
          </View>
          <Pressable style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        </View>

        <View style={styles.passwordForm}>
          <FormField
            styles={styles}
            label="Current password"
            placeholder="••••••••"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            marginBottom={verticalScale(11)}
          />
          <FormField
            styles={styles}
            label="New password"
            placeholder="At least 8 characters"
            value={newPassword}
            onChangeText={setNewPassword}
            marginBottom={verticalScale(11)}
          />
          <FormField
            styles={styles}
            label="Confirm new password"
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            marginBottom={verticalScale(13)}
          />
          <Pressable style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update password</Text>
          </Pressable>
        </View>
      </View>
    </SettingsPage>
  );
}

function SecurityRow({
  styles,
  label,
  value,
}: {
  styles: Styles;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.securityRow}>
      <View>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <View style={styles.securityRowRight}>
        <Text style={styles.verifiedTag}>✓ Verified</Text>
        <Text style={styles.changeText}>Change</Text>
      </View>
    </View>
  );
}

function FormField({
  styles,
  label,
  placeholder,
  value,
  onChangeText,
  marginBottom,
}: {
  styles: Styles;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  marginBottom: number;
}) {
  return (
    <View style={{ marginBottom }}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        style={styles.formInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.faint}
        secureTextEntry
      />
    </View>
  );
}


function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    // White on white, held by a hairline — the same card treatment Profile
    // uses for its teacher rows, so the two screens read as one surface.
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(18),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(16),
    },

    securityRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(10),
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
    },
    securityRowLast: {
      borderBottomWidth: 0,
    },
    securityRowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
    },
    rowLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.faint,
    },
    rowValue: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    verifiedTag: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: VERIFIED_GREEN,
    },
    changeText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    cancelButton: {
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    cancelButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },

    passwordForm: {
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.14)',
      borderStyle: 'dashed',
      paddingTop: verticalScale(14),
    },
    formLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.slate,
      marginBottom: verticalScale(5),
    },
    formInput: {
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      borderRadius: scale(12),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(14),
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(14),
      color: colors.ink,
    },
    updateButton: {
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(42),
      paddingHorizontal: scale(18),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    updateButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.paper,
    },
  });
}

type Styles = ReturnType<typeof createStyles>;
