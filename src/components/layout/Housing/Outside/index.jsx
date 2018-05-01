import HousingOutsideHorizontalMargin from './HorizontalMargin';
import HousingOutsideVerticalMargin from './VerticalMargin';
import React from 'react';

const HousingOutside = () => {
  const elementName = `HousingOutside`;

  return (
    <g id={elementName}>
      <HousingOutsideHorizontalMargin transform="translate(406.000000, 434.000000) scale(1, -1) translate(-406.000000, -434.000000) translate(1.000000, 433.000000)" />
      <HousingOutsideHorizontalMargin transform="translate(1.000000, 0.000000)" />

      <HousingOutsideVerticalMargin transform="translate(0, 0)" />
      <HousingOutsideVerticalMargin transform="translate(811.000000, 217.500000) scale(-1, 1) translate(-811.000000, -217.500000) translate(810.000000, 0.000000)" />
    </g>
  );
};

export default HousingOutside;
