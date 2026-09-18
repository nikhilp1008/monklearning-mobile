import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { SelectRow } from '@/components/select-row';
import { ob, obFont, rupees, useDesignScale } from '@/constants/onboarding';
import { BEST, INCLUDES, PLANS, WINBACK, perMonth, savedPercent, type Plan } from './plans';

/**
 * THE PAYWALL, TWO WAYS — designs only. Nothing here is wired to the app's
 * gate, no payment sheet exists behind it, and the button does not charge.
 *
 * WHAT THE SCREEN HAS TO DO. It appears when a trial, day pass or week pass
 * has ended, and it is the whole app until it is answered. That makes it the
 * most demanding screen in the product: it is asking for ₹4,999 at the
 * cheapest, from a student who has had the teacher taken away, with no
 * navigation to escape into. So both variants do three things before they ask
 * for anything — say plainly that the pass ended, say that the student's own
 * work is still there, and say what the money buys.
 *
 * WHY EACH ROW LEADS WITH A PER-MONTH RATE. It is the only number that
 * compares four different durations, and at this ladder it is also the only
 * number that makes the longest plan look like the best one. See `plans.ts`
 * for the two things about the ladder the screen cannot paper over.
 *
 * THE TWO VARIANTS DIFFER IN ONE DECISION: whether the screen chooses for the
 * student. `PaywallLedger` lays out four equal rows and lets them read; it is
 * the calmer screen and it is a sibling of the pass screen they have already
 * seen. `PaywallLead` puts the 11-month plan up as a card with its own
 * argument and files the rest underneath; it converts better and it is more
 * obviously a sales screen. That is the choice, not the styling.
 */

type S = (n: number) => number;

function Chevron({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M10 3 5 8l5 5" stroke={ob.ink} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function Tick({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M3 8.5 6.5 12 13 4.5" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The included-lines block, shared by both variants. */
function Includes({ ds, fs, tracking }: { ds: S; fs: S; tracking: (em: number, n: number) => number }) {
  return (
    <View style={{ marginTop: ds(26) }}>
      <Text
        style={{
          fontFamily: obFont.sb600,
          fontSize: fs(10.5),
          letterSpacing: tracking(0.08, 10.5),
          color: ob.ink55,
          marginBottom: ds(10),
        }}>
        EVERY PLAN INCLUDES
      </Text>
      {INCLUDES.map(([label, value], i) => (
        <View
          key={label}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: ds(11),
            borderBottomWidth: i === INCLUDES.length - 1 ? 0 : 1,
            borderBottomColor: ob.rule,
          }}>
          <Text style={{ fontFamily: obFont.m500, fontSize: fs(14.5), color: ob.ink }}>{label}</Text>
          <Text style={{ fontFamily: obFont.r400, fontSize: fs(14), color: ob.ink80 }}>{value}</Text>
        </View>
      ))}
      {/* The unified price, said once. A student preparing for both exams is
          the case most likely to assume it costs more. */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: ds(8), marginTop: ds(14) }}>
        <Tick size={ds(14)} color={ob.amberDark} />
        <Text style={{ flex: 1, fontFamily: obFont.m500, fontSize: fs(13.5), color: ob.amberDark }}>
          JEE Main and NEET UG, both covered. One price.
        </Text>
      </View>
    </View>
  );
}

/** The line every variant opens with. */
function Head({
  ds,
  fs,
  tracking,
  onBack,
}: {
  ds: S;
  fs: S;
  tracking: (em: number, n: number) => number;
  onBack: () => void;
}) {
  return (
    <>
      <Pressable
        onPress={onBack}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel="Not now"
        style={{
          width: ds(44),
          height: ds(44),
          borderRadius: ds(22),
          borderWidth: 1,
          borderColor: ob.hairline14,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: ds(18),
        }}>
        <Chevron size={ds(18)} />
      </Pressable>
      <Text
        style={{
          fontFamily: obFont.sb600,
          fontSize: fs(30),
          lineHeight: fs(33),
          letterSpacing: tracking(-0.035, 30),
          color: ob.ink,
        }}>
        Your pass has ended.
      </Text>
      {/* Says the work survived before it says the price. This is the one
          thing a student on this screen is actually anxious about. */}
      <Text
        style={{
          marginTop: ds(10),
          fontFamily: obFont.r400,
          fontSize: fs(16),
          lineHeight: fs(22.4),
          color: '#6B6559',
        }}>
        Your chapters, notes and progress are exactly where you left them. Pick a plan and carry
        on from the same page.
      </Text>
    </>
  );
}

