import Led from './Led';
import PropTypes from 'prop-types';
import React from 'react';
import TextLabel from './TextLabel';

const TomToggle = props => {
  const { transform } = props;
  return (
    <g className="Tom-toggle" transform={transform}>
      <TextLabel size={6} x="1" y="6">
        Tom
      </TextLabel>
      <Led transform="translate(0.000000, 8.000000)" />
    </g>
  );
};

TomToggle.propTypes = {
  transform: PropTypes.string.isRequired
};

export default TomToggle;
