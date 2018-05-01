import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const MAButton = () => (
  <g id="ma-button" transform="translate(636.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="5.95578835" positionY="54">
        Setup
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="7.47159091" positionY="45">
          MA
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="7.27965199" positionY="7">
      16/3.Oct
    </ButtonTitle>
  </g>
);

export default MAButton;
