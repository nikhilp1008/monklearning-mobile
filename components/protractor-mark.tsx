import Svg, { Circle } from 'react-native-svg';

import { colors } from '@/constants/brand';

type ProtractorMarkProps = {
  size?: number;
  ringColor?: string;
  dotColor?: string;
  /** Outer ring + center dot only, no inner ring — used for compact icon chips. */
  simplified?: boolean;
};

export function ProtractorMark({
  size = 38,
  ringColor = colors.ink,
  dotColor = colors.marigold,
  simplified = false,
}: ProtractorMarkProps) {
  return (
    <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
      <Circle
        cx={60}
        cy={60}
        r={36}
        stroke={ringColor}
        strokeWidth={11}
        strokeLinecap="round"
        strokeDasharray="52 23.4"
        transform="rotate(-90 60 60)"
      />
      {!simplified && (
        <Circle
          cx={60}
          cy={60}
          r={19}
          stroke={ringColor}
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray="21.8 18"
          transform="rotate(-30 60 60)"
        />
      )}
      <Circle cx={60} cy={60} r={6} fill={dotColor} />
    </Svg>
  );
}
