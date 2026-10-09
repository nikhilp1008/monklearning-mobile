import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View, type ImageSourcePropType } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, Ellipse, Path, RadialGradient, Stop } from 'react-native-svg';

import { MonkLogo } from '@/components/monk-logo';
import { Skeleton } from '@/components/skeleton';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { READ_LINE, READ_SIZE } from '@/constants/reading';
import { useScale } from '@/constants/scale';
import { friendlyLoadError } from '@/lib/api';
import { getCatalogue, type CatalogueSubject } from '@/lib/drona';
import { hapticSwitched } from '@/lib/haptics';
import { getProfile } from '@/lib/profile';
import { isChapterReady, textbookSubjects } from '@/lib/textbooks';

/**
 * THE TEXTBOOKS SHELF — the tab's front page, from `design_handoff_textbooks_shelf`
 * ("2a"). Swipe between book covers; the heading is the book you are on; its
 * chapters are the list below, and scrolling slides that list up as a sheet
 * while the covers sink and fade behind it. A chapter opens the reader exactly
 * as the old chapter list did — everything past this page is unchanged.
 *
 * WHAT IS THE APP'S RATHER THAN THE HANDOFF'S, and why:
 *   Type. The handoff is set in Anek Latin with Georgia numbers; the app is
 *     Onest throughout and has one page-title tier (24) and one reading size
 *     (15/24). The covers keep their own display size.
 *   The class. The handoff is a Class 11 shelf with no way to change it; a
 *     Class 11 / 12 selector sits top-right, as on the live-class chapter list,
 *     and every cover band and list follows it.
 *   The books. The student's exam decides them (JEE never sees Biology, NEET
 *     never Maths), from the same helper the rest of the app uses.
 *   The chapters. The server's catalogue, not the handoff's typed-in lists, so
 *     Textbooks and Learn can never offer different syllabuses. A book with
 *     nothing written for the chosen class says so with the handoff's own
 *     "BEING WRITTEN" strip, and its rows are dimmed and inert.
 */

type ClassLevel = 11 | 12;

type Book = {
  key: string;
  name: string;
  bg: string;
  fg: string;
  band: string;
  wm2: string;
  art: ImageSourcePropType;
};

/** The handoff's cover table, in its order. */
const BOOKS: Book[] = [
  {
    key: 'physics',
    name: 'Physics',
    bg: '#C23B2B',
    fg: '#FFFFFF',
    band: 'rgba(0,0,0,.16)',
    wm2: 'rgba(255,255,255,.74)',
    art: require('@/assets/images/textbooks/cover-physics.png'),
  },
  {
    key: 'mathematics',
    name: 'Maths',
    bg: '#EEA31F',
    fg: '#FFFFFF',
    band: 'rgba(0,0,0,.08)',
    wm2: 'rgba(255,255,255,.8)',
    art: require('@/assets/images/textbooks/cover-maths.png'),
  },
  {
    key: 'chemistry',
    name: 'Chemistry',
    bg: '#17784A',
    fg: '#FFFFFF',
    band: 'rgba(0,0,0,.16)',
    wm2: 'rgba(255,255,255,.74)',
    art: require('@/assets/images/textbooks/cover-chemistry.png'),
  },
  {
    key: 'biology',
    name: 'Biology',
    bg: '#2E6A8E',
    fg: '#FFFFFF',
    band: 'rgba(0,0,0,.16)',
    wm2: 'rgba(255,255,255,.74)',
    art: require('@/assets/images/textbooks/cover-biology.png'),
  },
];

/** A book settling into place: a spring with no bounce that starts at the
 *  finger's own speed, so a slow swipe settles slowly and a flick carries. */
const SETTLE = { mass: 1, stiffness: 120, damping: 23 };
/** A fast flick turns the page even when it travelled less than 50pt. */
const FLICK = 450;
/** The same curve's shape, as a plain function a worklet can call. */
const easeOut = (t: number) => {
  'worklet';
  return 1 - Math.pow(1 - t, 3);
};
/** The scroll offset the sheet pins at: the stage less the sheet's overlap. */
const PIN = 334;
const FOOTER =
  'Every chapter here was written by the strongest models available, then recomputed and checked against the syllabus, question by question and formula by formula.';

