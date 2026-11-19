import { useEffect, type ReactNode } from "react";
import {
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

import { CONTROL_LABEL_MAX_SCALE } from "@/constants/font-scale";
import { PressableScale } from "@/components/pressable-scale";
import { ob, obFont, useDesignScale } from "@/constants/onboarding";
import { hapticSwitched } from "@/lib/haptics";

/**
 * THE ONBOARDING'S PICKED STATE: A WHITE CARD WITH A MARIGOLD EDGE AND TICK.
 *
 * Since 19 Nov 2026 (Nikhil). A picked answer used to be filled with a piece of
 * the night sky, cream words on it; hence this file's name. The sky is the
 * teacher's, and a student has no teacher until after they have paid, so the
 * sky now stays out of everything before that. Picked and unpicked answers are
 * the same white card with a soft shadow; picking one turns its edge marigold
 * and brings in a marigold tick. The same picked state as a plan on the price
 * page (components/paywall/light.tsx), so the questions and the price read as
 * one run of screens.
 *
 * A PLAIN FADE, NOTHING MORE: the edge and the tick fade in under a fifth of a
 * second. On a screen of quick picks anything slower read as heavy.
 *
 * NO GRADIENT AND NO GLOW. A warm wash at the top of these steps was tried and
 * taken off the same day: it read as cheap.
 */

const ACCENT = "#EEA31F";
/** Marigold as small words: the fill itself is too pale to read on white. */
const ACCENT_INK = "#B97A0F";
const EDGE = "rgba(28,26,22,0.08)";
const FADE_MS = 180;

export type ChoiceShape = "row" | "tile" | "chip";

function TickDisc({ size }: { size: number }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: ACCENT,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 16 16"
        fill="none"
      >
        <Path
          d="M3.5 8.4l3 3L12.5 5"
          stroke={ob.ink}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export function SkyChoice({
  label,
  note,
  tag,
  trailing,
  shape,
  selected,
  disabled = false,
  height,
  labelSize,
  onPress,
  style,
  tickArrives = false,
}: {
  /**
   * Rows only: make room for the tick as it arrives, as tiles do, instead of
   * holding an empty tick-sized gap after every row's price. The plans page
   * lists four prices that should end on one edge; onboarding keeps the
   * fixed slot.
   */
  tickArrives?: boolean;
  label: string;
  /** A quiet second line, rows only. */
  note?: string;
  /** A small right-hand tag, e.g. PCM. Rows only. */
  tag?: string;
  /** A right-hand value set large, e.g. a price. Rows only. */
  trailing?: string;
  shape: ChoiceShape;
  selected: boolean;
  disabled?: boolean;
  /** Tiles only: their fixed height. */
  height?: number;
  labelSize?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  const { ds, fs, tracking } = useDesignScale();
  const radius = shape === "chip" ? ds(12) : ds(18);
  const tick = shape === "row" ? ds(22) : ds(16);
  const gap = shape === "row" ? ds(12) : ds(7);

  // Starts where it is, so a screen opened with an answer already chosen does
  // not replay the fade.
  const progress = useSharedValue(selected ? 1 : 0);
  useEffect(() => {
    progress.value = withTiming(selected ? 1 : 0, {
      duration: FADE_MS,
      easing: Easing.out(Easing.quad),
    });
  }, [selected, progress]);

  const edge = useAnimatedStyle(() => ({
    borderColor: interpolateColor(progress.value, [0, 1], [EDGE, ACCENT]),
  }));
  const labelColor = { color: ob.ink };
  const noteColor = { color: ob.ink55 };
  const tagColor = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], [ob.ink40, ACCENT_INK]),
  }));
  const tickIn = useAnimatedStyle(() => ({ opacity: progress.value }));
  // Tiles and chips make room for the tick as it arrives, rather than holding
  // an empty gap beside every unpicked label.
  const tickSlot = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [0, tick + gap], "clamp"),
  }));

  const size = labelSize ?? (shape === "row" ? 19 : shape === "tile" ? 17 : 15);
  const labelStyle = {
    includeFontPadding: false,
    fontFamily: obFont.m500,
    fontSize: fs(size),
    letterSpacing: tracking(-0.02, size),
  };

  const face =
    shape === "row"
      ? {
          flexDirection: "row" as const,
          alignItems: "center" as const,
          gap: ds(12),
          paddingVertical: note ? ds(15) : ds(19),
          paddingHorizontal: ds(20),
        }
      : shape === "tile"
        ? {
            height: height ?? ds(56),
            flexDirection: "row" as const,
            alignItems: "center" as const,
            justifyContent: "center" as const,
            paddingHorizontal: ds(6),
          }
        : {
            flexDirection: "row" as const,
            alignItems: "center" as const,
            paddingVertical: ds(8),
            paddingHorizontal: ds(14),
          };

  // The dim sits on a wrapper: PressableScale drives the Pressable's own
  // opacity for its press feedback, which overrode a dim set alongside it.
  return (
    <View
      style={[
        {
          opacity: disabled ? 0.35 : 1,
          borderRadius: radius,
          backgroundColor: "#FFFFFF",
          // The same lift as a plan card (softShadow in components/paywall/light.tsx).
          boxShadow: [{ offsetX: 0, offsetY: ds(10), blurRadius: ds(30), spreadDistance: ds(-14), color: "rgba(28,26,22,.13)" }],
        },
        style,
      ]}
    >
      <PressableScale
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ selected, disabled }}
        accessibilityLabel={note ? `${label}. ${note}` : label}
        onPress={() => {
          if (!selected) hapticSwitched();
          onPress();
        }}
        style={{ borderRadius: radius }}
      >
        <View
          style={{
            borderRadius: radius,
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* An overlay, not the card's own border: a border sits outside the
              content box and would move the label as it thickens. */}
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                borderRadius: radius,
                borderWidth: 2,
                borderColor: EDGE,
              },
              edge,
            ]}
          />

          <View style={face}>
            {shape === "row" ? (
              <>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <Animated.Text maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE} style={[labelStyle, labelColor]}>
                    {label}
                  </Animated.Text>
                  {note ? (
                    <Animated.Text maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}
                      style={[
                        {
                          marginTop: ds(2),
                          fontFamily: obFont.r400,
                          fontSize: fs(13),
                          lineHeight: fs(18),
                        },
                        noteColor,
                      ]}
                    >
                      {note}
                    </Animated.Text>
                  ) : null}
                </View>
                {tag ? (
                  <Animated.Text maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}
                    style={[
                      {
                        fontFamily: obFont.sb600,
                        fontSize: fs(12),
                        letterSpacing: tracking(0.1, 12),
                      },
                      tagColor,
                    ]}
                  >
                    {tag}
                  </Animated.Text>
                ) : null}
                {trailing ? (
                  <Animated.Text maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}
                    style={[
                      {
                        fontFamily: obFont.m500,
                        fontSize: fs(23),
                        letterSpacing: tracking(-0.03, 23),
                      },
                      labelColor,
                    ]}
                  >
                    {trailing}
                  </Animated.Text>
                ) : null}
                {tickArrives ? (
                  // The negative margin takes back the row's gap, so an
                  // unpicked price ends on the padding edge.
                  <Animated.View style={[{ overflow: "hidden", alignItems: "flex-end", marginLeft: -gap }, tickSlot]}>
                    <Animated.View style={tickIn}>
                      <TickDisc size={tick} />
                    </Animated.View>
                  </Animated.View>
                ) : (
                  <Animated.View style={[{ width: tick }, tickIn]}>
                    <TickDisc size={tick} />
                  </Animated.View>
                )}
              </>
            ) : (
              <>
                <Animated.Text maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}
                  numberOfLines={1}
                  style={[labelStyle, labelColor, { flexShrink: 1 }]}
                >
                  {label}
                </Animated.Text>
                <Animated.View
                  style={[
                    { overflow: "hidden", alignItems: "flex-end" },
                    tickSlot,
                  ]}
                >
                  <Animated.View style={tickIn}>
                    <TickDisc size={tick} />
                  </Animated.View>
                </Animated.View>
              </>
            )}
          </View>
        </View>
      </PressableScale>
    </View>
  );
}

/**
 * Answers laid out in equal columns: the score bands, the subjects.
 *
 * Built as rows of `cols`, each cell flex 1, with empty cells padding the last
 * row. Not a wrapping row of measured widths: three cells that summed to a
 * fraction of a point over the row wrapped the third onto its own line.
 */
export function ChoiceGrid({
  cols,
  children,
}: {
  cols: number;
  children: ReactNode[];
}) {
  const { ds } = useDesignScale();
  const gap = ds(8);
  const rows: ReactNode[][] = [];
  for (let i = 0; i < children.length; i += cols)
    rows.push(children.slice(i, i + cols));
  return (
    <View style={{ gap }}>
      {rows.map((row, r) => (
        <View key={r} style={{ flexDirection: "row", gap }}>
          {Array.from({ length: cols }).map((_, c) => (
            <View key={c} style={{ flex: 1, flexBasis: 0 }}>
              {row[c] ?? null}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

/** Chapters and feelings: chips that wrap. */
export function ChipWrap({ children }: { children: ReactNode }) {
  const { ds } = useDesignScale();
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: ds(8) }}>
      {children}
    </View>
  );
}
