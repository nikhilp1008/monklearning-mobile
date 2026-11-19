import { useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { PASSES, rupees, type PassKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { usePlan } from '@/lib/free-tier';
import { hapticSwitched } from '@/lib/haptics';
import type { TierLimits } from '@/lib/pass';

import { LIGHT, LightCard, PointTick } from './light';
import { PLANS, type Plan } from './plans';

/**
 * THE CHOICE ITSELF, one design for onboarding and for the plans page
 * (Nikhil, 19 Nov 2026; it replaces P10's rows-and-a-table).
 *
 * TWO DIFFERENT OFFERS, SO TWO DIFFERENT SHAPES.
 *
 *  - The short stays, a day and a week, are ONE card with a switch. They are
 *    what a new student is steered to (a small price is an easy yes), so the
 *    price is the biggest thing on the page. One card and not two rows: four
 *    options on one screen was the complaint.
 *  - Pro and Max are rows that open. Closed, a row says who the plan is for.
 *    Tapped, it is picked and opens to what it gives, each point said the way a
 *    student would ask it ("with whom?"), all four leading back to the AI
 *    teacher. Only the picked one is open.
 *
 * A page that offers no short stay (a pass has ended) shows the two plans alone.
 * The numbers are the server's (`usePlan`), so the page and the limit a student
 * meets can never disagree.
 */

export type PlansPick = Plan['id'] | PassKey;
type Starter = (typeof PASSES)[number];

const INK = colors.ink;
const SLATE = colors.slate;

const SHORT_LINE: Record<PassKey, string> = {
  day: 'Everything in Pro, until this time tomorrow',
  week: 'Everything in Pro, for a full week',
};

const WHO: Record<Plan['tier'], string> = {
  pro: 'For regular, everyday study',
  max: 'For heavy study, twice as much',
};

/**
 * PRO AND MAX DO NOT RENEW YET. They are meant to (Nikhil, 18 Nov 2026), but the
 * app takes one payment for 30 days and nothing charges again. Until the
 * renewal is built these lines must keep saying so; "Renews every month" on a
 * page that does not renew would be a promise the app breaks.
 */
const ONE_PAYMENT_SHORT = 'One payment, nothing renews.';
const ONE_PAYMENT_MONTH = 'One payment for the month. Nothing renews on its own.';

/** What a plan gives, in a student's words. Every second line is about the teacher. */
function points(t: TierLimits): [string, string][] {
  return [
    [`${t.classes_per_day} live classes a day`, 'With your AI teacher, on any chapter'],
    [`${t.snap_questions} snaps a day`, 'Solved step by step. Ask your teacher why.'],
    [`${t.practice_questions} practice questions a day`, 'Stuck on one? Ask your teacher right there.'],
    ['Unlimited follow-ups', 'In class, on snaps and in practice'],
  ];
}

/** The day and the week: one card, a switch between them, the price set large. */
function ShortCard({ starters, pick, onPick }: { starters: readonly Starter[]; pick: PlansPick | null; onPick: (pick: PlansPick) => void }) {
  const { scale } = useScale();
  const picked = starters.find((s) => s.id === pick) ?? null;
  // What the card shows when a plan is picked instead: the stay it last showed.
  const [last, setLast] = useState<PassKey>(picked?.id ?? starters[0].id);
  const shown = picked ?? starters.find((s) => s.id === last) ?? starters[0];
  const on = !!picked;
  const choose = (id: PassKey) => {
    if (pick !== id) hapticSwitched();
    setLast(id);
    onPick(id);
  };

  return (
    <PressableScale
      onPress={() => choose(shown.id)}
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
      accessibilityLabel={`${shown.name}, ${rupees(shown.price)}. ${SHORT_LINE[shown.id]}.`}>
      <LightCard on={on} radius={scale(22)} scale={scale}>
        <View style={{ padding: scale(18) }}>
          {starters.length > 1 ? (
            <View style={{ flexDirection: 'row', padding: scale(4), borderRadius: scale(22), backgroundColor: LIGHT.track }}>
              {starters.map((s) => {
                const here = shown.id === s.id;
                return (
                  <PressableScale key={s.id} onPress={() => choose(s.id)} style={{ flex: 1 }} accessibilityRole="button" accessibilityState={{ selected: here && on }} accessibilityLabel={`${s.name}, ${rupees(s.price)}`}>
                    {/* Keyed on its state: on Android a view that gains a shadow after it is
                        drawn loses its rounded corners, so the thumb is made afresh. */}
                    <View
                      key={here ? 'on' : 'off'}
                      style={[{ height: scale(36), borderRadius: scale(18), alignItems: 'center', justifyContent: 'center', backgroundColor: here ? '#fff' : 'transparent' }, here ? { boxShadow: [{ offsetX: 0, offsetY: scale(2), blurRadius: scale(8), spreadDistance: 0, color: 'rgba(28,26,22,.12)' }] } : null]}>
                      <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(14), color: here ? INK : SLATE }}>{s.name}</Text>
                    </View>
                  </PressableScale>
                );
              })}
            </View>
          ) : (
            <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(15), color: INK, textAlign: 'center' }}>{shown.name}</Text>
          )}
          <View style={{ alignItems: 'center', marginTop: scale(20), marginBottom: scale(8) }}>
            <Text style={{ fontFamily: 'Onest_300Light', fontSize: scale(68), lineHeight: scale(76), letterSpacing: scale(-2.2), color: INK }}>{rupees(shown.price)}</Text>
            <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(20), color: SLATE, textAlign: 'center' }}>{SHORT_LINE[shown.id]}</Text>
          </View>
        </View>
      </LightCard>
    </PressableScale>
  );
}

