import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const SelectButton = () => (
  <g id="select-button" transform="translate(0.000000, 80.000000)">
    <Led transform="translate(7.000000, 0.000000)" />
    <Button transform="translate(4.000000, 16.000000)" variant="grey" />
    <ButtonTitle positionX="1.84232955" positionY="45">
      Select
    </ButtonTitle>
  </g>
);

export default SelectButton;
