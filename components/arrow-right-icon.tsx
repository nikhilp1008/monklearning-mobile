import Svg, { Path } from 'react-native-svg';

type ArrowRightIconProps = {
  size?: number;
  color: string;
};

export function ArrowRightIcon({ size = 15, color }: ArrowRightIconProps) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
