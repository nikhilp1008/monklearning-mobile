import { useState } from 'react';
import { Text, View, type LayoutChangeEvent } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { PASSES, rupees, type PassKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { usePlan } from '@/lib/free-tier';
import { hapticSwitched } from '@/lib/haptics';

import { compareRows } from './compare';
import { PLANS, type Plan } from './plans';
import { POUR_COLUMN_MS, POUR_CREAM, POUR_CREAM_QUIET, POUR_ROW_MS, PourEdge, PourFill, PourText, usePour } from './poured-sky';

/**
 * THE CHOICE ITSELF (Nikhil's P10), one design for onboarding and for the plans page.
 *
 * The trial passes are one line each, because a pass is everything in Pro for a
 * shorter time, so there is nothing to open. Pro and Max are a table that can be read
 * before anything is tapped, its two columns edged like buttons. What is picked fills
 * from the top with onboarding's sky (poured-sky.tsx). Every figure in the table is the
 * server's (`usePlan`), so the page and the limit a student meets can never disagree.
 */

export type PlansPick = Plan['id'] | PassKey;

const INK = colors.ink;
const SLATE = colors.slate;
const RULE = 'rgba(28,26,22,.08)';
const RULE_ON_SKY = 'rgba(251,249,242,.14)';
const EDGE = 'rgba(28,26,22,.16)';
const EDGE_WIDTH = 1.5;

const PASS_LINE: Record<PassKey, string> = {
  day: 'Everything in Pro, for a day',
  week: 'Everything in Pro, for a week',
};

function PassRow({ pass, on, onPress }: { pass: (typeof PASSES)[number]; on: boolean; onPress: () => void }) {
  const { scale } = useScale();
  const pour = usePour(on, POUR_ROW_MS);
  const [height, setHeight] = useState(0);
  const radius = scale(18);
  const tickRoom = scale(32);
  const { open } = pour;
  const tick = useAnimatedStyle(() => ({ opacity: open.value, width: open.value * tickRoom }));
  return (
    <PressableScale
      onPress={() => {
        if (!on) hapticSwitched();
        onPress();
      }}
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
      accessibilityLabel={`${pass.name}, ${rupees(pass.price)}. ${PASS_LINE[pass.id]}.`}>
      <View onLayout={(e: LayoutChangeEvent) => setHeight(e.nativeEvent.layout.height)} style={{ borderRadius: radius, overflow: 'hidden', backgroundColor: '#fff' }}>
        <PourFill pour={pour} shape="row" height={height} radius={radius} />
        <PourEdge pour={pour} radius={radius} color={EDGE} width={EDGE_WIDTH} />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: scale(18), paddingVertical: scale(14) }}>
          <View style={{ flex: 1 }}>
            <PourText pour={pour} from={INK} to={POUR_CREAM} start={0.1} end={0.5} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(17), lineHeight: scale(23) }}>{pass.name}</PourText>
            <PourText pour={pour} from={SLATE} to={POUR_CREAM_QUIET} start={0.45} end={0.9} style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18) }}>{PASS_LINE[pass.id]}</PourText>
          </View>
          <PourText pour={pour} from={INK} to={POUR_CREAM} start={0.25} end={0.7} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(19) }}>{rupees(pass.price)}</PourText>
          <Animated.View style={[{ alignItems: 'flex-end', overflow: 'hidden' }, tick]}>
            <View style={{ width: scale(24), height: scale(24), borderRadius: scale(12), backgroundColor: POUR_CREAM, alignItems: 'center', justifyContent: 'center' }}>
              <Svg width={scale(12)} height={scale(12)} viewBox="0 0 16 16" fill="none">
                <Path d="M3.5 8.4l3 3L12.5 5" stroke={INK} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>
          </Animated.View>
        </View>
      </View>
    </PressableScale>
  );
}

