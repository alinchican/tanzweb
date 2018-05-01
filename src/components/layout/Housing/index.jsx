import HousingInside from './Inside/index';
import HousingOutside from './Outside/index';
import React from 'react';

const Housing = () => {
  const elementName = `Housing`;

  return (
    <g id={elementName} transform="translate(58.000000, 24.000000)">
      <rect
        fill="#272727"
        height="435"
        id={`${elementName}-background`}
        width="812"
        x="0"
        y="0"
      />

      <HousingOutside />
      <HousingInside />
    </g>
  );
};

export default Housing;
