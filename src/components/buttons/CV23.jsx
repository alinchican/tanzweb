import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const CV23Button = () => (
  <g id="cv23-button" transform="translate(46.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="6.61328125" positionY="54">
        Scale
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="1.86221591" positionY="45">
          CV2/3
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="12.9398082" positionY="7">
      2/C#
    </ButtonTitle>
  </g>
);

export default CV23Button;
