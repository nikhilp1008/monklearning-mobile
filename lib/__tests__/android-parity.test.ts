/**
 * The helpers that make Android draw what iOS draws: shadows, hairlines and
 * the room a pinned button leaves under itself.
 */
const mockPlatform = { OS: 'ios', Version: 34 as number | string };
jest.mock('react-native', () => ({
  get Platform() {
    return mockPlatform;
  },
}));

import { footPadding } from '@/lib/foot-padding';
import { insetLine } from '@/lib/inset-line';
import { shadow, withAlpha } from '@/lib/shadow';

const on = (OS: string, Version: number | string = 34) => {
  mockPlatform.OS = OS;
  mockPlatform.Version = Version;
};

describe('shadow', () => {
  const card = { color: '#1C1A16', opacity: 0.2, radius: 10, y: 6, elevation: 4 };

  test('iOS keeps exactly the shadow props it had', () => {
    on('ios', '17.0');
    expect(shadow(card)).toEqual({
      shadowColor: '#1C1A16',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
    });
  });

  test('Android 9+ gets the same shadow in its own colour, not a grey elevation', () => {
    on('android', 30);
    expect(shadow(card)).toEqual({
      boxShadow: [{ offsetX: 0, offsetY: 6, blurRadius: 20, color: 'rgba(28,26,22,0.2)' }],
    });
  });

  test('Android 7 and 8 keep their elevation', () => {
    on('android', 26);
    expect(shadow(card)).toEqual({ elevation: 4 });
  });

  test('colours of every written form take the opacity', () => {
    expect(withAlpha('#EEA31F', 0.45)).toBe('rgba(238,163,31,0.45)');
    expect(withAlpha('#fff', 0.5)).toBe('rgba(255,255,255,0.5)');
    expect(withAlpha('rgba(28,26,22,0.5)', 0.5)).toBe('rgba(28,26,22,0.25)');
  });
});

describe('insetLine', () => {
  test('Android 7 to 9, which cannot draw inset shadows, gets a border', () => {
    on('android', 28);
    expect(insetLine(1.5, 'gold')).toEqual({ borderWidth: 1.5, borderColor: 'gold' });
  });

  test('everywhere else the inset shadow stays, taking no room', () => {
    on('android', 29);
    expect(insetLine(1, 'gold')).toHaveProperty('boxShadow');
    on('ios', '17.0');
    expect(insetLine(1, 'gold')).toHaveProperty('boxShadow');
  });
});

describe('footPadding', () => {
  test("iPhone tucks into the home indicator's strip", () => {
    on('ios');
    expect(footPadding(34, 16, 12)).toBe(18);
  });

  test("Android clears the navigation bar, gesture or buttons", () => {
    on('android');
    expect(footPadding(48, 16, 12)).toBe(60);
    expect(footPadding(24, 16, 12)).toBe(36);
  });
});
