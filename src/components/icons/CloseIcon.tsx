import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-x"
      {...props}>
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
};
