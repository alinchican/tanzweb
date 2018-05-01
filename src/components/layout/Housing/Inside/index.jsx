import HousingInsideHorizontalMargin from './HorizontalMargin';
import React from 'react';

const HousingInside = () => {
  const elementName = `HousingInside`;

  return (
    <g id={elementName} transform="translate(2.000000, 25.000000)">
      <HousingInsideHorizontalMargin transform="translate(0, 0)" />
      <HousingInsideHorizontalMargin transform="translate(404.500000, 383.000000) scale(1, -1) translate(-404.500000, -383.000000) translate(0.000000, 382.000000)" />
    </g>
  );
};

export default HousingInside;
