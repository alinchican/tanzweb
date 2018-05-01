import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const ShiftButton = () => (
  <g id="shift-button" transform="translate(0.000000, 128.000000)">
    <Led transform="translate(7.000000, 0.000000)" />
    <Button transform="translate(4.000000, 16.000000)" variant="white" />
    <ButtonTitle positionX="4.86931818" positionY="45">
      Shift
    </ButtonTitle>
  </g>
);

export default ShiftButton;
