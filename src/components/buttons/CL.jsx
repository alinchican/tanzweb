import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const CLButton = () => (
  <g id="cl-button" transform="translate(383.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="2.51296165" positionY="54">
        Roll Rec
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="8.59943182" positionY="45">
          CL
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="13.4928977" positionY="7">
      10/A
    </ButtonTitle>
  </g>
);

export default CLButton;
