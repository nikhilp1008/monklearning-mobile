import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, type ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PracticeIcon, SnapADoubtIcon } from '@/components/monk-icons';
import { NightSky } from '@/components/night-sky';
import { ObButton } from '@/components/onboarding-kit';
import { SkyChoice } from '@/components/onboarding/sky-choice';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { PASSES, rupees, type PassKey } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';
import { useFreeTier, usePlan } from '@/lib/free-tier';
import { PASS_NAME, endsAtFor, type PassKind } from '@/lib/pass';
import { PAYMENTS_ON_THIS_DEVICE } from '@/lib/payments';
import type { TeacherId } from '@/lib/preferences';
import { rupeesOf, usePromo } from '@/lib/promo';

import { compareRows } from './compare';
import { PLANS, type Plan } from './plans';

/**
 * THE PLANS PAGE (designed with the founder, 2026-10-17).
 *
 * Home's sky at the top — in the student's teacher's light, no logo, no orb,
 * no teacher's name — with one glass panel that says what a plan is for: the
 * AI teachers, snapping questions, a 20,000+ question bank, the textbooks. No
 * numbers there: they differ by plan and live in the table below. Then the two
 * plans (Pro, Max) on white, as onboarding's own answer rows in their plain
 * picked state (an ink edge and the tick, no sky: the sky is already the page's
 * header), then Free, Pro and Max side by side so a number is read against the
 * others, then the day and week passes for a student only trying it (one each,
 * ever: a used one is not shown). One line under them: nothing renews.
 *
 * TWO WAYS IN, ONE PAGE. `gate`: the pass has ended and the app opens here;
 * there is no way out but a pass. `extend`: Profile → Your plan → Extend,
 * with time still left; it closes, and new time starts after the current
 * pass. The prices are the server's to charge (the app never sends one); the
 * page shows its own list, and the checkout refuses to open if the two differ.
 *
 * NOTHING ABOUT EXAM DATES. The founder: "we don't track their exam date".
 * Each plan says only when it would run till.
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
  /** The plan picked when the page opens, or the one carried back from the
   *  promo screen. */
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

type Scale = (n: number) => number;

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

// ─── The glass panel ─────────────────────────────────────────────────────────

function BookGlyph({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6.4C10.3 5 7.8 4.5 4 4.6v13.6c3.8-.1 6.3.4 8 1.8 1.7-1.4 4.2-1.9 8-1.8V4.6c-3.8-.1-6.3.4-8 1.8zM12 6.4V20"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Home's glass, without the blurred copy: the sky behind it is smooth, so a
 *  warm tint and two inset rings carry it. */
function Glass({ children, scale }: { children: ReactNode; scale: Scale }) {
  return (
    <View style={{ borderRadius: scale(18), backgroundColor: 'rgba(26,24,20,.34)', overflow: 'hidden', paddingHorizontal: scale(20), paddingTop: scale(20), paddingBottom: scale(8) }}>
      {children}
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            borderRadius: scale(18),
            boxShadow: [
              { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.14)', inset: true },
              { offsetX: 0, offsetY: 1, blurRadius: 0, spreadDistance: 0, color: 'rgba(255,253,248,.1)', inset: true },
            ],
          },
        ]}
      />
    </View>
  );
}

const OFFER_ROWS = [
  { key: 'snap', title: 'Snap any question', line: 'Solved step by step, in seconds.' },
  { key: 'practice', title: 'Practise from 20,000+ questions', line: "In the exam's own pattern." },
  { key: 'book', title: 'Textbooks made for revision', line: 'Formulas, diagrams and key points, chapter by chapter.' },
] as const;

function Offer({ scale }: { scale: Scale }) {
  const glyph = (key: (typeof OFFER_ROWS)[number]['key']) => {
    const size = scale(20);
    const c = colors.paleGold;
    if (key === 'snap') return <SnapADoubtIcon size={size} color={c} accent={c} />;
    if (key === 'practice') return <PracticeIcon size={size} color={c} accent={c} />;
    return <BookGlyph size={size} color={c} />;
  };
  return (
    <Glass scale={scale}>
      <Text style={{ fontFamily: 'Onest_700Bold', fontSize: scale(10.5), letterSpacing: scale(1.3), color: colors.paleGold }}>LIVE WITH DRONA AND VEDHA</Text>
      <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(20), lineHeight: scale(25), letterSpacing: scale(-0.3), color: PAPER, marginTop: scale(6) }}>
        Every chapter, taught aloud
      </Text>
      <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(20), color: PAPER62, marginTop: scale(6) }}>
        Live classes, follow-ups, and a plan for how much you need.
      </Text>
      <View style={{ height: 1, backgroundColor: 'rgba(255,253,248,.12)', marginTop: scale(18) }} />
      {OFFER_ROWS.map((r, i) => (
        <View
          key={r.key}
          style={{ flexDirection: 'row', gap: scale(14), paddingVertical: scale(13), borderTopWidth: i === 0 ? 0 : 1, borderTopColor: 'rgba(255,253,248,.07)' }}>
          <View style={{ paddingTop: scale(1) }}>{glyph(r.key)}</View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(15.5), color: PAPER }}>{r.title}</Text>
            <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(12.5), lineHeight: scale(17), color: PAPER62, marginTop: scale(2) }}>{r.line}</Text>
          </View>
        </View>
      ))}
    </Glass>
  );
}

