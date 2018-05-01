import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const PitchKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="23.2807173" labelPositionY="56" transform={transform}>
      Pitch
    </Knob>
  );
};

PitchKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default PitchKnob;
