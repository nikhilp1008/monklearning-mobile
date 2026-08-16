import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import { CheckIcon } from '@/components/check-icon';
import { ProtractorMark } from '@/components/protractor-mark';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type PlanId = 'annual' | 'monthly';

export default function SubscriptionScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('annual');

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <BackArrowIcon size={scale(15)} />
            </Pressable>
            <Text style={styles.headerTitle}>Your plan</Text>
          </View>

          <View style={styles.planCard}>
            <Svg width="100%" height="100%" style={StyleSheet.absoluteFillObject}>
              <Defs>
                <RadialGradient
                  id="planGrad"
                  cx="85%"
                  cy="0%"
                  rx="130%"
                  ry="130%"
                  gradientUnits="objectBoundingBox">
                  <Stop offset="0" stopColor="#2d271d" />
                  <Stop offset="0.72" stopColor="#16130E" />
                  <Stop offset="1" stopColor="#16130E" />
                </RadialGradient>
              </Defs>
              <Rect x={0} y={0} width="100%" height="100%" fill="url(#planGrad)" />
            </Svg>

            <View style={styles.planTopRow}>
              <View style={styles.planTitleGroup}>
                <ProtractorMark size={scale(24)} ringColor={colors.paper} />
                <Text style={styles.planTitle}>JEE Main · Annual</Text>
              </View>
              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>ACTIVE</Text>
              </View>
            </View>

            <View style={styles.planInfoRow}>
              <Text style={styles.planInfoLabel}>Renews</Text>
              <Text style={styles.planInfoValue}>12 Jun 2027</Text>
            </View>
            <View style={styles.planInfoRowBilled}>
              <Text style={styles.planInfoLabel}>Billed</Text>
              <Text style={styles.planInfoValue}>₹11,999 / year</Text>
            </View>

            <View style={styles.planButtonsRow}>
              <Pressable style={styles.manageButton}>
                <Text style={styles.manageButtonText}>Manage billing</Text>
              </Pressable>
              <Pressable style={styles.invoicesButton}>
                <Text style={styles.invoicesButtonText}>Invoices</Text>
              </Pressable>
            </View>
          </View>

          <Text style={styles.overline}>What&apos;s included</Text>
          <View style={styles.includedCard}>
            <IncludedRow
              scale={scale}
              verticalScale={verticalScale}
              text="Unlimited live classes with Drona, all 3 subjects"
            />
            <IncludedRow
              scale={scale}
              verticalScale={verticalScale}
              text="Unlimited snapped doubts & practice questions"
            />
            <IncludedRow
              scale={scale}
              verticalScale={verticalScale}
              text="Full-pattern mock tests & readiness tracking"
            />
            <IncludedRow
              scale={scale}
              verticalScale={verticalScale}
              text="Hinglish · English, switch anytime"
            />
          </View>

          <Text style={styles.overline}>Switch plan</Text>
          <View style={styles.plansRow}>
            <PlanOptionCard
              scale={scale}
              verticalScale={verticalScale}
              title="Annual"
              price="₹999"
              caption="billed yearly · save 33%"
              selected={selectedPlan === 'annual'}
              onPress={() => setSelectedPlan('annual')}
            />
            <PlanOptionCard
              scale={scale}
              verticalScale={verticalScale}
              title="Monthly"
              price="₹1,499"
              caption="cancel anytime"
              selected={selectedPlan === 'monthly'}
              onPress={() => setSelectedPlan('monthly')}
            />
          </View>

          <Text style={styles.disclaimer}>
            If your plan lapses, your notes and doubts stay yours — only new classes, snaps and
            mocks pause until you renew.
          </Text>
        </View>

        <View style={styles.footer}>
        </View>
      </SafeAreaView>
    </View>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.ink}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IncludedRow({
  scale,
  verticalScale,
  text,
}: {
  scale: (n: number) => number;
  verticalScale: (n: number) => number;
  text: string;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10),
        paddingVertical: verticalScale(7),
      }}>
      <CheckIcon size={scale(14)} color="#157A45" strokeWidth={2.6} />
      <Text
        style={{
          flexShrink: 1,
          fontFamily: 'AnekLatin_400Regular',
          fontSize: scale(14),
          color: colors.ink,
        }}>
        {text}
      </Text>
    </View>
  );
}

function PlanOptionCard({
  scale,
  verticalScale,
  title,
  price,
  caption,
  selected,
  onPress,
}: {
  scale: (n: number) => number;
  verticalScale: (n: number) => number;
  title: string;
  price: string;
  caption: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: selected ? '#FCF4E0' : '#fff',
        borderWidth: selected ? scale(1.6) : scale(1.4),
        borderColor: selected ? colors.marigold : colors.hairline,
        borderRadius: scale(14),
        paddingVertical: verticalScale(13),
        paddingHorizontal: scale(14),
      }}>
      <Text
        style={{
          fontFamily: 'AnekLatin_700Bold',
          fontSize: scale(14),
          color: colors.ink,
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginTop: verticalScale(4),
        }}>
        <Text
          style={{
            fontFamily: 'AnekLatin_700Bold',
            fontSize: scale(17),
            color: colors.ink,
          }}>
          {price}
        </Text>
        <Text
          style={{
            fontFamily: 'AnekLatin_600SemiBold',
            fontSize: scale(11),
            color: colors.slate,
          }}>
          /mo
        </Text>
      </View>
      <Text
        style={{
          fontFamily: selected ? 'AnekLatin_700Bold' : 'AnekLatin_600SemiBold',
          fontSize: scale(10),
          color: selected ? colors.amberText : colors.faint,
        }}>
        {caption}
      </Text>
    </Pressable>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
      minHeight: 0,
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
    headerRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    backButton: {
      width: scale(34),
      height: scale(34),
      flexShrink: 0,
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },
    planCard: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: scale(18),
      paddingVertical: verticalScale(20),
      paddingHorizontal: scale(20),
      marginTop: verticalScale(14),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(8) },
      shadowOpacity: 0.3,
      shadowRadius: scale(12),
      elevation: 5,
    },
    planTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    planTitleGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    planTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      color: '#fff',
    },
    activeBadge: {
      backgroundColor: 'rgba(28,155,87,.18)',
      borderWidth: scale(1),
      borderColor: 'rgba(28,155,87,.4)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    activeBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(9),
      color: '#157A45',
    },
    planInfoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(14),
    },
    planInfoRowBilled: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(5),
    },
    planInfoLabel: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: '#C7C1B3',
    },
    planInfoValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
    planButtonsRow: {
      flexDirection: 'row',
      gap: scale(9),
      marginTop: verticalScale(14),
    },
    manageButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(42),
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
    },
    manageButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: '#241a08',
    },
    invoicesButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(42),
      borderRadius: scale(99),
      borderWidth: scale(1),
      borderColor: 'rgba(255,255,255,.25)',
    },
    invoicesButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
    overline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(18),
      marginBottom: verticalScale(8),
    },
    includedCard: {
      backgroundColor: '#fff',
      borderWidth: scale(1),
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.12,
      shadowRadius: scale(4),
      elevation: 2,
    },
    plansRow: {
      flexDirection: 'row',
      gap: scale(10),
    },
    disclaimer: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      lineHeight: scale(17.05),
      color: colors.faint,
      marginTop: verticalScale(14),
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(12),
    },
  });
}
