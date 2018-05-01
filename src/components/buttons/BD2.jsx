import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const BD2Button = () => (
  <g id="bd2-button" transform="translate(131.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="4.47798295" positionY="54">
        St Patt
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="5.95170455" positionY="45">
          BD2
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="12.9012784" positionY="7">
      4/D#
    </ButtonTitle>
  </g>
);

export default BD2Button;