/**
 * THE ROWS ARE THE ONBOARDING ROWS — `components/select-row.tsx`, the same
 * component the exam, year and pass screens choose with.
 *
 * These were a radio circle with a tick and a flat tint, which is a pattern
 * from nowhere in this app. Onboarding makes a choice a different way: a 1.5pt
 * border that turns amber, and an amber gradient that sweeps across the row
 * over 260ms. It is a wipe rather than a fill, so selecting reads as something
 * HAPPENING rather than something being coloured in, and there is no tick
 * because the wash already says which row you are on.
 *
 * It also replays on a re-tap of the row already selected, which is why the
 * parent bumps `playToken` on every press rather than only on a change.
 *
 * Its three slots take the plan exactly: `name` the duration, `note` the rate
 * per month, `trailing` the total. Nothing had to be adapted.
 */
function planRow(plan: Plan, pick: Plan['id'], token: number, choose: (id: Plan['id']) => void) {
  return (
    <SelectRow
      key={plan.id}
      name={plan.name}
      // The saving rides in the note rather than in `tag`. The tag slot sits
      // immediately left of `trailing` under a space-between row, so a badge
      // and a five-figure price collided on the one row that has both.
      note={
        plan.id === BEST
          ? `${rupees(perMonth(plan))} a month · save ${savedPercent(plan)}%`
          : `${rupees(perMonth(plan))} a month`
      }
      trailing={rupees(plan.price)}
      selected={pick === plan.id}
      playToken={token}
      onPress={() => choose(plan.id)}
    />
  );
}

/** Both variants share the footer, so the price line cannot drift between them. */
function Foot({ plan, ds, fs }: { plan: Plan; ds: S; fs: S }) {
  return (
    <View style={{ paddingHorizontal: ds(26), paddingBottom: ds(18), gap: ds(10) }}>
      <ObButton label={`Pay ${rupees(plan.price)}`} trailing={plan.name} onPress={() => {}} />
      <Text
        style={{ textAlign: 'center', fontFamily: obFont.r400, fontSize: fs(12.5), color: ob.ink55 }}>
        One payment. Nothing renews on its own.
      </Text>
    </View>
  );
}

/** The selection state both variants keep, including the replay token. */
function usePick() {
  const [pick, setPick] = useState<Plan['id']>(BEST);
  const [token, setToken] = useState(0);
  const choose = (id: Plan['id']) => {
    setPick(id);
    setToken((n) => n + 1);
  };
  return { pick, token, choose, plan: PLANS.find((p) => p.id === pick)! };
}

/**
 * VARIANT A — THE LEDGER.
 *
 * Four equal rows and no recommendation. The calmer of the two, and
 * deliberately a sibling of "Choose a pass" — a student who has bought once
 * already is reading a screen they recognise rather than a sales page. The
 * rate under each name does the persuading; only one row carries a badge.
 */
export function PaywallLedger({ onBack }: { onBack: () => void }) {
  const { ds, fs, tracking } = useDesignScale();
  const { pick, token, choose, plan } = usePick();
  return (
    <View style={{ flex: 1, backgroundColor: ob.surface }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: ds(26), paddingTop: ds(12), paddingBottom: ds(20) }}
          showsVerticalScrollIndicator={false}>
          <Head ds={ds} fs={fs} tracking={tracking} onBack={onBack} />
          <View style={{ gap: ds(10), marginTop: ds(24) }}>
            {PLANS.map((p) => planRow(p, pick, token, choose))}
          </View>
          <Includes ds={ds} fs={fs} tracking={tracking} />
        </ScrollView>
        <Foot plan={plan} ds={ds} fs={fs} />
      </SafeAreaView>
    </View>
  );
}

