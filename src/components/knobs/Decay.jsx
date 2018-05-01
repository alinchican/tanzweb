import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const DecayKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="21.4238281" labelPositionY="56" transform={transform}>
      Decay
    </Knob>
  );
};

DecayKnob.propTypes = {
  transform: PropTypes.string
};

DecayKnob.defaultProps = {
  transform: null
};

export default DecayKnob;
