import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const ToneKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="23.2409446" labelPositionY="56" transform={transform}>
      Tone
    </Knob>
  );
};

ToneKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default ToneKnob;
