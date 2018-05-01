import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const HHButton = () => (
  <g id="hh-button" transform="translate(342.000000, 0.000000)">
    <g id="Button-led-label" transform="translate(6.000000, 10.000000)">
      <ButtonTitle positionX="6.08380682" positionY="54">
        Dump
      </ButtonTitle>

      <g id="Small-button" transform="translate(2.000000, 0.000000)">
        <ButtonTitle positionX="7.77272727" positionY="45">
          HH
        </ButtonTitle>

        <Button transform="translate(4.000000, 16.000000)" variant="grey" />
        <Led transform="translate(7.000000, 0.000000)" variant="important" />
      </g>
    </g>

    <ButtonTitle positionX="12.8913352" positionY="7">
      9/G#
    </ButtonTitle>
  </g>
);

export default HHButton;