export function TextbooksShelf() {
  const { scale } = useScale();
  const { width } = useWindowDimensions();
  /** The handoff's layout is in 390-wide points; covers and their spacing
   *  scale with the screen like every other screen on `useScale`. */
  const u = width / 390;
  const s = useMemo(() => createStyles(scale, u), [scale, u]);

  const [examSubjects, setExamSubjects] = useState<string[] | null>(null);
  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [classLevel, setClassLevel] = useState<ClassLevel>(11);
  const [menuOpen, setMenuOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [viewport, setViewport] = useState(0);
  const [headerBottom, setHeaderBottom] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getProfile()
      .then((p) => !cancelled && setExamSubjects(textbookSubjects(p.exam)))
      // A profile that will not load is not a reason to show nothing: the
      // JEE trio is the safe default, as the old grid had it.
      .catch(() => !cancelled && setExamSubjects(['physics', 'chemistry', 'mathematics']));
    getCatalogue()
      .then((c) => !cancelled && setCatalogue(c))
      .catch((err) => !cancelled && setError(friendlyLoadError(err, 'chapters')));
    return () => {
      cancelled = true;
    };
  }, []);

  const books = useMemo(
    () => (examSubjects ? BOOKS.filter((b) => examSubjects.includes(b.key)) : []),
    [examSubjects]
  );
  const book = books[Math.min(idx, Math.max(0, books.length - 1))];

  const chaptersOf = (key: string) =>
    (catalogue ?? [])
      .find((g) => g.subject.trim().toLowerCase() === key)
      ?.chapters.filter((c) => (c.class_level ?? 11) === classLevel) ?? [];
  const chapters = book ? chaptersOf(book.key) : [];
  const ready = (key: string) => chaptersOf(key).some((c) => isChapterReady(key, classLevel, c.name));

  /* ---- the carousel ---- */

  const pos = useSharedValue(0);
  const drag = useSharedValue(0);
  const lastDrag = useRef(0);
  const count = useSharedValue(0);
  useEffect(() => {
    count.value = books.length;
  }, [books.length, count]);

  /** Which way the last change went, for the heading and rows to come in from. */
  const dir = useSharedValue(1);
  const idxRef = useRef(0);
  idxRef.current = idx;
  /** The state side of a change. The covers are already moving by the time
   *  this runs, so the heading and list re-rendering cannot hold them up. */
  const settle = (n: number) => {
    if (n === idxRef.current) return;
    dir.value = n > idxRef.current ? 1 : -1;
    hapticSwitched();
    setIdx(n);
  };
  const go = (next: number) => {
    const n = Math.max(0, Math.min(books.length - 1, next));
    pos.value = withSpring(n, SETTLE);
    settle(n);
  };
  const markDrag = () => {
    lastDrag.current = Date.now();
  };

  const step = 176 * u;
  const pan = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-12, 12])
    .onStart(() => {
      // Catch a book that is still settling where it is.
      cancelAnimation(pos);
    })
    .onUpdate((e) => {
      let dx = e.translationX;
      // Past the first or last book the drag resists.
      const at = Math.round(pos.value);
      if ((at === 0 && dx > 0) || (at === count.value - 1 && dx < 0)) dx *= 0.3;
      drag.value = dx;
    })
    .onEnd((e) => {
      const at = Math.round(pos.value);
      let next = at;
      if (e.translationX < -50 || e.velocityX < -FLICK) next = at + 1;
      else if (e.translationX > 50 || e.velocityX > FLICK) next = at - 1;
      next = Math.max(0, Math.min(count.value - 1, next));
      // Hand the drag over to the position so the covers do not jump back,
      // then settle here, on the UI thread, carrying the finger's speed.
      pos.value = pos.value - drag.value / step;
      drag.value = 0;
      const v = next === at ? 0 : Math.max(-8, Math.min(8, -e.velocityX / step));
      pos.value = withSpring(next, { ...SETTLE, velocity: v });
      runOnJS(markDrag)();
      runOnJS(settle)(next);
    });

  /** A tap that ended a drag is not a tap. */
  const tapCover = (i: number) => {
    if (Date.now() - lastDrag.current < 350) return;
    go(i);
  };

  /* ---- the scroll-linked collapse ---- */

  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    y.value = e.contentOffset.y;
  });
  const stageStyle = useAnimatedStyle(() => {
    const yy = Math.max(0, y.value);
    const k = Math.min(1, yy / 320);
    const e = k * k * (3 - 2 * k);
    return { opacity: 1 - e, transform: [{ translateY: yy * 0.5 }, { scale: 1 - 0.1 * e }] };
  });
  const dotsStyle = useAnimatedStyle(() => ({ opacity: Math.max(0, 1 - y.value / 70) }));
  const sheetStyle = useAnimatedStyle(() => {
    const k = Math.min(1, Math.max(0, y.value) / 320);
    const e = k * k * (3 - 2 * k);
    const r = 22 * u * (1 - e);
    return { borderTopLeftRadius: r, borderTopRightRadius: r };
  });
  const lineStyle = useAnimatedStyle(() => ({
    opacity: interpolate(y.value, [290, 330], [0, 1], Extrapolation.CLAMP),
  }));

  /* ---- a book change: heading and rows come in from the swipe's side ---- */

  const enter = useSharedValue(1);
  useEffect(() => {
    enter.value = 0;
    enter.value = withTiming(1, { duration: 360 + 8 * 14, easing: Easing.linear });
  }, [idx, classLevel, enter]);
  const headStyle = useAnimatedStyle(() => {
    const t = easeOut(Math.min(1, (enter.value * (360 + 112)) / 300));
    return { opacity: t, transform: [{ translateX: (1 - t) * 18 * dir.value }] };
  });

  if (!examSubjects || books.length === 0 || !book) {
    return (
      <SafeAreaView style={s.screen} edges={['top']}>
        <View style={s.header}>
          <Text style={s.title}>Textbooks</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <View style={s.header} onLayout={(e) => setHeaderBottom(e.nativeEvent.layout.y + e.nativeEvent.layout.height)}>
        <Animated.Text style={[s.title, headStyle]}>{book.name}</Animated.Text>
        {/* The one thing the handoff left out: which class's books these are. */}
        <Pressable
          hitSlop={10}
          style={s.classPicker}
          accessibilityRole="button"
          accessibilityLabel={`Class ${classLevel}. Change class`}
          onPress={() => setMenuOpen((o) => !o)}>
          <Text style={s.classText}>Class {classLevel}</Text>
          <View style={menuOpen ? s.flipped : undefined}>
            <Chevron size={scale(13)} />
          </View>
        </Pressable>
        <Animated.View pointerEvents="none" style={[s.hairline, lineStyle]} />
      </View>

      <Animated.ScrollView
        style={s.scroll}
        onLayout={(e) => setViewport(e.nativeEvent.layout.height)}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        // Rests on the books or on the pinned sheet, never half-collapsed;
        // past the pin it scrolls freely.
        snapToOffsets={[0, PIN * u]}
        snapToEnd={false}
        decelerationRate="fast">
        <GestureDetector gesture={pan}>
          <View style={s.stage}>
            <Animated.View style={[StyleSheet.absoluteFill, stageStyle]}>
              {/* The floor under the centre book: the handoff's radial ellipse. */}
              <Svg style={s.floor} pointerEvents="none">
                <Defs>
                  <RadialGradient id="shelfFloor" cx="50%" cy="50%" rx="50%" ry="50%">
                    <Stop offset="0" stopColor="#1C1914" stopOpacity={0.2} />
                    <Stop offset="0.7" stopColor="#1C1914" stopOpacity={0} />
                  </RadialGradient>
                </Defs>
                <Ellipse cx={115 * u} cy={12 * u} rx={115 * u} ry={12 * u} fill="url(#shelfFloor)" />
              </Svg>
              {books.map((b, i) => (
                <Cover
                  key={b.key}
                  book={b}
                  index={i}
                  z={10 - Math.abs(i - idx)}
                  pos={pos}
                  drag={drag}
                  step={step}
                  u={u}
                  classLevel={classLevel}
                  chapterCount={chaptersOf(b.key).length}
                  soon={!!catalogue && !ready(b.key)}
                  onPress={() => tapCover(i)}
                />
              ))}
              <Animated.View style={[s.dots, dotsStyle]}>
                {books.map((b, i) => (
                  <Pressable
                    key={b.key}
                    hitSlop={{ top: 14, bottom: 14, left: 4, right: 4 }}
                    onPress={() => go(i)}
                    accessibilityLabel={`Show ${b.name}`}>
                    <View style={[s.dot, i === idx && s.dotOn]} />
                  </Pressable>
                ))}
              </Animated.View>
            </Animated.View>
          </View>
        </GestureDetector>

        <Animated.View style={[s.sheet, { minHeight: viewport || undefined }, sheetStyle]}>
          {error ? (
            <Text style={s.state}>{error}</Text>
          ) : !catalogue ? (
            <View style={s.loading}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Skeleton key={i} delay={i * 80} style={s.skeletonRow} />
              ))}
            </View>
          ) : chapters.length === 0 ? (
            <Text style={s.state}>No chapters here yet.</Text>
          ) : (
            chapters.map((c, i) => {
              const open = isChapterReady(book.key, classLevel, c.name);
              return (
                <ChapterRow
                  key={`${book.key}-${classLevel}-${c.id}`}
                  n={i + 1}
                  title={c.name}
                  open={open}
                  enter={enter}
                  dir={dir}
                  delay={Math.min(i, 8) * 14}
                  styles={s}
                  chevron={scale(15)}
                  onPress={() =>
                    router.push({
                      pathname: '/textbook-reader',
                      // Exactly what the old chapter list sent, so the reader
                      // is reached the same way and needs no change.
                      params: {
                        subject: book.key,
                        classLevel: String(classLevel),
                        title: c.name,
                        number: String(i + 1).padStart(2, '0'),
                      },
                    })
                  }
                />
              );
            })
          )}
          <Text style={s.footer}>{FOOTER}</Text>
        </Animated.View>
      </Animated.ScrollView>
      {menuOpen && <Pressable style={s.scrim} onPress={() => setMenuOpen(false)} accessibilityLabel="Close menu" />}
      {/* Last, so it is above the scroll content for touches as well as
          drawing; and at the page's level, not inside the header: a child hanging below
          its parent's box draws there but cannot be tapped on iOS. */}
        {menuOpen && (
          <View style={[s.menu, { top: headerBottom }]}>
            {([11, 12] as const).map((c) => (
              <Pressable
                key={c}
                style={({ pressed }) => [s.menuRow, pressed && s.menuRowPressed]}
                onPress={() => {
                  setMenuOpen(false);
                  if (c !== classLevel) {
                    hapticSwitched();
                    setClassLevel(c);
                  }
                }}>
                <Text style={[s.menuText, c === classLevel && s.menuTextOn]}>Class {c}</Text>
                {c === classLevel ? <Tick size={scale(14)} /> : null}
              </Pressable>
            ))}
          </View>
        )}


    </SafeAreaView>
  );
}

