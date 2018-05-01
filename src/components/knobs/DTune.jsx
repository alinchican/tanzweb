import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const DTuneKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="19.3432173" labelPositionY="56" transform={transform}>
      DTune
    </Knob>
  );
};

DTuneKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default DTuneKnob;
