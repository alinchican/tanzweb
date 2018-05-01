import Knob from '../Knob';
import PropTypes from 'prop-types';
import React from 'react';

const FilterKnob = props => {
  const { transform } = props;
  return (
    <Knob labelPositionX="23.2384588" labelPositionY="56" transform={transform}>
      Filter
    </Knob>
  );
};

FilterKnob.propTypes = {
  transform: PropTypes.string.isRequired
};

export default FilterKnob;
