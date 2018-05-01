import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const AttackKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionY="56" labelPositionX="20.9353693" transform={transform}>
      Attack
    </Knob>
  );
};

AttackKnob.propTypes = {
  transform: PropTypes.string
};

AttackKnob.defaultProps = {
  transform: null
};

export default AttackKnob;
