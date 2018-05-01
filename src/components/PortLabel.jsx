import PropTypes from 'prop-types';
import React from 'react';

const PortLabel = props => {
  const { children } = props;
  return (
    <text
      fill="#FFFFFF"
      fontFamily="InterUI-Medium, Inter UI"
      fontSize="7"
      fontWeight="400"
      id="Label"
    >
      {children}
    </text>
  );
};

PortLabel.propTypes = {
  children: PropTypes.node.isRequired
};

export default PortLabel;