/**
 * Pro or Max. Closed: its name, who it is for, its price. Picked: the name and
 * the price go large and bold and the points open under them in regular weight,
 * so the heading is told from the points by type alone. Nothing sits behind it.
 */
function PlanRow({ plan, limits, on, tag, onPress }: { plan: Plan; limits: TierLimits; on: boolean; tag?: string; onPress: () => void }) {
  const { scale } = useScale();
  return (
    <PressableScale
      onPress={() => {
        if (!on) hapticSwitched();
        onPress();
      }}
      accessibilityRole="button"
      accessibilityState={{ selected: on, expanded: on }}
      accessibilityLabel={`${plan.name}, ${rupees(plan.price)} a month. ${WHO[plan.tier]}.`}>
      <LightCard on={on} radius={scale(22)} scale={scale}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: scale(18), paddingVertical: scale(on ? 17 : 15) }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: on ? 'Onest_700Bold' : 'Onest_500Medium', fontSize: scale(on ? 23 : 17), lineHeight: scale(on ? 29 : 23), letterSpacing: scale(on ? -0.4 : 0), color: INK }}>{plan.name}</Text>
            <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(on ? 14 : 13), lineHeight: scale(on ? 20 : 18), color: tag ? LIGHT.accentInk : SLATE, marginTop: scale(on ? 1 : 0) }}>{tag ?? WHO[plan.tier]}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontFamily: on ? 'Onest_700Bold' : 'Onest_500Medium', fontSize: scale(on ? 23 : 18), lineHeight: scale(on ? 29 : 23), letterSpacing: scale(on ? -0.4 : 0), color: INK }}>{rupees(plan.price)}</Text>
            <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(12), lineHeight: scale(16), color: SLATE }}>a month</Text>
          </View>
        </View>
        {on ? (
          <Animated.View entering={FadeIn.duration(220)} style={{ marginHorizontal: scale(18), paddingTop: scale(8), paddingBottom: scale(10), borderTopWidth: 1, borderTopColor: LIGHT.rule }}>
            {points(limits).map(([lead, rest]) => (
              <View key={lead} style={{ flexDirection: 'row', alignItems: 'flex-start', paddingVertical: scale(8) }}>
                <View style={{ width: scale(20), height: scale(21), justifyContent: 'center' }}>
                  <PointTick size={scale(15)} />
                </View>
                <View style={{ flex: 1, marginLeft: scale(10) }}>
                  <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(15), lineHeight: scale(21), color: INK }}>{lead}</Text>
                  <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18), color: SLATE }}>{rest}</Text>
                </View>
              </View>
            ))}
          </Animated.View>
        ) : null}
      </LightCard>
    </PressableScale>
  );
}

export function PlanChooser({
  pick,
  onPick,
  starters,
  recommend,
  promoLine,
  promoQuiet,
  onPromo,
  onPlanOpened,
}: {
  pick: PlansPick | null;
  onPick: (pick: PlansPick) => void;
  /** The short stays still on offer to this student. None: the page is Pro and Max alone. */
  starters: readonly Starter[];
  /** Mark Pro as the recommended plan: for the page a student meets when a pass has ended. */
  recommend?: boolean;
  promoLine: string;
  /** The code could not be applied: the line reads as a note, not a link. */
  promoQuiet?: boolean;
  /** Null hides the promo link. */
  onPromo: (() => void) | null;
  /**
   * A plan was picked on a page that also shows the short stays: `y` is where
   * the plans' heading sits inside this list, so the page can bring it to the
   * top of the screen and the day and the week leave the view.
   */
  onPlanOpened?: (y: number) => void;
}) {
  const { scale } = useScale();
  const { tiers } = usePlan();
  const [plansY, setPlansY] = useState(0);
  const small = { fontFamily: 'Onest_400Regular', fontSize: scale(12.5), lineHeight: scale(18), color: SLATE, textAlign: 'center' as const };

  return (
    <>
      {starters.length > 0 ? (
        <>
          <ShortCard starters={starters} pick={pick} onPick={onPick} />
          <Text style={[small, { marginTop: scale(12) }]}>{ONE_PAYMENT_SHORT}</Text>
        </>
      ) : null}

      <View onLayout={(e) => setPlansY(e.nativeEvent.layout.y)}>
        {starters.length > 0 ? (
          <Text accessibilityRole="header" style={{ fontFamily: 'Onest_500Medium', fontSize: scale(14.5), lineHeight: scale(20), color: INK, marginTop: scale(26), marginBottom: scale(10) }}>
            Or study every month
          </Text>
        ) : null}
        <View style={{ gap: scale(10) }}>
          {PLANS.map((p) => (
            <PlanRow
              key={p.id}
              plan={p}
              limits={tiers[p.tier]}
              on={pick === p.id}
              tag={recommend && p.tier === 'pro' ? 'Recommended · everyday study' : undefined}
              onPress={() => {
                onPick(p.id);
                // The heading has 26 above it; land with a little air over it.
                if (starters.length > 0) onPlanOpened?.(plansY + scale(4));
              }}
            />
          ))}
        </View>
      </View>

      <Text style={[small, { marginTop: scale(12) }]}>{ONE_PAYMENT_MONTH}</Text>

      {onPromo ? (
        <PressableScale hitSlop={10} onPress={onPromo} style={{ alignSelf: 'center', marginTop: scale(12), paddingVertical: scale(4) }}>
          <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(13.5), color: promoQuiet ? SLATE : colors.amberText }}>{promoLine}</Text>
        </PressableScale>
      ) : null}
    </>
  );
}
