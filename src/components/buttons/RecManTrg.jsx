import Button from '../Button';
import ButtonTitle from '../ButtonTitle';
import Led from '../Led';
import React from 'react';

const RecManTrgButton = props => {
  return (
    <g id="recmantrg-button">
      <Led transform="translate(24.111111, 0.000000)" />
      <g>
        <Button transform="translate(21.111111, 16.000000)" variant="red" />
      </g>
      <ButtonTitle positionX="7.18465909" positionY="45">
        Rec/ManTrg
      </ButtonTitle>
    </g>
  );
};

export default RecManTrgButton;
