import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { PASSES, rupees } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { PASS_NAME, type PassKind } from '@/lib/pass';
import { PAYMENTS_ON_THIS_DEVICE } from '@/lib/payments';
import type { TeacherId } from '@/lib/preferences';
import { rupeesOf, usePromo } from '@/lib/promo';

import { PlanChooser, type PlansPick } from './plan-chooser';
import { PLANS } from './plans';

export type { PlansPick };

/**
 * THE PLANS PAGE. The choice itself is components/paywall/plan-chooser.tsx, shared
 * with onboarding. NOTHING IS PICKED WHEN THE PAGE OPENS, unless the promo screen
 * carried a pick back.
 *
 * TWO WAYS IN, ONE PAGE. `gate`: the pass has ended or there never was one, and the
 * app opens here; there is no way out but a pass. `extend`: Profile → Your plan,
 * with time still left; it closes, and new time starts after the current pass. The
 * prices are the server's to charge (the app never sends one); the page shows its
 * own list, and the checkout refuses to open if the two differ.
 *
 * NOTHING ABOUT EXAM DATES. The founder: "we don't track their exam date".
 */

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

const INK = colors.ink;
const SLATE = colors.slate;

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

        <PlanChooser
          pick={pick}
          onPick={setPick}
          starters={starters}
          passesFirst={props.context === 'gate'}
          promoLine={promoLine}
          promoQuiet={!quote && !!promo.code && !promo.checking && !promo.auto}
          onPromo={codeOnly && !promo.code ? null : () => props.onPromo(pick)}
        />
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