/** One plan's column of the table: its name and price, then its numbers. Tap anywhere on it. */
function PlanColumn({ plan, values, on, onPress, headH, rowH }: { plan: Plan; values: string[]; on: boolean; onPress: () => void; headH: number; rowH: number }) {
  const { scale } = useScale();
  const pour = usePour(on, POUR_COLUMN_MS);
  const radius = scale(16);
  const total = headH + values.length * rowH;
  const headEnd = headH / total;
  return (
    <PressableScale
      onPress={() => {
        if (!on) hapticSwitched();
        onPress();
      }}
      style={{ width: scale(84) }}
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
      accessibilityLabel={`${plan.name}, ${rupees(plan.price)} a month`}>
      <View style={{ height: total, borderRadius: radius, overflow: 'hidden', backgroundColor: '#fff' }}>
        <PourFill pour={pour} shape="column" height={total} radius={radius} />
        <PourEdge pour={pour} radius={radius} color={EDGE} width={EDGE_WIDTH} />
        <View style={{ height: headH, alignItems: 'center', justifyContent: 'center' }}>
          <PourText pour={pour} from={INK} to={POUR_CREAM} end={headEnd * 0.5} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(15.5), lineHeight: scale(21) }}>{plan.name}</PourText>
          <PourText pour={pour} from={INK} to={POUR_CREAM} end={headEnd * 0.8} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(20), lineHeight: scale(26), letterSpacing: scale(-0.3) }}>{rupees(plan.price)}</PourText>
          <PourText pour={pour} from={SLATE} to={POUR_CREAM_QUIET} end={headEnd} style={{ fontFamily: 'Onest_400Regular', fontSize: scale(11.5), lineHeight: scale(15) }}>a month</PourText>
        </View>
        {values.map((value, i) => (
          <View key={i} style={{ height: rowH, alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderTopColor: on ? RULE_ON_SKY : RULE }}>
            <PourText
              pour={pour}
              from={INK}
              to={POUR_CREAM}
              start={(headH + i * rowH) / total}
              end={(headH + (i + 1) * rowH) / total}
              style={{ fontFamily: 'Onest_600SemiBold', fontSize: value.length > 4 ? scale(12) : scale(15.5) }}>
              {value}
            </PourText>
          </View>
        ))}
      </View>
    </PressableScale>
  );
}

export function PlanChooser({
  pick,
  onPick,
  starters,
  passesFirst,
  promoLine,
  promoQuiet,
  onPromo,
}: {
  pick: PlansPick | null;
  onPick: (pick: PlansPick) => void;
  /** The trial passes still on offer to this student. */
  starters: readonly (typeof PASSES)[number][];
  /** Passes above the plans, for a student starting out or whose pass has ended. */
  passesFirst: boolean;
  promoLine: string;
  /** The code could not be applied: the line reads as a note, not a link. */
  promoQuiet?: boolean;
  /** Null hides the promo link. */
  onPromo: (() => void) | null;
}) {
  const { scale } = useScale();
  const { tiers } = usePlan();
  const rows = compareRows(tiers.pro, tiers.max);
  const headH = scale(84);
  const rowH = scale(42);
  const heading = (text: string, first?: boolean) => (
    <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(15), lineHeight: scale(21), color: INK, marginTop: first ? 0 : scale(22), marginBottom: scale(9) }}>{text}</Text>
  );

  const passes =
    starters.length > 0 ? (
      <>
        {heading('Trial passes', passesFirst)}
        <View style={{ gap: scale(9) }}>
          {starters.map((p) => (
            <PassRow key={p.id} pass={p} on={pick === p.id} onPress={() => onPick(p.id)} />
          ))}
        </View>
      </>
    ) : null;

  return (
    <>
      {passesFirst ? passes : null}

      {heading('Monthly plans', !passesFirst || starters.length === 0)}
      <View style={{ flexDirection: 'row', gap: scale(7) }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: headH }} />
          {rows.map((r) => (
            <View key={r.label} style={{ height: rowH, justifyContent: 'center', borderTopWidth: 1, borderTopColor: RULE }}>
              <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.85} style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13.5), lineHeight: scale(18), color: SLATE }}>{r.label}</Text>
            </View>
          ))}
        </View>
        {PLANS.map((p) => (
          <PlanColumn key={p.id} plan={p} values={rows.map((r) => (p.tier === 'pro' ? r.pro : r.max))} on={pick === p.id} onPress={() => onPick(p.id)} headH={headH} rowH={rowH} />
        ))}
      </View>

      {passesFirst ? null : passes}

      <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(12.5), lineHeight: scale(18), color: SLATE, textAlign: 'center', marginTop: scale(16) }}>
        One payment. Nothing renews on its own.
      </Text>

      {onPromo ? (
        <PressableScale hitSlop={10} onPress={onPromo} style={{ alignSelf: 'center', marginTop: scale(10), paddingVertical: scale(4) }}>
          <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(13.5), color: promoQuiet ? SLATE : colors.amberText }}>{promoLine}</Text>
        </PressableScale>
      ) : null}
    </>
  );
}
