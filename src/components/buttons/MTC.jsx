import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const MTCButton = () => (
  <g id="mtc-button" transform="translate(510.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="7.49076705" positionY="54">
        Sync
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="4.88210227" positionY="45">
          MTC
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="grey" />
        <Led transform="translate(7.000000, 0.000000)" variant="highlighted" />
      </g>
    </g>

    <ButtonTitle positionX="13.550071" positionY="7">
      13/C
    </ButtonTitle>
  </g>
);

export default MTCButton;
