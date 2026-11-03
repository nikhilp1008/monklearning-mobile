import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View, type LayoutChangeEvent } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { PASSES, rupees, type PassKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';
import { usePlan } from '@/lib/free-tier';
import { hapticSwitched } from '@/lib/haptics';
import { PASS_NAME, type PassKind } from '@/lib/pass';
import { PAYMENTS_ON_THIS_DEVICE } from '@/lib/payments';
import type { TeacherId } from '@/lib/preferences';
import { rupeesOf, usePromo } from '@/lib/promo';

import { compareRows } from './compare';
import { PLANS, type Plan } from './plans';
import { POUR_COLUMN_MS, POUR_ROW_MS, PourEdge, PourFill, PourText, usePour, type SkyTheme } from './poured-sky';

/**
 * THE PLANS PAGE (Nikhil's P10, 3 Nov 2026; he means to come back to it).
 *
 * A white page. The trial passes are one line each, because a pass is everything
 * in Pro for a shorter time, so there is nothing to open. Pro and Max are a table
 * that can be read before anything is tapped, its two columns edged like buttons.
 * What is picked fills from the top with one gradient (poured-sky.tsx): the
 * pass's row, or the plan's whole column.
 *
 * NOTHING IS PICKED WHEN THE PAGE OPENS, unless the promo screen carried a pick
 * back. Every figure in the table is the server's (`usePlan`), so the page and the
 * limit a student meets can never disagree.
 *
 * TWO WAYS IN, ONE PAGE. `gate`: the pass has ended or there never was one, and the
 * app opens here; there is no way out but a pass. `extend`: Profile → Your plan,
 * with time still left; it closes, and new time starts after the current pass. The
 * prices are the server's to charge (the app never sends one); the page shows its
 * own list, and the checkout refuses to open if the two differ.
 *
 * NOTHING ABOUT EXAM DATES. The founder: "we don't track their exam date".
 */

export type PlansPick = Plan['id'] | PassKey;

export type PlansPageProps = {
  context: 'gate' | 'extend';
  teacher: TeacherId;
  /** Extend only: when the running pass ends. New time starts the day after. */
  passEnds?: Date | null;
  /** Extend only: the kind of the running pass. Pro or Max bought over a day or
   *  week pass starts at once and ends it (the server does that), so the page
   *  says so instead of promising a start date after the pass. */
  runningKind?: PassKind | null;
  /** Gate only: a student who has never held a pass is not told theirs ended. */
  neverHadPass?: boolean;
  /** Starter passes already used on this account: not offered again. */
  starterUsed?: PassKind[];
  /** The plan carried back from the promo screen. */
  pick?: PlansPick | null;
  /** The code carried back from the promo screen. */
  promo?: string;
  /** A payment is open or being confirmed: the button holds. */
  busy: boolean;
  onPay: (buying: { kind: PassKind; promo?: string; expectedPaise: number }) => void;
  /** A code made the pick free: no payment, the server redeems it. */
  onRedeem: (bought: { kind: PassKind; promo: string }) => void;
  onPromo: (pick: PlansPick | null) => void;
  onClose?: () => void;
};

const PAPER = colors.paper;
const PAPER62 = 'rgba(255,253,248,.62)';
const PAPER82 = 'rgba(255,253,248,.82)';
const INK = colors.ink;
const SLATE = colors.slate;
const RULE = 'rgba(28,26,22,.08)';
const RULE_ON_SKY = 'rgba(255,253,248,.12)';
const EDGE = 'rgba(28,26,22,.16)';
const EDGE_WIDTH = 1.5;

const PASS_LINE: Record<PassKey, string> = {
  day: 'Everything in Pro, for a day',
  week: 'Everything in Pro, for a week',
};

function asDay(d: Date, today: Date) {
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    ...(d.getFullYear() === today.getFullYear() ? {} : { year: 'numeric' }),
  });
}

function midnight(d: Date) {
  const m = new Date(d);
  m.setHours(0, 0, 0, 0);
  return m;
}

// ─── The things to pick ──────────────────────────────────────────────────────

