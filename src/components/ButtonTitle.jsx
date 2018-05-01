import PropTypes from 'prop-types';
import React from 'react';
import TextLabel from './TextLabel';

const ButtonTitle = props => {
  const { positionX, positionY, children } = props;
  return (
    <TextLabel positionX={positionX} positionY={positionY} size={8}>
      {children}
    </TextLabel>
  );
};

ButtonTitle.propTypes = {
  children: PropTypes.node.isRequired,
  positionX: PropTypes.string.isRequired,
  positionY: PropTypes.string.isRequired
};

export default ButtonTitle;
