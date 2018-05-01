import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';

const HHInstrument = () => (
  <g id="hh-instrument" transform="translate(381.000000, 61.000000)">
    <TextLabel positionX="2.09801136" positionY="7">
      HH
    </TextLabel>

    <DecayKnob instrument="hh" transform="translate(0.000000, 3.000000)" />
  </g>
);

export default HHInstrument;
