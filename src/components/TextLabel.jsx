import PropTypes from 'prop-types';
import React from 'react';

const TextLabel = props => {
  const { size, positionX, positionY, children } = props;
  return (
    <text
      className="text-label"
      fill="#FFF"
      fontFamily="InterUI-Bold, Inter UI"
      fontSize={size}
      fontWeight="bold"
      x={positionX}
      y={positionY}
    >
      {children}
    </text>
  );
};

TextLabel.propTypes = {
  children: PropTypes.node.isRequired,
  positionX: PropTypes.string,
  positionY: PropTypes.string,
  size: PropTypes.number
};

TextLabel.defaultProps = {
  positionX: null,
  positionY: null,
  size: 7
};

export default TextLabel;
