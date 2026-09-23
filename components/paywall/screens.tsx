import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';

import { Ring, Rise, Tick } from '@/components/confirm-motion';
import { ObButton } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import { SelectRow } from '@/components/select-row';
import { hapticTicked } from '@/lib/haptics';
import {
  INCLUDED,
  ob,
  obFont,
  promoDiscount,
  rupees,
  useDesignScale,
} from '@/constants/onboarding';
import { obPageTitle } from '@/constants/page-title';
import { PASS_NAME, endsAtFor, type PassKind } from '@/lib/pass';
import { BEST, PLANS, WINBACK, perMonth, savedPercent, type Plan } from './plans';

/**
 * THE PAYWALL — shown when a pass has ended, and the way back in.
 *
 * It was designs only. It is wired now: `app/plans.tsx` renders it when
 * `lib/pass` says the student has no live pass, and `onComplete` starts the
 * new one. What it still cannot do is take money — there is no provider — so
 * `pass.tsx`'s honesty is back, exactly as the note at the footer asked:
 * the button stays dead until a promo code brings the total to zero.
 *
 * IT IS THE PASS SCREEN, WITH FOUR PLANS. Everything structural here is
 * lifted from `app/(onboarding)/pass.tsx`: the 30pt gutters, the 22.5pt medium
 * header, the sub line under it, the 10pt gap between option rows, the promo
 * link with its amber arrow, the rules-and-overline includes block, and a
 * footer whose button is honest about not being able to charge. A student who
 * bought a day pass during onboarding and comes back to this a week later is
 * looking at the same screen with different numbers, which is the point.
 *
 * The rows are the app's own `SelectRow` — amber border, amber wash sweeping
 * across on select, no tick.
 *
 * THERE IS NO CONTROL IN THE TOP-LEFT, and that is the honest answer rather
 * than a missing feature.
 *
 * It was a back chevron, which was wrong — this screen IS the app until it is
 * answered, so there is nothing behind it. It then became an exit: one press
 * for an offer, a second to leave. That is a good pattern and it cannot be
 * built, because `BackHandler.exitApp()` is Android-only and iOS gives an app
 * no sanctioned way to terminate itself (`exit(0)` is grounds for rejection).
 * A control whose whole purpose fails on one platform is worse than no
 * control: it invites the press and then does nothing.
 *
 * So the way out moved to where it belongs — the bottom of the page, under
 * the plans, as a smaller thing to buy rather than a door. A student who is
 * not ready scrolls past four prices and finds a week for ₹549. Nothing is
 * hidden behind a modal that only appears if you try to leave.
 */

type S = (n: number) => number;
type T = (em: number, size: number) => number;