function PassRow({
  pass,
  on,
  onPress,
  theme,
}: {
  pass: (typeof PASSES)[number];
  on: boolean;
  onPress: () => void;
  theme: SkyTheme;
}) {
  const { scale } = useScale();
  const pour = usePour(on, POUR_ROW_MS);
  const [box, setBox] = useState({ width: 0, height: 0 });
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
      <View
        onLayout={(e: LayoutChangeEvent) => setBox({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })}
        style={{ borderRadius: radius, overflow: 'hidden', backgroundColor: '#fff' }}>
        <PourFill pour={pour} width={box.width} height={box.height} radius={radius} theme={theme} />
        <PourEdge pour={pour} radius={radius} color={EDGE} width={EDGE_WIDTH} />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: scale(18), paddingVertical: scale(14) }}>
          <View style={{ flex: 1 }}>
            <PourText pour={pour} from={INK} to={PAPER} start={0.1} end={0.5} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(17), lineHeight: scale(23) }}>{pass.name}</PourText>
            <PourText pour={pour} from={SLATE} to={PAPER82} start={0.45} end={0.9} style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18) }}>{PASS_LINE[pass.id]}</PourText>
          </View>
          <PourText pour={pour} from={INK} to={PAPER} start={0.25} end={0.7} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(19) }}>{rupees(pass.price)}</PourText>
          <Animated.View style={[{ alignItems: 'flex-end', overflow: 'hidden' }, tick]}>
            <View style={{ width: scale(24), height: scale(24), borderRadius: scale(12), backgroundColor: PAPER, alignItems: 'center', justifyContent: 'center' }}>
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

