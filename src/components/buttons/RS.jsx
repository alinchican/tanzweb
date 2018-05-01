import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const RSButton = () => (
  <g id="rs-button" transform="translate(215.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="6.76740057" positionY="54">
        Set A
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="8.47301136" positionY="45">
          RS
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="15.5461648" positionY="7">
      6/F
    </ButtonTitle>
  </g>
);

export default RSButton;