/**
 * VARIANT B — THE LEAD.
 *
 * The same four rows, with the case for the longest plan made above them: its
 * rate per month set large, and what that saves against paying monthly.
 *
 * THE PANEL DOES NOT SELECT ANYTHING, and that is the correction. It was a
 * card you could tap, which meant the screen had two different ways to choose
 * a plan — a card and a row — and the card's was invented. The panel argues
 * and the rows choose, so there is exactly one selector on the screen and it
 * is the app's own.
 */
export function PaywallLead({ onBack }: { onBack: () => void }) {
  const { ds, fs, tracking } = useDesignScale();
  const { pick, token, choose, plan } = usePick();
  const hero = PLANS[PLANS.length - 1];

  return (
    <View style={{ flex: 1, backgroundColor: ob.surface }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: ds(26), paddingTop: ds(12), paddingBottom: ds(20) }}
          showsVerticalScrollIndicator={false}>
          <Head ds={ds} fs={fs} tracking={tracking} onBack={onBack} />

          <View
            style={{
              marginTop: ds(22),
              padding: ds(18),
              borderRadius: ds(14),
              backgroundColor: ob.surfaceWarm,
            }}>
            <Text
              style={{
                fontFamily: obFont.b700,
                fontSize: fs(10.5),
                letterSpacing: tracking(0.08, 10.5),
                color: ob.amberDark,
              }}>
              A FULL ACADEMIC YEAR
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: ds(6), marginTop: ds(10) }}>
              <Text
                style={{
                  fontFamily: obFont.m500,
                  fontSize: fs(36),
                  lineHeight: fs(38),
                  letterSpacing: tracking(-0.03, 36),
                  color: ob.ink,
                }}>
                {rupees(perMonth(hero))}
              </Text>
              <Text
                style={{ paddingBottom: ds(4), fontFamily: obFont.m500, fontSize: fs(15), color: ob.ink80 }}>
                a month
              </Text>
            </View>
            <Text style={{ marginTop: ds(4), fontFamily: obFont.r400, fontSize: fs(14), color: ob.ink80 }}>
              On the {hero.name} plan — {rupees(PLANS[0].price * hero.months - hero.price)} less than
              paying month by month.
            </Text>
          </View>

          <Text
            style={{
              marginTop: ds(22),
              marginBottom: ds(10),
              fontFamily: obFont.sb600,
              fontSize: fs(10.5),
              letterSpacing: tracking(0.08, 10.5),
              color: ob.ink55,
            }}>
            CHOOSE A PLAN
          </Text>
          <View style={{ gap: ds(10) }}>
            {PLANS.map((p) => planRow(p, pick, token, choose))}
          </View>
          <Includes ds={ds} fs={fs} tracking={tracking} />
        </ScrollView>
        <Foot plan={plan} ds={ds} fs={fs} />
      </SafeAreaView>
    </View>
  );
}

/**
 * THE WIN-BACK, on the way out.
 *
 * The back control does not leave — there is nowhere to go, because this
 * screen IS the app until it is answered. What it does instead is admit that
 * ₹4,999 may be the wrong question and offer the smaller one: a week, at ₹200
 * off. The old price is shown struck through because a discount nobody can
 * see is not a discount.
 *
 * It is deliberately not a second paywall. One offer, one price, and the way
 * back to the plans is the larger of the two buttons — a student who came here
 * by mis-tapping the chevron should not have to think.
 */
