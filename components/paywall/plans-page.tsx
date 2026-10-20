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
import { rupees } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';
import { endsAtFor, type PassKind } from '@/lib/pass';
import { PAYMENTS_ON_THIS_DEVICE } from '@/lib/payments';
import type { TeacherId } from '@/lib/preferences';
import { rupeesOf, usePromo } from '@/lib/promo';

import { PLANS, WINBACK, type Plan } from './plans';

/**
 * THE PLANS PAGE (designed with the founder, 2026-10-17).
 *
 * Home's sky at the top — in the student's teacher's light, no logo, no orb,
 * no teacher's name — with one glass panel that says what a plan is for: the
 * AI teachers without a limit, snapping questions, a 20,000+ question bank,
 * the textbooks. The daily caps are there, honestly, as the quiet second line
 * of their row; a big "50" reads as a ceiling to a student who would never
 * reach it. Then the four plans on white, as onboarding's own answer rows in
 * their plain picked state (an ink edge and the tick, no sky: the sky is
 * already the page's header). One line under them — nothing renews — and,
 * the first time a pass ends only, one more week at a small price.
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

/** A plan, or the one-more-week at the foot of the gate. */
export type PlansPick = Plan['id'] | 'week';

export type PlansPageProps = {
  context: 'gate' | 'extend';
  teacher: TeacherId;
  /** Extend only: when the running pass ends. New time starts the day after. */
  passEnds?: Date | null;
  /** The plan picked when the page opens, or the one carried back from the
   *  promo screen. */
  pick?: PlansPick | null;
  /** The code carried back from the promo screen. */
  promo?: string;
  /** Show "Can't decide yet?": the server says this student has never had it. */
  oneMoreWeek: boolean;
  /** A payment is open or being confirmed: the button holds. */
  busy: boolean;
  onPay: (buying: { kind: PassKind; offer?: 'winback'; promo?: string; expectedPaise: number }) => void;
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
  { key: 'snap', title: 'Snap any question', line: 'Solved step by step. Up to 50 a day.' },
  { key: 'practice', title: 'Practise from 20,000+ questions', line: "In the exam's own pattern. Up to 150 a day." },
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
      <Text style={{ fontFamily: 'Onest_700Bold', fontSize: scale(10.5), letterSpacing: scale(1.3), color: colors.paleGold }}>UNLIMITED</Text>
      <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(20), lineHeight: scale(25), letterSpacing: scale(-0.3), color: PAPER, marginTop: scale(6) }}>
        Access to your AI teachers
      </Text>
      <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(20), color: PAPER62, marginTop: scale(6) }}>
        Live classes, follow-ups, any question.
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

  const [pick, setPick] = useState<PlansPick | null>(props.pick ?? '6m');
  // The promo screen goes back to this same page with the pick it carried.
  useEffect(() => {
    if (props.pick) setPick(props.pick);
  }, [props.pick]);

  const week = pick === 'week';
  const plan = PLANS.find((p) => p.id === pick) ?? null;
  const price = week ? WINBACK.now : (plan?.price ?? 0);
  const name = week ? '1 week' : (plan?.name ?? '');

  // A typed code, or one made for this student; the server prices it. The
  // week is already a discount and takes no code.
  const promo = usePromo(props.promo ?? '', pick && !week ? (pick as PassKind) : null);
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
  const from = props.context === 'extend' && props.passEnds ? props.passEnds : new Date();
  const till = (p: Plan) => asDay(endsAtFor({ kind: p.id, startedAt: from.toISOString() }), today);

  const title = props.context === 'extend' ? 'Add more time' : 'Your pass has ended';
  const sub =
    props.context === 'extend'
      ? props.passEnds
        ? `New time starts after your pass ends on ${asDay(props.passEnds, today)}.`
        : 'New time starts after your current pass ends.'
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
                trailing={rupees(p.price)}
                selected={pick === p.id}
                tickArrives
                plain
                onPress={() => setPick(p.id)}
              />
            ))}
          </View>

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

          {/* THE WAY TO NOT DECIDE YET, last on the page a student cannot
              leave, and offered once: the server says whether this student
              has had it. Not on Add more time. */}
          {props.context === 'gate' && props.oneMoreWeek && !codeOnly ? (
            <View style={{ marginTop: scale(26), paddingTop: scale(22), borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' }}>
              <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(15), color: colors.ink }}>Can&apos;t decide yet?</Text>
              <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13.5), lineHeight: scale(19), color: colors.slate, marginTop: scale(3), marginBottom: scale(12) }}>
                Learn for one more week, then choose a plan.
              </Text>
              <SkyChoice
                shape="row"
                label="One more week"
                note="7 days"
                trailing={rupees(WINBACK.now)}
                selected={week}
                tickArrives
                plain
                onPress={() => setPick('week')}
              />
            </View>
          ) : null}
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
              const kind: PassKind = week ? 'week' : (pick as PassKind);
              // Whatever happens, the server is asked about the codes again afterwards:
              // a refused or just-spent code must not stay on the page.
              if (free && quote) {
                void Promise.resolve(props.onRedeem({ kind, promo: quote.code })).finally(promo.refresh);
                return;
              }
              void Promise.resolve(
                props.onPay({
                  kind,
                  offer: week ? 'winback' : undefined,
                  promo: !week && quote ? quote.code : undefined,
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
