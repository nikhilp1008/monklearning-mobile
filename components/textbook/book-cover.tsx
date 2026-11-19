import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Line, Path } from "react-native-svg";

import { MonkLogo } from "@/components/monk-logo";

/**
 * OUR TEXTBOOK COVERS, "ON ITS BLUEPRINT" (Nikhil and Raasikh, 19 Nov 2026).
 *
 * Replaces the printed two-ink covers of 9 Nov, which read as pixelated and
 * cheap on the shelf. One fixed system for every book:
 *
 * 1. THE PICTURE: one object a student links to the subject at a glance, made
 *    in matte white porcelain and brushed titanium with exactly ONE marigold
 *    part, standing on its own construction drawing printed on the subject's
 *    colour. Class 11: Newton's cradle, a conical flask, a drawing compass, a
 *    microscope. Class 12: a light bulb, a test tube rack, dice, a DNA helix.
 *    The pictures are generated images (Google Flow, Nano Banana Pro) in
 *    `assets/images/textbook-covers`; the frame below is drawn in code so it
 *    is exact and the same on every book.
 * 2. THE FRAME ("F0"): the logo and "CLASS 11" across the top over a hairline
 *    rule; a thin ring on the marigold part with a leader to a label naming the
 *    chapter it comes from; the subject in STIX Two at the foot over
 *    "CLASS XI TEXTBOOK". A soft shade at the top and the foot keeps the type
 *    readable on any picture.
 *
 * Everything is laid out in a 140 x 193 box and scaled to the cover's width,
 * so the frame matches the design board at every size.
 */

export type BookSubject = "physics" | "chemistry" | "mathematics" | "biology";
export type BookLevel = 11 | 12;

export const BOOK_NAME: Record<BookSubject, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  mathematics: "Mathematics",
  biology: "Biology",
};

type Book = {
  image: number;
  /** Where the marigold part sits, as fractions of the picture (x, y). */
  mark: [number, number];
  /** The chapter the object comes from, shown beside the ring. */
  chapter: string;
};

const BOOKS: Record<BookSubject, Record<BookLevel, Book>> = {
  physics: {
    11: {
      image: require("@/assets/images/textbook-covers/physics-11.jpg"),
      mark: [0.266, 0.601],
      chapter: "Ch 4 · Laws of motion",
    },
    12: {
      image: require("@/assets/images/textbook-covers/physics-12.jpg"),
      mark: [0.501, 0.328],
      chapter: "Ch 3 · Current electricity",
    },
  },
  chemistry: {
    11: {
      image: require("@/assets/images/textbook-covers/chemistry-11.jpg"),
      mark: [0.526, 0.546],
      chapter: "Ch 1 · Basic concepts",
    },
    12: {
      image: require("@/assets/images/textbook-covers/chemistry-12.jpg"),
      mark: [0.508, 0.504],
      chapter: "Ch 1 · Solutions",
    },
  },
  mathematics: {
    11: {
      image: require("@/assets/images/textbook-covers/mathematics-11.jpg"),
      mark: [0.558, 0.575],
      chapter: "Ch 10 · Conic sections",
    },
    12: {
      image: require("@/assets/images/textbook-covers/mathematics-12.jpg"),
      mark: [0.664, 0.507],
      chapter: "Ch 13 · Probability",
    },
  },
  biology: {
    11: {
      image: require("@/assets/images/textbook-covers/biology-11.jpg"),
      mark: [0.48, 0.508],
      chapter: "Ch 8 · The cell",
    },
    12: {
      image: require("@/assets/images/textbook-covers/biology-12.jpg"),
      mark: [0.513, 0.48],
      chapter: "Ch 5 · DNA",
    },
  },
};

/** The design box every measurement below is in. */
const BOX_W = 140;
const BOX_H = 193;
/** The pictures are 3:4 (448 x 600). */
const IMG_ASPECT = 448 / 600;
const INK = "#FFFFFF";
const SHADE = "rgba(20,15,8,";
const ROMAN: Record<BookLevel, string> = { 11: "XI", 12: "XII" };

/** Onest Medium at 4.6 with 0.2 tracking, about this wide per character. */
const LABEL_CHAR_W = 2.6;

