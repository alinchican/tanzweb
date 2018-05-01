import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const TuneKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="23.2421875" labelPositionY="56" transform={transform}>
      Tune
    </Knob>
  );
};

TuneKnob.propTypes = {
  transform: PropTypes.string
};

TuneKnob.defaultProps = {
  transform: null
};

export default TuneKnob;
