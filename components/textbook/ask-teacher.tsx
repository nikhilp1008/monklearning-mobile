import { useClock } from '@shopify/react-native-skia';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { runOnJS, useAnimatedReaction, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { INK } from '@/components/classroom-chrome';
import { ThinkingArc } from '@/components/dock-face';
import { DockLight, type DockLightGeometry } from '@/components/dock-light';
import { DOCK_H0, DOCK_W0, useDockMotion, type DockPhase } from '@/components/dock-motion';
import { TeacherOrbPoster } from '@/components/teacher-orb-poster';
import type { TeacherId } from '@/lib/preferences';
import { hapticFloorReleased, hapticFloorTaken } from '@/lib/haptics';

/**
 * ASK TEACHER — the textbook's hold-to-ask pill. UI ONLY, NOT WIRED.
 *
 * The same pill as Ask follow-up on Practice (components/ask-follow-up.tsx):
 * the dock's plate, the footer light rising from the bottom of the screen,
 * the same sizes and the same words — "Hold to speak", "Listening…",
 * "Thinking…" — with one change: the face is the student's own teacher's orb
 * rather than the marigold mic, so the student is asking THEM. Only here; the
 * other pills keep the mic.
 *
 * The backend for asking about a textbook page does not exist yet, so a hold
 * records nothing and sends nothing. It plays the states so the design can be
 * judged on a device: held is listening, released is thinking for a moment,
 * then it says so honestly ("Coming soon") and comes back to rest. When the
 * endpoint exists, `onHoldEnd` is where the question goes, and the answer
 * board is Ask follow-up's own.
 *
 * `onHoldChange` tells the reader when a hold starts and ends, so it can
 * freeze the page: what is on screen is what the question is about.
 */
const THINK_MS = 1400;
const NOTICE_MS = 2200;

export function AskTeacher({
  teacher,
  onHoldChange,
}: {
  teacher: TeacherId;
  onHoldChange?: (holding: boolean) => void;
}) {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const [phase, setPhase] = useState<DockPhase>('idle');
  const [notice, setNotice] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  /** A ref, not `phase`: a quick tap's release can land before the render
   *  that set listening, and must still end the hold and unfreeze the page. */
  const holding = useRef(false);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // No microphone yet, so no voice level: a low steady one keeps the light
  // alive while held, as it would be with a quiet voice.
  const level = useSharedValue(0);
  const clock = useClock();
  const down = useSharedValue(false);
  const motion = useDockMotion({ phase, level, clock, down, stretch: false });

  // Placed against the SCREEN, as Practice's is: the light is a screen-wide
  // layer and has to know where the pill sits in the window.
  const blockRef = useRef<View>(null);
  const slotRef = useRef<View>(null);
  const [blockWin, setBlockWin] = useState<{ x: number; y: number; h: number } | null>(null);
  const [slotWin, setSlotWin] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const measure = useCallback(() => {
    blockRef.current?.measureInWindow((x, y, _w, h) => setBlockWin({ x, y, h }));
    slotRef.current?.measureInWindow((x, y, w, h) => setSlotWin({ x, y, w, h }));
  }, []);
  const geometry: DockLightGeometry | null = useMemo(() => {
    if (!blockWin || !slotWin) return null;
    return {
      left: blockWin.x,
      bottom: windowHeight - (blockWin.y + blockWin.h),
      rowCentreX: slotWin.x + slotWin.w / 2,
      cyFromBottom: windowHeight - (slotWin.y + slotWin.h / 2),
      flagSlot: 0,
    };
  }, [blockWin, slotWin, windowHeight]);

  const [lit, setLit] = useState(false);
  useAnimatedReaction(
    () => motion.value.live,
    (live, prev) => {
      if (prev && !live) runOnJS(setLit)(false);
    }
  );

  const anchorAnim = useAnimatedStyle(() => {
    const m = motion.value;
    return { width: m.w - 6 * m.pr, height: DOCK_H0 - 2 * m.pr };
  });
  const orbAnim = useAnimatedStyle(() => ({ transform: [{ scale: motion.value.ds }] }));

  const begin = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setNotice(false);
    measure();
    down.value = true;
    level.value = 0.25;
    setLit(true);
    hapticFloorTaken();
    holding.current = true;
    setPhase('listening');
    onHoldChange?.(true);
  };
  const end = () => {
    down.value = false;
    level.value = 0;
    if (!holding.current) return;
    holding.current = false;
    hapticFloorReleased();
    setPhase('thinking');
    timers.current.push(
      setTimeout(() => {
        setPhase('idle');
        setNotice(true);
        onHoldChange?.(false);
        timers.current.push(setTimeout(() => setNotice(false), NOTICE_MS));
      }, THINK_MS)
    );
  };

  const listening = phase === 'listening';
  const thinking = phase === 'thinking';
  const label = listening ? 'Listening…' : thinking ? 'Thinking…' : 'Ask teacher';
  const hint = listening ? 'Release to stop' : thinking ? 'One moment' : notice ? 'Coming soon' : 'Hold to speak';

  return (
    <View ref={blockRef} style={styles.column} onLayout={measure}>
      {lit && geometry ? <DockLight width={windowWidth} motion={motion} geometry={geometry} /> : null}
      <View ref={slotRef} style={styles.slot} onLayout={measure}>
        <Animated.View style={anchorAnim}>
          <Pressable
            style={styles.face}
            onPressIn={() => {
              if (thinking) return;
              begin();
            }}
            onPressOut={end}
            accessibilityRole="button"
            accessibilityLabel="Hold to ask your teacher about this page">
            <Animated.View style={[styles.orb, orbAnim]}>
              <TeacherOrbPoster teacher={teacher} size={40} />
              <ThinkingArc motion={motion} on={thinking} />
            </Animated.View>
            <Text style={styles.label} numberOfLines={1}>
              {label}
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      <Text style={styles.hint} numberOfLines={1}>
        {hint}
      </Text>
    </View>
  );
}

/** Ask follow-up's plate, verbatim, so the two pills are one material. */
const PLATE = {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: 'rgba(28,26,22,.10)',
  boxShadow: [
    { offsetX: 0, offsetY: 18, blurRadius: 36, spreadDistance: -20, color: 'rgba(28,26,22,0.5)' },
    { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
  ],
} as const;

const styles = StyleSheet.create({
  column: { alignItems: 'center', gap: 9 },
  slot: { width: DOCK_W0, height: DOCK_H0, alignItems: 'center', justifyContent: 'center' },
  face: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 99,
    paddingLeft: 6,
    ...PLATE,
  },
  orb: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: 'Onest_700Bold', fontSize: 14, letterSpacing: -0.14, color: INK, minWidth: 118 },
  hint: {
    textAlign: 'center',
    fontFamily: 'Onest_700Bold',
    fontSize: 10.5,
    letterSpacing: 0.84,
    textTransform: 'uppercase',
    color: '#3D3A33',
  },
});
