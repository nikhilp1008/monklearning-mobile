import Svg, { Path } from 'react-native-svg';

type CheckIconProps = {
  size?: number;
  color: string;
  strokeWidth?: number;
};

export function CheckIcon({ size = 15, color, strokeWidth = 3 }: CheckIconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M20 6 9 17l-5-5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
