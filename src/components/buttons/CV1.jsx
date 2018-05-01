import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const CV1Button = () => (
  <g id="cv1-button">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="0.256569602" positionY="54">
        Step Length
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.580645, 0.000000)">
        <ButtonTitle positionX="10.296875" positionY="45">
          CV1
        </ButtonTitle>

        <Button transform="translate(8.148148, 16.000000)" variant="grey" />
        <Led transform="translate(11.148148, 0.000000)" variant="important" />
      </g>
    </g>

    <ButtonTitle positionX="20.1182528" positionY="7">
      1/C
    </ButtonTitle>
  </g>
);

export default CV1Button;