/** One cover on the stage, placed by its distance from the current book. */
function Cover({
  book,
  index,
  z,
  pos,
  drag,
  step,
  u,
  classLevel,
  chapterCount,
  soon,
  onPress,
}: {
  book: Book;
  index: number;
  /** Stacking, from React rather than per frame: zIndex is a layout prop and
   *  animating it takes the slow path every frame. */
  z: number;
  pos: SharedValue<number>;
  drag: SharedValue<number>;
  step: number;
  u: number;
  classLevel: ClassLevel;
  chapterCount: number;
  soon: boolean;
  onPress: () => void;
}) {
  const style = useAnimatedStyle(() => {
    // The drag follows the finger: dragging left (negative) brings the next
    // book in, the same direction `pos` moves when the drag is handed over.
    const d = index - pos.value + drag.value / step;
    const ad = Math.abs(d);
    return {
      opacity: interpolate(ad, [0, 1, 1.6], [1, 0.5, 0], Extrapolation.CLAMP),
      transform: [{ translateX: d * step }, { scale: interpolate(ad, [0, 1], [1, 0.8], Extrapolation.CLAMP) }],
    };
  });
  const w = 206 * u;
  const h = 278 * u;
  return (
    <Animated.View
      style={[
        { position: 'absolute', left: '50%', top: 14 * u, width: w, height: h, marginLeft: -w / 2, zIndex: z },
        style,
      ]}>
      <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={`${book.name}, Class ${classLevel}`}>
        <View
          style={{
            width: w,
            height: h,
            backgroundColor: book.bg,
            borderTopLeftRadius: 3 * u,
            borderBottomLeftRadius: 3 * u,
            borderTopRightRadius: 11 * u,
            borderBottomRightRadius: 11 * u,
            overflow: 'hidden',
            boxShadow: [
              { offsetX: 0, offsetY: 20 * u, blurRadius: 30 * u, spreadDistance: -16 * u, color: 'rgba(28,25,20,.55)' },
            ],
          }}>
          {/* The art first, so the band and title sit over it. */}
          <Image
            source={book.art}
            resizeMode="contain"
            style={{ position: 'absolute', left: 10 * u, top: 40 * u, width: w - 10 * u, height: 184 * u }}
          />
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 40 * u,
              backgroundColor: book.band,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 20 * u,
              paddingRight: 13 * u,
            }}>
            {/* The app's own lockup, so its symbol-to-word balance is the one
                tuned on device rather than one drawn for this cover. */}
            {/* White dot on every cover: a marigold one vanishes on the Maths cover,
                and one logo across the shelf beats a different dot per book. */}
            <MonkLogo height={12 * u} tone="dark" learning={book.wm2} core="#FFFFFF" />
            <Text
              style={{
                fontFamily: 'Onest_800ExtraBold',
                fontSize: 9.5 * u,
                letterSpacing: 0.16 * 9.5 * u,
                color: book.fg,
              }}>
              CLASS {classLevel}
            </Text>
          </View>
          <View style={{ position: 'absolute', left: 20 * u, right: 14 * u, bottom: 16 * u }}>
            <Text
              style={{
                fontFamily: 'Onest_700Bold',
                fontSize: 30 * u,
                lineHeight: 32 * u,
                letterSpacing: -0.03 * 30 * u,
                color: book.fg,
              }}>
              {book.name}
            </Text>
            <Text style={{ marginTop: 6 * u, fontFamily: 'Onest_600SemiBold', fontSize: 13 * u, color: book.fg }}>
              {chapterCount} chapters
            </Text>
          </View>
          {soon ? (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 132 * u,
                paddingVertical: 9 * u,
                backgroundColor: '#FFFEFB',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Onest_800ExtraBold',
                  fontSize: 11 * u,
                  letterSpacing: 0.18 * 11 * u,
                  color: colors.ink,
                }}>
                BEING WRITTEN
              </Text>
            </View>
          ) : null}
          {/* The spine: a darker band and a highlight just inside it. Drawn
              last — on iOS an inset shadow sits under a view's children. */}
          <View
            pointerEvents="none"
            style={{
              ...StyleSheet.absoluteFillObject,
              boxShadow: [
                { offsetX: 8 * u, offsetY: 0, blurRadius: 0, color: 'rgba(0,0,0,.16)', inset: true },
                { offsetX: 9 * u, offsetY: 0, blurRadius: 0, color: 'rgba(255,255,255,.14)', inset: true },
              ],
            }}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

