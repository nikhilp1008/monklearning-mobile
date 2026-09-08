// 08 "Choose a pass".
//
// Prices are real. The charge is not: there is no payment provider wired yet,
// so nothing here can take ₹149 off anyone. What the screen can do honestly is
// reach ₹0 through a promo code and complete from there, which is enough to
// walk the whole flow end to end -- see PROMO_CODE in constants/onboarding.ts.
//
// So the primary button is deliberately dead until the total is zero. The
// alternative was a live "Pay ₹749" that silently did nothing, and a button
// that lies about taking money is worse than one that plainly waits.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton, ObHeader } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import {
  EXAMS,
  PASSES,
  PROMO_CODE,
  ob,
  obFont,
  promoDiscount,
  rupees,
  useDesignScale,
  type ExamKey,
  type PassKey,
} from '@/constants/onboarding';
import { SelectRow } from '@/components/select-row';

const INCLUDED: [string, string][] = [
  ['Class 11 & 12', 'Every chapter, taught aloud'],
  ['Every day', '50 snaps · 75 questions'],
  ['Teachers', 'Drona & Vedha · Eng / Hinglish'],
];

function ArrowGlyph({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke={ob.link}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function PassScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  // Both come back from the promo screen, which replaces this route rather
  // than popping to it — so the pass the student had already chosen has to
  // survive the round trip in params.
  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  // Nothing preselected. A highlighted row reads as an answer already given,
  // and this one costs money — the student should pick it, not un-pick ours.
  const [pass, setPass] = useState<PassKey | null>(
    PASSES.some((p) => p.id === params.pass) ? (params.pass as PassKey) : null
  );
  const [playToken, setPlayToken] = useState(0);

  const promo = (params.promo ?? '').toUpperCase();
  const active = PASSES.find((p) => p.id === pass) ?? null;
  const discount = active ? promoDiscount(promo, active.price) : 0;
  const total = active ? Math.max(0, active.price - discount) : 0;
  const paid = !!active && total === 0;

  const select = (id: PassKey) => {
    setPass(id);
    setPlayToken((n) => n + 1);
  };

  const toPromo = () =>
    router.push({ pathname: '/promo', params: { pass, promo, exam: params.exam ?? '' } });

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ObHeader title="Choose a pass" />
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.sub}>Nothing renews on its own.</Text>

          <View style={styles.rows}>
            {PASSES.map((p) => (
              <SelectRow
                key={p.id}
                name={p.name}
                trailing={rupees(p.price)}
                selected={pass === p.id}
                playToken={playToken}
                onPress={() => select(p.id)}
              />
            ))}

            {/* A line, not a field. Nothing is typed here — the box implied an
                input and sat in a stack of two other boxes that ARE choices,
                so it read as a third pass. */}
            <PressableScale style={styles.promoLink} hitSlop={10} onPress={toPromo}>
              <Text style={styles.promoLinkText}>
                {discount ? `${promo} applied · −${rupees(discount)}` : 'Have a promo code?'}
              </Text>
              <ArrowGlyph size={ds(13)} />
            </PressableScale>
          </View>

          <View style={styles.included}>
            <Text style={styles.overline}>BOTH PASSES INCLUDE</Text>
            {INCLUDED.map(([label, value], i) => (
              <View
                key={label}
                style={[styles.includedRow, i === INCLUDED.length - 1 && styles.includedRowLast]}>
                <Text style={styles.includedLabel}>{label}</Text>
                <Text style={styles.includedValue}>{value}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          {/* Says what is owed, not what will happen. Until a payment sheet
              exists the only completable total is zero, and the line under the
              button is where that is admitted rather than discovered on tap. */}
          <ObButton
            label={!active ? 'Choose a pass' : paid ? 'Complete — ₹0 due' : `Pay ${rupees(total)}`}
            trailing={active?.name}
            disabled={!paid}
            withArrow={paid}
            onPress={() => {
              if (!paid) return;
              router.push({
                pathname: '/pass-active',
                params: { pass, promo, exam: params.exam ?? '' },
              });
            }}
          />
          {!!active && !paid && (
            <Text style={styles.footNote}>
              Card payments aren’t live yet. Add the code{' '}
              <Text style={styles.footNoteCode}>{PROMO_CODE}</Text> to continue.
            </Text>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

/** Exported so pass-active can name the exam without re-reading the profile. */
export function examLabel(key: string | undefined) {
  const k = (key ?? 'jee') as ExamKey;
  return (EXAMS[k] ?? EXAMS.jee).name;
}

function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    content: { paddingHorizontal: ds(30), paddingBottom: ds(24) },
    heading: {
      fontFamily: obFont.m500,
      fontSize: fs(22.5),
      lineHeight: fs(28),
      letterSpacing: tracking(-0.02, 22.5),
      color: ob.ink,
    },
    sub: {
      fontFamily: obFont.r400,
      fontSize: fs(15),
      lineHeight: fs(22),
      color: ob.ink80,
      marginTop: ds(14),
    },
    rows: { marginTop: ds(22), gap: ds(10) },
    promoLink: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: ds(6),
      alignSelf: 'flex-start',
      paddingVertical: ds(6),
    },
    promoLinkText: {
      fontFamily: obFont.m500,
      fontSize: fs(15),
      color: ob.link,
    },
    included: { marginTop: ds(26) },
    overline: {
      fontFamily: obFont.sb600,
      fontSize: fs(10),
      letterSpacing: tracking(0.14, 10),
      color: ob.ink55,
      marginBottom: ds(8),
    },
    includedRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: ds(12),
      paddingVertical: ds(9),
      borderTopWidth: 1,
      borderTopColor: ob.rule,
    },
    includedRowLast: { borderBottomWidth: 1, borderBottomColor: ob.rule },
    includedLabel: { fontFamily: obFont.r400, fontSize: fs(13.5), color: ob.ink80 },
    includedValue: { fontFamily: obFont.r400, fontSize: fs(13.5), color: ob.ink },
    footer: { paddingHorizontal: ds(30), paddingBottom: ds(16), gap: ds(10) },
    footNote: {
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(19),
      textAlign: 'center',
      color: ob.ink55,
    },
    footNoteCode: { fontFamily: obFont.sb600, color: ob.amberDark },
  });
}