/** One plan's column of the table: its name and price, then its numbers. Edged like a button; tap anywhere on it. */
function PlanColumn({
  plan,
  values,
  on,
  onPress,
  theme,
  headH,
  rowH,
}: {
  plan: Plan;
  values: string[];
  on: boolean;
  onPress: () => void;
  theme: SkyTheme;
  headH: number;
  rowH: number;
}) {
  const { scale } = useScale();
  const pour = usePour(on, POUR_COLUMN_MS);
  const [width, setWidth] = useState(0);
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
      <View onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)} style={{ height: total, borderRadius: radius, overflow: 'hidden', backgroundColor: '#fff' }}>
        <PourFill pour={pour} width={width} height={total} radius={radius} theme={theme} />
        <PourEdge pour={pour} radius={radius} color={EDGE} width={EDGE_WIDTH} />
        <View style={{ height: headH, alignItems: 'center', justifyContent: 'center' }}>
          <PourText pour={pour} from={INK} to={PAPER} end={headEnd * 0.5} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(15.5), lineHeight: scale(21) }}>{plan.name}</PourText>
          <PourText pour={pour} from={INK} to={PAPER} end={headEnd * 0.8} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(20), lineHeight: scale(26), letterSpacing: scale(-0.3) }}>{rupees(plan.price)}</PourText>
          <PourText pour={pour} from={SLATE} to={PAPER62} end={headEnd} style={{ fontFamily: 'Onest_400Regular', fontSize: scale(11.5), lineHeight: scale(15) }}>a month</PourText>
        </View>
        {values.map((value, i) => (
          <View key={i} style={{ height: rowH, alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderTopColor: on ? RULE_ON_SKY : RULE }}>
            <PourText
              pour={pour}
              from={INK}
              to={PAPER}
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

function CloseButton({ onPress }: { onPress: () => void }) {
  const { scale } = useScale();
  return (
    <PressableScale
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Close"
      style={{
        width: scale(40),
        height: scale(40),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: colors.hairline,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg viewBox="0 0 24 24" width={scale(18)} height={scale(18)} fill="none">
        <Path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke={INK} strokeWidth={1.9} strokeLinecap="round" />
      </Svg>
    </PressableScale>
  );
}

// ─── The page ────────────────────────────────────────────────────────────────

export function PlansPage(props: PlansPageProps) {
  const { scale } = useScale();
  const theme = SKY_THEMES[props.teacher];
  const { tiers } = usePlan();

  const [pick, setPick] = useState<PlansPick | null>(props.pick ?? null);
  // The promo screen goes back to this same page with the pick it carried.
  useEffect(() => {
    if (props.pick) setPick(props.pick);
  }, [props.pick]);

  const plan = PLANS.find((p) => p.id === pick) ?? null;
  const starter = PASSES.find((p) => p.id === pick) ?? null;
  const price = plan?.price ?? starter?.price ?? 0;
  const starterUsed = props.starterUsed ?? [];
  const runningStarter = props.runningKind === 'day' || props.runningKind === 'week';
  // A starter is for trying the app: not offered to someone already on Pro, Max or a longer pass.
  const starters = props.runningKind && !runningStarter ? [] : PASSES.filter((p) => !starterUsed.includes(p.id));
  /** Pro or Max over a running starter pass begins now, not after it. */
  const startsNow = props.context === 'extend' && runningStarter && !!plan;

  // A typed code, or one made for this student; the server prices it.
  const promo = usePromo(props.promo ?? '', pick ? (pick as PassKind) : null);
  const quote = promo.quote;
  const total = quote ? rupeesOf(quote.finalPaise) : price;
  const free = !!quote?.free;

  const today = midnight(new Date());
  const title = props.context === 'extend' ? (runningStarter ? 'Keep going' : 'Add more time') : 'Choose what works for you';
  // Only what the student must know. A new student needs no line here at all.
  const sub =
    props.context === 'extend'
      ? startsNow
        ? `${plan?.name} starts right away and takes over from the rest of your ${PASS_NAME[props.runningKind as PassKind]} pass.`
        : props.passEnds
          ? `New time starts after your pass ends on ${asDay(props.passEnds, today)}.`
          : 'New time starts after your current pass ends.'
      : props.neverHadPass
        ? null
        : 'Your pass has ended. Your progress is saved.';

  const promoLine = quote
    ? `${quote.code} applied · −${rupees(rupeesOf(quote.discountPaise))}`
    : promo.code && !promo.checking && !promo.auto
      ? `${promo.code} couldn't be applied`
      : 'Have a promo code?';

  const canPay = PAYMENTS_ON_THIS_DEVICE || free;
  /**
   * ON IPHONE THE WAY IN IS A CODE. Paying is Android-only for now
   * (lib/payments.ts), and iPhone builds go to testers, who are given a code.
   * So the key does not sit greyed out reading "not available": it opens the
   * promo screen, and once a code makes the plan free it completes for ₹0.
   */
  const codeOnly = !canPay;
  const label = !pick
    ? 'Choose one to continue'
    : free
      ? 'Complete for ₹0'
      : codeOnly
        ? 'Enter a promo code'
        : `Pay ${rupees(total)}`;
  const trailing = plan ? `${plan.name} · 1 month` : starter?.name;

  const rows = compareRows(tiers.pro, tiers.max);
  const headH = scale(84);
  const rowH = scale(42);
  const heading = (text: string, first?: boolean) => (
    <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(15), lineHeight: scale(21), color: INK, marginTop: first ? 0 : scale(22), marginBottom: scale(9) }}>{text}</Text>
  );

  const passes =
    starters.length > 0 ? (
      <>
        {heading('Trial passes', props.context === 'gate')}
        <View style={{ gap: scale(9) }}>
          {starters.map((p) => (
            <PassRow key={p.id} pass={p} on={pick === p.id} onPress={() => setPick(p.id)} theme={theme} />
          ))}
        </View>
      </>
    ) : null;

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: scale(20), paddingTop: scale(18), paddingBottom: scale(12) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(12), marginBottom: scale(20) }}>
          <View style={{ flex: 1 }}>
            <Text accessibilityRole="header" numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.85} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(26), lineHeight: scale(32), letterSpacing: scale(-0.5), color: INK }}>
              {title}
            </Text>
            {sub ? <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(20), color: SLATE, marginTop: scale(4) }}>{sub}</Text> : null}
          </View>
          {props.onClose ? <CloseButton onPress={props.onClose} /> : null}
        </View>

        {props.context === 'gate' ? passes : null}

        {heading('Monthly plans', props.context === 'extend')}
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
            <PlanColumn
              key={p.id}
              plan={p}
              values={rows.map((r) => (p.tier === 'pro' ? r.pro : r.max))}
              on={pick === p.id}
              onPress={() => setPick(p.id)}
              theme={theme}
              headH={headH}
              rowH={rowH}
            />
          ))}
        </View>

        {props.context === 'extend' ? passes : null}

        <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(12.5), lineHeight: scale(18), color: SLATE, textAlign: 'center', marginTop: scale(16) }}>
          One payment. Nothing renews on its own.
        </Text>

        {codeOnly && !promo.code ? null : (
          <PressableScale hitSlop={10} onPress={() => props.onPromo(pick)} style={{ alignSelf: 'center', marginTop: scale(10), paddingVertical: scale(4) }}>
            <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(13.5), color: !quote && promo.code && !promo.checking && !promo.auto ? SLATE : colors.amberText }}>{promoLine}</Text>
          </PressableScale>
        )}
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
        <View style={{ paddingHorizontal: scale(20), paddingTop: scale(8), paddingBottom: scale(10) }}>
          <ObButton
            label={label}
            trailing={pick && canPay ? trailing : undefined}
            withArrow={free}
            busy={props.busy}
            disabled={!pick || props.busy || promo.checking}
            onPress={() => {
              if (!pick || props.busy) return;
              if (codeOnly) return props.onPromo(pick);
              const kind = pick as PassKind;
              // Whatever happens, the server is asked about the codes again afterwards:
              // a refused or just-spent code must not stay on the page.
              if (free && quote) {
                void Promise.resolve(props.onRedeem({ kind, promo: quote.code })).finally(promo.refresh);
                return;
              }
              void Promise.resolve(
                props.onPay({
                  kind,
                  promo: quote ? quote.code : undefined,
                  expectedPaise: Math.round(total * 100),
                })
              ).finally(promo.refresh);
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
