import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const HTCButton = () => (
  <g id="htc-button" transform="translate(553.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="7.83504972" positionY="54">
        Gate
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="5.37357955" positionY="45">
          HTC
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="black" />
        <Led transform="translate(7.000000, 0.000000)" />
      </g>
    </g>

    <ButtonTitle positionX="7.61772017" positionY="7">
      14/1.Oct
    </ButtonTitle>
  </g>
);

export default HTCButton;
