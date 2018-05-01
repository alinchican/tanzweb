import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const BD1Button = () => (
  <g id="bd1-button" transform="translate(87.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="0.626065341" positionY="54">
        AB On/Off
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.193548, 0.000000)">
        <ButtonTitle positionX="8.00426136" positionY="45">
          BD1
        </ButtonTitle>

        <Button transform="translate(5.555556, 16.000000)" variant="black" />
        <Led transform="translate(8.555556, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="16.7317116" positionY="7">
      3/D
    </ButtonTitle>
  </g>
);

export default BD1Button;
