import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { MAX_PLAN_ITEMS, PlanItem, getTodayPlan, newPlanId, saveTodayPlan } from '@/lib/plan';

const SUGGESTIONS = [
  '20 min practice',
  'Revise a weak chapter',
  'Clear 2 doubts',
  'One lesson with Drona',
];

export default function PlanSheetScreen() {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [items, setItems] = useState<PlanItem[]>([]);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    getTodayPlan().then(setItems);
  }, []);

  const hasSlot = items.length < MAX_PLAN_ITEMS;
  const plansLeft = MAX_PLAN_ITEMS - items.length;

  const addPlan = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || items.length >= MAX_PLAN_ITEMS) return;
    const next = [...items, { id: newPlanId(), text: trimmed, done: false }];
    setItems(next);
    saveTodayPlan(next);
  };

  const removePlan = (id: string) => {
    const next = items.filter((item) => item.id !== id);
    setItems(next);
    saveTodayPlan(next);
  };

  const submitDraft = () => {
    if (!hasSlot || !draft.trim()) return;
    addPlan(draft);
    setDraft('');
  };

  const takenSuggestions = new Set(items.map((item) => item.text.toLowerCase()));
  const availableSuggestions = SUGGESTIONS.filter(
    (s) => !takenSuggestions.has(s.toLowerCase())
  );

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      {/* The home-indicator gap is padding on the sheet itself, not a
          SafeAreaView inside it. The sheet is absolutely positioned with no
          height of its own, so it measured to its content and the inset was
          then added inside that measurement — which pushed the Done button
          past the bottom edge, where it was clipped. */}
      <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, verticalScale(16)) }]}>
        <View style={styles.handle} />

        <View style={styles.headerRow}>
          <Text style={styles.title}>Today&apos;s plan</Text>
          <PressableScale style={styles.closeButton} onPress={() => router.back()}>
            <Text style={styles.closeGlyph}>✕</Text>
          </PressableScale>
        </View>

        {/* ONE LINE, NOT THREE, AND NO "SLOTS". This used to read "Set up to
            3 plans for today. 3 slots left." with "Nothing planned yet. Add
            one below." under it -- three lines to say you have none and may
            have three, the last pointing at a field already in view.

            "Slots" was the other half of the problem: a student does not
            have slots, they have plans, and counting the empty container
            rather than the thing is how a booking system talks. Every state
            now says what you can DO. The word is "plans" because that is
            what this feature is called in its own title, in Home's overline
            and in the model (`PlanItem`) -- Home's "today's goals" is the
            odd one out, not this. */}
        <Text style={styles.subtitle}>
          {plansLeft === MAX_PLAN_ITEMS ? (
            <>
              Add up to <Text style={styles.subtitleBold}>{MAX_PLAN_ITEMS} plans</Text> for today.
            </>
          ) : plansLeft > 0 ? (
            <>
              You can add{' '}
              <Text style={styles.subtitleBold}>{plansLeft} more</Text>.
            </>
          ) : (
            // The only state where this line is doing work: it is why the
            // field and the chips have gone quiet.
            <Text style={styles.subtitleFull}>
              All {MAX_PLAN_ITEMS} plans set for today.
            </Text>
          )}
        </Text>

        {items.length > 0 ? (
          <View style={styles.planList}>
            {items.map((item) => (
              <View key={item.id} style={styles.planRow}>
                <View style={styles.planDot} />
                <Text style={styles.planText}>{item.text}</Text>
                <PressableScale
                  style={styles.planRemove}
                  hitSlop={8}
                  onPress={() => removePlan(item.id)}>
                  <Text style={styles.planRemoveGlyph}>✕</Text>
                </PressableScale>
              </View>
            ))}
          </View>
        ) : null}

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
          <PressableScale
            style={styles.submitButton}
            disabled={!hasSlot || !draft.trim()}
            onPress={submitDraft}>
            <ArrowRightIcon color={colors.paper} size={scale(15)} />
          </PressableScale>
        </View>

        {availableSuggestions.length > 0 && (
          <>
            <Text style={styles.suggestOverline}>Suggestions</Text>
            <View style={[styles.chipsRow, !hasSlot && styles.rowDisabled]}>
              {availableSuggestions.map((suggestion) => (
                <PressableScale
                  key={suggestion}
                  style={styles.chip}
                  disabled={!hasSlot}
                  onPress={() => addPlan(suggestion)}>
                  <Text style={styles.chipText}>+ {suggestion}</Text>
                </PressableScale>
              ))}
            </View>
          </>
        )}

        <PressableScale style={styles.doneButton} onPress={() => router.back()}>
          <Text style={styles.doneButtonText}>Done</Text>
        </PressableScale>
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
      // White, like the screens it covers.
      //
      // This was `colors.paper` (#FFFDF8) on the reasoning that the design
      // spec's sheets are warm — but every control INSIDE it is pure #fff:
      // the field, the chips, the close button, the plan rows. So the sheet
      // was the dimmest surface on the screen, darker than the home page
      // behind it and darker than its own contents, and the white controls
      // read as lit against a grubby ground. Figure and ground were the
      // wrong way round.
      //
      // #fff is also what Home and Practice already use, so the sheet now
      // belongs to the same app as the page it slides over. The scrim is
      // what separates them, and it separates them better against white.
      backgroundColor: '#fff',
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
      fontFamily: 'Onest_700Bold',
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.slate,
    },
    subtitle: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      marginTop: verticalScale(3),
    },
    subtitleBold: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
    },
    // Marigold, not red. `colors.red` is the wrong-answer mark on Practice
    // and the red-pen accent in the reader, so painting a healthy plan count
    // in it raised an alarm over nothing. Marigold is the app's "daily goal"
    // accent, which is exactly what a full plan is.
    subtitleFull: {
      fontFamily: 'Onest_700Bold',
      color: colors.marigold,
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
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    planRemove: {
      flexShrink: 0,
    },
    planRemoveGlyph: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.faint,
    },
    inputRow: {
      flexDirection: 'row',
      gap: scale(8),
      // One value whether or not a plan list sits above it, so the field
      // holds its place as plans are added and removed.
      marginTop: verticalScale(14),
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      borderRadius: scale(99),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(16),
      fontFamily: 'Onest_400Regular',
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
    // Home's overline exactly -- 700/11/+.1em/slate -- rather than the
    // one-off 800/9/faint this sheet had invented, which shouted harder than
    // any section heading on the page that opened it.
    suggestOverline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(0.1 * 11),
      textTransform: 'uppercase',
      color: colors.slate,
      marginTop: verticalScale(18),
      marginBottom: verticalScale(9),
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
      fontFamily: 'Onest_600SemiBold',
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
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}
