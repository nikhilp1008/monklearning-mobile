import { Image } from "expo-image";
import { useEffect, useState, type ReactNode } from "react";
import {
  StyleSheet,
  View,
  type LayoutChangeEvent,
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

import { PressableScale } from "@/components/pressable-scale";
import { ob, obFont, useDesignScale } from "@/constants/onboarding";
import { hapticSwitched } from "@/lib/haptics";

/**
 * THE ONBOARDING'S PICKED STATE: THE ANSWER BECOMES A PIECE OF THE SKY.
 *
 * "4c" on the design canvas. An unpicked answer is white with a hairline. A
 * picked one is filled with the app's own night sky — the same shader as
 * Home's header (components/night-sky.tsx) with its marigold foot raised and
 * its top softened — and its text turns cream, with a cream tick.
 *
 * A PLAIN FADE, NOTHING MORE. The tap used to raise the glow up through the
 * answer from its bottom edge over half a second, with the tick growing in;
 * on a screen of quick picks that read as heavy. Now the sky, the text colour
 * and the tick all fade together in under a fifth of a second.
 *
 * THE SKY IS A PICTURE, NOT THE SHADER. Home draws its sky live because there
 * is one of it. A question screen can have a dozen answers and chips, and a
 * Skia canvas under each would be a dozen GPU surfaces for a backdrop that
 * never moves. So the sky is rendered once per shape, offline, with the
 * shader's own maths and grain (uB .5, soft .28, dark .6, lift .2, grain .6,
 * at 3x), and stretched to the answer it sits in. The four pictures are the
 * four shapes the questions use; each is drawn at that shape's proportions so
 * the stretch is slight.
 *
 * NO BORDER WHEN PICKED, AND NO SHADOW. An RN border sits outside the content
 * box, so a picked answer with a transparent border showed a white rim; and a
 * drop shadow read as a black bar under the glow. The hairline is an overlay
 * that fades out instead, and the sky runs to the rounded edge.
 */

const SKY = {
  row: require("@/assets/images/onboarding/sky-row.png"),
  tile3: require("@/assets/images/onboarding/sky-tile3.png"),
  tile2: require("@/assets/images/onboarding/sky-tile2.png"),
  chip: require("@/assets/images/onboarding/sky-chip.png"),
};

const CREAM = "#FBF9F2";
const FADE_MS = 180;

export type ChoiceShape = "row" | "tile" | "chip";

function TickDisc({ size }: { size: number }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: CREAM,
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
}: {
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
  const radius = shape === "chip" ? ds(12) : ds(14);
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

  const [box, setBox] = useState({ w: 0, h: 0 });
  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height: h } = e.nativeEvent.layout;
    if (width !== box.w || h !== box.h) setBox({ w: width, h });
  };

  const sky =
    shape === "row"
      ? SKY.row
      : shape === "chip"
        ? SKY.chip
        : box.w / Math.max(box.h, 1) > 2.4
          ? SKY.tile2
          : SKY.tile3;

  const skyIn = useAnimatedStyle(() => ({ opacity: progress.value }));
  const hairline = useAnimatedStyle(() => ({ opacity: 1 - progress.value }));
  const labelColor = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], [ob.ink, CREAM]),
  }));
  const noteColor = useAnimatedStyle(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [ob.ink55, "rgba(251,249,242,0.8)"],
    ),
  }));
  const tagColor = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], [ob.ink40, ob.amberLight]),
  }));
  const tickIn = useAnimatedStyle(() => ({ opacity: progress.value }));
  // Tiles and chips make room for the tick as it arrives, rather than holding
  // an empty gap beside every unpicked label.
  const tickSlot = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [0, tick + gap], "clamp"),
  }));

  const size = labelSize ?? (shape === "row" ? 19 : shape === "tile" ? 17 : 15);
  const labelStyle = {
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
    <View style={[{ opacity: disabled ? 0.35 : 1 }, style]}>
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
          onLayout={onLayout}
          style={{
            borderRadius: radius,
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, skyIn]}>
            {box.h > 0 && (
              <Image source={sky} contentFit="fill" style={StyleSheet.absoluteFill} />
            )}
          </Animated.View>
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                borderRadius: radius,
                borderWidth: 1.5,
                borderColor: ob.hairline14,
              },
              hairline,
            ]}
          />

          <View style={face}>
            {shape === "row" ? (
              <>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <Animated.Text style={[labelStyle, labelColor]}>
                    {label}
                  </Animated.Text>
                  {note ? (
                    <Animated.Text
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
                  <Animated.Text
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
                  <Animated.Text
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
                <Animated.View style={[{ width: tick }, tickIn]}>
                  <TickDisc size={tick} />
                </Animated.View>
              </>
            ) : (
              <>
                <Animated.Text
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
