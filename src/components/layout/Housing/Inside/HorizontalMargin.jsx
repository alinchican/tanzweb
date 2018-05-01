import PropTypes from 'prop-types';
import React from 'react';

const HousingInsideHorizontalMargin = props => {
  const elementName = `HousingInsideHorizontalMargin`;
  const { transform } = props;

  return (
    <g id={elementName} transform={transform && transform}>
      <rect
        fill="#000000"
        height="1"
        id={`${elementName}-border`}
        width="809"
        x="0"
        y="0"
      />

      <rect
        fill="#262626"
        height="1"
        id={`${elementName}-border-highlight`}
        width="809"
        x="0"
        y="1"
      />
    </g>
  );
};

HousingInsideHorizontalMargin.propTypes = {
  transform: PropTypes.string.isRequired
};

export default HousingInsideHorizontalMargin;
