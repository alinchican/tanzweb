import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const ShuffleButton = () => (
  <g id="shuffle-button" transform="translate(0.000000, 32.000000)">
    <Led transform="translate(7.000000, 0.000000)" />
    <Button transform="translate(4.000000, 16.000000)" variant="black" />
    <ButtonTitle positionX="0.272727273" positionY="45">
      Shuffle
    </ButtonTitle>
  </g>
);

export default ShuffleButton;
