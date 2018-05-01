import PropTypes from 'prop-types';
import React from 'react';

const HousingOutsideHorizontalMargin = props => {
  const elementName = `HousingOutsideHorizontalMargin`;
  const { transform } = props;
  return (
    <g id={elementName} transform={transform && transform}>
      <rect
        fill="#000000"
        height="1"
        id={`${elementName}-border`}
        width="810"
        x="0"
        y="1"
      />

      <rect
        fill="#1D1D1D"
        height="1"
        id={`${elementName}-border-highlight`}
        width="810"
        x="0"
        y="0"
      />
    </g>
  );
};

HousingOutsideHorizontalMargin.propTypes = {
  transform: PropTypes.string.isRequired
};

export default HousingOutsideHorizontalMargin;
