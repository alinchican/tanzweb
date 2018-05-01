import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const SnappyKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="19.2959872" labelPositionY="56" transform={transform}>
      Snappy
    </Knob>
  );
};

SnappyKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default SnappyKnob;