/**
 * FREE, PRO AND MAX SIDE BY SIDE. A number reads against the others: 45 classes
 * means little until the column beside it says none, and the column beside that
 * says 60. Every figure comes from the server's own table (`usePlan`), so the
 * page and the limit a student meets can never disagree.
 */
function Compare({ scale, selected }: { scale: Scale; selected: 'pro' | 'max' | null }) {
  const { tiers } = usePlan();
  const { limits } = useFreeTier();
  const rows = compareRows(limits, tiers.pro, tiers.max);
  const col = (on: boolean): object => ({ flex: 1.15, textAlign: 'center', color: on ? colors.ink : colors.slate });
  const head = { fontFamily: 'Onest_700Bold', fontSize: scale(12.5), paddingBottom: scale(8) };
  const cell = { fontFamily: 'Onest_500Medium', fontSize: scale(12.5), lineHeight: scale(17) };
  return (
    <View style={{ marginTop: scale(22) }}>
      <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(10), letterSpacing: scale(1.4), color: colors.slate, marginBottom: scale(10) }}>WHAT EACH ONE GIVES YOU</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 1.5 }} />
        <Text style={[head, col(false)]}>Free</Text>
        <Text style={[head, col(selected === 'pro')]}>Pro</Text>
        <Text style={[head, col(selected === 'max')]}>Max</Text>
      </View>
      {rows.map((r) => (
        <View key={r.label} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: scale(9), borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' }}>
          <Text style={[cell, { flex: 1.5, fontFamily: 'Onest_400Regular', color: colors.slate }]}>{r.label}</Text>
          <Text style={[cell, col(false)]}>{r.free}</Text>
          <Text style={[cell, col(selected === 'pro')]}>{r.pro}</Text>
          <Text style={[cell, col(selected === 'max')]}>{r.max}</Text>
        </View>
      ))}
      <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(11.5), lineHeight: scale(16), color: colors.slate, marginTop: scale(6) }}>
        Follow-ups have a fair-use ceiling no one doing homework will meet.
      </Text>
    </View>
  );
}

function CloseButton({ onPress, scale }: { onPress: () => void; scale: Scale }) {
  return (
    <PressableScale
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Close"
      style={{
        width: scale(40),
        height: scale(40),
        borderRadius: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,253,248,.07)',
        boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.14)', inset: true }],
      }}>
      <Svg viewBox="0 0 24 24" width={scale(18)} height={scale(18)} fill="none">
        <Path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke={PAPER} strokeWidth={1.9} strokeLinecap="round" />
      </Svg>
    </PressableScale>
  );
}

/** Three of Home's stars, in the empty sky above the heading. */
const STARS = [
  { x: 34, y: 10, d: 2.5, o: 0.7 },
  { x: 262, y: 20, d: 2, o: 0.6 },
  { x: 168, y: 4, d: 2, o: 0.5 },
];

// ─── The page ────────────────────────────────────────────────────────────────

