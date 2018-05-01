import PropTypes from 'prop-types';
import React from 'react';

const HousingOutsideVerticalMargin = props => {
  const { transform } = props;
  const elementName = `HousingOutsideVerticalMargin`;

  return (
    <g id={elementName} transform={transform}>
      <rect
        fill="#000000"
        height="435"
        id={`${elementName}-border`}
        width="1"
        x="1"
        y="0"
      />

      <rect
        fill="#1D1D1D"
        height="435"
        id={`${elementName}-border-highlight`}
        width="1"
        x="0"
        y="0"
      />
    </g>
  );
};

HousingOutsideVerticalMargin.propTypes = {
  transform: PropTypes.string.isRequired
};

export default HousingOutsideVerticalMargin;
