import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';

const OHInstrument = () => (
  <g id="oh-instrument" transform="translate(381.000000, 0.000000)">
    <TextLabel positionX="2.06818182" positionY="7">
      OH
    </TextLabel>

    <DecayKnob instrument="oh" />
  </g>
);

export default OHInstrument;
