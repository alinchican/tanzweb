import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const CPButton = () => (
  <g id="cp-button" transform="translate(426.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="0.111683239" positionY="54">
        Knob Rec
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="8.26420455" positionY="45">
          CP
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="11.7292259" positionY="7">
      11/A#
    </ButtonTitle>
  </g>
);

export default CPButton;
