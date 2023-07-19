import React from 'react';

interface FacebookIconProps {
  size: number; // Size prop representing the width and height of the SVG
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({ size = 18 }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fillRule="nonzero"
  >
    <g fill="#858699" fillRule="nonzero">
      <g transform="scale(8.53333,8.53333)">
        <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h10v-9h-3v-3h3v-1.611c0,-3.05 1.486,-4.389 4.021,-4.389c1.214,0 1.856,0.09 2.16,0.131v2.869h-1.729c-1.076,0 -1.452,0.568 -1.452,1.718v1.282h3.154l-0.428,3h-2.726v9h5c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2z"></path>
      </g>
    </g>
  </svg>
);