export const BookCover = memo(function BookCover({
  subject,
  level,
  w,
}: {
  subject: BookSubject;
  level: BookLevel;
  w: number;
}) {
  const k = w / BOX_W;
  const h = Math.round(w * (BOX_H / BOX_W));
  const book = BOOKS[subject][level];

  // The picture fills the cover's height and is cut evenly at the sides.
  const imgW = BOX_H * IMG_ASPECT;
  const px = (BOX_W - imgW) / 2 + book.mark[0] * imgW;
  const py = book.mark[1] * BOX_H;

  // The chapter callout: a ring on the marigold part, a leader up to a line
  // under the rule, and the label on whichever side leaves the ring clear.
  const RING = 6.2;
  const yl = 36.5;
  const labelLeft = px > BOX_W / 2;
  const labelW = book.chapter.length * LABEL_CHAR_W;
  const end = labelLeft ? 12 + labelW + 4 : BOX_W - 12 - labelW - 4;

  const titleSize = subject === "mathematics" ? 19 : 23;

  return (
    <View
      style={{
        width: w,
        height: h,
        borderRadius: 5 * k,
        boxShadow: [
          {
            offsetX: 0,
            offsetY: 6 * k,
            blurRadius: 14 * k,
            spreadDistance: -4 * k,
            color: "rgba(28,26,22,.35)",
          },
        ],
      }}
      accessible={false}
      // The cover is a picture, never a target: the image, the drawn frame and
      // the text must not catch a tap, so a tap anywhere on it reaches the
      // pressable book around it. (The printed covers' Skia canvas swallowed
      // taps, so only the name under each book opened it.)
      pointerEvents="none"
    >
      <View
        style={{
          width: w,
          height: h,
          borderRadius: 5 * k,
          overflow: "hidden",
          backgroundColor: "#3A4250",
        }}
      >
        <Image
          source={book.image}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          transition={0}
        />

        <LinearGradient
          colors={[`${SHADE}.38)`, `${SHADE}0)`]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 48 * k,
          }}
        />
        <LinearGradient
          colors={[`${SHADE}0)`, `${SHADE}.34)`]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 68 * k,
          }}
        />

        <Svg
          width={w}
          height={h}
          viewBox={`0 0 ${BOX_W} ${BOX_H}`}
          style={StyleSheet.absoluteFill}
        >
          <Line
            x1={12}
            y1={25}
            x2={128}
            y2={25}
            stroke={INK}
            strokeOpacity={0.38}
            strokeWidth={0.5}
          />
          <Circle
            cx={px}
            cy={py}
            r={RING}
            fill="none"
            stroke={INK}
            strokeOpacity={0.95}
            strokeWidth={0.55}
          />
          <Path
            d={`M${px} ${py - RING} L${px} ${yl} L${end} ${yl}`}
            fill="none"
            stroke={INK}
            strokeOpacity={0.75}
            strokeWidth={0.45}
          />
          <Circle cx={end} cy={yl} r={0.9} fill={INK} />
        </Svg>

        {/* Top row: the logo, and the class on the right. */}
        <View style={{ position: "absolute", left: 12 * k, top: 13.4 * k }}>
          <MonkLogo
            height={6.6 * k}
            tone="dark"
            learning="rgba(255,255,255,.72)"
          />
        </View>
        <Text
          allowFontScaling={false}
          style={[
            styles.small,
            {
              right: 12 * k,
              top: 19 * k - 5.6 * k * 0.95,
              fontSize: 5.6 * k,
              letterSpacing: 1.1 * k,
              opacity: 0.9,
            },
          ]}
        >
          CLASS {level}
        </Text>

        {/* The chapter the object comes from. */}
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.label,
            {
              top: (yl + 1.6) * k - 4.6 * k * 0.95,
              fontSize: 4.6 * k,
              letterSpacing: 0.2 * k,
            },
            labelLeft ? { left: 12 * k } : { right: 12 * k },
          ]}
        >
          {book.chapter}
        </Text>

        {/* The subject, in the textbook's own serif, over the class line. */}
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.title,
            {
              left: 12 * k,
              right: 8 * k,
              top: 171 * k - titleSize * k * 0.92,
              fontSize: titleSize * k,
              lineHeight: titleSize * k * 1.15,
            },
          ]}
        >
          {BOOK_NAME[subject]}
        </Text>
        <Text
          allowFontScaling={false}
          style={[
            styles.small,
            {
              left: 12 * k,
              top: 182 * k - 5.4 * k * 0.95,
              fontSize: 5.4 * k,
              letterSpacing: 1.1 * k,
              opacity: 0.8,
            },
          ]}
        >
          CLASS {ROMAN[level]} TEXTBOOK
        </Text>
      </View>
    </View>
  );
});

/** The box a cover of width `w` needs. */
export const bookSize = (w: number) => ({
  width: w,
  height: Math.round(w * (BOX_H / BOX_W)),
});

const styles = StyleSheet.create({
  small: {
    position: "absolute",
    fontFamily: "Onest_600SemiBold",
    color: INK,
    includeFontPadding: false,
  },
  label: {
    position: "absolute",
    fontFamily: "Onest_500Medium",
    color: INK,
    includeFontPadding: false,
  },
  title: {
    position: "absolute",
    fontFamily: "STIXTwoText_600SemiBold",
    color: INK,
    includeFontPadding: false,
  },
});
