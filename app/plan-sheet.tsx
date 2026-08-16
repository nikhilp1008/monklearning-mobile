import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const MAX_PLANS = 3;

const SUGGESTIONS = [
  '20 min practice',
  'Revise a weak chapter',
  'Clear 2 doubts',
  'One lesson with Drona',
];

type PlanItem = { id: number; text: string };

export default function PlanSheetScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [items, setItems] = useState<PlanItem[]>([
    { id: 1, text: 'Revise Kinematics notes' },
    { id: 2, text: '10 PYQs on projectile motion' },
  ]);
  const [draft, setDraft] = useState('');
  const nextId = useRef(3);

  const hasSlot = items.length < MAX_PLANS;
  const slotsLeft = MAX_PLANS - items.length;

  const addPlan = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || items.length >= MAX_PLANS) return;
    setItems((prev) => [...prev, { id: nextId.current++, text: trimmed }]);
  };

  const removePlan = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const submitDraft = () => {
    if (!hasSlot || !draft.trim()) return;
    addPlan(draft);
    setDraft('');
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.handle} />

          <View style={styles.headerRow}>
            <Text style={styles.title}>Today&apos;s plan</Text>
            <Pressable style={styles.closeButton} onPress={() => router.back()}>
              <Text style={styles.closeGlyph}>✕</Text>
            </Pressable>
          </View>

          <Text style={styles.subtitle}>
            Set up to <Text style={styles.subtitleBold}>3 plans</Text> for today.{' '}
            <Text style={styles.subtitleAccent}>
              {slotsLeft} slot{slotsLeft === 1 ? '' : 's'} left.
            </Text>
          </Text>

          <View style={styles.planList}>
            {items.map((item) => (
              <View key={item.id} style={styles.planRow}>
                <View style={styles.planDot} />
                <Text style={styles.planText}>{item.text}</Text>
                <Pressable
                  style={styles.planRemove}
                  hitSlop={8}
                  onPress={() => removePlan(item.id)}>
                  <Text style={styles.planRemoveGlyph}>✕</Text>
                </Pressable>
              </View>
            ))}
          </View>

          <View style={[styles.inputRow, !hasSlot && styles.rowDisabled]}>
            <TextInput
              style={styles.input}
              value={draft}
              onChangeText={setDraft}
              editable={hasSlot}
              placeholder="Write your own plan…"
              placeholderTextColor={colors.faint}
              returnKeyType="done"
              onSubmitEditing={submitDraft}
            />
            <Pressable
              style={styles.submitButton}
              disabled={!hasSlot || !draft.trim()}
              onPress={submitDraft}>
              <ArrowRightIcon color={colors.paper} size={scale(15)} />
            </Pressable>
          </View>

          <Text style={styles.suggestOverline}>Or pick a suggestion</Text>
          <View style={[styles.chipsRow, !hasSlot && styles.rowDisabled]}>
            {SUGGESTIONS.map((suggestion) => (
              <Pressable
                key={suggestion}
                style={styles.chip}
                disabled={!hasSlot}
                onPress={() => addPlan(suggestion)}>
                <Text style={styles.chipText}>+ {suggestion}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.doneButton} onPress={() => router.back()}>
            <Text style={styles.doneButtonText}>Done</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    flex: {
      flex: 1,
    },
    scrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(28,26,22,.42)',
    },
    sheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.paper,
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(20),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(-10) },
      shadowOpacity: 0.25,
      shadowRadius: scale(20),
      elevation: 12,
    },
    handle: {
      width: scale(40),
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
      alignSelf: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(14),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      flex: 1,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(18),
      letterSpacing: scale(-0.18),
      color: colors.ink,
    },
    closeButton: {
      width: scale(30),
      height: scale(30),
      flexShrink: 0,
      borderRadius: scale(15),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.slate,
    },
    subtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      marginTop: verticalScale(3),
    },
    subtitleBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    subtitleAccent: {
      fontFamily: 'Kalam_700Bold',
      color: colors.red,
    },
    planList: {
      flexDirection: 'column',
      gap: verticalScale(7),
      marginTop: verticalScale(12),
    },
    planRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
    },
    planDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(3.5),
      backgroundColor: colors.marigold,
      flexShrink: 0,
    },
    planText: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    planRemove: {
      flexShrink: 0,
    },
    planRemoveGlyph: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.faint,
    },
    inputRow: {
      flexDirection: 'row',
      gap: scale(8),
      marginTop: verticalScale(10),
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      borderRadius: scale(99),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(16),
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: colors.ink,
    },
    submitButton: {
      width: scale(46),
      height: scale(46),
      flexShrink: 0,
      borderRadius: scale(23),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowDisabled: {
      opacity: 0.5,
    },
    suggestOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(16),
      marginBottom: verticalScale(8),
    },
    chipsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
    },
    chip: {
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
    },
    chipText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    doneButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: verticalScale(50),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      marginTop: verticalScale(18),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    doneButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}
