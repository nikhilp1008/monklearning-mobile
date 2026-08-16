import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';

type SnapIconProps = {
  size?: number;
  color?: string;
};

export function SnapIcon({ size = 20, color = colors.ink }: SnapIconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4 8.5V7a3 3 0 0 1 3-3h1.5"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 4H17a3 3 0 0 1 3 3v1.5"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 15.5V17a3 3 0 0 1-3 3h-1.5"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 20H7a3 3 0 0 1-3-3v-1.5"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={4.6} stroke={color} strokeWidth={2.2} />
      <Circle cx={12} cy={12} r={1.7} fill={colors.marigold} />
    </Svg>
  );
}
