import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const SDButton = () => (
  <g id="sd-button" transform="translate(172.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="3.39790483" positionY="54">
        Clr Patt
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="8.32954545" positionY="45">
          SD
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="grey" />
        <Led transform="translate(7.000000, 0.000000)" variant="highlighted" />
      </g>
    </g>

    <ButtonTitle positionX="15.5250355" positionY="7">
      5/E
    </ButtonTitle>
  </g>
);

export default SDButton;
