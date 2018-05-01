import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const SDecayKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="18.2855114" labelPositionY="56" transform={transform}>
      SDecay
    </Knob>
  );
};

SDecayKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default SDecayKnob;