export function PlansPage(props: PlansPageProps) {
  const { scale } = useScale();
  const insets = useSafeAreaInsets();
  const [sky, setSky] = useState({ width: 0, height: 0 });
  const theme = SKY_THEMES[props.teacher];

  const [pick, setPick] = useState<PlansPick | null>(props.pick ?? 'pro_1m');
  // The promo screen goes back to this same page with the pick it carried.
  useEffect(() => {
    if (props.pick) setPick(props.pick);
  }, [props.pick]);

  const plan = PLANS.find((p) => p.id === pick) ?? null;
  const starter = PASSES.find((p) => p.id === pick) ?? null;
  const price = plan?.price ?? starter?.price ?? 0;
  const name = plan?.name ?? starter?.name ?? '';
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

  // New time starts now at the gate, and the moment the running pass ends when
  // extending — so the "Till" dates are the dates the student would really get.
  //
  // COUNTED IN THE SAME DAYS THE SERVER GRANTS (30 / 90 / 180 / 330), through the
  // same function the receipt uses. This used calendar months, which promised up
  // to four days more than a student received ("Till 14 Jan 2028" for a plan that
  // runs to 11 Jan), and a different date from the receipt a minute later.
  const today = midnight(new Date());
  const from = props.context === 'extend' && props.passEnds && !startsNow ? props.passEnds : new Date();
  const till = (p: Plan) => asDay(endsAtFor({ kind: p.id, startedAt: from.toISOString() }), today);

  const title =
    props.context === 'extend' ? (runningStarter ? 'Keep going' : 'Add more time') : props.neverHadPass ? 'Choose a plan' : 'Your pass has ended';
  const sub =
    props.context === 'extend'
      ? startsNow
        ? `${plan?.name} starts right away and takes over from the rest of your ${PASS_NAME[props.runningKind as PassKind]} pass.`
        : props.passEnds
          ? `New time starts after your pass ends on ${asDay(props.passEnds, today)}.`
          : 'New time starts after your current pass ends.'
      : props.neverHadPass
        ? 'Live classes, more questions and every mock. Your progress is saved.'
        : 'Choose a plan to continue. Your progress is saved.';

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
    ? 'Choose a plan'
    : free
      ? 'Complete for ₹0'
      : codeOnly
        ? 'Enter a promo code'
        : `Pay ${rupees(total)}`;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: scale(20) }}>
        <View
          onLayout={(e: LayoutChangeEvent) => {
            const { width, height } = e.nativeEvent.layout;
            setSky((p) => (p.width === width && p.height === height ? p : { width, height }));
          }}
          style={{ borderBottomLeftRadius: scale(34), borderBottomRightRadius: scale(34), overflow: 'hidden' }}>
          <NightSky width={sky.width} height={sky.height} theme={theme} style={StyleSheet.absoluteFillObject} />
          {STARS.map((s) => (
            <View
              key={s.x}
              pointerEvents="none"
              style={{
                position: 'absolute',
                left: scale(s.x),
                top: insets.top + scale(s.y),
                width: scale(s.d),
                height: scale(s.d),
                borderRadius: scale(s.d),
                opacity: s.o,
                backgroundColor: PAPER,
                boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: scale(6), color: 'rgba(255,253,248,.6)' }],
              }}
            />
          ))}
          <View style={{ paddingHorizontal: scale(24), paddingTop: insets.top + scale(36), paddingBottom: scale(24) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(12) }}>
              <Text accessibilityRole="header" style={{ flex: 1, fontFamily: 'Onest_600SemiBold', fontSize: scale(26), lineHeight: scale(31), letterSpacing: scale(-0.6), color: PAPER }}>
                {title}
              </Text>
              {props.onClose ? <CloseButton onPress={props.onClose} scale={scale} /> : null}
            </View>
            <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(20), color: PAPER62, marginTop: scale(8) }}>{sub}</Text>
            <View style={{ marginTop: scale(24) }}>
              <Offer scale={scale} />
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: scale(24), paddingTop: scale(24) }}>
          <View style={{ gap: scale(10) }}>
            {PLANS.map((p) => (
              <SkyChoice
                key={p.id}
                shape="row"
                label={p.name}
                note={`Till ${till(p)}`}
                trailing={`${rupees(p.price)} a month`}
                selected={pick === p.id}
                tickArrives
                plain
                onPress={() => setPick(p.id)}
              />
            ))}
          </View>

          <Compare scale={scale} selected={plan?.tier ?? null} />

          {starters.length > 0 ? (
            <View style={{ marginTop: scale(26) }}>
              <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(10), letterSpacing: scale(1.4), color: colors.slate, marginBottom: scale(10) }}>JUST TRYING IT?</Text>
              <View style={{ gap: scale(10) }}>
                {starters.map((p) => (
                  <SkyChoice
                    key={p.id}
                    shape="row"
                    label={p.name}
                    note={p.id === 'day' ? 'A live class, snaps and practice' : '3 live classes, snaps and practice'}
                    trailing={rupees(p.price)}
                    selected={pick === p.id}
                    tickArrives
                    plain
                    onPress={() => setPick(p.id)}
                  />
                ))}
              </View>
            </View>
          ) : null}

          {/* One line, always: it shrinks a little on a narrow phone rather
              than leaving "choose to." alone on a second line. */}
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
            style={{ fontFamily: 'Onest_400Regular', fontSize: scale(12.5), lineHeight: scale(18), color: colors.slate, textAlign: 'center', marginTop: scale(14) }}>
            Nothing renews on its own. You pay only when you choose to.
          </Text>

          {codeOnly && !promo.code ? null : (
          <PressableScale
            hitSlop={10}
            onPress={() => props.onPromo(pick)}
            style={{ alignSelf: 'center', marginTop: scale(12), paddingVertical: scale(4) }}>
            <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(13.5), color: !quote && promo.code && !promo.checking && !promo.auto ? colors.slate : colors.amberText }}>{promoLine}</Text>
          </PressableScale>
          )}
        </View>
      </ScrollView>

      {/* The sky's top edge, held under the clock while the page scrolls. */}
      <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: insets.top, overflow: 'hidden' }}>
        <NightSky width={sky.width} height={sky.height} theme={theme} />
      </View>

      <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
        <View style={{ paddingHorizontal: scale(24), paddingTop: scale(10), paddingBottom: scale(12) }}>
          <ObButton
            label={label}
            trailing={pick && canPay ? name : undefined}
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
    </View>
  );
}
