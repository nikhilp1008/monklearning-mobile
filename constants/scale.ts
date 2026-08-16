// Proportional scaling against the design's reference canvas (see
// mobile-app-design/README.md — "390×844 pt reference viewport"), so every
// screen keeps the same wrap points, density, and section proportions as the
// design mock regardless of the actual device's width/height.
//
// The reference mock budgets its own ~38pt status-bar row at the top and
// ~13pt of footer breathing room below its home-indicator bar. A real
// device's safe-area insets (notch/Dynamic Island, home indicator) replace
// both of those, so the vertical ratio is computed from the space actually
// left over after insets — not the raw window height — or content overflows
// past the footer on devices with larger insets (Dynamic Island phones).
import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const REFERENCE_WIDTH = 390;
const REFERENCE_HEIGHT = 844;
const REFERENCE_TOP_CHROME = 38;
const REFERENCE_BOTTOM_CHROME = 13;
const REFERENCE_CONTENT_HEIGHT = REFERENCE_HEIGHT - REFERENCE_TOP_CHROME - REFERENCE_BOTTOM_CHROME;

// Landscape reference canvas (844×390) — classroom/lesson-player screens.
// Unlike the portrait screens, these have no separate "fake status bar" row
// budgeted into the mock (their top bar is real in-app UI, not device
// chrome), so no chrome subtraction is applied here.
const LANDSCAPE_REFERENCE_WIDTH = 844;
const LANDSCAPE_REFERENCE_HEIGHT = 390;

function useScaleFns(referenceWidth: number, referenceContentHeight: number) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const availableHeight = height - insets.top - insets.bottom;

  return useMemo(() => {
    const hScale = width / referenceWidth;
    const vScale = availableHeight / referenceContentHeight;
    return {
      scale: (size: number) => hScale * size,
      verticalScale: (size: number) => vScale * size,
    };
  }, [width, availableHeight, referenceWidth, referenceContentHeight]);
}

export function useScale() {
  return useScaleFns(REFERENCE_WIDTH, REFERENCE_CONTENT_HEIGHT);
}

export function useLandscapeScale() {
  return useScaleFns(LANDSCAPE_REFERENCE_WIDTH, LANDSCAPE_REFERENCE_HEIGHT);
}
