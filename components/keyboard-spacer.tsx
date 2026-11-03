import { useEffect, type RefObject } from 'react';
import { Keyboard, Platform, TextInput, type ScrollView } from 'react-native';
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';

/**
 * ROOM FOR THE KEYBOARD, ON ANDROID.
 *
 * Every screen with a text field wraps itself in a KeyboardAvoidingView that
 * pads on iOS and does nothing on Android. That was right when Android shrank
 * the whole window to make room for the keyboard. With edge-to-edge (on in
 * app.json, and enforced from Android 15) it no longer does: the keyboard is
 * drawn over the app, and the field or the button under it disappears.
 *
 * Put this as the LAST child of the column whose foot must clear the keyboard.
 * On Android it grows to the keyboard's height as the keyboard rises, pushing
 * the foot up with it; Reanimated reads the keyboard's own height and knows
 * the app is edge-to-edge, so the number is exact. On iOS it renders nothing,
 * and the KeyboardAvoidingView that already works there is left alone.
 *
 * `bottomInset`: whatever bottom padding the column already has for the
 * navigation bar. The keyboard covers that strip too, so it is taken off
 * rather than counted twice.
 */
export function KeyboardSpacer({
  bottomInset = 0,
  ios = false,
}: {
  bottomInset?: number;
  /** Also on iOS, for a screen with no KeyboardAvoidingView of its own. */
  ios?: boolean;
}) {
  if (Platform.OS !== 'android' && !ios) return null;
  return <Spacer bottomInset={bottomInset} />;
}

function Spacer({ bottomInset }: { bottomInset: number }) {
  const keyboard = useAnimatedKeyboard();
  const style = useAnimatedStyle(() => ({
    height: Math.max(0, keyboard.height.value - bottomInset),
  }));
  return <Animated.View pointerEvents="none" style={style} />;
}

/**
 * A FIELD PART-WAY DOWN A SCROLLING PAGE: Practice's and the mock paper's
 * numeric answer box. A spacer under the page is not enough there, the page
 * has to scroll the field up to where it can be seen.
 *
 * When the keyboard has opened, the focused field is scrolled to sit `gap`
 * above it, using the scroll view's own keyboard-aware scroll. That function
 * assumes the scroll view starts at the top of the screen, so where it
 * actually starts is measured and added. Put a <KeyboardSpacer /> at the end
 * of the scroll view's content as well, or a field near the bottom of the
 * page has nowhere to scroll to.
 *
 * iOS does the same thing itself: give the scroll view
 * `automaticallyAdjustKeyboardInsets`.
 */
export function useScrollFocusedFieldAboveKeyboard(
  scroll: RefObject<ScrollView | null>,
  gap = 24
) {
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const sub = Keyboard.addListener('keyboardDidShow', () => {
      const field = TextInput.State.currentlyFocusedInput();
      const view = scroll.current;
      if (!field || !view) return;
      view.getNativeScrollRef()?.measureInWindow((_x, y) => {
        view.scrollResponderScrollNativeHandleToKeyboard(field, gap + y, true);
      });
    });
    return () => sub.remove();
  }, [scroll, gap]);
}
