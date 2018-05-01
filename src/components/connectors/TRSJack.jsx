import PropTypes from 'prop-types';
import React from 'react';

const TRSJack = props => {
  const elementName = `trsjack`;
  const { id, transform } = props;
  return (
    <g className={elementName} id={id} transform={transform}>
      <rect
        className={`${elementName}-connector`}
        fill="#000000"
        height="14"
        rx="3"
        width="47"
        x="0"
        y="-1.5"
      />

      <rect
        className={`${elementName}-connector-highlight`}
        fill="#2C2C2C"
        height="14.5384615"
        rx="3"
        width="22"
        x="13"
        y="-1.55769231"
      />
    </g>
  );
};

TRSJack.propTypes = {
  id: PropTypes.string.isRequired,
  transform: PropTypes.string
};

TRSJack.defaultProps = {
  transform: null
};

export default TRSJack;
