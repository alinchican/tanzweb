import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const CBButton = () => (
  <g id="cb-button" transform="translate(592.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="1.25621449" positionY="54">
        Man/Step
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.193548, 0.000000)">
        <ButtonTitle positionX="9.76420455" positionY="45">
          CB
        </ButtonTitle>

        <Button transform="translate(5.555556, 16.000000)" variant="black" />
        <Led transform="translate(8.555556, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="8.76970881" positionY="7">
      15/2.Oct
    </ButtonTitle>
  </g>
);

export default CBButton;