function ChapterRow({
  n,
  title,
  open,
  enter,
  dir,
  delay,
  styles,
  chevron,
  onPress,
}: {
  n: number;
  title: string;
  open: boolean;
  enter: SharedValue<number>;
  dir: SharedValue<number>;
  delay: number;
  styles: ReturnType<typeof createStyles>;
  chevron: number;
  onPress: () => void;
}) {
  const style = useAnimatedStyle(() => {
    const t = easeOut(Math.min(1, Math.max(0, (enter.value * (360 + 112) - delay) / 360)));
    return { opacity: t * (open ? 1 : 0.45), transform: [{ translateX: (1 - t) * 28 * dir.value }] };
  });
  return (
    <Animated.View style={style}>
      <Pressable
        disabled={!open}
        onPress={onPress}
        style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        accessibilityRole="button"
        accessibilityState={{ disabled: !open }}>
        <Text style={styles.rowNumber}>{n}</Text>
        <Text style={styles.rowTitle}>{title}</Text>
        <Svg viewBox="0 0 16 16" width={chevron} height={chevron} fill="none">
          <Path d="M6 3l5 5-5 5" stroke="#9C988C" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </Animated.View>
  );
}

function Chevron({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M4 6l4 4 4-4" stroke={colors.ink} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function Tick({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M3.5 8.5l3 3 6-7" stroke={colors.ink} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function createStyles(scale: (n: number) => number, u: number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
      zIndex: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: scale(12),
      paddingBottom: scale(16),
      paddingHorizontal: scale(24),
      backgroundColor: '#FFFFFF',
    },
    title: pageTitle(scale),
    classPicker: { flexDirection: 'row', alignItems: 'center', gap: scale(5) },
    classText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(14), color: colors.ink },
    flipped: { transform: [{ rotate: '180deg' }] },
    hairline: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 1,
      backgroundColor: 'rgba(28,25,20,.1)',
      boxShadow: [{ offsetX: 0, offsetY: 6, blurRadius: 14, color: 'rgba(28,25,20,.07)' }],
    },
    menu: {
      position: 'absolute',
      zIndex: 7,
      right: scale(16),
      minWidth: scale(160),
      paddingVertical: scale(6),
      borderRadius: scale(16),
      backgroundColor: '#FFFFFF',
      boxShadow: [
        { offsetX: 0, offsetY: 12, blurRadius: 30, spreadDistance: -8, color: 'rgba(28,25,20,.28)' },
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,25,20,.08)', inset: true },
      ],
    },
    menuRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: scale(11),
      paddingHorizontal: scale(18),
      minHeight: 44,
    },
    /** A touch dims the row rather than tinting it: no colour that is not the brand's. */
    menuRowPressed: { opacity: 0.5 },
    menuText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(15), color: colors.ink },
    menuTextOn: { fontFamily: 'Onest_700Bold' },
    scrim: { ...StyleSheet.absoluteFillObject, zIndex: 5, backgroundColor: 'rgba(28,25,20,.12)' },

    scroll: { flex: 1 },
    stage: { height: 356 * u, overflow: 'hidden' },
    floor: {
      position: 'absolute',
      left: '50%',
      top: 282 * u,
      width: 230 * u,
      height: 24 * u,
      marginLeft: -115 * u,
    },
    dots: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 314 * u,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 6,
    },
    dot: { width: 6, height: 6, borderRadius: 99, backgroundColor: '#D8D2C2' },
    dotOn: { width: 20, backgroundColor: colors.ink },

    sheet: {
      zIndex: 2,
      marginTop: -22 * u,
      paddingTop: 8,
      paddingBottom: scale(130),
      backgroundColor: '#FFFFFF',
      boxShadow: [{ offsetX: 0, offsetY: -12, blurRadius: 26, spreadDistance: -18, color: 'rgba(28,25,20,.35)' }],
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      minHeight: 54,
      paddingVertical: scale(13),
      paddingLeft: scale(24),
      paddingRight: scale(22),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,25,20,.07)',
    },
    /** A touch dims the row rather than tinting it, as the email screen's
     *  "Change" does: no colour that is not the brand's. */
    rowPressed: { opacity: 0.5 },
    /** Small and grey, as the live-class chapter list numbers its rows. */
    rowNumber: {
      width: scale(24),
      textAlign: 'right',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      color: '#B3AB98',
      fontVariant: ['tabular-nums'],
    },
    rowTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_500Medium',
      fontSize: READ_SIZE,
      lineHeight: READ_LINE - 2,
      color: colors.ink,
    },
    loading: { paddingHorizontal: scale(24), paddingTop: scale(12), gap: scale(18) },
    skeletonRow: { height: scale(16), borderRadius: 8, width: '78%' },
    state: {
      paddingHorizontal: scale(24),
      paddingVertical: scale(24),
      fontFamily: 'Onest_400Regular',
      fontSize: READ_SIZE,
      lineHeight: READ_LINE,
      color: colors.slate,
    },
    footer: {
      marginTop: scale(10),
      marginHorizontal: scale(24),
      paddingTop: scale(18),
      fontFamily: 'Onest_400Regular',
      fontSize: READ_SIZE,
      lineHeight: READ_LINE,
      color: '#6E6A60',
    },
  });
}
