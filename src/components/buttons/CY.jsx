import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const CYButton = () => (
  <g id="cy-button" transform="translate(257.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="6.90411932" positionY="54">
        Set B
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="8.22727273" positionY="45">
          CY
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="13.3648793" positionY="7">
      7/F#
    </ButtonTitle>
  </g>
);

export default CYButton;
