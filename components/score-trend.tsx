import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { formatDay } from '@/lib/mock-report';

export interface TrendPoint {
  id: string;
  /** ISO date the paper was submitted. */
  when: string;
  marks: number;
}

/**
 * A student's mock scores over time, oldest to newest: one line, one colour.
 *
 * The y-axis runs from 0 to the paper's full marks rather than hugging the
 * data, so 63 -> 131 of 300 reads as the distance it is, not as a line that
 * shot to the ceiling. Papers are spaced evenly, in the order they were sat:
 * the question a student asks is "am I improving paper to paper", not "how
 * many days apart were they".
 *
 * Marigold is 2.1:1 on the white card, below the 3:1 a mark needs on its own,
 * so it never carries the number alone: the chosen paper's score is written
 * on the chart and repeated in text below, and the list of papers under this
 * card is the table view. Tapping a point selects that paper; the line below
 * then opens its report.
 */
export function ScoreTrend({
  points,
  maxMarks,
  onOpen,
}: {
  points: TrendPoint[];
  maxMarks: number;
  onOpen: (id: string) => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [width, setWidth] = useState(0);
  const [chosen, setSelected] = useState(points.length - 1);
  // The list can shrink after mount (the server's list replaces this phone's
  // saved copies), so an index chosen earlier is clamped, never trusted.
  const selected = Math.min(chosen, points.length - 1);

  const height = verticalScale(132);
  // Room on the left for the axis numbers, and at the ends so a point and its
  // ring never clip against the card's edge.
  const padLeft = scale(30);
  const padRight = scale(14);
  const padTop = verticalScale(22);
  const padBottom = verticalScale(8);

  const first = points[0];
  const last = points[points.length - 1];
  const delta = last.marks - first.marks;
  const pick = points[selected];

  const geo = useMemo(() => {
    if (!width) return null;
    const plotW = width - padLeft - padRight;
    const plotH = height - padTop - padBottom;
    const x = (i: number) =>
      padLeft + (points.length === 1 ? plotW / 2 : (plotW * i) / (points.length - 1));
    const y = (m: number) =>
      padTop + plotH * (1 - Math.max(0, Math.min(maxMarks, m)) / maxMarks);
    const d = points.map((p, i) => `${i ? 'L' : 'M'}${x(i)},${y(p.marks)}`).join(' ');
    return { x, y, d, top: y(maxMarks), base: y(0) };
  }, [width, points, maxMarks, height, padLeft, padRight, padTop, padBottom]);

  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  return (
    <View>
      <Text style={styles.headline}>
        {last.marks}
        <Text style={styles.headlineOf}> / {maxMarks} last paper</Text>
      </Text>
      <Text style={styles.delta}>
        {delta > 0
          ? `Up ${delta} marks since your first paper`
          : delta < 0
            ? `Down ${-delta} marks since your first paper`
            : 'The same as your first paper'}{' '}
        · {points.length} papers
      </Text>

      <View
        style={{ height }}
        onLayout={onLayout}
        accessible
        accessibilityLabel={`Mock scores, oldest to newest: ${points
          .map((p) => `${formatDay(p.when)} ${p.marks}`)
          .join(', ')}, out of ${maxMarks}.`}>
        {geo && (
          <Svg width={width} height={height}>
            {/* Recessive frame: full marks and zero, nothing between. */}
            <Line x1={padLeft} x2={width - padRight} y1={geo.top} y2={geo.top}
              stroke={colors.hairline} strokeWidth={1} strokeDasharray="3 4" />
            <Line x1={padLeft} x2={width - padRight} y1={geo.base} y2={geo.base}
              stroke={colors.hairline} strokeWidth={1} />
            <SvgText x={padLeft - scale(6)} y={geo.top + scale(4)} fontSize={scale(10)}
              fill={colors.faint} textAnchor="end" fontFamily="Onest_600SemiBold">
              {maxMarks}
            </SvgText>
            <SvgText x={padLeft - scale(6)} y={geo.base + scale(4)} fontSize={scale(10)}
              fill={colors.faint} textAnchor="end" fontFamily="Onest_600SemiBold">
              0
            </SvgText>

            <Path d={geo.d} stroke={colors.marigold} strokeWidth={2} fill="none"
              strokeLinejoin="round" strokeLinecap="round" />

            {points.map((p, i) => {
              const on = i === selected;
              return (
                <Circle key={p.id} cx={geo.x(i)} cy={geo.y(p.marks)}
                  r={on ? scale(5.5) : scale(4)}
                  fill={on ? colors.ink : colors.marigold}
                  stroke="#fff" strokeWidth={2} />
              );
            })}

            {/* The one direct label: the chosen paper's score, above its point. */}
            <SvgText x={geo.x(selected)} y={geo.y(pick.marks) - scale(11)}
              fontSize={scale(12)} fill={colors.ink} textAnchor="middle"
              fontFamily="Onest_700Bold">
              {pick.marks}
            </SvgText>
          </Svg>
        )}
        {/* Hit targets far larger than the 8pt marks, one per paper. */}
        {geo &&
          points.map((p, i) => (
            <Pressable
              key={p.id}
              accessibilityRole="button"
              accessibilityLabel={`${formatDay(p.when)}, ${p.marks} marks`}
              onPress={() => setSelected(i)}
              style={[
                styles.hit,
                {
                  left: geo.x(i) - scale(22),
                  top: geo.y(p.marks) - scale(22),
                  width: scale(44),
                  height: scale(44),
                },
              ]}
            />
          ))}
      </View>

      <View style={styles.axisDates}>
        <Text style={styles.axisDate}>{formatDay(first.when)}</Text>
        <Text style={styles.axisDate}>{formatDay(last.when)}</Text>
      </View>

      <Pressable style={styles.pickRow} onPress={() => onOpen(pick.id)} accessibilityRole="button">
        <Text style={styles.pickText}>
          {formatDay(pick.when)} · {pick.marks} / {maxMarks}
        </Text>
        <Text style={styles.pickLink}>See report</Text>
      </Pressable>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    headline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(28),
      color: colors.ink,
    },
    headlineOf: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.faint,
    },
    delta: {
      marginTop: verticalScale(2),
      marginBottom: verticalScale(6),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      color: colors.slate,
    },
    hit: {
      position: 'absolute',
    },
    axisDates: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: scale(22),
    },
    axisDate: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    pickRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(12),
      paddingTop: verticalScale(10),
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.hairline,
    },
    pickText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.ink,
    },
    pickLink: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
  });
}
