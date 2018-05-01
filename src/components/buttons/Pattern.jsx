import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const PatternButton = () => (
  <g id="pattern-button" transform="translate(0.000000, 287.000000)">
    <g id="Small-button" transform="translate(3.870968, 0.000000)">
      <Led transform="translate(19.962963, 0.000000)" />
      <Button transform="translate(16.962963, 16.000000)" variant="white" />
      <ButtonTitle positionX="12.3451705" positionY="45">
        Pattern
      </ButtonTitle>
    </g>

    <text
      fill="#FFFFFF"
      fontFamily="InterUI-Medium, Inter UI"
      fontSize="7"
      fontWeight="400"
      id="Label"
    >
      <tspan x="21.9721236" y="54">
        Bank
      </tspan>
    </text>
  </g>
);

export default PatternButton;
