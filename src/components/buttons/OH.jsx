import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const OHButton = () => (
  <g id="oh-button" transform="translate(299.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="6.72762784" positionY="54">
        Set C
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="7.77840909" positionY="45">
          OH
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="15.1347656" positionY="7">
      8/G
    </ButtonTitle>
  </g>
);

export default OHButton;
