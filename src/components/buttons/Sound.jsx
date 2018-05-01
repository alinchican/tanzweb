import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const SoundButton = () => (
  <g id="sound-button" transform="translate(0.000000, 95.000000)">
    <Led transform="translate(24.111111, 0.000000)" />
    <Button transform="translate(21.111111, 16.000000)" variant="grey" />
    <ButtonTitle positionX="18.1988636" positionY="45">
      Sound
    </ButtonTitle>
  </g>
);

export default SoundButton;
