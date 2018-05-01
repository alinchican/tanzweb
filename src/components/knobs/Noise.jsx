import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const NoiseKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="22.3535156" labelPositionY="56" transform={transform}>
      Noise
    </Knob>
  );
};

NoiseKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default NoiseKnob;