export function WinBack({ onStay, onTake }: { onStay: () => void; onTake: () => void }) {
  const { ds, fs, tracking } = useDesignScale();
  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(28,26,22,.42)', justifyContent: 'flex-end' }]}>
      <View
        style={{
          backgroundColor: ob.surface,
          borderTopLeftRadius: ds(26),
          borderTopRightRadius: ds(26),
          paddingHorizontal: ds(26),
          paddingTop: ds(24),
          paddingBottom: ds(34),
        }}>
        <Text
          style={{
            fontFamily: obFont.sb600,
            fontSize: fs(24),
            lineHeight: fs(27),
            letterSpacing: tracking(-0.03, 24),
            color: ob.ink,
          }}>
          Try a week instead?
        </Text>
        <Text
          style={{
            marginTop: ds(8),
            fontFamily: obFont.r400,
            fontSize: fs(15),
            lineHeight: fs(21),
            color: '#6B6559',
          }}>
          Seven more days with your teacher, at ₹200 off. Nothing renews.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: ds(9), marginTop: ds(16) }}>
          <Text
            style={{
              fontFamily: obFont.xb800,
              fontSize: fs(30),
              letterSpacing: tracking(-0.03, 30),
              color: ob.ink,
            }}>
            {rupees(WINBACK.now)}
          </Text>
          <Text
            style={{
              fontFamily: obFont.r400,
              fontSize: fs(16),
              color: ob.ink55,
              textDecorationLine: 'line-through',
            }}>
            {rupees(WINBACK.was)}
          </Text>
          <Text style={{ fontFamily: obFont.m500, fontSize: fs(14), color: ob.ink80 }}>
            · {WINBACK.name}
          </Text>
        </View>
        <View style={{ marginTop: ds(20), gap: ds(10) }}>
          <ObButton label={`Get 7 days for ${rupees(WINBACK.now)}`} onPress={onTake} />
          <Pressable onPress={onStay} hitSlop={8} style={{ alignItems: 'center', paddingVertical: ds(12) }}>
            <Text style={{ fontFamily: obFont.m500, fontSize: fs(15), color: ob.ink }}>
              See the plans again
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/**
 * THE SUCCESS SCREEN.
 *
 * A sibling of `pass-active`, and it says the same three things a receipt
 * has to: what was bought, what was paid, and when it runs out. The date is
 * the one a student will actually want later, so it is a row rather than
 * fine print.
 *
 * No confetti. The moment is that the teacher is back, so the screen names
 * the teacher and gets out of the way with a single button into a class.
 */
export function PaywallSuccess({ planId = BEST }: { planId?: Plan['id'] }) {
  const { ds, fs, tracking } = useDesignScale();
  const plan = PLANS.find((p) => p.id === planId)!;
  const till = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + plan.months);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }, [plan.months]);

  const rows: [string, string][] = [
    ['Plan', plan.name],
    ['Paid', rupees(plan.price)],
    ['Access until', till],
    ['Covers', 'JEE Main + NEET UG'],
  ];

  return (
    <View style={{ flex: 1, backgroundColor: ob.surface }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <View style={{ flex: 1, paddingHorizontal: ds(26), paddingTop: ds(52) }}>
          <View
            style={{
              width: ds(64),
              height: ds(64),
              borderRadius: ds(32),
              backgroundColor: ob.amber,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Tick size={ds(30)} color={ob.ink} />
          </View>
          <Text
            style={{
              marginTop: ds(24),
              fontFamily: obFont.sb600,
              fontSize: fs(32),
              lineHeight: fs(35),
              letterSpacing: tracking(-0.035, 32),
              color: ob.ink,
            }}>
            You&apos;re in.
          </Text>
          <Text
            style={{
              marginTop: ds(10),
              fontFamily: obFont.r400,
              fontSize: fs(16),
              lineHeight: fs(22.4),
              color: '#6B6559',
            }}>
            Drona and Vedha are yours for the next {plan.name.toLowerCase()}. Everything you had
            before is still here.
          </Text>

          <View style={{ marginTop: ds(30) }}>
            {rows.map(([k, v], i) => (
              <View
                key={k}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: ds(13),
                  borderBottomWidth: i === rows.length - 1 ? 0 : 1,
                  borderBottomColor: ob.rule,
                }}>
                <Text style={{ fontFamily: obFont.r400, fontSize: fs(14.5), color: ob.ink80 }}>{k}</Text>
                <Text style={{ fontFamily: obFont.m500, fontSize: fs(14.5), color: ob.ink }}>{v}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ paddingHorizontal: ds(26), paddingBottom: ds(18) }}>
          <ObButton label="Start a live class" withArrow onPress={() => {}} />
        </View>
      </SafeAreaView>
    </View>
  );
}