function ArrowGlyph({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke={ob.link} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The header, laid out as `ObHeader` lays it out, minus the chevron. */
function Head({ title, ds, fs }: { title: string; ds: S; fs: S }) {
  return (
    <View style={{ paddingHorizontal: ds(30), paddingTop: ds(34) }}>
      {/* The app's page-title tier, not onboarding's: a student meets this
          screen in the middle of using the app, so it matches the screens it
          interrupts rather than the flow it borrows its layout from.
          No `flex: 1` — ObHeader sets its title beside a chevron in a ROW,
          where flex takes the remaining width; in a plain column with no fixed
          height it collapses the text to nothing, which is what it once did. */}
      <Text style={obPageTitle(fs, ds, ob.ink)}>{title}</Text>
    </View>
  );
}

/**
 * THE SHELL BOTH VARIANTS SHARE.
 *
 * The exit ladder, the rows, the promo line, the includes block and the
 * footer all live here, so the two variants cannot drift on anything except
 * the one thing they are meant to differ on — whether the screen makes a
 * recommendation before the rows.
 */
type Bought = { kind: PassKind; promo: string };

/** A plan, or the week at the foot of the page. */
export type Pick = Plan['id'] | 'week';

export type PaywallProps = {
  /** What the screen is for: the pass the student just took, and the code
   *  that made it free. Absent in the design previews. */
  onComplete?: (bought: Bought) => void;
  /** The plan chosen before the promo screen took over. That screen replaces
   *  this route rather than popping to it, so the choice has to come back. */
  pick?: Pick | null;
  /** The code it came back with. */
  promo?: string;
  /** Opens the promo screen, carrying the current choice with it. */
  onPromo?: (pick: Pick | null) => void;
};

function Paywall({
  lead,
  onComplete,
  pick: picked = null,
  promo = '',
  onPromo,
}: PaywallProps & { lead?: (hero: Plan) => React.ReactNode }) {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  /** The week at the foot of the page is a fifth thing to buy, so it is a
   *  fifth thing to pick — the footer reads from one selection, not two.
   *
   *  NOTHING PRESELECTED, as on "Choose a pass". A highlighted row reads as an
   *  answer already given, and arriving on ₹43,999 asks the student to un-pick
   *  the most expensive plan rather than to choose one. */
  const [pick, setPick] = useState<Pick | null>(picked);
  /** Bumped on every press so the wash replays on a re-tap. */
  const [token, setToken] = useState(0);

  const plan = PLANS.find((p) => p.id === pick) ?? null;
  const week = pick === 'week';
  const price = week ? WINBACK.now : (plan?.price ?? 0);
  const name = week ? WINBACK.name : plan?.name;
  const discount = pick ? promoDiscount(promo, price) : 0;
  const total = Math.max(0, price - discount);
  const free = !!pick && total === 0 && discount > 0;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <Head title="Your pass has ended" ds={ds} fs={fs} />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            {/* The work survived. It is the first thing a student on this screen
                wants to know and it costs one line. */}
            <Text style={styles.sub}>
              Your chapters, notes and progress are exactly where you left them. Pick a plan and
              carry on from the same page.
            </Text>

            {lead?.(PLANS[PLANS.length - 1])}

            <View style={styles.rows}>
              {PLANS.map((p) => (
                <SelectRow
                  key={p.id}
                  name={p.name}
                  // The saving rides in the note, not in `tag`: the tag slot sits
                  // immediately left of `trailing` under a space-between row, so
                  // a badge collided with a five-figure price.
                  note={
                    p.id === BEST
                      ? `${rupees(perMonth(p))} a month · save ${savedPercent(p)}%`
                      : `${rupees(perMonth(p))} a month`
                  }
                  trailing={rupees(p.price)}
                  selected={pick === p.id}
                  playToken={token}
                  onPress={() => {
                    setPick(p.id);
                    setToken((n) => n + 1);
                  }}
                />
              ))}

              {/* A line, not a field, and it goes to its own screen — exactly as
                  "Choose a pass" does. The field used to open in place, which put
                  a typing box in a stack of four rows that ARE choices, and grew
                  the page by a box the moment it was tapped. */}
              <PressableScale style={styles.promoLink} hitSlop={10} onPress={() => onPromo?.(pick)}>
                <Text style={styles.promoLinkText}>
                  {discount
                    ? `${promo.toUpperCase()} applied · −${rupees(discount)}`
                    : 'Have a promo code?'}
                </Text>
                <ArrowGlyph size={ds(13)} />
              </PressableScale>
            </View>

            <View style={styles.included}>
              <Text style={styles.overline}>EVERY PLAN INCLUDES</Text>
              {INCLUDED.map(([label, value], i) => (
                <View key={label} style={[styles.includedRow, i === INCLUDED.length - 1 && styles.includedRowLast]}>
                  <Text style={styles.includedLabel}>{label}</Text>
                  <Text style={styles.includedValue}>{value}</Text>
                </View>
              ))}
              {/* One price for both exams, said once — the case most likely to
                  be assumed to cost more. */}
              <Text style={styles.unified}>JEE Main and NEET UG, both covered. One price.</Text>
            </View>

            {/*
              THE SMALLER THING TO BUY, at the foot of the page.
              This was a modal that only appeared if you tried to leave, which
              made the one honest option on the screen the hardest to find. Here
              it is simply the last thing, under four prices: a student who is
              not ready scrolls to it, and one who is never has to dismiss it.
              It is set as a link rather than a second button on purpose — an ink
              button beside the Pay button would be two primaries arguing.
            */}
            <View style={styles.offer}>
              <Text style={styles.overline}>NOT READY FOR A PLAN?</Text>
              <View style={styles.offerPrice}>
                <Text style={styles.offerNow}>{rupees(WINBACK.now)}</Text>
                <Text style={styles.offerWas}>{rupees(WINBACK.was)}</Text>
                <Text style={styles.offerFor}>· {WINBACK.name}</Text>
              </View>
              <Text style={styles.offerLine}>
                Seven more days with your teacher, at ₹200 off. Nothing renews.
              </Text>
              <PressableScale
                style={styles.promoLink}
                hitSlop={10}
                onPress={() => {
                  setPick('week');
                  setToken((n) => n + 1);
                }}>
                <Text style={[styles.promoLinkText, week && styles.promoLinkOn]}>
                  {week ? '7 days selected' : 'Get 7 days'}
                </Text>
                <ArrowGlyph size={ds(13)} />
              </PressableScale>
            </View>
          </ScrollView>

          {/* The page scrolls under the footer, so without this the gap above
              the button is whatever the scroll happens to leave there — a row
              half-cut one moment, open white the next. The fade gives that
              band one edge at every scroll position. */}
          <LinearGradient
            pointerEvents="none"
            colors={['rgba(255,255,255,0)', ob.surface]}
            style={styles.footerFade}
          />
        </View>

        <View style={styles.footer}>
          {/*
            Says what is owed, not what will happen — "Choose a plan" until
            there is one to pay for. Dead until a code brings the total to
            zero: there is no provider, and a live "Pay ₹43,999" that silently
            does nothing is worse than a button that plainly waits. Whoever
            wires a gateway here takes that rule out.
          */}
          <ObButton
            label={!pick ? 'Choose a plan' : free ? 'Complete for ₹0' : `Pay ${rupees(total)}`}
            trailing={name}
            withArrow={free}
            disabled={!onComplete || !free}
            onPress={() => {
              if (!onComplete || !free || !pick) return;
              onComplete({ kind: week ? 'week' : (pick as PassKind), promo });
            }}
          />
          <Text style={styles.footNote}>
            {free
              ? 'One payment. Nothing renews on its own.'
              : 'Payments open soon. A promo code works today.'}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

/**
 * VARIANT A — THE LEDGER. Four equal rows, no recommendation. The calmer of
 * the two and the closer sibling of "Choose a pass".
 */
export function PaywallLedger(props: PaywallProps) {
  return <Paywall {...props} />;
}

/**
 * VARIANT B — THE LEAD. The same rows, with the case for the longest plan
 * made above them. The panel argues; the rows choose. It does not select, so
 * the screen has exactly one selector and it is the app's own.
 */
export function PaywallLead(props: PaywallProps) {
  return <Paywall lead={(hero) => <Lead hero={hero} />} {...props} />;
}

function Lead({ hero }: { hero: Plan }) {
  const { ds, fs, tracking } = useDesignScale();
  return (
    <View
      style={{
        marginTop: ds(22),
        padding: ds(18),
        borderRadius: ds(14),
        backgroundColor: ob.surfaceWarm,
      }}>
      <Text
        style={{
          fontFamily: obFont.sb600,
          fontSize: fs(10),
          letterSpacing: tracking(0.14, 10),
          color: ob.amberDark,
        }}>
        A FULL ACADEMIC YEAR
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: ds(6), marginTop: ds(10) }}>
        <Text
          style={{
            fontFamily: obFont.m500,
            fontSize: fs(34),
            lineHeight: fs(37),
            letterSpacing: tracking(-0.03, 34),
            color: ob.ink,
          }}>
          {rupees(perMonth(hero))}
        </Text>
        <Text style={{ paddingBottom: ds(4), fontFamily: obFont.r400, fontSize: fs(15), color: ob.ink80 }}>
          a month
        </Text>
      </View>
      <Text style={{ marginTop: ds(4), fontFamily: obFont.r400, fontSize: fs(13.5), lineHeight: fs(19), color: ob.ink80 }}>
        On the {hero.name} plan — {rupees(PLANS[0].price * hero.months - hero.price)} less than
        paying month by month.
      </Text>
    </View>
  );
}

/**
 * THE CONFIRMATION — `pass-active`, for a plan.
 *
 * Same dark ground, same tick popping to 1.08 out of two amber rings, same
 * 14pt rise staggered down the receipt, same cream button. That screen marks
 * the seam between signing up and being a student; this one marks the seam
 * between a trial and a year, and there is no reason for them to look
 * different. The motion is imported rather than copied — see
 * `components/confirm-motion.tsx`.
 */
export function PaywallSuccess({
  kind = BEST,
  paid = 0,
}: {
  /** What was actually taken — a plan, or the week at the foot of the page. */
  kind?: PassKind;
  /** What it actually cost. Zero, while a promo code is the only way through:
   *  a receipt reading ₹43,999 for a free pass is a receipt that lies. */
  paid?: number;
}) {
  const { ds, fs, tracking } = useDesignScale();
  // Same moment as the pass screen's receipt, so the same Success tap.
  useEffect(() => {
    const t = setTimeout(hapticTicked, 140);
    return () => clearTimeout(t);
  }, []);
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);
  /** Read off the same clock the rest of the app reads, rather than counted
   *  again here — two answers to "when does this end" is one too many. */
  const till = useMemo(
    () =>
      endsAtFor({ kind, startedAt: new Date().toISOString() }).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    [kind]
  );

  const rows: [string, string][] = [
    ['Plan', PASS_NAME[kind]],
    ['Covers', 'JEE Main + NEET UG'],
    ['Active till', till],
    ['Paid', rupees(paid)],
  ];

  return (
    <View style={styles.nightScreen}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.nightBody}>
          <View style={styles.tickWrap}>
            <Ring size={ds(64)} delay={160} />
            <Ring size={ds(64)} delay={620} />
            <Tick size={ds(64)} />
          </View>

          <View style={styles.headBlock}>
            <Rise delay={300}>
              <Text style={styles.nightHead}>You&apos;re in.</Text>
            </Rise>
            <Rise delay={420}>
              <Text style={styles.nightSub}>
                Drona and Vedha are at the board. Pick a chapter and the class begins.
              </Text>
            </Rise>
          </View>

          <View style={styles.ledger}>
            {rows.map(([label, value], i) => (
              <Rise key={label} delay={560 + i * 80}>
                <View style={[styles.nightRow, i === rows.length - 1 && styles.nightRowLast]}>
                  <Text style={styles.nightRowLabel}>{label}</Text>
                  <Text style={styles.nightRowValue}>{value}</Text>
                </View>
              </Rise>
            ))}
          </View>
        </View>

        <View style={styles.nightFooter}>
          <Rise delay={900}>
            <ObButton label="Start learning" variant="cream" withArrow onPress={() => {}} />
          </Rise>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** Transcribed from `pass.tsx` and `pass-active.tsx` so the screens match. */
function createStyles(ds: S, fs: S, tracking: T) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    body: { flex: 1 },
    content: { paddingHorizontal: ds(30), paddingBottom: ds(24) },
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
    promoLinkText: { fontFamily: obFont.m500, fontSize: fs(15), color: ob.link },
    /** The week, once it is the thing being bought. */
    promoLinkOn: { color: ob.ink },
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
    unified: {
      marginTop: ds(12),
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(19),
      color: ob.amberDark,
    },
    /** Separated by a rule and real air, so it reads as an aside to the
     *  plans rather than a fifth one. */
    offer: {
      marginTop: ds(30),
      paddingTop: ds(20),
      borderTopWidth: 1,
      borderTopColor: ob.rule,
    },
    offerPrice: { flexDirection: 'row', alignItems: 'baseline', gap: ds(8) },
    offerNow: {
      fontFamily: obFont.m500,
      fontSize: fs(24),
      letterSpacing: tracking(-0.03, 24),
      color: ob.ink,
    },
    offerWas: {
      fontFamily: obFont.r400,
      fontSize: fs(14),
      color: ob.ink55,
      textDecorationLine: 'line-through',
    },
    offerFor: { fontFamily: obFont.r400, fontSize: fs(13.5), color: ob.ink80 },
    offerLine: {
      marginTop: ds(6),
      fontFamily: obFont.r400,
      fontSize: fs(13.5),
      lineHeight: fs(19),
      color: ob.ink80,
    },
    /** Sits over the last of the page, and always at the same height: a 28pt
     *  fade, 14 above the button, 10 under it, one line of note, 16 to the
     *  home bar. */
    footerFade: { position: 'absolute', left: 0, right: 0, bottom: 0, height: ds(28) },
    footer: {
      paddingHorizontal: ds(30),
      paddingTop: ds(14),
      paddingBottom: ds(16),
      gap: ds(10),
      backgroundColor: ob.surface,
    },
    footNote: {
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(19),
      textAlign: 'center',
      color: ob.ink55,
    },

    // The confirmation's dark ground.
    nightScreen: { flex: 1, backgroundColor: ob.night },
    nightBody: { flex: 1, paddingHorizontal: ds(30), paddingTop: ds(56) },
    tickWrap: { width: ds(64), height: ds(64), alignItems: 'center', justifyContent: 'center' },
    headBlock: { marginTop: ds(30), gap: ds(14) },
    nightHead: {
      fontFamily: obFont.r400,
      fontSize: fs(32),
      lineHeight: fs(36),
      letterSpacing: tracking(-0.03, 32),
      color: ob.cream,
    },
    nightSub: { fontFamily: obFont.r400, fontSize: fs(17), lineHeight: fs(25), color: ob.onNight },
    ledger: { marginTop: ds(42) },
    nightRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: ds(14),
      borderTopWidth: 1,
      borderTopColor: ob.nightRule,
    },
    nightRowLast: { borderBottomWidth: 1, borderBottomColor: ob.nightRule },
    nightRowLabel: { fontFamily: obFont.r400, fontSize: fs(15), color: ob.onNightDim },
    nightRowValue: { fontFamily: obFont.m500, fontSize: fs(15), color: ob.cream },
    nightFooter: { paddingHorizontal: ds(30), paddingBottom: ds(16), gap: ds(12) },
  });
}
