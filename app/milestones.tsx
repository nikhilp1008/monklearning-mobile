import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  GROUP_LABEL,
  groupMilestones,
  loadMilestones,
  markMilestonesSeen,
  type Milestone,
} from '@/lib/milestones';
import { getCachedProgress, getProgress } from '@/lib/progress';

/**
 * Milestones — the things a student keeps.
 *
 * Built as a page in a notebook rather than a shelf of badges: a ruled sheet,
 * a red margin rule, and entries written on the lines. The one flourish is the
 * red-pen "new" in the margin, which is where a teacher's annotation actually
 * goes — and it is the only thing on the page that isn't derived from
 * `/progress`.
 *
 * There are no locked or greyed-out rows. A grid of things you haven't done is
 * the game-badge pattern MOMENTS.md rules out, and on day one it would render
 * as a wall of failure. An empty collection gets a sentence instead.
 *
 * No dates, deliberately — see `lib/milestones.ts` for why deriving the
 * collection costs us the ability to say when.
 */

const MARGIN = 46;

export default function MilestonesScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [milestones, setMilestones] = useState<Milestone[] | null>(null);
  const [fresh, setFresh] = useState<Set<string>>(new Set());
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        // The cache is almost always warm — Progress is the only way in, and
        // it has just fetched. The await is the cold-start path.
        const data = getCachedProgress() ?? (await getProgress());
        const result = await loadMilestones(data);
        if (!alive) return;
        setMilestones(result.milestones);
        setFresh(result.unseen);
        // Marked seen on arrival, not on leaving: the student is looking at
        // them now, and a screen that has to be exited correctly to count is
        // a screen that will sometimes get it wrong.
        markMilestonesSeen(result.milestones);
      } catch {
        if (alive) setFailed(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const sections = useMemo(() => groupMilestones(milestones ?? []), [milestones]);
  const lastId = milestones?.length ? milestones[milestones.length - 1].id : null;

  return (
    <SettingsPage title="Milestones">
      <Text style={styles.lead}>
        Everything here was earned by proving something — never by showing up. That is why there
        are no streaks in this app.
      </Text>

      {failed ? (
        <Text style={styles.empty}>
          Couldn’t load your milestones just now. They’re safe — this page rebuilds them from your
          progress every time it opens.
        </Text>
      ) : milestones === null ? null : milestones.length === 0 ? (
        <View>
          <Text style={styles.empty}>
            Nothing here yet. The first of anything — a class, a doubt, a question — earns the
            first entry, and those are the ones worth having.
          </Text>
          <PressableScale style={styles.cta} onPress={() => router.dismissTo('/')}>
            <Text style={styles.ctaText}>Start something</Text>
          </PressableScale>
        </View>
      ) : (
        <View style={styles.sheet}>
          {/* The notebook's red margin, running the full height behind the rows. */}
          <View style={styles.marginRule} pointerEvents="none" />

          {sections.map((section) => (
            <View key={section.group}>
              <View style={styles.sectionRow}>
                <Text style={styles.sectionLabel}>{GROUP_LABEL[section.group]}</Text>
              </View>
              {section.items.map((m) => (
                <View
                  key={m.id}
                  // The very last row drops its rule — otherwise it doubles up
                  // against the card's own border at the rounded bottom edge.
                  style={[styles.entry, m.id === lastId && styles.entryLast]}>
                  <View style={styles.margin}>
                    {fresh.has(m.id) && <Text style={styles.newMark}>new</Text>}
                  </View>
                  <View style={styles.body}>
                    <Text style={styles.title}>{m.title}</Text>
                    <Text style={styles.caption}>{m.caption}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      {!!milestones?.length && (
        <Text style={styles.foot}>
          Rebuilt from your progress every time this page opens, so nothing here can be lost.
        </Text>
      )}
    </SettingsPage>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    lead: {
      marginTop: verticalScale(6),
      marginBottom: verticalScale(22),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(14 * 1.55),
      color: colors.slate,
    },

    sheet: {
      position: 'relative',
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(16),
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    marginRule: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: scale(MARGIN),
      width: 1,
      backgroundColor: 'rgba(221,68,51,.30)',
    },

    // Each row draws the rule beneath it, so entries sit on the lines by
    // construction instead of being nudged onto a separately-drawn grid.
    sectionRow: {
      paddingLeft: scale(MARGIN + 14),
      paddingRight: scale(16),
      paddingTop: verticalScale(15),
      paddingBottom: verticalScale(9),
      borderBottomWidth: 1,
      borderBottomColor: colors.ruledLine,
    },
    sectionLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.45),
      letterSpacing: scale(0.105 * 9.45),
      textTransform: 'uppercase',
      color: colors.marigold,
    },

    entry: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: verticalScale(62),
      paddingRight: scale(16),
      borderBottomWidth: 1,
      borderBottomColor: colors.ruledLine,
    },
    entryLast: {
      borderBottomWidth: 0,
    },
    margin: {
      width: scale(MARGIN),
      paddingRight: scale(9),
      alignItems: 'flex-end',
    },
    newMark: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(13),
      color: colors.red,
      // Kalam sits high in its box; this drops it onto the line the text sits on.
      marginTop: verticalScale(3),
    },
    body: {
      flex: 1,
      minWidth: 0,
      paddingLeft: scale(14),
      paddingVertical: verticalScale(11),
    },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      letterSpacing: scale(-0.02 * 16),
      color: colors.ink,
    },
    caption: {
      marginTop: verticalScale(2),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.faint,
    },

    empty: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(15 * 1.55),
      color: colors.slate,
    },
    cta: {
      alignSelf: 'flex-start',
      marginTop: verticalScale(18),
      height: verticalScale(46),
      justifyContent: 'center',
      paddingHorizontal: scale(22),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    ctaText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: '#fff',
    },

    foot: {
      marginTop: verticalScale(16),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(12.5 * 1.5),
      color: colors.faint,
    },
  });
}
